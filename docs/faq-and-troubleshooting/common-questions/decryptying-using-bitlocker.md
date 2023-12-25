---
description: A guide on how to decrypt your system drive using BitLocker
icon: material/lock-check
---

# :material-lock-check: Decrypting a BitLocker Encrypted Drive

BitLocker is a powerful encryption tool pre-installed on many retail notebooks, particularly those running Windows 11. This guide will walk you through the process of decrypting your system drive (usually the `C:` drive) using BitLocker.

!!! warning "BitLocker data loss"
    BitLocker is a powerful encryption tool, and using it improperly may result in data loss. It is safe to follow these instructions, but failure to follow steps may result in loss of data.

1. Run Command Prompt (`CMD`) with **Administrator privileges**. You can do this by searching for **CMD** in the Start menu, right-clicking on it, and selecting **Run as administrator**.
2. Type `manage-bde -off %SystemDrive%` and press Enter. This command starts the decryption process.
    - If you see the error message [ERROR: This volume stores external key(s) that can automatically unlock other volumes.](../../assets/images/bitlocker-error-decrypting.jpg), type `manage-bde -autounlock - ClearAllKeys %SystemDrive%` and press Enter to clear the keys. After completion, re-type `manage-bde -off %SystemDrive%` and press Enter to continue decrypting.
3. If you see the message **Decryption is now in progress**, you have completed the steps correctly. The decryption process will take some time.
4. You can check the progress by typing `manage-bde -status` and pressing Enter. Look for the `C:` drive and the [percentage encrypted](../../assets/images/bitlocker-decryption-progress.png).
5. When the decryption percentage reaches **0%**, you've successfully decrypted the drive!
