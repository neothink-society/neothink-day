# GHL Operations Rules

## Variable Syntax

**Contact Fields:**
```
{{contact.first_name}}
{{contact.last_name}}
{{contact.full_name}}
{{contact.email}}
{{contact.phone}}
```

**Custom Values (Location-level):**
```
{{custom_values.doe_zoom_id}}
{{custom_values.doe_zoom_passcode}}
{{custom_values.doe_zoom_link}}
{{custom_values.doe_day_2_return_time}}
```

**Trigger Links (Workflow-specific):**
```
{{trigger_link.bw3pFLlMkAQiQOlYB674}}
```

**Location Fields:**
```
{{location.name}}
{{location.email}}
```

## URL Domains

| Event | Domain |
|-------|--------|
| Dec 2025 | neothinkevent.com |
| Jan 2026+ | neothinkday.com |

## Workflow Offset Format

**Format:** `-Nd Nh` (N days, N hours before event)

**Base Time:** Event start at 8:00 AM Pacific / 11:00 AM Eastern

**Examples:**
- `-29d 2h` = 29 days, 2 hours before = 9am Eastern (when event at 11am Eastern)
- `-7d 2h` = 7 days, 2 hours before
- `+1d 0h` = 1 day after event start

## Copy-Paste Workflow

1. Open HTML file in editor
2. Run `/ghl-prep [file]` to get setup summary
3. Copy full HTML content
4. Paste into GHL Email Builder (HTML mode)
5. Set subject line from summary
6. Configure workflow offset
7. Test with preview
