# Neothink Society - Design System Documentation
**Version 2.0** • November 12, 2025

## Overview
Premium gold and black theme emphasizing wealth, exclusivity, and transformation through metallic gold gradients, modern sans-serif typography, and dark mode aesthetics.

**Latest Update (v2.0):** Applied 10/10 A+ technical design excellence across all 14 workshop pages with optical typography system, custom easing curves, layered shadows, and sophisticated micro-interactions.

---

## ✨ Technical Excellence Standards (v2.0)

### Optical Typography System
**Golden ratio line-heights + optical tracking adjustments**

```css
/* Typography - Optical tracking */
--tracking-tighter: -0.04em;  /* Large titles */
--tracking-tight: -0.02em;     /* Headings */
--tracking-normal: 0em;        /* Body text */
--tracking-wide: 0.05em;       /* Buttons, labels */
--tracking-wider: 0.1em;       /* Small caps */
--tracking-widest: 0.15em;     /* Eyebrows, badges */

/* Typography - Golden ratio line heights */
--leading-none: 1;             /* Tight titles */
--leading-tight: 1.2;          /* H1, H2 */
--leading-snug: 1.375;         /* H3-H6 */
--leading-normal: 1.618;       /* Body (golden ratio) */
--leading-relaxed: 1.8;        /* Long-form */
--leading-loose: 2;            /* Spacious */
```

### Custom Easing Curves
**Physics-based animation timing for natural motion**

```css
/* Animation - Custom easing curves */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);      /* Smooth deceleration */
--ease-out-back: cubic-bezier(0.34, 1.56, 0.64, 1);  /* Subtle bounce */
--ease-in-out-circ: cubic-bezier(0.85, 0, 0.15, 1);  /* Circular motion */
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Playful bounce */
```

### Animation Timing System
**Consistent duration scale across all interactions**

```css
--duration-instant: 100ms;  /* Immediate feedback */
--duration-fast: 200ms;     /* Quick transitions */
--duration-base: 300ms;     /* Standard interactions */
--duration-slow: 500ms;     /* Deliberate animations */
--duration-slower: 700ms;   /* Entrance animations */

/* Stagger delays for sequential reveals */
--delay-0: 0ms;
--delay-1: 50ms;
--delay-2: 100ms;
--delay-3: 150ms;
--delay-4: 200ms;
```

### Layered Shadow System
**Depth hierarchy with gold glow variants**

```css
/* Standard shadows */
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.25);

/* Gold glow variants */
--shadow-gold-sm: 0 0 20px rgba(255, 215, 0, 0.2);
--shadow-gold-md: 0 0 30px rgba(255, 215, 0, 0.25), 0 0 60px rgba(255, 215, 0, 0.1);
--shadow-gold-lg: 0 0 40px rgba(255, 215, 0, 0.3), 0 0 80px rgba(255, 215, 0, 0.15);
```

### Blur Effects
**Backdrop blur for depth and hierarchy**

```css
--blur-sm: 4px;   /* Subtle frosted glass */
--blur-md: 8px;   /* Medium glass effect */
--blur-lg: 12px;  /* Strong blur */
--blur-xl: 16px;  /* Maximum blur */
```

### Micro-interactions Pattern
**Sophisticated hover states with rotation + scale**

```css
/* Icon wrapper example */
.icon-wrapper:hover {
    transform: scale(1.05) rotate(5deg);
    box-shadow: var(--shadow-gold-sm);
    transition:
        transform var(--duration-base) var(--ease-out-back),
        box-shadow var(--duration-base) var(--ease-out);
}

/* Nested icon counter-rotation */
.icon {
    transform: scale(1.15) rotate(-5deg);
}
```

### 8px Base Grid System
**Consistent spacing rhythm**

```css
--space-xs: 0.5rem;   /* 8px */
--space-sm: 1rem;     /* 16px */
--space-md: 1.5rem;   /* 24px */
--space-lg: 2rem;     /* 32px */
--space-xl: 3rem;     /* 48px */
--space-2xl: 4rem;    /* 64px */
--space-3xl: 6rem;    /* 96px */
```

