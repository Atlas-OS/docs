# Activating Windows

If your PC has installed Windows before, it should migrate the license to the current install. In that case, you can skip this guide.

Your current Atlas install can activate itself automatically upon your previous installation. (e.g. using the OEM key connected to your motherboard's BIOS)

If your Atlas install isn't activated, follow one of the methods listed down below.


!!! warning
    Please activate Windows using the key related to the Windows edition you installed, you can check this by going to `Settings` > `System` > `About` and checking the edition. If it say's enterprise, in most cases you just have Windows Pro or Home.

??? info "Windows Settings"
    Open Windows Settings with ++windows+i++ or by clicking the Windows icon in the bottom left corner and clicking the gear icon. From here go to `Update & Security` and then `Activation`. Click on "Change your product key or upgrade Windows", and click "Change Windows key".

??? info "Command Prompt"
    Open the command prompt with ++windows+r++ and typing `cmd` and pressing enter. From here you can run the command `slmgr /ipk [key]` (your key should be 16 characters long) and replacing `[key]` with your key. You can then run `slmgr /ato` to activate Windows.

??? info "Software License User Interface"
    Open the Software License User Interface with ++windows+r++ and typing `slui.exe` and pressing enter. From here you can enter your key and activate Windows.
