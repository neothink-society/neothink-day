# March 2026 DOE — SMS Sequence (Key Messages)

**Event:** Day of Enlightenment Workshop
**Dates:** March 14-15, 2026

**Day 1:** Saturday, March 14 — Doors open 7:00 AM Pacific / 10:00 AM Eastern
**Day 1:** Wallace takes stage 8:00 AM Pacific / 11:00 AM Eastern
**Day 2:** Sunday, March 15 — 8:00 AM Pacific / 11:00 AM Eastern

**Zoom:**
- Trigger link: {{trigger_link.bw3pFLlMkAQiQOlYB674}}
- Meeting ID: {{custom_values.doe_zoom_id}}
- Passcode: {{custom_values.doe_zoom_passcode}}

---

## GHL IF/ELSE WORKFLOW LOGIC

For all messages BEFORE the event starts (Friday evening, Saturday morning up to start time):

**In GHL workflow, add If/Else before EVERY SMS send step:**
- Condition: Contact has tag `doe march 2026 registered`
- **YES (registered)** → Send Version A — link goes to neothinkday.com/home
- **NO (not registered)** → Send Version B — link goes to neothinkday.com/register

**After event starts (Zoom link messages and beyond):** No if/else — everyone gets the Zoom trigger link.

---

## FRIDAY MORNING — 1 DAY OUT

**Send Time:** Friday, March 13, 2026 @ 9:00 AM PT / 12:00 PM ET
**Offset:** -23h
**Audience:** All pre-event sequence

### Version A — Has tag `doe march 2026 registered`
```
Neothink Society: Your Day of Enlightenment is tomorrow.

Sign into your dashboard today — confirm your access and download your workbook.

neothinkday.com/home

Doors open 10am Eastern / 7am Pacific.
```
**Character count:** ~157/160

---

### Version B — Does NOT have tag
```
Neothink Society: Your Day of Enlightenment is tomorrow.

Complete your registration now to access your dashboard and workbook.

neothinkday.com/register
```
**Character count:** ~138/160

---

## FRIDAY EVENING — 1 DAY OUT

**Send Time:** Friday, March 13, 2026 @ 4:00 PM PT / 7:00 PM ET
**Offset:** -16h
**Audience:** All pre-event sequence

### Version A — Has tag `doe march 2026 registered` (already registered)
```
Neothink Society: Tomorrow is the day.

Sign into your dashboard — everything you need for the weekend is waiting there.

neothinkday.com/home

Set your alarms. Doors open 10am Eastern / 7am Pacific.
```
**Character count:** ~151/160

---

### Version B — Does NOT have tag (not registered)
```
Neothink Society: Tomorrow is the day.

Complete your registration now to access your dashboard and be fully prepared.

neothinkday.com/register

Doors open 10am Eastern / 7am Pacific.
```
**Character count:** ~152/160

---

## SATURDAY MORNING — 2 HOURS BEFORE DOORS

**Send Time:** Saturday, March 14, 2026 @ 5:00 AM PT / 8:00 AM ET
**Offset:** -2h
**Audience:** All pre-event sequence

### Version A — Has tag `doe march 2026 registered`
```
Neothink Society: Today is the day.

Sign into your dashboard now — your Zoom link is waiting there.

neothinkday.com/home

Doors open 10am Eastern / 7am Pacific.
```
**Character count:** ~140/160

---

### Version B — Does NOT have tag
```
Neothink Society: Today is the day.

Sign in at neothinkday.com/register to complete registration and access your Zoom link.

Doors open 10am Eastern / 7am Pacific.
```
**Character count:** ~147/160

---

## SATURDAY ZOOM LINK — AT DOORS OPEN

**Send Time:** Saturday, March 14, 2026 @ 7:00 AM PT / 10:00 AM ET (doors open)
**Offset:** T=0 - 1h (or at 7am PT exactly)
**Audience:** All

*No if/else needed from this point forward — everyone gets the Zoom link.*

```
Neothink Society: DOORS ARE OPEN.

Join your Day of Enlightenment workshop now:
{{trigger_link.bw3pFLlMkAQiQOlYB674}}

ID: {{custom_values.doe_zoom_id}}
Pass: {{custom_values.doe_zoom_passcode}}

Workshop begins 11am Eastern / 8am Pacific SHARP.
```
**Character count:** ~190 — will split into 2 SMS segments (acceptable for day-of)

