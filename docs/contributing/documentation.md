---
description: How to contribute to the AtlasOS documentation
icon: material/book-edit
---

# :material-book-edit: Contributing to the Atlas documentation

This page will cover how to modify and locally view the Atlas documentation. We highly recommend reading through the [Contribution Guidelines](contribution-guidelines.md) first!

We presume you've already cloned the [`Atlas-OS/docs`](https://github.com/Atlas-OS/docs) repository.

## :material-book-search: How the documentation is built

[MkDocs Material](https://squidfunk.github.io/mkdocs-material/) is used to build the Atlas docs, which uses the following:

- YAML configuration
- HTML, JavaScript, and CSS overrides
- Extended [Markdown](https://www.markdowntutorial.com/) for the pages

We recommend viewing [their reference documentation](https://squidfunk.github.io/mkdocs-material/reference/).

## :material-package-down: Installing dependencies

1. As MkDocs Material uses Python, you must install [Python](https://www.python.org/downloads/) alongside `pip`
1. Run `pip install -r requirements.txt` to install all the dependencies inside of the repository
    - Consider checking the VSCode extension recommendations

## :material-eye: Viewing your changes live

The docs will refresh on any page change and reflect what you've just saved.

=== "Windows"

    1. Run `locally-host.cmd` to host the documentation preview
    1. Navigate to the URL it provides in the console

=== "Non-Windows"

    1. Run `mkdocs serve` to host the documentation preview
    1. Navigate to the URL it provides in the console
