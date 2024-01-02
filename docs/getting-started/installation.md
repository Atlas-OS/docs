---
title: Installation
description: The official AtlasOS playbook installation guide
icon: material/cogs
---

# :material-package-down: Installing AtlasOS

!!! danger "Read before continuing"

    AtlasOS complies with the Windows EULA; activation in Windows is not modified. To currently install AtlasOS, Windows must be activated beforehand.

    It is recommended to take a look at our page on [who Atlas is for](../faq-and-troubleshooting/who-is-atlas-for.md) before installing.

## :material-clipboard-list-outline: Prerequisites

- Meeting the system requirements for [Windows 11](https://www.microsoft.com/en-gb/windows/windows-11-specifications#table1) or [Windows 10](https://www.microsoft.com/en-gb/windows/windows-10-specifications#primaryR2)
    - For Windows 11, you can bypass the TPM and Secure Boot requirements
    - We recommend choosing Windows 11 if you meet the official requirements
- 64-bit CPU ([you can check what you have](https://support.microsoft.com/en-us/windows/which-version-of-windows-operating-system-am-i-running-628bec99-476a-2c13-5296-9dd081cdd808))
    - If you have an ARM-based CPU, you can only use Atlas with Windows 11
- Knowledge of general Windows troubleshooting and usage

## :material-disc: Download an ISO

Before installing Atlas, you need to reinstall Windows. To fully reinstall Windows, you need to download your desired Windows version's ISO file, which will be used later in the guide.

The buttons below download an ISO directly from Microsoft's servers. It gets the latest version of your desired Windows version for [Intel and AMD CPUs](https://www.tenforums.com/tutorials/132836-check-what-processor-cpu-windows-pc.html#option1). ARM ISOs have to be [built manually](https://uupdump.net/fetchupd.php?arch=arm64&ring=retail&build=22631.1).

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

<center class="centerMsdl">
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

## :material-download: Preparation

The following steps assume that you have a separate drive to store Atlas' installation files during reinstallation. If you only have one drive, follow the steps in **"Only have one drive to store files?"** below this message to create a new partition on your single drive for Atlas' files.

??? question "Only have one drive to store files?"

    !!! tip
        If you run into any issues with Disk Management, you can alternatively use [Macroit Partition Expert Free Edition](https://macrorit.com/partition-magic-manager/free-edition.html).

    1. Open Disk Management by typing `diskmgmt.msc` into the Run dialog box (++win+r++), and locate your Windows drive.
    1. Right-click on your Windows drive (like `C:`) and click **Shrink Space**
    1. Type `4000` in the amount of space to shrink (in megabytes), which is 4GB
    1. There should now be 'Unallocated' space, right-click :material-arrow-right: 'New Simple Volume'
    1. Go through the wizard, you can keep clicking 'Next'

    After following these steps, you should have a new storage device in your File Explorer. You can now continue with the rest of the steps.

    <h3>:material-harddisk-remove: Deleting the temporary partition later</h3>

    1. Open Disk Management by typing `diskmgmt.msc` into the Run dialog box (++win+r++), and locate your temporary 4GB partition.
    1. Right-click :material-arrow-right: **Delete volume**
    1. Right-click on your Windows drive :material-arrow-right: **Extend volume**
    1. Go through the wizard, you can keep clicking 'Next'

First, create a folder to store the Atlas installation files. Create a folder on your second drive/volume called `AtlasFiles`. We will refer to this as "your folder" in the following steps.

1. Go to the [Atlas downloads](https://atlasos.net/) page and download **AME Wizard** and the **Atlas Playbook**
1. Download network drivers from your device or motherboard manufacturer's website and save them in your folder
    - This is a precaution in case your network drivers aren't included in Windows
    - Search for your device or motherboard model, and look for an official driver's download page. If you can't find it, get the name of your network device in [Device Manager](../assets/images/device-manager-nic.webp), and search for the official driver page of your network device instead
1. Extract `AtlasPlaybook_v[version].zip` into your folder
1. Extract `AME Wizard Beta.exe` from the downloaded `AME Wizard Beta.zip` into your folder

**You should now have an `AtlasFiles` folder with all the files you need on your external drive/volume.**

## :material-microsoft-windows: Reinstalling Windows

???+ info "USB Installation"

    The method listed here does not require a USB stick, but [you can still reinstall Windows using one](https://support.microsoft.com/en-us/windows/reinstall-windows-d8369486-3e33-7d9c-dccc-859e2b022fc7#bkmk_clean_install_of_windows_10_using_installation_media). There's practically no differences between each method.

    If you opt to install from a USB stick, you still need your `AtlasFiles` folder, so don't accidentally wipe it.

    <h3>Installing via USB</h3>

    1. Disconnect your ethernet cable
    2. Install Windows using your USB stick
    3. Skip to [**Initial Setup (OOBE)**](#initial-setup-oobe)

??? danger "Bypassing Windows 11 Requirements (optional)"

    To bypass Windows 11 requirements, you can open the `Bypass Windows 11 Requirements.cmd` script in your folder before continuing.
    Before attempting to bypass the requirements, check if you can enable any BIOS settings to meet them first, such as TPM and Secure Boot.

    :simple-windows10: We recommend using Windows 10 instead of bypassing requirements.

Before proceeding, back up any necessary files to an external storage or cloud platform.

However, your current installation (including user data) should be copied to a `Windows.old` folder in your Windows drive on your new install. You can delete this after you have reinstalled it, which will be covered later on.

1. Disconnect any cables providing your computer internet, such as an ethernet cable. Do not reconnect it until instructed to do so

1. Right-click the previously downloaded ISO file and select **Open With** :material-arrow-right: **File Explorer** to mount it

1. Open **This PC**, and note down the drive letter (e.g. `H:`) of the mounted ISO for the next step. The drive should look similar to **CCCOMA_X64FRE_EN-GB_DV9** ![Windows Setup icon](../assets/images/win-setup.webp){ .twemoji }

1. Press ++win+r++ to open the Run dialog

1. Type in your noted-down drive letter including the colon, and then **without a space**, type `\sources\setup.exe` after it. [**Example:** `H:\sources\setup.exe`](../assets/images/win-setup-run-dialog.webp)

1. Press ++enter++ on the Run dialog, and accept the User Account Control prompt
    - For many retail Windows 11 laptops, device encryption is the default. The message ["Make sure BitLocker Drive Encryption is suspended"](../assets/images/bitlocker-error-setup.jpg) could appear from the Windows Setup when you press ++enter++ in the Run dialog. Refer to our [BitLocker decrypting instructions](../faq-and-troubleshooting/common-questions/decryptying-using-bitlocker.md) to resolve this, and then attempt this again


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
        <video src="/assets/videos/win11-OOBE-nointernet.mp4" controls muted width="560" height="420"></video>
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

### :material-microsoft-windows-classic: Your old Windows installation
Your previous Windows installation has been moved to a `Windows.old` folder in your Windows drive. This contains all of your old Windows user data, meaning that you can retrieve any data you may need from it.

When you're certain all data needed has been retrieved, follow these steps to delete it:

1. Open **Windows Settings** :material-arrow-right: **System** :material-arrow-right: **Storage**
1. Click **Temporary files**, and wait for it to scan files
1. Select **Previous version of Windows**, and then click **Remove files**

## :material-screwdriver: Driver Updates

Drivers are essential software components that enable the OS to communicate with hardware devices. While Windows comes with basic drivers pre-installed, some devices, such as Bluetooth devices, printers, or speakers, likely require additional drivers to function properly.
On Atlas, there's two options for driver installation:

| :material-download: Manual Driver Installation & Updates | :material-update: Automatic Driver Installation & Updates |
| ------------------------------------ | --------------------------------------- |
| :material-check-all: Potentially less system resource usage | :material-check-all: Easiest if you don't know how to get drivers |
| :material-check-all: Less potential bloat/annoyances | :material-check: Best compatibility, especially with OEM apps |
| :material-check: Full control over your driver versions | :material-check-all: Latest security & feature updates automatically |
| :material-alert-circle-outline: You will likely need to get drivers for new devices | :material-check: Almost never having to manually get drivers |

Before continuing, consider which option is right for you and keep it in mind for future steps. You can switch between each later [in the Atlas configuration folder](post-installation/atlas-folder/configuration.md#driver-updates), although switching to Manual Driver Installation will not uninstall automatically installed drivers.

## :material-wrench-cog-outline: Installing AtlasOS

1. Copy the AtlasFiles folder from your separate drive or volume to your desktop

1. If you have chosen [**Manual Driver Installation**](#driver-updates), run `Disable Drivers Installation in Windows Update.reg` and restart

1. Connect to the internet. If you're unable to connect to the internet, [install the network adapter driver](https://www.techspot.com/community/topics/how-to-install-a-driver-when-theres-no-installation-exe-file-to-run.171861/) that you previously downloaded and stored in the AtlasFiles folder

1. Navigate to **Windows Settings** and update Windows until no more updates or optional updates are available. Also, visit the **Microsoft Store** and update all apps

1. Restart after updates are complete. After restarting, check again for updates repeatedly until there are no more updates that pop up

1. Open `AtlasFiles` and proceed to run `AME Wizard Beta.exe`
    - Click on **Updates** at the top of the application and check for AME Wizard updates
    - SmartScreen may warn you that AME Wizard is an unrecognized application because it's not digitally signed. You can bypass this warning by clicking **More info** and then **Run anyway**

1. Drag and drop the `Atlas Playbook.apbx` into AME Wizard from the `AtlasFiles` folder

1. Follow the on-screen instructions from AME Wizard to successfully install AtlasOS

!!! danger "AME Wizard closing and/or being deleted?"
    To prevent Windows Defender from closing and deleting AME Wizard, you should add AME Wizard to the exclusion list in the Windows Security settings. This is usually necessary when a new version of AME Wizard is released, which has not been used by many people yet.

    To read more about this, view the [Security Exceptions](https://docs.ameliorated.io/guides/security-exceptions.html) docs from the Ameliorated team.

## :material-robot-happy: Finalizing your installation of AtlasOS

You're almost finished with setting up Atlas. There are a couple more steps before you start setting up software!

- **Manual Driver Installation:** If this is you, go to [our post-installation driver guide](post-installation/drivers/getting-started.md) to help set up needed drivers in our recommended way.

- **Automatic Driver Installation:** If this is you, you do not need to set up drivers - they are installed automatically through Windows Updates.

After you've finished with your drivers, you can optionally [configure your Atlas installation](post-installation/atlas-folder/configuration.md).

If you encounter any issues after installation, view our [**FAQ & Troubleshooting**](../faq-and-troubleshooting/removed-features.md) section. If you're still having issues, feel free to seek help on our [Forums](https://forum.atlasos.net) or [Discord server](https://discord.atlasos.net). We have a large community of people who care and dedicate their spare time to helping others.

With all that out of the way, we hope you enjoy using AtlasOS! :smile:
