# GHL Custom Values — Stargazer Level Three Event
## March 27–29, 2026

**Location ID:** OWPT3ihPWINakwA0bGRQ
**Parent Folder ID:** `tsGb7YUaP030U8VHVRK7`
**GHL Custom Values URL:** https://app.flowsystems.co/v2/location/OWPT3ihPWINakwA0bGRQ/settings/custom_values?tab=folders&page=1&parentId=tsGb7YUaP030U8VHVRK7
**Variable prefix:** `sg_`

---

## Values to Create in GHL

| GHL Name | Variable (exact fieldKey) | Value | GHL ID |
|---|---|---|---|
| SG Event Dates | `{{custom_values.sg_event_dates}}` | March 27–29, 2026 | ovxN8v2pAGYbUG3eRzPE |
| SG Day 1 Date | `{{custom_values.sg_day_1_date}}` | Friday, March 27, 2026 | KrvrKcCSDLOaT2N8jA4H |
| SG Day 2 Date | `{{custom_values.sg_day_2_date}}` | Saturday, March 28, 2026 | cDypSzrB4MD8qC1HHlen |
| SG Day 3 Date | `{{custom_values.sg_day_3_date}}` | Sunday, March 29, 2026 | nWCZLGB70rPh7GWSrrGp |
| SG Day 1 Date Short | `{{custom_values.sg_day_1_date_short}}` | March 27 | U4cQ8SwZDSBUi2dnjjY5 |
| SG Day 2 Date Short | `{{custom_values.sg_day_2_date_short}}` | March 28 | KS2jBJnDUyPh897Bh8SK |
| SG Day 3 Date Short | `{{custom_values.sg_day_3_date_short}}` | March 29 | NZiq1SEe3z4Gc9tcQ0PQ |
| SG Day 1 Start Time | `{{custom_values.sg_day_1_start_time}}` | 8:00 AM Pacific / 11:00 AM Eastern | jPHbRxyH1HsJnVTsldAw |
| SG Day 2 Start Time | `{{custom_values.sg_day_2_start_time}}` | 8:00 AM Pacific / 11:00 AM Eastern | 91OxpFB70FUj6nbEfJ89 |
| SG Day 3 Start Time | `{{custom_values.sg_day_3_start_time}}` | 8:00 AM Pacific / 11:00 AM Eastern | 9807jU0e60PiiZGTyla2 |
| SG Workshop Hub URL | `{{custom_values.sg_workshop_hub_url}}` | neothinkstargazer.com/home | 8UKNcRJR5FluCR9W5ehx |
| SG Registration URL | `{{custom_values.sg_registration_url}}` | https://neothinkstargazer.com/register | lEKxLhCRKfuA4havde8z |
| SG Intake Form URL | `{{custom_values.sg_intake_form_url}}` | ⚠️ TBD — update when form is ready | Pcuzc0gAdQ6YrkMlya9D |
| SG Zoom ID | `{{custom_values.sg_zoom_id}}` | ⚠️ TBD — update after Zoom created | em8nGRtDscG4eAIykHbm |
| SG Zoom Passcode | `{{custom_values.sg_zoom_passcode}}` | ⚠️ TBD — update after Zoom created | CnSijrUjegojmj8HYApR |

---

## Workflow Trigger Link (separate from custom values)

Create a new GHL trigger link for the Stargazer Zoom join URL.
- Name it: "Stargazer Zoom Join"
- Used in day-of emails and SMS as: `{{trigger_link.[YOUR_LINK_ID]}}`
- This is NOT a custom value — create it under GHL > Trigger Links

---

## Pre-Launch Checklist

- [x] ~~Create custom values in GHL~~ — all 14 created via API on Feb 23, 2026
- [ ] Create new Zoom meeting for March 27 (one link works all 3 days)
- [ ] Update `sg_zoom_id` in GHL (ID: em8nGRtDscG4eAIykHbm)
- [ ] Update `sg_zoom_passcode` in GHL (ID: CnSijrUjegojmj8HYApR)
- [ ] Create Stargazer Zoom trigger link in GHL > Trigger Links
- [ ] Create and publish intake questionnaire
- [ ] Update `sg_intake_form_url` in GHL (ID: Pcuzc0gAdQ6YrkMlya9D)
- [x] ~~Create `sg_registration_url` custom value in GHL~~ — created Feb 25, 2026 (ID: lEKxLhCRKfuA4havde8z)
- [ ] Confirm neothinkstargazer.com/home is live and audio tracks accessible
- [ ] Build GHL workflow for pre-event sequence
- [ ] Set T=0 = March 27, 2026 @ 8:00 AM Pacific
- [ ] Load all emails + SMS into workflow with correct offsets (see PRE-EVENT-32DAY-SEQUENCE.md)
- [ ] Test all custom value substitutions in preview before going live
