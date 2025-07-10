@echo off
title Locally Hosting Atlas Documentation

where pip > nul 2>&1 || (
	echo It doesn't seem like pip is installed, as it wasn't found in PATH.
	echo]
	echo Ensure Python from its website is installed: https://www.python.org/
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
pip install -r local-requirements.txt
mkdocs serve
pause