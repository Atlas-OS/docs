---
description: How we test the AtlasOS Playbook
icon: material/test-tube
---

# :material-test-tube: What you can test for in Atlas

This page covers what we recommend testing in an in-development build. See [the reporting issues page](reporting-issues.md) if you find any problems.

If you haven't set up a virtual machine, see the [Playbook contributing page](../playbook.md) on how to do so. However, feel free to test it on real hardware, especially if it's a [release candidate](../../general-faq/testing-nightly-builds.md)!

!!! note "Ensure what you test works on stock Windows first"
    To reduce the amount of false reports, please verify that any issues encountered on Atlas do not happen in the same environment and configuration on unmodified Windows.

## :octicons-person-16: Your personally used Windows features

Testing the features you use is recommended, especially if it's not a typical configuration or usage. Some examples of this include:

- Non-English languages
    - Multiple languages & keyboard layouts
- Touchscreen support
- ARM-based Windows (11 only)
- Accessibility features
- Hyper-V and WSL

## :material-gamepad: Your personally used apps/games

We recommend testing all your personally used software and games in a realistic environment to ensure that Atlas has brought no incompatibilities.

Ensure you install drivers properly beforehand and can't reproduce any encountered issues on stock Windows in the same environment.

## :material-update: Windows Update

As Atlas supports Windows Update, consider testing the following that all make use of Windows Update's components:

- From the [base ISO (no updates)](../playbook.md#which-snapshots-to-make), installing all Windows Updates post-Atlas
- Language pack installation
- Various optional Windows features
- Store and XBOX game installation/updates

## :material-router-network: Remoting and file sharing

Consider testing local network features such as:

- Windows file sharing
    - Enable with the [Atlas script](../../getting-started/post-installation/atlas-folder/general-configuration.md#file-sharing) first
    - Ensure that it works on stock Windows
- Screencasting
- Remote Desktop

## :custom-atlas: Atlas folder

We recommend doing lots of testing in the Atlas folder. For this, we recommend the following:

- Testing each script and checking if it does its functionality
    - Especially the significant scripts like disabling Defender
    - If prompted for anything, test various inputs
    - Make sure to restart if prompted
- Suggesting where we can:
    - Improve the structure
    - Improve user experience
    - Simplify the folder
