---
title: Installation
description: The official AtlasOS playbook installation guide
icon: material/cogs
---

# :material-package-down: Installing AtlasOS

!!! danger "Read before continuing"

    AtlasOS complies with the Windows EULA; activation in Windows is not modified. To currently install AtlasOS, Windows must be activated beforehand.

    It is recommended to take a look at our page on [what Atlas changes](../faq-and-troubleshooting/removed-features.md) before installing.

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

1. Go to the [Atlas downloads](https://atlasos.net/) page and download **AME Wizard** and the **Atlas Playbook**.
1. Download network drivers from your device or motherboard manufacturer's website and save them in your folder. *(This is a precaution in case networking doesn't work during installation.)*
    - We recommend searching for the brand (e.g. Dell) followed by your device model number
        - If you're having trouble, search for your device in [Device Manager](../assets/images/device-manager-nic.png) and download this driver using the internet from the source
1. Extract `AtlasPlaybook_v[version].zip` into your folder
1. Extract `AME Wizard Beta.exe` from the downloaded `AME Wizard Beta.zip` into your folder

**You should now have an `AtlasFiles` folder with all the files you need on your external drive/volume.**

## :material-microsoft-windows: Reinstalling Windows

!!! info "USB Installation"
    If you choose to install from a USB stick, you can skip this section. **Make sure that your `AtlasFiles` folder doesn't get deleted.**

!!! tip "Bypassing Windows 11 Requirements (optional)"
    To bypass Windows 11 requirements, use the `Bypass Windows 11 Requirements.cmd` script in your folder before launching `sources\setup.exe`.

Before proceeding, back up any necessary files to a second drive or cloud platform.

However, your old installation (including user data) will be copied to a `Windows.old` folder in your Windows drive. Use this as a safety measure if you forget to back up important files.

1. If you use ethernet, unplug your ethernet cable. Do not reconnect it until instructed to do so.

1. Right-click the previously downloaded ISO file and select **Open With** :material-arrow-right: **File Explorer** to mount it.

1. Under **This PC**, find the option for the mounted ISO. Open it, navigate to the `sources` folder, and launch `setup.exe`.
    - For many retail Windows 11 laptops, BitLocker comes pre-installed, encrypting all drives on the machine. The message ["Make sure BitLocker Drive Encryption is suspended"](../assets/images/bitlocker-error-setup.jpg) will appear when you attempt to execute the `setup.exe`. Refer to our [BitLocker decrypting instructions](../faq-and-troubleshooting/common-questions/decryptying-using-bitlocker.md) to resolve this.

1. Select **No thanks** when prompted for updates and uncheck the box for **I want to help make the Windows installation better**.

1. Click **I don't have a product key**, as Windows will activate automatically later (if you're currently activated)

1. Choose your edition of Windows. We strongly recommend and officially support **Windows Pro**. If you do not have a license for it, you can use **Windows Home** *(not recommended)*.

1. Accept the license agreement and click **Custom: Install Windows only (advanced)**

1. Select your Windows drive, click next, click **OK** to the warning about `Windows.old`, and let the installation finish

### :material-cog: Initial setup (OOBE)

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
!!! warning
    If your Windows install is not activated, AME Wizard will require you to Activate your Windows install before continuing. This is required to install Atlas.
    
!!! tip
    Your previous Windows installation will be moved to a `Windows.old` folder on your Windows drive during the new installation. You can copy any necessary files from this folder before deleting it.

    To delete your previous Windows installation, navigate to Windows Settings :material-arrow-right: System :material-arrow-right: Storage. Click 'Temporary files', select 'Previous version of Windows', and then click 'Remove files'.

As mentioned earlier in the [Driver Updates](#driver-updates) section, there are two options for driver installation: Manual and Automatic. Please choose one of these options before proceeding.

1. Copy the `AtlasFiles` from your separate drive or volume to your desktop.

1. If you have chosen **Manual Driver Installation**, run `Disable Drivers Installation in Windows Update.reg` and restart
    - Manual Driver installation requires you to set up your drivers MANUALLY. You will need to consult our post-installation guide after Atlas has been installed.

1. Connect to the internet
    - If you're unable to connect to the internet, [install the network adapter driver](https://www.techspot.com/community/topics/how-to-install-a-driver-when-theres-no-installation-exe-file-to-run.171861/) that you previously downloaded and stored in the AtlasFiles folder.

1. Navigate to **Windows Settings** and update Windows until no more updates or optional updates are available. Also, visit the **Microsoft Store** and update all apps.
    - You will need to restart after completing updates. After restarting, check again for updates repeatedly until there are no more updates that pop up.

1. Open `AtlasFiles` and proceed to run `AME Wizard Beta.exe`
    - Click on **Updates** at the top of the application and check for AME Wizard updates
    - SmartScreen may warn you that AME Wizard is an unrecognized application because it's not digitally signed. You can bypass this warning by clicking **More info** and then **Run anyway**.

1. Drag and drop the `Atlas Playbook.apbx` into AME Wizard from the `AtlasFiles` folder

1. Follow the on-screen instructions to successfully install AtlasOS

!!! danger "AME Wizard closing and being deleted?"
    To prevent Windows Defender from closing and deleting the AME Wizard file, you should add AME Wizard to the exclusion list in the Windows Security settings. This is usually necessary when a new version of AME Wizard is released, which has not been used by many people yet.

    To read more about this, view the [Security Exceptions](https://docs.ameliorated.io/guides/security-exceptions.html) docs from the Ameliorated team.

## :material-robot-happy: Finalizing your installation of AtlasOS

You're almost finished with setting up Atlas. There are a couple more steps before you start setting up software!

- **Manual Driver Installation:** If this is you, go to [our post-installation driver guide](post-installation/drivers/getting-started.md) to help set up needed drivers in our recommended way.

- **Automatic Driver Installation:** If this is you, you do not need to set up drivers - they are installed automatically through Windows Updates.

After you've finished with your drivers, you can optionally [configure your Atlas installation](post-installation/atlas-folder/configuration.md).

If you encounter any issues after installation, feel free to seek help on our [Forums](https://forum.atlasos.net) or [Discord server](https://discord.atlasos.net). We have a large community of people who care and dedicate their spare time to helping others.

We recommend viewing our [FAQ](../faq-and-troubleshooting/removed-features.md) before posting in our Discord server or Forum to reduce wait time for possible common, answered questions.

With all that out of the way, we hope you enjoy using AtlasOS! :material-emoticon-happy:
