To disable process hacker you can follow the following steps referenced [here](https://github.com/Atlas-OS/Atlas/issues/730#issuecomment-1522501012) by Styris-AME, but we will rewrite it here so you don't need to leave the documentation to get your answer

* Download and unzip [NSudo](https://github.com/M2TeamArchived/NSudo/releases/download/9.0-Preview1/NSudo_9.0_Preview1_9.0.2676.0.zip)
* Run x64\NSudoLG.exe
* Set it to TrustedInstaller, and enter cmd in the input box and click run.
* In the cmd window, type the following and press enter:
    ```batch
    reg delete "HKLM\SYSTEM\CurrentControlSet\Services\kprocesshacker2" /f
    ```
* Restart your PC