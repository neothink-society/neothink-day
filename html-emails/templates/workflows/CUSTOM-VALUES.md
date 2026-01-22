# GHL Custom Values Reference
## Day of Enlightenment Event Automation

All custom values use the `doe_` prefix (Day of Enlightenment) and are stored in the **DOE folder** (ID: `VZFHr1WwoSsZENUITe9f`).

**Important:** GHL auto-generates field keys with underscores between words (e.g., `doe_day_1_date` not `doe_day_1_date`).

---

## How to Configure in GHL

1. Go to **Settings > Custom Values**
2. Navigate to the **DOE folder**
3. Click **Add Custom Value**
4. Enter the **Name** (e.g., `DOE Day 1 Date`)
5. Enter the **Value** for your event
6. Save

**Via API:** Use `parentId: "VZFHr1WwoSsZENUITe9f"` to add values to the DOE folder.

---

## General Event Custom Values

| GHL Field Key | Current Value | Used For |
|---------------|---------------|----------|
| `doe_event_name` | Day of Enlightenment | Event name for emails/pages |

---

## Event Date Custom Values

| GHL Field Key | Current Value (Jan 2026) | Used For |
|---------------|--------------------------|----------|
| `doe_day_1_date` | Saturday, January 24, 2026 | Day 1 full date |
| `doe_day_1_date_short` | January 24 | Day 1 short date |
| `doe_day_2_date` | Sunday, January 25, 2026 | Day 2 full date |
| `doe_day_2_date_short` | January 25 | Day 2 short date |
| `doe_event_dates` | January 24-25, 2026 | Combined date range |

**Usage in templates:**
```html
<p>Join us {{custom_values.doe_day_1_date}} at {{custom_values.doe_day_1_start_time}}</p>
```

---

## Time Custom Values

| GHL Field Key | Current Value (Jan 2026) | Used For |
|---------------|--------------------------|----------|
| `doe_day_1_start_time` | 11:00 AM Eastern / 8:00 AM Pacific | Day 1 start |
| `doe_day_1_start_time_full` | 11:00 AM Eastern • 10:00 AM Central • 9:00 AM Mountain • 8:00 AM Pacific | Day 1 all time zones |
| `doe_day_2_start_time` | 12:00 PM Eastern / 9:00 AM Pacific | Day 2 start |
| `doe_day_2_start_time_full` | 12:00 PM Eastern • 11:00 AM Central • 10:00 AM Mountain • 9:00 AM Pacific | Day 2 all time zones |
| `doe_day_1_return_time` | 6:15 PM Eastern / 5:15 PM Central / 4:15 PM Mountain / 3:15 PM Pacific | Day 1 lunch return |
| `doe_day_2_return_time` | 7:00 PM Eastern / 6:00 PM Central / 5:00 PM Mountain / 4:00 PM Pacific | Day 2 lunch return |

---

## Zoom Custom Values

Zoom links use **GHL Trigger Links** for click tracking and workflow automation.

| GHL Field Key | Current Value | Used For |
|---------------|---------------|----------|
| `doe_zoom_link` | `{{trigger_link.bw3pFLlMkAQiQOlYB674}}` | Main workshop Zoom |
| `doe_zoom_id` | 852 4025 0021 | Meeting ID (for display) |
| `doe_zoom_passcode` | 848453 | Passcode (for display) |

**Why Trigger Links?**
- Track who clicked to join
- Trigger follow-up workflows
- Record in contact activity timeline

**Usage in templates:**
```html
<a href="{{custom_values.doe_zoom_link}}">Join Workshop</a>

<!-- Or display meeting details -->
<p>Meeting ID: {{custom_values.doe_zoom_id}}</p>
<p>Passcode: {{custom_values.doe_zoom_passcode}}</p>
```

---

## VIP Session Custom Values

| GHL Field Key | Current Value (Jan 2026) | Used For |
|---------------|--------------------------|----------|
| `doe_vip_session_date` | Monday, January 26 | VIP Session day |
| `doe_vip_session_date_full` | Monday, January 26, 2026 | VIP Session full date |
| `doe_vip_session_time` | 4:00 PM Pacific / 7:00 PM Eastern | VIP Session time |
| `doe_vip_session_zoom` | `{{trigger_link.oewaGnllvYO0WZ4NfUc6}}` | VIP Zoom (trigger link) |
| `doe_vip_session_id` | 832 7546 6649 | VIP Meeting ID (for display) |
| `doe_vip_session_passcode` | 566407 | VIP Passcode (for display) |

---

## L3 Welcome Party Custom Values

