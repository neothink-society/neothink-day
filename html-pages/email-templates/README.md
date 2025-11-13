# Email Templates

This directory contains email templates for Neothink Society campaigns, organized following the same principles as our web HTML pages.

## Directory Structure

```
email-templates/
├── README.md                    # This file
├── original-templates/          # Source emails from current campaigns
│   └── README.md
└── updated-templates/           # Future: Brand-aligned versions
    └── README.md
```

## Organization Principles

Following our established HTML page organization:

1. **Original Templates** - Source emails from existing campaigns, preserved for reference
2. **Updated Templates** - Future directory for brand-standardized versions following DESIGN-SYSTEM.md

## Current Templates

### Original Templates (8 files - MIXED)

⚠️ **Note:** This folder currently contains a mix of:
- **5 emails from October 2024 event** (true originals for reference)
- **3 emails already created for Nov/Dec 2025** (should be organized into separate folders)

**October 2024 Event Emails (Reference):**
1. **doe-announcement.html** - Day of Enlightenment workshop announcement (Oct 18, 2024)
2. **doe-secrets-revealed.html** - Detailed secrets preview (Oct 18, 2024)
3. **doe-preparation-11days.html** - Pre-workshop homework (Oct 7, 2024)
4. **doe-preparation-4days.html** - Pre-workshop questionnaire (Oct 14, 2024)
5. **doe-workshop-aftermath.html** - Post-workshop follow-up

**Nov/Dec 2025 Event Emails (Already Created):**
6. **dec2025-registration-confirmation.html** - Registration confirmation for December 6-7, 2025
7. **nov2025-vip-confirmation.html** - VIP upgrade confirmation for November 22-23, 2025
8. **dec2025-vip-confirmation.html** - VIP upgrade confirmation for December 6-7, 2025

## Branding Notes

These original email templates have several inconsistencies with our current brand guidelines that will need to be addressed in updated versions:

### Font Stack Issues
- **Current**: Crimson Text (serif) + Inter (sans-serif)
- **Should be**: Baskervville (serif) + Plus Jakarta Sans (sans-serif) + Courier Prime (monospace)
- **Reference**: DESIGN-SYSTEM.md

### Brand Name Issues
- Uses "The Society" instead of "Neothink Society"
- **Reference**: BRAND-GUIDELINES.md states "Brand name: 'Neothink Society' (never 'NeoThink')"

### Support Email Issues
- **Current**: support@contact.neothink.com
- **Should be**: support@neothink.com
- **Reference**: BRAND-GUIDELINES.md

### Color Usage
- Background colors use correct dark theme (#1a1a1a)
- No gold accent (#FFD700) currently used - should be incorporated per DESIGN-SYSTEM.md

### Messaging
- Tone aligns with brand voice: elite, mysterious, transformational
- References to "The Secrets," "immortal consciousness," and "Level 2" are on-brand

## Email Design Constraints

Unlike our web landing pages, email templates must follow email client limitations:

- **Table-based layouts** (not flexbox/grid)
- **Inline CSS** for maximum compatibility
- **Limited JavaScript** (none in most cases)
- **Email-safe fonts** with fallbacks
- **Mobile responsiveness** via media queries
- **Image hosting** on reliable CDN (currently using filesafe.space)

## Next Steps

### Phase 1: Collection & Organization (IN PROGRESS)
1. ✅ Document existing 8 email templates
2. ⏳ **Collect remaining original email templates from campaigns**
3. ⏳ Organize into proper folder structure:
   - Keep Oct 2024 emails in `original-templates/`
   - Move Nov 2025 emails to new `nov-2025-emails/` folder
   - Move Dec 2025 emails to new `dec-2025-emails/` folder

### Phase 2: Email Campaign Creation (WAITING)
4. ⏳ Identify complete email sequence needed for Nov/Dec events:
   - Pre-event announcement
   - Registration confirmation (Dec ✅, Nov ❌)
   - Preparation emails (11 days, 4 days)
   - VIP confirmation (Nov ✅, Dec ✅)
   - Post-event follow-up
5. ⏳ Create missing emails for Nov 2025 campaign (based on originals)
6. ⏳ Create missing emails for Dec 2025 campaign (based on originals)
7. ⏳ Update all emails to follow DESIGN-SYSTEM.md (fonts, colors, branding)

### Phase 3: Testing & Deployment
8. ⏳ Create email component library adapted from COMPONENT-LIBRARY.md
9. ⏳ Test across major email clients (Gmail, Outlook, Apple Mail, etc.)
10. ⏳ Deploy email sequences in campaign automation

## Related Documentation

- `/BRAND-GUIDELINES.md` - Brand voice, messaging, customer journey
- `/DESIGN-SYSTEM.md` - Typography, colors, spacing standards
- `/COMPONENT-LIBRARY.md` - UI components (adapt for email)
- `/html-pages/original-pages/` - Web landing page originals
- `/html-pages/nov-2025-workshop/` - Web landing page current standards

## Support

For questions about email templates: support@neothink.com
