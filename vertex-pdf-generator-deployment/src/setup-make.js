#!/usr/bin/env node

// Setup Make.com Integration for Vertex PDF Generator
// Run with: node src/setup-make.js

const { setupVertexPDFWorkflow, MakeAPI } = require('./make-api');
require('dotenv').config();

async function main() {
  console.log('🚀 Vertex PDF Generator - Make.com Setup');
  console.log('==========================================\n');
  
  // Check required environment variables
  const requiredVars = ['MAKE_API_KEY', 'PDF_GENERATOR_URL'];
  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.error('❌ Missing required environment variables:');
    missingVars.forEach(varName => {
      console.error(`   - ${varName}`);
    });
    console.error('\nPlease set these variables in your .env file');
    process.exit(1);
  }
  
  const makeAPIKey = process.env.MAKE_API_KEY;
  const pdfGeneratorUrl = process.env.PDF_GENERATOR_URL;
  
  console.log(`📡 PDF Generator URL: ${pdfGeneratorUrl}`);
  console.log(`🔑 Make.com API Key: ${makeAPIKey.substring(0, 8)}...`);
  console.log('');
  
  // Test Make.com API connection
  console.log('1️⃣ Testing Make.com API connection...');
  const makeAPI = new MakeAPI(makeAPIKey);
  const connectionTest = await makeAPI.testConnection();
  
  if (!connectionTest.success) {
    console.error('❌ Make.com API connection failed:', connectionTest.error);
    console.error('\nPlease check your MAKE_API_KEY in the .env file');
    process.exit(1);
  }
  
  console.log('✅ Make.com API connection successful');
  console.log(`👤 User: ${connectionTest.user.name || connectionTest.user.email}`);
  console.log('');
  
  // Setup the complete workflow
  console.log('2️⃣ Setting up Vertex PDF workflow...');
  const setupResult = await setupVertexPDFWorkflow(makeAPIKey, pdfGeneratorUrl);
  
  if (!setupResult.success) {
    console.error('❌ Workflow setup failed:', setupResult.error);
    process.exit(1);
  }
  
  console.log('\n🎉 Setup Complete!');
  console.log('==================');
  console.log(`📋 Scenario ID: ${setupResult.scenarioId}`);
  console.log(`🔗 Webhook URL: ${setupResult.webhookUrl || 'Not created'}`);
  console.log('');
  
  // Test the webhook if created
  if (setupResult.webhookUrl) {
    console.log('3️⃣ Testing webhook...');
    try {
      const axios = require('axios');
      const testResponse = await axios.post(setupResult.webhookUrl, {
        record_id: 'test-123',
        form_id: 'test-form',
        created_at: new Date().toISOString()
      });
      
      console.log('✅ Webhook test successful');
    } catch (error) {
      console.warn('⚠️ Webhook test failed:', error.message);
    }
  }
  
  console.log('\n📋 Next Steps:');
  console.log('1. Configure Fulcrum webhook to point to the Make.com webhook URL');
  console.log('2. Set up Google Drive connection in Make.com');
  console.log('3. Configure email service in Make.com');
  console.log('4. Test with a real Fulcrum survey');
  console.log('');
  
  console.log('🎯 Your automated PDF generation system is ready!');
}

// Handle errors
process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error.message);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Run setup
main().catch(error => {
  console.error('❌ Setup failed:', error.message);
  process.exit(1);
});

