---
allowed-tools: Bash, Read, Grep, Glob
description: Validate HTML emails and pages for GHL compatibility
argument-hint: "[file-or-folder]"
---

# Validate HTML for GoHighLevel

Validate the specified file or folder (default: current event folder) for:

## Checks to Perform

### 1. GHL Variable Syntax
Find all `{{variables}}` and verify they match known patterns:
- `{{contact.first_name}}`, `{{contact.email}}`, `{{contact.phone}}`
- `{{custom_values.*}}` - custom field values
- `{{trigger_link.*}}` - trigger links
- `{{location.*}}` - location fields

Flag any malformed or unknown variables.

### 2. Date Consistency
Check that all dates in the file(s) are consistent:
- Event dates (e.g., "January 24-25, 2026")
- Countdown dates match the event
- Day of week matches the date

### 3. URL Validation
Check all URLs:
- No broken `neothinkevent.com` vs `neothinkday.com` mismatches
- All links use HTTPS
- No placeholder URLs

### 4. HTML Email Best Practices
- Images have alt text
- Tables have role="presentation" for layout
- No JavaScript (not supported in email)
- Inline styles present (email clients strip `<style>` blocks sometimes)

### 5. SMS Character Count
For `.md` files with SMS content, check message lengths:
- Standard SMS: 160 chars
- With special chars: 70 chars
- Flag messages over limit

## Output Format

```
✓ GHL Variables: All valid
✓ Dates: Consistent (January 24-25, 2026)
⚠ URL: Found neothinkevent.com (expected neothinkday.com) in line 45
✗ HTML: Missing alt text on image line 82
```

## Target
$ARGUMENTS (or prompt for file/folder if not provided)
