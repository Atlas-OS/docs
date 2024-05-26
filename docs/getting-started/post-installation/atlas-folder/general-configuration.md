---
description: An overview of all general configuration options installed by the AtlasOS playbook
icon: material/cog
---

# :material-cog: General Configuration

This page will present a comprehensive list of the general configuration options in the Atlas folder. It is important to note that you should only modify these configuration settings if you understand what you are doing or if a team member requests you to do so.

For more configuration options, check:

- [Interface Tweaks ->](interface-tweaks.md)
- [Windows Settings ->](windows-settings.md)
- [Advanced Configuration ->](advanced-configuration.md)

Each section here corresponds to a sub-folder in the `3. General Configuration` directory located in the Atlas folder, which you can find in the Start Menu or on the desktop. Check out [our guide to restore the Atlas folder](../../../faq-and-troubleshooting/common-questions/atlas-folder-missing.md) if you can't find it.

## :material-application: Background Apps

By default, Atlas disables background apps in Windows. However, you may need to enable this for games like Sea of Thieves or specific apps with background notifications. To enable background apps, run `Enable Background Apps.reg` and restart.

## :material-bluetooth: Bluetooth

On Atlas, we have made Bluetooth support a configurable option to allow users who do not use the feature to have fewer running Windows services.

Although the initial setup prompts if you want to disable Bluetooth support, you can toggle it afterward. Run the `Enable Bluetooth.cmd` or `Disable Bluetooth.cmd` script and restart your computer.

Remember that you may need to install drivers for Bluetooth to work. [View our guide here](../../../faq-and-troubleshooting/common-questions/bluetooth-compatibility.md).

## :material-gamepad: FSO and Game Bar

!!! note "This doesn't fully disable Game Bar"
    The script included in Atlas to disable Game Bar only turns off support for Game Bar, meaning that games might not use a display mode that supports Game Bar, and it might run in the background less, if at all. However, Game Bar will still be accessible with ++win+g++.
    
    There's no known method to fully disable Game Bar except for uninstalling it, which isn't officially supported and is known to cause issues.

!!! warning "Performance issues"
    Disabling support for Game Bar on modern AMD CPUs could cause [performance problems](https://www.neowin.net/news/microsofts-xbox-game-bar-boosts-windows-11-and-10-gaming-performance-on-amd-ryzen-7950x3d/).

Game Bar is a built-in feature in Windows that can record your screen, take screenshots, show performance information, and more. It relies on [Fullscreen Optimizations](https://devblogs.microsoft.com/directx/demystifying-full-screen-optimizations/), which is shortened to FSO.

Atlas enables both Game Bar and FSO support by default. However, if you want to use [Fullscreen Exclusive](https://wiki.special-k.info/en/SwapChain) instead, run `Disable FSO & Game Bar Support.reg`, which should allow you to use Fullscreen Exclusive in supported games. Remember that specific games might still require the **Disable full-screen optimizations** compatibility option.

## :material-chat-processing: Microsoft Copilot

!!! tip "Microsoft Edge"
    This feature requires Microsoft Edge, so the script will prompt you to re-install it if Edge is not installed.

[Copilot](https://en.wikipedia.org/wiki/Microsoft_Copilot) is an AI chatbot by Microsoft integrated into the latest Windows 10 and 11 versions, with an icon in the taskbar to open its sidebar where you can interact with it.

By default, Atlas disables Copilot as it is seen as an annoyance to most users and raises privacy concerns for some users. To enable it again, run the `Enable Microsoft Copilot.cmd` script.

## :material-phone: Mobile Devices (Phone Link)

'Mobile devices' refers to the Settings page where you can link your phone to Windows in various ways, such as using the 'Phone Link' app or the new 'Manage mobile devices' app in Windows 11.

By default, Atlas disables this Settings page as it conflicts with some policies. Run the `Enable Mobile Device Settings.cmd` script to enable it again.

## :material-network: Network Discovery

Network discovery is a built-in feature in Windows that discovers other computers on your network.

On Atlas, we keep its services enabled by default as we have determined they are not resource-intensive. With that in mind, if you want to disable them, run the `Disable Network Discovery Services.cmd` script and restart.

Be aware that compatibility issues can arise if you disable services like these.

### File Sharing

File sharing allows sending files across your local network to other Windows devices, and it's a part of network discovery.

File sharing is disabled by default on Windows. However, you can only use it on Atlas by running the `Enable File Sharing.cmd` script.

### Network Navigation Pane

The network navigation pane is in the File Explorer sidebar labeled 'Network,' allowing you to view other devices on your local network.

Atlas disables the network navigation pane by default, but if you want to see the network pane, run the `User Network Navigation Pane choice.reg` file, restart your computer, right-click the File Explorer sidebar, and check the box to enable it.

## :material-exclamation-thick: Notifications

On Atlas, we have made notification support a configurable option to allow users who do not want the feature to have fewer Windows services running.

Although the initial setup prompts if you want to disable notification support, you can toggle it afterward. Run the `Enable Notifications.cmd` or `Disable Notifications.cmd` script and restart your computer.

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

Although the initial setup prompts if you want to disable power-saving, you can toggle it afterward. Run `Default Power-saving.cmd` or `Disable Power-saving.cmd` script and restart your computer. 

### Sleep Study

[SleepStudy](https://learn.microsoft.com/en-us/windows-hardware/design/device-experiences/modern-standby-sleepstudy) is a feature in Windows that allows users to diagnose modern standby. By default, Atlas disables SleepStudy's components to reduce any potential overhead it could bring. However, tracking laptop battery levels while sleeping may need these components, so Atlas includes the `Enable Sleep Study.cmd` script to re-enable it.

### Timer Resolution

!!! info "Windows 11-only"

Atlas includes a script that utilizes TimerResolution utilityto increase the precision of Windows' timer, which benefits applications requiring consistent pacing or [sleeping](https://en.wikipedia.org/wiki/Sleep_(system_call)), such as framerate limiters in some games.

However, this is at the cost of increased power consumption and is not always beneficial for all applications, so we recommend you do testing.

Run the `Enable timer resolution.cmd` script to enable this high precision, and use the `! MeasureSleep.exe` utility to track it.

## :material-printer: Printing

On Atlas, we have made printing support a configurable option to allow users who do not utilize it to have fewer Windows services running.

Although the initial setup prompts if you want to disable printing support, you can toggle it afterward. Run the `Enable Printing.cmd` or `Disable Printing.cmd` script and restart your computer.

## :material-card-search: Search Indexing

Search indexing is a built-in feature in Windows that indexes the contents of your computer. Indexing the contents of your PC helps you get faster results when you're searching it for files and other things.

On Atlas, we have disabled it by default to make the system more lightweight, as indexing can be a resource-intensive process. If you want to enable it, run the `Enable Search Indexing.cmd` script and restart your computer.

## :material-restore: System Restore

System Restore is a final resort when taking snapshots of your machine. It backs up certain Windows and application settings that can be restored later.

By default, Atlas leaves System Restore enabled. However, you might want to disable it as it is sometimes ineffective and can cause problems.
You can disable it by running `Disable System Restore.reg` in the `System Restore` folder, followed by a system restart.

## :material-vpn: VPN

A VPN (Virtual Private Network) allows you to connect to the internet more securely and privately. Windows has services to provide support for VPNs.

On Atlas, we keep its services enabled by default as we have determined they are not resource-intensive. With that in mind, if you want to disable them, run the `Disable VPN support.cmd` script.

Be aware that compatibility issues can arise if you disable services like these.

## :material-search-web: Web Search (includes Search Highlights)

Web search refers to Windows' online functionality related to the search in the start menu or search icon on the taskbar, such as Bing search results.

Search highlights are a part of this in the form of an icon on the search box that allows you to see the current topic of the day.

By default, Atlas disables web search as it makes Windows Search feel slower and has potential privacy issues for some users. You can enable web search again by running the `Enable Web Search.cmd` script.

## :material-widgets: Widgets (News and Interests)

!!! tip "Microsoft Edge"
    This feature requires Microsoft Edge, so the script will prompt you to re-install it if Edge is not installed.

[Widgets](https://support.microsoft.com/en-us/windows/stay-up-to-date-with-widgets-7ba79aaa-dac6-4687-b460-ad16a06be6e4), known as [News and Interests](https://support.microsoft.com/en-gb/windows/stay-up-to-date-with-news-and-interests-a39baa08-7488-4169-9ed8-577238f46f8f) on Windows 10, are additions to the taskbar that have cards that include information such as the news and the weather.

By default, Atlas disables Widgets or News and Interests because it is seen as an annoyance to many users and a potential privacy concern to some users. You can enable Widgets or News and Interests again by running the `Enable Widgets.cmd` script.

## :material-pine-tree: Windows Spotlight

Windows Spotlight is a feature included with Windows 10 and 11, which downloads images and advertisements from Bing and displays them as background wallpapers on the lock screen or desktop.

By default, Atlas disables it as Atlas has its theme, and the feature raises privacy concerns for some users. To enable it, run the `Windows Spotlight.reg` file and restart your computer.

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
