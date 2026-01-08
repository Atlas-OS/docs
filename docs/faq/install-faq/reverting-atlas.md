---
title: Reverting Atlas
description: How to uninstall AtlasOS
icon: material/emoticon-cry
---

# :material-emoticon-cry: Reverting Atlas

As Atlas disables the 'Reset this PC' feature due to its unreliability and not being a full reinstall of Windows, some users are unsure how to get back to stock Windows.

This page details how to reinstall from Atlas to stock Windows fully, which uninstalls Atlas.

## :material-handshake: Before uninstalling

If you're on an [outdated version of Atlas](https://github.com/Atlas-OS/Atlas/releases), we unfortunately can't help. Otherwise, we can help you if you're experiencing issues on the latest version. See the below:

- :material-file-search: The documentation you're on currently
- <a onclick="clickKapaAi();" href="javascript:void(0)">
    :material-robot: 'Ask AI' in the corner of this page
  </a>
- [:simple-discord: Our Discord server](https://discord.atlasos.net)
- [:material-github: Atlas' GitHub Discussions](https://github.com/Atlas-OS/Atlas/discussions)

### If you're still having problems...

We're constantly improving Atlas, so although you're uninstalling now, we hope to see your problem solved in the future. :slight_smile:

Please consider reporting your problem on the [Atlas GitHub Issues](https://github.com/Atlas-OS/Atlas/issues) so we can fix it.
Alternatively, give feedback in our GitHub Discussions or Discord, as mentioned earlier.

---

!!! tip "Looking to reinstall/install Atlas?"
    Follow the [Atlas installation guide](../../getting-started/install/before-continuing.md) instead. This page is for reverting Atlas.

## :material-disc: **1.** Download an ISO
<!-- --8<-- [end:iso] -->

<span class="noJs">The buttons below download an ISO directly from Microsoft's servers. They get the latest version of your desired Windows version for [Intel, AMD, and ARM CPUs](https://www.tenforums.com/tutorials/132836-check-what-processor-cpu-windows-pc.html#option1).</span>

<noscript>
<b>The documentation's Windows ISO downloader doesn't show for you due to the documentation being loaded without JavaScript.</b>
See the alternatives below.
</noscript>

!!! question "Which version should I choose?"
    For AMD and Intel CPUs, download the x86_64 (x64) version. For Qualcomm Snapdragon or other supported ARM SoCs, download the ARM64 version.
    
??? grey-tip "Alternatives (x86_64 Only)"

    !!! tip 
        Even though the downloader we use in our docs use Microsoft's servers, you can also download the ISO directly from Microsoft or use the Windows Media Creation Tool.
        
    <div id="official-microsoft-sources"></div>
    === "Official Microsoft Sources"

        ### [Windows 11 :material-download:](https://www.microsoft.com/en-us/software-download/windows11)

        - Click the link above and select **Windows 11 (multi-edition ISO for x64 devices)** in the dropdown, then click **Confirm.**
        - Select your desired language and press confirm.
        - Click **64-bit Download** to begin your download.

    === "Windows Media Creation Tool"

        1. Download the [Windows 11 :material-download:](https://go.microsoft.com/fwlink/?linkid=2156295) Media Creation Tool, then open it
        1. Click the **Accept** button to agree to the Microsoft license terms
        1. Select **Create installation media (USB flash drive, DVD, or ISO file) for another PC**, click **Next**, and choose:
            - **Language:** Your desired language
            - **Edition:** Windows 11
        1. Choose the **ISO file** option, then choose the download location
        1. After the ISO has completed downloading, click **Finish**

<!-- --8<-- [end:iso1] -->
{% include 'msdl.md' %}

<!-- --8<-- [start:drivers] -->
## :material-ethernet: **2.** Network Drivers

By default, Windows may not have your computer's network drivers, meaning after reinstalling, your computer could have no internet connection.

For this reason, we **strongly** recommend that you do one of the following:

- Download your network drivers beforehand and store them on external storage
- Have the ability to download and transfer network drivers from another device later

!!! question "Where do I get my network drivers?"
    !!! info inline ""
        ![](../../assets/images/device-manager-nic.webp)

    You can find your computer's network drivers online by searching for your device or motherboard's official support page. 

    If you can't find it, try searching online for your network device's name in Device Manager instead. 
    
    If multiple of the latest network drivers are available, download them all.
    

    
<!-- --8<-- [end:drivers] -->


## :material-microsoft-windows: **3.** Reinstalling Windows

Before continuing, we **strongly** recommend you back up any valuable data to an external drive or [a cloud service](../../getting-started/install/before-continuing.md).

=== ":material-microsoft: No USB Drive (recommended)"

    <!-- --8<-- [start:windowsOldNotice] -->
    **Only if you have enough free storage**, after finishing the Windows reinstall, `Windows.old` will be at the start of your Windows drive, containing your old data. You can retrieve data from the folder and delete it afterward, which this guide [covers later](#7-your-old-windows-installation).
    <!-- --8<-- [end:windowsOldNotice] -->

    This method only works if you're already on Windows.

    1. Disconnect any cables providing internet to your computer, such as an ethernet cable. Do not reconnect any until instructed to do so

    1. Right-click the previously downloaded ISO file and select **Open With** -> **File Explorer**

    1. Open **This PC** in File Explorer, and remember the ISO's drive letter (e.g. `H`) for the next step. The drive should look similar to ![Windows Setup icon](../../assets/images/win-setup.webp){ .twemoji } **CCCOMA_X64FRE_EN-GB_DV9**

    1. Press ++win+r++ to open the Run dialog

    1. Inside the Run dialog, type in the previously remembered drive letter, and then **without a space**, type `:\sources\setup.exe` after it. [**Example:** `H:\sources\setup.exe`](../../assets/images/win-setup-run-dialog.webp)

    1. Press ++enter++ on the Run dialog, and accept the User Account Control prompt
    - The message ["Make sure BitLocker Drive Encryption is suspended"](../../assets/images/bitlocker-error-setup.jpg) could appear from the Windows Setup when you press ++enter++. Refer to our [BitLocker decrypting instructions](../../faq/install-faq/decrypting-using-bitlocker.md) to resolve this, then retry from step 5 onwards

    1. Select **No thanks** when prompted for updates, then uncheck the box for **I want to help make the Windows installation better**

    1. If prompted, click **I don't have a product key**, as Windows should auto-activate later
        - If Windows doesn't auto-activate, you can enter a key later within Windows

    1. Choose your edition of Windows.
    <!-- --8<-- [end:reinstalling] -->
    
    !!! note "Windows 11 Requirement Error?"
      If you encounter an error stating your PC doesn't meet the requirements, you might need to enable TPM 2.0 in your BIOS/UEFI. See our guide: [:link: Enabling TPM 2.0](../../faq/general-faq/enabling-tpm.md)

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

    1. Restart your computer, boot into your BIOS' boot menu, then select the USB drive

        ??? failure "'Security Violation' Error"

            ??? tip "Video Demonstration"
                <center>
                    <video src="/assets/videos/enroll-key-vtoy.mp4" controls muted></video>
                    <p>Credit to [Ventoy](https://ventoy.net/doc_secure.html) for the video demonstration.<p>
                </center>
            
            ![vtoy-verification-error-0x1A](../../assets/images/vtoy-secure-error.png){ align=right width=200 }

            If you get an error screen saying there was a 'Security Violation,' follow the steps below:

            1\. Press ++enter++ to load **MokManager**

            2\. Press any key to begin key management

            3\. Choose **Enroll Key From Disk**
                
            - The controls are arrow keys to move and ++enter++ to select

            4\. Choose `VTOYEFI`

            5\. Choose `ENROLL_THIS_KEY_IN_MOKMANAGER.cer`

            6\. Choose **Continue**, then **Yes**, and finally **Reboot**
            
            7\. Boot from the USB again, as the issue should be resolved

            ------

            If it is still not working, try 'Hash Enrollment,' as detailed in [Ventoy's guide](https://ventoy.net/doc_secure.html).

    1. Once booted into the Ventoy menu, select the Windows ISO using the arrow keys, press ++enter++, click **Boot in normal mode**, and press ++enter++ again

    1. **If you're installing Windows 11,** once booted into the Windows Setup, click 'Next' twice, then click 'Previous version of setup' in the bottom left corner of the window

    1. Select your preferred language preferences, click **Next**, then click **Install Now**

    1. If prompted, click **I don't have a product key**, as Windows will activate automatically later (as long as you have previously activated Windows legitimately)

    1. Choose your Windows edition
    <!-- --8<-- [end:reinstalling1] -->
--8<-- "installation.md:atlasEditions"

    !!! note "Windows 11 Requirement Error?"
        If installing Windows 11 and you encounter an error stating your PC doesn't meet the requirements, you might need to enable TPM 2.0 in your BIOS/UEFI. See our guide: [:link: Enabling TPM 2.0](../../faq/general-faq/enabling-tpm.md)

    <!-- --8<-- [start:reinstalling2] -->

    1. Accept the license agreement and click **Custom: Install Windows only (advanced)**

    1. At the 'Where do you want to install Windows?' screen, choose one of the following:

        === "Keeping data (recommended)"
            !!! note "Previous Windows data"
                <!-- --8<-- [end:reinstalling2] -->
                <!-- --8<-- "installation.md:windowsOldNotice" -->
                <!-- --8<-- [start:reinstalling3] -->
            - Identify the disk partition you want to install Windows to by looking at the total sizes, then select it
            - Click **Next**, then click **OK** to the warning about `Windows.old`

        === "Deleting data on one drive"
            !!! danger "This permanently deletes data!"
                Make sure to follow the instructions carefully to ensure you don't delete the wrong partitions.

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

## :material-cog: **4.** Initial setup (OOBE)

Watch the video and follow step by step.

    <center>
        <video src="/assets/videos/win11-OOBE.mp4" controls muted width="560" height="420"></video>
    </center>

## :material-desktop-classic: **5.** Continue with setup

You should now be at the regular Windows Desktop and back on stock Windows.
