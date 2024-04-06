---
description: Getting started with installing drivers for AtlasOS
---

# :material-download: Getting Started with Drivers

If you have installed AtlasOS through the manual driver installation method, this guide will be your go-to helping hand for setting up your system with all the drivers you may need.

## :material-update: Want driver installation & updates through Windows Update instead?

!!! question "What is best?"
    You can find a comparison of both options on the [Installation](../../installation.md#driver-updates) page.

You can find files to toggle getting drivers from Windows Update in the `2. Drivers` directory located in the Atlas folder, which you can find in the Start Menu or on the desktop. Check out [our guide to restore the Atlas folder](../../../faq-and-troubleshooting/common-questions/atlas-folder-missing.md) if you can't find it.

Remember that toggling this option will not uninstall any current drivers on your computer. You must manually check for Windows Updates to get driver updates if you don't have [automatic Windows Updates](../atlas-folder/general-configuration.md#automatic-updates) enabled.

## :material-emoticon-confused-outline: Which drivers do I need?

We recommend only installing the necessary drivers. Necessary drivers likely include GPU, audio, Wi-Fi, and Bluetooth drivers.

If you are unsure of the drivers required for each device, look up your hardware components to find specific drivers and install them accordingly.

## :material-cogs: Graphics (GPU/iGPU) drivers

!!! warning
    If you have integrated and dedicated graphics, you must install both drivers.
    
    For example, if you have an Intel CPU with integrated graphics and an NVIDIA GPU, you must install both the Intel and NVIDIA drivers. This is most commonly the case with gaming/studio laptops.

We do not recommend installing your graphics drivers via SDIO as they can be heavily debloated. We have included installation guides for popular graphics card brands below:

* [NVIDIA ->](../drivers/nvidia.md)
* [AMD ->](../drivers/amd.md)
* [Intel ->](../drivers/intel.md)

## :material-screwdriver: Other drivers

It's important to understand that when you have chosen the **manual driver updates** path when installing AtlasOS, no drivers will be installed when needed.

Assuming you have your graphics drivers installed and configured, you may need a Bluetooth driver for your speakers, printer driver, or maybe you have an external drawing tablet, etc...

[We have a guide that helps you install the drivers you may need ->](others.md)