### Performance Optimization
**will-change hints + separate transitions**

```css
.interactive-element {
    will-change: transform;  /* GPU acceleration hint */
    transition:
        transform var(--duration-base) var(--ease-out-expo),
        border-color var(--duration-base) var(--ease-out),
        background var(--duration-base) var(--ease-out),
        box-shadow var(--duration-base) var(--ease-out);
}
```

---

## Current State Analysis

### Font Usage Across 13 Pages
- **12 pages** currently use: `Crimson Text` (serif) + `Inter` (sans-serif)
- **1 page** currently uses: `Baskervville` (serif) + `Plus Jakarta Sans` (sans-serif) + `Courier Prime` (monospace) ✓

### Pages Requiring Font Updates
1. day-of-enlightenment.html - Crimson Text + Inter → **NEEDS UPDATE**
2. day-of-enlightenment-pre-event.html - Crimson Text + Inter → **NEEDS UPDATE**
3. vip-upgrade.html - Crimson Text + Inter → **NEEDS UPDATE**
4. vip-confirmation.html - Crimson Text + Inter → **NEEDS UPDATE**
5. wealth-engine-bonus-session.html - Crimson Text + Inter → **NEEDS UPDATE**
6. workshop-complete-hub.html - Crimson Text + Inter → **NEEDS UPDATE**
7. wealth-engine-calculator.html - Crimson Text + Inter → **NEEDS UPDATE**
8. day-of-enlightenment-recordings.html - Crimson Text + Inter → **NEEDS UPDATE**
9. vip-session-recording.html - Crimson Text + Inter → **NEEDS UPDATE**
10. golden-life-sheet.html - Crimson Text + Inter → **NEEDS UPDATE**
11. stargazer-level-3.html - Crimson Text + Inter → **NEEDS UPDATE**
12. stargazer-level-3-consultation.html - Crimson Text + Inter → **NEEDS UPDATE**
13. level-three-welcome-party.html - Baskervville + Plus Jakarta Sans + Courier Prime ✓ **CORRECT**

---

## Typography System (STANDARDIZED)

### Font Stack
```css
:root {
    --font-serif: 'Baskervville', Georgia, serif;
    --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-mono: 'Courier Prime', 'Courier New', monospace;
}
```

### Font Import
```css
@import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Courier+Prime:wght@400;700&display=swap');
```

### Usage Guidelines
- **Baskervville (Serif)**: Headlines (h1-h3), hero titles, quotes, emphasis sections
- **Plus Jakarta Sans (Sans-serif)**: Body text, UI elements, buttons, cards, navigation
- **Courier Prime (Monospace)**: Classification headers, timestamps, technical data, footer text

### Fluid Typography Scale
```css
:root {
    --text-xs: clamp(0.75rem, 0.7rem + 0.2vw, 0.875rem);
    --text-sm: clamp(0.875rem, 0.825rem + 0.25vw, 1rem);
    --text-base: clamp(1rem, 0.96rem + 0.2vw, 1.125rem);
    --text-lg: clamp(1.125rem, 1.075rem + 0.25vw, 1.3rem);
    --text-xl: clamp(1.25rem, 1.175rem + 0.375vw, 1.5rem);
    --text-2xl: clamp(1.5rem, 1.35rem + 0.75vw, 2rem);
    --text-3xl: clamp(1.875rem, 1.65rem + 1.125vw, 2.5rem);
    --text-4xl: clamp(2.25rem, 1.95rem + 1.5vw, 3rem);
    --text-5xl: clamp(2.75rem, 2.25rem + 2.5vw, 4rem);
}
```

---

## Color System (STANDARDIZED)

