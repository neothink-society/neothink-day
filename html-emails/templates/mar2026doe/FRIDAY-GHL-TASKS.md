# GHL Tasks — Friday, March 13, 2026

## BEFORE 7AM (Must complete before morning reminders send)

### 1. Update Pre-Event Sequence Workflow Tag
The pre-event sequence currently adds a tag like `registered doe march 2026` or similar.
**Change it to:** `doe march 2026 sequence`
This tag means "in the pre-event workflow" — NOT that they registered.

### 2. Fix DOE 01 Registration Confirmation Workflow
The registration confirmation workflow should ONLY fire the `doe march 2026 registered` tag
when someone submits the actual registration form.
**Verify:** The `doe march 2026 registered` tag is NOT being added to manually-enrolled contacts.

### 3. Add If/Else to Every Pre-Event Message (GHL Workflow)
In the pre-event sequence, before every SMS and email send step, add:

**If/Else condition:** Contact has tag `doe march 2026 registered`
- YES → send to `neothinkday.com/home`
- NO → send to `neothinkday.com/register`

Apply this to every send step — email and SMS pairs:

| Send | Has tag (YES branch) | No tag (NO branch) |
|------|---------------------|-------------------|
| Fri morning email | preparation-01day-morning.html | preparation-01day-morning-unregistered.html |
| Fri morning SMS | Version A1 (pre-event-sms.md) | Version A2 (pre-event-sms.md) |
| Fri evening email | preparation-01day-evening.html | preparation-01day-evening-unregistered.html |
| Fri evening SMS | Version B1 (pre-event-sms.md) | Version B2 (pre-event-sms.md) |
| Sat morning email | day1-morning.html | day1-morning-unregistered.html |
| Sat morning SMS | Version C1 (pre-event-sms.md) | Version C2 (pre-event-sms.md) |
| Sun morning email | day2-morning.html | day2-morning-unregistered.html |
| Sun morning SMS | Version F1 (pre-event-sms.md) | Version F2 (pre-event-sms.md) |

After Sat doors open (7am PT): All remaining messages use Zoom trigger link — NO if/else.

After event starts (Zoom link and beyond): No if/else — everyone gets Zoom trigger link.

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
- Custom values say: Doors open 7am PT, Wallace starts 8am PT
- Pre-event sequence workflow shows: 8am start time
**Clarification:** Doors open at 7am PT. Wallace takes stage at 8am PT.
- [ ] Update pre-event workflow timing/copy to reflect 7am doors, 8am workshop start
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
(which appears on the post-submit page of the registration form).

**The fix:** The if/else condition (item 3 above) ensures anyone without `doe march 2026 registered`
gets directed to the registration form first. Once they submit, they:
1. Get tagged `doe march 2026 registered`
2. See the VIP upsell on the post-submit page
3. Subsequent messages send them to the dashboard

For future events, set this up from day one so ALL contacts go through registration.
Never manually add someone to the pre-event workflow without also sending them the registration link first.

### Tag Architecture for Future Events
- `doe [month] [year] sequence` = enrolled in pre-event workflow (could be anyone)
- `doe [month] [year] registered` = submitted the registration form (saw VIP upsell)

Only the registration FORM submission should trigger the `registered` tag. Not manual enrollment.
