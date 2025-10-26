// Fulcrum API Integration for Vertex ASHP v1.1
// Handles data fetching and transformation

const axios = require('axios');

class FulcrumAPI {
  constructor(apiKey, baseUrl = 'https://api.fulcrumapp.com/api/v2') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
    this.headers = {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    };
  }

  // Fetch record by ID
  async getRecord(recordId) {
    try {
      console.log(`📡 Fetching record ${recordId} from Fulcrum API`);
      
      const response = await axios.get(`${this.baseUrl}/records/${recordId}`, {
        headers: this.headers
      });
      
      console.log(`✅ Record ${recordId} fetched successfully`);
      return response.data;
      
    } catch (error) {
      console.error(`❌ Failed to fetch record ${recordId}:`, error.message);
      throw new Error(`Failed to fetch record: ${error.message}`);
    }
  }

  // Fetch photos for a record
  async getPhotos(recordId) {
    try {
      console.log(`📸 Fetching photos for record ${recordId}`);
      
      const response = await axios.get(`${this.baseUrl}/records/${recordId}/photos`, {
        headers: this.headers
      });
      
      console.log(`✅ ${response.data.length} photos fetched for record ${recordId}`);
      return response.data;
      
    } catch (error) {
      console.error(`❌ Failed to fetch photos for record ${recordId}:`, error.message);
      return []; // Return empty array if photos fail
    }
  }

  // Fetch all records for a form
  async getRecords(formId, limit = 100, offset = 0) {
    try {
      console.log(`📡 Fetching records for form ${formId}`);
      
      const response = await axios.get(`${this.baseUrl}/records`, {
        headers: this.headers,
        params: {
          form_id: formId,
          limit: limit,
          offset: offset
        }
      });
      
      console.log(`✅ ${response.data.length} records fetched for form ${formId}`);
      return response.data;
      
    } catch (error) {
      console.error(`❌ Failed to fetch records for form ${formId}:`, error.message);
      throw new Error(`Failed to fetch records: ${error.message}`);
    }
  }

  // Fetch form structure
  async getForm(formId) {
    try {
      console.log(`📋 Fetching form structure for ${formId}`);
      
      const response = await axios.get(`${this.baseUrl}/forms/${formId}`, {
        headers: this.headers
      });
      
      console.log(`✅ Form structure fetched for ${formId}`);
      return response.data;
      
    } catch (error) {
      console.error(`❌ Failed to fetch form ${formId}:`, error.message);
      throw new Error(`Failed to fetch form: ${error.message}`);
    }
  }

  // Fetch choice lists
  async getChoiceLists() {
    try {
      console.log(`📋 Fetching choice lists`);
      
      const response = await axios.get(`${this.baseUrl}/choice_lists`, {
        headers: this.headers
      });
      
      console.log(`✅ ${response.data.length} choice lists fetched`);
      return response.data;
      
    } catch (error) {
      console.error(`❌ Failed to fetch choice lists:`, error.message);
      return []; // Return empty array if choice lists fail
    }
  }

  // Process webhook data
  async processWebhookData(webhookData) {
    try {
      console.log(`🔄 Processing webhook data for record ${webhookData.record_id}`);
      
      // Fetch complete record data
      const record = await this.getRecord(webhookData.record_id);
      
      // Fetch photos
      const photos = await this.getPhotos(webhookData.record_id);
      
      // Transform data using field mapping
      const { transformFulcrumData } = require('./field-mapping');
      const transformedData = transformFulcrumData(record);
      
      // Add photos to transformed data
      transformedData.photos.allPhotos = photos;
      transformedData.metadata.photoCount = photos.length;
      
      console.log(`✅ Webhook data processed successfully for record ${webhookData.record_id}`);
      return transformedData;
      
    } catch (error) {
      console.error(`❌ Failed to process webhook data:`, error.message);
      throw new Error(`Failed to process webhook data: ${error.message}`);
    }
  }

  // Validate API connection
  async validateConnection() {
    try {
      console.log(`🔍 Validating Fulcrum API connection`);
      
      const response = await axios.get(`${this.baseUrl}/forms`, {
        headers: this.headers,
        params: { limit: 1 }
      });
      
      console.log(`✅ Fulcrum API connection validated`);
      return true;
      
    } catch (error) {
      console.error(`❌ Fulcrum API connection failed:`, error.message);
      return false;
    }
  }

  // Get form fields for validation
  async getFormFields(formId) {
    try {
      const form = await this.getForm(formId);
      return form.elements || [];
    } catch (error) {
      console.error(`❌ Failed to get form fields:`, error.message);
      return [];
    }
  }

  // Search records by criteria
  async searchRecords(formId, criteria = {}) {
    try {
      console.log(`🔍 Searching records with criteria:`, criteria);
      
      const response = await axios.get(`${this.baseUrl}/records`, {
        headers: this.headers,
        params: {
          form_id: formId,
          ...criteria
        }
      });
      
      console.log(`✅ Found ${response.data.length} records matching criteria`);
      return response.data;
      
    } catch (error) {
      console.error(`❌ Failed to search records:`, error.message);
      throw new Error(`Failed to search records: ${error.message}`);
    }
  }
}

// Create API instance
function createFulcrumAPI(apiKey) {
  return new FulcrumAPI(apiKey);
}

module.exports = {
  FulcrumAPI,
  createFulcrumAPI
};
