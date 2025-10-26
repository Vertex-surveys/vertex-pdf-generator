# ⚡ QUICK REFERENCE - VERTEX PDF GENERATOR

## 🚨 CRITICAL KNOWLEDGE (Read First!)

### **1. GoDaddy ≠ Node.js**
- ❌ Don't deploy Node.js to GoDaddy shared hosting
- ✅ Use Railway or Render.com for PDF generation
- ✅ GoDaddy only for static files

### **2. FTP Passwords**
- ❌ Don't use special characters: `&`, `!`, `?`, `@`
- ✅ Use alphanumeric only: `VertexAPI2025`

### **3. Always Test Locally**
```bash
node src/server.js
curl http://localhost:3000/health
```

### **4. Use Latest Versions**
- Puppeteer 24.x (2025)
- Node.js 20 LTS
- Express 4.x

---

## 🚀 QUICK COMMANDS

### **Local Development:**
```bash
cd production-ready/vertex-pdf-generator
npm install
node src/server.js
```

### **Test Endpoints:**
```bash
curl http://localhost:3000/health
curl http://localhost:3000/api/test-pdf -o test.pdf
```

### **Deploy to Railway:**
1. Go to railway.app
2. Sign up with GitHub
3. New Project → Deploy from GitHub
4. Upload `vertex-pdf-generator-deployment.zip`
5. Done! Get URL

### **Deploy to Render:**
1. Go to render.com
2. Sign up with GitHub
3. New Web Service
4. Upload deployment folder
5. Done! Get URL

---

## 📊 PROJECT STATUS

**Files:** ✅ All created  
**Testing:** ✅ Local server working  
**Deployment:** ✅ Package ready  
**Documentation:** ✅ Complete  
**Status:** ✅ PRODUCTION READY

---

## 🎯 NEXT ACTIONS

1. ✅ Code complete
2. ✅ Tested locally
3. ✅ Audit passed
4. ⏳ Deploy to Railway
5. ⏳ Update Make.com
6. ⏳ Test end-to-end

---

**Quick Reference Complete** ✅

