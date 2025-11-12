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

### 2. doe-secrets-revealed.html
**Day of Enlightenment Workshop - Detailed Secrets Preview**

**Purpose**: Second email for same October 18th event, focusing on what will be revealed during the workshop

**Audience**: Level 2 members

**Key Features**:
- CONFIDENTIAL classification header
- Details 6 specific "secrets" to be revealed
- Enhanced email client compatibility (XHTML DOCTYPE, MSO comments, role="presentation")
- White-bordered date box for emphasis
- "Why Now Matters" urgency section
- Alternative date option with stronger CTA
- More comprehensive preheader text

**Six Secrets Covered**:
1. **Your Million-Dollar Vision** - Discovering suppressed wealth potential
2. **The Wealth Architecture** - Ultra-wealthy strategies and mechanisms
3. **The System Behind the System** - How value/power/markets really work
4. **Business Amplification Protocols** - Customer acquisition and profit multiplication
5. **Career Leverage & Compensation Mastery** - Getting paid what you're worth
6. **The Biological Transformation** - Rewiring brain/body for success

**Messaging Themes**:
- "Secrets the elite have always known"
- Knowledge gap widening (AI, market changes)
- Not conspiracy/theory - hidden knowledge
- Transform in one day what others never learn
- Urgency of timing ("Why Now Matters")

**Technical Specs**:
- Width: 600px (responsive to 100% on mobile)
- Background: Dark theme (#1a1a1a)
- Fonts: Crimson Text + Inter (OLD - needs update)
- DOCTYPE: XHTML 1.0 Transitional
- Outlook MSO comments for compatibility
- role="presentation" on all tables
- prefers-color-scheme media query
- Mobile breakpoint: 600px
- Image hosting: filesafe.space CDN
- Email variables: `{{unsubscribe}}`

**Unique Elements**:
- White 2px border on date announcement box (vs gradient in first email)
- Much longer content with 6 detailed sections
- "The secrets are yours" sign-off (vs "Welcome to the 1%")
- Better structured for email clients (more semantic HTML)
- format-detection meta tag to prevent auto-linking

**Contact**: support@contact.neothink.com (OLD - needs update to support@neothink.com)

---

### 3. doe-workshop-aftermath.html
**Day of Enlightenment Workshop - Post-Event Follow-Up & Resources**

**Purpose**: Post-workshop follow-up email sent AFTER the October 18th event with recap, resources, and Level 3 upgrade offer

**Audience**: Level 2 members who attended the workshop

**Key Features**:
- Gold "WORKSHOP COMPLETE" badge header
- Congratulations messaging
- "What You Accomplished" stats box (2 days, 3 sessions, ∞ lifetime value)
- Primary CTA to resources hub page
- Resource access links (Golden Life Sheet, Wealth Engine, recordings, Ambassador program)
- Three core breakthroughs recap (FNE, Wealth Engine, Matrix of Illusions)
- Five immediate action steps
- Member testimonial quotes (3 real members)
- Feedback form CTA
- Level 3 Stargazer upgrade pitch ($1,997, closes Friday Oct 24)
- Consultation scheduling CTA
- Multiple buttons and conversion paths

**Messaging Themes**:
- Implementation urgency ("gravitational pull of Matrix")
- "Movement creates momentum. Speed is power."
- Workshop recap and reinforcement
- Ambassador program ($250/referral commission)
- Level 3 upsell: "Build the machine that sets you free"
- "Your golden life awaits"

**Technical Specs**:
- Width: 600px (responsive to 100% on mobile)
- Background: Dark theme (#1a1a1a)
- Fonts: Crimson Text + Inter + 800 weight (OLD - needs update)
- **Enhanced mobile responsiveness**: .desktop-hide/.mobile-hide classes
- Stats box: Desktop 3-column, mobile stacked
- Mobile-first CSS with comprehensive breakpoints
- border-radius on buttons/boxes (more modern)
- MSO conditional comments for Outlook
- prefers-color-scheme dark mode support
- Image hosting: filesafe.space CDN
- Email variables: `{{unsubscribe}}`

**CTAs and Links**:
- Primary: Access Complete Resources (societysecrets.com/day-of-enlightenment-workshop-aftermath)
- Golden Life Sheet (societysecrets.com/your-golden-life)
- Wealth Engine calculator (societysecrets.com/wealth-engine-calculator)
- Workshop recordings (societysecrets.com/day-of-enlightenment-recordings)
- Ambassador signup (societysecrets.com/ambassador-signup)
- Feedback form (neothink.typeform.com/to/CiMxtG50)
- Level 3 enrollment (societysecrets.com/level3)
- Level 3 consultation (societysecrets.com/schedule-level-three-consultation) - appears 2x

**Member Testimonials**:
1. Graciela Jurado - "Four years to be independent"
2. Kathleen - 72 years old, financial comfort realization
3. Alex R. - Client sign-up during workshop break

**Branding Notes**:
- ✅ Uses gold (#FFD700) EXTENSIVELY - matches design system!
- ✅ Correct support email: support@neothink.com
- ❌ Still uses "The Society" instead of "Neothink Society"
- ❌ Still uses old fonts (Crimson Text + Inter)
- Better gold integration than pre-workshop emails
- More sophisticated mobile optimization

**Unique Elements**:
- Most comprehensive email of the three
- Post-event timing vs pre-event announcements
- Social proof via member testimonials
- Multiple conversion goals (resources, feedback, Level 3)
- Scarcity (recordings disappear Sunday, Level 3 closes Friday)
- Honor system payment mentioned
- Ambassador economics detailed ($250 commission, 8 referrals covers Level 3)

**Contact**: support@neothink.com ✅ (CORRECT)

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
- ❌ Templates 1-2: Use support@contact.neothink.com
- ✅ Template 3: Uses correct support@neothink.com
- ✅ Should use support@neothink.com

### Color Palette
- ✅ Dark background (#1a1a1a) is correct across all templates
- ❌ Templates 1-2: Missing gold accent (#FFD700)
- ✅ Template 3: Uses gold extensively (#FFD700) - GOOD!
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
- `doe-announcement.html` = Day of Enlightenment announcement (pre-event #1)
- `doe-secrets-revealed.html` = Day of Enlightenment secrets preview (pre-event #2)
- `doe-workshop-aftermath.html` = Day of Enlightenment workshop recap (post-event)
- Future examples: `vip-upgrade-offer.html`, `workshop-reminder.html`, etc.

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
