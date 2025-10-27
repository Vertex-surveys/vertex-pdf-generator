const axios = require('axios');
const fs = require('fs');
require('dotenv').config();

const FORM_ID = '636eaf67-c75b-49b3-8e1f-13bf4fe36fb2'; // ASHP v1.1
const API_KEY = process.env.FULCRUM_API_KEY;

async function fetchAndAnalyze() {
  if (!API_KEY) {
    console.error('❌ FULCRUM_API_KEY not found in .env');
    process.exit(1);
  }

  try {
    console.log('📡 Fetching ASHP v1.1 form structure...\n');
    
    // Fetch form
    const formRes = await axios.get(`https://api.fulcrumapp.com/api/v2/forms/${FORM_ID}`, {
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    });

    const form = formRes.data.form;
    console.log(`✅ Form: ${form.name}`);
    console.log(`📊 Version: ${form.version}`);
    console.log(`📝 Records: ${form.record_count}`);
    console.log(`📅 Updated: ${form.updated_at}\n`);

    // Extract all hex codes
    const hexCodes = extractAllHexCodes(form.elements);
    console.log(`\n📋 Found ${hexCodes.length} fields with hex codes\n`);

    // Generate outputs
    generateHexMapping(hexCodes);
    generateWebhookTemplate(hexCodes);
    analyzeFormStructure(form.elements);

    console.log('\n✅ All files generated!');
    console.log('   - FULCRUM_HEX_CODES_MAPPING.json');
    console.log('   - FULCRUM_HEX_CODES_MAPPING.md');
    console.log('   - WEBHOOK_TEMPLATE_FOR_MAKE.json');
    console.log('   - FORM_ANALYSIS.md');

  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
  }
}

function extractAllHexCodes(elements, parentPath = '') {
  const fields = [];
  
  for (const el of elements) {
    const field = {
      hex: el.key,
      label: el.label,
      dataName: el.data_name,
      type: el.type,
      path: parentPath,
      required: el.required,
      hidden: el.hidden,
      disabled: el.disabled,
      description: el.description,
      helpText: el.ai_prompt || null,
      choices: el.choices || null
    };

    if (el.key && el.key !== '@status') {
      fields.push(field);
    }

    if (el.elements && Array.isArray(el.elements)) {
      const childPath = parentPath ? `${parentPath}.${el.key}` : el.key;
      fields.push(...extractAllHexCodes(el.elements, childPath));
    }
  }

  return fields;
}

function generateHexMapping(fields) {
  const mapping = {
    metadata: {
      formId: FORM_ID,
      formName: 'Vertex ASHP v1.1 - Professional Heat Pump Assessment',
      generated: new Date().toISOString(),
      totalFields: fields.length
    },
    fields: fields.map(f => ({
      hex: f.hex,
      label: f.label,
      dataName: f.dataName,
      type: f.type,
      path: f.path,
      required: f.required,
      hidden: f.hidden,
      description: f.description
    }))
  };

  fs.writeFileSync('FULCRUM_HEX_CODES_MAPPING.json', JSON.stringify(mapping, null, 2));

  // Also create markdown
  let md = `# Fulcrum ASHP v1.1 - Complete Hex Code Mapping\n\n`;
  md += `**Generated:** ${new Date().toLocaleString()}\n\n`;
  md += `**Total Fields:** ${fields.length}\n\n---\n\n`;

  // Group by section
  const sections = {};
  fields.forEach(f => {
    const section = f.path ? f.path.split('.')[0] : 'Root';
    if (!sections[section]) sections[section] = [];
    sections[section].push(f);
  });

  Object.keys(sections).sort().forEach(section => {
    md += `## ${section}\n\n`;
    md += `| Hex | Label | Type | Required | Data Name |\n`;
    md += `|-----|-------|------|----------|-----------|\n`;
    sections[section].forEach(f => {
      md += `| \`${f.hex}\` | ${f.label} | ${f.type} | ${f.required ? '✓' : ''} | ${f.dataName || '-'} |\n`;
    });
    md += `\n`;
  });

  fs.writeFileSync('FULCRUM_HEX_CODES_MAPPING.md', md);
}

