---
description: The recommended way to install software in AtlasOS
icon: material/download
---

# Installing Software

## :simple-chocolatey: What is Chocolatey?

Atlas makes it easy to install software. Chocolatey is a Windows package manager. It is like apt-get and Homebrew on Linux and macOS respectively. It enables you to install software on your computer from the command line. Chocolatey is a project run by the community. Microsoft and Atlas do not officially support it, but we use it to make it easy for users to install the software they want.

## :material-shape-plus-outline: Installing software with Chocolatey

You can install software by going to the ``Desktop/Atlas/1. Install Software`` folder and running the ``Install Software.ps1`` script. This script will let you use Chocolatey to install popular software, follow the options to install the applications successfully.

Furthermore, you can install software by typing ``choco install -y --ignore-checksums <package name>`` in the command line. You can find the name of the package on the [Chocolatey website](https://chocolatey.org/packages).
