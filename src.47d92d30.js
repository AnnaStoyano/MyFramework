parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"PA9s":[function(require,module,exports) {
"use strict";function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function t(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach(function(e){r(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createFragment=exports.createElement=void 0;const n=(e,r,...n)=>{if("function"==typeof e)return e(t(t({},r),{},{children:n}),n);const c=""===e?new DocumentFragment:document.createElement(e);return Object.entries(r||{}).forEach(([e,t])=>{if(e.startsWith("on")&&e.toLowerCase()in window)c.addEventListener(e.toLowerCase().substr(2),t);else try{c instanceof DocumentFragment||(["disabled","checked"].includes(e)&&!t?c.removeAttribute(e):c.setAttribute(e,t))}catch(r){console.error("createElement caught",r,"on",c)}}),n.forEach(e=>o(c,e)),c};exports.createElement=n;const o=(e,t)=>{Array.isArray(t)?t.forEach(t=>o(e,t)):null!=t&&e.appendChild(t.nodeType?t:document.createTextNode(t.toString()))},c=(e,...t)=>n("",e,...t);exports.createFragment=c;
},{}],"iWoG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;var e=require("./element");let l,t;function n(n=null,r=null){n&&(l=n),r&&(t=r),t.innerHTML="",t.appendChild((0,e.createElement)(l,null))}
},{"./element":"PA9s"}],"bBDg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const r={currentCharacters:"all",currentSearch:"",isDataLoading:!1,error:null,characters:[],currentDisplayCharacters:[],activeCard:null};var e=r;exports.default=e;
},{}],"KmLy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.switchCharactersRadio=e,exports.searchByName=a,exports.filterCharactersByWork=n,exports.closeModal=c;var r=t(require("../framework/render"));function t(r){return r&&r.__esModule?r:{default:r}}function e(t){const e=t.target.previousElementSibling;e&&e.value!=window.currentState.currentCharacters&&(window.currentState.currentCharacters=e.value,(0,r.default)())}function a(t){t!=window.currentState.currentSearch&&(window.currentState.currentSearch=t.trim().toLowerCase(),(0,r.default)())}function n(){return"staff"==window.currentState.currentCharacters?window.currentState.characters.filter(r=>1==r.hogwartsStaff):"students"==window.currentState.currentCharacters?window.currentState.characters.filter(r=>0==r.hogwartsStaff):window.currentState.characters}function c(){window.currentState.activeCard=null,(0,r.default)()}
},{"../framework/render":"iWoG"}],"MeE1":[function(require,module,exports) {
module.exports={switchWrapper:"_switchWrapper_1e5e7"};
},{}],"F+ue":[function(require,module,exports) {
module.exports={switchInput:"_switchInput_13bc9",switchLabel:"_switchLabel_13bc9"};
},{}],"lQN6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=a;var e=require("../../framework/element"),t=r(require("./SwitchItem.css"));function r(e){return e&&e.__esModule?e:{default:e}}function a(r,a){return(0,e.createElement)(e.createFragment,null,(0,e.createElement)("input",{type:"radio",name:"switchDisplay",value:r,id:a,checked:window.currentState.currentCharacters==r,class:t.default.switchInput}),(0,e.createElement)("label",{For:a,class:t.default.switchLabel},r))}
},{"../../framework/element":"PA9s","./SwitchItem.css":"F+ue"}],"MZpT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return e.default}});var e=t(require("./SwitchItem"));function t(e){return e&&e.__esModule?e:{default:e}}
},{"./SwitchItem":"lQN6"}],"frtz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=i;var e=require("../../framework/element"),t=require("../../data/helper"),r=s(require("./SwitchCharacters.css")),a=s(require("../SwitchItem"));function s(e){return e&&e.__esModule?e:{default:e}}function i(){const s=[{id:"switch-all",value:"all"},{id:"switch-students",value:"students"},{id:"switch-staff",value:"staff"}].map(e=>(0,a.default)(e.value,e.id));return(0,e.createElement)("div",{id:"switch-wrapper",class:r.default.switchWrapper,onclick:e=>(0,t.switchCharactersRadio)(e)}," ",s," ")}
},{"../../framework/element":"PA9s","../../data/helper":"KmLy","./SwitchCharacters.css":"MeE1","../SwitchItem":"MZpT"}],"3Gdi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return e.default}});var e=t(require("./SwitchCharacters"));function t(e){return e&&e.__esModule?e:{default:e}}
},{"./SwitchCharacters":"frtz"}],"zrud":[function(require,module,exports) {
module.exports={searchWrapper:"_searchWrapper_8e874"};
},{}],"1qKF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;var e=require("../../framework/element"),r=require("../../data/helper"),t=a(require("./SearchByName.css"));function a(e){return e&&e.__esModule?e:{default:e}}function n(){return(0,e.createElement)("div",{class:t.default.searchWrapper},(0,e.createElement)("label",{For:"search"},"Enter name: "),(0,e.createElement)("input",{type:"text",id:"search",value:window.currentState.currentSearch,onchange:e=>(0,r.searchByName)(e.target.value)}))}
},{"../../framework/element":"PA9s","../../data/helper":"KmLy","./SearchByName.css":"zrud"}],"I+de":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return e.default}});var e=r(require("./SearchByName"));function r(e){return e&&e.__esModule?e:{default:e}}
},{"./SearchByName":"1qKF"}],"otHt":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.validateAndLoadData=t,exports.performDisplayCharacters=a;var r=e(require("../framework/render"));function e(r){return r&&r.__esModule?r:{default:r}}function t(){return window.currentState.characters.length<=0?fetch("https://hp-api.herokuapp.com/api/characters").then(r=>r.json()).then(r=>({data:r})):Promise.resolve(window.currentState.characters)}function a(){window.currentState.isDataLoading=!0,window.currentState.error=null,t().then(({err:e,data:t})=>{window.currentState.isDataLoading=!1,e?window.currentState.error=e:t&&(window.currentState.characters=t,(0,r.default)())}).catch(()=>{window.currentState.error="ERROR"})}
},{"../framework/render":"iWoG"}],"QWuR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r;var e=t(require("../framework/render"));function t(e){return e&&e.__esModule?e:{default:e}}function r(t){const r=t.closest("div[aria-label]");if(r){const t=window.currentState.currentDisplayCharacters.find(e=>e.name==r.getAttribute("aria-label"));window.currentState.activeCard=t,(0,e.default)()}}
},{"../framework/render":"iWoG"}],"y6Dh":[function(require,module,exports) {
module.exports={displayCharactersCard:"_displayCharactersCard_9a6e4",top:"_top_9a6e4",moreInfo:"_moreInfo_9a6e4"};
},{}],"FO+Z":[function(require,module,exports) {
"use strict";function e(e){const t=e.split("");return t.splice(4,0,"s"),t.join("")}function t(e,t){let r="";for(let i in e)if(!t.includes(i)){let t=e[i];""==t&&(t="-"),r+=`${i}: ${t}<br>`}return r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getSecurityURL=e,exports.getMoreDatails=t;
},{}],"3FX5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=l;var e=require("../../framework/element"),r=a(require("./CharacterCard.css")),t=require("../../utils");function a(e){return e&&e.__esModule?e:{default:e}}function l({name:a,image:l}){return(0,e.createElement)("div",{class:r.default.displayCharactersCard,"aria-label":a},(0,e.createElement)("div",{class:r.default.top},(0,e.createElement)("img",{src:(0,t.getSecurityURL)(l)})),(0,e.createElement)("p",null,a))}
},{"../../framework/element":"PA9s","./CharacterCard.css":"y6Dh","../../utils":"FO+Z"}],"TiX2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return e.default}});var e=r(require("./CharacterCard"));function r(e){return e&&e.__esModule?e:{default:e}}
},{"./CharacterCard":"3FX5"}],"gpv2":[function(require,module,exports) {
module.exports={displayCharacters:"_displayCharacters_62f53"};
},{}],"62HC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=i;var e=require("../../data/charactersData"),r=require("../../framework/element"),a=l(require("../../data/displayPopUp")),t=require("../../data/helper"),n=l(require("../CharacterCard")),c=l(require("./CharactersResult.css"));function l(e){return e&&e.__esModule?e:{default:e}}function i(){(0,e.performDisplayCharacters)();const{currentSearch:l,characters:i,error:s,isDataLoading:u}=window.currentState;let d="";if(u&&(d="Data Loading..."),null!=s&&(d=window.currentState.error),i.length>0){window.currentState.currentDisplayCharacters=(0,t.filterCharactersByWork)().filter(e=>e.name.toLowerCase().startsWith(l));const e=window.currentState.currentDisplayCharacters.map(e=>(0,r.createElement)(n.default,{name:e.name,image:e.image}));d=(0,r.createElement)("div",{id:"displayCharacters",class:c.default.displayCharacters,onclick:e=>(0,a.default)(e.target)},(0,r.createElement)("ul",null,e))}return(0,r.createElement)("div",null,d)}
},{"../../data/charactersData":"otHt","../../framework/element":"PA9s","../../data/displayPopUp":"QWuR","../../data/helper":"KmLy","../CharacterCard":"TiX2","./CharactersResult.css":"gpv2"}],"uNJj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return e.default}});var e=t(require("./CharactersResult"));function t(e){return e&&e.__esModule?e:{default:e}}
},{"./CharactersResult":"62HC"}],"8PKB":[function(require,module,exports) {
module.exports={moreInfo:"_moreInfo_10abb",characterInfo:"_characterInfo_10abb",top:"_top_10abb",characterName:"_characterName_10abb"};
},{}],"uN0I":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;var e=require("../../framework/element"),t=require("../../data/helper"),r=a(require("./PopUp.css")),l=require("../../utils");function a(e){return e&&e.__esModule?e:{default:e}}function n({name:a,image:n,species:c,gender:u,house:s,dateOfBirth:i,ancestry:o,actor:m,alive:d}){return(0,e.createElement)("div",{id:"moreInfo",class:r.default.moreInfo},(0,e.createElement)("div",{"aria-label":a,class:r.default.top},(0,e.createElement)("img",{src:(0,l.getSecurityURL)(n)})),(0,e.createElement)("p",{class:r.default.characterName},a),(0,e.createElement)("div",{class:r.default.characterInfo},(0,e.createElement)("p",null,"Species: ",c),(0,e.createElement)("p",null,"Gender: ",u),(0,e.createElement)("p",null,"Date of Birth: ",i),(0,e.createElement)("p",null,"House: ",s),(0,e.createElement)("p",null,"Ancestry: ",o),(0,e.createElement)("p",null,"Alive: ",d?"+":"-"),(0,e.createElement)("p",null,"Actor: ",m)),(0,e.createElement)("button",{onclick:()=>(0,t.closeModal)()},"x"))}
},{"../../framework/element":"PA9s","../../data/helper":"KmLy","./PopUp.css":"8PKB","../../utils":"FO+Z"}],"Y/bc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return e.default}});var e=t(require("./PopUp"));function t(e){return e&&e.__esModule?e:{default:e}}
},{"./PopUp":"uN0I"}],"/ZtA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=u;var e=require("../../framework/element"),r=l(require("../CharactersResult")),t=l(require("../PopUp"));function l(e){return e&&e.__esModule?e:{default:e}}function u({activeCard:l=null}){return(0,e.createElement)(e.createFragment,null,(0,e.createElement)(r.default,null),l?(0,e.createElement)(t.default,l):null)}
},{"../../framework/element":"PA9s","../CharactersResult":"uNJj","../PopUp":"Y/bc"}],"Nqeq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return e.default}});var e=t(require("./DisplayResult"));function t(e){return e&&e.__esModule?e:{default:e}}
},{"./DisplayResult":"/ZtA"}],"le+d":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=l;var e=require("../framework/element"),t=u(require("./SwitchCharacters")),r=u(require("./SearchByName")),a=u(require("./DisplayResult"));function u(e){return e&&e.__esModule?e:{default:e}}function l(){return(0,e.createElement)(e.createFragment,null,(0,e.createElement)(t.default,null),(0,e.createElement)(r.default,null),(0,e.createElement)(a.default,{activeCard:window.currentState.activeCard}))}
},{"../framework/element":"PA9s","./SwitchCharacters":"3Gdi","./SearchByName":"I+de","./DisplayResult":"Nqeq"}],"Focm":[function(require,module,exports) {
"use strict";var e=u(require("./framework/render")),t=u(require("./data/currentState")),r=u(require("./components/App"));function u(e){return e&&e.__esModule?e:{default:e}}module.hot&&module.hot.accept(),window.currentState=t.default,(0,e.default)(r.default,document.querySelector("#app-root"));
},{"./framework/render":"iWoG","./data/currentState":"bBDg","./components/App":"le+d"}]},{},["Focm"], null)
//# sourceMappingURL=src.47d92d30.js.map