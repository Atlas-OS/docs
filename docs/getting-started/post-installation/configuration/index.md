---
title: Configuration
description: An overview of all general configuration options installed by the AtlasOS playbook
icon: material/cog
---

# Configuration

In this section we will list all of the general configuration options in the Atlas folder, how to change them and their defaults. Only touch them if you know what you are doing or if a team member asks you to do so.

For other configuration options, check:

- [Advanced Configuration](/getting-started/post-installation/configuration/advanced-configuration)
- [Optional Tweaks](/getting-started/post-installation/configuration/optional-tweaks)
- [Windows Settings](/getting-started/post-installation/configuration/windows-settings)

All of the configuration files listed here are located in the `3. Configuration/1. General Configuration` folder. In the Atlas folder which is on the Desktop. If you deleted the folder, check [here](/troubleshooting/common-issues/atlas-folder-missing) for how to find it/get it back.

## Animations

Animations are visual effects that aim to make your system feel smoother. They are disabled by default on Atlas to make the system feel more responsive.

If you want to enable them run the `Enable Animations.cmd` file in the `Animations` folder.

## Bluetooth

Bluetooth is built-in feature on Windows which allows you to connect devices to your computer. On Atlas it has been disabled by default to make the system more responsive and less bloated. To enable it run the `Enable Bluetooth.cmd` file in the `Bluetooth` folder.

!!! warning
    You may need to install drivers for Bluetooth to work. Learn how to do this [here.](/getting-started/post-installation/drivers/).

## Firewall

Firewall is a built-in feature on Windows which is used to block unwanted connections. On Atlas we have kept this enabled by default to enhance system security. To disable it you can run the `Disable Windows Firewall.cmd` file in the `Firewall` folder.

## FSO and Game Bar

FSO and Game Bar are built-in features on Windows which are used to record your screen and take screenshots. On Atlas they have been disabled by default to make the system more responsive and less bloated. To enable them just run the `Enable FSO and Game Bar.reg` file in the `FSO and Game Bar` folder.

## Game Mode

Game Mode is a built-in feature in Windows that aims to make your system work better for gaming related tasks, but it can also make some games run slower.

It does this by turning off services and background processes which are not needed for gaming. It has been proven that it is not as helpful as it seems to be according to the latest research.

By default, this is turned off, but you can turn it on by running the ``Enable Game Mode.reg`` file. This can be found in the folder called "Game Mode."

## HAGS

HAGS (Hardware-Accelerated GPU Scheduling) is a built-in feature in Windows that aims to make your system more performant in GPU intensive tasks, but it may not produce positive results for every system, so you should test it on your own system to see for yourself.

## Hyper-V and VBS

Hyper-V and VBS are built-in features on Windows which are used to run virtual machines and scripts. On Atlas we have disabled them by default to make the experience more responsive and less bloated. To enable them run the `Enable Hyper-V and VBS.cmd` file in the `Hyper-V and VBS` folder.

## Lanman Workstation (SMB)

Lanman Workstation (SMB) is a built-in feature on Windows which is used to connect to other computers that are on the same network. On Atlas it has been disabled by default to make the system more responsive and less bloated. To enable it run the `Enable Lanman Workstation.cmd` file in the `Lanman Workstation (SMB)` folder.

## Microsoft Store

Microsoft Store is a built-in application on Windows which is used to download applications or games without using a web browser. On Atlas we have enabled it by default due to alot of applications and games being on the store but if you want to disable it you can run the `Disable Microsoft Store.cmd` file in the `Microsoft Store` folder.

!!! warning
    Disabling it will break the 'Night Light' feature!

### Anti-Cheat Support

Enabling Spectre and Meltdown and using the `Set Windows Default Mitigations.cmd` script (documented above) should fix all anti-cheat compatibility. On Atlas, they have been disabled by default for increased performance.

