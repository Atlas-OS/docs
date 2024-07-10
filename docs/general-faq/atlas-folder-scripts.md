---
description: All troubleshooting scripts bundled in the AtlasOS playbook
icon: material/script
---

# :material-script: Scripts in Atlas

Atlas comes with some simple scripts for fixing problems in the "Atlas" folder. These included scripts can help you find the cause of more general problems you are having and get Atlas back to its original state.

## :material-network-outline: Network

!!! warning "Restart after running scripts"
    Changes to the network made with the Atlas scripts will not work right until you restart your system. After running an Atlas network script, make sure to save your work and restart your computer.

### Reset Network

If you have been messing around with your network settings to try to fix or improve them on your own, resetting them to the Windows or Atlas defaults can help.

If you are having trouble with networking after installing Atlas for the first time, you might find that resetting your networking settings to the Windows defaults helps. Using the default network settings in Windows can help you figure out if the network optimizations in Atlas are the cause of your internet problems.

If you have changed your network settings but want to go back to the original Atlas optimizations and network settings, you can reset your network settings to Atlas defaults. This will restore all of the internet settings from a new Atlas installation.

## :material-shield-lock-outline: Safe Mode

Safe mode starts Windows in a very simple way, with only a few files and drivers. If a problem does not occur in safe mode, it means that the problem is not caused by the default settings or basic device drivers. Seeing how Windows works in safe mode can help you figure out where a problem is coming from so you can fix it on your PC.

!!! danger "Safe mode can be confusing"
    Safe mode is a state in Windows that only has the bare necessities to run Windows. So, you might be confused about what you need to do to get into safe mode. You should not have to use safe mode unless you know what you are doing or are following a trusted tutorial.

    Safe mode can help with:

    * Uninstalling and fixing drivers.
    * Getting rid of viruses.

### Safe Mode

Safe Mode starts your computer in the default safe mode, which only has the drivers and files Windows needs to run. You will not be able to connect to the internet in this state.

### Safe Mode with Command Prompt

The Command Prompt (CMD) is available in all safe mode states, but "Safe Mode with Command Prompt" only gives you the Command Prompt. You will not have a user interface to help you navigate your system. Instead, you will have an admin-level command prompt.

### Safe Mode with Networking

Safe Mode with Networking functions similarly to safe mode without networking. But Safe Mode with networking adds the network drivers and services you need to connect to the internet.

## :material-cog-outline: Services

*We are sorry, but the documentation for this is not written yet. Feel free to provide your contribution at [https://github.com/Atlas-OS/docs](https://github.com/Atlas-OS/docs).*

## :material-brain: Visual C++ Redistributables

The Microsoft Visual C++ Redistributables are a key part of any Windows desktop. Visual C++ Redistributables must be installed on your computer for many games and programs to work. This is why most Visual C++ Redistributables are already installed on Atlas.

Our "Reinstall Visual C++ Redistributables" script uses an all-in-one repack of the Visual C++ Redistributables called [abbodi1406/vcredist](https://github.com/abbodi1406/vcredist), which makes it easy to install new redistributables or reinstall broken ones.
