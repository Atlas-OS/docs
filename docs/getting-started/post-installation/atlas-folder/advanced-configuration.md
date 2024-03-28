---
description: An overview of all advanced configuration options installed by the AtlasOS playbook
icon: material/sign-caution
---

# :material-sign-caution: Advanced Configuration

!!! danger "User risk"
    If you are not confident in your technical ability, it is recommended that you avoid this section.
    
    Any misinterpretation can result in compatibility issues and other problems. Therefore, it's essential to understand what you are doing and how to revert it. 

Each section here corresponds to a sub-folder in the `6. Advanced Configuration` directory located in the Atlas folder, which you can find in the Start Menu or on the desktop. Check out [our guide to restore the Atlas folder](../../../faq-and-troubleshooting/common-questions/atlas-folder-missing.md) if you can't find it.

## :material-hammer-screwdriver: Driver Configuration

This folder contains links to tools to set driver affinities manually. Affinities allow you to specify which core a driver or process runs on. We can manually alter this for a potential performance gain, as Windows defaults most drivers on CPU core 0. Allocating drivers to their separate cores should theoretically help reduce interrupts on core 0.

Additionally, this folder has a link to [MSI Utility V3](https://forums.guru3d.com/threads/windows-line-based-vs-message-signaled-based-interrupts-msi-tool.378044/) to configure Message Signal-based Interrupts for devices.

## :material-desktop-tower: Boot Configuration

Here, you can change the boot configuration for Windows for quality of life and troubleshooting.

See the `View Current Values.cmd` script for your boot configuration.

## :material-cog: Lanman Workstation (SMB)

Lanman Workstation (SMB) is a service required for features such as file sharing, but it is also necessary for many pieces of software to function, such as AMD Ryzen Master.

To disable it, run the `Disable Lanman Workstation.cmd` script, but remember the bad compatibility.

## :simple-nvidia: NVIDIA Display Container

!!! warning "Disabling will break features"
    Disabling the NVIDIA Display Container will break the NVIDIA Control Panel and any other NVIDIA features until it is re-enabled. 
    These scripts are aimed at users that have a stripped driver, and people that barely touch the NVIDIA Control Panel.

These scripts allow you to toggle the 'NVIDIA Display Container LS' service, as it connects to a few NVIDIA IPs and uses a tiny bit of CPU usage.
We only recommend using these if you want a very minimal configuration.

## :material-list-box: Process Explorer

!!! warning "Enabling could break features"
    Atlas disables the `pcw` driver for less system resource usage when installing Process Explorer, which is responsible for performance counters.
    Having the performance counter driver disabled could have unexpected effects on software.

Process Explorer is an application part of the [Microsoft Sysinternals](https://learn.microsoft.com/en-us/sysinternals/) suite of utilities. Process Explorer can be best described as an advanced version of the Task Manager. [Microsoft's documentation](https://learn.microsoft.com/en-us/sysinternals/downloads/process-explorer) for Process Explorer gives more information about its capabilities.

This folder has scripts that can automate the installation/uninstallation of this utility.

## :material-network: Static IP

In this folder, you can use the `Automatically Set Static IP.cmd` script to automatically configure your network locally with a static IP, which can be helpful if your computer serves as a local server.

## Wi-Fi

!!! warning "Disabling will break features"
    Disabling Wi-Fi is known to break Microsoft Store, some WSL features, and more.
    We only disabling Wi-Fi if you want a very minimal configuration and are okay with the compatibility issues.

Wi-Fi is a feature in Windows that lets your computer connect to the internet wirelessly. To disable its services, run the `Disable Wi-Fi.cmd` script.

Although Atlas keeps Wi-Fi services enabled by default, you may need to [install drivers](../drivers/getting-started.md) for Wi-Fi to work correctly.
