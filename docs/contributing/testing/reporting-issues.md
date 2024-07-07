---
description: How we test the AtlasOS Playbook
icon: material/help-box-multiple
---

# :material-help-box-multiple: How to report issues when testing

This page tells you how to report any issues you find [when testing](what-to-test.md).

## :material-script-text: AME Wizard logs

Before reporting, we would find it useful if you could skim through your AME Wizard logs (located in `C:\ProgramData\AME\Logs`) to look for the following:

- The `Output.txt` from the latest Playbook
    - Check if there are any errors in the scripts
    - If there are any logical errors in the scripts
- The `Log.yml`
    - Check if there are any errors from AME Wizard

If you find anything, include that in your report. However, **post all logs when reporting bugs so we can also look through them.** No personally identifiable information is contained in these, except from your Windows username.

## :material-alert: Where to report to

### If it's the latest release...

Please report to the [Atlas GitHub Issues](https://github.com/Atlas-OS/Atlas/issues). Ensure that you follow the issue template.

### If it's from a GitHub branch...

Ideally, report to the `📘 ┃ playbook` channel under our [Discord's 'Development' category](../../faq-and-troubleshooting/common-questions/testing-nightly-builds.md). Otherwise, report to the [Atlas GitHub Issues](https://github.com/Atlas-OS/Atlas/issues). Ensure that you follow the issue template.

### If it's a [preview from our Discord](../../faq-and-troubleshooting/common-questions/testing-nightly-builds.md)...

Report to the designated `🧪 ┃ issue-reporting` forum channel under the 'Development' category.
