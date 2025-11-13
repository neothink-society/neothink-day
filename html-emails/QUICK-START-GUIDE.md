# Email Creation Quick Start Guide
**Neothink Society | November 2025**

## Start Here

Creating a new email? Follow this checklist in order:

1. **Identify your audience** → Level 2 / VIP / Level 3
2. **Choose your template** → Start with `level3-welcome-recording.html`
3. **Reference design system** → `EMAIL-DESIGN-SYSTEM.md`
4. **Reference content guidelines** → `EMAIL-CONTENT-GUIDELINES.md`
5. **Build your email** → Follow the workflow below
6. **Test before sending** → Use the quality checklist

---

## 3-Minute Email Anatomy

### Required Elements (Every Email)

```
1. DOCTYPE + Meta Tags
2. Google Fonts Import (Baskervville, Plus Jakarta Sans, Courier Prime)
3. CSS Reset + Mobile Responsive Classes
4. Classification Header (audience segment)
5. Hero Section (badge if applicable + headline + subhead)
6. Body Content (1-3 sections max)
7. Primary CTA (gold button, impossible to miss)
8. Footer (The Neothink Society + segment + unsubscribe)
```

---

## Audience Quick Reference

| Segment | Badge | Color | Tone | Goal |
|---------|-------|-------|------|------|
| **Level 2** | None | White borders | Educational | Transform, prepare, invite to L3 |
| **VIP** | ⭐ VIP Elite | Gold throughout | Exclusive | Deliver value, priority access |
| **Level 3** | Stargazers | Gold + pure black | Elite builders | Welcome family, deliver foundation |

---

## Font Usage Cheat Sheet

### Baskervville (Serif) - Display
- Main headlines (48px → 38px mobile)
- Section headlines (28px → 24px mobile)
- Quotes (26px → 20px mobile, italic)

### Plus Jakarta Sans (Sans-Serif) - UI & Body
- Body text (17px → 16px mobile)
- Subheadings (22px → 20px mobile)
- Buttons (16px, 800 weight, uppercase)
- Lists (15px, 600 weight)
- Footer (12px, 400 weight)

### Courier Prime (Monospace) - Labels
- Classification headers (11px, 700 weight, uppercase, 2px spacing)
- Timestamps/urgency labels (11px, 700 weight, uppercase)

---

## Color Quick Reference

```css
/* Backgrounds */
background-color: #000000;  /* Pure black - always */

/* Text Colors */
#ffffff  /* Headlines, emphasis */
#e5e5e5  /* Primary body text */
#d0d0d0  /* Secondary text */
#FFD700  /* Gold - accents, CTAs, VIP */

/* Urgency Colors */
#FF0000  /* Red - LIVE NOW (general) */
#FFD700  /* Gold - LIVE NOW (VIP) - maintains brand */

/* Borders */
border: 2px solid #FFD700;  /* Gold - premium, VIP */
border: 2px solid #FFFFFF;  /* White - decision points, Level 2 */
```

---

## CTA Button Templates

### Standard Gold (Primary)
```html
<td align="center" style="background: linear-gradient(135deg, #FFD700, #FFC700); border-radius: 8px; box-shadow: 0 0 40px rgba(255, 215, 0, 0.5);">
    <a href="[URL]" class="mobile-button" style="display: inline-block; padding: 20px 50px; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; color: #000000; text-decoration: none; text-transform: uppercase; letter-spacing: 1px; line-height: 22px;">
        [CTA TEXT]
    </a>
</td>
```

### LIVE NOW Red (Maximum Urgency)
```html
<td align="center" style="background: linear-gradient(135deg, #FF0000 0%, #CC0000 100%); border-radius: 10px; box-shadow: 0 0 60px rgba(255, 0, 0, 1), 0 20px 60px rgba(0, 0, 0, 0.9);">
    <a href="[URL]" class="mobile-button" style="display: inline-block; padding: 32px 70px; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 24px; font-weight: 900; color: #ffffff; text-decoration: none; text-transform: uppercase; letter-spacing: 2px; line-height: 32px;">
        🎥 JOIN NOW
    </a>
</td>
```

