# SMS Message Rules

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

## Carrier Trigger Words - AVOID

**High Risk (spam filters):**
- FREE, Winner, Congratulations
- Act now, Limited time, Urgent
- Last chance, Don't miss, Hurry
- Click here, Buy now
- Cash, Prize, Claim

**Safe Alternatives:**

| Avoid | Use Instead |
|-------|-------------|
| FREE | complimentary, included |
| Act now | Join us, Reserve your spot |
| Limited time | Registration closes [date] |
| Last chance | Final day, Ends tonight |
| Don't miss | Stay present, Be there |
| Click here | Visit [full URL] |
| Urgent | Important update |

## Formatting Rules

- No ALL CAPS (except brand names, 2-3 words max)
- No excessive punctuation (!!!, ???)
- No URL shorteners
- No special characters that reduce char limit
- Include business name for identification

## SHAFT Content - NEVER INCLUDE

- **S**ex/Adult content
- **H**ate speech
- **A**lcohol promotion
- **F**irearms
- **T**obacco/Cannabis

## SMS File Format

```markdown
## SMS: [Name]
**Send Time:** [Date, Time]
**Offset:** [e.g., -7d 2h]

\`\`\`
Neothink Society: [Message content]

[URL if needed]
\`\`\`

**Character Count:** [X]/160
```
