# 🚀 VERTEX PDF GENERATOR - 2025 DEPLOYMENT GUIDE

## ✅ **Using 2025 Best Practices**

This deployment uses modern 2025 standards:
- ✅ **Docker multi-stage builds** for optimal image size
- ✅ **Non-root user** for enhanced security
- ✅ **Health checks** for reliability
- ✅ **CI/CD pipeline** with GitHub Actions
- ✅ **Container-first deployment** to Railway/Render
- ✅ **Latest Puppeteer 24.x** with headless Chrome
- ✅ **Node.js 20 LTS** for stability

---

## 🚀 **QUICK DEPLOYMENT (Choose One)**

### **Option 1: Railway (Recommended - Easiest)**

1. **Go to:** https://railway.app
2. **Sign up** with GitHub
3. **Click:** "New Project" → "Deploy from GitHub"
4. **Select this repository**
5. **Railway auto-detects** `railway.json` and deploys
6. **Done!** Your API is live in ~2 minutes

**Benefits:**
- ✅ No Docker installation needed
- ✅ Auto-deploys on git push
- ✅ Free tier available
- ✅ Built-in monitoring

---

### **Option 2: Render.com (Also Great)**

1. **Go to:** https://render.com
2. **Sign up** with GitHub
3. **Click:** "New" → "Web Service"
4. **Connect your repository**
5. **Render auto-detects** `render.yaml`
6. **Deploy** - Takes ~5 minutes

**Benefits:**
- ✅ Simple interface
- ✅ Free tier available
- ✅ Automatic SSL
- ✅ Zero-downtime deploys

---

### **Option 3: Manual Docker Deploy**

If you have Docker installed:

```bash
# Build the image
docker build -t vertex-pdf-generator .

# Run locally
docker run -p 3000:3000 vertex-pdf-generator

# Push to registry and deploy
docker tag vertex-pdf-generator:latest your-registry/vertex-pdf-generator:latest
docker push your-registry/vertex-pdf-generator:latest
```

---

## 📊 **2025 BEST PRACTICES IMPLEMENTED**

### **1. Security**
- ✅ Non-root user in container
- ✅ Minimal base image (node:20-slim)
- ✅ Dependency scanning
- ✅ Security headers (Helmet)
- ✅ CORS configuration

### **2. Performance**
- ✅ Multi-stage Docker build
- ✅ Layer caching optimization
- ✅ Compression enabled
- ✅ Efficient Puppeteer args
- ✅ Proper viewport sizing

### **3. Reliability**
- ✅ Health check endpoint
- ✅ Graceful error handling
- ✅ Logging and monitoring
- ✅ Restart policies
- ✅ Resource limits

### **4. Developer Experience**
- ✅ Hot reload in dev mode
- ✅ Clear error messages
- ✅ Comprehensive logging
- ✅ Easy local testing
- ✅ One-command deployment

---

## 🔧 **ENVIRONMENT VARIABLES**

Set these in your hosting platform:

```bash
NODE_ENV=production          # Production mode
PORT=3000                    # Server port (auto-assigned)
CORS_ORIGIN=*                # CORS origins
PDF_FORMAT=A4                # PDF format
PDF_MARGIN_TOP=0.5in         # PDF margins
PDF_MARGIN_BOTTOM=0.5in
PDF_MARGIN_LEFT=0.5in
PDF_MARGIN_RIGHT=0.5in
FULCRUM_API_KEY=your_key     # Fulcrum API key
GOOGLE_MAPS_API_KEY=your_key # Google Maps API key
```

---

## 📋 **API ENDPOINTS**

Once deployed, your API will have:

- **Health Check:** `GET https://your-app.railway.app/health`
- **Test PDF:** `GET https://your-app.railway.app/api/test-pdf`
- **Generate PDF:** `POST https://your-app.railway.app/api/generate-pdf`

---

## 🎯 **TESTING AFTER DEPLOYMENT**

### 1. Test Health Endpoint
```bash
curl https://your-app.railway.app/health
```

### 2. Test PDF Generation
```bash
curl -X POST https://your-app.railway.app/api/generate-pdf \
  -H "Content-Type: application/json" \
  -d '{"test": true}'
```

### 3. Update Make.com
Use your deployed URL in Make.com:
- Base URL: `https://your-app.railway.app`
- API Endpoint: `/api/generate-pdf`

---

## 🚨 **TROUBLESHOOTING**

### Issue: Health check failing
**Solution:** Check logs in Railway/Render dashboard

### Issue: PDF not generating
**Solution:** Verify Puppeteer args in `server.js`

### Issue: Out of memory
**Solution:** Increase instance size in hosting platform

### Issue: Slow PDF generation
**Solution:** Reduce PDF quality or optimize HTML

---

## 📞 **SUPPORT**

For issues or questions:
- Check logs in hosting dashboard
- Verify environment variables
- Test endpoints manually
- Contact Vertex Solar support

---

## 🎉 **SUCCESS!**

Your PDF generator is now live and ready for production use!

**Next Steps:**
1. ✅ API deployed
2. 🔄 Update Make.com with new URL
3. 🔄 Test with real Fulcrum data
4. 🔄 Monitor performance
5. 🔄 Scale as needed

---

**Built with ❤️ for Vertex Solar - 2025 Edition**