### VIP LIVE NOW Gold (VIP Urgency)
```html
<td align="center" style="background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%); border-radius: 10px; box-shadow: 0 0 60px rgba(255, 215, 0, 1), 0 20px 60px rgba(0, 0, 0, 0.9);">
    <a href="[URL]" class="mobile-button" style="display: inline-block; padding: 32px 70px; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 24px; font-weight: 900; color: #000000; text-decoration: none; text-transform: uppercase; letter-spacing: 2px; line-height: 32px;">
        🎥 JOIN VIP NOW
    </a>
</td>
```

---

## Subject Line Formulas

### Choose Based on Email Type:

**Announcement**
```
✓ You're In: [Event Name]
Your Seat is Reserved: [Date]
```

**Countdown**
```
[X] Days Until [Event]
48 Hours: Everything You Need
```

**LIVE/Urgent**
```
🔴 LIVE NOW: Join Immediately
We're Live - Join Now
```

**VIP**
```
⭐ VIP: Your Exclusive Session
Your VIP Experience Continues
```

**Level 3**
```
Welcome to Level Three
Stargazers: Your Foundation
```

**Post-Event**
```
What You Accomplished This Weekend
Your [Event] Resources Are Ready
```

**Deadline**
```
Last Chance: Closes Friday at Midnight
24 Hours Left to Join
```

---

## Classification Header Variations

```html
<!-- Level 2 Members -->
<p style="...">Level Two Members • Day of Enlightenment</p>

<!-- VIP Members -->
<p style="...">⭐ VIP Members • Priority Access</p>

<!-- Level 3 Stargazers -->
<p style="...">Level Three Members • Exclusive Access</p>
<p style="...">Stargazers • Elite Access</p>
```

---

## Badge Component Variations

### Stargazers (Level 3)
```html
<td style="background: linear-gradient(135deg, #FFD700, #FFC700); border-radius: 100px; padding: 12px 32px; box-shadow: 0 8px 32px rgba(255, 215, 0, 0.4);">
    <p style="margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 12px; color: #000000; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; line-height: 16px;">
        Stargazers
    </p>
</td>
```

### VIP Elite (Outlined)
```html
<td style="border: 2px solid #FFD700; border-radius: 100px; padding: 10px 28px; background-color: transparent;">
    <p style="margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 12px; color: #FFD700; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; line-height: 16px;">
        ⭐ VIP Elite Member
    </p>
</td>
```

---

## Common Messaging by Use Case

### Workshop Announcement (Level 2)
**Headline**: "Your Transformation Begins October 18th"
**Body**: Discovery, preparation, what to expect
**CTA**: "View Complete Workshop Details"
**Tone**: Educational, exciting, welcoming

### VIP Session Announcement (VIP)
**Headline**: "Your VIP Experience Continues"
**Body**: Exclusive benefits, priority access, advanced content
**CTA**: "Join VIP Session"
**Tone**: Recognition, premium, deserved

### Level 3 Welcome (Stargazers)
**Headline**: "Welcome to Level Three"
**Body**: Elite positioning, builders, family, foundation
**CTA**: "Watch Now" / "Access Foundation"
**Tone**: Elite, belonging, transformation

### Day-Of Access (All)
**Headline**: "TODAY • DOORS OPEN IN 90 MINUTES"
**Body**: Minimal - just access info
**CTA**: "🎥 GET ZOOM LINK"
**Tone**: Urgent, direct, frictionless

### LIVE NOW (All/VIP)
**Headline**: "WE'RE LIVE"
**Body**: One sentence maximum
**CTA**: "🎥 JOIN NOW" (red for all, gold for VIP)
**Tone**: Maximum urgency, zero distractions

### Post-Event Follow-Up (Level 2)
**Headline**: "What You Accomplished This Weekend"
**Body**: Validate transformation, provide resources, next steps
**CTA**: "Access Resources" / "Unlock Level Three"
**Tone**: Congratulatory, momentum, opportunity

---

## Testing Checklist (Before Sending)

### Quick Test (5 minutes)

- [ ] Correct audience selected in email platform
- [ ] Subject line < 50 characters
- [ ] Preheader text set (40-100 characters)
- [ ] All links working (click every one)
- [ ] Dates/times/timezones correct
- [ ] No typos in critical info
- [ ] Preview on mobile device
- [ ] Send test to yourself

### Full Test (15 minutes)

