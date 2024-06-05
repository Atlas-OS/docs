document.addEventListener("DOMContentLoaded", function () {
    var script = document.createElement("script");
    script.src = "https://widget.kapa.ai/kapa-widget.bundle.js";
    script.setAttribute("data-website-id", "95d8dc11-e509-42cb-a7ee-f7e06df52017");
    script.setAttribute("data-project-name", "Atlas");
    script.setAttribute("data-project-color", "#2894F3");
    script.setAttribute("data-project-logo", "https://avatars.githubusercontent.com/u/78708182?s=128");
    script.async = true;

    script.onload = () => {
        const kapaLoadedCheck = setInterval(() => {
            const kapaStyle = document.head.querySelector('style[data-emotion="mantine"]');
            if (kapaStyle && kapaStyle.sheet) {
                clearInterval(kapaLoadedCheck);
                const cssRules = Array.from(kapaStyle.sheet.cssRules).map(rule => rule.cssText).join('\n');
                const node = document.body.appendChild(kapaStyle);
                node.appendChild(document.createTextNode(cssRules));
            }
        }, 150);
    };

    document.head.appendChild(script);
});