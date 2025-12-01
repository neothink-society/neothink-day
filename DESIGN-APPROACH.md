# Neothink Society - Implementation Guide
**Premium Gold & Dark Theme Implementation Standards**
**Version 2.1** • November 27, 2025

> **Implementation-focused guide** for interactions, forms, performance, and event states. For design tokens (colors, typography, spacing), see **DESIGN-SYSTEM.md**.

### Related Documentation
| Document | Purpose |
|----------|---------|
| **DESIGN-SYSTEM.md** | Canonical design tokens (use this for colors, typography, spacing) |
| **DESIGN-APPROACH.md** (this file) | Implementation patterns, interactions, performance |
| **BRAND-GUIDELINES.md** | Brand identity, voice, customer journey |
| **html-emails/EMAIL-DESIGN-SYSTEM.md** | Email-specific standards |

---

## Typography System

### Font Stack (Standardized)
```css
:root {
    --font-serif: 'Baskervville', Georgia, serif;
    --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-mono: 'Courier Prime', 'Courier New', monospace;
}
```

### Usage Hierarchy

**Baskervville (Serif)** - Headlines & Emphasis
- Page titles (h1)
- Section headings (h2, h3)
- Quotes & testimonials
- Hero subtitles (when italic/refined feel needed)
- Footer taglines

**Plus Jakarta Sans (Sans-serif)** - Body & UI
- Body text & paragraphs
- Buttons & CTAs
- Form labels & inputs
- Navigation
- Cards & content blocks
- Meta information

**Courier Prime (Monospace)** - Technical & Classification
- Header classification text ("Level Three Members • Exclusive Access")
- Timestamps
- Codes & technical data
- Footer copyright
- Status indicators

### Type Scale (Fluid & Responsive)
```css
:root {
    /* Base scale */
    --text-xs: clamp(0.75rem, 0.7rem + 0.2vw, 0.875rem);      /* 12-14px */
    --text-sm: clamp(0.875rem, 0.825rem + 0.25vw, 1rem);      /* 14-16px */
    --text-base: clamp(1rem, 0.96rem + 0.2vw, 1.125rem);      /* 16-18px */
    --text-lg: clamp(1.125rem, 1.075rem + 0.25vw, 1.3rem);    /* 18-21px */
    --text-xl: clamp(1.25rem, 1.175rem + 0.375vw, 1.5rem);    /* 20-24px */
    --text-2xl: clamp(1.5rem, 1.35rem + 0.75vw, 2rem);        /* 24-32px */
    --text-3xl: clamp(1.875rem, 1.65rem + 1.125vw, 2.5rem);   /* 30-40px */
    --text-4xl: clamp(2.25rem, 1.95rem + 1.5vw, 3rem);        /* 36-48px */
    --text-5xl: clamp(2.75rem, 2.25rem + 2.5vw, 4rem);        /* 44-64px */
}
```

### Typography Patterns

**Heading Hierarchy**
```css
h1 {
    font-family: var(--font-serif);
    font-size: var(--text-5xl);
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: -0.025em;
    color: var(--gold);
}

h2 {
    font-family: var(--font-serif);
    font-size: var(--text-4xl);
    font-weight: 600;
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: var(--gold);
}

h3 {
    font-family: var(--font-serif);
    font-size: var(--text-3xl);
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.015em;
    color: var(--gold);
}

h4 {
    font-family: var(--font-sans);
    font-size: var(--text-2xl);
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.01em;
    color: var(--white);
}
```

**Body Text**
```css
p {
    font-family: var(--font-sans);
    font-size: var(--text-base);
    font-weight: 400;
    line-height: 1.7;
    color: var(--gray-300);
}

/* Lead paragraph */
.lead {
    font-size: var(--text-lg);
    line-height: 1.6;
    color: var(--gray-200);
}

/* Small text */
.small {
    font-size: var(--text-sm);
    line-height: 1.6;
    color: var(--gray-400);
}

/* Muted text */
.muted {
    color: var(--gray-500);
}
```

