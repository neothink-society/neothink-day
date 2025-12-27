# Neothink Day of Enlightenment - Project Instructions

## Project Overview

This repository contains all marketing assets for the **Day of Enlightenment** workshop series by Neothink Society. Each event has dedicated HTML emails, SMS sequences, and landing pages.

## Directory Structure

```
neothink-day-repo/
├── html-emails/templates/
│   ├── nov2025/          # November 2025 event (completed)
│   ├── dec2025/          # December 6-7, 2025 event
│   ├── jan2026/          # January 24-25, 2026 event
│   ├── ambassador/       # Ambassador program emails
│   └── level2/           # Level 2 follow-up sequence
│
├── html-pages/
│   ├── nov-2025-workshop/
│   ├── dec-2025-workshop/
│   ├── jan-2026-workshop/
│   ├── registration/
│   └── original-pages/
│
├── claudedocs/           # Workshop analysis & transcripts
│
├── BRAND-GUIDELINES.md   # Voice, tone, terminology
├── DESIGN-SYSTEM.md      # Colors, typography, spacing
├── COMPONENT-LIBRARY.md  # Reusable HTML email components
└── DESIGN-APPROACH.md    # Design philosophy
```

## Event Asset Structure

Each event folder typically contains:

### Email Templates (`html-emails/templates/{event}/`)
```
01-pre-event/
├── registration-confirmation.html
├── vip-confirmation.html
├── preparation-{N}days.html    # Countdown sequence
├── preparation-{N}days-vip.html # VIP variants
└── pre-event-sms.md            # SMS message copy

02-day1-countdown/              # Day-of reminders
03-day1-workshop/               # During workshop
04-day2-countdown/
05-day2-workshop/
06-workshop-sms/
07-post-event/
_archive/                       # Deprecated versions
```

### Landing Pages (`html-pages/{event}/`)
- Workshop hub pages
- Registration pages
- VIP upgrade pages

## Brand & Design References

**Always read before creating/editing:**
- `BRAND-GUIDELINES.md` - Voice, terminology, philosophy
- `DESIGN-SYSTEM.md` - Colors (#FFD700 gold, #000000 black), typography
- `COMPONENT-LIBRARY.md` - Pre-built email components

## Key Terminology

| Term | Meaning |
|------|---------|
| Day of Enlightenment | The 2-day workshop event |
| Friday Night Essence (FNE) | Core passion/purpose discovery |
| Mortal Mentality | Pre-transformation mindset |
| Immortal Mentality | Post-transformation mindset |
| Value Creator | Someone living from authentic purpose |
| The Secret Manuscript | Pre-work reading material |
| Golden Life Sheet | Key workshop exercise |

## URL Patterns

| Event | Domain |
|-------|--------|
| Dec 2025 | neothinkevent.com |
| Jan 2026+ | neothinkday.com |

## Common Tasks

### Creating a New Event
1. Copy previous event folder as template
2. Update all dates (event dates + countdown dates)
3. Update URLs if domain changed
4. Update PRE-EVENT-{N}DAY-SEQUENCE.md with new timeline
5. Update pre-event-sms.md with new dates/offsets

### Date Offset Calculations
- Offsets are relative to event start time
- Event typically starts 8:00 AM Pacific / 11:00 AM Eastern
- Example: `-29d 2h` = 29 days and 2 hours before event start
- Email at 9am ET when event at 11am ET = 2 hour offset

### GHL (GoHighLevel) Integration

All HTML emails and pages are designed to be copy-pasted into GHL's Email Builder or Funnel Builder.

#### GHL Variable Reference

**Contact Fields:**
```
{{contact.first_name}}
{{contact.last_name}}
{{contact.full_name}}
{{contact.email}}
{{contact.phone}}
```

**Custom Values (Location-level):**
```
{{custom_values.doe_zoom_id}}
{{custom_values.doe_zoom_passcode}}
{{custom_values.doe_zoom_link}}
```

**Trigger Links (Workflow-specific):**
```
{{trigger_link.bw3pFLlMkAQiQOlYB674}}   # Zoom join link
```

**Location Fields:**
```
{{location.name}}
{{location.email}}
```

#### GHL Workflow Setup

Emails are triggered by workflow automation with time-based offsets:
- **Offset format:** `-Nd Nh` (N days, N hours before event)
- **Base time:** Event start (8:00 AM Pacific / 11:00 AM Eastern)
- **Example:** `-29d 2h` sends 29 days, 2 hours before event = 9am ET

#### SMS in GHL

SMS messages from `pre-event-sms.md` are entered as workflow actions:
- Character limit: 160 (standard) or 70 (with special chars)
- Use `{{contact.first_name}}` sparingly to save characters
- GHL variables count toward character limit

## Email HTML Standards

- Dark theme by default (black background #000000)
- Gold accent color (#FFD700)
- Max width: 600px
- Mobile-responsive with `@media` queries
- Fonts: Baskervville (headings), Plus Jakarta Sans (body)
- Always include preheader text
- Comments at top with subject lines and send times

## Quality Checklist

Before committing email changes:
- [ ] All dates updated correctly
- [ ] URLs point to correct domain
- [ ] Subject line suggestions in HTML comment
- [ ] Send time/offset in HTML comment
- [ ] Mobile styles tested
- [ ] No broken {{variables}}
