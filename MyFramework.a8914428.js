parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"2iMt":[function(require,module,exports) {
module.exports={switchWrapper:"_switchWrapper_b27f7",switchInput:"_switchInput_b27f7",switchLabel:"_switchLabel_b27f7",displayCharacters:"_displayCharacters_b27f7",displayCharactersItem:"_displayCharactersItem_b27f7",top:"_top_b27f7",moreInfo:"_moreInfo_b27f7",characterName:"_characterName_b27f7"};
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=t(require("./style.css"));function t(e){return e&&e.__esModule?e:{default:e}}function r(){return`<div>\n    ${u()}\n    <br>\n    ${s()}\n    <br>\n    ${a()}\n    </div>`}function n(){document.querySelector("#app-root").innerHTML=r(),w()}function a(){return`<div>\n  ${i()}\n  ${p()}\n  </div>`}function c(){return window.currentState.characters.length<=0?fetch("https://hp-api.herokuapp.com/api/characters").then(e=>e.json()).then(e=>({data:e})):Promise.resolve(window.currentState.characters)}function i(){window.performDisplay();let t="";if(window.currentState.isDataLoading&&(t="Data Loading..."),null!=window.currentState.error&&(t=window.currentState.error),window.currentState.characters.length>0){window.currentState.currentDisplayCharacters=l().filter(e=>e.name.toLowerCase().startsWith(window.currentState.currentSearch));const r=window.currentState.currentDisplayCharacters.map(t=>`<li class='characterItem ${e.default.displayCharactersItem}' aria-label="${t.name}">\n                        <div class='${e.default.top}'>\n                          <img src='${m(t.image)}'>\n                        </div>\n                        <p>${t.name}<p>\n                      </li>`).join("");t=`<div id='displayCharacters' class='${e.default.displayCharacters}'>\n            <ul>${r}</ul>\n            </div>`}return t}function o(){window.currentState.isDataLoading=!0,window.currentState.error=null,window.validateAndLoadData().then(({err:e,data:t})=>{window.currentState.isDataLoading=!1,e?window.currentState.error=e:t&&(window.currentState.characters=t,window.renderApp())}).catch(()=>{window.currentState.error="ERROR"})}function u(){const t=[{id:"switch-all",value:"all"},{id:"switch-students",value:"students"},{id:"switch-staff",value:"staff"}].map(t=>`<input type='radio' name='switchDisplay' value='${t.value}' id='${t.id}'\n    ${window.currentState.currentCharacters==t.value?"checked":""} class='${e.default.switchInput}'>\n                                                    <label for='${t.id}' class='${e.default.switchLabel}'>\n                                                    ${t.value}\n                                                    </label>`).join("");return`<div id='switch-wrapper' class='${e.default.switchWrapper}' onclick="(${S})(event);"> ${t} </div>`}function s(){return`<label for='search'>Enter name: </label><input type='text' id='search'\n            value='${window.currentState.currentSearch}' onchange='window.searchByName(this.value);'>`}function d(e){e!=window.currentState.currentSearch&&(window.currentState.currentSearch=e.trim().toLowerCase(),window.renderApp())}function l(){return"staff"==window.currentState.currentCharacters?window.currentState.characters.filter(e=>1==e.hogwartsStaff):"students"==window.currentState.currentCharacters?window.currentState.characters.filter(e=>0==e.hogwartsStaff):window.currentState.characters}function w(){const e=document.querySelector("#displayCharacters ul");e&&e.addEventListener("click",function({target:e}){const t=e.closest(".characterItem");t&&h(t)})}function h(e){const t=window.currentState.currentDisplayCharacters.find(t=>t.name==e.getAttribute("aria-label")),r=document.querySelector("#moreInfo");r.querySelector(".top").innerHTML=`<img src='${window.getSecurityURL(t.image)}'>`,r.querySelector(".name").innerHTML=t.name,r.querySelector(".moreInfo").innerHTML=`Species: ${t.species}<br>\n                                                    Gender: ${t.gender}<br>\n                                                    Date of birth: ${t.dateOfBirth}<br>\n                                                    House: ${t.house}<br>`,r.style="display: block"}function f(e){e.closest("#moreInfo").style.display="none"}function p(){return`<div id='moreInfo' class='${e.default.moreInfo}'>\n            <div aria-label='' class='top ${e.default.top}'></div>\n            <p class='name ${e.default.characterName}'></p>\n            <p class='${e.default.characterInfo} moreInfo'></p>\n            <button onclick='(()=>window.closeInfo(this))()'>x</button>\n    </div>`}function S(e){const t=e.target.previousElementSibling;t&&t.value!=window.currentState.currentCharacters&&(window.currentState.currentCharacters=t.value,window.renderApp())}function m(e){const t=e.split("");return t.splice(4,0,"s"),t.join("")}module.hot&&module.hot.accept(),window.currentState={currentCharacters:"all",currentSearch:"",isDataLoading:!1,error:null,characters:[],currentDisplayCharacters:[]},window.renderApp=n,window.getSecurityURL=m,window.performDisplay=o,window.searchByName=d,window.validateAndLoadData=c,n(),window.closeInfo=f;
},{"./style.css":"2iMt"}]},{},["Focm"], null)
//# sourceMappingURL=MyFramework.a8914428.js.map