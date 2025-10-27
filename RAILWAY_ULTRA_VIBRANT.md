# 🌟 RAILWAY PDF - ULTRA-VIBRANT PORTAL DESIGN
## Complete EJS Sections - Best Portal Page Quality

**Design Goal**: Make EVERYTHING POP like the best portal pages
**Quality Level**: Fortune 500 Portal Standard
**Every Element**: Shimmer, Glow, Gradient, Shadow

---

## 🎨 ULTRA-VIBRANT DESIGN SYSTEM

###  Core Visual Elements:

1. **Triple-Layer Cards**:
   - Background gradient (3 stops)
   - Border with solid gold
   - Inset highlight for 3D depth
   - Shimmer animation overlay
   - Multi-layer shadows with glow

2. **Animated Text**:
   - Gradient text with `-webkit-background-clip`
   - Text shadows for depth
   - Gold glow on hover

3. **Icon Containers**:
   - Gradient background (#C8B273 → #D4AF37)
   - Shadow + glow effect
   - Border for polish

4. **Shimmer Effect**:
```html
<div style="position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
     background: linear-gradient(90deg, transparent, rgba(244, 228, 188, 0.1), transparent);
     animation: shimmer 3s infinite;">
</div>
```

5. **Multi-Layer Shadows**:
```css
box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.25),           /* Deep shadow */
    0 4px 16px rgba(200, 178, 115, 0.1),       /* Gold glow */
    inset 0 1px 0 rgba(255, 255, 255, 0.1);   /* Top highlight */
```

---

## Section 03: Property Overview (ULTRA-VIBRANT)

```html
<div style="page-break-before: always;"></div>

<!-- ==========================================
     SECTION 03: PROPERTY OVERVIEW - ULTRA-VIBRANT
     ========================================== -->
<div style="
    background: linear-gradient(135deg,
        rgba(244, 228, 188, 0.15) 0%,
        rgba(212, 175, 55, 0.12) 50%,
        rgba(200, 178, 115, 0.08) 100%);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 2px solid #C8B273;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow:
        0 12px 40px rgba(0, 0, 0, 0.25),
        0 4px 16px rgba(200, 178, 115, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
    page-break-inside: avoid;
" id="property-overview">

  <!-- Shimmer Animation Overlay -->
  <div style="position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(244, 228, 188, 0.1), transparent); animation: shimmer 3s infinite;"></div>

  <!-- Section Header with Icon -->
  <div style="display: table; width: 100%; margin-bottom: 20px; position: relative; z-index: 2;">
    <div style="display: table-cell; width: 52px; vertical-align: middle; text-align: center;">
      <div style="
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #C8B273, #D4AF37);
          border-radius: 10px;
          display: table-cell;
          vertical-align: middle;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25), 0 0 20px rgba(200, 178, 115, 0.3);
          border: 2px solid rgba(255, 255, 255, 0.2);
      ">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                stroke="#2C3E50" stroke-width="2.5" stroke-linejoin="round" fill="none"/>
          <path d="M9 22V12H15V22" stroke="#2C3E50" stroke-width="2.5" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    <div style="display: table-cell; vertical-align: middle; padding-left: 14px;">
      <div style="
          font-size: 20pt;
          font-weight: 900;
          color: #C8B273;
          text-shadow: 0 3px 6px rgba(0,0,0,0.5);
          letter-spacing: 0.5px;
          margin: 0;
      ">
        PROPERTY OVERVIEW
      </div>
      <div style="font-size: 10pt; color: #ffffff; font-weight: 600; margin-top: 2px; text-shadow: 0 2px 4px rgba(0,0,0,0.4);">
        Complete Building Assessment
      </div>
    </div>
  </div>

  <!-- Property Details Grid -->
  <div style="position: relative; z-index: 2;">

    <!-- Address Card (Full Width) -->
    <div style="margin-bottom: 16px;">
      <div style="
          background: rgba(200, 178, 115, 0.15);
          border: 1px solid #C8B273;
          border-radius: 10px;
          padding: 14px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      ">
        <div style="
            font-size: 10pt;
            color: #C8B273;
            font-weight: 800;
            margin-bottom: 6px;
            text-shadow: 0 1px 2px rgba(0,0,0,0.3);
            letter-spacing: 0.5px;
            text-transform: uppercase;
        ">
          PROPERTY ADDRESS
        </div>
        <div style="
            font-size: 14pt;
            color: #ffffff;
            font-weight: 700;
            text-shadow: 0 2px 4px rgba(0,0,0,0.4);
            line-height: 1.4;
        ">
          <%= data.property?.address || 'N/A' %>
        </div>
      </div>
    </div>

    <!-- Type & Age Row -->
    <div style="display: table; width: 100%; table-layout: fixed; border-spacing: 12px; margin-bottom: 12px;">
      <div style="display: table-row;">
        <!-- Property Type -->
        <div style="display: table-cell; width: 50%; vertical-align: top;">
          <div style="
              background: rgba(200, 178, 115, 0.15);
              border: 1px solid #C8B273;
              border-radius: 10px;
              padding: 14px;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          ">
            <div style="font-size: 10pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-shadow: 0 1px 2px rgba(0,0,0,0.3); letter-spacing: 0.5px; text-transform: uppercase;">
              PROPERTY TYPE
            </div>
            <div style="font-size: 12pt; color: #ffffff; font-weight: 700; text-shadow: 0 1px 2px rgba(0,0,0,0.4); line-height: 1.3;">
              <%= data.property?.type || 'N/A' %>
            </div>
          </div>
        </div>

        <!-- Construction Age -->
        <div style="display: table-cell; width: 50%; vertical-align: top;">
          <div style="
              background: rgba(200, 178, 115, 0.15);
              border: 1px solid #C8B273;
              border-radius: 10px;
              padding: 14px;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          ">
            <div style="font-size: 10pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-shadow: 0 1px 2px rgba(0,0,0,0.3); letter-spacing: 0.5px; text-transform: uppercase;">
              CONSTRUCTION AGE
            </div>
            <div style="font-size: 12pt; color: #ffffff; font-weight: 700; text-shadow: 0 1px 2px rgba(0,0,0,0.4); line-height: 1.3;">
              <%= data.property?.age || 'N/A' %>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Building Fabric Section -->
    <div style="margin-top: 20px;">
      <h3 style="
          font-size: 16pt;
          font-weight: 900;
          color: #C8B273;
          margin-bottom: 14px;
          text-shadow: 0 3px 6px rgba(0,0,0,0.5);
          letter-spacing: 0.5px;
          text-transform: uppercase;
          border-bottom: 2px solid rgba(200, 178, 115, 0.3);
          padding-bottom: 8px;
      ">
        BUILDING FABRIC
      </h3>

      <!-- 4-Column Grid -->
      <div style="display: table; width: 100%; table-layout: fixed; border-spacing: 12px;">
        <div style="display: table-row;">
          <!-- Wall Construction -->
          <div style="display: table-cell; width: 25%; vertical-align: top;">
            <div style="
                background: rgba(200, 178, 115, 0.15);
                border: 1px solid #C8B273;
                border-radius: 8px;
                padding: 12px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            ">
              <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 4px; text-shadow: 0 1px 2px rgba(0,0,0,0.3); letter-spacing: 0.5px; text-transform: uppercase;">
                WALL CONSTRUCTION
              </div>
              <div style="font-size: 10pt; color: #ffffff; font-weight: 600; text-shadow: 0 1px 2px rgba(0,0,0,0.4); line-height: 1.3;">
                <%= data.property?.wallConstruction || 'N/A' %>
              </div>
            </div>
          </div>

          <!-- Roof Type -->
          <div style="display: table-cell; width: 25%; vertical-align: top;">
            <div style="
                background: rgba(200, 178, 115, 0.15);
                border: 1px solid #C8B273;
                border-radius: 8px;
                padding: 12px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            ">
              <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 4px; text-shadow: 0 1px 2px rgba(0,0,0,0.3); letter-spacing: 0.5px; text-transform: uppercase;">
                ROOF TYPE
              </div>
              <div style="font-size: 10pt; color: #ffffff; font-weight: 600; text-shadow: 0 1px 2px rgba(0,0,0,0.4); line-height: 1.3;">
                <%= data.property?.roofConstruction || 'N/A' %>
              </div>
            </div>
          </div>

          <!-- Floor Construction -->
          <div style="display: table-cell; width: 25%; vertical-align: top;">
            <div style="
                background: rgba(200, 178, 115, 0.15);
                border: 1px solid #C8B273;
                border-radius: 8px;
                padding: 12px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            ">
              <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 4px; text-shadow: 0 1px 2px rgba(0,0,0,0.3); letter-spacing: 0.5px; text-transform: uppercase;">
                FLOOR CONSTRUCTION
              </div>
              <div style="font-size: 10pt; color: #ffffff; font-weight: 600; text-shadow: 0 1px 2px rgba(0,0,0,0.4); line-height: 1.3;">
                <%= data.property?.floorConstruction || 'N/A' %>
              </div>
            </div>
          </div>

          <!-- Glazing Type -->
          <div style="display: table-cell; width: 25%; vertical-align: top;">
            <div style="
                background: rgba(200, 178, 115, 0.15);
                border: 1px solid #C8B273;
                border-radius: 8px;
                padding: 12px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            ">
              <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 4px; text-shadow: 0 1px 2px rgba(0,0,0,0.3); letter-spacing: 0.5px; text-transform: uppercase;">
                GLAZING TYPE
              </div>
              <div style="font-size: 10pt; color: #ffffff; font-weight: 600; text-shadow: 0 1px 2px rgba(0,0,0,0.4); line-height: 1.3;">
                <%= data.property?.glazingType || 'N/A' %>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Current Systems Section -->
    <div style="margin-top: 20px;">
      <h3 style="
          font-size: 16pt;
          font-weight: 900;
          color: #C8B273;
          margin-bottom: 14px;
          text-shadow: 0 3px 6px rgba(0,0,0,0.5);
          letter-spacing: 0.5px;
          text-transform: uppercase;
          border-bottom: 2px solid rgba(200, 178, 115, 0.3);
          padding-bottom: 8px;
      ">
        CURRENT SYSTEMS
      </h3>

      <!-- 3-Column Grid -->
      <div style="display: table; width: 100%; table-layout: fixed; border-spacing: 12px;">
        <div style="display: table-row;">
          <!-- Heating -->
          <div style="display: table-cell; width: 33.33%; vertical-align: top;">
            <div style="
                background: rgba(200, 178, 115, 0.15);
                border: 1px solid #C8B273;
                border-radius: 8px;
                padding: 12px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                text-align: center;
            ">
              <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-shadow: 0 1px 2px rgba(0,0,0,0.3); letter-spacing: 0.5px; text-transform: uppercase;">
                CURRENT HEATING
              </div>
              <div style="font-size: 11pt; color: #ffffff; font-weight: 700; text-shadow: 0 1px 2px rgba(0,0,0,0.4); line-height: 1.3;">
                <%= data.property?.currentHeating || 'N/A' %>
              </div>
            </div>
          </div>

          <!-- Electrical Supply -->
          <div style="display: table-cell; width: 33.33%; vertical-align: top;">
            <div style="
                background: rgba(200, 178, 115, 0.15);
                border: 1px solid #C8B273;
                border-radius: 8px;
                padding: 12px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                text-align: center;
            ">
              <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-shadow: 0 1px 2px rgba(0,0,0,0.3); letter-spacing: 0.5px; text-transform: uppercase;">
                ELECTRICAL SUPPLY
              </div>
              <div style="font-size: 11pt; color: #ffffff; font-weight: 700; text-shadow: 0 1px 2px rgba(0,0,0,0.4); line-height: 1.3;">
                <%= data.property?.electricalSupply || 'N/A' %>
              </div>
            </div>
          </div>

          <!-- Consumer Unit -->
          <div style="display: table-cell; width: 33.33%; vertical-align: top;">
            <div style="
                background: rgba(200, 178, 115, 0.15);
                border: 1px solid #C8B273;
                border-radius: 8px;
                padding: 12px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                text-align: center;
            ">
              <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-shadow: 0 1px 2px rgba(0,0,0,0.3); letter-spacing: 0.5px; text-transform: uppercase;">
                CONSUMER UNIT
              </div>
              <div style="font-size: 11pt; color: #ffffff; font-weight: 700; text-shadow: 0 1px 2px rgba(0,0,0,0.4); line-height: 1.3;">
                <%= data.property?.consumerUnit || 'N/A' %>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Property Photos -->
    <% if (data.photos?.property && data.photos.property.length > 0) { %>
      <div style="margin-top: 24px;">
        <h3 style="
            font-size: 16pt;
            font-weight: 900;
            color: #C8B273;
            margin-bottom: 14px;
            text-shadow: 0 3px 6px rgba(0,0,0,0.5);
            letter-spacing: 0.5px;
            text-transform: uppercase;
        ">
          PROPERTY PHOTOS
        </h3>

        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px;">
          <% data.photos.property.slice(0, 4).forEach((photo, index) => { %>
            <div style="
                background: linear-gradient(135deg,
                    rgba(244, 228, 188, 0.08) 0%,
                    rgba(212, 175, 55, 0.05) 100%);
                backdrop-filter: blur(8px);
                -webkit-backdrop-filter: blur(8px);
                border-radius: 12px;
                border: 2px solid #C8B273;
                padding: 6px;
                box-shadow:
                    0 8px 24px rgba(0, 0, 0, 0.15),
                    0 2px 8px rgba(44, 62, 80, 0.2),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1);
            ">
              <img src="<%= photo.url %>" alt="Property Photo <%= index + 1 %>" style="
                  width: 100%;
                  height: 240px;
                  object-fit: cover;
                  display: block;
                  border-radius: 8px;
                  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
              " />
            </div>
          <% }); %>
        </div>
      </div>
    <% } %>

  </div>
</div>
```

---

## Section 03b: Heat Loss Summary Table (ULTRA-VIBRANT)

```html
<div style="page-break-before: always;"></div>

<!-- ==========================================
     SECTION 03B: HEAT LOSS SUMMARY - ULTRA-VIBRANT
     ========================================== -->
<div style="
    background: linear-gradient(135deg,
        rgba(244, 228, 188, 0.15) 0%,
        rgba(212, 175, 55, 0.12) 50%,
        rgba(200, 178, 115, 0.08) 100%);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 2px solid #C8B273;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow:
        0 12px 40px rgba(0, 0, 0, 0.25),
        0 4px 16px rgba(200, 178, 115, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
" id="heat-loss-summary">

  <!-- Shimmer Animation -->
  <div style="position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(244, 228, 188, 0.1), transparent); animation: shimmer 3s infinite;"></div>

  <!-- Section Header -->
  <div style="display: table; width: 100%; margin-bottom: 20px; position: relative; z-index: 2;">
    <div style="display: table-cell; width: 52px; vertical-align: middle; text-align: center;">
      <div style="
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #C8B273, #D4AF37);
          border-radius: 10px;
          display: table-cell;
          vertical-align: middle;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25), 0 0 20px rgba(200, 178, 115, 0.3);
          border: 2px solid rgba(255, 255, 255, 0.2);
      ">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V19C19 20.1046 18.1046 21 17 21Z"
                stroke="#2C3E50" stroke-width="2.5"/>
        </svg>
      </div>
    </div>
    <div style="display: table-cell; vertical-align: middle; padding-left: 14px;">
      <div style="
          font-size: 20pt;
          font-weight: 900;
          color: #C8B273;
          text-shadow: 0 3px 6px rgba(0,0,0,0.5);
          letter-spacing: 0.5px;
          margin: 0;
      ">
        HEAT LOSS SUMMARY
      </div>
      <div style="font-size: 10pt; color: #ffffff; font-weight: 600; margin-top: 2px; text-shadow: 0 2px 4px rgba(0,0,0,0.4);">
        Comprehensive Heat Loss Analysis
      </div>
    </div>
  </div>

  <div style="position: relative; z-index: 2;">

    <!-- Floor Plan Photo -->
    <% if (data.heatLoss?.floorPlan && data.heatLoss.floorPlan.length > 0) { %>
      <div style="text-align: center; margin-bottom: 24px;">
        <h3 style="
            font-size: 16pt;
            font-weight: 900;
            color: #C8B273;
            margin-bottom: 14px;
            text-shadow: 0 3px 6px rgba(0,0,0,0.5);
            letter-spacing: 0.5px;
            text-transform: uppercase;
        ">
          FLOOR PLAN
        </h3>
        <div style="
            background: linear-gradient(135deg,
                rgba(244, 228, 188, 0.08) 0%,
                rgba(212, 175, 55, 0.05) 100%);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border-radius: 14px;
            border: 2px solid #C8B273;
            padding: 8px;
            box-shadow:
                0 12px 36px rgba(0, 0, 0, 0.2),
                0 4px 12px rgba(44, 62, 80, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.1);
            display: inline-block;
            max-width: 100%;
        ">
          <img src="<%= data.heatLoss.floorPlan[0].url %>" alt="Floor Plan" style="
              width: 100%;
              max-width: 800px;
              height: auto;
              display: block;
              border-radius: 10px;
              box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
          " />
        </div>
      </div>
    <% } %>

    <!-- ROOM ASSESSMENT TABLE -->
    <% if (data.rooms && data.rooms.length > 0) { %>
      <div style="margin-bottom: 24px;">
        <h3 style="
            font-size: 18pt;
            font-weight: 900;
            color: #C8B273;
            margin-bottom: 16px;
            text-shadow: 0 3px 6px rgba(0,0,0,0.5);
            letter-spacing: 0.5px;
            text-transform: uppercase;
            text-align: center;
        ">
          ROOM ASSESSMENT OVERVIEW
        </h3>

        <table style="
            width: 100%;
            border-collapse: collapse;
            border: 2px solid #C8B273;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        ">
          <!-- Table Header -->
          <thead>
            <tr style="background: linear-gradient(135deg, #C8B273 0%, #D4AF37 100%);">
              <th style="
                  padding: 14px 10px;
                  text-align: left;
                  font-size: 10pt;
                  font-weight: 900;
                  color: #2C3E50;
                  border-right: 2px solid rgba(44, 62, 80, 0.2);
                  width: 20%;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
              ">ROOM</th>
              <th style="
                  padding: 14px 10px;
                  text-align: center;
                  font-size: 10pt;
                  font-weight: 900;
                  color: #2C3E50;
                  border-right: 2px solid rgba(44, 62, 80, 0.2);
                  width: 15%;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
              ">HEIGHT</th>
              <th style="
                  padding: 14px 10px;
                  text-align: center;
                  font-size: 10pt;
                  font-weight: 900;
                  color: #2C3E50;
                  border-right: 2px solid rgba(44, 62, 80, 0.2);
                  width: 20%;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
              ">FLOOR</th>
              <th style="
                  padding: 14px 10px;
                  text-align: center;
                  font-size: 10pt;
                  font-weight: 900;
                  color: #2C3E50;
                  border-right: 2px solid rgba(44, 62, 80, 0.2);
                  width: 20%;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
              ">WINDOWS</th>
              <th style="
                  padding: 14px 10px;
                  text-align: center;
                  font-size: 10pt;
                  font-weight: 900;
                  color: #2C3E50;
                  border-right: 2px solid rgba(44, 62, 80, 0.2);
                  width: 15%;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
              ">RADS</th>
              <th style="
                  padding: 14px 10px;
                  text-align: center;
                  font-size: 10pt;
                  font-weight: 900;
                  color: #2C3E50;
                  width: 10%;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
              ">DOORS</th>
            </tr>
          </thead>

          <!-- Table Body -->
          <tbody>
            <% data.rooms.forEach((room, roomIndex) => { %>
              <%
                const rowBg = roomIndex % 2 === 0
                  ? 'rgba(200, 178, 115, 0.15)'
                  : 'rgba(200, 178, 115, 0.08)';
                const roomName = room.name || `Room ${room.index}`;
                const floorLevel = room.floorLevel || 'Ground';
                const ceilingHeight = room.ceilingHeight ? (parseFloat(room.ceilingHeight) / 1000).toFixed(2) + 'm' : 'N/A';
                const floorMaterial = room.floorMaterial || 'N/A';
                const windowCount = (room.windows && room.windows.length) || 0;
                const radiatorCount = (room.radiators && room.radiators.length) || 0;
                const doorPresent = room.doorPresent ? 'Yes' : 'No';
              %>
              <tr style="background: <%= rowBg %>; border-bottom: 1px solid rgba(200, 178, 115, 0.2);">
                <!-- Room Name with Navigation Link -->
                <td style="padding: 12px 10px; border-right: 2px solid rgba(200, 178, 115, 0.2); vertical-align: top;">
                  <a href="#room-<%= room.index %>" style="
                      color: #C8B273;
                      text-decoration: none;
                      font-weight: 800;
                      font-size: 11pt;
                      display: block;
                      text-shadow: 0 2px 4px rgba(0,0,0,0.4);
                  ">
                    <%= roomName %>
                  </a>
                  <div style="
                      font-size: 9pt;
                      color: #ffffff;
                      margin-top: 4px;
                      font-weight: 600;
                      text-shadow: 0 1px 2px rgba(0,0,0,0.4);
                  ">
                    <%= floorLevel %> Floor
                  </div>
                </td>

                <!-- Ceiling Height -->
                <td style="padding: 12px 10px; border-right: 2px solid rgba(200, 178, 115, 0.2); text-align: center; vertical-align: top;">
                  <div style="font-size: 12pt; font-weight: 700; color: #ffffff; text-shadow: 0 1px 2px rgba(0,0,0,0.4);">
                    <%= ceilingHeight %>
                  </div>
                </td>

                <!-- Floor Material -->
                <td style="padding: 12px 10px; border-right: 2px solid rgba(200, 178, 115, 0.2); text-align: center; vertical-align: top;">
                  <div style="font-size: 10pt; font-weight: 600; color: #ffffff; text-shadow: 0 1px 2px rgba(0,0,0,0.4);">
                    <%= floorMaterial %>
                  </div>
                </td>

                <!-- Windows -->
                <td style="padding: 12px 8px; border-right: 2px solid rgba(200, 178, 115, 0.2); vertical-align: top;">
                  <% if (windowCount > 0) { %>
                    <div style="font-size: 10pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-align: center; text-shadow: 0 1px 2px rgba(0,0,0,0.4);">
                      <%= windowCount %> Window<%= windowCount > 1 ? 's' : '' %>
                    </div>
                    <% room.windows.slice(0, 2).forEach((window) => { %>
                      <div style="font-size: 9pt; color: #ffffff; font-weight: 600; margin-bottom: 4px; text-align: center; text-shadow: 0 1px 2px rgba(0,0,0,0.4);">
                        <%= window.width || 'N/A' %>×<%= window.height || 'N/A' %>mm
                        <div style="font-size: 8pt; color: #C8B273;"><%= window.type || 'N/A' %></div>
                      </div>
                    <% }); %>
                    <% if (windowCount > 2) { %>
                      <div style="font-size: 8pt; color: #C8B273; font-weight: 700; text-align: center;">+ <%= windowCount - 2 %> more</div>
                    <% } %>
                  <% } else { %>
                    <div style="font-size: 10pt; color: #ffffff; text-align: center; text-shadow: 0 1px 2px rgba(0,0,0,0.4);">None</div>
                  <% } %>
                </td>

                <!-- Radiators -->
                <td style="padding: 12px 8px; border-right: 2px solid rgba(200, 178, 115, 0.2); vertical-align: top; text-align: center;">
                  <% if (radiatorCount > 0) { %>
                    <div style="font-size: 16pt; color: #C8B273; font-weight: 900; text-shadow: 0 2px 4px rgba(0,0,0,0.4);"><%= radiatorCount %></div>
                    <div style="font-size: 8pt; color: #ffffff; font-weight: 600; margin-top: 2px; text-shadow: 0 1px 2px rgba(0,0,0,0.4);">
                      <%= room.radiators[0].type || 'N/A' %>
                    </div>
                  <% } else { %>
                    <div style="font-size: 12pt; color: #ffffff; text-shadow: 0 1px 2px rgba(0,0,0,0.4);">0</div>
                  <% } %>
                </td>

                <!-- Doors -->
                <td style="padding: 12px 8px; text-align: center; vertical-align: top;">
                  <div style="font-size: 12pt; color: #ffffff; font-weight: 700; text-shadow: 0 1px 2px rgba(0,0,0,0.4);"><%= doorPresent %></div>
                </td>
              </tr>
            <% }); %>
          </tbody>
        </table>
      </div>
    <% } %>

    <!-- Heat Loss Calculations -->
    <div style="margin-top: 24px;">
      <h3 style="
          font-size: 18pt;
          font-weight: 900;
          color: #C8B273;
          margin-bottom: 20px;
          text-shadow: 0 3px 6px rgba(0,0,0,0.5);
          letter-spacing: 0.5px;
          text-transform: uppercase;
          text-align: center;
      ">
        FABRIC HEAT LOSS ANALYSIS
      </h3>

      <!-- 3x2 Grid for Heat Loss Types -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 24px;">
        <!-- Wall Heat Loss -->
        <div style="
            background: rgba(200, 178, 115, 0.15);
            border: 2px solid #C8B273;
            border-radius: 10px;
            padding: 18px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        ">
          <div style="font-size: 10pt; color: #C8B273; font-weight: 800; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">
            Wall Heat Loss
          </div>
          <div style="font-size: 24pt; color: #ffffff; font-weight: 900; text-shadow: 0 3px 6px rgba(0,0,0,0.5);">
            <%= data.heatLoss?.wallLoss || 'N/A' %> <span style="font-size: 14pt;">W</span>
          </div>
        </div>

        <!-- Roof Heat Loss -->
        <div style="
            background: rgba(200, 178, 115, 0.15);
            border: 2px solid #C8B273;
            border-radius: 10px;
            padding: 18px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        ">
          <div style="font-size: 10pt; color: #C8B273; font-weight: 800; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">
            Roof Heat Loss
          </div>
          <div style="font-size: 24pt; color: #ffffff; font-weight: 900; text-shadow: 0 3px 6px rgba(0,0,0,0.5);">
            <%= data.heatLoss?.roofLoss || 'N/A' %> <span style="font-size: 14pt;">W</span>
          </div>
        </div>

        <!-- Floor Heat Loss -->
        <div style="
            background: rgba(200, 178, 115, 0.15);
            border: 2px solid #C8B273;
            border-radius: 10px;
            padding: 18px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        ">
          <div style="font-size: 10pt; color: #C8B273; font-weight: 800; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">
            Floor Heat Loss
          </div>
          <div style="font-size: 24pt; color: #ffffff; font-weight: 900; text-shadow: 0 3px 6px rgba(0,0,0,0.5);">
            <%= data.heatLoss?.floorLoss || 'N/A' %> <span style="font-size: 14pt;">W</span>
          </div>
        </div>

        <!-- Window Heat Loss -->
        <div style="
            background: rgba(200, 178, 115, 0.15);
            border: 2px solid #C8B273;
            border-radius: 10px;
            padding: 18px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        ">
          <div style="font-size: 10pt; color: #C8B273; font-weight: 800; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">
            Window Heat Loss
          </div>
          <div style="font-size: 24pt; color: #ffffff; font-weight: 900; text-shadow: 0 3px 6px rgba(0,0,0,0.5);">
            <%= data.heatLoss?.windowLoss || 'N/A' %> <span style="font-size: 14pt;">W</span>
          </div>
        </div>

        <!-- Door Heat Loss -->
        <div style="
            background: rgba(200, 178, 115, 0.15);
            border: 2px solid #C8B273;
            border-radius: 10px;
            padding: 18px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        ">
          <div style="font-size: 10pt; color: #C8B273; font-weight: 800; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">
            Door Heat Loss
          </div>
          <div style="font-size: 24pt; color: #ffffff; font-weight: 900; text-shadow: 0 3px 6px rgba(0,0,0,0.5);">
            <%= data.heatLoss?.doorLoss || 'N/A' %> <span style="font-size: 14pt;">W</span>
          </div>
        </div>

        <!-- Ventilation Loss -->
        <div style="
            background: rgba(200, 178, 115, 0.15);
            border: 2px solid #C8B273;
            border-radius: 10px;
            padding: 18px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        ">
          <div style="font-size: 10pt; color: #C8B273; font-weight: 800; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">
            Ventilation Loss
          </div>
          <div style="font-size: 24pt; color: #ffffff; font-weight: 900; text-shadow: 0 3px 6px rgba(0,0,0,0.5);">
            <%= data.heatLoss?.ventilationLoss || 'N/A' %> <span style="font-size: 14pt;">W</span>
          </div>
        </div>
      </div>

      <!-- Total Heat Loss & Recommended Capacity (HERO CARDS) -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <!-- Total Heat Loss -->
        <div style="
            background: linear-gradient(135deg, rgba(244, 228, 188, 0.2) 0%, rgba(212, 175, 55, 0.15) 100%);
            border: 3px solid #C8B273;
            border-radius: 14px;
            padding: 24px;
            text-align: center;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25), 0 0 30px rgba(200, 178, 115, 0.2);
            position: relative;
            overflow: hidden;
        ">
          <div style="position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(244, 228, 188, 0.15), transparent); animation: shimmer 3s infinite;"></div>
          <div style="font-size: 12pt; color: #C8B273; font-weight: 900; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1.5px; text-shadow: 0 2px 4px rgba(0,0,0,0.4); position: relative; z-index: 2;">
            TOTAL HEAT LOSS
          </div>
          <div style="font-size: 36pt; color: #ffffff; font-weight: 900; text-shadow: 0 4px 8px rgba(0,0,0,0.6); position: relative; z-index: 2;">
            <%= data.heatLoss?.totalHeatLoss || 'N/A' %> <span style="font-size: 20pt;">W</span>
          </div>
        </div>

        <!-- Recommended Capacity -->
        <div style="
            background: linear-gradient(135deg, rgba(244, 228, 188, 0.2) 0%, rgba(212, 175, 55, 0.15) 100%);
            border: 3px solid #C8B273;
            border-radius: 14px;
            padding: 24px;
            text-align: center;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25), 0 0 30px rgba(200, 178, 115, 0.2);
            position: relative;
            overflow: hidden;
        ">
          <div style="position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(244, 228, 188, 0.15), transparent); animation: shimmer 3s infinite;"></div>
          <div style="font-size: 12pt; color: #C8B273; font-weight: 900; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1.5px; text-shadow: 0 2px 4px rgba(0,0,0,0.4); position: relative; z-index: 2;">
            RECOMMENDED CAPACITY
          </div>
          <div style="font-size: 36pt; color: #ffffff; font-weight: 900; text-shadow: 0 4px 8px rgba(0,0,0,0.6); position: relative; z-index: 2;">
            <%= data.heatLoss?.recommendedCapacity || 'N/A' %> <span style="font-size: 20pt;">W</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
```

---

## 🎯 IMPLEMENTATION GUIDE FOR CURSOR

### Design Pattern Summary:

**Every section must have:**
1. Triple-layer gradient background
2. Shimmer animation overlay
3. Icon with gradient + glow
4. Gold gradient text headers
5. Multi-layer shadows (deep + glow + inset)
6. Backdrop blur for glassmorphism
7. Text shadows on ALL text

### CSS Animation Required:

```html
<style>
@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}
</style>
```

### Color System:
- Primary Gold: `#C8B273`
- Accent Gold: `#D4AF37`
- Text: `#ffffff` (with shadows)
- Labels: `#C8B273` (with shadows)
- Background Gray: `#2C3E50`

### Remaining Sections to Complete:
- Section 04: Room Assessment (apply same styling)
- Section 05: Heating Systems (apply same styling)
- Section 06: Electrical Systems (apply same styling)
- Section 07: ASHP Assessment (apply same styling)
- Section 09: Photo Documentation (apply same styling)

**Use [RAILWAY_COMPLETE_SECTIONS.md](RAILWAY_COMPLETE_SECTIONS.md) for structure, but replace ALL styling with ultra-vibrant design above.**

Would you like me to complete the remaining sections (04-09) with full ultra-vibrant styling?
