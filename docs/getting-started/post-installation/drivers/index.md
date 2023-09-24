---
title: Drivers
description: An overview of how to install drivers on an AtlasOS install
icon: material/hammer-screwdriver
---

# Drivers

## :material-emoticon-confused-outline: What drivers do I need?

Only install drivers that are needed for hardware that is currently not working. For instance, GPU Drivers, Audio, Wi-Fi, and Bluetooth.

If you do not know what brands and drivers to get for each component, you can look up your hardware to find out what the drivers are called and then install them.

## :material-cogs: GPU Drivers
We do not recommend installing your graphics drivers via SDIO as they can be heavily debloated. We have included installation guides for popular graphics card brands below:

* [NVIDIA](../drivers/gpu/nvidia.md)
* [AMD](../drivers/gpu/amd.md)
* [Intel](../drivers/gpu/intel.md)

## :material-screwdriver: Snappy Driver Installer Origin

Snappy Driver Installer Origin (SDIO) is a good and free way to find and install the most up-to-date and compatible drivers for your hardware. SDIO will check your system and find any missing or out-of-date drivers that you may need.

1. Visit [their website](https://www.glenn.delahoy.com/snappy-driver-installer-origin) and download the installer under the "Download Application" section.
2. Extract the .zip file and open the ``x64`` file. Follow the steps in the wizard.
    * The x64 build is the only one that works with Atlas.
    * When prompted, select "Download indexes only". Otherwise, you'll download useless drivers.
3. Wait for SDIO to download the indexes.
4. Select drivers to install and press "Install" on the left.
