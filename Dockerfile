# VERTEX PDF GENERATOR - 2025 BEST PRACTICES DOCKERFILE
# Multi-stage build for optimal size and security

##############################################################################
# Stage 1: Dependencies
##############################################################################
FROM node:20-slim AS deps

WORKDIR /app

# Install system dependencies for Puppeteer
RUN apt-get update && apt-get install -y \
    wget \
    gnupg \
    ca-certificates \
    fonts-liberation \
    libappindicator3-1 \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3 \
    libgdk-pixbuf2.0-0 \
    libnspr4 \
    libnss3 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    xdg-utils \
    libu2f-udev \
    libvulkan1 \
    && rm -rf /var/lib/apt/lists/*

# Copy package files
COPY package*.json ./

# Install dependencies with npm ci for faster, reliable builds
RUN npm ci --only=production && npm cache clean --force

##############################################################################
# Stage 2: Builder
##############################################################################
FROM node:20-slim AS builder

WORKDIR /app

# Install Puppeteer for building
RUN apt-get update && apt-get install -y \
    wget \
    gnupg \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
COPY src ./src
COPY config ./config
COPY templates ./templates
COPY public ./public

RUN npm ci && npm run build || true

##############################################################################
# Stage 3: Production
##############################################################################
FROM node:20-slim

# Create non-root user for security (2025 best practice)
RUN groupadd -r nodejs && useradd -r -g nodejs nodejs

WORKDIR /app

# Install only runtime dependencies for Puppeteer
RUN apt-get update && apt-get install -y \
    chromium \
    chromium-sandbox \
    fonts-liberation \
    libappindicator3-1 \
    libasound2 \
    libatk-bridge2.0-0 \
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
    libu2f-udev \
    libvulkan1 \
    && rm -rf /var/lib/apt/lists/*

# Copy production dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy application files
COPY package*.json ./
COPY src ./src
COPY config ./config
COPY templates ./templates
COPY public ./public

# Set Puppeteer to use system Chromium (2025 best practice)
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

# Create outputs directory
RUN mkdir -p /app/outputs && chown -R nodejs:nodejs /app

# Switch to non-root user
USER nodejs

# Expose port
EXPOSE 3000

# Health check (2025 best practice)
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start application
CMD ["node", "src/server.js"]

