import{h as t}from"./lit-html-2435d3b6.js";import{L as l}from"./lit-element-fdaadb84.js";import{s}from"./google_analytix-b0686824.js";import{g as e}from"./lib_info_helper-f5ea09c7.js";window.customElements.define("bulib-locoso",class extends l{static get properties(){return{link_class:{type:String},library:{type:String,notify:!0},debug:{type:Boolean}}}render(){let l=e(this.library)||{};this._logToConsole("raw lib_data from lib_info_helper: \n"+JSON.stringify(l));let s,i=l.name||"BU Libraries",o=l.address||["771 Commonwealth Avenue","Boston, MA 02215"],a=l.website||"https://www.bu.edu/library/about",r=l.contacts||{phone:"617-353-2700",email:"ask@bu.edu",text:"617-431-2427"},n=this._prepareContacts(r),c=l.social||{},h=this._prepareSocial(c),p=this.library&&"help"!=this.library;return this._logToConsole("lib_name: "+i+", include_libhours: "+p),s=h.length<1?t``:t`
        <h3>Follow Us</h3>
        <ul aria-description="list of social media accounts" class="no-bullet inline-list plm">
        ${h.map(l=>t`<li><a title="${l.text}" class="${this.link_class}" @click="${t=>{this._logGAEvent(l.text)}}" 
                      href="${l.url}" target="_blank"><img alt="${l.text} icon" class="sm-icon ${this.link_class}"
                      src="https://cdn.jsdelivr.net/npm/bulib-wc@latest/dist/icons/icons8-${l.text}-48.png"></a></li>`)}
        </ul>
      `,t`
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bulib-wc@latest/dist/bundle.css">
      <style>
        /* layout and responsiveness */
        .locoso-left { flex: 1; }
        .locoso-wrapper { display: flex; }

        /* list styles, */
        .locoso-left ul, .locoso-left ol { margin: 5px 0px; padding-left: 0; padding-bottom: 10px; }

        /* padding and margins */
        .prm { margin-right: 10px; padding-right: 10px; }
        .sm-icon { width: 30px; height: 30px; border: solid transparent 1px; }
        .sm-icon:hover { width: 30px; height: 30px; border: solid white 1px; }
      </style>
      <div class="locoso-wrapper">
        <div class="locoso-left">
          <div class="txtv">
            <h3 class="inline">Visit Us</h3>&nbsp;
            ${p?t`-&nbsp;<bulib-hours class="inline" link_class="${this.link_class}" library="${this.library}" short></bulib-hours>`:t``}
          </div>
          <ol class="no-bullet" aria-label="address">
            <li>${i}</li>
            ${o.map(l=>t`<li>${l}</li>`)}
            <li>
              <small>
                <a title="${i} website" class="${this.link_class}" @click="${t=>{this._logGAEvent("website")}}"
                   aria-label="Open library site" href="${a}">website</a>
                <a title="get directions" class="${this.link_class}" @click="${t=>{this._logGAEvent("directions")}}"
                   aria-label="Directions to the Library" href="${"https://google.com/maps/search/"+encodeURI("Boston University "+i)}" 
                   target="_blank">directions &raquo;</a>
              </small>
            </li>
          </ol>
        </div>
        <div class="locoso-right">
          <h3 class="inline">Contact Us</h3>
          <ul class="no-bullet" aria-label="contact-links">
            ${n.map(l=>t`
              <li>${l.text} <a class="${this.link_class}" href="${l.url}" 
                               @click="${t=>{this._logGAEvent(l.text)}}">${l.val}</a>
              </li>`)}
          </ul>
          ${s}
        </div>
      </div>
    `}_prepareContacts(t){if(Object.keys(t).length<1)return{};let l=[];return t.phone&&l.push({text:"call",url:"tel:"+t.phone,val:t.phone}),t.email&&l.push({text:"email",url:"mailto:"+t.email,val:t.email}),t.text&&l.push({text:"text",url:"sms:"+t.text,val:t.text}),t.fax&&l.push({text:"fax",url:"fax:"+t.fax,val:t.fax}),this._logToConsole(`${l.length.toString()} items found for 'contacts'.`),l}_prepareSocial(t){if(Object.keys(t).length<1)return[];let l=[];return t.twitter&&l.push({text:"twitter",url:"http://twitter.com/"+t.twitter}),t.facebook&&l.push({text:"facebook",url:"http://facebook.com/"+t.facebook}),t.instagram&&l.push({text:"instagram",url:"https://instagram.com/"+t.instagram}),t.flickr&&l.push({text:"flickr",url:"https://www.flickr.com/photos/"+t.flickr}),t.tumblr&&l.push({text:"tumblr",url:"http://"+t.tumblr+".tumblr.com/"}),this._logToConsole(`${l.length.toString()} items found for 'social'.`),l}_logGAEvent(t){s("bulib-locoso",t,this.library)}_logToConsole(t){this.debug&&console.log("bulib-locoso) "+t)}});
//# sourceMappingURL=bulib-locoso-891f9470.js.map
