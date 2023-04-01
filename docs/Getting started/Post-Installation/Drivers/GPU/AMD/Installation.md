# Install AMD Driver

We recommend using RadeonSoftwareSlimmer, as it is an open-source GUI app alternative to the manual method of stripping the drivers.

## Driver Installation
 
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
- Click ``Modify Installer`` and ``Run Installer``. Continue with driver setup as per usual.