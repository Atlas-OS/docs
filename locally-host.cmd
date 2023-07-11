@echo off
title Locally Hosting Atlas Documentation

where mkdocs > nul 2>&1 || (
	echo It doesn't seem like MkDocs Material is installed, as it wasn't found in PATH.
	echo]
	echo To install it: https://squidfunk.github.io/mkdocs-material/getting-started/#latest
	echo]
	echo Press any key to exit...
	pause > nul
	exit /b 1
)

echo Please keep in mind that certain features of the docs may not be avaliable locally.
echo This is because you most likely don't have MkDocs Material Insider installed, which is paid.
echo If there's any errors, make sure MkDocs Material is installed correctly, see the MkDocs Material documentation.
echo To close the server, exit this window.

echo]
mkdocs serve