import{i as t,p as e,r as s,t as r,m as i,T as o,a as n,b as a,c as h}from"./lit-html-2435d3b6.js";
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
 */const c=133;function l(t,e){const{element:{content:s},parts:r}=t,i=document.createTreeWalker(s,c,null,!1);let o=p(r),n=r[o],a=-1,h=0;const l=[];let d=null;for(;i.nextNode();){a++;const t=i.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&h++;void 0!==n&&n.index===a;)n.index=null!==d?-1:n.index-h,o=p(r,o),n=r[o]}l.forEach(t=>t.parentNode.removeChild(t))}const d=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,c,null,!1);for(;s.nextNode();)e++;return e},p=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;for(let r=s+1;r<e.length;r++){const s=e[r];if(t(s))return r}return-1};
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
 */
const u=(t,e)=>`${t}--${e}`;let S=!0;void 0===window.ShadyCSS?S=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),S=!1);const y=t=>e=>{const s=u(e.type,t);let n=r.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},r.set(s,n));let a=n.stringsArray.get(e.strings);if(void 0!==a)return a;const h=e.strings.join(i);if(a=n.keyString.get(h),void 0===a){const s=e.getTemplateElement();S&&window.ShadyCSS.prepareTemplateDom(s,t),a=new o(e,s),n.keyString.set(h,a)}return n.stringsArray.set(e.strings,a),a},_=["html","svg"],f=new Set,m=(t,e,s)=>{f.add(t);const i=s?s.element:document.createElement("template"),o=e.querySelectorAll("style"),{length:n}=o;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(i,t);const a=document.createElement("style");for(let t=0;t<n;t++){const e=o[t];e.parentNode.removeChild(e),a.textContent+=e.textContent}(t=>{_.forEach(e=>{const s=r.get(u(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),l(t,s)})})})(t);const h=i.content;s?function(t,e){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const{element:{content:r},parts:i}=t;if(null==s)return void r.appendChild(e);const o=document.createTreeWalker(r,c,null,!1);let n=p(i),a=0,h=-1;for(;o.nextNode();){for(h++,o.currentNode===s&&(a=d(e),s.parentNode.insertBefore(e,s));-1!==n&&i[n].index===h;){if(a>0){for(;-1!==n;)i[n].index+=a,n=p(i,n);return}n=p(i,n)}}}(s,a,h.firstChild):h.insertBefore(a,h.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const S=h.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==S)e.insertBefore(S.cloneNode(!0),e.firstChild);else if(s){h.insertBefore(a,h.firstChild);const t=new Set;t.add(a),l(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const w={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},g=(t,e)=>e!==t&&(e==e||t==t),P={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:g},v=Promise.resolve(!0),C=1,b=4,A=8,T=16,U=32,E="finalized";class N extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=v,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const r=this._attributeNameForProperty(s,e);void 0!==r&&(this._attributeToPropertyMap.set(r,s),t.push(r))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P;if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[s]},set(e){const r=this[t];this[s]=e,this._requestUpdate(t,r)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(E)||t.finalize(),this[E]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:g)(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,r=e.converter||w,i="function"==typeof r?r:r.fromAttribute;return i?i(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,r=e.converter;return(r&&r.toAttribute||w.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|U,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:P;const r=this.constructor,i=r._attributeNameForProperty(t,s);if(void 0!==i){const t=r._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=this._updateState|A,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=this._updateState&~A}}_attributeToProperty(t,e){if(this._updateState&A)return;const s=this.constructor,r=s._attributeToPropertyMap.get(t);if(void 0!==r){const t=s._classProperties.get(r)||P;this._updateState=this._updateState|T,this[r]=s._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~T}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const r=this.constructor,i=r._classProperties.get(t)||P;r._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||this._updateState&T||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|b;const s=this._updatePromise;this._updatePromise=new Promise((s,r)=>{t=s,e=r});try{await s}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&U}get _hasRequestedUpdate(){return this._updateState&b}get hasUpdated(){return this._updateState&C}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&C||(this._updateState=this._updateState|C,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~b}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}N[E]=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const x="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,O=Symbol();class R{constructor(t,e){if(e!==O)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(x?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const k=t=>{if(t instanceof R)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)},q=function(t){for(var e=arguments.length,s=new Array(e>1?e-1:0),r=1;r<e;r++)s[r-1]=arguments[r];const i=s.reduce((e,s,r)=>e+k(s)+t[r+1],t[0]);return new R(i,O)};
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
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const j=t=>t.flat?t.flat(1/0):function t(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(let r=0,i=e.length;r<i;r++){const i=e[r];Array.isArray(i)?t(i,s):s.push(i)}return s}(t);class z extends N{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){j(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?x?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof h&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}z.finalized=!0,z.render=(t,r,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const o=i.scopeName,h=e.has(r),c=S&&11===r.nodeType&&!!r.host,l=c&&!f.has(o),d=l?document.createDocumentFragment():r;if(s(t,d,Object.assign({templateFactory:y(o)},i)),l){const t=e.get(d);e.delete(d);const s=t.value instanceof n?t.value.template:void 0;m(o,d,s),a(r,r.firstChild),r.appendChild(d),e.set(r,t)}!h&&c&&window.ShadyCSS.styleElement(r.host)};export{z as L,q as c};
//# sourceMappingURL=lit-element-fdaadb84.js.map
