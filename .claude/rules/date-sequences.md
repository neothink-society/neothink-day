# Date Sequence Rules

## Event Timeline

**Day of Enlightenment** is a 2-day workshop + follow-up events:
- Day 1 (Saturday): 8:00 AM Pacific / 11:00 AM Eastern
- Day 2 (Sunday): 9:00 AM Pacific / 12:00 PM Eastern
- L3 Welcome Party (Monday): 4:00 PM Pacific / 7:00 PM Eastern
- L3 Offer Close (Wednesday): 4:00 PM Pacific / 7:00 PM Eastern

## Offset Calculation

**IMPORTANT:** GHL is configured for **Pacific Time**. All offsets are calculated from Pacific time T=0 values.

**Formula:** Target send time relative to event start (T=0)

**T=0 Reference Points:**
- Saturday T=0 = 8:00 AM Pacific
- Sunday T=0 = 9:00 AM Pacific (+25h from Saturday T=0)
- Monday T=0 = 4:00 PM Pacific (+56h from Saturday T=0)
- Wednesday T=0 = 4:00 PM Pacific (+104h from Saturday T=0)

**Offset Format:** `-Nd Nh` or `+Nd Nh`

### Pre-Event Offsets (negative from Saturday T=0)

To send at **9:00 AM Pacific** (optimal send time for engagement):
- T=0 = 8:00 AM Pacific
- 9:00 AM Pacific = 1 hour AFTER T=0
- Use offset: `-(X-1)d 23h` for X days before

| Days Before | Send Time | Offset |
|-------------|-----------|--------|
| 30 days | 9 AM PT / 12 PM ET | -29d 23h |
| 25 days | 9 AM PT / 12 PM ET | -24d 23h |
| 20 days | 9 AM PT / 12 PM ET | -19d 23h |
| 14 days | 9 AM PT / 12 PM ET | -13d 23h |
| 10 days | 9 AM PT / 12 PM ET | -9d 23h |
| 9 days | 9 AM PT / 12 PM ET | -8d 23h |
| 7 days | 9 AM PT / 12 PM ET | -6d 23h |
| 5 days | 9 AM PT / 12 PM ET | -4d 23h |
| 4 days | 9 AM PT / 12 PM ET | -3d 23h |
| 3 days | 9 AM PT / 12 PM ET | -2d 23h |
| 2 days | 9 AM PT / 12 PM ET | -1d 23h |
| 1 day (morning) | 9 AM PT / 12 PM ET | -23h |
| 1 day (evening) | 4 PM PT / 7 PM ET | -16h |

### Day-Of Offsets (Saturday)

| Timing | Pacific | Eastern | Offset |
|--------|---------|---------|--------|
| 4 hours before | 4:00 AM PT | 7:00 AM ET | -4h |
| 2 hours before | 6:00 AM PT | 9:00 AM ET | -2h |
| 1 hour before | 7:00 AM PT | 10:00 AM ET | -1h |
| 30 min before | 7:30 AM PT | 10:30 AM ET | -30m |
| 15 min before | 7:45 AM PT | 10:45 AM ET | -15m |
| Event start | 8:00 AM PT | 11:00 AM ET | T=0 |
| 15 min after | 8:15 AM PT | 11:15 AM ET | +15m |
| 30 min after | 8:30 AM PT | 11:30 AM ET | +30m |
| Lunch break | ~12:00 PM PT | ~3:00 PM ET | +4h |
| Day 1 end | ~5:00 PM PT | ~8:00 PM ET | +9h |

### Day 2 Offsets (Sunday, relative to Saturday T=0)

| Timing | Pacific | Eastern | Offset |
|--------|---------|---------|--------|
| 2 hours before | 7:00 AM PT | 10:00 AM ET | +23h |
| 1 hour before | 8:00 AM PT | 11:00 AM ET | +24h |
| Day 2 start | 9:00 AM PT | 12:00 PM ET | +25h |
| 15 min after | 9:15 AM PT | 12:15 PM ET | +25h 15m |

### Post-Event Offsets (positive from Saturday T=0)

| Timing | Pacific | Eastern | Offset |
|--------|---------|---------|--------|
| Sunday night | 8:00 PM PT | 11:00 PM ET | +36h |
| Monday 9 AM | 9:00 AM PT | 12:00 PM ET | +49h |
| Monday 4 PM (L3 party) | 4:00 PM PT | 7:00 PM ET | +56h |
| Tuesday 9 AM | 9:00 AM PT | 12:00 PM ET | +73h |
| Wednesday 4 PM (L3 close) | 4:00 PM PT | 7:00 PM ET | +104h |

## Event Calendar Reference

### January 2026 Event
- **Event:** January 24-25, 2026
- **T=0:** Saturday, Jan 24, 2026 at 8:00 AM Pacific
- **Domain:** neothinkday.com

**Key Dates (Jan 2026):**
| Offset | Date | Time (PT) | Purpose |
|--------|------|-----------|---------|
| -29d 23h | Dec 25 | 9 AM PT | 30-day countdown (Christmas!) |
| -24d 23h | Dec 30 | 9 AM PT | 25-day countdown |
| -19d 23h | Jan 4 | 9 AM PT | 20-day countdown |
| -13d 23h | Jan 10 | 9 AM PT | 14-day countdown |
| -9d 23h | Jan 14 | 9 AM PT | 10-day countdown |
| -8d 23h | Jan 15 | 9 AM PT | 9-day countdown (pre-work starts) |
| -6d 23h | Jan 17 | 9 AM PT | 7-day countdown |
| -4d 23h | Jan 19 | 9 AM PT | 5-day countdown |
| -3d 23h | Jan 20 | 9 AM PT | 4-day countdown |
| -2d 23h | Jan 21 | 9 AM PT | 3-day countdown |
| -1d 23h | Jan 22 | 9 AM PT | 2-day countdown |
| -23h | Jan 23 | 9 AM PT | 1-day countdown (morning) |
| -16h | Jan 23 | 4 PM PT | 1-day countdown (evening) |
| T=0 | Jan 24 | 8 AM PT | Day 1 starts |
| +25h | Jan 25 | 9 AM PT | Day 2 starts |
| +56h | Jan 26 | 4 PM PT | L3 Welcome Party |
| +104h | Jan 28 | 4 PM PT | L3 Offer Close |

## Avoiding Conflicts

- Check for major holidays before scheduling
- **Dec 25 (Christmas)**: 30-day email lands on Christmas - consider adjusting
- Avoid New Year's Day (Jan 1)
- Consider time zones (always specify Pacific AND Eastern)
