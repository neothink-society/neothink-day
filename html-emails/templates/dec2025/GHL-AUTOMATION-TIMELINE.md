# GoHighLevel Automation Timeline
## Day of Enlightenment — December 2025

**EVENT START:** Saturday, December 6, 2025 @ 8:00 AM Pacific / 11:00 AM Eastern
**This is T=0 for all timing calculations**

---

## QUICK REFERENCE: KEY TIMESTAMPS

| Event | Pacific | Eastern | Offset |
|-------|---------|---------|--------|
| **Event Start (Day 1)** | Sat Dec 6, 8:00 AM | Sat Dec 6, 11:00 AM | **T = 0** |
| VIP Deadline | Sat Dec 6, 9:00 AM | Sat Dec 6, 12:00 PM | T + 1 hr |
| Day 1 Ends | Sat Dec 6, 5:00 PM | Sat Dec 6, 8:00 PM | T + 9 hrs |
| **Day 2 Starts** | Sun Dec 7, 9:00 AM | Sun Dec 7, 12:00 PM | **T + 25 hrs** |
| Day 2 Ends / L3 Opens | Sun Dec 7, 5:00 PM | Sun Dec 7, 8:00 PM | T + 33 hrs |
| **VIP Session** | Mon Dec 8, 3:00 PM | Mon Dec 8, 6:00 PM | **T + 55 hrs** |
| **Welcome Party** | Wed Dec 10, 4:00 PM | Wed Dec 10, 7:00 PM | **T + 104 hrs** |
| **L3 Deadline** | Wed Dec 10, 9:00 PM | Thu Dec 11, 12:00 AM | **T + 109 hrs** |

---

## LEGEND

- **[E]** = Email
- **[S]** = SMS
- **Offset** = Time before (-) or after (+) T=0
- Offset format: `-Xd Yh` = X days Y hours before, `+Xd Yh` = X days Y hours after

---

# PHASE 1: TRIGGER-BASED (Anytime)

These fire based on actions, not scheduled times.

| # | Type | Message | Trigger | Condition |
|---|------|---------|---------|-----------|
| 1 | [E] | `registration-confirmation.html` | On registration | All |
| 2 | [S] | Registration Confirmation | On registration | All |
| 3 | [E] | `welcome-confirmation.html` | 10 min after registration | All |
| 4 | [E] | `vip-confirmation.html` | On VIP purchase | VIP |
| 5 | [S] | VIP Confirmation | On VIP purchase | VIP |
| 6 | [E] | `vip-zoom-background.html` | After VIP confirm | VIP |
| 7 | [S] | VIP Zoom Background | After VIP confirm | VIP |
| 8 | [E] | `level3-confirmation.html` | On L3 purchase | L3 |
| 9 | [S] | L3 Confirmation | On L3 purchase | L3 |

**Note:** L3 purchase triggers enrollment into Welcome Party sequence and removal from L3 Deadline sequence.

---

# PHASE 2: PRE-EVENT COUNTDOWN

## 30 Days Before → 1 Day Before

**Note:** All pre-event emails send at **9:00 AM Pacific / 12:00 PM Eastern** unless otherwise noted.

### Weeks 4-3: Seed Planting (Days 30-15)

| # | Type | Message | Date | Time (PT/ET) | Offset | Condition |
|---|------|---------|------|--------------|--------|-----------|
| 1 | [E] | `preparation-30days.html` | Thu Nov 6 | 9am PT / 12pm ET | **-29d 23h** | All |
| 2 | [S] | 30 Days Out | Thu Nov 6 | 9am PT / 12pm ET | **-29d 23h** | All |
| 3 | [E] | `preparation-25days.html` | Tue Nov 11 | 9am PT / 12pm ET | **-24d 23h** | All |
| 4 | [S] | 25 Days Out | Tue Nov 11 | 9am PT / 12pm ET | **-24d 23h** | All |
| 5 | [E] | `preparation-20days.html` | Sun Nov 16 | 9am PT / 12pm ET | **-19d 23h** | All |
| 6 | [S] | 20 Days Out | Sun Nov 16 | 9am PT / 12pm ET | **-19d 23h** | All |

### Week 2: Foundation Building (Days 14-8)

