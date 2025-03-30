---
title: Enabling TPM 2.0 for Windows 11 Installation
description: How to enable the Trusted Platform Module (TPM) in your system's BIOS/UEFI, a requirement for Windows 11.
icon: material/chip
---

# :material-chip: Enabling TPM 2.0 for Windows 11 Installation

Windows 11 has specific system requirements, including the need for **Trusted Platform Module (TPM) version 2.0** to be enabled on your system. If you are trying to install Windows 11 (as part of the AtlasOS installation process) and encounter an error stating your PC doesn't meet the requirements, you may need to enable TPM in your system's BIOS or UEFI settings.

TPM is a security feature built into modern motherboards or CPUs that provides hardware-based security functions.

!!! warning "Proceed with Caution"
    Modifying BIOS/UEFI settings incorrectly can potentially cause system instability. While enabling TPM is generally safe, only change settings you understand. If unsure, consult your motherboard or computer manufacturer's documentation.

## Step 1: Accessing BIOS/UEFI

You need to restart your computer and enter the BIOS/UEFI setup utility before Windows starts loading.

1.  **Restart your computer.**
2.  **Immediately press the BIOS/UEFI entry key repeatedly** as the system powers on. Common keys include:
    *   `DEL` (Delete)
    *   `F2`
    *   `F10`
    *   `F12`
    *   `ESC` (Escape)
    *   The correct key often briefly appears on the screen during startup (e.g., "Press DEL to enter Setup"). If unsure, check your computer or motherboard manual, or search online for your specific model.

## Step 2: Finding the TPM Setting

BIOS/UEFI interfaces vary significantly between manufacturers (ASUS, Gigabyte, MSI, Dell, HP, Lenovo, etc.) and even between models. You will need to navigate through the menus to find the relevant setting.

*   **Look for sections named:**
    *   `Security`
    *   `Advanced`
    *   `Trusted Computing`
    *   `Peripherals`
    *   `CPU Configuration`

*   **Look for setting names like:**
    *   `TPM` / `TPM Device` / `TPM Support` / `TPM State`
    *   `Security Device` / `Security Device Support`
    *   **For Intel CPUs:** `PTT` (Platform Trust Technology) or `Intel PTT`
    *   **For AMD CPUs:** `fTPM` (Firmware TPM) or `AMD fTPM switch` / `CPU fTPM`

!!! tip "Can't find it?"
    Sometimes the setting might be nested under another option (e.g., under `Advanced\PCH-FW Configuration` for some Intel systems). Refer to your motherboard/PC manual or manufacturer's support website for specific guidance. If the option seems entirely missing, ensure your BIOS/UEFI is up-to-date, but be aware BIOS updates carry risks.

## Step 3: Enabling TPM

Once you find the setting:

1.  Select the TPM (or equivalent, like PTT/fTPM) option.
2.  Change its value from `Disabled` / `Off` / `Hidden` to `Enabled` / `On` / `Available` / `Firmware TPM`.
    *   *Note:* Sometimes there are separate options for the TPM state and device visibility. Ensure the device itself is enabled or activated.

## Step 4: Saving Changes and Exiting

1.  Navigate to the `Exit` section of your BIOS/UEFI.
2.  Select the option to **Save Changes and Exit** (often `F10` key followed by `Y` or `Enter` to confirm). Common menu names are `Save & Exit Setup`, `Exit Saving Changes`.
3.  Your computer will restart.

## Step 5: Retry Windows Installation

After your computer restarts, attempt the Windows 11 installation step from the [Atlas Installation Guide](../getting-started/installation.md) again. The requirements check should now pass if TPM was the only issue.

If you continue to have problems, double-check your BIOS/UEFI settings and consult your hardware manufacturer's documentation. 