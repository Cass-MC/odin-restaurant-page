(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Montserrat);"]),a.push([e.id,"body {\n    margin: 0;\n    font-family: 'Montserrat';\n    color: white;\n}\nbody a {\n    color: teal;\n}\n\n#content {\n    height: 150%;\n    width: 100%;\n    position: absolute;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 0.5fr 7fr 5fr 0.5fr;\n}\n\n#header {\n    background-color: black;\n    height: 100%;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.headerNav {\n    font-size: 40px;\n    text-align: center;\n    width: 10%;\n    height: 100%;\n}\n\n#hero {\n    position: relative;\n}\n\n#heroTitle {\n    font-size: 100px;\n    text-align: center;\n    background-color: rgba(0,0,0,0.5);\n    height: 120px;\n    width: 100%;\n    position: absolute;\n    left: 50%;\n    bottom: -60px;\n    transform: translate(-50%, -50%);\n}\n\n#info {\n    background-color: black;\n    display: grid;\n    grid-template-columns: 2fr 3fr;\n    grid-template-rows: 1fr;\n    align-items: center;\n    justify-items: center;\n}\n\n.infoBox {\n    background-color: rgb(43, 43, 42);\n    font-size: 1.5em;\n    height: 80%;\n    width: 95%;\n    text-align: center;\n    display: flex;\n    align-items: center;\n}\n\n#menu {\n    background-color: black;\n    grid-row: 2/4;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    gap: 10px;\n}\n\n.menuItem {\n    background-color: rgb(43, 43, 42);\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n    position: relative;\n}\n\n.menuTitle {\n    background-color: rgba(0,0,0,0.5);\n    text-align: center;\n    font-size: 40px;\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n}\n\n#menuInfo {\n    background-color: black;\n    grid-row: 3;\n    grid-column: 1/-1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#menuInfoBox {\n    background-color: rgb(43, 43, 42);\n    height: 93%;\n    width: 98%;\n    margin-top: -7px;\n    font-size: 20px;\n    display: flex;\n    text-align: center;\n    align-items: center;\n}\n\n#contactBox {\n    background-color: black;\n    grid-row: 2/4;\n    display: flex;\n    align-items: center;\n}\n\n#contactFormBox {\n    height: 40%;\n    width: 50%;\n}\n\n#contactForm {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background-color: black;\n    height: 100%;\n}\n\n#contactForm input,textarea {\n    display: flex;\n    width: 50%;\n    height: 20px;\n    margin-bottom: 15px;\n}\n\n#contactForm textarea {\n    height: 100px;\n}\n\n#contactForm button {\n    border: none;\n    background-color: rgb(43, 43, 42);\n    color: white;\n    height: 40px;\n    width: 50%;\n}\n\n#contactInfo {\n    background-color: rgb(43, 43, 42);\n    font-size: 20px;\n    height: 40%;\n    width: 60%;\n    padding: 20px;\n    margin-right: 40px;\n    display: flex;\n    align-items: center;\n    text-align: center;\n}\n\n#footer {\n    background-color: rgb(43, 43, 42);\n    display: flex;\n    justify-content: space-around;\n    grid-row: 4;\n}\n\n.footerItem {\n    display: flex;\n    align-items: center;\n}",""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",i=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),i&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),i&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,i,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);i&&a[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var r={},a=[],c=0;c<e.length;c++){var s=e[c],d=i.base?s[0]+i.base:s[0],l=r[d]||0,u="".concat(d," ").concat(l);r[d]=l+1;var m=t(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var f=o(p,i);i.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=i(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var c=t(r[a]);n[c].references--}for(var s=i(e,o),d=0;d<r.length;d++){var l=t(r[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=s}}},569:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(i,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var r=n[i]={id:i,exports:{}};return e[i](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&!e;)e=i[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),i=t(795),o=t.n(i),r=t(569),a=t.n(r),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),m=t.n(u),p=t(426),f={};f.styleTagTransform=m(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const g=t.p+"f3d7debddcbe1a3f572c.jpg",h=t.p+"4e04113fd3cadfc70eeb.png",v=t.p+"c984188a7a46b240687e.png";function b(){const e=document.getElementById("content");e.appendChild(function(){const e=document.createElement("div");e.id="header";const n=document.createElement("div");n.classList.add("headerNav"),n.style.backgroundImage="url("+h+")",n.style.backgroundSize="contain",n.style.backgroundRepeat="no-repeat",n.style.backgroundPosition="center";const t=document.createElement("div");t.classList.add("headerNav"),t.textContent="menu";const i=document.createElement("div");return i.classList.add("headerNav"),i.textContent="contact",e.appendChild(n),e.appendChild(t),e.appendChild(i),e}()),e.appendChild(function(){const e=document.createElement("div");e.id="hero",e.style.backgroundImage="url("+g+")",e.style.backgroundPosition="center",e.style.backgroundSize="100%";const n=document.createElement("div");return n.id="heroTitle",n.textContent="Aster's Bakery",e.appendChild(n),e}()),e.appendChild(function(){const e=document.createElement("div");e.id="info";const n=document.createElement("div");n.classList.add("infoBox"),n.style.backgroundImage="url("+v+")",n.style.backgroundPosition="center";const t=document.createElement("div");t.classList.add("infoBox");const i=document.createElement("p");return i.textContent="Made with fresh ingredients my dog finds on the side of the road, I guess. Every order guaranteed to have sticks and discarded chicken bones carefully wrestled from her mouth before she chokes on them.",t.appendChild(i),e.appendChild(n),e.appendChild(t),e}()),e.appendChild(function(){const e=document.createElement("div");e.id="footer";const n=document.createElement("a");n.classList.add("footerItem"),n.textContent="Hero from here",n.href="https://unsplash.com/photos/tOYiQxF9-Ys";const t=document.createElement("p");t.classList.add("footerItem"),t.textContent="Map and menu from Pokemon";const i=document.createElement("p");return i.classList.add("footerItem"),i.textContent="Logo is my dog",e.appendChild(n),e.appendChild(t),e.appendChild(i),e}())}const y=t.p+"f8b0863de0aa40009c1e.png",x=t.p+"d48d8ffbc5dbdc18afa7.png",C=t.p+"a9f99d17d1021f0ccd1a.png",E=t.p+"51d2911609c2d892dc52.png",k=t.p+"d0cbe6ad208a05fbed8a.png",w=t.p+"ffd224592a0808a88ada.png";function I(e,n,t){e.classList.add("menuItem"),e.style.backgroundImage="url("+n+")";const i=document.createElement("p");i.classList.add("menuTitle"),i.textContent=t,e.appendChild(i)}function T(e="notMain"){const n=document.getElementById("content");if("notMain"==e)for(let e=0;e<n.children.length;e++){const t=n.children[e];"header"!=t.id&&"footer"!=t.id&&(n.removeChild(t),e--)}if("main"==e)for(let e=0;e<n.children.length;e++){const t=n.children[e];n.removeChild(t),e--}}b(),function e(){document.getElementsByClassName("headerNav")[0].addEventListener("click",(()=>{T("main"),b(),e()})),document.getElementsByClassName("headerNav")[1].addEventListener("click",(()=>{T(),document.getElementById("content").appendChild(function(){const e=document.createElement("div");e.id="menu";const n=document.createElement("div");I(n,y,"Combee Waffles");const t=document.createElement("div");I(t,x,"Eevee Pancakes");const i=document.createElement("div");I(i,C,"Alcremie Cupcakes");const o=document.createElement("div");I(o,E,"Dugtrio Sandwich");const r=document.createElement("div");I(r,k,"Litwick Cocoa");const a=document.createElement("div");I(a,w,"Ribombee Cake"),e.appendChild(n),e.appendChild(t),e.appendChild(i),e.appendChild(o),e.appendChild(r),e.appendChild(a);const c=document.createElement("div");c.id="menuInfo",e.appendChild(c);const s=document.createElement("div");return s.id="menuInfoBox",s.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis varius magna, vel viverra magna viverra ac. Suspendisse luctus porttitor ultricies. Suspendisse pulvinar neque quis magna dapibus elementum. Donec finibus, nisl id dignissim gravida, dolor tortor ornare eros, non efficitur ipsum sem nec lorem. Sed finibus dictum tortor at laoreet. Integer tempor sem sit amet arcu tincidunt pulvinar. Donec vel vestibulum nunc. Nam facilisis justo massa, quis laoreet odio facilisis vel. Praesent posuere sed erat et egestas. Duis sit amet urna ultricies, pellentesque justo at, imperdiet quam. Cras vestibulum mauris eget ipsum semper, id tincidunt sem suscipit. Fusce tincidunt facilisis velit, in tempor nunc sollicitudin vel. Praesent a neque et dui pulvinar porta sit amet sit amet augue. Integer libero augue, consectetur sit amet iaculis ac, faucibus ut est. Proin leo lorem, euismod eget elit sit amet, dignissim commodo quam. Proin condimentum sem eget ante egestas faucibus. Nullam aliquet id ante in vulputate. ",c.appendChild(s),e}()),e()})),document.getElementsByClassName("headerNav")[2].addEventListener("click",(()=>{T(),document.getElementById("content").appendChild(function(){const e=document.createElement("div");e.id="contactBox";const n=document.createElement("div");n.id="contactFormBox",n.appendChild(function(){const e=document.createElement("form");e.setAttribute("method","post"),e.setAttribute("action","submit"),e.id="contactForm";const n=document.createElement("label");n.setAttribute("for","input_name"),n.innerText="Name";const t=document.createElement("input");t.setAttribute("type","text"),t.setAttribute("id","input_name"),e.appendChild(n),e.appendChild(t);const i=document.createElement("label");i.setAttribute("for","input_email"),i.innerText="Email";const o=document.createElement("input");o.setAttribute("type","email"),o.setAttribute("id","input_email"),e.appendChild(i),e.appendChild(o);const r=document.createElement("label");r.setAttribute("for","input_message"),r.innerText="Message";const a=document.createElement("textarea");a.setAttribute("id","input_message"),e.appendChild(r),e.appendChild(a);const c=document.createElement("button");return c.innerText="Submit",e.appendChild(c),e}());const t=document.createElement("div");return t.id="contactInfo",t.textContent="Want to have an event catered? Any general questions? Ask and I'll talk to my dog about it. Maybe your answer will be given maybe not. Dictum fusce ut placerat orci nulla pellentesque. Rhoncus dolor purus non enim praesent elementum. Vel elit scelerisque mauris pellentesque. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Ultrices sagittis orci a scelerisque purus semper eget. Integer vitae justo eget magna fermentum iaculis eu non diam. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Tristique sollicitudin nibh sit amet commodo. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel. Et magnis dis parturient montes nascetur ridiculus mus. ",e.appendChild(n),e.appendChild(t),e}()),e()}))}()})()})();