**Inline Elements**
```css
strong {
    font-weight: 700;
    color: var(--white);
}

em {
    font-style: italic;
}

code {
    font-family: var(--font-mono);
    font-size: 0.9em;
    padding: 0.2em 0.4em;
    background: var(--gray-800);
    border: 1px solid var(--gray-700);
    border-radius: 4px;
    color: var(--gold-light);
}

a {
    color: var(--gold);
    text-decoration: none;
    transition: color 200ms ease;
}

a:hover {
    color: var(--gold-light);
    text-decoration: underline;
}
```

**Blockquote**
```css
blockquote {
    font-family: var(--font-serif);
    font-size: var(--text-2xl);
    font-style: italic;
    line-height: 1.5;
    color: var(--gold);
    padding: var(--space-xl);
    border-left: 4px solid var(--gold);
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.05), transparent);
    margin: var(--space-2xl) 0;
}
```

---

## Color System (Premium Gold & Dark)

### Core Palette
```css
:root {
    /* Gold - Premium accent */
    --gold: #FFD700;          /* Primary gold */
    --gold-light: #FFED4E;    /* Highlights, hover states */
    --gold-dark: #D4AF37;     /* Depth, shadows, muted accents */
    --gold-glow: rgba(255, 215, 0, 0.4);  /* Glow effects */

    /* Grayscale - Dark foundation */
    --black: #000000;         /* Pure black backgrounds */
    --gray-950: #0a0a0a;      /* Near-black sections */
    --gray-900: #0f0f0f;      /* Elevated surfaces */
    --gray-850: #141414;      /* Cards */
    --gray-800: #1a1a1a;      /* Secondary cards */
    --gray-700: #2a2a2a;      /* Borders, dividers */
    --gray-600: #525252;      /* Inactive elements */
    --gray-500: #737373;      /* Secondary text */
    --gray-400: #a3a3a3;      /* Meta information */
    --gray-300: #d4d4d4;      /* Body text (primary reading) */
    --gray-200: #e5e5e5;      /* Headings on dark */
    --white: #ffffff;         /* Maximum contrast */
}
```

### Color Usage & Contrast

**Text Contrast Requirements**
- Body text (gray-300 on black): **WCAG AA+**
- Headings (gold/white on black): **WCAG AAA**
- Interactive elements: **Minimum APCA 60**
- Hover states: **Increase contrast by 15-20%**

**State-based Colors**
```css
/* Rest state */
.interactive {
    color: var(--gold);
    border-color: rgba(255, 215, 0, 0.3);
}

/* Hover state - increased contrast */
.interactive:hover {
    color: var(--gold-light);
    border-color: rgba(255, 215, 0, 0.6);
}

/* Active state - maximum contrast */
.interactive:active {
    color: var(--white);
    border-color: var(--gold);
}

/* Focus state - visible ring */
.interactive:focus-visible {
    outline: 3px solid var(--gold);
    outline-offset: 3px;
}

/* Disabled state - reduced contrast */
.interactive:disabled {
    color: var(--gray-600);
    border-color: var(--gray-700);
    opacity: 0.5;
    cursor: not-allowed;
}
```

### Gradient Patterns

```css
/* Primary gold gradient - CTAs */
.gradient-gold {
    background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
}

/* Bright gold gradient - hover states */
.gradient-gold-bright {
    background: linear-gradient(180deg, var(--gold-light) 0%, var(--gold) 100%);
}

/* Dark gradient - cards, elevated surfaces */
.gradient-dark {
    background: linear-gradient(135deg, var(--gray-900) 0%, var(--gray-950) 100%);
}

/* Gold tint gradient - special sections */
.gradient-gold-tint {
    background: linear-gradient(135deg,
        rgba(255, 215, 0, 0.1) 0%,
        rgba(255, 215, 0, 0.05) 100%
    );
}
```

---

## Spacing System

