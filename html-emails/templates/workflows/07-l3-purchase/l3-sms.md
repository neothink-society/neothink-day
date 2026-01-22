# L3 Purchase SMS Messages

> **Note:** These messages are copy-pasted directly into GHL workflow SMS actions.
> GHL handles STOP/opt-out compliance automatically — do not add STOP language.

---

## L3 PURCHASE CONFIRMATION

---

### Purchase Confirmation
**Offset:** Immediate (upon purchase)

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
**Offset:** 1 day, 10 hours (+34h from T=0) → Sun 6pm PT / 9pm ET

```
Neothink Society: What a weekend, Level 3 member.

Tomorrow at 4pm PT / 7pm ET, your VIP Session begins.

Rest well. See you there.
```

**Character Count:** ~130/160

---

### Monday Morning (VIP Session Day)
**Offset:** 1 day, 22 hours (+46h from T=0) → Mon 6am PT / 9am ET

```
Neothink Society: Good morning, Level 3 member.

Your VIP Session is tonight at 4pm PT / 7pm ET.

Check your email for the Zoom link.
```

**Character Count:** ~135/160

---

## WELCOME PARTY SEQUENCE (Wednesday)

---

### Welcome Party Reminder (Tuesday Evening)
**Offset:** 3 days, 8 hours (+80h from T=0) → Tue 4pm PT / 7pm ET

```
Neothink Society: Tomorrow is your Level 3 Welcome Party.

Wed 4pm PT / 7pm ET

This is where your inner circle journey begins.

Check your email for details.
```

**Character Count:** ~150/160

---

### Welcome Party Day (Wednesday Morning)
**Offset:** 3 days, 22 hours (+94h from T=0) → Wed 6am PT / 9am ET

```
Neothink Society: Today is your Level 3 Welcome Party.

4pm PT / 7pm ET

Zoom link in your email. We can't wait to celebrate with you.
```

**Character Count:** ~135/160

---

### Welcome Party 30 Minutes
**Offset:** 4 days, 7 hours, 30 minutes (+103.5h from T=0) → Wed 3:30pm PT / 6:30pm ET

```
Neothink Society: Welcome Party starts in 30 MINUTES.

Join: {{custom_values.doe_welcome_party_zoom}}

Get ready to celebrate.
```

**Character Count:** ~120/160

---

### Welcome Party LIVE
**Offset:** 4 days, 8 hours (+104h from T=0) → Wed 4pm PT / 7pm ET

```
Neothink Society: Welcome Party is LIVE.

Join us now: {{custom_values.doe_welcome_party_zoom}}

Your inner circle awaits.
```

**Character Count:** ~105/160

---

### Welcome Party Late Joiner (Optional)
**Offset:** 4 days, 8 hours, 15 minutes (+104h 15m from T=0) → Wed 4:15pm PT / 7:15pm ET

```
Neothink Society: Welcome Party has started.

Join now: {{custom_values.doe_welcome_party_zoom}}

We're celebrating — get in here.
```

**Character Count:** ~115/160

---

### Welcome Party Recording (Optional)
**Offset:** 4 days, 23 hours (+119h from T=0) → Thu 7am PT / 10am ET

```
Neothink Society: Your Welcome Party recording is ready.

The Stargazer Event awaits.

Watch: {{custom_values.doe_welcome_party_recording_url}}
```

**Character Count:** ~140/160

---

## COMPLETE SEND SCHEDULE

| Message | GHL Wait | Offset | Time (PT) | Time (ET) |
|---------|----------|--------|-----------|-----------|
| Purchase Confirmation | Immediate | — | — | — |
| Sunday Night | 1d 10h | +34h | 6pm | 9pm |
| Monday Morning | 1d 22h | +46h | 6am | 9am |
| Welcome Party Reminder | 3d 8h | +80h | 4pm | 7pm |
| Welcome Party Day | 3d 22h | +94h | 6am | 9am |
| Welcome Party 30min | 4d 7h 30m | +103.5h | 3:30pm | 6:30pm |
| Welcome Party LIVE | 4d 8h | +104h | 4pm | 7pm |
| Late Joiner (optional) | 4d 8h 15m | +104.25h | 4:15pm | 7:15pm |
| Recording (optional) | 4d 23h | +119h | 7am | 10am |

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

