# Neothink Component Library
**Reusable HTML/CSS Blocks for Nov 2025 Event Pages**

---

## Foundation

### CSS Custom Properties
```css
:root {
    /* Fonts */
    --font-serif: 'Baskervville', Georgia, serif;
    --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-mono: 'Courier Prime', 'Courier New', monospace;

    /* Colors */
    --gold: #FFD700;
    --gold-light: #FFED4E;
    --gold-dark: #B8860B;
    --black: #0a0a0a;
    --gray-900: #1a1a1a;
    --gray-800: #2a2a2a;
    --gray-700: #3a3a3a;
    --gray-600: #4a4a4a;
    --gray-500: #6a6a6a;
    --gray-400: #8a8a8a;
    --gray-300: #aaaaaa;
    --gray-200: #cccccc;
    --gray-100: #e5e5e5;
    --white: #ffffff;

    /* Spacing */
    --space-xs: 0.5rem;
    --space-sm: 1rem;
    --space-md: 1.5rem;
    --space-lg: 2rem;
    --space-xl: 3rem;
    --space-2xl: 4rem;
    --space-3xl: 6rem;

    /* Typography */
    --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
    --text-sm: clamp(0.875rem, 0.825rem + 0.25vw, 1rem);
    --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
    --text-lg: clamp(1.125rem, 1.05rem + 0.375vw, 1.313rem);
    --text-xl: clamp(1.25rem, 1.15rem + 0.5vw, 1.563rem);
    --text-2xl: clamp(1.5rem, 1.35rem + 0.75vw, 1.953rem);
    --text-3xl: clamp(1.875rem, 1.65rem + 1.125vw, 2.441rem);
    --text-4xl: clamp(2.25rem, 1.95rem + 1.5vw, 3.052rem);
    --text-5xl: clamp(3rem, 2.55rem + 2.25vw, 4.209rem);

    /* Accessibility */
    --min-touch-target: 44px;
    --focus-ring: 3px solid var(--gold);
    --focus-offset: 3px;
}
```

### Font Imports
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
```

### Base Styles
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-sans);
    font-size: var(--text-base);
    line-height: 1.6;
    color: var(--white);
    background: var(--black);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* Focus States */
*:focus-visible {
    outline: var(--focus-ring);
    outline-offset: var(--focus-offset);
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

/* Skip to Content */
.skip-to-content {
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--gold);
    color: var(--black);
    padding: 0.5rem 1rem;
    text-decoration: none;
    font-weight: 600;
    z-index: 100;
}

.skip-to-content:focus {
    top: 0;
}
```

---

## Component 1: Success Icon (Animated)

**Usage**: Confirmation pages, success states

```html
<div class="success-icon">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
    </svg>
</div>
```

```css
.success-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto var(--space-lg);
    background: var(--gold);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: scaleIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.success-icon svg {
    width: 48px;
    height: 48px;
    color: var(--black);
    animation: drawCheck 0.8s ease-in-out 0.3s both;
}

@keyframes scaleIn {
    from {
        transform: scale(0);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes drawCheck {
    from {
        stroke-dasharray: 50;
        stroke-dashoffset: 50;
    }
    to {
        stroke-dasharray: 50;
        stroke-dashoffset: 0;
    }
}
```

---

## Component 2: Eyebrow Badge

**Usage**: Labels, status indicators, category tags

**Variation A: Gold Badge**
```html
<div class="eyebrow-badge">
    <span>VIP Exclusive</span>
</div>
```

**Variation B: Inline Badge**
```html
<span class="badge">New</span>
```

**Variation C: Status Badge**
```html
<div class="status-badge status-active">
    <span class="status-dot"></span>
    <span>Now Available</span>
</div>
```

```css
/* Variation A: Gold Badge */
.eyebrow-badge {
    display: inline-block;
    margin-bottom: var(--space-sm);
}

.eyebrow-badge span {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--black);
    background: var(--gold);
    padding: 0.375rem 0.875rem;
    border-radius: 2px;
}

/* Variation B: Inline Badge */
.badge {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--gold);
    background: transparent;
    border: 2px solid var(--gold);
    padding: 0.25rem 0.625rem;
    border-radius: 2px;
    margin-left: var(--space-xs);
}

/* Variation C: Status Badge */
.status-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--gold);
    padding: 0.375rem 0.875rem;
    background: rgba(255, 215, 0, 0.1);
    border: 1px solid rgba(255, 215, 0, 0.3);
    border-radius: 20px;
}

.status-dot {
    width: 8px;
    height: 8px;
    background: var(--gold);
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.4;
    }
}
```

---

## Component 3: Numbered Step Cards

**Usage**: "What Happens Next", process flows, timelines

```html
<div class="step-cards">
    <div class="step-card">
        <div class="step-number">1</div>
        <div class="step-content">
            <h3>Check Your Email</h3>
            <p>You'll receive a confirmation email with your workshop details and Zoom link within the next few minutes.</p>
        </div>
    </div>

    <div class="step-card">
        <div class="step-number">2</div>
        <div class="step-content">
            <h3>Mark Your Calendar</h3>
            <p>Saturday, November 22nd and Sunday, November 23rd, 2025. Times will be in your confirmation email.</p>
        </div>
    </div>

    <div class="step-card">
        <div class="step-number">3</div>
        <div class="step-content">
            <h3>Prepare Your Mindset</h3>
            <p>Come ready to break through the Matrix of Illusions and unlock your Immortal Mentality.</p>
        </div>
    </div>

    <div class="step-card">
        <div class="step-number">4</div>
        <div class="step-content">
            <h3>Join the Workshop</h3>
            <p>Click your Zoom link on Saturday morning. VIP members will receive their exclusive background before Day 1.</p>
        </div>
    </div>
</div>
```

```css
.step-cards {
    display: grid;
    gap: var(--space-lg);
    max-width: 800px;
    margin: 0 auto;
}

.step-card {
    display: flex;
    gap: var(--space-md);
    padding: var(--space-lg);
    background: var(--gray-900);
    border: 1px solid var(--gray-800);
    border-radius: 8px;
    transition: all 0.3s ease;
}

.step-card:hover {
    border-color: var(--gold);
    transform: translateY(-2px);
}

.step-number {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-serif);
    font-size: var(--text-2xl);
    font-weight: 700;
    color: var(--black);
    background: var(--gold);
    border-radius: 50%;
}

.step-content h3 {
    font-family: var(--font-serif);
    font-size: var(--text-xl);
    font-weight: 700;
    color: var(--gold);
    margin-bottom: var(--space-xs);
}

.step-content p {
    font-size: var(--text-base);
    color: var(--gray-200);
    line-height: 1.6;
}

@media (max-width: 640px) {
    .step-card {
        flex-direction: column;
        text-align: center;
    }

    .step-number {
        margin: 0 auto;
    }
}
```

---

## Component 4: Comparison Grid (Standard vs VIP)

**Usage**: Upgrade offers, feature comparisons

```html
<div class="comparison-grid">
    <div class="comparison-card">
        <h3>Standard Workshop</h3>
        <p class="comparison-subtitle">Full Transformation Experience</p>
        <ul class="comparison-list">
            <li class="included">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Full 2-day transformation workshop</span>
            </li>
            <li class="included">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>All workshop materials and resources</span>
            </li>
            <li class="included">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Golden Life Sheet implementation tool</span>
            </li>
            <li class="excluded">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span>VIP Zoom background</span>
            </li>
            <li class="excluded">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span>GUARANTEED 1-on-1 mentorship</span>
            </li>
            <li class="excluded">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span>Private Elite Session on Day 2</span>
            </li>
        </ul>
    </div>

    <div class="comparison-card highlight">
        <div class="recommended-badge">Recommended</div>
        <h3>VIP Experience</h3>
        <p class="comparison-subtitle">Maximum Transformation & Support</p>
        <div class="comparison-price">
            <span class="price-amount">$297</span>
            <span class="price-label">One-time upgrade</span>
        </div>
        <ul class="comparison-list">
            <li class="included">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>All Standard Workshop features</span>
            </li>
            <li class="included gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>VIP Status Recognition (exclusive Zoom background)</span>
            </li>
            <li class="included gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Priority Workshop Assistance (Day 1)</span>
            </li>
            <li class="included gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><strong>GUARANTEED Personal Mentorship</strong></span>
            </li>
            <li class="included gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Private Elite Session (Day 2)</span>
            </li>
            <li class="included gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Implementation Accelerator</span>
            </li>
            <li class="included gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Surprise Bonus Gift(s)</span>
            </li>
        </ul>
        <a href="#upgrade" class="btn-primary" aria-label="Upgrade to VIP Experience for $297">
            Upgrade to VIP Now
        </a>
    </div>
</div>
```

