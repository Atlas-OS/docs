---
description: Is Windows Home edition supported by Atlas?
icon: material/home-remove
---

# :material-home-remove: Does Atlas support Windows Home edition?

**Atlas does not officially support Windows Home edition, as many of its privacy, usability, and performance optimizations rely on features unavailable in this edition.**

Atlas uses group policies to tweak various parts of Windows that generally can't be done in regular Settings. However, many of these group policies, such as disabling [**Automatic Driver Installation**](../../getting-started/install/install-playbook.md#5-driver-updates), are not functional on Windows Home.

Additionally, Windows Home is missing valuable features, including:

- **Hyper-V**
- **BitLocker encryption**
- **Hosting Remote Desktop**

While it is technically possible to install Atlas on Windows Home, please note that support for this configuration is limited, and we may not be able to assist with any issues you encounter.

For the best experience, we recommend using a supported edition of Windows, such as Pro, Pro for Workstations, or Enterprise.

[^1]: There are more differences [listed on Wikipedia](https://en.wikipedia.org/wiki/Windows_10_editions#Comparison_chart).
