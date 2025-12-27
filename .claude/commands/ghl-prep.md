---
allowed-tools: Read, Bash, Grep
description: Prepare HTML email or page for copy-paste into GoHighLevel
argument-hint: "<file-path>"
---

# Prepare for GoHighLevel

Prepare the specified HTML file for copy-paste into GHL Email Builder or Funnel/Website Builder.

## Steps

### 1. Read the File
Read the specified HTML file: $ARGUMENTS

### 2. Extract Key Information
From the HTML comments at the top, extract:
- Recommended subject line
- Alternative subject lines
- Send time / offset
- Audience (All, VIP, Non-VIP)

### 3. Validate Before Prep
Run quick validation:
- All `{{variables}}` are valid GHL syntax
- No broken URLs
- Dates are correct

### 4. Output Summary

Provide a summary formatted for easy GHL setup:

```
═══════════════════════════════════════════════════
GHL EMAIL SETUP
═══════════════════════════════════════════════════

SUBJECT LINE:
[Primary subject line]

ALTERNATIVES:
• [Alt 1]
• [Alt 2]

PREHEADER:
[Preheader text if present]

───────────────────────────────────────────────────
AUTOMATION SETTINGS
───────────────────────────────────────────────────

TRIGGER: [Event-based / Time-based]
OFFSET: [e.g., -29d 2h before event]
SEND TIME: [Calculated date/time]
AUDIENCE: [All / VIP / Non-VIP]

───────────────────────────────────────────────────
GHL VARIABLES USED
───────────────────────────────────────────────────

• {{contact.first_name}}
• {{custom_values.doe_zoom_id}}
• {{trigger_link.xyz}}

───────────────────────────────────────────────────
READY TO COPY
───────────────────────────────────────────────────

HTML is ready. Copy the full file contents into GHL.
File: [path]
Size: [X lines, Y KB]
```

### 5. Offer to Open
Ask if user wants the HTML content displayed for easy copying.
