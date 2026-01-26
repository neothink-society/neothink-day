# Post-Event SMS Messages (All Attendees)

## Sunday Night - Anchor

```
Neothink Society: What a weekend! Your transformation is just beginning. Check your email for tonight's message.

Resources: {{custom_values.doe_workshop_hub_url}}
```

**Offset:** +3h from event end
**Character Count:** Variable (depends on URL length)

---

## Monday Morning - Recap & Events

```
Neothink Society: Good morning, Level 2 Neothinker! What an incredible weekend.

TODAY: L3 Q&A session (time TBA) + VIP session at 4pm PT / 7pm ET

WED: L3 Welcome Party at 4pm PT / 7pm ET

Check your email for full recap.
```

**Offset:** +46h (from T=0 at 8am PT Saturday = Monday 6am PT / 9am ET)
**Character Count:** ~175/160 — **REQUIRES 2 SEGMENTS**

**Alternative (single segment):**
```
Neothink Society: Good morning, Level 2 Neothinker! Check your email for the full weekend recap and today's events (L3 Q&A + VIP session).
```

**Character Count:** ~140/160

---

## Monday - Golden Life Sheet

```
Neothink Society: Your Golden Life Sheet is ready! This is where transformation becomes actionable.

Download: {{custom_values.doe_golden_life_url}}
```

**Offset:** +50h (Monday 10am PT / 1pm ET - after morning recap)
**Character Count:** Variable (depends on URL length)

---

## Tuesday - Wealth Engine

```
Neothink Society: Your Wealth Engine Calculator is ready. Calculate your path to financial freedom.

Access: {{custom_values.doe_wealth_engine_url}}
```

**Offset:** +39h
**Character Count:** Variable (depends on URL length)

---

## Wednesday - FNE Workbook

```
Neothink Society: Your Friday Night Essence workbook has arrived. Deepen your discovery.

Download: {{custom_values.doe_workbook_url}}
```

**Offset:** +63h
**Character Count:** Variable (depends on URL length)

---

## Thursday - Ambassador

```
Neothink Society: Ready to share what you've discovered? Learn how to become an Ambassador and help others transform.

Details: {{custom_values.doe_workshop_hub_url}}
```

**Offset:** +87h
**Character Count:** Variable (depends on URL length)

---

## Friday - Infinite Vector

```
Neothink Society: Your transformation is just beginning. Today's email reveals The Infinite Vector — your path forward.

Resources: {{custom_values.doe_workshop_hub_url}}
```

**Offset:** +111h
**Character Count:** Variable (depends on URL length)

---

## Custom Values Used

| SMS | Custom Value | Example URL |
|-----|--------------|-------------|
| Sunday | `doe_workshop_hub_url` | neothinkday.com/home |
| Monday | `doe_golden_life_url` | neothinkday.com/your-golden-life |
| Tuesday | `doe_wealth_engine_url` | neothinkday.com/wealth-engine-calculator |
| Wednesday | `doe_workbook_url` | societysecrets.com/workbook |
| Thursday | `doe_workshop_hub_url` | neothinkday.com/home |
| Friday | `doe_workshop_hub_url` | neothinkday.com/home |

---

## Notes

- SMS are companions to emails with direct resource links
- Custom values resolve to actual URLs in GHL
- Character count varies based on URL length (~100-150 chars typical)
- Focus on value delivery, not sales