### Base Scale
```css
:root {
    --space-xs: clamp(0.5rem, 0.475rem + 0.125vw, 0.625rem);    /* 8-10px */
    --space-sm: clamp(0.75rem, 0.7rem + 0.25vw, 1rem);          /* 12-16px */
    --space-md: clamp(1rem, 0.9rem + 0.5vw, 1.5rem);            /* 16-24px */
    --space-lg: clamp(1.5rem, 1.3rem + 1vw, 2rem);              /* 24-32px */
    --space-xl: clamp(2rem, 1.7rem + 1.5vw, 3rem);              /* 32-48px */
    --space-2xl: clamp(3rem, 2.5rem + 2.5vw, 4.5rem);           /* 48-72px */
    --space-3xl: clamp(4rem, 3.25rem + 3.75vw, 6rem);           /* 64-96px */

    /* Component-specific */
    --card-padding-sm: clamp(1rem, 0.85rem + 0.75vw, 1.5rem);
    --card-padding-md: clamp(1.5rem, 1.25rem + 1.25vw, 2.25rem);
    --card-padding-lg: clamp(2rem, 1.65rem + 1.75vw, 3rem);

    --section-spacing: clamp(3rem, 2rem + 5vw, 5rem);
    --container-padding: clamp(1.25rem, 5vw, 2.5rem);
}
```

---

## Interaction Standards

### Touch Targets (Mobile-First)
```css
:root {
    --min-touch-target: 44px;  /* iOS HIG minimum */
}

/* Button minimum size */
.btn {
    min-height: var(--min-touch-target);
    min-width: var(--min-touch-target);
    padding: clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem);
}

/* Expand hit area if visual < 44px */
.icon-button {
    position: relative;
}

.icon-button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 44px;
    min-height: 44px;
}
```

### Focus Management
```css
/* Visible focus ring (keyboard users) */
*:focus-visible {
    outline: 3px solid var(--gold);
    outline-offset: 3px;
    border-radius: 4px;
}

/* Group focus */
.control-group:focus-within {
    border-color: var(--gold);
    box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.2);
}

/* No focus ring for pointer users */
*:focus:not(:focus-visible) {
    outline: none;
}
```

### Prevent Double-Tap Zoom
```css
button, a, [role="button"] {
    touch-action: manipulation;
    -webkit-tap-highlight-color: rgba(255, 215, 0, 0.2);
}
```

### Form Behavior

**Input Requirements**
```html
<!-- Mobile: 16px minimum to prevent auto-zoom -->
<input style="font-size: clamp(1rem, 4vw, 1.125rem);" />

<!-- OR set viewport meta -->
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover">
```

**Form Patterns**
```css
/* Allow all input, validate after */
input[type="tel"] {
    /* Don't block non-numeric input */
    /* Show validation feedback instead */
}

/* Trim whitespace on blur */
input {
    /* Handle text expansion trailing spaces */
}

/* Never disable paste */
input, textarea {
    /* Enable password managers & 2FA */
}
```

**Submit Behavior**
```javascript
// Keep enabled until submission starts
<button type="submit" disabled={isSubmitting}>
  {isSubmitting ? (
    <>
      <Spinner />
      Submitting…
    </>
  ) : (
    'Submit'
  )}
</button>

// Enter submits when single input focused
// Textarea: Cmd/Ctrl+Enter submits, Enter = newline
```

---

## Component Library

### Buttons

**Primary Button (Gold CTA)**
```css
.btn-primary {
    /* Structure */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;

    /* Size & spacing */
    min-height: 44px;
    padding: clamp(0.875rem, 2vw, 1.125rem) clamp(1.75rem, 4vw, 2.5rem);

    /* Typography */
    font-family: var(--font-sans);
    font-size: var(--text-lg);
    font-weight: 700;
    text-decoration: none;

    /* Visual style */
    background: linear-gradient(135deg, var(--gold), var(--gold-dark));
    color: var(--black);
    border: none;
    border-radius: 9999px;
    box-shadow: 0 8px 24px rgba(255, 215, 0, 0.3);

    /* Interaction */
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(255, 215, 0, 0.4);
    background: linear-gradient(135deg, var(--gold-light), var(--gold));
}

.btn-primary:active {
    transform: translateY(0);
}

.btn-primary:focus-visible {
    outline: 3px solid var(--gold);
    outline-offset: 4px;
}

.btn-primary:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
}

/* Loading state */
.btn-primary[aria-busy="true"] {
    position: relative;
    color: transparent;
}

.btn-primary[aria-busy="true"]::after {
    content: '';
    position: absolute;
    /* Spinner styles */
}
```

