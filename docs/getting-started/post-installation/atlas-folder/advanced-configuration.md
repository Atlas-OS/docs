---
description: An overview of all advanced configuration options installed by the AtlasOS playbook
icon: material/sign-caution
---

# :material-sign-caution: Advanced Configuration

If you are not confident with your technical ability, it is recommended to avoid this section. Any misinterpretation can result in compatibility issues and other problems. Therefore, it's important to understand what you are doing and how to revert it. This section is intended for advanced users only.

All of the configuration files listed here are located in the `6. Advanced Configuration` folder. In the Atlas folder which is on the Desktop. If you deleted the folder, check out [our guide to restore the Atlas folder](../../../faq-and-troubleshooting/common-questions/atlas-folder-missing.md).

## Affinity

Affinities allow you to specify which core a driver or process runs on. As Windows puts most drivers on Core 0 by default, we can alter this to improve performance and latency. Allocating drivers to their own core will reduce interrupts on Core 0.

This folder contains a few links to some tools to manually set driver affinities.

## Boot Configuration

Here you can change the boot configuration for Windows, which can modify the quality of life and pre-boot behavior.

You can either completely mess things up or potentially (unlikely) improve performance with experimental options.

## DSCP

The Differentiated Services Code Point (DSCP) is a policy for managing network traffic. It prioritizes data from specific applications and games to ensure optimal performance and responsiveness.

When running the script, it will ask you for an executable. Select the executable (game binary file) to enable DSCP.

## NVIDIA Display Container

This allows you to enable/disable the 'NVIDIA Display Container LS service', which connects to a few NVIDIA IPs and uses a tiny bit of CPU usage.
These scripts are aimed at users that have a stripped driver, and people that barely touch the NVIDIA Control Panel.

## Static IP

In this section, you can set up your network configuration as a Static IP, which can be a useful choice if your computer serves as a local server or if you need to do port forwarding. This method also reduces the number of services required.

## Utilities

The files in this folder are open-source projects in our [GitHub utilities repository](https://github.com/Atlas-OS/utilities).

### Process Explorer

Process Explorer is an application part of Microsoft Sysinternals Suite of utilities. Process Explorer can be best described as an advanced version of the Task Manager, allowing the user to see what resources a program is using. More information can be found on [Microsoft's documentation for process explorer](https://learn.microsoft.com/en-us/sysinternals/downloads/process-explorer).

This folder has scripts that can automate the installation/uninstallation of this utility.

### Gameutil

Gameutil is our own utility that can be used to automate tasks such as setting Timer Resolution, killing Desktop Window Manager (DWM) or Explorer, disabling CPU Idle states and cleaning memory. In our GitHub repository, we have some [usage instructions & description](https://github.com/Atlas-OS/utilities/tree/dev#gameutil-rs) to help you get started.

We only recommend the use of Gameutil for Windows 10, as has yet to be updated for full Windows 11 support.

### MSI Utility V3

This is a utility to allows you to enable the Message Signaled Interrupts (MSI) feature on your system's devices, which may help improve performance by eliminating interrupt conflicts from multiple devices. We have a link in this folder to a forum post which further explains the performance and latency benefits of MSI mode, along with the download link for MSI Utility V3.

## Wi-Fi

Wi-Fi is a feature in Windows that lets your computer connect to the internet wirelessly. On Atlas, it has been enabled by default since it is very widely used. To disable it just run the `Disable Wi-Fi.cmd` file in the `Wi-Fi` folder.

You may need to [install drivers](../drivers/getting-started.md) for Wi-Fi to work.
