# Drivers

## :material-emoticon-confused-outline: What drivers do I need?

Only install drivers that are needed for hardware that isn't working. It is possible to install drivers for audio, ethernet/Wi-Fi, and Bluetooth; or whatever else you might need.

If you don't know what brands and drivers to get for each component, you can look up your hardware to find out what the drivers are called and then install them.

## :material-screwdriver: Snappy Driver Installer Origin

Snappy Driver Installer Origin (SDIO) is a good and free way to find and install the most up-to-date and compatible drivers for your hardware. SDIO will check your system and find any missing or out-of-date drivers you might need.

!!! warning "Drivers for your GPU"
    We don't recommend installing your graphics drivers via SDIO as they can be heavily debloated when installed by other methods. We've included installation guides for popular graphics card brands below.

    * [NVIDIA](/Getting%20started/Post-Installation/Drivers/GPU/NVIDIA)
    * [AMD](/Getting%20started/Post-Installation/Drivers/GPU/AMD)
    * [Intel](/Getting%20started/Post-Installation/Drivers/GPU/Intel)

1. Visit [their website](https://www.glenn.delahoy.com/snappy-driver-installer-origin) and download the installer under the "Download Application" section.
2. Extract the .zip file and open the ``x64`` file. Follow the steps in the wizard.
    * The x64 build is the only one that works with Atlas.
    * When prompted, select "Download indexes only". Otherwise, you'll download useless drivers.
3. Wait for SDIO to download the indexes.
4. Select drivers to install and press "Install" on the left.