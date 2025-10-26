# 🚀 QUICK DEPLOY - VERTEX PDF GENERATOR

## ⚡ FASTEST PATH TO PRODUCTION

### **5-MINUTE DEPLOYMENT**

### **Step 1: Extract Package**
```bash
unzip vertex-pdf-generator-deployment.zip
cd vertex-pdf-generator-deployment
```

### **Step 2: Deploy to Railway**

**Option A: Via Dashboard (Easiest)**
1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project"
4. Click "Deploy from GitHub"
5. Select folder: `vertex-pdf-generator-deployment`
6. Click "Deploy"
7. Wait ~2 minutes
8. Get your URL: `https://your-app.up.railway.app`

**Option B: Via CLI**
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Initialize project
railway init

# Deploy
railway up
```

### **Step 3: Set Environment Variables**
In Railway Dashboard → Settings → Variables:
```
NODE_ENV=production
PORT=3000
```

### **Step 4: Test Your API**
```bash
# Health check
curl https://your-app.up.railway.app/health

# Test PDF generation
curl https://your-app.up.railway.app/api/test-pdf -o test.pdf
```

### **Step 5: Update Make.com**
1. Get your API URL: `https://your-app.up.railway.app`
2. In Make.com scenario:
   - Update connection URL to your Railway URL
   - Test webhook → PDF workflow
   - Verify Fulcrum data integration

---

## ✅ YOU'RE LIVE!

**API URL:** `https://your-app.up.railway.app`  
**Health Check:** `https://your-app.up.railway.app/health`  
**Generate PDF:** `POST https://your-app.up.railway.app/api/generate-pdf`

---

## 🆘 TROUBLESHOOTING

**Issue:** Health check failing  
**Fix:** Check Railway logs → Settings → Logs

**Issue:** PDF generation timeout  
**Fix:** Increase instance size in Railway settings

**Issue:** Make.com connection error  
**Fix:** Verify Railway URL in Make.com connection settings

**Issue:** Environment variables not working  
**Fix:** Add variables in Railway → Settings → Variables

---

## 📞 SUPPORT

All documentation is in:
- `FINAL_STATUS.md` - Complete project status
- `DEPLOY_2025.md` - Detailed deployment guide
- `TESTING_GUIDE.md` - Testing instructions

---

**Ready to deploy? Start with Step 1!** 🚀

