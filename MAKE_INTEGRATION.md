# 🔗 Make.com Integration Guide

**Complete integration guide for Make.com automation with Vertex PDF Generator**

---

## 🎯 Integration Overview

### **Data Flow:**
```
Fulcrum Survey Completion
    ↓ (Webhook to Make.com)
Make.com Scenario
    ↓ (Data Processing & Transformation)
Vertex PDF Generator API
    ↓ (Generate High-Quality PDF)
Google Drive Storage
    ↓ (Organize & Store)
Email Notification
    ↓ (Send to Customer)
Portal Database Update
```

---

## 🔧 Make.com Scenario Setup

### **Module 1: Webhook Trigger**
```
Webhook > Catch a webhook
- URL: https://hook.eu1.make.com/[YOUR_WEBHOOK_ID]
- Method: POST
- Content Type: application/json
- Description: Triggers when Fulcrum survey is completed
```

### **Module 2: Fulcrum API Data Fetch**
```
HTTP > Make a request
- URL: https://api.fulcrumapp.com/api/v2/records/{{webhook.record_id}}
- Method: GET
- Headers: 
  - Authorization: Bearer {{FULCRUM_API_KEY}}
  - Content-Type: application/json
- Description: Fetch complete record data from Fulcrum
```

### **Module 3: Photo Data Fetch**
```
HTTP > Make a request
- URL: https://api.fulcrumapp.com/api/v2/records/{{webhook.record_id}}/photos
- Method: GET
- Headers: 
  - Authorization: Bearer {{FULCRUM_API_KEY}}
- Description: Fetch all photos for the record
```

### **Module 4: Data Transformation**
```
Code > Run JavaScript
- Description: Transform Fulcrum data to PDF generator format
```

**JavaScript Code:**
```javascript
// Extract and transform Fulcrum data
const fulcrumData = bundle.inputData;
const photos = bundle.inputData2;

// Helper functions
function extractChoice(formValues, fieldId) {
  const field = formValues[fieldId];
  if (field && field.choice_values && field.choice_values.length > 0) {
    return field.choice_values[0];
  }
  return 'N/A';
}

function extractText(formValues, fieldId) {
  const field = formValues[fieldId];
  if (field && field.value) {
    return field.value;
  }
  return 'N/A';
}

function extractPhoto(formValues, fieldId) {
  const field = formValues[fieldId];
  if (field && Array.isArray(field) && field.length > 0) {
    return field[0];
  }
  return null;
}

function extractAddress(formValues) {
  const addressField = formValues['7b00'];
  if (addressField && addressField.value) {
    const parts = [
      addressField.value.sub_thoroughfare,
      addressField.value.thoroughfare,
      addressField.value.locality,
      addressField.value.admin_area,
      addressField.value.postal_code
    ].filter(part => part && part.trim());
    
    if (parts.length > 0) {
      return parts.join(', ');
    }
  }
  return 'HEAT PUMP ASSESSMENT';
}

// Transform data
const formValues = fulcrumData._formValuesJSON || {};
const transformedData = {
  // Survey Information
  id: fulcrumData.id || 'N/A',
  createdAt: fulcrumData.created_at || new Date().toISOString(),
  
  // Property Information
  property: {
    address: extractAddress(formValues),
    type: extractChoice(formValues, '6660'),
    age: extractChoice(formValues, '5d3b'),
    wallConstruction: extractChoice(formValues, '2bfd'),
    roofType: extractChoice(formValues, 'fd00'),
    floorConstruction: extractChoice(formValues, '8600'),
    currentHeating: extractChoice(formValues, '4100'),
    electricalSupply: extractChoice(formValues, '30e7'),
    consumerUnit: extractChoice(formValues, '286a')
  },
  
  // Installer Information
  installer: {
    name: extractChoice(formValues, 'installer_company_choice'),
    logo: extractPhoto(formValues, '609d'),
    contact: extractText(formValues, 'installer_contact')
  },
  
  // Customer Information
  customer: {
    name: extractText(formValues, 'customer_name'),
    email: extractText(formValues, 'customer_email'),
    phone: extractText(formValues, 'customer_phone'),
    address: extractAddress(formValues)
  },
  
  // Photos
  photos: {
    hero: extractPhoto(formValues, '2480'),
    elevation: extractPhoto(formValues, '31d9'),
    technical: extractPhoto(formValues, '113a'),
    rooms: extractPhoto(formValues, '3b80'),
    allPhotos: photos || []
  },
  
  // GPS Information
  gps: {
    latitude: fulcrumData.latitude,
    longitude: fulcrumData.longitude,
    hasData: !!(fulcrumData.latitude && fulcrumData.longitude)
  },
  
  // Surveyor Information
  surveyor: {
    name: fulcrumData.createdByName || 'Professional Surveyor',
    email: fulcrumData.createdByEmail || null,
    date: new Date(fulcrumData.created_at).toLocaleDateString('en-GB'),
    time: new Date(fulcrumData.created_at).toLocaleTimeString('en-GB')
  },
  
  // Technical Assessment
  technical: {
    heatLoss: extractText(formValues, 'heat_loss_field'),
    systemSizing: extractText(formValues, 'system_sizing_field'),
    efficiencyRating: extractChoice(formValues, 'efficiency_rating'),
    annualSavings: extractText(formValues, 'annual_savings'),
    paybackPeriod: extractText(formValues, 'payback_period')
  },
  
  // Recommendations
  recommendations: {
    primary: extractText(formValues, 'primary_recommendations'),
    secondary: extractText(formValues, 'secondary_recommendations'),
    immediate: extractText(formValues, 'immediate_actions'),
    shortTerm: extractText(formValues, 'short_term_actions'),
    longTerm: extractText(formValues, 'long_term_actions')
  },
  
  // Metadata
  metadata: {
    formVersion: 'Vertex ASHP v1.1',
    totalFields: Object.keys(formValues).length,
    photoCount: photos ? photos.length : 0,
    hasGpsData: !!(fulcrumData.latitude && fulcrumData.longitude),
    processingDate: new Date().toISOString()
  }
};

// Generate folder structure
const folderName = `${transformedData.customer.name} - ${transformedData.property.address}`.replace(/[<>:"/\\|?*]/g, '_');
const year = new Date().getFullYear();
const month = new Date().toLocaleString('en-US', { month: 'long' });

return {
  ...transformedData,
  folderName: folderName,
  year: year,
  month: month,
  needsReview: transformedData.metadata.photoCount === 0,
  isComplete: transformedData.metadata.totalFields > 100
};
```

