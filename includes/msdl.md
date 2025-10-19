<!--
    The ISO downloader JavaScript is rewritten from the MSDL website by Gravesoft on GitHub.
    Major credit to them and MSDL's various contributors! :)

    GNU Affero General Public License v3.0 is the license for the MSDL JavaScript included here on the
    Atlas docs, as per the original project: https://github.com/gravesoft/msdl/blob/main/LICENSE
-->

<script>
    var styleSheet = document.createElement("style")
    styleSheet.innerText = '.noJs { display: revert !important }'
    document.head.appendChild(styleSheet)
</script>

<center markdown class="noJs centerMsdl">
<div class="msdl-button-container">
    <button markdown class="msdl-button" style="margin-right: 2px" onclick="getWindows({{ msdl.win11.pid }});">Download Windows 11 {{ msdl.win11.version }}</button>
    <button markdown class="msdl-button" style="margin-left: 2px" onclick="getWindows({{ msdl.win10.pid }});">Download Windows 10 {{ msdl.win10.version }}</button>
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

 **Script Licensed under [AGPL-3.0](https://spdx.org/licenses/AGPL-3.0-or-later.html)**<br>:simple-github: **Credit to the** [Microsoft Software Download Listing](https://github.com/gravesoft/msdl) **project**
</center>