```css
.comparison-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-xl);
    max-width: 1000px;
    margin: var(--space-3xl) auto;
    padding: 0 var(--space-md);
}

.comparison-card {
    padding: var(--space-xl);
    background: var(--gray-900);
    border: 2px solid var(--gray-800);
    border-radius: 12px;
    position: relative;
}

.comparison-card.highlight {
    border-color: var(--gold);
    background: linear-gradient(135deg, var(--gray-900) 0%, rgba(255, 215, 0, 0.05) 100%);
    transform: scale(1.05);
}

.recommended-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--black);
    background: var(--gold);
    padding: 0.375rem 1rem;
    border-radius: 20px;
}

.comparison-card h3 {
    font-family: var(--font-serif);
    font-size: var(--text-2xl);
    font-weight: 700;
    color: var(--white);
    margin-bottom: var(--space-xs);
}

.comparison-subtitle {
    font-size: var(--text-sm);
    color: var(--gray-400);
    margin-bottom: var(--space-lg);
}

.comparison-price {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--space-md) 0;
    margin-bottom: var(--space-lg);
    border-top: 1px solid var(--gray-800);
    border-bottom: 1px solid var(--gray-800);
}

.price-amount {
    font-family: var(--font-serif);
    font-size: var(--text-4xl);
    font-weight: 700;
    color: var(--gold);
}

.price-label {
    font-size: var(--text-sm);
    color: var(--gray-400);
    margin-top: var(--space-xs);
}

.comparison-list {
    list-style: none;
    margin: var(--space-lg) 0;
}

.comparison-list li {
    display: flex;
    gap: var(--space-sm);
    align-items: flex-start;
    padding: var(--space-sm) 0;
    font-size: var(--text-base);
}

.comparison-list li svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-top: 2px;
}

.comparison-list li.included svg {
    color: var(--gold);
}

.comparison-list li.included.gold {
    color: var(--gold);
}

.comparison-list li.excluded {
    color: var(--gray-500);
}

.comparison-list li.excluded svg {
    color: var(--gray-600);
}

@media (max-width: 768px) {
    .comparison-card.highlight {
        transform: scale(1);
    }
}
```

---

## Component 5: GHL Form Container

**Usage**: Registration forms, email capture, lead generation

```html
<section class="form-section">
    <div class="form-container">
        <div class="form-header">
            <div class="eyebrow-badge">
                <span>Step 1: Register</span>
            </div>
            <h2>Complete Your Registration</h2>
            <p>Secure your spot for the November 22-23, 2025 Day of Enlightenment workshop.</p>
        </div>

        <div class="ghl-form-wrapper">
            <!-- GHL form will be injected here -->
            <div id="register-form" data-form-id="[GHL-FORM-ID]"></div>
        </div>

        <div class="form-footer">
            <p class="privacy-notice">
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
                Your information is secure and will only be used for workshop communications.
            </p>
        </div>
    </div>
</section>
```

