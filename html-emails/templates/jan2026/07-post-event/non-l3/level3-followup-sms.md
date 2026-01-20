# Level 3 Post-Event SMS Sequence — Non-L3 Attendees
## January 26-28, 2026

**AUDIENCE:** Non-L3 attendees ONLY
**PURPOSE:** Strategic SMS touchpoints to support L3 conversion without being pushy
**PHILOSOPHY:** Quality over quantity. Each SMS has a specific purpose.

**LINK:** societysecrets.com/level3

---

## SMS Schedule Overview

| Day | Time | Message | Purpose |
|-----|------|---------|---------|
| Mon | 9:00 PM ET | Post-VIP Session | FOMO after live event |
| Tue | 7:00 PM ET | 24 Hours Left | Urgency milestone |
| Wed | 6:00 PM ET | 6 Hours Left | Welcome Party starting |
| Wed | 9:00 PM ET | Final Message | Last call |

**Total: 4 SMS over 3 days** (not counting Value-First Week SMS which goes to ALL attendees)

---

## SMS 1: Post-VIP Session
**Send Time:** Monday Jan 26, 9:00 PM ET / 6:00 PM PT
**Offset:** +2d 10h from T=0

```
Neothink Society: The VIP Session just ended.

The breakthroughs were real. The energy was electric.

Level 3 members experienced it all.

If you're still considering, this is your sign.

societysecrets.com/level3
```

**Character Count:** ~210 chars (2 segments)
**Note:** Sent after VIP Session ends. Creates FOMO from real event.

---

## SMS 2: 24 Hours Remaining
**Send Time:** Tuesday Jan 27, 7:00 PM ET / 4:00 PM PT
**Offset:** +3d 8h from T=0

```
Neothink Society: 24 hours until the door closes.

Tomorrow at midnight, the workshop pricing for Level 3 ends.

Wednesday night is the Welcome Party. You could still be there.

societysecrets.com/level3
```

**Character Count:** ~225 chars (2 segments)
**Note:** Pairs with "Door Closes Tomorrow" email. Urgency without panic.

---

## SMS 3: Welcome Party Starting
**Send Time:** Wednesday Jan 28, 6:00 PM ET / 3:00 PM PT
**Offset:** +4d 7h from T=0

```
Neothink Society: 6 hours left.

The Welcome Party starts in one hour. Level 3 members are gathering to meet each other and receive their Stargazer Event invitations.

If you want to join them: societysecrets.com/level3

Deadline: Midnight ET
```

**Character Count:** ~265 chars (2 segments)
**Note:** Timed for 1 hour before Welcome Party. Maximum FOMO moment.

---

## SMS 4: Final Message
**Send Time:** Wednesday Jan 28, 9:00 PM ET / 6:00 PM PT
**Offset:** +4d 10h from T=0

```
Neothink Society: 3 hours left.

The Welcome Party just ended. New members are already connected.

At midnight, the workshop pricing closes.

This is our final message.

societysecrets.com/level3
```

**Character Count:** ~220 chars (2 segments)
**Note:** Final touch. Acknowledges deadline, doesn't guilt-trip.

---

## Implementation Notes

### GHL Workflow Configuration
**Workflow Name:** L3 Post-Event (Non-L3 only)
**Trigger:** Tag `doe-attendee` AND NOT tag `level-3`

**Conditional Logic:**
- Check tag `level-3` before EACH send
- IF contact purchases L3 before send time → Remove from workflow
- Stop all remaining messages immediately upon L3 purchase

### Key Dates
- VIP Session: Monday Jan 26, 7pm ET (4pm PT)
- SMS 1: Monday Jan 26, 9pm ET (after VIP)
- SMS 2: Tuesday Jan 27, 7pm ET (24h warning)
- Welcome Party: Wednesday Jan 28, 7pm ET (4pm PT)
- SMS 3: Wednesday Jan 28, 6pm ET (1hr before party)
- SMS 4: Wednesday Jan 28, 9pm ET (after party)
- Deadline: Wednesday Jan 28, midnight ET

### Tone Guidelines
- Direct but respectful
- Real urgency (actual deadlines, actual events)
- No manufactured panic
- Each message has a specific reason to exist

---

## Why 4 SMS (Not More, Not Less)

**Rationale:**
- Monday 9pm: VIP just ended — real FOMO from real event
- Tuesday 7pm: 24-hour milestone — natural urgency point
- Wednesday 6pm: Welcome Party imminent — highest FOMO moment
- Wednesday 9pm: After party, before deadline — final call

**We deliberately skip:**
- Monday morning (they're getting Value-First email)
- Tuesday morning (no natural milestone)
- Wednesday morning (email covers it)
- Wednesday afternoon (email covers it, don't double-tap)

---

**Version:** 1.0
**Created:** January 2026
**Based on:** December 2025 sequence (v4.0)
