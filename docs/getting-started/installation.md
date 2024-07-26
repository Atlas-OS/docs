---
title: Installation
description: The official AtlasOS playbook installation guide
icon: material/cogs
---

# :material-package-down: Installing AtlasOS

This guide will walk you through fully reinstalling Windows, installing Atlas on top of it, and completing other necessary steps. A full Windows reinstall is needed to ensure stability during the initial installation of Atlas.

Before continuing, we recommend reviewing our page on [who Atlas is for](../install-faq/who-is-atlas-for.md).

<!-- --8<-- [start:prerequisites] -->
## :material-clipboard-list-outline: Prerequisites

- Meeting the system requirements for [Windows 11](https://www.microsoft.com/windows/windows-11-specifications#table1) or [Windows 10](https://www.microsoft.com/windows/windows-10-specifications#primaryR2)
    - We don't recommend bypassing Windows 11's requirements due to potential incompatibilities with updates and anticheats
- 64-bit CPU ([you can check what you have](https://support.microsoft.com/en-us/windows/which-version-of-windows-operating-system-am-i-running-628bec99-476a-2c13-5296-9dd081cdd808))
    <!-- --8<-- [end:prerequisites] -->
    - If you have an ARM-based CPU, you can only use Atlas with Windows 11
- Knowledge of general Windows troubleshooting and usage

<!-- --8<-- [start:iso] -->
## :material-disc: Download an ISO
<!-- --8<-- [end:iso] -->

Before installing Atlas, you need to reinstall Windows. <!-- --8<-- [start:iso1] -->
To fully reinstall Windows, you need to download your desired Windows version's ISO file, which will be used later in the guide.

<span class="noJs">The buttons below download an ISO directly from Microsoft's servers. It gets the latest version of your desired Windows version for [Intel and AMD CPUs](https://www.tenforums.com/tutorials/132836-check-what-processor-cpu-windows-pc.html#option1).</span> ARM ISOs have to be [built manually](https://uupdump.net/fetchupd.php?arch=arm64&ring=retail&build=22631.1).

<noscript>
<b>The documentation's Windows ISO downloader doesn't show for you due to the documentation being loaded without JavaScript.</b>
See the alternatives below.
</noscript>

!!! question "Which version should I choose?"
    If you meet the official requirements, we **strongly** recommend choosing Windows 11. If not, use Windows 10.

<!--
    This is based upon the Microsoft Software Download Listing website by gravesoft on GitHub.
-->
<!--
    The JavaScript file that is used with this is licensed under GNU Affero General Public License v3.0,
    per the original project. https://github.com/gravesoft/msdl/blob/main/LICENSE
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

:simple-github: **Downloader based upon:** [Microsoft Software Download Listing](https://github.com/gravesoft/msdl)
</center>

<!-- --8<-- [end:iso1] -->

<!-- --8<-- [start:drivers] -->
## :material-ethernet: Network Drivers

By default, Windows may not have your computer's network drivers, meaning your computer would be left without a network connection.

For this reason, we **strongly** recommend that you either:

- Download your network drivers beforehand and store them on external storage
- Have the ability to download and transfer network drivers from another device later

You can find your network driver online by searching for your device/motherboard's official support page or your network device's name in [Device Manager](../assets/images/device-manager-nic.webp) instead. If multiple of the latest network drivers are available on your device, download all of them.
<!-- --8<-- [end:drivers] -->

<!-- --8<-- [start:reinstalling] -->
## :material-microsoft-windows: Reinstalling Windows

!!! question "Which method should I pick?"
    Using a USB drive or not will practically have the same result. We recommend reinstalling Windows using the [**"No USB Drive"**](#__tabbed_2_1) method, although this does not work if you're not on Windows.

=== "No USB Drive (recommended)"

    As a consequence of following this method, your current Windows installation should be automatically moved to a `Windows.old` folder after reinstalling. You can delete this folder after reinstalling Windows, which will be covered later. However, you should still externally backup files before proceeding.

    1. Disconnect any cables providing internet to your computer, such as an ethernet cable. Do not reconnect it until instructed to do so

    1. Right-click the previously downloaded ISO file and select **Open With** -> **File Explorer** to mount it

    1. Open **This PC**, and note down the mounted ISO's drive letter (e.g. `H:`) for the next step. The drive should look similar to ![Windows Setup icon](../assets/images/win-setup.webp){ .twemoji } **CCCOMA_X64FRE_EN-GB_DV9**

    1. Press ++win+r++ to open the Run dialog

    1. Type in your noted-down drive letter, including the colon, and then **without a space**, type `\sources\setup.exe` after it. [**Example:** `H:\sources\setup.exe`](../assets/images/win-setup-run-dialog.webp)

    1. Press ++enter++ on the Run dialog, and accept the User Account Control prompt
        - The message ["Make sure BitLocker Drive Encryption is suspended"](../assets/images/bitlocker-error-setup.jpg) could appear from the Windows Setup when you press ++enter++. Refer to our [BitLocker decrypting instructions](../install-faq/decrypting-using-bitlocker.md) to resolve this, and then attempt this again

    1. Select **No thanks** when prompted for updates and uncheck the box for **I want to help make the Windows installation better**

    1. Click **I don't have a product key**, as Windows will activate automatically later, presuming that Windows is legitimately activated beforehand

    1. Choose your edition of Windows
    <!-- --8<-- [end:reinstalling] -->
        - For Atlas, we strongly recommend and officially support Windows Pro, with **Windows Home not being officially supported.** See our page on [supported Windows versions](../install-faq/windows-version-support.md#which-windows-editions) for more information
    <!-- --8<-- [start:reinstalling1] -->

    1. Accept the license agreement and click **Custom: Install Windows only (advanced)**

    1. Select your Windows drive, click next, click **OK** to the warning about `Windows.old`, and let the installation finish

=== "USB Drive"

    !!! danger "Data loss"
        Following this guide will destroy all data on the USB drive, as well as data on your drives. Remember to use a USB drive with a higher capacity than the Windows ISO file size.

    **This guide presumes you have some experience installing operating systems. If you get stuck and it's possible to use the ["No USB Drive"](#__tabbed_2_1) method, we recommend that instead.**

    1. Download the latest release of [Ventoy :material-download:](https://github.com/ventoy/Ventoy/releases/) and extract it wherever you feel comfortable. Alternatively, get it using a package manager.

    1. Inside the Ventoy folder, run **Ventoy2Disk**

    1. In the opened window, select your USB drive and click **Install**

    1. Copy your downloaded ISO file into the USB drive (labeled Ventoy)

    1. Disconnect any cables providing your computer internet, such as an ethernet cable
        - Do not reconnect to the internet until instructed to

    1. Using the BIOS menu, boot from the USB drive

        ??? failure "'Security Violation' Error"

            ??? tip "Video Demonstration"
                <center>
                    <video src="/assets/videos/enroll-key-vtoy.mp4" controls muted></video>
                    <p>Credit to [Ventoy](https://ventoy.net/doc_secure.html) for the video demonstration.<p>
                </center>
            
            ![vtoy-verification-error-0x1A](../assets/images/vtoy-secure-error.png){ align=right width=200 }

            If you get an error screen saying there was a 'Security Violation,' follow the steps below:

            1\. Press ++enter++ to load **MokManager**

            2\. Press any key to begin key management

            3\. Choose **Enroll Key From Disk**

            4\. Choose `VTOYEFI`
                
            - The controls are arrow keys to move and ++enter++ to select

            5\. Choose `ENROLL_THIS_KEY_IN_MOKMANAGER.cer`

            6\. Choose **Continue**, then **Yes**, and finally **Reboot**
            
            7\. Boot from the USB again, as the issue should be resolved

            ------

            If it is still not working, try 'Hash Enrollment,' as detailed in [Ventoy's guide](https://ventoy.net/doc_secure.html).

    1. At the Ventoy menu, select the Windows ISO using the arrow keys, press ++enter++, click **Boot in normal mode**, and press ++enter++ again

    1. Follow [Microsoft's guide](https://support.microsoft.com/en-us/windows/reinstall-windows-d8369486-3e33-7d9c-dccc-859e2b022fc7#ID0EDBBBBBBBDBD) for a clean installation from step 4 (clicking **Install now**)
    <!-- --8<-- [end:reinstalling1] -->
        - For Atlas, we strongly recommend and officially support Windows Pro, with **Windows Home not being officially supported.** See our page on [supported Windows versions](../install-faq/windows-version-support.md#which-windows-editions) for more information


### :material-cog: Initial setup (OOBE)

After completing this step, you should be on your desktop without an internet connection.

=== "Windows 11"
    ??? info "Written Instructions"
        1. Once the setup starts, select your language and then your keyboard layout.
        1. Press ++shift+f10++ to open the Command Prompt.
        1. Type in `oobe\bypassnro` and press ++enter++. Your computer will restart.
            - This step is not needed when using Ventoy
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
    </center>

## :material-screwdriver: Driver Updates

Drivers are essential software components that enable the OS to communicate with hardware devices. While Windows comes with basic drivers pre-installed, some devices, such as Bluetooth devices, printers, or speakers, likely require additional drivers to function correctly.
On Atlas, there are two options for driver installation:

| :material-update: Installation & Updates from Windows Update | :material-download: Manual Installation & Updates |
| --------------------------------------- | ------------------------------------ |
| :material-check-all: Easiest if you don't know how to get drivers | :material-check-all: Potentially less system resource usage |
| :material-check: Best compatibility, especially with OEM apps | :material-check-all: Less potential bloat/annoyances |
| :material-check-all: Latest security & feature updates automatically | :material-check: Full control over your driver versions |
| :material-check: Almost never having to manually get drivers | :material-alert-circle-outline: You will likely need to get drivers for new devices |

**Choose the option you wish to install with and follow the instructions.**

If you don't know, choose 'Driver Installation & Updates from Windows Update.'

=== "Driver Installation & Updates from Windows Update"
    1. Connect your device to the internet

    1. Move on to the next section

=== "Manual Driver Installation"
    Don't connect to the internet yet, follow these steps:

    1. Open **Settings** -> **Windows Update**

    1. Temporarily **Pause Updates** for at least 1 week

    1. Connect your device to the internet
    
    1. Move on to the next section

## :material-wrench-cog-outline: Installing AtlasOS

??? danger "AME Wizard suddenly closing or being deleted?"
    Add AME Wizard as an exclusion or disable **Real-time protection** in the Windows Security settings. This is usually necessary when a new version of AME Wizard is released, which has not been used much yet.

    To read more about this, view our [**AME Wizard Deleted**](../install-faq/ame-wizard-errors/ame-wizard-deleted.md) page.


1. Open Microsoft Edge, search [`atlasos.net`](https://atlasos.net), then download the **Atlas Playbook** and **AME Wizard**

1. Extract both downloads to your desktop

1. If you have chosen [**Manual Driver Installation**](#driver-updates), run `Disable Drivers Installation in Windows Update.reg` from the extracted Atlas Playbook download and restart

1. Open **Settings** and update Windows, including optional updates, until no more updates are available. If paused, un-pause Windows Updates to follow this step
    - If there's an error updating on Windows 10, see our page on [:material-update: Windows Update Errors](../general-faq/windows-update-errors.md#windows-10-error-0x80070643) for a fix, retry updating, and continue with the rest of the installation guide

1. Open the **Microsoft Store** and update all apps that have pending updates

1. Restart after all updates are complete. After restarting, check again for updates repeatedly until there are no more updates that pop up

1. Open `AME Wizard Beta.exe` from the AME Wizard folder
    1. If there is a warning from SmartScreen that AME Wizard is an [unrecognized application](../install-faq/ame-wizard-errors/ame-wizard-deleted.md#why-is-it-being-falsely-flagged), bypass this warning by clicking **More info** and **Run anyway**
    1. Click on **Updates** at the top and make sure AME Wizard is up to date

1. Drag `Atlas Playbook.apbx` from the Atlas Playbook folder into AME Wizard

1. Follow the on-screen instructions from AME Wizard to successfully install AtlasOS

<!-- --8<-- [start:oldinstall] -->
### :material-microsoft-windows-classic: Your old Windows installation

If you reinstalled Windows using the no-USB method, your previous Windows installation should be in `Windows.old`. When you're sure that you've retrieved any valuable data from it, follow these steps:

1. Open **Windows Settings** -> **System** -> **Storage**
1. Click **Temporary files**, and wait for it to scan your files
1. Select **Previous version of Windows**, and then click **Remove files**
<!-- --8<-- [end:oldinstall] -->

## :material-package-variant-closed-plus: Getting your drivers

You're almost finished with setting up Atlas. Before you start setting up software, follow the option you chose earlier to get your drivers:

- **Manual Driver Installation:** If this is you, we recommend seeing [our post-installation driver guide](post-installation/drivers/getting-started.md) to help set up the needed drivers.

- **Driver Installation & Updates from Windows Update:** If this is you, get drivers by manually checking for Windows Updates. To get them automatically, enable [automatic Windows Updates](../getting-started/post-installation/atlas-folder/general-configuration.md#automatic-updates).

## :material-flag-checkered: All done!

If you need any help, you can find links below to a large community of individuals who are dedicated to helping others, as well as a few other areas of the documentation.

We hope you enjoy using AtlasOS! :smile:

- [:simple-discord: Discord server](https://discord.atlasos.net) & [:material-github: GitHub Discussions](https://github.com/Atlas-OS/Atlas/discussions)
- [:material-chat-question: FAQ & Troubleshooting](../install-faq/removed-features.md)
- [:material-cog: Configure your Atlas installation](post-installation/atlas-folder/general-configuration.md)

