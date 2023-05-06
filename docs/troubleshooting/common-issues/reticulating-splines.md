After running the Playbook with the AME Wizard some people get stuck at the "Reticulating Splines" screen. (Certain regions like China and India may have higher possibility having this issue)

Atlas uses Chocolatey for downloading DirectX, .NET 3.5, and uses GitHub for downloading vcredits. Any one of those not downloading successfully will result stuck at "Reticulating Spilines". (most users seems to have issue with [vcredists](https://github.com/abbodi1406/vcredist))

We are working on a fix. Right now, please try the following methods.

### Fix 1
Switch to a different network environment. (This includes but are not limited to using hotspot, using a different ISP, and using a VPN that proxies system processes.)

### Fix 2
1. Open Task Manager.
2. Kill ``curl`.
3. Kill ``PowerShell``.
4. Kill ``Windows Command Processor`` (cmd).

The install progress should start again.