```css
.form-section {
    padding: var(--space-3xl) var(--space-md);
    max-width: 600px;
    margin: 0 auto;
}

.form-container {
    background: var(--gray-900);
    border: 1px solid var(--gray-800);
    border-radius: 12px;
    padding: var(--space-2xl);
}

.form-header {
    text-align: center;
    margin-bottom: var(--space-2xl);
}

.form-header h2 {
    font-family: var(--font-serif);
    font-size: var(--text-3xl);
    font-weight: 700;
    color: var(--white);
    margin: var(--space-md) 0;
}

.form-header p {
    font-size: var(--text-base);
    color: var(--gray-300);
    max-width: 500px;
    margin: 0 auto;
}

.ghl-form-wrapper {
    margin: var(--space-xl) 0;
}

/* GHL Form Overrides */
.ghl-form-wrapper input,
.ghl-form-wrapper select,
.ghl-form-wrapper textarea {
    width: 100%;
    padding: 0.875rem 1rem;
    font-family: var(--font-sans);
    font-size: var(--text-base);
    color: var(--white);
    background: var(--gray-800);
    border: 2px solid var(--gray-700);
    border-radius: 6px;
    transition: all 0.3s ease;
    min-height: var(--min-touch-target);
}

.ghl-form-wrapper input:focus,
.ghl-form-wrapper select:focus,
.ghl-form-wrapper textarea:focus {
    outline: none;
    border-color: var(--gold);
    background: var(--gray-900);
}

.ghl-form-wrapper label {
    display: block;
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--gray-300);
    margin-bottom: var(--space-xs);
}

.ghl-form-wrapper button[type="submit"] {
    width: 100%;
    padding: 1rem 2rem;
    font-family: var(--font-sans);
    font-size: var(--text-lg);
    font-weight: 700;
    color: var(--black);
    background: var(--gold);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    min-height: var(--min-touch-target);
    margin-top: var(--space-lg);
}

.ghl-form-wrapper button[type="submit"]:hover {
    background: var(--gold-light);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(255, 215, 0, 0.3);
}

.ghl-form-wrapper button[type="submit"]:active {
    transform: translateY(0);
}

.form-footer {
    margin-top: var(--space-xl);
    padding-top: var(--space-lg);
    border-top: 1px solid var(--gray-800);
}

.privacy-notice {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    font-size: var(--text-sm);
    color: var(--gray-400);
    text-align: center;
    justify-content: center;
}

.privacy-notice svg {
    flex-shrink: 0;
    color: var(--gold);
}
```

---

## Component 6: Hero Title with Gradient Text

**Usage**: Page headers, major section titles

```html
<div class="hero-section">
    <h1 class="hero-title">
        Welcome to Your
        <span class="gradient-text">Day of Enlightenment</span>
    </h1>
    <p class="hero-subtitle">November 22-23, 2025 • Two Days That Will Change Everything</p>
</div>
```

```css
.hero-section {
    text-align: center;
    padding: var(--space-3xl) var(--space-md);
    max-width: 900px;
    margin: 0 auto;
}

.hero-title {
    font-family: var(--font-serif);
    font-size: var(--text-5xl);
    font-weight: 700;
    line-height: 1.3;  /* Increased from 1.1 to prevent descender clipping */
    color: var(--white);
    margin-bottom: var(--space-md);
    overflow: visible;
}

.gradient-text {
    display: block;
    background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 50%, var(--gold-dark) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    padding-bottom: 0.1em;  /* Ensures descenders (y, g, p, q, j) are not clipped */
    overflow: visible;
}

.hero-subtitle {
    font-family: var(--font-mono);
    font-size: var(--text-lg);
    font-weight: 400;
    color: var(--gray-300);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

@media (max-width: 640px) {
    .hero-title {
        font-size: var(--text-3xl);
    }

    .hero-subtitle {
        font-size: var(--text-sm);
    }
}
```

---

## Component 7: Info/Content Cards

**Usage**: Feature lists, benefit displays, content blocks

**Variation A: Icon Card**
```html
<div class="info-card">
    <div class="card-icon">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
    </div>
    <h3>Priority Workshop Assistance</h3>
    <p>Get your questions answered first during Day 1 Q&A sessions. Your transformation is our priority.</p>
</div>
```

**Variation B: Numbered Card**
```html
<div class="info-card numbered">
    <div class="card-number">01</div>
    <h3>Who I Am</h3>
    <p>Define your authentic self beyond societal conditioning. Discover the person you were meant to become.</p>
</div>
```

```css
/* Variation A: Icon Card */
.info-card {
    padding: var(--space-xl);
    background: var(--gray-900);
    border: 1px solid var(--gray-800);
    border-radius: 8px;
    transition: all 0.3s ease;
}

.info-card:hover {
    border-color: var(--gold);
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
}

.card-icon {
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 215, 0, 0.1);
    border: 2px solid var(--gold);
    border-radius: 50%;
    margin-bottom: var(--space-md);
}

.card-icon svg {
    width: 28px;
    height: 28px;
    color: var(--gold);
}

.info-card h3 {
    font-family: var(--font-serif);
    font-size: var(--text-xl);
    font-weight: 700;
    color: var(--white);
    margin-bottom: var(--space-sm);
}

.info-card p {
    font-size: var(--text-base);
    color: var(--gray-300);
    line-height: 1.6;
}

/* Variation B: Numbered Card */
.info-card.numbered {
    position: relative;
    padding-left: calc(var(--space-xl) + 60px);
}

.card-number {
    position: absolute;
    left: var(--space-xl);
    top: var(--space-xl);
    font-family: var(--font-serif);
    font-size: var(--text-4xl);
    font-weight: 700;
    color: var(--gold);
    opacity: 0.3;
}

@media (max-width: 640px) {
    .info-card.numbered {
        padding-left: var(--space-xl);
    }

    .card-number {
        position: static;
        margin-bottom: var(--space-sm);
    }
}
```

