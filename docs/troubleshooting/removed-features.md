## Features removed from Atlas

Please do keep in mind that Atlas is made for gaming, so many features and services that are not needed for most gamers have been taken away. When services or features are taken away, they can cause problems with the apps you use or even with hardware.

Atlas gets rid of the following services and features:

!!! success "Features being added back in v0.3"
	In v0.3, these features are being added back as optional features:
	
	* Windows Defender
		* Hopefully, Windows Update will be configured to only get security definition updates by default
		* Windows Defender will slow down performance (especially on older hardware using components like HDDs)
		* Configured with policies by default for the least annoyance
	* Tools for virus and malware protection (such as SecHealth, HealthCheck, MsMpEng and SmartScreen)
	* Windows Updates
		* It will be configured with policies by default for the least annoyance possible, including manual updates
		* It is most likely that Windows Updates will revert changes from Atlas, so you might have to re-run the AME Wizard on updates (there might be a tool to check the integrity of the tweaks)
	
	These features will be enabled by default:
	
	* [User Account Control (UAC)](/getting-started/post-installation/configuration/#uac) (already enabled in GitHub Actions builds - [commit](https://github.com/Atlas-OS/Atlas/commit/2f2f083acd3364c62056ce45a0c2bada9b9399a9))
	
	Additionally, these features might be added as optional features:
	
	* Restore Points
		* Please see [here](https://askleo.com/why_i_dont_like_system_restore/) why they should not be relied on
		* As some examples on why they should not be relied on, they can sometimes break things (as it's somewhat like a Registry backup) and most of the time do not help
	
	See this [tweet](https://twitter.com/AtlasOS/status/1651284816489336832) for more information.
	
	Overall, Atlas will be more transparent from now on, with more clarity and warnings to the user about security.

* Some APPX and UWP applications
* Logging of Network Configuration
* Malicious Removal Tool
* Microsoft Edge and WebView
* Restore Points and System Reset
* Telemetry
* Tools for virus and malware protection (such as SecHealth, HealthCheck, MsMpEng and SmartScreen)
* Windows Defender
* Windows Error Reporting
* Windows Updates

## Features disabled by default but can be enabled
* Hyper-V and VBS
* Background Apps
* Disk Defragmentation
* User Account Control (UAC)

!!! info
    You can find all of these options and enable/disable them inside the [Atlas folder on your Desktop](file://C:/Users/default/Desktop/Atlas), just follow our [Configuration guide](/getting-started/post-installation/configuration) for more info. If you do not have the Atlas folder on your Desktop, please check [here](/troubleshooting/common-issues/atlas-folder-missing).
    
    Atlas gives you the option to enable/disable lots of other options too which you can also find in the folder above.
