const { chromium } = require('playwright');
const path = require('path');

async function identifySmallFonts() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 375, height: 667 }, // iPhone SE
  });

  const page = await context.newPage();
  const filePath = path.join(__dirname, '..', 'sales-training/training-reminder.html');

  await page.goto(`file://${filePath}`);
  await page.waitForLoadState('networkidle');

  const smallFonts = await page.evaluate(() => {
    const elements = document.querySelectorAll('*');
    const findings = [];

    for (let el of elements) {
      const style = window.getComputedStyle(el);
      const fontSize = parseFloat(style.fontSize);
      const text = el.textContent.trim();

      // Only check visible text elements
      if (text.length > 0 && fontSize < 14 && style.display !== 'none') {
        // Get a unique identifier
        let identifier = el.tagName.toLowerCase();
        if (el.className) identifier += '.' + el.className.split(' ')[0];
        if (el.id) identifier += '#' + el.id;

        findings.push({
          element: identifier,
          fontSize: Math.round(fontSize * 10) / 10,
          text: text.substring(0, 80),
          fontFamily: style.fontFamily,
          purpose: el.className.includes('classification') ? 'classification' :
                   el.className.includes('footer') || el.closest('a[href*="unsubscribe"]') ? 'footer' :
                   style.textTransform === 'uppercase' && fontSize <= 12 ? 'label' : 'content'
        });
      }
    }

    // Deduplicate similar findings
    const unique = [];
    const seen = new Set();

    for (let f of findings) {
      const key = `${f.element}-${f.fontSize}-${f.purpose}`;
      if (!seen.has(key)) {
        seen.add(key);
        unique.push(f);
      }
    }

    return unique;
  });

  await browser.close();

  console.log('Small Font Elements (< 14px) in training-reminder.html:\n');
  console.log('═══════════════════════════════════════════════════\n');

  const byPurpose = {
    classification: [],
    label: [],
    footer: [],
    content: []
  };

  smallFonts.forEach(item => {
    byPurpose[item.purpose].push(item);
  });

  Object.entries(byPurpose).forEach(([purpose, items]) => {
    if (items.length > 0) {
      console.log(`${purpose.toUpperCase()}:`);
      items.forEach(item => {
        console.log(`  • ${item.fontSize}px - ${item.element}`);
        console.log(`    "${item.text}"`);
      });
      console.log('');
    }
  });

  console.log('═══════════════════════════════════════════════════\n');

  console.log('RECOMMENDATION:');
  console.log('• Classification/Label text (11-12px): Acceptable - intentional design');
  console.log('• Footer text (12px): Acceptable - standard email practice');
  console.log('• Content text (< 14px): Should be increased for better readability');
}

identifySmallFonts().catch(console.error);
