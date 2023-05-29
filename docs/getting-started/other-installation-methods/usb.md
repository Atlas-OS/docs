---
description: The official USB AtlasOS playbook installation guide
icon: material/usb-port
---

# USB Installation Guide

## :material-clipboard-list-outline: Additional requirements

You should also meet the regular [Requirements](/getting-started/installation/#requirements).

* A USB drive (8 GB minimum)
* Bootable USB creator
* A backup of all the files that you want to keep, either in the cloud or on an external drive

## :material-chip: Identify boot mode

To identify your boot mode, you can look it up in your BIOS or check it in Windows.
To check it in Windows, you can use PowerShell, and copy and paste the following (make sure you run PowerShell as an administrator):

```PowerShell
fltmc >$null;if($LASTEXITCODE -ne 0){echo "Not running as admin!"}else{$BootMode = If(bcdedit | Select-String "path.*efi"){"UEFI"}else{"legacy"};echo "Computer is running in $BootMode boot mode."}
```

You will either get ``UEFI`` or ``Legacy``. ``UEFI`` is a newer BIOS mode that is recommended for new machines, and it supports the ``GPT`` partition style. ``Legacy`` is an older BIOS mode, and it supports the ``MBR`` partition style.

!!! info ""
    It is not recommended to run UEFI with MBR or BIOS with GPT as it may cause compatibility and stability issues.
    If you are using a mixed combination, you may want to [convert your partition style](https://learn.microsoft.com/en-us/windows-server/storage/disk-management/change-an-mbr-disk-into-a-gpt-disk) during the installation.

    **Here's how to check with Disk Management:**

    <video controls>
        <source id="mp4" src="/assets/videos/check-gpt-mbr.mp4" type="video/mp4">
    </videos>
	
## :material-usb-flash-drive-outline: Preparing your USB

!!! danger "Your USB will be wiped"
    Make sure to back up any files on the USB drive that you may want to keep, because the bootable USB creator will delete them. You cannot get around this, copy any files you want to keep to an external drive or the cloud.

=== "Ventoy"

    1. Download and unzip [Ventoy](https://github.com/ventoy/Ventoy).
    2. Plug in your USB Stick and open ``Ventoy2Disk.exe``.
    2. Disable ``Secure Boot Support`` in the ``Option`` menu, if you have it disabled in your BIOS and you use ``UEFI``.
    3. Then in the same tab, configure ``Partition Style`` depending on the BIOS Mode:
        - If you are using ``UEFI``, select ``GPT``.
        - If you are using ``Legacy``, select ``MBR``.
    5. Click ``Install`` and then click OK in the two warnings.
    6. Extract ``Atlas [version].zip``, to the root directory of your USB.
        - Move AME Wizard to the ``Atlas`` folder on the USB Stick.
        - If you downloaded drivers for your Ethernet/Wi-Fi adapter, copy them over.
    7. Move the iso onto your USB Stick.

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
        - Additionally, move AME Wizard to the ``Atlas [version]`` folder.
        - If you downloaded drivers for your Ethernet/Wi-Fi adapter, copy them over.

## :material-power: Booting into your USB

1. Disconnect the internet cable from your device and do not connect to the internet during the installation.
    - This stops the Windows OOBE from making unauthorized changes that could later hurt the Atlas installation process.
2. Boot into your USB using Boot Menu/BIOS.
    - If you are using Ventoy, choose the ISO file that you moved to the USB Stick in the program menu.
4. Proceed with the Windows installation as usual.
    - If asked, choose your desired edition (Professional is recommended).
5. Finish installing Windows in the OOBE, and follow the video below:

    <iframe src="https://gcore.jsdelivr.net/gh/amitxv/PC-Tuning@main/media/oobe-windows10+-example.mp4" width="560" height="420" frameborder="0" allowfullscreen></iframe>

You can now follow the [main guide](/getting-started/installation/#install-atlas) to install Atlas. Alternatively, follow the video guide:
<iframe width="930" height="523" src="https://www.youtube.com/embed/GoO36Tj5TGE?t=523" title="Atlas OS — Installation Guide &amp; Overview (Performant Windows!)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
