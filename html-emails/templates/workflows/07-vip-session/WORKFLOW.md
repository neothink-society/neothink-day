# Workflow 07: VIP Session Sequence

## Overview

This workflow sends reminders and recording access to VIP and Level 3 members for their exclusive extended session with Wallace Hamilton and senior mentors.

## Trigger

**Entry Condition:** Contact has (`vip` OR `level-3` tag) AND `doe-attended` tag

**How to Set Up in GHL:**
1. Create workflow with trigger: "Tag Added"
2. Set tag: `doe-attended`
3. Add IF/ELSE condition:
   - IF Contact has tag `vip` OR Contact has tag `level-3`
   - THEN continue workflow
   - ELSE end workflow

## Timing Reference

**Base Time (T=0):** Workshop Day 1 start (Saturday 11am ET / 8am PT)
**VIP Session Time:** Monday 7pm ET / 4pm PT

| Step | Offset from T=0 | Actual Time | Content |
|------|-----------------|-------------|---------|
| 1 | +54h 30m | Mon 5:30pm ET | vip-session-90min.html |
| 2 | +55h | Mon 6:00pm ET | vip-session-1hour.html |
| 3 | +56h | Mon 7:00pm ET | vip-session-live.html |
| 4 | +71h | Tue 10:00am ET | vip-session-recording.html |

## Workflow Steps

### Step 1: 90-Minute Reminder
- **Wait:** Until Monday 5:30pm ET (or +54h 30m from T=0)
- **Action:** Send Email
- **Template:** `vip-session-90min.html`
- **Subject:** VIP: Your exclusive session starts in 90 minutes

### Step 2: 1-Hour Reminder
- **Wait:** 30 minutes
- **Action:** Send Email
- **Template:** `vip-session-1hour.html`
- **Subject:** 1 HOUR: Your VIP session starts at 4pm PT
- **Action:** Send SMS (optional)

### Step 3: Session LIVE
- **Wait:** 1 hour
- **Action:** Send Email
- **Template:** `vip-session-live.html`
- **Subject:** LIVE NOW: Your VIP session has started
- **Action:** Send SMS

### Step 4: Recording Available
- **Wait:** Until Tuesday 10:00am ET (15 hours after session start)
- **Action:** Send Email
- **Template:** `vip-session-recording.html`
- **Subject:** Your VIP Session Recording: 3 Hours of Breakthrough
- **Action:** Send SMS (optional)

## Custom Values Required

```
{{custom_values.doe_vip_session_date}}     → Monday, January 26
{{custom_values.doe_vip_session_time}}     → 4:00 PM Pacific / 7:00 PM Eastern
{{custom_values.doe_vip_session_zoom}}     → https://neothink.zoom.us/j/xxx
{{custom_values.doe_vip_recording_url}}    → https://neothinkday.com/vip-session-recording
```

## GHL Implementation Notes

### Using Date-Based Triggers (Preferred)
1. Set trigger to `doe-attended` tag added
2. Use "Wait" action with specific date/time
3. Set to VIP session date from custom values

### Using Offset Triggers
1. Calculate offset from workshop end (Sunday ~6pm ET)
2. VIP Session is ~25 hours after workshop end
3. Adjust wait times accordingly

## Zoom Link

The VIP session uses a dedicated Zoom room:
- **Meeting ID:** 831 0471 2692
- **Passcode:** (included in link)
- **Link:** `{{custom_values.doe_vip_session_zoom}}`

## Audience Segmentation

This workflow is for:
- ✅ VIP members (purchased VIP upgrade)
- ✅ Level 3 members (includes VIP benefits)

NOT for:
- ❌ Standard registrants
- ❌ No-shows (unless they have VIP/L3 tag)

## Recording Access

The VIP session recording is exclusive content:
- Only sent to VIP and Level 3 members
- Links should not be shared publicly
- Recording typically available by Tuesday morning

## Template Files

| File | Purpose |
|------|---------|
| vip-session-90min.html | 90-minute reminder with Zoom link |
| vip-session-1hour.html | 1-hour reminder with preparation checklist |
| vip-session-live.html | LIVE notification with prominent join button |
| vip-session-recording.html | Recording available with content highlights |

## Testing Checklist

- [ ] Verify VIP/L3 tag filter works correctly
- [ ] Test Zoom link is clickable in all email clients
- [ ] Confirm custom values render correctly
- [ ] Test on mobile devices
- [ ] Verify recording link is valid before sending
