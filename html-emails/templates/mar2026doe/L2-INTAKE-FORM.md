# L2 Member Intake Form — GHL Setup Guide

## Overview

This guide walks through setting up the full intake form system after running the scripts. Follow the steps in order.

**What gets built:**
- 22 GHL contact custom fields (created by script)
- 1 GHL custom value: `{{custom_values.l2_intake_form_url}}` (created by script)
- 1 GHL Survey (6 steps, multi-page, built in GHL UI)
- 1 GHL Trigger Link (wraps the survey URL — pre-identifies contacts)
- 2 email templates loaded into GHL (this folder)
- 1 thank-you page deployed at `neothinkday.com/l2-intake-thankyou`
- Workflow A: tags contact on survey submit
- Workflow B: sends email sequence

---

## Step 1 — Run the Scripts

**Prerequisites:** Node 18+. Check with `node --version`.

```bash
# From the neothink-day project root:

# Creates 22 custom fields
GHL_API_TOKEN=pit-xxxx node scripts/create-l2-intake-fields.js

# Creates the l2_intake_form_url custom value
GHL_API_TOKEN=pit-xxxx node scripts/create-l2-intake-value.js
```

Both scripts are idempotent — safe to re-run. They skip anything that already exists.

**What to capture from the output:**
- The GHL-assigned `fieldKey` for each field (may have numeric suffixes like `l2_intake_top_goals_1`). Always use the returned key, not the assumed one.
- Paste the key table into a doc for reference during survey building.

---

## Step 2 — Build the Survey in GHL

**Navigation:** Sites > Surveys > New Survey

**Settings:**
- Type: Multi-step
- Progress bar: enabled
- Partial saves: enabled (this is the whole point — each "Next" click saves that step)

**Survey intro copy (important):**
> "Click Next after each section — your progress saves automatically. You can come back any time."

### Step 1: Your Contact Info

| Question | Field | Type |
|----------|-------|------|
| Full name | `l2_intake_full_name` | Short answer |
| Phone number | `l2_intake_phone` | Phone |
| Best email address | `l2_intake_best_email` | Email |
| Date of birth | `l2_intake_date_of_birth` | Date |

### Step 2: What Brought You Here

| Question | Field | Type | Required? |
|----------|-------|------|-----------|
| What is the #1 reason you decided to ascend to Level 2? | `l2_intake_reason_ascended` | Long text | Yes |
| What almost held you back from joining? | `l2_intake_what_almost_held_back` | Long text | Yes |
| What was the tipping point that made you say yes? | `l2_intake_tipping_point` | Long text | Yes |

### Step 3: Your Goals

| Question | Field | Type | Required? |
|----------|-------|------|-----------|
| What is the single biggest problem or challenge you want solved through Level 2? | `l2_intake_top_problem` | Long text | Yes |
| Where do you want to be in exactly one year? | `l2_intake_one_year_vision` | Long text | Yes |
| What are your top goals for joining? (Select all that apply) | `l2_intake_top_goals` | Checkboxes | Yes |
| On a scale of 1–10, how committed are you to making a real change? | `l2_intake_commitment_scale` | Number (1–10) | Yes |
| What would make your commitment a 10? | `l2_intake_commitment_booster` | Long text | Yes |

**Checkbox options for Top Goals** (use exact wording):
1. Break free from stagnation and the mortal mentality
2. See through the matrix of illusions — clarity and foresight
3. Discover my essence / true calling
4. Financial transformation — real wealth building
5. Meet the Prime Mentor and go deeper into the inner circle
6. Connect with fellow searchers / find my people
7. Awaken my child of the past — feel alive again
8. Other

### Step 4: Your Background

| Question | Field | Type | Required? |
|----------|-------|------|-----------|
| What is your current occupation or main work? | `l2_intake_occupation` | Short text | Yes |
| Describe a typical day in your life right now (optional) | `l2_intake_typical_day` | Long text | No |
| What is your approximate annual income range? | `l2_intake_income_range` | Radio | Yes |
| Does your partner or spouse know you joined Level 2, and do they support this decision? (optional) | `l2_intake_partner_support` | Long text | No |
| Have you tried other programs, courses, or communities in the past? What happened? (optional) | `l2_intake_past_attempts` | Long text | No |