| # | Type | Message | Date | Time (PT/ET) | Offset | Condition |
|---|------|---------|------|--------------|--------|-----------|
| 7 | [E] | `preparation-14days.html` | Sat Nov 22 | 9am PT / 12pm ET | **-13d 23h** | All |
| 8 | [S] | 14 Days Out | Sat Nov 22 | 9am PT / 12pm ET | **-13d 23h** | All |
| 9 | [E] | `preparation-10days.html` | Wed Nov 26 | 9am PT / 12pm ET | **-9d 23h** | All |
| 10 | [S] | 10 Days Out | Wed Nov 26 | 9am PT / 12pm ET | **-9d 23h** | All |
| 11 | [E] | `preparation-9days.html` | Thu Nov 27 | 9am PT / 12pm ET | **-8d 23h** | All |
| 12 | [S] | 9 Days Out | Thu Nov 27 | 9am PT / 12pm ET | **-8d 23h** | All |

### Week 1: Momentum Building (Days 7-1)

| # | Type | Message | Date | Time (PT/ET) | Offset | Condition |
|---|------|---------|------|--------------|--------|-----------|
| 13 | [E] | `preparation-7days.html` | Sat Nov 29 | 9am PT / 12pm ET | **-6d 23h** | All |
| 14 | [S] | 7 Days Out | Sat Nov 29 | 9am PT / 12pm ET | **-6d 23h** | All |
| 15 | [E] | `preparation-5days.html` | Mon Dec 1 | 9am PT / 12pm ET | **-4d 23h** | All |
| 16 | [S] | 5 Days Out | Mon Dec 1 | 9am PT / 12pm ET | **-4d 23h** | All |
| 17 | [E] | `preparation-4days.html` | Tue Dec 2 | 9am PT / 12pm ET | **-3d 23h** | All |
| 18 | [S] | 4 Days Out | Tue Dec 2 | 9am PT / 12pm ET | **-3d 23h** | All |
| 19 | [E] | `preparation-3days.html` | Wed Dec 3 | 9am PT / 12pm ET | **-2d 23h** | Non-VIP |
| 20 | [E] | `preparation-3days-vip.html` | Wed Dec 3 | 9am PT / 12pm ET | **-2d 23h** | VIP |
| 21 | [S] | 3 Days (Non-VIP) | Wed Dec 3 | 9am PT / 12pm ET | **-2d 23h** | Non-VIP |
| 22 | [S] | 3 Days (VIP) | Wed Dec 3 | 9am PT / 12pm ET | **-2d 23h** | VIP |
| 23 | [E] | `preparation-2days.html` | Thu Dec 4 | 9am PT / 12pm ET | **-1d 23h** | All |
| 24 | [S] | 2 Days (Non-VIP) | Thu Dec 4 | 9am PT / 12pm ET | **-1d 23h** | Non-VIP |
| 25 | [S] | 2 Days (VIP) | Thu Dec 4 | 9am PT / 12pm ET | **-1d 23h** | VIP |
| 26 | [E] | `preparation-1day.html` | Fri Dec 5 | 4pm PT / 7pm ET | **-16h** | All |
| 27 | [S] | 1 Day (Non-VIP) | Fri Dec 5 | 4pm PT / 7pm ET | **-16h** | Non-VIP |
| 28 | [S] | 1 Day (VIP) | Fri Dec 5 | 4pm PT / 7pm ET | **-16h** | VIP |

---

# PHASE 3: DAY 1 COUNTDOWN (Sat Dec 6 Morning)

| # | Type | Message | Time (ET) | Offset | Condition |
|---|------|---------|-----------|--------|-----------|
| 1 | [E] | `day1-countdown-2hr.html` | 9:00 AM | **-2h** | All |
| 2 | [S] | 2 Hours Until Event | 9:00 AM | **-2h** | All |
| 3 | [E] | `day-of.html` | 10:00 AM | **-1h** | All |
| 4 | [E] | `day1-countdown-1hr.html` | 10:00 AM | **-1h** | All |
| 5 | [S] | Zoom Link Delivery | 10:00 AM | **-1h** | All |
| 6 | [E] | `day1-countdown-30min.html` | 10:30 AM | **-30m** | All |
| 7 | [S] | Doors Are Open | 10:30 AM | **-30m** | All |
| 8 | [E] | `day1-countdown-live.html` | 11:00 AM | **T = 0** | All |
| 9 | [S] | WE'RE LIVE | 11:00 AM | **T = 0** | All |

---

# PHASE 4: DAY 1 WORKSHOP (Live Triggers)

**These are MANUAL triggers** sent when specific moments happen live.

