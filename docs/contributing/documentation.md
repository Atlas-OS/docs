---
description: How to contribute to the AtlasOS documentation
icon: material/book-edit
---

# :material-book-edit: Contributing to the Atlas documentation

This page will cover how to modify and locally view the Atlas documentation. This page will cover how to modify, test, and build Atlas. If you plan to contribute, we recommend reading the [Contribution Guidelines](contribution-guidelines.md) first!

--8<-- "contribution-guidelines.md:gitNotice"

We presume you've already cloned the [`Atlas-OS/docs`](https://github.com/Atlas-OS/docs) repository.

## :material-book-search: How the documentation is built

[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) is used to build the Atlas docs, powered by the following:

- YAML configuration
- HTML, JavaScript, and CSS overrides
- Extended [Markdown](https://www.markdowntutorial.com/) for the pages

!!! tip
    We recommend viewing [their reference documentation](https://squidfunk.github.io/mkdocs-material/reference/).

## :material-package-down: Prerequisites

As Material for MkDocs uses Python, you must install [Python](https://www.python.org/downloads/), including `pip`. Additionally, consider checking the VSCode extension recommendations.

## :material-eye: Viewing your changes live

The docs will refresh on any page change and reflect what you've just saved.

=== "Windows"

    1. Run `locally-host.cmd` to host the documentation preview
        - This also installs and updates dependencies
    1. Navigate to the URL it provides in the console

=== "Non-Windows"

    1. Run `pip install -r local-requirements.txt` to install all the dependencies inside of the repository
        - You might need to use a virtual environment like `pipenv` or distro-specific packages for dependencies
        - Consider checking the VSCode extension recommendations
    1. Run `mkdocs serve` to host the documentation preview
    1. Navigate to the URL it provides in the console
