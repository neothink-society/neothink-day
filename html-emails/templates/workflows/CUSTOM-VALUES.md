# GHL Custom Values Reference
## Day of Enlightenment Event Automation

All custom values use the `doe_` prefix (Day of Enlightenment).

---

## How to Configure in GHL

1. Go to **Settings > Custom Values**
2. Click **Add Custom Value**
3. Enter the **Key** (e.g., `doe_event_name`)
4. Enter the **Value** for your event
5. Save

---

## Event Date Custom Values

| Custom Value Key | Example Value | Used For |
|------------------|---------------|----------|
| `doe_event_name` | Day of Enlightenment | Event title |
| `doe_day1_date` | Saturday, January 24, 2026 | Day 1 full date |
| `doe_day1_date_short` | January 24 | Day 1 short date |
| `doe_day2_date` | Sunday, January 25, 2026 | Day 2 full date |
| `doe_day2_date_short` | January 25 | Day 2 short date |
| `doe_event_dates` | January 24-25, 2026 | Combined date range |

**Usage in templates:**
```html
<p>Join us {{custom_values.doe_day1_date}} at {{custom_values.doe_day1_start_time}}</p>
```

---

## Time Custom Values

| Custom Value Key | Example Value | Used For |
|------------------|---------------|----------|
| `doe_day1_start_time` | 11:00 AM Eastern / 8:00 AM Pacific | Day 1 start |
| `doe_day1_start_time_full` | 11:00 AM Eastern • 10:00 AM Central • 9:00 AM Mountain • 8:00 AM Pacific | Day 1 all time zones |
| `doe_day2_start_time` | 12:00 PM Eastern / 9:00 AM Pacific | Day 2 start |
| `doe_day2_start_time_full` | 12:00 PM Eastern • 11:00 AM Central • 10:00 AM Mountain • 9:00 AM Pacific | Day 2 all time zones |
| `doe_day1_return_time` | 2:00 PM Eastern / 11:00 AM Pacific | Day 1 lunch return |
| `doe_day2_return_time` | 3:00 PM Eastern / 12:00 PM Pacific | Day 2 lunch return |

---

## Zoom Custom Values

| Custom Value Key | Example Value | Used For |
|------------------|---------------|----------|
| `doe_zoom_link` | https://neothink.zoom.us/j/82532742248 | Full Zoom URL |
| `doe_zoom_id` | 825 3274 2248 | Meeting ID |
| `doe_zoom_passcode` | abc123 | Passcode |

**Note:** These should match the trigger link configuration in GHL.

---

## VIP Session Custom Values

| Custom Value Key | Example Value | Used For |
|------------------|---------------|----------|
| `doe_vip_session_date` | Monday, January 26 | VIP Session day |
| `doe_vip_session_date_full` | Monday, January 26, 2026 | VIP Session full date |
| `doe_vip_session_time` | 4:00 PM Pacific / 7:00 PM Eastern | VIP Session time |
| `doe_vip_session_zoom` | https://neothink.zoom.us/j/xxx | VIP Zoom link |

---

## L3 Welcome Party Custom Values

| Custom Value Key | Example Value | Used For |
|------------------|---------------|----------|
| `doe_welcome_party_date` | Wednesday, January 28 | Welcome Party day |
| `doe_welcome_party_date_full` | Wednesday, January 28, 2026 | Welcome Party full date |
| `doe_welcome_party_time` | 4:00 PM Pacific / 7:00 PM Eastern | Welcome Party time |
| `doe_welcome_party_zoom` | https://neothink.zoom.us/j/xxx | Welcome Party Zoom |

---

## L3 Offer Custom Values

| Custom Value Key | Example Value | Used For |
|------------------|---------------|----------|
| `doe_l3_deadline` | Wednesday, January 28 at midnight ET | L3 offer deadline |
| `doe_l3_deadline_short` | midnight Wednesday | Short deadline |
| `doe_l3_enrollment_url` | societysecrets.com/level3 | L3 enrollment link |
| `doe_qa_call_link` | https://calendly.com/neothink/l3-qa | L3 Q&A booking calendar |

