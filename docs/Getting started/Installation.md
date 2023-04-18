We have made sure that installing Atlas is not a hard process. The installation process takes only a few minutes longer than when you normally install Windows. Let us start setting up Atlas.

!!! warning "Atlas is not pre-activated"
    Atlas is **not** a pre-activated version of Windows. If you want to run Atlas legally, you need to have your own Windows license. Before you buy a Windows (Pro OR Home) license, make sure the seller is trusted and the key is legitimate, no matter where you buy it.

!!! question "Need help?"
    If you have any trouble with the installation, you can ask for help on our [forums](https://forum.atlasos.net/) or our [Discord server](https://discord.com/servers/atlas-795710270000332800). We have a big group of people who care and want to help.

## :material-clipboard-list-outline: Requirements

* [AME Wizard](https://atlasos.net/downloads)
* [Atlas Playbook](https://atlasos.net/downloads)
* A USB drive (8 GB minimum)
* Bootable USB creator
* A backup of all the files that you want to keep, either in the cloud or on an external drive.

!!! tip "Download ethernet drivers"
    Some ethernet adapters don't have drivers that come with Windows. This means that if you are using ethernet, you might not be able to connect to the internet after a reinstall. We recommend you to download the drivers for your ethernet adapter ahead of time and put them on your bootable Windows USB.

## Video Guide

<iframe width="930" height="523" src="https://www.youtube.com/embed/GoO36Tj5TGE" title="Atlas OS — Installation Guide &amp; Overview (Performant Windows!)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## :material-disc: Download an ISO

Depending on the bootable USB creator you want to use and how you want to use it, you may need to get your own Windows ISO because the bootable USB creator may not have a built-in download feature.

The following bootable USB creators that we have written about need an ISO file manually:

* Ventoy
* Rufus

=== "Windows Media Creation Tool (Recommended)"

    1. Download [Windows Media Creation Tool](https://go.microsoft.com/fwlink/?LinkId=691209) and open it.
    2. Click the ``Accept`` button to agree to the Microsoft license terms.
    3. Tick ``Create installation media (USB flash drive, DVD, or ISO file) for another PC``, click ``Next``, and choose:
        * Language: Desired language
        * Edition: Windows 10
        * Architecture: 64-bit (x64)
    4. Choose ``ISO file`` option and choose the download location.
    5. After the ISO downloaded, click ``Finish`` to end the installation.

=== "UUP dump"

    1. Visit [UUP dump](https://uupdump.net/known.php?q=Windows+10+22H2) and click the latest ``amd64`` Feature Update. 
    If Feature Update is not available, choose latest Cumulative Update.
    2. Choose the desired language and click ``Next``.
    3. Select the desired edition as the only edition (Professional is recommended), then click ``Next``.
    4. ``Download method`` should be ``Download and convert to ISO``, and ``Include updates (Windows converter only)`` should be ticked only.
    5. Click ``Create download package`` and extract the downloaded archive. Run the ``uup_download_windows.cmd`` file.
        * Make sure that your folder has no spaces between.
        * The ISO will be downloaded to the same folder as the download script.

=== "Other Methods"

    Use the following links in order to download Windows 10 22H2:

    - [MVS Collection](https://isofiles.bd581e55.workers.dev)

    - [Adguard File List](https://files.rg-adguard.net)

    - [Microsoft Software Download Listing](https://ave9858.github.io/msdl)

!!! example "Install with no USB"
    There is a way to install Atlas without a USB drive. After you downloaded the ISO, you can learn how to install Atlas without a USB drive by reading [this](/Getting started/Other installation methods/Install with no USB). But if you want to set up and install Atlas quickly and easily, we suggest using a USB drive.

## Identify BIOS mode

To identify your BIOS Mode you can either check your device's manual, or look it up in your BIOS or check it in Windows.
To check it in Windows, you can use PowerShell, and copy and pasting the following into PowerShell (make sure you run PowerShell as administrator):

```PowerShell
$BootMode = If((bcdedit | Select-String "path.*efi") -eq $null){"Legacy"}else{"UEFI"}; Write-Host "Computer is running in $BootMode boot mode."
```

You will either get ``UEFI`` or ``Legacy``. ``UEFI`` is a newer BIOS mode that is recommended for new machines, and it supports the ``GPT`` partition style. ``Legacy`` is an older BIOS mode, and it supports the ``MBR`` partition style.

!!! info ""
    It is not recommended to run UEFI with MBR or BIOS with GPT as it may cause compatibility and stability issues.
    If you are using a mixed combination, you may want to [convert your parition style](https://learn.microsoft.com/en-us/windows-server/storage/disk-management/change-an-mbr-disk-into-a-gpt-disk) during the installation.

## :material-usb-flash-drive-outline: Preparing your USB

This step may be different for you depending on how you made your bootable USB. We have written down how to use the most popular tools for making bootable USB drives. But unfortunately, we cannot provide support and documentation for all bootable USB creators.

!!! danger "Your USB will be wiped"
    Make sure to back up any files on the USB drive that you may want to keep, because the bootable USB creator will delete them. You cannot get around this, copy any files you want to keep to an external drive or the cloud.

=== "Ventoy"

    1. Download and unzip [Ventoy](https://github.com/ventoy/Ventoy).
    2. Plug in your USB Stick and open ``Ventoy2Disk.exe``.
    2. Disable ``Secure Boot Support`` in the ``Option`` menu, if you have it disabled in BIOS and you use ``UEFI``.
    3. Then in the same tab, configure ``Partition Style`` depending on the BIOS Mode:
        - If you are using ``UEFI``, select ``GPT``.
        - If you are using ``Legacy``, select ``MBR``.
    5. Click ``Install`` and then click OK in the two warnings, this will turn your USB into a bootable USB.
    6. Extract ``Atlas [version].zip``, to the root directory of your USB.
        - Move AME Wizard to the ``Atlas`` folder on the USB Stick.
        - If you downloaded drivers for your Ethernet/Wi-Fi adapter, copy them over.
    7. Move the Windows 10 22H2 iso onto the USB Stick.

=== "Rufus"

    1. Download and open [Rufus](https://github.com/pbatard/rufus).
    2. Plug in your USB Stick.
    3. Click the ``SELECT`` button and pick your ISO file.
    4. Configure ``Partition scheme``
        - If you are using ``UEFI``, select ``GPT``.
        - If you are using ``Legacy``, select``MBR``.
    4. Click ``START`` and in the ``Windows User Experience`` wizard, and then click ``OK``.
    5. Press ``OK`` again and your USB will be erased and turned into a bootable USB.
    6. Extract ``Atlas [version].zip``, to the root directory of your USB.
        - Additionaly, move AME Wizard to the ``Atlas [version]`` folder.
        - If you downloaded drivers for your Ethernet/Wi-Fi adapter, copy them over.

## :material-power: Booting into your USB

1. Disconnect the internet cable from your device and do not connect to the internet during the installation.
    - This stops the Windows OOBE from making unauthorized changes that could later hurt the Atlas installation process.
2. Boot into your USB using Boot Menu/BIOS.
    - If you are using Ventoy, choose the ISO file that you moved to the USB Stick in the program menu.
4. Proceed with the Windows installation as usual.
    - If asked, choose your desired edition (Professional is recommended).
5. Finish installing Windows in the OOBE, and follow the video below:
    - [Windows 10 22H2 OOBE](https://raw.githubusercontent.com/amitxv/PC-Tuning/main/media/oobe-windows10+-example.mp4)

## :material-wrench-cog-outline: Post-Installation

1. Place the ``Atlas`` folder from the USB Stick to the desktop.
2. Run ``Disable Drivers Installation in Windows Update.reg`` to prevent windows from automatically instaling drivers via Windows Update, and restart your computer.
3. After restarting, you can install ethernet drivers, and connect to the internet.
4. Make sure you have the latest updates by running Windows Update. Once you are done, restart your computer and look for any updates you may have missed.
5. Run ``AME Wizard.exe`` and load the Atlas Playbook, and Follow the wizard instructions.
    - SmartScreen will notify you that the wizard is unsigned. You can get around this by pressing ``More info`` and ``Run anyway``.

After a few restarts, your system will be optimized and have less junk on it, thanks to Atlas, you will enjoy more privacy, and faster speed.

!!! info ""
    After completing the Atlas installation process, continue the [Post-Installation - Activate Windows](https://docs.atlasos.net/Getting%20started/Post-Installation/Activate%20Windows) section in our documentation, and then continue to the other sections.

### :material-bug-outline: Troubleshooting

??? question "No internet?"
    If you are using Wi-Fi and cannot connect to the internet, temporarily plug an ethernet cable into your computer to download your drivers. You can also download the right Wi-Fi or ethernet drivers with an external hard drive or USB using something else.
