// Make.com API Integration - 2025 Updated Version
// Works with the new Make.com interface and OAuth2 authentication

const axios = require('axios');

class MakeAPI2025 {
  constructor(oauthConfig) {
    this.clientId = oauthConfig.clientId;
    this.clientSecret = oauthConfig.clientSecret;
    this.redirectUri = oauthConfig.redirectUri;
    this.baseUrl = 'https://www.make.com/api/v3';
    this.accessToken = null;
    this.refreshToken = null;
  }

  // OAuth2 Authentication Flow
  async authenticate() {
    try {
      console.log('🔐 Authenticating with Make.com OAuth2...');
      
      // Step 1: Get authorization URL
      const authUrl = this.getAuthorizationUrl();
      console.log('📋 Please visit this URL to authorize the app:');
      console.log(authUrl);
      console.log('\nAfter authorization, you\'ll get a code. Use it with completeAuth() method.');
      
      return {
        success: true,
        authUrl: authUrl,
        message: 'Visit the URL above to complete OAuth2 flow'
      };
    } catch (error) {
      console.error('❌ OAuth2 authentication failed:', error.message);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Complete OAuth2 flow with authorization code
  async completeAuth(authorizationCode) {
    try {
      console.log('🔐 Completing OAuth2 authentication...');
      
      const response = await axios.post(`${this.baseUrl}/oauth/token`, {
        grant_type: 'authorization_code',
        client_id: this.clientId,
        client_secret: this.clientSecret,
        redirect_uri: this.redirectUri,
        code: authorizationCode
      });
      
      this.accessToken = response.data.access_token;
      this.refreshToken = response.data.refresh_token;
      
      console.log('✅ OAuth2 authentication successful');
      return {
        success: true,
        accessToken: this.accessToken,
        refreshToken: this.refreshToken
      };
    } catch (error) {
      console.error('❌ OAuth2 completion failed:', error.message);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Get authorization URL
  getAuthorizationUrl() {
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: this.clientId,
      redirect_uri: this.redirectUri,
      scope: 'scenarios:read scenarios:write executions:read webhooks:read webhooks:write'
    });
    
    return `https://www.make.com/oauth/authorize?${params.toString()}`;
  }

  // Refresh access token
  async refreshAccessToken() {
    try {
      const response = await axios.post(`${this.baseUrl}/oauth/token`, {
        grant_type: 'refresh_token',
        client_id: this.clientId,
        client_secret: this.clientSecret,
        refresh_token: this.refreshToken
      });
      
      this.accessToken = response.data.access_token;
      this.refreshToken = response.data.refresh_token;
      
      return { success: true };
    } catch (error) {
      console.error('❌ Token refresh failed:', error.message);
      return { success: false, error: error.message };
    }
  }

  // Get headers with authentication
  getHeaders() {
    if (!this.accessToken) {
      throw new Error('Not authenticated. Call authenticate() first.');
    }
    
    return {
      'Authorization': `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json'
    };
  }

  // Test API connection
  async testConnection() {
    try {
      console.log('🔍 Testing Make.com API connection...');
      
      const response = await axios.get(`${this.baseUrl}/users/me`, {
        headers: this.getHeaders()
      });
      
      console.log('✅ Make.com API connection successful');
      return {
        success: true,
        user: response.data
      };
    } catch (error) {
      if (error.response?.status === 401) {
        // Try to refresh token
        const refreshResult = await this.refreshAccessToken();
        if (refreshResult.success) {
          return await this.testConnection();
        }
      }
      
      console.error('❌ Make.com API connection failed:', error.message);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Create custom app for PDF generator
  async createCustomApp(appData) {
    try {
      console.log('📱 Creating custom app for PDF generator...');
      
      const response = await axios.post(`${this.baseUrl}/apps`, {
        name: 'Vertex PDF Generator',
        description: 'Custom PDF generation service for Vertex Solar surveys',
        version: '1.0.0',
        category: 'productivity',
        icon: 'https://your-domain.com/icon.png',
        authentication: {
          type: 'api_key',
          fields: [
            {
              name: 'api_key',
              type: 'text',
              label: 'API Key',
              required: true
            },
            {
              name: 'base_url',
              type: 'text',
              label: 'Base URL',
              required: true,
              default: 'https://your-pdf-generator.railway.app'
            }
          ]
        },
        actions: [
          {
            name: 'generate_pdf',
            label: 'Generate PDF',
            description: 'Generate a professional PDF report',
            fields: [
              {
                name: 'property_data',
                type: 'object',
                label: 'Property Data',
                required: true
              },
              {
                name: 'customer_data',
                type: 'object',
                label: 'Customer Data',
                required: true
              }
            ]
          }
        ],
        ...appData
      }, {
        headers: this.getHeaders()
      });
      
      console.log('✅ Custom app created successfully:', response.data.id);
      return {
        success: true,
        appId: response.data.id,
        app: response.data
      };
    } catch (error) {
      console.error('❌ Failed to create custom app:', error.message);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Create scenario using new 2025 interface
  async createScenario(scenarioData) {
    try {
      console.log('📝 Creating Make.com scenario...');
      
      const response = await axios.post(`${this.baseUrl}/scenarios`, {
        name: scenarioData.name,
        description: scenarioData.description,
        flow: scenarioData.flow,
        variables: scenarioData.variables,
        settings: {
          errorHandling: 'continue',
          retryPolicy: {
            maxRetries: 3,
            retryDelay: 5000
          }
        }
      }, {
        headers: this.getHeaders()
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

  // Create webhook for scenario
  async createWebhook(scenarioId, webhookData) {
    try {
      console.log(`🔗 Creating webhook for scenario ${scenarioId}...`);
      
      const response = await axios.post(`${this.baseUrl}/scenarios/${scenarioId}/webhooks`, {
        name: webhookData.name || 'Vertex PDF Webhook',
        description: webhookData.description || 'Webhook for PDF generation',
        events: ['scenario.triggered'],
        ...webhookData
      }, {
        headers: this.getHeaders()
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

  // Deploy scenario
  async deployScenario(scenarioId) {
    try {
      console.log(`🚀 Deploying scenario ${scenarioId}...`);
      
      const response = await axios.post(`${this.baseUrl}/scenarios/${scenarioId}/deploy`, {}, {
        headers: this.getHeaders()
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

  // Get scenario executions
  async getExecutions(scenarioId, limit = 10) {
    try {
      const response = await axios.get(`${this.baseUrl}/scenarios/${scenarioId}/executions`, {
        headers: this.getHeaders(),
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

  // Get scenario statistics
  async getScenarioStats(scenarioId) {
    try {
      const response = await axios.get(`${this.baseUrl}/scenarios/${scenarioId}/statistics`, {
        headers: this.getHeaders()
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

// Create Vertex PDF scenario for 2025 Make.com interface
function createVertexPDFScenario2025(pdfGeneratorUrl) {
  return {
    name: 'Vertex Solar PDF Generation 2025',
    description: 'Automated PDF generation for Vertex Solar surveys using 2025 Make.com interface',
    flow: {
      modules: [
        {
          id: 'webhook-trigger',
          type: 'webhook',
          name: 'Webhook Trigger',
          config: {
            events: ['data.received'],
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
            },
            timeout: 30000
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
              
              // Helper functions
              function extractChoice(field) {
                return field?.choice_values?.[0] || 'N/A';
              }
              
              function extractText(field) {
                return field?.value || 'N/A';
              }
              
              function extractAddress(field) {
                if (field?.value) {
                  const parts = Object.values(field.value).filter(v => v && v.trim());
                  return parts.length > 0 ? parts.join(', ') : 'HEAT PUMP ASSESSMENT';
                }
                return 'HEAT PUMP ASSESSMENT';
              }
              
              return {
                id: fulcrumData.id || 'N/A',
                createdAt: fulcrumData.created_at || new Date().toISOString(),
                
                property: {
                  address: extractAddress(formValues['7b00']),
                  type: extractChoice(formValues['6660']),
                  age: extractChoice(formValues['5d3b']),
                  wallConstruction: extractChoice(formValues['2bfd']),
                  roofType: extractChoice(formValues['fd00']),
                  currentHeating: extractChoice(formValues['4100']),
                  electricalSupply: extractChoice(formValues['30e7']),
                  consumerUnit: extractChoice(formValues['286a'])
                },
                
                installer: {
                  name: extractChoice(formValues['installer_company_choice']) || 'Vertex Solar',
                  logo: formValues['609d']?.[0] || null
                },
                
                customer: {
                  name: extractText(formValues['customer_name']),
                  email: extractText(formValues['customer_email']),
                  phone: extractText(formValues['customer_phone']),
                  address: extractAddress(formValues['7b00'])
                },
                
                surveyor: {
                  name: fulcrumData.createdByName || 'Professional Surveyor',
                  email: fulcrumData.createdByEmail || null,
                  date: new Date(fulcrumData.created_at).toLocaleDateString('en-GB'),
                  time: new Date(fulcrumData.created_at).toLocaleTimeString('en-GB')
                },
                
                gps: {
                  latitude: fulcrumData.latitude,
                  longitude: fulcrumData.longitude,
                  hasData: !!(fulcrumData.latitude && fulcrumData.longitude)
                },
                
                photos: {
                  hero: formValues['2480']?.[0] || null,
                  elevation: formValues['31d9'] || [],
                  technical: formValues['113a'] || [],
                  rooms: formValues['3b80'] || []
                },
                
                technical: {
                  heatLoss: extractText(formValues['heat_loss_field']),
                  systemSizing: extractText(formValues['system_sizing_field']),
                  efficiencyRating: extractChoice(formValues['efficiency_rating']),
                  annualSavings: extractText(formValues['annual_savings']),
                  paybackPeriod: extractText(formValues['payback_period'])
                },
                
                recommendations: {
                  primary: extractText(formValues['primary_recommendations']),
                  secondary: extractText(formValues['secondary_recommendations']),
                  immediate: extractText(formValues['immediate_actions']),
                  shortTerm: extractText(formValues['short_term_actions']),
                  longTerm: extractText(formValues['long_term_actions'])
                },
                
                metadata: {
                  formVersion: 'Vertex ASHP v1.1',
                  totalFields: Object.keys(formValues).length,
                  hasGpsData: !!(fulcrumData.latitude && fulcrumData.longitude),
                  processingDate: new Date().toISOString()
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
              'Content-Type': 'application/json',
              'Authorization': 'Bearer {{PDF_GENERATOR_API_KEY}}'
            },
            body: '{{json(3)}}',
            timeout: 30000
          }
        },
        {
          id: 'google-drive-upload',
          type: 'google-drive',
          name: 'Google Drive Upload',
          config: {
            action: 'upload-file',
            file: '{{pdfBuffer}}',
            fileName: 'Professional Heat Pump Assessment - {{customer.name}}.pdf',
            folder: 'Vertex Solar Surveys/{{year}}/{{month}}'
          }
        },
        {
          id: 'email-notification',
          type: 'email',
          name: 'Email Notification',
          config: {
            to: '{{customer.email}}',
            subject: 'Your Professional Heat Pump Assessment Report is Ready',
            body: `Dear {{customer.name}},

Your professional heat pump assessment report for {{property.address}} is now ready!

You can download your report here: {{pdfUrl}}

This comprehensive report includes:
- Detailed property analysis
- Technical recommendations  
- Energy efficiency calculations
- Cost savings projections
- Installation requirements

If you have any questions, please don't hesitate to contact us.

Best regards,
Vertex Solar Team`,
            attachments: '{{pdfBuffer}}'
          }
        }
      ]
    },
    variables: [
      {
        name: 'FULCRUM_API_KEY',
        value: '{{FULCRUM_API_KEY}}',
        description: 'Fulcrum API key for data fetching'
      },
      {
        name: 'PDF_GENERATOR_API_KEY',
        value: '{{PDF_GENERATOR_API_KEY}}',
        description: 'API key for PDF generator service'
      },
      {
        name: 'PDF_GENERATOR_URL',
        value: pdfGeneratorUrl,
        description: 'URL of the deployed PDF generator'
      },
      {
        name: 'GOOGLE_DRIVE_CREDENTIALS',
        value: '{{GOOGLE_DRIVE_CREDENTIALS}}',
        description: 'Google Drive service account credentials'
      },
      {
        name: 'EMAIL_SERVICE_API_KEY',
        value: '{{EMAIL_SERVICE_API_KEY}}',
        description: 'API key for email service'
      }
    ]
  };
}

module.exports = {
  MakeAPI2025,
  createVertexPDFScenario2025
};
