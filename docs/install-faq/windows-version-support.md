---
description: Which Windows versions does Atlas support?
icon: material/list-status
---

# :material-list-status: Which Windows versions does Atlas support?

**Atlas is compatible with supported versions of Windows 10 and 11 in the same download. However, [Windows Home editions aren't supported.](windows-home.md)**

---

As of the latest version, Atlas only supports:
{ .annotate }

- **Windows 11:** {{ msdl.win11.version }}
- **Windows 10:** {{ msdl.win10.version }}

Only the latest [non-beta/non-Insider](https://en.wikipedia.org/wiki/Windows_Insider) versions are supported. Insider isn't for stability and privacy, as it usually has bugs we can't account for, and it requires sending extra diagnostic data to Microsoft.

We *strongly recommend* following our [installation guide](../getting-started/installation.md) for installing a supported version, as the initial Atlas install requires a Windows reinstallation regardless.

## :material-package: Which Windows editions are supported?

We recommend **Windows Pro** or **Windows Enterprise**. [Except for Windows Home](windows-home.md), most other Windows editions are also supported.

The only exclusions to this are:

- **Enterprise LTSC:** LTSC editions are often not on the latest Windows versions, which we don't test nor support
- **Windows Server:** Supporting it would require too much extra testing
