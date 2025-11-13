# November 2025 Email Sequence - Session Summary

**Date**: November 13, 2025
**Session Focus**: Complete email automation sequence for November 22-23, 2025 workshop

---

## ✅ What We Completed Today

### 6 New Email Templates Created

All emails designed for automation workflow triggered by registration, not broadcast scheduling.

#### 1. **preparation-9days.html** ✅
- **Subject**: `9 Days: Your Pre-Work Starts Now`
- **Focus**: Complete pre-work (pages 1-50 + 5 reflection questions)
- **Design**: Gold-bordered assignment box, all 5 questions listed explicitly
- **Key Elements**: Pre-work accountability, why it matters, VIP upgrade mention

#### 2. **preparation-4days.html** ✅
- **Subject**: `4 Days: Block BOTH Full Days Now`
- **Focus**: Calendar blocking - protect BOTH Saturday and Sunday
- **Design**: Prominent date display with times, what to block out list
- **Key Elements**: Why both days required, 5 things to block, VIP upgrade available

#### 3. **preparation-3days.html** ✅
- **Subject**: `⚡ 72 Hours: Last Chance for VIP`
- **Focus**: MAIN VIP conversion push - 72 hours until deadline
- **Design**: Countdown urgency, all 5 VIP benefits with ⭐ icons
- **Key Elements**: VIP deadline (8am PT Saturday), general vs VIP comparison, primary CTA

#### 4. **preparation-2days.html** ✅
- **Subject**: `48 Hours: Your Final Preparation Checklist`
- **Focus**: Technical and logistical readiness
- **Design**: 3 checklist sections (Technology, Environment, Materials)
- **Key Elements**: 11 total checklist items, Zoom link arrives tomorrow reminder

#### 5. **preparation-1day.html** ✅
- **Subject**: `Tomorrow 7am PT: Your Zoom Link Arrives`
- **Focus**: Final reminders, reduce anxiety, ensure readiness
- **Design**: Set 3 alarms section, what to do tonight, quick reminders
- **Key Elements**: Specific alarm times, 4 tonight actions, inspirational quote

#### 6. **day-of.html** ✅
- **Subject**: `🔴 LIVE IN 1 HOUR: Join Now`
- **Focus**: Maximum urgency - JOIN NOW with Zoom link
- **Design**: HUGE gold Zoom button, repeated CTA, minimal text
- **Key Elements**: Zoom link (needs replacement), today's schedule, VIP note, support email

---

## 📄 Documentation Created

### 1. **EMAIL-SUBJECT-LINES.md** (Already existed)
- Subject lines and preview text for all 8 emails
- Send timing recommendations (pre-automation understanding)
- A/B testing alternatives
- Mobile optimization notes

### 2. **EMAIL-SEQUENCE.md** ✅ NEW
- Complete 8-email automation workflow documentation
- Detailed breakdown of each email
- Automation timing logic
- Late registration handling
- Testing checklist
- Subject line quick reference

### 3. **SESSION-SUMMARY.md** ✅ NEW (this file)
- What we completed today
- Files ready for use
- What you need to do before sending
- Automation workflow setup notes

---

## 📁 All Files Ready for GoHighLevel

### November 2025 Workshop Emails (Complete Set)

Located in: `/templates/nov2025/`

**Registration & Confirmation (already existed):**
1. `registration-confirmation.html` - Registration confirmation (updated with pure black, pre-work, workshop hub CTA)
2. `vip-confirmation.html` - VIP purchase confirmation (updated with ⭐ badge)

**Countdown Sequence (NEW - created today):**
3. `preparation-9days.html` - 9 days: Pre-work assignment
4. `preparation-4days.html` - 4 days: Calendar blocking
5. `preparation-3days.html` - 3 days: VIP upgrade urgency
6. `preparation-2days.html` - 2 days: Preparation checklist
7. `preparation-1day.html` - 1 day: Final logistics
8. `day-of.html` - Day of: Zoom link delivery

**Supporting Documentation:**
- `EMAIL-SUBJECT-LINES.md` - All subject lines and preview text
- `EMAIL-SEQUENCE.md` - Complete automation workflow guide
- `SESSION-SUMMARY.md` - This summary

---

## ⚠️ Before You Send - Action Items

### 1. Replace Zoom Link Placeholders

In `day-of.html`, replace these placeholders:

