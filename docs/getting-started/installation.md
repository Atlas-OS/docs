---
title: Installation
subtitle: 'Preferred method'
description: The official AtlasOS playbook installation guide
icon: material/cogs
---

# :material-package-down: Installing AtlasOS

!!! danger "Read before continuing"

    AtlasOS is **NOT** a pre-activated version of Windows, activation in Windows is not modified. Additionally, no Windows ISOs are redistributed.

    It is recommended to take a look at our [Removed Features](../troubleshooting/removed-features.md) page and [FAQ](../faq.md).

## :material-clipboard-list-outline: Requirements

- [Windows 11](https://www.microsoft.com/en-gb/windows/windows-11-specifications#table1) or [Windows 10](https://www.microsoft.com/en-gb/windows/windows-10-specifications#primaryR2) system requirements
    - Excluding a Microsoft account and TPM
- [64-bit](https://support.microsoft.com/en-us/windows/which-version-of-windows-operating-system-am-i-running-628bec99-476a-2c13-5296-9dd081cdd808) Intel or AMD CPU
    - 64-bit ARM (aarch64) isn't supported currently
- A stable internet connection

## :material-disc: Download an ISO

An ISO is a virtual disc file (like a DVD), and to reinstall Windows in our recommended way, you will need a Windows ISO.

The downloader integrated into the documentation below generates an ISO download link from Microsoft. It will download the latest version of Windows for Intel and AMD CPUs.

**Based upon:** [Microsoft Software Download Listing](https://github.com/massgravel/msdl)

??? grey-tip "Alternatives"
    === "Windows Media Creation Tool"
        This is the supported method to download Windows 10 and 11 by Microsoft.

        1. Download the [Windows 10](https://go.microsoft.com/fwlink/?LinkId=691209) or [Windows 11](https://go.microsoft.com/fwlink/?linkid=2156295) Media Creation Tool and open it.
        2. Click the `Accept` button to agree to the Microsoft license terms.
        3. Tick `Create installation media (USB flash drive, DVD, or ISO file) for another PC`, click `Next`, and choose:
            * Language: Desired language
            * Edition: Windows 10 or 11
            * Architecture: 64-bit (x64)
        4. Choose `ISO file` option and choose the download location.
        5. After the ISO completed downloading, click `Finish` to end the installation.

<!--
    This is based upon the Microsoft Software Download Listing website by massgravel on GitHub.
-->
<!--
    The JavaScript file that is used with this is licensed under GNU Affero General Public License v3.0,
    in accordance with the original project. https://github.com/massgravel/msdl/blob/main/LICENSE
-->
<!--
    See the JavaScript: https://raw.githubusercontent.com/Atlas-OS/docs/master/docs/javascripts/msdl.js
-->

<center class="centerMsdl">
<button class="win-dl" onclick="getWindows(2616);">Download Windows 11 x86_64</button> <button class="win-dl" onclick="getWindows(2618);">Download Windows 10 x86_64</button>

<div id="msdl-ms-content"></div>

<div id="msdl-please-wait">
    <p>Please wait...</p>
</div>

<div id="msdl-processing-error">
    <p>An error has occurred while processing your request.</p>
    <p>Try refreshing the page, or using an alternative method.</p>
</div>

<div id="msdl-download">
    <p>A download should soon be started, if not, <a id="msdl-download-link" href="about:blank">click to download the ISO</a>.</p>
</div>

<input id="msdl-session-id" type="hidden">
</center>

## :material-download: Preparation

??? question "If you have no seperate storage..."

    !!! tip
        If you run into any issues with Disk Management, you can alternatively use [Macroit Partition Expert Free Edition](https://macrorit.com/partition-magic-manager/free-edition.html).

    1. Open Disk Management (`diskmgmt.msc`) and locate your `C:` drive
    2. Right click :material-arrow-right: Shrink volume
    3. Type `4000` in the amount of space to shrink (in megabytes), which is 4GB
    4. There should now be 'Unallocated' space, right click :material-arrow-right: New Simple Volume
    5. Go through the wizard, you can simply keep clicking 'Next'

    You should now have a drive that you can use for copying the Atlas files to in File Explorer.

    <h3>:material-harddisk-remove: Deleting the temporary partition later</h3>

    1. Right click :material-arrow-right: Delete volume
    2. Right click on your `C:` drive :material-arrow-right: Extend volume
    3. Go through the wizard, you can simply keep clicking 'Next'

Once you have [all of the downloads for Atlas from the requirements](#requirements), you will need to have them on your new installation of Windows for use offline. Only your system drive will be wiped by reinstalling.

Firstly, make a folder to contain each downloaded file called **Atlas** on another drive. Each file you download from the steps below should be put into there.

1. Head over to the [Atlas downloads](https://atlasos.net/downloads) and download **AME Wizard** and the **Atlas Playbook**
2. Download network drivers from your device/motherboard manufacturer's website into your folder
    - You can use this later if your internet is not working on the initial boot
    - You should search for the brand (e.g. Dell) and model number
    - If you can't find it, find your network card in [Device Manager](../../assets/images/device-manager-nic.png) and search for that instead
3. Extract `Atlas [version].zip` into your folder
4. Extract `AME Wizard.exe` from the downloaded `AME Wizard Beta.zip` into your folder

**You should now have an Atlas folder with all the files you need on your external drive.**

## :material-screwdriver: Driver Updates

Before continuing, consider which option is right for you and keep it in mind for future steps.

| :material-download: Manual Driver Installation & Updates (recommended) | :material-update: Automatic Driver Installation & Updates |
| ------------------------------------ | --------------------------------------- |
| :material-check-all: Potentially less system resource usage | :material-check-all: Easiest if you don't know how to get drivers |
| :material-check-all: Less potential bloat/annoyances | :material-check: Best compatibility, especially with OEM apps |
| :material-check: Full control over your driver versions | :material-check: Convienient with new getting devices |
| :material-alert-circle-outline: Ability to switch to automatic driver updates later | :material-check: Latest security and feature updates

## :material-microsoft-windows: Reinstalling Windows

!!! info "Offline installation"
    If you want to disable automatic driver installation, you must install Windows without an internet connection. We recommend to do so to reduce unwanted programs and unnecessary drivers.

!!! tip "Bypassing Windows 11 Requirements"
    You can bypass the Windows 11 requirements by using the `Bypass Windows 11 Requirements.cmd` script before launching `sources\setup.exe`.
    
    This doesn't work for other methods of installation.

Before proceeding, it is recommended to do backups of files that you may need. Although your old installation (including user data) will be placed a `Windows.old` folder in your `C:` drive in your new installation, there will always be a small risk of something going wrong.

1. Double click your downloaded ISO to mount it, which mounts the ISO drive in File Explorer. If it opens up in a program like WinRAR or 7-Zip, right click the ISO, click 'Open With' then open it with File Explorer.

2. Go to 'This PC', then go into the Windows ISO, go into `sources`, and open `setup.exe`.

3. Click 'No thanks' to the updates, and uncheck 'I want to help make the Windows installation better'.

4. Click 'I don't have a product key', as Windows will activate later.

5. Select your edition of Windows, we highly recommend and only officially support Windows Pro, but if you do not have a license for it, use Windows Home.

6. Accept the license agreement, click 'Custom: Install Windows only (advanced)' to completely wipe your current installation of Windows and replace it with the new one.

7. Find your `C:` drive, click next, click 'OK' to the warning about `Windows.old`, and let the installation finish.

### :material-cog: Initial setup (OOBE)

1. Follow the respective video:

    === "Windows 11 (manual driver install)"
        ??? info "Written Instructions"
            1. Disconnect your ethernet (if you use it) before booting into the setup
            2. Once in the setup, press ++shift+f10++ to open Command Prompt
            3. Type in `oobe\bypassnro` and press ++enter++. Your computer will restart.
            4. Continue through with setup as normal, but make sure to:
                - Not connect to the internet
                - Deny each privacy option

        <center>
            <video src="/assets/videos/win11-OOBE-nointernet.mp4" controls muted width="560" height="420"></video>
        </center>

    === "Windows 11 (automatic driver install)"
        ??? info "Written Instructions"
            1. Continue with the Windows Setup until you get to '**How would you like to set up this device?**'
            2. Select '**Set up for work or school**'
            3. Once at the Microsoft sign in page, click '**Sign-in options**' and then '**Domain join**'
            4. Continue with setup, and deny each privacy option

        <center>
            <video src="/assets/videos/win11-OOBE.mp4" controls muted width="560" height="420"></video>
        </center>

    === "Windows 10"
        ??? info "Written Instructions"
            1. Disconnect your ethernet (if you use it) before booting into the setup
            2. Once in the setup, press ++shift+f10++ to open Command Prompt
            3. Type in `oobe\bypassnro` and press ++enter++. Your computer will restart.
            4. Continue through with setup as normal, but make sure to:
                - Not connect to the internet
                - Deny each privacy option

        <center>
            <video src="/assets/videos/win10-OOBE.mp4" controls muted width="560" height="420"></video>
            <p>Credit to [@amitxv](https://github.com/amitxv) for the video demonstration.<p>
        </center>

2. Go to Windows Settings and update Windows until there's no more updates left. Additionally, go to the Microsoft Store and update all the apps there.

3. Once inside Windows, your old Windows installation will be put into a `Windows.old` folder in your `C:` drive on your new installation. You can copy the files that you need from it before deleting it.

4. To delete your previous Windows installation, goto Settings :material-arrow-right: System :material-arrow-right: Storage, then click 'Temporary files', select 'Previous version of Windows' and then click 'Remove files'.

## :material-wrench-cog-outline: Install Atlas

1. Place the `Atlas` folder from your external drive (like a USB). If you previously made a temporary partition, you can delete it [here](#creating-a-temporary-partition).
2. If you chose to install Windows offline, run the `Disable Drivers Installation in Windows Update.reg` to prevent Windows from automatically installing drivers via Windows Update, restart your computer and connect to the internet.
    - Automatic driver updates are commonly a source for bloatware or drivers that you do not need
    - However, it is more convienient and easier to allow Windows to install all of them
    - Only do this if you know how to install drivers
3. After restarting, you can install ethernet drivers, and connect to the internet.
4. Make sure you have the latest updates by running Windows Update. Once you are done, restart your computer and look for any updates you may have missed.
5. Run `AME Wizard.exe` and load the Atlas Playbook, and follow the wizard instructions.
    - SmartScreen will notify you that AME Wizard is an unrecognized application, as it is not digitally signed. You can get around this by pressing `More info` and `Run anyway`.

Once completed, your system will be optimized and have less junk on it, thanks to Atlas, you will enjoy more privacy, and better performance.

!!! info "Next steps"
    After completing the Atlas installation process, continue the [Post-Installation](./post-installation/drivers/index.md) section in our documentation, and then continue to the other sections.

### :material-bug-outline: Troubleshooting
!!! tip "Need help?"
    If you face any trouble while installing, you can ask for help on our [forums](https://forum.atlasos.net), or our [Discord server](https://discord.atlasos.net). We have a big community of people who care and want to help.

Please see our [troubleshooting section](../troubleshooting/removed-features.md) for issues like being stuck on 'Reticulating Splines'.
