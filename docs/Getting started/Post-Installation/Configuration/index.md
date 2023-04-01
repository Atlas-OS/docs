# Configuration

Here we will list all the built-in normal configuration options with the defaults and how to change them. Only touch these options if you know what you are doing or if you are asked to do so by a team member.

For other installation options, see:

- [Advanced Configuration](/Getting%20started/Post-Installation/Advanced%20Configuration)
- [Optional Tweaks](/Getting%20started/Post-Installation/Optional%20Tweaks)
- [Windows Settings](/Getting%20started/Post-Installation/Windows%20Settings)

All of the configuration files are located in the `4. Configuration` folder. In your Atlas folder on your Desktop. If you have managed to misplace this folder you can download it via our [GitHub](https://github.com/Atlas-OS/Atlas/tree/main/src/Desktop) or find it in `C:/Users/default/Desktop/`.

## Animations

Animations are a built-in feature on Windows 10 which are just visual effects to make the feel nicer. On Atlas we have disabled these to make the experience more fluid and faster.

To enable just run the `Enable Animations.cmd` file in the `Animations` folder.

## Background Apps

Background Apps are apps that run in the background and are not visible to the user. These apps are usually used for things like updating the system, syncing files, and other things that are not needed to be seen by the user. On Atlas we have disabled these to make the experience more fluid and faster. To enable just run the `Enable Background Apps.cmd` file in the `Background Apps` folder.

## Bluetooth

Bluetooth is a wireless technology that allows you to connect devices to your computer. On Atlas we have disabled this to make the experience more fluid and faster. To enable just run the `Enable Bluetooth.cmd` file in the `Bluetooth` folder.

!!! warning
    You may need to install Drivers for Bluetooth to work. Learn how to do this [here](/Getting%20started/Post-Installation/Drivers/)

## Firewall

Firewall is a built-in feature on Windows 10 which is used to block unwanted connections to your computer. On Atlas we have kept this enabled to keep security high. To disable this you can run the `Disable Windows Firewall.cmd` file in the `Firewall` folder.

## FSO and Game Bar

FSO and Game Bar are built-in features on Windows 10 which are used to record your screen and take screenshots. On Atlas we have disabled this to make the experience more fluid and faster. To enable just run the `Enable FSO and Game Bar.reg` file in the `FSO and Game Bar` folder.

## HDD

Prefetching is a built-in feature on Windows 10 which is used to speed up your computer by preloading files. On Atlas we have disabled this to make the experience more fluid and faster. To enable just run the `Enable Prefetching.cmd` file in the `HDD` folder.

## Hyper-V and VBS

Hyper-V and VBS are built-in features on Windows 10 which are used to run virtual machines and scripts. On Atlas we have disabled this to make the experience more fluid and faster. To enable just run the `Enable Hyper-V and VBS.cmd` file in the `Hyper-V and VBS` folder.

## IE and WMP

IE (Internet Explorer) and WMP (Windows Media Player) are built-in features on Windows 10 which are used to browse the internet and play media. On Atlas we have enabled these to allow you to browse the internet (we recommend not using Internet Explorer) or view media out of the box. You can disable these with the 2 files: `Disable Internet Explorer.cmd` and `Disable Windows Media Project.cmd` in the `IE and WMP` folder.

## Lanman Workstation (SMB)

Lanman Workstation (SMB) is a built-in feature on Windows 10 which is used to connect to other computers on your network. On Atlas we have disabled this to make the experience more fluid and faster. To enable just run the `Enable Lanman Workstation.cmd` file in the `Lanman Workstation (SMB)` folder.

## Microsoft Store

Microsoft Store is a built-in feature on Windows 10 which is used to download apps without using a web browser. On Atlas we have enabled this due to games being on the store but if you wish to disable it you can run the `Disable Microsoft Store.cmd` file in the `Microsoft Store` folder.

## Mitigations

Mitigations are a built-in feature in Windows which are used to fix securtity vulnerabilities protect your computer from malicious software. 

On Atlas we have disabled this by default to improve performance for older CPUs, as it is very unlikely that a user will be compromised from this change. However, with some newer CPUs (like Zen 4 CPUs), it can be significantly worse for performance to disable mitigations or almost pointless to, due to the CPUs being optimised for these mitigations.

If you have any issues with anticheats or have a new CPU, run the `Set Windows Default Mitigations.cmd` file in the `Mitigations` folder. Alternatively, you can use `Enable All Mitigations.cmd`, but that forces all mitigations to be enabled (unlike the Windows default), which can reduce performance and potentially compatibility, but increase security.

### Anti-Cheat Support

Enabling Spectre and Meltdown and potentially using the `Set Windows Default Mitigations.cmd` script (documented above) should fix anti-cheat software compatiblility. On Atlas, it is disabled by default for increased performance, especially for older CPUs. However, with some newer CPUs (like Zen 4 CPUs), it can be significantly worse for performance to disable these mitigations or almost pointless to, due to the CPUs being optimised for these mitigations. To enable, run the `Enable Meltdown-Spectre.cmd` file in the `Mitigations/Anti-Cheat Support` folder.

Additionally, you can configure Data Execution Prevention in the `Mitigations/Anti-Cheat Support` folder. This is set to the Windows default (`OptIn`) by default, because almost all CPUs have this mitigation at a CPU-level (so it should not affect performance) and it is applied for core system components only. Also, it is required for many anti-cheats.

## Network Discovery

Network Discovery is a built-in feature on Windows 10 which is used to discover other computers on your network. On Atlas we have disabled this to make the experience more fluid and faster. To enable just run the `Enable Network Discovery.cmd` file in the `Network Discovery` folder.

## Notifications

Notifications are a built-in feature on Windows 10 which are used to show you notifications from apps. On Atlas we have disabled this to make the experience more fluid and faster. To enable just run the `Enable Notifications.cmd` file in the `Notifications` folder.

## Oculus VR

The Oculus VR folder is made to enable installing the Oculus software. We have disabled this by default as it is not needed for most users. To enable just run the `Enable Oculus VR.cmd` file in the `Oculus VR` folder.

## Power

The power folder is a folder that allows you to manage power related settings. Some folders enable tweaks but we will go through all so you can understand what they do.

### Idle Tweaks (100% CPU)

*We're sorry, but the documentation for this isn't written yet. Feel free to provide your contribution at [https://github.com/Atlas-OS/docs](https://github.com/Atlas-OS/docs).*

### Power Management (High Temps)

Disable or enable:

- Balanced power scheme
- Power throttling
- Drivers and PnP power savings
- ACPI system devices

It is recommended to enable power management features for laptop and low-end PC users.

### Sleep States

Sleep States are enabled by default. These are features that allow your computer to go into different sleep states. These are:

- Low Latency wake sleep (Sleep)
- Sleep
- Traditional Sleep/Legacy Standby (Sleep)
- Hibernation

You can learn more about there [here](https://github.com/Atlas-OS/Atlas/wiki/3.-Post-Install#sleep-states)

### Hibernation

Hibernation is a feature in Windows that allows you to sleep your computer, except from it temporarily saves all of the current memory/RAM onto your disk, in case of power loss.

Hibernation is a disabled feature by default (due to its potential issues), but you can easily enable it with `Enable Hibernation.cmd` or `Disable Hibernation (default).cmd` in the `Hibernation` folder.

## Printing

Printing is a built-in feature on Windows 10 which is used to print documents. On Atlas we have disabled this to make the experience more fluid and faster. To enable just run the `Enable Printing.cmd` file in the `Printing` folder.

## Process Explorer

Process Explorer is an application made by Microsoft and can be considered a "better" task manager. On Atlas we have kept Task Manager. To make the default "Task Manager" process explorer just run the `Install Process Explorer.cmd` file in the `Process Explorer` folder.

## Search Indexing

Search Indexing is a built-in feature on Windows 10 which is used to index files on your computer. On Atlas we have disabled this to make the experience more fluid and faster. To enable just run the `Enable Search Indexing.cmd` file in the `Search Indexing` folder.

## Start Menu

The start menu folder is a place that stores start menu related tweaks. It also gives you the option to disable the start menu. We will go through all the files in this folder. 

The `Install Open-Shell (run first).cmd` file is there so you can install Open-Shell which you can find more information about [here](https://open-shell.github.io/Open-Shell-Menu/)

The `Unlock Start Menu Tiles.cmd` file allows you to unlock the start menu tiles which you would have noticed on the start menu in normal Windows 10. This is useful if you want to move the tiles around when you add them to the start menu.

The `Atlas Openshell Preset.xml` file is a preset which we recommend you use for Open-Shell but obviously you can change the settings to your liking.

## Troubleshooting

Troubleshooting is a build-in feature on Windows 10 which is used to help you troubleshoot your computer. On Atlas we have disabled this to make the experience more fluid and faster and to avoid any tweaks being reset. To enable just run the `Enable Troubleshooting.cmd` file in the `Troubleshooting` folder.

## UAC

UAC (User Account Control) is a built-in feature on Windows 10 which is used to protect your computer from malicious software. This feature when disabled makes everything be ran as Admin. On Atlas we have disabled this to make the experience more fluid and faster. To enable just run the `Enable UAC and Related Services.cmd` file or run the `Configure UAC` file and enable it in the `UAC` folder.

## UWP

UWP (Universal Windows Platform) is a built-in feature on Windows 10 which is used to run apps from the Microsoft Store. On Atlas we have enabled this. To disable just run the `Disable All UWP.cmd` file in the `UWP` folder.

## VPN

VPN is a built-in feature on Windows 10 which is used to connect to a VPN. On Atlas we have disabled this to make the experience more fluid and faster. To enable just run the `Enable VPN support.cmd` file in the `VPN` folder.

## Wi-FI

Wi-Fi is a built-in feature on Windows 10 which is used to connect to Wi-Fi networks. On Atlas we have enabled this. To disable just run the `Disable Wi-Fi.cmd` file in the `Wi-Fi` folder.

!!! warning
    You may need to install Drivers for Wi-Fi to work. Learn how to do this [here](/Getting%20Started/Post-Installation/Drivers/)
## Xbox

Xbox services are enabled on Atlas because Xbox has a big part of the PC market for gaming. If you wish to disable these services just run the `Disable Xbox Services.cmd` file in the `Xbox` folder. You can also completely remove components these with the `Remove Xbox Components.cmd` file.
