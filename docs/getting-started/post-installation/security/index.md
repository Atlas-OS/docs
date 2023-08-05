---
description: An overview of all 'Security' options avaliable in the AtlasOS playbook
icon: material/security
---

# Security

!!! danger "User risk"
    Disabling security features is at **your own risk**, and you should only disable any security features if:

    - You know what it does completely
    - You know how to keep yourself completely safe without it

    **Atlas is not responsible** for any damages caused by disabling security features against our recommendations.

In this section, we will list all of the 'Security' options in the Atlas folder, how to change them and their defaults. As the warning says above, make sure you know what you're doing when changing from the defaults.

All of the configuration files listed here are located in the `3. Configuration/5. Security` folder, which is inside of the Atlas folder on the Desktop. If you accidently moved the folder, check [here](/troubleshooting/common-issues/atlas-folder-missing) for how to get it back.

## :material-cpu-64-bit: Mitigations

Mitigations refer to software or hardware techniques implemented to address security vulnerabilities or weaknesses in the CPU of a computer. These mitigations help prevent software (e.g. vulnerable games) from being exploited to remotely execute code on system.

On Atlas, we have scripts and a prompt to enable or disable mitigations within Windows, as some older CPUs have their performance significantly worsened from mitigations. However, it is largely only beneficial on older CPUs, and some newer CPUs (like [Zen 4 CPUs](https://www.phoronix.com/news/AMD-Zen-4-Mitigations-Off)) can be negatively impacted if you disable mitigations, due to newer CPUs being designed for these mitigations.

If you have disabled mitigations and face issues with anticheat software, run the `Set Windows Default Mitigations.cmd` script in the `Mitigations` folder. Alternatively, if you want the maximum security, you can use `Enable All Mitigations.cmd`, but that forces all mitigations to be enabled (unlike the Windows default), which can reduce performance significantly and may potentially reduce compatibility.

## :octicons-shield-check-16: Defender

For most Windows users, Defender is a **key component** of Windows that protects against many threats from the internet, like ransomware and spyware. However, some users may want to take the risk of using no protection for improved privacy and performance/responsiveness, especially on older hardware, i.e. hard drives. However, disabling Defender puts you at a **much higher risk** of infection that you are responsible for, and it's not recommended by Atlas.

Please note that if you want to use another trustworthy antivirus program, disabling Defender isn't needed.

As Atlas believes in user freedom, we have given the option to fully toggle Defender at a component level. You can toggle Defender by using the script in the `Defender` folder and running `Toggle Defender.cmd` for disabling or enabling Defender. The folder also contains tweaks that you can run related to Defender or Windows Security.

## :material-shield-bug-outline: Core Isolation
[Core isolation](https://support.microsoft.com/en-us/windows/core-isolation-e30ed737-17d8-42f3-a2a9-87521df09b78) is a security feature of Windows that protects important core processes of Windows from malicious software by isolating them in memory. It does this by running those core processes in a virtualized environment.

Core isolation is mostly meant to protect against vulnerabilities being exploited in important core processes within Windows, and although it does so effectively, this comes at a **major cost of performance**, especially on older CPUs. At Atlas, we recommend disabling Core isolation as the [performance hit](https://www.tomshardware.com/news/windows-11-gaming-benchmarks-performance-vbs-hvci-security) generally outweighs the security benefits for most users.

For Windows 11 users, Core isolation features are typically enabled by default, as long as your CPU supports Windows 11.

In the `Core Isolation (VBS)` folder, we provide the `Current Configuration.ps1` script to check which Core isolation features are avaliable, enabled and configured, along with other shortcuts to Core isolation features. Additionally, there is a prompt in AME Wizard for disabling Core isolation features.

### :simple-windows11: Current Core isolation features in Windows

Please note that not all features may not be avaliable, due to avaliable hardware security features or  your Windows edition and version. Windows 11 should generally have more Core isolation features.

- Memory integrity
    - Also known as HVCI or 'Hypervisor-protected Code Integrity'
    - Like a security guard between the core components of Windows
- Credential Guard
    - Protects `lsass.exe` by preventing attackers from stealing/dumping credentials from it
    - `lsass.exe` contains lots of authentication tokens used by Windows
- Microsoft Vulnerable Driver Blocklist
    - A blocklist to block drivers with known security vulnerablities, as drivers have unrestricted access to a system
- Firmware protection
    - Protects against a compromised a UEFI/BIOS
- Memory access protection
    - Also known as 'Kernel DMA protection'
    - Prevents attacks that can occur when a malicious PCI device is plugged in
    - A malicious PCI device could be plugged in through a Thunderbolt port, as an example
- Kernel-mode Hardware-enforced Stack Protection
    - Protects against [Return-Oriented Programming (ROP)](https://en.wikipedia.org/wiki/Return-oriented_programming) attacks