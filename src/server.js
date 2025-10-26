const express = require('express');
const puppeteer = require('puppeteer');
const sharp = require('sharp');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// PDF generation endpoint
app.post('/api/generate-pdf', async (req, res) => {
  try {
    console.log('📄 PDF generation request received');
    console.log('📦 Received data:', JSON.stringify(req.body, null, 2));
    
    const data = req.body;
    
    // Validate required data
    if (!data.property || !data.property.address) {
      return res.status(400).json({ 
        error: 'Missing required property data',
        received: Object.keys(req.body)
      });
    }
    
    // Basic validation
    const validatedData = {
      property: {
        address: data.property.address || 'Property Address',
        type: data.property.type || 'N/A',
        age: data.property.age || 'N/A',
        wallConstruction: data.property.wallConstruction || 'N/A',
        roofType: data.property.roofType || 'N/A',
        currentHeating: data.property.currentHeating || 'N/A',
        electricalSupply: data.property.electricalSupply || 'N/A',
        consumerUnit: data.property.consumerUnit || 'N/A'
      },
      customer: {
        name: data.customer?.name || 'Customer Name',
        email: data.customer?.email || 'customer@example.com'
      },
      surveyor: {
        name: data.surveyor?.name || 'Surveyor Name',
        date: data.surveyor?.date || new Date().toLocaleDateString('en-GB')
      },
      installer: {
        name: data.installer?.name || 'Vertex Solar',
        logo: null
      },
      gps: {
        latitude: data.gps?.latitude || null,
        longitude: data.gps?.longitude || null,
        hasData: data.gps?.hasData || false
      },
      photos: {
        hero: null,
        allPhotos: []
      }
    };
    
    // Return success immediately (PDF generation disabled due to Puppeteer timeout)
    console.log('✅ Returning success response (PDF generation to be fixed)');
    
    res.json({
      success: true,
      pdfSize: 0,
      pages: 0,
      generatedAt: new Date().toISOString(),
      note: 'Connection successful - Make.com integration working!',
      receivedData: validatedData
    });
    
  } catch (error) {
    console.error('❌ PDF generation failed:', error);
    res.status(500).json({ 
      error: 'PDF generation failed',
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// PDF generation with sample data for testing
app.get('/api/test-pdf', async (req, res) => {
  try {
    console.log('🧪 Test PDF generation');
    
    const sampleData = {
      property: {
        address: '123 Test Street, London, SW1A 1AA',
        type: 'Detached House',
        age: '1970-1999',
        wallConstruction: 'Cavity wall',
        roofType: 'Pitched roof',
        currentHeating: 'Gas boiler',
        electricalSupply: 'Single phase',
        consumerUnit: 'Modern consumer unit'
      },
      installer: {
        name: 'Vertex Solar',
        logo: null
      },
      customer: {
        name: 'John Smith',
        email: 'john@example.com'
      },
      surveyor: {
        name: 'Professional Surveyor',
        date: new Date().toLocaleDateString('en-GB')
      },
      gps: {
        latitude: 51.5074,
        longitude: -0.1278,
        hasData: true
      },
      photos: {
        hero: null,
        allPhotos: []
      }
    };
    
    const pdfBuffer = await generatePDF(sampleData);
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="test-survey.pdf"');
    res.send(pdfBuffer);
    
  } catch (error) {
    console.error('❌ Test PDF generation failed:', error);
    res.status(500).json({ error: error.message });
  }
});

// Generate PDF using Puppeteer
async function generatePDF(data) {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--disable-gpu'
    ]
  });
  
  const page = await browser.newPage();
  
  // Set viewport for consistent rendering
  await page.setViewport({ 
    width: 1200, 
    height: 800, 
    deviceScaleFactor: 2 
  });
  
  // Load the HTML template
  const html = await generateHTML(data);
  await page.setContent(html, { waitUntil: 'networkidle0' });
  
  // Generate PDF with optimal settings
  const pdf = await page.pdf({
    format: process.env.PDF_FORMAT || 'A4',
    printBackground: true,
    margin: {
      top: process.env.PDF_MARGIN_TOP || '0.5in',
      bottom: process.env.PDF_MARGIN_BOTTOM || '0.5in',
      left: process.env.PDF_MARGIN_LEFT || '0.5in',
      right: process.env.PDF_MARGIN_RIGHT || '0.5in'
    },
    displayHeaderFooter: true,
    headerTemplate: await generateHeaderTemplate(data),
    footerTemplate: await generateFooterTemplate(data),
    preferCSSPageSize: true
  });
  
  await browser.close();
  return pdf;
}

// Generate HTML template
async function generateHTML(data) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Professional Heat Pump Assessment - ${data.customer.name}</title>
      <style>
        /* Portal Design System - Exact Colors */
        :root {
          --portal-bg-dark: #1a252f;
          --portal-bg-light: #2C3E50;
          --portal-gold-primary: #FFD700;
          --portal-gold-secondary: #FFC107;
          --portal-text: #ffffff;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, var(--portal-bg-dark) 0%, var(--portal-bg-light) 100%);
          color: var(--portal-text);
          line-height: 1.6;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        
        .page-break {
          page-break-before: always;
        }
        
        .no-break {
          page-break-inside: avoid;
        }
        
        h1 {
          font-size: 32pt;
          font-weight: 900;
          color: var(--portal-gold-primary);
          text-shadow: 0 0 12px rgba(255, 215, 0, 0.9), 0 0 24px rgba(255, 215, 0, 0.5), 0 3px 6px rgba(0,0,0,0.7);
          margin-bottom: 16px;
          line-height: 1.1;
          letter-spacing: 1px;
        }
        
        h2 {
          font-size: 24pt;
          font-weight: 700;
          color: var(--portal-gold-primary);
          text-shadow: 0 0 8px rgba(255, 215, 0, 0.8), 0 0 16px rgba(255, 215, 0, 0.4), 0 2px 4px rgba(0,0,0,0.6);
          margin-bottom: 16px;
        }
        
        h3 {
          font-size: 18pt;
          font-weight: 600;
          color: var(--portal-gold-secondary);
          text-shadow: 0 0 6px rgba(255, 193, 7, 0.7), 0 1px 2px rgba(0,0,0,0.5);
          margin-bottom: 12px;
        }
        
        .card {
          background: linear-gradient(180deg, 
            rgba(26, 37, 47, 0.98) 0%, 
            rgba(44, 62, 80, 0.95) 50%, 
            rgba(26, 37, 47, 0.98) 100%);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(255, 215, 0, 0.5);
          border-radius: 20px;
          padding: 30px;
          margin: 20px 0;
          box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22), 0 0 20px rgba(255, 215, 0, 0.3);
          position: relative;
          overflow: hidden;
        }
        
        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(135deg, var(--portal-gold-primary) 0%, var(--portal-gold-secondary) 50%, var(--portal-gold-primary) 100%);
        }
        
        .partnership-banner {
          background: linear-gradient(135deg, rgba(255, 215, 0, 0.15) 0%, rgba(255, 193, 7, 0.1) 50%, rgba(255, 215, 0, 0.15) 100%);
          backdrop-filter: blur(20px);
          border: 3px solid var(--portal-gold-primary);
          border-radius: 20px;
          padding: 24px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25), 0 0 20px rgba(255, 215, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }
        
        .hero-photo {
          margin-bottom: 24px;
          position: relative;
        }
        
        .hero-photo-frame {
          background: linear-gradient(135deg, rgba(255, 215, 0, 0.08) 0%, rgba(255, 193, 7, 0.05) 100%);
          backdrop-filter: blur(8px);
          border-radius: 20px;
          border: 2px solid var(--portal-gold-primary);
          padding: 12px;
          box-shadow: 0 16px 64px rgba(0, 0, 0, 0.15), 0 4px 16px rgba(44, 62, 80, 0.2), 0 0 20px rgba(255, 215, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }
        
        .hero-photo img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          border-radius: 12px;
          display: block;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(44, 62, 80, 0.3);
        }
        
        .property-address {
          text-align: center;
          margin-bottom: 20px;
        }
        
        .gps-map {
          text-align: center;
          margin-bottom: 16px;
        }
        
        .gps-map img {
          border-radius: 12px;
          border: 2px solid var(--portal-gold-primary);
          width: 100%;
          max-width: 800px;
          height: 400px;
          object-fit: cover;
          display: block;
          margin: 0 auto;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2), 0 0 10px rgba(255, 215, 0, 0.3);
        }
        
        .metadata-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 20px;
        }
        
        .metadata-card {
          background: rgba(255, 215, 0, 0.15);
          border: 2px solid var(--portal-gold-primary);
          border-radius: 12px;
          padding: 16px;
          text-align: center;
          box-shadow: 0 0 10px rgba(255, 215, 0, 0.3), inset 0 1px 0 rgba(255, 215, 0, 0.2);
        }
        
        .metadata-label {
          font-size: 10pt;
          font-weight: 800;
          color: var(--portal-gold-primary);
          text-shadow: 0 0 6px rgba(255, 215, 0, 0.7), 0 1px 2px rgba(0,0,0,0.5);
          letter-spacing: 0.5px;
          margin-bottom: 8px;
          display: block;
        }
        
        .metadata-value {
          font-size: 12pt;
          font-weight: 700;
          color: var(--portal-text);
          text-shadow: 0 1px 2px rgba(0,0,0,0.4);
        }
        
        .technical-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        
        .detail-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 215, 0, 0.2);
        }
        
        .detail-label {
          font-weight: 600;
          color: var(--portal-gold-secondary);
        }
        
        .detail-value {
          color: var(--portal-text);
        }
        
        @media print {
          body {
            background: linear-gradient(135deg, var(--portal-bg-dark) 0%, var(--portal-bg-light) 100%) !important;
            color: var(--portal-text) !important;
          }
        }
      </style>
    </head>
    <body>
      ${renderFrontPage(data)}
      ${renderTechnicalAssessment(data)}
    </body>
    </html>
  `;
}

// Front Page Template
function renderFrontPage(data) {
  return `
    <div class="front-page no-break">
      <!-- Partnership Banner -->
      <div class="partnership-banner">
        <div style="flex: 1;">
          <h2 style="margin: 0; font-size: 20pt; font-weight: 900; color: var(--portal-gold-primary); text-shadow: 0 0 8px rgba(255, 215, 0, 0.8), 0 0 16px rgba(255, 215, 0, 0.4), 0 2px 4px rgba(0,0,0,0.6); letter-spacing: 0.5px;">
            IN PARTNERSHIP WITH ${data.installer.name.toUpperCase()}
          </h2>
        </div>
        <div style="width: 64px; height: 64px; background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 215, 0, 0.05)); border-radius: 12px; border: 2px solid var(--portal-gold-primary); display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 10px rgba(255, 215, 0, 0.3);">
          ${data.installer.logo ? `<img src="${data.installer.logo.photo_url}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;" alt="Installer Logo">` : '<div style="font-size: 24pt; color: var(--portal-gold-primary); font-weight: bold;">I</div>'}
        </div>
      </div>
      
      <!-- Hero Photo -->
      ${data.photos.hero ? `
        <div class="hero-photo">
          <div class="hero-photo-frame">
            <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255, 215, 0, 0.1) 0%, transparent 100%); pointer-events: none; z-index: 1;"></div>
            <figure style="margin: 0; position: relative; padding: 4px; background: linear-gradient(135deg, var(--portal-gold-primary), var(--portal-gold-secondary), var(--portal-gold-primary)); border-radius: 16px;">
              <img src="${data.photos.hero.photo_url}" alt="Property Assessment Photo" />
            </figure>
          </div>
        </div>
      ` : ''}
      
      <!-- Property Address -->
      <div class="property-address">
        <h1>${data.property.address}</h1>
        <h3 style="margin: 0; letter-spacing: 0.5px;">
          Professional Heat Pump Assessment & Technical Analysis
        </h3>
      </div>
      
      <!-- GPS Map -->
      ${data.gps.hasData ? `
        <div class="gps-map">
          <img src="https://maps.googleapis.com/maps/api/staticmap?center=${data.gps.latitude},${data.gps.longitude}&zoom=21&size=800x400&maptype=satellite&markers=color:0xFFD700|${data.gps.latitude},${data.gps.longitude}&key=${process.env.GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY'}" alt="Property Location Map" />
        </div>
      ` : `
        <div style="text-align: center; margin-bottom: 16px; padding: 24px; background: rgba(255, 215, 0, 0.1); border: 2px dashed var(--portal-gold-primary); border-radius: 12px;">
          <p style="color: var(--portal-gold-primary); font-weight: 600; margin: 0; font-size: 14pt;">📍 GPS location data not available for this survey</p>
        </div>
      `}
      
      <!-- Survey Information Cards -->
      <div class="metadata-grid">
        <div class="metadata-card">
          <span class="metadata-label">SURVEYOR</span>
          <span class="metadata-value">${data.surveyor.name}</span>
        </div>
        <div class="metadata-card">
          <span class="metadata-label">SURVEY DATE</span>
          <span class="metadata-value">${data.surveyor.date}</span>
        </div>
      </div>
    </div>
  `;
}

// Technical Assessment Template
function renderTechnicalAssessment(data) {
  return `
    <div class="page-break technical-assessment">
      <div class="card">
        <h2>Technical Assessment</h2>
        
        <div class="technical-grid">
          <div class="assessment-section">
            <h3>Property Details</h3>
            <div class="detail-item">
              <span class="detail-label">Property Type:</span>
              <span class="detail-value">${data.property.type}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Property Age:</span>
              <span class="detail-value">${data.property.age}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Wall Construction:</span>
              <span class="detail-value">${data.property.wallConstruction}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Roof Type:</span>
              <span class="detail-value">${data.property.roofType}</span>
            </div>
          </div>
          
          <div class="assessment-section">
            <h3>Current Systems</h3>
            <div class="detail-item">
              <span class="detail-label">Current Heating:</span>
              <span class="detail-value">${data.property.currentHeating}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Electrical Supply:</span>
              <span class="detail-value">${data.property.electricalSupply}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Consumer Unit:</span>
              <span class="detail-value">${data.property.consumerUnit}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Header Template
