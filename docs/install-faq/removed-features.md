---
description: Lists of the different components and features removed or disabled from Atlas
icon: material/cog
---

# :material-cog: Components and features removed or disabled from Atlas

Atlas turns off many unnecessary Windows components and features for optimal performance, usability, and privacy; for some features or components, enabling them again requires manual tweaking. We have compiled a list of most of Atlas's changes on this page.

To see the exact changes made, refer to the [Atlas source code](https://github.com/Atlas-OS/Atlas).

## :material-delete: What's permanently deleted?

These components require a Windows reinstall to get back.

- [Smart App Control](https://support.microsoft.com/en-gb/topic/what-is-smart-app-control-285ea03d-fa88-4d56-882e-6698afdb7003)
    - Once it's disabled in Windows, you can't reinstall it
    - Disabled as it sends lots of data to Microsoft
    - Requires optional diagnostic data in Windows
    - Causes unusable slowdowns if Defender is disabled

## :material-cog-pause: What's disabled?

These components require manual tweaking to re-enable and are not tested.

- Telemetry
    - Atlas has the option to toggle telemetry components for troubleshooting
    - The underlying policies turning off various telemetry have no options in the Atlas folder. This includes Windows Error Reporting, CEIP, and more
- Various syncing using a Microsoft account
- General advertisements and Windows tips
- Uncommonly used context menus
- Activity history

## :material-application: Applications uninstalled by default

These can be reinstalled after installation, but are removed by default.

- **Internet Explorer**<br/>
  Can be re-enabled as an optional feature
- **OneDrive**<br/>
  If it's set up, it's not removed. This is to prevent data loss
- **Microsoft Edge**<br/>
  Optional - the user has a choice to keep or remove it<br/>
  Edge can be reinstalled using the `1. Software\Remove Edge.cmd` script
- **Steps Recorder**<br/>
  Deprecated - can be re-enabled as an optional feature
- **Legacy Windows Media Player**<br/>
  Replaced by modern player - can be re-enabled as an optional feature
- **Maths Recognizer**<br/>
  Can be enabled as an optional feature

### Microsoft Store Apps

You can reinstall all of the below using the Microsoft Store.

| **Store Apps (Column 1)** | **Store Apps (Column 2)**           | **Store Apps (Column 3)** |
| ------------------------- | ----------------------------------- | ------------------------- |
| Microsoft Teams           | Clipchamp                           | Disney+                   |
| Cortana (deprecated)      | Xbox Console Companion (deprecated) | Mail and Calendar         |
| Tips (deprecated)         | Films & TV                          | Microsoft Family Safety   |
| Dev Home                  | Microsoft Weather                   | Microsoft News            |
| Get Help                  | 3D Viewer                           | Microsoft Office Hub      |
| Microsoft Sticky Notes    | Microsoft OneNote                   | People                    |
| Skype                     | Microsoft To Do                     | Windows Alarms & Clock    |
| Feedback Hub              | Windows Maps                        | Voice Recorder            |
| Phone Link                | Snipping Tool (optional)            | Snip & Sketch (optional)  |

## Having a problem?

If something isn't working, search the documentation for a script or configuration file to fix the particular feature or service. Atlas allows you to toggle many options inside the Atlas configuration folder.