**Typography**:
- [ ] Baskervville for headlines ✓
- [ ] Plus Jakarta Sans for body ✓
- [ ] Courier Prime for labels ✓

**Colors**:
- [ ] Pure black background (#000000) ✓
- [ ] Gold accents appropriate to segment ✓
- [ ] Text colors from approved palette ✓

**Mobile**:
- [ ] Test at 320px, 375px, 414px widths ✓
- [ ] All mobile classes applied ✓
- [ ] Buttons touch-friendly (44px+ height) ✓
- [ ] Line breaks work (.mobile-hide used) ✓

**Branding**:
- [ ] "The Neothink Society" (not "The Society") ✓
- [ ] support@neothink.com ✓
- [ ] Correct segment badge/header ✓
- [ ] Unsubscribe link: {{unsubscribe}} ✓

**Email Clients** (if time permits):
- [ ] Gmail (web + app)
- [ ] Outlook (desktop)
- [ ] Apple Mail (iOS + macOS)
- [ ] Yahoo Mail

---

## Common Mistakes to Avoid

❌ **Using old fonts** (Crimson Text, Inter)
✅ Use Baskervville, Plus Jakarta Sans, Courier Prime

❌ **Dark gray background** (#1a1a1a)
✅ Use pure black (#000000)

❌ **"The Society"**
✅ Use "The Neothink Society"

❌ **Multiple CTAs competing**
✅ One primary CTA, maximum focus

❌ **Generic CTA text** ("Click Here")
✅ Specific action ("Watch Now", "Join Workshop")

❌ **Wrong color for audience** (red for VIP urgency)
✅ Gold for VIP even at max urgency

❌ **Forgetting mobile classes**
✅ Every text element needs mobile- class

❌ **No unsubscribe link**
✅ Always include {{unsubscribe}}

❌ **support@contact.neothink.com**
✅ support@neothink.com

❌ **Vague subject lines** ("Important Update")
✅ Specific ("48 Hours: Everything You Need")

---

## File Organization

```
html-emails/
├── EMAIL-DESIGN-SYSTEM.md          ← Comprehensive design reference
├── EMAIL-CONTENT-GUIDELINES.md     ← Comprehensive content reference
├── QUICK-START-GUIDE.md            ← This file (quick reference)
├── README.md                        ← Overview of email system
│
├── original-emails/                 ← 24 original templates (reference)
│   ├── README.md                    ← Complete documentation of originals
│   ├── level3-welcome-recording.html ← ⭐ REFERENCE TEMPLATE
│   └── [23 other original templates]
│
├── templates/                       ← New email templates go here
│   ├── level2/                      ← Level 2 member templates
│   ├── vip/                         ← VIP member templates
│   └── level3/                      ← Level 3 Stargazer templates
│
└── components/                      ← Reusable email components
    ├── headers.html                 ← Classification headers
    ├── badges.html                  ← Badge components
    ├── buttons.html                 ← CTA button variations
    └── footers.html                 ← Footer variations
```

---

## Next Steps

### Creating Your First Email

1. **Copy reference template**:
   ```bash
   cp original-emails/level3-welcome-recording.html templates/level2/my-new-email.html
   ```

2. **Update core elements**:
   - Classification header (audience)
   - Badge (if applicable)
   - Headline + subhead
   - Body content (1-3 sections)
   - Primary CTA
   - Footer segment name

3. **Test mobile**:
   - View at 320px width
   - Check all mobile- classes applied
   - Verify buttons are touch-friendly

4. **Test links**:
   - Click every link
   - Verify they go to correct pages
   - Test on different devices

5. **Final checklist**:
   - Run through full testing checklist above
   - Send test to yourself
   - Review on phone
   - Send to audience

---

## Support

**Questions?** Reference these documents in order:
1. This Quick Start Guide (quick answers)
2. EMAIL-DESIGN-SYSTEM.md (design specifics)
3. EMAIL-CONTENT-GUIDELINES.md (content/messaging)
4. original-emails/README.md (examples and patterns)

**Need a component?** Check `level3-welcome-recording.html` first - it has the best examples of every component type.

**Stuck?** Start with the reference template and adapt - don't build from scratch.

---

## Version History

- **v1.0** (November 2025) - Initial quick start guide for email creation workflow
