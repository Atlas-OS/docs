---
description: An overview of all general configuration options installed by the AtlasOS playbook
icon: material/cog
---

# :material-cog: Configuration

This section will present a comprehensive list of the general configuration options in the Atlas folder. It is important to note that you should only modify these configuration settings if you understand what you are doing or if a team member specifically requests you to do so.

For more configuration options, check:

- [Advanced Configuration ->](advanced-configuration.md)
- [Optional Tweaks ->](optional-tweaks.md)
- [Windows Settings ->](windows-settings.md)

You can find the configuration files listed here by opening the Atlas folder in your Start Menu or desktop and then going into the `3. Configuration` folder. Check out [our guide to restore the Atlas folder](../../../faq-and-troubleshooting/common-questions/atlas-folder-missing.md) if you deleted it.

## :material-application: Background Apps

By default, Atlas disables background apps in Windows. However, you may need to enable this for games like Sea of Thieves or specific apps with background notifications. To enable background apps, run `Enable Background Apps.reg` and restart.

## :material-bluetooth: Bluetooth

On Atlas, we have made Bluetooth support a configurable option to allow users who do not use the feature to have fewer running Windows services.

Although the initial setup prompts if you want to disable Bluetooth support, you can toggle it afterward. Run the `Enable Bluetooth.cmd` or `Disable Bluetooth.cmd` file and restart your computer.

Remember that you may need to install drivers for Bluetooth to work. [View our guide here](../../../faq-and-troubleshooting/common-questions/bluetooth-compatibility.md).

## :material-hammer-screwdriver: Diagnostics and Troubleshooting

Troubleshooting is a built-in feature in Windows that helps you troubleshoot issues with your computer.

Atlas disables it by default to have fewer running Windows services. To enable it, run the `Enable Troubleshooting.cmd` file in the `Diagnostics and Troubleshooting` folder and restart your computer.

## :material-gamepad: FSO and Game Bar

