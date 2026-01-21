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
| **VIP Session** | Mon Dec 8, 4:00 PM | Mon Dec 8, 7:00 PM | **T + 56 hrs** |
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
| 26 | [E] | `preparation-1day-morning.html` | Fri Dec 5 | 9am PT / 12pm ET | **-23h** | All |
| 27 | [S] | 1 Day Morning (Non-VIP) | Fri Dec 5 | 9am PT / 12pm ET | **-23h** | Non-VIP |
| 28 | [S] | 1 Day Morning (VIP) | Fri Dec 5 | 9am PT / 12pm ET | **-23h** | VIP |
| 29 | [E] | `preparation-1day-evening.html` | Fri Dec 5 | 4pm PT / 7pm ET | **-16h** | All |
| 30 | [S] | 1 Day Evening (Non-VIP) | Fri Dec 5 | 4pm PT / 7pm ET | **-16h** | Non-VIP |
| 31 | [S] | 1 Day Evening (VIP) | Fri Dec 5 | 4pm PT / 7pm ET | **-16h** | VIP |

---

# PHASE 3: DAY 1 COUNTDOWN (Sat Dec 6 Morning)

**SCHEDULED MESSAGES** — These fire automatically based on offsets.

| # | Type | Message | Time (PT/ET) | Offset | Condition |
|---|------|---------|--------------|--------|-----------|
| 1 | [E] | `day1-countdown-2hr.html` | 6:00am / 9:00am | **-2h** | All |
| 2 | [S] | 2 Hours Until Event | 6:00am / 9:00am | **-2h** | All |
| 3 | [E] | `day-of.html` | 7:00am / 10:00am | **-1h** | All |
| 4 | [E] | `day1-countdown-1hr.html` | 7:00am / 10:00am | **-1h** | All |
| 5 | [S] | Zoom Link Delivery | 7:00am / 10:00am | **-1h** | All |
| 6 | [E] | `day1-countdown-30min.html` | 7:30am / 10:30am | **-30m** | All |
| 7 | [S] | Doors Are Open | 7:30am / 10:30am | **-30m** | All |
| 8 | [E] | `day1-countdown-15min.html` | 7:45am / 10:45am | **-15m** | All |
| 9 | [S] | Room Filling Up | 7:45am / 10:45am | **-15m** | All |
| 10 | [E] | `day1-countdown-live.html` | 8:00am / 11:00am | **T = 0** | All |
| 11 | [S] | WE'RE LIVE | 8:00am / 11:00am | **T = 0** | All |
| 12 | [E] | `day1-late-joiner-15min.html` | 8:15am / 11:15am | **+15m** | All |
| 13 | [S] | 15 Min In — Join Now | 8:15am / 11:15am | **+15m** | All |
| 14 | [E] | `day1-late-joiner-30min.html` | 8:30am / 11:30am | **+30m** | All |
| 15 | [S] | FINAL CALL — 30 Min In | 8:30am / 11:30am | **+30m** | All |

---

# PHASE 4: DAY 1 WORKSHOP (Manual Triggers)

**⚠️ MANUAL TRIGGERS ONLY** — These messages are sent by an admin/operator when specific moments happen during the live workshop. Times shown are approximate; actual trigger depends on workshop flow.

**DO NOT SCHEDULE THESE.** They require human judgment during the live event.

| # | Type | Message | Trigger Event | ~Time (PT/ET) | Condition |
|---|------|---------|---------------|---------------|-----------|
| 1 | [E] | `01-day1-opening.html` | WH takes stage | ~8:00am / 11:00am | All |
| 2 | [S] | WH Takes Stage | WH takes stage | ~8:00am / 11:00am | All |
| 3 | [E] | `01b-day1-wh-in-session.html` | Mid-morning energy | ~8:30am / 11:30am | All |
| 4 | [S] | WH In Session | Mid-morning energy | ~8:30am / 11:30am | All |
| 5 | [E] | `01c-day1-wh-live-now.html` | Anytime Day 1 (variable) | Variable | All |
| 6 | [S] | WH Live Now | Anytime Day 1 (variable) | Variable | All |
| 7 | [E] | `02-day1-lunch-break.html` | Lunch break announced | ~10:00am / 1:00pm | All |
| 8 | [S] | Day 1 Lunch Break | Lunch break announced | ~10:00am / 1:00pm | All |
| 9 | [E] | `03-day1-back-from-lunch.html` | Return from lunch | ~11:00am / 2:00pm | All |
| 10 | [S] | Back from Lunch | Return from lunch | ~11:00am / 2:00pm | All |
| 11 | [E] | `04-day1-wealth-segment.html` | Wealth segment begins | ~12:00pm / 3:00pm | All |
| 12 | [S] | Wealth Segment | Wealth segment begins | ~12:00pm / 3:00pm | All |
| 13 | [E] | `05-day1-end.html` | Day 1 closing remarks | ~5:00pm / 8:00pm | All |
| 14 | [S] | Day 1 Complete | Day 1 closing remarks | ~5:00pm / 8:00pm | All |

