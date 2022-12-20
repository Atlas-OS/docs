# Installation

Here you can learn about how to install Atlas OS. There is video methods and text methods, whichever fits your niche

!!! info "Reminder"
    You can always join our [Discord](https://discord.com/servers/atlas-795710270000332800) if any of these methods do not work

??? "Method 1, the standard method. Text Edition"
    !!! info ""
        Before you do this method, make sure you have a USB thumb drive on hand as it is required.
    1. Install an application that allows you to create bootable USB thumb drives, we recommend [Rufus](https://rufus.ie/en/).
    2. Before you start the application, insert your USB thumb drive into a suitable USB slot on your computer
    3. Open the application.
    4. Where it says "Select an ISO or Disk Image", make sure you select the Atlas ISO you downloaded. If you haven't downloaded an Atlas OS ISO, you can download one [here](https://atlasos.net/downloads).
    5. Where it says partition scheme, choose the partition of your boot drive. If you do not know how to check the partition of your boot drive, you can check it [here](https://www.howtogeek.com/245610/how-to-check-if-a-disk-uses-gpt-or-mbr-and-how-to-convert-between-the-two/).
    6. Everything that has not been changed can be kept as default, just make sure the file system is FAT32.
    7. You can click start or whatever your button is to ready your USB thumb drive to turn into a bootable USB thumb drive.
    8. From here you will need to restart your computer and enter into BIOS or into Windows UEFI, you can do this by running `shutdown.exe -r -o -f -t 00` in the Run menu (Windows + R).
    9. From there choose the option to boot via USB.
    10. You should be taken to a normal Windows install page, follow through how you normally would install Windows. Make sure you delete all partitions.
    11. Once Atlas is installed, you can head on over to our [post install](../../Post%20Installation/) page.

??? "Method 1, the standard method. Video Edition"
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Le-0wHEKvow" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

??? "Method 2, the non-usb method. Text Edition"
    !!! info ""
        This guide was already written by `Johnapolitan`. All credits go to them.
    1. Download [Macrorit Partition Expert](https://macrorit.com/download.html?mds=)  and install it. (If prompted, choose 'Install Package')
    2. Download [Install Windows Without USB by DanL](https://github.com/iidanL/InstallWindowsWithoutUSB) and extract it using 7zip or WinRAR
    ![Opera Snapshot_2022-05-02_154455_github com](https://user-images.githubusercontent.com/71734690/166318804-209f8ced-d2cc-45ce-ac54-b3d428dc4e14.png)
    4. Download the [Atlas .iso file of your choice](https://atlasos.net/download)
    5. Run Macrorit Partition Expert, and select the drive you want to partition (basically in order to use both your current OS and Atlas, you need to have a drive big enough for both. To 'partition' is to split the drive into multiple partitions). In most cases this is going to be the `C:` partition.
    6. Right click the selected partition, and click 'Resize/Move Volume'. In the menu that opens, allocate (to make space) as much space as you believe is necessary for Atlas. You do this by dragging the yellow slider. The unallocated section is how much space Atlas will have. I recommend having at _least_ 29GB of storage.
    ![Record_2022_05_02_15_52_18_68](https://user-images.githubusercontent.com/71734690/166316148-007e1e03-2a77-4dfb-a42d-bfa249547b83.gif) (I'm currently running Atlas which is why my `C:` drive is labeled as so. You can ignore my drive names)
    7. Once your done, click OK. The menu should now close. Now a new section should appear next to your selected partition. It should be called 'Unallocated' and it needs to have more than 29 GB of available space. This is where Atlas will be installed. Right click the unallocated space, and press 'Create Volume'. This should open another pop-up menu. Everything can be left as default, except you need to make sure the File System is set to 'NTFS'. _Also, make sure you remember the drive letter you set it to._ Once you're done, click OK.
    ![Record_2022_05_02_16_00_26_345](https://user-images.githubusercontent.com/71734690/166317198-2a18bc51-ef7b-421b-8b0f-df79bd4d2890.gif)
    8. Press the 'Commit' button in the upper-left-hand corner. Press 'OK' or 'Accept' to any prompts which appear. If it asks you to restart your PC, close any other applications and accept the prompt.
    9. Once your PC has restarted, open the [Install Windows Without USB](https://github.com/iidanL/InstallWindowsWithoutUSB) folder you extracted earlier. It should prompt you to select the .iso of your choice (**Note: It may take a while for the file explorer window to pop-up. Please be patient**). Select the Atlas .iso. 
    10. Wait for the script to do what it does. When prompted to enter the letter of the partition you want to install the iso on, **only type the letter** of the partition we made earlier. For example: If you made the partition letter `E:` then type `E`
    11. Wait for the script to finish running and display text saying you can restart your PC. At this point you may want to install [EasyBCD](https://cfcdn.neosmart.net/software/EasyBCD/community/EasyBCD%202.4.exe)to add the drive as a boot option, because Windows will detect Atlas as a normal windows install, so when you try to reboot, it's going to have you choose between your current OS (Windows Volume 1-10), and Atlas (Windows Volume 1-10). If you are confused by this statement though, don't install EasyBCD. Just reboot your PC, and select the non-default boot option.
