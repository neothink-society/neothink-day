#!/usr/bin/env node
/**
 * create-l2-intake-value.js
 *
 * Creates the l2_intake_form_url location custom value in GHL.
 * Idempotent: skips creation if a value with that name already exists.
 *
 * Usage:
 *   GHL_API_TOKEN=pit-xxxx node scripts/create-l2-intake-value.js
 *
 * After creating the GHL Survey, update the custom value via GHL UI:
 *   Settings > Custom Values > L2 Intake - Form URL
 *
 * Requires Node 18+ (uses native fetch).
 */

'use strict';

const LOCATION_ID = 'OWPT3ihPWINakwA0bGRQ';
const BASE_URL    = 'https://services.leadconnectorhq.com';
const API_VERSION = '2021-07-28';

const VALUE_NAME  = 'L2 Intake - Form URL';
const VALUE_KEY   = 'l2_intake_form_url';
// Initial value is empty — update after survey is built in GHL UI
const VALUE_VALUE = '';

// ─── API Helpers ──────────────────────────────────────────────────────────────

function headers(token) {
  return {
    'Authorization': `Bearer ${token}`,
    'Version': API_VERSION,
    'Content-Type': 'application/json',
  };
}

async function getExistingValues(token) {
  const url = `${BASE_URL}/locations/${LOCATION_ID}/customValues`;
  const res = await fetch(url, { headers: headers(token) });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GET /customValues failed ${res.status}: ${body}`);
  }
  const data = await res.json();
  return data.customValues ?? [];
}

async function createValue(token) {
  const url = `${BASE_URL}/locations/${LOCATION_ID}/customValues`;
  const body = {
    name: VALUE_NAME,
    value: VALUE_VALUE,
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: headers(token),
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(`POST /customValues failed ${res.status}: ${errBody}`);
  }
  const data = await res.json();
  return data.customValue ?? data;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const token = process.env.GHL_API_TOKEN;
  if (!token) {
    console.error('ERROR: GHL_API_TOKEN environment variable is not set.');
    console.error('Usage: GHL_API_TOKEN=pit-xxxx node scripts/create-l2-intake-value.js');
    process.exit(1);
  }

  console.log('Fetching existing custom values...\n');
  const existing = await getExistingValues(token);
  const match = existing.find(v => v.name === VALUE_NAME);

  if (match) {
    console.log(`SKIPPED — "${VALUE_NAME}" already exists.`);
    console.log(`  GHL ID:  ${match.id}`);
    console.log(`  Key:     ${match.fieldKey ?? VALUE_KEY}`);
    console.log(`  Value:   "${match.value ?? '(empty)'}"`);
    console.log('\nTo update the URL after building the survey:');
    console.log('  GHL > Settings > Custom Values > L2 Intake - Form URL');
    return;
  }

  console.log(`Creating custom value "${VALUE_NAME}"...`);
  const result = await createValue(token);

  console.log('\nCreated successfully.');
  console.log(`  GHL ID:  ${result.id ?? '—'}`);
  console.log(`  Key:     {{custom_values.${VALUE_KEY}}}`);
  console.log(`  Value:   (empty — update after survey is built)`);
  console.log('\nNext step:');
  console.log('  1. Build the survey in GHL: Sites > Surveys > New Survey');
  console.log('  2. Copy the survey URL');
  console.log('  3. GHL > Settings > Custom Values > L2 Intake - Form URL > paste URL');
}

main().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
