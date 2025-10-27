# 🎨 RAILWAY PDF - PORTAL-MATCHED DESIGN
## Complete EJS Sections with Portal Styling

**Status**: Ready for Implementation
**Design**: Matches Portal's Vibrant Design System
**Colors**: Portal palette with glassmorphism effects

---

## Portal Design System Reference

```css
/* PORTAL COLOR PALETTE */
:root {
    /* Primary Colors */
    --gunmetal-gray: #1E293B;
    --champagne-gold: #D4A574;
    --light-gray: #334155;
    --cream: #FFF8E7;
    --gold-highlight: #F59E0B;

    /* Vibrant Accents */
    --success-green: #10B981;
    --warning-orange: #F59E0B;
    --error-red: #EF4444;
    --info-blue: #3B82F6;

    /* Gradients */
    --bg-gradient: linear-gradient(135deg, #1E293B 0%, #334155 50%, #475569 100%);
    --logo-gradient: linear-gradient(135deg, #FFF8E7 0%, #D4A574 50%, #F59E0B 100%);
    --card-gradient: linear-gradient(180deg, rgba(30, 41, 59, 0.98) 0%, rgba(51, 65, 85, 0.98) 50%, rgba(71, 85, 105, 0.98) 100%);
    --accent-gradient: linear-gradient(135deg, #D4A574 0%, #F59E0B 100%);

    /* Shadows with Glow */
    --shadow-dramatic: 0 20px 60px rgba(0, 0, 0, 0.5);
    --shadow-glow: 0 0 30px rgba(212, 165, 116, 0.3);

    /* Glassmorphism */
    --glass-bg: rgba(30, 41, 59, 0.7);
    --glass-border: rgba(212, 165, 116, 0.2);
    --glass-blur: blur(20px);
}
```

---

## Section 03: Property Overview (Portal Design)

```html
<div style="page-break-before: always;"></div>

<!-- ==========================================
     SECTION 03: PROPERTY OVERVIEW - PORTAL DESIGN
     ========================================== -->
<div style="
    background: linear-gradient(180deg, rgba(30, 41, 59, 0.98) 0%, rgba(51, 65, 85, 0.98) 50%, rgba(71, 85, 105, 0.98) 100%);
    backdrop-filter: blur(20px);
    border: 2px solid rgba(212, 165, 116, 0.3);
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 248, 231, 0.1);
    padding: 30px;
    margin-bottom: 30px;
    page-break-inside: avoid;
" id="property-overview">

  <!-- Section Header with Gradient Text -->
  <div style="display: flex; align-items: center; margin-bottom: 24px; border-bottom: 2px solid rgba(212, 165, 116, 0.3); padding-bottom: 16px;">
    <!-- Icon with Portal Gradient -->
    <div style="
        width: 52px;
        height: 52px;
        background: linear-gradient(135deg, #D4A574 0%, #F59E0B 100%);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 16px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3), 0 0 30px rgba(212, 165, 116, 0.3);
        border: 2px solid rgba(212, 165, 116, 0.4);
    ">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
              stroke="#1E293B" stroke-width="2.5" stroke-linejoin="round" fill="none"/>
        <path d="M9 22V12H15V22" stroke="#1E293B" stroke-width="2.5" stroke-linejoin="round"/>
      </svg>
    </div>
    <div>
      <h2 style="
          font-size: 26pt;
          font-weight: 800;
          background: linear-gradient(135deg, #FFF8E7 0%, #D4A574 50%, #F59E0B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
          letter-spacing: 0.5px;
      ">PROPERTY OVERVIEW</h2>
      <div style="font-size: 11pt; color: #D4A574; font-weight: 600; margin-top: 4px; text-transform: uppercase; letter-spacing: 1px;">Complete Building Assessment</div>
    </div>
  </div>

  <!-- Property Details Grid -->
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

    <!-- Address Card -->
    <div style="
        background: linear-gradient(180deg, rgba(30, 41, 59, 0.6) 0%, rgba(51, 65, 85, 0.6) 100%);
        backdrop-filter: blur(20px);
        border: 2px solid rgba(212, 165, 116, 0.2);
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        transition: all 0.4s ease;
        grid-column: 1 / -1;
    ">
      <div style="font-size: 10pt; color: #D4A574; font-weight: 800; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1.5px;">Property Address</div>
      <div style="font-size: 16pt; color: #FFF8E7; font-weight: 700; line-height: 1.5;"><%= data.property?.address || 'N/A' %></div>
    </div>

    <!-- Property Type -->
    <div style="
        background: linear-gradient(180deg, rgba(30, 41, 59, 0.6) 0%, rgba(51, 65, 85, 0.6) 100%);
        backdrop-filter: blur(20px);
        border: 2px solid rgba(212, 165, 116, 0.2);
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    ">
      <div style="font-size: 10pt; color: #D4A574; font-weight: 800; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1.5px;">Property Type</div>
      <div style="font-size: 16pt; color: #FFF8E7; font-weight: 700;"><%= data.property?.type || 'N/A' %></div>
    </div>

    <!-- Construction Age -->
    <div style="
        background: linear-gradient(180deg, rgba(30, 41, 59, 0.6) 0%, rgba(51, 65, 85, 0.6) 100%);
        backdrop-filter: blur(20px);
        border: 2px solid rgba(212, 165, 116, 0.2);
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    ">
      <div style="font-size: 10pt; color: #D4A574; font-weight: 800; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1.5px;">Construction Age</div>
      <div style="font-size: 16pt; color: #FFF8E7; font-weight: 700;"><%= data.property?.age || 'N/A' %></div>
    </div>

    <!-- Bedrooms -->
    <div style="
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.05) 100%);
        border: 2px solid rgba(16, 185, 129, 0.3);
        border-radius: 16px;
        padding: 20px;
        text-align: center;
    ">
      <div style="font-size: 10pt; color: #10B981; font-weight: 800; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1.5px;">Bedrooms</div>
      <div style="font-size: 32pt; color: #10B981; font-weight: 900;"><%= data.property?.numberOfBedrooms || 'N/A' %></div>
    </div>

    <!-- Total Floor Area -->
    <div style="
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 100%);
        border: 2px solid rgba(59, 130, 246, 0.3);
        border-radius: 16px;
        padding: 20px;
        text-align: center;
    ">
      <div style="font-size: 10pt; color: #3B82F6; font-weight: 800; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1.5px;">Floor Area</div>
      <div style="font-size: 32pt; color: #3B82F6; font-weight: 900;"><%= data.property?.floorArea ? data.property.floorArea + ' m²' : 'N/A' %></div>
    </div>
  </div>

  <!-- Building Fabric Section -->
  <div style="margin-top: 30px;">
    <h3 style="
        font-size: 18pt;
        font-weight: 800;
        color: #D4A574;
        margin-bottom: 20px;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        border-bottom: 2px solid rgba(212, 165, 116, 0.3);
        padding-bottom: 12px;
    ">Building Fabric</h3>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
      <!-- Wall Construction -->
      <div style="
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(212, 165, 116, 0.2);
          border-radius: 12px;
          padding: 16px;
      ">
        <div style="font-size: 9pt; color: #D4A574; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 1px;">Wall Construction</div>
        <div style="font-size: 13pt; color: #FFF8E7; font-weight: 600;"><%= data.property?.wallConstruction || 'N/A' %></div>
      </div>

      <!-- Wall Insulation -->
      <div style="
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(212, 165, 116, 0.2);
          border-radius: 12px;
          padding: 16px;
      ">
        <div style="font-size: 9pt; color: #D4A574; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 1px;">Wall Insulation</div>
        <div style="font-size: 13pt; color: #FFF8E7; font-weight: 600;"><%= data.property?.wallInsulation || 'N/A' %></div>
      </div>

      <!-- Roof Construction -->
      <div style="
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(212, 165, 116, 0.2);
          border-radius: 12px;
          padding: 16px;
      ">
        <div style="font-size: 9pt; color: #D4A574; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 1px;">Roof Construction</div>
        <div style="font-size: 13pt; color: #FFF8E7; font-weight: 600;"><%= data.property?.roofConstruction || 'N/A' %></div>
      </div>

      <!-- Roof Insulation -->
      <div style="
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(212, 165, 116, 0.2);
          border-radius: 12px;
          padding: 16px;
      ">
        <div style="font-size: 9pt; color: #D4A574; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 1px;">Roof Insulation</div>
        <div style="font-size: 13pt; color: #FFF8E7; font-weight: 600;"><%= data.property?.roofInsulation || 'N/A' %></div>
      </div>

      <!-- Floor Construction -->
      <div style="
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(212, 165, 116, 0.2);
          border-radius: 12px;
          padding: 16px;
      ">
        <div style="font-size: 9pt; color: #D4A574; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 1px;">Floor Construction</div>
        <div style="font-size: 13pt; color: #FFF8E7; font-weight: 600;"><%= data.property?.floorConstruction || 'N/A' %></div>
      </div>

      <!-- Glazing Type -->
      <div style="
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(212, 165, 116, 0.2);
          border-radius: 12px;
          padding: 16px;
      ">
        <div style="font-size: 9pt; color: #D4A574; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 1px;">Glazing Type</div>
        <div style="font-size: 13pt; color: #FFF8E7; font-weight: 600;"><%= data.property?.glazingType || 'N/A' %></div>
      </div>
    </div>
  </div>

  <!-- Current Systems Section -->
  <div style="margin-top: 30px;">
    <h3 style="
        font-size: 18pt;
        font-weight: 800;
        color: #D4A574;
        margin-bottom: 20px;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        border-bottom: 2px solid rgba(212, 165, 116, 0.3);
        padding-bottom: 12px;
    ">Current Systems</h3>

    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
      <!-- Heating -->
      <div style="
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(212, 165, 116, 0.2);
          border-radius: 12px;
          padding: 16px;
          text-align: center;
      ">
        <div style="font-size: 9pt; color: #D4A574; font-weight: 800; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Heating</div>
        <div style="font-size: 14pt; color: #FFF8E7; font-weight: 700;"><%= data.property?.currentHeating || 'N/A' %></div>
      </div>

      <!-- Electrical Supply -->
      <div style="
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(212, 165, 116, 0.2);
          border-radius: 12px;
          padding: 16px;
          text-align: center;
      ">
        <div style="font-size: 9pt; color: #D4A574; font-weight: 800; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Electrical Supply</div>
        <div style="font-size: 14pt; color: #FFF8E7; font-weight: 700;"><%= data.property?.electricalSupply || 'N/A' %></div>
      </div>

      <!-- Consumer Unit -->
      <div style="
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(212, 165, 116, 0.2);
          border-radius: 12px;
          padding: 16px;
          text-align: center;
      ">
        <div style="font-size: 9pt; color: #D4A574; font-weight: 800; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Consumer Unit</div>
        <div style="font-size: 14pt; color: #FFF8E7; font-weight: 700;"><%= data.property?.consumerUnit || 'N/A' %></div>
      </div>
    </div>
  </div>

  <!-- Property Photos -->
  <% if (data.photos?.property && data.photos.property.length > 0) { %>
    <div style="margin-top: 30px;">
      <h3 style="
          font-size: 18pt;
          font-weight: 800;
          color: #D4A574;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
      ">Property Photos</h3>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
        <% data.photos.property.slice(0, 4).forEach((photo, index) => { %>
          <div style="
              border: 2px solid rgba(212, 165, 116, 0.3);
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3), 0 0 30px rgba(212, 165, 116, 0.2);
          ">
            <img src="<%= photo.url %>" alt="Property Photo <%= index + 1 %>" style="width: 100%; height: 280px; object-fit: cover; display: block;" />
          </div>
        <% }); %>
      </div>
    </div>
  <% } %>

</div>
```

