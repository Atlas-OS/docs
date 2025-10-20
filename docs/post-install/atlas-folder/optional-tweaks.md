---
description: An overview of all the optional tweak scripts installed by the AtlasOS playbook
icon: material/hammer
---

# :material-hammer: Optional Tweaks

These are some optional tweaks that you can turn on. For example, you could change the old alt-tab to the new one or change the context menu. You can pick and choose how you like your Windows.

All of the configuration files listed here are located in the `4. Optional Tweaks` folder. In the Atlas folder which is on the Desktop. If you deleted the folder, check out [our guide to restore the Atlas folder](../../../faq-and-troubleshooting/common-questions/atlas-folder-missing.md).

## Alt-Tab

The Alt-Tab folder lets you choose whether to use the new Alt-Tab menu or the old one. The new one is used in Windows 10, and the old one is used in Windows 7.

Atlas comes with the Legacy Alt-Tab, but if you wish to use the modern menu, run the `Modern Alt-Tab.reg` file.

## Delivery Optimization

Delivery Optimization helps speed up Windows Updates by sharing the data via other Windows machines on your local network. We've disabled this to reduce background network usage. If you wish to enable this, run the `Enable Delivery Optimization.reg` file.

## File Explorer Customization

This is another folder that lets you change how your default file explorer works.

### Compact View

When Windows 11 refreshed the File Explorer, they introduced larger padding to the interface. By default, Atlas sets the File Explorer mode to compact view. You can revert this by going into File Explorer and locating **View** at the top :material-arrow-right: **Compact View** or by running the `Disable Compact View.reg` file.

### Folders in This PC

You can change the folders that are shown by default in File Explorer's "This PC" section. By default, we've removed all of the folders in favour of Quick Access. If you wish to restore the folders, run the `Restore all folders in This PC.reg` file.

### Gallery

Unique to Windows 11 is the gallary feature. In Atlas we disable by default, but if you wish to restore this, run the `Enable Gallery.reg` file.

### Quick Access

In File Explorer, there is a section called "Quick Access" that shows you your pinned folders. By default we show Quick Access, run the `Remove Quick Access.reg` to remove it from File Explorer.

### Removable Drives in Sidebar

You can run the `Enable Removable Drives in Sidebar.reg` file to make removable drives show up in the sidebar.

## Lock Screen

By default, Atlas has the lock screen enabled. If you would like to disable the lock screen, you can run the `Hide Lock Screen.reg` file.

## Run With Priority in context menu

Running with priority is a feature that lets you tell a program how important it should be. By running the `Add Run With Priority In Context Menu.reg` file, you can control app priorities via the context menu (right-click menu).

## Send To Context Menu

With the `Debloat Send To Context Menu.cmd` file, you can reduce the items in the "Send to context" menu.

## Shortcut Icon

This lets you switch between the Classic and modern looks for the shortcut icons, you also have the option to disable it. By default, this is set to the Windows Default, but you can change it by running the `Classic.reg` to change to the classic style. Alternatively, you can turn off the icon by running the `None (security risk).reg` file.

None is a security risk because there will be no way to see if an icon is a shortcut or not. This could leave you a victim of attacks.

## Shortcut Text

By default, this is turned off, but you can turn it back on by running the `Restore Shortcut Text.reg` file. This will show the text of the start menu shortcuts.

## Windows 11 Context Menu

On Atlas, by default, you'll have the old context menu. You can run the `New Context Menu.reg` if you prefer Windows 11's modern context menu.

## Explorer Patcher

The shortcut links to a tool that patches several aspects of Explorer to restore the UI from previous versions of Windows.
