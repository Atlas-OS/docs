## Activating Windows

In some cases, your Windows may already be activated. If this is the case for you, you can skip this section. 

To check if otherwise or to activate yourself you can follow one of the guides below.

!!! warning
    Please activate Windows using the key related to the Windows 10 edition you installed, you can check this by going to `Settings` > `System` > `About` and checking the edition. If it say's enterprise, in most cases or another you just have Windows 10 Pro.

??? info "Windows Settings"
    Open Windows Settings with ++windows+i++ or by clicking the Windows icon in the bottom left corner and clicking the gear icon. From here go to `Update & Security` and then `Activation`. You can then see if activated and if not you can activate yourself.

??? info "Command Prompt"
    Open the command prompt with ++windows+r++ and typing `cmd` and pressing enter. From here you can run the command `slmgr /ipk [key]` (your key should be 16 characters long) and replacing `[key]` with your key. You can then run `slmgr /ato` to activate Windows.

??? info "Software License User Interface"
    Open the Software License User Interface with ++windows+r++ and typing `slui.exe` and pressing enter. From here you can enter your key and activate Windows.