---

## Component 8: Primary Button (CTA)

**Usage**: Main actions, form submits, upgrade offers

```html
<a href="#register" class="btn-primary" aria-label="Register for Day of Enlightenment Workshop">
    Register Now
    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
    </svg>
</a>

<button type="submit" class="btn-primary">
    Complete Registration
</button>
```

```css
.btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-sm);
    padding: 1rem 2rem;
    font-family: var(--font-sans);
    font-size: var(--text-lg);
    font-weight: 700;
    color: var(--black);
    background: var(--gold);
    border: none;
    border-radius: 6px;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    min-height: var(--min-touch-target);
    min-width: 200px;
}

.btn-primary:hover {
    background: var(--gold-light);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(255, 215, 0, 0.3);
}

.btn-primary:active {
    transform: translateY(0);
}

.btn-primary svg {
    transition: transform 0.3s ease;
}

.btn-primary:hover svg {
    transform: translateX(4px);
}

/* Secondary Button */
.btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-sm);
    padding: 1rem 2rem;
    font-family: var(--font-sans);
    font-size: var(--text-lg);
    font-weight: 600;
    color: var(--gold);
    background: transparent;
    border: 2px solid var(--gold);
    border-radius: 6px;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    min-height: var(--min-touch-target);
}

.btn-secondary:hover {
    background: rgba(255, 215, 0, 0.1);
    border-color: var(--gold-light);
    color: var(--gold-light);
}
```

---

## Component 9: Stats Grid

**Usage**: Metrics display, achievement showcases

```html
<div class="stats-grid">
    <div class="stat-card">
        <div class="stat-number">2</div>
        <div class="stat-label">Days of Transformation</div>
    </div>

    <div class="stat-card">
        <div class="stat-number">6</div>
        <div class="stat-label">VIP Exclusive Benefits</div>
    </div>

    <div class="stat-card">
        <div class="stat-number">100%</div>
        <div class="stat-label">Guaranteed Mentorship</div>
    </div>

    <div class="stat-card">
        <div class="stat-number">$297</div>
        <div class="stat-label">One-Time VIP Upgrade</div>
    </div>
</div>
```

```css
.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-lg);
    max-width: 1000px;
    margin: var(--space-3xl) auto;
    padding: 0 var(--space-md);
}

.stat-card {
    padding: var(--space-xl);
    background: var(--gray-900);
    border: 1px solid var(--gray-800);
    border-radius: 8px;
    text-align: center;
    transition: all 0.3s ease;
}

.stat-card:hover {
    border-color: var(--gold);
    transform: translateY(-4px);
}

.stat-number {
    font-family: var(--font-serif);
    font-size: var(--text-4xl);
    font-weight: 700;
    color: var(--gold);
    margin-bottom: var(--space-xs);
}

.stat-label {
    font-size: var(--text-sm);
    color: var(--gray-300);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}
```

---

## Component 10: Scroll Reveal (Animation)

**Usage**: Progressive content disclosure, engagement

```html
<div class="scroll-reveal" data-delay="0">
    <!-- Content here -->
</div>

<div class="scroll-reveal" data-delay="200">
    <!-- Content here -->
</div>
```

```css
.scroll-reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.scroll-reveal.revealed {
    opacity: 1;
    transform: translateY(0);
}
```

```javascript
// Scroll Reveal Implementation
document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, delay);
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
});
```

---

## Component 11: Quote Block

**Usage**: Testimonials, featured quotes, emphasis

```html
<blockquote class="quote-block">
    <div class="quote-icon" aria-hidden="true">"</div>
    <p class="quote-text">
        This workshop didn't just change my mindset—it shattered the Matrix of Illusions I'd been living in.
        I finally understand what Wallace means by the Immortal Mentality.
    </p>
    <cite class="quote-author">— Sarah M., Level 2 Stargazer</cite>
</blockquote>
```

