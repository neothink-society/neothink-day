# Day of Enlightenment - November 22-23, 2025
## Event Planning & Implementation Document

**Event Date**: Saturday, Nov 22 + Sunday, Nov 23, 2025
**Today's Date**: November 11, 2025 (11 days until event)
**Status**: Pre-event • Traffic launching soon
**Version**: 1.0

---

## Event Overview

### Key Changes from Previous Workshops
- **Duration**: 2-day workshop (Saturday + Sunday) — previously 1 day
- **Format**: Weekend intensive for deeper transformation
- **Date**: Nov 22-23, 2025 (Thanksgiving weekend approach)
- **Two distinct audiences** requiring separate flows

---

## Audience Segmentation

### Audience A: Direct Mail Purchasers (NEW FLOW)
**Source**: Direct mail campaign
**Status**: Purchased but not yet registered
**Need**: Complete registration to access event

**User Journey:**
```
Direct Mail Purchase → Register Page → Thanks + VIP Upsell → Welcome/Home Page → Event
```

**Data Capture Requirements:**
- Email address ✓
- Phone number ✓
- Physical mailing address ✓
- GHL form integration required

**Marketing Goal**:
- Secure registration details
- Upsell to VIP experience
- Set expectations for 2-day format
- Build excitement and commitment

---

### Audience B: Online Purchasers (RE-REGISTRATION FLOW)
**Source**: Previous online purchase (older workshop)
**Status**: Already purchased, need to re-register for new date
**Need**: Update information and confirm attendance

**User Journey:**
```
Email/Link → Re-Registration Page → Confirmation → Welcome/Home Page → Event
```

**Data Capture Requirements:**
- Confirm/update email
- Confirm/update phone
- Confirm/update address
- Acknowledge 2-day format (not 1-day)

**Marketing Goal**:
- Confirm attendance for new dates
- Update contact information
- Reset expectations (2-day vs 1-day)
- Re-engage and build excitement

---

## Page Architecture & Requirements

### Page 1: Register Page (Direct Mail Purchasers)
**Filename**: `register-nov-2025.html`
**URL Pattern**: `/register` or `/nov-2025-register`
**Audience**: Direct mail purchasers only

#### Purpose
Convert direct mail purchasers into registered attendees with complete contact information.

#### Key Sections
1. **Hero**
   - Badge: "Your Seat is Reserved"
   - Headline: "Complete Your Registration for Day of Enlightenment"
   - Subheadline: "Saturday, November 22 + Sunday, November 23, 2025"
   - Date/time visual prominence
   - 2-day format emphasis

2. **Why Register Section**
   - Access Zoom link (sent via email/SMS)
   - Pre-workshop materials
   - Golden Life Sheet template
   - VIP upgrade opportunity
   - Exclusive recordings access

3. **GHL Form Integration** ⚡ PRIMARY GOAL
   ```html
   <div class="ghl-form-container" id="register-form">
     <!-- GHL Form injected here -->
     Fields required:
     - First Name
     - Last Name
     - Email Address
     - Phone Number
     - Mailing Address (Street, City, State, ZIP)
     - Consent checkbox (SMS/Email communications)
   </div>
   ```

4. **What to Expect**
   - Day 1 (Saturday): Overview and topics
   - Day 2 (Sunday): Overview and topics
   - Duration: Both days 9am-5pm PT
   - Virtual via Zoom

5. **FAQ Section**
   - "What if I can't attend both days?"
   - "Will recordings be available?"
   - "What's the VIP upgrade?"
   - "What time zone?"
   - "What should I prepare?"

6. **Footer**
   - Support contact
   - Neothink branding

