Chocolatey is a Windows package manager. It is like apt-get or Homebrew on Linux or macOS. It enables you to install software on your computer from the command line. Chocolatey is a project run by the community. Microsoft and AtlasOS do not officially support it, but we use it to make it easy for users to install the software they want.

## :material-download-outline: Installing Chocolatey

AtlasOS has a script that can be used to install Chocolatey. Run the script ``Desktop/Atlas/1. Install Software/Manual/Install Chocolatey.ps1`` to install Chocolatey. This script will add Chocolatey to your PATH and install it.

You can also install Chocolatey by hand by following the steps on the [Chocolatey website](https://chocolatey.org/install).

## :material-shape-plus-outline: Installing software with Chocolatey

With Chocolatey, you can install software by going to the same folder (``Desktop/Atlas/1. Install Software/Manual``) and running the scripts that go with the software you want to install. Make sure the name of the script includes the word "Chocolatey."

With Chocolatey, you can also install software by typing ``choco install <package name>`` in the command line. On the [Chocolatey website](https://chocolatey.org/packages), you can find the name of the package.

The origin folder has a script called "Install Software.ps1" that can do this for you automatically. This script will also let you use Chocolatey to install popular software.