---

## Section 03b: Heat Loss Summary Table (Portal Design)

**Note**: This section includes the navigation links to individual rooms that you specifically requested.

```html
<div style="page-break-before: always;"></div>

<!-- ==========================================
     SECTION 03B: HEAT LOSS SUMMARY - PORTAL DESIGN
     ========================================== -->
<div style="
    background: linear-gradient(180deg, rgba(30, 41, 59, 0.98) 0%, rgba(51, 65, 85, 0.98) 50%, rgba(71, 85, 105, 0.98) 100%);
    backdrop-filter: blur(20px);
    border: 2px solid rgba(212, 165, 116, 0.3);
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 248, 231, 0.1);
    padding: 30px;
    margin-bottom: 30px;
" id="heat-loss-summary">

  <!-- Section Header -->
  <div style="display: flex; align-items: center; margin-bottom: 24px; border-bottom: 2px solid rgba(212, 165, 116, 0.3); padding-bottom: 16px;">
    <div style="
        width: 52px;
        height: 52px;
        background: linear-gradient(135deg, #D4A574 0%, #F59E0B 100%);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 16px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3), 0 0 30px rgba(212, 165, 116, 0.3);
    ">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V19C19 20.1046 18.1046 21 17 21Z"
              stroke="#1E293B" stroke-width="2.5"/>
      </svg>
    </div>
    <div>
      <h2 style="
          font-size: 26pt;
          font-weight: 800;
          background: linear-gradient(135deg, #FFF8E7 0%, #D4A574 50%, #F59E0B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
          letter-spacing: 0.5px;
      ">HEAT LOSS SUMMARY</h2>
      <div style="font-size: 11pt; color: #D4A574; font-weight: 600; margin-top: 4px; text-transform: uppercase; letter-spacing: 1px;">Comprehensive Heat Loss Analysis</div>
    </div>
  </div>

  <!-- Floor Plan Photo -->
  <% if (data.heatLoss?.floorPlan && data.heatLoss.floorPlan.length > 0) { %>
    <div style="text-align: center; margin-bottom: 30px;">
      <h3 style="
          font-size: 18pt;
          font-weight: 800;
          color: #D4A574;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
      ">Floor Plan</h3>
      <div style="
          border: 3px solid rgba(212, 165, 116, 0.4);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(0,0,0,0.3), 0 0 40px rgba(212, 165, 116, 0.2);
          display: inline-block;
          max-width: 100%;
      ">
        <img src="<%= data.heatLoss.floorPlan[0].url %>" alt="Floor Plan" style="width: 100%; max-width: 800px; height: auto; display: block;" />
      </div>
    </div>
  <% } %>

  <!-- UNIFIED ROOM ASSESSMENT TABLE -->
  <% if (data.rooms && data.rooms.length > 0) { %>
    <div style="margin-bottom: 30px;">
      <h3 style="
          font-size: 20pt;
          font-weight: 800;
          color: #D4A574;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          text-align: center;
      ">Room Assessment Overview</h3>

      <table style="
          width: 100%;
          border-collapse: collapse;
          border: 2px solid rgba(212, 165, 116, 0.4);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
      ">
        <!-- Table Header -->
        <thead>
          <tr style="background: linear-gradient(135deg, #D4A574 0%, #F59E0B 100%);">
            <th style="padding: 16px 12px; text-align: left; font-size: 11pt; font-weight: 900; color: #1E293B; border-right: 2px solid rgba(30, 41, 59, 0.3); width: 20%; text-transform: uppercase; letter-spacing: 1px;">ROOM</th>
            <th style="padding: 16px 12px; text-align: center; font-size: 11pt; font-weight: 900; color: #1E293B; border-right: 2px solid rgba(30, 41, 59, 0.3); width: 15%; text-transform: uppercase; letter-spacing: 1px;">HEIGHT</th>
            <th style="padding: 16px 12px; text-align: center; font-size: 11pt; font-weight: 900; color: #1E293B; border-right: 2px solid rgba(30, 41, 59, 0.3); width: 20%; text-transform: uppercase; letter-spacing: 1px;">FLOOR</th>
            <th style="padding: 16px 12px; text-align: center; font-size: 11pt; font-weight: 900; color: #1E293B; border-right: 2px solid rgba(30, 41, 59, 0.3); width: 20%; text-transform: uppercase; letter-spacing: 1px;">WINDOWS</th>
            <th style="padding: 16px 12px; text-align: center; font-size: 11pt; font-weight: 900; color: #1E293B; border-right: 2px solid rgba(30, 41, 59, 0.3); width: 15%; text-transform: uppercase; letter-spacing: 1px;">RADS</th>
            <th style="padding: 16px 12px; text-align: center; font-size: 11pt; font-weight: 900; color: #1E293B; width: 10%; text-transform: uppercase; letter-spacing: 1px;">DOORS</th>
          </tr>
        </thead>

        <!-- Table Body -->
        <tbody>
          <% data.rooms.forEach((room, roomIndex) => { %>
            <%
              const rowBg = roomIndex % 2 === 0
                ? 'rgba(30, 41, 59, 0.6)'
                : 'rgba(51, 65, 85, 0.6)';
              const roomName = room.name || `Room ${room.index}`;
              const floorLevel = room.floorLevel || 'Ground';
              const ceilingHeight = room.ceilingHeight ? (parseFloat(room.ceilingHeight) / 1000).toFixed(2) + 'm' : 'N/A';
              const floorMaterial = room.floorMaterial || 'N/A';
              const windowCount = (room.windows && room.windows.length) || 0;
              const radiatorCount = (room.radiators && room.radiators.length) || 0;
              const doorPresent = room.doorPresent ? 'Yes' : 'No';
            %>
            <tr style="background: <%= rowBg %>; border-bottom: 1px solid rgba(212, 165, 116, 0.2);">
              <!-- Room Name with Navigation Link -->
              <td style="padding: 14px 12px; border-right: 2px solid rgba(212, 165, 116, 0.2); vertical-align: top;">
                <a href="#room-<%= room.index %>" style="
                    color: #F59E0B;
                    text-decoration: none;
                    font-weight: 800;
                    font-size: 12pt;
                    display: block;
                    transition: all 0.3s ease;
                ">
                  <%= roomName %>
                </a>
                <div style="font-size: 9pt; color: #D4A574; margin-top: 4px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                  <%= floorLevel %> Floor
                </div>
              </td>

              <!-- Ceiling Height -->
              <td style="padding: 14px 12px; border-right: 2px solid rgba(212, 165, 116, 0.2); text-align: center; vertical-align: top;">
                <div style="font-size: 14pt; font-weight: 700; color: #FFF8E7;"><%= ceilingHeight %></div>
              </td>

              <!-- Floor Material -->
              <td style="padding: 14px 12px; border-right: 2px solid rgba(212, 165, 116, 0.2); text-align: center; vertical-align: top;">
                <div style="font-size: 11pt; font-weight: 600; color: #FFF8E7;"><%= floorMaterial %></div>
              </td>

              <!-- Windows -->
              <td style="padding: 14px 10px; border-right: 2px solid rgba(212, 165, 116, 0.2); vertical-align: top;">
                <% if (windowCount > 0) { %>
                  <div style="font-size: 11pt; color: #10B981; font-weight: 800; margin-bottom: 6px; text-align: center;">
                    <%= windowCount %> Window<%= windowCount > 1 ? 's' : '' %>
                  </div>
                  <% room.windows.slice(0, 2).forEach((window) => { %>
                    <div style="font-size: 9pt; color: #FFF8E7; font-weight: 600; margin-bottom: 4px; text-align: center;">
                      <%= window.width || 'N/A' %>×<%= window.height || 'N/A' %>mm
                      <div style="font-size: 8pt; color: #D4A574;"><%= window.type || 'N/A' %></div>
                    </div>
                  <% }); %>
                  <% if (windowCount > 2) { %>
                    <div style="font-size: 8pt; color: #D4A574; font-weight: 700; text-align: center;">+ <%= windowCount - 2 %> more</div>
                  <% } %>
                <% } else { %>
                  <div style="font-size: 11pt; color: #FFF8E7; text-align: center;">None</div>
                <% } %>
              </td>

              <!-- Radiators -->
              <td style="padding: 14px 10px; border-right: 2px solid rgba(212, 165, 116, 0.2); vertical-align: top; text-align: center;">
                <% if (radiatorCount > 0) { %>
                  <div style="font-size: 18pt; color: #F59E0B; font-weight: 900;"><%= radiatorCount %></div>
                  <div style="font-size: 8pt; color: #D4A574; font-weight: 600; margin-top: 2px;">
                    <%= room.radiators[0].type || 'N/A' %>
                  </div>
                <% } else { %>
                  <div style="font-size: 14pt; color: #FFF8E7;">0</div>
                <% } %>
              </td>

              <!-- Doors -->
              <td style="padding: 14px 10px; text-align: center; vertical-align: top;">
                <div style="font-size: 14pt; color: #FFF8E7; font-weight: 700;"><%= doorPresent %></div>
              </td>
            </tr>
          <% }); %>
        </tbody>
      </table>
    </div>
  <% } %>

  <!-- Heat Loss Calculations -->
  <div style="margin-top: 30px;">
    <h3 style="
        font-size: 20pt;
        font-weight: 800;
        color: #D4A574;
        margin-bottom: 24px;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        text-align: center;
    ">Fabric Heat Loss Analysis</h3>

    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 30px;">
      <!-- Wall Heat Loss -->
      <div style="
          background: rgba(30, 41, 59, 0.6);
          border: 2px solid rgba(212, 165, 116, 0.3);
          border-radius: 16px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
      ">
        <div style="font-size: 10pt; color: #D4A574; font-weight: 800; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">Wall Heat Loss</div>
        <div style="font-size: 28pt; color: #F59E0B; font-weight: 900;">
          <%= data.heatLoss?.wallLoss || 'N/A' %> <span style="font-size: 16pt; color: #FFF8E7;">W</span>
        </div>
      </div>

      <!-- Roof Heat Loss -->
      <div style="
          background: rgba(30, 41, 59, 0.6);
          border: 2px solid rgba(212, 165, 116, 0.3);
          border-radius: 16px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
      ">
        <div style="font-size: 10pt; color: #D4A574; font-weight: 800; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">Roof Heat Loss</div>
        <div style="font-size: 28pt; color: #F59E0B; font-weight: 900;">
          <%= data.heatLoss?.roofLoss || 'N/A' %> <span style="font-size: 16pt; color: #FFF8E7;">W</span>
        </div>
      </div>

      <!-- Floor Heat Loss -->
      <div style="
          background: rgba(30, 41, 59, 0.6);
          border: 2px solid rgba(212, 165, 116, 0.3);
          border-radius: 16px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
      ">
        <div style="font-size: 10pt; color: #D4A574; font-weight: 800; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">Floor Heat Loss</div>
        <div style="font-size: 28pt; color: #F59E0B; font-weight: 900;">
          <%= data.heatLoss?.floorLoss || 'N/A' %> <span style="font-size: 16pt; color: #FFF8E7;">W</span>
        </div>
      </div>

      <!-- Window Heat Loss -->
      <div style="
          background: rgba(30, 41, 59, 0.6);
          border: 2px solid rgba(212, 165, 116, 0.3);
          border-radius: 16px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
      ">
        <div style="font-size: 10pt; color: #D4A574; font-weight: 800; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">Window Heat Loss</div>
        <div style="font-size: 28pt; color: #F59E0B; font-weight: 900;">
          <%= data.heatLoss?.windowLoss || 'N/A' %> <span style="font-size: 16pt; color: #FFF8E7;">W</span>
        </div>
      </div>

      <!-- Door Heat Loss -->
      <div style="
          background: rgba(30, 41, 59, 0.6);
          border: 2px solid rgba(212, 165, 116, 0.3);
          border-radius: 16px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
      ">
        <div style="font-size: 10pt; color: #D4A574; font-weight: 800; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">Door Heat Loss</div>
        <div style="font-size: 28pt; color: #F59E0B; font-weight: 900;">
          <%= data.heatLoss?.doorLoss || 'N/A' %> <span style="font-size: 16pt; color: #FFF8E7;">W</span>
        </div>
      </div>

      <!-- Ventilation Loss -->
      <div style="
          background: rgba(30, 41, 59, 0.6);
          border: 2px solid rgba(212, 165, 116, 0.3);
          border-radius: 16px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
      ">
        <div style="font-size: 10pt; color: #D4A574; font-weight: 800; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">Ventilation Loss</div>
        <div style="font-size: 28pt; color: #F59E0B; font-weight: 900;">
          <%= data.heatLoss?.ventilationLoss || 'N/A' %> <span style="font-size: 16pt; color: #FFF8E7;">W</span>
        </div>
      </div>
    </div>

    <!-- Total Heat Loss & Recommended Capacity -->
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
      <!-- Total Heat Loss -->
      <div style="
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(239, 68, 68, 0.1) 100%);
          border: 3px solid #EF4444;
          border-radius: 20px;
          padding: 28px;
          text-align: center;
          box-shadow: 0 12px 30px rgba(239, 68, 68, 0.3), 0 0 40px rgba(239, 68, 68, 0.2);
      ">
        <div style="font-size: 13pt; color: #F59E0B; font-weight: 900; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 2px;">Total Heat Loss</div>
        <div style="font-size: 38pt; color: #FFF8E7; font-weight: 900; text-shadow: 0 4px 8px rgba(0,0,0,0.6);">
          <%= data.heatLoss?.totalHeatLoss || 'N/A' %> <span style="font-size: 20pt;">W</span>
        </div>
      </div>

      <!-- Recommended Capacity -->
      <div style="
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%);
          border: 3px solid #10B981;
          border-radius: 20px;
          padding: 28px;
          text-align: center;
          box-shadow: 0 12px 30px rgba(16, 185, 129, 0.3), 0 0 40px rgba(16, 185, 129, 0.2);
      ">
        <div style="font-size: 13pt; color: #F59E0B; font-weight: 900; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 2px;">Recommended Capacity</div>
        <div style="font-size: 38pt; color: #FFF8E7; font-weight: 900; text-shadow: 0 4px 8px rgba(0,0,0,0.6);">
          <%= data.heatLoss?.recommendedCapacity || 'N/A' %> <span style="font-size: 20pt;">W</span>
        </div>
      </div>
    </div>
  </div>

</div>
```

