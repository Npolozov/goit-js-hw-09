!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var i=t("iU1Pc"),r=document.querySelector(".form");console.log(r),r.addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements,o=n.delay,t=n.step,r=n.amount,l=Number(o.value),a=Number(t.value),u=Number(r.value);if(l<=0||a<=0||u<=0)return i.Notify.failure("Please fill in all the fields!");for(var f=0;f<u;f+=1)c({position:f,delayInput:l}).then((function(e){var n=e.position;e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(l,"ms"))}),l+=a).catch((function(e){var n=e.position;e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(l,"ms"))}),l+=a);function c(e){var n=e.position,o=e.delay,t=Math.random()>.3;return new Promise((function(e,i){setTimeout((function(){t?e({position:n,delay:o}):i({position:n,delay:o})}),l)}))}}))}();
//# sourceMappingURL=03-promises.2ed0cddc.js.map
