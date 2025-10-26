#!/bin/bash

##############################################################################
# VERTEX PDF GENERATOR - GODADDY FOLDER CREATION + FILE UPLOAD
# Creates folder structure first, then uploads files individually
#
# Usage: ./deploy-with-folder-creation.sh
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
echo -e "${PURPLE}║          VERTEX PDF GENERATOR - FOLDER + FILE UPLOAD     ║${NC}"
echo -e "${PURPLE}║                   Create Folder First                      ║${NC}"
echo -e "${PURPLE}║                                                            ║${NC}"
echo -e "${PURPLE}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Function to create folder via FTP
create_folder() {
    local FOLDER_PATH="$1"
    
    echo -ne "${CYAN}Creating folder: ${FOLDER_PATH}... ${NC}"
    
    # Use FTP to create directory
    ftp -n <<EOF 2>/dev/null
open ${FTP_HOST}
user ${FTP_USER} ${FTP_PASS}
cd public_html
mkdir ${FOLDER_PATH}
quit
EOF

    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ SUCCESS${NC}"
        return 0
    else
        echo -e "${YELLOW}⚠ EXISTS OR FAILED${NC}"
        return 1
    fi
}

# Function to upload a single file
upload_single_file() {
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

echo -e "${BLUE}🚀 Starting folder creation and file upload...${NC}\n"

# Step 1: Create folder structure
echo -e "${YELLOW}📁 Creating Folder Structure${NC}"
create_folder "pdf-generator"

# Step 2: Upload main files
echo -e "\n${YELLOW}📄 Uploading Main Files${NC}"
upload_single_file "godaddy-pdf-generator.html" "index.html"
upload_single_file ".htaccess" ".htaccess"
upload_single_file "api-simulation.html" "api.html"

# Step 3: Upload documentation
echo -e "\n${YELLOW}📚 Uploading Documentation${NC}"
upload_single_file "README.md" "README.md"
upload_single_file "DEPLOYMENT.md" "DEPLOYMENT.md"
upload_single_file "QUICK_START.md" "QUICK_START.md"
upload_single_file "TESTING_GUIDE.md" "TESTING_GUIDE.md"
upload_single_file "GODADDY_DEPLOYMENT_KNOWLEDGE.md" "GODADDY_DEPLOYMENT_KNOWLEDGE.md"

# Step 4: Upload Make.com integration files
echo -e "\n${YELLOW}🔗 Uploading Make.com Integration${NC}"
upload_single_file "MAKE_INTEGRATION.md" "MAKE_INTEGRATION.md"
upload_single_file "make-scenario.json" "make-scenario.json"
upload_single_file "QUICK_MAKE_SETUP.md" "QUICK_MAKE_SETUP.md"
upload_single_file "MAKE_API_INTEGRATION.md" "MAKE_API_INTEGRATION.md"
upload_single_file "MAKE_2025_SETUP.md" "MAKE_2025_SETUP.md"

# Step 5: Upload source files (if they exist)
echo -e "\n${YELLOW}💻 Uploading Source Files${NC}"
if [ -f "src/server.js" ]; then
    upload_single_file "src/server.js" "src/server.js"
fi
if [ -f "src/field-mapping.js" ]; then
    upload_single_file "src/field-mapping.js" "src/field-mapping.js"
fi
if [ -f "src/fulcrum-api.js" ]; then
    upload_single_file "src/fulcrum-api.js" "src/fulcrum-api.js"
fi

# Step 6: Upload config files
echo -e "\n${YELLOW}⚙️  Uploading Config Files${NC}"
if [ -f "config/env.example" ]; then
    upload_single_file "config/env.example" "config/env.example"
fi

# Step 7: Upload package.json
echo -e "\n${YELLOW}📦 Uploading Package Files${NC}"
if [ -f "package.json" ]; then
    upload_single_file "package.json" "package.json"
fi

echo -e "\n${GREEN}🎉 Folder creation and file upload completed!${NC}"
echo -e "\n${CYAN}🌐 Your PDF Generator should be available at:${NC}"
echo -e "${CYAN}• Main Interface: https://i2m.06f.mytemp.website/pdf-generator/${NC}"
echo -e "${CYAN}• API Simulation: https://i2m.06f.mytemp.website/pdf-generator/api.html${NC}"
echo -e "${CYAN}• Documentation: https://i2m.06f.mytemp.website/pdf-generator/README.md${NC}"

echo -e "\n${YELLOW}📋 Next Steps:${NC}"
echo -e "${YELLOW}1. Test the interface at the URL above${NC}"
echo -e "${YELLOW}2. Update Make.com connection with: https://i2m.06f.mytemp.website/pdf-generator${NC}"
echo -e "${YELLOW}3. Set up external PDF generation service${NC}"
echo -e "${YELLOW}4. Configure Make.com webhook integration${NC}"

echo -e "\n${PURPLE}💡 Knowledge saved in: GODADDY_DEPLOYMENT_KNOWLEDGE.md${NC}"
echo -e "${PURPLE}   This documents the GoDaddy deployment process for future reference.${NC}"

