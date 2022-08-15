# Windows Features is not working!

You can use **dism** to toggle features instead, open command prompt and use any of the following commands:

???+ failure "Disable Internet Explorer"
	**Disabling IE can break some features like Steam shortcuts.**
	```bat
	dism /Online /Disable-Feature /FeatureName:Internet-Explorer-Optional-amd64 /norestart
	```

???+ failure "Disable Windows Media Player"
	```bat
	dism /Online /Disable-Feature /FeatureName:WindowsMediaPlayer /norestart
	```

You can disable other features by running:
```bat
dism /Online /Get-Features /Format:Table | Find "Enabled"
```

Then adding the name in front of `/FeatureName:` in this command: `dism /Online /Disable-Feature /FeatureName:NAMEHERE /norestart` with your whatever desired feature you would like to remove.

To enable, simply use `/Enable-Feature` instead like so:

???+ success "Enable Internet Explorer"
	```bat
	dism /Online /Enable-Feature /FeatureName:Internet-Explorer-Optional-amd64 /norestart
	```

???+ success "Enable Windows Media Player"
	```bat
	dism /Online /Enable-Feature /FeatureName:WindowsMediaPlayer /norestart
	```
