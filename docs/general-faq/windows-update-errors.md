---
description: How to fix common Windows Update errors in AtlasOS
icon: material/update
---

# :material-update: How do I fix errors with Windows Update on AtlasOS?

**Some users may have a Windows Update error when installing specific Windows updates. This page will guide you through fixing these errors.**

## :material-restore-alert: General errors

To fix some general Windows Update errors, try the following steps:

1. Open **Command Prompt as Administrator**, and enter the commands below in order:

    ```
    dism /online /cleanup-image /restorehealth
    sfc /scannow
    ```

    It is expected that the commands will take a while to complete. The first command will likely error with **'The source files could not be found,'** but you can safely ignore this.

1. Restart your computer

1. Attempt to update Windows again
