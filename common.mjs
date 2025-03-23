import * as puppeteer from "puppeteer";

async function login(page) {
  await page.waitForNetworkIdle();

  await page.type('input[name="password"]', process.env.ATT_PASSWORD);
  await page.click('input[type="submit"]');
}

async function launchGatewayPage() {
  const browser = await puppeteer.launch({
    headless: process.env.ATT_HEADLESS === "true",
    args: ["--no-sandbox"],
  });

  const page = await browser.newPage();

  await page.goto(process.env.DEFAULT_GATEWAY, {
    waitUntil: "networkidle2",
  });

  return { browser, browserPage: page };
}

export { login, launchGatewayPage };
