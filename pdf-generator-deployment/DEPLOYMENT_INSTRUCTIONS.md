# GoDaddy Deployment Instructions

## Manual Upload Steps

1. **Access GoDaddy File Manager**
   - Log into your GoDaddy account
   - Go to "My Products" → "Web Hosting" → "Manage"
   - Click "File Manager"

2. **Create PDF Generator Directory**
   - Navigate to `public_html`
   - Create a new folder called `pdf-generator`

3. **Upload Files**
   - Upload all files from this deployment package to `public_html/pdf-generator/`
   - Ensure the folder structure is maintained

4. **Set Permissions**
   - Set folder permissions to 755
   - Set file permissions to 644

5. **Test the Deployment**
   - Visit: `https://i2m.06f.mytemp.website/pdf-generator/health`
   - Should return: `{"status": "ok", "service": "Vertex PDF Generator"}`

## API Endpoints

- **Health Check:** `https://i2m.06f.mytemp.website/pdf-generator/health`
- **Generate PDF:** `https://i2m.06f.mytemp.website/pdf-generator/api/generate-pdf`
- **Test PDF:** `https://i2m.06f.mytemp.website/pdf-generator/api/test-pdf`

## Make.com Configuration

Update your Make.com connection with:
- **Base URL:** `https://i2m.06f.mytemp.website/pdf-generator`
- **API Key:** (your API key)

## Troubleshooting

If the API doesn't work:
1. Check GoDaddy supports Node.js (may need to enable it)
2. Verify all files uploaded correctly
3. Check file permissions
4. Contact GoDaddy support if needed
