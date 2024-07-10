---
description: Fix error code 1603 when installing Adobe Acrobat
icon: simple/adobeacrobatreader
---

# :simple-adobeacrobatreader: How to fix Adobe Acrobat failing to install?

**If Adobe Acrobat fails to install with error codes such as 1603, you have most likely changed your Atlas settings using the included folder.**

To get Adobe Acrobat to install successfully, you will need to make sure you have enabled [Printing](../getting-started/post-installation/atlas-folder/general-configuration.md#printing). Without the printing service enabled, Adobe Acrobat will continuously fail to install.

## Why is Printing required to install Adobe Acrobat?

During the installation of Adobe Acrobat, the installer will attempt to configure a virtual "Adobe PDF" printer. As this is a virtual printer, it requires the printing service to be enabled for successful installation of printer drivers.

However, after installing Adobe Acrobat, you may choose to disable [Printing](../getting-started/post-installation/atlas-folder/general-configuration.md#printing) if you do not intend to use the included printer driver or any other form of printing.

!!! warning
    Disabling [Printing](../getting-started/post-installation/atlas-folder/general-configuration.md#printing) after the installation of Adobe Acrobat is not officially tested or endorsed by Atlas. Therefore, we cannot guarantee stability if you disable [Printing](../getting-started/post-installation/atlas-folder/general-configuration.md#printing) after completing the Adobe Acrobat installation.