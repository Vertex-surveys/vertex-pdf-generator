# 🚀 Vertex PDF Generator - Deployment Guide

**Complete deployment guide for production-ready PDF generation system**

---

## 🎯 Deployment Options

### **Option 1: Railway (Recommended)**
- ✅ **Easy setup** - One command deployment
- ✅ **Automatic scaling** - Handles traffic spikes
- ✅ **Built-in monitoring** - Performance tracking
- ✅ **Free tier available** - Cost effective

### **Option 2: Heroku**
- ✅ **Proven platform** - Reliable hosting
- ✅ **Add-ons available** - Easy integrations
- ✅ **Good documentation** - Extensive guides
- ⚠️ **Paid plans** - No free tier for production

### **Option 3: Vercel (Serverless)**
- ✅ **Serverless** - Pay per request
- ✅ **Global CDN** - Fast worldwide
- ✅ **Easy deployment** - Git integration
- ⚠️ **Function limits** - 10 second timeout

---

## 🚀 Railway Deployment (Recommended)

### **Step 1: Install Railway CLI**
```bash
npm install -g @railway/cli
```

### **Step 2: Login to Railway**
```bash
railway login
```

### **Step 3: Initialize Project**
```bash
cd vertex-pdf-generator
railway init
```

### **Step 4: Set Environment Variables**
```bash
# Set Fulcrum API key
railway variables set FULCRUM_API_KEY=your_fulcrum_api_key

# Set Google Maps API key
railway variables set GOOGLE_MAPS_API_KEY=your_google_maps_key

# Set other variables
railway variables set NODE_ENV=production
railway variables set PORT=3000
```

### **Step 5: Deploy**
```bash
railway up
```

### **Step 6: Get Deployment URL**
```bash
railway domain
```

---

## 🔧 Heroku Deployment

### **Step 1: Install Heroku CLI**
```bash
# Download from https://devcenter.heroku.com/articles/heroku-cli
```

### **Step 2: Login to Heroku**
```bash
heroku login
```

### **Step 3: Create Heroku App**
```bash
heroku create vertex-pdf-generator
```

### **Step 4: Set Environment Variables**
```bash
heroku config:set FULCRUM_API_KEY=your_fulcrum_api_key
heroku config:set GOOGLE_MAPS_API_KEY=your_google_maps_key
heroku config:set NODE_ENV=production
```

### **Step 5: Deploy**
```bash
git add .
git commit -m "Initial deployment"
git push heroku main
```

### **Step 6: Open App**
```bash
heroku open
```

---

## ⚡ Vercel Deployment (Serverless)

### **Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

### **Step 2: Login to Vercel**
```bash
vercel login
```

### **Step 3: Deploy**
```bash
vercel
```

### **Step 4: Set Environment Variables**
```bash
vercel env add FULCRUM_API_KEY
vercel env add GOOGLE_MAPS_API_KEY
vercel env add NODE_ENV
```

### **Step 5: Redeploy**
```bash
vercel --prod
```

---

## 🔐 Environment Variables Setup

### **Required Variables**
```bash
# Server Configuration
PORT=3000
NODE_ENV=production

# Fulcrum API
FULCRUM_API_KEY=your_fulcrum_api_key_here
FULCRUM_BASE_URL=https://api.fulcrumapp.com/api/v2
FULCRUM_FORM_ID=your_vertex_ashp_v1_1_form_id

# Google APIs
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
GOOGLE_DRIVE_CREDENTIALS_PATH=./config/google-service-account.json

# Security
API_KEY=your_secure_api_key_here
CORS_ORIGIN=https://your-portal-domain.com
```

### **Optional Variables**
```bash
# PDF Generation Settings
PDF_QUALITY=90
PDF_FORMAT=A4
PDF_MARGIN_TOP=0.5in
PDF_MARGIN_BOTTOM=0.5in
PDF_MARGIN_LEFT=0.5in
PDF_MARGIN_RIGHT=0.5in

# Image Processing
IMAGE_MAX_WIDTH=1200
IMAGE_MAX_HEIGHT=800
IMAGE_QUALITY=90

# Make.com Integration
MAKE_WEBHOOK_URL=https://hook.eu1.make.com/your_webhook_id
```

---

## 🧪 Testing Deployment

### **Health Check**
```bash
curl https://your-app.railway.app/health
```

### **Test PDF Generation**
```bash
curl https://your-app.railway.app/api/test-pdf -o test.pdf
```

### **Generate PDF with Data**
```bash
curl -X POST https://your-app.railway.app/api/generate-pdf \
  -H "Content-Type: application/json" \
  -d '{
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
  }'
```

---

## 📊 Monitoring & Maintenance

### **Health Monitoring**
- **Endpoint**: `/health`
- **Response**: Server status and version
- **Frequency**: Every 5 minutes

### **Performance Monitoring**
- **PDF Generation Time**: < 10 seconds
- **Image Processing Time**: < 5 seconds
- **API Response Time**: < 2 seconds

### **Error Monitoring**
- **Logs**: Check deployment platform logs
- **Alerts**: Set up error notifications
- **Uptime**: Monitor service availability

---

## 🔄 Make.com Integration

### **Webhook Setup**
1. **Create webhook trigger** in Make.com
2. **Set webhook URL** to your deployed app
3. **Add data transformation** module
4. **Add PDF generation** call
5. **Add Google Drive** upload
6. **Add email notification**

### **Webhook URL Format**
```
https://your-app.railway.app/api/generate-pdf
```

### **Test Webhook**
```bash
curl -X POST https://your-app.railway.app/api/generate-pdf \
  -H "Content-Type: application/json" \
  -d '{"test": "webhook"}'
```

---

## 🚀 Production Checklist

### **Before Deployment**
- [ ] Environment variables configured
- [ ] API keys valid and tested
- [ ] Dependencies installed
- [ ] Code tested locally
- [ ] Documentation updated

### **After Deployment**
- [ ] Health check passes
- [ ] Test PDF generation works
- [ ] Make.com integration tested
- [ ] Error monitoring set up
- [ ] Performance monitoring active

### **Ongoing Maintenance**
- [ ] Regular health checks
- [ ] Performance monitoring
- [ ] Error log review
- [ ] Security updates
- [ ] Backup verification

---

## 🎯 Success Metrics

### **Performance Targets**
- ✅ **PDF Generation**: < 10 seconds
- ✅ **Image Processing**: < 5 seconds
- ✅ **API Response**: < 2 seconds
- ✅ **Uptime**: 99.9%

### **Quality Targets**
- ✅ **Visual Quality**: Portal-perfect design
- ✅ **Data Accuracy**: 100% field mapping
- ✅ **Error Rate**: < 1%
- ✅ **User Satisfaction**: High

---

## 🚀 Ready to Deploy!

**Total deployment time: ~30 minutes**

1. **Choose platform** (Railway recommended)
2. **Set up environment** (15 min)
3. **Deploy application** (10 min)
4. **Test integration** (5 min)

**This will give you unlimited PDF capabilities!** 🎯

Ready to start? Let's deploy! 🚀


