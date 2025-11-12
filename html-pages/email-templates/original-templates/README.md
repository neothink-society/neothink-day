# Original Email Templates

This directory contains the source email templates from existing Neothink Society campaigns. These are preserved as reference material and represent the starting point before brand standardization.

## Purpose

- **Preserve** original campaign emails
- **Reference** for content, structure, and messaging
- **Compare** against updated brand-aligned versions
- **Archive** campaign history

## Templates in This Directory

### 1. doe-announcement.html
**Day of Enlightenment Workshop Announcement**

**Purpose**: Announce workshop date to Level 2 members who purchased The Secret Manuscript

**Audience**: Level 2 members

**Key Features**:
- CONFIDENTIAL classification header
- Workshop date reveal (October 18th)
- Alternative date option for those who can't attend
- Full day schedule breakdown
- "No recordings" emphasis
- Reserved seat confirmation

**Messaging Themes**:
- Knowledge vs. implementation
- Mortal to immortal consciousness shift
- Transformation over education
- Elite membership positioning ("Welcome to the 1%")

**Technical Specs**:
- Width: 600px (responsive to 100% on mobile)
- Background: Dark theme (#1a1a1a)
- Fonts: Crimson Text + Inter (OLD - needs update)
- Mobile breakpoint: 600px
- Image hosting: filesafe.space CDN
- Email variables: `{{unsubscribe}}`

**Contact**: support@contact.neothink.com (OLD - needs update to support@neothink.com)

---

## Known Branding Issues

All templates in this directory have these common issues:

### Typography
- ❌ Uses Crimson Text instead of Baskervville
- ❌ Uses Inter instead of Plus Jakarta Sans
- ❌ Missing Courier Prime for labels/timestamps

### Brand Name
- ❌ References "The Society" instead of "Neothink Society"

### Contact Email
- ❌ Uses support@contact.neothink.com
- ✅ Should use support@neothink.com

### Color Palette
- ✅ Dark background (#1a1a1a) is correct
- ❌ Missing gold accent (#FFD700) per design system
- ✅ Gray scale usage is appropriate

### Logo
- Uses The Society logo from filesafe.space
- May need Neothink Society branded logo

---

## Email Client Compatibility

These templates are designed with email client constraints:

- **Layout**: Table-based (email-safe)
- **CSS**: Embedded in `<style>` tags with inline fallbacks
- **Fonts**: Google Fonts with system fallbacks
- **Images**: Hosted on CDN with alt text
- **Responsive**: Media queries for mobile
- **Testing needed**: Gmail, Outlook, Apple Mail, Yahoo, others

---

## Content Preservation

When creating updated versions, preserve these elements:

✅ **Keep**:
- Core messaging and transformational language
- Elite/mysterious tone
- Member level targeting (Level 2)
- Schedule and logistical details
- Alternative date options
- "No recordings" emphasis
- Contact support options
- Unsubscribe functionality

🔄 **Update**:
- Font families per DESIGN-SYSTEM.md
- Brand name to "Neothink Society"
- Support email to support@neothink.com
- Add gold accent color strategically
- Logo to Neothink Society version

---

## File Naming Convention

Templates use descriptive, hyphenated lowercase names:
- `doe-announcement.html` = Day of Enlightenment announcement
- Future: `vip-upgrade-offer.html`, `workshop-reminder.html`, etc.

---

## Next Steps

1. Add more original email templates as they're collected
2. Document each template's campaign context
3. Create corresponding updated versions in `/updated-templates/`
4. Cross-reference with web landing pages (many emails link to web pages)

---

## Related Files

- Parent directory: `/html-pages/email-templates/README.md`
- Brand guidelines: `/BRAND-GUIDELINES.md`
- Design system: `/DESIGN-SYSTEM.md`
- Web page originals: `/html-pages/original-pages/`
