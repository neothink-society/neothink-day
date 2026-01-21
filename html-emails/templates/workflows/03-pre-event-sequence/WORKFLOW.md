# Workflow 03: Pre-Event Sequence

## Overview
Countdown email sequence from registration to event start. Uses offset-based timing relative to event start (T=0).

---

## Trigger
- **Type:** Added from Registration workflow (Workflow 01)
- **Stop Condition:** Event starts or `doe-attended` tag added

---

## Timing Reference

**T=0 = Event Day 1 Start Time** (e.g., 11:00 AM Eastern)

To send at 9am Eastern when event starts at 11am Eastern:
- Offset difference = 2 hours
- Use offset: `-Xd 2h` (X days, 2 hours before)

---

## Workflow Steps

| Step | Offset | Template | Subject Line |
|------|--------|----------|--------------|
| 1 | -30d 2h | `countdown-30days.html` | Your transformation begins in 30 days |
| 2 | -25d 2h | `countdown-25days.html` | 25 days until everything changes |
| 3 | -20d 2h | `countdown-20days.html` | 20 days: Start preparing your mind |
| 4 | -14d 2h | `countdown-14days.html` | 2 weeks from now, you'll be different |
| 5 | -10d 2h | `countdown-10days.html` | 10 days: Time to get serious |
| 6 | -9d 2h | `countdown-9days.html` | 9 days: Have you started reading? |
| 7 | -7d 2h | `countdown-7days.html` | One week away |
| 8 | -5d 2h | `countdown-5days.html` | 5 days: Block your calendar |
| 9 | -4d 2h | `countdown-4days.html` | 4 days: The countdown is real |
| 10 | -3d 2h | `countdown-3days.html` OR `countdown-3days-vip.html` | 3 days: Final preparations |
| 11 | -2d 2h | `countdown-2days.html` | Tomorrow is the day before |
| 12 | -23h | `countdown-1day-morning.html` | Tomorrow. This is it. |
| 13 | -16h | `countdown-1day-evening.html` | See you in the morning |

---

## GHL Setup Instructions

### Step 1: Create the Workflow
1. Go to **Automation > Workflows**
2. Click **Create Workflow**
3. Name: `DOE - Pre-Event Sequence`
4. Trigger: **Workflow Added** (from Registration workflow)

### Step 2: Configure Timing
For each email step:
1. Add action: **Wait**
2. Set wait type: **Specific Date/Time** or **Wait Until**
3. Calculate: Event start date minus offset

**Alternative: Use Event-Based Offset**
If using a custom date field for event date:
1. Set wait: Until `{{custom_values.doe_day1_date}}` minus X days at 9:00 AM

### Step 3: VIP Branch at 3 Days
1. Add action: **If/Else Branch**
2. Condition: Has tag `vip`
3. If Yes: Send `countdown-3days-vip.html`
4. If No: Send `countdown-3days.html`

### Step 4: Stop Condition
Add workflow settings:
- Stop if tag `doe-attended` is added
- Stop if date > event end date

---

## Email Templates

All templates use custom values for dates. Key replacements:
- `{{custom_values.doe_event_dates}}` - January 24-25, 2026
- `{{custom_values.doe_day1_date}}` - Saturday, January 24, 2026
- `{{custom_values.doe_day2_date}}` - Sunday, January 25, 2026
- `{{custom_values.doe_day1_start_time_full}}` - All time zones

---

## SMS Messages

### 7 Days Before
```
Neothink Society: One week until Day of Enlightenment! Have you read pages 1-50 of The Secret Manuscript? Your breakthrough depends on it. See you {{custom_values.doe_day1_date_short}}!
```

### 1 Day Before (Morning)
```
Neothink Society: TOMORROW is the Day of Enlightenment! {{custom_values.doe_day1_start_time}}. Set your alarm. Prepare your space. This is what you've been waiting for.
```

### 1 Day Before (Evening)
```
Neothink Society: See you in the morning! Day of Enlightenment starts {{custom_values.doe_day1_start_time}}. Get some rest—tomorrow changes everything.
```

---

## Offset Calculation Table

| Days Before | Send at 9am ET | Offset from T=0 |
|-------------|----------------|-----------------|
| 30 | Dec 25 | -30d 2h |
| 25 | Dec 30 | -25d 2h |
| 20 | Jan 4 | -20d 2h |
| 14 | Jan 10 | -14d 2h |
| 10 | Jan 14 | -10d 2h |
| 9 | Jan 15 | -9d 2h |
| 7 | Jan 17 | -7d 2h |
| 5 | Jan 19 | -5d 2h |
| 4 | Jan 20 | -4d 2h |
| 3 | Jan 21 | -3d 2h |
| 2 | Jan 22 | -2d 2h |
| 1 (morning) | Jan 23 12pm ET | -23h |
| 1 (evening) | Jan 23 7pm ET | -16h |

*Dates shown for January 24, 2026 event*

---

## Testing Checklist

- [ ] Contacts enter sequence from Registration workflow
- [ ] Emails send at correct offsets
- [ ] VIP branch works correctly at 3 days
- [ ] Custom values display correctly
- [ ] Sequence stops when event starts
