# May 2026 DOE: Registration Broadcast SMS (paired with the two emails)

**Event:** Day of Enlightenment Workshop
**Dates:** Saturday, May 23 and Sunday, May 24, 2026
**Start time (both days):** 7:00 AM Pacific / 10:00 AM Eastern
**Send date:** Thursday, April 23, 2026 (paired with the registration broadcast emails)
**Registration URL:** https://neothinkday.com/register

Two audiences. Two messages. The audience filter must match the email split exactly so a given contact gets one SMS, not both.

---

## SMS A: First-Time Attendees

**Audience (GHL filter, must match Variant A email):**
- Level 2 member
- Not registered for the May 2026 DOE cohort
- No prior DOE attendance on record
- Not currently in any May 2026 event workflow

**Send time:** Send shortly after the email goes out (15 to 30 minutes later). The SMS is the inbox nudge.

```
Neothink Society: {{contact.first_name}}, your Day of Enlightenment is May 23-24.

Register to claim your seat:
neothinkday.com/register

Reply STOP to opt out.
```

**Character count:** ~148/160 (single segment, worst-case 11-char first name)

---

## SMS B: Returning Attendees

**Audience (GHL filter, must match Variant B email):**
- Level 2 member
- One or more prior DOE attendances on record
- Not registered for the May 2026 DOE cohort
- Not currently in any May 2026 event workflow

**Send time:** Send shortly after the email goes out (15 to 30 minutes later). The SMS is the inbox nudge.

```
Neothink Society: {{contact.first_name}}, you're invited back to the Day of Enlightenment May 23-24, included with your Level 2.

Register only if you want to attend:
neothinkday.com/register

Reply STOP to opt out.
```

**Character count:** ~203 (2 segments, acceptable)

---

## Optional follow-up reminders for returning attendees

The returning email tells members "we'll send a few more reminders in the next few weeks in case you change your mind." Suggested cadence (paired with email reminders if you send them):

### Reminder 1: 20 days out (Monday, May 4, 2026)

```
Neothink Society: {{contact.first_name}}, the Day of Enlightenment is in about 3 weeks. You're still invited back, included with your Level 2.

Register here if you want to attend:
neothinkday.com/register
```

**Character count:** ~190 (2 segments)

### Reminder 2: 10 days out (Wednesday, May 13, 2026)

```
Neothink Society: {{contact.first_name}}, 10 days out. You're still welcome to come back to the May 23-24 workshop.

If you want in, register here:
neothinkday.com/register
```

**Character count:** ~165 (2 segments)

### Reminder 3: 3 days out (Wednesday, May 20, 2026)

```
Neothink Society: {{contact.first_name}}, 3 days out. Last call to register if you want to come back to the May 23-24 workshop.

neothinkday.com/register

Reply STOP to opt out.
```

**Character count:** ~172 (2 segments)

> Note: include "Reply STOP to opt out" on the first message in any new campaign cycle and periodically thereafter (at minimum on the final reminder of a sequence). It does not need to repeat on every message in the same cycle, per A2P guidance.

---

## Compliance Checklist (both messages)

- [x] Sender ID: starts with "Neothink Society:"
- [x] No trigger words (no "free", "act now", "limited time", "last chance", "guaranteed", "claim now", "click here", "urgent", "hurry")
- [x] Uses "included" instead of "free"
- [x] No ALL CAPS (except the registered brand name "Neothink Society")
- [x] No URL shorteners (full neothinkday.com/register)
- [x] Business name included
- [x] Full URLs only
- [x] No em-dashes, no en-dashes (only hyphens in date "May 23-24")
- [x] Opt-out language present in initial broadcast and final reminder
- [x] No SHAFT content
- [x] Personalization variable used sparingly
- [x] Matches the registered campaign use case (event registration reminders for opted-in Level 2 members)

## Pre-Send Checks (project rules)

- [ ] Audience filters in GHL match the email audience filters exactly so no one gets both an SMS-A and SMS-B
- [ ] Confirm contacts have valid SMS opt-in status in GHL (TCR/A2P consent on record)
- [ ] Test send to a single internal number, verify rendering on iOS and Android
- [ ] Confirm `{{contact.first_name}}` falls back gracefully when missing (GHL default: removes the variable cleanly, but verify in test send)
- [ ] Confirm send time is at least 8:00 AM Pacific / 11:00 AM Eastern (carrier quiet hours: avoid before 8am or after 9pm in recipient timezone)