**Admin Note:** Have these messages pre-loaded in GHL. When the moment happens, manually trigger the appropriate message. Do NOT rely on fixed time scheduling for workshop content.

---

# PHASE 5: DAY 2 COUNTDOWN (Sun Dec 7 Morning)

**SCHEDULED MESSAGES** — These fire automatically based on offsets.

**Note:** Day 2 starts at 9:00 AM PT / 12:00 PM ET (T+25h from Day 1 start)

| # | Type | Message | Time (PT/ET) | Offset | Condition |
|---|------|---------|--------------|--------|-----------|
| 1 | [E] | `day2-countdown-2hr.html` | 7:00am / 10:00am | **+23h** | All |
| 2 | [S] | Day 2 - 2 Hours | 7:00am / 10:00am | **+23h** | All |
| 3 | [E] | `day2-countdown-1hr.html` | 8:00am / 11:00am | **+24h** | All |
| 4 | [S] | Day 2 - 1 Hour (Zoom Link) | 8:00am / 11:00am | **+24h** | All |
| 5 | [E] | `day2-countdown-45min.html` | 8:15am / 11:15am | **+1d 15m** | All |
| 6 | [S] | Day 2 - 45 Minutes | 8:15am / 11:15am | **+1d 15m** | All |
| 7 | [E] | `day2-countdown-30min.html` | 8:30am / 11:30am | **+1d 30m** | All |
| 8 | [S] | DOORS OPEN — Join Early | 8:30am / 11:30am | **+1d 30m** | All |
| 9 | [E] | `day2-countdown-15min.html` | 8:45am / 11:45am | **+1d 45m** | All |
| 10 | [S] | 15 Minutes Until Day 2 | 8:45am / 11:45am | **+1d 45m** | All |
| 11 | [E] | `day2-countdown-live.html` | 9:00am / 12:00pm | **+25h** | All |
| 12 | [S] | Day 2 Is LIVE | 9:00am / 12:00pm | **+25h** | All |
| 13 | [E] | `day2-late-joiner-15min.html` | 9:15am / 12:15pm | **+25h 15m** | All |
| 14 | [S] | 15 Min Into Day 2 — Join Now | 9:15am / 12:15pm | **+25h 15m** | All |
| 15 | [E] | `day2-late-joiner-30min.html` | 9:30am / 12:30pm | **+25h 30m** | All |
| 16 | [S] | FINAL CALL — Day 2 30 Min In | 9:30am / 12:30pm | **+25h 30m** | All |

---

# PHASE 6: DAY 2 WORKSHOP (Manual Triggers)

**⚠️ MANUAL TRIGGERS ONLY** — These messages are sent by an admin/operator when specific moments happen during the live workshop. Times shown are approximate; actual trigger depends on workshop flow.

**DO NOT SCHEDULE THESE.** They require human judgment during the live event.

