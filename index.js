import { launchGatewayPage, login } from "./common.mjs";

let page;

(async () => {
  const { browser, browserPage } = await launchGatewayPage();

  page = browserPage;

  await clickOnFirewallLink();
  await clickOnIpPassthroughLink();

  await login(page);

  await selectIpPassthroughAllocationMode();
  await selectIpPassthroughModeDHCPFixed();
  await selectMacAddress();
  await submitIpPassthrough();

  await page.screenshot({ path: "ip-passthrough-set.png" });

  await browser.close();
})();

async function clickOnFirewallLink() {
  await page.waitForNetworkIdle();
  await page.click("a.topnav:nth-child(5)");
}

async function clickOnIpPassthroughLink() {
  await page.waitForNetworkIdle();
  await page.click("a.secondary-link:nth-child(5)");
}

async function selectIpPassthroughAllocationMode() {
  await page.waitForNetworkIdle();
  await page.select('select[name="allocmode"]', "passthrough");
}

async function selectIpPassthroughModeDHCPFixed() {
  await page.waitForNetworkIdle();
  await page.select('select[name="passmode"]', "dhcps-fixed");
}

async function selectMacAddress() {
  await page.waitForNetworkIdle();
  await page.select(
    'select[name="ippassmaclist"]',
    process.env.ATT_PASSTHROUGH_MAC,
  );
}

async function submitIpPassthrough() {
  await page.waitForNetworkIdle();
  await page.click("input.cssbtn:nth-child(1)");
}