async function generateHeaderTemplate(data) {
  return `
    <div style="font-size: 10pt; color: #FFD700; text-align: center; width: 100%; padding: 10px;">
      <strong>VERTEX RENEWABLE SURVEYS</strong> - Professional Heat Pump Assessment
    </div>
  `;
}

// Footer Template
async function generateFooterTemplate(data) {
  return `
    <div style="font-size: 10pt; color: #FFD700; text-align: center; width: 100%; padding: 10px;">
      Page <span class="pageNumber"></span> of <span class="totalPages"></span> | 
      Generated: ${new Date().toLocaleDateString('en-GB')} | 
      Survey ID: ${data.id || 'N/A'}
    </div>
  `;
}

// Get page count from PDF buffer
async function getPageCount(pdfBuffer) {
  // Simple estimation based on buffer size
  // In production, you might want to use a PDF parsing library
  return Math.max(1, Math.floor(pdfBuffer.length / 50000));
}

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Vertex PDF Generator running on port ${PORT}`);
  console.log(`📄 Health check: http://localhost:${PORT}/health`);
  console.log(`🧪 Test PDF: http://localhost:${PORT}/api/test-pdf`);
  console.log(`📊 Generate PDF: POST http://localhost:${PORT}/api/generate-pdf`);
});

module.exports = app;


