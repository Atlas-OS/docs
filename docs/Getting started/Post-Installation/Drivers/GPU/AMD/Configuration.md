# Configure AMD driver

## Configure Radeon Software

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
    - Color Depth - Value that matches your monitor's specification
- Disable all settings in ``Hotkeys`` and ``Prefrences`` tabs.
- Configure your refresh rate and resolution by typing the following command in ++windows+r++:
```
rundll32 display.dll,ShowAdapterSettings 0 
```
- Disable the residual AMD services and drivers. Typically the ``AMD Crash Defender`` and ``AMD External Events Utility`` (required for VRR) services.

## Force P-State 0 (Advanced)

*We're sorry, but the documentation for this isn't written yet. Feel free to provide your contribution at [https://github.com/Atlas-OS/docs](https://github.com/Atlas-OS/docs).*
