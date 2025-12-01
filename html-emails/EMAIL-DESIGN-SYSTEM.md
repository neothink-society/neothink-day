# Neothink Society Email Design System
**Version 1.1 | November 27, 2025**

> **Email-specific design standards** for HTML email templates. For web design tokens, see **DESIGN-SYSTEM.md**.

## Overview

This document defines the complete design system for Neothink Society email communications. All email templates must follow these standards to ensure brand consistency, technical reliability, and optimal user experience across all devices and email clients.

**Reference Template**: `level3-welcome-recording.html` - The gold standard for all future emails.

### Related Documentation
| Document | Purpose |
|----------|---------|
| **DESIGN-SYSTEM.md** | Canonical web design tokens (colors, typography, spacing) |
| **BRAND-GUIDELINES.md** | Brand identity, voice, customer journey |
| **EMAIL-DESIGN-SYSTEM.md** (this file) | Email-specific standards and components |
| **BRANDING-ISSUES.md** | Migration tracking for email templates |

---

## Audience Segmentation

### Level 2 Members (Core Audience)
**Who**: Members who purchased The Secret Manuscript
**Access**: Day of Enlightenment workshops, basic resources
**Color Coding**: White borders/accents for decision points
**Messaging Tone**: Educational, transformative, opportunity-focused
**Badge**: None (standard member status)

