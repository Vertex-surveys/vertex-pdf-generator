# 🚀 QUICK START - Vertex PDF Generator

**Get your PDF generator running in 15 minutes!**

---

## ⚡ Super Quick Setup

### **1. Install Dependencies (2 min)**
```bash
cd vertex-pdf-generator
npm install
```

### **2. Set Environment Variables (3 min)**
```bash
# Copy example file
cp config/env.example .env

# Edit .env with your keys
nano .env
```

**Required keys:**
- `FULCRUM_API_KEY` - Your Fulcrum API key
- `GOOGLE_MAPS_API_KEY` - Your Google Maps key

### **3. Start Server (1 min)**
```bash
npm start
```

### **4. Test PDF Generation (2 min)**
```bash
# Test endpoint
curl http://localhost:3000/api/test-pdf -o test.pdf

# Open test.pdf to see the result!
```

### **5. Deploy to Railway (5 min)**
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

### **6. Update Make.com (2 min)**
```bash
# Get your deployment URL
railway domain

# Update Make.com webhook to point to:
# https://your-app.railway.app/api/generate-pdf
```

---

## 🎯 What You Get

### **Unlimited PDF Capabilities:**
- ✅ **Portal Design** - Exact colors (`#FFD700`, `#FFC107`)
- ✅ **All 166 Fields** - Complete Vertex ASHP v1.1 mapping
- ✅ **Image Processing** - Automatic optimization
- ✅ **Real-time Data** - Live Fulcrum integration
- ✅ **Professional Quality** - Enterprise-grade output

### **vs Fulcrum PDF:**
- ✅ **No template restrictions**
- ✅ **Modern JavaScript** (ES6+, async/await)
- ✅ **Advanced CSS** (Grid, Flexbox, animations)
- ✅ **Real-time processing**
- ✅ **Image optimization**
- ✅ **Mobile responsive**

---

## 🚀 Ready to Deploy!

**Total time: ~15 minutes**

1. **Install** (2 min)
2. **Configure** (3 min)
3. **Test** (2 min)
4. **Deploy** (5 min)
5. **Integrate** (2 min)

**This will give you the best PDF generation system in the industry!** 🎯

Ready to start? Let's go! 🚀
