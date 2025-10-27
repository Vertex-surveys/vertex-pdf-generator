# VERTEX PDF GENERATOR - Railway Optimized
FROM node:20-slim

WORKDIR /app

# Install Puppeteer dependencies for Railway
RUN apt-get update && apt-get install -y \
    chromium \
    chromium-sandbox \
    fonts-liberation \
    libappindicator3-1 \
    libasound2 \
    libatk1.0-0 \
    libcups2 \
    libdrm2 \
    libgbm1 \
    libgdk-pixbuf2.0-0 \
    libnspr4 \
    libnss3 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    xdg-utils \
    ca-certificates \
    fonts-liberation \
    libappindicator3-1 \
    libasound2 \
    libatk-bridge2.0-0 \
    libcups2 \
    libdrm2 \
    libgbm1 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libxss1 \
    lsb-release \
    xdg-utils \
    && rm -rf /var/lib/apt/lists/*

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application files
COPY src ./src

# Copy config if it exists
COPY config ./config 2>/dev/null || true

# Set Puppeteer environment variables
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start application
CMD ["node", "src/server.js"]
