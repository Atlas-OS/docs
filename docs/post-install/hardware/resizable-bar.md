---
title: Resizable BAR
description: Guiding you to enable resizable bar on supported systems
icon: material/transit-detour
---

# :material-transit-detour: Resizable BAR (SAM)

!!! info "Read before continuing"
    Before continuing with these steps, [**we recommend you update your BIOS**](./updating-the-bios.md). If you continue without doing so, you may find that the settings are not visible in your BIOS.

    Not only that, but you will also need to repeat these steps when you choose to [update your BIOS](./updating-the-bios.md).

Resizable BAR (Base Address Register), also known as Smart Access Memory (SAM) in AMD's terminology, is a feature that improves the communication between your CPU and GPU. This technology can improve FPS in-game immensely, sometimes by a staggering 15%.

Traditionally, when you play a game, your GPU requests textures, shaders, and other assets from your CPU. These get stored in the graphics card’s video RAM (VRAM) before getting drawn into an image.

However, the CPU has historically been limited to accessing 256MB chunks of the graphics card’s VRAM at a time. This means making lots of little transfers one after the other, instead, transfers can occur concurrently. This is important as games have gotten bigger and more complicated with larger data being transferred.

Resizable BAR changes this by allowing your CPU to access the GPU’s entire frame buffer. This means it can send more assets at a time, boosting performance because your graphics card doesn’t have to wait around as long.

**As for the graphics cards that support Resizable BAR, they require an NVIDIA GeForce 30 series, or AMD Radeon RX 6000 Series card or newer.**

If you do not meet these specifications, it's recommended to not enable the feature.

## :material-progress-question: How to Check if Resizable BAR is Enabled?

1. [Download GPU-Z](https://www.techpowerup.com/download/techpowerup-gpu-z/) and open the application
1. Check to see if **Rezisable BAR** is disabled or enabled [**GPU-Z Example**](../../../assets/images/gpu-z-resizable-bar.png).
    1. GPU-Z allows you to see why it's disabled. Click on **Disabled** to see more information about what you're missing.

## :material-check: How to Enable Resizable BAR?

1. Boot into the BIOS by pressing the **BIOS Key** while your PC powers on.
    1. Commonly the ++del++ key is used to access the BIOS, however, it's recommended to look up the key for your motherboard specifically.
1. Disable the **Compatibility Support Module (CSM)** from the Boot menu.
1. Enable the **Above 4G Decoding** and **ReSize BAR** Support option or some similar option with different wording.
    1. These settings are commonly found under **PCI Subsystem Settings**, or simply an option on the main screen of the BIOS.
