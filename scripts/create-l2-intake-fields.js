#!/usr/bin/env node
/**
 * create-l2-intake-fields.js
 *
 * Creates 22 GHL contact custom fields for the L2 Member Intake Form.
 * Idempotent: skips any field whose name already exists.
 *
 * Usage:
 *   GHL_API_TOKEN=pit-xxxx node scripts/create-l2-intake-fields.js
 *
 * Requires Node 18+ (uses native fetch).
 */

'use strict';

const LOCATION_ID = 'OWPT3ihPWINakwA0bGRQ';
const BASE_URL    = 'https://services.leadconnectorhq.com';
const API_VERSION = '2021-07-28';

// ─── Field Definitions ───────────────────────────────────────────────────────

const FIELDS = [
  { name: 'L2 Intake - Full Name',              fieldKey: 'l2_intake_full_name',              dataType: 'TEXT' },
  { name: 'L2 Intake - Phone',                  fieldKey: 'l2_intake_phone',                  dataType: 'TEXT' },
  { name: 'L2 Intake - Best Email',             fieldKey: 'l2_intake_best_email',             dataType: 'TEXT' },
  { name: 'L2 Intake - Date of Birth',          fieldKey: 'l2_intake_date_of_birth',          dataType: 'DATE' },
  { name: 'L2 Intake - Reason Ascended',        fieldKey: 'l2_intake_reason_ascended',        dataType: 'LARGE_TEXT' },
  { name: 'L2 Intake - What Almost Held Back',  fieldKey: 'l2_intake_what_almost_held_back',  dataType: 'LARGE_TEXT' },
  { name: 'L2 Intake - Tipping Point',          fieldKey: 'l2_intake_tipping_point',          dataType: 'LARGE_TEXT' },
  { name: 'L2 Intake - Top Problem',            fieldKey: 'l2_intake_top_problem',            dataType: 'LARGE_TEXT' },
  { name: 'L2 Intake - One Year Vision',        fieldKey: 'l2_intake_one_year_vision',        dataType: 'LARGE_TEXT' },
  {
    name: 'L2 Intake - Top Goals',
    fieldKey: 'l2_intake_top_goals',
    dataType: 'CHECKBOX',
    options: [
      { label: 'Break free from stagnation and the mortal mentality',       value: 'break_free_from_stagnation' },
      { label: 'See through the matrix of illusions — clarity and foresight', value: 'see_through_illusions' },
      { label: 'Discover my essence / true calling',                         value: 'discover_essence' },
      { label: 'Financial transformation — real wealth building',            value: 'financial_transformation' },
      { label: 'Meet the Prime Mentor and go deeper into the inner circle',  value: 'meet_prime_mentor' },
      { label: 'Connect with fellow searchers / find my people',             value: 'connect_with_searchers' },
      { label: 'Awaken my child of the past — feel alive again',             value: 'awaken_child_of_past' },
      { label: 'Other',                                                      value: 'other' },
    ],
  },
  { name: 'L2 Intake - Commitment Scale',       fieldKey: 'l2_intake_commitment_scale',       dataType: 'NUMERICAL' },
  { name: 'L2 Intake - Commitment Booster',     fieldKey: 'l2_intake_commitment_booster',     dataType: 'LARGE_TEXT' },
  { name: 'L2 Intake - Occupation',             fieldKey: 'l2_intake_occupation',             dataType: 'TEXT' },
  { name: 'L2 Intake - Typical Day',            fieldKey: 'l2_intake_typical_day',            dataType: 'LARGE_TEXT' },
  {
    name: 'L2 Intake - Income Range',
    fieldKey: 'l2_intake_income_range',
    dataType: 'RADIO',
    options: [
      { label: 'Under $30,000',            value: 'under_30k' },
      { label: '$30,000–$60,000',          value: '30k_60k' },
      { label: '$60,000–$100,000',         value: '60k_100k' },
      { label: '$100,000–$250,000',        value: '100k_250k' },
      { label: '$250,000–$1,000,000',      value: '250k_1m' },
      { label: '$1,000,000+',              value: '1m_plus' },
      { label: 'Prefer not to say',        value: 'prefer_not_to_say' },
    ],
  },
  { name: 'L2 Intake - Partner Support',        fieldKey: 'l2_intake_partner_support',        dataType: 'LARGE_TEXT' },
  { name: 'L2 Intake - Past Attempts',          fieldKey: 'l2_intake_past_attempts',          dataType: 'LARGE_TEXT' },
  { name: 'L2 Intake - Member Intro',           fieldKey: 'l2_intake_member_intro',           dataType: 'LARGE_TEXT' },
  { name: 'L2 Intake - Top Skill',              fieldKey: 'l2_intake_top_skill',              dataType: 'TEXT' },
  { name: 'L2 Intake - Skill Achievement',      fieldKey: 'l2_intake_skill_achievement',      dataType: 'LARGE_TEXT' },
  {
    name: 'L2 Intake - Open to Share',
    fieldKey: 'l2_intake_open_to_share',
    dataType: 'RADIO',
    options: [
      { label: 'Yes — I\'d love that',          value: 'yes' },
      { label: 'Maybe someday — not ready yet', value: 'maybe' },
      { label: 'Not right now',                 value: 'not_now' },
    ],
  },
  { name: 'L2 Intake - Referral Contact',       fieldKey: 'l2_intake_referral_contact',       dataType: 'TEXT' },
];

