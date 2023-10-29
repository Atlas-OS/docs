---
description: A guide on how to decrypt your system drive using BitLocker
icon: material/lock-check
---

# Decrypting a BitLocker encrypted drive

BitLocker is pre-installed and configured to encrypt drives on a large number of retail notebooks, particularly Windows 11 laptops.

To run the `setup.exe` file in the `sources` folder, we will be focusing on decrypting the `C:` drive, sometimes known as the "system" drive.

!!! warning "BitLocker data loss"
    BitLocker is a powerful encryption tool, and using it improperly may result in data loss. It is safe to follow these instructions, but failure to follow steps may result in loss of data.

1. Run `CMD` (Command Prompt) with **Administrator privileges**
2. Type `manage-bde -off %SystemDrive%` this will then start BitLocker with the parameters we entered
    - Many users will see: [ERROR: This volume stores external key(s) that can automatically unlock other volumes.](../assets/images/bitlocker-error-decrypting.jpg). If this applies to you, type `manage-bde -autounlock - ClearAllKeys %SystemDrive%` to clear the keys. After completion, re-type `manage-bde -off %SystemDrive%` to continue decrypting.
3. If you got "Decryption is now in progress." you have completed the steps correctly. It will take some time to fully decrypt the drive
4. You can checkthe progress b
y typing `manage-bde -status` and finding the `C:` drive and the [percentage encrypted](../assets/images/bitlocker-decryption-progress.png).
5. When the decyption percentage reaches "0%" you've successfully decrypted the drive!
