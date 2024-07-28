<!--
    The ISO downloader JavaScript is rewritten from the MSDL website by Gravesoft on GitHub.
    Major credit to them and MSDL's various contributors! :)

    GNU Affero General Public License v3.0 is the license for the MSDL JavaScript included here on the
    Atlas docs, as per the original project: https://github.com/gravesoft/msdl/blob/main/LICENSE
-->

<center class="noJs centerMsdl">
<div class="msdl-button-container">
    <button markdown class="msdl-button" style="margin-right: 2px" onclick="
getWindows(
--8<-- "vars.md:win11productId"
);
">
Download Windows 11
--8<-- "vars.md:win11"
    </button>
    <button class="msdl-button" style="margin-left: 2px" onclick="
getWindows(
--8<-- "vars.md:win10productId"
);
">
Download Windows 10
--8<-- "vars.md:win10"
</button>
</div>

<div id="msdl-ms-content"></div>

<div id="msdl-please-wait">
    <p>Please wait...</p>
</div>

<div id="msdl-processing-error">
    <p>An error has occurred while processing your request. Try refreshing the page or using an alternative method.</p>
    <p id="msdl-error-code">Error: Unknown</p>
</div>

<div id="msdl-download">
    <p>A download should soon be started, if not, <a id="msdl-download-link" href="about:blank">click here download the ISO</a>.</p>
</div>

<input id="msdl-session-id" type="hidden">

:simple-github: **Credit to the** [Microsoft Software Download Listing](https://github.com/gravesoft/msdl) **project**
</center>
