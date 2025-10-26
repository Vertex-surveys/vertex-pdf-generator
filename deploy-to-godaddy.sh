#!/bin/bash

##############################################################################
# VERTEX PDF GENERATOR - GODADDY DEPLOYMENT SCRIPT
# Deploys the PDF generator to GoDaddy hosting via FTP
#
# Usage: ./deploy-to-godaddy.sh
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

# FTP Configuration (from existing GoDaddy setup)
FTP_HOST="ftp.i2m.06f.mytemp.website"
FTP_USER="vertex-ftp@i2m.06f.mytemp.website"
FTP_PASS='kgQuJZ?s-XOX'
FTP_DIR="/public_html/pdf-generator"

# Counter for uploaded files
UPLOADED=0
FAILED=0
TOTAL=0

echo -e "${PURPLE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${PURPLE}║                                                            ║${NC}"
echo -e "${PURPLE}║          VERTEX PDF GENERATOR - GODADDY DEPLOYMENT        ║${NC}"
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
echo -e "${BLUE}🚀 Starting PDF Generator deployment...${NC}\n"

# Change to PDF generator directory
cd "/Users/davewatson/Desktop/Fulcrum PDF and Survey/production-ready/vertex-pdf-generator"

echo -e "${GREEN}✓ Working directory set${NC}\n"

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

# Create .htaccess for Node.js
echo -e "\n${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}🔧 Creating .htaccess for Node.js${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

cat > .htaccess << 'EOF'
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ server.js [QSA,L]

# Enable CORS for API calls
Header always set Access-Control-Allow-Origin "*"
Header always set Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS"
Header always set Access-Control-Allow-Headers "Content-Type, Authorization"

# Set MIME types
AddType application/json .json
AddType text/html .html
AddType text/css .css
AddType application/javascript .js
EOF

upload_file ".htaccess" ".htaccess"

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
    echo -e "\n${YELLOW}📋 Next Steps:${NC}"
    echo -e "${YELLOW}1. Update Make.com connection with: https://i2m.06f.mytemp.website/pdf-generator${NC}"
    echo -e "${YELLOW}2. Test the API endpoints${NC}"
    echo -e "${YELLOW}3. Get webhook URL from Make.com${NC}"
    exit 0
else
    echo -e "\n${YELLOW}⚠️  Deployment completed with ${FAILED} failures${NC}"
    echo -e "${YELLOW}Please review the logs above and retry failed uploads${NC}"
    exit 1
fi

