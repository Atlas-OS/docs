---
description: An overview of all general configuration options installed by the AtlasOS playbook
icon: material/cog
---

# :material-cog: Configuration

In this section, we will be presenting a comprehensive list of general configuration options that are available in the Atlas folder. It is important to note that you should only modify these configuration settings if you have a complete understanding of what you are doing or if a team member specifically requests you to do so.

For more configuration options, check:

- [Advanced Configuration](advanced-configuration.md)
- [Optional Tweaks](optional-tweaks.md)
- [Windows Settings](windows-settings.md)

All of the configuration files listed here are located in the `3. Configuration` folder. In the Atlas folder which is on the Desktop. If you deleted the folder, check out [our guide to restore the Atlas folder](../../../faq-and-troubleshooting/common-questions/atlas-folder-missing.md).

## Background Apps

By default we disable background apps in Windows, however, you may need to enable this. A common reason to enable is for Sea of Thieves. To enable background apps, run `Enable Background Apps.reg` in the `Background Apps` folder and restart.

## Bluetooth

Bluetooth is a built-in feature in Windows that allows you to connect devices to your computer. On Atlas, it has been disabled by default to make the system more responsive and less bloated. To enable it run the `Enable Bluetooth.cmd` file in the `Bluetooth` folder and restart.

You may need to install drivers for Bluetooth to work. [View our guide here](../../../faq-and-troubleshooting/common-questions/bluetooth-compatibility.md).

## Diagnostics and Troubleshooting

Troubleshooting is a built-in feature in Windows that is used to help you troubleshoot issues with your computer. On Atlas, we have disabled it by default to avoid any tweaks being reset. To enable it just run the `Enable Troubleshooting.cmd` file in the `Diagnostics and Troubleshooting` folder and restart.

## Driver Updates

When installing Atlas, you can choose between Automatic Driver Installation and Manual Driver Installation. This folder contains the files for you to change between each option, if you decide to while using Atlas.

When you have run the desired choice, restart your device for the changes to take effect.

## FSO and Game Bar

Game Bar is a built-in feature in Windows that is used to record your screen, take screenshots, show performance information, and more. It relies on [Fullscreen Optimizations](https://devblogs.microsoft.com/directx/demystifying-full-screen-optimizations/), which is shortened to FSO.

In Atlas, FSO is enabled by default, but Game Bar is removed. You can enable Game Bar support by using `Enable FSO & Game Bar.reg` and getting Game Bar from the [Microsoft Store](ms-windows-store://review/?ProductId=9NZKPSTSNW4P).

If you want to disable FSO and use [Fullscreen Exclusive](https://wiki.special-k.info/en/SwapChain) instead, run `Disable FSO & Game Bar.reg` and this should fix all issues with the **Disable full-screen optimizations** compatibility option in modern Windows.
## Game Mode

Game Mode is a built-in feature in Windows that aims to make your system work better for gaming-related tasks, but it can also make some games run slower.

It does this by turning off services and background processes which are not needed for gaming. It has been proven that it is not as helpful as it seems to be according to the latest research.

By default, this is turned off, but you can turn it on by running the `Enable Game Mode.reg` file. This can be found in the folder called "Game Mode."

## HAGS

HAGS (Hardware-Accelerated GPU Scheduling) is a built-in feature in Windows that aims to make your system more performant in GPU-intensive tasks, but it may not produce positive results for every system, so you should test it on your system to see for yourself.

## Lanman Workstation (SMB)

Lanman Workstation (SMB) is a service that provides features like file sharing but is also required for software like AMD Ryzen Master to function. On Atlas, it has been enabled by default. To disable it run the `Disable Lanman Workstation.cmd` file in the `Lanman Workstation (SMB)` folder.

## Network Discovery

Network Discovery is a built-in feature in Windows that is used to discover other computers on your network. On Atlas, we have enabled it by default. To disable it just run the `Disable Network Discovery Services.cmd` file in the `Network Discovery` folder and restart.

### File Sharing
File Sharing is a part of Network Discovery and by default is disabled. If you wish to send files across your local connection to other Windows devices, run the `Enable File Sharing.cmd` file in the `File Sharing` folder and restart.

### Network Navigation Pane
Network Navigation pane is a part of network discovery and controls whether the "Network" options show in the File Explorer. If you want to see the Network Pane, run the `User Network Navigation Pane choice.reg` file in the `Network Navigation Pane` folder and restart.

## Notifications

Notifications are a built-in feature in Windows that is used to show you notifications. On Atlas, we have disabled them by default. If you wish to enable them, run the `Enable Notifications.cmd` file in the `Notifications` folder and restart.

## Power

The Power folder is a folder that allows you to manage power-related settings.

### CPU Idle

Disabling idle reduces jitter and increases responsiveness as the CPU is forced to operate at C-State 0 which prevents the CPU clocks constantly fluctuating and eliminates the latency penalty introduced from the time taken to restore and transition to a higher C-State.

The drawbacks of forcing the CPU to operate at C0 are increased power consumption and higher temperatures, so it is not recommended to disable idle if you leave your PC running for extended durations, have inadequate cooling, uncontrolled voltages or a laptop.

### Hibernation

Hibernation is a feature in Windows that allows you to put your computer to sleep. It temporarily saves all of the current memory/RAM onto your disk, in case of power loss.

Hibernation is disabled by default due to the potential stability issues it can cause, but you can enable it by running the `Enable Hibernation.cmd` in the `Hibernation` folder.

### Power Saving

In this folder, you will find two files that can either enable or disable power saving. These files not only control the power scheme but also have an impact on other settings that can affect power consumption, thus altering your system's performance.

If you wish to modify your choice after installation, you can do so through the registry files provided in this folder.

### Timer Resolution

Increasing the timer resolution improves precision, that is beneficial for applications that require consistent pacing or sleeping, such as multimedia applications and framerate limiters. This is at the cost of increased power consumption and is not always beneficial for all machines.

## Printing

Printing is a built-in feature in Windows that is used to print documents. On Atlas, we have disabled it by default to make the system more responsive and less bloated. To enable it just run the `Enable Printing.cmd` file in the `Printing` folder and restart.

## Search Indexing

Search Indexing is a built-in feature in Windows that is used to index files on your computer. On Atlas, we have disabled it by default to make the system more responsive and less bloated. To enable it just run the `Enable Search Indexing.cmd` file in the `Search Indexing` folder and restart.

## Start Menu

The start menu folder stores start menu-related configuration options.

The `Install Open-Shell.cmd` file is there so you can install Open-Shell. You can find more information about it [here.](https://github.com/Open-Shell/Open-Shell-Menu)

The `Atlas Open-Shell Preset.xml` file is a pre-made preset which we recommend using for Open-Shell, but you can still change the suggested settings to your liking.

## System Restore

System Restore is a final resort when it comes to taking snapshots of your machine. By default, it's enabled but you can disable it by running `Disable System Restore.reg` in the `System Restore` folder followed by a system reboot.

## VPN

A VPN (Virtual Private Network) is a feature in Windows that lets you connect to the internet more securely and privately. On Atlas, it's enabled by default for compatibility reasons and due to the services & and drivers being set to manual. To disable it, run the `Disable VPN support.cmd` file in the `VPN` folder.

## Visual Effects

Windows enables various Visual Effects by default. These include animated menus tooltips, and animations while minimizing and maximizing, all of these enhance the appearance of Windows but can slightly reduce performance.

On Atlas, visual effects are disabled by default. To restore these effects, run the `Default Windows Visual Effects.cmd` file in the `Visual Effects` folder.
