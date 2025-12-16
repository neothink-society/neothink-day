# VIP Session — SMS Sequence
## Monday, December 8, 2025

**AUDIENCE:** VIP + Level 3 members ONLY
**VIP SESSION TIME:** 4:00 PM PT / 5:00 PM MT / 6:00 PM CT / 7:00 PM ET

---

## Zoom Details
- **Link:** {{custom_values.vip_session_zoom}}
- **Meeting ID:** {{custom_values.vip_session_id}}
- **Passcode:** {{custom_values.vip_session_passcode}}

---

## SMS 1: Morning Reminder
**Send Time:** Monday Dec 8, 10:00 AM ET / 7:00 AM PT
**Offset:** +1d 23h from T=0

```
Neothink Society: Your VIP Session is TODAY.

4pm PT / 7pm ET — exclusive for VIP + Level 3 members.

Advanced strategies. Intimate setting. Direct access.

Save the Zoom link — we'll send it again 30 minutes before.

See you this afternoon.
```

**Character Count:** ~220 chars (2 segments)

---

## SMS 2: 1-Hour Reminder
**Send Time:** Monday Dec 8, 6:00 PM ET / 3:00 PM PT
**Offset:** +2d 7h from T=0

```
Neothink Society: VIP SESSION IN 1 HOUR.

Your exclusive session starts at 7pm ET (4pm PT).

Have ready:
- Water
- Pen and paper
- Quiet space

Zoom link coming in 30 minutes.
```

**Character Count:** ~185 chars (2 segments)

---

## SMS 3: 30-Minute Alert
**Send Time:** Monday Dec 8, 6:30 PM ET / 3:30 PM PT
**Offset:** +2d 7h 30m from T=0

```
Neothink Society: VIP SESSION IN 30 MINUTES.

Your exclusive session starts at 7pm ET (4pm PT).

JOIN: {{custom_values.vip_session_zoom}}

Meeting ID: {{custom_values.vip_session_id}}
Passcode: {{custom_values.vip_session_passcode}}

See you inside.
```

**Character Count:** ~200 chars + Zoom URL (2-3 segments)

---

## SMS 4: We're LIVE
**Send Time:** Monday Dec 8, 7:00 PM ET / 4:00 PM PT
**Offset:** +2d 8h from T=0

```
Neothink Society: We're LIVE!

The VIP Session is starting NOW.

JOIN: {{custom_values.vip_session_zoom}}

We're waiting for you inside.
```

**Character Count:** ~130 chars + Zoom URL (2 segments)

---

## Implementation Notes

**GHL Workflow:** VIP Session (VIP + L3 only)
**Trigger:** Scheduled from T=0, condition: tag:vip OR tag:level-3

**Sequence:**
| # | Time (ET) | Offset | Content |
|---|-----------|--------|---------|
| 1 | 10:00 AM | +1d 23h | Morning Reminder |
| 2 | 6:00 PM | +2d 7h | 1-Hour Reminder |
| 3 | 6:30 PM | +2d 7h 30m | 30-Minute Alert |
| 4 | 7:00 PM | +2d 8h | LIVE |

**Total:** 4 SMS messages

**GHL Custom Values:**
- `{{custom_values.vip_session_zoom}}` - Full Zoom URL
- `{{custom_values.vip_session_id}}` - Meeting ID number
- `{{custom_values.vip_session_passcode}}` - Passcode

**Audience:**
- VIP ticket holders
- Level 3 members (L3 gets VIP access)

**Do NOT send to:**
- General Level 2 members
- Non-VIP attendees

---

**Version:** 2.1
**Updated:** December 15, 2025
**Changed:**
- Fixed times to 4pm PT / 7pm ET (was incorrectly 3pm PT / 6pm ET)
- Added all 4 time zones in header (PT/MT/CT/ET)
- Adjusted all send times and offsets accordingly
- Added Neothink Society prefix to all messages
