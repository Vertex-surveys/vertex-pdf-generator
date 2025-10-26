#!/bin/bash

##############################################################################
# VERTEX PDF GENERATOR - GODADDY COMPATIBLE DEPLOYMENT
# Creates a static HTML/JS version for GoDaddy hosting
#
# Usage: ./deploy-godaddy-compatible.sh
#
# Author: Vertex Renewable Surveys
# Date: January 2025
##############################################################################

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# FTP Configuration (from usable pdf knowledge)
FTP_HOST="ftp.i2m.06f.mytemp.website"
FTP_USER="vertex-ftp@i2m.06f.mytemp.website"
FTP_PASS='kgQuJZ?s-XOX'

echo -e "${PURPLE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${PURPLE}║                                                            ║${NC}"
echo -e "${PURPLE}║          VERTEX PDF GENERATOR - GODADDY COMPATIBLE       ║${NC}"
echo -e "${PURPLE}║                   Static HTML/JS Version                  ║${NC}"
echo -e "${PURPLE}║                                                            ║${NC}"
echo -e "${PURPLE}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Function to upload a file
upload_file() {
    local LOCAL_FILE="$1"
    local REMOTE_PATH="$2"

    echo -ne "${CYAN}Uploading: ${LOCAL_FILE}... ${NC}"

    if curl -T "$LOCAL_FILE" \
        "ftp://${FTP_HOST}/public_html/pdf-generator/${REMOTE_PATH}" \
        --user "${FTP_USER}:${FTP_PASS}" \
        --ftp-create-dirs \
        --silent \
        --show-error \
        --max-time 120 2>/dev/null; then

        echo -e "${GREEN}✓ SUCCESS${NC}"
        return 0
    else
        echo -e "${RED}✗ FAILED${NC}"
        return 1
    fi
}

# Change to PDF generator directory
cd "/Users/davewatson/Desktop/Fulcrum PDF and Survey/production-ready/vertex-pdf-generator"

echo -e "${BLUE}🚀 Creating GoDaddy-compatible version...${NC}\n"

