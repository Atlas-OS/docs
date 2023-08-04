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

If you have disabled mitigations and face issues with anticheat software, run the `Set Windows Default Mitigations.cmd` script in the `Mitigations` folder. Alternatively, if you want the maximum security, you can use `Enable All Mitigations.cmd`, but that forces all mitigations to be enabled (unlike the Windows default), which can reduce performance significantly and may potentially reduce compatibility, while increasing system security.