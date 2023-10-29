---
description: An overview of all general configuration options installed by the AtlasOS playbook
icon: material/cog
---

# Configuration

In this section, we will provide a comprehensive list of most of the general configuration options that are available in the Atlas folder. You should only modify these configuration settings if you are fully aware of what you are doing or if a team member specifically requests you to do so.

For more configuration options, check:

- [Advanced Configuration](advanced-configuration.md)
- [Optional Tweaks](optional-tweaks.md)
- [Windows Settings](windows-settings.md)

All of the configuration files listed here are located in the `3. Configuration` folder. In the Atlas folder which is on the Desktop. If you deleted the folder, check [here](../../../faq-and-troubleshooting/common-questions/atlas-folder-missing.md) for how to find it/get it back.

## Background Apps

By defauly we disable background apps in Windows, however you may need to enable this. A common reason to enable is for Sea of Thieves. To enable background apps it, run `Enable Background Apps.reg` in the `Background Apps` folder and restart.

## Bluetooth

Bluetooth is built-in feature in Windows which allows you to connect devices to your computer. On Atlas it has been disabled by default to make the system more responsive and less bloated. To enable it run the `Enable Bluetooth.cmd` file in the `Bluetooth` folder and restart.

You may need to install drivers for Bluetooth to work. [View our guide here](../../../faq-and-troubleshooting/common-questions/bluetooth-compatibility.md).

## Diagnostics and Troubleshooting

Troubleshooting is a built-in feature in Windows which is used to help you troubleshoot issues with your computer. On Atlas we have disabled it by default to avoid any tweaks being reset. To enable it just run the `Enable Troubleshooting.cmd` file in the `Diagnostics and Troubleshooting` folder and restart.

## Driver Updates

When installing Atlas, you can choose between Automatic Driver Installation and Manual Driver Installation. This folder contains the files for you to change between each option, if you decide to while using Atlas.

When you have ran the desired choice, restart your device for the changes to take effect.

## Game Mode

Game Mode is a built-in feature in Windows that aims to make your system work better for gaming related tasks, but it can also make some games run slower.

It does this by turning off services and background processes which are not needed for gaming. It has been proven that it is not as helpful as it seems to be according to the latest research.

By default, this is turned off, but you can turn it on by running the `Enable Game Mode.reg` file. This can be found in the folder called "Game Mode."

## HAGS

HAGS (Hardware-Accelerated GPU Scheduling) is a built-in feature in Windows that aims to make your system more performant in GPU intensive tasks, but it may not produce positive results for every system, so you should test it on your own system to see for yourself.

## Lanman Workstation (SMB)

Lanman Workstation (SMB) is a built-in feature in Windows which is used to connect to other computers that are on the same network. On Atlas it has been disabled by default to make the system more responsive and less bloated. To enable it run the `Enable Lanman Workstation.cmd` file in the `Lanman Workstation (SMB)` folder.

## Network Discovery

Network Discovery is a built-in feature in Windows which is used to discover other computers on your network. On Atlas we have enabled it by default. To disable it just run the `Disable Network Discovery Services.cmd` file in the `Network Discovery` folder and restart.

### File Sharing
File Sharing is apart of Network Discovery and by default is disabled. If you wish to send files across your local connection to other Windows devices, run the `Enable File Sharing.cmd` file in the `File Sharing` folder and restart.

### Network Navigation Pane
Network Navigation pane is apart of network discovery and controls whether the "Network" options shows in the File Explorer. If you want to see the Network Pane, run the `User Network Navigation Pane choice.reg` file in the `Network Navigation Pane` folder and restart.

## Notifications

Notifications are a built-in feature in Windows which are used to show you notifications. On Atlas we have enabled them by default. If you wish to disable them, run the `Disable Notifications.cmd` file in the `Notifications` folder and restart.

## Power

The Power folder is a folder that allows you to manage power related settings.

### CPU Idle

Disabling idle reduces jitter and increases responsiveness as the CPU is forced to operate at C-State 0 which prevents the CPU clocks constantly fluctuating and eliminates the latency penalty introduced from the time taken to restore and transition to a higher C-State.

The drawbacks of forcing the CPU to operate at C0 is increased power consumption and higher temperatures, so it is not recommended disabling idle if you leave your PC running for extended durations, have inadequate cooling, uncontrolled voltages or a laptop.

## Hibernation

Hibernation is a feature in Windows that allows you to put your computer to sleep. It temporarily saves all of the current memory/RAM onto your disk, in case of power loss.

Hibernation is disabled by default due to the potential stability issues it can cause, but you can enable it by running the `Enable Hibernation.cmd` in the `Hibernation` folder.

### Power Saving

*We are sorry, but the documentation for this is not written yet. Feel free to provide your contribution at [https://github.com/Atlas-OS/docs](https://github.com/Atlas-OS/docs).*

### Timer Resolution

Increasing the timer resolution improves precision, which is beneficial for applications that require consistent pacing or sleeping, such as multimedia applications and framerate limiters. This is at the cost of increased power consumption and is not always beneficial for all machines.

## FSO and Game Bar

Game Bar is a built-in feature in Windows which is used to record your screen and take screenshots, and relies on FSO. In Atlas, FSO is enabled by default, but Game Bar is disabled for performance. You enable Game Bar and FSO using `Enable FSO & Game Bar.reg` or disable both FSO and Game Bar by running `Disable FSO & Game Bar.reg` in the folder `FSO and Game Bar` folder and restart

## Printing

Printing is a built-in feature in Windows which is used to print documents. On Atlas we have disabled it by default to make the system more responsive and less bloated. To enable it just run the `Enable Printing.cmd` file in the `Printing` folder and restart.

## Search Indexing

Search Indexing is a built-in feature in Windows which is used to index files on your computer. On Atlas we have disabled it by default to make the system more responsive and less bloated. To enable it just run the `Enable Search Indexing.cmd` file in the `Search Indexing` folder and restart.

## Start Menu

The start menu folder stores start menu related configuration options.

The `Install Open-Shell.cmd` file is there so you can install Open-Shell. You can find more information about it [here.](https://github.com/Open-Shell/Open-Shell-Menu)

The `Unlock Start Menu Tiles.cmd` file allows you to unlock the start menu tiles which you would have noticed on the start menu in normal Windows 10. This is useful if you want to move the tiles around when you add them to the start menu.

The `Atlas Open-Shell Preset.xml` file is a pre-made preset which we recommend using for Open-Shell, but you can still change the suggested settings to your liking.

## System Restore

System Restore is a final resort when it comes to taking snapshots of your machine. By default it's enabled but you can disable it bu running `Disable System Restore.reg` in the `System Restore` folder followed by a system reboot.

## VPN

A VPN (Virtual Private Network) is a feature in Windows that lets you connect to the internet in a more secure and private way. On Atlas it has been disabled by default to make the system less bloated. To enable it just run the `Enable VPN support.cmd` file in the `VPN` folder.

## Visual Effects

Windows enables various Visual Effects by default. These include animated menus and tooltips, and animations while minimizing and maximizing, all of these enhance the appearance of Windows but can slightly reduce performance.

On Atlas, visual effects are disabled by default. To restore these effects, run the `Default Windows Visual Effects.cmd` file in the `Visual Effects` folder.

## Wi-Fi

Wi-Fi is a feature in Windows that lets your computer connect to the internet wirelessly. On Atlas it has been enabled by default since it is very widely used. To disable it just run the `Disable Wi-Fi.cmd` file in the `Wi-Fi` folder.

You may need to install drivers for Wi-Fi to work. You can learn on how to do this [here.](../drivers/getting-started.md)

