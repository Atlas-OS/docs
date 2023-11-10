---
description: Windows build is not supported by Atlas Playbook.
icon: material/microsoft-windows-classic
---

**It's because your current Windows build is not supported by Atlas.**

To see if your build matches Atlas' requirements, follow this guide.
1. Check your Windows version. You can do this by Pressing ++win+r++ and run `winver`
2. Compare the window that popped up after excuting with the boxes below. If it doesn't match, perform the steps below.

!!! note "Windows 10"
    Version 22H2 (OS Build 19045)

!!! note "Windows 11"
    Version 23H2 (OS Build 22631)

For Windows 10 users, the only way to fix this is to reinstall Windows using the ISO downloaded from the [Installation Guide](../../getting-started/installation.md). 

For Windows 11, follow these instructions:

1. Make sure all Windows updates have been completed, you should not have any Windows updates available after clicking the `Check for Updates` button.

2. Download the offline update for Windows 11 23H2 [here](https://catalog.sf.dl.delivery.mp.microsoft.com/filestreamingservice/files/caa3ff4a-6420-4341-aeae-33b2d7f463be/public/windows11.0-kb5027397-x64_3a9c368e239bb928c32a790cf1663338d2cad472.msu).

!!! info "For ARM64 Users"
    Your update is available [here](https://catalog.sf.dl.delivery.mp.microsoft.com/filestreamingservice/files/c29dd4ea-7f6a-4636-a991-29ba8ae70658/public/windows11.0-kb5027397-arm64_bacb74fba9077a5b7ae2f74a3ebb0b506f9708f3.msu)

3. Open the downloaded file to install the offline update. When prompted, select Yes to install the update. This should take a few moments.

4. Once complete, restart your computer. You should now be on version 23H2.
