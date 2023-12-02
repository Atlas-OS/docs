---
title: Installation
description: The official AtlasOS playbook installation guide
icon: material/cogs
---

# :material-package-down: Installing AtlasOS

!!! danger "Read before continuing"

    AtlasOS complies with the Windows EULA; activation in Windows is not modified. A valid legitimate license is required to install Atlas. 
    
    Before you buy a Windows license, make sure the seller is trusted and the key is legitimate, no matter where you buy it.

    It is recommended to take a look at our [FAQ page](../faq-and-troubleshooting/removed-features.md).

## :material-clipboard-list-outline: Prerequisites

- Meeting the system requirements for [Windows 11](https://www.microsoft.com/en-gb/windows/windows-11-specifications#table1) or [Windows 10](https://www.microsoft.com/en-gb/windows/windows-10-specifications#primaryR2)
    - This excludes a Microsoft account, TPM and Secure Boot
- 64-bit processor ([you can check what you have](https://support.microsoft.com/en-us/windows/which-version-of-windows-operating-system-am-i-running-628bec99-476a-2c13-5296-9dd081cdd808))
    - 64-bit ARM (aarch64) only works on Windows 11
- A stable internet connection

## :material-disc: Download an ISO

An ISO is a virtual disc file, similar to a DVD, that we will use to reinstall Windows following our recommended method.

The downloader integrated into the documentation below generates an ISO download link from Microsoft. It will download the latest version of Windows for Intel and AMD CPUs.

**Based upon:** [Microsoft Software Download Listing](https://github.com/massgravel/msdl)

<!--
    This is based upon the Microsoft Software Download Listing website by massgravel on GitHub.
-->
<!--
    The JavaScript file that is used with this is licensed under GNU Affero General Public License v3.0,
    per the original project. https://github.com/massgravel/msdl/blob/main/LICENSE
-->
<!--
    See the JavaScript: https://raw.githubusercontent.com/Atlas-OS/docs/master/docs/javascripts/msdl.js
-->

??? grey-tip "Alternatives"
    === "Windows Media Creation Tool"
        !!! warning "Windows 11"
            Atlas only supports Windows 10 22H2 and Windows 11 23H2.

            The current Media Creation Tool for Windows 11 only creates 22H2, so the Windows 11 Media Creation Tool currently can't be used for Atlas.

        1. Download the [Windows 10](https://go.microsoft.com/fwlink/?LinkId=691209) Media Creation Tool and open it.
        2. Click the `Accept` button to agree to the Microsoft license terms.
        3. Tick `Create installation media (USB flash drive, DVD, or ISO file) for another PC`, click `Next`, and choose:
            * Language: Desired language
            * Edition: Windows 10
            * Architecture: 64-bit (x64)
        4. Choose `ISO file` option and choose the download location.
        5. After the ISO has completed downloading, click `Finish` to end the installation.

<center class="centerMsdl">
<div class="msdl-button-container">
    <button class="msdl-button" style="margin-right: 2px" onclick="getWindows(2860);">Download Windows 11 x64</button>
    <button class="msdl-button" style="margin-left: 2px" onclick="getWindows(2618);">Download Windows 10 x64</button>
</div>

<div id="msdl-ms-content"></div>

<div id="msdl-please-wait">
    <p>Please wait...</p>
</div>

<div id="msdl-processing-error">
    <p>An error has occurred while processing your request. Try refreshing the page or using an alternative method.</p>
    <p id="msdl-error-code">Error: Unknown</p>
</div>

<div id="msdl-download">
    <p>A download should soon be started, if not, <a id="msdl-download-link" href="about:blank">click here download the ISO</a>.</p>
</div>

<input id="msdl-session-id" type="hidden">
</center>

## :material-download: Preparation

The following steps assume that you have a separate drive to store Atlas' installation files during reinstallation. If you only have one drive, follow the steps in **"Only have one drive to store files?"** below this message, to create a new volume from your single drive.

??? question "Only have one drive to store files?"

    !!! tip
        If you run into any issues with Disk Management, you can alternatively use [Macroit Partition Expert Free Edition](https://macrorit.com/partition-magic-manager/free-edition.html).

    1. Open Disk Management by typing `diskmgmt.msc` into the Run dialog box (++win+r++), and locate your Windows drive.
    2. Right-click on your Windows drive (like `C:`) and click **Shrink Space**
    3. Type `4000` in the amount of space to shrink (in megabytes), which is 4GB
    4. There should now be 'Unallocated' space, right-click :material-arrow-right: 'New Simple Volume'
    5. Go through the wizard, you can keep clicking 'Next'

    After following these steps, you should have a new storage device in your File Explorer. You can now continue with the rest of the steps.

    <h3>:material-harddisk-remove: Deleting the temporary partition later</h3>

    1. Open Disk Management by typing `diskmgmt.msc` into the Run dialog box (++win+r++), and locate your temporary 4GB partition.
    2. Right-click :material-arrow-right: **Delete volume**
    3. Right-click on your Windows drive :material-arrow-right: **Extend volume**
    4. Go through the wizard, you can keep clicking 'Next'

First, create a folder to store the Atlas installation files. Create a folder on your second drive/volume called `AtlasFiles`. We will refer to this as "your folder" in the following steps.

1. Go to the [Atlas downloads](https://atlasos.net/) page and download **AME Wizard** and the **Atlas Playbook**.
2. Download network drivers from your device or motherboard manufacturer's website and save them in your folder. *(This is a precaution in case networking doesn't work during installation.)*
    - We recommend searching for the brand (e.g. Dell) followed by your device model number
        - If you're having trouble, search for your device in [Device Manager](../assets/images/device-manager-nic.png) and download this driver using the internet from the source
3. Extract `AtlasPlaybook_v[version].zip` into your folder
4. Extract `AME Wizard Beta.exe` from the downloaded `AME Wizard Beta.zip` into your folder

**You should now have an `AtlasFiles` folder with all the files you need on your external drive/volume.**

## :material-microsoft-windows: Reinstalling Windows

!!! info "USB Installation"
    If you choose to install from a USB stick, you can skip this section. **Make sure that your `AtlasFiles` folder doesn't get deleted.**

!!! tip "Bypassing Windows 11 Requirements (optional)"
    To bypass Windows 11 requirements, use the `Bypass Windows 11 Requirements.cmd` script in your folder before launching `sources\setup.exe`.

Before proceeding, back up any necessary files to a second drive or cloud platform.

However, your old installation (including user data) will be copied to a `Windows.old` folder in your Windows drive. Use this as a safety measure if you forget to back up important files.

1. Right-click the previously downloaded ISO file and select **Open With** :material-arrow-right: **File Explorer** to mount it.

2. Under **This PC**, find the option for the mounted ISO. Open it, navigate to the `sources` folder, and launch `setup.exe`.
    - For many retail Windows 11 laptops, BitLocker comes pre-installed, encrypting all drives on the machine. The message ["Make sure BitLocker Drive Encryption is suspended"](../assets/images/bitlocker-error-setup.jpg) will appear when you attempt to execute the `setup.exe`. Refer to our [BitLocker decrypting instructions](../faq-and-troubleshooting/common-questions/decryptying-using-bitlocker.md) to resolve this.

3. Select **No thanks** when prompted for updates and uncheck the box for **I want to help make the Windows installation better**.

4. Click **I don't have a product key**, as Windows will activate automatically later (if you're currently activated)

5. Choose your edition of Windows. We strongly recommend and officially support **Windows Pro**. If you do not have a license for it, you can use **Windows Home** *(not recommended)*.

6. Accept the license agreement and click **Custom: Install Windows only (advanced)**

7. Select your Windows drive, click next, click **OK** to the warning about `Windows.old`, and let the installation finish

### :material-cog: Initial setup (OOBE)

!!! danger "Internet connection"

    During the Windows Setup, ensure that **your ethernet cable and Wi-Fi are disconnected**. Do not reconnect them until instructed to do so.

=== "Windows 11"
    ??? info "Written Instructions"
        1. Once the setup starts, press ++shift+f10++ to open the Command Prompt.
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

Drivers are essential software components that enable the operating system (OS) to communicate with hardware devices. While Windows comes with basic drivers pre-installed, some devices, such as Bluetooth devices, printers, or speakers, may require additional drivers to function properly.
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
    Your previous Windows installation will be moved to a `Windows.old` folder on your Windows drive during the new installation. You can copy any necessary files from this folder before deleting it.

    To delete your previous Windows installation, navigate to Windows Settings :material-arrow-right: System :material-arrow-right: Storage. Click 'Temporary files', select 'Previous version of Windows', and then click 'Remove files'.

As mentioned earlier in the [Driver Updates](#driver-updates) section, there are two options for driver installation: Manual and Automatic. Please choose one of these options before proceeding.

1. Copy the `AtlasFiles` from your separate drive or volume to your desktop.
2. If you have chosen **Manual Driver Installation**, run `Disable Drivers Installation in Windows Update.reg` and restart
3. Connect to the internet
    - If you're unable to connect to the internet, [install the network adapter driver](https://www.techspot.com/community/topics/how-to-install-a-driver-when-theres-no-installation-exe-file-to-run.171861/) that you previously downloaded and stored in the AtlasFiles folder.
4. Navigate to **Windows Settings** and update Windows until no more updates or optional updates are available. Also, visit the **Microsoft Store** and update all apps.
    - You will need to restart after completing updates. After restarting, check again for updates repeatedly until there are no more updates that pop up.
5. Activate Windows with a valid legitimate license. This is required to install Atlas. 
6. Open `AtlasFiles` and proceed to run `AME Wizard Beta.exe`
    - Click on **Updates** at the top of the application and check for AME Wizard updates
    - SmartScreen may warn you that AME Wizard is an unrecognized application because it's not digitally signed. You can bypass this warning by clicking **More info** and then **Run anyway**.
7. Drag and drop the `Atlas Playbook.apbx` into AME Wizard from the `AtlasFiles` folder
8. Follow the on-screen instructions to successfully install AtlasOS

!!! danger "AME Wizard closing and being deleted?"
    To prevent Windows Defender from closing and deleting the AME Wizard file, you should add AME Wizard to the exclusion list in the Windows Security settings. This is usually necessary when a new version of AME Wizard is released, which has not been used by many people yet.

    To read more about this, view the [Security Exceptions](https://docs.ameliorated.io/guides/security-exceptions.html) docs from the Ameliorated team.

Once completed, you will see the `Atlas` folder on your desktop. We guide you on how to configure your Atlas installation using this folder at the [Post Installation](post-installation/drivers/getting-started.md) part of the documentation.

### :material-bug-outline: Troubleshooting
!!! tip "Need help?"
    If you encounter any issues during installation, feel free to seek help on our [Forums](https://forum.atlasos.net) or [Discord server](https://discord.atlasos.net). We have a large community of people who care and want to help.

    We recommend viewing our [FAQ](../faq-and-troubleshooting/removed-features.md) before posting in our Discord server or Forum to reduce wait time for possible common, answered questions.
