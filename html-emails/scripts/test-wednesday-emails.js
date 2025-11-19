const { chromium } = require('playwright');
const path = require('path');

const emailFiles = [
  'sales-training/training-reminder-wednesday.html',
  'sales-training/training-live-wednesday.html',
];

const viewports = [
  { name: 'iPhone SE', width: 375, height: 667 },
  { name: 'iPhone 14 Pro Max', width: 430, height: 932 },
];

async function testWednesdayEmails() {
  console.log('Testing updated Wednesday emails for mobile responsiveness...\n');

  const browser = await chromium.launch({ headless: true });
  const issues = [];

  for (const emailFile of emailFiles) {
    const filePath = path.join(__dirname, '..', emailFile);
    console.log(`Testing: ${emailFile}`);

    for (const viewport of viewports) {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
      });

      const page = await context.newPage();

      try {
        await page.goto(`file://${filePath}`);
        await page.waitForLoadState('networkidle');

        // Check for horizontal scrolling
        const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
        const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);

        if (scrollWidth > clientWidth) {
          const issue = `  ❌ ${viewport.name}: Horizontal scroll (${scrollWidth}px > ${clientWidth}px)`;
          console.log(issue);
          issues.push({ file: emailFile, viewport: viewport.name, issue: 'horizontal-scroll' });
        } else {
          console.log(`  ✅ ${viewport.name}: No horizontal scroll`);
        }

      } catch (error) {
        console.log(`  ❌ ${viewport.name}: Error - ${error.message}`);
        issues.push({ file: emailFile, viewport: viewport.name, issue: 'error', details: error.message });
      }

      await context.close();
    }

    console.log('');
  }

  await browser.close();

  console.log('═══════════════════════════════════════════════════');
  console.log('SUMMARY');
  console.log('═══════════════════════════════════════════════════\n');

  if (issues.length === 0) {
    console.log('✅ All updated Wednesday emails are mobile responsive!');
  } else {
    console.log(`⚠️  Found ${issues.length} issues`);
    issues.forEach(issue => {
      console.log(`  • ${issue.file} (${issue.viewport}): ${issue.issue}`);
    });
  }

  console.log('\n');
  return issues;
}

testWednesdayEmails()
  .then(issues => {
    process.exit(issues.length > 0 ? 1 : 0);
  })
  .catch(error => {
    console.error('Test failed:', error);
    process.exit(1);
  });