### **Module 5: Google Drive Folder Creation**
```
Google Drive > Create a folder
- Parent folder: Vertex Solar Surveys/{{year}}/{{month}}
- Folder name: {{folderName}}
- Description: Survey ID: {{id}} | Customer: {{customer.name}} | Date: {{createdAt}}
```

### **Module 6: PDF Generation**
```
HTTP > Make a request
- URL: https://your-pdf-generator.railway.app/api/generate-pdf
- Method: POST
- Headers: 
  - Content-Type: application/json
  - Authorization: Bearer {{PDF_GENERATOR_API_KEY}}
- Body: {{json(4)}}
- Description: Generate the best possible PDF
```

### **Module 7: PDF Upload to Drive**
```
Google Drive > Upload a file
- File: {{pdfBuffer}}
- Folder: {{folderId}}
- Name: Professional Heat Pump Assessment - {{customer.name}}.pdf
- Description: Complete technical assessment report
```

### **Module 8: Portal Database Update**
```
HTTP > Make a request
- URL: https://your-portal.com/api/surveys
- Method: POST
- Headers: 
  - Content-Type: application/json
  - Authorization: Bearer {{PORTAL_API_KEY}}
- Body: {
  "surveyId": "{{id}}",
  "customerName": "{{customer.name}}",
  "propertyAddress": "{{property.address}}",
  "installerName": "{{installer.name}}",
  "surveyorName": "{{surveyor.name}}",
  "surveyDate": "{{createdAt}}",
  "pdfUrl": "{{pdfDriveUrl}}",
  "folderUrl": "{{folderUrl}}",
  "status": "completed",
  "photoCount": "{{metadata.photoCount}}",
  "hasGpsData": "{{gps.hasData}}"
}
```