// ─── API Helpers ──────────────────────────────────────────────────────────────

function headers(token) {
  return {
    'Authorization': `Bearer ${token}`,
    'Version': API_VERSION,
    'Content-Type': 'application/json',
  };
}

async function getExistingFields(token) {
  const url = `${BASE_URL}/locations/${LOCATION_ID}/customFields`;
  const res = await fetch(url, { headers: headers(token) });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GET /customFields failed ${res.status}: ${body}`);
  }
  const data = await res.json();
  // GHL returns { customFields: [...] }
  return data.customFields ?? [];
}

async function createField(token, field) {
  const url = `${BASE_URL}/locations/${LOCATION_ID}/customFields`;
  const body = {
    name: field.name,
    dataType: field.dataType,
  };
  if (field.options) body.options = field.options;

  const res = await fetch(url, {
    method: 'POST',
    headers: headers(token),
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(`POST /customFields failed ${res.status}: ${errBody}`);
  }
  const data = await res.json();
  return data.customField ?? data;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const token = process.env.GHL_API_TOKEN;
  if (!token) {
    console.error('ERROR: GHL_API_TOKEN environment variable is not set.');
    console.error('Usage: GHL_API_TOKEN=pit-xxxx node scripts/create-l2-intake-fields.js');
    process.exit(1);
  }

  console.log('Fetching existing custom fields...\n');
  const existing = await getExistingFields(token);
  const existingNames = new Set(existing.map(f => f.name));

  console.log(`Found ${existing.length} existing custom field(s).\n`);
  console.log('─'.repeat(80));
  console.log(
    'Field Name'.padEnd(40) +
    'Status'.padEnd(12) +
    'GHL ID'.padEnd(26) +
    'GHL Key'
  );
  console.log('─'.repeat(80));

  let created = 0;
  let skipped = 0;
  let errors  = 0;

  for (const field of FIELDS) {
    if (existingNames.has(field.name)) {
      const match = existing.find(f => f.name === field.name);
      console.log(
        field.name.padEnd(40) +
        'SKIPPED'.padEnd(12) +
        (match?.id ?? '—').padEnd(26) +
        (match?.fieldKey ?? '—')
      );
      skipped++;
      continue;
    }

    try {
      const created_ = await createField(token, field);
      console.log(
        field.name.padEnd(40) +
        'CREATED'.padEnd(12) +
        (created_?.id ?? '—').padEnd(26) +
        (created_?.fieldKey ?? '—')
      );
      created++;
    } catch (err) {
      console.log(
        field.name.padEnd(40) +
        'ERROR'.padEnd(12) +
        '—'.padEnd(26) +
        err.message.slice(0, 50)
      );
      errors++;
    }

    // Brief pause to avoid rate-limiting
    await new Promise(r => setTimeout(r, 150));
  }

  console.log('─'.repeat(80));
  console.log(`\nDone. Created: ${created}  Skipped: ${skipped}  Errors: ${errors}\n`);

  if (errors > 0) {
    console.error('One or more fields failed to create. See errors above.');
    process.exit(1);
  }
}

main().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