Game Bar is a built-in feature in Windows that can record your screen, take screenshots, show performance information, and more. It relies on [Fullscreen Optimizations](https://devblogs.microsoft.com/directx/demystifying-full-screen-optimizations/), which is shortened to FSO.

Atlas enables both Game Bar and FSO support by default. However, if you want to use [Fullscreen Exclusive](https://wiki.special-k.info/en/SwapChain) instead, run `Disable FSO & Game Bar Support.reg`, which should allow you to use Fullscreen Exclusive in supported games. Remember that specific games might still require the **Disable full-screen optimizations** compatibility option.

## :material-network: Network Discovery

Network discovery is a built-in feature in Windows that discovers other computers on your network.

On Atlas, we keep its services enabled by default as we have determined they are not resource-intensive. With that in mind, if you want to disable them, run the `Disable Network Discovery Services.cmd` file and restart.

Be aware that compatibility issues can arise if you disable services like these.

### File Sharing

File sharing allows sending files across your local network to other Windows devices, and it's a part of network discovery.

File sharing is disabled by default on Windows. However, you can only use it on Atlas by running the `Enable File Sharing.cmd` file.

### Network Navigation Pane

The network navigation pane is in the File Explorer sidebar labeled 'Network,' allowing you to view other devices on your local network.

Atlas disables the network navigation pane by default, but if you want to see the network pane, run the `User Network Navigation Pane choice.reg` file, restart your computer, right-click the File Explorer sidebar, and check the box to enable it.

## :material-exclamation-thick: Notifications

On Atlas, we have made notification support a configurable option to allow users who do not want the feature to have fewer Windows services running.

Although the initial setup prompts if you want to disable notification support, you can toggle it afterward. Run the `Enable Notifications.cmd` or `Disable Notifications.cmd` file and restart your computer.

## :material-power-plug: Power

### CPU Idle

!!! danger "Hyper-threading/SMT and power usage warning"
    Disabling CPU idle on systems where [hyper-threading](https://www.intel.com/content/www/us/en/gaming/resources/hyper-threading.html) or [SMT](https://www.wepc.com/cpu/faq/what-does-smt-mean-what-is-smt-multithreading-explained/) is enabled will cause a major drop in performance. You can't use the script below if Atlas detects that either is enabled.

    Remember that disabling idle will likely cause more power usage and increased temperatures.
    Therefore, it is not recommended to disable idle if you leave your PC running for extended durations, have inadequate cooling, uncontrolled voltages or a laptop.


Disabling idle should theoretically increase performance as it forces the CPU to operate at [C-State 0](https://learn.microsoft.com/en-us/previous-versions/windows/desktop/xperf/p-states-and-c-states), which prevents the CPU clocks from constantly fluctuating and eliminates the latency penalty introduced from restoring and transitioning to a higher C-State.

You can use the `Disable Idle.cmd` script to disable idle, or the `Enable Idle (default).cmd` to enable it. Additionally, you can add a toggle to disable idle on the desktop by running the `Add Idle Toggle in Desktop Context Menu.reg` file.

### Hibernation

Hibernate essentially puts your computer to sleep, but instead of saving your running applications to your RAM, it saves them to your drive. This allows your computer to turn off entirely, meaning hibernation mode uses no power. Once the computer is powered back on, it will resume everything you left off.

Hibernation is disabled by default due to excess storage used for a hibernation file, but you can enable it by running the `Enable Hibernation.cmd` script.

### Power-saving

This folder's scripts control multiple power-saving aspects, such as the power scheme and device power saving. Disabling power-saving increases power consumption and idle temperatures but can improve responsiveness and performance.

Although the initial setup prompts if you want to disable power-saving, you can toggle it afterward. Run either the `Default Power-saving.cmd` or `Disable Power-saving.cmd` file and restart your computer.

### Timer Resolution

!!! note "Support"
    This script does not exist on Windows 10, as it is not supported.

Atlas includes a script that utilizes [@amitxv's TimerResolution utility](https://github.com/amitxv/TimerResolution) to increase the precision of Windows' timer, which benefits applications requiring consistent pacing or [sleeping](https://en.wikipedia.org/wiki/Sleep_(system_call)), such as framerate limiters in some games.

However, this is at the cost of increased power consumption and is not always beneficial for all applications, so we recommend that you do your own testing.

Run the `Enable timer resolution.cmd` or `Disable timer resolution (default).cmd` file to toggle this high precision, and use the `! MeasureSleep.exe` utility to track it. See [@amitxv's TimerResolution repository](https://github.com/amitxv/TimerResolution#timerresolution) for more information.

## :material-printer: Printing

On Atlas, we have made printing support a configurable option to allow users who do not utilize it to have fewer Windows services running.

Although the initial setup prompts if you want to disable printing support, you can toggle it afterward. Run the `Enable Printing.cmd` or `Disable Printing.cmd` file and restart your computer.

## :material-card-search: Search Indexing

Search indexing is a built-in feature in Windows that indexes the contents of your computer. Indexing the contents of your PC helps you get faster results when you're searching it for files and other things.

On Atlas, we have disabled it by default to make the system more lightweight, as indexing can be a resource-intensive process. If you want to enable it, run the `Enable Search Indexing.cmd` file and restart your computer.

## :material-microsoft-windows: Start Menu

The Start Menu folder primarily contains the `Install Open-Shell.cmd` script that automatically installs [Open-Shell](https://open-shell.github.io/Open-Shell-Menu/), the [Fluent-Metro skin](https://github.com/bonzibudd/Fluent-Metro), and the Atlas Open-Shell Preset that configures it.

Additionally, there are some extra links to other start menu customization programs. You can uninstall these programs later to revert to the regular Windows start menu.

## :material-restore: System Restore

System Restore is a final resort when taking snapshots of your machine. It backs up certain Windows and application settings that can be restored later.

By default, Atlas leaves System Restore enabled. However, you might want to disable it as it is sometimes ineffective and can cause problems.
You can disable it by running `Disable System Restore.reg` in the `System Restore` folder, followed by a system restart.

## :material-animation: Visual Effects

Windows enables various visual effects by default. These include animated menus, icons, and animations while minimizing and maximizing windows.

These can significantly enhance the appearance of Windows but can reduce overall responsiveness and the feeling of 'snappiness.'

For this reason, Atlas disables visual effects by default. Run the `Default Windows Visual Effects.cmd` file to restore Windows' default visual effects.

## :material-vpn: VPN

A VPN (Virtual Private Network) allows you to connect to the internet more securely and privately. Windows has services to provide support for VPNs.

On Atlas, we keep its services enabled by default as we have determined they are not resource-intensive. With that in mind, if you want to disable them, run the `Disable VPN support.cmd` file.

Be aware that compatibility issues can arise if you disable services like these.

## :material-update: Windows Update

### Automatic Updates

Automatic Windows Updates automatically download and install security and other updates to your computer.

On Atlas, they are disabled by default, as [update notifications](#update-notifications) should notify users of critical updates without interrupting their work. However, this is fundamentally a decrease in security for convenience, and it is an overall personal preference. If you keep them disabled, remember to install updates occasionally for security.

Run the `Enable Automatic Updates.reg` file to enable automatic updates.

### Delivery Optimization

Delivery Optimization helps speed up Windows Updates by sharing the data via other Windows machines on your local network. We've disabled this to reduce background network usage. If you wish to enable this, run the `Enable Delivery Optimization.reg` file.

### Update Notifications

Windows Update typically shows update notifications to alert a user of when an update is going to be installed, or if automatic updates are disabled, to manually click 'Check for updates' to update the system.

On Atlas, they are enabled by default so that users with [notifications](#notifications) enabled get alerts about important updates.