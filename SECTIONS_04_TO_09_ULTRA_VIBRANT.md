# 🌟 SECTIONS 04-09 - ULTRA-VIBRANT (COPY-PASTE READY)

**Status**: Production-Ready EJS Code
**Design**: Ultra-Vibrant Portal Quality
**Use**: Copy directly into main.ejs after Section 03b

---

## Section 04: Room Assessment (Ultra-Vibrant)

```html
<div style="page-break-before: always;"></div>

<!-- ==========================================
     SECTION 04: ROOM ASSESSMENT - ULTRA-VIBRANT
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
" id="room-assessment">

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
          <path d="M9 9H15" stroke="#2C3E50" stroke-width="2" stroke-linecap="round"/>
          <path d="M9 15H15" stroke="#2C3E50" stroke-width="2" stroke-linecap="round"/>
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
        ROOM ASSESSMENT
      </div>
      <div style="font-size: 10pt; color: #ffffff; font-weight: 600; margin-top: 2px; text-shadow: 0 2px 4px rgba(0,0,0,0.4);">
        Detailed Room-by-Room Analysis
      </div>
    </div>
  </div>

  <div style="position: relative; z-index: 2;">
    <% if (data.rooms && data.rooms.length > 0) { %>
      <% data.rooms.forEach((room, roomIndex) => { %>

        <% if (roomIndex > 0) { %>
          <div style="page-break-before: always;"></div>
        <% } %>

        <!-- Individual Room Card -->
        <div id="room-<%= room.index %>" style="
            background: rgba(200, 178, 115, 0.12);
            border: 2px solid #C8B273;
            border-radius: 12px;
            padding: 18px;
            margin-bottom: 20px;
            page-break-inside: avoid;
        ">

          <!-- Room Header -->
          <div style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 16px;
              border-bottom: 2px solid rgba(200, 178, 115, 0.3);
              padding-bottom: 12px;
          ">
            <div>
              <h3 style="
                  font-size: 18pt;
                  font-weight: 900;
                  color: #C8B273;
                  margin: 0;
                  text-shadow: 0 3px 6px rgba(0,0,0,0.5);
                  letter-spacing: 0.5px;
              "><%= room.name || `Room ${room.index}` %></h3>
              <div style="
                  font-size: 10pt;
                  color: #ffffff;
                  font-weight: 600;
                  margin-top: 4px;
                  text-shadow: 0 1px 2px rgba(0,0,0,0.4);
              "><%= room.floorLevel || 'Ground' %> Floor</div>
            </div>
            <div style="
                background: linear-gradient(135deg, #C8B273, #D4AF37);
                padding: 10px 18px;
                border-radius: 8px;
                font-size: 14pt;
                font-weight: 900;
                color: #2C3E50;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
            ">
              Room <%= room.index %>
            </div>
          </div>

          <!-- Room Details Grid -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 16px;">
            <div style="
                background: rgba(200, 178, 115, 0.15);
                border: 1px solid #C8B273;
                border-radius: 8px;
                padding: 12px;
                text-align: center;
            ">
              <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">
                Ceiling Height
              </div>
              <div style="font-size: 14pt; color: #ffffff; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.4);">
                <%= room.ceilingHeight ? (parseFloat(room.ceilingHeight) / 1000).toFixed(2) + 'm' : 'N/A' %>
              </div>
            </div>

            <div style="
                background: rgba(200, 178, 115, 0.15);
                border: 1px solid #C8B273;
                border-radius: 8px;
                padding: 12px;
                text-align: center;
            ">
              <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">
                Floor Material
              </div>
              <div style="font-size: 14pt; color: #ffffff; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.4);">
                <%= room.floorMaterial || 'N/A' %>
              </div>
            </div>

            <div style="
                background: rgba(200, 178, 115, 0.15);
                border: 1px solid #C8B273;
                border-radius: 8px;
                padding: 12px;
                text-align: center;
            ">
              <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">
                Door Present
              </div>
              <div style="font-size: 14pt; color: #ffffff; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.4);">
                <%= room.doorPresent ? 'Yes' : 'No' %>
              </div>
            </div>
          </div>

          <!-- Windows Section -->
          <% if (room.windows && room.windows.length > 0) { %>
            <div style="margin-top: 16px;">
              <h4 style="
                  font-size: 13pt;
                  font-weight: 800;
                  color: #C8B273;
                  margin-bottom: 12px;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
                  text-shadow: 0 2px 4px rgba(0,0,0,0.4);
              ">Windows (<%= room.windows.length %>)</h4>
              <div style="
                  background: rgba(200, 178, 115, 0.08);
                  border: 1px solid rgba(200, 178, 115, 0.2);
                  border-radius: 8px;
                  padding: 12px;
              ">
                <% room.windows.forEach((window, wIndex) => { %>
                  <div style="<%= wIndex > 0 ? 'margin-top: 10px; padding-top: 10px; border-top: 1px dashed rgba(200, 178, 115, 0.3);' : '' %>">
                    <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                      <div>
                        <span style="color: #C8B273; font-weight: 700; font-size: 10pt; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Size:</span>
                        <span style="color: #ffffff; font-weight: 600; font-size: 10pt; text-shadow: 0 1px 2px rgba(0,0,0,0.4);"><%= window.width || 'N/A' %>mm × <%= window.height || 'N/A' %>mm</span>
                      </div>
                      <div>
                        <span style="color: #C8B273; font-weight: 700; font-size: 10pt; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Type:</span>
                        <span style="color: #ffffff; font-weight: 600; font-size: 10pt; text-shadow: 0 1px 2px rgba(0,0,0,0.4);"><%= window.type || 'N/A' %></span>
                      </div>
                      <div>
                        <span style="color: #C8B273; font-weight: 700; font-size: 10pt; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Frame:</span>
                        <span style="color: #ffffff; font-weight: 600; font-size: 10pt; text-shadow: 0 1px 2px rgba(0,0,0,0.4);"><%= window.frame || 'N/A' %></span>
                      </div>
                    </div>
                  </div>
                <% }); %>
              </div>
            </div>
          <% } %>

          <!-- Radiators Section -->
          <% if (room.radiators && room.radiators.length > 0) { %>
            <div style="margin-top: 16px;">
              <h4 style="
                  font-size: 13pt;
                  font-weight: 800;
                  color: #C8B273;
                  margin-bottom: 12px;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
                  text-shadow: 0 2px 4px rgba(0,0,0,0.4);
              ">Radiators (<%= room.radiators.length %>)</h4>
              <div style="
                  background: rgba(200, 178, 115, 0.08);
                  border: 1px solid rgba(200, 178, 115, 0.2);
                  border-radius: 8px;
                  padding: 12px;
              ">
                <% room.radiators.forEach((radiator, rIndex) => { %>
                  <div style="<%= rIndex > 0 ? 'margin-top: 10px; padding-top: 10px; border-top: 1px dashed rgba(200, 178, 115, 0.3);' : '' %>">
                    <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                      <div>
                        <span style="color: #C8B273; font-weight: 700; font-size: 10pt; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Type:</span>
                        <span style="color: #ffffff; font-weight: 600; font-size: 10pt; text-shadow: 0 1px 2px rgba(0,0,0,0.4);"><%= radiator.type || 'N/A' %></span>
                      </div>
                      <div>
                        <span style="color: #C8B273; font-weight: 700; font-size: 10pt; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Location:</span>
                        <span style="color: #ffffff; font-weight: 600; font-size: 10pt; text-shadow: 0 1px 2px rgba(0,0,0,0.4);"><%= radiator.location || 'N/A' %></span>
                      </div>
                      <div>
                        <span style="color: #C8B273; font-weight: 700; font-size: 10pt; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">TRV:</span>
                        <span style="color: #ffffff; font-weight: 600; font-size: 10pt; text-shadow: 0 1px 2px rgba(0,0,0,0.4);"><%= radiator.trvPresent ? 'Yes' : 'No' %></span>
                      </div>
                      <div>
                        <span style="color: #C8B273; font-weight: 700; font-size: 10pt; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Size:</span>
                        <span style="color: #ffffff; font-weight: 600; font-size: 10pt; text-shadow: 0 1px 2px rgba(0,0,0,0.4);"><%= radiator.width ? (parseFloat(radiator.width) / 1000).toFixed(2) + 'm' : 'N/A' %> × <%= radiator.height ? (parseFloat(radiator.height) / 1000).toFixed(2) + 'm' : 'N/A' %></span>
                      </div>
                    </div>
                  </div>
                <% }); %>
              </div>
            </div>
          <% } %>

          <!-- Room Photos -->
          <% if (room.photos && room.photos.length > 0) { %>
            <div style="margin-top: 16px;">
              <h4 style="
                  font-size: 13pt;
                  font-weight: 800;
                  color: #C8B273;
                  margin-bottom: 12px;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
                  text-shadow: 0 2px 4px rgba(0,0,0,0.4);
              ">Room Photos</h4>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
                <% room.photos.forEach((photo, pIndex) => { %>
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
                    <img src="<%= photo.url %>" alt="Room Photo <%= pIndex + 1 %>" style="
                        width: 100%;
                        height: 200px;
                        object-fit: cover;
                        display: block;
                        border-radius: 6px;
                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
                    " />
                  </div>
                <% }); %>
              </div>
            </div>
          <% } %>

        </div>
      <% }); %>
    <% } else { %>
      <div style="
          text-align: center;
          padding: 40px;
          color: #C8B273;
          font-size: 14pt;
          font-weight: 700;
          text-shadow: 0 2px 4px rgba(0,0,0,0.4);
      ">
        No room assessment data available
      </div>
    <% } %>
  </div>
</div>
```

