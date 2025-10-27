// DATA TRANSFORMATION FOR RAILWAY PDF GENERATOR
// Transforms Fulcrum webhook data to template-ready format
// Accepts both direct Fulcrum webhook format and structured data

const { processAllPhotos, organizePhotosByCategory, generatePhotoURL } = require('./image-processor');
const fieldMapping = require('../COMPLETE_FIELD_MAPPING');

/**
 * Transform Fulcrum webhook data to PDF template format
 * @param {Object} webhookData - Data from Fulcrum webhook OR structured format
 * @returns {Object} - Ready for EJS template rendering
 */
async function transformFulcrumData(webhookData) {
  console.log('🔄 Transforming Fulcrum data...');
  
  // Handle multiple webhook formats
  let record = webhookData;
  let formValues = {};
  
  // Fulcrum webhook format: { type: 'record.update', data: { id, form_values } }
  if (webhookData.type && webhookData.data) {
    record = webhookData.data;
    formValues = record.form_values || {};
  }
  // Direct Fulcrum format: { id, form_values }
  else if (webhookData.form_values) {
    record = webhookData;
    formValues = record.form_values;
  }
  // Already structured: { property: {}, customer: {} }
  else if (webhookData.property && webhookData.customer) {
    console.log('📋 Data already structured, returning as-is');
    return webhookData;
  }
  else {
    formValues = webhookData;
  }
  
  // Process photos
  const processedPhotos = await processAllPhotos(formValues);
  
  // Build comprehensive transformed data
  const transformed = {
    // Survey Metadata
    survey: {
      id: record.id || record.record_id || webhookData.id || 'VX-' + Date.now().toString().slice(-8),
      date: record.created_at || webhookData.created_at || new Date().toISOString(),
      surveyor: record.created_by_name || record.assigned_to || webhookData.surveyor?.name || 'Professional Surveyor'
    },
    
    // Property Information (Complete mapping)
    property: {
      address: getAddress(formValues, '7b00') || getTextValue(formValues, 'property_address') || 'Professional ASHP Assessment',
      type: getChoiceValue(formValues, '6660'),
      age: getChoiceValue(formValues, '5d3b'),
      wallConstruction: getChoiceValue(formValues, '2bfd'),
      wallInsulation: getChoiceValue(formValues, 'd470'),
      roofConstruction: getChoiceValue(formValues, 'fd00'),
      roofInsulation: getChoiceValue(formValues, '1dd0'),
      floorConstruction: getChoiceValue(formValues, '8600'),
      glazingType: getChoiceValue(formValues, 'glazing_field'),
      currentHeating: getChoiceValue(formValues, '4100'),
      electricalSupply: getChoiceValue(formValues, '30e7'),
      consumerUnit: getChoiceValue(formValues, '286a'),
      numberOfBedrooms: getTextValue(formValues, 'bedrooms_field')
    },
    
    // Customer Information
    customer: {
      name: getTextValue(formValues, 'qp49x0') || getTextValue(formValues, 'customer_name') || 'Valued Customer',
      email: getTextValue(formValues, 'customer_email'),
      phone: getTextValue(formValues, 'customer_phone')
    },
    
    // Surveyor Information
    surveyor: {
      name: getTextValue(formValues, 'surveyor_name') || record.created_by_name || 'Professional Surveyor',
      date: record.created_at || new Date().toISOString()
    },
    
    // Installer Information
    installer: {
      name: getChoiceDisplayValue(formValues, 'installer_company_choice') || 'VERTEX SOLAR',
      logo: processedPhotos?.installer?.[0]?.url
    },
    
    // GPS Data
    gps: {
      latitude: record.latitude || webhookData.latitude,
      longitude: record.longitude || webhookData.longitude,
      hasData: !!(record.latitude && record.longitude)
    },
    
    // Process repeatable rooms section
    rooms: extractRooms(formValues, '7d53'),
    
    // Heating Systems
    heating: {
      boilerMake: getTextValue(formValues, 'boiler_make_extracted') || getTextValue(formValues, 'p41yt3'),
      boilerModel: getTextValue(formValues, 'boiler_model_extracted') || getTextValue(formValues, '7bv028'),
      boilerAge: getTextValue(formValues, 'boiler_age'),
      boilerCondition: getTextValue(formValues, 'boiler_condition'),
      boilerLocation: getTextValue(formValues, 'boiler_location'),
      cylinderType: getChoiceValue(formValues, 'hot_water_cylinder_type'),
      cylinderSize: getTextValue(formValues, 'cylinder_capacity_litres'),
      cylinderCondition: getTextValue(formValues, 'cylinder_condition'),
      cylinderLocation: getTextValue(formValues, 'cylinder_location'),
      heatingControls: getChoiceValue(formValues, 'bqnmdz'),
      pipeworkMaterial: getChoiceValue(formValues, '7092'),
      pipeworkSize: getTextValue(formValues, 'pipework_size'),
      pipeworkCondition: getTextValue(formValues, 'pipework_condition'),
      underfloorHeating: getBooleanValue(formValues, '2d1e'),
      heatingPresent: getBooleanValue(formValues, 'fbe0')
    },
    
    // Electrical Systems
    electrical: {
      consumerUnitType: getChoiceValue(formValues, '286a'),
      mainFuseSize: getTextValue(formValues, 'main_fuse_size_amps'),
      phaseType: getChoiceValue(formValues, '30e7'),
      rcdProtection: getBooleanValue(formValues, 'rcd_protection_present'),
      availableCapacity: getTextValue(formValues, 'available_capacity_amps'),
      meterType: getTextValue(formValues, 'electricity_meter_type'),
      meterLocation: getTextValue(formValues, 'meter_location_description'),
      dnoUpgradeRequired: getBooleanValue(formValues, 'dno_upgrade_required'),
      estimatedDnoCost: getTextValue(formValues, 'estimated_dno_cost')
    },
    
    // ASHP Assessment
    ashp: {
      recommendedSystem: getTextValue(formValues, 'recommended_ashp_system'),
      systemCapacity: getTextValue(formValues, 'recommended_capacity_kw'),
      flowTemperature: getTextValue(formValues, 'design_flow_temperature'),
      scopEstimate: getTextValue(formValues, 'estimated_scop'),
      outdoorUnitLocation: getTextValue(formValues, 'outdoor_unit_location_description'),
      nearestBoundary: getTextValue(formValues, '77bf'),
      nearestWindowDistance: getTextValue(formValues, 'c350'),
      r290Compliant: getBooleanValue(formValues, 'r290_system_compliant'),
      r290Checks: getTextValue(formValues, 'r290_safety_checks'),
      clearanceRequirements: getTextValue(formValues, 'clearance_requirements'),
      noiseConsiderations: getTextValue(formValues, 'noise_considerations'),
      planningRequired: getBooleanValue(formValues, 'planning_required'),
      installationComplexity: getTextValue(formValues, 'installation_complexity')
    },
    
    // Heat Loss (if provided from external API)
    heatLoss: {
      floorPlan: processedPhotos?.floorPlan?.[0]?.url ? [{ url: processedPhotos.floorPlan[0].url }] : [],
      wallLoss: getCalculatedField(formValues, 'wall_heat_loss_calc'),
      roofLoss: getCalculatedField(formValues, 'roof_heat_loss_calc'),
      floorLoss: getCalculatedField(formValues, 'floor_heat_loss_calc'),
      windowLoss: getCalculatedField(formValues, 'window_heat_loss_calc'),
      doorLoss: getCalculatedField(formValues, 'door_heat_loss_calc'),
      ventilationLoss: getCalculatedField(formValues, 'ventilation_heat_loss_calc'),
      totalHeatLoss: getCalculatedField(formValues, 'total_heat_loss_calc'),
      recommendedCapacity: getCalculatedField(formValues, 'recommended_capacity_calc')
    },
    
    // Photos (from processed photos)
    photos: {
      hero: (processedPhotos?.hero || []).map(p => ({ url: generatePhotoURL(p), ...p })),
      property: (processedPhotos?.elevation || []).map(p => ({ url: generatePhotoURL(p), ...p })),
      loft: (processedPhotos?.loft || []).map(p => ({ url: generatePhotoURL(p), ...p })),
      glazing: (processedPhotos?.glazing || []).map(p => ({ url: generatePhotoURL(p), ...p })),
      boiler: (processedPhotos?.boiler || []).map(p => ({ url: generatePhotoURL(p), ...p })),
      cylinder: (processedPhotos?.cylinder || []).map(p => ({ url: generatePhotoURL(p), ...p })),
      radiators: (processedPhotos?.radiators || []).map(p => ({ url: generatePhotoURL(p), ...p })),
      consumerUnit: (processedPhotos?.consumerUnit || []).map(p => ({ url: generatePhotoURL(p), ...p })),
      electrical: (processedPhotos?.electrical || []).map(p => ({ url: generatePhotoURL(p), ...p })),
      meter: (processedPhotos?.meter || []).map(p => ({ url: generatePhotoURL(p), ...p })),
      ashpHabitableWindow: (processedPhotos?.ashpHabitableWindow || []).map(p => ({ url: generatePhotoURL(p), ...p })),
      ashpProposed: (processedPhotos?.ashpProposed || []).map(p => ({ url: generatePhotoURL(p), ...p })),
      ashpArea: (processedPhotos?.ashpArea || []).map(p => ({ url: generatePhotoURL(p), ...p })),
      totalCount: Object.values(processedPhotos || {}).reduce((sum, cat) => sum + (Array.isArray(cat) ? cat.length : 0), 0)
    },
    
    // CalculatedFields
    calculated: {
      totalRooms: getCalculatedField(formValues, 'total_rooms_assessed'),
      totalWindows: getCalculatedField(formValues, 'rdsap_total_windows_calc'),
      totalRadiators: getCalculatedField(formValues, 'rdsap_total_radiators_calc'),
      lowEnergyLights: getCalculatedField(formValues, 'rdsap_low_energy_lights_calc'),
      summaryText: getCalculatedField(formValues, 'rdsap_summary_text')
    }
  };
  
  console.log('✅ Data transformed successfully');
  return transformed;
}

