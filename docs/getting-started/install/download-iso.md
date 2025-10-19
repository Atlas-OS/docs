---
title: 1. Download an ISO
description: Download a Windows ISO and prepare network drivers for AtlasOS installation
---

<!-- --8<-- [start:iso] -->
## :material-disc: **1.1** Download an ISO
<!-- --8<-- [end:iso] -->

Before installing Atlas, you need a clean ISO.

<!-- --8<-- [start:iso1] -->
To fully reinstall Windows, you need to download your desired Windows version's ISO file, which will be used later in the guide.

<span class="noJs">The buttons below download an ISO directly from Microsoft's servers. It gets the latest version of your desired Windows version for [Intel, AMD, and ARM CPUs](https://www.tenforums.com/tutorials/132836-check-what-processor-cpu-windows-pc.html#option1).</span>

<noscript>
<b>The documentation's Windows ISO downloader doesn't show for you due to the documentation being loaded without JavaScript.</b>
See the alternatives below.
</noscript>

!!! question "Which version should I choose?"
    If you are using a **Intel or AMD CPU** with the `x86_64` architecture, Download the x86_64 version.

    If you are using a **Snapdragon SoC** with the `ARM64` architecture, Download the ARM64 version.

??? grey-tip "Alternatives"

    !!! tip 
        Even though the downloader in our docs uses official Microsoft servers, you can still download the ISO directly from their website.
        
    <div id="official-microsoft-sources"></div>
    === "Official Microsoft Sources"

        ### [Windows 11 :material-download:](https://www.microsoft.com/en-us/software-download/windows11)

        - Click the link above and find "Download Windows 11 Disk Image (ISO) for x64 devices"
        - Click on the"Select Download" dropdown, choose **Windows 11 (multi-edition ISO)**, and click **Confirm.**
        - Select your desired language and press confirm.
        - Click **64-bit Download** to begin your download.

<!-- --8<-- [end:iso1] -->
{% include 'msdl.md' %}

<!-- --8<-- [start:drivers] -->
## :material-ethernet: **1.2** Network Drivers

By default, Windows may not have your computer's network drivers, meaning after reinstalling, your computer could have no internet connection.

For this reason, we **strongly** recommend that you do one of the following:

- Download your network drivers beforehand and store them on external storage
- Have the ability to download and transfer network drivers from another device later

!!! question "Where do I get my network drivers?"
    You can find your computer's network drivers online by searching for your device or motherboard's official support page. If you can't find it, try searching online for your network device's name in [Device Manager](../assets/images/device-manager-nic.webp) instead. If multiple of the latest network drivers are available, download them all.
<!-- --8<-- [end:drivers] -->

## :material-monitor-arrow-down: **1.3** Choose your Install Method

Atlas provides two installation methods, Playbook & ISO Injection. 

<div class="grid cards" markdown>

-   #### :material-book-cog: Playbook

    ---

    Traditional Playbook method, best for average users.

    ---

    **[-> Install with Playbook](/getting-started/install/install-playbook)**

-   #### :material-minidisc: ISO Injection

    ---

    New installation method for experienced users.


    ---

    **[-> Install with ISO Injection](/getting-started/install/install-iso-injection)**

</div>