---

## Section 05: Heating Systems (Ultra-Vibrant)

```html
<div style="page-break-before: always;"></div>

<!-- ==========================================
     SECTION 05: HEATING SYSTEMS - ULTRA-VIBRANT
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
" id="heating-systems">

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
          <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="#2C3E50" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="12" cy="12" r="3" stroke="#2C3E50" stroke-width="2.5"/>
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
        HEATING SYSTEMS
      </div>
      <div style="font-size: 10pt; color: #ffffff; font-weight: 600; margin-top: 2px; text-shadow: 0 2px 4px rgba(0,0,0,0.4);">
        Current System Analysis
      </div>
    </div>
  </div>

  <div style="position: relative; z-index: 2;">

    <!-- Boiler Information -->
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
      ">Boiler Information</h3>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
        <div style="
            background: rgba(200, 178, 115, 0.15);
            border: 1px solid #C8B273;
            border-radius: 8px;
            padding: 12px;
        ">
          <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Make</div>
          <div style="font-size: 13pt; color: #ffffff; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.4);"><%= data.heating?.boilerMake || 'N/A' %></div>
        </div>

        <div style="
            background: rgba(200, 178, 115, 0.15);
            border: 1px solid #C8B273;
            border-radius: 8px;
            padding: 12px;
        ">
          <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Model</div>
          <div style="font-size: 13pt; color: #ffffff; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.4);"><%= data.heating?.boilerModel || 'N/A' %></div>
        </div>

        <div style="
            background: rgba(200, 178, 115, 0.15);
            border: 1px solid #C8B273;
            border-radius: 8px;
            padding: 12px;
        ">
          <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Age</div>
          <div style="font-size: 13pt; color: #ffffff; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.4);"><%= data.heating?.boilerAge ? data.heating.boilerAge + ' years' : 'N/A' %></div>
        </div>

        <div style="
            background: rgba(200, 178, 115, 0.15);
            border: 1px solid #C8B273;
            border-radius: 8px;
            padding: 12px;
        ">
          <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Condition</div>
          <div style="font-size: 13pt; color: #ffffff; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.4);"><%= data.heating?.boilerCondition || 'N/A' %></div>
        </div>
      </div>

      <!-- Boiler Photos -->
      <% if (data.photos?.boiler && data.photos.boiler.length > 0) { %>
        <h4 style="
            font-size: 13pt;
            font-weight: 800;
            color: #C8B273;
            margin-top: 16px;
            margin-bottom: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            text-shadow: 0 2px 4px rgba(0,0,0,0.4);
        ">Boiler Photos</h4>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
          <% data.photos.boiler.slice(0, 4).forEach((photo, index) => { %>
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
              <img src="<%= photo.url %>" alt="Boiler Photo <%= index + 1 %>" style="
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

    <!-- Hot Water Cylinder -->
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
      ">Hot Water Cylinder</h3>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
        <div style="
            background: rgba(200, 178, 115, 0.15);
            border: 1px solid #C8B273;
            border-radius: 8px;
            padding: 12px;
            text-align: center;
        ">
          <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Type</div>
          <div style="font-size: 13pt; color: #ffffff; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.4);"><%= data.heating?.cylinderType || 'N/A' %></div>
        </div>

        <div style="
            background: rgba(200, 178, 115, 0.15);
            border: 1px solid #C8B273;
            border-radius: 8px;
            padding: 12px;
            text-align: center;
        ">
          <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Capacity</div>
          <div style="font-size: 13pt; color: #ffffff; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.4);"><%= data.heating?.cylinderSize ? data.heating.cylinderSize + 'L' : 'N/A' %></div>
        </div>

        <div style="
            background: rgba(200, 178, 115, 0.15);
            border: 1px solid #C8B273;
            border-radius: 8px;
            padding: 12px;
            text-align: center;
        ">
          <div style="font-size: 9pt; color: #C8B273; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Condition</div>
          <div style="font-size: 13pt; color: #ffffff; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.4);"><%= data.heating?.cylinderCondition || 'N/A' %></div>
        </div>
      </div>

      <!-- Cylinder Photos -->
      <% if (data.photos?.cylinder && data.photos.cylinder.length > 0) { %>
        <h4 style="
            font-size: 13pt;
            font-weight: 800;
            color: #C8B273;
            margin-top: 16px;
            margin-bottom: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            text-shadow: 0 2px 4px rgba(0,0,0,0.4);
        ">Cylinder Photos</h4>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
          <% data.photos.cylinder.slice(0, 4).forEach((photo, index) => { %>
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
              <img src="<%= photo.url %>" alt="Cylinder Photo <%= index + 1 %>" style="
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

    <!-- Controls & Pipework -->
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
      <div style="
          background: rgba(200, 178, 115, 0.12);
          border: 1px solid #C8B273;
          border-radius: 8px;
          padding: 14px;
      ">
        <h4 style="font-size: 13pt; font-weight: 800; color: #C8B273; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 2px 4px rgba(0,0,0,0.4);">Heating Controls</h4>
        <div style="font-size: 12pt; color: #ffffff; font-weight: 600; text-shadow: 0 1px 2px rgba(0,0,0,0.4);"><%= data.heating?.heatingControls || 'N/A' %></div>
      </div>

      <div style="
          background: rgba(200, 178, 115, 0.12);
          border: 1px solid #C8B273;
          border-radius: 8px;
          padding: 14px;
      ">
        <h4 style="font-size: 13pt; font-weight: 800; color: #C8B273; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 2px 4px rgba(0,0,0,0.4);">Pipework</h4>
        <div style="font-size: 11pt; color: #ffffff; font-weight: 600; text-shadow: 0 1px 2px rgba(0,0,0,0.4);">
          <div>Material: <%= data.heating?.pipeworkMaterial || 'N/A' %></div>
          <div style="margin-top: 4px;">Size: <%= data.heating?.pipeworkSize || 'N/A' %></div>
          <div style="margin-top: 4px;">Condition: <%= data.heating?.pipeworkCondition || 'N/A' %></div>
        </div>
      </div>
    </div>

  </div>
</div>
```

---

## Sections 06, 07, 09 Coming Next...

Due to length, I'll create these in the next file. **Copy Section 04 & 05 above into main.ejs first**, then I'll provide 06, 07, and 09.

**Status**: Sections 04-05 complete with ultra-vibrant styling ✅
**Next**: Sections 06 (Electrical), 07 (ASHP), 09 (Photos)