---

## Resource URLs

These rarely change between events:

| Custom Value Key | Example Value | Used For |
|------------------|---------------|----------|
| `doe_workbook_url` | https://societysecrets.com/workbook | Workbook PDF |
| `doe_golden_life_url` | neothinkday.com/your-golden-life | Golden Life Sheet |
| `doe_wealth_engine_url` | neothinkday.com/wealth-engine-calculator | Wealth Engine |
| `doe_workshop_hub_url` | neothinkday.com/home | Workshop Hub page |
| `doe_vip_upgrade_url` | neothinkday.com/vip-upgrade | VIP upgrade page |
| `doe_vip_recording_url` | neothinkday.com/vip-session-recording | VIP recording |
| `doe_welcome_party_recording_url` | neothinkday.com/level-three-welcome-party | Party recording |

---

## Quick Setup for New Event

### Step 1: Update Event Dates
```
doe_day1_date = Saturday, [MONTH] [DAY], [YEAR]
doe_day1_date_short = [MONTH] [DAY]
doe_day2_date = Sunday, [MONTH] [DAY], [YEAR]
doe_day2_date_short = [MONTH] [DAY]
doe_event_dates = [MONTH] [DAY]-[DAY], [YEAR]
```

### Step 2: Update Post-Event Dates
```
doe_vip_session_date = Monday, [MONTH] [DAY]
doe_welcome_party_date = Wednesday, [MONTH] [DAY]
doe_l3_deadline = Wednesday, [MONTH] [DAY] at midnight ET
```

### Step 3: Update Zoom Links
```
doe_zoom_id = [NEW MEETING ID]
doe_zoom_passcode = [NEW PASSCODE]
doe_zoom_link = [NEW ZOOM LINK]
doe_vip_session_zoom = [VIP ZOOM LINK]
doe_welcome_party_zoom = [PARTY ZOOM LINK]
```

### Step 4: Test
1. Open any email template in GHL preview
2. Verify custom values display correctly
3. Send test email to yourself

---

## January 2026 Event Values

Ready to copy-paste for the January 24-25, 2026 event:

```
doe_event_name = Day of Enlightenment
doe_day1_date = Saturday, January 24, 2026
doe_day1_date_short = January 24
doe_day2_date = Sunday, January 25, 2026
doe_day2_date_short = January 25
doe_event_dates = January 24-25, 2026
doe_day1_start_time = 11:00 AM Eastern / 8:00 AM Pacific
doe_day1_start_time_full = 11:00 AM Eastern • 10:00 AM Central • 9:00 AM Mountain • 8:00 AM Pacific
doe_day2_start_time = 12:00 PM Eastern / 9:00 AM Pacific
doe_day2_start_time_full = 12:00 PM Eastern • 11:00 AM Central • 10:00 AM Mountain • 9:00 AM Pacific
doe_day1_return_time = 2:00 PM Eastern / 11:00 AM Pacific
doe_day2_return_time = 3:00 PM Eastern / 12:00 PM Pacific
doe_vip_session_date = Monday, January 26
doe_vip_session_date_full = Monday, January 26, 2026
doe_vip_session_time = 4:00 PM Pacific / 7:00 PM Eastern
doe_welcome_party_date = Wednesday, January 28
doe_welcome_party_date_full = Wednesday, January 28, 2026
doe_welcome_party_time = 4:00 PM Pacific / 7:00 PM Eastern
doe_l3_deadline = Wednesday, January 28 at midnight ET
doe_l3_deadline_short = midnight Wednesday
doe_workshop_hub_url = neothinkday.com/home
doe_vip_upgrade_url = neothinkday.com/vip-upgrade
doe_golden_life_url = neothinkday.com/your-golden-life
doe_wealth_engine_url = neothinkday.com/wealth-engine-calculator
doe_l3_enrollment_url = societysecrets.com/level3
```