**Radio options for Income Range:**
- Under $30,000
- $30,000–$60,000
- $60,000–$100,000
- $100,000–$250,000
- $250,000–$1,000,000
- $1,000,000+
- Prefer not to say

### Step 5: What You Bring

| Question | Field | Type | Required? |
|----------|-------|------|-----------|
| Write a 2–3 sentence introduction about yourself | `l2_intake_member_intro` | Long text | Yes |
| What is your #1 skill or area of expertise? | `l2_intake_top_skill` | Short text | Yes |
| Describe your greatest achievement with that skill, and how long you've been developing it | `l2_intake_skill_achievement` | Long text | Yes |
| Would you be open to sharing your expertise with other members? | `l2_intake_open_to_share` | Radio | Yes |

**Radio options for Open to Share:**
- Yes — I'd love that
- Maybe someday — not ready yet
- Not right now

### Step 6: Looking Ahead

| Question | Field | Type | Required? |
|----------|-------|------|-----------|
| Is there anyone in your life who might benefit from attending an upcoming event? (Name + contact, optional) | `l2_intake_referral_contact` | Short text | No |
| Optional: Write a short message to your past self — the one who was on the fence. And/or, is there anything you'd like the mentors to know before your Day of Enlightenment? | *(freetext — no field map needed, or map to a catch-all note field)* | Long text | No |

**On submit:**
- Add tag: `l2-intake-complete`
- Redirect to: `https://neothinkday.com/l2-intake-thankyou`

---

## Step 3 — Create the Trigger Link

**Navigation:** Marketing > Trigger Links > New Trigger Link

- Name: `L2 Intake Survey`
- Destination URL: `{{custom_values.l2_intake_form_url}}` (or paste the survey URL directly if you prefer a static link)
- Copy the generated Trigger Link ID

**Why a Trigger Link?**
The trigger link pre-identifies the contact in GHL before they open the survey. Without it, partial saves may create a new anonymous record instead of writing to the existing contact.

---

## Step 4 — Update the Custom Value

After copying the survey URL:

**Navigation:** Settings > Custom Values > L2 Intake - Form URL

Paste the survey URL. The trigger link (and any email using `{{custom_values.l2_intake_form_url}}`) will now resolve to the correct URL.

---

## Step 5 — Deploy the Thank-You Page

The thank-you page is at `html-pages/l2-intake-thankyou/index.html`.

**Options:**
- Upload to Vercel/Netlify and map `neothinkday.com/l2-intake-thankyou`
- Or host as a static page on the existing neothinkday.com site

**After deploying:** Confirm the survey redirect URL matches the live URL.

---

## Step 6 — Load Emails into GHL

**Navigation:** Marketing > Emails > New Email Campaign (or use inside a Workflow action)

### Email 1: l2-intake-confirmation.html
- Subject: `{{contact.first_name}}, your member intake form is ready`
- Replace `{{trigger_link.TRIGGER_LINK_ID}}` with your actual Trigger Link ID
- Send: immediately on L2 purchase

### Email 2: l2-intake-reminder.html
- Subject: `{{contact.first_name}}, your intake form is waiting`
- Replace `{{trigger_link.TRIGGER_LINK_ID}}` with your actual Trigger Link ID
- Send: +24h, only if `l2-intake-complete` tag is absent

---

## Step 7 — Create Workflow A (Survey Completion Tagger)

**Name:** L2 Survey Completion

| Step | Type | Config |
|------|------|--------|
| Trigger | Survey Submitted | Select: L2 Member Intake Survey |
| Action | Add Tag | `l2-intake-complete` |

Activate this workflow **before** Workflow B.

---

## Step 8 — Create Workflow B (Main Intake Sequence)

**Name:** L2 Intake Form

| Step | Type | Config |
|------|------|--------|
| Trigger | Tag Added | `level-2` (or: Order Placed → Level 2 product) |
| Action | Send Email | l2-intake-confirmation (Email 1) — immediate |
| Action | Wait | 24 hours |
| Condition | If/Else | Contact has tag `l2-intake-complete`? |
| → Yes branch | End workflow | |
| → No branch | Send Email | l2-intake-reminder (Email 2) |
| Action | End workflow | |

---

## Step 9 — End-to-End Test

