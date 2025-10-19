---
title: 2b. Install with ISO
description: Install AtlasOS using the ISO injection method for experienced users
---

## TBD

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
            
            ![vtoy-verification-error-0x1A](../assets/images/vtoy-secure-error.png){ align=right width=200 }

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

<div class="grid cards" markdown>

-   #### Next: **[-> Setting up Atlas](/getting-started/install/setting-up)**

</div>