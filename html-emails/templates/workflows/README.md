# GHL Workflow Architecture
## Neothink Day of Enlightenment - Universal Event Automation

This folder contains a **reusable automation system** that works for ANY event date by using GHL custom values instead of hardcoded dates.

---

## Quick Start

### 1. Configure Custom Values in GHL

Before using these templates, set up the custom values in your GHL location:

1. Go to **Settings > Custom Values**
2. Add all values from `CUSTOM-VALUES.md`
3. Update values before each event

### 2. Import Templates

Each workflow folder contains:
- **HTML email templates** (copy into GHL Email Builder)
- **SMS copy** (copy into GHL SMS action)
- **WORKFLOW.md** (step-by-step GHL setup instructions)

### 3. Set Up Workflows

Follow the `WORKFLOW.md` in each folder to:
1. Create the workflow in GHL
2. Set triggers and timing
3. Configure email/SMS actions
4. Set up conditional logic (VIP vs non-VIP)

---

## Folder Structure

```
workflows/
├── README.md                    # This file
├── CUSTOM-VALUES.md             # All custom values to configure
├── GHL-TEMPLATE-NAMES.md        # GHL template naming guide
│
├── 01-registration/             # Trigger: On registration
├── 02-vip-purchase/             # Trigger: On VIP purchase (includes VIP Session)
├── 03-pre-event-sequence/       # Trigger: After registration
├── 04-day-of-reminders/         # Trigger: Offset from event start
├── 05-mid-event-broadcasts/     # Trigger: MANUAL (999-day wait)
├── 06-post-event-all/           # Trigger: After workshop ends
├── 07-l3-purchase/              # Trigger: On L3 purchase (includes Welcome Party)
├── 08-l3-offer-close/           # Trigger: Non-L3 attendees
│
└── _shared/                     # Shared components
    ├── header.html
    ├── footer.html
    └── styles.css
```

---

## Workflow Overview

| # | Workflow | Trigger | Key Features |
|---|----------|---------|--------------|
| 01 | Registration | Form submission | Confirmation + VIP upsell |
| 02 | VIP Purchase | VIP product purchase | Confirmation + Zoom BG + VIP Session reminders |
| 03 | Pre-Event | After registration | 30-day countdown sequence |
| 04 | Day-Of | Offset from T=0 | 4hr to +30min reminders |
| 05 | Mid-Event | Manual 999-day wait | Real-time broadcast control |
| 06 | Post-Event | `doe-attended` tag | Value sequence (5 days) |
| 07 | L3 Purchase | L3 product purchase | Confirmation + Welcome Party reminders |
| 08 | L3 Close | Non-L3 + post-event | Deadline sequence |

---

## Key Concepts

### Custom Values vs Hardcoded Dates

**Before (hardcoded):**
```html
<p>Join us Saturday, January 24, 2026 at 11:00 AM Eastern</p>
```

**After (custom values):**
```html
<p>Join us {{custom_values.doe_day_1_date}} at {{custom_values.doe_day_1_start_time}}</p>
```

### Offset Timing

All timing is based on **T=0 = Event Day 1 start time**.

| Offset | Meaning |
|--------|---------|
| `-30d 2h` | 30 days, 2 hours before event (9am ET when event at 11am ET) |
| `T=0` | Event start time |
| `+1d 1h` | 1 day, 1 hour after start (Day 2 start at 12pm) |
| `+10h` | 10 hours after start (Sunday night) |

### 999-Day Wait Pattern (Mid-Event)

For real-time manual broadcasts during the workshop:

1. Contacts enter workflow at event start
2. Each stage has a 999-day wait
3. Operator manually moves contacts to next stage
4. Bulk action: "Move to Stage X" for all contacts

---

## Before Each Event

1. **Update Custom Values** in GHL with new dates/times
2. **Update Zoom Link/ID/Passcode** custom values
3. **Test** one email with custom value preview
4. **Verify** workflows are active

---

## Tag Reference

| Tag | Added When |
|-----|------------|
| `doe-registered` | On registration |
| `vip` | On VIP purchase |
| `doe-attended` | After workshop (manual or automation) |
| `level-3` | On L3 purchase |

---

## Support

Questions? Contact support@neothink.com