| # | Type | Message | Trigger | ~Time (ET) | Offset | Condition |
|---|------|---------|---------|------------|--------|-----------|
| 1 | [E] | `01-day1-opening.html` | WH takes stage | 11:00 AM | T=0 | All |
| 2 | [S] | WH Takes Stage | WH takes stage | 11:00 AM | T=0 | All |
| 3 | [E] | `01b-day1-wh-in-session.html` | Mid-morning | 11:30 AM | +30m | All |
| 4 | [S] | WH In Session | Mid-morning | 11:30 AM | +30m | All |
| 5 | [E] | `01c-day1-wh-live-now.html` | Anytime D1 | Variable | — | All |
| 6 | [S] | WH Live Now | Anytime D1 | Variable | — | All |
| 7 | [E] | `02-day1-lunch-break.html` | Lunch starts | 1:00 PM | +2h | All |
| 8 | [S] | Day 1 Lunch Break | Lunch starts | 1:00 PM | +2h | All |
| 9 | [E] | `03-day1-back-from-lunch.html` | After lunch | 2:00 PM | +3h | All |
| 10 | [S] | Back from Lunch | After lunch | 2:00 PM | +3h | All |
| 11 | [E] | `04-day1-wealth-segment.html` | Wealth segment | 3:00 PM | +4h | All |
| 12 | [S] | Wealth Segment | Wealth segment | 3:00 PM | +4h | All |
| 13 | [E] | `05-day1-end.html` | Day 1 ends | 8:00 PM | +9h | All |
| 14 | [S] | Day 1 Complete | Day 1 ends | 8:00 PM | +9h | All |

---

# PHASE 5: DAY 2 COUNTDOWN (Sun Dec 7 Morning)

| # | Type | Message | Time (ET) | Offset | Condition |
|---|------|---------|-----------|--------|-----------|
| 1 | [E] | `day2-countdown-2hr.html` | 10:00 AM | **+23h** | All |
| 2 | [S] | Day 2 - 2 Hours | 10:00 AM | **+23h** | All |
| 3 | [E] | `day2-countdown-45min.html` | 11:15 AM | **+1d 15m** | All |
| 4 | [S] | Day 2 - 45 Minutes | 11:15 AM | **+1d 15m** | All |
| 5 | [E] | `day2-countdown-15min.html` | 11:45 AM | **+1d 45m** | All |
| 6 | [S] | Doors Open | 11:45 AM | **+1d 45m** | All |
| 7 | [E] | `day2-countdown-live.html` | 12:00 PM | **+1d 1h** | All |
| 8 | [S] | Day 2 Is LIVE | 12:00 PM | **+1d 1h** | All |

---

# PHASE 6: DAY 2 WORKSHOP (Live Triggers)

| # | Type | Message | Trigger | ~Time (ET) | Offset | Condition |
|---|------|---------|---------|------------|--------|-----------|
| 1 | [E] | `06-day2-opening.html` | D2 starts | 12:00 PM | +1d 1h | All |
| 2 | [S] | Day 2 Opening | D2 starts | 12:00 PM | +1d 1h | All |
| 3 | [E] | `07-day2-mh-segment.html` | MH on stage | 1:00 PM | +1d 2h | All |
| 4 | [S] | Mark Hamilton on Stage | MH on stage | 1:00 PM | +1d 2h | All |
| 5 | [E] | `08-day2-lunch-break.html` | Lunch starts | 2:00 PM | +1d 3h | All |
| 6 | [S] | Day 2 Lunch Break | Lunch starts | 2:00 PM | +1d 3h | All |
| 7 | [E] | `09-day2-back-from-lunch.html` | After lunch | 3:00 PM | +1d 4h | All |
| 8 | [S] | Final Session | After lunch | 3:00 PM | +1d 4h | All |
| 9 | [E] | `10-day2-integration.html` | Integration | 4:00 PM | +1d 5h | All |
| 10 | [S] | Integration Segment | Integration | 4:00 PM | +1d 5h | All |
| 11 | [E] | `12-level3-segment.html` | L3 announced | 6:00 PM | +1d 7h | All |
| 12 | [S] | L3 Enrollment Open | L3 announced | 6:00 PM | +1d 7h | All |
| 13 | [E] | `11-day2-end.html` | Workshop ends | 8:00 PM | +1d 9h | All |
| 14 | [S] | Workshop Complete | Workshop ends | 8:00 PM | +1d 9h | All |
| 15 | [E] | `day2-complete-level3.html` | Evening | 8:00 PM | +1d 9h | Non-L3 |

---

# PHASE 6B: SUNDAY NIGHT ANCHOR (Sun Dec 7)

**Purpose:** Bridge the fragile post-event moment. Attendees are processing, vulnerable to doubt.

