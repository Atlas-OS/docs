We have made sure that installing AtlasOS is not a hard process. The installation process takes only few minutes longer than when you normally install Windows. Let us start setting up AtlasOS.

!!! warning "AtlasOS is not pre-activated"
    AtlasOS is **not** a pre-activated version of Windows. If you want to run AtlasOS legally, you need to have your own Windows license. Before you buy a Windows 10 (Pro OR Home) license, make sure the seller is trusted and the key is legitimate, no matter where you buy it.

!!! question "Need help?"
    If you have any trouble with the installation, you can ask for help on our [forums](https://forum.atlasos.net/) or our [Discord server](https://discord.com/servers/atlas-795710270000332800). We have a big group of people who care about you and want to help you with your problems.

## :material-clipboard-list-outline: Requirements

* [AME Wizard]()
* [AtlasOS Playbook]()
* A USB drive (minimum 8 GB)
* Bootable USB creator (e.g. [Rufus](https://github.com/pbatard/rufus/releases))
* A backup of all the files you want to keep, either in the cloud or on an external drive.

!!! tip "Download ethernet drivers"
    Some ethernet adapters don't have drivers that come with Windows. This means that if you're using ethernet, you might not be able to connect to the internet after a reinstall. We recommend that you download the drivers for your ethernet adapter ahead of time and put them on your bootable Windows USB.

## :material-disc: Download an ISO

Depending on the bootable USB creator you want to use and how you want to use it, you may need to get your own Windows 10 ISO because the bootable USB creator may not have a built-in download feature.

The following bootable USB creators that we have written about need an ISO file manually:

* Rufus
* Ventoy
* balenaEtcher

=== "UUP dump"

    1. Visit [UUP dump](https://uupdump.net/known.php?q=Windows+10+22H2) and click the latest "Feature update".
        * Make sure the "Feature update" you chose is for the x64 architecture.
    2. Choose the desired language and click ``Next``.
    3. Select the desired edition as the only edition (Professional is recommended), then click ``Next``.
    4. ``Download method`` should be "Download and convert to ISO," and "Include updates (Windows converter only)" should be selected.
    5. Click ``Create download package`` and extract the downloaded file. Run the included shell/bash script.
        * Make sure you run the right ``uup_download`` script for your operating system.
        * The ISO will be downloaded to the same folder as the download script.

=== "Windows 10 Media Creation Tool"

    **TBD**

!!! example "Install with no USB"
    There is a way to install AtlasOS without a USB drive. Learn how to install AtlasOS without a USB drive by reading [this](/Getting started/Other installation methods/Install with no USB/) guide. But if you want to set up and install AtlasOS quickly and easily, we suggest using a USB drive.

## :material-usb-flash-drive-outline: Preparing your USB

This step may be different for you depending on how you made your bootable USB. We have written down how to use the most popular tools for making bootable USB drives. But unfortunately, we cannot promise support and documentation for all bootable USB creators.

!!! danger "Your USB will be wiped"
    Make sure to back up any files on the USB drive you want to keep, because the bootable USB creator will delete them. You cannot get around this. Any files you want to keep, copy them to an external drive or the cloud.

=== "Rufus"

    1. Download and open [Rufus](https://github.com/pbatard/rufus/releases).
    2. Plug in your USB, and then click ``Device`` to select it.
    3. Click the ``SELECT`` button and pick your ISO file.
    4. Click ``START`` and in the "Windows User Experience" wizard, click ``OK``.
    5. Press ``OK`` again and your USB will be erased and turned into a bootable USB.
    6. Extract ``Atlas [version].zip`` and copy the files and folders to the root directory of your USB.
        * If you downloaded drivers for your Ethernet/Wi-Fi adapter, copy them over now.

=== "Rufus + Download ISO"

    1. Download and open [Rufus](https://github.com/pbatard/rufus/releases).
    2. Plug in your USB, and then click ``Device`` to select it.
    3. Open the menu to the right of the ``SELECT`` button, and select ``DOWNLOAD``.
    4. Follow the "Download ISO Image" wizard and use the following options:
        * **Version**: Windows 10
        * **Release**: 22H2
        * **Edition**: Windows 10 Home/Pro/Edu
        * **Language**: Your preferred language
        * **Architecture**: x64
    5. Choose where to save the ISO file.
    6. Click ``START`` and in the "Windows User Experience" wizard, click ``OK``.
    7. Press ``OK`` again and your USB will be erased and turned into a bootable USB.
    8. Extract ``Atlas [version].zip`` and copy the files and folders to the root directory of your USB.

=== "Ventoy"

    1. Download and **unzip** [Ventoy](https://github.com/ventoy/Ventoy/releases) (you want the file ending in ``-windows.zip``).
    2. Open ``Ventoy2Disk.exe`` and pick your USB Drive in the Device menu.
    3. If you are using UEFI, go in ``Option`` on the top left, then in ``Partition style`` select ``GPT``.
    4. If you do not use Secure Boot or use MBR, disable Secure boot support from the Option menu.
    5. Click ``Install`` then click OK in the two warnings, this will turn your USB into a bootable USB.
    6. Extract ``Atlas [version].zip`` and copy the files and folders to the root directory of your USB.
       * If you downloaded drivers for your Ethernet/Wi-Fi adapter, copy them over now.

=== "balenaEtcher"

    1. Download and open [balenaEtcher](https://www.balena.io/etcher#download-etcher).
    2. Click ``Flash from File`` then select the Windows ISO you made.
    3. Click ``Continue`` on the warning about a possible Windows image.
    4. Click ``Select Target`` and tick your USB Drive, then click the blue ``Select 1`` button.
    5. Press ``Flash`` and your USB will be erased and turned into a bootable USB.
    6. Extract ``Atlas [version].zip`` and copy the files and folders to the root directory of your USB.
       * If you downloaded drivers for your Ethernet/Wi-Fi adapter, copy them over now.
        
=== "Windows 10 Media Creation Tool"

    *We're sorry, but the documentation for this isn't written yet. Feel free to provide your contribution at [https://github.com/Atlas-OS/docs](https://github.com/Atlas-OS/docs).*

## :material-power: Booting your USB

1. Disconnect the internet cable from your device.
    - This stops the Windows OOBE from making unauthorized changes that could later hurt the AtlasOS installation process. 
    - If you are connected through Wi-Fi, you can carry on as usual.
2. Copy and paste the following command in the ++windows+r++:
``` bash
shutdown -r -o -f -t 00
```
3. You should now see the boot menu, select your USB.
4. Proceed with the Windows installation as usual.
    * When asked, choose "Windows 10 Pro" as the edition.
5. Finish installing Windows in the OOBE.
    * Select your language and region.
    * If prompted to connect to a network, select ``Skip``.
    * If prompted to use a Microsoft Account, click ``Limited experience`` in the bottom left corner.

## :material-wrench-cog-outline: Post-installation

1. Copy the ``Atlas`` folder to your desktop.
2. Run ``Disable Drivers Installation in Windows Update.reg`` to prevent installing drivers via Windows Update. Restart your computer.
3. After rebooting, you can connect to the internet.
4. Make sure you have the latest updates by running Windows Update. Once you are done, restart your computer and look for any updates you might have missed. 
5. Run ``AME Wizard.exe`` and load the AtlasOS Playbook. Follow the wizard instructions.
    * SmartScreen will notify you that the wizard is unsigned. You can get around this by pressing ``More info`` and ``Run anyway``.

After a few restarts, your system is now optimized and has less junk on it, thanks to AtlasOS. We hope you enjoy the faster speed and more privacy.

### :material-bug-outline: Post-installation troubleshooting

??? question "No internet?"
    If you are using Wi-Fi and cannot connect to the internet, temporarily plug an ethernet cable into your computer to download your drivers. You can also download the right Wi-Fi or ethernet drivers to an external hard drive or USB using something else.
