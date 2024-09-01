---
description: How to contribute to the AtlasOS Playbook
icon: custom/atlas
---

# :custom-atlas: Contributing to the Atlas Playbook

This page will cover how to modify, test, and build Atlas. If you plan to contribute, we recommend reading the [Contribution Guidelines](contribution-guidelines.md) first!

--8<-- "contribution-guidelines.md:gitNotice"

## :material-book-search: How the Playbook works

### What Playbooks are

AME Wizard Playbooks are bundles of regular scripts, executables, and other files alongside script-like AME [YAML](https://gettaurus.org/docs/YAMLTutorial/) files.
These YAML files have commands called [actions](https://docs.ameliorated.io/developers/actions.html), which can do things like running executables or setting Registry entries.

[AME Wizard](https://ameliorated.io/) is the easy-to-use GUI for users to run Playbooks, and it uses the open-source [TrustedUninstaller](https://github.com/Ameliorated-LLC/trusted-uninstaller-cli) as its backend.

To start adding to Atlas, we recommend browsing our repository's source code to get familiar with how we've structured Atlas.

### What Atlas uses internally

The Atlas Playbook primarily uses the following three languages:

1. [PowerShell scripting](https://learn.microsoft.com/powershell/scripting/learn/ps101/01-getting-started)
1. [Batch scripting](https://ss64.com/nt/syntax.html)
1. [YAML](https://gettaurus.org/docs/YAMLTutorial/) - Yet Another Markup Language

For development tools and resources, we recommend using:

- [Visual Studio Code](https://code.visualstudio.com/learn)
    - The Atlas repo contains VSCode configs by default for building, syntax highlighting, and more
- [Microsoft documentation](https://learn.microsoft.com/windows/resources/)
- [AME documentation](https://docs.ameliorated.io/developers.html)
- Nirsoft utilities
    1. [RegistryChangesView](https://www.nirsoft.net/utils/registry_changes_view.html)
    1. [ServiWin](https://www.nirsoft.net/utils/serviwin.html)
- [Sysinternals](https://learn.microsoft.com/sysinternals/downloads/)

## :material-hammer-screwdriver: How to build a Playbook

If you want to test existing builds, consider viewing our [GitHub Actions](https://github.com/Atlas-OS/Atlas/actions/workflows/apbx.yaml), which builds a Playbook for each commit. Otherwise, clone the [`Atlas-OS/Atlas`](https://github.com/Atlas-OS/Atlas) repo before continuing or using your fork.

=== "Using VSCode"

    1. Open [VSCode](https://code.visualstudio.com/), and open the cloned Atlas repo as a folder
    1. Install the [PowerShell](https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell) extension
        - Non-Windows users must [install PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell) first
    1. Install [7-Zip](https://7-zip.org/) or [NanaZip](https://apps.microsoft.com/detail/9n8g7tscl18r) if not done already
        - For [macOS](https://formulae.brew.sh/formula/sevenzip)/[Linux](https://wiki.archlinux.org/title/p7zip), install 7-Zip (official or `p7zip`) using a package manager
    1. **Optional:** Install the other extensions recommended in the 'Extensions' tab
    1. Use the 'Run and Debug' options to build a Playbook
        - See the [`.vscode` launch options](https://github.com/Atlas-OS/Atlas/blob/main/.vscode/launch.json) to know what each option does
    1. See your built Playbook in **src\playbook** in the repo

=== "Using the build script directly"

    1. Install [7-Zip](https://7-zip.org/) or [NanaZip](https://apps.microsoft.com/detail/9n8g7tscl18r) if not done already
        - For [macOS](https://formulae.brew.sh/formula/sevenzip)/[Linux](https://wiki.archlinux.org/title/p7zip), install 7-Zip (official or `p7zip`) using a package manager
    1. For macOS/Linux, install [the latest PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell)
    1. Navigate to `src\playbook` in the cloned Atlas repo
    1. If on Windows, run `local-build.cmd`, else use `local-build.sh`

## :material-test-tube: How to run your built Playbooks

For testing, we primarily use virtual machines unless we are testing for a final release, in which case we test on real hardware.

This section will tell you how we set up virtual machines for testing.

### Virtualization Software

Here's a comparison of our two recommendations:

|                                                                           |                                                               [:material-microsoft: Hyper-V](https://learn.microsoft.com/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v)                                                               |                                                             [:custom-vmware-workstation: VMWare Workstation](https://www.vmware.com/products/desktop-hypervisor.html)                                                              |
| :-----------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **[Hypervisor](https://en.wikipedia.org/wiki/Hypervisor#Classification)** |                                                                                                   :material-check-all: Type-1 hypervisor (fastest)                                                                                                   |                                                                                             :material-check: Type-2 hypervisor (fast)                                                                                              |
|                               **Interface**                               |                                                                                :material-check: [List interface, native-looking](../assets/images/hyperv-manager.png)                                                                                |                                                                     :material-check-all: [Dark mode, tabbed, easier](../assets/images/vmware-workstation.png)                                                                      |
|                             **Snapshotting**                              |                                                                                         :material-check-all: Very fast by default, a simple list for the UI                                                                                          |   :material-check: Good grid UI, but you should [disable taking snapshots in background](https://docs.vmware.com/en/VMware-Workstation-Pro/17/com.vmware.ws.using.doc/GUID-AB7628AA-16CD-4380-AF52-C1716A1EEE10.html) for speed    |
|                         **Ease of Installation**                          |                                   :material-check: Installation through [Windows features](https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v), no external downloads                                    | :material-alert-circle-outline: It's [officially free now](https://blogs.vmware.com/workstation/2024/05/vmware-workstation-pro-now-available-free-for-personal-use.html), but you need to tediously sign-up for a Broadcom account |
|                             **Compatibility**                             |                                                 :material-alert-circle-outline: [Oversees the entire OS](https://en.wikipedia.org/wiki/Hypervisor#Classification), which causes issues for some apps                                                 |                                                                            :material-check-all: No incompatibilities with apps as it's not as low-level                                                                            |
|                              **Guest Tools**                              | :material-alert-circle-outline: [Uses RDP internally](https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/user-guide/enhanced-session-mode), low FPS, [minor artifacts](https://en.wikipedia.org/wiki/Compression_artifact), no vGPU |                                                                        :material-check-all: Has a vGPU, 60fps viewport, good drag-and-drop support, stable                                                                         |
|                              **OS Support**                               |                                                                                                      :material-check: Only available on Windows                                                                                                      |                                                                                        :material-check-all: Available on Linux and Windows                                                                                         |

!!! note "Apple-silicon Mac users"

    We would appreciate it if you could test Atlas with Windows 11 on-ARM using your Apple-silicon-based device. For this, consider using either:
    
    [VMWare Fusion (free with Broadcom account)](https://www.vmware.com/products/desktop-hypervisor.html){ .md-button target="_blank" }
    [Parallels (14-day trial)](https://www.parallels.com/){ .md-button target="_blank" }

    **Note:** ARM ISOs aren't available on Microsoft's website. Instead, these apps download them for you.

### Snapshotting

Snapshotting is a feature in most virtual machine software that saves the current memory, disk, and settings of a virtual machine so that you can restore it later.

Snapshots are handy for Atlas as you can test one Playbook and revert to unmodified Windows to test another Playbook once finished.
Additionally, you can save a snapshot for testing something specific and return to it later.

### Which snapshots to make

!!! tip "Setup your snapshots ready for a Playbook"
    It's best to make your initial snapshots already set up with [AME Wizard](https://download.ameliorated.io/AME%20Wizard%20Beta.zip) and some essential utilities (e.g. [Sysinternals](https://learn.microsoft.com/sysinternals/downloads/)) so that you can just drag-and-drop a Playbook as soon as you go to a snapshot.

We recommend making three initial snapshots:

- Stock Windows **without** Windows Updates installed
    - For testing installing Windows Updates after installing Atlas
    - To ensure updates don't install, [pause updates indefinitely](../assets/other/pause-updates.reg) before connecting to the internet. Un-pause them later in Windows Settings
- Stock Windows **with** Windows Updates installed
    - Consider updating Windows and remaking the snapshot every so often
- **Optional:** A current release Atlas snapshot if you need to test anything there
    - Helpful in diagnosing [GitHub Issues](https://github.com/Atlas-OS/Atlas/issues)

### That's it!

Any Atlas Playbook should be ready to get tested now. Ensure that you extensively test what you're working on. :partying_face: