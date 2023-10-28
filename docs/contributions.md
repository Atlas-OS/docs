---
description: The official contribution guidelines for the AtlasOS playbook
icon: material/handshake
---

# Contribution Guidelines

This page will inform you how to properly contribute to Atlas. All contributions are much appreciated!

Atlas uses Git to manage everything on the platform [GitHub](https://github.com/Atlas-OS). To more easily interact with Git, you can use:

* An IDE like [Visual Studio Code](https://code.visualstudio.com/) or [VSCodium](https://vscodium.com)
* [GitHub Desktop](https://desktop.github.com/) (recommended)

Alternatively, you can use the [Git](https://git-scm.com/) command-line. Use whichever Git interface you find most familiar and easiest. Before contributing, you should [research](https://docs.github.com/en/get-started/quickstart) about Git first.

## :octicons-git-commit-24: How you can contribute

* :material-pen-plus: [**Atlas Playbook**](https://github.com/Atlas-OS/Atlas) - The Atlas playbook (`.apbx`) that is used in AME Wizard ([GPLv3](https://github.com/Atlas-OS/Atlas/blob/main/LICENSE)) ([CoC](https://github.com/Atlas-OS/Atlas/blob/main/.github/CODE_OF_CONDUCT.md))
	* Refer to the AME Wizard [documentation](https://docs.ameliorated.io/developers.html) for help
	* You can also contribute to the `README.md` and its translations, which is the only exclusion for committing to the `main` branch
* :material-language-rust: [**Atlas Utilities**](https://github.com/Atlas-OS/Atlas-Utilities) - General tools used in Atlas like `filepicker.exe`, made in Rust ([GPLv3](https://github.com/Atlas-OS/Atlas-Utilities/blob/main/LICENSE))
* :material-book-plus-multiple: [**Atlas Documentation**](https://github.com/Atlas-OS/docs) - The website that you are looking at ([CC-BY-SA-4.0](https://github.com/Atlas-OS/docs/blob/master/LICENSE)) ([CoC](https://github.com/Atlas-OS/docs/blob/master/.github/CODE_OF_CONDUCT.md))
	* Read [this](https://github.com/Atlas-OS/docs/blob/master/.github/CONTRIBUTING.md) documentation-specific contribution guide as well as these contribution guidelines to setup a development environment
	* Reading the [GitHub documentation contribution guide](https://github.com/github/docs/blob/main/CONTRIBUTING.md) might also be useful

These are the main three repositories to contribute to. There might also be other repositories that you can contribute to, see [here](https://github.com/Atlas-OS).

If a repository has a specified template for pull requests or issues, please use them. Otherwise, your pull request could be closed.

## :material-chat-question: How it works

There is a `dev` branch and a `main` or `master` branch for development on each repository.

!!! warning
	Make **all of your changes** to the `dev` branch of the respective repositories! 

	Never commit or pull request directly to the `main` branches, with the **only exception** being committing to the `main` branch on the main repository for translations.

The reason why the `dev` branch exists is to ensure that the `main` branch only has approved and high quality changes. 

A pull request **every week** will be automatically created to merge the `dev` branch into the `main` branch, where the changes can be properly reviewed by **5 contributors** before the pull request is merged. The only exclusion to having less than 5 reviews is if there's not enough people reviewing, e.g. 4 reviews for documentation.

This ensures that all changes are thoroughly reviewed and agreed upon collectively, resulting in fewer bugs, improved code quality, and a more organized development process.

You will have to make your own fork of the respective Atlas repository, and then make a pull request to merge your modified fork's branch into the `dev` branch.

### :material-git: People with write access

!!! note
	This only applies to people with direct access to commit to the repositories, without the need to do a pull request.
	
	The list of people that have access is [here](https://github.com/orgs/Atlas-OS/people).

If there's any big changes, you should instead make a pull request for `dev` instead of directly committing to it. Some examples of big changes could be mass formatting changes, feature changes, or anything similar. 

This means less potential headache in the future if the change is disagreed upon, as you can avoid reverting all of the disliked changes for the automatic pull request every week. 

If you want to, you can also manually trigger the automatic pull request to merge `dev` into `main` early, but the 5 reviews will still be in effect. As a note, if you need to urgently fix something, you can use the `bypass` label to bypass your pull request being automatically closed by the pull request filter.

For regular pull requests, you can make your own branch in the Atlas repository or make a fork, it is your choice.

## :material-format-letter-case: Formatting

On each commit, you should make sure that you have checked that:

* Your changes comply with the overall formatting of a repository
* There are the most minimal amount of mistakes, check grammar and anything else important
	* For any YAML changed, please verify that it is valid before committing with [YAML Lint](https://www.yamllint.com/)
* People would generally agree with the change
	* If you don't know, ask people in the [Discord](https://discord.gg/atlasos) or [GitHub issues](https://github.com/Atlas-OS/Atlas/issues)

Making sure that your commits are already to a high standard means that development will be faster and more organised. However, keep in mind that it's okay to make mistakes sometimes, as people will give feedback/reviews in your pull requests, so don't worry about it too much.

### :octicons-verified-16: Commit Signature Verification
It is also highly recommended to setup [commit signature verification](https://docs.github.com/en/authentication/managing-commit-signature-verification), which means that your commits will be marked as 'Verified' so that other people will know that your commits come from a trusted source.

You can install [GPG](https://gnupg.org/) (used for signing) in Windows with [Scoop](https://scoop.sh/) with the following command:
```
scoop install gpg
```
For a more simple guide, click [here](https://gist.github.com/Beneboe/3183a8a9eb53439dbee07c90b344c77e#file-how-to-setup-verified-commits-md).

### :octicons-git-branch-16: Conventional Commits

Preferably use [Conventional Commits](https://www.conventionalcommits.org/) for Atlas repositories for consistency and making commits more descriptive. You can also take a peak at [Angular's Conventional Commits](https://github.com/angular/angular/blob/68a6a07/CONTRIBUTING.md#commit) for more help.

*Example*: [`feat: ✨ add fAllowFullControl`](https://github.com/Atlas-OS/Atlas/commit/72cdcc7b327df19fd07e9c6eb0a10812ac6936b0)

- [**Extension for Visual Studio Code**](https://github.com/vivaxy/vscode-conventional-commits)
- [**Emoji reference**](https://gitmoji.dev) (optional)
