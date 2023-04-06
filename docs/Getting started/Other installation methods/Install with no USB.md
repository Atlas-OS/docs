# Non-USB Install Guide

#### Originally posted by [Johnapolitan](https://github.com/Johnapolitan) in Atlas repository [issues](https://github.com/Atlas-OS/Atlas/issues/153). 

!!! warning "Prerequisites"
	Before proceeding with this guide, make sure you have the latest 22H2 .iso file by following the [Downloading an ISO guide](https://docs.atlasos.net/Getting%20started/Installation/#download-an-iso) on the installation page.

1. Download [Macrorit Partition Expert](https://macrorit.com/download.html)  and install it. (If prompted, choose 'Install Package')
2. Download [Install Windows Without USB by DanL](https://github.com/iidanL/InstallWindowsWithoutUSB) and extract it using 7zip or WinRAR
![Snapshot_2022-05-02_154455_github com](../../assets/images/iwwu.png)
3. Run Macrorit Partition Expert, and select the drive you want to partition (basically, in order to use both your current OS and Atlas, you need to have a drive big enough for both. To 'partition' is to split the drive into multiple partitions). In most cases, this is going to be the `C:` partition.
4. Right-click the selected partition, and click 'Resize/Move Volume'. In the menu that opens, allocate (to make space) as much space as you believe is necessary for Atlas. You do this by dragging the yellow slider. The unallocated section is how much space Atlas will have. I recommend having _atleast_ 20GB of storage.
![Record_2022_05_02_15_52_18_68](../../assets/videos/resize.gif)
5. Once your done, click OK. The menu should now close. Now a new section should appear next to your selected partition. It should be called 'Unallocated' and it needs to have more than 29 GB of available space. This is where Atlas will be installed. Right-click the unallocated space, and press 'Create Volume'. This should open another pop-up menu. Everything can be left as default, except you need to make sure the File System is set to 'NTFS'. _Also, make sure you remember the drive letter you set it to._ Once you're done, click OK.
![Record_2022_05_02_16_00_26_345](../../assets/videos/adding%20partition.gif)
6. Press the 'Commit' button in the upper-left-hand corner. Press 'OK' or 'Accept' to any prompts which appear. If it asks you to restart your PC, close any other applications and accept the prompt.
7. Once your PC has restarted, open the [Install Windows Without USB](https://github.com/iidanL/InstallWindowsWithoutUSB) folder you extracted earlier. It should prompt you to select the .iso of your choice (**Note: It may take a while for the file explorer window to pop-up. Please be patient**). Select the 22H2 .iso.
8.  Wait for the script to do what it does. When prompted to enter the letter of the partition you want to install the iso on, **only type the letter** of the partition we made earlier. For example: If you made the partition letter `E:` then type `E`
9.   Wait for the script to finish running and display text saying you can restart your PC. At this point you may want to install [EasyBCD ](https://www.techspot.com/downloads/3112-easybcd.html)to add the drive as a boot option, because Windows will detect Atlas as a normal windows install, so when you try to reboot, it's going to have you choose between your current OS (Windows Volume 1-10), and Atlas (Windows Volume 1-10). If you are confused by this statement though, don't install EasyBCD. Just reboot your PC, and select the non-default boot option.
10. Disconnect your ethernet/do not connect your wifi when going through windows setup.
11. Once setup is complete, connect your internet and download the [wizard and playbook](https://atlasos.net/download) from our site.
12. You can now continue with the [post installation](https://docs.atlasos.net/Getting%20started/Post-Installation/Drivers)
