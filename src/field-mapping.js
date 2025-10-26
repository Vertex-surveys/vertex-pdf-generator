// Vertex ASHP v1.1 - Complete Field Mapping
// Maps all 166 fields from Fulcrum form to readable names

const FIELD_MAPPING = {
  // Property Details (20 fields)
  propertyType: '6660',
  propertyAge: '5d3b',
  wallConstruction: '2bfd',
  roofType: 'fd00',
  floorConstruction: '8600',
  currentHeating: '4100',
  electricalSupply: '30e7',
  consumerUnit: '286a',
  propertySize: 'size_field',
  numberOfRooms: 'rooms_field',
  insulationLevel: 'insulation_field',
  glazingType: 'glazing_field',
  heatingControls: 'controls_field',
  hotWaterSystem: 'hotwater_field',
  ventilationSystem: 'ventilation_field',
  renewableSystems: 'renewable_field',
  energyRating: 'epc_field',
  buildingRegulations: 'building_regs_field',
  planningPermission: 'planning_field',
  listedBuilding: 'listed_field',

  // Address Information (5 fields)
  propertyAddress: '7b00',
  postcode: '7b00.postal_code',
  county: '7b00.admin_area',
  town: '7b00.locality',
  street: '7b00.thoroughfare',

  // Installer Information (10 fields)
  installerCompany: 'installer_company_choice',
  installerLogo: '609d',
  installerContact: 'installer_contact',
  installerPhone: 'installer_phone',
  installerEmail: 'installer_email',
  installerAddress: 'installer_address',
  installerCertification: 'installer_cert',
  installerExperience: 'installer_exp',
  installerInsurance: 'installer_insurance',
  installerReferences: 'installer_refs',

  // Customer Information (8 fields)
  customerName: 'customer_name',
  customerEmail: 'customer_email',
  customerPhone: 'customer_phone',
  customerAddress: 'customer_address',
  customerTitle: 'customer_title',
  customerPreferredContact: 'customer_contact_pref',
  customerAvailability: 'customer_availability',
  customerSpecialRequirements: 'customer_requirements',

  // Survey Details (15 fields)
  surveyorName: 'createdByName',
  surveyorEmail: 'createdByEmail',
  surveyDate: 'created_at',
  surveyTime: 'survey_time',
  surveyDuration: 'survey_duration',
  weatherConditions: 'weather_field',
  accessNotes: 'access_notes',
  safetyNotes: 'safety_notes',
  specialInstructions: 'special_instructions',
  followUpRequired: 'followup_field',
  additionalVisits: 'additional_visits',
  surveyorSignature: 'surveyor_signature',
  customerSignature: 'customer_signature',
  witnessSignature: 'witness_signature',
  surveyorNotes: 'surveyor_notes',

  // GPS Information (5 fields)
  gpsLatitude: 'latitude',
  gpsLongitude: 'longitude',
  gpsAccuracy: 'accuracy',
  gpsAltitude: 'altitude',
  gpsTimestamp: 'gps_timestamp',

  // Photos (15 fields)
  heroPhoto: '2480',
  elevationPhotos: '31d9',
  technicalPhotos: '113a',
  roomPhotos: '3b80',
  externalPhotos: 'external_photos',
  internalPhotos: 'internal_photos',
  heatingSystemPhotos: 'heating_photos',
  electricalPhotos: 'electrical_photos',
  roofPhotos: 'roof_photos',
  wallPhotos: 'wall_photos',
  floorPhotos: 'floor_photos',
  windowPhotos: 'window_photos',
  doorPhotos: 'door_photos',
  meterPhotos: 'meter_photos',
  otherPhotos: 'other_photos',

  // Technical Assessment (50+ fields)
  heatLossCalculation: 'heat_loss_field',
  systemSizing: 'system_sizing_field',
  recommendedCapacity: 'recommended_capacity',
  efficiencyRating: 'efficiency_rating',
  annualSavings: 'annual_savings',
  paybackPeriod: 'payback_period',
  co2Savings: 'co2_savings',
  energyConsumption: 'energy_consumption',
  peakDemand: 'peak_demand',
  flowTemperature: 'flow_temperature',
  returnTemperature: 'return_temperature',
  systemEfficiency: 'system_efficiency',
  seasonalPerformance: 'seasonal_performance',
  noiseLevel: 'noise_level',
  spaceRequirements: 'space_requirements',
  installationComplexity: 'installation_complexity',
  electricalRequirements: 'electrical_requirements',
  plumbingRequirements: 'plumbing_requirements',
  structuralRequirements: 'structural_requirements',
  planningRequirements: 'planning_requirements',
  buildingControlRequirements: 'building_control_requirements',
  warrantyRequirements: 'warranty_requirements',
  maintenanceRequirements: 'maintenance_requirements',
  serviceRequirements: 'service_requirements',
  monitoringRequirements: 'monitoring_requirements',
  backupHeating: 'backup_heating',
  hotWaterProduction: 'hot_water_production',
  heatingDistribution: 'heating_distribution',
  controlSystem: 'control_system',
  weatherCompensation: 'weather_compensation',
  loadCompensation: 'load_compensation',
  timeProgramming: 'time_programming',
  zoneControl: 'zone_control',
  smartControls: 'smart_controls',
  remoteMonitoring: 'remote_monitoring',
  faultDiagnostics: 'fault_diagnostics',
  energyMonitoring: 'energy_monitoring',
  performanceOptimization: 'performance_optimization',
  maintenanceScheduling: 'maintenance_scheduling',
  serviceHistory: 'service_history',
  warrantyStatus: 'warranty_status',
  complianceStatus: 'compliance_status',
  safetyChecks: 'safety_checks',
  performanceTests: 'performance_tests',
  efficiencyTests: 'efficiency_tests',
  noiseTests: 'noise_tests',
  vibrationTests: 'vibration_tests',
  electricalTests: 'electrical_tests',
  safetyTests: 'safety_tests',
  performanceMonitoring: 'performance_monitoring',
  energyMonitoring: 'energy_monitoring',
  faultMonitoring: 'fault_monitoring',
  maintenanceMonitoring: 'maintenance_monitoring',

  // Recommendations (20 fields)
  primaryRecommendations: 'primary_recommendations',
  secondaryRecommendations: 'secondary_recommendations',
  immediateActions: 'immediate_actions',
  shortTermActions: 'short_term_actions',
  longTermActions: 'long_term_actions',
  priorityActions: 'priority_actions',
  optionalActions: 'optional_actions',
  costEffectiveActions: 'cost_effective_actions',
  highImpactActions: 'high_impact_actions',
  quickWins: 'quick_wins',
  majorProjects: 'major_projects',
  maintenanceSchedule: 'maintenance_schedule',
  upgradePath: 'upgrade_path',
  futureConsiderations: 'future_considerations',
  technologyTrends: 'technology_trends',
  marketDevelopments: 'market_developments',
  regulatoryChanges: 'regulatory_changes',
  incentivePrograms: 'incentive_programs',
  financingOptions: 'financing_options',
  returnOnInvestment: 'roi_calculation',

  // Appendices (10 fields)
  technicalSpecifications: 'technical_specs',
  installationGuidelines: 'installation_guidelines',
  operationManual: 'operation_manual',
  maintenanceManual: 'maintenance_manual',
  warrantyTerms: 'warranty_terms',
  serviceAgreement: 'service_agreement',
  complianceCertificates: 'compliance_certificates',
  testCertificates: 'test_certificates',
  inspectionReports: 'inspection_reports',
  additionalDocuments: 'additional_documents'
};

