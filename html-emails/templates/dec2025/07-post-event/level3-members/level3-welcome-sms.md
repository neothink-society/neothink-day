# Level 3 Welcome — SMS Sequence
## Sunday-Monday, December 7-8, 2025

**AUDIENCE:** Level 3 members ONLY
**PURPOSE:** Welcome L3 members, celebrate their decision, preview VIP Session

---

## SMS 1: Sunday Night — End of Event
**Send Time:** Sunday Dec 7, 9:00 PM ET / 6:00 PM PT
**Offset:** +1d 10h from T=0

```
Neothink Society: Tonight, you're different.

You trusted yourself. You made the leap. And now Level 3 is yours.

Tomorrow: Your VIP Session at 7pm ET.
Wednesday: Your Welcome Party.

Rest well, Level 3 member.
```

**Character Count:** ~250 chars (2 segments)

---

## SMS 2: Monday Morning — VIP Session Day
**Send Time:** Monday Dec 8, 9:00 AM ET / 6:00 AM PT
**Offset:** +1d 22h from T=0

```
Neothink Society: Good morning, Level 3 member.

Your VIP Session is TONIGHT at 7pm ET (4pm PT).

Wallace Hamilton and the senior mentors. Advanced strategies. Direct access.

Have ready: pen, paper, questions.

Zoom link coming 30 minutes before.
```

**Character Count:** ~260 chars (2 segments)

---

## Implementation Notes

**GHL Workflow:** L3 Welcome (L3 only)
**Trigger:** Level 3 purchase OR scheduled from T=0 for existing L3

**Sequence:**
| # | Day | Time (ET) | Offset | Content |
|---|-----|-----------|--------|---------|
| 1 | Sun | 9:00 PM | +1d 10h | End of Event |
| 2 | Mon | 9:00 AM | +1d 22h | VIP Session Day |

**Total:** 2 SMS messages

**Conditional Logic:**
- Only send to contacts with tag: `level-3`
- Do NOT send to Level 2 or non-L3 attendees

**Note:** L3 members ALSO receive:
- VIP Session SMS sequence (4 messages on Monday)
- Welcome Party SMS sequence (5 messages Tue-Thu)

---

**Version:** 1.0
**Created:** December 16, 2025
