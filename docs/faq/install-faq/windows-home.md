---
description: Does Atlas support Windows Home edition?
icon: material/home-remove
---

# :material-home-remove: Does Atlas support Windows Home edition?

**Although you can install Atlas on Windows Home, we do not recommend it as some of Atlas' privacy, usability, and performance optimizations don't apply.**

Atlas uses group policies to tweak various parts of Windows that generally can't be done in regular Settings. However, many group policies on Windows Home do not work, such as disabling [**Automatic Driver Installation**](../../getting-started/install/install-playbook.md#5-driver-updates).

Additionally, Windows Home is missing valuable features, such as:[^1]

- Hyper-V
- BitLocker encryption
- Windows Subsystem for Linux
- Hosting Remote Desktop

!!! tip "You can always upgrade after installing Atlas"
    You can upgrade to Windows Pro or another supported edition by changing your Windows product key, without any requirement to re-apply Atlas.

[^1]: There are more differences [listed on Wikipedia](https://en.wikipedia.org/wiki/Windows_10_editions#Comparison_chart).
