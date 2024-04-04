---
title: Security
description: All the configurable security options in AtlasOS
icon: material/security
---

# :material-security: Security

!!! danger "User risk"
    Disabling security features is at **your own risk**, and you should only disable any security features if:

    - You know what it does
    - You know how to keep yourself safe without it

    **Atlas is not responsible** for any damages caused by disabling security features against our recommendations.

Each section here corresponds to a sub-folder in the `7. Security` directory located in the Atlas folder, which you can find in the Start Menu or on the desktop. Check out [our guide to restore the Atlas folder](../../../faq-and-troubleshooting/common-questions/atlas-folder-missing.md) if you can't find it.

## :material-shield-bug-outline: Core Isolation (VBS)

=== "Information"

    [Core isolation](https://support.microsoft.com/en-us/windows/core-isolation-e30ed737-17d8-42f3-a2a9-87521df09b78) is a security feature of Windows that protects essential core processes of Windows from malicious software by isolating them in memory. It mostly does this by running those core processes in a virtualized environment.
    
    For Windows 11 users on supported hardware, core isolation features are enabled by default. Although effective, it comes at a **significant performance cost**. We generally recommend disabling core isolation features as the [performance hit](https://www.tomshardware.com/news/windows-11-gaming-benchmarks-performance-vbs-hvci-security) outweighs the security benefits for many users. However, remember that core isolation might not affect some applications and games more than others.

    This folder contains the `Current Configuration.cmd` script to check which core isolation features are available, enabled, and configured, along with a shortcut to the Windows Security app core isolation page. Additionally, Atlas's initial configuration in AME Wizard has a prompt for turning off core isolation features.

=== "Core Isolation Features"

    Please note that not all features may be available due to available hardware security features or your Windows edition and version. Windows 11 should generally have more Core isolation features.

    - **Memory integrity**<br/>
      Also known as HVCI or 'Hypervisor-protected Code Integrity,' it acts as a 'security guard' between the core components of Windows.
    - **Credential Guard**<br/>
      Protects `lsass.exe` by preventing attackers from stealing/dumping credentials, as it contains many authentication tokens used by Windows.
    - **Microsoft Vulnerable Driver Blocklist**<br/>
      A blocklist to block drivers with known security vulnerabilities, as drivers have unrestricted access to a system.
    - **Firmware protection**<br/>
      Protects against a compromised UEFI/BIOS, which can backdoor or control the operating system.
    - **Memory access protection**<br/>
      Also known as 'Kernel DMA protection,' which prevents attacks that can occur when a malicious PCI device is plugged in, such as through a Thunderbolt port.
    - **Kernel-mode Hardware-enforced Stack Protection**<br/>
      Protects against [Return-Oriented Programming (ROP)](https://en.wikipedia.org/wiki/Return-oriented_programming) attacks towards the core components of Windows.


## :octicons-shield-check-16: Defender

!!! tip "Using another anti-virus?"
    If you use another anti-virus, disabling Defender isn't needed, as Windows will automatically deactivate it.

For many Windows users, Windows Defender is a **key component** that protects against many threats from the internet, such as ransomware and spyware.

Some users may want to risk using no protection for improved privacy and responsiveness, especially on older hardware, i.e., hard drives.
For this reason, we have given the option to toggle Defender at a component level. You can do this by using the `Toggle Defender.cmd` script.
This folder also has tweaks related to Defender or Windows Security.

Remember that disabling Defender puts you at a **much higher risk** of infection, and Atlas does not recommend it.

## :material-cpu-64-bit: Mitigations

In Atlas' context, mitigations refer to software or hardware techniques implemented to address security vulnerabilities in a CPU. These mitigations help prevent software (e.g., vulnerable games) from being exploited to execute code on the system remotely.

On Atlas, as well as having a prompt in AME Wizard, you can use the `Disable All Mitigations.cmd` script to turn mitigations on or off within Windows, as some older CPUs have significantly worsened performance due to mitigations. However, modern CPUs are unlikely to see a performance gain, and some CPUs can even be negatively impacted (like [Zen 4 CPUs](https://www.phoronix.com/news/AMD-Zen-4-Mitigations-Off)) if you turn off mitigations.

To restore default mitigations, run the `Set Windows Default Mitigations.cmd` script. Alternatively, if you want the maximum security, you can use `Enable All Mitigations.cmd`, but that forces all mitigations to be enabled, which can reduce performance significantly and reduces compatibility.

### Fault Tolerant Heap

!!! info "AMD and Intel CPUs only"
    This tweak does not exist on ARM64-based CPUs.

[Fault Tolerant Heap](https://learn.microsoft.com/en-us/windows/win32/win7appqual/fault-tolerant-heap "Microsoft FTH documentation") is a feature (unrelated to security) that applies software mitigations to repeatedly crashing processes at the cost of significantly reduced performance. Atlas disables this by default.

If you are having consistent application crashes, try enabling FTH.

## :octicons-shield-lock-16: User Account Control (UAC)

[User Account Control (UAC)](https://en.wikipedia.org/wiki/User_Account_Control) is a feature in Windows that helps control what changes software can make to your computer. It helps protect against applications malfunctioning and making harmful changes to your computer.

Please note that most well-made malware can easily bypass UAC and that the only proper way to protect yourself against UAC bypasses is to use a standard user account.

When UAC is disabled, everything will be run as Administrator. This is more of a risk, but if you want to disable it, run the `Disable UAC.cmd` script.
