---
description: An extended FAQ for common issues
icon: material/account-question
---

This FAQ collects common issues that people may have, extended from [the website](https://atlasos.net/faq).

#### Main common issues

???+ bug "Auto Cleaner issues"
	If you haven't already, read and run the script in the ['Auto Cleaner issues'](https://docs.atlasos.net/troubleshooting/common-issues/auto-cleaner/) page. There are **zero** downsides to it, it's simply fixing bugs.

??? question "How do I go back to normal Windows?"
	Follow only these steps and ignore everything else on the installation documentation:
	
	- Download an ISO
		- If you want Windows 11, firstly make sure that you fit the requirements and go to the [Windows 11 MSDL page](https://massgrave.dev/msdl/#2616)
	- Reinstalling Windows

	This will get you to a completely stock Windows 10 installation.

	🔗 [https://docs.atlasos.net/getting-started/installation/](https://docs.atlasos.net/getting-started/installation/ )

#### v0.3.0 FAQ
???+ question "Should I wait until v0.3.0?"
	Yes, v0.3.0 will be much more stable with more options for security, improved compatibility and overall much less issues.

??? question "When is v0.3.0 coming out?"
	There's no exact ETA, please do not constantly ask in the Discord or forums.
	
	However, it should be sometime soon (potentially early next month), at a maximum of a couple of months (as of 29/07/23).

??? question "Will v0.3.0 have Windows 11?"
	Yes, although that will be in the latest stage of v0.3.0 development.

??? example "Can I use these 'alpha' versions of v0.3.0 from GitHub?"
	These builds are unsupported, potentially broken and only for testing. You should not use these as a main install. These are not finished versions of v0.3.0 and are simply under development.
	
	If you want to learn more about the development of v0.3.0, see the 'Channels & Roles' section in the [Atlas Discord](https://discord.atlasos.net/).
	
#### Other common issues
??? bug "I am stuck in a Windows Update loop."
	View [`sabaasa`/Atlas-UpdateFix](https://github.com/sabaasa/Atlas-UpdateFix) and follow the `README.md`. This will be fixed in v0.3.0.

??? bug "I uninstalled my third-party antivirus, but AME Wizard still says that I have it!"
	After ensuring that **all** antiviruses are uninstalled, run this command in PowerShell with administrator permissions:

	```powershell
	Get-CimInstance -Namespace "root\SecurityCenter2" -Class "AntivirusProduct" | Remove-CimInstance -Verbose
	```

??? bug "There is a password after I install!"
	Just press enter, don't type in any password and see if it works. This will be fixed in v0.3.0.
	
	If leaving it blank doesn't work, try `atlas` as the password.
??? question "Where can I get the old ISOs?"
	You can't, as they are old and unsupported builds that violate the Windows EULA, meaning that they can be taken down by Microsoft.

	If you disregard how they are not as good as the current releases and how they violate Windows EULA and somehow obtain the old ISOs anyways, please keep in mind that they are deemed as unsafe as they could of been maliciously modified without your knowledge, and you will get no help with them.

??? question "iTunes is not recognising my device!"
	Please download the latest Apple USB drivers from the [Microsoft Update Catalog](https://www.catalog.update.microsoft.com/Search.aspx?q=Apple%2C%20Inc.%20-%20USBDevice).
	
	1. Download and extract (use 7-Zip or Explorer, ignore any errors/warnings) the latest driver from the Microsoft Update Catalog
	2. Right click on the .inf file -> Install

	Alternatively, use <https://pcmanager-en.microsoft.com/> to interact with the core of Windows Update to install the Apple USB drivers, and bypass Atlas' Windows Update blocks.
	
	:fontawesome-solid-triangle-exclamation: **You should not download other updates**, as it will restore components, reset tweaks and break lots of things.