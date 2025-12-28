# Email Template Rules

## Required Structure

Every HTML email must have:
1. **Subject line** in HTML comment at top
2. **Preheader text** (preview text in inbox)
3. **Send time/offset** in HTML comment
4. **Audience** specification (All, VIP, Non-VIP)

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
-->
```

## Design Standards

**Colors:**
- Background: #000000 (black)
- Primary accent: #FFD700 (gold)
- Text: #FFFFFF (white)
- Secondary text: #CCCCCC (light gray)

**Typography:**
- Headings: Baskervville (serif)
- Body: Plus Jakarta Sans (sans-serif)
- Fallbacks: Georgia, Arial

**Layout:**
- Max width: 600px
- Mobile breakpoint: 480px
- Padding: 20px minimum

## Validation Checklist

Before committing:
- [ ] All dates correct for event
- [ ] URLs point to correct domain
- [ ] Subject line in HTML comment
- [ ] Preheader text present
- [ ] GHL variables use valid syntax
- [ ] No placeholder URLs
- [ ] Mobile styles tested
- [ ] Images have alt text
