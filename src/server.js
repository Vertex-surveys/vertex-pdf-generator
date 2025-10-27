const express = require('express');
const puppeteer = require('puppeteer');
const sharp = require('sharp');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const { transformFulcrumData } = require('./data-transformer');
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
    console.log('Request body type:', typeof req.body);
    console.log('Request body:', JSON.stringify(req.body, null, 2));
    
    // Accept both Make.com webhook bundle AND structured data
    const webhookData = req.body;
    
    // Try to detect if this is webhook format or structured format
    const isWebhookFormat = webhookData.form_values || webhookData.records?.[0];
    
    if (isWebhookFormat) {
      console.log('📦 Detected webhook bundle format');
      // This is from Fulcrum webhook - transform it
      const transformedData = await transformFulcrumData(webhookData);
      
      // Generate PDF
      console.log('📄 Starting PDF generation...');
      const pdfBuffer = await generatePDF(transformedData);
      
      console.log('✅ PDF generated successfully');
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="solar-assessment.pdf"');
      res.send(pdfBuffer);
    } else {
      console.log('📋 Detected structured data format');
      // This is already structured - use directly
      const data = webhookData;
    
    // Validate required data
    if (!data.property || !data.property.address) {
      return res.status(400).json({ 
        error: 'Missing required property data',
          received: Object.keys(req.body),
          note: 'Expected: { property: { address: "..." } }'
        });
      }
      
      // Transform data for template
      console.log('🔄 Transforming data for template...');
      const transformedData = await transformFulcrumData(data);
      
      // Generate PDF
      console.log('📄 Starting PDF generation...');
      const pdfBuffer = await generatePDF(transformedData);
      
      console.log('✅ PDF generated successfully');
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="solar-assessment.pdf"');
      res.send(pdfBuffer);
    }
    
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
  console.log('🚀 Launching Puppeteer browser...');
  
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--disable-gpu',
      '--disable-features=VizDisplayCompositor',
      '--disable-software-rasterizer',
      '--disable-background-networking',
      '--disable-background-timer-throttling',
      '--disable-renderer-backgrounding',
      '--disable-backgrounding-occluded-windows',
      '--disable-ipc-flooding-protection'
    ],
    timeout: 60000 // 60 second timeout
  });
  
  const page = await browser.newPage();
  
  // Set viewport for consistent rendering
  await page.setViewport({ 
    width: 1200, 
    height: 800, 
    deviceScaleFactor: 2 
  });
  
  console.log('📝 Loading HTML content...');
  // Load the HTML template with increased timeout
  const html = await generateHTML(data);
  await page.setContent(html, { 
    waitUntil: 'networkidle0',
    timeout: 60000 // 60 second timeout
  });
  
  console.log('✅ HTML content loaded');
  
  console.log('📄 Generating PDF...');
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
    preferCSSPageSize: true,
    timeout: 60000 // 60 second timeout
  });
  
  console.log('✅ PDF generated, closing browser');
  
  await browser.close();
  return pdf;
}

// Generate HTML template using EJS
async function generateHTML(data) {
  console.log('📄 Rendering EJS template...');
  
  try {
    // Load EJS template
    const templatePath = path.join(__dirname, 'templates', 'main.ejs');
    const template = fs.readFileSync(templatePath, 'utf8');
    
    // Render template with data
    const html = ejs.render(template, { data });
    
    console.log('✅ Template rendered successfully');
    return html;
  } catch (error) {
    console.error('❌ Template rendering failed:', error);
    throw error;
  }
}

// Header Template for PDF
async function generateHeaderTemplate(data) {
  return `
    <div style="font-size: 10pt; color: #FFD700; text-align: center; width: 100%; padding: 10px; background: linear-gradient(135deg, #1E293B 0%, #334155 50%, #475569 100%);">
      <strong>VERTEX RENEWABLE SURVEYS</strong> - Professional Heat Pump Assessment
    </div>
  `;
}

// Footer Template for PDF  
async function generateFooterTemplate(data) {
  return `
    <div style="font-size: 10pt; color: #FFD700; text-align: center; width: 100%; padding: 10px; background: linear-gradient(135deg, #1E293B 0%, #334155 50%, #475569 100%);">
      Page <span class="pageNumber"></span> of <span class="totalPages"></span> | 
      Generated: ${new Date().toLocaleDateString('en-GB')} | 
      Survey ID: ${data?.survey?.id || 'N/A'}
    </div>
  `;
}

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Vertex PDF Generator running on port ${PORT}`);
  console.log(`📄 Health check: http://localhost:${PORT}/health`);
  console.log(`🧪 Test PDF: http://localhost:${PORT}/api/test-pdf`);
  console.log(`📊 Generate PDF: POST http://localhost:${PORT}/api/generate-pdf`);
});

module.exports = app;


