---
description: How to fix CS:GO "VAC unable to verify" on AtlasOS
icon: simple/valve
---

The issue is from a script provided with Atlas which will be fixed in the next update, but until then you can follow this guide to mitigate.

Go ahead and find the `Auto-Cleaner.cmd` script provided by Atlas, it should be in the `C:/Windows/AtlasModules/Scripts` folder.

From here you can find the more updated `Auto-Cleaner.cmd` script on our GitHub [here](https://raw.githubusercontent.com/Atlas-OS/Atlas/main/src/Executables/AtlasModules/Scripts/Auto-Cleaner.cmd). You can either copy and paste the contents of the script into the existing one, or replace the existing one with the new one.

If you want to replace the script, you can download it from above but if you don't know how to download it, right click and `Save Page As` or something similar. Then you can replace the existing script with the new one.

Some people have also have reported that v0.1.0 still works with CSGO, so if this doesn't work then down-grading may be a solution but we would advise against it.