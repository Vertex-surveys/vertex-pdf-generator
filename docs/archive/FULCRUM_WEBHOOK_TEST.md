# 🧪 TESTING FULCRUM WEBHOOK INTEGRATION

## 🎯 Your Integration is Ready!

**API URL:** `https://vertex-pdf-generator-production.up.railway.app`  
**Make.com App:** Configured ✅  
**Fulcrum:** Ready to trigger ✅

---

## 📋 TESTING STEPS

### **Step 1: Create Connection in Make.com**

1. **Open Make.com scenario**
2. **Click "Vertex PDF Generator" app**
3. **Click "Add a connection"**
4. **Enter:**
   - **Connection Name:** `Vertex PDF Production`
   - **Base URL:** `https://vertex-pdf-generator-production.up.railway.app`
   - **API Key:** (leave blank)
5. **Click "Save"**

---

### **Step 2: Set Up Webhook Module**

1. **Add "Vertex PDF Generator" → "Generate PDF Report" module**
2. **Select your connection**
3. **Configure endpoint:** `/api/generate-pdf`
4. **Set up data mapping:**

```json
{
  "property": {
    "address": "{{property_address}}"
  },
  "installer": {
    "name": "{{installer_name}}"
  },
  "customer": {
    "name": "{{customer_name}}",
    "email": "{{customer_email}}"
  },
  "surveyor": {
    "name": "{{surveyor_name}}",
    "date": "{{survey_date}}"
  },
  "gps": {
    "latitude": "{{gps_latitude}}",
    "longitude": "{{gps_longitude}}",
    "hasData": true
  }
}
```

*(Map to your actual Fulcrum field names)*

---

### **Step 3: Trigger from Fulcrum**

#### **Option A: Test with Existing Survey**
1. **Open Fulcrum app**
2. **Find an existing survey/record**
3. **Make a small edit (e.g., add a note)**
4. **Save the record**
5. **Fulcrum sends webhook to Make.com**

#### **Option B: Use Fulcrum API Test**
1. **Go to Fulcrum → Settings → API**
2. **Get your webhook URL from Make.com**
3. **Test manually:**

```bash
curl -X POST https://your-make-webhook-url \
  -H "Content-Type: application/json" \
  -d '{
    "action": "record_updated",
    "record": {
      "form_name": "Vertex ASHP v1.1",
      "properties": {
        "address": "123 Test Street",
        "customer_name": "John Smith"
      }
    }
  }'
```

---

### **Step 4: Monitor Execution**

**In Make.com:**
1. **Watch scenario execution**
2. **Check each module execution time**
3. **Look for errors**
4. **Verify data flow**

**Check These Modules:**
- ✅ Webhook received from Fulcrum
- ✅ Data transformed correctly
- ✅ Vertex PDF Generator called
- ✅ PDF generated successfully
- ✅ Google Drive upload complete

---

## ✅ EXPECTED RESULTS

### **Success Indicators:**

1. **Make.com Scenario:**
   - Executes without errors
   - All modules complete
   - Execution time reasonable (<30 seconds)

2. **Railway API:**
   - Request received
   - PDF generated
   - Response returned

3. **PDF Generated:**
   - File created successfully
   - Portal design preserved
   - All fields mapped correctly

4. **Google Drive (if configured):**
   - File uploaded
   - Named correctly
   - In correct folder

---

## 🚨 TROUBLESHOOTING

### **Issue: Webhook Not Received**

**Check:**
- Fulcrum webhook is configured
- Webhook URL is correct
- Survey is being updated
- Make.com scenario is running

**Fix:**
- Test webhook manually
- Check Fulcrum webhook logs
- Verify Make.com webhook URL

---

### **Issue: API Error**

**Check Railway logs:**
```bash
# View logs in Railway dashboard
# Look for error messages
```

**Common Errors:**
- Invalid data format
- Missing required fields
- Authentication issues

**Fix:**
- Verify data mapping
- Check required fields
- Test API directly

---

### **Issue: PDF Not Generated**

**Check:**
- Puppeteer initialization
- Memory limits
- Timeout settings

**Fix:**
- Check Railway logs
- Increase instance size if needed
- Verify data format

---

## 🎯 TESTING CHECKLIST

- [ ] Make.com connection created
- [ ] Webhook module configured
- [ ] Fulcrum webhook triggered
- [ ] Data received in Make.com
- [ ] Data mapped correctly
- [ ] API called successfully
- [ ] PDF generated
- [ ] PDF downloaded/viewed
- [ ] Google Drive upload verified
- [ ] End-to-end workflow complete

---

## 🎉 SUCCESS!

Once all tests pass, your integration is **PRODUCTION READY**!

**Next Step:** Monitor performance and scale as needed.

---

**Need help? Check Railway logs or Make.com execution history.**

