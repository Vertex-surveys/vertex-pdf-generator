#!/bin/bash

##############################################################################
# VERTEX PDF GENERATOR - WORKING GODADDY DEPLOYMENT
# Based on the working script from usable pdf
#
# Usage: ./deploy-working-version.sh
#
# Author: Vertex Renewable Surveys
# Date: January 2025
##############################################################################

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# FTP Configuration (from working usable pdf script)
FTP_HOST="ftp.i2m.06f.mytemp.website"
FTP_USER="vertex-ftp@i2m.06f.mytemp.website"
FTP_PASS='kgQuJZ?s-XOX'
FTP_DIR="/public_html"

# Counter for uploaded files
UPLOADED=0
FAILED=0
TOTAL=0

echo -e "${PURPLE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${PURPLE}║                                                            ║${NC}"
echo -e "${PURPLE}║          VERTEX PDF GENERATOR - WORKING DEPLOYMENT       ║${NC}"
echo -e "${PURPLE}║                   Based on Usable PDF Script              ║${NC}"
echo -e "${PURPLE}║                                                            ║${NC}"
echo -e "${PURPLE}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Function to upload a file (from working script)
upload_file() {
    local LOCAL_FILE="$1"
    local REMOTE_PATH="$2"

    TOTAL=$((TOTAL + 1))

    echo -ne "${CYAN}[${TOTAL}] Uploading: ${LOCAL_FILE}... ${NC}"

    if curl -T "$LOCAL_FILE" \
        "ftp://${FTP_HOST}${FTP_DIR}/${REMOTE_PATH}" \
        --user "${FTP_USER}:${FTP_PASS}" \
        --ftp-create-dirs \
        --silent \
        --show-error \
        --max-time 120 2>/dev/null; then

        echo -e "${GREEN}✓ SUCCESS${NC}"
        UPLOADED=$((UPLOADED + 1))
        return 0
    else
        echo -e "${RED}✗ FAILED${NC}"
        FAILED=$((FAILED + 1))
        return 1
    fi
}

# Change to PDF generator directory
cd "/Users/davewatson/Desktop/Fulcrum PDF and Survey/production-ready/vertex-pdf-generator"

echo -e "${BLUE}🚀 Starting deployment using working method...${NC}\n"

# Upload main files to pdf-generator folder
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}📄 Uploading Main Files${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

upload_file "godaddy-pdf-generator.html" "pdf-generator/index.html"
upload_file ".htaccess" "pdf-generator/.htaccess"
upload_file "api-simulation.html" "pdf-generator/api.html"

# Upload documentation
echo -e "\n${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}📚 Uploading Documentation${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

upload_file "README.md" "pdf-generator/README.md"
upload_file "DEPLOYMENT.md" "pdf-generator/DEPLOYMENT.md"
upload_file "QUICK_START.md" "pdf-generator/QUICK_START.md"
upload_file "TESTING_GUIDE.md" "pdf-generator/TESTING_GUIDE.md"
upload_file "GODADDY_DEPLOYMENT_KNOWLEDGE.md" "pdf-generator/GODADDY_DEPLOYMENT_KNOWLEDGE.md"

# Upload Make.com integration files
echo -e "\n${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}🔗 Uploading Make.com Integration${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

upload_file "MAKE_INTEGRATION.md" "pdf-generator/MAKE_INTEGRATION.md"
upload_file "make-scenario.json" "pdf-generator/make-scenario.json"
upload_file "QUICK_MAKE_SETUP.md" "pdf-generator/QUICK_MAKE_SETUP.md"
upload_file "MAKE_API_INTEGRATION.md" "pdf-generator/MAKE_API_INTEGRATION.md"
upload_file "MAKE_2025_SETUP.md" "pdf-generator/MAKE_2025_SETUP.md"

# Upload source files (if they exist)
echo -e "\n${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}💻 Uploading Source Files${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

if [ -f "src/server.js" ]; then
    upload_file "src/server.js" "pdf-generator/src/server.js"
fi
if [ -f "src/field-mapping.js" ]; then
    upload_file "src/field-mapping.js" "pdf-generator/src/field-mapping.js"
fi
if [ -f "src/fulcrum-api.js" ]; then
    upload_file "src/fulcrum-api.js" "pdf-generator/src/fulcrum-api.js"
fi

# Upload config files
echo -e "\n${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}⚙️  Uploading Config Files${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

if [ -f "config/env.example" ]; then
    upload_file "config/env.example" "pdf-generator/config/env.example"
fi

# Upload package.json
echo -e "\n${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}📦 Uploading Package Files${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

if [ -f "package.json" ]; then
    upload_file "package.json" "pdf-generator/package.json"
fi

# Summary
echo -e "\n${PURPLE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${PURPLE}║                    DEPLOYMENT SUMMARY                      ║${NC}"
echo -e "${PURPLE}╠════════════════════════════════════════════════════════════╣${NC}"
echo -e "${PURPLE}║${NC} ${GREEN}✓ Uploaded:${NC}         ${GREEN}${UPLOADED} files${NC}                            ${PURPLE}║${NC}"
echo -e "${PURPLE}║${NC} ${RED}✗ Failed:${NC}           ${RED}${FAILED} files${NC}                            ${PURPLE}║${NC}"
echo -e "${PURPLE}║${NC} ${BLUE}📊 Total Attempted:${NC} ${BLUE}${TOTAL} files${NC}                            ${PURPLE}║${NC}"
echo -e "${PURPLE}╚════════════════════════════════════════════════════════════╝${NC}"

if [ $FAILED -eq 0 ]; then
    echo -e "\n${GREEN}🎉 SUCCESS! PDF Generator deployed successfully!${NC}"
    echo -e "${CYAN}🌐 PDF Generator URL: https://i2m.06f.mytemp.website/pdf-generator${NC}"
    echo -e "${CYAN}🔗 API Endpoint: https://i2m.06f.mytemp.website/pdf-generator/api.html${NC}"
    echo -e "${CYAN}❤️  Health Check: https://i2m.06f.mytemp.website/pdf-generator/health${NC}"
    echo -e "\n${YELLOW}📋 Next Steps:${NC}"
    echo -e "${YELLOW}1. Test the interface at the URL above${NC}"
    echo -e "${YELLOW}2. Update Make.com connection with: https://i2m.06f.mytemp.website/pdf-generator${NC}"
    echo -e "${YELLOW}3. Set up external PDF generation service${NC}"
    exit 0
else
    echo -e "\n${YELLOW}⚠️  Deployment completed with ${FAILED} failures${NC}"
    echo -e "${YELLOW}Please review the logs above and retry failed uploads${NC}"
    exit 1
fi

