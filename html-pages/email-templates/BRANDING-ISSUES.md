# Email Template Branding Issues

This document tracks branding inconsistencies found in original email templates that need to be corrected in updated versions.

Last Updated: 2025-11-12

---

## Typography Issues

### Current State
All original email templates use **old font stack**:
- **Serif**: Crimson Text (400, 600 weights)
- **Sans-serif**: Inter (300, 400, 600, 700 weights)
- **Monospace**: Courier New (system font)

### Required Changes
Per `/DESIGN-SYSTEM.md`, should use **current font stack**:
- **Serif**: Baskervville (400, 400 italic, 700 weights)
- **Sans-serif**: Plus Jakarta Sans (300, 400, 500, 600, 700 weights)
- **Monospace**: Courier Prime (400, 700 weights)

### Implementation Notes
- Google Fonts import needs updating
- All inline `font-family` styles need replacement
- Fallback fonts should remain (Georgia for serif, system for sans-serif)

**Priority**: HIGH - Visual brand consistency

---

## Brand Name Issues

### Current State
Templates reference **"The Society"** in:
- Logo alt text
- Footer links
- Email copy

### Required Changes
Per `/BRAND-GUIDELINES.md`:
- Brand name is **"Neothink Society"** (never "NeoThink")
- All references should use full brand name

### Locations to Update
1. Logo `alt` attribute: "The Society" → "Neothink Society"
2. Footer links: "The Society" → "Neothink Society"
3. Any body copy references (verify context appropriateness)

**Priority**: HIGH - Brand identity

---

## Contact Email Issues

### Current State
Templates use: `support@contact.neothink.com`

### Required Changes
Per `/BRAND-GUIDELINES.md`:
- Official support email: `support@neothink.com`

### Locations to Update
1. "Questions? Contact..." sections
2. Alternative date request instructions
3. Any support mailto links

**Priority**: HIGH - Customer experience, deliverability

---

## Color Palette Issues

### Current State
Templates use dark theme correctly:
- Background: #1a1a1a ✅
- Text grays: #e8e8e8, #d0d0d0, #c0c0c0, #aaaaaa, #999999, #777777 ✅
- Surface grays: #2a2a2a, #252525, #1f1f1f, #3a3a3a ✅

**Missing**: Gold accent color

### Required Changes
Per `/DESIGN-SYSTEM.md`:
- **Primary accent**: #FFD700 (gold)
- Should be used for key CTAs, highlights, emphasis

### Suggested Implementations
1. Date announcement box - add gold accent border or text
2. "Your Seat Is Reserved" checkmark - use gold
3. Key emphasis words (currently white) - consider gold
4. Alternative date notice heading - gold accent
5. Footer separator or accent elements

**Priority**: MEDIUM - Visual hierarchy and brand recognition

---

## Logo Issues

### Current State
Uses logo from: `https://assets.cdn.filesafe.space/OWPT3ihPWINakwA0bGRQ/media/685f3d91844c01434843021f.png`

Logo appears to be "The Society" branding

### Investigation Needed
- Is there a "Neothink Society" branded logo?
- Should logo be updated or is this the correct asset?
- Verify logo URL stability and CDN reliability

### Action Items
1. Check if Neothink Society logo exists
2. If yes, update image source URL
3. Update alt text to "Neothink Society"
4. Consider logo dimensions (currently 100x100)

**Priority**: MEDIUM - Pending logo availability

---

## Messaging Alignment

### Current State
Core messaging aligns well with brand voice:
- ✅ Elite, mysterious, transformational tone
- ✅ "Welcome to the 1%" positioning
- ✅ Contrarian language ("shatter illusions")
- ✅ Direct, powerful statements
- ✅ References to "The Secrets" and consciousness

### Minor Refinements
Consider updating per `/BRAND-GUIDELINES.md` brand voice:
- Emphasize "Prosper Happily Forever" philosophy where appropriate
- Strengthen "Immortal Mentality" references
- Consider "Value Creation" framing