```css
.quote-block {
    position: relative;
    max-width: 700px;
    margin: var(--space-3xl) auto;
    padding: var(--space-2xl) var(--space-xl);
    background: linear-gradient(135deg, var(--gray-900) 0%, rgba(255, 215, 0, 0.05) 100%);
    border-left: 4px solid var(--gold);
    border-radius: 8px;
}

.quote-icon {
    position: absolute;
    top: var(--space-md);
    left: var(--space-md);
    font-family: var(--font-serif);
    font-size: 80px;
    line-height: 1;
    color: var(--gold);
    opacity: 0.2;
}

.quote-text {
    font-family: var(--font-serif);
    font-size: var(--text-xl);
    font-style: italic;
    line-height: 1.6;
    color: var(--white);
    margin-bottom: var(--space-md);
    position: relative;
    z-index: 1;
}

.quote-author {
    display: block;
    font-family: var(--font-sans);
    font-size: var(--text-base);
    font-style: normal;
    font-weight: 600;
    color: var(--gold);
}
```

---

## Component 12: Countdown Timer

**Usage**: Event countdown, urgency creation, deadline display

```html
<div class="countdown-container">
    <div class="countdown-label">Workshop Begins In:</div>
    <div class="countdown-timer" id="countdown">
        <div class="countdown-unit">
            <span class="countdown-number" id="days">00</span>
            <span class="countdown-label">Days</span>
        </div>
        <div class="countdown-separator">:</div>
        <div class="countdown-unit">
            <span class="countdown-number" id="hours">00</span>
            <span class="countdown-label">Hours</span>
        </div>
        <div class="countdown-separator">:</div>
        <div class="countdown-unit">
            <span class="countdown-number" id="minutes">00</span>
            <span class="countdown-label">Minutes</span>
        </div>
        <div class="countdown-separator">:</div>
        <div class="countdown-unit">
            <span class="countdown-number" id="seconds">00</span>
            <span class="countdown-label">Seconds</span>
        </div>
    </div>
</div>
```

```css
.countdown-container {
    text-align: center;
    padding: var(--space-2xl) var(--space-md);
    max-width: 800px;
    margin: 0 auto;
}

.countdown-label {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--gray-400);
    margin-bottom: var(--space-md);
}

.countdown-timer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--space-md);
}

.countdown-unit {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xs);
}

.countdown-number {
    font-family: var(--font-serif);
    font-size: var(--text-5xl);
    font-weight: 700;
    color: var(--gold);
    line-height: 1;
}

.countdown-unit .countdown-label {
    font-family: var(--font-sans);
    font-size: var(--text-xs);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--gray-400);
    margin: 0;
}

.countdown-separator {
    font-family: var(--font-serif);
    font-size: var(--text-4xl);
    font-weight: 700;
    color: var(--gold);
    opacity: 0.5;
    margin: 0 var(--space-xs);
}

@media (max-width: 640px) {
    .countdown-timer {
        gap: var(--space-sm);
    }

    .countdown-number {
        font-size: var(--text-3xl);
    }

    .countdown-separator {
        font-size: var(--text-2xl);
    }
}
```

```javascript
// Countdown Timer Implementation
function initCountdown(targetDate) {
    const countdownEl = document.getElementById('countdown');
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            countdownEl.innerHTML = '<div class="countdown-expired">Workshop Has Begun!</div>';
            clearInterval(interval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
}

// Initialize countdown to Nov 22, 2025 at 9:00 AM EST
document.addEventListener('DOMContentLoaded', function() {
    const workshopDate = new Date('2025-11-22T09:00:00-05:00').getTime();
    initCountdown(workshopDate);
});
```

---

## Component 13: Footer with Support

**Usage**: Page footers, contact information

```html
<footer class="site-footer">
    <div class="footer-content">
        <div class="footer-brand">
            <h3>Neothink Society</h3>
            <p>Prosper Happily Forever</p>
        </div>

        <div class="footer-support">
            <p class="support-label">Need Help?</p>
            <a href="mailto:support@neothink.com" class="support-link">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                support@neothink.com
            </a>
        </div>
    </div>

    <div class="footer-bottom">
        <p>&copy; 2025 Neothink Society. All rights reserved.</p>
    </div>
</footer>
```

