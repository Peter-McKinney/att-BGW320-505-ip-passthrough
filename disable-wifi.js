import { login, launchGatewayPage } from "./common.mjs";

let page;

(async () => {
  const { browser, browserPage } = await launchGatewayPage();

  page = browserPage;

  await clickOnHomeNetwork();
  await clickOnWifi();
  await login(page);
  await clickOnAdvancedOptions();

  await turnOffWl80211();
  await turnOffWl80211_5();

  await clickSave();

  await browser.close();
})();

async function clickOnHomeNetwork() {
  await page.waitForNetworkIdle();
  await page.click("a.topnav:nth-child(3)");
}

async function clickOnWifi() {
  await page.waitForNetworkIdle();
  await page.click("a.secondary-link:nth-child(4)");
}

async function clickOnAdvancedOptions() {
  await page.waitForNetworkIdle();
  await page.click("div.col1:nth-child(6) > a:nth-child(1)");
}

async function turnOffWl80211() {
  await page.waitForNetworkIdle();
  await page.select('select[name="wl80211on"]', "off");
  await page.screenshot({ path: "wl80211.png" });
}

async function turnOffWl80211_5() {
  await page.waitForNetworkIdle();
  page.focus('select[name="wl80211on_5"]');
  await page.select('select[name="wl80211on_5"]', "off");

  await page.screenshot({ path: "wl80211_5.png" });
}

async function clickSave() {
  await page.waitForNetworkIdle();
  await page.click("input.smallbtn:nth-child(1)");
  await page.screenshot({ path: "wifi-disabled.png" });
}
