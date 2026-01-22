# VIP Session SMS Messages

> **Note:** These messages are copy-pasted directly into GHL workflow SMS actions.
> GHL handles STOP/opt-out compliance automatically — do not add STOP language.

---

## VIP SESSION COUNTDOWN (Monday)

---

### Morning Reminder
**Offset:** +49h from T=0 (Mon 9:00 AM PT / 12:00 PM ET)

```
Neothink Society: Your VIP session is TONIGHT.

4:00 PM Pacific / 7:00 PM Eastern
With Wallace Hamilton and senior mentors

Check your email for the Zoom link.

This is your exclusive access. Be there.
```

**Character Count:** ~155/160

---

### 90-Minute Reminder
**Offset:** +54h 30m from T=0 (Mon 2:30 PM PT / 5:30 PM ET)

```
Neothink Society: VIP session in 90 MINUTES.

4:00 PM PT / 7:00 PM ET

Get settled. Have your notes from the workshop ready.

Zoom link in your email.
```

**Character Count:** ~135/160

---

### 1-Hour Reminder
**Offset:** +55h from T=0 (Mon 3:00 PM PT / 6:00 PM ET)

```
Neothink Society: VIP session in 1 HOUR.

4:00 PM PT / 7:00 PM ET

Wallace Hamilton and senior mentors are preparing for you.

Join: {{custom_values.doe_vip_session_zoom}}
```

**Character Count:** ~155/160

---

### Session LIVE
**Offset:** +56h from T=0 (Mon 4:00 PM PT / 7:00 PM ET)

```
Neothink Society: VIP Session is LIVE.

Wallace Hamilton is on now.

Join: {{custom_values.doe_vip_session_zoom}}
```

**Character Count:** ~100/160

---

### Late Joiner (15min)
**Offset:** +56h 15m from T=0 (Mon 4:15 PM PT / 7:15 PM ET)

```
Neothink Society: VIP session started.

Wallace Hamilton is live now. Join:
{{custom_values.doe_vip_session_zoom}}

You can still catch up.
```

**Character Count:** ~115/160

---

### Recording Available (Optional)
**Offset:** +71h from T=0 (Tue 7:00 AM PT / 10:00 AM ET)

```
Neothink Society: Your VIP session recording is ready.

3 hours of breakthrough insights with Wallace Hamilton.

Watch: {{custom_values.doe_vip_recording_url}}
```

**Character Count:** ~145/160

---

## COMPLETE SEND SCHEDULE

| Message | Offset | Time (PT) | Time (ET) |
|---------|--------|-----------|-----------|
| Morning Reminder | +49h | 9:00 AM | 12:00 PM |
| 90-Minute Reminder | +54h 30m | 2:30 PM | 5:30 PM |
| 1-Hour Reminder | +55h | 3:00 PM | 6:00 PM |
| Session LIVE | +56h | 4:00 PM | 7:00 PM |
| Late Joiner | +56h 15m | 4:15 PM | 7:15 PM |
| Recording Available | +71h | 7:00 AM | 10:00 AM |

---

## SMS BEST PRACTICES

- **No emojis** — Reduces limit from 160 to 70 characters
- **No ALL CAPS** — Except 1-2 words for emphasis
- **No URL shorteners** — Use custom values for URLs
- **Business name first** — "Neothink Society:" for identification
- **Single segment preferred** — Under 160 characters
- **GHL handles opt-out** — Do not add STOP language

---

## NOTES

- Uses `{{custom_values.doe_vip_session_zoom}}` for tracked Zoom links
- Uses `{{custom_values.doe_vip_recording_url}}` for recording access
- Late joiner SMS is optional — skip if attendance tracking shows they're in
- Recording SMS is optional — email is the primary channel for this
- VIP + Level 3 members both receive these messages

