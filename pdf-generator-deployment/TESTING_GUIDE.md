# 🧪 Testing Guide - Vertex PDF Generator

**Complete testing guide for the PDF generation system**

---

## 🚀 Quick Test (5 minutes)

### **Step 1: Install Dependencies**
```bash
cd vertex-pdf-generator
npm install
```

### **Step 2: Set Basic Environment**
```bash
# Create .env file
cp config/env.example .env

# Edit with minimal required variables
nano .env
```

**Minimum required:**
```bash
PORT=3000
NODE_ENV=development
FULCRUM_API_KEY=your_test_key
GOOGLE_MAPS_API_KEY=your_test_key
```

### **Step 3: Start Server**
```bash
npm start
```

### **Step 4: Test Health Check**
```bash
curl http://localhost:3000/health
```

**Expected response:**
```json
{
  "status": "healthy",
  "timestamp": "2025-10-25T20:30:00.000Z",
  "version": "1.0.0"
}
```

### **Step 5: Test PDF Generation**
```bash
# Download test PDF
curl http://localhost:3000/api/test-pdf -o test.pdf

# Open test.pdf to see the result!
open test.pdf
```

---

## 🔧 Advanced Testing

### **Test 1: Health Check**
```bash
curl -v http://localhost:3000/health
```

**What to check:**
- ✅ Status: "healthy"
- ✅ Response time: < 1 second
- ✅ No errors in console

### **Test 2: Test PDF Generation**
```bash
curl -v http://localhost:3000/api/test-pdf -o test.pdf
```

**What to check:**
- ✅ PDF downloads successfully
- ✅ File size: > 50KB
- ✅ PDF opens correctly
- ✅ Portal colors visible (`#FFD700`, `#FFC107`)
- ✅ Content displays properly

### **Test 3: Custom PDF Generation**
```bash
curl -X POST http://localhost:3000/api/generate-pdf \
  -H "Content-Type: application/json" \
  -d '{
    "property": {
      "address": "123 Test Street, London, SW1A 1AA",
      "type": "Detached House",
      "age": "1970-1999",
      "wallConstruction": "Cavity wall",
      "roofType": "Pitched roof",
      "currentHeating": "Gas boiler",
      "electricalSupply": "Single phase",
      "consumerUnit": "Modern consumer unit"
    },
    "installer": {
      "name": "Vertex Solar",
      "logo": null
    },
    "customer": {
      "name": "John Smith",
      "email": "john@example.com"
    },
    "surveyor": {
      "name": "Professional Surveyor",
      "date": "25/10/2025"
    },
    "gps": {
      "latitude": 51.5074,
      "longitude": -0.1278,
      "hasData": true
    },
    "photos": {
      "hero": null,
      "allPhotos": []
    }
  }' -o custom-test.pdf
```

**What to check:**
- ✅ PDF generates successfully
- ✅ Custom data displays correctly
- ✅ GPS map shows (if API key valid)
- ✅ Portal design applied
- ✅ No errors in response

---

## 🧪 Automated Testing

### **Create Test Script**
```bash
# Create test script
cat > test.js << 'EOF'
const axios = require('axios');

async function runTests() {
  const baseUrl = 'http://localhost:3000';
  
  console.log('🧪 Starting PDF Generator Tests...\n');
  
  // Test 1: Health Check
  try {
    console.log('1️⃣ Testing health check...');
    const health = await axios.get(`${baseUrl}/health`);
    console.log('✅ Health check passed:', health.data.status);
  } catch (error) {
    console.log('❌ Health check failed:', error.message);
  }
  
  // Test 2: Test PDF
  try {
    console.log('\n2️⃣ Testing PDF generation...');
    const pdf = await axios.get(`${baseUrl}/api/test-pdf`, {
      responseType: 'arraybuffer'
    });
    console.log('✅ PDF generated successfully:', pdf.data.length, 'bytes');
  } catch (error) {
    console.log('❌ PDF generation failed:', error.message);
  }
  
  // Test 3: Custom PDF
  try {
    console.log('\n3️⃣ Testing custom PDF...');
    const customPdf = await axios.post(`${baseUrl}/api/generate-pdf`, {
      property: {
        address: '123 Test Street, London',
        type: 'Detached House'
      },
      installer: {
        name: 'Vertex Solar'
      },
      customer: {
        name: 'John Smith'
      }
    });
    console.log('✅ Custom PDF generated successfully');
  } catch (error) {
    console.log('❌ Custom PDF failed:', error.message);
  }
  
  console.log('\n🎯 Tests completed!');
}

runTests();
EOF

# Run tests
node test.js
```

