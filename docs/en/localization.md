---
description: The official guide to translating the AtlasOS documentation
icon: material/earth
---

!!! example "Localization (i18n) is in BETA"

    Any size project is difficult to localize. Community-made translations can add technical and maintenance debt, so we're debating whether to do this for the AtlasOS documentation.
    
    Please report any issues, suggestions, or comments. Please use our [Discord server](https://discord.atlasos.net) or [GitHub documentation repository](https://github.com/Atlas-OS/docs) to report issues.

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
    * You can find a list of all supported languages and their codes [here](https://squidfunk.github.io/mkdocs-material/setup/changing-the-language/#site-language).
* The `name` should always be the name of the language in which it is spoken. Don't call the language after its English equivalent.
* Always include the `site_name` property and localize "Atlas Documentation" into your language.

Once you've created your language, copy it to the same section but also inside `mkdocs.insiders.yml`, as this is the configuration used during website build in our production environment.

!!! warning "Don't delete existing languages"

    Languages that already exist in the configuration files should **not** be replaced. You only need to add a new language/local for the language you're attempting to translate, and you'll be good to go.

To ensure that you have correctly configured your language within the `i18n` "Plugin" section, your language configuration should look like this:

``` yaml
  - i18n:
      languages:
        - locale: sv # (1)!
          name: Svenska # (2)!
          build: true # (3)!
          site_name: Atlas Documentation # (4)!
```

1. Check that this value is set correctly for your language. Set the code accordingly if your language varies by country/region/territory.
  <br><br>
  You can find a list of all supported languages and their codes [here](https://squidfunk.github.io/mkdocs-material/setup/changing-the-language/#site-language).
  <br><br>
  **Source**: [https://ultrabug.github.io/mkdocs-static-i18n/setup/setting-up-languages/](https://ultrabug.github.io/mkdocs-static-i18n/setup/setting-up-languages/)
2. The `name` should always be the name of the language in which it is spoken.
  <br><br>
  **Source**: [https://ultrabug.github.io/mkdocs-static-i18n/setup/setting-up-languages/](https://ultrabug.github.io/mkdocs-static-i18n/setup/setting-up-languages/)
3. Make sure this is always set to `true`.
4. Always include the `site_name` property and localize "Atlas Documentation" into your language. 

## Translating titles & descriptions

It is extremely simple to translate page titles and descriptions. To begin with descriptions, simply update the `description` property in the documentation piece you're translating and you're done!

When it comes to translating the title, however, things get a little more complicated. Find the `i18n` section under "Plugins" in the `mkdocs.yml` file to update titles to your local language. Once there, replicate the existing `nav_translations` examples in other languages but apply them to your language instead.

All of the original (english) titles that can be translated can be found in the "nav" section of the `mkdocs.yml` file. You can view the "nav" section directly in the `mkdocs.yml` file [here](https://github.com/Atlas-OS/docs/blob/i18n/mkdocs.yml#L140-L144).

If you're not sure how to do your nav_translations to properly translate your page titles, check out the example below: 

```yaml
  - i18n:
      languages:
        - locale: sv
          name: Svenska
          build: true
          nav_translations: # (1)!
            Home: Hem # (2)!
```

1. All of the original (english) titles that can be translated can be found in the "nav" section of the `mkdocs.yml` file.
  <br><br>
  **View the file:** [https://github.com/Atlas-OS/docs/blob/i18n/mkdocs.yml#L140-L144](https://github.com/Atlas-OS/docs/blob/i18n/mkdocs.yml#L140-L144)
2. In the original language (English), "Home" is the navigation name, while "Hem" is the translated name.
  <br><br>
  **Source:** [https://ultrabug.github.io/mkdocs-static-i18n/setup/localizing-navigation/](https://ultrabug.github.io/mkdocs-static-i18n/setup/localizing-navigation/)

!!! warning "Don't change the original name"

    You do not want to change the part of the property that is already in English; that part indicates what the originally written page is called in the documentation. Changing the English name in the `nav_translations` property will prevent your localized title from appearing.

## Translating documentation

!!! tip "Are you stuck?"

    If you ever get stuck translating a specific section of the documentation. Don't be afraid to ask for assistance in our [Discord server](https://discord.atlasos.net) if you're trying to figure out the meaning of a specific section or word in our documentation.

You can begin translating our documentation right away by creating a subfolder in the `docs` folder with your language's `locale` code. You can find the locale code in the `mkdocs.yml` file.

Copy the original files from the `en` folder into your own languages folder for the documentation you want to translate. After that, you're ready to start translating.

!!! warning "Don't modify the file name or structure"

    Always use the same folder structure with the same file names as in the `en` folder as in your language. If you do not use the same folder structure and file names, your translated documentation will fail to load and build.

If you're ever unsure about what to translate and what not to translate, here's a quick list of tips and tricks to help you decide:

* Filename references (for example, in the Atlas folder) should always be in English (e.g., "Enable Workstation.cmd").
* Brand and product names (e.g., "Playbook", "AME Wizard", etc.) should not be translated. 
* Prioritize sounding natural in the language you're translating. Don't force a translation if it would be linguistically incorrect in your native language.
* It is perfectly acceptable to use English words where a proper translation does not exist. (e.g., "open-source")

## Translating the localization warning

It is quite simple to translate the warning that appears at the very top of the documentation when you visit any page that is not in English.

This warning bar can be found in the `overrides` directory within the `main.html` file. The warning bar can be found in its original language, English, by looking for the `{% elif config.theme.language != 'en' %}` statement inside the file.

To begin translating the warning, checkout the example below. Check the annotations provided in the example to better understand how to translate the localization.

```html
    {% if config.theme.language == 'sv' %}
            <span class="twemoji" style="color: #fbbf24;">{% include ".icons/material/alert.svg" %}</span><b> Engelska är det ursprungliga dokumentationsspråket.</b> Vi kan inte garantera att informationen är konsekvent mellan olika språk.
        <!-- Your locale can be pasted below, starting from here -->
        {% elif config.theme.language == 'vi' %} <!-- (1)! -->
            <span class="twemoji" style="color: #fbbf24;">{% include ".icons/material/alert.svg" %}</span><b> Tiếng Anh là ngôn ngữ chính của tài liệu này.</b> Chúng tôi không thể đảm bảo tính đồng nhất của thông tin giữa các ngôn ngữ.
        <!-- Your locale can NOT go below this line -->
        {% elif config.theme.language != 'en' %}
            <span class="twemoji" style="color: #fbbf24;">{% include ".icons/material/alert.svg" %}</span><b> English is the original documentation language.</b> We can't guarantee information consistency across languages.
        {% else %}
            <span class="twemoji" style="color: #38bdf8;">{% include ".icons/material/earth.svg" %}</span><b> Want to translate our documentation?</b> <a href="/localization">Read our translation guide</a>.
    {% endif %}
```

1. The language code in the `config.theme.language` statement should match the locale code inside of `mkdocs.yml` for your language.

!!! warning "Don't delete existing languages"
  
    Languages that already exist in the overrides `main.html` file should **not** be replaced. You only need to add the language that you're attempting to translate, and you'll be good to go.

## Authoring your changes

!!! question "Where do I push my changes during BETA?"

    When you're ready to share your translations with the world, please submit a pull request in [:simple-github: Atlas-OS/Docs](https://github.com/Atlas-OS/docs/pulls) to the existing `i18n` branch, which will then be merged to the domain you're currently on.

When you're ready to show off your translations to the world, submit a pull request to our [:simple-github: Atlas-OS/Docs](https://github.com/Atlas-OS/docs/pulls) repository with your files. In our [:material-handshake: Contribution Guidelines](./contributions.md), you can learn more about contributing and, in particular, contributing to our documentation.

!!! warning "Remember to copy to mkdocs.insiders.yml"

    If you've made any changes to the "i18n" plugin section in `mkdocs.yml`, make sure you've also copied your updated changes into the `mkdocs.insiders.yml` file. Otherwise, your changes will not be included in our production builds.
    
    Remember not to replace or overwrite existing languages in the configuration files. Unless they are changes specific to that language.
