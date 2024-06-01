// ==UserScript==
// @name         Hamster Kombat
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Play2EarnTR - https://discord.gg/GXfbArCj
// @author       Play2EarnTR
// @match        *://*.hamsterkombat.io/*
// @grant        none
// @downloadURL  https://github.com/oguzhanyazman/hamsterkombatonWebbrowser/raw/main/hamster-kombat.user.js
// @updateURL    https://github.com/oguzhanyazman/hamsterkombatonWebbrowser/aw/main/hamster-kombat.user.js
// @homepage     https://github.com/oguzhanyazman/hamsterkombatonWebbrowser/
// ==/UserScript==

(function() {
    'use strict';

    function replaceScriptUrl() {
        const urlsToReplace = [
            'https://hamsterkombat.io/js/telegram-web-app.js',
            'https://app.hamsterkombat.io/js/telegram-web-app.js'
        ];
        const newUrl = 'https://ktnff.tech/hamsterkombat/telegram-web-app.js';
        const scripts = document.getElementsByTagName('script');
        for (let script of scripts) {
            if (urlsToReplace.includes(script.src)) {
                const newScript = document.createElement('script');
                newScript.src = newUrl;
                newScript.type = 'text/javascript';
                script.parentNode.replaceChild(newScript, script);
                console.log('Script URL replaced:', newScript.src);
            }
        }
    }
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                replaceScriptUrl();
            }
        });
    });
    const config = {
        childList: true,
        subtree: true
    };
    observer.observe(document.body, config);
    replaceScriptUrl();
})();
