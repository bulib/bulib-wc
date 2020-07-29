import{d as e,e as t,h as s}from"./lit-html-2435d3b6.js";import{L as l}from"./lit-element-fdaadb84.js";import{s as o}from"./google_analytix-b0686824.js";import{g as i}from"./lib_info_helper-f5ea09c7.js";
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const r=new WeakMap,n=e((function(){for(var e=arguments.length,s=new Array(e),l=0;l<e;l++)s[l]=arguments[l];return e=>{let l=r.get(e);void 0===l&&(l={lastRenderedIndex:2147483647,values:[]},r.set(e,l));const o=l.values;let i=o.length;l.values=s;for(let r=0;r<s.length&&!(r>l.lastRenderedIndex);r++){const n=s[r];if(t(n)||"function"!=typeof n.then){e.setValue(n),l.lastRenderedIndex=r;break}r<i&&n===o[r]||(l.lastRenderedIndex=2147483647,i=0,Promise.resolve(n).then(t=>{const s=l.values.indexOf(n);s>-1&&s<l.lastRenderedIndex&&(l.lastRenderedIndex=s,e.setValue(t),e.commit())}))}}})),a="https://www.bu.edu/library/about/hours/",d="https://cors-anywhere.herokuapp.com/",c="https://api3.libcal.com/api_hours_today.php";window.customElements.define("bulib-hours",class extends l{createRenderRoot(){return this}static get properties(){return{library:{type:String},short:{type:Boolean},long:{type:Boolean},link_class:{type:String},debug:{type:Boolean}}}_fetchHoursData(e,t){t||(t=1475);let s=`${d}${c}?format=json&systemTime=0&iid=1740&lid=${t}`;return this._logToConsole("calling 'libcal' with lid: '"+t+"'."),this._logGAEvent("api-call",e),fetch(s,{method:"GET",mode:"cors"}).then(e=>e.json()).then(e=>e.locations[0].rendered)}render(){let e=this.library||"mugar-memorial",t=i(e),l=t.short||t.name,o=t.libcal_lid;l.includes("BU Librar")&&(l="Mugar Library"),this._logToConsole(`rendering hours for ${l} (code:'${e}').`);let r,d=s`
      <span id="hours-display" class="inline" aria-label="today's hours for ${l}">
        ${n(this._fetchHoursData(e,o),s`<small> loading hours...</small>`)}
      </span>`,c=s`<img alt="clock-icon" id="clock-icon" src="https://cdn.jsdelivr.net/npm/bulib-wc@latest/dist/icons/clock-icon-24px.svg">`,h=s``,u=s`
      <a title="today's hours for ${l}" class="${this.link_class}"
         @click="${t=>{this._logGAEvent("clicked",e)}}" href="${a}">${d}</a>`,b=s`<div class="txtv center">${c}&nbsp;&nbsp;<strong>${l}:</strong>&nbsp;${d}</div>`,p=s`
      <div id="hours-top">
        <strong>${l}:</strong>&nbsp;${d}</div>
      </div>
      <div id="hours-btm">
        <small>
          <a title="today's hours for all bu-libraries" class="${this.link_class}" 
             @click="${e=>{this._logGAEvent("clicked","all")}}" href="${a}">see all location hours</a>
        </small>
      </div>
    `;return o||(r=h),r=this.short?u:this.long?p:b,s`
      <style> 
        bulib-hours:host { color: white; } 
        a > span { text-decoration: underline; }
        .txtv { display: flex; align-items: center; text-align: center; }
      </style>
      <div class="libhours">${r}</div>
    `}_logGAEvent(e,t){o("bulib-hours",e,t||this.library)}_logToConsole(e){this.debug&&console.log("bulib-hours) "+e)}});
//# sourceMappingURL=bulib-hours-707f8abf.js.map