---

## 🌐 Production Testing

### **Test 1: Deploy to Railway**
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up

# Get deployment URL
railway domain
```

### **Test 2: Test Production Endpoints**
```bash
# Replace with your actual URL
export PROD_URL="https://your-app.railway.app"

# Health check
curl $PROD_URL/health

# Test PDF
curl $PROD_URL/api/test-pdf -o prod-test.pdf

# Custom PDF
curl -X POST $PROD_URL/api/generate-pdf \
  -H "Content-Type: application/json" \
  -d '{"property":{"address":"Test Address"}}' \
  -o prod-custom.pdf
```

### **Test 3: Make.com Integration**
```bash
# Test webhook endpoint
curl -X POST $PROD_URL/api/generate-pdf \
  -H "Content-Type: application/json" \
  -d '{
    "id": "test-123",
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

---

## 🔍 Debugging

### **Check Server Logs**
```bash
# Local development
npm start

# Check console output for errors
# Look for: ✅ Success messages
# Look for: ❌ Error messages
```

### **Common Issues & Solutions**

#### **Issue: "Cannot find module"**
```bash
# Solution: Install dependencies
npm install
```

#### **Issue: "Port already in use"**
```bash
# Solution: Kill existing process
lsof -ti:3000 | xargs kill -9
# Or change port in .env
```

#### **Issue: "PDF generation failed"**
```bash
# Check Puppeteer installation
npm install puppeteer

# Check system dependencies (Linux)
sudo apt-get install -y gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
```

#### **Issue: "Google Maps API error"**
```bash
# Check API key in .env
echo $GOOGLE_MAPS_API_KEY

# Test API key
curl "https://maps.googleapis.com/maps/api/staticmap?center=51.5074,-0.1278&zoom=10&size=400x400&key=YOUR_API_KEY"
```

---

## 📊 Performance Testing

### **Load Testing**
```bash
# Install artillery for load testing
npm install -g artillery

# Create load test config
cat > load-test.yml << 'EOF'
config:
  target: 'http://localhost:3000'
  phases:
    - duration: 60
      arrivalRate: 5
scenarios:
  - name: "PDF Generation Test"
    flow:
      - get:
          url: "/health"
      - post:
          url: "/api/generate-pdf"
          json:
            property:
              address: "Test Address"
            installer:
              name: "Vertex Solar"
            customer:
              name: "John Smith"
EOF

# Run load test
artillery run load-test.yml
```

### **Performance Targets**
- ✅ **Health check**: < 100ms
- ✅ **PDF generation**: < 10 seconds
- ✅ **Concurrent users**: 10+
- ✅ **Memory usage**: < 512MB
- ✅ **CPU usage**: < 80%

---

## 🎯 Success Criteria

### **Basic Tests (Must Pass)**
- [ ] Server starts without errors
- [ ] Health check returns "healthy"
- [ ] Test PDF generates successfully
- [ ] Custom PDF generates successfully
- [ ] PDF opens correctly
- [ ] Portal colors visible
- [ ] Content displays properly

### **Advanced Tests (Should Pass)**
- [ ] Production deployment works
- [ ] Make.com integration works
- [ ] Performance targets met
- [ ] Error handling works
- [ ] Logging works correctly

### **Production Ready (Must Pass)**
- [ ] All basic tests pass
- [ ] All advanced tests pass
- [ ] Monitoring set up
- [ ] Error alerts configured
- [ ] Backup strategy in place

---

## 🚀 Ready to Test!

**Total testing time: ~30 minutes**

1. **Quick test** (5 min)
2. **Advanced testing** (10 min)
3. **Production testing** (10 min)
4. **Performance testing** (5 min)

**This will ensure your PDF generator is bulletproof!** 🎯

Ready to start testing? Let's go! 🚀
