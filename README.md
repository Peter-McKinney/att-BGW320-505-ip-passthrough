# Att BGW320-505 IP Passthrough

A puppeteer script to set IP Passthrough on the Att BGW320-505 modem. When ATT updates the modem or the modem is restarted, the IP Passthrough settings are removed. This script will add the IP Passthrough settings back.

# Configuration

You will want to setup some environment variables: 

- DEFAULT_GATEWAY: the address to your router.
- ATT_HEADLESS: true or false. If you want to run this in a headless browser or not. Lkely true.
- ATT_PASSWORD: your modem admin password for sign in.
- ATT_PASSTHROUGH_MAC: the mac address of the device that you should passthrough to.