/**
 * Extract repeatable rooms section from form values
 */
function extractRooms(formValues, repeatableKey) {
  const rooms = [];
  const roomSection = formValues[repeatableKey];
  
  if (!roomSection || !Array.isArray(roomSection)) {
    return rooms;
  }
  
  roomSection.forEach((roomData, index) => {
    if (!roomData || typeof roomData !== 'object') return;
    
    const room = {
      index: index + 1,
      name: getChoiceValue(roomData, '44b0') || `Room ${index + 1}`,
      floorLevel: getChoiceValue(roomData, '2723'),
      ceilingHeight: getTextValue(roomData, 'dbb0'),
      floorMaterial: getChoiceValue(roomData, '54b8'),
      doorPresent: getBooleanValue(roomData, 'ed70'),
      doorWidth: getTextValue(roomData, '2b00'),
      doorHeight: getTextValue(roomData, '29b0'),
      windows: extractWindows(roomData, 'adc0'),
      radiators: extractRadiators(roomData, 'ff80'),
      photos: extractPhotos(roomData, '31d9')
    };
    
    rooms.push(room);
  });
  
  return rooms;
}

/**
 * Extract windows from room data
 */
function extractWindows(roomData, repeatableKey) {
  const windows = [];
  const windowsData = roomData[repeatableKey];
  
  if (!windowsData || !Array.isArray(windowsData)) return windows;
  
  windowsData.forEach(windowData => {
    windows.push({
      width: getTextValue(windowData, '6404'),
      height: getTextValue(windowData, '4ddb') || getTextValue(windowData, '6869'),
      type: getChoiceValue(windowData, '6fec'),
      frame: getChoiceValue(windowData, '56b0')
    });
  });
  
  return windows;
}

