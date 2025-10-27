# How To Update Hex Codes After Survey Changes

## Quick Update Guide

When you remake the survey in Fulcrum, you'll need to update the hex codes. Here's how:

### Step 1: Get New Hex Codes

1. Go to Fulcrum
2. Open your ASHP v1.1 form
3. Look for the field key (hex code) at the top of each field
4. Or use: `https://api.fulcrumapp.com/api/v2/forms/FORM_ID`

### Step 2: Update These Files

1. **`FULCRUM_WEBHOOK_FIELD_MAPPING.md`** - Contains all hex codes
2. **`ASH_P_V1.1_FIELD_MAPPING.json`** - JSON mapping
3. **Make.com scenario** - Update the JSON body with new codes

### Step 3: Test

Update the Make.com scenario with new codes and test.

## Current Hex Code Files

Located in:
- `/Fulcrum PDF and Survey/FULCRUM_WEBHOOK_FIELD_MAPPING.md`
- `/Fulcrum PDF and Survey/ASH_P_V1.1_FIELD_MAPPING.json`

## Need To Know

**Which fields changed?** Tell me which fields you added/changed and I'll give you the new hex codes.



