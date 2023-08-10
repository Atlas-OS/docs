---
description: How to delete AME Process Hacker on AtlasOS
icon: material/monitor-eye
---

!!! success "Fixed in upcoming release"
    For Atlas v0.3.0, the `kprocesshacker2` driver won't be used at all.

AME Wizard currently uses an old version of the driver `kprocesshacker2`, belonging to the popular alternative to Task Manager called [Process Hacker](https://processhacker.sourceforge.io/). It is used to do certain actions with full privileges, like kill processes. This driver is commonly blocked by anticheats due to its unrestricted access to Windows.

Although AME Wizard should normally clean up its version of Process Hacker, sometimes parts of the driver can be left behind, preventing certain games or anticheats from starting. 

You can follow the following steps referenced [here](https://github.com/Atlas-OS/Atlas/issues/730#issuecomment-1522501012) by [@styris-ame](https://github.com/styris-ame), but it is here so you do not need to leave the documentation to get your answer.

1. Open ++windows+r++, type `RunAsTI cmd` and press ++enter++
2. In the Command Prompt window, type the following and press ++enter++:
    ```batch
    reg delete "HKLM\SYSTEM\CurrentControlSet\Services\kprocesshacker2" /f
    ```
3. Restart your computer