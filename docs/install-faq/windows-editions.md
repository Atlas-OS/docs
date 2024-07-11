---
description: Which Windows editions Atlas supports
icon: material/list-status
---

# :material-list-status: Which Windows edition should I use with AtlasOS?

**Atlas does not officially support or recommend Windows Home editions due to its limited amount of customization, meaning some of Atlas' configurations might not apply.**

## :material-check: What's Officially Supported

Atlas is officially tested with Windows **Professional** and **Enterprise**. A full list of all the editions that should theoretically work without issues is below:

1. Windows Pro
1. Windows Enterprise
1. Windows Pro for Workstations
1. Windows Education

## :material-close: Why not Windows Home?

### Group Policies

Most notably, **Automatic Driver Installation** cannot be disabled on Windows Home edition.

It's not that the Group Policy Editor is missing in the Windows Home edition, but rather, many of the policies it controls do not apply to the Home edition. This means that even if it was present, Atlas wouldn't have the same level of customization and control over system settings as you would with Windows Pro.

### Features

Windows Home is missing useful features such as:

- Hyper-V
- BitLocker encryption
- Windows Subsystem for Linux
- Remote Desktop (as a server)

There are more differences [listed on Wikipedia](https://en.wikipedia.org/wiki/Windows_10_editions#Comparison_chart).