1. Create a test contact in GHL
2. Manually add tag `level-2` to trigger Workflow B
3. Confirm Email 1 arrives with working trigger link
4. Open link — confirm it pre-identifies you (check GHL contact activity)
5. Fill 2 steps, close browser, confirm partial data appears on contact record
6. Complete the survey — confirm `l2-intake-complete` tag is added
7. Confirm redirect to thank-you page
8. Wait 24h (or fast-forward in workflow) — confirm Email 2 does NOT send (tag is present)
9. Repeat with a contact that doesn't complete the form — confirm Email 2 sends at +24h

---

## Field Reference Table

Use the **GHL-assigned keys** from the script output, not the assumed keys below. Keys may have numeric suffixes.

| # | Display Name | Assumed Key | Data Type |
|---|-------------|-------------|-----------|
| 1 | L2 Intake - Full Name | `l2_intake_full_name` | TEXT |
| 2 | L2 Intake - Phone | `l2_intake_phone` | TEXT |
| 3 | L2 Intake - Best Email | `l2_intake_best_email` | TEXT |
| 4 | L2 Intake - Date of Birth | `l2_intake_date_of_birth` | DATE |
| 5 | L2 Intake - Reason Ascended | `l2_intake_reason_ascended` | LARGE_TEXT |
| 6 | L2 Intake - What Almost Held Back | `l2_intake_what_almost_held_back` | LARGE_TEXT |
| 7 | L2 Intake - Tipping Point | `l2_intake_tipping_point` | LARGE_TEXT |
| 8 | L2 Intake - Top Problem | `l2_intake_top_problem` | LARGE_TEXT |
| 9 | L2 Intake - One Year Vision | `l2_intake_one_year_vision` | LARGE_TEXT |
| 10 | L2 Intake - Top Goals | `l2_intake_top_goals` | CHECKBOX |
| 11 | L2 Intake - Commitment Scale | `l2_intake_commitment_scale` | NUMERICAL |
| 12 | L2 Intake - Commitment Booster | `l2_intake_commitment_booster` | LARGE_TEXT |
| 13 | L2 Intake - Occupation | `l2_intake_occupation` | TEXT |
| 14 | L2 Intake - Typical Day | `l2_intake_typical_day` | LARGE_TEXT |
| 15 | L2 Intake - Income Range | `l2_intake_income_range` | RADIO |
| 16 | L2 Intake - Partner Support | `l2_intake_partner_support` | LARGE_TEXT |
| 17 | L2 Intake - Past Attempts | `l2_intake_past_attempts` | LARGE_TEXT |
| 18 | L2 Intake - Member Intro | `l2_intake_member_intro` | LARGE_TEXT |
| 19 | L2 Intake - Top Skill | `l2_intake_top_skill` | TEXT |
| 20 | L2 Intake - Skill Achievement | `l2_intake_skill_achievement` | LARGE_TEXT |
| 21 | L2 Intake - Open to Share | `l2_intake_open_to_share` | RADIO |
| 22 | L2 Intake - Referral Contact | `l2_intake_referral_contact` | TEXT |

---

## GHL Gotchas

**Partial saves are step-scoped, not question-scoped.**
Clicking "Next" saves the step. Closing the browser mid-step (without clicking Next) loses that step's answers. Survey intro copy should say: "Click Next after each section — your progress saves automatically."

**GHL auto-generates field keys.**
Keys may get numeric suffixes (e.g., `l2_intake_top_goals_1`). Always use the key returned by the API, never the assumed key. The script output table shows the actual keys.

**Trigger link must be updated if survey URL changes.**
Survey URLs are permanent in GHL unless the survey is deleted and recreated. If you do recreate it, update the trigger link destination and the `l2_intake_form_url` custom value.

**CHECKBOX fields store comma-separated values.**
When filtering contacts in GHL Smart Lists, use "contains" — never "equals." Example: field `l2_intake_top_goals` contains `discover_essence`.

**Workflow A must be active before Workflow B sends Email 1.**
If Workflow A (survey tagger) is not active, the `l2-intake-complete` tag will never get added, and Workflow B's condition will always fire the reminder email — even for members who completed the form.

**Trigger Link vs. raw survey URL.**
Always use a Trigger Link in the email CTAs, not a raw survey URL. The trigger link passes the contact's identity into the survey session so partial saves write to the correct contact record. Without it, you risk creating duplicate anonymous contacts.
