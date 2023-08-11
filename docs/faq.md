---
description: An extended FAQ for common issues
icon: material/account-question
---

This FAQ collects common issues and questions that people may have, extended from [the website](https://atlasos.net/faq).

#### Main questions

??? question "How do I go back to normal Windows?"
	Follow only these steps and ignore everything else on the installation documentation:
	
	- Download an ISO
		- If you want Windows 11, firstly make sure that you fit the requirements and go to the [Windows 11 MSDL page](https://massgrave.dev/msdl/#2616)
	- Reinstalling Windows

	This will get you to a completely stock Windows 10 installation.

	🔗 [https://docs.atlasos.net/getting-started/installation/](https://docs.atlasos.net/getting-started/installation/ )

??? question "Where can I get the old ISOs?"
	You can't, as they are old and unsupported builds that violate the Windows EULA, meaning that they can be taken down by Microsoft.

	If you disregard how they are not as good as the current releases and how they violate Windows EULA and somehow obtain the old ISOs anyways, please keep in mind that they are deemed as unsafe as they could of been maliciously modified without your knowledge, and you will get no help with them.

??? question "How secure is Atlas?"
	Atlas is as secure as you want it to be, with the ability to enable or disable Defender, enable or disable Core isolation and Windows Update compatibility.
	
	Atlas also does extra improvements to security within Windows by disabling various obselete and potentially vulnerable features. 

#### Other common questions

??? danger "Who is Atlas for?"
	Atlas is for any enthuisast looking to improve the privacy, performance and ease of use of their Windows installation.
	
	However, please keep in mind that Atlas is not meant to be used in environments like business or for people that aren't as advanced with using Windows. Although Atlas always tries to maintain the best compatibility possible, you may have to do some troubleshooting with certain Atlas configurations, which isn't suitable for the situations listed above.

??? example "Can I help test for Atlas?"
	Anyone can help test the latest Atlas versions in development via the automatic building with [GitHub Actions](https://github.com/Atlas-OS/Atlas/actions).

	Please keep in mind that these builds are potentially incomplete, buggy and unsupported. Report any issues to our [GitHub Issues](https://github.com/Atlas-OS/Atlas/issues). 

??? bug "Why does AME Wizard still say that I have a third party antivirus?"
	After ensuring that **all** antiviruses are uninstalled, run this command in PowerShell with administrator permissions:

	```powershell
	Get-CimInstance -Namespace "root\SecurityCenter2" -Class "AntivirusProduct" | Remove-CimInstance -Verbose
	```

	You can install a third-party antivirus after installation. Keep in mind that you **should be installing Atlas on a clean installation of Windows.**

??? question "Will I have to reinstall Windows when I want to update Atlas?"
	Past Atlas v0.3.0, we have a goal to have upgrading support. However, we cannot guarentee that certain releases will not need a reinstall.

??? question "Why is iTunes is not recognising my device?"
	Please download the latest Apple USB drivers from the [Microsoft Update Catalog](https://www.catalog.update.microsoft.com/Search.aspx?q=Apple%2C%20Inc.%20-%20USBDevice).
	
	1. Download and extract (use 7-Zip or Explorer, ignore any errors/warnings) the latest driver from the Microsoft Update Catalog
	2. Right click on the .inf file -> Install

	Alternatively, use [Microsoft PC Manager](https://pcmanager-en.microsoft.com/) to interact with the core of Windows Update to install the Apple USB drivers, and bypass Atlas' Windows Update driver blocks.
	
	You could also [unblock Windows Update automatic driver updates](https://docs.atlasos.net/getting-started/post-installation/configuration/optional-tweaks/#windows-update-driver-updates) and get the drivers directly from Windows Update.