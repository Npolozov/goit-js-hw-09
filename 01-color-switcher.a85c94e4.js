!function(){var o=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),t=document.querySelector("body"),n=null;console.log(o),console.log(e),o.addEventListener("click",(function(){o.disabled=!0,e.disabled=!1,n=setInterval((function(){var o="#".concat(Math.floor(16777215*Math.random()).toString(16));t.style.backgroundColor=o}),1e3)})),e.addEventListener("click",(function(){o.disabled=!1,e.disabled=!0,clearInterval(n),console.log("Interval with id ".concat(n," has stopped!"))}));var a=Math.random()>.3;console.log(a)}();
//# sourceMappingURL=01-color-switcher.a85c94e4.js.map
