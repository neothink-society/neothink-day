# Date Sequence Rules

## Event Timeline

**Day of Enlightenment** is a 2-day workshop:
- Day 1: Saturday (8am Pacific / 11am Eastern start)
- Day 2: Sunday (9am Pacific / 12pm Eastern start)

## Offset Calculation

**Formula:** Target send time relative to event start (T=0)

**T=0** = Event Day 1 start = 8:00 AM Pacific / 11:00 AM Eastern

**Offset Format:** `-Nd Nh` or `+Nd Nh`

### Pre-Event Offsets (negative)

To send at 9am Eastern when event starts at 11am Eastern:
- Difference = 2 hours
- Use offset: `-Xd 2h`

| Days Before | Send Time (ET) | Offset |
|-------------|----------------|--------|
| 29 days | 9:00 AM | -29d 2h |
| 14 days | 9:00 AM | -14d 2h |
| 7 days | 9:00 AM | -7d 2h |
| 3 days | 9:00 AM | -3d 2h |
| 1 day | 9:00 AM | -1d 2h |

### Day-Of Offsets

| Timing | Offset |
|--------|--------|
| Event start | T=0 (0d 0h) |
| 30 min after start | +0d 0h 30m |
| Lunch break (~2hrs) | +0d 2h |
| Afternoon return | +0d 3h |
| Day 1 end (~9hrs) | +0d 9h |
| Day 2 start | +1d 1h (9am Pacific = 1hr after 8am) |

### Post-Event Offsets (positive)

| Timing | Offset |
|--------|--------|
| Sunday night | +1d 8h |
| Monday 9am Eastern | +2d 22h |
| Tuesday | +3d 22h |
| Wednesday | +4d 22h |

## Event Calendar Reference

### December 2025 Event
- **Event:** December 6-7, 2025
- **T=0:** Dec 6, 2025 at 11:00 AM Eastern
- **Domain:** neothinkevent.com

### January 2026 Event
- **Event:** January 24-25, 2026
- **T=0:** Jan 24, 2026 at 11:00 AM Eastern
- **Domain:** neothinkday.com

**Key Dates (Jan 2026):**
| Offset | Date | Purpose |
|--------|------|---------|
| -29d 2h | Dec 26, 9am Eastern | First prep email |
| -14d 2h | Jan 10, 9am Eastern | 2-week reminder |
| -7d 2h | Jan 17, 9am Eastern | 1-week reminder |
| -3d 2h | Jan 21, 9am Eastern | 3-day reminder |
| -1d 2h | Jan 23, 9am Eastern | Tomorrow reminder |
| T=0 | Jan 24, 11am Eastern | Event starts |

## Avoiding Conflicts

- Check for major holidays before scheduling
- Avoid Christmas (Dec 25), New Year's (Jan 1)
- Consider time zones (always specify Eastern and Pacific)
