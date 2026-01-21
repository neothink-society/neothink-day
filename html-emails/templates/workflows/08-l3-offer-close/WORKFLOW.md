# Workflow 09: L3 Offer Close Sequence

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
2. They should enter workflow 08-l3-purchase instead
3. They should NOT receive any more L3 sales emails

## Timing Reference

**Base Time (T=0):** Workshop Day 1 start (Saturday 11am ET / 8am PT)
**L3 Deadline:** Wednesday at midnight ET

| Step | Offset from T=0 | Actual Time | Content |
|------|-----------------|-------------|---------|
| 1 | +27h | Mon 2pm ET | monday-afternoon.html |
| 2 | +51h | Tue 2pm ET | qa-call-offer.html |
| 3 | +56h | Tue 7pm ET | tuesday-evening.html |
| 4 | +75h | Wed 2pm ET | wednesday-afternoon.html |
| 5 | +79h | Wed 6pm ET | wednesday-6pm.html |
| 6 | +82h | Wed 9pm ET | wednesday-gentle-reminder.html |

## Workflow Steps

### Step 1: Monday Afternoon (L3 Offer Introduction)
- **Wait:** Until Monday 2pm ET (+27h from T=0)
- **Condition:** Check contact does NOT have `level-3` tag
- **Action:** Send Email
- **Template:** `monday-afternoon.html`
- **Subject:** Level 3: What happens next

### Step 2: Q&A Call Offer (Tuesday Afternoon)
- **Wait:** Until Tuesday 2pm ET (+51h from T=0)
- **Condition:** Check contact does NOT have `level-3` tag
- **Action:** Send Email
- **Template:** `qa-call-offer.html`
- **Subject:** Questions about Level 3? Let's talk

### Step 3: Tuesday Evening (24 Hours Warning)
- **Wait:** Until Tuesday 7pm ET (+56h from T=0)
- **Condition:** Check contact does NOT have `level-3` tag
- **Action:** Send Email
- **Template:** `tuesday-evening.html`
- **Subject:** 24 hours left to join Level 3
- **Action:** Send SMS

### Step 4: Wednesday Afternoon (Final Hours - 10h)
- **Wait:** Until Wednesday 2pm ET (+75h from T=0)
- **Condition:** Check contact does NOT have `level-3` tag
- **Action:** Send Email
- **Template:** `wednesday-afternoon.html`
- **Subject:** Tonight at midnight: Level 3 closes

### Step 5: Wednesday 6pm (6 Hours)
- **Wait:** Until Wednesday 6pm ET (+79h from T=0)
- **Condition:** Check contact does NOT have `level-3` tag
- **Action:** Send Email
- **Template:** `wednesday-6pm.html`
- **Subject:** 6 hours left
- **Action:** Send SMS

### Step 6: Wednesday 9pm (Final Message)
- **Wait:** Until Wednesday 9pm ET (+82h from T=0)
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
{{custom_values.doe_l3_deadline}}              → Wednesday, January 28 at midnight ET
{{custom_values.doe_l3_deadline_short}}        → midnight Wednesday
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
- Level 3 members (they receive 08-l3-purchase sequence)
- Non-attendees (no `doe-attended` tag)

## Messaging Strategy

| Email | Tone | Key Message |
|-------|------|-------------|
| Monday Afternoon | Value-focused | What Level 3 offers, no pressure |
| Q&A Call Offer | Helpful | Offer to answer questions personally |
| Tuesday Evening | Reminder | 24 hours left, pricing breakdown |
| Wednesday Afternoon | Urgency | Final hours, Welcome Party tonight |
| Wednesday 6pm | Countdown | 6 hours left, last chance |
| Wednesday 9pm | Final | 3 hours, respectful close |

## Template Files

| File | Purpose |
|------|---------|
| monday-afternoon.html | L3 offer introduction, value proposition |
| qa-call-offer.html | Q&A call scheduling option |
| tuesday-evening.html | 24-hour countdown, pricing reminder |
| wednesday-afternoon.html | Final hours (10h), Welcome Party tonight |
| wednesday-6pm.html | 6 hours countdown |
| wednesday-gentle-reminder.html | Final message (3h), respectful close |

## Testing Checklist

- [ ] Workflow exits when `level-3` tag added
- [ ] Each step checks for `level-3` tag before sending
- [ ] Q&A call booking link works
- [ ] L3 enrollment URL is correct
- [ ] All custom values render correctly
- [ ] SMS messages under 160 characters
- [ ] Test tag-based workflow exit
