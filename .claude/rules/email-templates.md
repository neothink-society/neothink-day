# Email Template Rules (Updated Dec 2025)

## Email Deliverability Requirements (2025)

**As of November 2025, Gmail and Microsoft REJECT non-compliant emails:**

| Requirement | Status | Notes |
|-------------|--------|-------|
| SPF authentication | Required | DNS record for sending domain |
| DKIM authentication | Required | Email signing |
| DMARC policy | Required | At minimum `p=none` |
| One-click unsubscribe | Required | Marketing emails must support |
| Spam rate < 0.1% | Required | Never exceed 0.3% |
| Valid From address | Required | Must match authenticated domain |

**⚠️ Non-compliant emails are now REJECTED outright, not just filtered to spam.**

**Verify with domain admin:**
- SPF record configured for sending domain
- DKIM signing enabled in GHL
- DMARC policy published
- `{{unsubscribe}}` link working

## Required Structure

Every HTML email must have:
1. **Subject line** in HTML comment at top
2. **Preheader text** (preview text in inbox)
3. **Send time/offset** in HTML comment
4. **Audience** specification (All, VIP, Non-VIP)
5. **Unsubscribe link** (using `{{unsubscribe}}`)

## HTML Comment Header Format

```html
<!--
  EMAIL: [Description]
  SUBJECT: [Primary subject line]
  ALT SUBJECTS:
    - [Alternative 1]
    - [Alternative 2]
  PREHEADER: [Preview text]
  SEND TIME: [Date/time or offset]
  AUDIENCE: [All / VIP / Non-VIP / Level 3]
  OFFSET: [e.g., -7d 2h from T=0]
-->
```

## Design Standards

**Colors:**
- Background: #000000 (black)
- Primary accent: #FFD700 (gold)
- Text: #FFFFFF (white)
- Secondary text: #CCCCCC (light gray)
- Links: #FFD700 (gold)

**Typography:**
- Headings: Baskervville (serif)
- Body: Plus Jakarta Sans (sans-serif)
- Fallbacks: Georgia, Arial

**Layout:**
- Max width: 600px
- Mobile breakpoint: 480px
- Padding: 20px minimum

## Subject Line Best Practices

**Avoid spam triggers in subject lines:**
- No ALL CAPS (except 1-2 words for emphasis)
- No excessive punctuation (!!!, ???)
- No deceptive claims
- No "RE:" or "FWD:" unless genuinely replying/forwarding

**Good patterns:**
- Personalization: `{{contact.first_name}}, your workshop starts tomorrow`
- Specificity: `Day 1 starts at 11am Eastern`
- Value-focused: `Your Golden Life Sheet is ready`

## Required Footer Elements

Every email must include:
```html
<!-- Footer -->
<p style="...">
    <a href="{{unsubscribe}}">Unsubscribe</a> |
    <a href="[privacy-url]">Privacy Policy</a>
</p>
<p style="...">
    © 2025 Neothink Society. All rights reserved.<br>
    [Physical address - required by CAN-SPAM]
</p>
```

## GHL Variable Reference

**Contact Fields:**
```
{{contact.first_name}}
{{contact.last_name}}
{{contact.email}}
```

**Custom Values:**
```
{{custom_values.doe_zoom_id}}
{{custom_values.doe_zoom_passcode}}
{{custom_values.doe_zoom_link}}
```

**Trigger Links:**
```
{{trigger_link.bw3pFLlMkAQiQOlYB674}}
```

**System:**
```
{{unsubscribe}}
{{location.name}}
```

## Validation Checklist

Before committing:
- [ ] All dates correct for event
- [ ] URLs point to correct domain
- [ ] Subject line in HTML comment
- [ ] Preheader text present
- [ ] GHL variables use valid syntax
- [ ] No placeholder URLs
- [ ] `{{unsubscribe}}` link in footer
- [ ] Physical address in footer (CAN-SPAM)
- [ ] Mobile styles tested
- [ ] Images have alt text
- [ ] No ALL CAPS subject lines
- [ ] No URL shorteners in content

## Deliverability Checklist (2025)

Before campaign launch, verify:
- [ ] SPF record configured
- [ ] DKIM signing enabled
- [ ] DMARC policy published
- [ ] Sending domain matches From address
- [ ] List hygiene (remove bounces, unsubscribes)
- [ ] Warm-up complete for new domains
- [ ] Test emails pass spam checks
