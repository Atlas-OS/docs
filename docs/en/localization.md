---
description: The official guide to translating the AtlasOS documentation
icon: material/earth
---

!!! example "Localization (i18n) is in BETA"

    Any size project is difficult to localize. Community-made translations can add technical and maintenance debt, so we're debating whether to do this for the AtlasOS documentation.
    
    Please report any issues, suggestions, or comments. Please use our [Discord server](https://discord.atlasos.net) or [GitHub documentation repository](https://github.com/Atlas-OS/docs) to report issues.

!!! question "Where do I push my changes during beta?"

    When you're ready to share your translations with the world, please submit a pull request in [:simple-github: Atlas-OS/Docs](https://github.com/Atlas-OS/docs/pulls) to the existing `i18n` branch, which will then be merged to the domain you're currently on.

!!! tip "Are you stuck?"

    If you ever get stuck translating a specific section of the documentation. Don't be afraid to ask for assistance in our [Discord server](https://discord.atlasos.net) if you're trying to figure out the meaning of a specific section or word in our documentation.

AtlasOS strives to make itself as user-friendly and accessible as possible. This is something we try to reinforce through our playbook, forums, Discord server, and documentation. That is why we want to make it even easier for our community to interact with and contribute to Atlas by supporting community-driven localizations and translations of our official documentation.

This page will walk you through everything you need to know about translating our documentation, as well as how to properly localize our documentation.

However, the translation guide will assume that you already have a basic understanding of [:simple-git: Git](https://git-scm.com/) and [:simple-github: GitHub](https://github.com/Atlas-OS), as this is required to get the documentation up and running locally on your machine.

## Setting up the documentation locally

As MkDocs uses Python, you will need to have Python and pip installed, we recommend using [Scoop](https://scoop.sh) or [Chocolatey](https://chocolatey.org) to install these but you can also install via [Python's website](https://www.python.org).

Material for MkDocs has already made a page, which you can use for [Installation of Material for MkDocs](https://squidfunk.github.io/mkdocs-material/getting-started). Depending if you installed it locally or via a virtual envioronment, there is already a [guide on previewing](https://squidfunk.github.io/mkdocs-material/creating-your-site/#previewing-as-you-write)

## Adding a new language

You'll need to make some changes to the existing configuration files if you're translating for a language that hasn't yet been added to our documentation.

To create your language, go into the `mkdocs.yml` file and find the `i18n` section under "Plugins". Once you're there, go ahead and create your language following the format of the already exisiting locales there. However, make sure you've done the following things when setting the langauge up:

To create your language, navigate to the `i18n` section under "Plugins" in the `mkdocs.yml` file. Once there, proceed to create your language by following the format of the already existing locales. However, when configuring the language, make sure you've done the following:

* Make sure the `default` property is set to `false` — the default language should always be English.
* When adding the `locale` code, use either the [2-letter code](https://en.wikipedia.org/wiki/ISO_639-1) (e.g. en) or the 5-character code (e.g. en_US, eg_GB) that includes the country/region/territory.
* The `name` should always be the name of the language in which it is spoken. Don't call the language after its English equivalent.
* Always include the `site_name` property and localize "Atlas Documentation" into your language.

Once you've created your language, copy it to the same section but also inside `mkdocs.insiders.yml`, as this is the configuration used during website build in our production environment.

## Translating titles & descriptions

It is extremely simple to translate page titles and descriptions. To begin with descriptions, simply update the `description` property in the documentation piece you're translating and you're done!

When it comes to translating the title, however, things get a little more complicated. Find the `i18n` section under "Plugins" in the `mkdocs.yml` file to update titles to your local language. Once there, replicate the existing `nav_translations` examples in other languages but apply them to your language instead.

!!! warning "Don't change the original name"

    You do not want to change the part of the property that is already in English; that part indicates what the originally written page is called in the documentation. Changing the English name in the `nav_translations` property will prevent your localized title from appearing.

## Translating documentation

You can begin translating our documentation right away by creating a subfolder in the `docs` folder with your language's `locale` code. You can find the locale code in the `mkdocs.yml` file.

Copy the original files from the `en` folder into your own languages folder for the documentation you want to translate. After that, you're ready to start translating.

!!! warning "Don't modify the file name or structure"

    Always use the same folder structure with the same file names as in the `en` folder as in your language. If you do not use the same folder structure and file names, your translated documentation will fail to load and build.

## Authoring your changes

When you're ready to show off your translations to the world, submit a pull request to our [:simple-github: Atlas-OS/Docs](https://github.com/Atlas-OS/docs/pulls) repository with your files. In our [:material-handshake: Contribution Guidelines](./contributions.md), you can learn more about contributing and, in particular, contributing to our documentation.
