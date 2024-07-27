document.addEventListener("DOMContentLoaded", function () {
    var script = document.createElement("script");
    script.src = "https://widget.kapa.ai/kapa-widget.bundle.js";
    script.setAttribute("data-website-id", "95d8dc11-e509-42cb-a7ee-f7e06df52017");
    script.setAttribute("data-project-name", "Atlas");
    script.setAttribute("data-project-color", "#2894F3");
    script.setAttribute("data-project-logo", "https://avatars.githubusercontent.com/u/78708182?s=128");
    script.setAttribute("data-modal-disclaimer", "You can find further support on our [Discord server](https://discord.com/servers/atlas-795710270000332800) or [our GitHub Discussions](https://github.com/Atlas-OS/Atlas/discussions). Remember that not all answers are accurate, as results are AI-generated.")
    script.setAttribute("data-modal-example-questions", "Does Atlas support Windows Defender?,Who is Atlas for?,What does Atlas do?")
    script.setAttribute("data-modal-example-questions-col-span", "12")
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

function clickKapaAi() {
    const button = document.querySelector('#kapa-widget-container > button')
    if (button) button.click()
}
