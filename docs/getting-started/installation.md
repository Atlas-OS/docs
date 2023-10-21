---
title: Installation
subtitle: 'Preferred method'
description: The official AtlasOS playbook installation guide
icon: material/cogs
---

# :material-package-down: Installing AtlasOS

!!! danger "Read before continuing"

    AtlasOS is in compliance with the Windows EULA; activation in Windows is not modified.

    It is recommended to take a look at our [Removed Features](../troubleshooting/removed-features.md) page and [FAQ](../faq.md).

## :material-clipboard-list-outline: Requirements

- Device which meets [Windows 11](https://www.microsoft.com/en-gb/windows/windows-11-specifications#table1) or [Windows 10](https://www.microsoft.com/en-gb/windows/windows-10-specifications#primaryR2) system requirements *(excluding a Microsoft account and TPM)*
- [64-bit](https://support.microsoft.com/en-us/windows/which-version-of-windows-operating-system-am-i-running-628bec99-476a-2c13-5296-9dd081cdd808) Intel or AMD CPU
    - 64-bit ARM (aarch64) isn't supported currently
- A stable internet connection

## :material-disc: Download an ISO

An ISO is a virtual disc file (like a DVD) that we will use to reinstall Windows in our recommended way.

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
        5. After the ISO has completed downloading, click `Finish` to end the installation.

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
    <p>Try refreshing the page or using an alternative method.</p>
</div>

<div id="msdl-download">
    <p>A download should soon be started, if not, <a id="msdl-download-link" href="about:blank">click to download the ISO</a>.</p>
</div>

<input id="msdl-session-id" type="hidden">
</center>

## :material-download: Preparation

For the following steps in our documentation, we assume you have another drive to store Atlas' installation files during reinstallation. If you only have one drive, follow the steps in **"Only have one drive to store files?"** below this message, to create a new volume from your single drive.

??? question "Only have one drive to store files?"

    !!! tip
        If you run into any issues with Disk Management, you can alternatively use [Macroit Partition Expert Free Edition](https://macrorit.com/partition-magic-manager/free-edition.html).

    1. Open Disk Management (`diskmgmt.msc`) and locate your Windows drive
    2. Right-click :material-arrow-right: Shrink volume
    3. Type `4000` in the amount of space to shrink (in megabytes), which is 4GB
    4. There should now be 'Unallocated' space, right-click :material-arrow-right: 'New Simple Volume'
    5. Go through the wizard, you can keep clicking 'Next'

    After following these steps, you should have a new storage device in your File Explorer. You can now continue with the rest

    <h3>:material-harddisk-remove: Deleting the temporary partition later</h3>

    1. Right-click :material-arrow-right: Delete volume
    2. Right-click on your Windows drive :material-arrow-right: Extend volume
    3. Go through the wizard, you can keep clicking 'Next'

Firstly, let's create a folder to contain the installation files for Atlas. Create a folder on your second drive/volume called `AtlasFiles`. We will refer to this as "your folder" in the following steps.

1. Head over to the [Atlas downloads](https://atlasos.net/) and download **AME Wizard** and the **Atlas Playbook**
2. Download network drivers from your device/motherboard manufacturer's website into your folder *(in case networking doesn't work on installation, we can use this)*
    - We recommend searching for the brand (e.g. Dell) followed by your device model number
        - If you're having trouble, search for your device in [Device Manager](../assets/images/device-manager-nic.png) and download this driver using the internet from the original source
3. Extract `Atlas [version].zip` into your folder
4. Extract `AME Wizard Beta.exe` from the downloaded `AME Wizard Beta.zip` into your folder

**You should now have an `AtlasFiles` folder with all the files you need on your external drive/volume.**

## :material-microsoft-windows: Reinstalling Windows

!!! info "USB Installation"
    If you want to install with a USB stick instead, you can do that and skip this section. **Make sure that your `AtlasFiles` folder doesn't get deleted.**

!!! tip "Bypassing Windows 11 Requirements (optional)"
    You can bypass Windows 11 requirements by using the `Bypass Windows 11 Requirements.cmd` script in your folder before launching `sources\setup.exe`.

Before proceeding, back up any necessary files to a second drive or cloud platform.

However, your old installation (including user data) will be copied to a `Windows.old` folder in your Windows drive. Use this as a safety measure if you forget to back up important files.

1. Right-click the ISO file we downloaded previously, clicking **Open With** :material-arrow-right: **File Explorer**. This will mount it to your File Explorer

2. Under **This PC**, there should be an option for this ISO. Open it, then proceed to the `sources` folder, and open `setup.exe`

3. Click **No thanks** to the updates, and uncheck **I want to help make the Windows installation better**

4. Click **I don't have a product key**, as Windows will activate automatically later (if you're currently activated)

5. Select your edition of Windows. We highly recommend and only officially support **Windows Pro**, but if you do not have a license for it, use **Windows Home** *(not recommended)*

6. Accept the license agreement and click **Custom: Install Windows only (advanced)**

7. Select your Windows drive, click next, click **OK** to the warning about `Windows.old`, and let the installation finish

### :material-cog: Initial setup (OOBE)

!!! danger "Internet connection"

    Inside of the Windows Setup, you should have **your ethernet cable and Wi-Fi disconnected**, and you should not reconnect it until further instruction.

=== "Windows 11"
    ??? info "Written Instructions"
        1. Once in the setup, press ++shift+f10++ to open Command Prompt
        2. Type in `oobe\bypassnro` and press ++enter++. Your computer will restart.
        3. Continue through with setup as normal, but make sure to:
            - Not connect to the internet
            - Deny each privacy option

    <center>
        <video src="/assets/videos/win11-OOBE-nointernet.mp4" controls muted width="560" height="420"></video>
    </center>

=== "Windows 10"
    ??? info "Written Instructions"
        TBD

    <center>
        <video src="/assets/videos/win10-OOBE.mp4" controls muted width="560" height="420"></video>
        <p>Credit to [@amitxv](https://github.com/amitxv) for the video demonstration.<p>
    </center>

## :material-screwdriver: Driver Updates

Drivers are essential software components that allow the OS to communicate with hardware devices. While Windows has basic drivers pre-installed, some devices need additional drivers to function. Examples of devices would be bluetooth, printers or speakers.

Automatic driver installation simplifies the process and keeps drivers up-to-date, saving time and effort with the downside of more bloat.

Before continuing, consider which option is right for you and keep it in mind for future steps.

| :material-download: Manual Driver Installation & Updates (recommended) | :material-update: Automatic Driver Installation & Updates |
| ------------------------------------ | --------------------------------------- |
| :material-check-all: Potentially less system resource usage | :material-check-all: Easiest if you don't know how to get drivers |
| :material-check-all: Less potential bloat/annoyances | :material-check: Best compatibility, especially with OEM apps |
| :material-check: Full control over your driver versions | :material-check: Convienient with new getting devices |
| :material-alert-circle-outline: Ability to switch to automatic driver updates later | :material-check: Latest security and feature updates |

## :material-wrench-cog-outline: Installing AtlasOS

!!! tip
    Your old Windows installation will be put into a `Windows.old` folder in your Windows drive on your new installation. You can copy the files that you may need before deleting it

    To delete your previous Windows installation, go to Windows Settings :material-arrow-right: System :material-arrow-right: Storage, then click 'Temporary files', select 'Previous version of Windows' and then click 'Remove files'

We previously mentioned in the [Driver Updates](#driver-updates) section regarding two options: Manual and Automatic Driver Installation. You'll need to choose one before continuing.

1. Copy the `AtlasFiles` from your seperate drive/volume to your desktop
2. If you have chosen **Manual Driver Installation**, run `Disable Drivers Installation in Windows Update.reg` and restart
3. Connect to the internet
    - If you can't connect to the internet, [install the network adapter driver](https://www.techspot.com/community/topics/how-to-install-a-driver-when-theres-no-installation-exe-file-to-run.171861/) you downloaded prior to reinstalling located in `AtlasFiles`
4. Go to **Windows Settings** and update Windows until there's no more updates left. Additionally, go to the **Microsoft Store** and update all the apps there
    - You will need to restart after completing updates. After restarting, check again for updates repeatedly until there are no more updates that pop-up
5. Open `AtlasFiles` and proceed to running `AME Wizard Beta.exe`
    - SmartScreen will notify you that AME Wizard is an unrecognized application, as it is not digitally signed. You can get around this by pressing **More info** and **Run anyway**
6. Drag and drop the `Atlas Playbook.apbx` into AME Wizard from the `AtlasFiles` folder
7. Follow the on-screen instructions to successfully install AtlasOS

!!! danger "AME Wizard closing and being deleted?"
    To prevent Windows Defender from closing and deleting the AME Wizard file, you should add AME Wizard to the exclusion list in the Windows Security settings. This is usually necessary when a new version of AME Wizard is released, which has not been used by many people yet.

    To read more about this, view the [Security Exceptions](https://docs.ameliorated.io/guides/security-exceptions.html) docs from the Ameliorated team.

Once completed, you will see the `Atlas` folder on your desktop. We guide you on how to configure your Atlas installation using this folder at the [Post-Installation](./post-installation/drivers/index.md) part of the documentation.

### :material-bug-outline: Troubleshooting
!!! tip "Need help?"
    If you face any trouble while installing, you can ask for help on our [Forums](https://forum.atlasos.net), or our [Discord server](https://discord.atlasos.net). We have a large community of people who care and want to help.

    We recommend viewing our [FAQ](../faq.md) before posting in our Discord server or Forum to reduce wait time for possible common, answered questions.
