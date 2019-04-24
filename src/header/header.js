import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@0.6.4/lit-element.js?module';

import {getSiteCodeFromUrl, getLibraryCodeFromUrl} from '../_helpers/lib_info_helper.js';

const primary_header_list = [
  {"title":"About",  "id":"subsite-about", "url":"http://bu.edu/library/"},
  {"title":"Research", "id":"subsite-research", "url":"http://bu.edu/library/research"},
  // {"title":"Guides", "id":"subsite-guides", "url":"http://library.bu.edu/guides"},
  {"title":"Services", "id":"subsite-services", "url":"http://bu.edu/library/services",
    "sublist":[
      {"title":"Services Home", "url":"http://bu.edu/library/services"},
      {"title":"Digital Scholarship Services", "url":"http://bu.edu/disc"},
      {"title":"Digital Initiatives and Open Access", "url":"http://bu.edu/dioa/"},
      {"title":"Data Services", "url":"http://bu.edu/data"}
    ]
  },
  {"title":"Collections", "id":"subsite-collections", "url":"",
    "sublist":[
      {"title":"Open BU", "url":"https://open.bu.edu/"},
      {"title":"BU Archives", "url":"http://archives.bu.edu"}
    ]
  },
  {"title":"Help", "id":"subsite-help", "url":"http://askalibrarian.bu.edu/"}
];
const library_header_list = [
  {"id":"lib-african", "title":"African Studies", "url":""},
  {"id":"lib-astronomy", "title":"Astronomy", "url":""},
  {"id":"lib-disc", "title":"Digital Collections", "url":""},
  {"id":"lib-hgar", "title":"HGARC",     "url":""},
  {"id":"lib-mugar", "title":"Mugar",     "url":""},
  {"id":"lib-music", "title":"Music",     "url":""},
  {"id":"lib-openbu", "title":"OpenBU",    "url":""},
  {"id":"lib-pardee", "title":"Pardee",    "url":""},
  {"id":"lib-mgmt", "title":"Pickering", "url":""},
  {"id":"lib-scieng", "title":"Sci & Eng", "url":""},
  {"id":"lib-stone", "title":"Stone",     "url":""},
  {"id":"lib-other", "title":"Other Libraries", "url":""},
];

/** Reactive/responsive header with custom subsite display, bulib-search integration */
class BULHeader extends LitElement {
  
  /** store information on the current page */
  static get properties() {
    return {
      // current library (sent to hours) 
      library: {type: String},
      site: {type: String},
      
      // current url used in testing to determine site
      curr_url: {type: String},
      // debugging tools
      debug: {type: Boolean}
    };
  }

  /** render the html (with 'bulib-search' wc) to the page  */
  render() {
    let domain = this.debug? "" : "https://cdn.jsdelivr.net/gh/bulib/bulib-wc";
    let library_list_html = html`
      <ul class="library-list no-bullet">${library_header_list.map((item) => this._prepare_list_option(item))}</ul>
    `;
    
    return html`
      <link rel="stylesheet" type="text/css" href="${domain}/assets/css/common.css">
      <link rel="stylesheet" type="text/css" href="${domain}/src/header/header.css">
      <script src="${domain}/src/libhours/libhours.js" type="module"></script>
      <style>
        a { text-decoration: none; }
        .right { float:right; }
      </style>
      <div class="header-wrapper">
        <nav>
          <div class="primary-navbar">
            <div class="primary-nav-left">
              <bulib-dropdown>
                <span slot="header" class="dropdown-header">
                  <a title="BU Libraries Homepage">
                    <img id="bu-logo" src="https://raw.githubusercontent.com/bulib/bulib-wc/header/assets/icons/bulib-logo.png">
                  </a>
                </span>
                <div slot="content" class="dropdown-content">${library_list_html}</div>
              </bulib-dropdown>
            </div>
            <div class="menu-items-wrapper primary-nav-main">
              <ul id="site-links" class="nav-menu">
                ${primary_header_list.map((item) => this._prepare_list_option(item))}
              </ul>
            </div>
            <div class="primary-nav-right right">
              <div class="right"><bulib-hours library="${this.library}" link_class="white-link" verbose></bulib-hours></div>
            </div>
          </div>
        </nav>
      </div>`;
  }
  
  /** when the web component is first added to the DOM, set the url. */
  connectedCallback(){ this._urlUpdated(); }

  /** for development purposes, react to manual changes to `this.curr_url` via _urlUpdated */
  attributeChangedCallback(name, oldValue, newValue){
    super.attributeChangedCallback(name, oldValue, newValue);
    if(name == "curr_url"){ this._urlUpdated(); }
  }

  /** set primary nav 'active' styling */
  updated(){
    let i, li;
    let siteLinksElem = this.shadowRoot.querySelector("#site-links");
    if(!siteLinksElem){ return; }
    
    let lsListItems = siteLinksElem.getElementsByTagName("li");
    for(i = 0; i<lsListItems.length; i++) {
      li = lsListItems[i];
      if((li.id).includes(this.site)){ li.classList.add("active"); }
      else{ li.classList.remove("active"); }
    }
  }

  _prepare_list_option(item){ 
    let innerHTML = item.hasOwnProperty('sublist')
      ? html`<bulib-dropdown>
              <a class="dropdown-header" slot="header">${item.title}</a>
              <ul slot="content">
                ${item.sublist.map((sub_item) => html`<li><a href="${sub_item.url}" class="phm">${sub_item.title}</a></li>`)}
              </ul>
             </bulib-dropdown>`
      : html`<a href="${item.url}">${item.title}</a>`;
    return html`<li id="${item.id}">${innerHTML}</li>`;
  }

  /** set the primary, secondary, and search information according to the currentUrl  */
  _urlUpdated(){
    let old_site = this.site;
    let currentUrl = (this.curr_url)? this.curr_url : window.location.href;
    this.site = getSiteCodeFromUrl(currentUrl, this.debug);
    this.library = getLibraryCodeFromUrl(currentUrl, this.debug);

    // TODO remove and deal with changes in a nicer, more standardized way
    if(!old_site || old_site != this.site) { 
      this._logToConsole(`curr_primary: changed from '${old_site || ""}' to '${this.site}'.`);
    }
  }
  
  _logToConsole(message){
    if(this.debug){ console.log("bulib-header) " + message); }
  }

}

customElements.define('bulib-header', BULHeader);
