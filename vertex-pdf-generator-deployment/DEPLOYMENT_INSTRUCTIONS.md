# VERTEX PDF GENERATOR - DEPLOYMENT INSTRUCTIONS

## 🚀 Quick Deployment Options

### Option 1: Railway (Recommended)
1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Upload this folder as a new repo
5. Railway will auto-deploy

### Option 2: Heroku
1. Install Heroku CLI
2. Run: `heroku create vertex-pdf-generator`
3. Run: `git init && git add . && git commit -m "Initial commit"`
4. Run: `git push heroku main`

### Option 3: Vercel
1. Install Vercel CLI
2. Run: `vercel --prod`
3. Follow prompts

### Option 4: DigitalOcean App Platform
1. Go to https://cloud.digitalocean.com/apps
2. Create new app
3. Upload this folder
4. Deploy

## 🔧 Environment Variables
Set these in your hosting platform:
- `NODE_ENV=production`
- `PORT=3000` (or let platform assign)

## 📊 API Endpoints
- `GET /health` - Health check
- `POST /api/generate-pdf` - Generate PDF
- `GET /api/test` - Test endpoint

## 🎯 Make.com Integration
Use your deployed URL in Make.com scenario:
- Base URL: `https://your-app.railway.app` (or your platform URL)
- API Key: Not required for basic usage

## ✅ Testing
1. Visit `/health` to verify deployment
2. Test PDF generation with sample data
3. Update Make.com with new URL
4. Test Fulcrum webhook integration

## 🎉 Success!
Your PDF generator is now live and ready for production use!
