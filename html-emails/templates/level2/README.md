# Level 2 Member Email Templates

This directory contains email templates specifically designed for Level 2 Members (core audience who purchased The Secret Manuscript).

---

## Available Templates

### choose-your-date-broadcast.html

**Purpose**: Broadcast email for members who purchased online to select their preferred workshop date

**Use Case**:
- Send to members who registered but haven't chosen a specific workshop date
- Allows them to choose between November 22-23 or December 6-7, 2025

**Key Features**:
- Level 2 branding (white borders, educational tone)
- Two date options presented with equal weight
- Clear CTA to registration form: https://societysecrets.com/choose-your-date
- Mobile-responsive design
- Explains what happens after they choose (confirmation, prep materials, VIP opportunity)

**Subject Line**:
```
Action Required: Choose Your Day of Enlightenment Date
```

**Preview Text**:
```
Two workshops available: November 22-23 or December 6-7. Choose your preferred date now to secure your spot and receive your preparation materials.
```

**Technical Specs**:
- Typography: Baskervville (headlines), Plus Jakarta Sans (body)
- Color System: Pure black background (#000000), white borders for decision points
- Mobile Breakpoint: 600px with comprehensive responsive classes
- Email Client Compatibility: Gmail, Outlook, Apple Mail, Yahoo, AOL

**Messaging Strategy**:
- Action-focused headline: "Choose Your Workshop Date"
- Equal presentation of both date options
- Benefits-focused: What they receive after choosing
- Low-pressure tone: "Choose the one that works best for you"
- Support offer: "Reply to this email with questions"

**Content Structure**:
1. Classification header: "ACTION REQUIRED • LEVEL 2 MEMBER"
2. Main headline
3. Introduction explaining why they need to choose
4. Two date options in white-bordered boxes
5. Primary CTA button (white background, black text)
6. "Why Choose Now?" benefits section
7. Secondary CTA button
8. Footer support message
9. Attribution (Wallace Hamilton)

---

## Design Standards (Level 2)

**Audience**: Members who purchased The Secret Manuscript
**Access Level**: Day of Enlightenment workshops, basic resources
**Color Coding**: White borders/accents for decision points (NOT gold)
**Messaging Tone**: Educational, transformative, opportunity-focused
**Badge**: None (standard member status)

### Typography
- **Headlines**: Baskervville, 48px/56px (mobile: 32px/40px)
- **Body Text**: Plus Jakarta Sans, 17px/28px (mobile: 15px/24px)
- **Labels**: Courier Prime, 11px/16px, uppercase, 2px letter-spacing

### Color Palette
- **Background**: #000000 (pure black)
- **Primary Text**: #e5e5e5 (off-white)
- **Secondary Text**: #d0d0d0 (light gray)
- **Accent**: #FFD700 (gold, used sparingly for emphasis)
- **Decision Borders**: #ffffff (white, for Level 2)
- **CTA Background**: #ffffff (white button, black text)

### Mobile Optimization
- Responsive breakpoint: 600px
- Touch-friendly buttons: 44px+ height
- Reduced padding on mobile: 16px sides
- Stacked date options on small screens
- Mobile-optimized font sizes

---

## When to Use This Template

**Send To**:
- Members who purchased online but haven't selected a workshop date
- Members who need to switch their date
- New registrants needing date selection

**Timing**:
- As soon as purchase is complete (if date not selected during checkout)
- Follow-up reminder 3-7 days later if no date chosen

**Prerequisites**:
- Member has purchased Day of Enlightenment workshop
- Registration form is live at https://societysecrets.com/choose-your-date
- Both workshop dates (Nov 22-23 and Dec 6-7) are available

**After They Choose**:
- Send appropriate registration confirmation (nov2025 or dec2025)
- Begin preparation email sequence for their chosen date
- Offer VIP upgrade opportunity

---

## Customization Notes

### To Add/Remove Dates
Update the "Available Dates Section" (lines 212-287) with current workshop dates.

### To Change CTA URL
Update both CTA buttons (lines 293 and 391):
```html
<a href="https://societysecrets.com/choose-your-date" target="_blank">
```

### To Modify Benefits List
Update the "Why Choose Now?" section (lines 308-368) with current benefits.

### To Update Workshop Timing
Currently shows:
- Day 1: 8:00 AM – 5:00 PM Pacific Time
- Day 2: 8:00 AM – 5:00 PM Pacific Time

Update lines 233-234 and 265-266 as needed.

---

## Testing Checklist

Before sending:
- [ ] Test on Gmail (desktop and mobile)
- [ ] Test on Outlook (Windows and Mac)
- [ ] Test on Apple Mail (iOS and macOS)
- [ ] Verify registration form URL is live
- [ ] Test CTA buttons work correctly
- [ ] Verify mobile responsive design
- [ ] Check all links are trackable (if using email platform)
- [ ] Test preview text displays correctly
- [ ] Verify unsubscribe links work

---

## Performance Benchmarks

**Expected Metrics** (based on industry standards for transactional emails):
- Open Rate: 60-75% (transactional/action-required)
- Click Rate: 35-50% (clear call-to-action)
- Mobile Open: 55-65%
- Time to Action: 70% within 24 hours

**Optimization Tips**:
- Send during business hours (10am-2pm PT) for highest engagement
- Follow up with non-openers after 3 days
- Consider SMS reminder for non-responders after 7 days

---

Updated: November 14, 2025
