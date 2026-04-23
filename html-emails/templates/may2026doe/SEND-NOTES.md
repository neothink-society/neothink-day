# May 2026 Day of Enlightenment — Registration Broadcast Send Notes

**Send date:** Thursday, April 23, 2026 (morning)
**Event dates:** Saturday–Sunday, May 23–24, 2026
**Days out at send:** 30
**Registration URL:** https://neothinkday.com/register

Two variants. Same visual system, different messaging. Audience-split at the workflow level — a given contact should receive **one** of these, not both.

---

## Variant A — First-Time Attendees

**File:** `registration-broadcast-first-time.html`

**Audience (GHL filter):**
- Level 2 member
- Not registered for the May 2026 DOE cohort
- No prior DOE attendance on record
- Not currently in any May 2026 event workflow

**Subject line (primary):**
```
{{contact.first_name}}, your Day of Enlightenment is May 23–24 — claim your seat
```

**Alt subject lines:**
- `May 23–24 is yours. One step to make it official.`
- `{{contact.first_name}}, May 23–24 is 30 days away — claim your seat`
- `Your Day of Enlightenment begins May 23`

**Preheader:**
```
You've already made the investment. Registration is the moment you consciously commit to May 23–24 and activate your event hub, pre-work, and preparation sequence.
```

**Primary CTA:** `Claim My Seat for May 23–24 →` → `https://neothinkday.com/register`

**Framing:** Orientation Masterclass is complete → investment is made → the DOE is already yours → one step remaining to make it official → registration activates hub, pre-work, Secret Manuscript, calendar invite, Zoom link.

---

## Variant B — Returning Attendees

**File:** `registration-broadcast-returning.html`

**Audience (GHL filter):**
- Level 2 member
- One or more prior DOE attendances on record
- Not registered for the May 2026 DOE cohort
- Not currently in any May 2026 event workflow

**Subject line (primary):**
```
{{contact.first_name}}, the room opens again May 23–24 — come back deeper
```

**Alt subject lines:**
- `Return to the Day of Enlightenment — May 23–24, 2026`
- `{{contact.first_name}}, you know what this weekend does. May 23–24.`
- `The work continues. May 23–24.`

**Preheader:**
```
You've walked through these two days before. What emerges this time is not a repeat—it's the next layer. Register to confirm your seat.
```

**Primary CTA:** `Confirm My Seat for May 23–24 →` → `https://neothinkday.com/register`

**Framing:** Doesn't re-explain what the DOE is. Acknowledges prior attendance. Frames return as the next layer — same structure, different you. Four plain-spoken notes worth knowing:

1. **New this time: a dedicated member portal** — previous cohorts worked from public pages and email links; this cohort gets a logged-in portal at `/apps/web` built for this workshop (event hub, pre-work, Secret Manuscript, schedule, live Zoom link behind one login). Portal login is created at registration.
2. **Registration is per cohort** — previous registrations don't carry forward; complete the form for this workshop.
3. **VIP is purchased per workshop** — VIP from a prior DOE does not carry over. If they want VIP for May 23–24, they purchase it again at the end of registration.
4. **The pre-work is worth doing again** — same prompts, different doors depending on who's answering.

---

## GHL Setup Checklist

For each variant:

- [ ] Paste HTML into GHL Email Builder (HTML mode)
- [ ] Set From name and From address (must match authenticated sending domain)
- [ ] Set subject line from above
- [ ] Set preheader text from above
- [ ] Confirm `{{contact.first_name}}` renders with a sensible fallback for contacts without a first name
- [ ] Confirm `{{unsubscribe}}` link resolves in preview
- [ ] Send a test to yourself — check desktop Gmail, iOS Mail, and Outlook rendering (black background holds, gold CTA renders, Baskervville/Plus Jakarta fallbacks are acceptable)
- [ ] Confirm audience filter excludes already-registered contacts
- [ ] Confirm the two variants' audiences don't overlap (no one receives both)

## One thing to verify on the registration page

Both variants now promise a member portal login is created at registration. Before sending, confirm:

- `neothinkday.com/register` form submission creates a portal account in `apps/web` (or associates the registration with one) — not just a GHL contact record.
- First-time registrants receive credentials (magic link, password setup email, etc.) that get them into the portal.
- Returning attendees who already have an email on file in `apps/web` are linked to their existing account rather than erroring on duplicate email.
- The portal experience for this cohort (event hub, pre-work, Secret Manuscript, schedule, placeholder for live Zoom link) is deployed and accessible by Apr 23 — since the email goes out today, a contact who registers immediately will expect to be able to log in today.

If the portal isn't fully ready to receive logins today, consider either:
- Delaying the send until it is, or
- Softening the wording from "created on the spot" to "your portal login will arrive within 24 hours" (small edit in both HTMLs).
