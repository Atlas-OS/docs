---
description: An overview of all advanced configuration options installed by the AtlasOS playbook
icon: material/sign-caution
---

# :material-sign-caution: Advanced Configuration

!!! danger "User risk"
    If you are not confident in your technical ability, it is recommended that you avoid this section.
    
    Any misinterpretation can result in compatibility issues and other problems. Therefore, it's essential to understand what you are doing and how to revert it. 

Each section here corresponds to a sub-folder in the `6. Advanced Configuration` directory located in the Atlas folder, which you can find in the Start Menu or on the desktop. Check out [our guide to restore the Atlas folder](../../../general-faq/atlas-folder-missing.md) if you can't find it.

## :material-desktop-tower: Boot Configuration

Here, you can change the boot configuration for Windows for quality of life and troubleshooting.

See the `View Current Values.cmd` script for your boot configuration.

## :material-hammer-screwdriver: Driver Configuration

This folder contains links to tools to set driver affinities manually. Affinities allow you to specify which core a driver or process runs on. You can manually alter this for a *potential* performance gain, as Windows defaults most drivers on CPU core 0. Allocating drivers to their separate cores should theoretically help reduce interrupts on core 0.

Additionally, this folder has a link to [MSI Utility V3](https://forums.guru3d.com/threads/windows-line-based-vs-message-signaled-based-interrupts-msi-tool.378044/) to configure Message Signal-based Interrupts for devices.

## :material-list-box: Process Explorer

Process Explorer is an application part of the [Microsoft Sysinternals](https://learn.microsoft.com/en-us/sysinternals/) suite of utilities. It can be best described as an advanced version of the Task Manager. [Microsoft's documentation](https://learn.microsoft.com/en-us/sysinternals/downloads/process-explorer) for Process Explorer gives more information about its capabilities.

This folder has scripts that can automate the installation and uninstallation of this utility.

## :material-cog: Services

!!! danger "Disabling services"
    It's highly unlikely that you'll get any performance gains out of disabling these services, and disabling some might break seemingly unrelated functionality.

    **Only proceed if you're okay with this.**

### Bluetooth

These scripts toggle Bluetooth support. Remember that you may need to install drivers for Bluetooth to work. [View our guide here](../../../general-faq/bluetooth-compatibility.md).

### Lanman Workstation (SMB)

Lanman Workstation (SMB) is a service required for features such as file sharing, but it is also necessary for many pieces of software to function, such as AMD Ryzen Master.

To disable it, run the `Disable Lanman Workstation.cmd` script, but **remember the bad compatibility**.

### Network Discovery

Network discovery is a built-in feature in Windows that discovers other computers on your network.
On Atlas, we keep its services enabled by default as we have determined they are not resource-intensive. If you want to disable them, run the `Disable Network Discovery Services.cmd` script and restart.

### NVIDIA Display Container

!!! warning "Disabling will break features"
    Disabling the NVIDIA Display Container will break the NVIDIA Control Panel and any other NVIDIA features until it is re-enabled. 
    These scripts are aimed at users that have a stripped driver, and people that barely touch the NVIDIA Control Panel.

These scripts allow you to toggle the 'NVIDIA Display Container LS' service, as it has some network activity and uses a tiny bit of CPU usage.

### Printing

!!! warning "Acrobat Support"
    Disabling printing services is known to break installing Adobe Acrobat.

These scripts toggle printing support. Remember that you'll likely need to install drivers for printing to work.

### Superfetch

These scripts toggle the Superfetch service, which has a primary purpose of improving system responsiveness and application launch times by preloading frequently used programs and files into RAM.

Some users argue that Superfetch causes high CPU usage for them, or that it's unnecessary on fast SSDs. For this reason, you can disable the service by running `Disable SuperFetch.cmd`.

## :material-network: Static IP

In this folder, you can use the `Automatically Set Static IP.cmd` script to automatically configure your network locally with a static IP, which can be helpful if your computer serves as a local server.
