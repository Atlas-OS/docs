---
title: Drivers
description: An overview of how to install drivers on an AtlasOS install
icon: material/hammer-screwdriver
---

# Drivers

If you have installed AtlasOS through the Manual Driver Installation method, this guide will be your go-to helping hand for setting up your system with all the drivers you may need.


## :material-emoticon-confused-outline: What drivers do I need?

It is important to only install drivers that are necessary for hardware that is currently not functioning. This includes GPU drivers, audio drivers, Wi-Fi drivers, and Bluetooth drivers.

If you are unsure of the brands and drivers required for each component, you can look up your hardware to determine what the specific drivers are called and then install them accordingly.

## :material-cogs: GPU Drivers
We do not recommend installing your graphics drivers via SDIO as they can be heavily debloated. We have included installation guides for popular graphics card brands below:

* [NVIDIA](../drivers/gpu/nvidia.md)
* [AMD](../drivers/gpu/amd.md)
* [Intel](../drivers/gpu/intel.md)

## :material-screwdriver: Snappy Driver Installer Origin

Snappy Driver Installer Origin (SDIO) can help you finding drivers which are compatible with your hardware. SDIO scans your system for missing or outdated drivers and installs the most up-to-date ones for you.

1. Visit [their website](https://www.glenn.delahoy.com/snappy-driver-installer-origin) and download the installer under the "Download Application" section.
2. Extract the .zip file and open the ``x64`` file. Follow the steps in the wizard.
    * The x64 build is the only one that works with Atlas.
    * When prompted, select "Download indexes only". Otherwise, you'll download useless drivers.
3. Wait for SDIO to download the indexes.
4. Select drivers to install and press "Install" on the left.
