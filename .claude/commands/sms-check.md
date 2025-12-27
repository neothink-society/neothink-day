---
allowed-tools: Read, Bash, Grep, Glob
description: Check SMS messages for carrier compliance and trigger words
argument-hint: "[file-or-folder]"
---

# SMS Compliance Check

Validate SMS messages for carrier filtering risks and best practices.

## Target
$ARGUMENTS (or scan all SMS files if not provided)

## Checks to Perform

### 1. Character Count
- **Standard SMS**: 160 characters max
- **With special chars** (emojis, unicode): 70 characters max
- **GHL variables**: Estimate expansion ({{contact.first_name}} ≈ 10 chars)

### 2. Carrier Trigger Words (HIGH RISK)
Flag these words that commonly trigger spam filters:

**Financial/Scam Triggers:**
- FREE, free, Free (especially "FREE!")
- Winner, Won, Congratulations
- Cash, Money, $$, Dollar
- Claim, Collect, Prize
- Credit, Debt, Loan
- Investment, Bitcoin, Crypto

**Urgency/Pressure:**
- Act now, Limited time, Expires
- Urgent, Immediately, ASAP
- Last chance, Final notice
- Don't miss, Hurry

**Marketing Spam:**
- Buy now, Order now, Shop now
- Click here, Click below
- Subscribe, Unsubscribe (without proper opt-out)
- Deal, Discount, Sale, Offer, Promo

### 3. SHAFT Content (Carrier Blocked Categories)
- **S**ex/Adult content
- **H**ate speech
- **A**lcohol
- **F**irearms
- **T**obacco/Cannabis

### 4. Formatting Red Flags
- ALL CAPS WORDS (more than 2 consecutive)
- Excessive punctuation (!!!, ???, $$$)
- URL shorteners (bit.ly, tinyurl, t.co, goo.gl, ow.ly)
- Multiple phone numbers
- Suspicious patterns (txt, 2win, 4free)

### 5. Best Practices Check
- Has business name identification
- Clear call-to-action
- No deceptive content
- Proper opt-out available (for marketing)

## Output Format

```
═══════════════════════════════════════════════════
SMS COMPLIANCE CHECK
═══════════════════════════════════════════════════

FILE: pre-event-sms.md

───────────────────────────────────────────────────
MESSAGE 1: "29 Days Out"
───────────────────────────────────────────────────
Characters: 142/160 ✓
With variables: ~152/160 ✓

⚠ WARNINGS:
• Line contains "FREE" - consider lowercase or removing

✗ ERRORS:
• URL shortener detected: bit.ly

✓ PASSED:
• No SHAFT content
• Proper formatting
• Business identified

───────────────────────────────────────────────────
SUMMARY
───────────────────────────────────────────────────
Messages checked: 12
✓ Passed: 10
⚠ Warnings: 2
✗ Errors: 0

CARRIER RISK: LOW / MEDIUM / HIGH
```

## Trigger Word Reference

### Replace These:
| Avoid | Use Instead |
|-------|-------------|
| FREE | complimentary, included, no cost |
| Act now | Join us, Reserve your spot |
| Limited time | Registration closes [date] |
| Click here | Visit [full URL] |
| Winner | Selected, Chosen |
| Urgent | Important update |
| Don't miss | Mark your calendar |

### Safe Patterns:
- Event reminders with dates/times
- Zoom link delivery (factual)
- Confirmation messages
- Workshop timing updates
