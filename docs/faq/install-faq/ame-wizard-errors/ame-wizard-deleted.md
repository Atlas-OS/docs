---
description: Why is AME Wizard being detected as a virus?
icon: material/virus
---

# :material-virus: Why is AME Wizard being detected as a virus?

**AME Wizard can be falsely flagged as a virus. To avoid it being detected, add it to your Windows Defender exclusions list.**

Windows Defender may automatically flag AME Wizard as malicious when trying to run it or even delete it before running it.

To avoid these problems, temporarily disable **Real Time Protection** or follow [AME's Security Exceptions Documentation (recommended)](https://docs.ameliorated.io/guides/security-exceptions.html).

## :material-file-question: Why is it being falsely flagged?

### New releases

Combined with the other factors below, new releases of AME Wizard are highly likely to be falsely flagged due to them never being seen before by Windows Defender. The more times that antiviruses see users use a program, the more the trust level goes up by antiviruses.

### Lack of code signing

Code signing is a system that allows users to verify that a third party has not altered the executable they receive. This is standard on most applications from companies, such as your web browser and games. Code signing makes false positives highly unlikely from antiviruses.

However, code-signing certificates are expensive and tedious to get. This is why AME Wizard currently has no code signing certificate but will do so in the future.

### Modifications to the operating system

Some actions that AME Wizard can run are suspicious to antiviruses.

For example, AME Wizard can irreversibly remove Windows Defender from Windows, which Atlas does not utilize, but some Playbooks do. In their Playbook's case, this is for the more extreme privacy their advanced users want.

Although these removals are within the user's knowledge, antiviruses can see this and falsely flag AME Wizard as malicious.