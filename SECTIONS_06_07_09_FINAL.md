# 🌟 SECTIONS 06, 07, 09 - FINAL (ULTRA-VIBRANT)

**Status**: Production-Ready EJS Code
**Design**: Ultra-Vibrant Portal Quality
**Use**: Copy directly into main.ejs after Section 05

---

## Section 06: Technical/Electrical Systems (Ultra-Vibrant)

```html
<div style="page-break-before: always;"></div>

<!-- ==========================================
     SECTION 06: ELECTRICAL SYSTEMS - ULTRA-VIBRANT
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
" id="electrical-systems">

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
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#2C3E50" stroke-width="2.5" stroke-linejoin="round"/>
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
        ELECTRICAL SYSTEMS
      </div>
      <div style="font-size: 10pt; color: #ffffff; font-weight: 600; margin-top: 2px; text-shadow: 0 2px 4px rgba(0,0,0,0.4);">
        Complete Electrical Assessment
      </div>
    </div>
  </div>

  <div style="position: relative; z-index: 2;">

    <!-- Consumer Unit -->
    <div style="
        background: rgba(200, 178, 115, 0.12);
        border: 2px solid #C8B273;
        border-radius: 12px;
        padding: 18px;
        margin-bottom: 20px;
    ">
      <h3 style="
          font-size: 16pt;
          font-weight: 900;
          color: #C8B273;
          margin-bottom: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          text-shadow: 0 3px 6px rgba(0,0,0,0.5);
      ">Consumer Unit</h3>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
        <div style="
            background: rgba(200, 178, 115, 0.15);
            border: 1px solid #C8B273;
            border-radius: 8px;
            padding: 12px;
        ">
          <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Type</div>
          <div style="font-size: 13pt; color: #ffffff; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.4);"><%= data.electrical?.consumerUnitType || 'N/A' %></div>
        </div>

        <div style="
            background: rgba(200, 178, 115, 0.15);
            border: 1px solid #C8B273;
            border-radius: 8px;
            padding: 12px;
        ">
          <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">RCD Protection</div>
          <div style="font-size: 13pt; color: #ffffff; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.4);"><%= data.electrical?.rcdProtection ? 'Yes' : 'No' %></div>
        </div>
      </div>

      <!-- Consumer Unit Photos -->
      <% if (data.photos?.consumerUnit && data.photos.consumerUnit.length > 0) { %>
        <h4 style="
            font-size: 13pt;
            font-weight: 800;
            color: #C8B273;
            margin-bottom: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            text-shadow: 0 2px 4px rgba(0,0,0,0.4);
        ">Consumer Unit Photos</h4>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
          <% data.photos.consumerUnit.slice(0, 4).forEach((photo, index) => { %>
            <div style="
                background: linear-gradient(135deg,
                    rgba(244, 228, 188, 0.08) 0%,
                    rgba(212, 175, 55, 0.05) 100%);
                backdrop-filter: blur(8px);
                border-radius: 10px;
                border: 2px solid #C8B273;
                padding: 6px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            ">
              <img src="<%= photo.url %>" alt="Consumer Unit <%= index + 1 %>" style="
                  width: 100%;
                  height: 180px;
                  object-fit: cover;
                  display: block;
                  border-radius: 6px;
                  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
              " />
            </div>
          <% }); %>
        </div>
      <% } %>
    </div>

    <!-- Supply Information -->
    <div style="
        background: rgba(200, 178, 115, 0.12);
        border: 2px solid #C8B273;
        border-radius: 12px;
        padding: 18px;
        margin-bottom: 20px;
    ">
      <h3 style="
          font-size: 16pt;
          font-weight: 900;
          color: #C8B273;
          margin-bottom: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          text-shadow: 0 3px 6px rgba(0,0,0,0.5);
      ">Supply Information</h3>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
        <div style="
            background: rgba(200, 178, 115, 0.15);
            border: 1px solid #C8B273;
            border-radius: 8px;
            padding: 12px;
            text-align: center;
        ">
          <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Phase Type</div>
          <div style="font-size: 13pt; color: #ffffff; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.4);"><%= data.electrical?.phaseType || 'N/A' %></div>
        </div>

        <div style="
            background: rgba(200, 178, 115, 0.15);
            border: 1px solid #C8B273;
            border-radius: 8px;
            padding: 12px;
            text-align: center;
        ">
          <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Main Fuse</div>
          <div style="font-size: 13pt; color: #ffffff; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.4);"><%= data.electrical?.mainFuseSize ? data.electrical.mainFuseSize + 'A' : 'N/A' %></div>
        </div>

        <div style="
            background: rgba(200, 178, 115, 0.15);
            border: 1px solid #C8B273;
            border-radius: 8px;
            padding: 12px;
            text-align: center;
        ">
          <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Available Capacity</div>
          <div style="font-size: 13pt; color: #ffffff; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.4);"><%= data.electrical?.availableCapacity ? data.electrical.availableCapacity + 'A' : 'N/A' %></div>
        </div>
      </div>
    </div>

    <!-- Meter Information -->
    <div style="
        background: rgba(200, 178, 115, 0.12);
        border: 2px solid #C8B273;
        border-radius: 12px;
        padding: 18px;
        margin-bottom: 20px;
    ">
      <h3 style="
          font-size: 16pt;
          font-weight: 900;
          color: #C8B273;
          margin-bottom: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          text-shadow: 0 3px 6px rgba(0,0,0,0.5);
      ">Meter Information</h3>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
        <div style="
            background: rgba(200, 178, 115, 0.15);
            border: 1px solid #C8B273;
            border-radius: 8px;
            padding: 12px;
        ">
          <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Meter Type</div>
          <div style="font-size: 13pt; color: #ffffff; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.4);"><%= data.electrical?.meterType || 'N/A' %></div>
        </div>

        <div style="
            background: rgba(200, 178, 115, 0.15);
            border: 1px solid #C8B273;
            border-radius: 8px;
            padding: 12px;
        ">
          <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Location</div>
          <div style="font-size: 13pt; color: #ffffff; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.4);"><%= data.electrical?.meterLocation || 'N/A' %></div>
        </div>
      </div>

      <!-- Meter Photos -->
      <% if (data.photos?.meter && data.photos.meter.length > 0) { %>
        <h4 style="
            font-size: 13pt;
            font-weight: 800;
            color: #C8B273;
            margin-bottom: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            text-shadow: 0 2px 4px rgba(0,0,0,0.4);
        ">Meter Photos</h4>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
          <% data.photos.meter.slice(0, 4).forEach((photo, index) => { %>
            <div style="
                background: linear-gradient(135deg,
                    rgba(244, 228, 188, 0.08) 0%,
                    rgba(212, 175, 55, 0.05) 100%);
                backdrop-filter: blur(8px);
                border-radius: 10px;
                border: 2px solid #C8B273;
                padding: 6px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            ">
              <img src="<%= photo.url %>" alt="Meter <%= index + 1 %>" style="
                  width: 100%;
                  height: 180px;
                  object-fit: cover;
                  display: block;
                  border-radius: 6px;
                  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
              " />
            </div>
          <% }); %>
        </div>
      <% } %>
    </div>

    <!-- DNO Upgrade (Conditional Styling) -->
    <div style="
        background: <%= data.electrical?.dnoUpgradeRequired ? 'rgba(255, 100, 100, 0.15)' : 'rgba(100, 255, 100, 0.15)' %>;
        border: 3px solid <%= data.electrical?.dnoUpgradeRequired ? '#FF4444' : '#44FF44' %>;
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 8px 24px <%= data.electrical?.dnoUpgradeRequired ? 'rgba(255, 68, 68, 0.25)' : 'rgba(68, 255, 68, 0.25)' %>;
    ">
      <h3 style="
          font-size: 15pt;
          font-weight: 900;
          color: <%= data.electrical?.dnoUpgradeRequired ? '#FF6666' : '#66FF66' %>;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.4);
      ">DNO Upgrade Required</h3>

      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <div style="font-size: 11pt; color: #ffffff; font-weight: 700; text-shadow: 0 1px 2px rgba(0,0,0,0.4);">Upgrade Required:</div>
          <div style="font-size: 20pt; color: #ffffff; font-weight: 900; margin-top: 6px; text-shadow: 0 3px 6px rgba(0,0,0,0.5);">
            <%= data.electrical?.dnoUpgradeRequired ? 'YES' : 'NO' %>
          </div>
        </div>

        <% if (data.electrical?.dnoUpgradeRequired && data.electrical?.estimatedDnoCost) { %>
          <div style="text-align: right;">
            <div style="font-size: 11pt; color: #ffffff; font-weight: 700; text-shadow: 0 1px 2px rgba(0,0,0,0.4);">Estimated Cost:</div>
            <div style="font-size: 20pt; color: #C8B273; font-weight: 900; margin-top: 6px; text-shadow: 0 3px 6px rgba(0,0,0,0.5);">
              £<%= data.electrical.estimatedDnoCost %>
            </div>
          </div>
        <% } %>
      </div>
    </div>

  </div>
</div>
```

