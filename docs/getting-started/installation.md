---
description: The official AtlasOS playbook installation guide
icon: material/cogs
---

# Installation

!!! danger "Removed Features"
	Before installing, it is highly recommended to take a look at our [Removed Features](/troubleshooting/removed-features/) page.
	
	It is recommended to wait until v0.3.0 releases to install Atlas for improved compatibility, security and many bug fixes.

!!! info
    Atlas no longer provides ISOs to download, please use this method here to install.

## :material-clipboard-list-outline: Requirements

* [AME Wizard](https://atlasos.net/downloads)
* [Atlas Playbook](https://atlasos.net/downloads)
* [64-bit](https://support.microsoft.com/en-us/windows/which-version-of-windows-operating-system-am-i-running-628bec99-476a-2c13-5296-9dd081cdd808) CPU (x86/32-bit and ARM isn't supported)

!!! warning "Atlas is not pre-activated"
    Atlas-OS is **NOT** a pre-activated version of Windows. You **must** use a valid key to activate Windows before running. Before buying a Windows 10 (Professional or Home) license, be sure the seller is trustworthy and the key is legitimate — no matter where you buy it.

!!! info "Using a USB stick"
    If you are looking for the other method of installation, see [here](/getting-started/other-installation-methods/usb). However, if you want to install Atlas quickly and easily, we suggest you follow this guide instead.

## :material-disc: Download an ISO

An ISO is a virtual disc file, and in this case, it will be the Windows Setup. This is required to reinstall Windows in our recommended way.

The downloader integrated into the documentation generates an ISO download link from Microsoft. It will download the latest version of Windows 10 for Intel and AMD CPUs.

??? tip "Other Methods"
    === "Windows Media Creation Tool"
        This is the supported method to download Windows 10 and 11 by Microsoft.

        1. Download the [Windows 10](https://go.microsoft.com/fwlink/?LinkId=691209) Media Creation Tool and open it.
        2. Click the `Accept` button to agree to the Microsoft license terms.
        3. Tick `Create installation media (USB flash drive, DVD, or ISO file) for another PC`, click `Next`, and choose:
            * Language: Desired language
            * Edition: Windows 10
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
<!-- <button class="win-dl" onclick="getWindows(2616);">Download Windows 11 x86_64</button> --> <button class="win-dl" onclick="getWindows(2618);">Download Windows 10 x86_64</button>

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

## :material-download: Preparing Atlas

!!! tip "Download drivers"
    Some network adapters do not have drivers that come with Windows. This means that on some computers, you might not be able to connect to the internet after installing. We recommend you to download the drivers for your network adapter ahead of time, and put them on your external drive.

Once you have all of the downloads for Atlas from [here](/getting-started/installation/#requirements), you will need to have them on your new installation of Windows for use offline.

You can do this by either using an external drive like a USB stick or a seperate hard drive in your computer, which won't be wiped/formatted. Alternatively, see [here](/getting-started/installation/#creating-a-temporary-partition) if you don't have anything to put files on.

1. Extract `Atlas [version].zip` onto the root directory of your seperate drive, and rename the folder it extracts to `Atlas`
2. Extract `AME Wizard.exe` from the `AME Wizard Beta.zip`, then place it in your newly created `Atlas` folder

You should now have an Atlas folder with all the files you need on the root directory of your external drive.

### :material-harddisk-plus: Creating a temporary partition

!!! info
	This is only for the case that you have **nothing** to put the Atlas files on, which won't be wiped by reinstalling Windows.
	
	If you have already done the [Preparing Atlas](/getting-started/installation/#preparing-atlas) steps, skip to [Reinstalling Windows](/getting-started/installation/#reinstalling-windows).

!!! tip
	If you run into any issues with Disk Management, you can alternatively use [Macroit Partition Expert Free Edition](https://macrorit.com/partition-magic-manager/free-edition.html).

1. Open Disk Management (`diskmgmt.msc`) and locate your `C:` drive
2. Right click :material-arrow-right: Shrink volume
3. Type `4000` in the amount of space to shrink (in megabytes), which is 4GB
4. There should now be 'Unallocated' space, right click :material-arrow-right: New Simple Volume
5. Go through the wizard, you can simply keep clicking 'Next'

#### :material-harddisk-remove: Deleting the temporary partition later

1. Right click :material-arrow-right: Delete volume
2. Right click on your `C:` drive :material-arrow-right: Extend volume
3. Go through the wizard, you can simply keep clicking 'Next'

## :material-microsoft-windows: Reinstalling Windows

Before proceeding, it is recommended to do backups of files that you may need. Although your old installation (including user data) will be placed a `Windows.old` folder in your `C:` drive in your new installation, there will always be a small risk of something going wrong.

You will want to do this offline to ensure that no drivers can install via Windows Update in your new installation, so that the minimal third-party drivers are installed for the lightest experience.

!!! tip "Dual booting"
	Although not covered here, you can also dual boot Windows with this method. You would have to make a seperate partition to dual boot with, then select that instead of `C:` in the Windows Setup.

1. Double click your downloaded ISO to mount it, which adds the ISO as a virtual read-only drive in File Explorer. If it opens up in a program like WinRAR or 7-Zip, right click the ISO, click 'Open With' then open it with File Explorer.

2. Go to your mounted ISO (as a drive letter) in File Explorer, then go into `sources`, and open `setup.exe`.

3. Click 'No thanks' to the updates, as you will update Windows once you have finished reinstalling, and uncheck 'I want to help make the Windows installation better' for privacy reasons.

4. Click 'I don't have a product key', as Windows will activate its self (if you are currently activated) once you have finished installing.

5. Select your edition of Windows, we highly recommend Windows 10 Pro, but if you do not have a key for it, use Windows 10 Home.

6. Accept the license agreement, click 'Custom: Install Windows only (advanced)' to completely wipe your current installation of Windows and replace it with the new one.

7. Find your `C:` drive, click next, click 'OK' to the warning about `Windows.old`, and let the installation do its thing (you might restart a couple of times) and wait.

8. Finish installing Windows and in the OOBE, follow the video attached: <iframe src="https://gcore.jsdelivr.net/gh/amitxv/PC-Tuning@main/media/oobe-windows10+-example.mp4" width="560" height="420" frameborder="0" allowfullscreen></iframe>

9. Once inside Windows, your old Windows installation will be put into a `Windows.old` folder in your `C:` drive on your new installation. You can copy the files that you need from it before deleting it.

10. To delete your previous Windows installation, goto Settings :material-arrow-right: System :material-arrow-right: Storage, then click 'Temporary files', select 'Previous version of Windows' and then click 'Remove files'.

## :material-wrench-cog-outline: Install Atlas

1. Place the `Atlas` folder from your external drive (like a USB). If you previously made a temporary partition, you can delete it [here](/getting-started/installation/#creating-a-temporary-partition).
2. Run `Disable Drivers Installation in Windows Update.reg` to prevent Windows from automatically installing drivers via Windows Update, and restart your computer.
3. After restarting, you can install ethernet drivers, and connect to the internet.
4. Make sure you have the latest updates by running Windows Update. Once you are done, restart your computer and look for any updates you may have missed.
5. You will need to disable `Memory Integrity` due to current incompatibilities with AME Wizard, which you can do by opening `Windows Security`, then click `Device Security` on the left. From here, click `Core isolation details` and then turn off `Memory Integrity`.
6. Run `AME Wizard.exe` and load the Atlas Playbook, and follow the wizard instructions.
    - SmartScreen will notify you that the wizard is unsigned. You can get around this by pressing `More info` and `Run anyway`.
    - You may have to activate Windows to install Atlas. Get a supported key for Home/Pro, depending on what you installed and activate in Windows Settings.
7. After Atlas has fully installed, run the `Fix-Auto-Cleaner.bat` script in the `Atlas` folder.
	- This will fix various issues with v0.2, which will be fixed in v0.3.0. See the ['Auto Cleaner issues'](https://docs.atlasos.net/troubleshooting/common-issues/auto-cleaner/) page for more information.

Once completed, your system will be optimized and have less junk on it, thanks to Atlas, you will enjoy more privacy, and better performance.

!!! info ""
    After completing the Atlas installation process, continue the [Post-Installation](/getting-started/post-installation/drivers/) section in our documentation, and then continue to the other sections.

### :material-bug-outline: Troubleshooting
!!! tip "Need help?"
    If you face any trouble while installing, you can ask for help on our [forums](https://forum.atlasos.net), or our [Discord server](https://discord.atlasos.net). We have a big community of people who care and want to help.

Please see our [troubleshooting section](/troubleshooting/removed-features/) for issues like being stuck on 'Reticulating Splines'.
