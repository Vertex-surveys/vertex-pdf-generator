#!/bin/bash

##############################################################################
# VERTEX PDF GENERATOR - SIMPLE GODADDY UPLOAD
# Simple file upload to GoDaddy using correct path format
#
# Usage: ./simple-upload.sh
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

# FTP Configuration
FTP_HOST="ftp.i2m.06f.mytemp.website"
FTP_USER="vertex-ftp@i2m.06f.mytemp.website"
FTP_PASS='kgQuJZ?s-XOX'

echo -e "${PURPLE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${PURPLE}║                                                            ║${NC}"
echo -e "${PURPLE}║          VERTEX PDF GENERATOR - SIMPLE UPLOAD            ║${NC}"
echo -e "${PURPLE}║                   Upload to GoDaddy                       ║${NC}"
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

echo -e "${BLUE}🚀 Starting simple upload...${NC}\n"

# Upload key files one by one
echo -e "${YELLOW}📄 Uploading Key Files${NC}"

# Upload package.json
upload_file "package.json" "package.json"

# Upload source files
echo -e "\n${YELLOW}💻 Uploading Source Files${NC}"
upload_file "src/server.js" "src/server.js"
upload_file "src/field-mapping.js" "src/field-mapping.js"
upload_file "src/fulcrum-api.js" "src/fulcrum-api.js"
upload_file "src/image-processor.js" "src/image-processor.js"
upload_file "src/make-api.js" "src/make-api.js"
upload_file "src/make-api-2025.js" "src/make-api-2025.js"
upload_file "src/setup-make.js" "src/setup-make.js"
upload_file "src/setup-make-2025.js" "src/setup-make-2025.js"

# Upload config files
echo -e "\n${YELLOW}⚙️  Uploading Config Files${NC}"
upload_file "config/env.example" "config/env.example"

# Upload templates
echo -e "\n${YELLOW}📋 Uploading Templates${NC}"
upload_file "templates/header.html" "templates/header.html"
upload_file "templates/footer.html" "templates/footer.html"
upload_file "templates/body.html" "templates/body.html"
upload_file "templates/styles.css" "templates/styles.css"

# Upload public files
echo -e "\n${YELLOW}🌐 Uploading Public Files${NC}"
if [ -d "public" ]; then
    find public -type f | while read -r file; do
        RELATIVE_PATH="${file#public/}"
        upload_file "$file" "public/${RELATIVE_PATH}"
    done
fi

# Upload deployment package files
echo -e "\n${YELLOW}📦 Uploading Deployment Files${NC}"
if [ -d "pdf-generator-deployment" ]; then
    upload_file "pdf-generator-deployment/.htaccess" ".htaccess"
    upload_file "pdf-generator-deployment/test-deployment.html" "test-deployment.html"
    upload_file "pdf-generator-deployment/DEPLOYMENT_INSTRUCTIONS.md" "DEPLOYMENT_INSTRUCTIONS.md"
fi

# Upload documentation
echo -e "\n${YELLOW}📚 Uploading Documentation${NC}"
upload_file "README.md" "README.md"
upload_file "DEPLOYMENT.md" "DEPLOYMENT.md"
upload_file "QUICK_START.md" "QUICK_START.md"
upload_file "TESTING_GUIDE.md" "TESTING_GUIDE.md"
upload_file "MAKE_INTEGRATION.md" "MAKE_INTEGRATION.md"
upload_file "QUICK_MAKE_SETUP.md" "QUICK_MAKE_SETUP.md"
upload_file "MAKE_API_INTEGRATION.md" "MAKE_API_INTEGRATION.md"
upload_file "MAKE_2025_SETUP.md" "MAKE_2025_SETUP.md"

echo -e "\n${GREEN}🎉 Upload completed!${NC}"
echo -e "\n${CYAN}🌐 Your PDF Generator should be available at:${NC}"
echo -e "${CYAN}• https://i2m.06f.mytemp.website/pdf-generator/health${NC}"
echo -e "${CYAN}• https://i2m.06f.mytemp.website/pdf-generator/test-deployment.html${NC}"
echo -e "${CYAN}• https://i2m.06f.mytemp.website/pdf-generator/api/generate-pdf${NC}"

echo -e "\n${YELLOW}📋 Next Steps:${NC}"
echo -e "${YELLOW}1. Test the health check URL${NC}"
echo -e "${YELLOW}2. Update Make.com connection with the base URL${NC}"
echo -e "${YELLOW}3. Get webhook URL from Make.com${NC}"

