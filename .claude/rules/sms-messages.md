# SMS Message Rules (Updated Dec 2025)

## 10DLC/A2P Compliance (Mandatory 2025)

**As of February 2025, all A2P SMS requires:**
- ✅ TCR Brand Registration (company info, tax ID)
- ✅ Campaign Registration (use case, sample messages)
- ✅ Explicit opt-in consent (double opt-in recommended)
- ✅ STOP/HELP keyword support
- ✅ Individual consent per business (no third-party list sharing per FCC 2025 rule)

**Penalties for non-compliance:**
- TCPA fines: $500-$1,500 per message
- Carrier fines: Up to $10,000 per violation
- Campaign suspension and number blacklisting

## Character Limits

| Type | Limit |
|------|-------|
| Standard SMS | 160 characters |
| With emojis/unicode | 70 characters |
| Multi-segment | 153 chars per segment |

**GHL Variable Expansion:**
- `{{contact.first_name}}` ≈ 10 characters
- Account for variable expansion in count

## Required Elements

1. **Sender ID**: Start with "Neothink Society:"
2. **Clear CTA**: What action to take
3. **Full URLs**: No shorteners (bit.ly, tinyurl, etc.)
4. **Opt-out language**: Include STOP instructions periodically

## Carrier Trigger Words - AVOID (2025 Updated)

**High Risk (causes filtering/blocking):**

| Category | Trigger Words |
|----------|---------------|
| Urgency | ACT NOW, LIMITED TIME, URGENT, HURRY |
| Scarcity | LAST CHANCE, DON'T MISS, LIMITED SPOTS |
| Financial | FREE, CASH, PRIZE, WINNER, GUARANTEED, CLAIM |
| Sales | BUY NOW, CLICK HERE, CONGRATULATIONS |
| Deceptive | Make $$$ fast, DOUBLE YOUR MONEY |

**Safe Alternatives:**

| Avoid | Use Instead |
|-------|-------------|
| FREE | complimentary, included |
| Act now | Join us, Reserve your spot |
| Limited time | Registration closes [date] |
| Last chance | Final day, Ends tonight |
| Don't miss | Stay present, Be there |
| Limited spots | Intimate group, Small group |
| Click here | Visit [full URL] |
| Urgent | Important update |
| Guaranteed | Included with your registration |

## Formatting Rules (2025 Carrier Standards)

- **No ALL CAPS** (except brand names, 2-3 words max)
- **No excessive punctuation** (!!!, ???)
- **No URL shorteners** (bit.ly, tinyurl flagged as spam)
- **No special characters** that reduce char limit
- **Include business name** for identification
- **No nonstandard spellings** ("H! h0w ar3 u?")
- **Avoid excessive emojis** (triggers filtering)

## SHAFT Content - STRICTLY FORBIDDEN

Carriers block these categories outright:
- **S**ex/Adult content
- **H**ate speech
- **A**lcohol promotion
- **F**irearms
- **T**obacco/Cannabis

**Also prohibited:**
- Payday loans, debt collection
- Cryptocurrency/investment schemes
- "Get rich quick" offers
- Affiliate marketing (high-risk)

## Consent & Opt-Out Requirements

**Opt-In:**
- Must have explicit consent before sending
- Double opt-in recommended for better deliverability
- Consent must be verifiable by third-party auditors
- Each business needs individual consent (no list sharing)

**Opt-Out:**
- Must include STOP instructions periodically
- Must honor STOP requests immediately
- Send one-time confirmation of unsubscribe
- Never text users who have opted out

## SMS File Format

```markdown
## SMS: [Name]
**Send Time:** [Date, Time]
**Offset:** [e.g., -7d 2h]
**Audience:** [All / VIP / Level 3]

\`\`\`
Neothink Society: [Message content]

[URL if needed]

Reply STOP to opt out.
\`\`\`

**Character Count:** [X]/160
```

## Pre-Send Checklist

- [ ] No trigger words (urgency, scarcity, financial)
- [ ] No ALL CAPS (except brand name)
- [ ] No URL shorteners
- [ ] Business name included
- [ ] Full URLs only
- [ ] Character count verified
- [ ] Matches registered campaign use case
- [ ] Opt-out language included (periodically)