---

## CURSOR IMPLEMENTATION GUIDE

Due to token limits, I've provided **Section 03** and **Section 03b** with full portal styling. The pattern is now established:

### Portal Design Elements to Apply to ALL Sections:

1. **Card Background**:
```css
background: linear-gradient(180deg, rgba(30, 41, 59, 0.98) 0%, rgba(51, 65, 85, 0.98) 50%, rgba(71, 85, 105, 0.98) 100%);
backdrop-filter: blur(20px);
border: 2px solid rgba(212, 165, 116, 0.3);
border-radius: 20px;
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 248, 231, 0.1);
```

2. **Section Headers**:
```html
<h2 style="
    font-size: 26pt;
    font-weight: 800;
    background: linear-gradient(135deg, #FFF8E7 0%, #D4A574 50%, #F59E0B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
    letter-spacing: 0.5px;
">SECTION TITLE</h2>
```

3. **Icon Containers**:
```css
background: linear-gradient(135deg, #D4A574 0%, #F59E0B 100%);
border-radius: 12px;
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3), 0 0 30px rgba(212, 165, 116, 0.3);
border: 2px solid rgba(212, 165, 116, 0.4);
```

4. **Color Palette**:
- Text: `#FFF8E7` (Cream)
- Gold: `#D4A574` (Champagne Gold)
- Accent: `#F59E0B` (Gold Highlight)
- Success: `#10B981`
- Error: `#EF4444`
- Info: `#3B82F6`

5. **Small Cards**:
```css
background: rgba(30, 41, 59, 0.6);
border: 2px solid rgba(212, 165, 116, 0.2);
border-radius: 16px;
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
```

### Next Steps:

**Apply this portal styling to remaining sections (04-09)** using [RAILWAY_COMPLETE_SECTIONS.md](RAILWAY_COMPLETE_SECTIONS.md) as structural reference but replacing ALL colors/styling with portal design system above.

**Key Changes from Old Design → Portal Design:**
- `#C8B273` → `#D4A574` (Champagne Gold)
- `#FFD700` → `#F59E0B` (Gold Highlight)
- `#ffffff` → `#FFF8E7` (Cream)
- Add gradient text to ALL headers
- Add glow shadows to ALL cards
- Add vibrant accent colors (green/red/blue) where appropriate

Would you like me to complete the remaining sections (04-09) with full portal styling?
