!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequire7bc7;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequire7bc7=i);var r=i("6JpON"),a=document.querySelector(".form"),c=a.elements,l=c.delay,u=c.step,s=c.amount;function f(e,n){var o=Math.random()>.3;return promise=new Promise((function(t,i){setTimeout((function(){o?t({position:e,delay:n}):i({position:e,delay:n})}),n)}))}a.addEventListener("submit",(function(n){n.preventDefault();for(var o=0;o<Number.parseInt(s.value);o+=1){var t=o+1,i=Number.parseInt(l.value)+Number.parseInt(u.value)*o;f(t,i),promise.then((function(n){var o=n.position,t=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms")),console.log("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms")),console.log("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.4dbaddb8.js.map
