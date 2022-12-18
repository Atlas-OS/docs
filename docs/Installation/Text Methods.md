# Text Methods

??? "Method 1, the standard method."
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
