---
description: Converting your MBR disk to GPT for Windows installation
icon: material/harddisk
---

**If you're using a USB, Windows cannot be installed onto an MBR disk, you must convert it to GPT.**

!!! danger "This will wipe your chosen disk!"
    Please proceed with caution.

<!-- More images needed -->

Follow these steps to convert your disk to GPT:

1. Boot off of your Windows USB.
2. After clicking **Install Now** and waiting for setup to appear, press ++shift+f10++.
3. This will open a command prompt, type `diskpart`.
4. This should open a new `diskpart` shell, type `lis dis`.
5. Find the disk your C: drive is on, and get the assosciated number on the left.
!!! info "Finding your disk"
    You can compare disk sizes to find the drive your C: partition is on. You can also use `lis vol` to see a list of partitions with drive letters.
6. Run `sel dis <number>`, replacing `<number>` with your disk's number.
7. Type `clean` to fully wipe the drive (very quick).
8. Type `conv gpt` to convert your disk to GPT.
9. Close the command prompt and continue through the installer. Once you get to the disk selection step, choose **Disk** `<number>` **Unpartitioned Space**.
