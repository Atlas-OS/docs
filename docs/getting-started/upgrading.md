---
title: Upgrading AtlasOS
description: How to upgrade an existing AtlasOS installation to a newer version without reinstalling Windows.
icon: material/rocket-launch
---

# :material-rocket-launch: Upgrading AtlasOS

> **TLDR:** If you're already running AtlasOS **v0.4.x or later**, you can upgrade straight to a newer version (for example v0.5.x) with AME Wizard. Clean installs are not required, but are still recommended.  

## Requirements

* Your PC must currently have **AtlasOS 0.4.x or newer** installed.  
  Users on **0.3.x** need to perform a fresh install instead.
* The latest **AME Wizard** executable.  
* The **new Atlas Playbook** (`.apbx`) you want to upgrade to (e.g. `Atlas Playbook 0.5.x`).

## Step-by-step guide

1. **Download assets**  
   Grab the newest Atlas Playbook and AME Wizard from the [AtlasOS website](https://atlasos.net) (or the same links used in the installation guide).
2. **Launch AME Wizard**  
   Run `AME Wizard Beta.exe` (update the wizard first if it offers an update).
3. **Drag the playbook in**  
   Drop the downloaded `.apbx` file into the AME Wizard window.
4. **Choose "Upgrade"**  
   When prompted, select **Upgrade** rather than **Run again**.  
   AME Wizard will analyse the current installation and apply only the changes required for the new version.
5. **Let the wizard finish**  
   Follow on-screen instructions and wait until the process completes. Your PC will reboot.

## What happens to my settings?

* All user files, apps and most AtlasOS tweaks will be kept.
* **Known limitation:** Upgrading **from 0.4.x → 0.5.x** currently **does not carry over the Atlas Folder configuration** (General Configuration, Interface Tweaks, etc.). You'll need to re-apply these after the upgrade. This will not be a problem when upgrading to 0.5.x → later.  

## Troubleshooting & older versions

* If AME Wizard doesn't offer the **Upgrade** option, double-check that you're on Atlas 0.4.x or newer by using the [Checking Atlas Version](../general-faq/checking-atlas-version.md) guide.
* Systems on **0.3.x** can't be upgraded in-place—follow the [Installation guide](installation.md) for a clean reinstall.

---

Need help? Ask in the [:simple-discord: Discord server](https://discord.atlasos.net) or open a topic on [:material-github: GitHub Discussions](https://github.com/Atlas-OS/Atlas/discussions). 