#### Design Notes
- **Premium but welcoming** (they've already purchased)
- **Action-focused** (complete registration NOW)
- **Trust-building** (confirm their investment is protected)
- Form should be ABOVE the fold or prominently featured
- Mobile-optimized (direct mail audience may register on phone)

#### Technical Requirements
- GHL form embed with validation
- Form submission → redirect to Thanks page
- Form data stored in GHL CRM
- Email/SMS automation trigger on submission

---

### Page 2: Thanks + VIP Upsell (Post-Registration)
**Filename**: `register-thanks-vip-upsell.html`
**URL Pattern**: `/thanks` or `/registered`
**Audience**: Just completed registration

#### Purpose
Confirm successful registration AND present VIP upgrade opportunity while excitement is high.

#### Key Sections
1. **Confirmation Hero**
   - Success icon/animation
   - "You're Registered!" headline
   - Confirmation: Nov 22-23, 2025
   - "Check your email for Zoom link" CTA

2. **What Happens Next**
   - Email confirmation sent (check spam)
   - Zoom link arrives 24 hours before
   - Pre-workshop materials coming
   - Calendar invite option

3. **VIP UPGRADE SECTION** ⚡ MONETIZATION
   - **Headline**: "Want the FULL Experience? Upgrade to VIP"
   - **Badge**: "Limited Spots Available"

   **VIP Benefits** (from existing vip-upgrade.html reference):
   - Private 1-on-1 mentor session (Sunday afternoon)
   - Exclusive Sunday afternoon deep-dive
   - Direct access to mentors
   - VIP-only recordings
   - Priority support
   - Golden Life Sheet implementation session

   **Price**: $297 (or current pricing)

   **CTA**: "Upgrade to VIP Now" button → GHL payment form or existing VIP page

4. **Standard Experience Recap**
   - What they get with standard registration
   - 2-day workshop access
   - Core teachings
   - Group Q&A sessions
   - Recordings (standard)

5. **Comparison Grid** (Optional but recommended)
   ```
   Standard vs VIP side-by-side
   - Feature comparison
   - Visual differentiation
   - Value proposition clear
   ```

6. **Social Proof**
   - Testimonials from previous VIP attendees
   - Results/transformations
   - Build FOMO

7. **Final CTA**
   - "Secure Your VIP Upgrade" button
   - Limited availability messaging
   - "Already VIP? Access your welcome page"

#### Design Notes
- **Celebratory** (they just registered!)
- **Persuasive but not pushy** (upsell as enhancement)
- **Clear value differentiation** (VIP vs Standard)
- Urgency (limited spots) but not aggressive
- Multiple CTAs for VIP upgrade throughout page

#### Technical Requirements
- Loads after registration form submission
- GHL tracking pixel for conversion
- VIP upgrade button → GHL payment form or checkout
- Alternative path: "Continue to Welcome Page" link at bottom

---

### Page 3: Welcome + Home Page
**Filename**: `welcome-home-nov-2025.html`
**URL Pattern**: `/welcome` or `/home` or `/hub`
**Audience**: All registered attendees (Standard + VIP)

#### Purpose
Central hub for all event information, materials, and next steps before/during/after workshop.

#### Key Sections
1. **Hero**
   - Personalized welcome (if possible via GHL)
   - "Welcome to Day of Enlightenment" headline
   - Event countdown: Days/Hours until Nov 22
   - Status badge: "Registered • Standard" or "Registered • VIP"

2. **Event Details Card**
   - **Day 1**: Saturday, November 22, 2025 • 9am-5pm PT
   - **Day 2**: Sunday, November 23, 2025 • 9am-5pm PT
   - Zoom link (revealed 24hrs before OR "Coming Soon")
   - Add to calendar buttons
   - Time zone converter

3. **Pre-Event Preparation** (11 days until event)
   - [ ] Review Golden Life Sheet template
   - [ ] Complete pre-work (if any)
   - [ ] Download preparation materials
   - [ ] Set up distraction-free environment
   - [ ] Prepare questions for Q&A

4. **Resources Section**
   - Golden Life Sheet download
   - Wealth Engine Calculator link
   - Pre-event reading materials
   - Community guidelines
   - Tech check instructions

5. **VIP Section** (conditional - only if VIP)
   - VIP-exclusive badge
   - Private session booking link
   - VIP-only resources
   - Special instructions

6. **Upgrade Opportunity** (conditional - only if Standard)
   - "Still interested in VIP?" mini-CTA
   - Link to VIP upgrade page
   - Limited availability reminder

7. **FAQ / Support**
   - Common questions
   - Tech support contact
   - Schedule questions
   - Emergency contact

8. **Timeline / Milestones**
   - "11 days until Day 1"
   - "24 hours before: Zoom link sent"
   - "Day 1: Saturday morning kickoff"
   - "Day 2: Sunday integration"
   - "Post-event: Recordings available"

9. **Community / Engagement**
   - Social media links (if applicable)
   - Community group access
   - Share your excitement section

#### Design Notes
- **Dashboard/Hub feel** (central command center)
- **Organized and clear** (easy to find everything)
- **Evolving content** (changes as event approaches)
- Conditional content based on VIP status
- Countdown creates urgency and excitement

#### Technical Requirements
- GHL conditional logic for VIP vs Standard content
- Countdown timer JavaScript (to Nov 22, 9am PT)
- Zoom link reveal mechanism (24hrs before)
- Calendar integration (ICS file download)
- Personalization tokens from GHL (name, status)

---

### Page 4: Re-Registration Page (Online Purchasers)
**Filename**: `re-register-nov-2025.html`
**URL Pattern**: `/re-register` or `/returning`
**Audience**: Previous online purchasers

#### Purpose
Re-engage previous purchasers, update their information, and confirm attendance for NEW date/format.

#### Key Sections
1. **Hero**
   - "Welcome Back!" greeting
   - Badge: "You're Already In • Just Confirm Your Details"
   - Headline: "Day of Enlightenment is BACK - November 22-23, 2025"
   - Subheadline: "Update your information to secure your spot"

2. **What's New Section**
   - **NEW DATE**: Nov 22-23, 2025
   - **NEW FORMAT**: 2-day intensive (expanded content)
   - **ENHANCED EXPERIENCE**: More tools, deeper transformation
   - Previous purchasers automatically registered

3. **Update Your Information**
   ```html
   <div class="ghl-form-container" id="re-register-form">
     <!-- GHL Form injected here -->
     Fields (pre-populated if possible):
     - First Name
     - Last Name
     - Email Address (confirm/update)
     - Phone Number (confirm/update)
     - Mailing Address (confirm/update)
     - Checkbox: "I confirm attendance for Nov 22-23"
     - Checkbox: "I understand this is now 2 days (not 1 day)"
   </div>
   ```

4. **Your Benefits**
   - Full 2-day workshop access
   - All new materials
   - Recordings included
   - Golden Life Sheet
   - Wealth Engine Calculator
   - VIP upgrade available

5. **VIP Upgrade Opportunity**
   - "Since you're already in, upgrade to VIP at special rate?"
   - Previous purchaser discount (if applicable)
   - VIP benefits listed
   - CTA to upgrade

6. **FAQ for Returning Members**
   - "Why do I need to re-register?"
   - "Is this different from what I purchased?"
   - "Will my previous purchase be honored?"
   - "What if I can't make the new dates?"

7. **Support**
   - Questions? Contact support
   - Refund policy (if dates don't work)
   - Alternative arrangements

#### Design Notes
- **Welcoming and appreciative** (thank them for previous purchase)
- **Clear communication** (format/date changed)
- **Easy update process** (pre-fill data if possible)
- **Value reinforcement** (expanded experience)
- No aggressive upselling (but present VIP option)

#### Technical Requirements
- GHL form with potential pre-population
- Email lookup to match previous purchase
- Update existing CRM record (don't create duplicate)
- Confirmation email after update
- Redirect to Welcome/Home page after submission

---

## User Flow Diagrams

### Flow A: Direct Mail Purchaser
```
[Purchase via Direct Mail]
         ↓
[Receive mailer/postcard with URL]
         ↓
[Visit Register Page] ← YOU ARE HERE (Page 1)
         ↓
[Complete GHL Form] (email, phone, address)
         ↓
[Submit Registration]
         ↓
[Redirect to Thanks + VIP Upsell Page] ← (Page 2)
         ↓
    ┌────┴────┐
    ↓         ↓
[Buy VIP]  [Skip]
    ↓         ↓
    └────┬────┘
         ↓
[Access Welcome/Home Page] ← (Page 3)
         ↓
[Pre-event preparation]
         ↓
[Receive Zoom link 24hrs before]
         ↓
[Attend Nov 22-23 Workshop]
```

### Flow B: Online Purchaser
```
[Previous Online Purchase]
         ↓
[Receive re-registration email]
         ↓
[Visit Re-Registration Page] ← (Page 4)
         ↓
[Update/Confirm Information via GHL Form]
         ↓
[Submit Re-Registration]
         ↓
[Redirect to Welcome/Home Page] ← (Page 3)
         ↓
[Pre-event preparation]
         ↓
[Receive Zoom link 24hrs before]
         ↓
[Attend Nov 22-23 Workshop]
```

---

## Content Strategy & Messaging

### Tone & Voice
- **Premium yet accessible**: Wealth and transformation without elitism
- **Confident and clear**: You know this works, communicate certainty
- **Supportive**: They've already invested, guide them to success
- **Urgent but not pushy**: Event is soon, time to prepare
- **Transformational language**: Immortal mentality, matrix-breaking, value creation

### Key Messaging Themes
1. **Two-day intensive** = deeper transformation than ever before
2. **Limited time** = only 11 days to prepare
3. **Complete system** = tools, teachings, implementation
4. **Support included** = not alone in this journey
5. **VIP enhancement** = optional but valuable upgrade

### Copywriting Principles
- **Benefit-focused**: What they'll gain, not what they'll do
- **Specific dates/times**: Remove all ambiguity
- **Social proof**: Previous attendee results
- **Scarcity**: Limited VIP spots, time-sensitive
- **Clarity**: No confusion about next steps

---

## Technical Specifications

### GoHighLevel Integration Points

#### Registration Form (Page 1)
```javascript
// GHL Form Configuration
{
  formId: "[TO_BE_PROVIDED]",
  fields: {
    firstName: { required: true },
    lastName: { required: true },
    email: { required: true, validation: "email" },
    phone: { required: true, validation: "phone" },
    address: {
      street: { required: true },
      city: { required: true },
      state: { required: true },
      zip: { required: true }
    },
    consent: { required: true, type: "checkbox" }
  },
  redirectUrl: "/thanks",
  automations: [
    "send_confirmation_email",
    "send_sms_confirmation",
    "add_to_nov_2025_campaign"
  ]
}
```

#### VIP Upgrade Form (Page 2)
```javascript
// GHL Payment Form
{
  formId: "[TO_BE_PROVIDED]",
  product: "VIP_Upgrade_Nov_2025",
  price: 297,
  redirectUrl: "/welcome?status=vip",
  automations: [
    "add_vip_tag",
    "send_vip_welcome_email",
    "grant_vip_access"
  ]
}
```

#### Re-Registration Form (Page 4)
```javascript
// GHL Update Form
{
  formId: "[TO_BE_PROVIDED]",
  lookupField: "email", // Find existing record
  updateMode: true, // Update, don't create new
  fields: {
    email: { prefill: true },
    phone: { prefill: true },
    address: { prefill: true },
    confirmAttendance: { required: true, type: "checkbox" },
    acknowledge2Day: { required: true, type: "checkbox" }
  },
  redirectUrl: "/welcome",
  automations: [
    "update_event_registration",
    "send_updated_confirmation"
  ]
}
```

### Countdown Timer (Welcome Page)
```javascript
// Target: Nov 22, 2025 9:00 AM PT
const eventStart = new Date('2025-11-22T09:00:00-08:00');

function updateCountdown() {
  const now = new Date();
  const diff = eventStart - now;

  if (diff <= 0) {
    // Event started or passed
    displayEventLive();
  } else {
    // Calculate days, hours, minutes
    displayTimeRemaining(diff);
  }
}
```

### Conditional Content (Welcome Page)
```html
<!-- Show only to Standard attendees -->
<div data-ghl-show-if="tags:contains:standard">
  <div class="upgrade-reminder">
    <p>Want to upgrade to VIP? <a href="/vip-upgrade">Limited spots available</a></p>
  </div>
</div>

<!-- Show only to VIP attendees -->
<div data-ghl-show-if="tags:contains:vip">
  <div class="vip-badge">🌟 VIP Member</div>
  <div class="vip-resources">
    <!-- VIP-only content -->
  </div>
</div>
```

---

## Design System Application

### Font Usage (Per DESIGN-SYSTEM.md)
- **Headlines**: Baskervville (serif)
- **Body text**: Plus Jakarta Sans (sans-serif)
- **Technical/Classification**: Courier Prime (monospace)

### Color Palette
- **Primary**: Gold (#FFD700) - CTAs, highlights, accents
- **Background**: Black (#000000) to Gray-950 (#0a0a0a)
- **Text**: White (#FFFFFF) primary, Gray-300 (#d4d4d4) secondary
- **Borders**: Gold with opacity for premium feel

### Component Usage
- **Badges**: Gold gradient with rounded corners
- **Buttons**: Primary (gold gradient), Secondary (outlined gold)
- **Cards**: Dark gradient with gold borders, hover effects
- **Forms**: Dark fields with gold focus states
- **Success states**: Gold checkmarks, animated

---

## Timeline & Milestones

### Today: November 11, 2025
- ✅ Create implementation plan (this document)
- ⏳ Build 4 new pages
- ⏳ Set up GHL forms
- ⏳ Test all flows

### By November 14, 2025 (8 days before)
- ✅ All pages live and tested
- ✅ GHL forms integrated and working
- ✅ Email sequences set up
- ✅ Traffic routing configured

### By November 18, 2025 (4 days before)
- ✅ Final checks on all systems
- ✅ Support team briefed
- ✅ Backup plans in place

### November 21, 2025 (1 day before)
- ✅ Send Zoom links to all registered
- ✅ Final reminder emails/SMS
- ✅ Tech check session (optional)

### November 22-23, 2025
- 🎯 EVENT DAYS
- Monitor attendance
- Provide support
- Capture testimonials

### November 24, 2025 (Day after)
- Send recordings to attendees
- VIP session follow-ups
- Post-event survey
- Next steps communication

---

## Success Metrics

### Registration Page
- **Goal**: 95%+ of direct mail purchasers complete registration
- **Metric**: Form submission rate
- **KPI**: Valid contact information captured

### VIP Upsell Page
- **Goal**: 20-30% VIP conversion rate
- **Metric**: Upgrade purchases / Total registrations
- **KPI**: Revenue per attendee increase

### Welcome Page
- **Goal**: Engaged, prepared attendees
- **Metric**: Resource downloads, page visits
- **KPI**: Event attendance rate

### Re-Registration Page
- **Goal**: 100% of online purchasers update information
- **Metric**: Form completion rate
- **KPI**: Reduced bounce/confusion

---

## Risk Mitigation

### Potential Issues & Solutions

**Issue**: Direct mail purchasers don't register in time
- **Solution**: Email + SMS reminders, deadline urgency

**Issue**: Confusion about 2-day format
- **Solution**: Clear messaging on every page, FAQ coverage

**Issue**: GHL form errors or data loss
- **Solution**: Test thoroughly, have backup form, manual entry process

**Issue**: VIP spots sell out
- **Solution**: Cap availability, clear "sold out" messaging, waitlist

**Issue**: Zoom link not received
- **Solution**: Multiple delivery methods, support page, manual send

**Issue**: Re-registrants create duplicate accounts
- **Solution**: GHL form lookup by email, update existing records

---

## Questions to Resolve Before Building

1. **Pricing**:
   - VIP upgrade price: $297 or different?
   - Previous purchaser discount for VIP?

2. **GHL Setup**:
   - Form IDs to be used?
   - Tags for segmentation?
   - Automation sequences ready?

3. **Content**:
   - Specific Day 1 vs Day 2 curriculum breakdown?
   - VIP-specific benefits confirmed?
   - Pre-work required or optional?

4. **Technical**:
   - URL structure preferences?
   - Subdomain or main domain?
   - Zoom link delivery mechanism?

5. **Logistics**:
   - Time zone display (PT only or multiple)?
   - Recording availability (when, where)?
   - Support hours during event?

---

## Next Actions

### Immediate (Today)
1. ✅ Plan created - review with team
2. ⏳ Get answers to unresolved questions
3. ⏳ Begin building Page 1 (Register Page)

### Short Term (Next 2 days)
4. Build Page 2 (Thanks + VIP Upsell)
5. Build Page 3 (Welcome/Home Hub)
6. Build Page 4 (Re-Registration)

### Testing (Next 3 days)
7. End-to-end flow testing (both audiences)
8. Mobile responsiveness check
9. GHL integration validation
10. Load testing

### Launch (Before Nov 14)
11. Deploy all pages
12. Configure DNS/routing
13. Enable tracking
14. Brief support team

---

**Document Status**: Draft for Review
**Next Update**: After stakeholder feedback
**Owner**: Development Team
**Last Modified**: November 11, 2025
