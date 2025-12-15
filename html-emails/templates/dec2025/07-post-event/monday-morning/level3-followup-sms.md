# Level 3 Follow-up — SMS Sequence
## Monday, December 8, 2025

**AUDIENCE:** Non-L3 attendees ONLY (those who have NOT enrolled in Level 3)
**PURPOSE:** Gentle follow-up after workshop ends, before Wednesday deadline

**LINKS:**
- L3 Enrollment: societysecrets.com/level3
- Mentor Consultation: societysecrets.com/schedule-level-three-consultation
- Workshop Hub: neothinkevent.com/home

---

## SMS 1: Morning Follow-up
**Send Time:** Monday Dec 8, 9:00 AM ET / 6:00 AM PT
**Offset:** +1d 22h from T=0

```
Neothink Society: Good morning.

If you're feeling the pull toward Level 3, trust it. That feeling knows something your doubt doesn't.

The Stargazer Event is where Mark Hamilton helps you build your personal 2025 roadmap.

Details in your email.

societysecrets.com/level3
```

**Character Count:** ~260 chars (2 segments)

---

## SMS 2: Midday Follow-up
**Send Time:** Monday Dec 8, 2:00 PM ET / 11:00 AM PT
**Offset:** +2d 3h from T=0

```
Neothink Society: Spots are filling up.

We've welcomed new Level 3 members since yesterday. Welcome Party is Wednesday at 7pm ET.

Will you be there?

Questions? societysecrets.com/schedule-level-three-consultation

societysecrets.com/level3
```

**Character Count:** ~240 chars (2 segments)

---

## SMS 3: Afternoon Follow-up
**Send Time:** Monday Dec 8, 7:00 PM ET / 4:00 PM PT
**Offset:** +2d 8h from T=0

```
Neothink Society: 48 hours until Wednesday.

Level 3 honor system pricing expires Wednesday at midnight ET.

You're at a crossroads. One path leads back to life as usual. The other leads to the Stargazer Event.

Mark Hamilton is waiting for you.

societysecrets.com/level3
```

**Character Count:** ~270 chars (2 segments)

---

## SMS 4: Evening — L3 Ascend
**Send Time:** Monday Dec 8, 9:00 PM ET / 6:00 PM PT
**Offset:** +2d 10h from T=0

```
Neothink Society: One more thing before you sleep.

The VIP Session just ended. The breakthroughs were real. The energy was electric.

Level 3 members experienced it all.

If you're still on the fence, this is your sign.

societysecrets.com/level3
```

**Character Count:** ~235 chars (2 segments)
**Note:** Sent after VIP Session ends. Creates FOMO without being pushy.

---

## Implementation Notes

**GHL Workflow:** L3 Follow-up (Non-L3 only)
**Trigger:** Workshop ends + NOT tag:level-3

**Sequence:**
| # | Time (ET) | Offset | Content |
|---|-----------|--------|---------|
| 1 | 9:00 AM | +1d 22h | Morning Follow-up |
| 2 | 2:00 PM | +2d 3h | Midday Follow-up |
| 3 | 7:00 PM | +2d 8h | Afternoon Follow-up |
| 4 | 9:00 PM | +2d 10h | L3 Ascend |

**Total:** 4 SMS messages

**Conditional Logic:**
- IF contact purchases L3 → REMOVE from this sequence immediately
- Do NOT send to existing Level 3 members

**Key Dates:**
- Follow-up day: Monday Dec 8
- VIP Session: Monday Dec 8, 6pm ET
- Welcome Party: Wednesday Dec 10, 7pm ET
- Deadline: Wednesday Dec 10, midnight ET (Thu Dec 11, 12am)

**Tone:**
- Encouraging, not pushy
- Trust their intuition
- Create gentle FOMO after VIP Session
- Honor system framing

---

**Version:** 2.0
**Updated:** December 15, 2025
**Changed:** Added SMS 4 (L3 Ascend) for 9pm after VIP Session
