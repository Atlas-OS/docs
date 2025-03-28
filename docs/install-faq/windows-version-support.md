---
description: Which Windows versions does Atlas support and can Atlas be applied on your system?
icon: material/help
---

# :material-help: Which Windows Versions Does Atlas Support?

Atlas is designed to work on specific, stable Windows builds to ensure a reliable experience. **Atlas supports the latest stable Windows 10 and 11 versions in the same download.** However, [Windows Home editions aren't supported](windows-home.md).

---

## :material-check: Supported Windows Builds

As of the latest version, Atlas only supports:
  
- **Windows 11:** {{ msdl.win11.version }} 
- **Windows 10:** {{ msdl.win10.version }}
- **Windows 11 ARM:** {{ msdl.win11.version }} 

For the best results, please use one of these supported stable builds.

!!! Warning "Pre‑release Channels Not Supported"
    Pre‑release channels are not supported. This includes:  
    • **Canary**  
    • **Dev**  
    • **Beta**  
    • **Release Preview**

Only the latest non‑beta, non‑Insider versions are supported.  
Insider builds **are not** designed for **stability**, may include untested bugs, and require extra diagnostic data to be sent to Microsoft.

---

## :material-package: Supported Windows Editions

We recommend **Windows Pro** or **Windows Enterprise**. With the exception of [Windows Home](windows-home.md), most other Windows editions are supported. The only exclusions are:

- **Enterprise LTSC:** These editions often lag behind the latest Windows versions, which we don't test or support.
- **Windows Server:** Supporting these would require too much extra testing.

We *strongly recommend* following our [installation guide](../getting-started/installation.md) for installing a supported version, as the initial Atlas install requires a Windows reinstallation regardless.
