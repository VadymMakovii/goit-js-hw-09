const t=document.querySelector("[data-stop]"),e=document.querySelector("[data-start]"),r=document.querySelector("body");let o=null;t.addEventListener("click",(function(){clearInterval(o),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){o=setInterval((()=>r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`),1e3),e.setAttribute("disabled","disabled")}));
//# sourceMappingURL=01-color-switcher.233eaf1c.js.map
