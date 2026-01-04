---
description: Install AtlasOS using the ISO injection method for experienced users
icon: material/disc-player
---

<!-- --8<-- [start:iso] -->
## :material-disc: **1.** Download an ISO
<!-- --8<-- [end:iso] -->

<!-- --8<-- [start:iso1] -->
You will need to download an ISO before you can inject the playbook.

Choose your desired Windows version's ISO file, which will be used later in the guide.

<span class="noJs">The buttons below download an ISO directly from Microsoft's servers. They get the latest version of your desired Windows version for [Intel, AMD, and ARM CPUs](https://www.tenforums.com/tutorials/132836-check-what-processor-cpu-windows-pc.html#option1).</span>

<noscript>
<b>The documentation's Windows ISO downloader doesn't show for you due to the documentation being loaded without JavaScript.</b>
See the alternatives below.
</noscript>

??? grey-tip "Alternatives"

    !!! tip
        Even though the downloader in our docs uses official Microsoft servers, you can still download the ISO directly from their website or from AME directly.

    === "Official Microsoft Sources"

        ### [Windows 11 :material-download:](https://www.microsoft.com/en-us/software-download/windows11)

        - Click the link above and find **Download Windows 11 Disk Image (ISO) for x64 devices**.
        - Click on the"Select Download" dropdown, choose **Windows 11 (multi-edition ISO)**, and click **Confirm**.
        - Select your desired language and press **Confirm**.
        - Click **64-bit Download** to begin your download.

    === "Windows Media Creation Tool"

        1. Download the [Windows 11 :material-download:](https://go.microsoft.com/fwlink/?linkid=2156295) Media Creation Tool, then open it
        1. Click the **Accept** button to agree to the Microsoft license terms
        1. Select **Create installation media (USB flash drive, DVD, or ISO file) for another PC**, click **Next**, and choose:
            - **Language:** Your desired language
            - **Edition:** Windows 11
        1. Choose the **ISO file** option, then choose the download location
        1. After the ISO has completed downloading, click **Finish**

    === "AME Wizard's ISO dowloader"
        1. Open your web browser, search [`atlasos.net`](https://atlasos.net)
        1. On the website, click 'Get started', then click **-> Already following the guide?** at the bottom of the pop-up, and download the **Atlas        Playbook** and **AME Wizard**
        1. Extract both downloads to your desktop
        1. Open `AME Wizard Beta.exe` from the AME Wizard folder
            1. If there is a warning from SmartScreen that AME Wizard is an [unrecognized application](../faq/ame.md#why-is-ame-being-falsely-flagged), bypass this warning by clicking **More info** and **Run anyway**
            1. Click on **Updates** at the top and make sure AME Wizard is up to date
        1. Click on the **More Options** tab on the left side of the window
        1. Select **Download ISO** and make sure **Windows 11** is selected, then click **OK**.

        This should download a Windows 11 25H2 ISO.

<!-- --8<-- [end:iso1] -->
{% include 'msdl.md' %}

<!-- --8<-- [start:injection] -->

## :material-file-edit: Injecting the playbook

1. Open your web browser, search [`atlasos.net`](https://atlasos.net)
1. On the website, click 'Get started', then click **-> Already following the guide?** at the bottom of the pop-up, and download the **Atlas Playbook** and **AME Wizard**
1. Extract both downloads to your desktop
1. Open `AME Wizard Beta.exe` from the AME Wizard folder
    1. If there is a warning from SmartScreen that AME Wizard is an [unrecognized application](../../faq/install-faq/ame-wizard-errors/ame-wizard-deleted.md), bypass this warning by clicking **More info** and **Run anyway**
1. Click on **Updates** at the top and make sure AME Wizard is up to date
1. Drag the previously downloaded ISO file into AME Wizard
1. Drag `Atlas Playbook.apbx` from your desktop into AME Wizard
2. Select the Windows 11 ISO from the left side 
3. Click on the **Select a playbook to modify** button
4. Make sure AtlasOS is selected, and click **Ok**
5. Click next when you see **AtlasOS Playbook selected**
6. Select all the options you would normally choose when installing AtlasOS playbook
7. At the end, you will be prompted to select which drivers you want to come with the ISO, we recommend keeping **Include additional network drivers** selected
8. Click **Next**. You will be asked to choose an username and a password for the user account - provide them and then click **Next**. _If you do not want a password, leave the box empty_
9. Wait for the injection to finish
<!-- --8<-- [start:drivers] -->

## :material-microsoft-windows: **3.** Reinstalling Windows

Before continuing, we **strongly** recommend you back up any valuable data to an external drive or [a cloud service](before-continuing.md).

=== ":material-microsoft: No USB Drive (recommended)"

    <!-- --8<-- [start:windowsOldNotice] -->
    **Only if you have enough free storage**, after finishing the Windows reinstall, `Windows.old` will be at the start of your Windows drive, containing your old data. You can retrieve data from the folder and delete it afterward, which this guide [covers later](#your-old-windows-installation).
    <!-- --8<-- [end:windowsOldNotice] -->

    This method only works if you're already on Windows.

    1. Disconnect any cables providing internet to your computer, such as an ethernet cable. Do not reconnect any until instructed to do so

    1. Right-click the previously downloaded ISO file and select **Open With** -> **File Explorer**

    1. Open **This PC** in File Explorer, and remember the ISO's drive letter (e.g. `H`) for the next step. The drive should look similar to ![Windows Setup icon](../../assets/images/win-setup.webp){ .twemoji } **CCCOMA_X64FRE_EN-GB_DV9**

    1. Press ++win+r++ to open the Run dialog

    1. Inside the Run dialog, type in the previously remembered drive letter, and then **without a space**, type `:\sources\setup.exe` after it. [**Example:** `H:\sources\setup.exe`](../../assets/images/win-setup-run-dialog.webp)

    1. Press ++enter++ on the Run dialog, and accept the User Account Control prompt
    - The message ["Make sure BitLocker Drive Encryption is suspended"](../../assets/images/win-setup-run-dialog.jpg) could appear from the Windows Setup when you press ++enter++. Refer to our [BitLocker decrypting instructions](../../assets/images/bitlocker-error-setup.jpg) to resolve this, then retry from step 5 onwards

    1. Select **No thanks** when prompted for updates, then uncheck the box for **I want to help make the Windows installation better**

    1. If prompted, click **I don't have a product key**, as Windows should auto-activate later
        - If Windows doesn't auto-activate, you can enter a key later within Windows

    1. Choose your edition of Windows.
        <!-- --8<-- [end:reinstalling] -->
        <!-- --8<-- [start:atlasEditions] -->

        !!! note "Supported Editions"

            - Windows Pro
            - Windows Pro for Workstation
            - Windows Enterprise (Excluding LTSC, IoT LTSC)

            **Windows Home is not Supported.** If the Windows Setup did not give a choice of edition and it installs Windows Home anyway, you can always change Windows edition later by changing your Windows product key once Windows has finished reinstalling, without having to reinstall anything.
        <!-- --8<-- [end:atlasEditions] -->

        <!-- --8<-- [start:reinstalling1] -->

    1. Accept the license agreement and click **Custom: Install Windows only (advanced)**

    1. Select your Windows drive, click **Next**, click **OK** to the warning about `Windows.old`, and let the installation finish

=== ":material-usb-flash-drive: USB Drive"

    This method works on Linux and Windows.

    !!! tip
        Even thought this method works on both Linux and Windows, please note that AME Wizard and ISO Injection only works in Windows.

    1. Download the latest release of [Ventoy :material-download:](https://github.com/ventoy/Ventoy/releases/) and extract it wherever you feel comfortable.
        - Linux users can get it using a package manager

    2. Inside the Ventoy folder, run **Ventoy2Disk**

    3. In the opened window, select your USB drive and click **Install**
        - This will destroy all data on the USB drive!

    4. Copy your downloaded ISO file into the USB drive (labeled Ventoy)

    5. Disconnect any cables providing your computer internet, such as an ethernet cable
        - Do not reconnect to the internet until instructed to

    6. Restart your computer, boot into your BIOS' boot menu, then select the USB drive

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

    7. Once booted into the Ventoy menu, select the Windows ISO using the arrow keys, press ++enter++, click **Boot in normal mode**, and press ++enter++ again

    8. **If you're installing Windows 11,** once booted into the Windows Setup, click 'Next' twice, then click 'Previous version of setup' in the bottom left corner of the window

    9. Select your preferred language preferences, click **Next**, then click **Install Now**

    10. If prompted, click **I don't have a product key**, as Windows will activate automatically later (as long as you have previously activated Windows legitimately)

    11. Choose your Windows edition
    <!-- --8<-- [end:reinstalling1] -->

--8<-- "installation.md:atlasEditions"

    <!-- --8<-- [start:reinstalling2] -->

    1. Accept the license agreement and click **Custom: Install Windows only (advanced)**

    2. At the 'Where do you want to install Windows?' screen, choose one of the following:

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

    3. Wait for Windows to install

<!-- --8<-- [end:reinstalling3] -->

## :material-cog: **4.** Initial setup (OOBE)

This step is different than most Windows 11 installs due to AME's custom OOBE. Simply follow the instructions on screen.

!!! Warning
    If asked to connect to the internet, please do so. AtlasOS requires an internet connection to be properly installed without issues

    After this initial OOBE, your desktop will be similar to regular Windows 11. Please wait for the new user script to run before doing anything.

<div class="grid cards" markdown>

- #### Next: **[-> Setting up Atlas](setting-up.md)**

</div>
