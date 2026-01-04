---
description: How to verify the integrity of your Windows ISO for AtlasOS installation
icon: material/check-decagram
---

# :material-check-decagram: How do I verify the integrity of my Windows ISO?

**A damaged or altered ISO file can lead to installation errors like random BSODs, application crashes, or unstable system behavior. This guide will help you verify your Windows ISO file before proceeding with your installation.**

## :material-information: Why Verify?

Verifying your ISO ensures:  
- **Completeness:** The file is fully downloaded and unaltered.  
- **Reliability:** Avoids mysterious errors during or after installation.  
- **Consistency:** Confirms the file's integrity, especially if downloaded more than once.  

## :material-console: How to Verify Your ISO

### **On Windows**
1. Open **Command Prompt as Administrator**.
2. Run the following command (replace `<path_to_iso>` with the actual path to your ISO file):
    ```cmd
    certutil -hashfile <path_to_iso> SHA256
    ```
3. Download the ISO file twice from the same source.  
    Compare the hash values of both downloads using the command provided above.  
    If the hash values match, your ISO file is intact and safe to use. If they do not match, try downloading the file again and repeat the verification process.

## :material-alert: Note

Due to the large number of language editions available, we do not list individual hash values for each variant. Instead, verify your download’s consistency by comparing checksums from separate downloads if you suspect any issues.

## :material-check-circle-outline: Next Steps

Once you have confirmed the ISO’s integrity, proceed to burn the ISO to a disk or create a bootable USB drive and continue with your Windows installation and AtlasOS setup.