| # | Type | Message | Time (ET) | Offset | Condition |
|---|------|---------|-----------|--------|-----------|
| 1 | [E] | `sunday-night-anchor.html` | 10:00 PM | **+1d 11h** | All |
| 2 | [S] | Sunday Night Anchor | 10:00 PM | **+1d 11h** | All |

**Note:** This is a pure reinforcement message, not promotional. Addresses the "Silent Sunday Night" gap identified in journey analysis.

---

# PHASE 7: MONDAY MORNING AFTER (Mon Dec 8)

## Morning After + L3 Follow-up Sequence

| # | Type | Message | Time (ET) | Offset | Condition |
|---|------|---------|-----------|--------|-----------|
| 1 | [E] | `12-morning-after.html` | 9:00 AM | **+1d 22h** | All (segmented) |
| 2 | [S] | Morning After (L2) | 9:00 AM | **+1d 22h** | L2 non-VIP, non-L3 |
| 3 | [S] | Morning After (VIP) | 9:00 AM | **+1d 22h** | VIP only |
| 4 | [S] | Morning After (L3) | 9:00 AM | **+1d 22h** | L3 only |
| 5 | [E] | `level3-followup-morning.html` | 9:00 AM | **+1d 22h** | Non-L3 |
| 6 | [S] | L3 Follow-up Morning | 9:00 AM | **+1d 22h** | Non-L3 |
| 7 | [E] | `level3-followup-midday.html` | 2:00 PM | **+2d 3h** | Non-L3 |
| 8 | [S] | L3 Follow-up Midday | 2:00 PM | **+2d 3h** | Non-L3 |
| 9 | [E] | `level3-followup-afternoon.html` | 7:00 PM | **+2d 8h** | Non-L3 |
| 10 | [S] | L3 Follow-up Afternoon | 7:00 PM | **+2d 8h** | Non-L3 |
| 11 | [E] | `level3-ascend.html` | After VIP session | 9:00 PM | **+2d 10h** | Non-L3 |

---

# PHASE 8: VIP SESSION (Mon Dec 8)

| # | Type | Message | Time (ET) | Offset | Condition |
|---|------|---------|-----------|--------|-----------|
| 1 | [E] | `vip-session-reminder.html` | 9:00 AM | **+1d 22h** | VIP + L3 |
| 2 | [S] | VIP Session Morning | 9:00 AM | **+1d 22h** | VIP + L3 |
| 3 | [E] | `vip-session-1hour.html` | 5:00 PM | **+2d 6h** | VIP + L3 |
| 4 | [S] | VIP Session 30 Min | 5:30 PM | **+2d 6h 30m** | VIP + L3 |
| 5 | [E] | `vip-session-live.html` | 6:00 PM | **+2d 7h** | VIP + L3 |
| 6 | [S] | VIP Session LIVE | 6:00 PM | **+2d 7h** | VIP + L3 |

---

# PHASE 9: VIP RECORDING (Tue Dec 9)

| # | Type | Message | Time (ET) | Offset | Condition |
|---|------|---------|-----------|--------|-----------|
| 1 | [E] | `vip-session-recording.html` | 10:00 AM | **+2d 23h** | VIP + L3 |
| 2 | [S] | VIP Recording Available | 10:00 AM | **+2d 23h** | VIP + L3 |

---

# PHASE 10: L3 DEADLINE SEQUENCE (Tue-Wed Dec 9-10)