| # | Type | Message | Trigger Event | ~Time (PT/ET) | Condition |
|---|------|---------|---------------|---------------|-----------|
| 1 | [E] | `06-day2-opening.html` | Day 2 welcome begins | ~9:00am / 12:00pm | All |
| 2 | [S] | Day 2 Opening | Day 2 welcome begins | ~9:00am / 12:00pm | All |
| 3 | [E] | `07-day2-mh-segment.html` | Mark Hamilton takes stage | ~10:00am / 1:00pm | All |
| 4 | [S] | Mark Hamilton on Stage | Mark Hamilton takes stage | ~10:00am / 1:00pm | All |
| 5 | [E] | `08-day2-lunch-break.html` | Lunch break announced | ~11:00am / 2:00pm | All |
| 6 | [S] | Day 2 Lunch Break | Lunch break announced | ~11:00am / 2:00pm | All |
| 7 | [E] | `09-day2-back-from-lunch.html` | Return from lunch | ~12:00pm / 3:00pm | All |
| 8 | [S] | Final Session | Return from lunch | ~12:00pm / 3:00pm | All |
| 9 | [E] | `10-day2-integration.html` | Integration segment begins | ~1:00pm / 4:00pm | All |
| 10 | [S] | Integration Segment | Integration segment begins | ~1:00pm / 4:00pm | All |
| 11 | [E] | `12-level3-segment.html` | L3 offer announced | ~3:00pm / 6:00pm | All |
| 12 | [S] | L3 Enrollment Open | L3 offer announced | ~3:00pm / 6:00pm | All |
| 13 | [E] | `11-day2-end.html` | Workshop closing remarks | ~5:00pm / 8:00pm | All |
| 14 | [S] | Workshop Complete | Workshop closing remarks | ~5:00pm / 8:00pm | All |
| 15 | [E] | `day2-complete-level3.html` | After workshop ends | ~5:00pm / 8:00pm | Non-L3 |
| 16 | [S] | L3 Enrollment Now Open | After workshop ends | ~5:00pm / 8:00pm | Non-L3 |

**SMS #16 (Non-L3):** "You did it! The workshop is complete, but your transformation has just begun. L3 enrollment is now open for those ready to go deeper. Check your email for details."

**Admin Note:** Have these messages pre-loaded in GHL. When the moment happens, manually trigger the appropriate message. Day 2 runs longer than Day 1, so be prepared for schedule variations.

---

# PHASE 6B: SUNDAY NIGHT (Sun Dec 7) — Segmented by L3 Status

**Purpose:** Bridge the fragile post-event moment. Different messages for L3 vs Non-L3.

## Non-L3 Attendees
| # | Type | Message | Time (ET) | Offset | Condition |
|---|------|---------|-----------|--------|-----------|
| 1 | [E] | `sunday-night-anchor.html` | 9:00 PM | **+1d 10h** | Non-L3 |
| 2 | [S] | Sunday Night Anchor | 9:00 PM | **+1d 10h** | Non-L3 |

**Content:** Pure reinforcement. "Let it land." Value-First Week preview. Addresses post-event vulnerability.

## L3 Members
| # | Type | Message | Time (ET) | Offset | Condition |
|---|------|---------|-----------|--------|-----------|
| 3 | [E] | `level3-sunday-night.html` | 9:00 PM | **+1d 10h** | L3 only |
| 4 | [S] | L3 Sunday Night | 9:00 PM | **+1d 10h** | L3 only |

**Content:** Celebrate their decision. VIP Session preview (tomorrow). Welcome Party preview (Wednesday).

---

# PHASE 6C: L3 MONDAY MORNING (Mon Dec 8) — L3 Only

**AUDIENCE:** Level 3 members ONLY
**PURPOSE:** VIP Session day excitement, prepare for tonight

| # | Type | Message | Time (ET) | Offset | Condition |
|---|------|---------|-----------|--------|-----------|
| 1 | [E] | `level3-monday-morning.html` | 9:00 AM | **+1d 22h** | L3 only |
| 2 | [S] | L3 Monday Morning | 9:00 AM | **+1d 22h** | L3 only |

**Content:** "Good morning, Level 3 member." VIP Session TONIGHT at 7pm ET. What to have ready. Welcome Party Wednesday.

---

# PHASE 7: L3 PROMOTION SEQUENCE (Mon-Wed Dec 8-10) — Non-L3 Only

**AUDIENCE:** Non-L3 attendees ONLY (those who have NOT enrolled in Level 3)
**PURPOSE:** 6-touch sequence optimized for L3 conversion without being pushy
**PHILOSOPHY:** Each message has a specific purpose tied to real events/milestones.

## Monday, December 8