**Secondary Button (Outlined)**
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

### Badges

```css
.badge {
    display: inline-block;
    padding: clamp(0.625rem, 1.5vw, 0.875rem) clamp(1.25rem, 3vw, 1.75rem);

    font-family: var(--font-sans);
    font-size: clamp(0.75rem, 2vw, 0.9375rem);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.15em;

    background: linear-gradient(135deg, var(--gold), var(--gold-dark));
    color: var(--black);
    border-radius: 9999px;
    box-shadow: 0 6px 24px rgba(255, 215, 0, 0.35);

    transition: all 250ms ease;
}

.badge:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 32px rgba(255, 215, 0, 0.45);
}
```

### Cards

```css
.card {
    background: linear-gradient(135deg,
        rgba(26, 26, 26, 0.7) 0%,
        rgba(15, 15, 15, 0.9) 100%
    );
    border: 1px solid rgba(255, 215, 0, 0.2);
    border-radius: clamp(12px, 2vw, 20px);
    padding: var(--card-padding-lg);

    /* Layered shadows (ambient + direct) */
    box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.5),
        0 10px 20px rgba(0, 0, 0, 0.35);

    backdrop-filter: blur(10px);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
    border-color: rgba(255, 215, 0, 0.4);
    transform: translateY(-2px);
    box-shadow:
        0 2px 6px rgba(0, 0, 0, 0.6),
        0 20px 40px rgba(0, 0, 0, 0.4),
        0 0 60px rgba(255, 215, 0, 0.1);
}

/* Nested border radius */
.card .card-content {
    border-radius: calc(clamp(12px, 2vw, 20px) - 8px);
}
```

### Forms

```css
.form-label {
    display: block;
    font-family: var(--font-sans);
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--gray-200);
    margin-bottom: var(--space-xs);
}

.form-input {
    width: 100%;
    min-height: 44px;
    padding: clamp(0.75rem, 2vw, 1rem);

    font-family: var(--font-sans);
    font-size: clamp(1rem, 2.5vw, 1.125rem); /* ≥16px for mobile */
    color: var(--white);

    background: var(--gray-900);
    border: 2px solid var(--gray-700);
    border-radius: 8px;

    transition: all 200ms ease;
}

.form-input:hover {
    border-color: var(--gray-600);
}

.form-input:focus {
    outline: none;
    border-color: var(--gold);
    box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.2);
}

.form-input::placeholder {
    color: var(--gray-500);
}

/* Error state */
.form-input[aria-invalid="true"] {
    border-color: #dc2626;
}

.form-error {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: var(--space-xs);

    font-size: var(--text-sm);
    color: #fca5a5;
}

/* Success state */
.form-input[aria-invalid="false"] {
    border-color: #10b981;
}
```

### Classification Header

```css
.classification {
    font-family: var(--font-mono);
    font-size: clamp(0.75rem, 2vw, 0.875rem);
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: clamp(0.15em, 0.5vw, 0.25em);
    line-height: 1.5;
    color: var(--gold);

    padding: clamp(1rem, 2vw, 1.5rem) 0;
    border-bottom: 2px solid var(--gold);
    background: linear-gradient(180deg, var(--gray-900), var(--black));
}
```

---

## Animation Standards

### Transitions
```css
:root {
    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-smooth: 400ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Compositor-friendly animations only */
.animated {
    /* Animate transform & opacity (GPU-accelerated) */
    transition: transform var(--transition-base),
                opacity var(--transition-base);

    /* NEVER animate: width, height, top, left */
}

/* Reduced motion support */
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

### Loading States
```css
/* Minimum duration: 300-500ms to avoid flicker */
.loading {
    min-height: 300ms;
}