### Core Palette
```css
:root {
    /* Gold - Premium accent color */
    --gold: #FFD700;
    --gold-light: #FFED4E;
    --gold-dark: #D4AF37;  /* Standardized from #FFC700 variant */
    --gold-glow: rgba(255, 215, 0, 0.4);

    /* Grayscale - Dark mode foundation */
    --black: #000000;
    --gray-950: #0a0a0a;
    --gray-900: #0f0f0f;
    --gray-850: #141414;
    --gray-800: #1a1a1a;
    --gray-700: #2a2a2a;
    --gray-600: #525252;
    --gray-500: #737373;
    --gray-400: #a3a3a3;
    --gray-300: #d4d4d4;
    --gray-200: #e5e5e5;
    --white: #ffffff;
}
```

### Color Usage Guidelines

#### Gold (#FFD700)
- **Primary use**: CTAs, buttons, badges, borders, highlights
- **Effects**: Gradients, glows, metallic shimmer
- **Psychological**: Wealth, exclusivity, premium quality, achievement

#### Gold Light (#FFED4E)
- **Primary use**: Hover states, gradient tops, highlights, accent text
- **Effects**: Brightness boost, attention-grabbing elements

#### Gold Dark (#D4AF37)
- **Primary use**: Gradient bottoms, shadows, subtle borders, muted accents
- **Effects**: Depth, sophistication, grounding element

#### Black (#000000)
- **Primary use**: Main background, button text on gold backgrounds
- **Effects**: Maximum contrast, premium feel, focus on content

#### Gray Scale
- **Gray 950-900**: Section backgrounds, cards (subtle variation from black)
- **Gray 850-800**: Elevated surfaces, secondary cards
- **Gray 700-600**: Borders, dividers, inactive elements
- **Gray 500-400**: Secondary text, meta information
- **Gray 300**: Body text (primary reading color)
- **Gray 200**: Headings on dark backgrounds
- **White**: Maximum emphasis text, pure contrast elements

### Gradient Patterns
```css
/* Gold gradient - Primary */
background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);

/* Gold gradient - Bright variation */
background: linear-gradient(180deg, var(--gold-light) 0%, var(--gold) 100%);

/* Dark gradient - Subtle depth */
background: linear-gradient(135deg, var(--gray-900) 0%, var(--gray-950) 100%);

/* Gold glow effect */
box-shadow: 0 8px 32px var(--gold-glow);
```

---

## Spacing System (STANDARDIZED)

```css
:root {
    /* Base spacing scale */
    --space-xs: clamp(0.5rem, 0.475rem + 0.125vw, 0.625rem);
    --space-sm: clamp(0.75rem, 0.7rem + 0.25vw, 1rem);
    --space-md: clamp(1rem, 0.9rem + 0.5vw, 1.5rem);
    --space-lg: clamp(1.5rem, 1.3rem + 1vw, 2rem);
    --space-xl: clamp(2rem, 1.7rem + 1.5vw, 3rem);
    --space-2xl: clamp(3rem, 2.5rem + 2.5vw, 4.5rem);
    --space-3xl: clamp(4rem, 3.25rem + 3.75vw, 6rem);

    /* Component-specific padding */
    --card-padding-sm: clamp(1rem, 0.85rem + 0.75vw, 1.5rem);
    --card-padding-md: clamp(1.5rem, 1.25rem + 1.25vw, 2.25rem);
    --card-padding-lg: clamp(2rem, 1.65rem + 1.75vw, 3rem);

    /* Section spacing */
    --section-spacing: clamp(3rem, 2rem + 5vw, 5rem);

    /* Container padding */
    --container-padding: clamp(1.25rem, 5vw, 2.5rem);
}
```

---

## Border Radius System

```css
:root {
    --radius-xs: 4px;
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 20px;
    --radius-2xl: 24px;
    --radius-full: 9999px;
}
```

---

## Shadow System

```css
:root {
    /* Standard shadows */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.5);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.4);
    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.5);

    /* Gold shadows - Premium effect */
    --shadow-gold: 0 8px 32px rgba(255, 215, 0, 0.2);
    --shadow-gold-lg: 0 16px 48px rgba(255, 215, 0, 0.25);
}
```

