# 🚀 Vertex PDF Generator

Professional PDF generation system for Vertex Solar surveys with unlimited capabilities.

## 🎯 Features

- ✅ **Portal Design System** - Exact color matching (`#FFD700`, `#FFC107`)
- ✅ **Complete Field Mapping** - All 166 fields from Vertex ASHP v1.1
- ✅ **Image Processing** - Automatic optimization and compression
- ✅ **Fulcrum API Integration** - Real-time data fetching
- ✅ **Make.com Integration** - Automated workflow
- ✅ **Google Drive Storage** - Automatic file organization
- ✅ **Advanced PDF Generation** - High-quality output with Puppeteer

## 🛠️ Technology Stack

- **Node.js 18+** - Runtime environment
- **Puppeteer** - PDF generation
- **Sharp** - Image processing
- **Express.js** - API server
- **Google APIs** - Maps and Drive integration
- **Make.com** - Automation workflow

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
```bash
cp config/env.example .env
# Edit .env with your API keys
```

### 3. Start Server
```bash
npm start
```

### 4. Test PDF Generation
```bash
# Test endpoint
curl http://localhost:3000/api/test-pdf

# Generate PDF
curl -X POST http://localhost:3000/api/generate-pdf \
  -H "Content-Type: application/json" \
  -d @sample-data.json
```

## 📁 Project Structure

```
vertex-pdf-generator/
├── src/
│   ├── server.js          # Main server
│   ├── field-mapping.js   # Fulcrum field mapping
│   ├── fulcrum-api.js     # API integration
│   └── image-processor.js # Image processing
├── templates/             # PDF templates
├── public/               # Static assets
├── config/               # Configuration files
├── outputs/              # Generated PDFs
└── package.json          # Dependencies
```

## 🔧 Configuration

### Environment Variables
```bash
# Server
PORT=3000
NODE_ENV=production

# Fulcrum API
FULCRUM_API_KEY=your_api_key
FULCRUM_FORM_ID=your_form_id

# Google APIs
GOOGLE_MAPS_API_KEY=your_maps_key
GOOGLE_DRIVE_CREDENTIALS_PATH=./config/google-service-account.json

# PDF Settings
PDF_QUALITY=90
PDF_FORMAT=A4
```

## 📊 API Endpoints

### Health Check
```bash
GET /health
```

### Generate PDF
```bash
POST /api/generate-pdf
Content-Type: application/json

{
  "property": {
    "address": "123 Test Street, London",
    "type": "Detached House"
  },
  "installer": {
    "name": "Vertex Solar"
  },
  "customer": {
    "name": "John Smith"
  }
}
```

### Test PDF
```bash
GET /api/test-pdf
```

## 🎨 Design System

### Portal Colors
```css
:root {
  --portal-bg-dark: #1a252f;
  --portal-bg-light: #2C3E50;
  --portal-gold-primary: #FFD700;
  --portal-gold-secondary: #FFC107;
  --portal-text: #ffffff;
}
```

### Features
- **Glassmorphism effects** - Backdrop blur and transparency
- **Advanced gradients** - Multi-stop gradients
- **Custom shadows** - Multiple shadow layers
- **Responsive design** - Mobile-first approach
- **Print optimization** - Perfect PDF output

## 🔄 Make.com Integration

### Webhook Setup
1. Create webhook trigger in Make.com
2. Add data transformation module
3. Add PDF generation call
4. Add Google Drive upload
5. Add email notification

### Data Flow
```
Fulcrum Survey → Make.com → PDF Generator → Google Drive → Email
```

## 🚀 Deployment

### Railway (Recommended)
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

### Heroku
```bash
# Create Heroku app
heroku create vertex-pdf-generator

# Deploy
git push heroku main
```

### Vercel (Serverless)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## 📈 Performance

### Targets
- **PDF Generation**: < 10 seconds
- **Image Processing**: < 5 seconds
- **Data Transformation**: < 2 seconds
- **Total Processing**: < 20 seconds

### Optimization
- **Image compression** - Automatic optimization
- **Template caching** - Reusable templates
- **Background processing** - Queue-based generation
- **CDN integration** - Fast asset delivery

## 🔐 Security

### Features
- **API key authentication** - Secure endpoints
- **CORS protection** - Cross-origin security
- **Input validation** - Data sanitization
- **Error handling** - Secure error messages
- **Rate limiting** - Request throttling

## 📊 Monitoring

### Health Checks
- **Server status** - `/health` endpoint
- **API connectivity** - Fulcrum API validation
- **PDF generation** - Success/failure tracking
- **Performance metrics** - Response time monitoring

## 🎯 Competitive Advantages

### vs Fulcrum PDF
- ✅ **Unlimited customization** - No template restrictions
- ✅ **Modern JavaScript** - ES6+, async/await
- ✅ **Advanced CSS** - Grid, Flexbox, animations
- ✅ **Real-time processing** - Live calculations
- ✅ **Image optimization** - Automatic processing
- ✅ **Mobile responsive** - Works on all devices

### vs Other Solutions
- ✅ **Portal integration** - Seamless workflow
- ✅ **Google Drive** - Automatic organization
- ✅ **Make.com** - Visual automation
- ✅ **Custom branding** - Portal design system
- ✅ **Scalable** - Handle any volume
- ✅ **Cost effective** - No per-PDF charges

## 🚀 Ready to Deploy!

This system will give you unlimited PDF capabilities with professional quality output. Perfect for Vertex Solar's premium brand standards.

**Total setup time: ~1.5 hours for complete system!** 🎯


# Railway trigger
