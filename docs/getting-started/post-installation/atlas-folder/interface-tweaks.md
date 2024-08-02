---
description: An overview of all the optional tweak scripts installed by the AtlasOS playbook
icon: material/hammer
---

# :material-hammer: Interface Tweaks

Atlas applies many interface tweaks to improve Windows' general usability, with customizability in many changes. For example, you could toggle Windows 11's modern context menu. Overall, we aim to enable you to pick and choose how you like your Windows.

Each section here corresponds to a sub-folder in the `3. Interface Tweaks` directory located in the Atlas folder, which you can find in the Start Menu or on the desktop. Check out [our guide to restore the Atlas folder](../../../general-faq/atlas-folder-missing.md) if you can't find it.

## :material-keyboard-tab: Alt-Tab

The Alt-Tab folder lets you choose whether to use the modern Alt-Tab menu or the legacy one. The modern one is the default Windows Alt-Tab menu, while the legacy one is used in Windows 7 and below.

By default, Atlas keeps the modern Alt-Tab menu, but if you wish to use the legacy menu, run the `Legacy Alt-Tab.reg` file.

## :material-gesture-swipe-down: Edge Swipe

Edge swipe is anything that has to do with gestures on the edges of the screen, e.g., on touchscreens, swiping right or left to open Widgets or the Notification Center.

However, these gestures do not only include touchscreen devices. It also consists of a title bar that shows when you put your mouse cursor to the top of the screen in certain fullscreen games, likely from the Microsoft Store.

Although such gestures are meant to be convenient, many users are inconvenienced by accidentally triggering them. For this reason, edge swipe is disabled by default on Atlas. To enable it again, run `Allow Edge Swipe.reg` and restart Explorer.

## :material-menu-open: Context Menus

### Extract in the Context Menu

