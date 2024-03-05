# Manychat Contacts Exporter

## Introduction
This repository contains a JavaScript script designed for use in the browser console to export contact information from Manychat. Manychat charges $50/month for contact export functionalities. This script is a demonstration of how you can manage to export your contacts without subscribing to the premium plan, highlighting the importance of having control over your data.

## Disclaimer
This script is provided for educational purposes only. The use of this script might be against Manychat's Terms of Service. Users are advised to proceed with caution and understand the potential implications of using such a script. The creator of this script is not responsible for any consequences that arise from its use.

## Why This Script?
Manychat charges a premium for exporting contact information, a crucial feature for many businesses and individuals who rely on their contact lists for marketing and communication purposes. This script demonstrates that unless you subscribe to their premium plan, you effectively don't "own" your contacts. It's an important reminder of the value of data ownership and accessibility.

## How to Use
1. Open your Manychat dashboard in your web browser.
2. Navigate to the Contacts or Audience section where your contacts are listed.
3. Open the Developer Console (usually accessible via F12 or right-click -> Inspect -> Console tab).
4. Copy and paste the entire script from the `exporter-script.js` file into the console and press Enter.
5. The script will automatically start collecting contact details displayed on the page, exporting them to a CSV file after every 40 contacts. It will continue to do this, including clicking "Load More" buttons, until all contacts visible on the page have been exported.

## Features
- Auto-clicks on contacts to gather Name, Phone Number, and Email.
- Exports the collected data into a CSV file after every 40 contacts.
- Automatically clicks "Load More" to continue collecting contacts beyond the initial page load.

## Contribution
Contributions are welcome! If you have suggestions for improving this script, feel free to open an issue or submit a pull request.

## Legal Note
This script is intended for educational and demonstration purposes only. Users should ensure they comply with Manychat's Terms of Service before using this script. The use of scraping scripts can lead to limitations or bans on your account, so proceed with caution.

## About Manychat
Manychat is a service that enables businesses to create Facebook Messenger bots for marketing, sales, and support. It's a powerful tool for engaging with your audience but comes with limitations under its free plan, including the ability to export contact data.

## License
[MIT](LICENSE)
