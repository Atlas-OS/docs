# Contribution Guidelines

This page will tell you how to properly contribute to Atlas, all contributions are much appriciated!

Atlas uses Git to manage everything on [GitHub](https://github.com/Atlas-OS). To more easily interact with Git, you can use:

* An IDE like [Visual Studio Code](https://code.visualstudio.com/) or [VSCodium](https://vscodium.com)
* [GitHub Desktop](https://desktop.github.com/) (recommended)

Alternatively, you can use the [Git](https://git-scm.com/) command-line. Use whatever you find most familiar and easiest, you should research about Git first.

## :octicons-git-commit-24: How you can contribute

* :material-pen-plus: [**Atlas Playbook**](https://github.com/Atlas-OS/Atlas) - The source code for the file (`.apbx`) that is ran in AME Wizard ([GPLv3](https://github.com/Atlas-OS/Atlas/blob/main/LICENSE))
	* Refer to the AME Wizard [documentation](https://docs.ameliorated.io/developers.html) for help
* :material-language-rust: [**Atlas Utilities**](https://github.com/Atlas-OS/Atlas-Utilities) - General tools used in Atlas like `filepicker.exe`, made in Rust ([GPLv3](https://github.com/Atlas-OS/Atlas-Utilities/blob/main/LICENSE))
* :material-book-plus-multiple: [**Atlas Documentation**](https://github.com/Atlas-OS/docs) - The website that you are looking at right now ([CC-BY-SA-4.0](https://github.com/Atlas-OS/docs/blob/master/LICENSE))

These are the main three repositories to contribute to. There might also be other repositories that you can contribute to, see [here](https://github.com/Atlas-OS).

See [here](https://github.com/Atlas-OS/docs/blob/master/.github/CONTRIBUTING.md) as well for the contribution guide for the documentation.

## :material-chat-question: How it works

There is a `dev` branch and a `main` branch for development on each repository.

!!! warning
	Make **all of your changes** to the `dev` branch of the respective repositories! 

	Never commit or pull request directly to the `main` branches.

The reason why the `dev` branch exists is to ensure that the `main` branch only has approved and high quality changes. A pull request **every week** will be automatically created to merge the `dev` bracnh into the `main` branch, where the changes can be properly reviewed by **5 contributors** before the pull request is merged.

This is to make sure that all changes are properly reviewed and collectively agreed upon, meaning less bugs and overall better code quality. 

You will have to make your own fork of the respective Atlas repository, and then make a pull request to merge your modified fork's branch into the `dev` branch.

### :material-git: People with write access

!!! note
	This only applies to people with direct access to commit to the repositories, without approval.
	
	The list of people that have access is [here](https://github.com/orgs/Atlas-OS/people).

If there's any big changes, you should instead make a pull request for `dev` instead of directly commiting to it. Big changes could be mass formatting changes, feature changes or anything similar. 

This means less potential headache in the future if the change is disagreed upon, as you can avoid reverting all of the disliked changes for the automatic pull request every week. 

For manual/non-automated pull requests, you can make your own branch in the Atlas repository or make a fork, it is your choice.

## :material-format-letter-case: Formatting

On each commit, you should make sure that you have checked that:

* Your changes comply with the overall formatting of a repository
* There are the most minimal amount of mistakes, check grammar and anything else important
	* For any YAML changed, please verify that it is valid before commiting with [YAML Lint](https://www.yamllint.com/)
* People would generally agree with the change
	* If you don't know, ask people in the [Discord](https://discord.gg/atlasos) or [GitHub issues](https://github.com/Atlas-OS/Atlas/issues))

Making sure that your commits are already to a high standard means that development will be faster and more organised. However, keep in mind that it's okay to make mistakes sometimes, as people will give feedback/reviews in your pull requests, so don't worry about it too much.

### :octicons-verified-16: Commit Signature Verification
It is also highly recommended to setup [commit signature verification](https://docs.github.com/en/authentication/managing-commit-signature-verification), which means that your commits will be marked as 'Verified' so that other people will know that your commits come from a trusted source.

You can install [GPG](https://gnupg.org/) (used for signing) on Windows with [Scoop](https://scoop.sh/) with the following command:
```
scoop install gpg
```
For a more simple guide, click [here](https://gist.github.com/Beneboe/3183a8a9eb53439dbee07c90b344c77e#file-how-to-setup-verified-commits-md).

### :octicons-git-branch-16: Conventional Commits

Preferably use [Conventional Commits](https://www.conventionalcommits.org/) for Atlas repositories for consistency and making commits more descriptive.

*Example*: [`feat: ✨ add fAllowFullControl`](https://github.com/Atlas-OS/Atlas/commit/72cdcc7b327df19fd07e9c6eb0a10812ac6936b0)

- [**Extension for Visual Studio Code**](https://github.com/vivaxy/vscode-conventional-commits)
- [**Emoji reference**](https://gitmoji.dev) (optional)