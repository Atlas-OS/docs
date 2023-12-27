---
description: A guide on how to configure and install NVIDIA GPU drivers in AtlasOS
icon: simple/nvidia
---

# :simple-nvidia: Installing NVIDIA graphics drivers

We recommend using NVCleanstall, as it is a GUI alternative to manually stripping drivers.

## :simple-nvidia: Driver Installation

- Download [NVCleanstall](https://www.techpowerup.com/download/techpowerup-nvcleanstall).
- Open the application and click ``Next``.
- Make sure that only ``Display Driver`` is checked and click ``Next``.

!!! warning 
    If you are on a laptop, make sure that ``Optimus`` is also selected, read more info on [NVIDIA's Website](https://www.nvidia.com/en-us/geforce/technologies/optimus) 

- After the driver downloaded tick the following:
    - Disable Installer Telemetry & Advertising
    - Perform a Clean Installation
    - Disable [Multiplane Overlay (MPO)](https://docs.atlasos.net/getting-started/post-installation/drivers/amd/#disable-multi-plane-overlay-mpo)
    - Disable Driver Telemetry in ``Show Expert Tweaks``
    - Use method compatible with Easy-Anti-Cheat
    - Automatically accept the "driver unsigned" warning
- Click ``Install`` and continue with the NVIDIA driver installation as usual.

## :material-cog: Configure NVIDIA Control Panel

This section was partly based on [AMIT's documentation](https://github.com/amitxv/PC-Tuning/blob/main/docs/configure-nvidia.md)

- Open the NVIDIA Control Panel by right-clicking on dekstop.
- Disable ``Desktop > Show Notification Tray Icon``
- Configure the following in the ``3D Settings -> Manage 3D settings`` page:
    - Anisotropic filtering - Off
    - Antialiasing - Gamma correction - Off
    - Low Latency Mode - On (This setting limits pre-rendered frames to 1)
    - Power management mode - Prefer maximum performance
    - Shader Cache Size - Unlimited
    - Texture filtering - Quality - High performance
    - Threaded Optimization - Offloads GPU-related processing tasks on the CPU, it usually hurts frame pacing. If you are CPU bottlenecked, choose the ``Off`` option.
    - Vertical sync - Off
- Configure the following in the ``Display -> Change resolution`` page:
    - Configure your monitor resolution and refresh rate.
    - Output dynamic range - Full
    - Output color depth - Value matching your monitor specification
- Optionally increase the level of ``Digital vibrance`` in ``Display -> Adjust desktop color settings`` as it manages color saturation and intestity, and can reduce eye strain.
    - Also check out [VibranceGUI](https://vibrancegui.com).
- Configure the following in the ``Display -> Adjust desktop size and position`` page:
    - Select a scaling mode - No scaling
    - Perform scaling on - Display
- Set dynamic range to ``Full`` in ``Video -> Adjust video color settings -> Advanced``

## :material-temperature-celsius: Force P-State 0 (advanced)

!!! danger "Attention"
    This will force P-State 0 on your NVIDIA card **AT ALL TIMES**, making it always run at full power. It is not recommended to set it if you leave your computer idle for long periods, have poor cooling or use a laptop.

NVIDIA drivers force the power state for CUDA compute workloads other than real-time graphics to the lower P2 power state instead of the maximum P0 state. The difference between the two states is a lower memory clock frequency, the core clocks are identical in both states [[1](https://github.com/djdallmann/GamingPCSetup/blob/master/CONTENT/RESEARCH/WINDRIVERS/README.md#q-is-there-a-registry-setting-that-can-force-your-display-adapter-to-remain-at-its-highest-performance-state-pstate-p0), [2](https://forums.developer.nvidia.com/t/one-weird-trick-to-get-a-maxwell-v2-gpu-to-reach-its-max-memory-clock/40153)].

P-State 0 can be forced by using the following command in CMD ran as administator:
```bat
for /f "tokens=*" %a in ('reg query "HKLM\SYSTEM\CurrentControlSet\Control\Class\{4d36e968-e325-11ce-bfc1-08002be10318}" /t REG_SZ /s /e /f "NVIDIA" ^| findstr "HK"') do (reg add "%a" /v "DisableDynamicPstate" /t REG_DWORD /d "1" /f)
```

After running this command, download and extract [NVIDIA Profile Inspector](https://github.com/Orbmu2k/nvidiaProfileInspector). Open the tool, scroll down to ``5 - Common`` section and set ``CUDA - Force P2 State`` to OFF. Press ``Apply changes`` on the upper right corner and close the application. Restart your device.
