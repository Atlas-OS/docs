# How to check if your drive is GPT

!!! info
	You do **not** need a GPT drive to install Atlas. But when installing with a USB stick, your partition scheme (MBR or GPT) should be the same as your drive.

1. On your keyboard do WINDOWS KEY + R, when the run box is open, type "diskmgmt.msc" and then disk management will open.
2. Locate your disk at the bottom, right-click on your desired drive and press properties.
   ![](/assets/images/gpt.png)
3. When the box opens, go to "Volumes" at the top, and you will see "Partition Style" and if it says GPT then you're good to go. If not you will need to convert it to GPT for the installation.