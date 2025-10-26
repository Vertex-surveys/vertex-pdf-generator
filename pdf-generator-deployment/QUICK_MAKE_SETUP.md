# ⚡ Quick Make.com Setup

**Get your PDF generator integrated with Make.com in 15 minutes!**

---

## 🚀 Super Quick Setup

### **Step 1: Deploy PDF Generator (5 min)**
```bash
cd vertex-pdf-generator
railway up
```

### **Step 2: Get Your URLs (1 min)**
```bash
# Get PDF generator URL
railway domain

# Get Make.com webhook URL
# Go to Make.com → Create scenario → Webhook → Copy URL
```

### **Step 3: Create Make.com Scenario (5 min)**

**1. Create New Scenario**
- Go to Make.com
- Click "Create a new scenario"
- Name: "Vertex Solar PDF Generation"

**2. Add Webhook Trigger**
- Search "Webhook"
- Add "Catch a webhook" module
- Copy the webhook URL

**3. Add Data Transformation**
- Search "Code"
- Add "Run JavaScript" module
- Copy the code from `MAKE_INTEGRATION.md`

**4. Add PDF Generation**
- Search "HTTP"
- Add "Make a request" module
- URL: `https://your-app.railway.app/api/generate-pdf`
- Method: POST
- Headers: `Content-Type: application/json`
- Body: `{{json(2)}}`

**5. Add Google Drive Upload**
- Search "Google Drive"
- Add "Upload a file" module
- Configure your Google Drive connection

**6. Add Email Notification**
- Search "Email"
- Add "Send an email" module
- Configure your email service

### **Step 4: Configure Variables (2 min)**
```bash
# In Make.com, go to Settings → Variables
FULCRUM_API_KEY=your_fulcrum_api_key
PDF_GENERATOR_URL=https://your-app.railway.app
GOOGLE_DRIVE_CREDENTIALS=your_google_credentials
PORTAL_API_KEY=your_portal_api_key
EMAIL_SERVICE_API_KEY=your_email_api_key
```

### **Step 5: Test Integration (2 min)**
```bash
# Test webhook
curl -X POST https://hook.eu1.make.com/YOUR_WEBHOOK_ID \
  -H "Content-Type: application/json" \
  -d '{
    "record_id": "test-123",
    "form_id": "your-form-id"
  }'
```

---

## 🎯 What You Get

### **Automated Workflow:**
1. **Fulcrum survey completed** → Webhook triggered
2. **Data fetched** → Fulcrum API called
3. **Data transformed** → JavaScript processing
4. **PDF generated** → Your custom generator
5. **PDF uploaded** → Google Drive storage
6. **Email sent** → Customer notification
7. **Portal updated** → Database sync

### **Key Benefits:**
- ✅ **Fully automated** - No manual intervention
- ✅ **High quality** - Portal-perfect design
- ✅ **Fast processing** - < 30 seconds total
- ✅ **Reliable** - Error handling & retries
- ✅ **Scalable** - Handle any volume
- ✅ **Professional** - Enterprise-grade output

---

## 🔧 Configuration Details

### **Make.com Modules:**
1. **Webhook Trigger** - Receives Fulcrum data
2. **Data Transformation** - Processes 166 fields
3. **PDF Generation** - Calls your API
4. **Google Drive Upload** - Stores PDFs
5. **Email Notification** - Sends to customer
6. **Portal Update** - Syncs database

### **Required API Keys:**
- `FULCRUM_API_KEY` - Fulcrum data access
- `PDF_GENERATOR_URL` - Your deployed service
- `GOOGLE_DRIVE_CREDENTIALS` - File storage
- `PORTAL_API_KEY` - Database sync
- `EMAIL_SERVICE_API_KEY` - Notifications

---

## 🧪 Testing Checklist

### **Before Going Live:**
- [ ] PDF generator deployed and working
- [ ] Make.com scenario created
- [ ] All API keys configured
- [ ] Webhook URL copied
- [ ] Test webhook triggered
- [ ] PDF generated successfully
- [ ] Google Drive upload working
- [ ] Email notification sent
- [ ] Portal database updated

### **Test Commands:**
```bash
# Test PDF generator
curl https://your-app.railway.app/health

# Test webhook
curl -X POST https://hook.eu1.make.com/YOUR_WEBHOOK_ID \
  -H "Content-Type: application/json" \
  -d '{"test": "data"}'
```

---

## 🚀 Ready to Integrate!

**Total setup time: ~15 minutes**

1. **Deploy PDF generator** (5 min)
2. **Create Make.com scenario** (5 min)
3. **Configure variables** (2 min)
4. **Test integration** (3 min)

**This will give you a fully automated PDF generation system!** 🎯

Ready to start? Let's go! 🚀
