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

### Original Templates

1. **doe-announcement.html** - Day of Enlightenment workshop announcement
   - Audience: Level 2 members
   - Purpose: Workshop date announcement with alternative date option
   - Date reference: October 18th event

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

1. Collect all original email templates
2. Document each template's purpose and audience
3. Create updated versions following DESIGN-SYSTEM.md
4. Create email component library adapted from COMPONENT-LIBRARY.md
5. Test across major email clients (Gmail, Outlook, Apple Mail, etc.)

## Related Documentation

- `/BRAND-GUIDELINES.md` - Brand voice, messaging, customer journey
- `/DESIGN-SYSTEM.md` - Typography, colors, spacing standards
- `/COMPONENT-LIBRARY.md` - UI components (adapt for email)
- `/html-pages/original-pages/` - Web landing page originals
- `/html-pages/nov-2025-workshop/` - Web landing page current standards

## Support

For questions about email templates: support@neothink.com
