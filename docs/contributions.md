---
description: The official contribution guidelines for Atlas
icon: material/handshake
---

# :material-handshake: Contribution Guidelines

This page provides guidelines on how to contribute to Atlas. We highly appreciate your contributions!

Atlas uses [:simple-github: GitHub](https://github.com/Atlas-OS) to manage everything. See the [GitHub quick start guide](https://docs.github.com/get-started/quickstart) first if you're unfamiliar with GitHub. Apart from how to use GitHub, this page tells you everything else.

## :octicons-git-commit-24: Areas of contribution

A [Code of Conduct](https://github.com/Atlas-OS/.github/blob/main/profile/CODE_OF_CONDUCT.md) applies to each Atlas repository. Please read this before contributing.

### Atlas Playbook

[:simple-github: GitHub Repository](https://github.com/Atlas-OS/Atlas){ .md-button }
[:material-license: License (GPLv3)](https://github.com/Atlas-OS/Atlas/blob/main/LICENSE){ .md-button }
[:material-tag: Releases](https://github.com/Atlas-OS/Atlas/releases){ .md-button }

This repository contains Atlas' central source code, a Playbook file (`.apbx`) used with AME Wizard. It contains all the various scripts, configurations, and more that Atlas applies to people's systems.

If you're unsure where to start, read [AME's documentation](https://docs.ameliorated.io/developers.html) for help.

Consider using virtualization software like [VMWare Workstation](https://www.vmware.com/products/desktop-hypervisor.html) or [Hyper-V](https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v) to test. You can use 7-Zip or the included `src\playbook\local-build.cmd` script to build your Playbook.

### Atlas Documentation

[:simple-github: GitHub Repository](https://github.com/Atlas-OS/docs){ .md-button }
[:material-license: License (CC-BY-SA-4.0)](https://github.com/Atlas-OS/docs/blob/master/LICENSE){ .md-button }

The website that you are looking at. We made the Atlas documentation in [MkDocs Material](https://squidfunk.github.io/mkdocs-material/), a documentation framework that uses markdown.

See the repository on how to get started contributing.

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

The only exclusion to this is when there is an urgent change, which team members might directly commit to the primary branch of a repository.

## :material-format-letter-case: Formatting

Before a pull request, ensure that:

- Your changes comply with the general formatting of a repository
- There's a minimal amount of mistakes; check grammar and anything else important
	- For YAML changes, verify that they are valid using a linter

### :octicons-verified-16: Commit Signature Verification

We highly recommend setting up [commit signature verification](https://docs.github.com/en/authentication/managing-commit-signature-verification). This marks your commits as **:material-checkbox-marked-circle: Verified**, indicating commits have not been forged by someone else.

Check out this [detailed guide on setting up verified commits](https://gist.github.com/Beneboe/3183a8a9eb53439dbee07c90b344c77e#file-how-to-setup-verified-commits-md). You can install [:simple-gnuprivacyguard: GPG](https://gnupg.org/) (used for signing) in Windows with [Scoop](https://scoop.sh/): `scoop install gpg`

### :octicons-git-branch-16: Conventional Commits

We recommend using [:simple-conventionalcommits: Conventional Commits](https://www.conventionalcommits.org/) in Atlas repositories for consistency and more descriptive commits. You can also look at [Angular's Conventional Commits](https://github.com/angular/angular/blob/68a6a07/CONTRIBUTING.md#commit) for more guidance.

Conventional Commits are a commit message format that helps to make the commit history more readable and easier to navigate.

*Example*: [`feat: ✨ add fAllowFullControl`](https://github.com/Atlas-OS/Atlas/commit/72cdcc7b327df19fd07e9c6eb0a10812ac6936b0)

- [**Extension for Visual Studio Code**](https://github.com/vivaxy/vscode-conventional-commits)
- [**Emoji reference**](https://gitmoji.dev) (optional)
