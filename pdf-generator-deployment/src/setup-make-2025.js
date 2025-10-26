#!/usr/bin/env node

// Setup Make.com Integration - 2025 Updated Version
// Works with the new Make.com interface and OAuth2 authentication

const { MakeAPI2025, createVertexPDFScenario2025 } = require('./make-api-2025');
const readline = require('readline');
require('dotenv').config();

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Helper function to ask questions
function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function main() {
  console.log('🚀 Vertex PDF Generator - Make.com Setup 2025');
  console.log('==============================================\n');
  
  // Check required environment variables
  const requiredVars = ['MAKE_CLIENT_ID', 'MAKE_CLIENT_SECRET', 'MAKE_REDIRECT_URI', 'PDF_GENERATOR_URL'];
  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.error('❌ Missing required environment variables:');
    missingVars.forEach(varName => {
      console.error(`   - ${varName}`);
    });
    console.error('\nPlease set these variables in your .env file');
    console.error('\nTo get these values:');
    console.error('1. Go to Make.com Developer Hub');
    console.error('2. Create a new custom app');
    console.error('3. Copy the Client ID, Client Secret, and Redirect URI');
    process.exit(1);
  }
  
  const oauthConfig = {
    clientId: process.env.MAKE_CLIENT_ID,
    clientSecret: process.env.MAKE_CLIENT_SECRET,
    redirectUri: process.env.MAKE_REDIRECT_URI
  };
  
  const pdfGeneratorUrl = process.env.PDF_GENERATOR_URL;
  
  console.log(`📡 PDF Generator URL: ${pdfGeneratorUrl}`);
  console.log(`🔑 Make.com Client ID: ${oauthConfig.clientId.substring(0, 8)}...`);
  console.log(`🔗 Redirect URI: ${oauthConfig.redirectUri}`);
  console.log('');
  
  // Initialize Make.com API
  const makeAPI = new MakeAPI2025(oauthConfig);
  
  // Step 1: OAuth2 Authentication
  console.log('1️⃣ Setting up OAuth2 authentication...');
  const authResult = await makeAPI.authenticate();
  
  if (!authResult.success) {
    console.error('❌ OAuth2 setup failed:', authResult.error);
    process.exit(1);
  }
  
  console.log('\n📋 Please complete the OAuth2 flow:');
  console.log('1. Visit the URL above in your browser');
  console.log('2. Authorize the application');
  console.log('3. Copy the authorization code from the redirect URL');
  console.log('');
  
  const authorizationCode = await askQuestion('Enter the authorization code: ');
  
  const completeAuthResult = await makeAPI.completeAuth(authorizationCode);
  if (!completeAuthResult.success) {
    console.error('❌ OAuth2 completion failed:', completeAuthResult.error);
    process.exit(1);
  }
  
  console.log('✅ OAuth2 authentication successful');
  console.log('');
  
  // Step 2: Test API connection
  console.log('2️⃣ Testing Make.com API connection...');
  const connectionTest = await makeAPI.testConnection();
  
  if (!connectionTest.success) {
    console.error('❌ Make.com API connection failed:', connectionTest.error);
    process.exit(1);
  }
  
  console.log('✅ Make.com API connection successful');
  console.log(`👤 User: ${connectionTest.user.name || connectionTest.user.email}`);
  console.log('');
  
  // Step 3: Create custom app (optional)
  const createApp = await askQuestion('Do you want to create a custom app for the PDF generator? (y/n): ');
  
  let customAppId = null;
  if (createApp.toLowerCase() === 'y') {
    console.log('3️⃣ Creating custom app...');
    const appResult = await makeAPI.createCustomApp({
      name: 'Vertex PDF Generator',
      description: 'Custom PDF generation service for Vertex Solar surveys'
    });
    
    if (appResult.success) {
      customAppId = appResult.appId;
      console.log('✅ Custom app created successfully');
    } else {
      console.warn('⚠️ Custom app creation failed, continuing without it');
    }
    console.log('');
  }
  
  // Step 4: Create scenario
  console.log('4️⃣ Creating Vertex PDF scenario...');
  const scenarioData = createVertexPDFScenario2025(pdfGeneratorUrl);
  const scenarioResult = await makeAPI.createScenario(scenarioData);
  
  if (!scenarioResult.success) {
    console.error('❌ Scenario creation failed:', scenarioResult.error);
    process.exit(1);
  }
  
  console.log('✅ Scenario created successfully');
  console.log(`📋 Scenario ID: ${scenarioResult.scenarioId}`);
  console.log('');
  
  // Step 5: Create webhook
  console.log('5️⃣ Creating webhook...');
  const webhookResult = await makeAPI.createWebhook(scenarioResult.scenarioId, {
    name: 'Vertex PDF Webhook 2025',
    description: 'Webhook for Vertex Solar PDF generation'
  });
  
  if (!webhookResult.success) {
    console.warn('⚠️ Webhook creation failed, but scenario was created');
  } else {
    console.log('✅ Webhook created successfully');
    console.log(`🔗 Webhook URL: ${webhookResult.webhook.url}`);
  }
  console.log('');
  
  // Step 6: Deploy scenario
  console.log('6️⃣ Deploying scenario...');
  const deployResult = await makeAPI.deployScenario(scenarioResult.scenarioId);
  
  if (!deployResult.success) {
    console.warn('⚠️ Deployment failed, but scenario was created');
  } else {
    console.log('✅ Scenario deployed successfully');
  }
  console.log('');
  
  // Step 7: Test webhook
  if (webhookResult.success) {
    console.log('7️⃣ Testing webhook...');
    try {
      const axios = require('axios');
      const testResponse = await axios.post(webhookResult.webhook.url, {
        record_id: 'test-123',
        form_id: 'test-form',
        created_at: new Date().toISOString()
      });
      
      console.log('✅ Webhook test successful');
    } catch (error) {
      console.warn('⚠️ Webhook test failed:', error.message);
    }
    console.log('');
  }
  
  // Summary
  console.log('🎉 Setup Complete!');
  console.log('==================');
  console.log(`📋 Scenario ID: ${scenarioResult.scenarioId}`);
  console.log(`🔗 Webhook URL: ${webhookResult.webhook?.url || 'Not created'}`);
  if (customAppId) {
    console.log(`📱 Custom App ID: ${customAppId}`);
  }
  console.log('');
  
  console.log('📋 Next Steps:');
  console.log('1. Configure Fulcrum webhook to point to the Make.com webhook URL');
  console.log('2. Set up Google Drive connection in Make.com');
  console.log('3. Configure email service in Make.com');
  console.log('4. Set up the following variables in Make.com:');
  console.log('   - FULCRUM_API_KEY');
  console.log('   - PDF_GENERATOR_API_KEY');
  console.log('   - GOOGLE_DRIVE_CREDENTIALS');
  console.log('   - EMAIL_SERVICE_API_KEY');
  console.log('5. Test with a real Fulcrum survey');
  console.log('');
  
  console.log('🎯 Your automated PDF generation system is ready!');
  
  rl.close();
}

// Handle errors
process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error.message);
  rl.close();
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
  rl.close();
  process.exit(1);
});

// Run setup
main().catch(error => {
  console.error('❌ Setup failed:', error.message);
  rl.close();
  process.exit(1);
});
