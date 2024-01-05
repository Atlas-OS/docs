---
description: Why is AME Wizard being detected as a virus?
icon: material/virus
---

# :material-virus: Why is AME Wizard being detected as a virus?

**AME Wizard can be falsely flagged as a virus. To avoid it being detected, add it to your Windows Defender exclusions list.**

Windows Defender may automatically flag AME Wizard as malicious when trying to run it, or may even delete it before running it.

To avoid these problems you can temporarily disable **Real Time Protection** or follow [AME's Security Exceptions Documentation (recommended)](https://docs.ameliorated.io/guides/security-exceptions.html).

## :material-file-question: Why is it being falsely flagged?

### New releases

Combined with the other factors below, new releases of AME Wizard are highly likely to be falsely flagged due to them never being seen before by Windows Defender. The more times that antiviruses see users use a program, the more the trust level goes up by antiviruses.

### Lack of code signing

Code signing is a system that allows users to verify that the executable they receive has not been altered by a third party. This is standard on most applications from companies, such as your web browser and games. Code signing makes false positives highly unlikely from antiviruses.

AME Wizard currently does not have a code signing certificate, however it is being worked on internally.

### Modifications to the operating system

Some actions that AME Wizard can run are suspicious to antiviruses. AME Wizard can remove Windows Defender only with the user's knowledge and if instructed by the Playbook, which antiviruses pick up on.