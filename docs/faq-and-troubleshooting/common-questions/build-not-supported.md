---
description: How to fix Windows build not supported error?
icon: material/restore-alert
---

# How to fix Windows build not supported error?

**At this time, we only support Windows 10 22H2 and Windows 11 23H2.**

You can check what version of Windows you currently have by doing the following steps:

1. Open the Settings App.

2. Enter the menu named System, scroll down and enter the About menu.

3. Under Windows Specifications, you will find your Version (ie: 23H2).

If you are not on the correct Windows version, you would need to check for any Windows updates you still need to complete.

# I am on Windows 11 and I have no updates?

**Users who did not download Windows 11 from our [Installation Section](../../getting-started/installation.md#material-disc-download-an-iso) may have encountered this error.**

If you are on Windows 11, have no pending updates and continue to see this error, you might be stuck on version 22H2. Some users have reported issues that they are not able to receive the 23H2 update.

To fix this, follow these instructions:

1. Make sure all Windows updates have been completed, you should not have any Windows updates available after clicking the Check for Updates button.

2. Download the offline update for Windows 11 23H2 [here](https://catalog.sf.dl.delivery.mp.microsoft.com/filestreamingservice/files/caa3ff4a-6420-4341-aeae-33b2d7f463be/public/windows11.0-kb5027397-x64_3a9c368e239bb928c32a790cf1663338d2cad472.msu).

!!! info "For ARM64 Users"
    Your update is available [here](https://catalog.sf.dl.delivery.mp.microsoft.com/filestreamingservice/files/c29dd4ea-7f6a-4636-a991-29ba8ae70658/public/windows11.0-kb5027397-arm64_bacb74fba9077a5b7ae2f74a3ebb0b506f9708f3.msu)

3. Open the downloaded file to install the offline update. When prompted, select Yes to install the update. This should take a few moments.

4. Once complete, restart your computer. You should now be on version 23H2.
