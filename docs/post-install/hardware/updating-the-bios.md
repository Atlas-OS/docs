---
title: Updating the BIOS
description: Guiding you on how to update your BIOS
icon: material/chip
---

# :material-chip: How to Update the BIOS

Updating the BIOS can benefit everyone as it can provide additional hardware support, security fixes, more configuration, and improve overall performance and stability.

If you have an outdated BIOS version, you can even be missing settings such as [Resizable BAR](./resizable-bar.md) which is crucial to enable supporting systems to improve performance.

## :material-clipboard-list-outline: Prerequisites

- A USB stick, preferably smaller than 32GB
    - If your USB stick is larger than 32GB, you will need to do an extra step.
- Up to an hour for the process

## :material-transfer-up: How to Upgrade your BIOS

!!! info "Read before continuing"
    All current settings will likely be reset on a BIOS upgrade. It's also likely for profiles to be cleared, and any exported profiles to only be compatible with the BIOS version they were exported on. If you know you need any BIOS settings, note them down before continuing.

    Also, each motherboard manufacturer has a unique website layout and release process. This guide provides general instructions. If you encounter difficulties, consider searching for a guide tailored to your specific manufacturer.

### :material-vector-selection: Checking your Motherboard Model
1. [Download HWiNFO](https://www.hwinfo.com/), open it, select **Sensors Only**, and then **Start**.
1. Under the **Motherboard** section, we can see the **Motherboard** and **BIOS Date**. We will need these for finding and downloading your updated BIOS.
    1. **Example Motherboard:** *MSI MPG B550 GAMING CARBON WIFI*
    1. **Example BIOS Date:** *10/12/2023*

### :material-download: Downloading the Latest BIOS Version
1. Search online for your **Motherboard** followed by **Support** to find the support page for your motherboard.
    1. Example search query: *MSI MPG B550 GAMING CARBON WIFI Support*
    1. Be careful with the motherboard naming. Some users mistakenly download the Wi-Fi version of the motherboard when their board doesn't support Wi-Fi, or vice versa.
1. On the support page, look for a section titled **Drivers & Downloads** or something similar. Here, you'll find the **BIOS** download.
1. Compare the **Release Date** of the available BIOS versions with the result from **HWiNFO**. You should update your BIOS to the most recent release.
    1. **Note:** Manufacturers may stop releasing updates for older motherboards. If this is the case, ensure your motherboard is running the latest available version.
    1. If you're on the latest version, you can stop here and look out for future BIOS updates.

### :material-usb-flash-drive-outline: Preparing the USB Stick
1. Download the latest BIOS version and **extract the zipped folder**.
1. Open the extracted folder and follow any included instructions.
    1. Some manufacturers provide an executable file that renames the .cap file used for the BIOS update. If such a file is present, follow the provided instructions.
1. Format your **USB stick** to **FAT32**. Plug in the USB, open **File Explorer**, find the USB stick under **This PC**, right-click it, and select format.
    1. Remember to back up any files on the USB stick, as they will be erased during formatting.
    1. Many motherboards require the USB stick to be formatted to FAT32. If you don't have this option, use the [FAT32Format GUI tool](https://web.archive.org/web/20150331215614/http:/www.ridgecrop.demon.co.uk/guiformat-x64.Exe). Select the correct drive (your USB), leave the allocation size at its default setting, and click format.
1. Once your USB stick is formatted to FAT32, transfer the .cap file or the update file for your motherboard onto the USB stick.

### :material-monitor-shimmer: Flashing the BIOS
1. To boot into the BIOS, press the **BIOS Key** as your PC powers on.
    1. The ++del++ key is commonly used to access the BIOS, but it's best to look up the specific key for your motherboard.
1. Locate the **Flash Tool** in the BIOS. Make sure you're in the **Advanced Mode**, not the **Easy Mode**.
    1. For MSI, this setting is on the main page and is named **M-Flash**.
    1. For ASUS, this setting is in the **Advanced Mode** under the **Tools Category** and is named **ASUS EZ Flash 3 Utility**.
    1. If you can't find the flash tool, try searching online for your manufacturer's BIOS settings.
1. Once you're on the flash page, select the file on your USB stick and proceed with flashing the BIOS with the new firmware.
1. After the update is complete, access the BIOS again and **Restore Defaults** to apply any default settings that may have changed during the update.
1. Remember, updating the BIOS resets your settings. You'll need to re-enable **XMP/DOCP** for Intel or AMD motherboards, respectively, and [**Resizable BAR** if your hardware supports it](./resizable-bar.md).
    1. Failing to re-enable **XMP/DOCP** may result in decreased performance.