| # | Type | Message | Time (ET) | Offset | Condition |
|---|------|---------|-----------|--------|-----------|
| 1 | [E] | `02-monday-afternoon.html` | 2:00 PM | **+2d 3h** | Non-L3 |
| 2 | [E] | `level3-ascend.html` | 9:00 PM | **+2d 10h** | Non-L3 |
| 3 | [S] | Post-VIP FOMO | 9:00 PM | **+2d 10h** | Non-L3 |

**Content (2pm):** "What you felt was real." Soft introduction to L3, mentions VIP Session tonight and Welcome Party Wednesday.
**Content (9pm):** "The VIP Session just ended." Post-VIP FOMO. Most effective timing.

## Tuesday, December 9

| # | Type | Message | Time (ET) | Offset | Condition |
|---|------|---------|-----------|--------|-----------|
| 4 | [E] | `03-tuesday-evening.html` | 7:00 PM | **+3d 8h** | Non-L3 |
| 5 | [S] | 24 Hours Remaining | 7:00 PM | **+3d 8h** | Non-L3 |

**Content:** "The door closes tomorrow." 24-hour warning. Welcome Party tomorrow night.

## Wednesday, December 10 (Deadline Day)

| # | Type | Message | Time (ET) | Offset | Condition |
|---|------|---------|-----------|--------|-----------|
| 6 | [E] | `04-wednesday-afternoon.html` | 2:00 PM | **+4d 3h** | Non-L3 |
| 7 | [E] | `05-wednesday-6pm.html` | 6:00 PM | **+4d 7h** | Non-L3 |
| 8 | [S] | Welcome Party Starting | 6:00 PM | **+4d 7h** | Non-L3 |
| 9 | [E] | `l3-gentle-reminder.html` | 9:00 PM | **+4d 10h** | Non-L3 |
| 10 | [S] | Final Message | 9:00 PM | **+4d 10h** | Non-L3 |

**Content (2pm):** "Final hours." 10 hours until deadline. Welcome Party is TONIGHT at 7pm.
**Content (6pm):** "Tonight at midnight." 6 hours left. Welcome Party starts in 1 hour.
**Content (9pm):** "3 hours left." Final message. Welcome Party just ended. Direct but respectful.

### ⚠️ L3 DEADLINE: Thursday Dec 11, 12:00 AM ET (+4d 13h)

## Summary: 6 Emails + 4 SMS = 10 Total L3 Touches

| Day | Time | Email | SMS | Purpose |
|-----|------|-------|-----|---------|
| Mon | 2pm | 02-monday-afternoon | — | Soft intro |
| Mon | 9pm | level3-ascend | Post-VIP FOMO | Real FOMO |
| Tue | 7pm | 03-tuesday-evening | 24 Hours | Urgency milestone |
| Wed | 2pm | 04-wednesday-afternoon | — | Final hours |
| Wed | 6pm | 05-wednesday-6pm | Welcome Party | Party imminent |
| Wed | 9pm | l3-gentle-reminder | Final | Last call |

**Note:** Non-L3s ALSO receive Value-First Week emails (Phase 10) — Mon-Fri daily value content for ALL attendees.

---

# PHASE 8: VIP SESSION (Mon Dec 8)

**VIP SESSION TIME:** 4:00 PM PT / 7:00 PM ET

| # | Type | Message | Time (ET) | Offset | Condition |
|---|------|---------|-----------|--------|-----------|
| 1 | [E] | `vip-session-reminder.html` | 10:00 AM | **+1d 23h** | VIP + L3 |
| 2 | [S] | VIP Session Morning | 10:00 AM | **+1d 23h** | VIP + L3 |
| 3 | [E] | `vip-session-1hour.html` | 6:00 PM | **+2d 7h** | VIP + L3 |
| 4 | [S] | VIP Session 1-Hour | 6:00 PM | **+2d 7h** | VIP + L3 |
| 5 | [S] | VIP Session 30 Min | 6:30 PM | **+2d 7h 30m** | VIP + L3 |
| 6 | [E] | `vip-session-live.html` | 7:00 PM | **+2d 8h** | VIP + L3 |
| 7 | [S] | VIP Session LIVE | 7:00 PM | **+2d 8h** | VIP + L3 |

---

# PHASE 9: VIP RECORDING (Tue Dec 9)

