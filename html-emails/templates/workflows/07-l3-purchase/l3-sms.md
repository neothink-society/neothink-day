# L3 Purchase SMS Messages

> **Note:** These messages are copy-pasted directly into GHL workflow SMS actions.
> GHL handles STOP/opt-out compliance automatically — do not add STOP language.

**T=0 Reference (Welcome Party):** Wednesday 4pm PT / 7pm ET

---

## L3 PURCHASE CONFIRMATION

---

### Purchase Confirmation
**Timing:** Immediate (upon purchase)
**GHL:** Immediate

```
Neothink Society: Welcome to Level 3. You're in the inner circle.

Check your email for VIP Session and Welcome Party details.

Your transformation continues.
```

**Character Count:** ~140/160

---

## POST-WORKSHOP SEQUENCE

---

### Sunday Night
**Timing:** Sunday 6pm PT / 9pm ET
**GHL:** Schedule for specific date/time

```
Neothink Society: What a weekend, Level 3 member.

Tomorrow at 4pm PT / 7pm ET, your VIP Session begins.

Rest well. See you there.
```

**Character Count:** ~130/160

---

### Monday Morning (VIP Session Day)
**Timing:** Monday 9am PT / 12pm ET
**GHL:** Schedule for specific date/time

```
Neothink Society: Good morning, Level 3 member.

Your VIP Session is tonight at 4pm PT / 7pm ET.

Check your email for the Zoom link.
```

**Character Count:** ~135/160

---

## WELCOME PARTY SEQUENCE (T=0 = Wednesday 4pm PT / 7pm ET)

---

### Welcome Party Reminder (Tuesday Evening)
**Offset:** -24h from T=0 (Tue 4pm PT / 7pm ET)
**GHL:** Schedule for specific date/time

```
Neothink Society: Tomorrow is your Level 3 Welcome Party.

Wed 4pm PT / 7pm ET

This is where your inner circle journey begins.

Check your email for details.
```

**Character Count:** ~150/160

---

### Welcome Party Day (Wednesday Morning)
**Offset:** -7h from T=0 (Wed 9am PT / 12pm ET)
**GHL:** Schedule for specific date/time

```
Neothink Society: Today is your Level 3 Welcome Party.

4pm PT / 7pm ET

Zoom link in your email. We can't wait to celebrate with you.
```

**Character Count:** ~135/160

---

### Welcome Party 30 Minutes
**Offset:** -30m from T=0 (Wed 3:30pm PT / 6:30pm ET)
**GHL:** Schedule for specific date/time

```
Neothink Society: Welcome Party starts in 30 MINUTES.

Join: {{custom_values.doe_welcome_party_zoom}}

Get ready to celebrate.
```

**Character Count:** ~120/160

---

### Welcome Party LIVE
**Offset:** T=0 (Wed 4pm PT / 7pm ET)
**GHL:** Schedule for specific date/time

```
Neothink Society: Welcome Party is LIVE.

Join us now: {{custom_values.doe_welcome_party_zoom}}

Your inner circle awaits.
```

**Character Count:** ~105/160

---

### Welcome Party Late Joiner (Optional)
**Offset:** +15m from T=0 (Wed 4:15pm PT / 7:15pm ET)
**GHL Wait:** 15 minutes

```
Neothink Society: Welcome Party has started.

Join now: {{custom_values.doe_welcome_party_zoom}}

We're celebrating — get in here.
```

**Character Count:** ~115/160

---

### Welcome Party Recording (Optional)
**Offset:** +15h from T=0 (Thu 7am PT / 10am ET)
**GHL Wait:** 15 hours

```
Neothink Society: Your Welcome Party recording is ready.

The Stargazer Event awaits.

Watch: {{custom_values.doe_welcome_party_recording_url}}
```

**Character Count:** ~140/160

---

## COMPLETE SEND SCHEDULE

**Part A: Post-Purchase Onboarding (Scheduled Dates)**

| Message | GHL Config | Time (PT) | Time (ET) |
|---------|------------|-----------|-----------|
| Purchase Confirmation | Immediate | — | — |
| Sunday Night | Schedule date/time | Sun 6pm | Sun 9pm |
| Monday Morning | Schedule date/time | Mon 9am | Mon 12pm |

**Part B: Welcome Party Reminders (T=0 = Wed 4pm PT / 7pm ET)**

| Message | Offset | GHL Config | Time (PT) | Time (ET) |
|---------|--------|------------|-----------|-----------|
| Welcome Party Reminder | -24h | Schedule date/time | Tue 4pm | Tue 7pm |
| Welcome Party Day | -7h | Schedule date/time | Wed 9am | Wed 12pm |
| Welcome Party 30min | -30m | Schedule date/time | Wed 3:30pm | Wed 6:30pm |
| Welcome Party LIVE | T=0 | Schedule date/time | Wed 4pm | Wed 7pm |
| Late Joiner (optional) | +15m | Wait 15 min | Wed 4:15pm | Wed 7:15pm |
| Recording (optional) | +15h | Wait 15 hours | Thu 7am | Thu 10am |

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

- Uses `{{custom_values.doe_welcome_party_zoom}}` for Welcome Party Zoom link
- Uses `{{custom_values.doe_welcome_party_recording_url}}` for recording access
- Late joiner SMS is optional — skip if attendance tracking shows they're in
- Recording SMS is optional — email is the primary channel for this
- Level 3 members ONLY — not for VIP-only or standard registrants

