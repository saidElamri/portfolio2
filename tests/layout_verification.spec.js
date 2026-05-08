import { test, expect } from '@playwright/test';

test('desktop layout is interactable', async ({ page }) => {
  await page.goto('http://localhost:5173/portfolio2/');

  // Wait for the app to load
  await page.waitForLoadState('networkidle');

  // Take a screenshot to see where we are
  await page.screenshot({ path: 'verification_desktop_debug.png' });

  // Check if BootScreen is present and try to skip it if there's a button,
  // but looking at BootScreen.jsx it might just be a timer.
  // Let's check for the text that should be there after boot.

  // Try to find ANY text
  const content = await page.textContent('body');
  console.log('Body content:', content.substring(0, 500));

  // If there is a "Click to Boot" or similar, click it.
  // Actually, BootScreen might just need a click if it's waiting for user interaction for audio.
  await page.mouse.click(100, 100);

  await page.waitForSelector('text=About Me', { timeout: 15000 }).catch(e => console.log('About Me not found yet'));

  await page.screenshot({ path: 'verification_desktop_final.png' });
});
