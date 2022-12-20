# Post Installation

When you have installed Atlas, you will be on a clean desktop with the "Atlas" folder on, first thing for you to do is open that folder and follow along in this documentation to be taught everything.

!!! abstract "Table of contents"
    - [Install Software](https://docs.atlasos.net/Post%20Installation/#install-software)
    - [Install Drivers](https://docs.atlasos.net/Post%20Installation/#install-drivers) ([NVIDIA](https://docs.atlasos.net/Post%20Installation/#nvidia-graphics-cards), [AMD](https://docs.atlasos.net/Post%20Installation/#amd-graphics-cards), [Intel](https://docs.atlasos.net/Post%20Installation/#intel-graphics-cards), [Snappy Driver Installer Origin (SDIO)](https://docs.atlasos.net/Post%20Installation/#snappy-driver-installer-origin-sdio))
    - [Configuration](https://docs.atlasos.net/Post%20Installation/#configuration)
    - [Advanced Configuration](https://docs.atlasos.net/Post%20Installation/#advanced-configuration)
    - [Optional Tweaks](https://docs.atlasos.net/Post%20Installation/#optional-tweaks)
    - [Troubleshooting](https://docs.atlasos.net/Post%20Installation/#troubleshooting)
    - [Utilities](https://docs.atlasos.net/Post%20Installation/#utilities)
    - [Conclusion](https://docs.atlasos.net/Post%20Installation/#conclusion)

!!! info ""
    Make sure you are connected to the internet for everything that will be mentioned below

??? example "Atlas folder tree"
    ```
    Atlas/
    ├─ 1. Install Software/
    ├─ 2. Install Drivers/
    ├─ 3. Configuration/
    ├─ 4. Advanced Configuration/
    ├─ Optional Tweaks/
    ├─ Troubleshooting/
    ├─ Utilities/
    ├─ Atlas Discord
    ├─ Atlas Wallpapers
    ├─ Documentation
    ├─ Issues
    ```

## Install Software

??? example "Install Software tree"
    ```
    Atlas/\
    ├─ 1. Install Software/
    │  ├─ Links/
    │  ├─ HOW TO.txt
    │  ├─ Install Browser via Chocolatey.bat
    │  ├─ Install Browser via Scoop.bat
    │  ├─ Install Chocolatey.bat
    │  ├─ Install Other Software via Chocolatey.bat
    │  ├─ Install Other Software via Scoop.bat
    │  ├─ Install Scoop.bat
    ```

Installing software is easy on Atlas, we have given you 2 methods to download software directly from Atlas

- Scoop
- Chocolatey

They both work really well and it is super easy to install software with them. Just open the corresponding file to install the provider. For example, open `Install Chocolatey.bat` to install Chocolatey.

From there you can open an install browser/other software option corresponding to your chosen provider.

Just choose what you want and click "Ok"

!!! info ""
    You may need to reboot after the installation

## Install Drivers

??? example "Install Drivers tree"
    ```
    Atlas/
    ├─ 2. Install Drivers/
    │  ├─ AMD GPUs
    │  ├─ Intel (i)GPUs
    │  ├─ NVCleanstall Recommended Settings.png
    │  ├─ NVCleanstall_1.14.0.exe
    │  ├─ SDIO INSTALLATION.txt
    │  ├─ Snappy Driver Installer (SDIO)
    ```

Installing drivers is not as easy as installing software sadly, so we will try to download drivers the right way.

### NVIDIA Graphics Cards
I recommend using NVCleanstall, it is already in the `Install Drivers` folder and ready to use. Open it up and install the latest drivers, and select the options you want. 

At the end there will be some options of what to do for your installation, you can either open up `NVCleanstall Recommended Settings.png` or click on the box below to see the image

??? info "NVCleanstall Recommended Settings.png"
    ![Recommended NVCleanstall Settings](https://github.com/Atlas-OS/Atlas/blob/main/src/Desktop/Atlas/2.%20Install%20Drivers/NVCleanstall%20Recommended%20Settings.png?raw=true)

### AMD Graphics Cards
I recommend going to the [AMD Graphics Driver](https://www.amd.com/en/support) installation page. Choosing your correct graphics card and clicking `Submit`. Then follow on with the installation

### Intel Graphics Cards
For Intel graphics cards you can either install from [here](https://www.intel.com/content/www/us/en/support/products/80939/graphics.html#211969). As an alternative you can use [Snappy Driver Installer Origin (SDIO)](https://www.glenn.delahoy.com/snappy-driver-installer-origin/) or another driver installer. For the next part we will talk about SDIO.

### [Snappy Driver Installer Origin (SDIO)](https://www.glenn.delahoy.com/snappy-driver-installer-origin/)
For any other type of driver, we recommend using this. It is quick and easy and works for most people here at Atlas. Using this directly on your Atlas machine is better than on an external PC. 

Here is a step by step process of how to use SDIO correctly:

[1] Navigate to their site [here](https://www.glenn.delahoy.com/snappy-driver-installer-origin/).

[2] Click on the option in the `Download Application` section.

[3] Extract the .zip file and open the `x64` file. That is the only one that works on Atlas correctly.

[4] Accept the terms if you are told to.

[5] When you get a pop-up select `Download indexes only`.

!!! danger ""
    Make sure you select `Download indexes only` otherwise you will also download useless drivers.

[6] From there wait for SDIO to download the indexes, these are required to find all your drivers.

[7] Tick the drivers you wish to install, if you do not know what some of them are, do not worry. You can click the option below to find out what you need.

??? info "What drivers do I need?"
    You should probably install graphics drivers if not done already, as well as Audio, LAN/WiFi and USB drivers. If you do not know the name of these, you can do some research for your providers to check what the drivers are and install them. 
    
    You can also install Bluetooth if you require that, it will be needed for Wireless Xbox controllers as an example.

[8] Click `Install` on the left.

[9] Done.

## Configuration

On Atlas we have made many configuration files for you. If you don't know what anything does, your best bet is to not touch it. For now you can go and enable/disable anything you choose. Just be careful of what you do.

## Advanced Configuration

Once again, be careful of what you do here, this is for advanced users only. 

## Optional Tweaks

These are some cool tweaks which you can enable, maybe bring back legacy alt-tab as an example or change it to the new one. The choices are there to be picked and used.

## Troubleshooting

If anything doesn't work, check here, there may be a fix for it!

## Utilities

From here there will be utilities you can use, one as an example is GameUtil made by the developers of Atlas themselves, you can potentially boost your FPS in games with this tool.

!!! failure "Reminder"
    If you don't know what anything does, do not touch it.

## Conclusion

Once you have completed everything in the Atlas folder, you should have a speedy computer!

Many thanks from the Atlas team for using our project, any issues or questions you can always join our [Discord](https://discord.com/servers/atlas-795710270000332800) and send a message to the corresponding channel.
