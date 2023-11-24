// AGPL-3.0-only https://spdx.org/licenses/AGPL-3.0-or-later.html
// Modified from https://github.com/massgravel/msdl for use in AtlasOS documentation
//
// Changes:
//  - Auto-selecting language, and removing 'Choose once'
//  - Removing table to download other versions
//  - Restructuring of script
//  - Simplification of certain functions like updateVars
//  - Fixes/adaptations for use in Atlas documentation

const langsUrl =
    "https://www.microsoft.com/en-us/api/controls/contentinclude/html?pageId=cd06bda8-ff9c-4a6e-912a-b92a21f42526&host=www.microsoft.com&segments=software-download%2cwindows11&query=&action=getskuinformationbyproductedition&sdVersion=2";
const downUrl =
    "https://www.microsoft.com/en-us/api/controls/contentinclude/html?pageId=cfa9e580-a81e-4a4b-a846-7b21bf4e2e5b&host=www.microsoft.com&segments=software-download%2Cwindows11&query=&action=GetProductDownloadLinksBySku&sdVersion=2";
const sessionUrl = "https://vlscppe.microsoft.com/fp/tags?org_id=y6jn8c31&session_id=";
const apiUrl = "https://massgrave.dev/api/msdl/";
const sharedSessionGUID = "c2452a22-b85c-4f2b-a20c-7cb8c4dc95ac";
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

function showError(error) {
    processingError.style.display = "block";
    pleaseWait.style.display = "none";
    msContent.style.display = "none";

    if (error) {
        console.error("ISO Downloader: " + error);
        processingErrorText.style.display = "block";
        processingErrorText.innerHTML = 'Error: ' + error
    } else {
        processingErrorText.style.display = "none";
    }
}

async function getDownloadLink(sharedSession, useProxy = false) {
    let url;
    if (useProxy) {
        url = `${apiUrl}proxy?product_id=${winProductID}&sku_id=${skuId}`;
    } else {
        url = `${downUrl}&skuId=${skuId}&sessionId=${sharedSession ? sharedSessionGUID : sessionId.value}`
    }

    const response = await fetch(url);
    const data = await response.text();
    const parser = new DOMParser();
    const downloadElements = parser.parseFromString(data, "text/html").getElementsByTagName("a");

    for (let i = 0; i < downloadElements.length; i++) {
        const href = downloadElements[i].getAttribute('href');
        if (href && href.includes('_x64')) return href;
    }

    throw new Error
}

async function getDownload() {
    msContent.style.display = "none";
    pleaseWait.style.display = "block";
    let isoLink; let sharedSession = false;

    async function useProxy() {
        sharedSession = true;
        try {
            console.warn("ISO Downloader: Getting ISO from Microsoft failed, attempting to use the proxy...");
            isoLink = await getDownloadLink(false, true);
        } catch (e) {
            // Everything failed, show error
            console.error("ISO Downloader: Retrieving the ISO from both Microsoft and the proxy failed, showing error to the user...");
            showError("COMPLETE_FAILURE");
        }
    }

    try {
        console.info("ISO Downloader: Getting download from Microsoft without shared session...");
        isoLink = await getDownloadLink(false);
    } catch (e) {
        // Shared session isn't used for users that will invalidate it
        if (!shouldUseSharedSession) await useProxy();

        // Microsoft without shared session failed, attempting with shared session
        sharedSession = true;
        try {
            console.warn("ISO Downloader: Getting ISO from Microsoft without shared session failed, attempting using shared session...");
            isoLink = await getDownloadLink(true);
        } catch (e) {
            // Microsoft with and without shared session failed, try proxy
            await useProxy();
        }
    }

    if (!sharedSession) {
        console.info("ISO Downloader: Validating shared sessions...");
        fetch(sessionUrl + sharedSessionGUID);
        fetch(sessionUrl + "de40cb69-50a5-415e-a0e8-3cf1eed1b7cd");
        fetch(apiUrl + 'add_session?session_id=' + sessionId.value)
    }

    if (!isoLink) {
        showError("ISO_LINK_NOT_DEFINED");
    } else if (isoLink.startsWith("https://software.download.prss.microsoft.com")) {
        console.info("ISO Downloader: Succeeded, prompting to download ISO.")
        pleaseWait.style.display = "none";
        downloadLink.setAttribute("href", isoLink);
        download.style.display = "block";
        window.location = isoLink;
    } else {
        showError("ISO_LINK_NOT_MICROSOFT");
    }
}

function updateVars() {
    skuId = JSON.parse(document.getElementById("product-languages").value)["id"];
}

function onLanguageXhrChange() {
    msContent.innerHTML = this.responseText;
    if (document.getElementById("errorModalMessage")) getLangError(true);
    console.info("ISO Downloader: Successfully got languages...")

    pleaseWait.style.display = "none";
    msContent.style.display = "block";

    let submitSku = document.getElementById("submit-sku");
    submitSku.setAttribute("onClick", "getDownload();");
    submitSku.setAttribute("class", "md-button");

    let prodLang = document.getElementById("product-languages");
    prodLang.setAttribute("onChange", "updateVars();");

    if (prodLang) {
        let options = prodLang.options;
        let emptyRemoved;
        let englishSet;

        for (let i = options.length - 1; i >= 0; i--) {
            let option = options[i];
            let optionValue = option.value;

            if (optionValue === "") {
                prodLang.removeChild(option);
                emptyRemoved = true;
            } else if (optionValue.includes('language":"English International"}')) {
                option.selected = true;
                englishSet = true;
            }

            if (englishSet && emptyRemoved) {
                break;
            }
        }
    }

    updateVars();
}

function getLangError(msFailure) {
    setTimeout(() => {
        getLangFailCount++;
        if (getLangFailCount > langAttempt) {
            if (msFailure) {
                showError("MS_FAILED_TO_GET_LANGS");
            } else {
                showError("HTTP_FAILED_TO_GET_LANGS");
            }
        } else {
            console.warn(`ISO Downloader: Failed to get langauges ${getLangFailCount} times, and Microsoft's response failing is ${msFailure}. Max tries is ${langAttempt}.`)
            getLanguages(true);
        }
    }, 1000);
}

function getLanguages(sharedSession = false) {
    let xhr = new XMLHttpRequest();
    xhr.onload = onLanguageXhrChange;
    xhr.onerror = function() {
        getLangError(false);
    };    
    xhr.open("GET", `${langsUrl}&productEditionId=${winProductID}&sessionId=${sharedSession ? sharedSessionGUID : sessionId.value}`, true);
    xhr.send();
}

function getWindows(id) {
    // Define variables for contents of page
    sessionId = document.getElementById("msdl-session-id");
    msContent = document.getElementById("msdl-ms-content");
    pleaseWait = document.getElementById("msdl-please-wait");
    processingError = document.getElementById("msdl-processing-error");
    processingErrorText = document.getElementById("msdl-error-code");
    download = document.getElementById("msdl-download");
    downloadLink = document.getElementById("msdl-download-link");

    // Misc variables
    getLangFailCount = 0;

    // Start new session
    sessionId.value = uuidv4();
    const xhr = new XMLHttpRequest();
    xhr.open("GET", sessionUrl + sessionId.value, true);
    xhr.send();

    // Check if user should use shared sesion
    // This should ensure that the user doesn't invalidate the shared session
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
    getLanguages();
}
