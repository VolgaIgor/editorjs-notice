!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.NoticeTune=e():t.NoticeTune=e()}(self,(()=>(()=>{"use strict";var t={822:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(645),i=n.n(r)()((function(t){return t[1]}));i.push([t.id,".notice-tune {\r\n    background: linear-gradient(90deg, var(--nt-border-bg) 0px, var(--nt-border-bg) 6px, transparent 6px);\r\n}\r\n    \r\n    .notice-tune__input {\r\n        position: relative;\r\n        padding-left: 45px;\r\n        background-repeat: no-repeat;\r\n        background-position: 15px;\r\n        margin: 10px 0;\r\n        display: none;\r\n        border-color: var(--nt-border-bg);\r\n    }\r\n    \r\n    .notice-tune .notice-tune__input {\r\n        display: block;\r\n    }\r\n    \r\n    .notice-tune~.notice-tune {\r\n        margin-top: 1.5em;\r\n    }\r\n    \r\n    .notice-tune--info+.notice-tune--info,\r\n    .notice-tune--warning+.notice-tune--warning,\r\n    .notice-tune--spoiler+.notice-tune--spoiler {\r\n        margin-top: 0;\r\n    }\r\n    \r\n    .notice-tune--info+.notice-tune--info .notice-tune__input,\r\n    .notice-tune--warning+.notice-tune--warning .notice-tune__input,\r\n    .notice-tune--spoiler+.notice-tune--spoiler .notice-tune__input {\r\n        display: none;\r\n    }\r\n    \r\n    .notice-tune--info {\r\n        --nt-border-bg: #5cb6ff;\r\n    }\r\n    \r\n    .notice-tune--warning {\r\n        --nt-border-bg: #ffd025;\r\n    }\r\n    \r\n    .notice-tune--spoiler {\r\n        --nt-border-bg: #424242;\r\n    }\r\n    \r\n    .notice-tune__tune-wrapper {\r\n        display: flex;\r\n        gap: 6px;\r\n        margin: 5px 0;\r\n    }\r\n    \r\n    .notice-tune__tune-wrapper > .cdx-button {\r\n            flex-grow: 1;\r\n            padding: 6px;\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n        }\r\n    \r\n    .notice-tune__tune-wrapper > .cdx-button.active {\r\n                background: var(--color-background-icon-active);\r\n                color: var(--color-text-icon-active);\r\n            }\r\n    \r\n    .notice-tune__tune-wrapper > .cdx-button svg {\r\n                width: 18px;\r\n                height: 18px;\r\n            }",""]);const o=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);r&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},379:(t,e,n)=>{var r,i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),o=[];function a(t){for(var e=-1,n=0;n<o.length;n++)if(o[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},r=[],i=0;i<t.length;i++){var c=t[i],l=e.base?c[0]+e.base:c[0],s=n[l]||0,u="".concat(l," ").concat(s);n[l]=s+1;var d=a(u),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(o[d].references++,o[d].updater(p)):o.push({identifier:u,updater:v(p,e),references:1}),r.push(u)}return r}function l(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,u=(s=[],function(t,e){return s[t]=e,s.filter(Boolean).join("\n")});function d(t,e,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=u(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function p(t,e,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,f=0;function v(t,e){var n,r,i;if(e.singleton){var o=f++;n=h||(h=l(e)),r=d.bind(null,n,o,!1),i=d.bind(null,n,o,!0)}else n=l(e),r=p.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var i=a(n[r]);o[i].references--}for(var l=c(t,e),s=0;s<n.length;s++){var u=a(n[s]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=l}}}}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0;var r={};return(()=>{n.d(r,{default:()=>l});var t=n(379),e=n.n(t),i=n(822);function o(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}e()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var l=function(){function t(e){var n=this,r=e.api,i=e.data,o=(e.config,e.block);if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=r,this.data={style:void 0,caption:""},i&&i.style&&t.tunes.find((function(t){return t.name===i.style}))&&(this.data={style:i.style,caption:i.caption||""}),this.config={captionPlaceholder:this.api.i18n.t("Notice caption")},this.block=o,this.input=s("input",[this.CSS.input,this.CSS.blockInput],{type:"text",placeholder:this.config.captionPlaceholder,value:this.data.caption}),this.fillIcon(),this.data.style){var a=new MutationObserver((function(){n.block.holder&&(n.block.holder.classList.add(n.CSS.baseTemplate),n.block.holder.classList.add("".concat(n.CSS.baseTemplate,"--").concat(n.data.style)),a.disconnect())}));a.observe(document,{childList:!0,subtree:!0})}}var e,n,r;return e=t,r=[{key:"isTune",get:function(){return!0}},{key:"tunes",get:function(){return[{name:"spoiler",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">\r\n  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\r\n  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\r\n  <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\r\n</svg>',title:"Spoiler"},{name:"info",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">\r\n  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>\r\n  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>\r\n</svg>',title:"Info"},{name:"warning",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">\r\n  <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z"/>\r\n  <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>\r\n</svg>',title:"Warning"}]}}],(n=[{key:"CSS",get:function(){return{input:this.api.styles.input,buttonBase:this.api.styles.button,buttonActive:"active",baseTemplate:"notice-tune",tuneWrapper:"notice-tune__tune-wrapper",blockInput:"notice-tune__input"}}},{key:"fillIcon",value:function(){var e=this;if(this.data.style){var n=t.tunes.find((function(t){return t.name===e.data.style})),r=encodeURIComponent(n.icon);this.input.style.backgroundImage="url(data:image/svg+xml,".concat(r,")")}else this.input.style.backgroundImage=""}},{key:"fillTunes",value:function(){var t=this;this.buttons.forEach((function(e){e.classList.toggle(t.CSS.buttonActive,e.dataset.tune===t.data.style)}))}},{key:"render",value:function(){var e=this,n=s("div",this.CSS.tuneWrapper);return this.buttons=[],t.tunes.forEach((function(t){var r=e.api.i18n.t(t.title),i=s("div",[e.CSS.buttonBase],{innerHTML:t.icon,title:r});i.addEventListener("click",(function(){e.tuneClicked(t.name)})),i.dataset.tune=t.name,e.buttons.push(i),e.api.tooltip.onHover(i,r,{placement:"top"}),n.appendChild(i)})),this.fillTunes(),n}},{key:"wrap",value:function(t){return this.data.style&&t.prepend(this.input),t}},{key:"tuneClicked",value:function(e){var n=this.data.style;this.data.style===e?(this.data.style=void 0,this.block.holder.classList.remove(this.CSS.baseTemplate),this.block.holder.classList.remove("".concat(this.CSS.baseTemplate,"--").concat(n)),this.block.holder.querySelector(".ce-block__content").removeChild(this.input)):t.tunes.find((function(t){return t.name===e}))&&(this.data.style=e,this.block.holder.classList.remove("".concat(this.CSS.baseTemplate,"--").concat(n)),this.block.holder.classList.add(this.CSS.baseTemplate),this.block.holder.classList.add("".concat(this.CSS.baseTemplate,"--").concat(this.data.style)),n||this.block.holder.querySelector(".ce-block__content").prepend(this.input));var r=this.data.style;n!==r&&(this.checkNeighbor(n,r),this.fillIcon(),this.fillTunes())}},{key:"checkNeighbor",value:function(t,e){var n=this.api.blocks.getCurrentBlockIndex(),r=this.api.blocks.getBlockByIndex(n-1),i=this.api.blocks.getBlockByIndex(n+1);if(void 0!==t&&(void 0===r||!r.holder.classList.contains("".concat(this.CSS.baseTemplate,"--").concat(t)))&&void 0!==i&&i.holder.classList.contains("".concat(this.CSS.baseTemplate,"--").concat(t))&&0!==this.input.value.length){var o=i.holder.querySelector(".".concat(this.CSS.blockInput));o&&(o.value=this.input.value)}if(void 0!==e&&(void 0===r||!r.holder.classList.contains("".concat(this.CSS.baseTemplate,"--").concat(e)))&&void 0!==i&&i.holder.classList.contains("".concat(this.CSS.baseTemplate,"--").concat(e))){var a=i.holder.querySelector(".".concat(this.CSS.blockInput));a&&0!==a.value.length&&(this.input.value=a.value)}}},{key:"save",value:function(){if(this.data.style)return this.data.caption=this.input.value,this.data}}])&&c(e.prototype,n),r&&c(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),s=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=document.createElement(t);for(var a in Array.isArray(n)?(e=i.classList).add.apply(e,o(n)):n&&i.classList.add(n),r)i[a]=r[a];return i}})(),r.default})()));