/**
 * Extract radiators from room data
 */
function extractRadiators(roomData, repeatableKey) {
  const radiators = [];
  const radiatorsData = roomData[repeatableKey];
  
  if (!radiatorsData || !Array.isArray(radiatorsData)) return radiators;
  
  radiatorsData.forEach(radiatorData => {
    radiators.push({
      type: getChoiceValue(radiatorData, 'b570'),
      location: getTextValue(radiatorData, '6f0d'),
      trvPresent: getBooleanValue(radiatorData, 'abb0'),
      width: getTextValue(radiatorData, '5600'),
      height: getTextValue(radiatorData, '12a1'),
      photos: extractPhotos(radiatorData, '52e6')
    });
  });
  
  return radiators;
}

/**
 * Extract photos from data
 */
function extractPhotos(data, fieldKey) {
  const photos = data?.[fieldKey];
  if (!photos) return [];
  
  if (Array.isArray(photos)) {
    return photos.map(p => ({ url: p.url || p, caption: p.caption }));
  }
  
  return [{ url: photos, caption: null }];
}

/**
 * Helper: Get address from form values
 */
function getAddress(formValues, fieldKey) {
  const address = formValues[fieldKey];
  if (!address) return 'Professional ASHP Assessment';
  
  // Handle Fulcrum AddressField structure
  if (typeof address === 'string') return address;
  if (address.sub_thoroughfare || address.thoroughfare) {
    const parts = [
      address.sub_thoroughfare,
      address.thoroughfare,
      address.locality,
      address.admin_area,
      address.postal_code
    ].filter(p => p && p.trim());
    return parts.join(', ');
  }
  
  return address.formatted || String(address);
}