| GHL Field Key | Current Value (Jan 2026) | Used For |
|---------------|--------------------------|----------|
| `doe_welcome_party_date` | Wednesday, January 28 | Welcome Party day |
| `doe_welcome_party_date_full` | Wednesday, January 28, 2026 | Welcome Party full date |
| `doe_welcome_party_time` | 4:00 PM Pacific / 7:00 PM Eastern | Welcome Party time |
| `doe_welcome_party_zoom` | `{{trigger_link.1iWXAhKPkv1YrL7kXM7h}}` | Welcome Party Zoom (trigger link) |
| `doe_welcome_party_id` | 893 8151 6489 | Welcome Party Meeting ID (for display) |
| `doe_welcome_party_passcode` | 890039 | Welcome Party Passcode (for display) |

---

## L3 Offer Custom Values

| GHL Field Key | Current Value (Jan 2026) | Used For |
|---------------|--------------------------|----------|
| `doe_l3_deadline` | Wednesday, January 28 at midnight ET | L3 offer deadline |
| `doe_l3_deadline_short` | midnight Wednesday | Short deadline |
| `doe_l3_deadline_time` | midnight ET | L3 deadline time only |
| `doe_l3_enrollment_url` | https://societysecrets.com/level3 | L3 enrollment link |
| `doe_qa_call_link` | https://societysecrets.com/schedule | L3 Q&A booking calendar |

---

## Resource URLs

These rarely change between events:

| GHL Field Key | Current Value | Used For |
|---------------|---------------|----------|
| `doe_workbook_url` | https://societysecrets.com/workbook | FNE Workbook PDF |
| `doe_golden_life_url` | https://neothinkday.com/your-golden-life | Golden Life Sheet |
| `doe_wealth_engine_url` | https://neothinkday.com/wealth-engine-calculator | Wealth Engine Calculator |
| `doe_workshop_hub_url` | https://neothinkday.com/home | Workshop Hub page |
| `doe_zoom_guide_url` | https://neothinkday.com/zoom | Zoom setup guide page |
| `doe_vip_upgrade_url` | https://neothinkday.com/vip-upgrade | VIP upgrade page |
| `doe_vip_background_url` | https://storage.googleapis.com/msgsndr/OWPT3ihPWINakwA0bGRQ/media/6921b0a35408c646432ae105.png | VIP Zoom background image |
| `doe_vip_recording_url` | https://neothinkday.com/vip-session-recording | VIP session recording |
| `doe_welcome_party_recording_url` | https://neothinkday.com/level-three-welcome-party | Welcome party recording |

---

## Trigger Links Reference

These are configured in GHL under **Marketing > Trigger Links**:

| Trigger Link ID | Purpose | Custom Value Using It |
|-----------------|---------|----------------------|
| `bw3pFLlMkAQiQOlYB674` | Main DOE Workshop Zoom | `doe_zoom_link` |
| `oewaGnllvYO0WZ4NfUc6` | VIP Session Zoom | `doe_vip_session_zoom` |
| `1iWXAhKPkv1YrL7kXM7h` | L3 Welcome Party Zoom | `doe_welcome_party_zoom` |

**To update Zoom destinations:** Edit the trigger link in GHL, not the custom value.

---

## Quick Setup for New Event

### Step 1: Update Event Dates (via GHL UI or API)
```
doe_day_1_date = Saturday, [MONTH] [DAY], [YEAR]
doe_day_1_date_short = [MONTH] [DAY]
doe_day_2_date = Sunday, [MONTH] [DAY], [YEAR]
doe_day_2_date_short = [MONTH] [DAY]
doe_event_dates = [MONTH] [DAY]-[DAY], [YEAR]
```

### Step 2: Update Times (if different from standard)
```
doe_day_1_start_time = 11:00 AM Eastern / 8:00 AM Pacific
doe_day_2_start_time = 12:00 PM Eastern / 9:00 AM Pacific
```

### Step 3: Update Post-Event Dates
```
doe_vip_session_date = Monday, [MONTH] [DAY]
doe_vip_session_date_full = Monday, [MONTH] [DAY], [YEAR]
doe_welcome_party_date = Wednesday, [MONTH] [DAY]
doe_welcome_party_date_full = Wednesday, [MONTH] [DAY], [YEAR]
doe_l3_deadline = Wednesday, [MONTH] [DAY] at midnight ET
```

### Step 4: Update Trigger Link Destinations
1. Go to **Marketing > Trigger Links** in GHL
2. Edit each trigger link's destination URL:
   - Main Zoom: Update with new Zoom meeting link
   - VIP Zoom: Update with new VIP session link
   - Welcome Party Zoom: Update with new party link

### Step 5: Update Zoom Display Info
```
doe_zoom_id = [NEW MEETING ID]
doe_zoom_passcode = [NEW PASSCODE]
```

### Step 6: Test
1. Open any email template in GHL preview
2. Verify custom values display correctly
3. Click trigger links to verify destinations
4. Send test email to yourself

---

## API Reference

**Location ID:** `OWPT3ihPWINakwA0bGRQ`
**DOE Folder ID:** `VZFHr1WwoSsZENUITe9f`