### **Module 9: Email Notification**
```
Email > Send an email
- To: {{customer.email}}
- Subject: Your Professional Heat Pump Assessment Report is Ready
- Body: Professional email template with download links
- Attachments: Survey Report PDF
```

---

## 🔑 Required API Keys

### **Make.com Variables:**
```bash
# Fulcrum API
FULCRUM_API_KEY=your_fulcrum_api_key

# PDF Generator
PDF_GENERATOR_API_KEY=your_pdf_generator_api_key
PDF_GENERATOR_URL=https://your-pdf-generator.railway.app

# Google Drive
GOOGLE_DRIVE_CREDENTIALS=your_google_service_account_json

# Portal
PORTAL_API_KEY=your_portal_api_key
PORTAL_URL=https://your-portal.com

# Email
EMAIL_SERVICE_API_KEY=your_email_service_key
```

---

## 🧪 Testing the Integration

### **Test 1: Webhook Test**
```bash
# Test webhook endpoint
curl -X POST https://hook.eu1.make.com/YOUR_WEBHOOK_ID \
  -H "Content-Type: application/json" \
  -d '{
    "record_id": "test-123",
    "form_id": "your-form-id",
    "created_at": "2025-10-25T20:30:00Z"
  }'
```

### **Test 2: PDF Generator Test**
```bash
# Test PDF generator directly
curl -X POST https://your-pdf-generator.railway.app/api/generate-pdf \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "property": {
      "address": "123 Test Street, London"
    },
    "installer": {
      "name": "Vertex Solar"
    },
    "customer": {
      "name": "John Smith"
    }
  }'
```

### **Test 3: End-to-End Test**
```bash
# Test complete flow
curl -X POST https://hook.eu1.make.com/YOUR_WEBHOOK_ID \
  -H "Content-Type: application/json" \
  -d '{
    "record_id": "real-record-id",
    "form_id": "real-form-id",
    "created_at": "2025-10-25T20:30:00Z"
  }'
```

---

## 🚀 Deployment Steps

### **Step 1: Deploy PDF Generator**
```bash
cd vertex-pdf-generator
railway up
```

### **Step 2: Get Deployment URL**
```bash
railway domain
# Copy the URL for Make.com
```

### **Step 3: Set up Make.com Scenario**
1. Create new scenario
2. Add webhook trigger
3. Add all modules above
4. Configure API keys
5. Test scenario

### **Step 4: Configure Fulcrum Webhook**
1. Go to Fulcrum form settings
2. Add webhook URL: `https://hook.eu1.make.com/YOUR_WEBHOOK_ID`
3. Select trigger: "Record created"
4. Test webhook

---

## 📊 Monitoring & Alerts

### **Success Metrics:**
- ✅ **PDF Generation**: < 10 seconds
- ✅ **Total Processing**: < 30 seconds
- ✅ **Success Rate**: > 99%
- ✅ **Error Rate**: < 1%

### **Error Handling:**
- **PDF Generation Fails**: Retry 3 times
- **API Timeout**: Send alert email
- **Data Validation**: Log errors for review
- **File Upload Fails**: Retry with exponential backoff

### **Alerts:**
- **High Error Rate**: Email admin
- **Slow Performance**: Slack notification
- **API Down**: Immediate alert
- **Storage Full**: Critical alert

---

## 🎯 Success Checklist

### **Before Going Live:**
- [ ] PDF generator deployed and tested
- [ ] Make.com scenario created and tested
- [ ] All API keys configured
- [ ] Fulcrum webhook configured
- [ ] Google Drive integration working
- [ ] Email notifications working
- [ ] Portal database integration working
- [ ] Error handling configured
- [ ] Monitoring set up
- [ ] Alerts configured

### **After Going Live:**
- [ ] Monitor first 10 surveys
- [ ] Check PDF quality
- [ ] Verify email delivery
- [ ] Test portal integration
- [ ] Monitor performance
- [ ] Review error logs
- [ ] Optimize if needed

---

## 🚀 Ready to Integrate!

**Total setup time: ~45 minutes**

1. **Deploy PDF generator** (15 min)
2. **Set up Make.com scenario** (20 min)
3. **Configure webhooks** (5 min)
4. **Test integration** (5 min)

**This will give you a fully automated PDF generation system!** 🎯

Ready to start integrating? Let's go! 🚀