function generateWebhookTemplate(fields) {
  const template = {
    _comment: "Make.com webhook mapping for Fulcrum ASHP v1.1",
    _generated: new Date().toISOString(),
    _usage: "Use {{1.form_values.HEX.value}} or {{1.form_values.HEX.choice_values[0]}}",
    property: {
      address: "{{1.form_values.7b00.value}}",
      type: "{{1.form_values.6660.choice_values}}",
      age: "{{1.form_values.5d3b.choice_values[0]}}",
      wallConstruction: "{{1.form_values.2bfd.choice_values[0]}}"
    },
    survey: {
      surveyor: "{{1.form_values.0000.choice_values[0]}}",
      date: "{{1.created_at}}",
      startTime: "{{1.form_values.b450.value}}",
      version: "{{1.form_values.cb00.value}}"
    },
    heating: {
      present: "{{1.form_values.fbe0.value}}",
      type: "{{1.form_values.4100.choice_values}}",
      pipeSize: "{{1.form_values.7092.choice_values}}",
      pipeMaterial: "{{1.form_values.pipe_material_7093.choice_values[0]}}"
    },
    _notes: [
      "Use .value for text fields",
      "Use .choice_values[0] for single-select",
      "Use .choice_values for multi-select",
      "Use {{1.form_values.HEX}} for entire arrays (rooms, radiators, etc)"
    ]
  };

  fs.writeFileSync('WEBHOOK_TEMPLATE_FOR_MAKE.json', JSON.stringify(template, null, 2));
}

function analyzeFormStructure(elements) {
  let analysis = `# Form Structure Analysis & Improvement Opportunities\n\n`;
  
  const stats = { sections: 0, fields: 0, repeatables: 0, photos: 0 };
  const recommendations = [];

  function analyze(el, depth = 0) {
    const indent = '  '.repeat(depth);
    
    if (el.type === 'Section') {
      stats.sections++;
      analysis += `${indent}## ${el.label}\n`;
      analysis += `${indent}**Description:** ${el.description || 'None'}\n`;
      analysis += `${indent}**Required:** ${el.required}\n\n`;
    }
    
    if (el.type === 'PhotoField') {
      stats.photos++;
    }
    
    if (el.type === 'Repeatable') {
      stats.repeatables++;
      analysis += `${indent}### 🔄 Repeatable: ${el.label}\n`;
      analysis += `${indent}**Key:** \`${el.key}\`\n`;
      analysis += `${indent}**Description:** ${el.description || 'None'}\n\n`;
    }

    if (el.key && el.dataName) {
      stats.fields++;
      
      // Identify potential issues
      if (el.required && el.hidden) {
        recommendations.push(`⚠️  Field "${el.label}" is required but hidden`);
      }
      if (el.disabled && el.required) {
        recommendations.push(`⚠️  Field "${el.label}" is required but disabled`);
      }
      if (el.type === 'PhotoField' && el.min_length > 0 && el.hidden) {
        recommendations.push(`⚠️  Photo field "${el.label}" required but hidden`);
      }
    }

    if (el.elements) {
      el.elements.forEach(child => analyze(child, depth + 1));
    }
  }

  elements.forEach(el => analyze(el));

  analysis += `## Statistics\n\n`;
  analysis += `- **Sections:** ${stats.sections}\n`;
  analysis += `- **Total Fields:** ${stats.fields}\n`;
  analysis += `- **Repeatable Sections:** ${stats.repeatables}\n`;
  analysis += `- **Photo Fields:** ${stats.photos}\n\n`;

  if (recommendations.length > 0) {
    analysis += `## ⚠️  Potential Issues Found\n\n`;
    recommendations.forEach(rec => {
      analysis += `- ${rec}\n`;
    });
    analysis += `\n`;
  }

  fs.writeFileSync('FORM_ANALYSIS.md', analysis);
  console.log('\n📊 Form analysis complete!');
  if (recommendations.length > 0) {
    console.log(`   Found ${recommendations.length} potential issues`);
  }
}

fetchAndAnalyze();