---

## Component Library

### 1. Buttons

#### Primary Button (Gold CTA)
```css
.btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
    padding: clamp(1rem, 2vw, 1.25rem) clamp(2rem, 4vw, 3rem);
    background: linear-gradient(135deg, var(--gold), var(--gold-dark));
    color: var(--black);
    font-family: var(--font-sans);
    font-size: var(--text-lg);
    font-weight: 700;
    text-decoration: none;
    border-radius: var(--radius-full);
    border: none;
    box-shadow: 0 8px 24px rgba(255, 215, 0, 0.3);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(255, 215, 0, 0.4);
    background: linear-gradient(135deg, var(--gold-light), var(--gold));
}
```

#### Secondary Button (Outlined)
```css
.btn-secondary {
    background: transparent;
    color: var(--gold);
    border: 2px solid var(--gold);
}

.btn-secondary:hover {
    background: var(--gold);
    color: var(--black);
}
```

### 2. Badges

```css
.badge {
    display: inline-block;
    padding: clamp(0.75rem, 2vw, 1rem) clamp(1.75rem, 4vw, 2.5rem);
    background: linear-gradient(135deg, var(--gold), var(--gold-dark));
    color: var(--black);
    font-family: var(--font-sans);
    font-size: clamp(0.875rem, 2.5vw, 1.125rem);
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    border-radius: var(--radius-full);
    box-shadow: 0 8px 32px rgba(255, 215, 0, 0.4);
}
```

### 3. Classification Header (Courier Prime)

```css
.classification {
    font-family: var(--font-mono);
    text-align: center;
    font-size: clamp(0.75rem, 2vw, 0.875rem);
    font-weight: 700;
    color: var(--gold);
    text-transform: uppercase;
    letter-spacing: clamp(0.15em, 0.5vw, 0.25em);
    line-height: 1.5;
}
```

### 4. Cards

```css
.content-card {
    background: linear-gradient(135deg, rgba(26, 26, 26, 0.7), rgba(15, 15, 15, 0.9));
    border: 1px solid rgba(255, 215, 0, 0.2);
    border-radius: var(--radius-xl);
    padding: var(--card-padding-lg);
    box-shadow: var(--shadow-lg);
    backdrop-filter: blur(10px);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.content-card:hover {
    border-color: rgba(255, 215, 0, 0.35);
    transform: translateY(-2px);
    box-shadow: var(--shadow-xl), 0 0 40px rgba(255, 215, 0, 0.1);
}
```

### 5. Hero Section

```css
.hero-section {
    text-align: center;
    padding: clamp(3rem, 8vw, 5rem) 0 clamp(2rem, 5vw, 3rem);
    background: linear-gradient(180deg, var(--gray-900) 0%, var(--black) 100%);
    position: relative;
}

.hero-title {
    font-family: var(--font-serif);
    font-size: clamp(2.5rem, 7vw, 5rem);
    font-weight: 400;
    line-height: 1.2;
    background: linear-gradient(180deg, var(--gold-light) 0%, var(--gold) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}
```

---

## Animation & Transitions

```css
:root {
    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Ambient background animation */
@keyframes ambient-shift {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(2%, 2%); }
}

/* Scroll reveal */
.scroll-reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
                transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-reveal.revealed {
    opacity: 1;
    transform: translateY(0);
}
```

---

## Accessibility Standards

### Focus States
```css
*:focus-visible {
    outline: 3px solid var(--gold);
    outline-offset: 3px;
}

a:focus-visible {
    outline: 3px solid var(--gold);
    outline-offset: 4px;
    border-radius: 4px;
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

### Minimum Touch Targets
```css
:root {
    --min-touch-target: 48px;
}
```

---

## GoHighLevel Adaptations

### Structure Changes Required
1. **Remove**: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>` tags
2. **Extract**: All `<style>` content to separate CSS file
3. **Keep**: Main content structure (sections, divs, etc.)
4. **Add**: GHL form integration points
5. **Add**: Conditional logic placeholders

