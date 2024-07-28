document.addEventListener("DOMContentLoaded", function () {
    function removeCSSRule(selector) {
        for (let i = 0; i < document.styleSheets.length; i++) {
            let stylesheet = document.styleSheets[i];
            try {
                for (let j = 0; j < stylesheet.cssRules.length; j++) {
                    let rule = stylesheet.cssRules[j];
                    if (rule.selectorText === selector) {
                        stylesheet.deleteRule(j);
                        return;
                    }
                }
            } catch {
                // do nothing
            }
        }
    }

    removeCSSRule('.noJs');
});