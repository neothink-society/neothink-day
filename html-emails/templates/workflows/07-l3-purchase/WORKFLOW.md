# Workflow 07: L3 Purchase Sequence

## Overview

This workflow sends confirmation, onboarding content, and Welcome Party reminders to new Level 3 members immediately after purchase.

## Trigger

**Entry Condition:** Level 3 product purchase completed
**Tags Added:** `level-3`

**How to Set Up in GHL:**
1. Create workflow with trigger: "Product Purchase" or "Payment Received"
2. Filter by product: Level 3 enrollment
3. Add tag action: Add `level-3` tag

## Important: Remove from L3 Offer Close Workflow

When a contact purchases Level 3:
1. Add them to this workflow (08-l3-purchase)
2. **Remove them from workflow 08-l3-offer-close** (if enrolled)
3. This prevents them from receiving sales emails for a product they already bought

## Timing Reference

**Base Time (T=0):** Workshop Day 1 start (Saturday 11am ET / 8am PT)
**Welcome Party:** Wednesday 7pm ET / 4pm PT

| Step | Offset from T=0 | Actual Time | Content |
|------|-----------------|-------------|---------|
| 1 | Immediate | Upon purchase | l3-confirmation.html |
| 2 | +34h | Sun 9pm ET | l3-sunday-night.html |
| 3 | +46h | Mon 9am ET | l3-monday-morning.html |
| 4 | +79h | Tue 7pm ET | welcome-party-reminder.html |
| 5 | +94h | Wed 9am ET | welcome-party-today.html |
| 6 | +103.5h | Wed 6:30pm ET | welcome-party-30min.html |
| 7 | +104h | Wed 7pm ET | welcome-party-live.html |
| 8 | +119h | Thu 10am ET | welcome-party-recording.html |

## Workflow Steps

### Step 1: L3 Confirmation (Immediate)
- **Wait:** None (immediate)
- **Action:** Send Email
- **Template:** `l3-confirmation.html`
- **Subject:** Welcome to Level 3 — You're In
- **Action:** Send SMS

### Step 2: Sunday Night (Post-Workshop)
- **Wait:** Until Sunday 9pm ET
- **Action:** Send Email
- **Template:** `l3-sunday-night.html`
- **Subject:** Your first night as a Level 3 member

### Step 3: Monday Morning
- **Wait:** Until Monday 9am ET
- **Action:** Send Email
- **Template:** `l3-monday-morning.html`
- **Subject:** Good morning, Level 3 member — Tonight is your VIP Session

### Step 4: Welcome Party Reminder (Tuesday)
- **Wait:** Until Tuesday 7pm ET
- **Action:** Send Email
- **Template:** `welcome-party-reminder.html`
- **Subject:** Tomorrow: Your Level 3 Welcome Party

### Step 5: Welcome Party Day (Wednesday Morning)
- **Wait:** Until Wednesday 9am ET
- **Action:** Send Email
- **Template:** `welcome-party-today.html`
- **Subject:** Today: Your Level 3 Welcome Party

### Step 6: Welcome Party 30 Minutes
- **Wait:** Until Wednesday 6:30pm ET
- **Action:** Send Email
- **Template:** `welcome-party-30min.html`
- **Subject:** Starting in 30 minutes: Level 3 Welcome Party
- **Action:** Send SMS

### Step 7: Welcome Party LIVE
- **Wait:** Until Wednesday 7pm ET
- **Action:** Send Email
- **Template:** `welcome-party-live.html`
- **Subject:** We're LIVE — Welcome Party Starting Now
- **Action:** Send SMS

### Step 8: Welcome Party Recording
- **Wait:** Until Thursday 10am ET
- **Action:** Send Email
- **Template:** `welcome-party-recording.html`
- **Subject:** Your Welcome Party Recording: The Leap Begins

## Custom Values Required

```
{{custom_values.doe_day_2_date}}                    → Sunday, January 25, 2026
{{custom_values.doe_vip_session_date}}             → Monday, January 26
{{custom_values.doe_vip_session_time}}             → 4:00 PM Pacific / 7:00 PM Eastern
{{custom_values.doe_welcome_party_date}}           → Wednesday, January 28
{{custom_values.doe_welcome_party_time}}           → 4:00 PM Pacific / 7:00 PM Eastern
{{custom_values.doe_welcome_party_zoom}}           → https://neothink.zoom.us/j/xxx
{{custom_values.doe_welcome_party_id}}        → 825 3274 2248
{{custom_values.doe_welcome_party_passcode}}       → abc123
{{custom_values.doe_welcome_party_recording_url}}  → https://neothinkday.com/level-three-welcome-party
```

## Audience Notes

This workflow is ONLY for Level 3 members:
- ✅ People who purchased Level 3 during the workshop
- ✅ People who purchased Level 3 after the workshop

NOT for:
- ❌ Standard registrants (they receive 08-l3-offer-close instead)
- ❌ VIP-only members (they only get VIP session, not Welcome Party)

## Level 3 Benefits Included

- VIP Session access (Monday)
- Welcome Party access (Wednesday)
- Stargazer Event invitation
- Ongoing mentorship access

## Template Files

| File | Purpose | GHL Name |
|------|---------|----------|
| l3-confirmation.html | Immediate purchase confirmation with what happens next | `DOE 09 L3 Confirmation` |
| l3-sunday-night.html | Sunday night reflection, prep for VIP session | `DOE 09 L3 Sunday Night` |
| l3-monday-morning.html | VIP Session reminder for L3 members | `DOE 09 L3 Monday Morning` |
| welcome-party-reminder.html | Tuesday reminder for Wednesday party | `DOE 09 L3 Welcome Party Reminder` |
| welcome-party-today.html | Day-of Welcome Party reminder | `DOE 09 L3 Welcome Party Today` |
| welcome-party-30min.html | 30-minute countdown | `DOE 09 L3 Welcome Party 30m` |
| welcome-party-live.html | LIVE notification | `DOE 09 L3 Welcome Party Live` |
| welcome-party-recording.html | Recording available next day | `DOE 09 L3 Welcome Party Recording` |

## Testing Checklist

- [ ] Confirm L3 tag is added on purchase
- [ ] Verify removal from 08-l3-offer-close workflow
- [ ] Test Welcome Party Zoom link
- [ ] Confirm all custom values render correctly
- [ ] Test on mobile devices
- [ ] Verify recording link before sending
