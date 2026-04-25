# May 2026 DOE: Registration Follow-Up SMS (paired with the two follow-up emails)

**Event:** Day of Enlightenment Workshop
**Dates:** Saturday, May 23 and Sunday, May 24, 2026
**Start time (both days):** 7:00 AM Pacific / 10:00 AM Eastern
**Send date:** Saturday, April 25, 2026 (paired with the follow-up emails)
**Registration URL:** https://neothinkday.com/register

Second touch. Sent to people who received the April 23 broadcast and have not registered (non-openers + openers who didn't click). Audience filter excludes anyone who is now registered.

---

## SMS A: First-Time Attendees Follow-Up

**Audience (GHL filter):**
- Level 2 member
- Not registered for the May 2026 DOE cohort
- No prior DOE attendance on record
- Received the April 23 broadcast (first-time variant)
- Did not register

**Send time:** Saturday, April 25, 2026, between 10:00 AM and 12:00 PM Pacific (avoid early morning, especially on a weekend).

```
Neothink Society: {{contact.first_name}}, your seat for the May 23-24 Day of Enlightenment is still waiting. Takes about a minute to register:

neothinkday.com/register
```

**Character count:** ~145/160 (single segment with worst-case 11-char first name)

---

## SMS B: Returning Attendees Follow-Up

**Audience (GHL filter):**
- Level 2 member
- One or more prior DOE attendances on record
- Not registered for the May 2026 DOE cohort
- Received the April 23 broadcast (returning variant)
- Did not register

**Send time:** Saturday, April 25, 2026, between 10:00 AM and 12:00 PM Pacific.

```
Neothink Society: {{contact.first_name}}, you're still welcome back to the Day of Enlightenment May 23-24, included with your Level 2.

neothinkday.com/register
```

**Character count:** ~150/160 (single segment with worst-case first name)

---

## Compliance Checklist

Same rules as the original broadcast SMS:
- [x] Sender ID "Neothink Society:" prefix
- [x] No trigger words ("free", "act now", etc. avoided)
- [x] No ALL CAPS
- [x] Bare-domain URL (no `https://`, saves chars and matches existing project pattern)
- [x] No em-dashes
- [x] Personalization variable used sparingly
- [x] No "Reply STOP" appended (this is the second touch in an established opt-in cycle; the original broadcast included STOP language. A2P guidance only requires periodic STOP language, not on every message)

If your campaign needs STOP on every message (some carriers/policies are stricter), add `Reply STOP to opt out.` on a new line. That pushes both messages to ~170 chars (2 segments). Acceptable.

## Send Sequence

1. Send the email follow-up first (around 9:00 AM Pacific Saturday)
2. Send the SMS 30 to 60 minutes after the email (~10:00 AM Pacific) so it lands as a reinforcing nudge for both non-openers and openers-who-didn't-act

Audience filters in GHL must match the email audience filters exactly so no one receives both A and B.