| # | Type | Message | Time (ET) | Offset | Condition |
|---|------|---------|-----------|--------|-----------|
| 1 | [E] | `vip-session-recording.html` | 10:00 AM | **+2d 23h** | VIP + L3 |
| 2 | [S] | VIP Recording Available | 10:00 AM | **+2d 23h** | VIP + L3 |

---

# PHASE 10: VALUE-FIRST WEEK (Mon-Fri Dec 8-12)

**Audience:** ALL attendees
**Philosophy:** Value-first approach. L3 mentioned naturally, not pushed.

## Monday, December 8

| # | Type | Message | Time (ET) | Offset | Condition |
|---|------|---------|-----------|--------|-----------|
| 1 | [E] | `01-golden-life-sheet.html` | 9:00 AM | **+1d 22h** | All |
| 2 | [S] | Golden Life Sheet | 9:00 AM | **+1d 22h** | All |

**Content:** Daily anchor with six categories: Who I Am, FNE, Dreams, Current Focuses, Celebrations, Health & Longevity. The synthesis tool that keeps attendees aligned with the Immortal Mentality.

## Tuesday, December 9

| # | Type | Message | Time (ET) | Offset | Condition |
|---|------|---------|-----------|--------|-----------|
| 3 | [E] | `02-wealth-engine-calculator.html` | 9:00 AM | **+2d 22h** | All |
| 4 | [S] | Wealth Engine Calculator | 9:00 AM | **+2d 22h** | All |

**Content:** Inflection Point formula (Annual Expenses / 0.12), Millionaire Mindset ("How can I afford this?"), three levels of financial freedom (Security, Vitality, Freedom).

## Wednesday, December 10

| # | Type | Message | Time (ET) | Offset | Condition |
|---|------|---------|-----------|--------|-----------|
| 5 | [E] | `03-fne-workbook.html` | 9:00 AM | **+3d 22h** | All |
| 6 | [S] | FNE Workbook | 9:00 AM | **+3d 22h** | All |

**Content:** Friday-Night Essence workbook. The key to discovering authentic self and achieving Downstream Focus.

**Note:** L3 promotion messages for Non-L3 attendees are in Phase 7 (Mon-Wed).

## Thursday, December 11

| # | Type | Message | Time (ET) | Offset | Condition |
|---|------|---------|-----------|--------|-----------|
| 7 | [E] | `04-ambassador.html` | 9:00 AM | **+4d 22h** | All |
| 8 | [S] | Ambassador Program | 9:00 AM | **+4d 22h** | All |

**Content:** Ambassador Program introduction. How to share Neothink with others and earn commission.

## Friday, December 12

| # | Type | Message | Time (ET) | Offset | Condition |
|---|------|---------|-----------|--------|-----------|
| 9 | [E] | `05-infinite-vector.html` | 9:00 AM | **+5d 22h** | All |
| 10 | [S] | Infinite Vector | 9:00 AM | **+5d 22h** | All |

**Content:** Synthesis — how all tools form a single integrated system. The Infinite Vector concept: perpetual momentum toward the Immortal Mentality. Soft mention of L3 for those ready to go deeper.

---

# PHASE 11: WELCOME PARTY (Tue-Wed Dec 9-10)

**AUDIENCE:** L3 members ONLY
**EVENT:** Wednesday, December 10, 2025 @ 4:00 PM PT / 7:00 PM ET

| # | Type | Message | Time (ET) | Offset | Condition |
|---|------|---------|-----------|--------|-----------|
| 1 | [E] | `welcome-party-reminder.html` | Tue 7:00 PM | **+3d 8h** | L3 only |
| 2 | [S] | Welcome Party Tomorrow | Tue 7:00 PM | **+3d 8h** | L3 only |
| 3 | [E] | `welcome-party-today.html` | Wed 10:00 AM | **+3d 23h** | L3 only |
| 4 | [S] | Welcome Party Today | Wed 10:00 AM | **+3d 23h** | L3 only |
| 5 | [E] | `welcome-party-30min.html` | Wed 6:30 PM | **+4d 7h 30m** | L3 only |
| 6 | [S] | Welcome Party 30 Min | Wed 6:30 PM | **+4d 7h 30m** | L3 only |
| 7 | [E] | `welcome-party-live.html` | Wed 7:00 PM | **+4d 8h** | L3 only |
| 8 | [S] | Welcome Party LIVE | Wed 7:00 PM | **+4d 8h** | L3 only |
| 9 | [E] | `welcome-party-recording.html` | Thu 10:00 AM | **+4d 23h** | L3 only |
| 10 | [S] | Welcome Party Recording | Thu 10:00 AM | **+4d 23h** | L3 only |

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
| `{{custom_values.doe_vip_session_zoom}}` | VIP Session Zoom link | VIP session messages |
| `{{custom_values.doe_vip_session_id}}` | VIP Session Meeting ID | VIP session messages |
| `{{custom_values.doe_vip_session_passcode}}` | VIP Session Passcode | VIP session messages |
| `{{custom_values.doe_welcome_party_zoom}}` | Welcome Party Zoom link | Welcome Party messages |
| `{{custom_values.doe_welcome_party_id}}` | Welcome Party Meeting ID | Welcome Party messages |

