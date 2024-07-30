---
title: Installation
description: The official AtlasOS playbook installation guide
icon: material/cogs
---

# :material-package-down: Installing AtlasOS

This guide will walk you through fully reinstalling Windows, installing Atlas on top of it, and completing other necessary steps. A full Windows reinstall is needed to ensure stability during the initial installation of Atlas.

Before continuing, we recommend reviewing our page to see [who Atlas is for](../install-faq/who-is-atlas-for.md).

<!-- --8<-- [start:style] -->
<style>
    h2 strong, h3 strong {
        color: var(--md-typeset-a-color);
    }
</style>
<!-- --8<-- [end:style] -->

<script>
    var styleSheet = document.createElement("style")
    styleSheet.innerText = '.noJs { display: revert !important }'
    document.head.appendChild(styleSheet)
</script>

## **0.** :material-clipboard-list-outline: Prerequisites

- Meeting the system requirements for [Windows 11](https://www.microsoft.com/windows/windows-11-specifications#table1) or [Windows 10](https://www.microsoft.com/windows/windows-10-specifications#primaryR2)
    - We don't recommend bypassing Windows 11's requirements due to potential problems with updates and game anti-cheats
- 64-bit CPU ([you can check what you have](https://support.microsoft.com/en-us/windows/which-version-of-windows-operating-system-am-i-running-628bec99-476a-2c13-5296-9dd081cdd808))
    - If you have an ARM-based CPU, you can only use Atlas with Windows 11
- Knowledge of general Windows troubleshooting and usage

<!-- --8<-- [start:iso] -->
## **1.** :material-disc: Download an ISO
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

??? grey-tip "Alternatives"
    === "Windows Media Creation Tool"

        1. Download the [Windows 10 :material-download:](https://go.microsoft.com/fwlink/?LinkId=691209) or [Windows 11 :material-download:](https://go.microsoft.com/fwlink/?linkid=2156295) Media Creation Tool, then open it
        1. Click the **Accept** button to agree to the Microsoft license terms
        1. Select **Create installation media (USB flash drive, DVD, or ISO file) for another PC**, click **Next**, and choose:
            - **Language:** Your desired language
            - **Edition:** Windows 10 or 11
            - **Architecture (Windows 10 only):** 64-bit (x64)
        1. Choose the **ISO file** option, then choose the download location
        1. After the ISO has completed downloading, click **Finish**

<!--
    The ISO downloader JavaScript is rewritten from the MSDL website by Gravesoft on GitHub.
    Major credit to them and MSDL's various contributors! :)

    GNU Affero General Public License v3.0 is the license for the MSDL JavaScript included here on the
    Atlas docs, as per the original project: https://github.com/gravesoft/msdl/blob/main/LICENSE
-->

<center class="noJs centerMsdl">
<div class="msdl-button-container">
    <button markdown class="msdl-button" style="margin-right: 2px" onclick="getWindows({{ msdl.win11.pid }});">Download Windows 11 {{ msdl.win11.version }}</button>
    <button markdown class="msdl-button" style="margin-left: 2px" onclick="getWindows({{ msdl.win10.pid }});">Download Windows 10 {{ msdl.win10.version }}</button>
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

:simple-github: **Credit to the** [Microsoft Software Download Listing](https://github.com/gravesoft/msdl) **project**
</center>
<!-- --8<-- [end:iso1] -->

<!-- --8<-- [start:drivers] -->
## **2.** :material-ethernet: Network Drivers

By default, Windows may not have your computer's network drivers, meaning after reinstalling, your computer could have no internet connection.

For this reason, we **strongly** recommend that you do one of the following:

- Download your network drivers beforehand and store them on external storage
- Have the ability to download and transfer network drivers from another device later

!!! question "Where do I get my network drivers?"
    You can find your computer's network drivers online by searching for your device or motherboard's official support page. If you can't find it, try searching online for your network device's name in [Device Manager](../assets/images/device-manager-nic.webp) instead. If multiple of the latest network drivers are available, download them all.
<!-- --8<-- [end:drivers] -->

<!-- --8<-- [start:reinstalling] -->
## **3.** :material-microsoft-windows: Reinstalling Windows

Before continuing, we **strongly** recommend you back up any valuable data to an external drive or [a cloud service](https://mega.io/).

=== ":material-microsoft: No USB Drive (recommended)"

    <!-- --8<-- [start:windowsOldNotice] -->
    **Presuming you have enough free storage**, after finishing the Windows reinstall, `Windows.old` will be at the start of your Windows drive, containing your old data. You can delete this folder afterward, which this guide [covers later](#your-old-windows-installation).
    <!-- --8<-- [end:windowsOldNotice] -->

    This method only works if you're already on Windows.

    1. Disconnect any cables providing internet to your computer, such as an ethernet cable. Do not reconnect any until instructed to do so

    1. Right-click the previously downloaded ISO file and select **Open With** -> **File Explorer**

    1. Open **This PC** in File Explorer, and remember the ISO's drive letter (e.g. `H`) for the next step. The drive should look similar to ![Windows Setup icon](../assets/images/win-setup.webp){ .twemoji } **CCCOMA_X64FRE_EN-GB_DV9**

    1. Press ++win+r++ to open the Run dialog

    1. Inside the Run dialog, type in the previously remembered drive letter, and then **without a space**, type `:\sources\setup.exe` after it. [**Example:** `H:\sources\setup.exe`](../assets/images/win-setup-run-dialog.webp)

    1. Press ++enter++ on the Run dialog, and accept the User Account Control prompt
        - The message ["Make sure BitLocker Drive Encryption is suspended"](../assets/images/bitlocker-error-setup.jpg) could appear from the Windows Setup when you press ++enter++. Refer to our [BitLocker decrypting instructions](../install-faq/decrypting-using-bitlocker.md) to resolve this, then retry from step 5 onwards

    1. Select **No thanks** when prompted for updates, then uncheck the box for **I want to help make the Windows installation better**

    1. If prompted, click **I don't have a product key**, as Windows should auto-activate later
        - If Windows doesn't auto-activate, you can enter a key later within Windows

    1. Choose your edition of Windows
    <!-- --8<-- [end:reinstalling] -->
    <!-- --8<-- [start:atlasEditions] -->
        - [Windows Pro](../install-faq/windows-version-support.md) is recommended. [Windows Home is not officially supported](../install-faq/windows-home.md)
        - If the Windows Setup did not give a choice of edition and it installs Windows Home anyway, you can always change Windows edition later by changing your Windows product key once Windows has finished reinstalling, without having to reinstall Atlas
    <!-- --8<-- [end:atlasEditions] -->
    <!-- --8<-- [start:reinstalling1] -->

    1. Accept the license agreement and click **Custom: Install Windows only (advanced)**

    1. Select your Windows drive, click **Next**, click **OK** to the warning about `Windows.old`, and let the installation finish

=== ":material-usb-flash-drive: USB Drive"

    This method works on Linux and Windows.

    1. Download the latest release of [Ventoy :material-download:](https://github.com/ventoy/Ventoy/releases/) and extract it wherever you feel comfortable.        
        - Linux users can get it using a package manager

    1. Inside the Ventoy folder, run **Ventoy2Disk**

    1. In the opened window, select your USB drive and click **Install**
        - This will destroy all data on the USB drive!

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

    1. At the 'Windows Setup' box, select your preferred language preferences, click **Next**, then click **Install Now**

    1. If prompted, click **I don't have a product key**, as Windows will activate automatically later (as long as you have previously activated Windows legitimately)

    1. Choose your Windows edition
    <!-- --8<-- [end:reinstalling1] -->
--8<-- "installation.md:atlasEditions"
    <!-- --8<-- [start:reinstalling2] -->

    1. Accept the license agreement and click **Custom: Install Windows only (advanced)**

    1. At the 'Where do you want to install Windows?' screen, choose one of the following:

        === "Keeping data (recommended)"
            !!! note "Previous Windows data"
                <!-- --8<-- [end:reinstalling2] -->
            --8<-- "installation.md:windowsOldNotice"
            <!-- --8<-- [start:reinstalling3] -->

            - Identify the disk partition you want to install Windows to by looking at the total sizes, then select it
            - Click **Next**, then click **OK** to the warning about `Windows.old`

        === "Deleting data on one drive"
            !!! danger "This permanently deletes data!"
                Make sure to follow the instructions carefully.

            - Identify the drive number you want to install Windows to
                - You can identify your drives by their total sizes
            - One by one, carefully delete **your drive number's** disk partitions
            - Select the unallocated space of your drive number
            - Click **Next**

        === "Deleting data on all drives"
            !!! danger "This permanently deletes data on all drives!"

            - One by one, delete each disk partition in the window
            - Select the unallocated space of the drive you want to install Windows to
                - You can identify your drives by their total sizes
            - Click **Next**
    
    1. Wait for Windows to install
<!-- --8<-- [end:reinstalling3] -->

### **3.1.** :material-cog: Initial setup (OOBE)

You can either watch the video or use the 'Written Instructions' for this section.

=== "Windows 11"
    ??? info "Written Instructions"
        1. Once the setup starts, select your language and then your keyboard layout
        1. Press ++shift+f10++ to open Command Prompt
        1. Type in `oobe\bypassnro`, press ++enter++, and wait for your computer to restart
            - This step is not necessary if you are using Ventoy
        1. Continue through with setup, but:
            - Do not connect to the internet
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
        - Deny Cortana

    <center>
        <video src="/assets/videos/win10-OOBE.mp4" controls muted width="560" height="420"></video>
    </center>

## **4.** :material-screwdriver: Driver Updates

Drivers are essential software components that enable the OS to communicate with hardware devices. While Windows has fundamental drivers, some devices may need external drivers to function correctly.
On Atlas, there are two options for external drivers:

| :material-update: Installation & Updates from Windows Update | :material-download: Manual Installation & Updates |
| --------------------------------------- | ------------------------------------ |
| :material-check-all: Easiest if you don't know how to get drivers | :material-check-all: Potentially less system resource usage |
| :material-check: Best compatibility, especially with OEM apps | :material-check-all: Less potentially unwanted applications |
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

    1. Temporarily **Pause Updates** for at least one week

    1. Connect your device to the internet
    
    1. Move on to the next section

## **5.** :material-wrench-cog-outline: Installing AtlasOS

??? danger "AME Wizard suddenly closing or being deleted?"
    Especially when a new version of AME Wizard is released, you might need to add AME Wizard as an exclusion or turn off **Real-time protection** in Windows Security. 

    To read more about this, view our [**AME Wizard Deleted**](../install-faq/ame-wizard-errors/ame-wizard-deleted.md) page.

1. Open Microsoft Edge, search [`atlasos.net`](https://atlasos.net), then download the **Atlas Playbook** and **AME Wizard**

1. Extract both downloads to your desktop

1. If you have chosen [**Manual Driver Installation**](#driver-updates), run `Disable Drivers Installation in Windows Update.reg` from the extracted Atlas Playbook download and restart

1. Open **Settings** and update Windows, including optional updates, until no more updates are available. If paused, click **Resume Updates** to follow this step
    - If there's an error updating on Windows 10, see our page on [:material-update: Windows Update Errors](../general-faq/windows-update-errors.md#windows-10-error-0x80070643) for a fix, retry updating, and continue with the rest of the installation guide

1. Open the **Microsoft Store** and update all apps
    - There might be a prompt to update the Microsoft Store first

1. Restart after all updates are complete. After restarting, check again for updates repeatedly until there are no more available updates

1. Open `AME Wizard Beta.exe` from the AME Wizard folder
    1. If there is a warning from SmartScreen that AME Wizard is an [unrecognized application](../install-faq/ame-wizard-errors/ame-wizard-deleted.md#why-is-it-being-falsely-flagged), bypass this warning by clicking **More info** and **Run anyway**
    1. Click on **Updates** at the top and make sure AME Wizard is up to date

1. Drag `Atlas Playbook.apbx` from the Atlas Playbook folder into AME Wizard

1. Follow the on-screen instructions from AME Wizard to install the Atlas Playbook

### **5.1.** :material-microsoft-windows-classic: Your old Windows installation
<!-- --8<-- [start:oldinstall] -->

If you previously followed steps that mentioned a `Windows.old` folder, you can find your previous Windows data at the start of your Windows drive in `Windows.old`. 

When you're sure that you've retrieved any valuable data from it, follow these steps:

1. Open **Windows Settings** -> **System** -> **Storage**
1. Click **Temporary files**, and wait for it to scan your files
1. Select **Previous version of Windows**, and then click **Remove files**
<!-- --8<-- [end:oldinstall] -->

## **6.** :material-package-variant-closed-plus: Getting your drivers

You've almost finished setting up Atlas!

- **Manual Driver Installation:** If you previously chose this, we recommend seeing [our post-installation driver guide](post-installation/drivers/getting-started.md) to help set up the needed drivers.

- **Driver Installation & Updates from Windows Update:** If you previously chose this, get drivers by manually checking for Windows Updates. To get them automatically, enable [automatic Windows Updates](../getting-started/post-installation/atlas-folder/general-configuration.md#automatic-updates).

## **7.** :material-flag-checkered: All done!

If you need any help, you can find links below to a large community of individuals who are dedicated to helping others, as well as a few other areas of the documentation.

We hope you enjoy using AtlasOS! :smile:

- [:simple-discord: Discord server](https://discord.atlasos.net) & [:material-github: GitHub Discussions](https://github.com/Atlas-OS/Atlas/discussions)
- [:material-chat-question: FAQ & Troubleshooting](../install-faq/removed-features.md)
- [:material-cog: Configure your Atlas installation](post-installation/atlas-folder/general-configuration.md)

