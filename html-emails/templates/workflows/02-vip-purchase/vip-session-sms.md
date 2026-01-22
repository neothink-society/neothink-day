# VIP Session SMS Messages

> **Note:** These messages are copy-pasted directly into GHL workflow SMS actions.
> GHL handles STOP/opt-out compliance automatically — do not add STOP language.

**T=0 Reference:** VIP Session start (Monday 4pm PT / 7pm ET)

---

## VIP SESSION COUNTDOWN (Monday)

---

### Morning Reminder
**Offset:** -7h from T=0 (Mon 9am PT / 12pm ET)
**GHL:** Schedule for specific date/time

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
**Offset:** -1h 30m from T=0 (Mon 2:30pm PT / 5:30pm ET)
**GHL:** Schedule for specific date/time

```
Neothink Society: VIP session in 90 MINUTES.

4:00 PM PT / 7:00 PM ET

Get settled. Have your notes from the workshop ready.

Zoom link in your email.
```

**Character Count:** ~135/160

---

### 1-Hour Reminder
**Offset:** -1h from T=0 (Mon 3pm PT / 6pm ET)
**GHL:** Schedule for specific date/time

```
Neothink Society: VIP session in 1 HOUR.

4:00 PM PT / 7:00 PM ET

Wallace Hamilton and senior mentors are preparing for you.

Zoom link coming in 30 minutes.
```

**Character Count:** ~140/160

---

### 30-Minute Reminder
**Offset:** -30m from T=0 (Mon 3:30pm PT / 6:30pm ET)
**GHL:** Schedule for specific date/time

```
Neothink Society: VIP SESSION IN 30 MINUTES.

Your exclusive session starts at 7pm ET (4pm PT).

JOIN: {{custom_values.doe_vip_session_zoom}}

Meeting ID: {{custom_values.doe_vip_session_id}}
Passcode: {{custom_values.doe_vip_session_passcode}}

See you inside.
```

**Character Count:** ~200 chars + Zoom URL (2-3 segments)

---

### Session LIVE
**Offset:** T=0 (Mon 4pm PT / 7pm ET)
**GHL:** Schedule for specific date/time

```
Neothink Society: VIP Session is LIVE.

Wallace Hamilton is on now.

Join: {{custom_values.doe_vip_session_zoom}}
```

**Character Count:** ~100/160

---

### Late Joiner (15min)
**Offset:** +15m from T=0 (Mon 4:15pm PT / 7:15pm ET)
**GHL Wait:** 15 minutes

```
Neothink Society: VIP session started.

Wallace Hamilton is live now. Join:
{{custom_values.doe_vip_session_zoom}}

You can still catch up.
```

**Character Count:** ~115/160

---

### Recording Available (Optional)
**Offset:** +15h from T=0 (Tue 7am PT / 10am ET)
**GHL Wait:** 15 hours

```
Neothink Society: Your VIP session recording is ready.

3 hours of breakthrough insights with Wallace Hamilton.

Watch: {{custom_values.doe_vip_recording_url}}
```

**Character Count:** ~145/160

---

## COMPLETE SEND SCHEDULE

**T=0 = VIP Session start (Monday 4pm PT / 7pm ET)**

| Message | Offset | GHL Config | Time (PT) | Time (ET) |
|---------|--------|------------|-----------|-----------|
| Morning Reminder | -7h | Schedule date/time | Mon 9am | Mon 12pm |
| 90-Minute Reminder | -1h 30m | Schedule date/time | Mon 2:30pm | Mon 5:30pm |
| 1-Hour Reminder | -1h | Schedule date/time | Mon 3pm | Mon 6pm |
| 30-Minute Reminder | -30m | Schedule date/time | Mon 3:30pm | Mon 6:30pm |
| Session LIVE | T=0 | Schedule date/time | Mon 4pm | Mon 7pm |
| Late Joiner | +15m | Wait 15 min | Mon 4:15pm | Mon 7:15pm |
| Recording Available | +15h | Wait 15 hours | Tue 7am | Tue 10am |

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