```css
.site-footer {
    background: var(--gray-900);
    border-top: 1px solid var(--gray-800);
    padding: var(--space-3xl) var(--space-md) var(--space-lg);
    margin-top: var(--space-3xl);
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-2xl);
    max-width: 1200px;
    margin: 0 auto var(--space-2xl);
}

.footer-brand h3 {
    font-family: var(--font-serif);
    font-size: var(--text-xl);
    font-weight: 700;
    color: var(--gold);
    margin-bottom: var(--space-xs);
}

.footer-brand p {
    font-size: var(--text-sm);
    color: var(--gray-400);
}

.support-label {
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--gray-400);
    margin-bottom: var(--space-xs);
}

.support-link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    font-size: var(--text-base);
    font-weight: 600;
    color: var(--gold);
    text-decoration: none;
    transition: color 0.3s ease;
}

.support-link:hover {
    color: var(--gold-light);
}

.footer-bottom {
    text-align: center;
    padding-top: var(--space-lg);
    border-top: 1px solid var(--gray-800);
}

.footer-bottom p {
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--gray-500);
}
```

---

## Copy Patterns & Voice Guidelines

### Headline Formulas

1. **Transformation Promise**
   - "Welcome to Your [Desired State]"
   - "Your Journey to [Outcome] Starts Here"
   - "[Time Period] That Will Change Everything"

2. **Urgency + Benefit**
   - "Only [Number] Days Until [Event]"
   - "Secure Your Spot: [Benefit]"
   - "Last Chance: [Exclusive Offer]"

3. **Status + Exclusivity**
   - "VIP Status: [Benefit]"
   - "Elite Access to [Resource]"
   - "GUARANTEED [Promise]"

### Body Copy Voice

- **Direct & Confident**: "This isn't about status—it's about maximizing your transformation."
- **Action-Oriented**: "Break through the Matrix of Illusions"
- **Specific Over Vague**: "November 22-23, 2025" not "coming soon"
- **Capitalize KEY WORDS**: GUARANTEED, VIP, EXCLUSIVE for emphasis
- **Use En Dashes**: "Day 1—Your Foundation" not "Day 1: Your Foundation"

### CTA Copy

- **Clear Action Verb**: "Register Now", "Upgrade to VIP", "Complete Registration"
- **Benefit-Driven**: "Secure Your Spot", "Unlock VIP Access", "Start Your Transformation"
- **Urgency When Appropriate**: "Register Before Workshop Begins", "Limited VIP Spots"

---

## Accessibility Checklist

- [ ] All images have meaningful alt text
- [ ] Form inputs have associated labels
- [ ] Focus states visible on all interactive elements
- [ ] Color contrast meets WCAG AA (4.5:1 for normal text, 3:1 for large text)
- [ ] Touch targets minimum 44x44px
- [ ] Skip to content link for keyboard navigation
- [ ] ARIA labels on icon-only buttons
- [ ] Semantic HTML (header, nav, main, section, footer)
- [ ] Reduced motion support for animations
- [ ] Keyboard navigation fully functional

---

## Performance Checklist

- [ ] Font loading strategy (preconnect, display=swap)
- [ ] CSS custom properties for theming
- [ ] Compositor-friendly animations (transform/opacity only)
- [ ] Intersection Observer for scroll reveals (vs scroll events)
- [ ] Minimal JavaScript (progressive enhancement)
- [ ] Mobile-first responsive design
- [ ] Touch-friendly interface (44px minimum targets)

---

## File Structure

```
html-pages/
├── register.html                    # Page 1: Register page
├── thanks-vip-upsell.html          # Page 2: Thanks + VIP upsell
├── welcome-home.html               # Page 3: Welcome/home hub
├── re-register.html                # Page 4: Re-registration
└── components/                     # (Future: extracted components)
    ├── form-styles.css
    ├── button-styles.css
    └── card-styles.css
```

---

## GHL Integration Notes

### Form Injection
```javascript
// GHL will inject form into container with matching data-form-id
<div id="register-form" data-form-id="YOUR-GHL-FORM-ID"></div>
```

### Post-Submit Redirect
```javascript
// Configure in GHL form settings:
// Success Redirect: /thanks-vip-upsell.html
```

### Form Fields Captured
- Email (required)
- Phone (required)
- Address (Street, City, State, ZIP)
- First Name (optional but recommended)
- Last Name (optional but recommended)

---

**End of Component Library**

*Last Updated: November 11, 2025*
*For: Day of Enlightenment Workshop (Nov 22-23, 2025)*