**Get all custom values:**
```bash
curl -X GET "https://services.leadconnectorhq.com/locations/OWPT3ihPWINakwA0bGRQ/customValues" \
  -H "Authorization: Bearer [PIT_TOKEN]" \
  -H "Version: 2021-07-28"
```

**Update a custom value:**
```bash
curl -X PUT "https://services.leadconnectorhq.com/locations/OWPT3ihPWINakwA0bGRQ/customValues/[VALUE_ID]" \
  -H "Authorization: Bearer [PIT_TOKEN]" \
  -H "Version: 2021-07-28" \
  -H "Content-Type: application/json" \
  -d '{"name": "DOE Day 1 Date", "value": "Saturday, March 15, 2026"}'
```

**Create a new custom value in DOE folder:**
```bash
curl -X POST "https://services.leadconnectorhq.com/locations/OWPT3ihPWINakwA0bGRQ/customValues" \
  -H "Authorization: Bearer [PIT_TOKEN]" \
  -H "Version: 2021-07-28" \
  -H "Content-Type: application/json" \
  -d '{"name": "DOE New Value", "value": "Some value", "parentId": "VZFHr1WwoSsZENUITe9f"}'
```

---

## Custom Value IDs (for API updates)

| Field Key | GHL ID |
|-----------|--------|
| `doe_event_name` | YcinEbLTODTgdeRRiN9K |
| `doe_day_1_date` | wtCQl7yu5kMAVGdOaYh4 |
| `doe_day_1_date_short` | TiGh4JxCcPLjSSemxzP4 |
| `doe_day_2_date` | qpCLDY6MuvQD6mq3QbaS |
| `doe_day_2_date_short` | ydLDDx6bXDGldldZNlkN |
| `doe_event_dates` | c6XyiIWBDzj0mxqybHUr |
| `doe_day_1_start_time` | GKLwoLJ6U1RWSihofIpF |
| `doe_day_1_start_time_full` | ZgSx6nnIS7W9CBsYE1ia |
| `doe_day_1_return_time` | 0mujSW7G09SQOGlnPtJw |
| `doe_day_2_start_time` | lbg9C9wfz5kw5f8RcS90 |
| `doe_day_2_start_time_full` | 3ETktVD28yXj1dNpSWeN |
| `doe_day_2_return_time` | LD2HJtMULDZr8ZsxWJuv |
| `doe_zoom_link` | dfhHPfxFyBmt5hsqBRZU |
| `doe_zoom_id` | iPPqoUddt5sPQpZV6uiK |
| `doe_zoom_passcode` | ZW48V8MJZzy3ohOgxfzM |
| `doe_vip_session_date` | BwuBPRDSP7r5GGvWLVfD |
| `doe_vip_session_date_full` | 61ljoppdfXM3QaBo8IyY |
| `doe_vip_session_time` | fiKi90DrIU0R3LbRtK6Q |
| `doe_vip_session_zoom` | pyssOvx2vLg0DODf8Ip2 |
| `doe_vip_session_id` | IY0pNfCAv6dPjTlCJRvZ |
| `doe_vip_session_passcode` | 0AHdEqXUVG6L1e9dhiJz |
| `doe_welcome_party_date` | uvzMq2QqgtNmCLPAHCr7 |
| `doe_welcome_party_date_full` | YIEJf5fvaO7ftGQj9rXe |
| `doe_welcome_party_time` | 4sTA8OoG09vLSHIFF8eH |
| `doe_welcome_party_zoom` | lSMO7ix3gwMoOjMEewRY |
| `doe_welcome_party_id` | JoDiSwHkFhfz4ZQZpu4C |
| `doe_welcome_party_passcode` | i7tXU9A8EnO2Wdlc2dPN |
| `doe_l3_deadline` | n73K0cBzcVMSiuIYkMbV |
| `doe_l3_deadline_short` | nimbWJbGip2e0MpVUc0p |
| `doe_l3_deadline_time` | mMlsgoKQwuaqZGbfhOFy |
| `doe_l3_enrollment_url` | cqW8ASg1kGbjIB1Cs0Cv |
| `doe_qa_call_link` | pkaISBH5J6rFYiTUa5h1 |
| `doe_workbook_url` | NlFRIYBwrxsLIee2lXyT |
| `doe_golden_life_url` | VJiAW6OrvxaDk4fD7AkT |
| `doe_wealth_engine_url` | T6365nWajUKflUTbW7in |
| `doe_workshop_hub_url` | PRYakjANE6Flk9iFUHyi |
| `doe_vip_upgrade_url` | rA00ghdpbNPhqcEg23g9 |
| `doe_vip_recording_url` | JSMLOzlmQGLdzyUnczs7 |
| `doe_welcome_party_recording_url` | T0wgIblVUSIby5CiEEJw |

---

*Last updated: January 21, 2026*
