# Workflow 02: VIP Purchase

## Overview
Triggered when someone purchases VIP access for the Day of Enlightenment workshop.

---

## Trigger
- **Type:** Product Purchase (VIP Access)
- **Tags Added:** `vip`

---

## Workflow Steps

| Step | Type | Timing | Template | Notes |
|------|------|--------|----------|-------|
| 1 | Email | Immediate | `vip-confirmation.html` | VIP confirmation |
| 2 | SMS | Immediate | See SMS below | VIP confirmation |
| 3 | Email | +5 min | `vip-zoom-background.html` | Zoom background delivery |

---

## GHL Setup Instructions

### Step 1: Create the Workflow
1. Go to **Automation > Workflows**
2. Click **Create Workflow**
3. Name: `DOE - VIP Purchase`
4. Trigger: **Payment Received** or **Product Purchased**
5. Filter: VIP Access product

### Step 2: Add Tag
1. Add action: **Add Tag**
2. Tag: `vip`

### Step 3: Send VIP Confirmation Email
1. Add action: **Send Email**
2. Subject: `Welcome to the Elite Circle — VIP Access Confirmed`
3. Copy HTML from `vip-confirmation.html`

### Step 4: Send VIP Confirmation SMS
1. Add action: **Send SMS**
2. Copy text from SMS section below

### Step 5: Wait 5 Minutes
1. Add action: **Wait**
2. Wait for: 5 minutes

### Step 6: Send Zoom Background Email
1. Add action: **Send Email**
2. Subject: `Your VIP Zoom Background is Ready`
3. Copy HTML from `vip-zoom-background.html`

---

## Email Templates

### vip-confirmation.html
**Subject Line Options:**
- Welcome to the Elite Circle — VIP Access Confirmed
- Your VIP status is activated
- VIP confirmed: {{custom_values.doe_event_dates}}
- You're in the Elite Circle

**Preheader:** Your VIP status is confirmed. Priority access + exclusive VIP-only group session. GUARANTEED access to intimate group mentorship with Wallace Hamilton.

### vip-zoom-background.html
**Subject Line Options:**
- Your VIP Zoom Background is Ready
- Download Your VIP Virtual Background
- Stand Out as VIP — Your Background is Ready

---

## SMS Message

```
Neothink Society: VIP ACCESS CONFIRMED! You're in the Elite Circle for {{custom_values.doe_event_dates}}. Check your email for your exclusive VIP Zoom background & session details.
```

**Character Count:** ~155/160

---

## Tags Reference

| Tag | When Added |
|-----|------------|
| `vip` | On VIP purchase (this workflow) |

---

## Testing Checklist

- [ ] VIP purchase triggers workflow
- [ ] Tag `vip` is added
- [ ] VIP confirmation email sends immediately
- [ ] SMS sends immediately
- [ ] Zoom background email sends after 5 minutes
- [ ] Custom values display correctly in emails
