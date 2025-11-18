const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const emailFiles = [
  // Sales training emails
  'sales-training/training-reminder.html',
  'sales-training/training-live.html',
  'sales-training/training-reminder-tuesday.html',
  'sales-training/training-live-tuesday.html',
  'sales-training/training-reminder-wednesday.html',
  'sales-training/training-live-wednesday.html',
  'sales-training/training-reminder-thursday.html',
  'sales-training/training-live-thursday.html',
  // November event emails we've been working on
  'templates/nov2025/preparation-5days.html',
  'templates/nov2025/registration-confirmation.html',
  'templates/nov2025/welcome-email.html',
];

const viewports = [
  { name: 'iPhone SE', width: 375, height: 667 },
  { name: 'iPhone 12 Pro', width: 390, height: 844 },
  { name: 'iPhone 14 Pro Max', width: 430, height: 932 },
  { name: 'iPad Mini', width: 768, height: 1024 },
];

async function testEmailResponsiveness() {
  console.log('Starting mobile responsiveness tests...\n');

  const browser = await chromium.launch({ headless: true });
  const issues = [];

  for (const emailFile of emailFiles) {
    const filePath = path.join(__dirname, '..', emailFile);

    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${emailFile}`);
      continue;
    }

    console.log(`Testing: ${emailFile}`);

    for (const viewport of viewports) {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
        deviceScaleFactor: 2,
      });

      const page = await context.newPage();

      try {
        await page.goto(`file://${filePath}`);
        await page.waitForLoadState('networkidle');

        // Check for horizontal scrolling
        const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
        const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);

        if (scrollWidth > clientWidth) {
          const issue = `  ❌ ${viewport.name} (${viewport.width}x${viewport.height}): Horizontal scroll detected (${scrollWidth}px > ${clientWidth}px)`;
          console.log(issue);
          issues.push({ file: emailFile, viewport: viewport.name, issue: 'horizontal-scroll', details: `${scrollWidth}px > ${clientWidth}px` });
        } else {
          console.log(`  ✅ ${viewport.name} (${viewport.width}x${viewport.height}): No horizontal scroll`);
        }

        // Check for overflow
        const hasOverflow = await page.evaluate(() => {
          const elements = document.querySelectorAll('*');
          for (let el of elements) {
            const rect = el.getBoundingClientRect();
            if (rect.right > window.innerWidth) {
              return { tag: el.tagName, class: el.className, id: el.id, right: rect.right, windowWidth: window.innerWidth };
            }
          }
          return null;
        });

        if (hasOverflow) {
          const issue = `  ⚠️  ${viewport.name}: Element overflow detected: ${hasOverflow.tag} (${hasOverflow.right}px > ${hasOverflow.windowWidth}px)`;
          console.log(issue);
          issues.push({ file: emailFile, viewport: viewport.name, issue: 'element-overflow', details: hasOverflow });
        }

        // Check font sizes (should be at least 14px on mobile)
        const smallFonts = await page.evaluate(() => {
          const elements = document.querySelectorAll('p, span, td, div, a, li');
          const small = [];
          for (let el of elements) {
            const fontSize = parseFloat(window.getComputedStyle(el).fontSize);
            if (fontSize < 14 && el.textContent.trim().length > 0) {
              small.push({ tag: el.tagName, fontSize: fontSize, text: el.textContent.substring(0, 50) });
            }
          }
          return small.slice(0, 3); // Limit to first 3 instances
        });

        if (smallFonts.length > 0) {
          console.log(`  ⚠️  ${viewport.name}: Small fonts detected (< 14px)`);
          issues.push({ file: emailFile, viewport: viewport.name, issue: 'small-fonts', details: smallFonts });
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

  // Summary
  console.log('\n═══════════════════════════════════════════════════');
  console.log('MOBILE RESPONSIVENESS TEST SUMMARY');
  console.log('═══════════════════════════════════════════════════\n');

  if (issues.length === 0) {
    console.log('✅ All emails are mobile responsive!');
  } else {
    console.log(`⚠️  Found ${issues.length} potential issues:\n`);

    const criticalIssues = issues.filter(i => i.issue === 'horizontal-scroll' || i.issue === 'element-overflow');
    const warningIssues = issues.filter(i => i.issue === 'small-fonts');

    if (criticalIssues.length > 0) {
      console.log('CRITICAL ISSUES (horizontal scroll / overflow):');
      criticalIssues.forEach(issue => {
        console.log(`  • ${issue.file} (${issue.viewport}): ${issue.issue}`);
      });
      console.log('');
    }

    if (warningIssues.length > 0) {
      console.log('WARNINGS (small fonts):');
      warningIssues.forEach(issue => {
        console.log(`  • ${issue.file} (${issue.viewport}): ${issue.details.length} instances`);
      });
    }
  }

  console.log('\n═══════════════════════════════════════════════════\n');

  return issues;
}

testEmailResponsiveness()
  .then(issues => {
    process.exit(issues.filter(i => i.issue !== 'small-fonts').length > 0 ? 1 : 0);
  })
  .catch(error => {
    console.error('Test failed:', error);
    process.exit(1);
  });
