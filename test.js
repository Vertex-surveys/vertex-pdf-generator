#!/usr/bin/env node

// Automated Test Suite for Vertex PDF Generator
// Run with: node test.js

const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Test configuration
const config = {
  baseUrl: process.env.TEST_URL || 'http://localhost:3000',
  timeout: 30000,
  outputDir: './test-outputs'
};

// Create output directory
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

// Test results
const results = {
  passed: 0,
  failed: 0,
  tests: []
};

// Helper function to log results
function logTest(testName, passed, message = '') {
  const status = passed ? '✅' : '❌';
  console.log(`${status} ${testName}: ${message}`);
  
  results.tests.push({
    name: testName,
    passed: passed,
    message: message,
    timestamp: new Date().toISOString()
  });
  
  if (passed) {
    results.passed++;
  } else {
    results.failed++;
  }
}

// Test 1: Health Check
async function testHealthCheck() {
  try {
    console.log('\n1️⃣ Testing health check...');
    
    const response = await axios.get(`${config.baseUrl}/health`, {
      timeout: config.timeout
    });
    
    if (response.status === 200 && response.data.status === 'healthy') {
      logTest('Health Check', true, `Server is healthy (${response.data.version})`);
      return true;
    } else {
      logTest('Health Check', false, 'Server returned unhealthy status');
      return false;
    }
  } catch (error) {
    logTest('Health Check', false, `Connection failed: ${error.message}`);
    return false;
  }
}

// Test 2: Test PDF Generation
async function testPdfGeneration() {
  try {
    console.log('\n2️⃣ Testing PDF generation...');
    
    const response = await axios.get(`${config.baseUrl}/api/test-pdf`, {
      timeout: config.timeout,
      responseType: 'arraybuffer'
    });
    
    if (response.status === 200 && response.data.length > 0) {
      // Save test PDF
      const pdfPath = path.join(config.outputDir, 'test.pdf');
      fs.writeFileSync(pdfPath, response.data);
      
      logTest('PDF Generation', true, `PDF generated successfully (${response.data.length} bytes)`);
      return true;
    } else {
      logTest('PDF Generation', false, 'PDF generation failed or returned empty');
      return false;
    }
  } catch (error) {
    logTest('PDF Generation', false, `PDF generation failed: ${error.message}`);
    return false;
  }
}