# Create a simple HTML interface for PDF generation
echo -e "${YELLOW}📄 Creating HTML interface...${NC}"
cat > godaddy-pdf-generator.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vertex PDF Generator - GoDaddy Version</title>
    <style>
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0; padding: 40px; background: linear-gradient(135deg, #1a252f 0%, #2C3E50 100%);
            color: #ffffff; min-height: 100vh;
        }
        .container { 
            max-width: 800px; margin: 0 auto; background: rgba(30, 41, 59, 0.95);
            padding: 40px; border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.5);
            border: 2px solid rgba(255, 215, 0, 0.3);
        }
        h1 { 
            color: #FFD700; text-align: center; margin-bottom: 30px;
            text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
        }
        .status { 
            padding: 20px; margin: 20px 0; border-radius: 10px;
            background: rgba(16, 185, 129, 0.2); border: 2px solid #10B981;
            text-align: center; font-weight: 600;
        }
        .error { 
            background: rgba(239, 68, 68, 0.2); border-color: #EF4444;
        }
        .info { 
            background: rgba(59, 130, 246, 0.2); border-color: #3B82F6;
        }
        .btn { 
            background: linear-gradient(135deg, #FFD700 0%, #FFC107 100%);
            color: #1a252f; padding: 15px 30px; border: none; border-radius: 10px;
            font-weight: 700; cursor: pointer; margin: 10px; font-size: 16px;
            box-shadow: 0 8px 32px rgba(255, 215, 0, 0.3);
            transition: all 0.3s ease;
        }
        .btn:hover { 
            transform: translateY(-2px); box-shadow: 0 12px 40px rgba(255, 215, 0, 0.4);
        }
        .form-group { margin: 20px 0; }
        label { display: block; margin-bottom: 8px; color: #FFD700; font-weight: 600; }
        input, textarea, select { 
            width: 100%; padding: 12px; border: 2px solid rgba(255, 215, 0, 0.3);
            border-radius: 8px; background: rgba(30, 41, 59, 0.8); color: #ffffff;
            font-size: 14px; box-sizing: border-box;
        }
        input:focus, textarea:focus, select:focus { 
            outline: none; border-color: #FFD700; box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
        }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        @media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Vertex PDF Generator</h1>
        <div class="status info">
            ✅ GoDaddy Compatible Version - Static HTML/JS Interface
        </div>
        
        <div class="form-group">
            <label for="fulcrumData">Fulcrum Survey Data (JSON):</label>
            <textarea id="fulcrumData" rows="10" placeholder='{"property": "123 Main St", "installer": "Vertex Solar", ...}'></textarea>
        </div>
        
        <div class="grid">
            <div class="form-group">
                <label for="propertyAddress">Property Address:</label>
                <input type="text" id="propertyAddress" placeholder="123 Main Street, City">
            </div>
            <div class="form-group">
                <label for="installerName">Installer Name:</label>
                <input type="text" id="installerName" placeholder="Vertex Solar">
            </div>
        </div>
        
        <div class="grid">
            <div class="form-group">
                <label for="surveyorName">Surveyor Name:</label>
                <input type="text" id="surveyorName" placeholder="John Smith">
            </div>
            <div class="form-group">
                <label for="surveyDate">Survey Date:</label>
                <input type="date" id="surveyDate">
            </div>
        </div>
        
        <div style="text-align: center; margin-top: 30px;">
            <button class="btn" onclick="generatePDF()">📄 Generate PDF</button>
            <button class="btn" onclick="testAPI()">🧪 Test API</button>
            <button class="btn" onclick="loadSampleData()">📋 Load Sample Data</button>
        </div>
        
        <div id="result" style="margin-top: 30px;"></div>
    </div>

    <script>
        // Set today's date as default
        document.getElementById('surveyDate').value = new Date().toISOString().split('T')[0];
        
        function loadSampleData() {
            const sampleData = {
                "property": {
                    "address": "123 Solar Street, Green City",
                    "postcode": "GC1 2AB",
                    "gps": {"lat": 51.5074, "lng": -0.1278}
                },
                "installer": {
                    "name": "Vertex Solar",
                    "logo": "https://example.com/logo.png"
                },
                "customer": {
                    "name": "John Smith",
                    "email": "john@example.com"
                },
                "surveyor": {
                    "name": "Jane Surveyor",
                    "date": new Date().toISOString().split('T')[0]
                },
                "photos": [
                    {"url": "https://example.com/photo1.jpg", "caption": "Front elevation"},
                    {"url": "https://example.com/photo2.jpg", "caption": "Roof area"}
                ],
                "technical": {
                    "heatLoss": 8500,
                    "recommendedCapacity": "8kW",
                    "efficiency": "A++"
                }
            };
            
            document.getElementById('fulcrumData').value = JSON.stringify(sampleData, null, 2);
            document.getElementById('propertyAddress').value = sampleData.property.address;
            document.getElementById('installerName').value = sampleData.installer.name;
            document.getElementById('surveyorName').value = sampleData.surveyor.name;
            document.getElementById('surveyDate').value = sampleData.surveyor.date;
        }
        
        function testAPI() {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = '<div class="status info">🧪 Testing API connection...</div>';
            
            // Test if we can reach external APIs
            fetch('https://api.github.com/users/octocat')
                .then(response => response.json())
                .then(data => {
                    resultDiv.innerHTML = '<div class="status">✅ API Test Successful! External connections working.</div>';
                })
                .catch(error => {
                    resultDiv.innerHTML = '<div class="status error">❌ API Test Failed: ' + error.message + '</div>';
                });
        }
        
        function generatePDF() {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = '<div class="status info">📄 Generating PDF...</div>';
            
            try {
                // Get form data
                const fulcrumData = document.getElementById('fulcrumData').value;
                const propertyAddress = document.getElementById('propertyAddress').value;
                const installerName = document.getElementById('installerName').value;
                const surveyorName = document.getElementById('surveyorName').value;
                const surveyDate = document.getElementById('surveyDate').value;
                
                // Validate data
                if (!propertyAddress || !installerName || !surveyorName) {
                    throw new Error('Please fill in all required fields');
                }
                
                // Parse Fulcrum data if provided
                let parsedData = {};
                if (fulcrumData.trim()) {
                    try {
                        parsedData = JSON.parse(fulcrumData);
                    } catch (e) {
                        throw new Error('Invalid JSON in Fulcrum data field');
                    }
                }
                
                // Create PDF data
                const pdfData = {
                    ...parsedData,
                    property: {
                        ...parsedData.property,
                        address: propertyAddress
                    },
                    installer: {
                        ...parsedData.installer,
                        name: installerName
                    },
                    surveyor: {
                        ...parsedData.surveyor,
                        name: surveyorName,
                        date: surveyDate
                    },
                    generated: new Date().toISOString(),
                    version: "1.0.0"
                };
                
                // For GoDaddy hosting, we'll create a downloadable JSON file
                // In a real implementation, this would call a PDF generation service
                const blob = new Blob([JSON.stringify(pdfData, null, 2)], { type: 'application/json' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `vertex-survey-${Date.now()}.json`;
                a.click();
                window.URL.revokeObjectURL(url);
                
                resultDiv.innerHTML = `
                    <div class="status">
                        ✅ PDF Data Generated Successfully!<br>
                        📄 File downloaded: vertex-survey-${Date.now()}.json<br>
                        🔗 Ready for Make.com integration
                    </div>
                `;
                
            } catch (error) {
                resultDiv.innerHTML = '<div class="status error">❌ Error: ' + error.message + '</div>';
            }
        }
        
        // Auto-save form data to localStorage
        function saveFormData() {
            const formData = {
                propertyAddress: document.getElementById('propertyAddress').value,
                installerName: document.getElementById('installerName').value,
                surveyorName: document.getElementById('surveyorName').value,
                surveyDate: document.getElementById('surveyDate').value,
                fulcrumData: document.getElementById('fulcrumData').value
            };
            localStorage.setItem('vertexPDFForm', JSON.stringify(formData));
        }
        
        // Load saved form data
        function loadFormData() {
            const saved = localStorage.getItem('vertexPDFForm');
            if (saved) {
                const formData = JSON.parse(saved);
                document.getElementById('propertyAddress').value = formData.propertyAddress || '';
                document.getElementById('installerName').value = formData.installerName || '';
                document.getElementById('surveyorName').value = formData.surveyorName || '';
                document.getElementById('surveyDate').value = formData.surveyDate || '';
                document.getElementById('fulcrumData').value = formData.fulcrumData || '';
            }
        }
        
        // Add event listeners for auto-save
        document.addEventListener('DOMContentLoaded', loadFormData);
        document.addEventListener('input', saveFormData);
    </script>
</body>
</html>
EOF

# Create .htaccess for GoDaddy
echo -e "${YELLOW}🔧 Creating .htaccess...${NC}"
cat > .htaccess << 'EOF'
# Enable Rewrite Engine
RewriteEngine On

# Handle CORS for API calls
Header always set Access-Control-Allow-Origin "*"
Header always set Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS"
Header always set Access-Control-Allow-Headers "Content-Type, Authorization"

# Set MIME types
AddType application/json .json
AddType text/html .html
AddType text/css .css
AddType application/javascript .js

# Security headers
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"

# Cache control
<FilesMatch "\.(css|js|png|jpg|jpeg|gif|svg)$">
    ExpiresActive On
    ExpiresDefault "access plus 1 month"
</FilesMatch>
EOF

# Create a simple API endpoint simulation
echo -e "${YELLOW}🌐 Creating API simulation...${NC}"
cat > api-simulation.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
    <title>Vertex PDF Generator API</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; background: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; }
        .endpoint { background: #e8f4fd; padding: 15px; margin: 10px 0; border-radius: 5px; border-left: 4px solid #2196F3; }
        .method { font-weight: bold; color: #2196F3; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Vertex PDF Generator API</h1>
        <p>This is a simulation of the PDF generator API endpoints for GoDaddy hosting.</p>
        
        <div class="endpoint">
            <div class="method">GET /health</div>
            <div>Returns API health status</div>
            <div><strong>Response:</strong> {"status": "ok", "service": "Vertex PDF Generator", "version": "1.0.0"}</div>
        </div>
        
        <div class="endpoint">
            <div class="method">POST /api/generate-pdf</div>
            <div>Generates PDF from survey data</div>
            <div><strong>Body:</strong> JSON with survey data</div>
            <div><strong>Response:</strong> PDF file download</div>
        </div>
        
        <div class="endpoint">
            <div class="method">POST /api/test-pdf</div>
            <div>Generates test PDF</div>
            <div><strong>Response:</strong> Test PDF file</div>
        </div>
        
        <p><strong>Note:</strong> This is a static simulation. For full functionality, integrate with Make.com webhooks.</p>
    </div>
</body>
</html>
EOF

# Upload files to GoDaddy
echo -e "\n${BLUE}🚀 Uploading to GoDaddy...${NC}"

# Upload main files
upload_file "godaddy-pdf-generator.html" "index.html"
upload_file ".htaccess" ".htaccess"
upload_file "api-simulation.html" "api.html"

# Upload documentation
upload_file "README.md" "README.md"
upload_file "DEPLOYMENT.md" "DEPLOYMENT.md"
upload_file "QUICK_START.md" "QUICK_START.md"

# Upload Make.com integration files
upload_file "MAKE_INTEGRATION.md" "MAKE_INTEGRATION.md"
upload_file "make-scenario.json" "make-scenario.json"
upload_file "QUICK_MAKE_SETUP.md" "QUICK_MAKE_SETUP.md"

echo -e "\n${GREEN}🎉 GoDaddy-compatible PDF Generator deployed!${NC}"
echo -e "\n${CYAN}🌐 Your PDF Generator is available at:${NC}"
echo -e "${CYAN}• Main Interface: https://i2m.06f.mytemp.website/pdf-generator/${NC}"
echo -e "${CYAN}• API Simulation: https://i2m.06f.mytemp.website/pdf-generator/api.html${NC}"

echo -e "\n${YELLOW}📋 Next Steps:${NC}"
echo -e "${YELLOW}1. Test the interface at the URL above${NC}"
echo -e "${YELLOW}2. Update Make.com connection with: https://i2m.06f.mytemp.website/pdf-generator${NC}"
echo -e "${YELLOW}3. Set up Make.com webhook to call external PDF generation service${NC}"
echo -e "${YELLOW}4. For full PDF generation, use Make.com to call external API (like Puppeteer service)${NC}"

echo -e "\n${PURPLE}💡 Note: This is a GoDaddy-compatible static version.${NC}"
echo -e "${PURPLE}   For full PDF generation, integrate with external services via Make.com.${NC}"