/* Show delay: 150-300ms */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.spinner {
    animation: fadeIn 150ms ease-in;
    animation-delay: 150ms;
    animation-fill-mode: backwards;
}
```

### Scroll Reveal
```css
.scroll-reveal {
    opacity: 0;
    transform: translateY(20px);
    transition:
        opacity 600ms cubic-bezier(0.4, 0, 0.2, 1),
        transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-reveal.revealed {
    opacity: 1;
    transform: translateY(0);
}

/* Staggered delays */
.scroll-reveal:nth-child(1) { transition-delay: 50ms; }
.scroll-reveal:nth-child(2) { transition-delay: 100ms; }
.scroll-reveal:nth-child(3) { transition-delay: 150ms; }
```

---

## Shadow System (Layered)

```css
:root {
    /* Ambient shadows (soft, diffuse) */
    --shadow-ambient-sm: 0 1px 3px rgba(0, 0, 0, 0.4);
    --shadow-ambient-md: 0 4px 8px rgba(0, 0, 0, 0.3);
    --shadow-ambient-lg: 0 10px 20px rgba(0, 0, 0, 0.35);

    /* Direct shadows (sharper, defined) */
    --shadow-direct-sm: 0 2px 4px rgba(0, 0, 0, 0.6);
    --shadow-direct-md: 0 8px 16px rgba(0, 0, 0, 0.5);
    --shadow-direct-lg: 0 20px 40px rgba(0, 0, 0, 0.6);

    /* Layered (ambient + direct) */
    --shadow-sm: var(--shadow-ambient-sm), var(--shadow-direct-sm);
    --shadow-md: var(--shadow-ambient-md), var(--shadow-direct-md);
    --shadow-lg: var(--shadow-ambient-lg), var(--shadow-direct-lg);

    /* Gold glow */
    --shadow-gold: 0 8px 32px rgba(255, 215, 0, 0.2);
    --shadow-gold-lg: 0 16px 48px rgba(255, 215, 0, 0.25);
}

/* Example: Premium card with layered shadow */
.premium-card {
    box-shadow:
        var(--shadow-lg),
        var(--shadow-gold);
}
```

---

## Performance Standards

### Loading Budget
- **POST/PATCH/DELETE**: <500ms target
- **Initial page load**: <2s (3G)
- **Time to Interactive**: <3.5s
- **First Contentful Paint**: <1.5s

### Image Optimization
```html
<!-- Explicit dimensions to prevent CLS -->
<img
    src="image.jpg"
    width="1200"
    height="630"
    alt="Description"
    loading="lazy"
/>

<!-- Preload critical above-the-fold images -->
<link rel="preload" as="image" href="hero.jpg" />
```

### Font Loading
```html
<!-- Preconnect to font CDN -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Preload critical fonts -->
<link rel="preload"
      href="baskervville.woff2"
      as="font"
      type="font/woff2"
      crossorigin>
```

---

## Accessibility Checklist

- ✅ Full keyboard navigation (Tab, Shift+Tab, Enter, Esc, Arrow keys)
- ✅ Visible focus rings on all interactive elements
- ✅ Skip to content link (first tab stop)
- ✅ Hierarchical headings (h1 → h2 → h3, no skipping)
- ✅ All images have descriptive `alt` text
- ✅ Icon-only buttons have `aria-label`
- ✅ Form labels associated with inputs
- ✅ Error messages announced to screen readers (`aria-live`)
- ✅ Minimum contrast ratios (WCAG AA: 4.5:1 for text, 3:1 for large text)
- ✅ Touch targets ≥44px on mobile
- ✅ Reduced motion alternative provided
- ✅ Color not the only means of conveying information
- ✅ Valid, semantic HTML (button, a, input, label, etc.)

---

## Before/During/After Event Sequences

### Before Event (Nov 11-21)
**Pages Active:**
- Register Page (for direct mail)
- Re-Registration Page (for online purchasers)
- Thanks + VIP Upsell
- Welcome/Home Hub

**State:**
- Countdown timer active
- "Zoom link coming 24hrs before" messaging
- Pre-work materials available
- VIP upgrade available
- Excitement building, preparation focus

**Design Emphasis:**
- Time urgency (countdown)
- Preparation CTAs
- Resource downloads
- VIP opportunity

### During Event (Nov 22-23)
**Pages Active:**
- Welcome/Home Hub (updated)
- Event-day support page (optional)

**State:**
- Countdown replaced with "LIVE NOW" badge
- Zoom link prominently displayed
- Live support contact info
- Schedule for Day 1 & Day 2

**Design Emphasis:**
- Immediate access (Zoom link)
- Current session info
- Support options
- Next session preview

### After Event (Nov 24+)
**Pages Active:**
- Workshop Complete Hub (from existing html-pages)
- Recordings page
- Golden Life Sheet page
- Wealth Engine Calculator
- VIP session recording (VIP only)

**State:**
- "Event Complete" badge
- Recordings available
- Next steps / implementation
- Community access
- Level 3 Stargazer upgrade opportunity

**Design Emphasis:**
- Celebration of completion
- Resource access
- Implementation tools
- Next level opportunity

---

## GoHighLevel Integration

### Form Patterns
```html
<!-- Registration form container -->
<div class="ghl-form-container"
     id="register-form"
     data-form-id="[GHL_FORM_ID]">
    <!-- GHL injects form here -->
</div>

<!-- Success handling -->
<script>
document.addEventListener('ghl_form_submit', (e) => {
    if (e.detail.formId === '[GHL_FORM_ID]') {
        // Show loading state
        // Redirect on success
        window.location.href = '/thanks';
    }
});
</script>
```

### Conditional Content
```html
<!-- Show only to VIP -->
<div data-ghl-show-if="tags:contains:vip">
    <div class="vip-badge">🌟 VIP Member</div>
</div>

<!-- Show only to Standard -->
<div data-ghl-show-if="tags:not-contains:vip">
    <a href="/vip-upgrade" class="btn-secondary">Upgrade to VIP</a>
</div>

<!-- Show based on date -->
<div data-ghl-show-before="2025-11-22T00:00:00Z">
    <!-- Pre-event content -->
</div>
<div data-ghl-show-after="2025-11-22T00:00:00Z">
    <!-- During/post-event content -->
</div>
```

---

## Implementation Checklist

For every new page, verify:

**Typography:**
- ✅ Baskervville for headlines
- ✅ Plus Jakarta Sans for body/UI
- ✅ Courier Prime for technical/classification
- ✅ Fluid type scale used throughout
- ✅ Line heights optimized (1.1-1.2 for headings, 1.6-1.7 for body)

**Color:**
- ✅ Gold (#FFD700) for primary accents
- ✅ Black/dark grays for backgrounds
- ✅ Proper contrast ratios met
- ✅ State-based color variations (hover, active, focus)

**Spacing:**
- ✅ Consistent spacing scale
- ✅ Optical alignment where needed
- ✅ Responsive padding/margins

**Interaction:**
- ✅ 44px minimum touch targets
- ✅ Visible focus rings
- ✅ Keyboard navigation works
- ✅ Forms validate properly
- ✅ Loading states implemented

**Performance:**
- ✅ Images optimized & lazy-loaded
- ✅ Fonts preloaded
- ✅ No layout shift (CLS)
- ✅ Fast Time to Interactive

**Accessibility:**
- ✅ Semantic HTML
- ✅ ARIA labels where needed
- ✅ Skip link present
- ✅ Heading hierarchy correct
- ✅ Reduced motion support

**Premium Feel:**
- ✅ Layered shadows
- ✅ Gold gradient CTAs
- ✅ Smooth animations
- ✅ Metallic accents
- ✅ Sophisticated spacing

---

**Document Status**: Living Standard
**Last Updated**: November 27, 2025
**Canonical Tokens**: See DESIGN-SYSTEM.md
