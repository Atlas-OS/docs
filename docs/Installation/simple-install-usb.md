# Simple Installation (USB)

1. Download [Rufus](http://rufus.ie/en_US/) and open the application.
2. Select your device (USB Stick) using the list box at the top.
3. Import your desired .ISO file (https://atlasos.net)
4. Select your partition scheme (Most commonly, GPT) & Target system to UEFI (non-CSM). If you don't know if your system is GPT, follow [this guide](https://github.com/Atlas-OS/Atlas/wiki/1.-FAQ#14-how-do-i-check-if-my-storage-is-gpt). **You may be on a BIOS/MBR system, if so, select MBR & BIOS in Rufus.**
5. Keep the default file system and cluster size, they won’t make a difference.
6. Select START and then wait for it to extract the .ISO onto your USB Stick, this will clear all files.
7. When it's finished, press WINDOWS KEY + R and then type “shutdown.exe -r -o -f -t 0” and it should boot you to your boot menu.
8.  Select your USB device, and it will boot you onto the Windows installation page.
9.   Find the drive which has the correct size as your main disk with Windows on, in most cases, it will be DISK 0. Select each partition of that drive (Example: Drive 0 Partition 0/1/2)and press “DELETE”. **WARNING: Deleting a drive means you lose all files on that drive.**
10.  When you've deleted all the partitions under your main drive, you will see “UNALLOCATED SPACE”, select this and press APPLY. This will then create a new disk with the full amount of space on your drive, then proceed by clicking next to install Atlas' files.
11.  Follow the installation steps, and you have a fresh installation of Atlas OS on your device.