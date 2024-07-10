---
description: How secure is AtlasOS?
icon: material/shield
---

# :material-shield: How secure is Atlas?

**Atlas aims to be as secure as you want it to be, including the ability to toggle Windows Defender, various mitigations, and Windows Update.**

## Customizability

We believe that power users should be able to have a choice over the balance between security and convenience, only with knowledge of the potential risks.

Atlas alerts users about the risks of disabling security features, as well as never unknowingly reducing security. One way that this is done is through the AME Wizard configuration prompts.

[Configuring Security in Atlas -->](../getting-started/post-installation/atlas-folder/security.md)

## Security compared to unmodified Windows

Fundamentally, unmodified Windows from Microsoft is always going to be the most trusted and secure version of Windows available.

Regardless, Atlas aims to be the most compatible with unmodified Windows security and as transparent as possible. [Atlas is open source on GitHub](https://github.com/Atlas-OS/Atlas), and Ameliorated's AME Wizard utilized by Atlas to make changes has its [backend open source under MIT](https://git.ameliorated.info/Styris/trusted-uninstaller-cli).

Both Ameliorated and Atlas are always finding ways to be as transparent as possible, meaning we are always trying to increase security at any opportunity.

## Legacy versions of Atlas

Legacy versions of Atlas, meaning before the `v0.3.x` versions, previously raised many security concerns. We advise anyone that are on these versions of Atlas to [reinstall Windows and upgrade to the latest version](../getting-started/installation.md).

We listened to the feedback, and we have taken a shift to include maintaining security as a goal of Atlas. Many of the concerns have been rectified in the latest versions, such as:

1. Windows Update support
1. Windows Defender support
1. User Account Control being enabled
1. Virtualization Based Security support
1. Improved transparency and resources about security features

There have also been many feature and stability improvements in general.
