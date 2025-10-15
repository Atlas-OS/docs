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

Each section here corresponds to a sub-folder in the `3. General Configuration` directory located in the Atlas folder, which you can find in the Start Menu or on the desktop. Check out [our guide to restore the Atlas folder](../../../general-faq/atlas-folder-missing.md) if you can't find it.


## :material-update: Automatic Updates

Automatic Windows Updates automatically download and install security and other updates to your computer.

On Atlas, they are disabled by default, as [update notifications](#update-notifications) should notify users of critical updates without interrupting their work. However, this is fundamentally a decrease in security for convenience, and it is an overall personal preference. If you keep them disabled, remember to install updates occasionally for security.

Run the `Enable Automatic Updates.reg` file to enable automatic updates.

## :material-application: Background Apps

By default, Atlas disables background apps in Windows. However, you may need to enable this for games like Sea of Thieves or specific apps with background notifications. To enable background apps, run `Enable Background Apps.reg` and restart.

## :material-run-fast: CPU Idle

!!! danger "Read first"
    Disabling CPU idle on systems where [hyper-threading](https://www.intel.com/content/www/us/en/gaming/resources/hyper-threading.html) or [SMT](https://www.wepc.com/cpu/faq/what-does-smt-mean-what-is-smt-multithreading-explained/) is enabled will cause a major drop in performance. You can't use the script below if Atlas detects that either is enabled.

    Remember that disabling idle will likely cause more power usage and increased temperatures.
    Therefore, it is not recommended to disable idle if you leave your PC running for extended durations, have inadequate cooling, uncontrolled voltages or a laptop.

Disabling idle should theoretically increase performance as it forces the CPU to operate at [C-State 0](https://learn.microsoft.com/en-us/previous-versions/windows/desktop/xperf/p-states-and-c-states), which prevents the CPU clocks from constantly fluctuating and eliminates the latency penalty introduced from restoring and transitioning to a higher C-State.

You can use the `Disable Idle.cmd` script to disable idle, or the `Enable Idle (default).cmd` to enable it. Additionally, you can add a toggle to disable idle on the desktop by running the `Add Idle Toggle in Desktop Context Menu.reg` file.

## :material-laptop: Delivery Optimization

Delivery Optimization helps speed up Windows Updates by sharing the data via other Windows machines on your local network. We've disabled this to reduce background network usage. If you wish to enable this, run the `Enable Delivery Optimization.reg` file.

## :material-share: File Sharing

File sharing allows sending files across your local network to other Windows devices, and it's a part of network discovery.

File sharing is disabled by default on Windows. However, you can only use it on Atlas by running the `Enable File Sharing.cmd` script.

#### Network Navigation Pane

The network navigation pane is in the File Explorer sidebar labeled 'Network,' allowing you to view other devices on your local network.

Atlas disables the network navigation pane by default, but if you want to see the network pane, run the `User Network Navigation Pane choice.reg` file, restart your computer, right-click the File Explorer sidebar, and check the box to enable it.

## :material-gamepad: FSO and Game Bar

!!! note "This doesn't fully disable Game Bar"
    The script included in Atlas to disable Game Bar only turns off support for Game Bar, meaning that games might not use a display mode that supports Game Bar, and it might run in the background less, if at all. However, Game Bar will still be accessible with ++win+g++.
    
    There's no known method to fully disable Game Bar except for uninstalling it, which isn't officially supported and is known to cause issues.

!!! warning "Performance issues"
    Disabling support for Game Bar on modern AMD CPUs could cause [performance problems](https://www.neowin.net/news/microsofts-xbox-game-bar-boosts-windows-11-and-10-gaming-performance-on-amd-ryzen-7950x3d/).

Game Bar is a built-in feature in Windows that can record your screen, take screenshots, show performance information, and more. It relies on [Fullscreen Optimizations](https://devblogs.microsoft.com/directx/demystifying-full-screen-optimizations/), which is shortened to FSO.

Atlas enables both Game Bar and FSO support by default. However, if you want to use [Fullscreen Exclusive](https://wiki.special-k.info/en/SwapChain) instead, run `Disable FSO & Game Bar Support.reg`, which should allow you to use Fullscreen Exclusive in supported games. Remember that specific games might still require the **Disable full-screen optimizations** compatibility option.

## :material-harddisk: Hibernation

Hibernate essentially puts your computer to sleep, but instead of saving your running applications to your RAM, it saves them to your drive. This allows your computer to turn off entirely, meaning hibernation mode uses no power. Once the computer is powered back on, it will resume everything you left off.

Hibernation is disabled by default due to excess storage used for a hibernation file, but you can enable it by running the `Enable Hibernation.cmd` script.

## :material-compass: Location

Microsoft's location service enables Windows devices to pinpoint their exact geographic location, allowing apps to provide location-based features such as navigation.

Atlas disables location by default due to it often not being needed, but you can enable it by running the `Enable Location.cmd` script.

## :material-robot-happy: AI Features

### Microsoft Copilot

!!! tip "Microsoft Edge"
    This feature requires Microsoft Edge, so the script will prompt you to re-install it if Edge is not installed.

[Copilot](https://en.wikipedia.org/wiki/Microsoft_Copilot) is an AI chatbot by Microsoft integrated into the latest Windows 10 and 11 versions, with an icon in the taskbar to open its sidebar where you can interact with it.

By default, Atlas disables Copilot as it is seen as an annoyance to most users and raises privacy concerns for some users. To enable it again, run the `Enable Microsoft Copilot.cmd` script.

### Recall

!!! info "Windows 11-only"

Recall uses AI to automatically take screenshots of the content you view, so that you can easily search or use a timeline to see exactly what you were doing later.

By default, Atlas disables Recall as it is a privacy concern. To re-enable it for supported devices, run the `Enable Recall Support.reg` script.

## :material-phone: Mobile Devices (Phone Link)

'Mobile devices' refers to the Settings page where you can link your phone to Windows in various ways, such as using the 'Phone Link' app or the new 'Manage mobile devices' app in Windows 11.

By default, Atlas disables this Settings page as it conflicts with some policies. Run the `Enable Mobile Device Settings.cmd` script to enable it again.

## :material-tree: Power-saving

This folder's scripts control multiple power-saving aspects, such as the power scheme and device power saving. Disabling power-saving increases power consumption and idle temperatures but can improve responsiveness and performance.

Although the initial setup prompts if you want to disable power-saving, you can toggle it afterward. Run `Default Power-saving.cmd` or `Disable Power-saving.cmd` script and restart your computer. 

## :material-card-search: Search Indexing

Search indexing is a built-in feature in Windows that indexes the contents of your computer. Indexing the contents of your PC helps you get faster results when you're searching it for files and other things.

On Atlas, we have made indexing not search in your files to make the system more lightweight by default, as indexing can be a resource-intensive process. However, if you want to enable all indexing, run the `Enable Search Indexing.cmd` script and restart your computer.

## :material-power-sleep: Sleep

Sleep mode is a feature that puts your device into a state that keeps your work in memory while using very little power, so you can easily and quickly resume what you were doing later.

Atlas enables sleep mode by default. However, some users might want to disable it to use hibernation only, or for other purposes. You can disable sleep by running the `Disable Sleep.cmd` script.

## :material-sleep: Sleep Study

[SleepStudy](https://learn.microsoft.com/en-us/windows-hardware/design/device-experiences/modern-standby-sleepstudy) is a feature in Windows that allows users to diagnose modern standby. By default, Atlas disables SleepStudy's components to reduce any potential overhead it could bring. However, tracking laptop battery levels while sleeping may need these components, so Atlas includes the `Enable Sleep Study.cmd` script to re-enable it.

## :material-store: Store App Archiving

App archiving automatically removes unused apps from your device, preserving their data and settings for easy reinstallation when needed again.

Atlas disables this by default so that you can always use your apps. However, you can enable app archiving again by running `Enable Store App Archiving.reg`.

## :material-restore: System Restore

System Restore is a final resort when taking snapshots of your machine. It backs up certain Windows and application settings that can be restored later.

By default, Atlas leaves System Restore enabled. However, you might want to disable it as it is sometimes ineffective and can cause problems.
You can disable it by running `Disable System Restore.reg` in the `System Restore` folder, followed by a system restart.

## :material-timer: Timer Resolution

!!! info "Windows 11-only"

Atlas includes a script that uses [@valleyofdoom's TimerResolution utility](https://github.com/valleyofdoom/TimerResolution) to increase the precision of Windows' timer, which benefits applications requiring consistent pacing or [sleeping](https://en.wikipedia.org/wiki/Sleep_(system_call)), such as framerate limiters in some games.

However, this is at the cost of increased power consumption and is not always beneficial for all applications, so we recommend you do testing.

Run the `Enable timer resolution.cmd` script to enable this high precision, and use the `! MeasureSleep.exe` utility to track it. See [@valleyofdoom's TimerResolution repository](https://github.com/valleyofdoom/TimerResolution#timerresolution) for more information.

## :material-bell: Update Notifications

Windows Update typically shows update notifications to alert a user of when an update is going to be installed, or if automatic updates are disabled, to manually click 'Check for updates' to update the system.

On Atlas, they are enabled by default so that users with [notifications](#notifications) enabled get alerts about important updates.

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
