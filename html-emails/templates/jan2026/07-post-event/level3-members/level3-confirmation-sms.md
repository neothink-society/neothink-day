# Level 3 Purchase Confirmation — SMS
## Trigger-Based (Immediate)

**TRIGGER:** Immediately after Level 3 purchase is completed
**AUDIENCE:** New Level 3 members only

---

## SMS: Purchase Confirmation

```
Neothink Society: Welcome to Level 3!

You're officially in the inner circle.

NEXT STEPS:
1. Check your email for full details
2. VIP Session: Mon Jan 26, 7pm ET (you have access!)
3. Welcome Party: Wed Jan 28, 7pm ET

Your transformation begins now.

Questions? support@neothink.com
```

**Character Count:** ~270 chars (2 segments)

---

## Implementation Notes

**GHL Workflow:** L3 Purchase (Trigger-based)
**Trigger:** Payment success webhook for Level 3

**Automation Actions:**
1. Add tag: `level-3`
2. Send this SMS immediately
3. Send `level3-confirmation.html` email
4. REMOVE from L3 Deadline/Follow-up sequences
5. ADD to Welcome Party sequence
6. ADD to VIP Session sequence (L3 gets VIP access)

**Timing:** Send within 1 minute of successful purchase

**Purpose:**
- Immediate confirmation they're in
- Quick summary of next steps
- Excitement and reassurance

---

**Version:** 2.1
**Updated:** January 2026
**Changed:** Updated from December 2025 to January 2026 dates