---

## Section 07: ASHP Assessment (Ultra-Vibrant)

```html
<div style="page-break-before: always;"></div>

<!-- ==========================================
     SECTION 07: ASHP ASSESSMENT - ULTRA-VIBRANT
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
" id="ashp-assessment">

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
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                stroke="#2C3E50" stroke-width="2.5" stroke-linejoin="round"/>
          <path d="M14 2V8H20" stroke="#2C3E50" stroke-width="2.5" stroke-linejoin="round"/>
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
        ASHP ASSESSMENT
      </div>
      <div style="font-size: 10pt; color: #ffffff; font-weight: 600; margin-top: 2px; text-shadow: 0 2px 4px rgba(0,0,0,0.4);">
        Air Source Heat Pump Recommendations
      </div>
    </div>
  </div>

  <div style="position: relative; z-index: 2;">

    <!-- System Recommendation (Hero Card) -->
    <div style="
        background: linear-gradient(135deg, rgba(100, 255, 100, 0.2) 0%, rgba(100, 255, 100, 0.1) 100%);
        border: 3px solid #44FF44;
        border-radius: 14px;
        padding: 24px;
        margin-bottom: 20px;
        box-shadow: 0 12px 30px rgba(68, 255, 68, 0.3);
        position: relative;
        overflow: hidden;
    ">
      <div style="position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(100, 255, 100, 0.15), transparent); animation: shimmer 3s infinite;"></div>

      <h3 style="
          font-size: 18pt;
          font-weight: 900;
          color: #C8B273;
          margin-bottom: 16px;
          text-transform: uppercase;
          text-align: center;
          letter-spacing: 0.5px;
          text-shadow: 0 3px 6px rgba(0,0,0,0.5);
          position: relative;
          z-index: 2;
      ">Recommended System</h3>

      <div style="text-align: center; margin-bottom: 20px; position: relative; z-index: 2;">
        <div style="font-size: 16pt; color: #ffffff; font-weight: 700; line-height: 1.4; text-shadow: 0 2px 4px rgba(0,0,0,0.4);">
          <%= data.ashp?.recommendedSystem || 'N/A' %>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; position: relative; z-index: 2;">
        <div style="background: rgba(255, 255, 255, 0.15); border-radius: 8px; padding: 14px; text-align: center;">
          <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Capacity</div>
          <div style="font-size: 18pt; color: #ffffff; font-weight: 900; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">
            <%= data.ashp?.systemCapacity || 'N/A' %> <span style="font-size: 11pt;">kW</span>
          </div>
        </div>

        <div style="background: rgba(255, 255, 255, 0.15); border-radius: 8px; padding: 14px; text-align: center;">
          <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Flow Temp</div>
          <div style="font-size: 18pt; color: #ffffff; font-weight: 900; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">
            <%= data.ashp?.flowTemperature || 'N/A' %> <span style="font-size: 11pt;">°C</span>
          </div>
        </div>

        <div style="background: rgba(255, 255, 255, 0.15); border-radius: 8px; padding: 14px; text-align: center;">
          <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">SCOP</div>
          <div style="font-size: 18pt; color: #ffffff; font-weight: 900; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">
            <%= data.ashp?.scopEstimate || 'N/A' %>
          </div>
        </div>
      </div>
    </div>

    <!-- Location & Clearances -->
    <div style="
        background: rgba(200, 178, 115, 0.12);
        border: 2px solid #C8B273;
        border-radius: 12px;
        padding: 18px;
        margin-bottom: 20px;
    ">
      <h3 style="
          font-size: 16pt;
          font-weight: 900;
          color: #C8B273;
          margin-bottom: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          text-shadow: 0 3px 6px rgba(0,0,0,0.5);
      ">Location & Clearances</h3>

      <div style="
          background: rgba(200, 178, 115, 0.15);
          border: 1px solid #C8B273;
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 12px;
      ">
        <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Outdoor Unit Location</div>
        <div style="font-size: 12pt; color: #ffffff; font-weight: 600; line-height: 1.4; text-shadow: 0 1px 2px rgba(0,0,0,0.4);">
          <%= data.ashp?.outdoorUnitLocation || 'N/A' %>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div style="
            background: rgba(200, 178, 115, 0.15);
            border: 1px solid #C8B273;
            border-radius: 8px;
            padding: 12px;
            text-align: center;
        ">
          <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Distance to Boundary</div>
          <div style="font-size: 18pt; color: #ffffff; font-weight: 900; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">
            <%= data.ashp?.nearestBoundary || 'N/A' %> <span style="font-size: 11pt;">m</span>
          </div>
        </div>

        <div style="
            background: rgba(200, 178, 115, 0.15);
            border: 1px solid #C8B273;
            border-radius: 8px;
            padding: 12px;
            text-align: center;
        ">
          <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Distance to Window</div>
          <div style="font-size: 18pt; color: #ffffff; font-weight: 900; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">
            <%= data.ashp?.nearestWindowDistance || 'N/A' %> <span style="font-size: 11pt;">m</span>
          </div>
        </div>
      </div>
    </div>

    <!-- R290 Compliance -->
    <div style="
        background: <%= data.ashp?.r290Compliant ? 'rgba(100, 255, 100, 0.15)' : 'rgba(255, 100, 100, 0.15)' %>;
        border: 3px solid <%= data.ashp?.r290Compliant ? '#44FF44' : '#FF4444' %>;
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 20px;
        box-shadow: 0 8px 24px <%= data.ashp?.r290Compliant ? 'rgba(68, 255, 68, 0.25)' : 'rgba(255, 68, 68, 0.25)' %>;
    ">
      <h3 style="
          font-size: 16pt;
          font-weight: 900;
          color: <%= data.ashp?.r290Compliant ? '#66FF66' : '#FF6666' %>;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.4);
      ">R290 Compliance</h3>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <div>
          <div style="font-size: 11pt; color: #ffffff; font-weight: 700; text-shadow: 0 1px 2px rgba(0,0,0,0.4);">System Compliant:</div>
          <div style="font-size: 22pt; color: #ffffff; font-weight: 900; margin-top: 6px; text-shadow: 0 3px 6px rgba(0,0,0,0.5);">
            <%= data.ashp?.r290Compliant ? 'YES ✓' : 'NO ✗' %>
          </div>
        </div>
      </div>

      <% if (data.ashp?.r290Checks) { %>
        <div style="
            background: rgba(255, 255, 255, 0.15);
            border-radius: 8px;
            padding: 12px;
            margin-top: 12px;
        ">
          <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Safety Checks</div>
          <div style="font-size: 11pt; color: #ffffff; font-weight: 600; line-height: 1.4; text-shadow: 0 1px 2px rgba(0,0,0,0.4);">
            <%= data.ashp.r290Checks %>
          </div>
        </div>
      <% } %>
    </div>

    <!-- ASHP Photos -->
    <% if ((data.photos?.ashpHabitableWindow && data.photos.ashpHabitableWindow.length > 0) ||
           (data.photos?.ashpProposed && data.photos.ashpProposed.length > 0) ||
           (data.photos?.ashpArea && data.photos.ashpArea.length > 0)) { %>
      <div>
        <h3 style="
            font-size: 16pt;
            font-weight: 900;
            color: #C8B273;
            margin-bottom: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            text-shadow: 0 3px 6px rgba(0,0,0,0.5);
        ">Location Photos</h3>

        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
          <% if (data.photos?.ashpHabitableWindow && data.photos.ashpHabitableWindow.length > 0) { %>
            <div style="
                background: linear-gradient(135deg,
                    rgba(244, 228, 188, 0.08) 0%,
                    rgba(212, 175, 55, 0.05) 100%);
                backdrop-filter: blur(8px);
                border-radius: 10px;
                border: 2px solid #C8B273;
                padding: 6px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            ">
              <img src="<%= data.photos.ashpHabitableWindow[0].url %>" alt="Distance to Window" style="
                  width: 100%;
                  height: 240px;
                  object-fit: cover;
                  display: block;
                  border-radius: 6px;
                  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
              " />
              <div style="
                  background: rgba(200, 178, 115, 0.2);
                  padding: 8px;
                  text-align: center;
                  border-radius: 0 0 6px 6px;
              ">
                <div style="font-size: 9pt; color: #C8B273; font-weight: 800; text-transform: uppercase; text-shadow: 0 1px 2px rgba(0,0,0,0.4);">
                  Distance to Habitable Window
                </div>
              </div>
            </div>
          <% } %>

          <% if (data.photos?.ashpProposed && data.photos.ashpProposed.length > 0) { %>
            <div style="
                background: linear-gradient(135deg,
                    rgba(244, 228, 188, 0.08) 0%,
                    rgba(212, 175, 55, 0.05) 100%);
                backdrop-filter: blur(8px);
                border-radius: 10px;
                border: 2px solid #C8B273;
                padding: 6px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            ">
              <img src="<%= data.photos.ashpProposed[0].url %>" alt="Proposed Location" style="
                  width: 100%;
                  height: 240px;
                  object-fit: cover;
                  display: block;
                  border-radius: 6px;
                  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
              " />
              <div style="
                  background: rgba(200, 178, 115, 0.2);
                  padding: 8px;
                  text-align: center;
                  border-radius: 0 0 6px 6px;
              ">
                <div style="font-size: 9pt; color: #C8B273; font-weight: 800; text-transform: uppercase; text-shadow: 0 1px 2px rgba(0,0,0,0.4);">
                  Proposed Location
                </div>
              </div>
            </div>
          <% } %>

          <% if (data.photos?.ashpArea && data.photos.ashpArea.length > 0) { %>
            <div style="
                background: linear-gradient(135deg,
                    rgba(244, 228, 188, 0.08) 0%,
                    rgba(212, 175, 55, 0.05) 100%);
                backdrop-filter: blur(8px);
                border-radius: 10px;
                border: 2px solid #C8B273;
                padding: 6px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            ">
              <img src="<%= data.photos.ashpArea[0].url %>" alt="Installation Area" style="
                  width: 100%;
                  height: 240px;
                  object-fit: cover;
                  display: block;
                  border-radius: 6px;
                  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
              " />
              <div style="
                  background: rgba(200, 178, 115, 0.2);
                  padding: 8px;
                  text-align: center;
                  border-radius: 0 0 6px 6px;
              ">
                <div style="font-size: 9pt; color: #C8B273; font-weight: 800; text-transform: uppercase; text-shadow: 0 1px 2px rgba(0,0,0,0.4);">
                  Installation Area
                </div>
              </div>
            </div>
          <% } %>
        </div>
      </div>
    <% } %>

  </div>
</div>
```

