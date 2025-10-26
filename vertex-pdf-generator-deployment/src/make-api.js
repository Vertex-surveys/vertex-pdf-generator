// Make.com API Integration
// Programmatically create and manage Make.com scenarios

const axios = require('axios');

class MakeAPI {
  constructor(apiKey, baseUrl = 'https://www.make.com/api/v2') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
    this.headers = {
      'Authorization': `Token ${apiKey}`,
      'Content-Type': 'application/json'
    };
  }

  // Test API connection
  async testConnection() {
    try {
      console.log('🔍 Testing Make.com API connection...');
      
      const response = await axios.get(`${this.baseUrl}/users/me`, {
        headers: this.headers
      });
      
      console.log('✅ Make.com API connection successful');
      return {
        success: true,
        user: response.data
      };
    } catch (error) {
      console.error('❌ Make.com API connection failed:', error.message);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Create a new scenario
  async createScenario(scenarioData) {
    try {
      console.log('📝 Creating Make.com scenario...');
      
      const response = await axios.post(`${this.baseUrl}/scenarios`, scenarioData, {
        headers: this.headers
      });
      
      console.log('✅ Scenario created successfully:', response.data.id);
      return {
        success: true,
        scenarioId: response.data.id,
        scenario: response.data
      };
    } catch (error) {
      console.error('❌ Failed to create scenario:', error.message);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Get scenario by ID
  async getScenario(scenarioId) {
    try {
      const response = await axios.get(`${this.baseUrl}/scenarios/${scenarioId}`, {
        headers: this.headers
      });
      
      return {
        success: true,
        scenario: response.data
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Update scenario
  async updateScenario(scenarioId, scenarioData) {
    try {
      console.log(`📝 Updating scenario ${scenarioId}...`);
      
      const response = await axios.put(`${this.baseUrl}/scenarios/${scenarioId}`, scenarioData, {
        headers: this.headers
      });
      
      console.log('✅ Scenario updated successfully');
      return {
        success: true,
        scenario: response.data
      };
    } catch (error) {
      console.error('❌ Failed to update scenario:', error.message);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Start scenario
  async startScenario(scenarioId) {
    try {
      console.log(`🚀 Starting scenario ${scenarioId}...`);
      
      const response = await axios.post(`${this.baseUrl}/scenarios/${scenarioId}/start`, {}, {
        headers: this.headers
      });
      
      console.log('✅ Scenario started successfully');
      return {
        success: true,
        execution: response.data
      };
    } catch (error) {
      console.error('❌ Failed to start scenario:', error.message);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Stop scenario
  async stopScenario(scenarioId) {
    try {
      console.log(`⏹️ Stopping scenario ${scenarioId}...`);
      
      const response = await axios.post(`${this.baseUrl}/scenarios/${scenarioId}/stop`, {}, {
        headers: this.headers
      });
      
      console.log('✅ Scenario stopped successfully');
      return {
        success: true,
        execution: response.data
      };
    } catch (error) {
      console.error('❌ Failed to stop scenario:', error.message);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Get scenario executions
  async getExecutions(scenarioId, limit = 10) {
    try {
      const response = await axios.get(`${this.baseUrl}/scenarios/${scenarioId}/executions`, {
        headers: this.headers,
        params: { limit }
      });
      
      return {
        success: true,
        executions: response.data
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Create webhook
  async createWebhook(scenarioId, webhookData) {
    try {
      console.log(`🔗 Creating webhook for scenario ${scenarioId}...`);
      
      const response = await axios.post(`${this.baseUrl}/scenarios/${scenarioId}/webhooks`, webhookData, {
        headers: this.headers
      });
      
      console.log('✅ Webhook created successfully:', response.data.url);
      return {
        success: true,
        webhook: response.data
      };
    } catch (error) {
      console.error('❌ Failed to create webhook:', error.message);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Get connections
  async getConnections() {
    try {
      const response = await axios.get(`${this.baseUrl}/connections`, {
        headers: this.headers
      });
      
      return {
        success: true,
        connections: response.data
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Create connection
  async createConnection(connectionData) {
    try {
      console.log('🔌 Creating connection...');
      
      const response = await axios.post(`${this.baseUrl}/connections`, connectionData, {
        headers: this.headers
      });
      
      console.log('✅ Connection created successfully:', response.data.id);
      return {
        success: true,
        connection: response.data
      };
    } catch (error) {
      console.error('❌ Failed to create connection:', error.message);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Deploy scenario
  async deployScenario(scenarioId) {
    try {
      console.log(`🚀 Deploying scenario ${scenarioId}...`);
      
      const response = await axios.post(`${this.baseUrl}/scenarios/${scenarioId}/deploy`, {}, {
        headers: this.headers
      });
      
      console.log('✅ Scenario deployed successfully');
      return {
        success: true,
        deployment: response.data
      };
    } catch (error) {
      console.error('❌ Failed to deploy scenario:', error.message);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Get scenario statistics
  async getScenarioStats(scenarioId) {
    try {
      const response = await axios.get(`${this.baseUrl}/scenarios/${scenarioId}/statistics`, {
        headers: this.headers
      });
      
      return {
        success: true,
        stats: response.data
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }
}

// Create Make.com scenario for Vertex PDF Generator
async function createVertexPDFScenario(makeAPI, pdfGeneratorUrl) {
  const scenarioData = {
    name: 'Vertex Solar PDF Generation',
    description: 'Automated PDF generation for Vertex Solar surveys',
    flow: {
      modules: [
        {
          id: 'webhook-trigger',
          type: 'webhook',
          name: 'Webhook Trigger',
          config: {
            url: 'https://hook.eu1.make.com/[WEBHOOK_ID]',
            method: 'POST',
            contentType: 'application/json'
          }
        },
        {
          id: 'fulcrum-data-fetch',
          type: 'http',
          name: 'Fulcrum Data Fetch',
          config: {
            url: 'https://api.fulcrumapp.com/api/v2/records/{{webhook.record_id}}',
            method: 'GET',
            headers: {
              'Authorization': 'Bearer {{FULCRUM_API_KEY}}',
              'Content-Type': 'application/json'
            }
          }
        },
        {
          id: 'data-transformation',
          type: 'code',
          name: 'Data Transformation',
          config: {
            language: 'javascript',
            code: `
              // Transform Fulcrum data to PDF format
              const fulcrumData = bundle.inputData;
              const formValues = fulcrumData._formValuesJSON || {};
              
              return {
                id: fulcrumData.id,
                property: {
                  address: formValues['7b00']?.value ? 
                    Object.values(formValues['7b00'].value).filter(v => v).join(', ') : 
                    'HEAT PUMP ASSESSMENT',
                  type: formValues['6660']?.choice_values?.[0] || 'N/A',
                  age: formValues['5d3b']?.choice_values?.[0] || 'N/A'
                },
                installer: {
                  name: formValues['installer_company_choice']?.choice_values?.[0] || 'Vertex Solar'
                },
                customer: {
                  name: formValues['customer_name']?.value || 'N/A',
                  email: formValues['customer_email']?.value || 'N/A'
                },
                surveyor: {
                  name: fulcrumData.createdByName || 'Professional Surveyor',
                  date: new Date(fulcrumData.created_at).toLocaleDateString('en-GB')
                },
                gps: {
                  latitude: fulcrumData.latitude,
                  longitude: fulcrumData.longitude,
                  hasData: !!(fulcrumData.latitude && fulcrumData.longitude)
                }
              };
            `
          }
        },
        {
          id: 'pdf-generation',
          type: 'http',
          name: 'PDF Generation',
          config: {
            url: `${pdfGeneratorUrl}/api/generate-pdf`,
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: '{{json(3)}}'
          }
        },
        {
          id: 'google-drive-upload',
          type: 'google-drive',
          name: 'Google Drive Upload',
          config: {
            action: 'upload-file',
            file: '{{pdfBuffer}}',
            fileName: 'Professional Heat Pump Assessment - {{customer.name}}.pdf'
          }
        },
        {
          id: 'email-notification',
          type: 'email',
          name: 'Email Notification',
          config: {
            to: '{{customer.email}}',
            subject: 'Your Professional Heat Pump Assessment Report is Ready',
            body: 'Dear {{customer.name}},\\n\\nYour professional heat pump assessment report is ready!\\n\\nDownload: {{pdfUrl}}\\n\\nBest regards,\\nVertex Solar Team'
          }
        }
      ]
    },
    variables: [
      {
        name: 'FULCRUM_API_KEY',
        value: '{{FULCRUM_API_KEY}}'
      },
      {
        name: 'PDF_GENERATOR_URL',
        value: pdfGeneratorUrl
      }
    ]
  };

  return await makeAPI.createScenario(scenarioData);
}

// Setup complete Vertex PDF workflow
async function setupVertexPDFWorkflow(makeAPIKey, pdfGeneratorUrl) {
  try {
    console.log('🚀 Setting up Vertex PDF workflow in Make.com...');
    
    // Initialize Make API
    const makeAPI = new MakeAPI(makeAPIKey);
    
    // Test connection
    const connectionTest = await makeAPI.testConnection();
    if (!connectionTest.success) {
      throw new Error(`Make.com API connection failed: ${connectionTest.error}`);
    }
    
    // Create scenario
    const scenarioResult = await createVertexPDFScenario(makeAPI, pdfGeneratorUrl);
    if (!scenarioResult.success) {
      throw new Error(`Failed to create scenario: ${scenarioResult.error}`);
    }
    
    // Create webhook
    const webhookResult = await makeAPI.createWebhook(scenarioResult.scenarioId, {
      name: 'Vertex PDF Webhook',
      description: 'Webhook for Vertex Solar PDF generation'
    });
    
    if (!webhookResult.success) {
      console.warn('⚠️ Webhook creation failed, but scenario was created');
    }
    
    // Deploy scenario
    const deployResult = await makeAPI.deployScenario(scenarioResult.scenarioId);
    if (!deployResult.success) {
      console.warn('⚠️ Deployment failed, but scenario was created');
    }
    
    console.log('✅ Vertex PDF workflow setup complete!');
    console.log(`📋 Scenario ID: ${scenarioResult.scenarioId}`);
    console.log(`🔗 Webhook URL: ${webhookResult.webhook?.url || 'Not created'}`);
    
    return {
      success: true,
      scenarioId: scenarioResult.scenarioId,
      webhookUrl: webhookResult.webhook?.url,
      scenario: scenarioResult.scenario
    };
    
  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    return {
      success: false,
      error: error.message
    };
  }
}

module.exports = {
  MakeAPI,
  createVertexPDFScenario,
  setupVertexPDFWorkflow
};

