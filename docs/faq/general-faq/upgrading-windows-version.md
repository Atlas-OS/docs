---
description: Can I upgrade my Windows version (e.g., 10 to 11) with AtlasOS installed?
icon: material/arrow-up-bold-box-outline
---

# :material-arrow-up-bold-box-outline: Upgrading Windows Version with AtlasOS Installed

Upgrading your underlying Windows version (e.g., from Windows 10 to Windows 11) while AtlasOS is applied is **strongly discouraged and not supported.**

## :material-alert-circle-outline: Why is upgrading not supported?

AtlasOS applies deep modifications to the Windows operating system it's installed on. These changes are specific to the version and build of Windows present during the Atlas playbook execution.

Major Windows version upgrades (like the jump from 10 to 11) involve substantial changes to core system files, services, and the registry. Attempting to perform such an upgrade on an Atlas-modified system can lead to:

*   **System Instability:** Conflicts between the upgrade process and Atlas modifications can cause crashes, boot loops, or unpredictable behavior.
*   **Broken Features:** Atlas tweaks or Windows features might stop working correctly.
*   **Partial or Full Reversion:** The upgrade process may overwrite or undo many of the optimizations and changes applied by Atlas.
*   **Unusable System:** In worst-case scenarios, the system may become unbootable or require a complete reinstallation.

Because of these potential conflicts and the unpredictability of the outcome, the Atlas team does not provide support for systems that have been upgraded in this manner.

## :material-tools: What is the recommended procedure?

If you wish to move to a newer version of Windows (e.g., Windows 11) and continue using AtlasOS, the **only recommended and supported method** is to perform a clean installation.

**Follow the official Installation Guide** to reinstall the desired Windows version (e.g., Windows 11) and apply the corresponding AtlasOS playbook. Remember to back up your personal data beforehand.

[:link: Atlas Installation Guide](../../getting-started/index.md)

This process ensures a clean slate for both the new Windows installation and the Atlas modifications, minimizing the risk of conflicts and ensuring a stable, supported system. 