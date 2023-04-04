# Post-Installation Instructions

After you have installed Atlas, everything is almost ready to go. There are a few things you should do to make sure you have everything set up correctly though.

Some things may differ depending on your hardware but we will try our best to cover everything in detail for your understanding. If you have any questions, please feel free to ask in our [Discord](https://discord.com/servers/atlas-795710270000332800) server.

## Activating Windows

In case the key is linked to your motherboard, your Windows may already be activated. If this is the case for you, you can skip this section. 

To check if otherwise or to activate yourself you can follow one of the guides below.

!!! warning
    Please activate Windows using the key related to the Windows 10 edition you installed, you can check this by going to `Settings` > `System` > `About` and checking the edition. If it sayss ``Enterprise``, in most cases or another you just have ``Windows 10 Professional``.

??? info "Windows Settings"
    Open Windows Settings with ++windows+i++ or by clicking the Windows icon in the bottom left corner and clicking the gear icon. From here go to `Update & Security` and then `Activation`. You can then see if activated and if not you can activate yourself.

??? info "Command Prompt"
    Open the command prompt with ++windows+r++ and typing `cmd` and pressing enter. From here you can run the command `slmgr /ipk [key]` (your key should be 16 characters long) and replacing `[key]` with your key. You can then run `slmgr /ato` to activate Windows.

??? info "Software License User Interface"
    Open the ``Software License User Interface`` with ++windows+r++ and typing `slui.exe` and pressing enter. From here you can enter your key and activate Windows.

## Software

Download and configure Software using Chocolatey and/or Scoop. We have made a guide for you to follow to make it even eaiser to use.
You can find it [here](https://docs.atlasos.net/Getting%20started/Post-Installation/Software).

## Drivers

Drivers are a really annoying topic to us at Atlas, many people cannot seem to get them work or install them correctly, that is why we have made a guide for you to follow. You can find it [here](https://docs.atlasos.net/Getting%20started/Post-Installation/Drivers).

If you get confused with drivers at any point, you can join our [Discord](https://discord.com/servers/atlas-795710270000332800) server and ask for help.

## Configuration

Luckily for you, we have written guides for you on everything you need to know for configuring Atlas within the Atlas folder on your desktop, check the guides out [here](https://docs.atlasos.net/Getting%20started/Post-Installation/Configuration).