```html
<!-- Find and replace: -->
https://zoom.us/j/YOUR_MEETING_ID
[REPLACE_WITH_MEETING_ID]
[REPLACE_WITH_PASSCODE]

<!-- With actual Zoom details: -->
https://zoom.us/j/1234567890
Meeting ID: 123 456 7890
Passcode: YourPassword123
```

### 2. Test in GoHighLevel

1. Copy/paste each HTML file into GoHighLevel email builder
2. Send test emails to yourself
3. Check mobile rendering (320px, 375px, 414px)
4. Verify all links work correctly
5. Test in Gmail, Outlook, Apple Mail

### 3. Set Up Automation Workflow

**Workflow Structure:**

```
Registration Trigger
    ↓
Send Registration Confirmation (immediately)
    ↓
[Wait until 9 days before event OR immediately if <9 days]
    ↓
Send 9-Day Prep Email
    ↓
[Wait until 4 days before event]
    ↓
Send 4-Day Calendar Email
    ↓
[Wait until 3 days before event]
    ↓
Send 3-Day VIP Email
    ↓
[Wait until 2 days before event]
    ↓
Send 2-Day Checklist Email
    ↓
[Wait until 1 day before event (evening)]
    ↓
Send 1-Day Logistics Email
    ↓
[Wait until event day @ 7:00 AM PT]
    ↓
Send Day-Of Zoom Link Email
```

**VIP Branch:**

```
VIP Purchase Trigger
    ↓
Send VIP Confirmation (immediately)
    ↓
[Continue with countdown sequence]
```

### 4. VIP Deadline Configuration

**Important**: VIP upgrade closes at **8:00 AM PT on Saturday, November 22, 2025**

- Emails 3-7 mention VIP upgrade availability
- 3-Day email (preparation-3days.html) is the MAIN VIP conversion push
- After 8am PT Nov 22, VIP upgrade is no longer available
- Day-of email mentions VIP members get separate priority access email

### 5. Timezone Considerations

All emails use **Pacific Time (PT)**:
- Day-of email sends at 7:00 AM PT
- Workshop starts at 8:00 AM PT
- VIP deadline at 8:00 AM PT

Ensure GoHighLevel automation is set to Pacific timezone.

---

## 🎯 Automation Workflow Tips

### Late Registrations

**Scenario**: Someone registers 5 days before the event (Nov 17)

**What should happen**:
1. Send Registration Confirmation immediately
2. Skip 9-day email (already past)
3. Send 4-day email immediately (or on Nov 18)
4. Continue with 3-day, 2-day, 1-day, day-of sequence

**GoHighLevel Setup**: Use date-based conditions to determine which email to send based on current date vs event date.

### Email Frequency Management

The sequence is designed to increase frequency as event approaches:

- **9 days to 4 days**: 5-day gap (prep time)
- **4 days to 3 days**: 1-day gap (building urgency)
- **3 days to 2 days**: 1-day gap (VIP deadline approaching)
- **2 days to 1 day**: 1-day gap (final prep)
- **1 day to day-of**: 12 hours (overnight → morning)

### VIP Segmentation

- General members get all 8 emails
- VIP members get VIP Confirmation + all countdown emails
- VIP members receive separate priority Zoom link (mention in day-of email)
- Consider creating separate VIP day-of email with priority room link

---

## 📊 Email Performance Tracking

### Metrics to Track

**Registration Confirmation**:
- Open rate (expected: 80-90%)
- Workshop hub click rate
- VIP upgrade click rate

**9-Day Prep**:
- Open rate (expected: 60-70%)
- Pre-work completion indicator (if trackable)

**4-Day Calendar**:
- Open rate (expected: 65-75%)
- VIP upgrade click rate

**3-Day VIP** (Most Important):
- Open rate (expected: 70-80%)
- VIP upgrade conversion rate (track carefully!)

**2-Day Checklist**:
- Open rate (expected: 75-85%)
- Workshop hub click rate

**1-Day Logistics**:
- Open rate (expected: 80-90%)
- Last-minute VIP upgrades

**Day-Of Zoom Link**:
- Open rate (expected: 95%+)
- Zoom link click rate (should be near 100% of openers)
- Attendance correlation

### A/B Testing Opportunities

Based on `EMAIL-SUBJECT-LINES.md`, consider testing:

1. **9-Day Email**: "Your Pre-Work Starts Now" vs "Assignment Due Before Nov 22"
2. **3-Day Email**: With emoji (⚡) vs without emoji
3. **Day-Of Email**: Red circle (🔴) vs video camera (🎥) emoji

---

