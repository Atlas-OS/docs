---
description: How to fix Itunes not recognising Apple device?
icon: material/apple
---

**If iTunes is not recognizing your Apple device, it's likely a driver issue. You can fix this by downloading and installing the Apple USB Drivers.**

If you're using Atlas and have not enabled Automatic Driver Installation, you will need to install the Apple USB driver manually.

To fix this issue:

1. Download the latest Apple USB drivers from the [Microsoft Update Catalog](https://www.catalog.update.microsoft.com/Search.aspx?q=Apple%2C%20Inc.%20-%20USBDevice)

2. Extract the downloaded zip file using 7-Zip or Explorer. Ignore any errors or warnings that may appear.

3. Find the `.inf` file in the extracted folder. Right-click on the `.inf` file and select **Install**.

Alternatively, you can use [Microsoft PC Manager](https://pcmanager-en.microsoft.com/) to interact with the core of Windows Update to install the Apple USB drivers, bypassing Atlas' Windows Update driver blocks.

If you're experiencing significant issues with drivers, consider enabling Automatic Driver Installation from the Atlas folder.