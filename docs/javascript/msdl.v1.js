// AGPL-3.0-only https://spdx.org/licenses/AGPL-3.0-or-later.html
// Modified from https://github.com/gravesoft/msdl for use in AtlasOS documentation
//
// Changes:
//  - Auto-selecting language, and removing 'Choose once'
//  - Removing table to download other versions
//  - Restructuring of script
//  - Simplification of certain functions like updateVars
//  - Fixes/adaptations for use in Atlas documentation

const apiUrl = "https://api.gravesoft.dev/msdl/";

let sessionId;
let msContent;
let pleaseWait;
let processingError;
let download;
let downloadLink;
let winProductID;
let skuId;

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4))).toString(16)
    );
}

function updateVars() {
    // With auto-selection, an option is always selected.
    let id = document.getElementById('product-languages').value;
    document.getElementById('submit-sku').disabled = false;
    skuId = JSON.parse(id)['id'];
    console.log(`Updated skuId: ${skuId}`);
    return skuId;
}

function showError(error) {
    processingError.style.display = "block";
    pleaseWait.style.display = "none";
    msContent.style.display = "none";
    processingError.innerHTML = 'Error: ' + error;
    console.error('Error: ' + error);
}

function getFileNameFromLink(link) {
    let raw_link = link.split('?')[0];
    return raw_link.split('/').pop();
}

function getLanguages(productId) {
    let url = `${apiUrl}skuinfo?product_id=${productId}`;
    let xhr = new XMLHttpRequest();
    xhr.onload = onLanguageXhrChange;
    xhr.onerror = function() {
        showError("Failed to retrieve languages.");
    };
    xhr.open("GET", url, true);
    xhr.send();
}

function onLanguageXhrChange() {
    if (this.status != 200) {
        showError("Failed to retrieve languages.");
        return;
    }
    pleaseWait.style.display = "none";
    msContent.style.display = "block";

    let langHtml = langJsonStrToHTML(this.responseText);
    msContent.innerHTML = langHtml;

    let prodLang = document.getElementById('product-languages');
    prodLang.addEventListener("change", updateVars);

    updateVars();
}

function langJsonStrToHTML(jsonStr) {
    let json = JSON.parse(jsonStr);
    let container = document.createElement('div');

    let header = document.createElement('h2');
    header.textContent = "Select the product language";
    container.appendChild(header);

    let info = document.createElement('p');
    info.innerHTML = "You'll need to choose the same language when you install Windows. To see what language you're currently using, go to <strong>Time and language</strong> in PC settings or <strong>Region</strong> in Control Panel.";
    container.appendChild(info);

    let select = document.createElement('select');
    select.id = "product-languages";

    let defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.selected = true;
    defaultOption.textContent = "Choose one";
    select.appendChild(defaultOption);

    json.Skus.forEach(sku => {
        let option = document.createElement('option');
        option.value = JSON.stringify({ id: sku.Id });
        option.textContent = sku.LocalizedLanguage;
        select.appendChild(option);
    });

    container.appendChild(select);

    let button = document.createElement('button');
    button.id = "submit-sku";
    button.textContent = "Download";
    button.disabled = true;
    button.setAttribute("onClick", "getDownload();");
    button.classList = "msdl-button";
    container.appendChild(button);

    return container.innerHTML;
}

function getDownload() {
    msContent.style.display = "none";
    pleaseWait.style.display = "block";
    skuId = skuId ? skuId : updateVars();
    let url = `${apiUrl}proxy?product_id=${winProductID}&sku_id=${skuId}`;
    console.log(`Requesting download links from URL: ${url}`);
    let xhr = new XMLHttpRequest();
    xhr.onload = onDownloadsXhrChange;
    xhr.open("GET", url, true);
    xhr.send();
}

function onDownloadsXhrChange() {
    if (this.status != 200) {
        showError("Failed to retrieve download links.");
        return;
    }
    let response = JSON.parse(this.responseText);
    console.log('Download response:', response);

    pleaseWait.style.display = "none";
    msContent.innerHTML = "";
    msContent.style.display = "block";

    if (response.ProductDownloadOptions && response.ProductDownloadOptions.length > 0) {
        let header = document.createElement('h2');
        header.textContent = `${response.ProductDownloadOptions[0].ProductDisplayName} ${response.ProductDownloadOptions[0].LocalizedLanguage}`;
        msContent.appendChild(header);

        response.ProductDownloadOptions.forEach(option => {
            let optionContainer = document.createElement('div');
            let downloadButton = document.createElement('a');
            downloadButton.href = option.Uri;
            downloadButton.textContent = getFileNameFromLink(option.Uri);
            downloadButton.target = "_blank";
            optionContainer.appendChild(downloadButton);
            msContent.appendChild(optionContainer);

            // Trigger automatic download
            const link = document.createElement('a');
            link.href = option.Uri;
            link.download = getFileNameFromLink(option.Uri);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    } else {
        msContent.innerHTML = "<p>No download options available.</p>";
    }
}

function getWindows(id) {
    // Define variables for contents of page
    sessionId = document.getElementById("msdl-session-id");
    msContent = document.getElementById("msdl-ms-content");
    pleaseWait = document.getElementById("msdl-please-wait");
    processingError = document.getElementById("msdl-processing-error");
    download = document.getElementById("msdl-download");
    downloadLink = document.getElementById("msdl-download-link");

    skuId = null;
    sessionId.value = uuidv4();
    msContent.style.display = "none";
    processingError.style.display = "none";
    download.style.display = "none";
    pleaseWait.style.display = "block";

    // Retrieve languages
    winProductID = id;
    getLanguages(winProductID);
}
