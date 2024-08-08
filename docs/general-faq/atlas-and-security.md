---
description: How secure is AtlasOS?
icon: material/shield
---

# :material-shield: How secure is Atlas?

**Atlas aims to be as secure as you want, including the ability to toggle Windows Defender, [mitigations](../getting-started/post-installation/atlas-folder/security.md#mitigations), and automatic Windows updates freely.**

While knowing potential risks, we believe power users should be able to customize security and convenience. Atlas alerts users about the dangers of turning off security features. We alert you through pre-install configuration prompts, [documentation](../getting-started/post-installation/atlas-folder/security.md), and our Atlas folder scripts.

Additionally, you can always change security post-install.

## :material-microsoft: Security compared to unmodified Windows

Fundamentally, unmodified Windows from Microsoft will always be the most trusted and secure version of Windows available.

Regardless, Atlas aims to have similar parity with unmodified Windows' security while being as transparent as possible. [Atlas is open source on GitHub](https://github.com/Atlas-OS/Atlas), and Ameliorated's AME Wizard, utilized by Atlas to make changes, has its [backend open source under MIT](https://git.ameliorated.info/Styris/trusted-uninstaller-cli).

## :material-timeline-question: Legacy versions of Atlas

Versions of Atlas earlier than `v0.3` are now considered legacy and previously raised many security concerns. We **strongly recommend** that anyone on these Atlas versions [reinstall Windows and upgrade to the latest version](../getting-started/installation.md), as they are unsecure and unsupported.

### Why was Atlas unsecure previously?

When Atlas became more popular, we realized the necessity of catering to a broader audience. Under new development, we acted on the feedback and have shifted to include maintaining security in Atlas's goals, which is what we should have done previously.

### What has changed since?

As well as feature and stability improvements, we rectified the security concerns in the latest versions, such as:

1. Windows Update support
1. Windows Defender support
1. User Account Control enabled by default
1. Core isolation support
1. Improved transparency and resources about security features