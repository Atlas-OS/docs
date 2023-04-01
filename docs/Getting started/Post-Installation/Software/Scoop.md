Scoop is a Windows installer that works with the command line. It is like apt-get or Homebrew on Linux or macOS. It allows for installing software on your computer from the command line. Scoop is a project run by the community. Microsoft and AtlasOS do not officially support it, but we use it to make it easy for users to install the software they want.

## :material-download-outline: Installing Scoop

AtlasOS has a script that can be used to install Scoop.

Run the script ``Desktop/Atlas/1. Install Software/Manual/Install Scoop.ps1`` to install Scoop. This script will add Scoop to your PATH and install it.

You can also install Scoop manually by following the steps on the [Scoop website](https://scoop.sh/).

## :material-shape-plus-outline: Installing software with Scoop

To install software with Scoop, go to the same folder (``Desktop/Atlas/1. Install Software/Manual/``) and run the scripts that go with the software you want to install. Make sure that the name of the script includes the word "Scoop".

You can also use Scoop to install software by typing ``scoop install <package name>`` in the command line. On the [Scoop website](https://scoop.sh/#/apps), you can find the name of the package.

The origin folder has a script called "Install Software.ps1" that can do this for you automatically. You will also be able to use Scoop to install popular software with this script.