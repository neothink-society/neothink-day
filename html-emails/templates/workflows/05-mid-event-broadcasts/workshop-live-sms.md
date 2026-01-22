# Mid-Event Workshop SMS Messages

> **Note:** Day 1 and Day 2 "We're live" opening messages are handled automatically by
> `04-day-of-reminders/day-of-sms.md` using offset triggers (T=0 and +25h).
> This file contains only the manually-triggered mid-event broadcasts.

---

## Day 1 - WH Takes Stage

```
Neothink Society: Wallace Hamilton is now on stage! The Friday Night Essence discovery begins. Join: {{custom_values.doe_zoom_link}}
```

**Stage:** 2
**Character Count:** ~120/160

---

## Day 1 - WH Live Now (Late Joiner Hook)

```
Neothink Society: Wallace Hamilton is live now teaching about your Friday Night Essence! Join: {{custom_values.doe_zoom_link}}
```

**Stage:** 3
**Character Count:** ~120/160

---

## Day 1 - Lunch Break

```
Neothink Society: Lunch break! Return at {{custom_values.doe_day_1_return_time}} for the Wealth Engine segment. Get some food, stay energized!
```

**Stage:** 4
**Character Count:** ~130/160

---

## Day 1 - Back from Lunch

```
Neothink Society: We're back! Wealth Engine segment starting now. This is where your financial breakthrough happens. Join: {{custom_values.doe_zoom_link}}
```

**Stage:** 5
**Character Count:** ~140/160

---

## Day 1 - End

```
Neothink Society: Day 1 complete! Incredible breakthroughs today. Get rest—tomorrow we integrate everything. See you at {{custom_values.doe_day_2_start_time}}!
```

**Stage:** 7
**Character Count:** ~150/160

---

## Day 2 - Lunch Break

```
Neothink Society: Day 2 lunch break! Return at {{custom_values.doe_day_2_return_time}} for the final integration. Almost there!
```

**Stage:** 10
**Character Count:** ~115/160

---

## Day 2 - Back from Lunch

```
Neothink Society: Final session starting now! Integration and your path forward. This is it. Join: {{custom_values.doe_zoom_link}}
```

**Stage:** 11
**Character Count:** ~115/160

---

## Day 2 - L3 Offer

```
Neothink Society: Level 3 enrollment is now open! The next level of your transformation. Details: {{custom_values.doe_l3_enrollment_url}}
```

**Stage:** 14
**Character Count:** ~125/160

---

## Notes

- All SMS in this file are manually triggered via stage advancement
- Day 1/Day 2 opening ("we're live") messages are in `04-day-of-reminders/day-of-sms.md`
- Removed emoji to stay within 160 char standard SMS limit
- Lunch break SMS optional (not urgent)
- L3 offer SMS goes to all attendees
