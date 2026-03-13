# March 2026 DOE — SMS Sequence (3-Branch)

**Event:** Day of Enlightenment Workshop
**Dates:** March 14-15, 2026

**Day 1:** Saturday, March 14 — Doors open early, Workshop starts 8:00 AM Pacific / 11:00 AM Eastern
**Day 2:** Sunday, March 15 — Workshop starts 8:00 AM Pacific / 11:00 AM Eastern

**Start Time (all zones):** 8am Pacific / 9am Mountain / 10am Central / 11am Eastern

**Zoom:**
- Trigger link: {{trigger_link.bw3pFLlMkAQiQOlYB674}}
- Meeting ID: {{custom_values.doe_zoom_id}}
- Passcode: {{custom_values.doe_zoom_passcode}}

---

## GHL 3-BRANCH WORKFLOW LOGIC

**For all messages BEFORE doors open (Friday + Saturday morning):**

In GHL workflow, add If/Else branches before EVERY SMS send step:

**Branch 1 — VIP**
- Condition: Contact has tag `level 2 workshop vip`
- VIP-exclusive messaging. They're set. Link → neothinkday.com/home

**Branch 2 — Signed in (not VIP)**
- Condition: Contact has tag `doe march 2026 - signin` AND does NOT have tag `level 2 workshop vip`
- Encourage VIP upgrade. Links → neothinkday.com/home + neothinkday.com/vip-upgrade

**Branch 3 — Not signed in**
- Condition: Does NOT have tag `level 2 workshop vip` AND does NOT have tag `doe march 2026 - signin`
- "Sign in to access your event dashboard." Link → neothinkday.com (form → thank you page VIP upsell)

**After doors open (Zoom link messages and beyond):** No branching — everyone gets the same Zoom link.

---

## FRIDAY MORNING — 1 DAY OUT

**Send Time:** Friday, March 13, 2026 @ 9:00 AM PT / 12:00 PM ET
**Offset:** -23h
**Audience:** All pre-event sequence

### Branch 1 — VIP (`level 2 workshop vip`)
```
Neothink Society: {{contact.first_name}}, your VIP Day of Enlightenment experience begins tomorrow.

Your dashboard is ready with everything you need:
neothinkday.com/home

Workshop starts 11am Eastern / 8am Pacific.
```
**Character count:** ~160/160

---

### Branch 2 — Signed in, not VIP (`doe march 2026 - signin`)
```
Neothink Society: Your Day of Enlightenment is tomorrow.

Your dashboard is ready:
neothinkday.com/home

Want the full VIP experience? Upgrade now:
neothinkday.com/vip-upgrade
```
**Character count:** ~158/160

---

### Branch 3 — Not signed in (no tags)
```
Neothink Society: Your Day of Enlightenment is tomorrow.

Sign in now to access your event dashboard and workbook:
neothinkday.com

Workshop starts 11am Eastern / 8am Pacific.
```
**Character count:** ~155/160

---

## FRIDAY EVENING — 1 DAY OUT

**Send Time:** Friday, March 13, 2026 @ 4:00 PM PT / 7:00 PM ET
**Offset:** -16h
**Audience:** All pre-event sequence

### Branch 1 — VIP (`level 2 workshop vip`)
```
Neothink Society: Tomorrow is the day, {{contact.first_name}}.

Your VIP dashboard has everything you need for the weekend:
neothinkday.com/home

Set your alarm. 11am Eastern / 8am Pacific.
```
**Character count:** ~158/160

---

### Branch 2 — Signed in, not VIP (`doe march 2026 - signin`)
```
Neothink Society: Tomorrow is the day.

Your dashboard is waiting:
neothinkday.com/home

Upgrade to VIP before tomorrow and get the full experience:
neothinkday.com/vip-upgrade
```
**Character count:** ~157/160

---

### Branch 3 — Not signed in (no tags)
```
Neothink Society: Tomorrow is the day.

Sign in to access your event dashboard — everything you need is waiting:
neothinkday.com

Set your alarm. 11am Eastern / 8am Pacific.
```
**Character count:** ~155/160

---

## SATURDAY MORNING — PRE-EVENT

**Send Time:** Saturday, March 14, 2026 @ 5:00 AM PT / 8:00 AM ET
**Offset:** -3h
**Audience:** All pre-event sequence

### Branch 1 — VIP (`level 2 workshop vip`)
```
Neothink Society: Today is the day, {{contact.first_name}}.

Your VIP Zoom link and materials are on your dashboard:
neothinkday.com/home

We start at 11am Eastern / 8am Pacific.
```
**Character count:** ~155/160

---

### Branch 2 — Signed in, not VIP (`doe march 2026 - signin`)
```
Neothink Society: Today is the day.

Your Zoom link is on your dashboard:
neothinkday.com/home

Still time to upgrade to VIP:
neothinkday.com/vip-upgrade

We start at 11am Eastern / 8am Pacific.
```
**Character count:** ~160/160

---

