---
description: How to contribute to the AtlasOS Playbook
icon: custom/atlas
---

# :custom-atlas: Contributing to the Atlas Playbook

This page will cover how to modify, test, and build Atlas. We highly recommend reading through the [Contribution Guidelines](contribution-guidelines.md) first!

## :material-book-search: How the Playbook works

### What Playbooks are

AME Wizard Playbooks are a [script-esque](https://en.wikipedia.org/wiki/Scripting_language) system structured in [YAML](https://gettaurus.org/docs/YAMLTutorial/) to do various tasks, like [running executables](https://docs.ameliorated.io/developers/actions/Run.html) or setting [Registry entries](https://docs.ameliorated.io/developers/actions/RegistryValue.html). An [open-source backend](https://github.com/Ameliorated-LLC/trusted-uninstaller-cli) runs these Playbooks on an easy user interface called [AME Wizard](https://ameliorated.io/).

Atlas is a Playbook, and alongside [AME's documentation](https://docs.ameliorated.io/developers.html), we recommend searching around the repository's source code to get familiar with how the basic Playbook structure works and how we've structured Atlas' Playbook.

### What Atlas uses internally

You can learn as you go, but consider getting some familiarity with the following if you're going to directly contribute to the Playbook:

- [Visual Studio Code (VSCode)](https://code.visualstudio.com/learn)
- [PowerShell scripting](https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/01-getting-started)
- [Batch scripting](https://ss64.com/nt/syntax.html)
- What the [Windows Registry](https://en.wikipedia.org/wiki/Windows_Registry) is
- The [Microsoft documentation](https://learn.microsoft.com/windows/resources/)
- [YAML](https://gettaurus.org/docs/YAMLTutorial/) - Yet Another Markup Language


## :material-hammer-screwdriver: How to build a Playbook

If you want to test existing builds, consider viewing our [GitHub Actions](https://github.com/Atlas-OS/Atlas/actions/workflows/apbx.yaml), which builds a Playbook for each commit. Otherwise, clone the [`Atlas-OS/Atlas`](https://github.com/Atlas-OS/Atlas) repo before continuing or your own fork for it.

=== "Using VSCode"

    1. Open [VSCode](https://code.visualstudio.com/), and open the cloned Atlas repo as a folder
    1. Install the [PowerShell](https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell) extension
        - Non-Windows users must [install PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell) first
    1. Install [7-Zip](https://7-zip.org/) or [NanaZip](https://apps.microsoft.com/detail/9n8g7tscl18r) if not done already
        - Non-Windows users *still need* official 7-Zip (`7zz`) in PATH
    1. **Optional:** Install the other extensions recommended in the 'Extensions' tab
    1. Use the 'Run and Debug' options to build a Playbook
        - See the [`.vscode` launch options](https://github.com/Atlas-OS/Atlas/blob/main/.vscode/launch.json) to know what each option does
    1. See your built Playbook in **src\playbook** in the repo

=== "Using the build script directly"

    For Windows users:

    1. Install [7-Zip](https://7-zip.org/) or [NanaZip](https://apps.microsoft.com/detail/9n8g7tscl18r) if not done already
    1. Navigate to `src\playbook` in the cloned Atlas repo
    1. Run `local-build.cmd`

    For non-Windows users:

    1. [Install the latest PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell)
    1. Install official 7-Zip (`7zz`) using a package manager
    1. Navigate to **src** in the cloned Atlas repo, and run `local-build.ps1` in PowerShell with these arguments:
    ```
    -AddLiveLog -ReplaceOldPlaybook -Removals WinverRequirement, Verification -DontOpenPbLocation
    ```


## :material-test-tube: How to run your built Playbooks

For testing, we primarily use virtual machine snapshotting unless we are testing for a final release, in which case we test on real hardware.

This section will tell you how we set up virtual machines for testing.

### Virtualization Software

Here's a comparison of our two recommendations:

|                                                                           |                                      [:material-microsoft: Hyper-V](https://learn.microsoft.com/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v)                                      |                                                             [:custom-vmware-workstation: VMWare Workstation](https://www.vmware.com/products/desktop-hypervisor.html)                                                              |
| :-----------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **[Hypervisor](https://en.wikipedia.org/wiki/Hypervisor#Classification)** |                                                                          :material-check-all: Type-1 hypervisor (fastest)                                                                          |                                                                                             :material-check: Type-2 hypervisor (fast)                                                                                              |
|                                 Interface                                 |                                                           :material-check: [MMC interface](../assets/images/hyperv-manager.png), no tabs                                                           |                                                                     :material-check-all: [Dark mode, tabbed, easier](../assets/images/vmware-workstation.png)                                                                      |
|                               Snapshotting                                |                                                     :material-check-all: Very fast by default, worse UI as it's a list instead of a grid view                                                      |     :material-check: Better UI, but you should [disable taking snapshots in background](https://docs.vmware.com/en/VMware-Workstation-Pro/17/com.vmware.ws.using.doc/GUID-AB7628AA-16CD-4380-AF52-C1716A1EEE10.html) for speed     |
|                           Ease of Installation                            |          :material-check: Installation through [Windows features](https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v), no external downloads           | :material-alert-circle-outline: It's [officially free now](https://blogs.vmware.com/workstation/2024/05/vmware-workstation-pro-now-available-free-for-personal-use.html), but you need to tediously sign-up for a Broadcom account |
|                               Compatibility                               |                                                     :material-alert-circle-outline: Enables 'Secure system,' which causes issues for some apps                                                     |                                                                       :material-check-all: No incompatibilities with apps as it's not directly in the kernel                                                                       |
|                                Guest Tools                                | :material-alert-circle-outline: Annoying to work with as it's [just an RDP session](https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/user-guide/enhanced-session-mode), low FPS |                                                                        :material-check-all: Has a vGPU, 60fps viewport, good drag-and-drop support, stable                                                                         |

!!! note "Apple-silicon Mac users"

    Due to not being tested frequently, we would appreciate it if you could test using Atlas with Windows-on-ARM using your Apple-silicon-based device. For this, consider using either:
    
    [VMWare Fusion (free with Broadcom account)](https://www.vmware.com/products/desktop-hypervisor.html){ .md-button target="_blank" }
    [Parallels (14-day trial)](https://www.parallels.com/){ .md-button target="_blank" }

### What snapshots are

Snapshotting is a feature in most virtual machine software that saves the current memory, disk, and settings state of a virtual machine so that you can restore it later.

Snapshots are handy for Atlas as you can test one Playbook and revert to an older snapshot to test another Playbook once finished.
Additionally, you can save a VM while testing something specific and return to it later.

### Which snapshots to make

!!! tip "Setup your snapshots ready for a Playbook"
    It's best to make your initial snapshots already set up with AME Wizard and some essential utilities (e.g. [Sysinternals](https://learn.microsoft.com/sysinternals/)) so that you can just drag-and-drop a Playbook as soon as you go to a snapshot.

We recommend making three initial snapshots:

- Stock Windows **without** Windows Updates installed
    - For testing updates after installing Atlas
    - To ensure updates don't install, [pause updates indefinitely](../assets/other/pause-updates.reg) before connecting to the internet
- Stock Windows **with** Windows Updates installed
    - Consider updating Windows and remaking the snapshot every so often
- **Optional:** A current release Atlas snapshot if you need to test anything there
    - Helpful in diagnosing [GitHub Issues](https://github.com/Atlas-OS/Atlas/issues)

### That's it!

Any Atlas Playbook should be ready to get tested now. Ensure to test what you're working on extensively. :partying_face: