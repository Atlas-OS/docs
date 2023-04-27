# Configuration

In this section we will list all of the general configuration options in the Atlas folder, how to change them and their defaults. Only touch them if you know what you are doing or if a team member asks you to do so.

For other configuration options, check:

- [Advanced Configuration](/getting-started/post-installation/configuration/advanced-configuration)
- [Optional Tweaks](/getting-started/post-installation/configuration/optional-Tweaks)
- [Windows Settings](/getting-started/post-installation/configuration/windows-Settings)

All of the configuration files listed here are located in the `3. Configuration/1. General Configuration` folder. In the Atlas folder which is on the Desktop. If you deleted the folder, you can find it in `C:/Users/Default/Desktop/` or download it via our [GitHub](https://github.com/Atlas-OS/Atlas/tree/main/src/Executables/Atlas).

## Animations

Animations are visual effects that aim to make your system feel smoother. They are disabled by default on Atlas to make the system feel more responsive.

If you want to enable them run the `Enable Animations.cmd` file in the `Animations` folder.

## Background Apps

These Apps run in the background and are not visible to the user. These apps are typically used for things like updating, syncing files, and other things that are not needed to be seen by the user. On Atlas we have disabled them by default to make the system more responsive and less bloated. To enable them run the `Enable Background Apps.cmd` file in the `Background Apps` folder.

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
    Disabling it will break the night light feature! 

## Mitigations

Mitigations are a built-in security feature on Windows, used to fix security vulnerabilities and protect your computer from malicious software.

On Atlas we have them disabled by default to improve performance for older CPUs, as it is very unlikely that a user will be affected from this change. However, some newer CPUs (like Zen 4 CPUs) can be negatively impacted if you disable mitigations, due to the newer CPUs being optimized for these mitigations.

If you have any issues with anti-cheats or have a newer CPU, run the `Set Windows Default Mitigations.cmd` file in the `Mitigations` folder. Alternatively, you can use `Enable All Mitigations.cmd`, but that forces all mitigations to be enabled (unlike the Windows default), which can reduce performance significantly and may potentially reduce compatibility, while increasing system security.

### Anti-Cheat Support

Enabling Spectre and Meltdown and using the `Set Windows Default Mitigations.cmd` script (documented above) should fix all anti-cheat compatibility. On Atlas, they have been disabled by default for increased performance.

Additionally, you can also configure Data Execution Prevention in the `Mitigations/Anti-Cheat Support` folder. This is set to the Windows default (`OptIn`) by default, because almost all CPUs have this mitigation at a CPU-level (so it shouldn't affect performance) and it gets applied for core system components only. Also, it is required for many anti-cheats.

## Network Discovery

Network Discovery is a built-in feature on Windows which is used to discover other computers on your network. On Atlas we have disabled it by default to make the system more responsive and less bloated. To enable it just run the `Enable Network Discovery.cmd` file in the `Network Discovery` folder.

## Notifications

Notifications are a built-in feature on Windows which are used to show you notifications. On Atlas we have disabled them by default to make the experience more responsive and less bloated. To enable them just run the `Enable Notifications.cmd` file in the `Notifications` folder.

## Oculus VR

The Oculus VR folder contains resources that allow you to use the Oculus software. We have disabled support for it by default as it is not needed by most users. To enable it run the `Enable Oculus VR.cmd` file in the `Oculus VR` folder.

## Power

The Power folder is a folder that allows you to manage power related settings.

### CPU Idle

*We are sorry, but the documentation for this is not written yet. Feel free to provide your contribution at [https://github.com/Atlas-OS/docs](https://github.com/Atlas-OS/docs).*

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

The `Install Open-Shell (run first).cmd` file is there so you can install Open-Shell which you can find more information about [here.](https://open-shell.github.io/Open-Shell-Menu/)

The `Unlock Start Menu Tiles.cmd` file allows you to unlock the start menu tiles which you would have noticed on the start menu in normal Windows 10. This is useful if you want to move the tiles around when you add them to the start menu.

The `Atlas Openshell Preset.xml` file is a preset which we recommend using for Open-Shell, but you can still change the suggested settings to your liking.

## Troubleshooting

Troubleshooting is a built-in feature on Windows which is used to help you troubleshoot issues with your computer. On Atlas we have disabled it by default to avoid any tweaks being reset. To enable it just run the `Enable Troubleshooting.cmd` file in the `Troubleshooting` folder.

## UAC

UAC (User Account Control) is a built-in feature on Windows which is used to protect your computer from malicious software. When UAC is disabled, everything will be run as Administrator. On Atlas we have disabled it by default. To enable it run the `Enable UAC.cmd` file in the ``UAC Folder``.

## UWP

UWP (Universal Windows Platform) is a built-in feature on Windows which is used to run apps from the Microsoft Store. On Atlas we have it enabled by default. To disable it run the `Disable All UWP.cmd` file in the `UWP` folder.

## VPN

VPN is a built-in feature on Windows which allows users to connect to a Virtual Private Network. On Atlas it has been disabled by default to make the system less bloated. To enable it just run the `Enable VPN support.cmd` file in the `VPN` folder.

## Wi-Fi

Wi-Fi is a built-in feature on Windows which is used to connect to Wi-Fi networks. On Atlas it has been enabled by default since it is very widely used. To disable it just run the `Disable Wi-Fi.cmd` file in the `Wi-Fi` folder.

!!! warning
    You may need to install drivers for Wi-Fi to work. You can learn on how to do this [here.](/getting-started/post-installation/drivers)

## Xbox

Xbox has been enabled on Atlas by default, since it is a big part of the gaming PC market. If you want to remove it, run the `Remove Xbox Applications.cmd` file in the `Xbox` folder.
