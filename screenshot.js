import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5173/portfolio2/');
  
  // Wait for the window to appear or animations to finish
  await page.waitForTimeout(3000);
  
  await page.screenshot({ path: 'layout_screenshot.png' });
  await browser.close();
})();
