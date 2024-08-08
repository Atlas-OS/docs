---
description: The official contribution guidelines for Atlas
icon: material/handshake
---

# :material-handshake: Contribution Guidelines

This page provides guidelines on how to contribute to Atlas. We highly appreciate your contributions!

<!-- --8<-- [start:gitNotice] -->
## :material-github: Our contribution platform

Atlas uses [:material-github: GitHub](https://github.com/Atlas-OS) to manage everything. Please note that our documentation does not contain instructions on how to use GitHub or Git; if you're unfamiliar with them, see the [GitHub quick-start guide](https://docs.github.com/get-started/quickstart) first.
<!-- --8<-- [end:gitNotice] -->

## :octicons-git-commit-24: Areas of contribution

A [Code of Conduct](https://github.com/Atlas-OS/.github/blob/main/profile/CODE_OF_CONDUCT.md) applies to each Atlas repository. Please read this before contributing.

### Atlas Playbook

[:simple-github: GitHub Repository](https://github.com/Atlas-OS/Atlas){ .md-button }
[:material-license: License (GPLv3)](https://github.com/Atlas-OS/Atlas/blob/main/LICENSE){ .md-button }
[:material-tag: Releases](https://github.com/Atlas-OS/Atlas/releases){ .md-button }

This repository contains Atlas' central source code, which is eventually packaged into a Playbook file (`.apbx`) used with [AME Wizard](https://ameliorated.io/). It contains all the various scripts, configurations, and more that Atlas applies to people's systems.

See the [Playbook contribution guide](playbook.md) on how to get started.

### Atlas Documentation

[:simple-github: GitHub Repository](https://github.com/Atlas-OS/docs){ .md-button }
[:material-license: License (CC-BY-SA-4.0)](https://github.com/Atlas-OS/docs/blob/master/LICENSE){ .md-button }

The website that you are looking at. We made the Atlas documentation in [MkDocs Material](https://squidfunk.github.io/mkdocs-material/), a documentation framework that uses markdown.

See the [documentation contribution guide](documentation.md) on how to get started.

## :octicons-issue-closed-24: How our GitHub Issues work

For transparency with users, we keep issues that affect the current release open and label them with the **fixed next release**.

## :octicons-git-pull-request-24: How to make changes

!!! tip "Unsure if people like your change?"
	Consider proposing the change to people in the [:simple-discord: Discord](https://discord.gg/atlasos) or [:octicons-issue-opened-16: GitHub issues](https://github.com/Atlas-OS/Atlas/issues) first.
	
	Regardless, remember that it's okay to make mistakes. People will give feedback in your pull requests anyway; don't worry about it too much.


1. Make a fork, or for team members, a branch in the repository
1. Make your changes, then make a pull request to the primary branch of the repository
1. Wait for at least two reviews, **depending on the size of the change**
	- For team members, we only require one review
1. When it's merged, it will be squash-merged into the primary branch of the repository
	- This means all commits from the branch will be combined into one

The only exclusion to this system is for team members not using pull requests when there is an uncontroversial and well-tested change.

## :material-format-letter-case: Formatting

Before a pull request, ensure that:

- Your changes comply with the general formatting of a repository
- There's a minimal amount of mistakes; check grammar and anything else important
	- For YAML changes, verify that they are valid using a linter

### :octicons-verified-16: Commit Signature Verification

We highly recommend setting up [commit signature verification](https://docs.github.com/en/authentication/managing-commit-signature-verification). It marks your commits as **:material-checkbox-marked-circle: Verified**, indicating that someone else has not forged commits.

Check out this [detailed guide on setting up verified commits](https://gist.github.com/Beneboe/3183a8a9eb53439dbee07c90b344c77e#file-how-to-setup-verified-commits-md).

#### Installing GPG/GnuPG (used for signing)

=== "Windows"

	- [Scoop](https://scoop.sh/) (`scoop install gpg`)
	- [Gpg4Win](https://www.gpg4win.org/) (installer)
	- [Windows Package Manager](https://learn.microsoft.com/windows/package-manager/winget/) (`winget install GnuPG.GnuPG`)

=== "Linux"
	Use your distro's package manager to install GPG.

	- [Arch Linux](https://wiki.archlinux.org/title/GnuPG): `sudo pacman -S gnupg`
	- [Ubuntu](https://help.ubuntu.com/community/GnuPrivacyGuardHowto)/[Debian](https://wiki.debian.org/GnuPG): `sudo apt install gnupg`
	- [Fedora](https://fedoraproject.org/wiki/Cryptography#GnuPG): `sudo dnf install gnupg`

=== "macOS"

	- [Homebrew](https://formulae.brew.sh/formula/gnupg): `brew install gnupg`

### :octicons-git-branch-16: Conventional Commits

We recommend using [:simple-conventionalcommits: Conventional Commits](https://www.conventionalcommits.org/) in Atlas repositories for consistency and more descriptive commits. You can also look at [Angular's Conventional Commits](https://github.com/angular/angular/blob/68a6a07/CONTRIBUTING.md#commit) for more guidance.

Conventional Commits is a commit message format that helps make the commit history more readable and easier to navigate.

*Example*: [`feat: ✨ add fAllowFullControl`](https://github.com/Atlas-OS/Atlas/commit/72cdcc7b327df19fd07e9c6eb0a10812ac6936b0)

[Extension for Visual Studio Code ->](https://github.com/vivaxy/vscode-conventional-commits)