---
description: A guide on how to configure and install AMD GPU drivers in AtlasOS
icon: custom/amd
---

# :custom-amd: Installing AMD graphics drivers

We recommend using RadeonSoftwareSlimmer, as it is an open-source GUI app alternative to the manual method of stripping the drivers.

## :custom-amd: Driver Installation

- Download the latest WHQL recommended driver from the [AMD Drivers and Support page](https://www.amd.com/en/support).
- Download [RadeonSoftwareSlimmer](https://github.com/GSDragoon/RadeonSoftwareSlimmer) with the name of ``RadeonSoftwareSlimmer_XXX_net48.zip``.
- Open the application and go to the ``Pre Install`` tab.
    - Select your installer file by clicking ``Browse`` and then confirm by double-clicking ``Next``.
- After the extraction process, untick everyting in the ``Packages`` tab apart from:
    - AMD Display Driver
    - AMD Settings (Required for Radeon Software)
    - These settings might be required for monitor sound:
        - AMD Audio CoProcessor Bus Driver
        - AMD Audio filter driver
        - AMD HDMI Audio driver
        - AMD High Definition Audio Controller
        - AMD Streaming Audio Filter Driver
- Untick everything in the ``Scheduled Tasks`` tab.
- Untick evertything in the ``Display Driver Components``. If you are using Audio from your monitor, do not remove ``High Definition Audio Bus``.
- Click ``Modify Installer`` and ``Run Installer``, and then continue with driver setup as usual.

## :material-cog: Configure Radeon Software

- Open Radeon Software by right-clicking on dekstop.
- Accept the terms and click the Settings icon in top-right.
- Configure the following settings in the ``Graphics`` tab:
    - Wait for Vertical Refresh - Always Off
    - Texture Filtering Quality - Performance
    - Tessellation Mode - Override application settings
    - Maximum Tessellation Level - Off
- Configure the following in the ``Display`` tab:
    - AMD FreeSync - It has the potential to increase input latency due to extra processing. Your mileage may vary as it has supposedly improved over time.
    - GPU Scaling - Off
    - Color Depth - Value that matches your monitor's specifications
- Disable all settings in ``Hotkeys`` and ``Preferences`` tabs.
- Configure your refresh rate and resolution by typing the following command in ++windows+r++:
```
rundll32 display.dll,ShowAdapterSettings 0
```
- Disable the residual AMD services and drivers. Typically the ``AMD Crash Defender`` and ``AMD External Events Utility`` (required for VRR) services.

## :material-desktop-tower: Disable Multi-Plane Overlay (MPO)

Disabling Multi-plane Overlay (MPO) can fix some desktop applications flickering or stuttering, which may occur during video playback using hardware acceleration with browsers. Blackscreens may occur when alt tabbing from games or applications to a browser that has a video on loop. Some desktop apps may flicker or stutter when resizing the window on some computers.

MPO can be disabled by running the following command in CMD (make sure you run CMD as administrator):
```bat
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\Dwm" /v "OverlayTestMode" /t REG_DWORD /d "5" /f
```

## :material-numeric-0: Force P-State 0 (advanced)

*We are sorry, but the documentation for this is not written yet. Feel free to provide your contribution at [https://github.com/Atlas-OS/docs](https://github.com/Atlas-OS/docs).*
