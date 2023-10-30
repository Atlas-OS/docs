---
description: An overview of all advanced configuration options installed by the AtlasOS playbook
icon: material/sign-caution
---

# Advanced Configuration

If you are not confident with your technical ability, it is recommended to avoid this section. Any misinterpretation can result in compatibility issues and other problems. Therefore, it's important to understand what you are doing and how to revert it. This section is intended for advanced users only.

All of the configuration files listed here are located in the `6. Advanced Configuration` folder. In the Atlas folder which is on the Desktop. If you deleted the folder, check [here](../../../faq-and-troubleshooting/common-questions/atlas-folder-missing.md) for how to find it/get it back.

## Affinity

Affinity allows you to specify which CPU cores your processes should be bound to, this can also be used to prioritise the processing and polloing of device changes. This can help improve performance, efficiency and latency when configured correctly. This folder contains a few links to resources we recommend using.

## Boot Configuration

Here you can change the boot configuration for Windows, which can modify system timers, QoL, mitigations and more.

## DSCP

Differentiated Services Code Point (DSCP) is a policy that can be used to prioritise network traffic from specific applications or games on your computer.

## NVIDIA Display Container

This allows you to enable/disable the 'NVIDIA Display Container LS service', which connects to a few NVIDIA IPs and uses a tiny bit of CPU usage.
These scripts are aimed at users that have a stripped driver, and people that barely touch the NVIDIA Control Panel.

## Static IP

This section allows you to set your current network configuration as a Static IP. This is useful if you are using your computer as a local server or if you are doing anything that requires port forwarding.

## Utilities

We have three utilities available in this folder.

### Process Explorer

Process Explorer is an application part of Microsoft Sysinternals Suite of utilities. Process Explorer can be best described as an advanced version of the Task Manager, allowing the user see what resources a program is using. More information can be found on Microsoft's documentation [here](https://learn.microsoft.com/en-us/sysinternals/downloads/process-explorer). This folder has scripts that can automate the installation/uninstallation of this utility.

### Gameutil

Gameutil is our own utility that can be used to automate tasks such as setting Timer Resolution, killing Desktop Window Manager (DWM) or Explorer, disabling CPU Idle states and cleaning memory. Instructions for using this utility can be found [here](https://github.com/Atlas-OS/utilities/tree/dev#gameutil-rs)

!!! tip
    If you wish to contribute to this utility, please see our [Contribution Guidelines](../../../contributions.md).

### MSI Utility V3

This is a utility to allow you to use the Message Signaled Interrupts (MSI) feature of your PCIe slot on your motherboard, which can help improve performance by reducing interrupt latency and allowing for more concurrent message content to memory addresses. We have a link in this folder to a forum post which further explains the performance benefits of MSI mode, along with the download link for MSI Utility V3.