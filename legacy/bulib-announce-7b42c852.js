System.register(["./lit-html-29e874e8.js","./lit-element-36e90616.js"],(function(){"use strict";var e,t,s,n,i,a,o,r,c;return{setters:[function(c){e=c.u,t=c.j,s=c.a,n=c.b,i=c.c,a=c.d,o=c.e,r=c.f},function(e){c=e.L}],execute:function(){var l=864e5;function u(e){console.log("_storageUtility) "+e)}function d(){var e=t(['<span class="cta"><a href="','">',"</a></span>"]);return d=function(){return e},e}function h(){var e=t([""]);return h=function(){return e},e}function g(){var e=t(["\n      ",'\n      <div class="announce-banner','" disabled="','">\n        <i class="material-icons">','</i>\n        <span class="message">',"</span>\n        ",'\n        <button type="button" @click="','">\n          <i class="material-icons">close</i>&nbsp;<span class="txtv">DISMISS</span>\n        </button>\n      </div>\n    ']);return g=function(){return e},e}function m(){var e=t(['\n  <style type="text/css">\n    /* site-specific code for primo\'s announce-banner.js - adds padding below the search bar */ \n    prm-search-bar { padding-bottom: var(--primo-announce-padding, 60px); }\n    .__xs prm-search-bar, .__sm prm-search-bar { padding-bottom: var(--primo-announce-padding-small, 68px); }\n  </style>\n']);return m=function(){return e},e}var p={"primo-BU":0,primo:1,"primo-BULAW":2,"primo-journals":3,"primo-test":4,"primo-ISL":5,testing:6,wordpress:7,libguides:8,libcal:9,libanswers:10,"libanswers-business":11,"libanswers-spring2020":12,all:13},f=e(m()),b=function(t){function c(){return n(this,c),i(this,a(c).apply(this,arguments))}return s(c,t),o(c,[{key:"createRenderRoot",value:function(){return this}},{key:"connectedCallback",value:function(){var e=this;if(r(a(c.prototype),"connectedCallback",this).call(this),this.code in p){if(this._logToConsole("code '".concat(this.code,"' in codes_that_map dictionary.")),this.prevent_action)return void this._logToConsole("'prevent_action' stopped the API from being called!");this.dismissed=!0,this._logToConsole("making a call to the SheetsAPI for '".concat(this.code,"'."));var t=p[this.code];fetch("https://spreadsheets.google.com/feeds/list/1ElW0CUOV3LvcHuYxK2BZfFjo65a-XDrlNJtnrelA6tM/1/public/values?alt=json",{method:"GET",mode:"cors",cache:"no-store"}).then((function(e){return e.json()})).then((function(e){return e.feed.entry[t]})).then((function(t){return e._setDataHelperWithDataFromAPI(t)}))}}},{key:"_setDataHelperWithDataFromAPI",value:function(e){this._logToConsole("'show_banner' in the google sheets for '".concat(this.code,"' is '").concat(e.gsx$showbanner.$t,"'.")),"TRUE"==e.gsx$showbanner.$t&&(this.dismissed=!1,this.removeAttribute("dismissed"));var t=e.gsx$messagetext.$t;t.length>0&&(this.message=t),this.cta_url=e.gsx$messagelink.$t,this.severity=e.gsx$messageseverity.$t||"info",this.cta_text=e.gsx$ctatext.$t}},{key:"render",value:function(){var t=this,s="";switch(this.severity){case"success":s="check_circle";break;case"alert":s="announcement";break;case"warn":s="report_problem";break;case"info":default:s="info"}var n=this.message?this.message.replace(/&#39;/g,"'"):"Please standby while we address an ongoing issue, and email 'ask@bu.edu' if the problem persists";return e(g(),!window.location.pathname.includes("primo-explore")||!this.debug&&this._getDismissedValue()?e(h()):f,null!=this.severity?" "+this.severity:"",this._getDismissedValue(),s,n,this.cta_url?e(d(),this.cta_url,this.cta_text):"",(function(e){return t._toggleDismissed()}))}},{key:"_getDismissedValue",value:function(){return this.hasAttribute("dismissed")?this.hasAttribute("dismissed")&&"false"!==this.getAttribute("dismissed"):function(e,t){var s=t||!1;try{var n=localStorage.getItem(e),i=localStorage.getItem(e+"-when");n&&i&&(Date.now()-i<l?(s="true"==localStorage.getItem(e),u("unexpired '".concat(e,"' value of '").concat(n,"' read from localStorage"))):(localStorage.removeItem(e),localStorage.removeItem(e+"-when"),u("expired '".concat(e,"*' values have been removed. will be sending fallback of '").concat(t,"'"))))}catch(n){u("exception trying to get item '".concat(e,"' from localStorage: '").concat(n.message,"'. returning fallback '").concat(t,"' instead")),s=t||!1}finally{return s}}(this._dismissedId(),!1)||!1}},{key:"_dismissedId",value:function(){var e="announcement-dismissed";try{e+="-"+this.code}catch(e){this._logToConsole("error slugifying message to get new id: "+e.message)}return e}},{key:"_toggleDismissed",value:function(){var e=this._getDismissedValue();this.setAttribute("dismissed",!e),this._logToConsole("dismiss clicked, session's' '".concat(this._dismissedId(),"' value '").concat(e,"'->'").concat(this._getDismissedValue(),"'")),this.requestUpdate("dismissed",e),function(e,t){try{localStorage.setItem(e,t),localStorage.setItem(e+"-when",Date.now()),u("key '".concat(e,"' successfully set to value '").concat(t,"'."))}catch(e){u("exception trying to setItem in localStorage: "+e.message)}}(this._dismissedId(),!e)}},{key:"_logToConsole",value:function(e){this.debug&&console.log("bulib-announce) "+e)}}],[{key:"properties",get:function(){return{code:{type:String},message:{type:String},cta_text:{type:String},cta_url:{type:String},severity:{type:String},dismissed:{type:Boolean,reflect:!0},debug:{type:Boolean},prevent_action:{type:Boolean}}}}]),c}(c);window.customElements.define("bulib-announce",b)}}}));
//# sourceMappingURL=bulib-announce-7b42c852.js.map
