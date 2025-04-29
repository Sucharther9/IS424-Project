// test fail case

const puppeteer = require("puppeteer");

async function testLogin() {
  const browser = await puppeteer.launch({
    headless: false, // Show the browser window for testing
    slowMo: 50, // Slow down actions for better visibility
  });

  const page = await browser.newPage();

  // Handle alert dialogs (e.g., "Welcome back!" or feedback confirmation)
  page.on("dialog", async (dialog) => {
    console.log("Dialog message:", dialog.message());
    await dialog.accept();
  });

  // Local testing URL (change to production URL when needed)
  await page.goto("https://alphaphiomega-5bee2.web.app/");

  // Open the navigation menu
 
  await page.click(".navbar-burger");

  // Click the Sign In button

  await page.click('button[onclick="openModal(\'signin\')"]');

  // Fill out the login form
  await page.type("#emailInput", "fail@test.com");
  await page.type("#passwordInput", "fail@test.com");

  // Submit the login form
  await page.click("#authButton");
}

testLogin();
