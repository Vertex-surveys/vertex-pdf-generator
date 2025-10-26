# ✅ MAKE.COM INTEGRATION - COMPLETE SETUP

## 🎯 Your Live API URL

**Production URL:** `https://vertex-pdf-generator-production.up.railway.app`

---

## 📋 UPDATE MAKE.COM CONNECTION

### **Step 1: Update Base URL**

In the Make.com app builder where you are:

Replace this:
```json
"baseUrl": "https://www.example.com/api/v2"
```

With this:
```json
"baseUrl": "https://vertex-pdf-generator-production.up.railway.app"
```

**Or if it's just:**
```json
"baseUrl": "{{connection.baseUrl}}"
```

**Keep it as is** - the connection will ask you for the baseUrl value when creating a connection.

---

## 🔑 API KEY (NOT REQUIRED)

Your current deployment **doesn't require an API key**. 

If Make.com asks for an API key:
- Leave it blank
- Or use any dummy value
- The health endpoint is public

---

## 📝 COMPLETE UPDATE

**In Make.com App Builder:**

**Base Structure:**
```jsonc
{
  "baseUrl": "https://vertex-pdf-generator-production.up.railway.app",
  "headers": {
    "Authorization": "Bearer {{connection.apiKey}}",
    "Content-Type": "application/json"
  },
  "response": {
    "error": {
      "message": "[{{statusCode}}] {{body.error || body.message || 'Unknown error'}}"
    }
  },
  "log": {
    "sanitize": [
      "request.headers.authorization"
    ]
  }
}
```

**Common Data:**
```json
{
  "apiKey": "{{connection.apiKey}}",
  "baseUrl": "https://vertex-pdf-generator-production.up.railway.app"
}
```

---

## ✅ TEST YOUR INTEGRATION

### **Test 1: Health Check**
Use the "Generate PDF Report" action with endpoint `/health`

**Expected Response:**
```json
{"status":"healthy","timestamp":"...","version":"1.0.0"}
```

### **Test 2: PDF Generation**
Use endpoint `/api/generate-pdf` with Fulcrum data

**Expected Response:**
```json
{"success":true,"pdfSize":12345,"pages":2,"generatedAt":"..."}
```

---

## 🎉 YOU'RE DONE!

Save changes in Make.com and your integration is complete!

**Next Step:** Test with real Fulcrum webhook data 🚀

