#!/bin/bash

##############################################################################
# VERTEX PDF GENERATOR - GODADDY FTP DEPLOYMENT
# Deploys the PDF generator to GoDaddy hosting via FTP
#
# Usage: ./deploy-to-godaddy-ftp.sh
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

# FTP Configuration (from GoDaddy File Manager)
FTP_HOST="ftp.i2m.06f.mytemp.website"
FTP_USER="vertex-ftp@i2m.06f.mytemp.website"
FTP_PASS='kgQuJZ?s-XOX'
FTP_DIR="/home/g6yj7e.../public_html/pdf-generator"

# Counter for uploaded files
UPLOADED=0
FAILED=0
TOTAL=0

echo -e "${PURPLE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${PURPLE}║                                                            ║${NC}"
echo -e "${PURPLE}║          VERTEX PDF GENERATOR - GODADDY FTP DEPLOYMENT    ║${NC}"
echo -e "${PURPLE}║                   Complete Upload Script                   ║${NC}"
echo -e "${PURPLE}║                                                            ║${NC}"
echo -e "${PURPLE}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Function to upload a file
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

# Function to upload directory
upload_directory() {
    local DIR="$1"
    local BASE_DIR="$2"

    echo -e "\n${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${YELLOW}📁 Uploading Directory: ${DIR}${NC}"
    echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

    # Find all files in directory (excluding .md files and node_modules)
    find "$DIR" -type f ! -name "*.md" ! -name ".DS_Store" ! -path "*/node_modules/*" | while read -r file; do
        # Get relative path
        RELATIVE_PATH="${file#$BASE_DIR/}"
        upload_file "$file" "$RELATIVE_PATH"
        sleep 0.5  # Small delay to avoid overwhelming the server
    done
}

# Start deployment
echo -e "${BLUE}🚀 Starting PDF Generator FTP deployment...${NC}\n"

# Change to PDF generator directory
cd "/Users/davewatson/Desktop/Fulcrum PDF and Survey/production-ready/vertex-pdf-generator"

echo -e "${GREEN}✓ Working directory set${NC}\n"

# Test FTP connection first
echo -e "${YELLOW}🔍 Testing FTP connection...${NC}"
if curl -s "ftp://${FTP_HOST}/" --user "${FTP_USER}:${FTP_PASS}" --max-time 10 > /dev/null; then
    echo -e "${GREEN}✓ FTP connection successful${NC}\n"
else
    echo -e "${RED}✗ FTP connection failed${NC}"
    echo -e "${YELLOW}Please check your FTP credentials and try again${NC}"
    exit 1
fi

# Upload root files
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}📄 Uploading Root Files${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

upload_file "package.json" "package.json"
upload_file "README.md" "README.md"
upload_file "DEPLOYMENT.md" "DEPLOYMENT.md"
upload_file "QUICK_START.md" "QUICK_START.md"
upload_file "TESTING_GUIDE.md" "TESTING_GUIDE.md"

# Upload source files
echo -e "\n${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}💻 Uploading Source Code${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

upload_directory "src" "."

# Upload configuration files
echo -e "\n${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}⚙️  Uploading Configuration${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

upload_directory "config" "."

# Upload templates
echo -e "\n${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}📋 Uploading Templates${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

upload_directory "templates" "."

# Upload public files
echo -e "\n${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}🌐 Uploading Public Files${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

upload_directory "public" "."

# Upload Make.com integration files
echo -e "\n${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}🔗 Uploading Make.com Integration${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

upload_file "MAKE_INTEGRATION.md" "MAKE_INTEGRATION.md"
upload_file "make-scenario.json" "make-scenario.json"
upload_file "QUICK_MAKE_SETUP.md" "QUICK_MAKE_SETUP.md"
upload_file "MAKE_API_INTEGRATION.md" "MAKE_API_INTEGRATION.md"
upload_file "MAKE_2025_SETUP.md" "MAKE_2025_SETUP.md"

# Upload deployment package files
echo -e "\n${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}📦 Uploading Deployment Package Files${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

if [ -d "pdf-generator-deployment" ]; then
    upload_file "pdf-generator-deployment/.htaccess" ".htaccess"
    upload_file "pdf-generator-deployment/DEPLOYMENT_INSTRUCTIONS.md" "DEPLOYMENT_INSTRUCTIONS.md"
    upload_file "pdf-generator-deployment/test-deployment.html" "test-deployment.html"
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
    echo -e "${CYAN}🔗 API Endpoint: https://i2m.06f.mytemp.website/pdf-generator/api/generate-pdf${NC}"
    echo -e "${CYAN}❤️  Health Check: https://i2m.06f.mytemp.website/pdf-generator/health${NC}"
    echo -e "${CYAN}🧪 Test Page: https://i2m.06f.mytemp.website/pdf-generator/test-deployment.html${NC}"
    echo -e "\n${YELLOW}📋 Next Steps:${NC}"
    echo -e "${YELLOW}1. Test the API endpoints using the test page${NC}"
    echo -e "${YELLOW}2. Update Make.com connection with: https://i2m.06f.mytemp.website/pdf-generator${NC}"
    echo -e "${YELLOW}3. Get webhook URL from Make.com${NC}"
    exit 0
else
    echo -e "\n${YELLOW}⚠️  Deployment completed with ${FAILED} failures${NC}"
    echo -e "${YELLOW}Please review the logs above and retry failed uploads${NC}"
    exit 1
fi

