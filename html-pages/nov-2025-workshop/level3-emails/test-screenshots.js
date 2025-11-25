const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const baseDir = '/Users/avolve/neothink-day-temp/html-pages/nov-2025-workshop/level3-emails';

  const emails = [
    {
      file: 'email-01-tuesday-morning.html',
      name: 'email-01-tuesday-morning'
    },
    {
      file: 'email-07-final-hour.html',
      name: 'email-07-final-hour'
    }
  ];

  const viewports = [
    { width: 600, height: 800, suffix: 'desktop' },
    { width: 375, height: 667, suffix: 'mobile' }
  ];

  for (const email of emails) {
    const filePath = `file://${path.join(baseDir, email.file)}`;

    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto(filePath);

      // Wait for any images or content to load
      await page.waitForLoadState('networkidle');

      // Take full page screenshot
      const screenshotPath = path.join(baseDir, `screenshot-${email.name}-${viewport.suffix}.png`);
      await page.screenshot({
        path: screenshotPath,
        fullPage: true
      });

      console.log(`✓ Captured: ${email.name} at ${viewport.width}x${viewport.height} (${viewport.suffix})`);
    }
  }

  await browser.close();
  console.log('\n✓ All screenshots captured successfully!');
})();
