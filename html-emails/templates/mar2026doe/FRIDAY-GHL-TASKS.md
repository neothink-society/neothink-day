# GHL Tasks — Friday, March 13, 2026

## BEFORE 7AM (Must complete before morning reminders send)

### 1. Update Pre-Event Sequence Workflow Tag
The pre-event sequence currently adds a tag like `registered doe march 2026` or similar.
**Change it to:** `doe march 2026 sequence`
This tag means "in the pre-event workflow" — NOT that they registered.

### 2. Verify Tag Architecture
The 3-branch system uses two tags:
- `level 2 workshop vip` — contact purchased VIP
- `doe march 2026 - signin` — contact signed in on neothinkday.com
**Verify:** These tags are applied correctly and not conflated with old `doe march 2026 registered` tag.

### 3. Add 3-Branch If/Else to Every Pre-Event Message (GHL Workflow)
In the pre-event sequence, before every SMS and email send step, add a 3-branch If/Else:

**Branch 1 — VIP:** Contact has tag `level 2 workshop vip` → VIP email/SMS
**Branch 2 — Signed in:** Contact has tag `doe march 2026 - signin` (no VIP tag) → signed-in email/SMS with VIP upsell
**Branch 3 — Not signed in:** Contact has NEITHER tag → sign-in email/SMS, links to neothinkday.com

Apply this to every send step — email and SMS pairs:

#### 3-Branch Messages (If/Else required)

| Send | Time (PT) | Offset | Branch 1 (VIP) | Branch 2 (Signed in) | Branch 3 (Not signed in) |
|------|-----------|--------|----------------|---------------------|-------------------------|
| Fri morning email | 9:00 AM | -23h | preparation-01day-morning-vip.html | preparation-01day-morning.html | preparation-01day-morning-unregistered.html |
| Fri morning SMS | 9:00 AM | -23h | A1 (pre-event-sms.md) | A2 (pre-event-sms.md) | A3 (pre-event-sms.md) |
| Fri evening email | 4:00 PM | -16h | preparation-01day-evening-vip.html | preparation-01day-evening.html | preparation-01day-evening-unregistered.html |
| Fri evening SMS | 4:00 PM | -16h | B1 (pre-event-sms.md) | B2 (pre-event-sms.md) | B3 (pre-event-sms.md) |
| Sat morning email | 6:00 AM | -2h | day1-morning-vip.html | day1-morning.html | day1-morning-unregistered.html |
| Sat morning SMS | 5:00 AM | -3h | C1 (pre-event-sms.md) | C2 (pre-event-sms.md) | C3 (pre-event-sms.md) |

#### Single-Send Messages — Saturday Morning (No branching, all contacts)

After the 3-branch sends, these go to everyone using the Zoom trigger link:

| Send | Time (PT) | Time (ET) | Offset | Template (canonical) |
|------|-----------|-----------|--------|---------------------|
| 1 hour before | 7:00 AM | 10:00 AM | -1h | workflows/04-day-of-reminders/day1-01hour.html |
| Doors open | 7:30 AM | 10:30 AM | -30m | workflows/04-day-of-reminders/day1-30min.html + day1-zoom.html |
| Doors open SMS | 7:30 AM | 10:30 AM | -30m | D (pre-event-sms.md) |
| 15 min before | 7:45 AM | 10:45 AM | -15m | workflows/04-day-of-reminders/day1-15min.html |
| Workshop live | 8:00 AM | 11:00 AM | T=0 | workflows/04-day-of-reminders/day1-live.html |
| We're Live SMS | 8:00 AM | 11:00 AM | T=0 | E (pre-event-sms.md) |
| Late joiner +15m | 8:15 AM | 11:15 AM | +15m | workflows/04-day-of-reminders/day1-late-15min.html |
| Late joiner +30m | 8:30 AM | 11:30 AM | +30m | workflows/04-day-of-reminders/day1-late-30min.html |

---

## FRIDAY TASKS (Not urgent before 7am)

### 4. Clear 530 People from Previous Event's Wait Step
In the **Pre-Event Sequence** workflow from the last event:
- [ ] Find the Wait step where ~530 people are stuck
- [ ] Remove them from the workflow WITHOUT adding the end-of-workflow tag to them
- [ ] Verify they exit cleanly with no new tags applied

### 5. Clear Both Mid-Event Broadcast Workflows
- [ ] Identify all people currently enrolled in both mid-event broadcast workflows
- [ ] Remove them from those workflows (clear enrollment)

### 6. Verify L3 Offer Close Sequence Enrollment
Currently no step adds attendees to the L3 Offer Close Sequence after the event.
- [ ] Find or add a step after Day 2 completes that enrolls attendees in the L3 Offer Close Sequence
- [ ] Confirm it fires for Day 2 attendees (not Day 1 only)

### 7. Replace Tag Triggers with Direct Workflow Enrollment
Throughout the event workflows, replace any pattern of:
- "Add tag X" → "Workflow trigger on tag X"
With direct:
- "Add to Workflow Y"
This removes unnecessary tag clutter. Apply wherever this pattern exists.

### 8. Fix Start Time Discrepancy
- Custom values say: Doors open 7:30am PT, Wallace starts 8am PT
- Pre-event sequence workflow shows: 8am start time
**Clarification:** Doors open at 7:30am PT. Wallace takes stage at 8am PT.
- [ ] Update pre-event workflow timing/copy to reflect 7:30am doors, 8am workshop start
- [ ] Verify all email/SMS timing offsets are correct relative to 8am PT (T=0)

### 9. Set Up Attendance Capture Trigger Link
- [ ] Create a trigger link for Day 1 attendance capture
- [ ] Create a trigger link for Day 2 attendance capture
- [ ] These trigger links should tag the contact as attended when clicked/accessed
- [ ] Embed in the Zoom session (via chat or during session) so when attendees click, attendance is captured

### 10. Verify Mid-Event Broadcast Accuracy
Day 1 segments this time: (confirm with Wallace — NO Wealth segment on Day 1)
- [ ] Remove or disable the Wealth segment broadcast from Day 1 if it exists
- [ ] Verify Day 2 mid-event broadcasts match actual Day 2 content

### 11. Ideas Board
- [ ] Add to ideas board: **Build our own event platform (obv.io replica) — implement for Level 3**

### 12. Dashboard UI Rollback
- [ ] Rollback the dashboard UI (neothinkday.com/home) to the previous version

---

## FUTURE IMPLEMENTATION (Next Event — Not Urgent)

### Registration Form Required for VIP Access
**The problem:** People manually added to the pre-event sequence never see the VIP upsell
(which appears on the post-submit page of the sign-in form).

**The fix:** The 3-branch if/else (item 3 above) ensures:
- Branch 3 contacts (no tags) get directed to neothinkday.com to sign in first
- Once they sign in, they get tagged `doe march 2026 - signin` and move to Branch 2
- Branch 2 contacts see VIP upsell in their emails
- VIP purchasers get tagged `level 2 workshop vip` and move to Branch 1

For future events, set this up from day one so ALL contacts go through sign-in.
Never manually add someone to the pre-event workflow without also sending them the sign-in link first.

### Tag Architecture for Future Events
- `doe [month] [year] sequence` = enrolled in pre-event workflow (could be anyone)
- `doe [month] [year] - signin` = signed in on the website (saw VIP upsell)
- `level 2 workshop vip` = purchased VIP (persistent across events)

Only the sign-in form submission should trigger the signin tag. Not manual enrollment.