### Branch 3 — Not signed in (no tags)
```
Neothink Society: Today is the day.

Sign in now to get your Zoom link and access your dashboard:
neothinkday.com

We start at 11am Eastern / 8am Pacific.
```
**Character count:** ~140/160

---

## SATURDAY ZOOM LINK — AT DOORS OPEN

**Send Time:** Saturday, March 14, 2026 @ 7:30 AM PT / 10:30 AM ET (doors open)
**Offset:** -30m
**Audience:** All (no branching)

```
Neothink Society: DOORS ARE OPEN.

Join your Day of Enlightenment workshop now:
{{trigger_link.bw3pFLlMkAQiQOlYB674}}

ID: {{custom_values.doe_zoom_id}}
Pass: {{custom_values.doe_zoom_passcode}}

Workshop begins 11am Eastern / 8am Pacific.
```
**Character count:** ~190 — will split into 2 SMS segments (acceptable for day-of)

---

## SATURDAY WE'RE LIVE

**Send Time:** Saturday, March 14, 2026 @ 8:00 AM PT / 11:00 AM ET
**Offset:** T=0
**Audience:** All (no branching)

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
**Audience:** All (no branching)

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
**Offset:** +22h (from Saturday T=0 at 8:00 AM PT)
**Audience:** All pre-event sequence

### Branch 1 — VIP (`level 2 workshop vip`)
```
Neothink Society: Day 2 in 2 hours, {{contact.first_name}}.

Your VIP dashboard has your Zoom link:
neothinkday.com/home

11am Eastern / 8am Pacific. Same Zoom link.
```
**Character count:** ~140/160

---

### Branch 2 — Signed in, not VIP (`doe march 2026 - signin`)
```
Neothink Society: Day 2 begins in 2 hours.

You showed up yesterday. Show up again today.

Your Zoom link:
neothinkday.com/home

Upgrade to VIP before Day 2:
neothinkday.com/vip-upgrade
```
**Character count:** ~158/160

---

### Branch 3 — Not signed in (no tags)
```
Neothink Society: Day 2 begins in 2 hours.

Sign in now to get your Zoom link for today:
neothinkday.com

11am Eastern / 8am Pacific.
```
**Character count:** ~122/160

---

## SUNDAY ZOOM LINK — AT START

**Send Time:** Sunday, March 15, 2026 @ 8:00 AM PT / 11:00 AM ET
**Offset:** +24h
**Audience:** All (no branching)

```
Neothink Society: Day 2 is starting.

Join here:
{{trigger_link.bw3pFLlMkAQiQOlYB674}}

ID: {{custom_values.doe_zoom_id}}
Pass: {{custom_values.doe_zoom_passcode}}

We begin at 11am Eastern / 8am Pacific.
```
**Character count:** ~175 (2 segments — acceptable)

---

## COMPLETE SMS SCHEDULE

**T=0 = Saturday, March 14, 2026 @ 8:00 AM PT / 11:00 AM ET (workshop start)**
**Doors open = 7:30 AM PT / 10:30 AM ET (-30m)**

| # | Message | Branch | Day | Time (Pacific) | Offset |
|---|---------|--------|-----|----------------|--------|
| A1 | Fri Morning — VIP | `level 2 workshop vip` | Fri Mar 13 | 9:00 AM | -23h |
| A2 | Fri Morning — Signed in | `doe march 2026 - signin` | Fri Mar 13 | 9:00 AM | -23h |
| A3 | Fri Morning — Not signed in | No tags | Fri Mar 13 | 9:00 AM | -23h |
| B1 | Fri Evening — VIP | `level 2 workshop vip` | Fri Mar 13 | 4:00 PM | -16h |
| B2 | Fri Evening — Signed in | `doe march 2026 - signin` | Fri Mar 13 | 4:00 PM | -16h |
| B3 | Fri Evening — Not signed in | No tags | Fri Mar 13 | 4:00 PM | -16h |
| C1 | Sat Morning — VIP | `level 2 workshop vip` | Sat Mar 14 | 5:00 AM | -3h |
| C2 | Sat Morning — Signed in | `doe march 2026 - signin` | Sat Mar 14 | 5:00 AM | -3h |
| C3 | Sat Morning — Not signed in | No tags | Sat Mar 14 | 5:00 AM | -3h |
| D | Zoom Link (doors open) | All | Sat Mar 14 | 7:30 AM | -30m |
| E | We're Live | All | Sat Mar 14 | 8:00 AM | T=0 |
| F | Day 1 End | All | Sat Mar 14 | ~5:00 PM | +9h |
| G1 | Sun Morning — VIP | `level 2 workshop vip` | Sun Mar 15 | 6:00 AM | +22h |
| G2 | Sun Morning — Signed in | `doe march 2026 - signin` | Sun Mar 15 | 6:00 AM | +22h |
| G3 | Sun Morning — Not signed in | No tags | Sun Mar 15 | 6:00 AM | +22h |
| H | Day 2 Zoom | All | Sun Mar 15 | 8:00 AM | +24h |
