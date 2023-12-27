---
description: Getting started with installing drivers for AtlasOS
icon: material/progress-download
---

# :material-progress-download: Drivers? How do I start?

If you have installed AtlasOS through the Manual Driver Installation method, this guide will be your go-to helping hand for setting up your system with all the drivers you may need.

## :material-emoticon-confused-outline: What drivers do I need?

It is important to only install drivers that are necessary for hardware that is currently not functioning. This includes GPU drivers, audio drivers, Wi-Fi drivers, and Bluetooth drivers.

If you are unsure of the brands and drivers required for each component, you can look up your hardware to determine what the specific drivers are called and then install them accordingly.

## :material-cogs: Graphics (GPU/iGPU) Drivers
We do not recommend installing your graphics drivers via SDIO as they can be heavily debloated. We have included installation guides for popular graphics card brands below:

* [NVIDIA](../drivers/nvidia.md)
* [AMD](../drivers/amd.md)
* [Intel](../drivers/intel.md)

!!! warning
    If you have integrated graphics as well as dedicated graphics, you will need to install both drivers. i.e. if you have an Intel CPU with integrated graphics with an NVIDIA GPU, you will need to install both the Intel and NVIDIA drivers. This is most commonly the case with gaming/studio laptops.

## :material-screwdriver: Other drivers

It's important to understand that when you have chosen the **manual driver updates** path when installing AtlasOS, no drivers will be installed when needed.

Assuming you have your graphics drivers installed and configured, you may need a Bluetooth driver for your speakers, printer driver, or maybe you have an external drawing tablet, etc...

[We have a guide that helps you install the drivers you may need](others.md).
