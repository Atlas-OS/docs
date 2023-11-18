---
description: Does the Microsoft Store work on AtlasOS?
icon: material/microsoft
---

**Yes, the Microsoft Store works seamlessly with AtlasOS right from the start.**


If you encounter any issues with the Microsoft Store on AtlasOS, follow these troubleshooting steps:

??? question "Why does this happen?"
    This is a stock Windows 10 issue. Microsoft doesn't update the Windows 10 ISO on their website, so it's using an outdated Store that is now broken.


=== "Method 1 (Recommended)"

    1. Press ++win+r++
    2. In the **Run** box, type `wsreset -i` and press ++enter++
    3. Wait for the store to update, this could take a while. Then, try opening the Microsoft Store again. Once it's open, head to **Downloads and Updates** and wait for the Microsoft Store to update.
    
    Video guide:

    <center>
        <video src="/assets/videos/wsreset.mp4" controls muted width="560" height="420"></video>
    </center>


=== "Method 2"

    1. Go to [store.rg-adguard.net](https://store.rg-adguard.net)
    2. Change the drop down on the left to **ProductID**
    3. Paste in `9WZDNCRFJBMP` and click the tick button
    4. Scroll down until you find the files starting with `Microsoft.WindowsStore`
    5. Click on the one that has the highest version number and ends in `.msixbundle`
    6. Double click the downloaded file, and click **Install**.
   
    ![msstoreappx](../../assets/images/msstoreappx.png)