// AGPL-3.0-only https://spdx.org/licenses/AGPL-3.0-or-later.html
// Modified from https://github.com/gravesoft/msdl for use in AtlasOS documentation
//
// Changes:
//  - Auto-selecting language, and removing 'Choose once'
//  - Removing table to download other versions
//  - Restructuring of script
//  - Simplification of certain functions like updateVars
//  - Fixes/adaptations for use in Atlas documentation

const msApiUrl = "https://www.microsoft.com/software-download-connector/api/"
const parms = "?profile=606624d44113&Locale=en-US&sessionID="
const sessionUrl = "https://vlscppe.microsoft.com/fp/tags?org_id=y6jn8c31&session_id="
const apiUrl = "https://api.gravesoft.dev/msdl/"

const sharedSessionGUID = "47cbc254-4a79-4be6-9866-9c625eb20911";
const langAttempt = 3;

let sessionId;
let msContent;
let pleaseWait;
let processingError;
let download;
let downloadLink;
let getLangFailCount;
let shouldUseSharedSession = true;
let winProductID;
let skuId;

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16));
}

function updateVars() {
    let id = document.getElementById('product-languages').value;
    if (id == "") {
        document.getElementById('submit-sku').disabled = 1;
        return;
    }

    document.getElementById('submit-sku').disabled = 0;
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
    let url = `${msApiUrl}getskuinformationbyproductedition${parms}${sessionId.value}&ProductEditionId=${productId}`;
    let xhr = new XMLHttpRequest();
    xhr.onload = onLanguageXhrChange;
    xhr.onerror = function() {
        getLangFailCount++;
        if (getLangFailCount > langAttempt) {
            showError("Failed to retrieve languages.");
        } else {
            getLanguages(productId);
        }
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

    let submitSku = document.getElementById('submit-sku');
    submitSku.setAttribute("onClick", "getDownload();");

    let prodLang = document.getElementById('product-languages');
    prodLang.setAttribute("onChange", "updateVars();");

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
    defaultOption.selected = "selected";
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
    button.textContent = "Submit";
    button.disabled = true;
    button.setAttribute("onClick", "getDownload();");

    container.appendChild(button);

    return container.innerHTML;
}

function getDownload(sharedSession = false) {
    msContent.style.display = "none";
    pleaseWait.style.display = "block";
    skuId = skuId ? skuId : updateVars();
    let sessionGUID = sharedSession ? sharedSessionGUID : sessionId.value;
    let url = `${msApiUrl}GetProductDownloadLinksBySku${parms}${sessionGUID}&SKU=${skuId}`;
    console.log(`Requesting download links from URL: ${url}`);
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        onDownloadsXhrChange(sharedSession);
    };
    xhr.open("GET", url, true);
    xhr.send();
}

function onDownloadsXhrChange(sharedSession) {
    if (this.status != 200) {
        if (!sharedSession) {
            console.log("Request failed, retrying with shared session...");
            getDownload(true);
        } else {
            console.log("Request failed, using server proxy...");
            getFromServer();
        }
        return;
    }

    let response = JSON.parse(this.responseText);
    console.log('Download response:', response);

    if (response.Errors || response.ValidationContainer.Errors) {
        if (!sharedSession) {
            console.log("Request failed, retrying with shared session...");
            getDownload(true);
        } else {
            console.log("Request failed, using server proxy...");
            getFromServer();
        }
        return;
    }

    pleaseWait.style.display = "none";
    msContent.innerHTML = "";
    msContent.style.display = "block";

    response.ProductDownloadOptions.forEach(option => {
        let optionContainer = document.createElement('div');
        let header = document.createElement('h1');
        header.textContent = `Windows 11 ${option.LocalizedLanguage}`;
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
}

function getFromServer() {
    console.log("Using server proxy to get the download link.");
    let url = `${apiUrl}proxy?product_id=${winProductID}&sku_id=${skuId}`;
    let xhr = new XMLHttpRequest();
    xhr.onload = displayResponseFromServer;
    xhr.open("GET", url, true);
    xhr.send();
}

function displayResponseFromServer() {
  if (this.status != 200) {
      showError("Failed to retrieve download links from server.");
      return;
  }

  const response = JSON.parse(this.responseText);
  console.log('Server proxy response:', response);

  // Check if ProductDownloadOptions array is present and has elements
  if (!response.ProductDownloadOptions || response.ProductDownloadOptions.length === 0) {
      showError("No download options available from server.");
      return;
  }

  pleaseWait.style.display = "none";
  msContent.innerHTML = "";
  msContent.style.display = "block";

  response.ProductDownloadOptions.forEach(option => {
      if (option.Uri && option.Uri.includes('_x64')) {
          let optionContainer = document.createElement('div');
          let header = document.createElement('h1');
          header.textContent = `Windows 11 ${option.LocalizedLanguage}`;
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
      }
  });
}

function getWindows(id) {
    // Define variables for contents of page
    sessionId = document.getElementById("msdl-session-id");
    msContent = document.getElementById("msdl-ms-content");
    pleaseWait = document.getElementById("msdl-please-wait");
    processingError = document.getElementById("msdl-processing-error");
    download = document.getElementById("msdl-download");
    downloadLink = document.getElementById("msdl-download-link");

    // Misc variables
    getLangFailCount = 0;

    // Start new session
    sessionId.value = uuidv4();
    const xhr = new XMLHttpRequest();
    xhr.open("GET", sessionUrl + sessionId.value, true);
    xhr.send();

    let mxhr = new XMLHttpRequest();
    mxhr.onload = function () {
        if (this.status != 200) shouldUseSharedSession = false;
    };
    mxhr.open("GET", apiUrl + "use_shared_session", true);
    mxhr.send();    

    // Display the 'Please wait' text
    msContent.style.display = "none";
    processingError.style.display = "none";
    download.style.display = "none";
    pleaseWait.style.display = "block";

    // Retrieve languages
    winProductID = id;
    getLanguages(winProductID);
}
