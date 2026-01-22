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

## GHL Custom Values

Event dates are configured via GHL custom values, not hardcoded:
- `{{custom_values.doe_event_dates}}` - Event date range (e.g., "January 24-25, 2026")
- `{{custom_values.doe_day1_date}}` - Day 1 date
- `{{custom_values.doe_day2_date}}` - Day 2 date

## Avoiding Conflicts

When scheduling events, check for:
- Major holidays (Christmas, New Year's, etc.)
- 30-day countdown may land on holidays depending on event date
- Always specify Pacific AND Eastern times in communications
