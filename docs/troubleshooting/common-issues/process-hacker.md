To disable process hacker you can follow the following steps referenced [here](https://github.com/Atlas-OS/Atlas/issues/730#issuecomment-1522501012) by Styris-AME, but it is here so you do not need to leave the documentation to get your answer.

* Open ++windows+r++ and type ``RunAsTI cmd``
* In the cmd window, type the following and press enter:
    ```batch
    reg delete "HKLM\SYSTEM\CurrentControlSet\Services\kprocesshacker2" /f
    ```
* Restart your PC.