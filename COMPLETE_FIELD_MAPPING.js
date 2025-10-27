// COMPLETE VERTEX ASHP FIELD MAPPING - ALL 235 FIELDS
// Maps Fulcrum field keys to template data structure

module.exports = {
  // ========================================
  // PROPERTY DETAILS (50+ fields)
  // ========================================
  property: {
    address: '7b00',           // AddressField
    type: '6660',             // epc_property_type
    age: '5d3b',              // epc_age_band
    wallConstruction: '2bfd',  // epc_wall_construction
    wallInsulation: 'd470',    // epc_wall_insulation
    roofConstruction: 'fd00',  // epc_roof_construction
    roofInsulation: '1dd0',    // epc_roof_insulation
    floorConstruction: '8600', // epc_floor_construction
    glazingType: 'glazing_field',
    currentHeating: '4100',
    electricalSupply: '30e7',
    consumerUnit: '286a',
    propertySize: 'size_field',
    numberOfBedrooms: 'bedrooms_field',
    insulationLevel: 'insulation_field'
  },

  // ========================================
  // CUSTOMER INFORMATION (8 fields)
  // ========================================
  customer: {
    name: 'qp49x0',           // customer_name
    email: 'customer_email',
    phone: 'customer_phone',
    address: 'customer_address',
    preferences: 'customer_preferences',
    notes: 'customer_notes',
    contactMethod: 'preferred_contact',
    availability: 'customer_availability'
  },

  // ========================================
  // INSTALLER INFORMATION (10 fields)
  // ========================================
  installer: {
    company: 'installer_company_choice',
    logo: '609d',             // installer_logo PhotoField
    contact: 'installer_contact',
    phone: 'installer_phone',
    email: 'installer_email',
    address: 'installer_address',
    certification: 'installer_cert',
    experience: 'installer_exp',
    insurance: 'installer_insurance',
    references: 'installer_refs'
  },

  // ========================================
  // PHOTOS (39+ fields)
  // ========================================
  photos: {
    hero: '2480',                           // hero_photo_front_page
    property: '3b80',                       // property_photos (array)
    loft: '113a',                           // loft_photos
    boiler: '1d75',                         // boiler_photos
    cylinder: 'b750',                       // cylinder_photos
    glazing: '67c9',                        // glazing_photos
    windowFrames: 'installer_window_photos', // window frame photos
    consumerUnit: 'e810',                   // consumer_unit_photos
    electricalInstall: '5da7',              // electrical_photos
    ashpLocation: 'ea10',                   // ashp_habitable_window_photo
    ashpProposed: '5300',                   // ashp_proposed_location
    ashpArea: '2f4e',                       // ashp_installation_area
    meter: 'f4a0',                          // meter_photos
    radiators: '52e6',                      // radiator_photos (in rooms)
    rooms: '31d9',                          // room_photos (in repeatable)
    floorPlan: 'plan_up_floor_plan',        // floor plan screenshot
    additionalPhotos1: '3940',
    additionalPhotos2: '275d',
    additionalPhotos3: '2a6b'
  },

  // ========================================
  // ROOMS (REPEATABLE SECTION - field 7d53)
  // ========================================
  rooms: {
    repeatableKey: '7d53',                  // room_by_room repeatable
    fields: {
      name: '44b0',                         // room_name (ChoiceField)
      floorLevel: '2723',                   // floor_level
      ceilingHeight: 'dbb0',                // ceiling_height
      floorMaterial: '54b8',                // floor_material
      roomPhotos: '31d9',                   // room_photos (PhotoField array)

      // Windows (nested repeatable within room)
      windows: {
        repeatableKey: 'adc0',              // windows_in_room
        width: '6404',                      // window_width
        height: '4ddb',                     // window_height (or 6869)
        type: '6fec',                       // window_type
        frame: '56b0',                      // window_frame
        glazing: 'window_glazing'
      },

      // Radiators (nested repeatable within room)
      radiators: {
        repeatableKey: 'ff80',              // radiators_in_room
        type: 'b570',                       // radiator_type
        location: '6f0d',                   // radiator_location
        trvPresent: 'abb0',                 // trv_present (YesNo)
        width: '5600',                      // radiator_width
        height: '12a1',                     // radiator_height
        photos: '52e6'                      // radiator_photos
      },

      // Doors
      doorPresent: 'ed70',                  // door_present
      doorWidth: '2b00',                    // door_width
      doorHeight: '29b0'                    // door_height
    }
  },

  // ========================================
  // HEATING SYSTEMS (20+ fields)
  // ========================================
  heating: {
    boilerMake: 'boiler_make_extracted',    // Or p41yt3
    boilerModel: 'boiler_model_extracted',  // Or 7bv028
    boilerAge: 'boiler_age',
    boilerCondition: 'boiler_condition',
    boilerLocation: 'boiler_location',
    boilerPhotos: '1d75',

    cylinderType: 'hot_water_cylinder_type',
    cylinderSize: 'cylinder_capacity_litres',
    cylinderCondition: 'cylinder_condition',
    cylinderLocation: 'cylinder_location',
    cylinderPhotos: 'b750',

    heatingControls: 'bqnmdz',              // main_heating_controls
    pipeworkMaterial: '7092',               // pipework_material
    pipeworkSize: 'pipework_size',
    pipeworkCondition: 'pipework_condition',

    underfloorHeating: '2d1e',              // is_there_underfloor_heating
    heatingPresent: 'fbe0'                  // is_there_heating_present
  },

  // ========================================
  // ELECTRICAL SYSTEMS (15+ fields)
  // ========================================
  electrical: {
    consumerUnitType: '286a',               // consumer_unit_type
    mainFuseSize: 'main_fuse_size_amps',
    phaseType: '30e7',                      // supply_phase
    rcdProtection: 'rcd_protection_present',
    availableCapacity: 'available_capacity_amps',
    meterType: 'electricity_meter_type',
    meterLocation: 'meter_location_description',
    dnoUpgradeRequired: 'dno_upgrade_required',
    estimatedDnoCost: 'estimated_dno_cost',
    consumerUnitPhotos: 'e810',
    electricalPhotos: '5da7',
    meterPhotos: 'f4a0'
  },

  // ========================================
  // ASHP ASSESSMENT (25+ fields)
  // ========================================
  ashp: {
    recommendedSystem: 'recommended_ashp_system',
    systemCapacity: 'recommended_capacity_kw',
    flowTemperature: 'design_flow_temperature',
    scopEstimate: 'estimated_scop',

    outdoorUnitLocation: 'outdoor_unit_location_description',
    nearestBoundary: '77bf',                // ashp_nearest_property_boundary_m
    nearestWindowDistance: 'c350',          // ashp_distance_to_habitable_window_m

    r290Compliant: 'r290_system_compliant',
    r290Checks: 'r290_safety_checks',

    habitableWindowPhoto: 'ea10',
    proposedLocationPhoto: '5300',
    installationAreaPhoto: '2f4e',

    clearanceRequirements: 'clearance_requirements',
    noiseConsiderations: 'noise_considerations',
    planningRequired: 'planning_required',
    installationComplexity: 'installation_complexity'
  },

  // ========================================
  // HEAT LOSS CALCULATIONS (20+ fields)
  // ========================================
  heatLoss: {
    floorPlan: 'plan_up_floor_plan',        // floor_plan_photo

    wallLoss: 'wall_heat_loss_calc',
    roofLoss: 'roof_heat_loss_calc',
    floorLoss: 'floor_heat_loss_calc',
    windowLoss: 'window_heat_loss_calc',
    doorLoss: 'door_heat_loss_calc',
    ventilationLoss: 'ventilation_heat_loss_calc',
    totalHeatLoss: 'total_heat_loss_calc',
    recommendedCapacity: 'recommended_capacity_calc',

    designTemperature: 'design_temperature',
    heatedVolume: 'total_heated_volume',
    heatedArea: 'total_heated_area',
    airChangesPerHour: 'air_changes_per_hour'
  },

  // ========================================
  // RDSAP DATA (10+ fields)
  // ========================================
  rdsap: {
    totalHabitableRooms: 'rdsap_total_habitable_rooms_calc',
    totalWindows: 'rdsap_total_windows_calc',
    totalRadiators: 'rdsap_total_radiators_calc',
    lowEnergyLights: 'rdsap_low_energy_lights_calc',
    summaryText: 'rdsap_summary_text',

    wallUValue: 'rdsap_wall_u_value',
    roofUValue: 'rdsap_roof_u_value',
    floorUValue: 'rdsap_floor_u_value',
    windowUValue: 'rdsap_window_u_value'
  },

  // ========================================
  // CALCULATED FIELDS (7+ fields)
  // ========================================
  calculated: {
    totalRoomsAssessed: 'total_rooms_assessed',
    houseSummaryText: 'house_summary_text',
    rdsapSummary: 'rdsap_summary_text',
    totalHeatLoss: 'total_heat_loss_calc',
    recommendedCapacity: 'recommended_capacity_calc'
  },

  // ========================================
  // R290 COMPLIANCE (if Dave's survey)
  // ========================================
  r290: {
    systemCheck: 'r290_system_check',
    clearanceCheck: 'r290_clearance_check',
    ventilationCheck: 'r290_ventilation_check',
    ignitionSourceCheck: 'r290_ignition_check',
    safetyNotes: 'r290_safety_notes'
  },

  // ========================================
  // LOFT ASSESSMENT (10+ fields)
  // ========================================
  loft: {
    accessible: 'loft_accessible',
    insulationType: 'loft_insulation_type',
    insulationDepth: 'loft_insulation_depth',
    condition: 'loft_condition',
    storage: 'loft_storage',
    tankPresent: 'loft_tank_present',
    tankType: 'loft_tank_type',
    photos: '113a'                          // loft_photos
  },

  // ========================================
  // DOORS & WINDOWS (miscellaneous)
  // ========================================
  doorsWindows: {
    totalDoors: 'total_doors_count',
    totalWindows: 'total_windows_count',
    externalDoorsCount: 'external_doors',
    internalDoorsCount: 'internal_doors'
  },

  // ========================================
  // SURVEY METADATA
  // ========================================
  survey: {
    id: 'record.id',
    date: 'record.created_at',
    surveyor: 'record.created_by_name',
    surveyEndTime: '4275',                  // survey_end_time
    totalPhotos: 'calculated.photo_count',
    hasRecentBill: '9d00'                   // has_customer_got_copy_of_recent_bill
  }
};

// Helper: Get nested field value
function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

module.exports.getNestedValue = getNestedValue;
