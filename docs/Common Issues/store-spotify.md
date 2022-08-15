# MS Store, Spotify or Creative Cloud say I don't have an internet connection!

There are two different solutions to this problem and depends on what your network icon shows.

- ![](/assets/images/network_error.png) If your network icon looks like this, you likely need to enable active probing.
- If you have no visible network icon on your taskbar, you need to enable WiFi.

??? info "Enabling Active Probing"
	You can either use the registry file located in the Atlas folder: `Atlas -> Troubleshooting -> Network -> ActiveProbing -> Enable`

	Or, use this command in command prompt:
	```bat
	reg add "HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\NlaSvc\Parameters\Internet" /v EnableActiveProbing /t REG_DWORD /d 1 /f
	```
	After doing either of these, reboot and the error should be gone.

??? info "Enabling WiFi"
	*Note: even if you use ethernet, the network icon requires WiFi to be enabled.*

	You can find the WiFi script in the Atlas folder: `Atlas -> Configuration -> WiFi -> Enable WiFi`.
	You will need to reboot for the changes to take effect.
