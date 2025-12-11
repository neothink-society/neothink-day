# SMS Compliance Audit & Best Practices
## Day of Enlightenment — December 2025

**Created:** December 11, 2025
**Reason:** Golden Life Sheet SMS triggered carrier filtering and temporary suspension

---

## EXECUTIVE SUMMARY

### What Happened
The Golden Life Sheet SMS was flagged by carriers, resulting in temporary SMS suspension. This audit identifies why and how to prevent recurrence.

### Root Cause Analysis
Based on [GoHighLevel documentation](https://help.gohighlevel.com/support/solutions/articles/155000000079-best-practices-for-sms-deliverability-and-avoiding-sms-restrictions) and [carrier compliance guidelines](https://help.gohighlevel.com/support/solutions/articles/48001237726-how-do-i-prevent-my-messages-from-being-filtered-by-carriers-30007-), the likely causes were:

1. **Missing opt-out language** — Required in first message to new contacts and every 30 days
2. **Missing sender identification** — First messages must identify the business
3. **Unusual phrasing** — "Matrix of Illusions" may trigger spam filters as unusual/cultish language
4. **Arrow syntax** — Using "->" instead of standard URL formatting
5. **Potential volume spike** — Sending to all attendees at once may trigger rate-based filtering

---

## COMPLIANCE REQUIREMENTS (2025)

### Mandatory Elements (Every SMS Campaign)

| Requirement | Details | Source |
|-------------|---------|--------|
| **A2P 10DLC Registration** | Must be registered with The Campaign Registry | [GHL A2P Guide](https://help.gohighlevel.com/support/solutions/articles/155000002380-what-is-a2p-10-dlc-brand-and-campaign-registration) |
| **Opt-Out Language** | "Reply STOP to unsubscribe" in first message and every 30 days | TCPA 2025 |
| **Sender Identification** | Business name in first message to new contacts | TCPA 2025 |
| **Prior Consent** | Explicit opt-in required before sending | TCPA 2025 |
| **Quiet Hours** | No messages 9pm-8am recipient's local time | TCPA 2025 |

### Thresholds That Trigger Suspension (GoHighLevel)

| Metric | Warning | Suspension |
|--------|---------|------------|
| **Error Rate** | 6% | 10% |
| **Opt-Out Rate** | 2% | 3% |

*Suspension blocks all outbound SMS until 00:00 AM UTC the following day.*

---

## FORBIDDEN CONTENT

Per [GHL Forbidden Categories](https://help.gohighlevel.com/support/solutions/articles/48001219617):

### Completely Prohibited
- High-risk financial services (payday loans, crypto)
- "Get rich quick" schemes
- Third-party lead generation
- Debt collection/consolidation
- Cannabis/CBD
- Gambling

### Restricted (SHAFT)
- **S**ex content
- **H**ate speech
- **A**lcohol (age-gating required)
- **F**irearms
- **T**obacco

### Spam Trigger Words to Avoid
- FREE, GUARANTEE, GUARANTEED
- ACT NOW, LIMITED TIME
- $, $$, Money mentions without context
- "Get rich", "Make money fast"
- ALL CAPS phrases
- Excessive punctuation (!!!, ???)

---

## AUDIT: CURRENT SMS MESSAGES

### CRITICAL ISSUES (Must Fix Immediately)

#### Issue 1: Missing Opt-Out Language
**Files Affected:** ALL SMS files
**Problem:** None of the SMS files include opt-out language
**Fix:** Add "Reply STOP to opt out" to:
- First message to each contact
- At least one message per 30-day period

#### Issue 2: Missing Sender Identification
**Files Affected:** `post-event-value-sms.md`, others
**Problem:** Value series messages don't identify sender
**Fix:** Add "Neothink Society:" or similar to first message of each sequence

#### Issue 3: Unusual/Flagged Phrasing
**Flagged Terms Found:**

| Term | File | Risk Level | Recommendation |
|------|------|------------|----------------|
| "Matrix of Illusions" | post-event-value-sms.md | HIGH | Replace with "daily distractions" |
| "GUARANTEED" | pre-event-sms.md | HIGH | Remove or rephrase |
| "golden life" | Multiple | MEDIUM | Monitor, may be fine |
| "$400M wealth" | workshop-live-sms.md | MEDIUM | Add context |
| Arrow "->" | Multiple | LOW | Replace with "Link:" or line break |

#### Issue 4: Financial Offer Language
**Files Affected:** `level3-deadline/sms-messages.md`, `workshop-live-sms.md`
**Flagged Content:**
```
$1,997 to start. The rest ($3,003) only after you've earned $50K+
```
**Risk:** Could be flagged as "get rich quick" or high-risk financial
**Fix:** Add more context, avoid dollar amounts in SMS, direct to email instead

### MODERATE ISSUES (Should Fix)

#### Issue 5: URL Formatting
**Problem:** Using "->" arrows before URLs
**Current:** `-> neothinkevent.com/your-golden-life`
**Better:** `Link: neothinkevent.com/your-golden-life` or just the URL on its own line

#### Issue 6: Character Count / Message Splitting
Several messages exceed 160 characters and will split into multiple segments.
- Split messages have higher spam scores
- Recommendation: Keep under 160 chars where possible

#### Issue 7: No Source Attribution
**Problem:** Recipients may not remember opting in
**Fix:** Add reminder of how they joined: "You're receiving this as a Day of Enlightenment attendee."

---

## COMPLIANT SMS TEMPLATES

### Template: Value Resource Delivery (COMPLIANT)

**BEFORE (Flagged):**
```
Your Golden Life Sheet is ready.

One page. Six categories. Your daily anchor against the Matrix of Illusions.

Fill it out today. Revisit it each morning.

-> neothinkevent.com/your-golden-life
```

**AFTER (Compliant):**
```
Neothink Society: Your Golden Life Sheet is ready.

One page. Six categories. Your daily anchor for clarity and focus.

Link: neothinkevent.com/your-golden-life

Reply STOP to opt out
```

### Template: Event Reminder (COMPLIANT)

**BEFORE:**
```
⏰ 2 hours until Day of Enlightenment

If you're reading this at 6am Pacific — thank you for being up. ☕
```

**AFTER:**
```
Neothink Society: 2 hours until Day of Enlightenment

Doors open at 10:30am ET. Zoom link coming in 1 hour.

Questions? support@neothink.com

Reply STOP to opt out
```

### Template: Deadline/Offer (COMPLIANT)

**BEFORE:**
```
24 hours until your transformation.

Level 3 honor system expires tomorrow at midnight Eastern.

$1,997 to start. The rest ($3,003) only after you've earned $50K+ using what you learn. On your honor.
```

**AFTER:**
```
Neothink Society: Level 3 enrollment closes tomorrow midnight ET.

Details and pricing in your email. Questions? Book a call with a mentor.

Link: societysecrets.com/schedule-level-three-consultation

Reply STOP to opt out
```
*Note: Move financial details to email, not SMS*

---

## BEST PRACTICES CHECKLIST

### Before Sending ANY SMS Campaign

- [ ] A2P 10DLC registration verified and active
- [ ] First message includes business name
- [ ] First message includes opt-out instructions
- [ ] No spam trigger words (FREE, GUARANTEE, etc.)
- [ ] No unusual/cultish language
- [ ] URLs are full domain (no bit.ly, tinyurl)
- [ ] No financial offer details (direct to email instead)
- [ ] Character count under 160 if possible
- [ ] Sending during appropriate hours (8am-9pm local)
- [ ] List has explicit SMS opt-in consent
- [ ] Wait 24+ hours between A2P registration and sending

### Ongoing Monitoring

- [ ] Monitor opt-out rate (keep under 2%)
- [ ] Monitor error rate (keep under 6%)
- [ ] Re-send opt-out language every 30 days
- [ ] Remove bounced/errored numbers promptly
- [ ] Document consent for all contacts

---

## RECOMMENDED SMS RESTRUCTURE

### What to Keep in SMS
- Event reminders (time, date, Zoom link)
- Simple check-ins ("How are you feeling?")
- Resource notifications (point to email for details)
- Live event alerts ("We're starting now")

### What to Move to Email Only
- Financial offers and pricing
- Detailed descriptions of programs
- Long-form content
- Anything with dollar amounts
- Complex enrollment instructions

### Suggested Ratio
- **SMS:** Short, urgent, logistical
- **Email:** Detailed, promotional, financial

---

## ACTION ITEMS

### Immediate (Before Next Send)

1. **Add opt-out language** to all active SMS automations
2. **Add sender identification** ("Neothink Society:") to first messages
3. **Remove "Matrix of Illusions"** from Golden Life Sheet SMS
4. **Remove financial details** from Level 3 deadline SMS
5. **Verify A2P 10DLC registration** is active and approved

### Before December Event Emails Resume

1. Rewrite all SMS in `post-event-value-sms.md`
2. Rewrite all SMS in `level3-deadline/sms-messages.md`
3. Audit and update `pre-event-sms.md`
4. Create simplified SMS versions (point to email for details)

### Ongoing

1. Monitor GHL analytics for opt-out and error rates
2. Re-send opt-out language every 30 days to recurring contacts
3. Document all consent sources

---

## SOURCES

- [GHL: Best Practices for SMS Deliverability](https://help.gohighlevel.com/support/solutions/articles/155000000079-best-practices-for-sms-deliverability-and-avoiding-sms-restrictions)
- [GHL: Forbidden Message Categories](https://help.gohighlevel.com/support/solutions/articles/48001219617)
- [GHL: How to Prevent Carrier Filtering (Error 30007)](https://help.gohighlevel.com/support/solutions/articles/48001237726-how-do-i-prevent-my-messages-from-being-filtered-by-carriers-30007-)
- [GHL: A2P 10DLC Registration](https://help.gohighlevel.com/support/solutions/articles/155000002380-what-is-a2p-10-dlc-brand-and-campaign-registration)
- [SMS Compliance in 2025: TCPA Checklist](https://www.textmymainnumber.com/blog/sms-compliance-in-2025-your-tcpa-text-message-compliance-checklist)
- [2025 SMS Carrier Restrictions](https://subscriberverify.com/blog/sms-carrier-restrictions-2025)

---

**Document Version:** 1.0
**Last Updated:** December 11, 2025