### VIP Members (Premium Tier)
**Who**: Members who upgraded to VIP access ($187)
**Access**: Priority Q&A, exclusive sessions, guaranteed mentorship
**Color Coding**: Gold (#FFD700) throughout - maintain even at max urgency
**Messaging Tone**: Exclusive, priority, recognition-focused
**Badge**: ⭐ "VIP" or "VIP Elite Member" with gold pill design

### Level 3 Stargazers (Elite Tier)
**Who**: Members enrolled in Level 3 program ($1,997 or $1,697 VIP)
**Access**: 3-day intensive, ongoing mentorship, elite community
**Color Coding**: Gold (#FFD700) with pure black backgrounds
**Messaging Tone**: Elite, builders, world-changers, family
**Badge**: "Stargazers" gold gradient pill + ⭐ designation

---

## Typography System

### Font Stack (REQUIRED)

```css
/* Serif - Display Headlines, Quotes */
font-family: 'Baskervville', Georgia, 'Times New Roman', Times, serif;

/* Sans-Serif - Body Text, UI Elements */
font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;

/* Monospace - Labels, Timestamps, Classification */
font-family: 'Courier Prime', 'Courier New', Courier, monospace;
```

### Font Import (Head Section)

```html
<style type="text/css">
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;600;700;800&family=Courier+Prime:wght@400;700&display=swap');
</style>
```

### Typography Hierarchy

#### Headlines (Baskervville)
- **Hero Headline**: 48px / 56px line-height / 400 weight / #FFD700 or #FFFFFF
  - Mobile: 38px / 46px
- **Section Headline**: 28px / 36px line-height / 400 weight / #FFD700
  - Mobile: 24px / 32px
- **Quote Text**: 26px / 36px line-height / 400 weight / italic / #FFFFFF
  - Mobile: 20px / 30px

#### Body Text (Plus Jakarta Sans)
- **Primary Body**: 17px / 28px line-height / 400 weight / #e5e5e5
  - Mobile: 16px / 26px
- **Secondary Body**: 16px / 26px line-height / 400 weight / #d0d0d0
  - Mobile: 16px / 26px
- **Small Body**: 15px / 24px line-height / 400 weight / #d0d0d0
  - Mobile: 15px / 24px
- **Subheading**: 22px / 30px line-height / 700 weight / #FFD700
  - Mobile: 20px / 28px
- **List Items**: 15px / 22px line-height / 600 weight / #e5e5e5
  - Mobile: 15px / 24px

#### Labels & Meta (Courier Prime)
- **Classification Header**: 11px / 16px line-height / 700 weight / uppercase / 2px letter-spacing / #FFD700
- **Timestamp**: 11px / 16px line-height / 700 weight / uppercase / 2px letter-spacing / #FFD700

#### Attribution & Footer
- **Attribution**: 14px / 20px / 600 weight / #a3a3a3 (Plus Jakarta Sans)
- **Footer Links**: 12px / 18px / 400 weight / uppercase / 1px letter-spacing / #777777 (Plus Jakarta Sans)

---

## Color System

### Primary Palette

#### Pure Black Background
```css
background-color: #000000; /* Premium feel, use for all emails */
```

#### Gold Accent (Primary Brand Color)
```css
color: #FFD700; /* Gold - primary accent, VIP branding, CTAs */
```

#### Gold Gradient (Buttons, Badges)
```css
background: linear-gradient(135deg, #FFD700, #FFC700);
```

### Text Colors

```css
/* Primary Text */
color: #ffffff; /* Pure white - headlines, emphasis */
color: #e5e5e5; /* Off-white - primary body text */
color: #d4d4d4; /* Light gray - subtitles */
color: #d0d0d0; /* Medium-light gray - secondary body */
color: #a3a3a3; /* Medium gray - attribution */
color: #999999; /* Medium-dark gray - support text */
color: #777777; /* Dark gray - footer links */
```

### Urgency & Status Colors

```css
/* Maximum Urgency (General Audience) */
color: #FF0000; /* Red - LIVE NOW, extreme urgency */
background: linear-gradient(135deg, #FF0000 0%, #CC0000 100%);

/* High Urgency (Countdowns) */
color: #FF4444; /* Red-orange - 1-hour warnings */

/* Deadline Urgency */
background: linear-gradient(135deg, #FF4444, #FF8844); /* Red to orange */

/* VIP Urgency */
color: #FFD700; /* Gold - maintains VIP branding even at urgency */
```

### Border & Divider Colors

```css
/* Primary Borders */
border: 2px solid #FFD700; /* Gold - premium sections, VIP */
border: 2px solid #FFFFFF; /* White - decision points, Level 2 */

/* Gold Border Variations */
border: 3px solid #FFD700; /* Thicker for extra emphasis */

/* Dividers */
border-bottom: 1px solid rgba(255, 215, 0, 0.2); /* Gold 20% - list items */
border-top: 1px solid #3a3a3a; /* Gray - section dividers */
border-bottom: 1px solid #3a3a3a; /* Gray - quote sections */
```

### Background Variations

```css
/* Gradient Backgrounds */
background: linear-gradient(180deg, #0f0f0f 0%, #000000 100%); /* Hero sections */
background: linear-gradient(135deg, #0f0f0f, #0a0a0a); /* CTA cards */

/* Solid Backgrounds */
background-color: #0f0f0f; /* Subtle lift from pure black */
background-color: #0a0a0a; /* Darker lift */
background-color: #252525; /* Step boxes */
```

### Box Shadows (Glow Effects)

```css
/* Gold Glow */
box-shadow: 0 8px 32px rgba(255, 215, 0, 0.4); /* Badge subtle */
box-shadow: 0 12px 48px rgba(255, 215, 0, 0.15); /* Card subtle */
box-shadow: 0 0 40px rgba(255, 215, 0, 0.5); /* CTA button standard */
box-shadow: 0 0 60px rgba(255, 215, 0, 1); /* Maximum gold glow (VIP LIVE) */

/* Red Glow */
box-shadow: 0 0 60px rgba(255, 0, 0, 1); /* Maximum red glow (LIVE NOW) */
```

---

## Component Library

### 1. Classification Header

**Purpose**: Indicates email classification and audience
**Placement**: Top of email, full width

```html
<tr>
    <td style="padding: 25px 40px; text-align: center; border-bottom: 2px solid #FFD700;" class="mobile-padding">
        <p style="margin: 0; padding: 0; font-family: 'Courier Prime', 'Courier New', monospace; font-size: 11px; color: #FFD700; text-transform: uppercase; letter-spacing: 2px; line-height: 16px; font-weight: 700;">
            Level Three Members • Exclusive Access
        </p>
    </td>
</tr>
```

**Variations**:
- Level 2: `Level Two Members • Day of Enlightenment`
- VIP: `⭐ VIP Members • Priority Access`
- Level 3: `Level Three Members • Exclusive Access` or `Stargazers • Elite Access`

### 2. Badge Components

#### Status Badge (Pill Design)

**Level 3 Stargazers Badge**:
```html
<td style="background: linear-gradient(135deg, #FFD700, #FFC700); border-radius: 100px; padding: 12px 32px; box-shadow: 0 8px 32px rgba(255, 215, 0, 0.4);">
    <p style="margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 12px; color: #000000; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; line-height: 16px;">
        Stargazers
    </p>
</td>
```

**VIP Elite Badge**:
```html
<td style="border: 2px solid #FFD700; border-radius: 100px; padding: 10px 28px; background-color: transparent;">
    <p style="margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 12px; color: #FFD700; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; line-height: 16px;">
        ⭐ VIP Elite Member
    </p>
</td>
```

#### Status Badge (Success/Complete)

```html
<p style="margin: 0; padding: 0; font-family: 'Courier Prime', 'Courier New', monospace; font-size: 12px; color: #FFD700; text-transform: uppercase; letter-spacing: 2px; line-height: 18px; font-weight: 700;">
    ✓ Workshop Complete
</p>
```

### 3. Call-to-Action (CTA) Buttons

#### Primary Gold Button (Standard)

```html
<td align="center" style="background: linear-gradient(135deg, #FFD700, #FFC700); border-radius: 8px; box-shadow: 0 0 40px rgba(255, 215, 0, 0.5);">
    <a href="[URL]" class="mobile-button" style="display: inline-block; padding: 20px 50px; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; color: #000000; text-decoration: none; text-transform: uppercase; letter-spacing: 1px; line-height: 22px;">
        Watch Now
    </a>
</td>
```

**Mobile Responsive**:
```css
.mobile-button {
    padding: 16px 24px !important;
    font-size: 16px !important;
    letter-spacing: 0.5px !important;
    line-height: 22px !important;
}
```

#### LIVE NOW Button (Red - Maximum Urgency)

```html
<td align="center" style="background: linear-gradient(135deg, #FF0000 0%, #CC0000 100%); border-radius: 10px; box-shadow: 0 0 60px rgba(255, 0, 0, 1), 0 20px 60px rgba(0, 0, 0, 0.9);">
    <a href="[URL]" class="mobile-button" style="display: inline-block; padding: 32px 70px; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 24px; font-weight: 900; color: #ffffff; text-decoration: none; text-transform: uppercase; letter-spacing: 2px; line-height: 32px;">
        🎥 JOIN NOW
    </a>
</td>
```

#### VIP LIVE NOW Button (Gold - VIP Branding at Urgency)

```html
<td align="center" style="background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%); border-radius: 10px; box-shadow: 0 0 60px rgba(255, 215, 0, 1), 0 20px 60px rgba(0, 0, 0, 0.9);">
    <a href="[URL]" class="mobile-button" style="display: inline-block; padding: 32px 70px; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 24px; font-weight: 900; color: #000000; text-decoration: none; text-transform: uppercase; letter-spacing: 2px; line-height: 32px;">
        🎥 JOIN VIP NOW
    </a>
</td>
```

#### Secondary Button (White/Consultation)

```html
<td align="center" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 8px 24px rgba(255, 255, 255, 0.1);">
    <a href="[URL]" class="mobile-button" style="display: inline-block; padding: 20px 40px; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; color: #000000; text-decoration: none; text-transform: uppercase; letter-spacing: 1px; line-height: 22px;">
        Speak To A Mentor First
    </a>
</td>
```

### 4. Content Cards

#### Premium CTA Card (With Border & Glow)

```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin: 0 0 40px 0; background: linear-gradient(135deg, #0f0f0f, #0a0a0a); border: 2px solid #FFD700; border-radius: 12px; box-shadow: 0 12px 48px rgba(255, 215, 0, 0.15);">
    <tr>
        <td style="padding: 40px 35px;" class="content-padding">
            <!-- Card content -->
        </td>
    </tr>
</table>
```

### 5. List Components

#### Bulleted List with Gold Bullets & Dividers

```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
    <tr>
        <td style="padding: 15px 0; border-bottom: 1px solid rgba(255, 215, 0, 0.2);">
            <p class="mobile-text-small" style="margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 15px; color: #e5e5e5; font-weight: 600; line-height: 22px;">
                <span style="color: #FFD700; font-weight: 800;">•</span> List item text here
            </p>
        </td>
    </tr>
    <tr>
        <td style="padding: 15px 0;">
            <p class="mobile-text-small" style="margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 15px; color: #e5e5e5; font-weight: 600; line-height: 22px;">
                <span style="color: #FFD700; font-weight: 800;">•</span> Last item (no border-bottom)
            </p>
        </td>
    </tr>
</table>
```

### 6. Quote Section

```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin: 0 0 40px 0;">
    <tr>
        <td align="center" style="padding: 35px 0; border-top: 1px solid #3a3a3a; border-bottom: 1px solid #3a3a3a;" class="mobile-spacing-reduce">
            <p class="mobile-quote" style="margin: 0 0 12px 0; padding: 0; font-family: 'Baskervville', Georgia, 'Times New Roman', Times, serif; font-size: 26px; color: #ffffff; font-style: italic; text-align: center; line-height: 36px; font-weight: 400;">
                "Quote text here with line breaks<br class="mobile-hide"> for desktop readability."
            </p>
            <p style="margin: 10px 0 0 0; padding: 0; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 14px; color: #a3a3a3; text-align: center; line-height: 20px; font-weight: 600;">
                — Wallace Hamilton, Platinum Mentor
            </p>
        </td>
    </tr>
</table>
```

### 7. Urgency Headers

#### Standard Urgency (Red Circle)

```html
<p style="margin: 0; padding: 0; font-family: 'Courier Prime', 'Courier New', monospace; font-size: 18px; color: #FFD700; text-transform: uppercase; letter-spacing: 6px; line-height: 26px; font-weight: 700;">
    🔴 LIVE NOW • JOIN IMMEDIATELY
</p>
```

#### VIP Urgency (Gold Star)

```html
<p style="margin: 0; padding: 0; font-family: 'Courier Prime', 'Courier New', monospace; font-size: 18px; color: #FFD700; text-transform: uppercase; letter-spacing: 6px; line-height: 26px; font-weight: 700;">
    ⭐ VIP LIVE NOW • JOIN IMMEDIATELY
</p>
```

---

## Mobile Responsive Standards

### Required CSS Classes

```css
/* Desktop hide/show */
.desktop-hide {
    display: none !important;
    max-height: 0 !important;
    overflow: hidden !important;
    visibility: hidden !important;
}

/* Mobile hide/show */
.mobile-hide {
    display: none !important;
    max-height: 0 !important;
    overflow: hidden !important;
    visibility: hidden !important;
    width: 0 !important;
}

/* Container */
.container {
    width: 100% !important;
    max-width: 100% !important;
}

/* Padding */
.content-padding {
    padding: 25px 16px !important;
}

.mobile-padding {
    padding-left: 16px !important;
    padding-right: 16px !important;
}

/* Typography */
.headline {
    font-size: 32px !important;
    line-height: 40px !important;
}

.headline-large {
    font-size: 38px !important;
    line-height: 46px !important;
}

.mobile-button {
    padding: 16px 24px !important;
    font-size: 16px !important;
    letter-spacing: 0.5px !important;
    line-height: 22px !important;
}

.mobile-text {
    font-size: 16px !important;
    line-height: 26px !important;
}

.mobile-text-small {
    font-size: 15px !important;
    line-height: 24px !important;
}

.mobile-title {
    font-size: 24px !important;
    line-height: 32px !important;
}

.mobile-subtitle {
    font-size: 20px !important;
    line-height: 28px !important;
}

.mobile-quote {
    font-size: 20px !important;
    line-height: 30px !important;
}

/* Spacing */
.mobile-spacing-reduce {
    padding: 20px 0 !important;
}
```

### Media Query

```css
@media only screen and (max-width: 600px) {
    /* All mobile classes above */
}
```

---

## Email Client Compatibility

### Required Meta Tags

```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting">
<meta name="format-detection" content="telephone=no,address=no,email=no,date=no">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
```

### Table Best Practices

```html
<!-- Layout tables must have these attributes -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">

<!-- MSO (Outlook) conditional comments for specific fixes -->
<!--[if mso]>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600">
<![endif]-->
```

### CSS Resets

```css
body {
    margin: 0 !important;
    padding: 0 !important;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}

table {
    border-collapse: collapse;
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt;
}

img {
    border: 0;
    height: auto;
    line-height: 100%;
    outline: none;
    text-decoration: none;
    -ms-interpolation-mode: bicubic;
}

a {
    text-decoration: none;
}
```

---

## Brand Elements

### Support Email
```
support@neothink.com
```

### Brand Name
**Primary**: "The Neothink Society" (formal)
**Informal**: "Neothink family" (community, belonging)
**Short**: "Neothink Society" (standard)

**NEVER USE**: "The Society" (old branding)

### Footer Standard

```html
<p style="margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 12px; color: #777777; text-transform: uppercase; letter-spacing: 1px; line-height: 18px; font-weight: 400;">
    <a href="#" style="color: #777777; text-decoration: none; font-weight: 400;">The Neothink Society</a> •
    <a href="#" style="color: #777777; text-decoration: none; font-weight: 400;">[Segment Name]</a> •
    <a href="{{unsubscribe}}" style="color: #777777; text-decoration: none; font-weight: 400;">Unsubscribe</a>
</p>
```

**Segment Names**:
- Level 2: "Level Two Members"
- VIP: "VIP Members"
- Level 3: "Level Three Stargazers" or "Stargazers"

---

## Design Principles

### 1. Mobile-First
- Design for mobile screens first (320px-375px width)
- Enhance for desktop (600px container)
- Test on iPhone, Android, Gmail app, native mail apps

### 2. Accessibility
- Minimum 15px font size for body text
- 4.5:1 contrast ratio for body text
- 3:1 contrast ratio for large text (18px+)
- Alt text for all images
- Semantic HTML structure

### 3. Performance
- Inline critical CSS
- External Google Fonts import
- Optimize images (compress, proper format)
- Keep email size under 100KB total

### 4. Hierarchy
- One primary CTA per email (maximum urgency)
- Secondary CTAs muted in comparison
- Clear visual hierarchy: headline → subhead → body → CTA
- Use white space generously

### 5. Consistency
- Use component library (don't reinvent)
- Follow typography system exactly
- Maintain color usage (gold = VIP, red = urgency, white = decision)
- Keep spacing consistent (multiples of 4px or 5px)

---

## Quality Checklist

Before finalizing any email template:

### Typography
- [ ] Uses Baskervville for headlines/quotes
- [ ] Uses Plus Jakarta Sans for body/UI
- [ ] Uses Courier Prime for labels/timestamps
- [ ] All font sizes match hierarchy
- [ ] Mobile responsive font classes applied

### Colors
- [ ] Pure black background (#000000)
- [ ] Gold accent used appropriately (#FFD700)
- [ ] Correct color for audience (gold VIP, red urgency, white decision)
- [ ] Text colors from approved palette only

### Mobile
- [ ] All mobile classes defined
- [ ] Tested at 320px, 375px, 414px widths
- [ ] Line breaks work on mobile (.mobile-hide used)
- [ ] Buttons touch-friendly (min 44px height)
- [ ] Padding scales appropriately

### Email Clients
- [ ] DOCTYPE: XHTML 1.0 Transitional
- [ ] All required meta tags present
- [ ] role="presentation" on layout tables
- [ ] MSO comments where needed
- [ ] Tested in Gmail, Outlook, Apple Mail, Yahoo

### Branding
- [ ] Uses "The Neothink Society" or "Neothink family"
- [ ] Correct support email (support@neothink.com)
- [ ] Appropriate badge for audience segment
- [ ] Footer includes correct segment name
- [ ] Unsubscribe link present: {{unsubscribe}}

### Content
- [ ] One clear primary CTA
- [ ] Subject line < 50 characters
- [ ] Preheader text optimized (40-100 characters)
- [ ] Messaging appropriate for audience segment
- [ ] No broken links

---

## Reference Template

**File**: `level3-welcome-recording.html`

This template exemplifies:
- ✅ Correct fonts (Baskervville, Plus Jakarta Sans, Courier Prime)
- ✅ Pure black background (#000000)
- ✅ Sophisticated gold accent usage
- ✅ "Stargazers" badge design
- ✅ Comprehensive mobile responsive classes
- ✅ "Neothink family" messaging
- ✅ Clean component structure
- ✅ Proper quote attribution
- ✅ List design with gold dividers
- ✅ CTA card with border and glow

**Use this as your starting point for all new emails.**

---

## Version History

- **v1.0** (November 2025) - Initial email design system based on 24-template analysis and level3-welcome-recording.html reference template