/**
 * Helper: Get choice field value
 */
function getChoiceValue(formValues, fieldKey) {
  const value = formValues[fieldKey];
  if (!value) return 'N/A';
  
  if (value.choice_values && Array.isArray(value.choice_values)) {
    return value.choice_values[0] || 'N/A';
  }
  
  if (typeof value === 'string') return value;
  return 'N/A';
}

/**
 * Helper: Get choice display value
 */
function getChoiceDisplayValue(formValues, fieldKey) {
  const value = formValues[fieldKey];
  if (!value) return null;
  
  if (value.displayValue) return value.displayValue;
  if (value.choice_values && Array.isArray(value.choice_values)) {
    return value.choice_values[0]?.value || value.choice_values[0] || null;
  }
  
  return value;
}

/**
 * Helper: Get text field value
 */
function getTextValue(formValues, fieldKey) {
  const value = formValues[fieldKey];
  if (!value) return null;
  
  if (typeof value === 'string') return value;
  if (value.value) return value.value;
  return String(value);
}

/**
 * Helper: Get CalculatedField
 */
function getCalculatedField(formValues, fieldKey) {
  return getTextValue(formValues, fieldKey) || 0;
}

/**
 * Helper: Get boolean field value
 */
function getBooleanValue(formValues, fieldKey) {
  const value = formValues[fieldKey];
  if (value === null || value === undefined) return false;
  
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    const lower = value.toLowerCase();
    return lower === 'true' || lower === 'yes' || lower === '1' || lower === 'on';
  }
  
  return Boolean(value);
}

/**
 * Build property overview section
 */
function buildPropertyOverview(formValues) {
  return {
    address: getAddress(formValues, 'property_address'),
    type: getChoiceValue(formValues, 'epc_property_type'),
    age: getChoiceValue(formValues, 'epc_age_band'),
    wallConstruction: getChoiceValue(formValues, 'epc_wall_construction'),
    roofType: getChoiceValue(formValues, 'epc_roof_construction'),
    floorType: getChoiceValue(formValues, 'epc_floor_construction'),
    wallInsulation: getChoiceValue(formValues, 'epc_wall_insulation'),
    roofInsulation: getChoiceValue(formValues, 'epc_roof_insulation'),
    glazingType: getChoiceValue(formValues, 'epc_glazing_type')
  };
}

module.exports = {
  transformFulcrumData,
  getAddress,
  getChoiceValue,
  getTextValue,
  getCalculatedField,
  getBooleanValue
};

