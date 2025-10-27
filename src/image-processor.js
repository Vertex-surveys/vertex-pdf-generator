// IMAGE PROCESSING & DOWNLOAD FUNCTIONS
// For Vertex Solar PDF generation

const axios = require('axios');
const sharp = require('sharp');

/**
 * Download an image from a URL with timeout
 * @param {String} url - Image URL
 * @param {Number} timeout - Timeout in milliseconds (default 10000)
 * @returns {Buffer} Image buffer
 */
async function downloadImage(url, timeout = 10000) {
  try {
    const response = await axios.get(url, {
      responseType: 'arraybuffer',
      timeout: timeout,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Vertex-Solar-Bot/1.0)'
      }
    });

    return Buffer.from(response.data);
  } catch (error) {
    console.error(`Failed to download image: ${url}`, error.message);
    return null;
  }
}

/**
 * Download multiple images in parallel
 * @param {Array} photoUrls - Array of photo URLs or objects with url property
 * @returns {Array} Array of image buffers
 */
async function downloadAllImages(photoUrls) {
  console.log(`📥 Downloading ${photoUrls.length} images in parallel...`);
  const startTime = Date.now();

  const downloadPromises = photoUrls.map(photo => {
    const url = typeof photo === 'string' ? photo : (photo.url || photo.photo_url);
    return downloadImage(url);
  });

  const results = await Promise.all(downloadPromises);
  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  
  const successCount = results.filter(r => r !== null).length;
  console.log(`✅ Downloaded ${successCount}/${photoUrls.length} images in ${duration}s`);

  return results;
}

/**
 * Optimize an image using Sharp
 * @param {Buffer} imageBuffer - Image buffer
 * @param {Object} options - Optimization options
 * @returns {Buffer} Optimized image buffer
 */
async function optimizeImage(imageBuffer, options = {}) {
  const {
    width = 1200,
    height = 800,
    quality = 85,
    fit = 'cover'
  } = options;

  try {
    const optimized = await sharp(imageBuffer)
      .resize(width, height, { 
        fit,
        withoutEnlargement: true 
      })
      .jpeg({ 
        quality,
        progressive: true,
        mozjpeg: true 
      })
      .toBuffer();

    return optimized;
  } catch (error) {
    console.error('Failed to optimize image:', error.message);
    return imageBuffer; // Return original if optimization fails
  }
}

/**
 * Optimize multiple images in parallel (batch processing)
 * @param {Array} imageBuffers - Array of image buffers
 * @param {Object} options - Optimization options
 * @returns {Array} Array of optimized image buffers
 */
async function optimizeImages(imageBuffers, options = {}) {
  console.log(`🖼️  Optimizing ${imageBuffers.length} images...`);
  const startTime = Date.now();

  const optimizationPromises = imageBuffers
    .filter(buffer => buffer !== null)
    .map(buffer => optimizeImage(buffer, options));

  const results = await Promise.all(optimizationPromises);
  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  
  console.log(`✅ Optimized ${results.length} images in ${duration}s`);

  return results;
}

/**
 * Convert image buffer to base64 data URL
 * @param {Buffer} buffer - Image buffer
 * @param {String} mimeType - MIME type (default 'image/jpeg')
 * @returns {String} Data URL
 */
function bufferToDataURL(buffer, mimeType = 'image/jpeg') {
  if (!buffer) return '';
  return `data:${mimeType};base64,${buffer.toString('base64')}`;
}

/**
 * Extract photos from form values by category
 * @param {Object} formValues - Fulcrum form values
 * @returns {Object} Organized photos by category
 */
function organizePhotosByCategory(formValues) {
  const categories = {
    hero: [],
    elevation: [],
    room: [],
    heating: [],
    electrical: [],
    ashp: [],
    meter: [],
    other: []
  };

  // Define photo field mappings
  const photoFieldMap = {
    'hero_photo_front_page': 'hero',
    'elevation_photos_section': 'elevation',
    'room_photo': 'room',
    'heating_system_photos': 'heating',
    'electrical_photos': 'electrical',
    'ashp_location_photos': 'ashp',
    'meter_photos': 'meter'
  };

  // Extract photos from form values
  Object.keys(formValues).forEach(fieldKey => {
    const value = formValues[fieldKey];
    
    if (Array.isArray(value) && value.length > 0) {
      const firstItem = value[0];
      
      // Check if it's a photo field
      if (firstItem && typeof firstItem === 'object' && 'photo_id' in firstItem) {
        const category = photoFieldMap[fieldKey] || 'other';
        categories[category].push(...value);
      }
    }
  });

  return categories;
}

/**
 * Generate photo URLs from Fulcrum photo data
 * @param {Object} photo - Photo object from Fulcrum
 * @returns {String} Photo URL
 */
function generatePhotoURL(photo) {
  if (!photo) return '';
  
  // Fulcrum photo URL format
  if (photo.photo_id) {
    return `https://fulcrum-photos.s3.amazonaws.com/${photo.photo_id}.jpg`;
  }
  
  if (photo.url) {
    return photo.url;
  }
  
  if (photo.mediaID) {
    return `https://fulcrum-photos.s3.amazonaws.com/${photo.mediaID}.jpg`;
  }
  
  return '';
}

/**
 * Count total photos in form values
 * @param {Object} formValues - Fulcrum form values
 * @returns {Number} Total photo count
 */
function countPhotos(formValues) {
  let count = 0;
  
  Object.values(formValues).forEach(value => {
    if (Array.isArray(value) && value.length > 0) {
      const firstItem = value[0];
      if (firstItem && typeof firstItem === 'object' && 'photo_id' in firstItem) {
        count += value.length;
      }
    }
  });
  
  return count;
}

/**
 * Process and prepare all photos for PDF
 * Downloads, optimizes, and organizes photos by category
 * @param {Object} formValues - Fulcrum form values
 * @returns {Promise<Object>} Processed photos organized by category
 */
async function processAllPhotos(formValues) {
  console.log('📸 Processing all photos...');
  const startTime = Date.now();

  // Organize photos by category
  const organizedPhotos = organizePhotosByCategory(formValues);
  
  // Generate photo URLs
  const photoURLs = [];
  Object.keys(organizedPhotos).forEach(category => {
    organizedPhotos[category].forEach(photo => {
      const url = generatePhotoURL(photo);
      if (url) {
        photoURLs.push({ url, category, photo });
      }
    });
  });

  if (photoURLs.length === 0) {
    console.log('⚠️  No photos found');
    return {};
  }

  // Download all images in parallel
  const imageBuffers = await downloadAllImages(photoURLs);
  
  // Optimize all images in parallel
  const optimizedBuffers = await optimizeImages(imageBuffers);
  
  // Build result with base64 data URLs
  const processedPhotos = {};
  let bufferIndex = 0;
  
  Object.keys(organizedPhotos).forEach(category => {
    const categoryPhotos = organizedPhotos[category];
    
    if (categoryPhotos.length > 0) {
      processedPhotos[category] = categoryPhotos.map((photo, idx) => {
        const buffer = optimizedBuffers[bufferIndex];
        bufferIndex++;
        
        return {
          ...photo,
          dataURL: bufferToDataURL(buffer),
          url: generatePhotoURL(photo)
        };
      });
    }
  });

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`✅ Processed all photos in ${duration}s`);

  return processedPhotos;
}

module.exports = {
  downloadImage,
  downloadAllImages,
  optimizeImage,
  optimizeImages,
  bufferToDataURL,
  organizePhotosByCategory,
  generatePhotoURL,
  countPhotos,
  processAllPhotos
};
