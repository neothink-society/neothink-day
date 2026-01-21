# L3 Purchase SMS Messages

## Purchase Confirmation

```
Neothink Society: Welcome to Level 3! You're in the inner circle now. Check your email for what happens next, including your VIP Session and Welcome Party details.
```

**Send Time:** Immediately upon purchase
**Character Count:** ~165/160 (may need shortening)

---

## Sunday Night

```
Neothink Society: What a weekend, Level 3 member. Tomorrow at {{custom_values.doe_vip_session_time}}, your VIP Session begins. Rest well — see you there.
```

**Offset:** +34h from T=0
**Character Count:** ~150/160

---

## Monday Morning (VIP Session Day)

```
Neothink Society: Good morning, Level 3 member. Your VIP Session is tonight at {{custom_values.doe_vip_session_time}}. Check your email for the Zoom link.
```

**Offset:** +46h from T=0
**Character Count:** ~150/160

---

## Welcome Party 30 Minutes

```
Neothink Society: Your Level 3 Welcome Party starts in 30 minutes! Join: {{custom_values.doe_welcome_party_zoom}}
```

**Offset:** +103.5h from T=0 (Wed 6:30pm ET)
**Character Count:** ~115/160

---

## Welcome Party LIVE

```
Neothink Society: Welcome Party is LIVE NOW! Join us to celebrate: {{custom_values.doe_welcome_party_zoom}}
```

**Offset:** +104h from T=0 (Wed 7pm ET)
**Character Count:** ~105/160

---

## Welcome Party Recording (Optional)

```
Neothink Society: Your Welcome Party recording is ready. The Stargazer Event awaits. Watch: {{custom_values.doe_welcome_party_recording_url}}
```

**Offset:** +119h from T=0 (Thu 10am ET)
**Character Count:** ~140/160

---

## Notes

- SMS should only go to Level 3 members
- The LIVE notification is the most critical SMS
- Avoid trigger words like "FREE" or "CONGRATULATIONS"
- Include "Neothink Society:" prefix for carrier compliance