---

## SATURDAY WE'RE LIVE

**Send Time:** Saturday, March 14, 2026 @ 8:00 AM PT / 11:00 AM ET
**Offset:** T=0
**Audience:** All

```
Neothink Society: WE'RE LIVE.

If you're in the room — stay present. This is it.

If you're not in yet — join NOW:
{{trigger_link.bw3pFLlMkAQiQOlYB674}}

The opening has begun.
```
**Character count:** ~155 + link expansion (2 segments)

---

## SATURDAY DAY 1 END

**Send Time:** Saturday, March 14, 2026 — Evening (~5:00 PM PT / 8:00 PM ET)
**Offset:** +9h
**Audience:** All

```
Neothink Society: Day 1 complete.

You showed up. You stayed present. You did the work.

Rest well tonight.

Day 2 (Sunday): 11am Eastern / 8am Pacific. Same Zoom link.
```
**Character count:** ~148/160

---

## SUNDAY MORNING — 2 HOURS BEFORE DAY 2

**Send Time:** Sunday, March 15, 2026 @ 6:00 AM PT / 9:00 AM ET
**Offset:** +23h (from Saturday T=0 at 8:00 AM PT)
**Audience:** All pre-event sequence

### Version A — Has tag `doe march 2026 registered`
```
Neothink Society: Day 2 begins in 2 hours.

You showed up yesterday. Show up again today.

Sign into your dashboard for your Zoom link:
neothinkday.com/home

11am Eastern / 8am Pacific. Same Zoom link.
```
**Character count:** ~146/160

---

### Version B — Does NOT have tag
```
Neothink Society: Day 2 begins in 2 hours.

Register now to get your Zoom link for today's workshop:
neothinkday.com/register

11am Eastern / 8am Pacific.
```
**Character count:** ~138/160

---

## SUNDAY ZOOM LINK — AT DOORS OPEN

**Send Time:** Sunday, March 15, 2026 @ 8:00 AM PT / 11:00 AM ET
**Offset:** +24h
**Audience:** All

```
Neothink Society: Day 2 doors are open.

Join here:
{{trigger_link.bw3pFLlMkAQiQOlYB674}}

ID: {{custom_values.doe_zoom_id}}
Pass: {{custom_values.doe_zoom_passcode}}

We begin at 11am Eastern / 8am Pacific SHARP.
```
**Character count:** ~175 (2 segments — acceptable)

---

## COMPLETE SMS SCHEDULE

**T=0 = Saturday, March 14, 2026 @ 8:00 AM PT / 11:00 AM ET (workshop start)**
**Doors open = 7:00 AM PT / 10:00 AM ET (-1h)**

| # | Message | Audience | Day | Time (Pacific) | Offset |
|---|---------|----------|-----|----------------|--------|
| A1 | Fri Morning — Registered | Has registered tag | Fri Mar 13 | 9:00 AM | -23h |
| A2 | Fri Morning — Unregistered | No registered tag | Fri Mar 13 | 9:00 AM | -23h |
| B1 | Fri Evening — Registered | Has registered tag | Fri Mar 13 | 4:00 PM | -16h |
| B2 | Fri Evening — Unregistered | No registered tag | Fri Mar 13 | 4:00 PM | -16h |
| C1 | Sat Morning — Registered | Has registered tag | Sat Mar 14 | 5:00 AM | -2h |
| C2 | Sat Morning — Unregistered | No registered tag | Sat Mar 14 | 5:00 AM | -2h |
| C | Zoom Link (at doors open) | All | Sat Mar 14 | 7:00 AM | -1h |
| D | We're Live | All | Sat Mar 14 | 8:00 AM | T=0 |
| E | Day 1 End | All | Sat Mar 14 | ~5:00 PM | +9h |
| F1 | Day 2 Morning — Registered | Has registered tag | Sun Mar 15 | 6:00 AM | +23h |
| F2 | Day 2 Morning — Unregistered | No registered tag | Sun Mar 15 | 6:00 AM | +23h |
| G | Day 2 Zoom | All | Sun Mar 15 | 7:00 AM | +24h |

**TIMING NOTE:** Verify these send times don't conflict with existing sends already
configured in the pre-event sequence workflow before adding them. Check Saturday and
Sunday early morning slots especially — the workflow may already have sends in those windows.
