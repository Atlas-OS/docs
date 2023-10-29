---
description: An overview of all the optional tweak scripts installed by the AtlasOS playbook
icon: material/hammer
---

# Optional Tweaks

These are some optional tweaks that you can turn on. For example, you could change the old alt-tab to the new one or change the context menu. You can pick and choose how you like your Windows.

All of the configuration files listed here are located in the `4. Optional Tweaks` folder. In the Atlas folder which is on the Desktop. If you deleted the folder, check [here](../../../faq-and-troubleshooting/common-questions/atlas-folder-missing.md) for how to find it/get it back.

## :material-swap-horizontal-circle-outline: Alt-Tab

The Alt-Tab folder lets you choose whether to use the new Alt-Tab menu or the old one. The new one is used in Windows 10, and the old one is used in Windows 7.

AtlasOS comes with the Legacy Alt-Tab, but you can run the ``Modern Alt-Tab.reg`` file to get the modern one.

## :material-chip: CPU Idle in context menu

By running the ``Add Idle toggle in context menu.reg``, you can toggle idle on and off from the context menu.

## :material-file-arrow-up-down: Delivery Optimisation

*We are sorry, but the documentation for this is not written yet. Feel free to provide your contribution at [https://github.com/Atlas-OS/docs](https://github.com/Atlas-OS/docs).*

## :material-file-find-outline: File Explorer Customization

This is another folder that lets you change how your default file explorer works. Here, we'll talk about each option.

### Compact View

*We are sorry, but the documentation for this is not written yet. Feel free to provide your contribution at [https://github.com/Atlas-OS/docs](https://github.com/Atlas-OS/docs).*

### :material-folder-outline: Folders in This PC

You can change the folders that are shown by default in File Explorer's "This PC" section. Run the ``Remove all folders in This PC (default).reg`` or ``Restore all folders in This PC.reg`` files to remove or add all folders from this section.

### Gallery

*We are sorry, but the documentation for this is not written yet. Feel free to provide your contribution at [https://github.com/Atlas-OS/docs](https://github.com/Atlas-OS/docs).*

### :material-star-outline: Quick Access

In File Explorer, there is a section called "Quick Access" that shows you your pinned folders. Run the ``Remove Quick Access.reg`` or ``Show Quick Access (default).reg`` files to turn this section on or off.

### :material-usb-flash-drive-outline: Removable Drives in Sidebar

Here, you can run the ``Enable Removable Drives in Sidebar.reg`` file to make removable drives show up in the sidebar.

## :material-eye-lock-outline: Lock Screen

By running the ``Show Lock Screen.reg`` file, the lock screen can be restored.

## :material-arrow-up-bold-outline: Run With Priority in context menu

Running with priority is a feature that lets you tell a program how important it should be. By running the ``Add Run With Priority In Context Menu.reg`` file, you can control app priorities via the context menu.

## :material-menu: Send To Context Menu

With the ``Debloat Send To Context Menu.cmd`` file, you can reduce the items in the "Send to context" menu.

## :octicons-file-directory-symlink-16: Shortcut Icon

This lets you switch between the Classic and modern looks for the Shortcut Icons, you also have the option to disable it. By default, this is set to the Windows Default, but you can change it by running the ``Classic.reg`` to change to the Classic syle. Alternatively, you can turn off the icon by running the ``None (security risk).reg`` file. To restore back to the default setting, run the ``Default Windows (default).reg`` file.

## :material-folder-text: Shortcut Text

By default, this is turned off, but you can turn it back on by running the ``Restore Shortcut Text.reg`` file. This will show the text of start menu shortcuts.

## :material-volume-high: Volume Flyout

This lets you switch between the legacy and modern looks for the volume flyout. By default, Atlas uses the modern look, but you can change that by running the ``Old Volume Flyout.reg`` file.

## :octicon-three-bars-16: Windows 11 Context Menu

*We are sorry, but the documentation for this is not written yet. Feel free to provide your contribution at [https://github.com/Atlas-OS/docs](https://github.com/Atlas-OS/docs).*