---

## Section 09: Photo Documentation (Ultra-Vibrant)

```html
<div style="page-break-before: always;"></div>

<!-- ==========================================
     SECTION 09: PHOTO DOCUMENTATION - ULTRA-VIBRANT
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
" id="photo-documentation">

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
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="#2C3E50" stroke-width="2.5"/>
          <circle cx="8.5" cy="8.5" r="1.5" fill="#2C3E50"/>
          <path d="M21 15L16 10L5 21" stroke="#2C3E50" stroke-width="2.5" stroke-linejoin="round"/>
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
        PHOTO DOCUMENTATION
      </div>
      <div style="font-size: 10pt; color: #ffffff; font-weight: 600; margin-top: 2px; text-shadow: 0 2px 4px rgba(0,0,0,0.4);">
        Comprehensive Visual Survey
      </div>
    </div>
  </div>

  <div style="position: relative; z-index: 2;">

    <!-- Helper function to render photo category -->
    <%
    function renderPhotoCategory(title, photos) {
      if (!photos || photos.length === 0) return '';
      return `
        <div style="margin-bottom: 30px;">
          <h3 style="
              font-size: 15pt;
              font-weight: 900;
              color: #C8B273;
              margin-bottom: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              text-shadow: 0 3px 6px rgba(0,0,0,0.5);
              border-bottom: 2px solid rgba(200, 178, 115, 0.3);
              padding-bottom: 8px;
          ">${title}</h3>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
            ${photos.map((photo, index) => `
              <div style="
                  background: linear-gradient(135deg,
                      rgba(244, 228, 188, 0.08) 0%,
                      rgba(212, 175, 55, 0.05) 100%);
                  backdrop-filter: blur(8px);
                  border-radius: 10px;
                  border: 2px solid #C8B273;
                  padding: 6px;
                  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
              ">
                <img src="${photo.url}" alt="${title} ${index + 1}" style="
                    width: 100%;
                    height: 180px;
                    object-fit: cover;
                    display: block;
                    border-radius: 6px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
                " />
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
    %>

    <!-- Property Exterior -->
    <% if (data.photos?.property && data.photos.property.length > 0) { %>
      <%- renderPhotoCategory('Property Exterior', data.photos.property) %>
    <% } %>

    <!-- Loft & Insulation -->
    <% if (data.photos?.loft && data.photos.loft.length > 0) { %>
      <%- renderPhotoCategory('Loft & Insulation', data.photos.loft) %>
    <% } %>

    <!-- Windows & Glazing -->
    <% if (data.photos?.glazing && data.photos.glazing.length > 0) { %>
      <%- renderPhotoCategory('Windows & Glazing', data.photos.glazing) %>
    <% } %>

    <!-- Heating Systems -->
    <% if ((data.photos?.boiler && data.photos.boiler.length > 0) || (data.photos?.cylinder && data.photos.cylinder.length > 0)) { %>
      <div style="margin-bottom: 30px;">
        <h3 style="
            font-size: 15pt;
            font-weight: 900;
            color: #C8B273;
            margin-bottom: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            text-shadow: 0 3px 6px rgba(0,0,0,0.5);
            border-bottom: 2px solid rgba(200, 178, 115, 0.3);
            padding-bottom: 8px;
        ">Heating Systems</h3>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
          <% if (data.photos?.boiler) { %>
            <% data.photos.boiler.forEach((photo, index) => { %>
              <div style="
                  background: linear-gradient(135deg,
                      rgba(244, 228, 188, 0.08) 0%,
                      rgba(212, 175, 55, 0.05) 100%);
                  backdrop-filter: blur(8px);
                  border-radius: 10px;
                  border: 2px solid #C8B273;
                  padding: 6px;
                  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
              ">
                <img src="<%= photo.url %>" alt="Boiler <%= index + 1 %>" style="
                    width: 100%;
                    height: 180px;
                    object-fit: cover;
                    display: block;
                    border-radius: 6px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
                " />
                <div style="
                    background: rgba(200, 178, 115, 0.2);
                    padding: 6px;
                    text-align: center;
                    font-size: 9pt;
                    color: #C8B273;
                    font-weight: 800;
                    border-radius: 0 0 6px 6px;
                    text-shadow: 0 1px 2px rgba(0,0,0,0.4);
                ">Boiler</div>
              </div>
            <% }); %>
          <% } %>

          <% if (data.photos?.cylinder) { %>
            <% data.photos.cylinder.forEach((photo, index) => { %>
              <div style="
                  background: linear-gradient(135deg,
                      rgba(244, 228, 188, 0.08) 0%,
                      rgba(212, 175, 55, 0.05) 100%);
                  backdrop-filter: blur(8px);
                  border-radius: 10px;
                  border: 2px solid #C8B273;
                  padding: 6px;
                  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
              ">
                <img src="<%= photo.url %>" alt="Cylinder <%= index + 1 %>" style="
                    width: 100%;
                    height: 180px;
                    object-fit: cover;
                    display: block;
                    border-radius: 6px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
                " />
                <div style="
                    background: rgba(200, 178, 115, 0.2);
                    padding: 6px;
                    text-align: center;
                    font-size: 9pt;
                    color: #C8B273;
                    font-weight: 800;
                    border-radius: 0 0 6px 6px;
                    text-shadow: 0 1px 2px rgba(0,0,0,0.4);
                ">Cylinder</div>
              </div>
            <% }); %>
          <% } %>
        </div>
      </div>
    <% } %>

    <!-- Electrical Systems -->
    <% if ((data.photos?.consumerUnit && data.photos.consumerUnit.length > 0) ||
           (data.photos?.electrical && data.photos.electrical.length > 0) ||
           (data.photos?.meter && data.photos.meter.length > 0)) { %>
      <%- renderPhotoCategory('Electrical Systems', [...(data.photos.consumerUnit || []), ...(data.photos.electrical || []), ...(data.photos.meter || [])]) %>
    <% } %>

    <!-- ASHP Location -->
    <% if ((data.photos?.ashpHabitableWindow && data.photos.ashpHabitableWindow.length > 0) ||
           (data.photos?.ashpProposed && data.photos.ashpProposed.length > 0) ||
           (data.photos?.ashpArea && data.photos.ashpArea.length > 0)) { %>
      <%- renderPhotoCategory('ASHP Location', [...(data.photos.ashpHabitableWindow || []), ...(data.photos.ashpProposed || []), ...(data.photos.ashpArea || [])]) %>
    <% } %>

    <!-- Additional Photos -->
    <% if ((data.photos?.additional1 && data.photos.additional1.length > 0) ||
           (data.photos?.additional2 && data.photos.additional2.length > 0) ||
           (data.photos?.additional3 && data.photos.additional3.length > 0)) { %>
      <%- renderPhotoCategory('Additional Photos', [...(data.photos.additional1 || []), ...(data.photos.additional2 || []), ...(data.photos.additional3 || [])]) %>
    <% } %>

    <!-- End of Survey Banner -->
    <div style="
        background: linear-gradient(135deg, #C8B273, #D4AF37);
        border-radius: 12px;
        padding: 24px;
        text-align: center;
        margin-top: 30px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
    ">
      <div style="font-size: 16pt; color: #2C3E50; font-weight: 900; text-transform: uppercase; letter-spacing: 1px;">
        END OF SURVEY DOCUMENTATION
      </div>
      <div style="font-size: 11pt; color: #2C3E50; font-weight: 600; margin-top: 8px;">
        Generated by Vertex Solar PDF System
      </div>
    </div>

  </div>
</div>
```

---

## ✅ ALL SECTIONS COMPLETE!

**Status**: Production-Ready ✅

### Files Created:
1. **SECTIONS_04_TO_09_ULTRA_VIBRANT.md** - Sections 04 & 05
2. **SECTIONS_06_07_09_FINAL.md** - Sections 06, 07, 09

### What Cursor Needs to Do:
1. Copy Section 03 from `RAILWAY_ULTRA_VIBRANT.md`
2. Copy Section 03b from `RAILWAY_ULTRA_VIBRANT.md`
3. Copy Sections 04-05 from `SECTIONS_04_TO_09_ULTRA_VIBRANT.md`
4. Copy Sections 06-09 from `SECTIONS_06_07_09_FINAL.md`
5. Paste all into `production-ready/vertex-pdf-generator/src/templates/main.ejs`

### All Sections Include:
✅ Shimmer animation overlays
✅ Gold gradient icons with glow
✅ Multi-layer shadows
✅ Text shadows on all text
✅ Backdrop blur glassmorphism
✅ Consistent color palette
✅ Proper page breaks
✅ Navigation anchor links
✅ Photo galleries with premium frames

**Ready for Railway deployment!** 🚀
