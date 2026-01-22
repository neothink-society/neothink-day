# Workflow 05: Mid-Event Broadcasts

## Overview
Real-time broadcasts sent DURING the workshop. Uses the **999-day wait pattern** for manual operator control.

> **Note:** Day 1 and Day 2 "opening" messages are handled automatically by
> `04-day-of-reminders` (day1-live.html and day2-live.html) using offset triggers.
> This workflow contains only manually-triggered mid-event broadcasts AFTER the opening.

---

## Key Concept: 999-Day Wait Pattern

Since GHL doesn't have a "manual trigger" option within a workflow, we use this pattern:

1. All contacts enter the workflow at event start
2. Each stage has a 999-day wait (essentially "wait forever")
3. Operator manually moves contacts to the next stage when ready
4. Bulk action: "Move to Stage X" for all contacts in workflow

This allows real-time control during the live event.

---

## Workflow Stages

### Day 1 Stages

| Stage | Template | Trigger Moment |
|-------|----------|----------------|
| 1 | `day1-wh-in-session.html` | Wallace Hamilton takes stage |
| 2 | `day1-wh-live-now.html` | WH is teaching (late joiner hook) |
| 3 | `day1-lunch-break.html` | Lunch break announced |
| 4 | `day1-back-from-lunch.html` | Returning from lunch |
| 5 | `day1-wealth-segment.html` | Wealth/FNE segment begins |
| 6 | `day1-end.html` | Day 1 complete |

### Day 2 Stages

| Stage | Template | Trigger Moment |
|-------|----------|----------------|
| 7 | `day2-mh-segment.html` | Mark Hamilton segment |
| 8 | `day2-lunch-break.html` | Day 2 lunch break |
| 9 | `day2-back-from-lunch.html` | Returning from lunch |
| 10 | `day2-integration.html` | Integration segment |
| 11 | `day2-end.html` | Day 2 complete |
| 12 | `day2-l3-offer.html` | Level 3 offer announced |

---

## GHL Setup Instructions

### Step 1: Create Multi-Stage Workflow
1. Go to **Automation > Workflows**
2. Click **Create Workflow**
3. Name: `DOE - Mid-Event Broadcasts`
4. Enable **Multi-Stage Workflow**

### Step 2: Create Stages
For each stage:
1. Add new stage
2. Action: Send appropriate email
3. Action: Send SMS (optional, see `workshop-live-sms.md`)
4. Action: **Wait** - 999 days

> **Note:** Stage 1 starts when Wallace Hamilton takes the stage (not at event open).
> The "we're live" opening message is handled automatically by 04-day-of-reminders.

### Step 4: Manual Stage Advancement
When ready to trigger the next broadcast:
1. Go to **Contacts** or **Workflow > Enrolled Contacts**
2. Filter by: In workflow "DOE - Mid-Event Broadcasts"
3. Select all contacts
4. Bulk action: **Move to Stage X**

---

## Operator Cheat Sheet

**During the event, use this quick reference:**

> Opening "We're live" messages are sent automatically by 04-day-of-reminders.
> Start manual broadcasts when WH takes the stage.

| Moment | Action |
|--------|--------|
| WH takes stage | Move all to Stage 1 |
| WH teaching (11:30+) | Move all to Stage 2 |
| Lunch break | Move all to Stage 3 |
| Return from lunch | Move all to Stage 4 |
| Wealth segment | Move all to Stage 5 |
| Day 1 ends | Move all to Stage 6 |
| MH segment (Day 2) | Move all to Stage 7 |
| Day 2 lunch | Move all to Stage 8 |
| Return from lunch | Move all to Stage 9 |
| Integration | Move all to Stage 10 |
| Day 2 ends | Move all to Stage 11 |
| L3 offer | Move all to Stage 12 |

---

## SMS Messages

> **Note:** Opening SMS for Day 1 and Day 2 are handled by 04-day-of-reminders.
> See `workshop-live-sms.md` for complete SMS messages for this workflow.

### Day 1 - WH Live Now
```
Neothink Society: Wallace Hamilton is LIVE NOW teaching about your Friday Night Essence! Don't miss this. Join: {{custom_values.doe_zoom_link}}
```

### Day 1 - Lunch Break
```
Neothink Society: Lunch break! Return at {{custom_values.doe_day_1_return_time}} for the Wealth Engine segment. Get some food, stay energized!
```

### Day 1 - Back from Lunch
```
Neothink Society: We're BACK! Wealth Engine segment starting NOW. This is where your financial breakthrough happens. Join: {{custom_values.doe_zoom_link}}
```

### Day 2 - L3 Offer
```
Neothink Society: Level 3 enrollment is NOW OPEN! The next level of your transformation. Details: {{custom_values.doe_l3_enrollment_url}}
```

---

## GHL Template Names

### Day 1 Broadcasts (Phase 05)

| File | GHL Template Name |
|------|-------------------|
| `day1-wh-in-session.html` | `DOE 05 Day 1 WH In Session` |
| `day1-wh-live-now.html` | `DOE 05 Day 1 WH Starting` |
| `day1-lunch-break.html` | `DOE 05 Day 1 Lunch Break` |
| `day1-back-from-lunch.html` | `DOE 05 Day 1 Back From Lunch` |
| `day1-wealth-segment.html` | `DOE 05 Day 1 Wealth Segment` |
| `day1-end.html` | `DOE 05 Day 1 End` |

### Day 2 Broadcasts (Phase 07)

| File | GHL Template Name |
|------|-------------------|
| `day2-mh-segment.html` | `DOE 07 Day 2 MH Segment` |
| `day2-lunch-break.html` | `DOE 07 Day 2 Lunch Break` |
| `day2-back-from-lunch.html` | `DOE 07 Day 2 Back From Lunch` |
| `day2-integration.html` | `DOE 07 Day 2 Integration` |
| `day2-end.html` | `DOE 07 Day 2 End` |
| `day2-l3-offer.html` | `DOE 07 Day 2 L3 Offer` |

---

## Testing Checklist

- [ ] Workflow has 12 stages configured
- [ ] Each stage has 999-day wait after email
- [ ] Stage 1 triggers when operator manually advances contacts
- [ ] Manual stage advancement works
- [ ] Bulk action "Move to Stage X" works for all contacts
- [ ] Custom values display correctly
- [ ] 04-day-of-reminders handles opening messages (T=0 and +25h)