**Audience:** Non-L3 only (people who haven't enrolled yet)

## Tuesday, December 9

| # | Type | Message | Time (ET) | Offset | Condition |
|---|------|---------|-----------|--------|-----------|
| 1 | [E] | `01-tuesday-morning.html` | 9:00 AM | **+2d 22h** | Non-L3 |
| 2 | [S] | L3 - 24 Hours | 9:00 AM | **+2d 22h** | Non-L3 |
| 3 | [E] | `02-tuesday-afternoon.html` | 2:00 PM | **+3d 3h** | Non-L3 |
| 4 | [S] | L3 - What 3 Days Gives | 2:00 PM | **+3d 3h** | Non-L3 |
| 5 | [E] | `03-tuesday-evening.html` | 8:00 PM | **+3d 9h** | Non-L3 |
| 6 | [S] | L3 - Last Night | 8:00 PM | **+3d 9h** | Non-L3 |

## Wednesday, December 10

| # | Type | Message | Time (ET) | Offset | Condition |
|---|------|---------|-----------|--------|-----------|
| 7 | [E] | `04-wednesday-morning.html` | 9:00 AM | **+3d 22h** | Non-L3 |
| 8 | [S] | L3 - Today Is The Day | 9:00 AM | **+3d 22h** | Non-L3 |
| 9 | [E] | `05-wednesday-afternoon.html` | 3:00 PM | **+4d 4h** | Non-L3 |
| 10 | [S] | L3 - Hours Left | 3:00 PM | **+4d 4h** | Non-L3 |
| 11 | [E] | `06-wednesday-final.html` | 11:00 PM | **+4d 12h** | Non-L3 |
| 12 | [S] | L3 - Final Note | 11:00 PM | **+4d 12h** | Non-L3 |

### ⚠️ DEADLINE: Thursday Dec 11, 12:00 AM ET (+4d 13h)

## Thursday, December 11 (Post-Deadline)

| # | Type | Message | Time (ET) | Offset | Condition |
|---|------|---------|-----------|--------|-----------|
| 13 | [E] | `post-deadline-closed.html` | 10:00 AM | **+4d 23h** | Non-L3 |

---

# PHASE 11: WELCOME PARTY (Wed Dec 10)

**Audience:** L3 members only

| # | Type | Message | Time (ET) | Offset | Condition |
|---|------|---------|-----------|--------|-----------|
| 1 | [E] | `welcome-party-reminder.html` | Tue evening | **+3d 10h** | L3 only |
| 2 | [E] | `welcome-party-today.html` | 10:00 AM | **+3d 23h** | L3 only |
| 3 | [S] | Welcome Party Morning | 10:00 AM | **+3d 23h** | L3 only |
| 4 | [E] | `welcome-party-correction.html` | 6:00 PM | **+4d 7h** | L3 only ⚠️ |
| 5 | [E] | `welcome-party-30min.html` | 6:30 PM | **+4d 7h 30m** | L3 only |
| 6 | [S] | Welcome Party 30 Min | 6:30 PM | **+4d 7h 30m** | L3 only |
| 7 | [E] | `welcome-party-live.html` | 7:00 PM | **+4d 8h** | L3 only |
| 8 | [S] | Welcome Party LIVE | 7:00 PM | **+4d 8h** | L3 only |

⚠️ **Note:** `welcome-party-correction.html` is situational (created for a specific time correction). May not be needed for future events.

---

# PHASE 12: POST-EVENT VALUE SERIES (Thu-Fri Dec 11-12)

**Audience:** All attendees
**Compressed Timeline:** Ends Friday Dec 12 as requested

| # | Type | Message | Date/Time (ET) | Offset | Condition |
|---|------|---------|----------------|--------|-----------|
| 1 | [E] | `01-golden-life-sheet.html` | Thu Dec 11, 9:00 AM | **+4d 22h** | All |
| 2 | [S] | Golden Life Sheet | Thu Dec 11, 9:00 AM | **+4d 22h** | All |
| 3 | [E] | `03-fne-workbook.html` | Thu Dec 11, 3:00 PM | **+5d 4h** | All |
| 4 | [S] | FNE Workbook | Thu Dec 11, 3:00 PM | **+5d 4h** | All |
| 5 | [E] | `02-wealth-engine-calculator.html` | Fri Dec 12, 9:00 AM | **+5d 22h** | All |
| 6 | [S] | Wealth Engine Calculator | Fri Dec 12, 9:00 AM | **+5d 22h** | All |
| 7 | [E] | `04-how-it-all-fits-together.html` | Fri Dec 12, 3:00 PM | **+6d 4h** | All |
| 8 | [S] | Framework Synthesis (Closure) | Fri Dec 12, 3:00 PM | **+6d 4h** | All |

**Notes:**
- Workshop Recap merged into Golden Life Sheet email (combined celebration + anchor)
- FNE Workbook moved to Thursday afternoon
- Synthesis moved to Friday afternoon for closure
- Sequence now ends Friday Dec 12 @ 3pm ET

---

# PHASE 13: AMBASSADOR PROGRAM (Sat Dec 13)

| # | Type | Message | Time (ET) | Offset | Condition |
|---|------|---------|-----------|--------|-----------|
| 1 | [E] | `ambassador-program.html` | 2:00 PM | **+7d 3h** | All L2 |
| 2 | [S] | Ambassador Program | 2:00 PM | **+7d 3h** | All L2 |

---

# GHL CONDITIONAL LOGIC

## Audience Segments (Tags)

| Tag | Definition | Receives |
|-----|------------|----------|
| `registered` | Completed registration | Pre-event, countdown, workshop |
| `vip` | VIP ticket holder | VIP prep, VIP session, VIP recording |
| `level-3` | Enrolled in Level 3 | L3 confirm, Welcome Party, VIP session |

## Branch Logic

```
┌─────────────────────────────────────────────────────────┐
│ ON REGISTRATION                                          │
│ ├─ Add tag: registered                                   │
│ ├─ Send: registration-confirmation [E+S]                 │
│ └─ Start: Pre-Event Sequence                             │
├─────────────────────────────────────────────────────────┤
│ ON VIP PURCHASE                                          │
│ ├─ Add tag: vip                                          │
│ ├─ Send: vip-confirmation [E+S]                          │
│ └─ Send: vip-zoom-background [E+S]                       │
├─────────────────────────────────────────────────────────┤
│ ON L3 PURCHASE                                           │
│ ├─ Add tag: level-3                                      │
│ ├─ Send: level3-confirmation [E+S]                       │
│ ├─ REMOVE from: L3 Deadline Sequence                     │
│ ├─ ADD to: Welcome Party Sequence                        │
│ └─ ADD to: VIP Session Sequence (L3 gets VIP access)     │
├─────────────────────────────────────────────────────────┤
│ AT EACH MESSAGE STEP                                     │
│                                                          │
│ Pre-Event 3-day, 2-day, 1-day:                          │
│   IF tag = vip → Send VIP version                       │
│   ELSE → Send Non-VIP version                           │
│                                                          │
│ Monday Follow-up:                                        │
│   IF tag = level-3 → Skip L3 follow-up                  │
│   ELSE → Send L3 follow-up sequence                     │
│                                                          │
│ VIP Session:                                             │
│   IF tag = vip OR tag = level-3 → Send                  │
│   ELSE → Skip                                           │
│                                                          │
│ Welcome Party:                                           │
│   IF tag = level-3 → Send                               │
│   ELSE → Skip                                           │
│                                                          │
│ L3 Deadline:                                             │
│   IF tag = level-3 → Skip                               │
│   ELSE → Send                                           │
└─────────────────────────────────────────────────────────┘
```

---

# GHL CUSTOM VALUES

| Variable | Description | Where Used |
|----------|-------------|------------|
| `{{trigger_link.bw3pFLlMkAQiQOlYB674}}` | Main workshop Zoom link | All workshop messages |
| `{{custom_values.doe_zoom_id}}` | Workshop Meeting ID | Workshop countdown |
| `{{custom_values.doe_zoom_passcode}}` | Workshop Passcode | Workshop countdown |
| `{{custom_values.doe_day_1_return_time}}` | Day 1 lunch return | Day 1 lunch break |
| `{{custom_values.doe_day_2_return_time}}` | Day 2 lunch return | Day 2 lunch break |
| `{{custom_values.vip_session_zoom}}` | VIP Session Zoom link | VIP session messages |
| `{{custom_values.vip_session_id}}` | VIP Session Meeting ID | VIP session messages |
| `{{custom_values.vip_session_passcode}}` | VIP Session Passcode | VIP session messages |
| `{{custom_values.welcome_party_zoom}}` | Welcome Party Zoom link | Welcome Party messages |
| `{{custom_values.welcome_party_id}}` | Welcome Party Meeting ID | Welcome Party messages |

---

# TOTAL MESSAGE COUNT

| Phase | Emails | SMS | Total |
|-------|--------|-----|-------|
| Trigger-Based | 5 | 4 | 9 |
| Pre-Event (30d → 1d) | 13 | 12 | 25 |
| Day 1 Countdown | 5 | 5 | 10 |
| Day 1 Workshop | 8 | 8 | 16 |
| Day 2 Countdown | 4 | 4 | 8 |
| Day 2 Workshop | 9 | 8 | 17 |
| Sunday Night Anchor | 1 | 1 | 2 |
| Monday Morning | 5 | 6 | 11 |
| VIP Session | 4 | 4 | 8 |
| VIP Recording | 1 | 1 | 2 |
| L3 Deadline | 7 | 6 | 13 |
| Welcome Party | 5 | 3 | 8 |
| Value Series (Compressed) | 4 | 4 | 8 |
| Ambassador | 1 | 1 | 2 |
| **TOTAL** | **72** | **67** | **139** |

---

# WORKFLOW RECOMMENDATIONS

## Option A: Single Master Automation
- Use event start date as anchor variable
- Calculate all sends as offset from anchor
- **Pros:** Single workflow, easy to duplicate for future events
- **Cons:** Complex, hard to debug

## Option B: Phase-Based Workflows (Recommended)
1. **Registration** — Trigger: On signup
2. **VIP Purchase** — Trigger: On VIP payment
3. **L3 Purchase** — Trigger: On L3 payment
4. **Pre-Event Countdown** — Scheduled: T-30d to T-1d
5. **Day 1** — Scheduled + Manual triggers
6. **Day 2** — Scheduled + Manual triggers
7. **Post-Workshop Monday** — Scheduled: T+1d 22h to T+2d 10h
8. **VIP Session** — Scheduled: T+1d 22h to T+2d 23h (VIP+L3 only)
9. **L3 Deadline** — Scheduled: T+2d 22h to T+4d 23h (Non-L3 only)
10. **Welcome Party** — Scheduled: T+3d 10h to T+4d 8h (L3 only)
11. **Value Series** — Scheduled: T+4d 22h to T+6d 4h (ends Fri Dec 12)

## Critical Notes

1. **L3 Purchase must remove from deadline sequence** — This is the most critical automation logic
2. **Live triggers require manual webhook** — Day 1 and Day 2 workshop messages need someone to trigger them
3. **Thursday overlap** — Consider spacing Golden Life Sheet (9am) and Workshop Recap (10am) differently
4. **Correction email optional** — `welcome-party-correction.html` was for a specific situation

---

# APPENDIX: CHRONOLOGICAL VIEW

## Full Timeline (All Messages in Order)

**Note:** Pre-event emails send at 9:00 AM Pacific / 12:00 PM Eastern

| Offset | Date/Time (PT) | Email | SMS | Audience |
|--------|----------------|-------|-----|----------|
| -29d 23h | Thu Nov 6, 9am PT | preparation-30days | — | All |
| -24d 23h | Tue Nov 11, 9am PT | preparation-25days | — | All |
| -19d 23h | Sun Nov 16, 9am PT | preparation-20days | 20 Days | All |
| -13d 23h | Sat Nov 22, 9am PT | preparation-14days | — | All |
| -9d 23h | Wed Nov 26, 9am PT | preparation-10days | — | All |
| -8d 23h | Thu Nov 27, 9am PT | preparation-9days | — | All |
| -6d 23h | Sat Nov 29, 9am PT | preparation-7days | 7 Days | All |
| -4d 23h | Mon Dec 1, 9am PT | preparation-5days | 5 Days | All |
| -3d 23h | Tue Dec 2, 9am PT | preparation-4days | 4 Days | All |
| -2d 23h | Wed Dec 3, 9am PT | preparation-3days[-vip] | 3 Days | VIP/Non-VIP |
| -1d 23h | Thu Dec 4, 9am PT | preparation-2days | 2 Days | VIP/Non-VIP |
| -16h | Fri Dec 5, 4pm PT | preparation-1day | 1 Day | VIP/Non-VIP |
| -2h | Sat Dec 6, 6am PT | day1-countdown-2hr | 2 Hours | All |
| -1h | Sat Dec 6, 7am PT | day-of + day1-countdown-1hr | Zoom Link | All |
| -30m | Sat Dec 6, 7:30am PT | day1-countdown-30min | Doors Open | All |
| **T=0** | **Sat Dec 6, 8am PT** | **day1-countdown-live** | **LIVE** | **All** |
| T=0 | Sat Dec 6, 8am PT | 01-day1-opening | WH Stage | All |
| +2h | Sat Dec 6, 10am PT | 02-day1-lunch | Lunch | All |
| +3h | Sat Dec 6, 11am PT | 03-day1-back | Back | All |
| +4h | Sat Dec 6, 12pm PT | 04-day1-wealth | Wealth | All |
| +9h | Sat Dec 6, 5pm PT | 05-day1-end | D1 Complete | All |
| +23h | Sun Dec 7, 7am PT | day2-countdown-2hr | 2 Hours | All |
| +1d 15m | Sun Dec 7, 8:15am PT | day2-countdown-45min | 45 Min | All |
| +1d 45m | Sun Dec 7, 8:45am PT | day2-countdown-15min | Doors | All |
| +1d 1h | Sun Dec 7, 9am PT | day2-countdown-live | D2 LIVE | All |
| +1d 2h | Sun Dec 7, 10am PT | 07-day2-mh | MH Stage | All |
| +1d 3h | Sun Dec 7, 11am PT | 08-day2-lunch | Lunch | All |
| +1d 4h | Sun Dec 7, 12pm PT | 09-day2-back | Final | All |
| +1d 5h | Sun Dec 7, 1pm PT | 10-day2-integration | Integration | All |
| +1d 7h | Sun Dec 7, 3pm PT | 12-level3-segment | L3 Open | All |
| +1d 9h | Sun Dec 7, 5pm PT | 11-day2-end | Complete | All |
| **+1d 11h** | **Sun Dec 7, 7pm PT** | **sunday-night-anchor** | **Anchor** | **All** |
| +1d 22h | Mon Dec 8, 6am PT | morning-after + l3-followup-am + vip-reminder | Morning | Segmented |
| +2d 3h | Mon Dec 8, 11am PT | l3-followup-midday | Midday | Non-L3 |
| +2d 6h | Mon Dec 8, 2pm PT | vip-session-1hour | 1 Hour | VIP+L3 |
| +2d 6h 30m | Mon Dec 8, 2:30pm PT | — | VIP 30m | VIP+L3 |
| +2d 7h | Mon Dec 8, 3pm PT | vip-session-live | VIP LIVE | VIP+L3 |
| +2d 8h | Mon Dec 8, 4pm PT | l3-followup-afternoon | Afternoon | Non-L3 |
| +2d 10h | Mon Dec 8, 6pm PT | level3-ascend | — | Non-L3 |
| +2d 22h | Tue Dec 9, 6am PT | 01-tuesday-morning | L3 24hrs | Non-L3 |
| +2d 23h | Tue Dec 9, 7am PT | vip-session-recording | VIP Rec | VIP+L3 |
| +3d 3h | Tue Dec 9, 11am PT | 02-tuesday-afternoon | L3 3days | Non-L3 |
| +3d 9h | Tue Dec 9, 5pm PT | 03-tuesday-evening | L3 Tonight | Non-L3 |
| +3d 10h | Tue Dec 9, 6pm PT | welcome-party-reminder | — | L3 |
| +3d 22h | Wed Dec 10, 6am PT | 04-wednesday-morning | L3 Today | Non-L3 |
| +3d 23h | Wed Dec 10, 7am PT | welcome-party-today | WP Today | L3 |
| +4d 4h | Wed Dec 10, 12pm PT | 05-wednesday-afternoon | L3 Hours | Non-L3 |
| +4d 7h | Wed Dec 10, 3pm PT | welcome-party-correction | — | L3 ⚠️ |
| +4d 7h 30m | Wed Dec 10, 3:30pm PT | welcome-party-30min | WP 30m | L3 |
| +4d 8h | Wed Dec 10, 4pm PT | welcome-party-live | WP LIVE | L3 |
| +4d 12h | Wed Dec 10, 8pm PT | 06-wednesday-final | L3 Final | Non-L3 |
| **+4d 13h** | **Wed Dec 10, 9pm PT** | **— L3 DEADLINE —** | **—** | **—** |
| +4d 22h | Thu Dec 11, 6am PT | 01-golden-life-sheet | GLS | All |
| +4d 23h | Thu Dec 11, 7am PT | post-deadline-closed | — | Non-L3 |
| +5d 4h | Thu Dec 11, 12pm PT | 03-fne-workbook | FNE | All |
| +5d 22h | Fri Dec 12, 6am PT | 02-wealth-engine-calculator | Wealth | All |
| +6d 4h | Fri Dec 12, 12pm PT | 04-how-it-all-fits-together | Synthesis | All |
| +7d 3h | Sat Dec 13, 11am PT | ambassador-program | Ambassador | All L2 |

---

**Version:** 4.1
**Created:** December 10, 2025
**Last Updated:** December 15, 2025
**Reference:** T=0 = Sat Dec 6, 2025 @ 8:00 AM PT / 11:00 AM ET

## CHANGE LOG

- **v4.1** (Dec 15): Changed all post-event offsets from hours format (+35h) to days+hours format (+1d 11h) for better readability
- **v4.0** (Dec 15): Added SMS for every email (30, 25, 20, 14, 10, 9, 7, 5, 4, 3, 2, 1 days out); Fixed Wallace Hamilton name; Removed specific Day 1/Day 2 times from content
- **v3.2** (Dec 15): Changed all pre-event email times to 9am Pacific (was 9am Eastern), recalculated all offsets
- **v3.1** (Dec 11): Added Sunday Night Anchor (+35h), compressed value series to end Fri Dec 12, updated chronological appendix
- **v3.0** (Dec 11): Extended pre-event sequence from 14 days to 30 days
- **v2.0** (Dec 10): Added missing messages, comprehensive audit
- **v1.0** (Dec 10): Initial timeline creation
