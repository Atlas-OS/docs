---
description: The official contribution guidelines for the AtlasOS playbook
icon: material/handshake
---

# :material-handshake: Contribution Guidelines

This page provides guidelines on how to contribute to Atlas. All contributions are much appreciated!

Atlas uses Git to manage everything on the platform [:simple-github: GitHub](https://github.com/Atlas-OS). To more easily interact with Git, you can use:

* An IDE like [:simple-visualstudiocode: Visual Studio Code](https://code.visualstudio.com/) or [:simple-vscodium: VSCodium](https://vscodium.com)
* [:simple-github: GitHub Desktop](https://desktop.github.com/) (recommended)

Alternatively, you can use the [:simple-git: Git](https://git-scm.com/) command-line. Use whichever Git interface you find most familiar and easiest. Before contributing, you should [research](https://docs.github.com/en/get-started/quickstart) about Git first.

## :octicons-git-commit-24: How you can contribute

* [:material-pen-plus: **Atlas Playbook**](https://github.com/Atlas-OS/Atlas) - The Atlas playbook (`.apbx`) that is used in AME Wizard.
	* ([GPLv3](https://github.com/Atlas-OS/Atlas/blob/main/LICENSE)) ([:octicons-code-of-conduct-16: CoC](https://github.com/Atlas-OS/Atlas/blob/main/.github/CODE_OF_CONDUCT.md))
	* Read AME Wizard's [:material-file-document: Documentation](https://docs.ameliorated.io/developers.html) for help.

* [:material-language-rust: **Atlas Utilities**](https://github.com/Atlas-OS/Atlas-Utilities) - General tools used in Atlas like `filepicker.exe`, made in Rust.
	*  ([GPLv3](https://github.com/Atlas-OS/Atlas-Utilities/blob/main/LICENSE)) ([:octicons-code-of-conduct-16: CoC](https://github.com/Atlas-OS/utilities/blob/master/.github/CODE_OF_CONDUCT.md))

* [:material-book-plus-multiple: **Atlas Documentation**](https://github.com/Atlas-OS/docs) - The website that you are looking at.
	* ([:fontawesome-brands-creative-commons: CC-BY-SA-4.0](https://github.com/Atlas-OS/docs/blob/master/LICENSE)) ([:octicons-code-of-conduct-16: CoC](https://github.com/Atlas-OS/docs/blob/master/.github/CODE_OF_CONDUCT.md))
	* Read [this](https://github.com/Atlas-OS/docs/blob/master/.github/CONTRIBUTING.md) documentation-specific contribution guide for help.

These are the three main repositories to contribute to. There might also may be other repositories that fits your expertise. [Check out our GitHub organisation](https://github.com/Atlas-OS).

If a repository has a specified template for pull requests or issues, please use them. Otherwise, the maintainers reserve the right to close and lock your issue without further response.

## :material-chat-question: How it works

Each repository has a `dev` branch and a `main` or `master` branch for development.

!!! warning
	Make **all of your changes** to the `dev` branch of the respective repositories!

	Never commit or pull request directly to the `main` branches.

The `dev` branch exists to ensure that only approved and high-quality changes are merged into the `main` branch.

A pull request **every week** will be automatically created to merge the `dev` branch into the `main` branch, where the changes can be properly reviewed by **5 contributors** before the pull request is merged. The only exclusion to having less than 5 reviews is if there's not enough people reviewing, e.g. 4 reviews for documentation.

This ensures that all changes are thoroughly reviewed and agreed upon collectively, resulting in fewer bugs, improved code quality, and a more organized development process.

You will have to make your own fork of the respective Atlas repository, and then make a pull request to merge your modified fork's branch into the `dev` branch.

### :material-git: People with write access

!!! note
	This only applies to people with direct access to commit to the repositories, without the need to do a pull request.

	This list is from our [GitHub organisation's member list](https://github.com/orgs/Atlas-OS/people).

For any significant changes, consider creating a pull request for the `dev` branch instead of committing directly.

This means less potential headache in the future if the change is disagreed upon, as you can avoid reverting all of the disliked changes for the automatic pull request every week.

If you want to, you can also manually trigger the automatic pull request to merge `dev` into `main` early, but the 5 reviews will still be in effect. As a note, if you need to urgently fix something, you can use the `bypass` label to bypass your pull request being automatically closed by the pull request filter.

For regular pull requests, you can make your own branch in the Atlas repository or make a fork, it is your choice.

## :material-format-letter-case: Formatting

Before each commit, ensure that:

* Your changes comply with the overall formatting of a repository
* There are the most minimal amount of mistakes, check grammar and anything else important
	* For any YAML changed, please verify that it is valid before committing with [YAML Lint](https://www.yamllint.com/).
* People would generally agree with the change
	* If you don't know, ask people in the [:simple-discord: Discord](https://discord.gg/atlasos) or [:octicons-issue-opened-16: GitHub issues](https://github.com/Atlas-OS/Atlas/issues).

Making sure that your commits are already to a high standard means that development will be faster and more organised. However, keep in mind that it's okay to make mistakes sometimes, as people will give feedback/reviews in your pull requests, so don't worry about it too much.

### :octicons-verified-16: Commit Signature Verification
We highly recommend setting up [commit signature verification](https://docs.github.com/en/authentication/managing-commit-signature-verification). This marks your commits as 'Verified', indicating they come from a trusted source.

You can install [:simple-gnuprivacyguard: GPG](https://gnupg.org/) (used for signing) in Windows with [Scoop](https://scoop.sh/) with the following command:
```
scoop install gpg
```
Check out this [detailed guide on setting up verified commits](https://gist.github.com/Beneboe/3183a8a9eb53439dbee07c90b344c77e#file-how-to-setup-verified-commits-md).

### :octicons-git-branch-16: Conventional Commits

We recommend using [:simple-conventionalcommits: Conventional Commits](https://www.conventionalcommits.org/) in Atlas repositories for consistency and more descriptive commits. You can also take a look at [Angular's Conventional Commits](https://github.com/angular/angular/blob/68a6a07/CONTRIBUTING.md#commit) for more guidance.

Conventional Commits are a type of commit message format that helps to make the commit history more readable and easier to navigate. 

*Example*: [`feat: ✨ add fAllowFullControl`](https://github.com/Atlas-OS/Atlas/commit/72cdcc7b327df19fd07e9c6eb0a10812ac6936b0)

- [**Extension for Visual Studio Code**](https://github.com/vivaxy/vscode-conventional-commits)
- [**Emoji reference**](https://gitmoji.dev) (optional)
