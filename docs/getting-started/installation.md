---
title: Installation
description: The official AtlasOS playbook installation guide
icon: material/cogs
---

# :material-package-down: Installing AtlasOS

!!! danger "Read before continuing"

    AtlasOS complies with the Windows EULA; activation in Windows is not modified. To install AtlasOS currently, Windows must be activated beforehand.

    It is recommended to take a look at our page on [who Atlas is for](../faq-and-troubleshooting/who-is-atlas-for.md) before installing.

## :material-clipboard-list-outline: Prerequisites

- Meeting the system requirements for [Windows 11](https://www.microsoft.com/en-gb/windows/windows-11-specifications#table1) or [Windows 10](https://www.microsoft.com/en-gb/windows/windows-10-specifications#primaryR2)
    - For Windows 11, you can bypass the TPM and Secure Boot requirements, although it is not recommended
    - We recommend choosing Windows 11 if you meet the official requirements
- 64-bit CPU ([you can check what you have](https://support.microsoft.com/en-us/windows/which-version-of-windows-operating-system-am-i-running-628bec99-476a-2c13-5296-9dd081cdd808))
    - If you have an ARM-based CPU, you can only use Atlas with Windows 11
- Knowledge of general Windows troubleshooting and usage

## :material-disc: Download an ISO

Before installing Atlas, you need to reinstall Windows. To fully reinstall Windows, you need to download your desired Windows version's ISO file, which will be used later in the guide.

<span class="noJs">The buttons below download an ISO directly from Microsoft's servers. It gets the latest version of your desired Windows version for [Intel and AMD CPUs](https://www.tenforums.com/tutorials/132836-check-what-processor-cpu-windows-pc.html#option1).</span> ARM ISOs have to be [built manually](https://uupdump.net/fetchupd.php?arch=arm64&ring=retail&build=22631.1).

<noscript>
<b>The documentation's Windows ISO downloader doesn't show for you due to the documentation being loaded without JavaScript.</b>
See the alternatives below.
</noscript>

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

        1. Download the [Windows 10](https://go.microsoft.com/fwlink/?LinkId=691209) or [Windows 11](https://go.microsoft.com/fwlink/?linkid=2156295) Media Creation Tool and open it
        1. Click the **Accept** button to agree to the Microsoft license terms
        1. Select **Create installation media (USB flash drive, DVD, or ISO file) for another PC**, click **Next**, and choose:
            - **Language:** Desired language
            - **Edition:** Windows 10 or 11
            - **Architecture (Windows 10 only):** 64-bit (x64)
        1. Select the **ISO file** option and choose the download location
        1. After the ISO has completed downloading, click **Finish**

<center class="noJs centerMsdl">
<div class="msdl-button-container">
    <button class="msdl-button" style="margin-right: 2px" onclick="getWindows(2935);">Download Windows 11 64-bit</button>
    <button class="msdl-button" style="margin-left: 2px" onclick="getWindows(2618);">Download Windows 10 64-bit</button>
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

:simple-github: **Downloader based upon:** [Microsoft Software Download Listing](https://github.com/massgravel/msdl)
</center>

<script>
    var styleSheet = document.createElement("style")
    styleSheet.innerText = '.noJs { display: revert !important }'
    document.head.appendChild(styleSheet)
</script>

## :material-ethernet: Networking Drivers

There is a chance that Windows does not include your network interface's driver by default. For this reason, we strongly recommend that you either:

1. Have the ability to download and transfer network drivers from another device later
1. Download your network drivers beforehand and put them on external storage

You can find a download to your network driver by searching for an official driver download page for your device or motherboard model. If you can't find it, get the name of your network device in [Device Manager](../assets/images/device-manager-nic.webp), and search for that instead.

## :material-microsoft-windows: Reinstalling Windows

???+ info "USB Installation (optional)"

    The method listed here **does not** require a USB stick, but [you can still reinstall Windows using one](https://support.microsoft.com/en-us/windows/reinstall-windows-d8369486-3e33-7d9c-dccc-859e2b022fc7#bkmk_clean_install_of_windows_10_using_installation_media) if you prefer to. Using a USB stick or not will practically have the same result.

    <h3>Installing via USB</h3>

    1. Disconnect any cables providing your computer internet, such as an ethernet cable
        - Do not reconnect to the internet until instructed to

    2. Install Windows using your USB stick

    3. Skip to [**Initial Setup (OOBE)**](#initial-setup-oobe)

??? danger "Bypassing Windows 11 Requirements (optional)"

    To bypass Windows 11 requirements, you can open the `Bypass Windows 11 Requirements.cmd` script in your folder before continuing.
    Before attempting to bypass the requirements, check if you can enable any BIOS settings to meet the official requirements first, such as TPM and Secure Boot.

    :simple-windows10: We recommend using Windows 10 instead of bypassing requirements.

Before proceeding, back up any necessary files to an external storage or cloud platform.

However, your current installation (including user data) should be copied to a `Windows.old` folder in your Windows drive on your new install. You can delete this after you have reinstalled it, which will be covered later on.

1. Disconnect any cables providing your computer internet, such as an ethernet cable. Do not reconnect it until instructed to do so

1. Right-click the previously downloaded ISO file and select **Open With** -> **File Explorer** to mount it

1. Open **This PC**, and note down the drive letter (e.g. `H:`) of the mounted ISO for the next step. The drive should look similar to ![Windows Setup icon](../assets/images/win-setup.webp){ .twemoji } **CCCOMA_X64FRE_EN-GB_DV9**

1. Press ++win+r++ to open the Run dialog

1. Type in your noted-down drive letter including the colon, and then **without a space**, type `\sources\setup.exe` after it. [**Example:** `H:\sources\setup.exe`](../assets/images/win-setup-run-dialog.webp)

1. Press ++enter++ on the Run dialog, and accept the User Account Control prompt
    - The message ["Make sure BitLocker Drive Encryption is suspended"](../assets/images/bitlocker-error-setup.jpg) could appear from the Windows Setup when you press ++enter++. Refer to our [BitLocker decrypting instructions](../faq-and-troubleshooting/common-questions/decryptying-using-bitlocker.md) to resolve this, and then attempt this again


1. Select **No thanks** when prompted for updates and uncheck the box for **I want to help make the Windows installation better**

1. Click **I don't have a product key**, as Windows will activate automatically later, presuming that you're legitimately activated beforehand

1. Choose your edition of Windows. We strongly recommend and officially support Windows Pro, with **Windows Home not being officially supported.** See our page on [Windows Editions](../faq-and-troubleshooting/common-questions/windows-editions.md) for more information

1. Accept the license agreement and click **Custom: Install Windows only (advanced)**

1. Select your Windows drive, click next, click **OK** to the warning about `Windows.old`, and let the installation finish

### :material-cog: Initial setup (OOBE)

After completing this step, you should be at the desktop, without an internet connection.

=== "Windows 11"
    ??? info "Written Instructions"
        1. Once the setup starts, press ++shift+f10++ to open the Command Prompt.
        1. Type in `oobe\bypassnro` and press ++enter++. Your computer will restart.
        1. Continue through with setup as normal, but make sure to:
            - Not connect to the internet
            - Deny each option in the **Privacy** section

    <center>
        <video src="/assets/videos/win11-OOBE.mp4" controls muted width="560" height="420"></video>
    </center>

=== "Windows 10"
    ??? info "Written Instructions"
        Go through the setup, but make sure to:

        - Click **I don't have internet** when prompted to connect to the internet
        - Click **Continue with limited setup** or **Domain join** after the 'Internet' page
        - Deny each option in the **Privacy** section
        - Don't accept Cortana

    <center>
        <video src="/assets/videos/win10-OOBE.mp4" controls muted width="560" height="420"></video>
        <p>Credit to [@amitxv](https://github.com/amitxv) for the video demonstration.<p>
    </center>

## :material-screwdriver: Driver Updates

Drivers are essential software components that enable the OS to communicate with hardware devices. While Windows comes with basic drivers pre-installed, some devices, such as Bluetooth devices, printers, or speakers, likely require additional drivers to function properly.
On Atlas, there are two options for driver installation:

| :material-update: Automatic Driver Installation & Updates | :material-download: Manual Driver Installation & Updates |
| --------------------------------------- | ------------------------------------ |
| :material-check-all: Easiest if you don't know how to get drivers | :material-check-all: Potentially less system resource usage |
| :material-check: Best compatibility, especially with OEM apps | :material-check-all: Less potential bloat/annoyances |
| :material-check-all: Latest security & feature updates automatically | :material-check: Full control over your driver versions |
| :material-check: Almost never having to manually get drivers | :material-alert-circle-outline: You will likely need to get drivers for new devices |

**Choose the option you wish to install with and follow the instructions.**

=== "Automatic Driver Installation"
    1. Connect your device to the internet

    1. Move on to the next section

=== "Manual Driver Installation"
    Don't connect to the internet yet, follow these steps:

    1. Open **Settings** -> **Windows Update**

    1. Temporarily **Pause Updates** for at least 1 week

    1. Connect your device to the internet
    
    1. Move on to the next section

## :material-wrench-cog-outline: Installing AtlasOS

1. Using **Microsoft Edge** go to our [Official Website](https://atlasos.net) and download **AME Wizard** and the **Atlas Playbook**

1. Extract both zipped folders to your desktop for ease of use

1. If you have chosen [**Manual Driver Installation**](#driver-updates), run `Disable Drivers Installation in Windows Update.reg` from the **Atlas Playbook folder** and restart

1. Navigate to **Windows Settings** and update Windows until no more updates or optional updates are available

    - If you had chosen **Manual Driver Installation**, you should un-pause Windows Updates to follow this step

1. Open the **Microsoft Store** and update all apps that have pending updates

1. Restart after all updates are complete. After restarting, check again for updates repeatedly until there are no more updates that pop up

1. Open `AME Wizard Beta.exe` from the AME Wizard folder
    - Click on **Updates** at the top of the application and check for AME Wizard updates
    - SmartScreen may warn you that AME Wizard is an unrecognized application because it's not digitally signed. You can bypass this warning by clicking **More info** and then **Run anyway**

1. Drag and drop the `Atlas Playbook.apbx` into AME Wizard from the Atlas Playbook folder

1. Follow the on-screen instructions from AME Wizard to successfully install AtlasOS

!!! danger "AME Wizard closing and/or being deleted?"
    Add AME Wizard as an exclusion in the Windows Security settings, or disable **Real Time Protection**. This is usually necessary when a new version of AME Wizard is released, which has not been used much yet.

    To read more about this, view our [**AME Wizard Deleted**](../faq-and-troubleshooting/common-questions/ame-wizard-deleted.md) page.

### :material-microsoft-windows-classic: Your old Windows installation

If you reinstalled Windows using the method on the documentation, your previous Windows installation has been moved to a `Windows.old` folder in your Windows drive. This contains all of your old Windows user data, meaning that you can retrieve any data you may need from it.

When you're certain all data needed has been retrieved, follow these steps to delete it:

1. Open **Windows Settings** -> **System** -> **Storage**
1. Click **Temporary files**, and wait for it to scan your files
1. Select **Previous version of Windows**, and then click **Remove files**

## :material-robot-happy: Finalizing your installation of AtlasOS

You're almost finished with setting up Atlas. There are a couple more steps before you start setting up software!

- **Manual Driver Installation:** If this is you, go to [our post-installation driver guide](post-installation/drivers/getting-started.md) to help set up needed drivers in our recommended way.

- **Automatic Driver Installation:** If this is you, you do not need to set up drivers - they are installed automatically through Windows Updates.

After you've finished with your drivers, you can optionally [configure your Atlas installation](post-installation/atlas-folder/configuration.md).

If you encounter any issues after installation, view our [**FAQ & Troubleshooting**](../faq-and-troubleshooting/removed-features.md) section. If you're still having issues, feel free to seek help on our [Forums](https://forum.atlasos.net) or [Discord server](https://discord.atlasos.net). We have a large community of people who care and dedicate their spare time to helping others.

With all that out of the way, we hope you enjoy using AtlasOS! :smile:
