---
description: A guide on how to decrypt your system drive using BitLocker
icon: material/lock-check
---

# :material-lock-check: How do I decrypt my BitLocker-encrypted drive? 

Device encryption is enabled by default on many Windows 11 laptops. Although this is good for security, this means that our method of reinstalling Windows would not work. This guide will walk you through the process of decrypting your Windows drive using BitLocker.

## Decryption

!!! warning "BitLocker data loss"
    BitLocker is a powerful encryption tool, and using it improperly may result in data loss. It is safe to follow these instructions, but failure to follow steps may result in loss of data.

1. Search for **cmd** in the Start menu, right-click on it, and select **Run as administrator**.
2. Type `manage-bde -off %SystemDrive%` and press ++enter++. This command starts the decryption process.
    - If you see the error message ["This volume stores external key(s) that can automatically unlock other volumes"](../../assets/images/bitlocker-error-decrypting.jpg), type `manage-bde -autounlock - ClearAllKeys %SystemDrive%` and press ++enter++ to clear the keys. After completion, re-type `manage-bde -off %SystemDrive%` and press ++enter++ to continue decrypting.
3. If you see the message **Decryption is now in progress**, you have completed the steps correctly. The decryption process will take some time.
4. You can check the progress by typing `manage-bde -status` and pressing Enter. Look for the `C:` drive and the [percentage encrypted](../../assets/images/bitlocker-decryption-progress.webp).


When the decryption percentage reaches **0%**, you've successfully decrypted the drive!