// Test 3: Custom PDF Generation
async function testCustomPdfGeneration() {
  try {
    console.log('\n3️⃣ Testing custom PDF generation...');
    
    const testData = {
      property: {
        address: '123 Test Street, London, SW1A 1AA',
        type: 'Detached House',
        age: '1970-1999',
        wallConstruction: 'Cavity wall',
        roofType: 'Pitched roof',
        currentHeating: 'Gas boiler',
        electricalSupply: 'Single phase',
        consumerUnit: 'Modern consumer unit'
      },
      installer: {
        name: 'Vertex Solar',
        logo: null
      },
      customer: {
        name: 'John Smith',
        email: 'john@example.com',
        phone: '01234567890'
      },
      surveyor: {
        name: 'Professional Surveyor',
        date: new Date().toLocaleDateString('en-GB'),
        time: new Date().toLocaleTimeString('en-GB')
      },
      gps: {
        latitude: 51.5074,
        longitude: -0.1278,
        hasData: true
      },
      photos: {
        hero: null,
        allPhotos: []
      }
    };
    
    const response = await axios.post(`${config.baseUrl}/api/generate-pdf`, testData, {
      timeout: config.timeout,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (response.status === 200 && response.data.success) {
      logTest('Custom PDF Generation', true, `Custom PDF generated successfully (${response.data.pdfSize} bytes)`);
      return true;
    } else {
      logTest('Custom PDF Generation', false, `Custom PDF generation failed: ${response.data.message || 'Unknown error'}`);
      return false;
    }
  } catch (error) {
    logTest('Custom PDF Generation', false, `Custom PDF generation failed: ${error.message}`);
    return false;
  }
}

// Test 4: Error Handling
async function testErrorHandling() {
  try {
    console.log('\n4️⃣ Testing error handling...');
    
    // Test with invalid data
    const response = await axios.post(`${config.baseUrl}/api/generate-pdf`, {
      invalid: 'data'
    }, {
      timeout: config.timeout,
      headers: {
        'Content-Type': 'application/json'
      },
      validateStatus: function (status) {
        return status < 500; // Accept 4xx errors
      }
    });
    
    if (response.status === 400) {
      logTest('Error Handling', true, 'Server correctly handles invalid data');
      return true;
    } else {
      logTest('Error Handling', false, 'Server did not handle invalid data correctly');
      return false;
    }
  } catch (error) {
    if (error.response && error.response.status === 400) {
      logTest('Error Handling', true, 'Server correctly handles invalid data');
      return true;
    } else {
      logTest('Error Handling', false, `Error handling test failed: ${error.message}`);
      return false;
    }
  }
}

// Test 5: Performance Test
async function testPerformance() {
  try {
    console.log('\n5️⃣ Testing performance...');
    
    const startTime = Date.now();
    
    const response = await axios.get(`${config.baseUrl}/api/test-pdf`, {
      timeout: config.timeout,
      responseType: 'arraybuffer'
    });
    
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    
    if (response.status === 200 && responseTime < 15000) { // 15 second limit
      logTest('Performance', true, `PDF generated in ${responseTime}ms`);
      return true;
    } else {
      logTest('Performance', false, `PDF generation too slow: ${responseTime}ms`);
      return false;
    }
  } catch (error) {
    logTest('Performance', false, `Performance test failed: ${error.message}`);
    return false;
  }
}

// Test 6: Concurrent Requests
async function testConcurrentRequests() {
  try {
    console.log('\n6️⃣ Testing concurrent requests...');
    
    const promises = [];
    for (let i = 0; i < 3; i++) {
      promises.push(
        axios.get(`${config.baseUrl}/health`, { timeout: config.timeout })
      );
    }
    
    const responses = await Promise.all(promises);
    const allSuccessful = responses.every(response => response.status === 200);
    
    if (allSuccessful) {
      logTest('Concurrent Requests', true, 'Server handles concurrent requests correctly');
      return true;
    } else {
      logTest('Concurrent Requests', false, 'Server failed to handle concurrent requests');
      return false;
    }
  } catch (error) {
    logTest('Concurrent Requests', false, `Concurrent request test failed: ${error.message}`);
    return false;
  }
}

// Main test runner
async function runTests() {
  console.log('🧪 Starting Vertex PDF Generator Test Suite...');
  console.log(`📍 Testing: ${config.baseUrl}`);
  console.log(`⏱️  Timeout: ${config.timeout}ms`);
  console.log(`📁 Output: ${config.outputDir}\n`);
  
  // Run all tests
  await testHealthCheck();
  await testPdfGeneration();
  await testCustomPdfGeneration();
  await testErrorHandling();
  await testPerformance();
  await testConcurrentRequests();
  
  // Print summary
  console.log('\n📊 Test Summary:');
  console.log(`✅ Passed: ${results.passed}`);
  console.log(`❌ Failed: ${results.failed}`);
  console.log(`📈 Success Rate: ${Math.round((results.passed / (results.passed + results.failed)) * 100)}%`);
  
  // Save detailed results
  const resultsPath = path.join(config.outputDir, 'test-results.json');
  fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
  console.log(`📄 Detailed results saved to: ${resultsPath}`);
  
  // Exit with appropriate code
  if (results.failed === 0) {
    console.log('\n🎉 All tests passed! PDF generator is ready for production.');
    process.exit(0);
  } else {
    console.log('\n⚠️  Some tests failed. Please check the issues above.');
    process.exit(1);
  }
}

// Handle uncaught errors
process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error.message);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Run tests
runTests().catch(error => {
  console.error('❌ Test suite failed:', error.message);
  process.exit(1);
});

