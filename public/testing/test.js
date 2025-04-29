// test Submit the feedback form

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

  await page.click("button[onclick=\"openModal('signin')\"]");

  // Fill out the login form
  await page.type("#emailInput", "test2@test.com");
  await page.type("#passwordInput", "test2@test.com");

  // Submit the login form
  await page.click("#authButton");

  // Force Delay
  await new Promise((r) => setTimeout(r, 1000));

  // Navigate to the Contact Us page
  await page.click("#contact");

  // Fill out the feedback form
  await page.type("#f_email", "test2@test.com");
  await page.type(
    "#feedback",
    "This is an automated test feedback submission."
  );

  // Submit the feedback form
  await page.click("#feedback_form button[type='submit']");

  console.log("Feedback Submission Test Passed!");

  await browser.close();
}

testLogin();
