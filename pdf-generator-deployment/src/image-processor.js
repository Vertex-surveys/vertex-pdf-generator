// Image Processing Module
// Handles image optimization, resizing, and processing

const sharp = require('sharp');
const path = require('path');

class ImageProcessor {
  constructor(options = {}) {
    this.maxWidth = options.maxWidth || 1200;
    this.maxHeight = options.maxHeight || 800;
    this.quality = options.quality || 90;
    this.format = options.format || 'jpeg';
  }

  // Process a single image
  async processImage(imageBuffer, options = {}) {
    try {
      const {
        width = this.maxWidth,
        height = this.maxHeight,
        quality = this.quality,
        format = this.format,
        fit = 'cover'
      } = options;

      console.log(`🖼️ Processing image: ${width}x${height}, quality: ${quality}`);

      const processedBuffer = await sharp(imageBuffer)
        .resize(width, height, { 
          fit: fit,
          withoutEnlargement: true
        })
        .jpeg({ quality: quality })
        .toBuffer();

      console.log(`✅ Image processed successfully (${processedBuffer.length} bytes)`);
      return processedBuffer;

    } catch (error) {
      console.error(`❌ Image processing failed:`, error.message);
      throw new Error(`Image processing failed: ${error.message}`);
    }
  }

  // Process multiple images
  async processImages(images, options = {}) {
    try {
      console.log(`🖼️ Processing ${images.length} images`);

      const processedImages = await Promise.all(
        images.map(async (image, index) => {
          try {
            const processedBuffer = await this.processImage(image.buffer, options);
            return {
              ...image,
              buffer: processedBuffer,
              processed: true,
              originalSize: image.buffer.length,
              processedSize: processedBuffer.length,
              compressionRatio: Math.round((1 - processedBuffer.length / image.buffer.length) * 100)
            };
          } catch (error) {
            console.error(`❌ Failed to process image ${index}:`, error.message);
            return {
              ...image,
              processed: false,
              error: error.message
            };
          }
        })
      );

      const successful = processedImages.filter(img => img.processed);
      const failed = processedImages.filter(img => !img.processed);

      console.log(`✅ Processed ${successful.length}/${images.length} images successfully`);
      if (failed.length > 0) {
        console.warn(`⚠️ ${failed.length} images failed to process`);
      }

      return processedImages;

    } catch (error) {
      console.error(`❌ Batch image processing failed:`, error.message);
      throw new Error(`Batch image processing failed: ${error.message}`);
    }
  }

  // Add watermark to image
  async addWatermark(imageBuffer, watermarkPath, options = {}) {
    try {
      const {
        gravity = 'southeast',
        opacity = 0.7,
        scale = 0.1
      } = options;

      console.log(`🏷️ Adding watermark to image`);

      const processedBuffer = await sharp(imageBuffer)
        .composite([{
          input: watermarkPath,
          gravity: gravity,
          opacity: opacity,
          scale: scale
        }])
        .jpeg({ quality: this.quality })
        .toBuffer();

      console.log(`✅ Watermark added successfully`);
      return processedBuffer;

    } catch (error) {
      console.error(`❌ Watermarking failed:`, error.message);
      throw new Error(`Watermarking failed: ${error.message}`);
    }
  }

  // Create thumbnail
  async createThumbnail(imageBuffer, size = 200) {
    try {
      console.log(`🖼️ Creating thumbnail (${size}x${size})`);

      const thumbnailBuffer = await sharp(imageBuffer)
        .resize(size, size, { 
          fit: 'cover',
          withoutEnlargement: true
        })
        .jpeg({ quality: 80 })
        .toBuffer();

      console.log(`✅ Thumbnail created successfully`);
      return thumbnailBuffer;

    } catch (error) {
      console.error(`❌ Thumbnail creation failed:`, error.message);
      throw new Error(`Thumbnail creation failed: ${error.message}`);
    }
  }

  // Get image metadata
  async getImageMetadata(imageBuffer) {
    try {
      const metadata = await sharp(imageBuffer).metadata();
      return {
        width: metadata.width,
        height: metadata.height,
        format: metadata.format,
        size: imageBuffer.length,
        density: metadata.density,
        hasAlpha: metadata.hasAlpha,
        channels: metadata.channels
      };
    } catch (error) {
      console.error(`❌ Failed to get image metadata:`, error.message);
      return null;
    }
  }

  // Validate image
  async validateImage(imageBuffer) {
    try {
      const metadata = await this.getImageMetadata(imageBuffer);
      
      if (!metadata) {
        return { valid: false, error: 'Invalid image format' };
      }

      const issues = [];
      
      if (metadata.width < 100 || metadata.height < 100) {
        issues.push('Image too small');
      }
      
      if (metadata.size < 10000) {
        issues.push('Image file too small');
      }
      
      if (metadata.size > 10000000) {
        issues.push('Image file too large');
      }

      return {
        valid: issues.length === 0,
        issues: issues,
        metadata: metadata
      };

    } catch (error) {
      console.error(`❌ Image validation failed:`, error.message);
      return { valid: false, error: error.message };
    }
  }

  // Process photos from Fulcrum
  async processFulcrumPhotos(photos) {
    try {
      console.log(`📸 Processing ${photos.length} Fulcrum photos`);

      const processedPhotos = [];

      for (const photo of photos) {
        try {
          // Download photo if needed
          let imageBuffer;
          if (photo.photo_url) {
            // For now, we'll use the URL directly
            // In production, you might want to download and process
            processedPhotos.push({
              ...photo,
              processed: true,
              note: 'Using original URL'
            });
          } else if (photo.buffer) {
            const processedBuffer = await this.processImage(photo.buffer);
            processedPhotos.push({
              ...photo,
              buffer: processedBuffer,
              processed: true
            });
          } else {
            processedPhotos.push({
              ...photo,
              processed: false,
              error: 'No image data available'
            });
          }
        } catch (error) {
          console.error(`❌ Failed to process photo:`, error.message);
          processedPhotos.push({
            ...photo,
            processed: false,
            error: error.message
          });
        }
      }

      const successful = processedPhotos.filter(p => p.processed);
      console.log(`✅ Processed ${successful.length}/${photos.length} photos successfully`);

      return processedPhotos;

    } catch (error) {
      console.error(`❌ Fulcrum photo processing failed:`, error.message);
      throw new Error(`Fulcrum photo processing failed: ${error.message}`);
    }
  }

  // Optimize for PDF
  async optimizeForPDF(imageBuffer, options = {}) {
    try {
      const {
        maxWidth = 800,
        maxHeight = 600,
        quality = 85
      } = options;

      console.log(`📄 Optimizing image for PDF`);

      const optimizedBuffer = await sharp(imageBuffer)
        .resize(maxWidth, maxHeight, { 
          fit: 'inside',
          withoutEnlargement: true
        })
        .jpeg({ 
          quality: quality,
          progressive: true
        })
        .toBuffer();

      console.log(`✅ Image optimized for PDF`);
      return optimizedBuffer;

    } catch (error) {
      console.error(`❌ PDF optimization failed:`, error.message);
      throw new Error(`PDF optimization failed: ${error.message}`);
    }
  }
}

// Create image processor instance
function createImageProcessor(options = {}) {
  return new ImageProcessor(options);
}

module.exports = {
  ImageProcessor,
  createImageProcessor
};
