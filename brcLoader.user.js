// ==UserScript==
// @name Better Remote Control (BC) Loader
// @namespace BRC-Better-Remote-Control-Bondage-Club-Loader
// @version 0.0.1
// @description Easy access to toy control
// @author itsFro
// @match https://bondageprojects.elementfx.com/*
// @match https://www.bondageprojects.elementfx.com/*
// @match https://bondage-europe.com/*
// @match https://www.bondage-europe.com/*
// @match http://localhost:*/*
// @homepage https://itsfro.github.io/BRC/
// @run-at document-end
// @grant none
// ==/UserScript==

// eslint-disable-next-line no-restricted-globals
setTimeout(
	function () {
        const n = document.createElement("script");
        n.language = "JavaScript";
        n.crossorigin = "anonymous";
        n.src = "https://itsfro.github.io/BRC/brc.user.js";
        n.onload = () => n.remove();
        document.head.appendChild(n);
    }
);
