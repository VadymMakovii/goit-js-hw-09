var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");const i=document.querySelector(".form"),u=i.querySelector("input[name=delay]"),l=i.querySelector("input[name=step]"),a=i.querySelector("input[name=amount]");function s(e,t){setTimeout((()=>{new Promise(((n,o)=>{Math.random()>.3&&n(`Fulfilled promise ${e} in ${t}ms`),o(`Rejected promise ${e} in ${t}ms`)})).then((e=>{r.Notify.success(`✅ ${e}`,{useIcon:!1})})).catch((e=>{r.Notify.failure(`❌ ${e}`,{useIcon:!1})}))}),t)}i.querySelector("button").addEventListener("click",(function(e){e.preventDefault();const t=Number(l.value),n=Number(a.value),o=n+1,i=Number(u.value);let c=i;if(t<0||i<0)return r.Notify.warning("Please enter a positive value",{position:"center-center",timeout:2e3,width:"300px",fontSize:"16px",cssAnimationStyle:"zoom",pauseOnHover:!1,showOnlyTheLastOne:!0});if(n<=0)return r.Notify.warning("Amount value must be greater than zero",{position:"center-center",timeout:2e3,width:"300px",fontSize:"16px",cssAnimationStyle:"zoom",pauseOnHover:!1,showOnlyTheLastOne:!0});for(let e=1;e<o;e+=1)s(e,c),c+=t}));
//# sourceMappingURL=03-promises.05ad0c30.js.map