Additionally, you can also configure Data Execution Prevention in the `Mitigations/Anti-Cheat Support` folder. This is set to the Windows default (`OptIn`) by default, because almost all CPUs have this mitigation at a CPU-level (so it shouldn't affect performance) and it gets applied for core system components only. Also, it is required for many anti-cheats.

## Network Discovery

Network Discovery is a built-in feature on Windows which is used to discover other computers on your network. On Atlas we have disabled it by default to make the system more responsive and less bloated. To enable it just run the `Enable Network Discovery.cmd` file in the `Network Discovery` folder.

## Notifications

Notifications are a built-in feature on Windows which are used to show you notifications. On Atlas we have disabled them by default to make the experience more responsive and less bloated. To enable them just run the `Enable Notifications.cmd` file in the `Notifications` folder.

## Power

The Power folder is a folder that allows you to manage power related settings.

### CPU Idle

Disabling idle reduces jitter and increases responsiveness as the CPU is forced to operate at C-State 0 which prevents the CPU clocks constantly fluctuating and eliminates the latency penalty introduced from the time taken to restore and transition to a higher C-State. The drawbacks of forcing the CPU to operate at C0 is increased power consumption and higher temperatures, so it is not recommended disabling idle if you leave your PC running for extended durations, have inadequate cooling, uncontrolled voltages or a laptop. Idle states can be toggled in the context menu after running the ``Add Idle toggle in context menu.reg`` file.

### Hibernation

Hibernation is a feature in Windows that allows you to put your computer to sleep. It temporarily saves all of the current memory/RAM onto your disk, in case of power loss.

Hibernation is disabled by default due to the potential stability issues it can cause, but you can manage it with `Enable Hibernation.cmd` or `Disable Hibernation (default).cmd` in the `Hibernation` folder.

## Printing

Printing is a built-in feature on Windows which is used to print documents. On Atlas we have disabled it by default to make the system more responsive and less bloated. To enable it just run the `Enable Printing.cmd` file in the `Printing` folder.

## Process Explorer

Process Explorer is an application made by Microsoft that can be considered a "better" task manager. On Atlas we have kept Task Manager, but if you want to make Process Explorer the default utility for managing tasks, just run the `Install Process Explorer.cmd` file in the `Process Explorer` folder.

## Search Indexing

Search Indexing is a built-in feature on Windows which is used to index files on your computer. On Atlas we have disabled it by default to make the system more responsive and less bloated. To enable it just run the `Enable Search Indexing.cmd` file in the `Search Indexing` folder.

## Start Menu

The start menu folder stores start menu related configuration options.

The `Install Open-Shell.cmd` file is there so you can install Open-Shell. You can find more information about it [here.](https://github.com/Open-Shell/Open-Shell-Menu)

The `Unlock Start Menu Tiles.cmd` file allows you to unlock the start menu tiles which you would have noticed on the start menu in normal Windows 10. This is useful if you want to move the tiles around when you add them to the start menu.

The `Atlas Open-Shell Preset.xml` file is a pre-made preset which we recommend using for Open-Shell, but you can still change the suggested settings to your liking.

## Troubleshooting

Troubleshooting is a built-in feature on Windows which is used to help you troubleshoot issues with your computer. On Atlas we have disabled it by default to avoid any tweaks being reset. To enable it just run the `Enable Troubleshooting.cmd` file in the `Troubleshooting` folder.

## UAC

UAC (User Account Control) is a built-in feature on Windows which is used to limit the permissions of applications. This helps protect against applications malfunctioning and doing harmful changes to your computer. 

Please note that most well-made malware will be able to bypass UAC easily, and that the only true way to protect yourself against UAC bypasses is to turn UAC up to the maximum level.

When UAC is disabled, everything will be run as Administrator. On the current version of Atlas, it is disabled it by default. To enable it, run the `Enable UAC.cmd` file in the `UAC Folder`.

!!! note
	The next version of Atlas (v0.3.0) will have this feature enabled **by default** for security purposes, you will still be able to configure it.

## VPN

VPN is a built-in feature on Windows which allows users to connect to a Virtual Private Network. On Atlas it has been disabled by default to make the system less bloated. To enable it just run the `Enable VPN support.cmd` file in the `VPN` folder.

## Wi-Fi

Wi-Fi is a built-in feature on Windows which is used to connect to Wi-Fi networks. On Atlas it has been enabled by default since it is very widely used. To disable it just run the `Disable Wi-Fi.cmd` file in the `Wi-Fi` folder.

!!! warning
    You may need to install drivers for Wi-Fi to work. You can learn on how to do this [here.](/getting-started/post-installation/drivers)

## Xbox

Xbox has been enabled on Atlas by default, since it is a big part of the gaming PC market. If you want to remove it, run the `Remove Xbox Applications.cmd` file in the `Xbox` folder.
