# Workflow 08: L3 Offer Close Sequence

## Overview

This workflow sends the Level 3 enrollment closing sequence to attendees who have NOT yet purchased Level 3. It provides value-based reminders about the offer and deadline.

## Trigger

**Entry Condition:** `doe-attended` tag added + NOT `level-3` tag
**Exit Condition:** `level-3` tag added (purchased)

**How to Set Up in GHL:**
1. Create workflow with trigger: "Tag Added" = `doe-attended`
2. Add IF/ELSE condition: If contact does NOT have tag `level-3`
3. Only proceed if condition is true
4. Add Goal: "Tag Added" = `level-3` (exits workflow when L3 purchased)

## Critical: Stop on L3 Purchase

**Before EACH email send, check for `level-3` tag.**

If the contact purchases Level 3 at any point:
1. They should immediately exit this workflow
2. They should enter workflow 07-l3-purchase instead
3. They should NOT receive any more L3 sales emails

## Timing Reference

**T=0 (Deadline):** Wednesday January 28, 2026 @ 8:59 PM PT / 11:59 PM ET
**GHL Event Type:** Select date → `2026-01-28 8:59 PM Pacific`

All offsets are BEFORE the deadline (negative from T=0).

| Step | Offset | GHL Config | Send Time (PT) | Send Time (ET) | Content |
|------|--------|------------|----------------|----------------|---------|
| 1 | -2d 10h | 2d 10h before | Mon 11am | Mon 2pm | monday-afternoon.html |
| 2 | -1d 10h | 1d 10h before | Tue 11am | Tue 2pm | qa-call-offer.html |
| 3 | -1d 5h | 1d 5h before | Tue 4pm | Tue 7pm | tuesday-evening.html |
| 4 | -10h | 0d 10h before | Wed 11am | Wed 2pm | wednesday-afternoon.html |
| 5 | -6h | 0d 6h before | Wed 3pm | Wed 6pm | wednesday-6pm.html |
| 6 | -3h | 0d 3h before | Wed 6pm | Wed 9pm | wednesday-gentle-reminder.html |

## Workflow Steps

### Step 1: Monday Afternoon (L3 Offer Introduction)
- **Wait:** 2 days 10 hours before deadline (Mon 11am PT / 2pm ET)
- **GHL:** Days: 2, Hours: 10, Minutes: 0 — Before event
- **Condition:** Check contact does NOT have `level-3` tag
- **Action:** Send Email
- **Template:** `monday-afternoon.html`
- **Subject:** Level 3: What happens next
- **Action:** Send SMS

### Step 2: Q&A Call Offer (Tuesday Afternoon)
- **Wait:** 1 day 10 hours before deadline (Tue 11am PT / 2pm ET)
- **GHL:** Days: 1, Hours: 10, Minutes: 0 — Before event
- **Condition:** Check contact does NOT have `level-3` tag
- **Action:** Send Email
- **Template:** `qa-call-offer.html`
- **Subject:** Questions about Level 3? Let's talk
- **Action:** Send SMS

### Step 3: Tuesday Evening (24 Hours Warning)
- **Wait:** 1 day 5 hours before deadline (Tue 4pm PT / 7pm ET)
- **GHL:** Days: 1, Hours: 5, Minutes: 0 — Before event
- **Condition:** Check contact does NOT have `level-3` tag
- **Action:** Send Email
- **Template:** `tuesday-evening.html`
- **Subject:** 24 hours left to join Level 3
- **Action:** Send SMS

### Step 4: Wednesday Afternoon (Final Hours - 10h)
- **Wait:** 10 hours before deadline (Wed 11am PT / 2pm ET)
- **GHL:** Days: 0, Hours: 10, Minutes: 0 — Before event
- **Condition:** Check contact does NOT have `level-3` tag
- **Action:** Send Email
- **Template:** `wednesday-afternoon.html`
- **Subject:** Tonight at midnight: Level 3 closes
- **Action:** Send SMS

### Step 5: Wednesday 6pm (6 Hours)
- **Wait:** 6 hours before deadline (Wed 3pm PT / 6pm ET)
- **GHL:** Days: 0, Hours: 6, Minutes: 0 — Before event
- **Condition:** Check contact does NOT have `level-3` tag
- **Action:** Send Email
- **Template:** `wednesday-6pm.html`
- **Subject:** 6 hours left
- **Action:** Send SMS

### Step 6: Wednesday 9pm (Final Message)
- **Wait:** 3 hours before deadline (Wed 6pm PT / 9pm ET)
- **GHL:** Days: 0, Hours: 3, Minutes: 0 — Before event
- **Condition:** Check contact does NOT have `level-3` tag
- **Action:** Send Email
- **Template:** `wednesday-gentle-reminder.html`
- **Subject:** 3 hours left
- **Action:** Send SMS (final)

## Custom Values Required

```
{{custom_values.doe_day_1_date}}                → Saturday, January 24, 2026
{{custom_values.doe_day_1_date_short}}          → January 24
{{custom_values.doe_day_2_date_short}}          → January 25
{{custom_values.doe_welcome_party_date}}       → Wednesday, January 28
{{custom_values.doe_l3_deadline}}              → Wednesday, January 28 at 11:59 PM ET
{{custom_values.doe_l3_deadline_short}}        → 11:59 PM Wednesday
{{custom_values.doe_l3_enrollment_url}}        → https://societysecrets.com/level3
{{custom_values.doe_qa_call_link}}             → https://calendly.com/neothink/l3-qa
{{custom_values.doe_vip_session_date}}         → Monday, January 26
{{custom_values.doe_vip_session_time}}         → 4:00 PM Pacific / 7:00 PM Eastern
```

## Audience Notes

This workflow is ONLY for attendees who have NOT purchased Level 3:
- Workshop attendees without `level-3` tag
- Standard registrants who completed the workshop
- VIP members who haven't upgraded to L3

NOT for:
- Level 3 members (they receive 07-l3-purchase sequence)
- Non-attendees (no `doe-attended` tag)

## Messaging Strategy

| Email | Tone | Key Message |
|-------|------|-------------|
| Monday Afternoon | Value-focused | What Level 3 offers, no pressure |
| Q&A Call Offer | Helpful | Offer to answer questions personally |
| Tuesday Evening | Reminder | 24 hours left, pricing breakdown |
| Wednesday Afternoon | Urgency | Final hours (10h left), Welcome Party tonight |
| Wednesday 6pm | Countdown | 6 hours left, last chance |
| Wednesday 9pm | Final | 3 hours, respectful close |

## Template Files

| File | Purpose | GHL Name |
|------|---------|----------|
| monday-afternoon.html | L3 offer introduction, value proposition | `DOE 10 L3 Close Monday Afternoon` |
| qa-call-offer.html | Q&A call scheduling option | `DOE 10 L3 Close QA Call` |
| tuesday-evening.html | 24-hour countdown, pricing reminder | `DOE 10 L3 Close Tuesday Evening` |
| wednesday-afternoon.html | Final hours (10h), Welcome Party tonight | `DOE 10 L3 Close Wednesday Afternoon` |
| wednesday-6pm.html | 6 hours countdown | `DOE 10 L3 Close Wednesday 6h Left` |
| wednesday-gentle-reminder.html | Final message (3h), respectful close | `DOE 10 L3 Close Wednesday Final` |

## Testing Checklist

- [ ] Workflow exits when `level-3` tag added
- [ ] Each step checks for `level-3` tag before sending
- [ ] Q&A call booking link works
- [ ] L3 enrollment URL is correct
- [ ] All custom values render correctly
- [ ] SMS messages under 160 characters
- [ ] Test tag-based workflow exit