**Priority**: LOW - Messaging is already strong

---

## Template-Specific Issues

### doe-announcement.html

**Specific Issues**:
1. ❌ Font: Crimson Text + Inter (old)
2. ❌ Brand: "The Society" in logo alt + footer
3. ❌ Email: support@contact.neothink.com
4. ❌ Gold: Missing #FFD700 accent color
5. ⚠️ Logo: Verify if Neothink Society version exists

**Unique Considerations**:
- Date-specific content (October 18th) - may need updating for future events
- "Level 2" targeting is appropriate for audience
- "CONFIDENTIAL" classification adds exclusivity (keep)
- Alternative date option is customer-friendly (keep)

---

## Email Client Compatibility

### Current Approach
Templates use email-safe techniques:
- ✅ Table-based layout
- ✅ Inline + embedded CSS
- ✅ Email-safe fonts with fallbacks
- ✅ CDN-hosted images
- ✅ Mobile responsive media queries

### Maintain Compatibility
When updating fonts and colors, ensure:
- Google Fonts remain accessible
- Fallback fonts still work
- Color contrast meets accessibility standards
- Mobile breakpoints function correctly

**Priority**: CRITICAL - Must maintain across updates

---

## Accessibility Considerations

### Current State
- Reasonable color contrast on dark backgrounds
- Semantic HTML structure with headings
- Alt text on logo image
- Mobile responsive design

### Improvements for Updated Versions
- Verify WCAG AA compliance with new color palette
- Ensure gold (#FFD700) on dark (#1a1a1a) has sufficient contrast
- Consider "prefers-color-scheme" media query (optional for email)
- Test screen reader experience

**Priority**: MEDIUM - Legal compliance and inclusivity

---

## Migration Checklist

When creating updated versions from originals:

**Typography**:
- [ ] Update Google Fonts import URL
- [ ] Replace all Crimson Text → Baskervville
- [ ] Replace all Inter → Plus Jakarta Sans
- [ ] Replace Courier New → Courier Prime
- [ ] Verify font weights match design system
- [ ] Test fallback fonts

**Branding**:
- [ ] Update "The Society" → "Neothink Society"
- [ ] Update logo alt text
- [ ] Update footer brand references
- [ ] Verify logo image URL (if changed)

**Contact**:
- [ ] Update support@contact.neothink.com → support@neothink.com
- [ ] Check all mailto links
- [ ] Update alternative date instructions

**Colors**:
- [ ] Add gold accent (#FFD700) strategically
- [ ] Verify color contrast (WCAG AA)
- [ ] Test on dark/light backgrounds
- [ ] Maintain gray scale consistency

**Testing**:
- [ ] Gmail desktop
- [ ] Gmail mobile
- [ ] Outlook desktop
- [ ] Apple Mail
- [ ] Mobile devices (iOS/Android)
- [ ] Dark mode support

---

## Future Templates

As new original templates are added, check for these same issues:

1. Font stack (Crimson Text + Inter vs Baskervville + Plus Jakarta Sans)
2. Brand name ("The Society" vs "Neothink Society")
3. Support email (contact subdomain vs direct)
4. Gold accent usage
5. Logo consistency

Document new issues in this file as discovered.

---

## Related Documentation

- `/BRAND-GUIDELINES.md` - Official brand standards
- `/DESIGN-SYSTEM.md` - Typography and color specifications
- `/html-pages/email-templates/README.md` - Email template organization
- `/html-pages/email-templates/original-templates/README.md` - Original template details

---

## Questions for Stakeholders

1. **Logo**: Does a "Neothink Society" branded logo exist? If so, where is it hosted?
2. **Gold accent**: Which elements should prioritize gold color? CTAs? Headings? Accents?
3. **Email domain**: Confirm support@neothink.com is correct (not support@contact.neothink.com)
4. **"The Society" usage**: Is this ever appropriate, or always "Neothink Society"?
5. **Level terminology**: Confirm "Level 2," "Level 3 Stargazer" terminology is current

---

Contact: support@neothink.com
