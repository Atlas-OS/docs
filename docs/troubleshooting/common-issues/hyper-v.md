# Hyper-V not working
Some people get "...not found" errors when trying to enable Hyper-V.

1. Run "Reset Network to Windows Default" in `Atlas/4. Troubleshooting/Network/`
2. Run `wsl --install` in Powershell as admin
3. Run "Enable Lanman Workstation" in `Atlas/3. Configuration/1. General Configuration/Lanman Workstation (SMB)` and restart your PC.
4. Restart and run "Enable Hyper-V and VBS" in `Atlas/3. Configuration/1. General Configuration/Hyper-V and VBS`
