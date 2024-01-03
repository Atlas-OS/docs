---
title: XMP/DOCP
description: Guiding you on how to enable XMP or DOCP on respective systems
icon: material/speedometer
---

# :material-chip: XMP/DOCP

!!! info "Read before continuing"
    Before continuing with these steps, [**we recommend you update your BIOS**](./updating-the-bios.md). If you continue without doing so, your XMP/DOOCP settings will revert after you update.

XMP (Extreme Memory Profile) for Intel and DOCP (Direct Overclock Profile) for AMD are features that allow your computer’s RAM to run at higher speeds than what it’s initially set at.

When you buy high-performance RAM, it often comes with a speed rating, like 3200MHz. However, when you first install it on your computer, it will run at a standard speed, often much slower.

Enabling XMP or DOCP in your computer’s BIOS settings allows the RAM to run at its advertised speed, which can significantly improve performance, especially in games as they require quick data transfers for smooth gameplay.

## :material-speedometer: How to Enable XMP/DOCP
1. Boot into the BIOS by pressing the **BIOS Key** while your PC powers on.
    1. Commonly the ++del++ key is used to access the BIOS, however, it's recommended to look up the key for your motherboard specifically.
1. Locate the **DOCP/XMP** setting respective to the CPU in your system. On AMD systems, it's labelled DOCP, and XMP for Intel.
    1. Sometimes the setting can be found on the main homepage, sometimes it'll be under an OC/Overclocking category.
    1. Select **Profile 1** as it's commonly the most stable profile.
1. Run a stress test to ensure the DOCP/XMP profile is stable

## :material-check: How to Run a Stress Test?

Sometimes these memory profiles can be unstable and cause crashes when enabled. We recommend before finishing setting up DOCP/XMP that you run a stress test for at least **1 hour** to ensure it's stable.

1. [Download OCCT](https://www.ocbase.com/download/edition:Personal) and install it.
1. Open OCCT, and you’ll see a user interface with several tabs.
1. Go to the **Stability Test** tab, this is where you can stress test your components.
1. Select the **Memory** tab, and click the green **Start** button.
1. Wait 10 seconds for it to start (for free users), and monitor for any errors reported on the left side of the application.
1. You can leave the computer, **it will run for 1 hour**.

!!! danger ""
    If your computer blue screens, freezes or OCCT reports errors, **you must disable the DOCP/XMP profile as this will cause instability** when using your computer.

    This is likely to lead to file corruption and random crashes/blue screens when using your computer.