---

# TOTAL MESSAGE COUNT

| Phase | Emails | SMS | Total |
|-------|--------|-----|-------|
| Trigger-Based | 5 | 4 | 9 |
| Pre-Event (30d → 1d) | 14 | 17 | 31 |
| Day 1 Countdown | 8 | 7 | 15 |
| Day 1 Workshop (Manual) | 7 | 7 | 14 |
| Day 2 Countdown | 8 | 8 | 16 |
| Day 2 Workshop (Manual) | 8 | 8 | 16 |
| Sunday Night Anchor | 2 | 2 | 4 |
| L3 Monday Morning | 1 | 1 | 2 |
| L3 Promotion (Non-L3) | 6 | 4 | 10 |
| VIP Session | 3 | 4 | 7 |
| VIP Recording | 1 | 1 | 2 |
| Value-First Week (All) | 5 | 5 | 10 |
| Welcome Party | 5 | 5 | 10 |
| **TOTAL** | **73** | **73** | **146** |

**Note:** Workshop phases (Day 1 and Day 2) are manual triggers only — not scheduled. L3 Promotion sequence is optimized for conversion without being pushy (6 emails + 4 SMS over 3 days). Value-First Week provides daily value content for ALL attendees (Mon-Fri).

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
7. **Sunday Night Anchor** — Scheduled: T+1d 11h
8. **Value-First Week** — Scheduled: T+1d 22h to T+5d 22h (Mon-Fri, ALL attendees)
9. **VIP Session** — Scheduled: T+1d 22h to T+2d 23h (VIP+L3 only)
10. **Welcome Party** — Scheduled: T+3d 10h to T+4d 8h (L3 only)
11. **L3 Gentle Reminder** — Scheduled: T+4d 10h (Non-L3 only, single message)

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
| -23h | Fri Dec 5, 9am PT | preparation-1day-morning | 1 Day AM | VIP/Non-VIP |
| -16h | Fri Dec 5, 4pm PT | preparation-1day-evening | 1 Day PM | VIP/Non-VIP |
| -2h | Sat Dec 6, 6am PT | day1-countdown-2hr | 2 Hours | All |
| -1h | Sat Dec 6, 7am PT | day-of + day1-countdown-1hr | Zoom Link | All |
| -30m | Sat Dec 6, 7:30am PT | day1-countdown-30min | Doors Open | All |
| -15m | Sat Dec 6, 7:45am PT | day1-countdown-15min | Room Filling | All |
| **T=0** | **Sat Dec 6, 8am PT** | **day1-countdown-live** | **LIVE** | **All** |
| +15m | Sat Dec 6, 8:15am PT | day1-late-joiner-15min | 15 Min In | All |
| +30m | Sat Dec 6, 8:30am PT | day1-late-joiner-30min | FINAL CALL | All |
| ~T=0 | Sat Dec 6, ~8am PT | 01-day1-opening (manual) | WH Stage | All |
| +2h | Sat Dec 6, 10am PT | 02-day1-lunch | Lunch | All |
| +3h | Sat Dec 6, 11am PT | 03-day1-back | Back | All |
| +4h | Sat Dec 6, 12pm PT | 04-day1-wealth | Wealth | All |
| +9h | Sat Dec 6, 5pm PT | 05-day1-end | D1 Complete | All |
| +23h | Sun Dec 7, 7am PT | day2-countdown-2hr | 2 Hours | All |
| +24h | Sun Dec 7, 8am PT | day2-countdown-1hr | 1 Hr + Zoom | All |
| +1d 15m | Sun Dec 7, 8:15am PT | day2-countdown-45min | 45 Min | All |
| +1d 30m | Sun Dec 7, 8:30am PT | day2-countdown-30min | DOORS OPEN | All |
| +1d 45m | Sun Dec 7, 8:45am PT | day2-countdown-15min | 15 Minutes | All |
| **+25h** | **Sun Dec 7, 9am PT** | **day2-countdown-live** | **D2 LIVE** | **All** |
| +25h 15m | Sun Dec 7, 9:15am PT | day2-late-joiner-15min | 15 Min In | All |
| +25h 30m | Sun Dec 7, 9:30am PT | day2-late-joiner-30min | FINAL CALL | All |
| ~+25h | Sun Dec 7, ~9am PT | 06-day2-opening (manual) | D2 Opening | All |
| ~+26h | Sun Dec 7, ~10am PT | 07-day2-mh (manual) | MH Stage | All |
| +1d 3h | Sun Dec 7, 11am PT | 08-day2-lunch | Lunch | All |
| +1d 4h | Sun Dec 7, 12pm PT | 09-day2-back | Final | All |
| +1d 5h | Sun Dec 7, 1pm PT | 10-day2-integration | Integration | All |
| +1d 7h | Sun Dec 7, 3pm PT | 12-level3-segment | L3 Open | All |
| +1d 9h | Sun Dec 7, 5pm PT | 11-day2-end | Complete | All |
| **+1d 11h** | **Sun Dec 7, 7pm PT** | **sunday-night-anchor** | **Anchor** | **All** |
| +1d 22h | Mon Dec 8, 6am PT | 01-golden-life-sheet | GLS | All |
| +2d 7h | Mon Dec 8, 3pm PT | vip-session-1hour | 1 Hour | VIP+L3 |
| +2d 7h 30m | Mon Dec 8, 3:30pm PT | — | VIP 30m | VIP+L3 |
| +2d 8h | Mon Dec 8, 4pm PT | vip-session-live | VIP LIVE | VIP+L3 |
| +2d 10h | Mon Dec 8, 6pm PT | level3-ascend | Post-VIP | Non-L3 |
| +2d 22h | Tue Dec 9, 6am PT | 02-wealth-engine-calculator | Wealth | All |
| +2d 23h | Tue Dec 9, 7am PT | vip-session-recording | VIP Rec | VIP+L3 |
| +3d 10h | Tue Dec 9, 6pm PT | welcome-party-reminder | — | L3 |
| +3d 22h | Wed Dec 10, 6am PT | 03-fne-workbook | FNE | All |
| +3d 23h | Wed Dec 10, 7am PT | welcome-party-today | WP Today | L3 |
| +4d 7h 30m | Wed Dec 10, 3:30pm PT | welcome-party-30min | WP 30m | L3 |
| +4d 8h | Wed Dec 10, 4pm PT | welcome-party-live | WP LIVE | L3 |
| +4d 10h | Wed Dec 10, 6pm PT | l3-gentle-reminder | Gentle L3 | Non-L3 |
| **+4d 13h** | **Wed Dec 10, 9pm PT** | **— L3 DEADLINE —** | **—** | **—** |
| +4d 22h | Thu Dec 11, 6am PT | 04-ambassador | Ambassador | All |
| +5d 22h | Fri Dec 12, 6am PT | 05-infinite-vector | Synthesis | All |