### Form Integration Pattern
```html
<!-- GoHighLevel Form Injection Point -->
<div class="ghl-form-container" data-form-id="[FORM_ID]">
    <!-- GHL will inject form here -->
</div>
```

### Conditional Logic Pattern
```html
<!-- Pre-event vs Live version toggle -->
<div class="conditional-content" data-show-before="2025-10-18T00:00:00Z">
    <!-- Pre-event content -->
</div>
<div class="conditional-content" data-show-after="2025-10-18T00:00:00Z">
    <!-- Live/post-event content -->
</div>
```

---

## Navigation Structure

### Page Hierarchy
```
├── Day of Enlightenment (Level 2)
│   ├── Pre-Event Page
│   ├── Live Event Page
│   ├── VIP Upgrade Page
│   ├── VIP Confirmation Page
│   ├── Bonus Session Page
│   ├── Workshop Complete Hub
│   ├── Recordings Page
│   └── VIP Session Recording
│
├── Tools & Resources
│   ├── Wealth Engine Calculator
│   └── Golden Life Sheet
│
└── Stargazer (Level 3)
    ├── Sales Page
    ├── Consultation Booking Page
    └── Welcome Party (Members Only)
```

---

## Implementation Priority

### Phase 1: Font Standardization ⚡ HIGH PRIORITY
- Update all 12 pages to use: Baskervville + Plus Jakarta Sans + Courier Prime
- Ensure consistent font weights and styles
- Test readability across devices

### Phase 2: Color Standardization
- Standardize gold-dark to #D4AF37 across all pages
- Ensure consistent gold glow opacity (0.4)
- Validate color contrast ratios (WCAG AA minimum)

### Phase 3: Component Unification
- Standardize all button styles
- Unify card designs
- Consistent hero section layouts
- Standardize badges and labels

### Phase 4: GoHighLevel Preparation
- Extract inline styles to separate CSS
- Remove HTML structure tags
- Add form injection points
- Add conditional logic placeholders

### Phase 5: Navigation & Linking
- Add inter-page navigation
- Create breadcrumb system
- Add "Next Step" CTAs
- Link related resources

---

## File Naming Convention

### Current Files
1. `day-of-enlightenment.html` (live version)
2. `day-of-enlightenment-pre-event.html`
3. `vip-upgrade.html`
4. `vip-confirmation.html`
5. `wealth-engine-bonus-session.html`
6. `workshop-complete-hub.html`
7. `wealth-engine-calculator.html`
8. `day-of-enlightenment-recordings.html`
9. `vip-session-recording.html`
10. `golden-life-sheet.html`
11. `stargazer-level-3.html`
12. `stargazer-level-3-consultation.html`
13. `level-three-welcome-party.html`

### GHL-Ready Versions (Future)
- Add `-ghl` suffix for GoHighLevel-ready versions
- Example: `day-of-enlightenment-ghl.html`

---

## Quality Checklist

Before marking any page as "complete", verify:

- ✅ Uses Baskervville (serif) for headlines
- ✅ Uses Plus Jakarta Sans (sans-serif) for body text
- ✅ Uses Courier Prime (monospace) for classification/technical text
- ✅ Gold color is consistently #FFD700
- ✅ Gold-dark is #D4AF37
- ✅ All spacing uses CSS custom properties
- ✅ All shadows use defined shadow system
- ✅ Hover states are smooth and consistent
- ✅ Focus states meet accessibility standards
- ✅ Responsive on mobile (320px+), tablet (768px+), desktop (1024px+)
- ✅ Dark mode optimized (black backgrounds, proper contrast)
- ✅ Animations respect prefers-reduced-motion
- ✅ Touch targets meet 48px minimum
- ✅ Premium gold/black aesthetic maintained throughout

---

**Last Updated**: November 11, 2025
**Status**: Living document - update as standards evolve