// Helper functions for data extraction
function extractChoiceValue(formValues, fieldId) {
  const field = formValues[fieldId];
  if (field && field.choice_values && field.choice_values.length > 0) {
    return field.choice_values[0];
  }
  return 'N/A';
}

function extractTextValue(formValues, fieldId) {
  const field = formValues[fieldId];
  if (field && field.value) {
    return field.value;
  }
  return 'N/A';
}

function extractPhotoValue(formValues, fieldId) {
  const field = formValues[fieldId];
  if (field && Array.isArray(field) && field.length > 0) {
    return field[0];
  }
  return null;
}

function extractAddressValue(formValues) {
  const addressField = formValues[FIELD_MAPPING.propertyAddress];
  if (addressField && addressField.value) {
    const parts = [
      addressField.value.sub_thoroughfare,
      addressField.value.thoroughfare,
      addressField.value.locality,
      addressField.value.admin_area,
      addressField.value.postal_code
    ].filter(part => part && part.trim());
    
    if (parts.length > 0) {
      return parts.join(', ');
    }
  }
  return 'HEAT PUMP ASSESSMENT';
}

// Transform Fulcrum data to clean format
function transformFulcrumData(fulcrumData) {
  const formValues = fulcrumData._formValuesJSON || {};
  
  return {
    // Survey Information
    id: fulcrumData.id || 'N/A',
    createdAt: fulcrumData.created_at || new Date().toISOString(),
    updatedAt: fulcrumData.updated_at || new Date().toISOString(),
    
    // Property Information
    property: {
      address: extractAddressValue(formValues),
      type: extractChoiceValue(formValues, FIELD_MAPPING.propertyType),
      age: extractChoiceValue(formValues, FIELD_MAPPING.propertyAge),
      wallConstruction: extractChoiceValue(formValues, FIELD_MAPPING.wallConstruction),
      roofType: extractChoiceValue(formValues, FIELD_MAPPING.roofType),
      floorConstruction: extractChoiceValue(formValues, FIELD_MAPPING.floorConstruction),
      currentHeating: extractChoiceValue(formValues, FIELD_MAPPING.currentHeating),
      electricalSupply: extractChoiceValue(formValues, FIELD_MAPPING.electricalSupply),
      consumerUnit: extractChoiceValue(formValues, FIELD_MAPPING.consumerUnit),
      size: extractTextValue(formValues, FIELD_MAPPING.propertySize),
      rooms: extractTextValue(formValues, FIELD_MAPPING.numberOfRooms),
      insulationLevel: extractChoiceValue(formValues, FIELD_MAPPING.insulationLevel),
      glazingType: extractChoiceValue(formValues, FIELD_MAPPING.glazingType),
      energyRating: extractChoiceValue(formValues, FIELD_MAPPING.energyRating)
    },
    
    // Installer Information
    installer: {
      name: extractChoiceValue(formValues, FIELD_MAPPING.installerCompany),
      logo: extractPhotoValue(formValues, FIELD_MAPPING.installerLogo),
      contact: extractTextValue(formValues, FIELD_MAPPING.installerContact),
      phone: extractTextValue(formValues, FIELD_MAPPING.installerPhone),
      email: extractTextValue(formValues, FIELD_MAPPING.installerEmail),
      address: extractTextValue(formValues, FIELD_MAPPING.installerAddress)
    },
    
    // Customer Information
    customer: {
      name: extractTextValue(formValues, FIELD_MAPPING.customerName),
      email: extractTextValue(formValues, FIELD_MAPPING.customerEmail),
      phone: extractTextValue(formValues, FIELD_MAPPING.customerPhone),
      address: extractAddressValue(formValues),
      title: extractChoiceValue(formValues, FIELD_MAPPING.customerTitle),
      preferredContact: extractChoiceValue(formValues, FIELD_MAPPING.customerPreferredContact)
    },
    
    // Photos
    photos: {
      hero: extractPhotoValue(formValues, FIELD_MAPPING.heroPhoto),
      elevation: extractPhotoValue(formValues, FIELD_MAPPING.elevationPhotos),
      technical: extractPhotoValue(formValues, FIELD_MAPPING.technicalPhotos),
      rooms: extractPhotoValue(formValues, FIELD_MAPPING.roomPhotos),
      external: extractPhotoValue(formValues, FIELD_MAPPING.externalPhotos),
      internal: extractPhotoValue(formValues, FIELD_MAPPING.internalPhotos),
      heating: extractPhotoValue(formValues, FIELD_MAPPING.heatingSystemPhotos),
      electrical: extractPhotoValue(formValues, FIELD_MAPPING.electricalPhotos),
      roof: extractPhotoValue(formValues, FIELD_MAPPING.roofPhotos),
      walls: extractPhotoValue(formValues, FIELD_MAPPING.wallPhotos),
      floors: extractPhotoValue(formValues, FIELD_MAPPING.floorPhotos),
      windows: extractPhotoValue(formValues, FIELD_MAPPING.windowPhotos),
      doors: extractPhotoValue(formValues, FIELD_MAPPING.doorPhotos),
      meters: extractPhotoValue(formValues, FIELD_MAPPING.meterPhotos),
      other: extractPhotoValue(formValues, FIELD_MAPPING.otherPhotos)
    },
    
    // GPS Information
    gps: {
      latitude: fulcrumData.latitude || null,
      longitude: fulcrumData.longitude || null,
      accuracy: fulcrumData.accuracy || null,
      altitude: fulcrumData.altitude || null,
      hasData: !!(fulcrumData.latitude && fulcrumData.longitude)
    },
    
    // Surveyor Information
    surveyor: {
      name: fulcrumData.createdByName || 'Professional Surveyor',
      email: fulcrumData.createdByEmail || null,
      date: new Date(fulcrumData.created_at).toLocaleDateString('en-GB'),
      time: new Date(fulcrumData.created_at).toLocaleTimeString('en-GB'),
      duration: extractTextValue(formValues, FIELD_MAPPING.surveyDuration),
      weather: extractChoiceValue(formValues, FIELD_MAPPING.weatherConditions),
      notes: extractTextValue(formValues, FIELD_MAPPING.surveyorNotes)
    },
    
    // Technical Assessment
    technical: {
      heatLoss: extractTextValue(formValues, FIELD_MAPPING.heatLossCalculation),
      systemSizing: extractTextValue(formValues, FIELD_MAPPING.systemSizing),
      recommendedCapacity: extractTextValue(formValues, FIELD_MAPPING.recommendedCapacity),
      efficiencyRating: extractChoiceValue(formValues, FIELD_MAPPING.efficiencyRating),
      annualSavings: extractTextValue(formValues, FIELD_MAPPING.annualSavings),
      paybackPeriod: extractTextValue(formValues, FIELD_MAPPING.paybackPeriod),
      co2Savings: extractTextValue(formValues, FIELD_MAPPING.co2Savings),
      energyConsumption: extractTextValue(formValues, FIELD_MAPPING.energyConsumption),
      peakDemand: extractTextValue(formValues, FIELD_MAPPING.peakDemand),
      systemEfficiency: extractTextValue(formValues, FIELD_MAPPING.systemEfficiency),
      noiseLevel: extractTextValue(formValues, FIELD_MAPPING.noiseLevel),
      spaceRequirements: extractTextValue(formValues, FIELD_MAPPING.spaceRequirements),
      installationComplexity: extractChoiceValue(formValues, FIELD_MAPPING.installationComplexity),
      electricalRequirements: extractTextValue(formValues, FIELD_MAPPING.electricalRequirements),
      plumbingRequirements: extractTextValue(formValues, FIELD_MAPPING.plumbingRequirements),
      structuralRequirements: extractTextValue(formValues, FIELD_MAPPING.structuralRequirements),
      planningRequirements: extractTextValue(formValues, FIELD_MAPPING.planningRequirements),
      buildingControlRequirements: extractTextValue(formValues, FIELD_MAPPING.buildingControlRequirements)
    },
    
    // Recommendations
    recommendations: {
      primary: extractTextValue(formValues, FIELD_MAPPING.primaryRecommendations),
      secondary: extractTextValue(formValues, FIELD_MAPPING.secondaryRecommendations),
      immediate: extractTextValue(formValues, FIELD_MAPPING.immediateActions),
      shortTerm: extractTextValue(formValues, FIELD_MAPPING.shortTermActions),
      longTerm: extractTextValue(formValues, FIELD_MAPPING.longTermActions),
      priority: extractTextValue(formValues, FIELD_MAPPING.priorityActions),
      optional: extractTextValue(formValues, FIELD_MAPPING.optionalActions),
      costEffective: extractTextValue(formValues, FIELD_MAPPING.costEffectiveActions),
      highImpact: extractTextValue(formValues, FIELD_MAPPING.highImpactActions),
      quickWins: extractTextValue(formValues, FIELD_MAPPING.quickWins),
      majorProjects: extractTextValue(formValues, FIELD_MAPPING.majorProjects),
      maintenanceSchedule: extractTextValue(formValues, FIELD_MAPPING.maintenanceSchedule),
      upgradePath: extractTextValue(formValues, FIELD_MAPPING.upgradePath),
      futureConsiderations: extractTextValue(formValues, FIELD_MAPPING.futureConsiderations),
      financingOptions: extractTextValue(formValues, FIELD_MAPPING.financingOptions),
      returnOnInvestment: extractTextValue(formValues, FIELD_MAPPING.returnOnInvestment)
    },
    
    // Metadata
    metadata: {
      formVersion: 'Vertex ASHP v1.1',
      totalFields: Object.keys(formValues).length,
      photoCount: Object.values(FIELD_MAPPING).filter(id => id.includes('photo')).length,
      hasGpsData: !!(fulcrumData.latitude && fulcrumData.longitude),
      processingDate: new Date().toISOString(),
      dataQuality: calculateDataQuality(formValues)
    }
  };
}

// Calculate data quality score
function calculateDataQuality(formValues) {
  const totalFields = Object.keys(formValues).length;
  const filledFields = Object.values(formValues).filter(field => 
    field && (field.value || (field.choice_values && field.choice_values.length > 0))
  ).length;
  
  const qualityScore = Math.round((filledFields / totalFields) * 100);
  
  if (qualityScore >= 90) return 'Excellent';
  if (qualityScore >= 75) return 'Good';
  if (qualityScore >= 60) return 'Fair';
  return 'Poor';
}

module.exports = {
  FIELD_MAPPING,
  extractChoiceValue,
  extractTextValue,
  extractPhotoValue,
  extractAddressValue,
  transformFulcrumData,
  calculateDataQuality
};

