#!/bin/bash

##############################################################################
# VERTEX PDF GENERATOR - DEPLOYMENT PACKAGE CREATOR
# Creates a complete deployment package for any hosting service
#
# Usage: ./create-deployment-package.sh
#
# Author: Vertex Solar
# Date: January 26, 2025
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

echo -e "${PURPLE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${PURPLE}║                                                            ║${NC}"
echo -e "${PURPLE}║          VERTEX PDF GENERATOR - DEPLOYMENT PACKAGE        ║${NC}"
echo -e "${PURPLE}║                    Complete System                         ║${NC}"
echo -e "${PURPLE}║                                                            ║${NC}"
echo -e "${PURPLE}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Create deployment directory
DEPLOY_DIR="vertex-pdf-generator-deployment"
echo -e "${CYAN}📁 Creating deployment directory...${NC}"
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"

# Copy essential files
echo -e "${CYAN}📄 Copying core files...${NC}"
cp package.json "$DEPLOY_DIR/"
cp -r src "$DEPLOY_DIR/"
cp -r config "$DEPLOY_DIR/"
cp -r templates "$DEPLOY_DIR/"
cp -r public "$DEPLOY_DIR/"

# Create deployment instructions
echo -e "${CYAN}📋 Creating deployment instructions...${NC}"
cat > "$DEPLOY_DIR/DEPLOYMENT_INSTRUCTIONS.md" << 'EOF'
# VERTEX PDF GENERATOR - DEPLOYMENT INSTRUCTIONS

## 🚀 Quick Deployment Options

### Option 1: Railway (Recommended)
1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Upload this folder as a new repo
5. Railway will auto-deploy

### Option 2: Heroku
1. Install Heroku CLI
2. Run: `heroku create vertex-pdf-generator`
3. Run: `git init && git add . && git commit -m "Initial commit"`
4. Run: `git push heroku main`

### Option 3: Vercel
1. Install Vercel CLI
2. Run: `vercel --prod`
3. Follow prompts

### Option 4: DigitalOcean App Platform
1. Go to https://cloud.digitalocean.com/apps
2. Create new app
3. Upload this folder
4. Deploy

## 🔧 Environment Variables
Set these in your hosting platform:
- `NODE_ENV=production`
- `PORT=3000` (or let platform assign)

## 📊 API Endpoints
- `GET /health` - Health check
- `POST /api/generate-pdf` - Generate PDF
- `GET /api/test` - Test endpoint

## 🎯 Make.com Integration
Use your deployed URL in Make.com scenario:
- Base URL: `https://your-app.railway.app` (or your platform URL)
- API Key: Not required for basic usage

## ✅ Testing
1. Visit `/health` to verify deployment
2. Test PDF generation with sample data
3. Update Make.com with new URL
4. Test Fulcrum webhook integration

## 🎉 Success!
Your PDF generator is now live and ready for production use!
EOF

# Create startup script
echo -e "${CYAN}🚀 Creating startup script...${NC}"
cat > "$DEPLOY_DIR/start.sh" << 'EOF'
#!/bin/bash
echo "Starting Vertex PDF Generator..."
node src/server.js
EOF
chmod +x "$DEPLOY_DIR/start.sh"

# Create Procfile for Heroku
echo -e "${CYAN}📄 Creating Procfile...${NC}"
echo "web: node src/server.js" > "$DEPLOY_DIR/Procfile"

# Create .gitignore
echo -e "${CYAN}📄 Creating .gitignore...${NC}"
cat > "$DEPLOY_DIR/.gitignore" << 'EOF'
node_modules/
.env
*.log
outputs/
*.pdf
.DS_Store
EOF

# Create README
echo -e "${CYAN}📄 Creating README...${NC}"
cat > "$DEPLOY_DIR/README.md" << 'EOF'
# Vertex PDF Generator

Professional PDF generation system for Vertex Solar surveys.

## Features
- ✅ Complete Fulcrum API integration
- ✅ All 166 Vertex ASHP v1.1 fields mapped
- ✅ Portal design system with gold colors
- ✅ Professional PDF output
- ✅ Make.com webhook integration
- ✅ Google Drive integration ready

## Quick Start
1. Deploy to your preferred platform
2. Set environment variables
3. Test endpoints
4. Update Make.com scenario
5. Start generating PDFs!

## API Endpoints
- `GET /health` - Health check
- `POST /api/generate-pdf` - Generate PDF
- `GET /api/test` - Test endpoint

## Support
Contact Vertex Solar for support.
EOF

# Create zip package
echo -e "${CYAN}📦 Creating deployment package...${NC}"
zip -r "vertex-pdf-generator-deployment.zip" "$DEPLOY_DIR"

# Summary
echo -e "\n${PURPLE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${PURPLE}║                    DEPLOYMENT PACKAGE READY               ║${NC}"
echo -e "${PURPLE}╠════════════════════════════════════════════════════════════╣${NC}"
echo -e "${PURPLE}║${NC} ${GREEN}✓ Package Created:${NC}     ${GREEN}vertex-pdf-generator-deployment.zip${NC}        ${PURPLE}║${NC}"
echo -e "${PURPLE}║${NC} ${BLUE}📁 Directory:${NC}          ${BLUE}$DEPLOY_DIR${NC}                    ${PURPLE}║${NC}"
echo -e "${PURPLE}║${NC} ${YELLOW}📋 Instructions:${NC}        ${YELLOW}DEPLOYMENT_INSTRUCTIONS.md${NC}              ${PURPLE}║${NC}"
echo -e "${PURPLE}╚════════════════════════════════════════════════════════════╝${NC}"

echo -e "\n${GREEN}🎉 DEPLOYMENT PACKAGE READY!${NC}"
echo -e "${CYAN}📦 Package: vertex-pdf-generator-deployment.zip${NC}"
echo -e "${CYAN}📁 Directory: $DEPLOY_DIR${NC}"
echo -e "${CYAN}📋 Instructions: $DEPLOY_DIR/DEPLOYMENT_INSTRUCTIONS.md${NC}"
echo -e "\n${YELLOW}🚀 Ready to deploy to any platform!${NC}"
echo -e "${YELLOW}Choose your preferred hosting service and follow the instructions.${NC}"