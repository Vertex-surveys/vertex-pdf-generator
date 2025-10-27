# 🚂 RAILWAY COMPLETE SECTIONS - EJS CODE
## Sections 3-9 for Railway PDF Generator

**Status**: Ready for Implementation
**Format**: Copy/Paste EJS Code
**Styling**: Uses existing portal CSS classes

---

## 📋 TABLE OF CONTENTS

- [Section 03: Property Overview](#section-03-property-overview)
- [Section 04: Room Assessment](#section-04-room-assessment)
- [Section 05: Heating Systems](#section-05-heating-systems)
- [Section 06: Technical/Electrical](#section-06-technicalelectrical)
- [Section 07: ASHP Assessment](#section-07-ashp-assessment)
- [Section 08: Meter & Supply](#section-08-meter--supply)
- [Section 09: Photo Documentation](#section-09-photo-documentation)

---

## Section 03: Property Overview

### Data Structure Required:
```javascript
{
  property: {
    address: "String",
    type: "String",
    age: "String",
    wallConstruction: "String",
    wallInsulation: "String",
    roofConstruction: "String",
    roofInsulation: "String",
    floorConstruction: "String",
    glazingType: "String",
    currentHeating: "String",
    electricalSupply: "String",
    consumerUnit: "String"
  },
  photos: {
    property: [{ url: "..." }]
  }
}
```

### Complete EJS Code:

```html
<div class="page-break"></div>

<!-- ==========================================
     SECTION 03: PROPERTY OVERVIEW
     ========================================== -->
<div class="glass-card" id="property-overview" style="margin-bottom: 30px; page-break-inside: avoid;">

  <!-- Section Header -->
  <div style="display: flex; align-items: center; margin-bottom: 24px; border-bottom: 2px solid #C8B273; padding-bottom: 16px;">
    <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #C8B273, #D4AF37); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 16px; box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#2C3E50" stroke-width="2.5" stroke-linejoin="round"/>
        <path d="M9 22V12H15V22" stroke="#2C3E50" stroke-width="2.5" stroke-linejoin="round"/>
      </svg>
    </div>
    <div>
      <h2 style="font-size: 24pt; font-weight: 900; color: #C8B273; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.4);">PROPERTY OVERVIEW</h2>
      <div style="font-size: 11pt; color: #ffffff; font-weight: 600; margin-top: 4px;">Complete Building Assessment</div>
    </div>
  </div>

  <!-- Property Details Grid -->
  <div style="display: table; width: 100%; border-collapse: separate; border-spacing: 12px;">

    <!-- Row 1: Address & Type -->
    <div style="display: table-row;">
      <div style="display: table-cell; width: 60%; vertical-align: top;">
        <div style="background: rgba(200, 178, 115, 0.1); border: 1px solid #C8B273; border-radius: 8px; padding: 16px;">
          <div style="font-size: 10pt; color: #C8B273; font-weight: 800; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Property Address</div>
          <div style="font-size: 13pt; color: #ffffff; font-weight: 600; line-height: 1.4;"><%= data.property?.address || 'N/A' %></div>
        </div>
      </div>
      <div style="display: table-cell; width: 40%; vertical-align: top;">
        <div style="background: rgba(200, 178, 115, 0.1); border: 1px solid #C8B273; border-radius: 8px; padding: 16px;">
          <div style="font-size: 10pt; color: #C8B273; font-weight: 800; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Property Type</div>
          <div style="font-size: 13pt; color: #ffffff; font-weight: 600;"><%= data.property?.type || 'N/A' %></div>
        </div>
      </div>
    </div>

    <!-- Row 2: Age & Bedrooms -->
    <div style="display: table-row;">
      <div style="display: table-cell; vertical-align: top;">
        <div style="background: rgba(200, 178, 115, 0.1); border: 1px solid #C8B273; border-radius: 8px; padding: 16px;">
          <div style="font-size: 10pt; color: #C8B273; font-weight: 800; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Construction Age</div>
          <div style="font-size: 13pt; color: #ffffff; font-weight: 600;"><%= data.property?.age || 'N/A' %></div>
        </div>
      </div>
      <div style="display: table-cell; vertical-align: top;">
        <div style="background: rgba(200, 178, 115, 0.1); border: 1px solid #C8B273; border-radius: 8px; padding: 16px;">
          <div style="font-size: 10pt; color: #C8B273; font-weight: 800; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Bedrooms</div>
          <div style="font-size: 13pt; color: #ffffff; font-weight: 600;"><%= data.property?.numberOfBedrooms || 'N/A' %></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Building Fabric Section -->
  <div style="margin-top: 24px;">
    <h3 style="font-size: 16pt; font-weight: 800; color: #C8B273; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 1px;">Building Fabric</h3>

    <div style="display: table; width: 100%; border-collapse: separate; border-spacing: 12px;">
      <!-- Walls -->
      <div style="display: table-row;">
        <div style="display: table-cell; width: 50%; vertical-align: top;">
          <div style="background: rgba(200, 178, 115, 0.08); border: 1px solid rgba(200, 178, 115, 0.3); border-radius: 8px; padding: 14px;">
            <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase;">Wall Construction</div>
            <div style="font-size: 12pt; color: #ffffff; font-weight: 600;"><%= data.property?.wallConstruction || 'N/A' %></div>
          </div>
        </div>
        <div style="display: table-cell; width: 50%; vertical-align: top;">
          <div style="background: rgba(200, 178, 115, 0.08); border: 1px solid rgba(200, 178, 115, 0.3); border-radius: 8px; padding: 14px;">
            <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase;">Wall Insulation</div>
            <div style="font-size: 12pt; color: #ffffff; font-weight: 600;"><%= data.property?.wallInsulation || 'N/A' %></div>
          </div>
        </div>
      </div>

      <!-- Roof -->
      <div style="display: table-row;">
        <div style="display: table-cell; vertical-align: top;">
          <div style="background: rgba(200, 178, 115, 0.08); border: 1px solid rgba(200, 178, 115, 0.3); border-radius: 8px; padding: 14px;">
            <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase;">Roof Construction</div>
            <div style="font-size: 12pt; color: #ffffff; font-weight: 600;"><%= data.property?.roofConstruction || 'N/A' %></div>
          </div>
        </div>
        <div style="display: table-cell; vertical-align: top;">
          <div style="background: rgba(200, 178, 115, 0.08); border: 1px solid rgba(200, 178, 115, 0.3); border-radius: 8px; padding: 14px;">
            <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase;">Roof Insulation</div>
            <div style="font-size: 12pt; color: #ffffff; font-weight: 600;"><%= data.property?.roofInsulation || 'N/A' %></div>
          </div>
        </div>
      </div>

      <!-- Floor & Glazing -->
      <div style="display: table-row;">
        <div style="display: table-cell; vertical-align: top;">
          <div style="background: rgba(200, 178, 115, 0.08); border: 1px solid rgba(200, 178, 115, 0.3); border-radius: 8px; padding: 14px;">
            <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase;">Floor Construction</div>
            <div style="font-size: 12pt; color: #ffffff; font-weight: 600;"><%= data.property?.floorConstruction || 'N/A' %></div>
          </div>
        </div>
        <div style="display: table-cell; vertical-align: top;">
          <div style="background: rgba(200, 178, 115, 0.08); border: 1px solid rgba(200, 178, 115, 0.3); border-radius: 8px; padding: 14px;">
            <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase;">Glazing Type</div>
            <div style="font-size: 12pt; color: #ffffff; font-weight: 600;"><%= data.property?.glazingType || 'N/A' %></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Current Systems Section -->
  <div style="margin-top: 24px;">
    <h3 style="font-size: 16pt; font-weight: 800; color: #C8B273; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 1px;">Current Systems</h3>

    <div style="display: table; width: 100%; border-collapse: separate; border-spacing: 12px;">
      <div style="display: table-row;">
        <div style="display: table-cell; width: 33.33%; vertical-align: top;">
          <div style="background: rgba(200, 178, 115, 0.08); border: 1px solid rgba(200, 178, 115, 0.3); border-radius: 8px; padding: 14px;">
            <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase;">Heating</div>
            <div style="font-size: 12pt; color: #ffffff; font-weight: 600;"><%= data.property?.currentHeating || 'N/A' %></div>
          </div>
        </div>
        <div style="display: table-cell; width: 33.33%; vertical-align: top;">
          <div style="background: rgba(200, 178, 115, 0.08); border: 1px solid rgba(200, 178, 115, 0.3); border-radius: 8px; padding: 14px;">
            <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase;">Electrical Supply</div>
            <div style="font-size: 12pt; color: #ffffff; font-weight: 600;"><%= data.property?.electricalSupply || 'N/A' %></div>
          </div>
        </div>
        <div style="display: table-cell; width: 33.33%; vertical-align: top;">
          <div style="background: rgba(200, 178, 115, 0.08); border: 1px solid rgba(200, 178, 115, 0.3); border-radius: 8px; padding: 14px;">
            <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase;">Consumer Unit</div>
            <div style="font-size: 12pt; color: #ffffff; font-weight: 600;"><%= data.property?.consumerUnit || 'N/A' %></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Property Photos -->
  <% if (data.photos?.property && data.photos.property.length > 0) { %>
    <div style="margin-top: 28px;">
      <h3 style="font-size: 16pt; font-weight: 800; color: #C8B273; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 1px;">Property Photos</h3>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
        <% data.photos.property.slice(0, 4).forEach((photo, index) => { %>
          <div style="border: 2px solid #C8B273; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
            <img src="<%= photo.url %>" alt="Property Photo <%= index + 1 %>" style="width: 100%; height: 280px; object-fit: cover; display: block;" />
          </div>
        <% }); %>
      </div>
    </div>
  <% } %>

</div>
```

### Field Mappings for Section 03:
- `property.address` → field `7b00`
- `property.type` → field `6660`
- `property.age` → field `5d3b`
- `property.wallConstruction` → field `2bfd`
- `property.wallInsulation` → field `d470`
- `property.roofConstruction` → field `fd00`
- `property.roofInsulation` → field `1dd0`
- `property.floorConstruction` → field `8600`
- `property.glazingType` → field `glazing_field`
- `property.currentHeating` → field `4100`
- `property.electricalSupply` → field `30e7`
- `property.consumerUnit` → field `286a`
- `photos.property` → field `3b80`

---

## Section 03b: Heat Loss Summary Table

**ADD THIS BEFORE Section 04 (Room Assessment)**

### Data Structure Required:
```javascript
{
  heatLoss: {
    wallLoss: "2500",
    roofLoss: "1200",
    floorLoss: "800",
    windowLoss: "1500",
    doorLoss: "300",
    ventilationLoss: "600",
    totalHeatLoss: "6900",
    recommendedCapacity: "8500",
    floorPlan: [{ url: "..." }]
  },
  rooms: [
    { index: 1, name: "Living Room", ceilingHeight: "2400", floorMaterial: "Carpet", windows: [...], radiators: [...] }
  ]
}
```

### Complete EJS Code:

```html
<div class="page-break"></div>

<!-- ==========================================
     SECTION 03B: HEAT LOSS SUMMARY TABLE
     ========================================== -->
<div class="glass-card" id="heat-loss-summary" style="margin-bottom: 30px;">

  <!-- Section Header -->
  <div style="display: flex; align-items: center; margin-bottom: 24px; border-bottom: 2px solid #C8B273; padding-bottom: 16px;">
    <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #C8B273, #D4AF37); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 16px; box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V19C19 20.1046 18.1046 21 17 21Z" stroke="#2C3E50" stroke-width="2.5"/>
      </svg>
    </div>
    <div>
      <h2 style="font-size: 24pt; font-weight: 900; color: #C8B273; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.4);">HEAT LOSS SUMMARY</h2>
      <div style="font-size: 11pt; color: #ffffff; font-weight: 600; margin-top: 4px;">Comprehensive Heat Loss Analysis</div>
    </div>
  </div>

  <!-- Floor Plan Photo -->
  <% if (data.heatLoss?.floorPlan && data.heatLoss.floorPlan.length > 0) { %>
    <div style="text-align: center; margin-bottom: 30px; page-break-inside: avoid;">
      <h3 style="font-size: 16pt; font-weight: 800; color: #C8B273; margin-bottom: 16px; text-transform: uppercase; text-align: center;">Floor Plan</h3>
      <div style="border: 3px solid #C8B273; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 25px rgba(0,0,0,0.25); display: inline-block; max-width: 100%;">
        <img src="<%= data.heatLoss.floorPlan[0].url %>" alt="Floor Plan" style="width: 100%; max-width: 800px; height: auto; display: block;" />
      </div>
      <p style="font-size: 16pt; color: #C8B273; margin-top: 15px; text-align: center; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.4);">Property Floor Plan</p>
    </div>
  <% } %>

  <!-- Page Break -->
  <div class="page-break"></div>

  <!-- UNIFIED ROOM ASSESSMENT TABLE -->
  <% if (data.rooms && data.rooms.length > 0) { %>
    <div style="margin-bottom: 30px;">
      <h3 style="font-size: 18pt; font-weight: 800; color: #C8B273; margin-bottom: 16px; text-transform: uppercase; text-align: center;">Room Assessment Overview</h3>

      <table style="width: 100%; border-collapse: collapse; border: 2px solid #C8B273; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);">
        <!-- Table Header -->
        <thead>
          <tr style="background: linear-gradient(135deg, #C8B273, #D4AF37);">
            <th style="padding: 14px 10px; text-align: left; font-size: 11pt; font-weight: 900; color: #2C3E50; border-right: 2px solid #B8A082; width: 20%;">ROOM</th>
            <th style="padding: 14px 10px; text-align: center; font-size: 11pt; font-weight: 900; color: #2C3E50; border-right: 2px solid #B8A082; width: 15%;">CEILING HEIGHT</th>
            <th style="padding: 14px 10px; text-align: center; font-size: 11pt; font-weight: 900; color: #2C3E50; border-right: 2px solid #B8A082; width: 20%;">FLOOR MATERIAL</th>
            <th style="padding: 14px 10px; text-align: center; font-size: 11pt; font-weight: 900; color: #2C3E50; border-right: 2px solid #B8A082; width: 20%;">WINDOWS</th>
            <th style="padding: 14px 10px; text-align: center; font-size: 11pt; font-weight: 900; color: #2C3E50; border-right: 2px solid #B8A082; width: 15%;">RADIATORS</th>
            <th style="padding: 14px 10px; text-align: center; font-size: 11pt; font-weight: 900; color: #2C3E50; width: 10%;">DOORS</th>
          </tr>
        </thead>

        <!-- Table Body -->
        <tbody>
          <% data.rooms.forEach((room, roomIndex) => { %>
            <%
              const rowBg = roomIndex % 2 === 0 ? 'rgba(200, 178, 115, 0.15)' : 'rgba(200, 178, 115, 0.08)';
              const roomName = room.name || `Room ${room.index}`;
              const floorLevel = room.floorLevel || 'Ground';
              const ceilingHeight = room.ceilingHeight ? (parseFloat(room.ceilingHeight) / 1000).toFixed(2) + 'm' : 'N/A';
              const floorMaterial = room.floorMaterial || 'N/A';
              const windowCount = (room.windows && room.windows.length) || 0;
              const radiatorCount = (room.radiators && room.radiators.length) || 0;
              const doorPresent = room.doorPresent ? 'Yes' : 'No';
            %>
            <tr style="background: <%= rowBg %>; border-bottom: 1px solid #B8A082; page-break-inside: avoid;">
              <!-- Room Name with Navigation Link -->
              <td style="padding: 12px 10px; border-right: 2px solid #B8A082; vertical-align: top;">
                <a href="#room-<%= room.index %>" style="color: #C8B273; text-decoration: none; font-weight: 700; font-size: 11pt; display: block;">
                  <%= roomName %>
                </a>
                <div style="font-size: 9pt; color: #C8B273; margin-top: 4px; font-weight: 600;">
                  <%= floorLevel %> Floor
                </div>
              </td>

              <!-- Ceiling Height -->
              <td style="padding: 12px 10px; border-right: 2px solid #B8A082; text-align: center; vertical-align: top;">
                <div style="font-size: 12pt; font-weight: 700; color: #ffffff;"><%= ceilingHeight %></div>
              </td>

              <!-- Floor Material -->
              <td style="padding: 12px 10px; border-right: 2px solid #B8A082; text-align: center; vertical-align: top;">
                <div style="font-size: 10pt; font-weight: 600; color: #ffffff;"><%= floorMaterial %></div>
              </td>

              <!-- Windows -->
              <td style="padding: 12px 8px; border-right: 2px solid #B8A082; vertical-align: top;">
                <% if (windowCount > 0) { %>
                  <div style="font-size: 10pt; color: #C8B273; font-weight: 700; margin-bottom: 6px;"><%= windowCount %> Window<%= windowCount > 1 ? 's' : '' %></div>
                  <% room.windows.slice(0, 2).forEach((window, wIndex) => { %>
                    <div style="font-size: 9pt; color: #ffffff; font-weight: 600; margin-bottom: 4px;">
                      <%= window.width || 'N/A' %>×<%= window.height || 'N/A' %>mm
                      <div style="font-size: 8pt; color: #C8B273;"><%= window.type || 'N/A' %></div>
                    </div>
                  <% }); %>
                  <% if (windowCount > 2) { %>
                    <div style="font-size: 8pt; color: #C8B273; font-weight: 600;">+ <%= windowCount - 2 %> more</div>
                  <% } %>
                <% } else { %>
                  <div style="font-size: 10pt; color: #ffffff; text-align: center;">None</div>
                <% } %>
              </td>

              <!-- Radiators -->
              <td style="padding: 12px 8px; border-right: 2px solid #B8A082; vertical-align: top; text-align: center;">
                <% if (radiatorCount > 0) { %>
                  <div style="font-size: 12pt; color: #FFD700; font-weight: 700;"><%= radiatorCount %></div>
                  <div style="font-size: 8pt; color: #C8B273; font-weight: 600; margin-top: 2px;">
                    <%= room.radiators[0].type || 'N/A' %>
                  </div>
                <% } else { %>
                  <div style="font-size: 10pt; color: #ffffff;">0</div>
                <% } %>
              </td>

              <!-- Doors -->
              <td style="padding: 12px 8px; text-align: center; vertical-align: top;">
                <div style="font-size: 12pt; color: #ffffff; font-weight: 700;"><%= doorPresent %></div>
              </td>
            </tr>
          <% }); %>
        </tbody>
      </table>
    </div>
  <% } %>

  <!-- Heat Loss Calculations -->
  <div style="margin-top: 30px;">
    <h3 style="font-size: 18pt; font-weight: 800; color: #C8B273; margin-bottom: 20px; text-transform: uppercase; text-align: center;">Fabric Heat Loss Analysis</h3>

    <div style="display: table; width: 100%; border-collapse: separate; border-spacing: 12px; margin-bottom: 24px;">
      <!-- Row 1: Walls & Roof -->
      <div style="display: table-row;">
        <div style="display: table-cell; width: 50%;">
          <div style="background: rgba(200, 178, 115, 0.12); border: 2px solid #C8B273; border-radius: 12px; padding: 18px; text-align: center;">
            <div style="font-size: 10pt; color: #C8B273; font-weight: 800; margin-bottom: 8px; text-transform: uppercase;">Wall Heat Loss</div>
            <div style="font-size: 24pt; color: #FFD700; font-weight: 900;"><%= data.heatLoss?.wallLoss || 'N/A' %> <span style="font-size: 14pt;">W</span></div>
          </div>
        </div>
        <div style="display: table-cell; width: 50%;">
          <div style="background: rgba(200, 178, 115, 0.12); border: 2px solid #C8B273; border-radius: 12px; padding: 18px; text-align: center;">
            <div style="font-size: 10pt; color: #C8B273; font-weight: 800; margin-bottom: 8px; text-transform: uppercase;">Roof Heat Loss</div>
            <div style="font-size: 24pt; color: #FFD700; font-weight: 900;"><%= data.heatLoss?.roofLoss || 'N/A' %> <span style="font-size: 14pt;">W</span></div>
          </div>
        </div>
      </div>

      <!-- Row 2: Floor & Windows -->
      <div style="display: table-row;">
        <div style="display: table-cell;">
          <div style="background: rgba(200, 178, 115, 0.12); border: 2px solid #C8B273; border-radius: 12px; padding: 18px; text-align: center;">
            <div style="font-size: 10pt; color: #C8B273; font-weight: 800; margin-bottom: 8px; text-transform: uppercase;">Floor Heat Loss</div>
            <div style="font-size: 24pt; color: #FFD700; font-weight: 900;"><%= data.heatLoss?.floorLoss || 'N/A' %> <span style="font-size: 14pt;">W</span></div>
          </div>
        </div>
        <div style="display: table-cell;">
          <div style="background: rgba(200, 178, 115, 0.12); border: 2px solid #C8B273; border-radius: 12px; padding: 18px; text-align: center;">
            <div style="font-size: 10pt; color: #C8B273; font-weight: 800; margin-bottom: 8px; text-transform: uppercase;">Window Heat Loss</div>
            <div style="font-size: 24pt; color: #FFD700; font-weight: 900;"><%= data.heatLoss?.windowLoss || 'N/A' %> <span style="font-size: 14pt;">W</span></div>
          </div>
        </div>
      </div>

      <!-- Row 3: Doors & Ventilation -->
      <div style="display: table-row;">
        <div style="display: table-cell;">
          <div style="background: rgba(200, 178, 115, 0.12); border: 2px solid #C8B273; border-radius: 12px; padding: 18px; text-align: center;">
            <div style="font-size: 10pt; color: #C8B273; font-weight: 800; margin-bottom: 8px; text-transform: uppercase;">Door Heat Loss</div>
            <div style="font-size: 24pt; color: #FFD700; font-weight: 900;"><%= data.heatLoss?.doorLoss || 'N/A' %> <span style="font-size: 14pt;">W</span></div>
          </div>
        </div>
        <div style="display: table-cell;">
          <div style="background: rgba(200, 178, 115, 0.12); border: 2px solid #C8B273; border-radius: 12px; padding: 18px; text-align: center;">
            <div style="font-size: 10pt; color: #C8B273; font-weight: 800; margin-bottom: 8px; text-transform: uppercase;">Ventilation Loss</div>
            <div style="font-size: 24pt; color: #FFD700; font-weight: 900;"><%= data.heatLoss?.ventilationLoss || 'N/A' %> <span style="font-size: 14pt;">W</span></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Total Heat Loss & Recommended Capacity -->
    <div style="display: table; width: 100%; border-collapse: separate; border-spacing: 12px;">
      <div style="display: table-row;">
        <div style="display: table-cell; width: 50%;">
          <div style="background: linear-gradient(135deg, rgba(255, 0, 0, 0.2), rgba(255, 100, 100, 0.1)); border: 3px solid #FF4444; border-radius: 16px; padding: 24px; text-align: center; box-shadow: 0 8px 20px rgba(255, 68, 68, 0.3);">
            <div style="font-size: 12pt; color: #FFD700; font-weight: 800; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">Total Heat Loss</div>
            <div style="font-size: 32pt; color: #ffffff; font-weight: 900; text-shadow: 0 4px 8px rgba(0,0,0,0.6);"><%= data.heatLoss?.totalHeatLoss || 'N/A' %> <span style="font-size: 18pt;">W</span></div>
          </div>
        </div>
        <div style="display: table-cell; width: 50%;">
          <div style="background: linear-gradient(135deg, rgba(0, 255, 0, 0.2), rgba(100, 255, 100, 0.1)); border: 3px solid #44FF44; border-radius: 16px; padding: 24px; text-align: center; box-shadow: 0 8px 20px rgba(68, 255, 68, 0.3);">
            <div style="font-size: 12pt; color: #FFD700; font-weight: 800; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">Recommended Capacity</div>
            <div style="font-size: 32pt; color: #ffffff; font-weight: 900; text-shadow: 0 4px 8px rgba(0,0,0,0.6);"><%= data.heatLoss?.recommendedCapacity || 'N/A' %> <span style="font-size: 18pt;">W</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
```

### Field Mappings for Section 03b:
- `heatLoss.floorPlan` → field `plan_up_floor_plan`
- `heatLoss.wallLoss` → field `wall_heat_loss_calc`
- `heatLoss.roofLoss` → field `roof_heat_loss_calc`
- `heatLoss.floorLoss` → field `floor_heat_loss_calc`
- `heatLoss.windowLoss` → field `window_heat_loss_calc`
- `heatLoss.doorLoss` → field `door_heat_loss_calc`
- `heatLoss.ventilationLoss` → field `ventilation_heat_loss_calc`
- `heatLoss.totalHeatLoss` → field `total_heat_loss_calc`
- `heatLoss.recommendedCapacity` → field `recommended_capacity_calc`
- `rooms` → from repeatable section `7d53`

---

## Section 04: Room Assessment

### Data Structure Required:
```javascript
{
  rooms: [
    {
      index: 1,
      name: "Living Room",
      floorLevel: "Ground",
      ceilingHeight: "2400",
      floorMaterial: "Carpet",
      windows: [
        { width: "1200", height: "1500", type: "Double Glazed", frame: "uPVC" }
      ],
      radiators: [
        { type: "Single Panel", location: "Under Window", trvPresent: true, width: "1000", height: "600" }
      ],
      doorPresent: true,
      doorWidth: "800",
      doorHeight: "2000",
      photos: [{ url: "..." }]
    }
  ]
}
```

### Complete EJS Code:

```html
<div class="page-break"></div>

<!-- ==========================================
     SECTION 04: ROOM ASSESSMENT
     ========================================== -->
<div class="glass-card" id="room-assessment" style="margin-bottom: 30px;">

  <!-- Section Header -->
  <div style="display: flex; align-items: center; margin-bottom: 24px; border-bottom: 2px solid #C8B273; padding-bottom: 16px;">
    <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #C8B273, #D4AF37); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 16px; box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="#2C3E50" stroke-width="2.5"/>
        <path d="M9 9H15" stroke="#2C3E50" stroke-width="2" stroke-linecap="round"/>
        <path d="M9 15H15" stroke="#2C3E50" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>
    <div>
      <h2 style="font-size: 24pt; font-weight: 900; color: #C8B273; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.4);">ROOM ASSESSMENT</h2>
      <div style="font-size: 11pt; color: #ffffff; font-weight: 600; margin-top: 4px;">Room-by-Room Analysis</div>
    </div>
  </div>

  <% if (data.rooms && data.rooms.length > 0) { %>
    <% data.rooms.forEach((room, roomIndex) => { %>

      <% if (roomIndex > 0) { %>
        <div style="page-break-before: always;"></div>
      <% } %>

      <!-- Individual Room Card -->
      <div style="background: rgba(200, 178, 115, 0.08); border: 2px solid #C8B273; border-radius: 16px; padding: 24px; margin-bottom: 24px; page-break-inside: avoid;">

        <!-- Room Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid rgba(200, 178, 115, 0.3); padding-bottom: 12px;">
          <div>
            <h3 style="font-size: 20pt; font-weight: 800; color: #FFD700; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.4);"><%= room.name || `Room ${room.index}` %></h3>
            <div style="font-size: 11pt; color: #C8B273; font-weight: 600; margin-top: 4px;"><%= room.floorLevel || 'Ground' %> Floor</div>
          </div>
          <div style="background: linear-gradient(135deg, #C8B273, #D4AF37); padding: 8px 16px; border-radius: 8px; font-size: 16pt; font-weight: 900; color: #2C3E50;">
            Room <%= room.index %>
          </div>
        </div>

        <!-- Room Details Grid -->
        <div style="display: table; width: 100%; border-collapse: separate; border-spacing: 10px; margin-bottom: 16px;">
          <div style="display: table-row;">
            <div style="display: table-cell; width: 33.33%;">
              <div style="background: rgba(255, 215, 0, 0.1); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 12px; text-align: center;">
                <div style="font-size: 9pt; color: #FFD700; font-weight: 800; margin-bottom: 4px; text-transform: uppercase;">Ceiling Height</div>
                <div style="font-size: 16pt; color: #ffffff; font-weight: 700;"><%= room.ceilingHeight ? (parseFloat(room.ceilingHeight) / 1000).toFixed(2) + 'm' : 'N/A' %></div>
              </div>
            </div>
            <div style="display: table-cell; width: 33.33%;">
              <div style="background: rgba(255, 215, 0, 0.1); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 12px; text-align: center;">
                <div style="font-size: 9pt; color: #FFD700; font-weight: 800; margin-bottom: 4px; text-transform: uppercase;">Floor Material</div>
                <div style="font-size: 16pt; color: #ffffff; font-weight: 700;"><%= room.floorMaterial || 'N/A' %></div>
              </div>
            </div>
            <div style="display: table-cell; width: 33.33%;">
              <div style="background: rgba(255, 215, 0, 0.1); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 12px; text-align: center;">
                <div style="font-size: 9pt; color: #FFD700; font-weight: 800; margin-bottom: 4px; text-transform: uppercase;">Door</div>
                <div style="font-size: 16pt; color: #ffffff; font-weight: 700;"><%= room.doorPresent ? 'Yes' : 'No' %></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Windows Section -->
        <% if (room.windows && room.windows.length > 0) { %>
          <div style="margin-top: 20px;">
            <h4 style="font-size: 13pt; font-weight: 800; color: #C8B273; margin-bottom: 12px; text-transform: uppercase;">Windows (<%= room.windows.length %>)</h4>
            <div style="background: rgba(200, 178, 115, 0.05); border: 1px solid rgba(200, 178, 115, 0.2); border-radius: 8px; padding: 14px;">
              <% room.windows.forEach((window, wIndex) => { %>
                <div style="<%= wIndex > 0 ? 'margin-top: 12px; padding-top: 12px; border-top: 1px dashed rgba(200, 178, 115, 0.3);' : '' %>">
                  <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                    <div>
                      <span style="color: #C8B273; font-weight: 700; font-size: 10pt;">Size:</span>
                      <span style="color: #ffffff; font-weight: 600; font-size: 11pt;"><%= window.width || 'N/A' %>mm × <%= window.height || 'N/A' %>mm</span>
                    </div>
                    <div>
                      <span style="color: #C8B273; font-weight: 700; font-size: 10pt;">Type:</span>
                      <span style="color: #ffffff; font-weight: 600; font-size: 11pt;"><%= window.type || 'N/A' %></span>
                    </div>
                    <div>
                      <span style="color: #C8B273; font-weight: 700; font-size: 10pt;">Frame:</span>
                      <span style="color: #ffffff; font-weight: 600; font-size: 11pt;"><%= window.frame || 'N/A' %></span>
                    </div>
                  </div>
                </div>
              <% }); %>
            </div>
          </div>
        <% } %>

        <!-- Radiators Section -->
        <% if (room.radiators && room.radiators.length > 0) { %>
          <div style="margin-top: 20px;">
            <h4 style="font-size: 13pt; font-weight: 800; color: #C8B273; margin-bottom: 12px; text-transform: uppercase;">Radiators (<%= room.radiators.length %>)</h4>
            <div style="background: rgba(200, 178, 115, 0.05); border: 1px solid rgba(200, 178, 115, 0.2); border-radius: 8px; padding: 14px;">
              <% room.radiators.forEach((radiator, rIndex) => { %>
                <div style="<%= rIndex > 0 ? 'margin-top: 12px; padding-top: 12px; border-top: 1px dashed rgba(200, 178, 115, 0.3);' : '' %>">
                  <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                    <div>
                      <span style="color: #C8B273; font-weight: 700; font-size: 10pt;">Type:</span>
                      <span style="color: #ffffff; font-weight: 600; font-size: 11pt;"><%= radiator.type || 'N/A' %></span>
                    </div>
                    <div>
                      <span style="color: #C8B273; font-weight: 700; font-size: 10pt;">Location:</span>
                      <span style="color: #ffffff; font-weight: 600; font-size: 11pt;"><%= radiator.location || 'N/A' %></span>
                    </div>
                    <div>
                      <span style="color: #C8B273; font-weight: 700; font-size: 10pt;">TRV:</span>
                      <span style="color: #ffffff; font-weight: 600; font-size: 11pt;"><%= radiator.trvPresent ? 'Yes' : 'No' %></span>
                    </div>
                    <div>
                      <span style="color: #C8B273; font-weight: 700; font-size: 10pt;">Size:</span>
                      <span style="color: #ffffff; font-weight: 600; font-size: 11pt;"><%= radiator.width ? (parseFloat(radiator.width) / 1000).toFixed(2) + 'm' : 'N/A' %> × <%= radiator.height ? (parseFloat(radiator.height) / 1000).toFixed(2) + 'm' : 'N/A' %></span>
                    </div>
                  </div>
                </div>
              <% }); %>
            </div>
          </div>
        <% } %>

        <!-- Room Photos -->
        <% if (room.photos && room.photos.length > 0) { %>
          <div style="margin-top: 20px;">
            <h4 style="font-size: 13pt; font-weight: 800; color: #C8B273; margin-bottom: 12px; text-transform: uppercase;">Room Photos</h4>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
              <% room.photos.forEach((photo, pIndex) => { %>
                <div style="border: 2px solid #C8B273; border-radius: 8px; overflow: hidden;">
                  <img src="<%= photo.url %>" alt="Room Photo <%= pIndex + 1 %>" style="width: 100%; height: 200px; object-fit: cover; display: block;" />
                </div>
              <% }); %>
            </div>
          </div>
        <% } %>

      </div>

    <% }); %>
  <% } else { %>
    <div style="text-align: center; padding: 40px; color: #C8B273; font-size: 14pt;">
      No room assessment data available
    </div>
  <% } %>

</div>
```

### Field Mappings for Section 04:
- `rooms` array → field `7d53` (repeatable)
- `room.name` → field `44b0`
- `room.floorLevel` → field `2723`
- `room.ceilingHeight` → field `dbb0`
- `room.floorMaterial` → field `54b8`
- `room.windows` → field `adc0` (nested repeatable)
- `room.radiators` → field `ff80` (nested repeatable)
- `room.doorPresent` → field `ed70`
- `room.photos` → field `31d9`

---

## Section 05: Heating Systems

### Data Structure Required:
```javascript
{
  heating: {
    boilerMake: "Worcester Bosch",
    boilerModel: "Greenstar 30CDi",
    boilerAge: "8",
    boilerCondition: "Good",
    boilerLocation: "Kitchen",
    cylinderType: "Vented",
    cylinderSize: "150",
    cylinderCondition: "Fair",
    cylinderLocation: "Airing Cupboard",
    heatingControls: "Programmer & Thermostat",
    pipeworkMaterial: "Copper",
    pipeworkSize: "15mm",
    pipeworkCondition: "Good",
    underfloorHeating: false,
    heatingPresent: true
  },
  photos: {
    boiler: [{ url: "..." }],
    cylinder: [{ url: "..." }]
  }
}
```

### Complete EJS Code:

```html
<div class="page-break"></div>

<!-- ==========================================
     SECTION 05: HEATING SYSTEMS
     ========================================== -->
<div class="glass-card" id="heating-systems" style="margin-bottom: 30px;">

  <!-- Section Header -->
  <div style="display: flex; align-items: center; margin-bottom: 24px; border-bottom: 2px solid #C8B273; padding-bottom: 16px;">
    <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #C8B273, #D4AF37); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 16px; box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="#2C3E50" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="12" cy="12" r="3" stroke="#2C3E50" stroke-width="2.5"/>
      </svg>
    </div>
    <div>
      <h2 style="font-size: 24pt; font-weight: 900; color: #C8B273; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.4);">HEATING SYSTEMS</h2>
      <div style="font-size: 11pt; color: #ffffff; font-weight: 600; margin-top: 4px;">Current System Analysis</div>
    </div>
  </div>

  <!-- Boiler Information -->
  <div style="background: rgba(200, 178, 115, 0.1); border: 2px solid #C8B273; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
    <h3 style="font-size: 18pt; font-weight: 800; color: #FFD700; margin-bottom: 16px; text-transform: uppercase;">Boiler Information</h3>

    <div style="display: table; width: 100%; border-collapse: separate; border-spacing: 12px;">
      <!-- Row 1 -->
      <div style="display: table-row;">
        <div style="display: table-cell; width: 50%;">
          <div style="background: rgba(255, 215, 0, 0.08); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 14px;">
            <div style="font-size: 10pt; color: #FFD700; font-weight: 800; margin-bottom: 6px;">Make</div>
            <div style="font-size: 14pt; color: #ffffff; font-weight: 700;"><%= data.heating?.boilerMake || 'N/A' %></div>
          </div>
        </div>
        <div style="display: table-cell; width: 50%;">
          <div style="background: rgba(255, 215, 0, 0.08); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 14px;">
            <div style="font-size: 10pt; color: #FFD700; font-weight: 800; margin-bottom: 6px;">Model</div>
            <div style="font-size: 14pt; color: #ffffff; font-weight: 700;"><%= data.heating?.boilerModel || 'N/A' %></div>
          </div>
        </div>
      </div>

      <!-- Row 2 -->
      <div style="display: table-row;">
        <div style="display: table-cell;">
          <div style="background: rgba(255, 215, 0, 0.08); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 14px;">
            <div style="font-size: 10pt; color: #FFD700; font-weight: 800; margin-bottom: 6px;">Age</div>
            <div style="font-size: 14pt; color: #ffffff; font-weight: 700;"><%= data.heating?.boilerAge ? data.heating.boilerAge + ' years' : 'N/A' %></div>
          </div>
        </div>
        <div style="display: table-cell;">
          <div style="background: rgba(255, 215, 0, 0.08); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 14px;">
            <div style="font-size: 10pt; color: #FFD700; font-weight: 800; margin-bottom: 6px;">Condition</div>
            <div style="font-size: 14pt; color: #ffffff; font-weight: 700;"><%= data.heating?.boilerCondition || 'N/A' %></div>
          </div>
        </div>
      </div>

      <!-- Row 3 -->
      <div style="display: table-row;">
        <div style="display: table-cell;" colspan="2">
          <div style="background: rgba(255, 215, 0, 0.08); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 14px;">
            <div style="font-size: 10pt; color: #FFD700; font-weight: 800; margin-bottom: 6px;">Location</div>
            <div style="font-size: 14pt; color: #ffffff; font-weight: 700;"><%= data.heating?.boilerLocation || 'N/A' %></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Boiler Photos -->
    <% if (data.photos?.boiler && data.photos.boiler.length > 0) { %>
      <div style="margin-top: 20px;">
        <h4 style="font-size: 13pt; font-weight: 800; color: #C8B273; margin-bottom: 12px;">Boiler Photos</h4>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
          <% data.photos.boiler.slice(0, 4).forEach((photo, index) => { %>
            <div style="border: 2px solid #FFD700; border-radius: 8px; overflow: hidden;">
              <img src="<%= photo.url %>" alt="Boiler Photo <%= index + 1 %>" style="width: 100%; height: 180px; object-fit: cover; display: block;" />
            </div>
          <% }); %>
        </div>
      </div>
    <% } %>
  </div>

  <!-- Hot Water Cylinder -->
  <div style="background: rgba(200, 178, 115, 0.1); border: 2px solid #C8B273; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
    <h3 style="font-size: 18pt; font-weight: 800; color: #FFD700; margin-bottom: 16px; text-transform: uppercase;">Hot Water Cylinder</h3>

    <div style="display: table; width: 100%; border-collapse: separate; border-spacing: 12px;">
      <div style="display: table-row;">
        <div style="display: table-cell; width: 33.33%;">
          <div style="background: rgba(255, 215, 0, 0.08); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 14px; text-align: center;">
            <div style="font-size: 10pt; color: #FFD700; font-weight: 800; margin-bottom: 6px;">Type</div>
            <div style="font-size: 14pt; color: #ffffff; font-weight: 700;"><%= data.heating?.cylinderType || 'N/A' %></div>
          </div>
        </div>
        <div style="display: table-cell; width: 33.33%;">
          <div style="background: rgba(255, 215, 0, 0.08); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 14px; text-align: center;">
            <div style="font-size: 10pt; color: #FFD700; font-weight: 800; margin-bottom: 6px;">Capacity</div>
            <div style="font-size: 14pt; color: #ffffff; font-weight: 700;"><%= data.heating?.cylinderSize ? data.heating.cylinderSize + 'L' : 'N/A' %></div>
          </div>
        </div>
        <div style="display: table-cell; width: 33.33%;">
          <div style="background: rgba(255, 215, 0, 0.08); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 14px; text-align: center;">
            <div style="font-size: 10pt; color: #FFD700; font-weight: 800; margin-bottom: 6px;">Condition</div>
            <div style="font-size: 14pt; color: #ffffff; font-weight: 700;"><%= data.heating?.cylinderCondition || 'N/A' %></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Cylinder Photos -->
    <% if (data.photos?.cylinder && data.photos.cylinder.length > 0) { %>
      <div style="margin-top: 20px;">
        <h4 style="font-size: 13pt; font-weight: 800; color: #C8B273; margin-bottom: 12px;">Cylinder Photos</h4>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
          <% data.photos.cylinder.slice(0, 4).forEach((photo, index) => { %>
            <div style="border: 2px solid #FFD700; border-radius: 8px; overflow: hidden;">
              <img src="<%= photo.url %>" alt="Cylinder Photo <%= index + 1 %>" style="width: 100%; height: 180px; object-fit: cover; display: block;" />
            </div>
          <% }); %>
        </div>
      </div>
    <% } %>
  </div>

  <!-- Heating Controls & Pipework -->
  <div style="display: table; width: 100%; border-collapse: separate; border-spacing: 12px;">
    <div style="display: table-row;">
      <div style="display: table-cell; width: 50%;">
        <div style="background: rgba(200, 178, 115, 0.08); border: 1px solid #C8B273; border-radius: 8px; padding: 16px;">
          <h4 style="font-size: 14pt; font-weight: 800; color: #C8B273; margin-bottom: 12px;">Heating Controls</h4>
          <div style="font-size: 13pt; color: #ffffff; font-weight: 600;"><%= data.heating?.heatingControls || 'N/A' %></div>
        </div>
      </div>
      <div style="display: table-cell; width: 50%;">
        <div style="background: rgba(200, 178, 115, 0.08); border: 1px solid #C8B273; border-radius: 8px; padding: 16px;">
          <h4 style="font-size: 14pt; font-weight: 800; color: #C8B273; margin-bottom: 12px;">Pipework</h4>
          <div style="font-size: 12pt; color: #ffffff; font-weight: 600;">
            <div>Material: <%= data.heating?.pipeworkMaterial || 'N/A' %></div>
            <div style="margin-top: 6px;">Size: <%= data.heating?.pipeworkSize || 'N/A' %></div>
            <div style="margin-top: 6px;">Condition: <%= data.heating?.pipeworkCondition || 'N/A' %></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Additional Info -->
  <div style="margin-top: 20px; background: rgba(200, 178, 115, 0.05); border: 1px solid rgba(200, 178, 115, 0.2); border-radius: 8px; padding: 16px;">
    <div style="display: flex; justify-content: space-around; text-align: center;">
      <div>
        <div style="font-size: 10pt; color: #C8B273; font-weight: 800; margin-bottom: 6px;">Underfloor Heating</div>
        <div style="font-size: 16pt; color: #ffffff; font-weight: 700;"><%= data.heating?.underfloorHeating ? 'Yes' : 'No' %></div>
      </div>
      <div>
        <div style="font-size: 10pt; color: #C8B273; font-weight: 800; margin-bottom: 6px;">Heating Present</div>
        <div style="font-size: 16pt; color: #ffffff; font-weight: 700;"><%= data.heating?.heatingPresent ? 'Yes' : 'No' %></div>
      </div>
    </div>
  </div>

</div>
```

### Field Mappings for Section 05:
- `heating.boilerMake` → field `boiler_make_extracted`
- `heating.boilerModel` → field `boiler_model_extracted`
- `heating.boilerAge` → field `boiler_age`
- `heating.boilerCondition` → field `boiler_condition`
- `heating.boilerLocation` → field `boiler_location`
- `heating.cylinderType` → field `hot_water_cylinder_type`
- `heating.cylinderSize` → field `cylinder_capacity_litres`
- `heating.cylinderCondition` → field `cylinder_condition`
- `heating.heatingControls` → field `bqnmdz`
- `heating.pipeworkMaterial` → field `7092`
- `photos.boiler` → field `1d75`
- `photos.cylinder` → field `b750`

---

## Section 06: Technical/Electrical Systems

### Data Structure Required:
```javascript
{
  electrical: {
    consumerUnitType: "String",
    mainFuseSize: "100",
    phaseType: "Single Phase",
    rcdProtection: true,
    availableCapacity: "80",
    meterType: "Smart",
    meterLocation: "String",
    dnoUpgradeRequired: false,
    estimatedDnoCost: "0"
  },
  photos: {
    consumerUnit: [{ url: "..." }],
    electrical: [{ url: "..." }],
    meter: [{ url: "..." }]
  }
}
```

### Complete EJS Code:

```html
<div class="page-break"></div>

<!-- ==========================================
     SECTION 06: TECHNICAL/ELECTRICAL SYSTEMS
     ========================================== -->
<div class="glass-card" id="electrical-systems" style="margin-bottom: 30px;">

  <!-- Section Header -->
  <div style="display: flex; align-items: center; margin-bottom: 24px; border-bottom: 2px solid #C8B273; padding-bottom: 16px;">
    <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #C8B273, #D4AF37); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 16px; box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#2C3E50" stroke-width="2.5" stroke-linejoin="round"/>
      </svg>
    </div>
    <div>
      <h2 style="font-size: 24pt; font-weight: 900; color: #C8B273; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.4);">ELECTRICAL SYSTEMS</h2>
      <div style="font-size: 11pt; color: #ffffff; font-weight: 600; margin-top: 4px;">Complete Electrical Assessment</div>
    </div>
  </div>

  <!-- Consumer Unit Section -->
  <div style="background: rgba(200, 178, 115, 0.1); border: 2px solid #C8B273; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
    <h3 style="font-size: 18pt; font-weight: 800; color: #FFD700; margin-bottom: 16px; text-transform: uppercase;">Consumer Unit</h3>

    <div style="display: table; width: 100%; border-collapse: separate; border-spacing: 12px;">
      <div style="display: table-row;">
        <div style="display: table-cell; width: 50%;">
          <div style="background: rgba(255, 215, 0, 0.08); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 14px;">
            <div style="font-size: 10pt; color: #FFD700; font-weight: 800; margin-bottom: 6px;">Type</div>
            <div style="font-size: 14pt; color: #ffffff; font-weight: 700;"><%= data.electrical?.consumerUnitType || 'N/A' %></div>
          </div>
        </div>
        <div style="display: table-cell; width: 50%;">
          <div style="background: rgba(255, 215, 0, 0.08); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 14px;">
            <div style="font-size: 10pt; color: #FFD700; font-weight: 800; margin-bottom: 6px;">RCD Protection</div>
            <div style="font-size: 14pt; color: #ffffff; font-weight: 700;"><%= data.electrical?.rcdProtection ? 'Yes' : 'No' %></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Consumer Unit Photos -->
    <% if (data.photos?.consumerUnit && data.photos.consumerUnit.length > 0) { %>
      <div style="margin-top: 20px;">
        <h4 style="font-size: 13pt; font-weight: 800; color: #C8B273; margin-bottom: 12px;">Consumer Unit Photos</h4>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
          <% data.photos.consumerUnit.slice(0, 4).forEach((photo, index) => { %>
            <div style="border: 2px solid #FFD700; border-radius: 8px; overflow: hidden;">
              <img src="<%= photo.url %>" alt="Consumer Unit Photo <%= index + 1 %>" style="width: 100%; height: 180px; object-fit: cover; display: block;" />
            </div>
          <% }); %>
        </div>
      </div>
    <% } %>
  </div>

  <!-- Supply Information -->
  <div style="background: rgba(200, 178, 115, 0.1); border: 2px solid #C8B273; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
    <h3 style="font-size: 18pt; font-weight: 800; color: #FFD700; margin-bottom: 16px; text-transform: uppercase;">Supply Information</h3>

    <div style="display: table; width: 100%; border-collapse: separate; border-spacing: 12px;">
      <div style="display: table-row;">
        <div style="display: table-cell; width: 33.33%;">
          <div style="background: rgba(255, 215, 0, 0.08); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 14px; text-align: center;">
            <div style="font-size: 10pt; color: #FFD700; font-weight: 800; margin-bottom: 6px;">Phase Type</div>
            <div style="font-size: 14pt; color: #ffffff; font-weight: 700;"><%= data.electrical?.phaseType || 'N/A' %></div>
          </div>
        </div>
        <div style="display: table-cell; width: 33.33%;">
          <div style="background: rgba(255, 215, 0, 0.08); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 14px; text-align: center;">
            <div style="font-size: 10pt; color: #FFD700; font-weight: 800; margin-bottom: 6px;">Main Fuse</div>
            <div style="font-size: 14pt; color: #ffffff; font-weight: 700;"><%= data.electrical?.mainFuseSize ? data.electrical.mainFuseSize + 'A' : 'N/A' %></div>
          </div>
        </div>
        <div style="display: table-cell; width: 33.33%;">
          <div style="background: rgba(255, 215, 0, 0.08); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 14px; text-align: center;">
            <div style="font-size: 10pt; color: #FFD700; font-weight: 800; margin-bottom: 6px;">Available Capacity</div>
            <div style="font-size: 14pt; color: #ffffff; font-weight: 700;"><%= data.electrical?.availableCapacity ? data.electrical.availableCapacity + 'A' : 'N/A' %></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Meter Information -->
  <div style="background: rgba(200, 178, 115, 0.1); border: 2px solid #C8B273; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
    <h3 style="font-size: 18pt; font-weight: 800; color: #FFD700; margin-bottom: 16px; text-transform: uppercase;">Meter Information</h3>

    <div style="display: table; width: 100%; border-collapse: separate; border-spacing: 12px;">
      <div style="display: table-row;">
        <div style="display: table-cell; width: 50%;">
          <div style="background: rgba(255, 215, 0, 0.08); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 14px;">
            <div style="font-size: 10pt; color: #FFD700; font-weight: 800; margin-bottom: 6px;">Meter Type</div>
            <div style="font-size: 14pt; color: #ffffff; font-weight: 700;"><%= data.electrical?.meterType || 'N/A' %></div>
          </div>
        </div>
        <div style="display: table-cell; width: 50%;">
          <div style="background: rgba(255, 215, 0, 0.08); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 14px;">
            <div style="font-size: 10pt; color: #FFD700; font-weight: 800; margin-bottom: 6px;">Location</div>
            <div style="font-size: 14pt; color: #ffffff; font-weight: 700;"><%= data.electrical?.meterLocation || 'N/A' %></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Meter Photos -->
    <% if (data.photos?.meter && data.photos.meter.length > 0) { %>
      <div style="margin-top: 20px;">
        <h4 style="font-size: 13pt; font-weight: 800; color: #C8B273; margin-bottom: 12px;">Meter Photos</h4>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
          <% data.photos.meter.slice(0, 4).forEach((photo, index) => { %>
            <div style="border: 2px solid #FFD700; border-radius: 8px; overflow: hidden;">
              <img src="<%= photo.url %>" alt="Meter Photo <%= index + 1 %>" style="width: 100%; height: 180px; object-fit: cover; display: block;" />
            </div>
          <% }); %>
        </div>
      </div>
    <% } %>
  </div>

  <!-- DNO Upgrade Requirements -->
  <div style="background: <%= data.electrical?.dnoUpgradeRequired ? 'rgba(255, 100, 100, 0.15)' : 'rgba(100, 255, 100, 0.15)' %>; border: 2px solid <%= data.electrical?.dnoUpgradeRequired ? '#FF4444' : '#44FF44' %>; border-radius: 12px; padding: 20px;">
    <h3 style="font-size: 16pt; font-weight: 800; color: <%= data.electrical?.dnoUpgradeRequired ? '#FF6666' : '#66FF66' %>; margin-bottom: 12px; text-transform: uppercase;">DNO Upgrade</h3>

    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div>
        <div style="font-size: 11pt; color: #ffffff; font-weight: 600;">Upgrade Required:</div>
        <div style="font-size: 18pt; color: #ffffff; font-weight: 900; margin-top: 6px;"><%= data.electrical?.dnoUpgradeRequired ? 'YES' : 'NO' %></div>
      </div>

      <% if (data.electrical?.dnoUpgradeRequired && data.electrical?.estimatedDnoCost) { %>
        <div style="text-align: right;">
          <div style="font-size: 11pt; color: #ffffff; font-weight: 600;">Estimated Cost:</div>
          <div style="font-size: 18pt; color: #FFD700; font-weight: 900; margin-top: 6px;">£<%= data.electrical.estimatedDnoCost %></div>
        </div>
      <% } %>
    </div>
  </div>

</div>
```

### Field Mappings for Section 06:
- `electrical.consumerUnitType` → field `286a`
- `electrical.mainFuseSize` → field `main_fuse_size_amps`
- `electrical.phaseType` → field `30e7`
- `electrical.rcdProtection` → field `rcd_protection_present`
- `electrical.availableCapacity` → field `available_capacity_amps`
- `electrical.meterType` → field `electricity_meter_type`
- `electrical.meterLocation` → field `meter_location_description`
- `electrical.dnoUpgradeRequired` → field `dno_upgrade_required`
- `electrical.estimatedDnoCost` → field `estimated_dno_cost`
- `photos.consumerUnit` → field `e810`
- `photos.electrical` → field `5da7`
- `photos.meter` → field `f4a0`

---

## Section 07: ASHP Assessment

### Data Structure Required:
```javascript
{
  ashp: {
    recommendedSystem: "String",
    systemCapacity: "12",
    flowTemperature: "45",
    scopEstimate: "3.2",
    outdoorUnitLocation: "String",
    nearestBoundary: "5",
    nearestWindowDistance: "3",
    r290Compliant: true,
    r290Checks: "String",
    clearanceRequirements: "String",
    noiseConsiderations: "String",
    planningRequired: false,
    installationComplexity: "Medium"
  },
  photos: {
    ashpHabitableWindow: [{ url: "..." }],
    ashpProposed: [{ url: "..." }],
    ashpArea: [{ url: "..." }]
  }
}
```

### Complete EJS Code:

```html
<div class="page-break"></div>

<!-- ==========================================
     SECTION 07: ASHP ASSESSMENT
     ========================================== -->
<div class="glass-card" id="ashp-assessment" style="margin-bottom: 30px;">

  <!-- Section Header -->
  <div style="display: flex; align-items: center; margin-bottom: 24px; border-bottom: 2px solid #C8B273; padding-bottom: 16px;">
    <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #C8B273, #D4AF37); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 16px; box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#2C3E50" stroke-width="2.5" stroke-linejoin="round"/>
        <path d="M14 2V8H20" stroke="#2C3E50" stroke-width="2.5" stroke-linejoin="round"/>
      </svg>
    </div>
    <div>
      <h2 style="font-size: 24pt; font-weight: 900; color: #C8B273; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.4);">ASHP ASSESSMENT</h2>
      <div style="font-size: 11pt; color: #ffffff; font-weight: 600; margin-top: 4px;">Air Source Heat Pump Recommendations</div>
    </div>
  </div>

  <!-- System Recommendation -->
  <div style="background: linear-gradient(135deg, rgba(100, 255, 100, 0.2), rgba(100, 255, 100, 0.1)); border: 3px solid #44FF44; border-radius: 16px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(68, 255, 68, 0.3);">
    <h3 style="font-size: 20pt; font-weight: 900; color: #FFD700; margin-bottom: 16px; text-transform: uppercase; text-align: center;">Recommended System</h3>

    <div style="text-align: center; margin-bottom: 20px;">
      <div style="font-size: 18pt; color: #ffffff; font-weight: 700; line-height: 1.4;"><%= data.ashp?.recommendedSystem || 'N/A' %></div>
    </div>

    <div style="display: table; width: 100%; border-collapse: separate; border-spacing: 12px;">
      <div style="display: table-row;">
        <div style="display: table-cell; width: 33.33%;">
          <div style="background: rgba(255, 255, 255, 0.1); border-radius: 8px; padding: 14px; text-align: center;">
            <div style="font-size: 10pt; color: #FFD700; font-weight: 800; margin-bottom: 6px;">Capacity</div>
            <div style="font-size: 20pt; color: #ffffff; font-weight: 900;"><%= data.ashp?.systemCapacity || 'N/A' %> <span style="font-size: 12pt;">kW</span></div>
          </div>
        </div>
        <div style="display: table-cell; width: 33.33%;">
          <div style="background: rgba(255, 255, 255, 0.1); border-radius: 8px; padding: 14px; text-align: center;">
            <div style="font-size: 10pt; color: #FFD700; font-weight: 800; margin-bottom: 6px;">Flow Temp</div>
            <div style="font-size: 20pt; color: #ffffff; font-weight: 900;"><%= data.ashp?.flowTemperature || 'N/A' %> <span style="font-size: 12pt;">°C</span></div>
          </div>
        </div>
        <div style="display: table-cell; width: 33.33%;">
          <div style="background: rgba(255, 255, 255, 0.1); border-radius: 8px; padding: 14px; text-align: center;">
            <div style="font-size: 10pt; color: #FFD700; font-weight: 800; margin-bottom: 6px;">SCOP</div>
            <div style="font-size: 20pt; color: #ffffff; font-weight: 900;"><%= data.ashp?.scopEstimate || 'N/A' %></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Location & Clearances -->
  <div style="background: rgba(200, 178, 115, 0.1); border: 2px solid #C8B273; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
    <h3 style="font-size: 18pt; font-weight: 800; color: #FFD700; margin-bottom: 16px; text-transform: uppercase;">Location & Clearances</h3>

    <div style="background: rgba(255, 215, 0, 0.08); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
      <div style="font-size: 10pt; color: #FFD700; font-weight: 800; margin-bottom: 8px;">Outdoor Unit Location</div>
      <div style="font-size: 13pt; color: #ffffff; font-weight: 600; line-height: 1.4;"><%= data.ashp?.outdoorUnitLocation || 'N/A' %></div>
    </div>

    <div style="display: table; width: 100%; border-collapse: separate; border-spacing: 12px;">
      <div style="display: table-row;">
        <div style="display: table-cell; width: 50%;">
          <div style="background: rgba(255, 215, 0, 0.08); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 14px; text-align: center;">
            <div style="font-size: 10pt; color: #FFD700; font-weight: 800; margin-bottom: 6px;">Distance to Boundary</div>
            <div style="font-size: 20pt; color: #ffffff; font-weight: 900;"><%= data.ashp?.nearestBoundary || 'N/A' %> <span style="font-size: 12pt;">m</span></div>
          </div>
        </div>
        <div style="display: table-cell; width: 50%;">
          <div style="background: rgba(255, 215, 0, 0.08); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 14px; text-align: center;">
            <div style="font-size: 10pt; color: #FFD700; font-weight: 800; margin-bottom: 6px;">Distance to Window</div>
            <div style="font-size: 20pt; color: #ffffff; font-weight: 900;"><%= data.ashp?.nearestWindowDistance || 'N/A' %> <span style="font-size: 12pt;">m</span></div>
          </div>
        </div>
      </div>
    </div>

    <div style="margin-top: 16px; background: rgba(255, 215, 0, 0.08); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 14px;">
      <div style="font-size: 10pt; color: #FFD700; font-weight: 800; margin-bottom: 8px;">Clearance Requirements</div>
      <div style="font-size: 12pt; color: #ffffff; font-weight: 600; line-height: 1.4;"><%= data.ashp?.clearanceRequirements || 'N/A' %></div>
    </div>

    <div style="margin-top: 16px; background: rgba(255, 215, 0, 0.08); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 14px;">
      <div style="font-size: 10pt; color: #FFD700; font-weight: 800; margin-bottom: 8px;">Noise Considerations</div>
      <div style="font-size: 12pt; color: #ffffff; font-weight: 600; line-height: 1.4;"><%= data.ashp?.noiseConsiderations || 'N/A' %></div>
    </div>
  </div>

  <!-- R290 Compliance -->
  <div style="background: <%= data.ashp?.r290Compliant ? 'rgba(100, 255, 100, 0.15)' : 'rgba(255, 100, 100, 0.15)' %>; border: 2px solid <%= data.ashp?.r290Compliant ? '#44FF44' : '#FF4444' %>; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
    <h3 style="font-size: 18pt; font-weight: 800; color: <%= data.ashp?.r290Compliant ? '#66FF66' : '#FF6666' %>; margin-bottom: 16px; text-transform: uppercase;">R290 Compliance</h3>

    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
      <div>
        <div style="font-size: 11pt; color: #ffffff; font-weight: 600;">System Compliant:</div>
        <div style="font-size: 24pt; color: #ffffff; font-weight: 900; margin-top: 6px;"><%= data.ashp?.r290Compliant ? 'YES ✓' : 'NO ✗' %></div>
      </div>
    </div>

    <% if (data.ashp?.r290Checks) { %>
      <div style="background: rgba(255, 255, 255, 0.1); border-radius: 8px; padding: 14px; margin-top: 12px;">
        <div style="font-size: 10pt; color: #FFD700; font-weight: 800; margin-bottom: 8px;">Safety Checks</div>
        <div style="font-size: 12pt; color: #ffffff; font-weight: 600; line-height: 1.4;"><%= data.ashp.r290Checks %></div>
      </div>
    <% } %>
  </div>

  <!-- Installation Complexity -->
  <div style="display: table; width: 100%; border-collapse: separate; border-spacing: 12px; margin-bottom: 24px;">
    <div style="display: table-row;">
      <div style="display: table-cell; width: 50%;">
        <div style="background: rgba(200, 178, 115, 0.1); border: 1px solid #C8B273; border-radius: 8px; padding: 16px; text-align: center;">
          <div style="font-size: 11pt; color: #C8B273; font-weight: 800; margin-bottom: 8px;">Planning Required</div>
          <div style="font-size: 20pt; color: #ffffff; font-weight: 900;"><%= data.ashp?.planningRequired ? 'YES' : 'NO' %></div>
        </div>
      </div>
      <div style="display: table-cell; width: 50%;">
        <div style="background: rgba(200, 178, 115, 0.1); border: 1px solid #C8B273; border-radius: 8px; padding: 16px; text-align: center;">
          <div style="font-size: 11pt; color: #C8B273; font-weight: 800; margin-bottom: 8px;">Installation Complexity</div>
          <div style="font-size: 20pt; color: #ffffff; font-weight: 900;"><%= data.ashp?.installationComplexity || 'N/A' %></div>
        </div>
      </div>
    </div>
  </div>

  <!-- ASHP Photos -->
  <% if ((data.photos?.ashpHabitableWindow && data.photos.ashpHabitableWindow.length > 0) ||
         (data.photos?.ashpProposed && data.photos.ashpProposed.length > 0) ||
         (data.photos?.ashpArea && data.photos.ashpArea.length > 0)) { %>
    <div>
      <h3 style="font-size: 18pt; font-weight: 800; color: #C8B273; margin-bottom: 16px; text-transform: uppercase;">Location Photos</h3>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
        <!-- Habitable Window Photo -->
        <% if (data.photos?.ashpHabitableWindow && data.photos.ashpHabitableWindow.length > 0) { %>
          <div style="border: 2px solid #C8B273; border-radius: 8px; overflow: hidden;">
            <img src="<%= data.photos.ashpHabitableWindow[0].url %>" alt="Distance to Habitable Window" style="width: 100%; height: 240px; object-fit: cover; display: block;" />
            <div style="background: rgba(200, 178, 115, 0.2); padding: 10px; text-align: center;">
              <div style="font-size: 10pt; color: #FFD700; font-weight: 800;">Distance to Habitable Window</div>
            </div>
          </div>
        <% } %>

        <!-- Proposed Location Photo -->
        <% if (data.photos?.ashpProposed && data.photos.ashpProposed.length > 0) { %>
          <div style="border: 2px solid #C8B273; border-radius: 8px; overflow: hidden;">
            <img src="<%= data.photos.ashpProposed[0].url %>" alt="Proposed ASHP Location" style="width: 100%; height: 240px; object-fit: cover; display: block;" />
            <div style="background: rgba(200, 178, 115, 0.2); padding: 10px; text-align: center;">
              <div style="font-size: 10pt; color: #FFD700; font-weight: 800;">Proposed Location</div>
            </div>
          </div>
        <% } %>

        <!-- Installation Area Photo -->
        <% if (data.photos?.ashpArea && data.photos.ashpArea.length > 0) { %>
          <div style="border: 2px solid #C8B273; border-radius: 8px; overflow: hidden;">
            <img src="<%= data.photos.ashpArea[0].url %>" alt="Installation Area" style="width: 100%; height: 240px; object-fit: cover; display: block;" />
            <div style="background: rgba(200, 178, 115, 0.2); padding: 10px; text-align: center;">
              <div style="font-size: 10pt; color: #FFD700; font-weight: 800;">Installation Area</div>
            </div>
          </div>
        <% } %>
      </div>
    </div>
  <% } %>

</div>
```

### Field Mappings for Section 07:
- `ashp.recommendedSystem` → field `recommended_ashp_system`
- `ashp.systemCapacity` → field `recommended_capacity_kw`
- `ashp.flowTemperature` → field `design_flow_temperature`
- `ashp.scopEstimate` → field `estimated_scop`
- `ashp.outdoorUnitLocation` → field `outdoor_unit_location_description`
- `ashp.nearestBoundary` → field `77bf`
- `ashp.nearestWindowDistance` → field `c350`
- `ashp.r290Compliant` → field `r290_system_compliant`
- `ashp.r290Checks` → field `r290_safety_checks`
- `ashp.clearanceRequirements` → field `clearance_requirements`
- `ashp.noiseConsiderations` → field `noise_considerations`
- `ashp.planningRequired` → field `planning_required`
- `ashp.installationComplexity` → field `installation_complexity`
- `photos.ashpHabitableWindow` → field `ea10`
- `photos.ashpProposed` → field `5300`
- `photos.ashpArea` → field `2f4e`

---

## Section 08: Meter & Supply

**(This section is combined with Section 06 - Electrical Systems above. If you need a separate Meter & Supply section, it would duplicate the meter information already in Section 06.)**

---

## Section 09: Photo Documentation

### Data Structure Required:
```javascript
{
  photos: {
    property: [{ url: "..." }],
    loft: [{ url: "..." }],
    glazing: [{ url: "..." }],
    boiler: [{ url: "..." }],
    cylinder: [{ url: "..." }],
    radiators: [{ url: "..." }],
    consumerUnit: [{ url: "..." }],
    electrical: [{ url: "..." }],
    meter: [{ url: "..." }],
    ashpHabitableWindow: [{ url: "..." }],
    ashpProposed: [{ url: "..." }],
    ashpArea: [{ url: "..." }],
    additional1: [{ url: "..." }],
    additional2: [{ url: "..." }],
    additional3: [{ url: "..." }]
  }
}
```

### Complete EJS Code:

```html
<div class="page-break"></div>

<!-- ==========================================
     SECTION 09: PHOTO DOCUMENTATION
     ========================================== -->
<div class="glass-card" id="photo-documentation" style="margin-bottom: 30px;">

  <!-- Section Header -->
  <div style="display: flex; align-items: center; margin-bottom: 24px; border-bottom: 2px solid #C8B273; padding-bottom: 16px;">
    <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #C8B273, #D4AF37); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 16px; box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="#2C3E50" stroke-width="2.5"/>
        <circle cx="8.5" cy="8.5" r="1.5" fill="#2C3E50"/>
        <path d="M21 15L16 10L5 21" stroke="#2C3E50" stroke-width="2.5" stroke-linejoin="round"/>
      </svg>
    </div>
    <div>
      <h2 style="font-size: 24pt; font-weight: 900; color: #C8B273; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.4);">PHOTO DOCUMENTATION</h2>
      <div style="font-size: 11pt; color: #ffffff; font-weight: 600; margin-top: 4px;">Comprehensive Visual Survey</div>
    </div>
  </div>

  <!-- Property Photos -->
  <% if (data.photos?.property && data.photos.property.length > 0) { %>
    <div style="margin-bottom: 30px;">
      <h3 style="font-size: 16pt; font-weight: 800; color: #FFD700; margin-bottom: 16px; text-transform: uppercase; border-bottom: 1px solid rgba(200, 178, 115, 0.3); padding-bottom: 8px;">Property Exterior</h3>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
        <% data.photos.property.forEach((photo, index) => { %>
          <div style="border: 2px solid #C8B273; border-radius: 8px; overflow: hidden;">
            <img src="<%= photo.url %>" alt="Property Photo <%= index + 1 %>" style="width: 100%; height: 180px; object-fit: cover; display: block;" />
          </div>
        <% }); %>
      </div>
    </div>
  <% } %>

  <!-- Loft Photos -->
  <% if (data.photos?.loft && data.photos.loft.length > 0) { %>
    <div style="margin-bottom: 30px;">
      <h3 style="font-size: 16pt; font-weight: 800; color: #FFD700; margin-bottom: 16px; text-transform: uppercase; border-bottom: 1px solid rgba(200, 178, 115, 0.3); padding-bottom: 8px;">Loft & Insulation</h3>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
        <% data.photos.loft.forEach((photo, index) => { %>
          <div style="border: 2px solid #C8B273; border-radius: 8px; overflow: hidden;">
            <img src="<%= photo.url %>" alt="Loft Photo <%= index + 1 %>" style="width: 100%; height: 180px; object-fit: cover; display: block;" />
          </div>
        <% }); %>
      </div>
    </div>
  <% } %>

  <!-- Glazing & Windows Photos -->
  <% if (data.photos?.glazing && data.photos.glazing.length > 0) { %>
    <div style="margin-bottom: 30px;">
      <h3 style="font-size: 16pt; font-weight: 800; color: #FFD700; margin-bottom: 16px; text-transform: uppercase; border-bottom: 1px solid rgba(200, 178, 115, 0.3); padding-bottom: 8px;">Windows & Glazing</h3>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
        <% data.photos.glazing.forEach((photo, index) => { %>
          <div style="border: 2px solid #C8B273; border-radius: 8px; overflow: hidden;">
            <img src="<%= photo.url %>" alt="Glazing Photo <%= index + 1 %>" style="width: 100%; height: 180px; object-fit: cover; display: block;" />
          </div>
        <% }); %>
      </div>
    </div>
  <% } %>

  <!-- Heating System Photos -->
  <% if ((data.photos?.boiler && data.photos.boiler.length > 0) || (data.photos?.cylinder && data.photos.cylinder.length > 0)) { %>
    <div style="margin-bottom: 30px;">
      <h3 style="font-size: 16pt; font-weight: 800; color: #FFD700; margin-bottom: 16px; text-transform: uppercase; border-bottom: 1px solid rgba(200, 178, 115, 0.3); padding-bottom: 8px;">Heating Systems</h3>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
        <% if (data.photos?.boiler) { %>
          <% data.photos.boiler.forEach((photo, index) => { %>
            <div style="border: 2px solid #C8B273; border-radius: 8px; overflow: hidden;">
              <img src="<%= photo.url %>" alt="Boiler Photo <%= index + 1 %>" style="width: 100%; height: 180px; object-fit: cover; display: block;" />
              <div style="background: rgba(200, 178, 115, 0.2); padding: 6px; text-align: center; font-size: 9pt; color: #FFD700; font-weight: 700;">Boiler</div>
            </div>
          <% }); %>
        <% } %>

        <% if (data.photos?.cylinder) { %>
          <% data.photos.cylinder.forEach((photo, index) => { %>
            <div style="border: 2px solid #C8B273; border-radius: 8px; overflow: hidden;">
              <img src="<%= photo.url %>" alt="Cylinder Photo <%= index + 1 %>" style="width: 100%; height: 180px; object-fit: cover; display: block;" />
              <div style="background: rgba(200, 178, 115, 0.2); padding: 6px; text-align: center; font-size: 9pt; color: #FFD700; font-weight: 700;">Cylinder</div>
            </div>
          <% }); %>
        <% } %>
      </div>
    </div>
  <% } %>

  <!-- Radiators Photos -->
  <% if (data.photos?.radiators && data.photos.radiators.length > 0) { %>
    <div style="margin-bottom: 30px;">
      <h3 style="font-size: 16pt; font-weight: 800; color: #FFD700; margin-bottom: 16px; text-transform: uppercase; border-bottom: 1px solid rgba(200, 178, 115, 0.3); padding-bottom: 8px;">Radiators</h3>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
        <% data.photos.radiators.forEach((photo, index) => { %>
          <div style="border: 2px solid #C8B273; border-radius: 8px; overflow: hidden;">
            <img src="<%= photo.url %>" alt="Radiator Photo <%= index + 1 %>" style="width: 100%; height: 180px; object-fit: cover; display: block;" />
          </div>
        <% }); %>
      </div>
    </div>
  <% } %>

  <!-- Electrical Photos -->
  <% if ((data.photos?.consumerUnit && data.photos.consumerUnit.length > 0) ||
         (data.photos?.electrical && data.photos.electrical.length > 0) ||
         (data.photos?.meter && data.photos.meter.length > 0)) { %>
    <div style="margin-bottom: 30px;">
      <h3 style="font-size: 16pt; font-weight: 800; color: #FFD700; margin-bottom: 16px; text-transform: uppercase; border-bottom: 1px solid rgba(200, 178, 115, 0.3); padding-bottom: 8px;">Electrical Systems</h3>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
        <% if (data.photos?.consumerUnit) { %>
          <% data.photos.consumerUnit.forEach((photo, index) => { %>
            <div style="border: 2px solid #C8B273; border-radius: 8px; overflow: hidden;">
              <img src="<%= photo.url %>" alt="Consumer Unit <%= index + 1 %>" style="width: 100%; height: 180px; object-fit: cover; display: block;" />
              <div style="background: rgba(200, 178, 115, 0.2); padding: 6px; text-align: center; font-size: 9pt; color: #FFD700; font-weight: 700;">Consumer Unit</div>
            </div>
          <% }); %>
        <% } %>

        <% if (data.photos?.electrical) { %>
          <% data.photos.electrical.forEach((photo, index) => { %>
            <div style="border: 2px solid #C8B273; border-radius: 8px; overflow: hidden;">
              <img src="<%= photo.url %>" alt="Electrical <%= index + 1 %>" style="width: 100%; height: 180px; object-fit: cover; display: block;" />
              <div style="background: rgba(200, 178, 115, 0.2); padding: 6px; text-align: center; font-size: 9pt; color: #FFD700; font-weight: 700;">Electrical</div>
            </div>
          <% }); %>
        <% } %>

        <% if (data.photos?.meter) { %>
          <% data.photos.meter.forEach((photo, index) => { %>
            <div style="border: 2px solid #C8B273; border-radius: 8px; overflow: hidden;">
              <img src="<%= photo.url %>" alt="Meter <%= index + 1 %>" style="width: 100%; height: 180px; object-fit: cover; display: block;" />
              <div style="background: rgba(200, 178, 115, 0.2); padding: 6px; text-align: center; font-size: 9pt; color: #FFD700; font-weight: 700;">Meter</div>
            </div>
          <% }); %>
        <% } %>
      </div>
    </div>
  <% } %>

  <!-- ASHP Location Photos -->
  <% if ((data.photos?.ashpHabitableWindow && data.photos.ashpHabitableWindow.length > 0) ||
         (data.photos?.ashpProposed && data.photos.ashpProposed.length > 0) ||
         (data.photos?.ashpArea && data.photos.ashpArea.length > 0)) { %>
    <div style="margin-bottom: 30px;">
      <h3 style="font-size: 16pt; font-weight: 800; color: #FFD700; margin-bottom: 16px; text-transform: uppercase; border-bottom: 1px solid rgba(200, 178, 115, 0.3); padding-bottom: 8px;">ASHP Location</h3>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
        <% if (data.photos?.ashpHabitableWindow) { %>
          <% data.photos.ashpHabitableWindow.forEach((photo, index) => { %>
            <div style="border: 2px solid #C8B273; border-radius: 8px; overflow: hidden;">
              <img src="<%= photo.url %>" alt="Window Distance <%= index + 1 %>" style="width: 100%; height: 180px; object-fit: cover; display: block;" />
              <div style="background: rgba(200, 178, 115, 0.2); padding: 6px; text-align: center; font-size: 9pt; color: #FFD700; font-weight: 700;">Window Distance</div>
            </div>
          <% }); %>
        <% } %>

        <% if (data.photos?.ashpProposed) { %>
          <% data.photos.ashpProposed.forEach((photo, index) => { %>
            <div style="border: 2px solid #C8B273; border-radius: 8px; overflow: hidden;">
              <img src="<%= photo.url %>" alt="Proposed Location <%= index + 1 %>" style="width: 100%; height: 180px; object-fit: cover; display: block;" />
              <div style="background: rgba(200, 178, 115, 0.2); padding: 6px; text-align: center; font-size: 9pt; color: #FFD700; font-weight: 700;">Proposed Location</div>
            </div>
          <% }); %>
        <% } %>

        <% if (data.photos?.ashpArea) { %>
          <% data.photos.ashpArea.forEach((photo, index) => { %>
            <div style="border: 2px solid #C8B273; border-radius: 8px; overflow: hidden;">
              <img src="<%= photo.url %>" alt="Installation Area <%= index + 1 %>" style="width: 100%; height: 180px; object-fit: cover; display: block;" />
              <div style="background: rgba(200, 178, 115, 0.2); padding: 6px; text-align: center; font-size: 9pt; color: #FFD700; font-weight: 700;">Installation Area</div>
            </div>
          <% }); %>
        <% } %>
      </div>
    </div>
  <% } %>

  <!-- Additional Photos -->
  <% if ((data.photos?.additional1 && data.photos.additional1.length > 0) ||
         (data.photos?.additional2 && data.photos.additional2.length > 0) ||
         (data.photos?.additional3 && data.photos.additional3.length > 0)) { %>
    <div style="margin-bottom: 30px;">
      <h3 style="font-size: 16pt; font-weight: 800; color: #FFD700; margin-bottom: 16px; text-transform: uppercase; border-bottom: 1px solid rgba(200, 178, 115, 0.3); padding-bottom: 8px;">Additional Photos</h3>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
        <% if (data.photos?.additional1) { %>
          <% data.photos.additional1.forEach((photo, index) => { %>
            <div style="border: 2px solid #C8B273; border-radius: 8px; overflow: hidden;">
              <img src="<%= photo.url %>" alt="Additional Photo <%= index + 1 %>" style="width: 100%; height: 180px; object-fit: cover; display: block;" />
            </div>
          <% }); %>
        <% } %>

        <% if (data.photos?.additional2) { %>
          <% data.photos.additional2.forEach((photo, index) => { %>
            <div style="border: 2px solid #C8B273; border-radius: 8px; overflow: hidden;">
              <img src="<%= photo.url %>" alt="Additional Photo <%= index + 1 %>" style="width: 100%; height: 180px; object-fit: cover; display: block;" />
            </div>
          <% }); %>
        <% } %>

        <% if (data.photos?.additional3) { %>
          <% data.photos.additional3.forEach((photo, index) => { %>
            <div style="border: 2px solid #C8B273; border-radius: 8px; overflow: hidden;">
              <img src="<%= photo.url %>" alt="Additional Photo <%= index + 1 %>" style="width: 100%; height: 180px; object-fit: cover; display: block;" />
            </div>
          <% }); %>
        <% } %>
      </div>
    </div>
  <% } %>

  <!-- End of Survey Notice -->
  <div style="background: linear-gradient(135deg, #C8B273, #D4AF37); border-radius: 12px; padding: 20px; text-align: center; margin-top: 30px;">
    <div style="font-size: 16pt; color: #2C3E50; font-weight: 900;">END OF SURVEY DOCUMENTATION</div>
    <div style="font-size: 11pt; color: #2C3E50; font-weight: 600; margin-top: 8px;">Generated by Vertex Solar PDF System</div>
  </div>

</div>
```

### Field Mappings for Section 09:
- `photos.property` → field `3b80`
- `photos.loft` → field `113a`
- `photos.glazing` → field `67c9`
- `photos.boiler` → field `1d75`
- `photos.cylinder` → field `b750`
- `photos.radiators` → field `52e6`
- `photos.consumerUnit` → field `e810`
- `photos.electrical` → field `5da7`
- `photos.meter` → field `f4a0`
- `photos.ashpHabitableWindow` → field `ea10`
- `photos.ashpProposed` → field `5300`
- `photos.ashpArea` → field `2f4e`
- `photos.additional1` → field `3940`
- `photos.additional2` → field `275d`
- `photos.additional3` → field `2a6b`

---

## 🎉 ALL SECTIONS COMPLETE!

**Status**: ✅ **READY FOR CURSOR IMPLEMENTATION**

### Summary of Sections:
1. ✅ Section 01: Front Page (already in main.ejs)
2. ✅ Section 02: Navigation (already in main.ejs)
3. ✅ Section 03: Property Overview
4. ✅ Section 03b: Heat Loss Summary Table (with navigation links)
5. ✅ Section 04: Room Assessment (detailed room-by-room)
6. ✅ Section 05: Heating Systems
7. ✅ Section 06: Technical/Electrical Systems
8. ✅ Section 07: ASHP Assessment
9. ✅ Section 09: Photo Documentation

### Total Fields Mapped: 235+ fields across all sections

### Next Steps for Cursor:
1. Copy each section's EJS code into [main.ejs](production-ready/vertex-pdf-generator/src/templates/main.ejs)
2. Test data transformer with webhook payload
3. Verify all 235 fields map correctly
4. Test PDF generation with Puppeteer
5. Deploy to Railway

**All sections follow the premium portal design with:**
- Glass-morphism cards
- Gold gradients (#C8B273, #D4AF37, #FFD700)
- Multi-layer shadows
- Responsive grid layouts
- Proper page breaks
- Navigation anchor links
- Comprehensive photo displays