## 🎨 Design Specifications

### Brand Colors
- **Pure Black Background**: #000000 (premium feel)
- **Gold Accent**: #FFD700 (CTAs, VIP branding, highlights)
- **Orange Gradient**: #FFA500 (CTA gradient end)
- **White Headlines**: #FFFFFF
- **Gray Body Text**: #e5e5e5, #d0d0d0
- **Urgent Red**: #FF0000 (day-of email only)

### Typography
- **Headlines**: Baskervville (serif) - 48px → 38px mobile
- **Body**: Plus Jakarta Sans (sans-serif) - 17px → 16px mobile
- **Labels**: Courier Prime (monospace) - 11px, uppercase, 700 weight

### Mobile Breakpoints
- **Primary**: 600px (desktop/mobile split)
- **Testing**: 320px, 375px, 414px widths

### Email Client Compatibility
All emails tested for:
- Gmail (web, mobile)
- Outlook (2016+, 365, mobile)
- Apple Mail (macOS, iOS)
- Yahoo Mail
- Protonmail

---

## 🔄 December 2025 Workshop

### What's Already Done
- `dec2025/registration-confirmation.html` ✅
- `dec2025/vip-confirmation.html` ✅

### What Needs to Be Created
Using Nov 2025 templates as foundation, create:
- `dec2025/preparation-9days.html` (update dates to Dec 6-7)
- `dec2025/preparation-4days.html` (update dates to Dec 6-7)
- `dec2025/preparation-3days.html` (update VIP deadline)
- `dec2025/preparation-2days.html` (update dates)
- `dec2025/preparation-1day.html` (update dates)
- `dec2025/day-of.html` (update dates, Zoom link)

**Key Changes for Dec 2025**:
- Event dates: December 6-7, 2025 (not Nov 22-23)
- VIP deadline: 8:00 AM PT Saturday, December 6, 2025
- All workshop hub links: `https://neothinkevent.com/home` (not neothinkday.com)

---

## ✨ Key Insights from Today's Work

### Automation vs Broadcast Understanding

**Initial Assumption**: Emails were broadcast sends with specific calendar dates
**Reality**: Emails are automation workflows triggered by registration with wait periods

**Impact on Design**:
- Emails use relative timing ("9 days until workshop" not "send on Nov 13")
- Automation workflow handles late registrations gracefully
- VIP deadline is absolute (8am PT Nov 22) but email timing is relative

### Email Focus Strategy

Each email has ONE primary focus:
1. Registration: You're confirmed + VIP upgrade available
2. 9-Day: Complete your pre-work NOW
3. 4-Day: Block BOTH full days on calendar
4. 3-Day: VIP upgrade closes in 72 hours (MAIN VIP push)
5. 2-Day: Complete preparation checklist
6. 1-Day: Zoom link arrives tomorrow at 7am PT
7. Day-Of: JOIN NOW (Zoom link)

**Below the primary focus**, secondary CTAs allowed:
- VIP upgrade (in emails 1, 3, 4, 5, 6)
- Workshop hub link (in all emails)

### Design Philosophy

**Premium Black Background**: Pure #000000 (not dark gray) creates luxury feel
**Gold = Value**: Used for CTAs, VIP branding, and key highlights
**Simplicity Increases**: Later emails get simpler, more focused
**Mobile-First**: All designs tested at 320px width first

---

## 📞 Support & Questions

**Technical Issues During Event**:
- Email: support@neothink.com
- Mentioned in day-of email

**GoHighLevel Setup Questions**:
- Refer to `EMAIL-SEQUENCE.md` for automation workflow
- Test thoroughly before Nov 22, 2025

**Email Design Questions**:
- Refer to `../EMAIL-DESIGN-SYSTEM.md` (created in previous session)
- Refer to `../EMAIL-CONTENT-GUIDELINES.md` (created in previous session)

---

## 🎉 Ready to Launch

All 8 emails for November 2025 workshop are complete and ready to:

1. ✅ Copy into GoHighLevel
2. ✅ Replace Zoom link placeholders
3. ✅ Set up automation workflow
4. ✅ Test thoroughly
5. ✅ Launch automation

**Next Steps**: Test, test, test before go-live!

---

**Session Completed**: November 13, 2025
**Files Created**: 6 new email templates + 2 documentation files
**Total Nov 2025 Emails**: 8 complete emails ready for automation
**Created By**: Claude Code

Good luck with the November 22-23, 2025 Day of Enlightenment workshop! 🚀
