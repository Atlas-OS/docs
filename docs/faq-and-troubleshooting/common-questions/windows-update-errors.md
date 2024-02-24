---
description: How to fix common Windows Update errors in AtlasOS
icon: material/update
---

# :material-update: How do I fix errors with Windows Update on AtlasOS?

**Some users may have a Windows Update error when installing specific Windows updates. This page will guide you through fixing these errors.**

## :material-microsoft-windows: Windows 10 Error 0x80070643

![A screenshot of Windows 10's 'Windows Update' page with the error 0x80070643](../../assets/images/win10-winre-update-error.png)

This is an issue on Microsoft's end with the update [KB5034441 for Windows 10](https://support.microsoft.com/en-gb/topic/kb5034441-windows-recovery-environment-update-for-windows-10-version-21h2-and-22h2-january-9-2024-62c04204-aaa5-4fee-a02a-2fdea17075a8). Try the two fixes listed below and retry updates:

1. **Ensure that you have adequate free storage**
    
    You should have at least 1GB of free storage on your Windows drive. If you have very little free storage after reinstalling Windows, you likely haven't removed your old backup of your previous Windows installation. See [Your old Windows installation](../../getting-started/installation.md#your-old-windows-installation).

1. **Enable Windows Recovery**    
    1. Open **Command Prompt as Administrator**
    1. Type in `reagentc /enable` and press ++enter++
    1. Restart your computer

??? question "Still having problems?"

    If the fixes above did not work, you can either:

    1. Follow [Microsoft's guidance](https://support.microsoft.com/en-us/topic/kb5028997-instructions-to-manually-resize-your-partition-to-install-the-winre-update-400faa27-9343-461c-ada9-24c8229763bf)
    1. Pause Windows Updates to bypass (not recommended)
    1. Reinstall Windows using a USB flash drive and delete all partitions on your Windows drive. Be careful, as this permanently deletes the data on your disk!

## :material-restore-alert: General errors

On Atlas v0.3.2, specific cumulative updates that attempt to update the **Windows Backup** and **Get Started** apps in Windows fail. We will fix this in the next release of Atlas, which includes users upgrading from v0.3.2.

Here's how to fix it:

1. Open **Command Prompt as Administrator**, and enter these commands in order:

    ```
    dism /online /cleanup-image /restorehealth
    sfc /scannow
    ```

    This will take a while. The first command will likely error with 'The source files could not be found,' but you can safely ignore this.

1. Restart your computer, attempt updating Windows again