By default, Atlas hides the extract option in the context menu and replaces it with [NanaZip](https://github.com/M2Team/NanaZip).

To add back the extract option in the context menu, run `Add Extract.reg`, go up a directory and run `Restart Explorer.cmd`.

### Run With Priority in the Context Menu

Process priorities are a feature in Windows that tells Windows how to allocate resources to an application.

You can run an application with a custom-defined priority using the context menu by running the `Add Run With Priority In Context Menu.reg` file.

### Send To Context Menu

With the `Debloat Send To Context Menu.cmd` script, you can toggle the default items in the "Send To" context menu.

### Terminals Context Menu

??? danger "SYSTEM User Permissions"
    Please be advised that the SYSTEM user privilege grants complete access to your system, and any unintended actions resulting from its use may damage core operating system components. This privilege should only be used by those aware of its potential consequences.

With the `Add Terminals.reg` file, you can add a context menu with varying privileges to launch various shells to the context menu. By default, this includes Windows Terminal, PowerShell, and Command Prompt, which you can each launch as a standard user, administrator, or SYSTEM user.

You can alternatively use `Add Terminals (no Windows Terminal).reg` to have the 'Terminals' context menu not have Windows Terminal.

### Windows 11 Context Menu

!!! info "Windows 11-only"

By default, Atlas restores the legacy context menu on Windows 11, which has more options and is more responsive. You can run the `New Context Menu.reg` file if you prefer the modern context menu.

## :material-folder-cog: File Explorer Customization

### App Icons on Thumbnails

By default, Atlas displays the default app for certain files in the corner of the thumbnail. A common example would be a video thumbnail showing the associated media player in the bottom right.

To disable this, run `Disable App Icons on Thumbnails.reg`, go up a directory and use the 'Restart Explorer' shortcut.

### Automatic Folder Discovery

On default Windows, File Explorer determines the type of folder based on its content and applies a respective template. For example, a folder containing primarily videos will get the "Icons" view type.

On Atlas, it is disabled by default due to responsiveness issues experienced by some users when navigating through File Explorer. You can re-enable this feature by running `Enable Automatic Folder Discovery.reg`, going up a directory and running `Restart Explorer.cmd`.

### Compact View

!!! info "Windows 11-only"

When Windows 11 refreshed the File Explorer, Microsoft introduced larger padding to the interface. This change can be reverted by using File Explorer's compact view mode.

By default, Atlas enables compact mode. You can disable it by going into File Explorer and navigating to **View** -> **Show** -> **Compact View** at the top, or by running the `Disable Compact View.reg` file.

### Folders in This PC

!!! info "Windows 10-only"

You can change the folders shown by default in File Explorer's "This PC" section. By default, Atlas removes all of the folders in favor of Quick Access. If you wish to restore the folders, run the `Restore all folders in This PC.reg` file.

### Gallery

!!! info "Windows 11-only"

In Windows 11, the Gallery is a pane in the File Explorer sidebar to make it easy to access your photos. By default, Atlas disables it, but if you wish to restore it, run the `Enable Gallery.reg` file.

### Quick Access

!!! info "Windows 10-only"

In File Explorer, a section in the File Explorer sidebar called "Quick Access" shows you your pinned folders. By default, Atlas keeps Quick Access enabled, but you can run the `Remove Quick Access.reg` to remove it from File Explorer.

### Removable Drives in Sidebar

By default, Windows shows removable drivers in the File Explorer sidebar, such as USB sticks. As you can use "This PC" in the sidebar to view your drives instead, Atlas disables this by default to reduce clutter.

To enable it, run the `Enable Removable Drives in Sidebar.reg` file.

## :material-lock: Lock Screen

The lock screen in Windows shows the date and time and, optionally, other add-ons.

By default, Atlas has the lock screen enabled. If you want to disable the lock screen, run the `Hide Lock Screen.reg` file.

## :material-file-link: Shortcut Icon

Shortcuts created in Windows have an icon indicating that they're shortcuts by default.

You can customize this icon on Atlas by disabling it or setting it to the legacy but smaller classic icon. Run either the `Classic.reg` file or the `None (security risk).reg` file.

None is a security risk because there will be no way to see whether an icon is a shortcut. For example, you could double-click something with a folder icon, thinking it's a folder, but it could be a shortcut to run something malicious.

## :material-link-edit: Shortcut Text

By default, Windows appends `- Shortcut` to the end of new shortcut names. By default, Altas disables this. You can tell something is a shortcut by looking at the icon anyway.

You can restore the default `- Shortcut` text using the `Restore Shortcut Text.reg` file.

## :material-microsoft-windows: Start Menu

!!! info "AMD and Intel CPUs only"
    Open-Shell is incompatible with ARM64-based CPUs, so the script and preset linked below won't exist for Atlas installations on ARM.

The Start Menu folder primarily contains the `Install Open-Shell.cmd` script that automatically installs [Open-Shell](https://open-shell.github.io/Open-Shell-Menu/), the [Fluent-Metro skin](https://github.com/bonzibudd/Fluent-Metro), and the Atlas Open-Shell Preset that configures it.

Additionally, there are some extra links to other start menu customization programs. You can uninstall these programs later to revert to the regular Windows start menu.

## :material-file-document-multiple: Unlock Recent Items

In this case, recent items refer to the multiple features in Windows that track recently opened documents, application usage, and more.

By default, Atlas disables recent items using policies, meaning you can't change the settings. However, by running `Unlock Recent Items.cmd`, you can unlock recent item settings and re-enable whichever you'd like.

## :material-message-text: Verbose Status Messages

By default, Atlas has verbose startup, shutdown, logon, and logoff status messages so you can have more insight into exactly what's happening in each process.

You can disable verbose status messages by running the `Disable Verbose Messages.reg` file.

## :material-animation: Visual Effects

Windows enables various visual effects by default. These include animated menus, icons, and animations while minimizing and maximizing windows.

These can significantly enhance the appearance of Windows but can reduce overall responsiveness and the feeling of 'snappiness.'

For this reason, Atlas disables visual effects by default. Run the `Default Windows Visual Effects.cmd` file to restore Windows' default visual effects.