---

**Version:** 5.9
**Created:** December 10, 2025
**Last Updated:** December 22, 2025
**Reference:** T=0 = Sat Dec 6, 2025 @ 8:00 AM PT / 11:00 AM ET

## CHANGE LOG

- **v5.9** (Dec 22): **COUNTDOWN SEQUENCE EXPANDED + WORKSHOP PHASES RESTRUCTURED** — Added 13 new countdown messages. Day 1 Countdown: added -15m (room filling), +15m (late joiner), +30m (final call). Day 2 Countdown: added 1hr (zoom link delivery), 30min (doors open), +15m (late joiner), +30m (final call). Restructured Phase 4 (Day 1 Workshop) and Phase 6 (Day 2 Workshop) as MANUAL TRIGGERS with approximate times instead of fixed offsets — these require human judgment during live event. Updated message count table with accurate counts including L3 Monday Morning. Total messages: 146.
- **v5.8** (Dec 22): **DEC 5 MORNING MESSAGE ADDED** — Split 1-day-before messaging into morning + evening. Created `preparation-1day-morning.html` (9am PT, offset -23h) and renamed existing to `preparation-1day-evening.html` (4pm PT, offset -16h). Dec 5 now matches all other countdown days with 9am touch. Added 3 messages (1 email + 2 SMS). Total messages: 133.
- **v5.7** (Dec 17): **L3 PROMOTION OPTIMIZED** — Expanded Phase 7 to full 6-email + 4-SMS sequence for L3 conversion. Schedule: Mon 2pm (soft intro), Mon 9pm (post-VIP FOMO), Tue 7pm (24hr warning), Wed 2pm (final hours), Wed 6pm (6hr/Welcome Party), Wed 9pm (final message). Each touch tied to real event/milestone. Updated Value-First Week (Phase 10) to 5 emails for ALL attendees. Total messages: 130.
- **v5.6** (Dec 17): **NON-L3 SIMPLIFIED** — Reduced Phase 7 from 8 messages (4 emails + 4 SMS) to 2 messages (1 email + 1 SMS). Kept only post-VIP FOMO at 9pm Monday. Archived morning/midday/afternoon follow-ups to v4-legacy. Moved files from `monday-morning/` to `non-l3/`. Value-first philosophy: one touch, not bombardment.
- **v5.5** (Dec 16): **L3 DEDICATED POST-EVENT** — Added `level3-sunday-night.html` and `level3-monday-morning.html` for L3 members. Phase 6B now segmented: Non-L3 gets sunday-night-anchor, L3 gets dedicated L3 message. Added Phase 6C for L3 Monday morning. L3 members now have complete differentiated experience.
- **v5.4** (Dec 16): **POST-EVENT CLEANUP** — Archived legacy `12-morning-after.html` (replaced by Value-First Week). Removed `welcome-party-correction.html` (not needed). Updated Phase 7 to L3 Follow-up only. Updated Phase 11 Welcome Party with complete sequence including Tuesday reminder and Thursday recording. Clarified audience segmentation.
- **v5.3** (Dec 15): **VIP SESSION TIMES CORRECTED** — Fixed VIP Session from 3pm PT/6pm ET to 4pm PT/7pm ET. Updated all offsets accordingly. Added 1-hour reminder SMS. Total: 7 messages in VIP Session phase.
- **v5.2** (Dec 15): **5-DAY STRUCTURE RESTORED** — Split combined FNE+Ambassador email into two separate emails. Now 5-day sequence: Mon=Golden Life Sheet, Tue=Wealth Engine, Wed=FNE Workbook, Thu=Ambassador, Fri=Infinite Vector (synthesis). Total messages: 118.
- **v5.1** (Dec 15): 4-day compression (reverted in v5.2). Removed Dream Harvester concept.
- **v5.0** (Dec 15): **VALUE-FIRST RESTRUCTURE** — Replaced aggressive L3 deadline sequence with Value-First Week. All attendees receive daily value content. L3 mentioned naturally, one gentle reminder Wednesday evening.
- **v4.1** (Dec 15): Changed all post-event offsets from hours format (+35h) to days+hours format (+1d 11h) for better readability
- **v4.0** (Dec 15): Added SMS for every email (30, 25, 20, 14, 10, 9, 7, 5, 4, 3, 2, 1 days out); Fixed Wallace Hamilton name; Removed specific Day 1/Day 2 times from content
- **v3.2** (Dec 15): Changed all pre-event email times to 9am Pacific (was 9am Eastern), recalculated all offsets
- **v3.1** (Dec 11): Added Sunday Night Anchor (+35h), compressed value series to end Fri Dec 12, updated chronological appendix
- **v3.0** (Dec 11): Extended pre-event sequence from 14 days to 30 days
- **v2.0** (Dec 10): Added missing messages, comprehensive audit
- **v1.0** (Dec 10): Initial timeline creation
