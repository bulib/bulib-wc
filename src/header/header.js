import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@0.6.4/lit-element.js?module';
import {getLibraryCodeFromUrl} from '../_helpers/lib_info_helper.js';

const debug = false;
const local = true;

/** Reactive/responsive header with custom subsite display, bulib-search integration */
class BULHeader extends LitElement {

  /** store information on the current page */
  static get properties() {
    return {
      // current url used in testing to determine site
      curr_url: {type: String},
      // current primary site [e.g. 'research', 'services', 'about', 'help'] 
      curr_primary: {type: String},
      // current library (sent to hours) 
      library: {type: String}
    };
  }

  /** render the html (with 'bulib-search' wc) to the page  */
  render() {
    return html`
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/bulib/bulib-wc@header-v0.9.6/assets/css/common.min.css">
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/bulib/bulib-wc@header-v0.9.6/src/header/header.min.css">
      <style>
        a { text-decoration: none; }
        .right { float:right; }
        .mvm { margin: 15px 0px; }
        .txtr { text-align: right; }
      </style>
      <nav>
        <div class="primary-navbar">
          <div class="primary-nav-left">
            <a title="BU Libraries Homepage" href="http://bu.edu/library/">
              <img id="bu-logo" class="pam" src="https://raw.githubusercontent.com/bulib/bulib-wc/header/assets/icons/bulib-logo.png">
            </a>
          </div>
          <div class="main-menu-items primary-nav-main">
            <ul id="site-links" class="inline-list">
              <li id="subsite-research"><a href="https://www.bu.edu/library/research/">Research</a></li>
              <li id="subsite-services"><a href="https://www.bu.edu/library/services/">Services</a></li>
              <li id="subsite-about"><a href="https://www.bu.edu/library/about/">About</a></li>
              <li id="subsite-help"><a href="http://askalibrarian.bu.edu/">Help</a></li>
            </ul>
          </div>
          <div class="primary-nav-right phm right">
            <div class="mvm right"><bulib-hours library="${this.library}" link_class="white-link"></bulib-hours></div>
          </div>
        </div>
      </nav>`;
  }
  
  connectedCallback(){ this._urlUpdated(); }

  /** for development purposes, react to manual changes to `this.curr_url` via _urlUpdated */
  attributeChangedCallback(name, oldValue, newValue){
    super.attributeChangedCallback(name, oldValue, newValue);
    if(debug){ console.log(`bulib-header) attributeChangedCallback() called, changing '${name}' from '${oldValue}' to '${newValue}'...`); }
    switch(name){
      case "curr_url":      this._urlUpdated(); break;
      case "curr_primary":  this._primaryUpdated(); break;
      default: break;
    }
  }

  /** set primary nav 'active' styling */
  _primaryUpdated(){
    let i, li;
    let siteLinksElem = this.shadowRoot.querySelector("#site-links");
    if(!siteLinksElem){ return; }
    
    let lsListItems = siteLinksElem.getElementsByTagName("li");
    for(i = 0; i<lsListItems.length; i++) {
      li = lsListItems[i];
      if((li.id).includes(this.curr_primary)){ li.classList.add("active"); }
      else{ li.classList.remove("active"); }
    }
  }

  /** set the primary, secondary, and search information according to the currentUrl  */
  _urlUpdated(){
    let currentUrl = (local)? this.curr_url : window.location.href;

    let old_primary = this.curr_primary;
    if(currentUrl.includes("askalibrarian")){
      this.curr_primary = "help";
    }else if(currentUrl.includes("buprimo") || currentUrl.includes("exlibrisgroup")){
      this.curr_primary = "search";
    }else if(currentUrl.includes(".bu.edu/library")){

      if(currentUrl.includes("/research")){ this.curr_primary = "research"; }
      else if(currentUrl.includes("/services")){ this.curr_primary = "services"; }
      else{ this.curr_primary = "about"; }
      this.library = getLibraryCodeFromUrl(currentUrl);
    }

    // TODO remove and deal with changes in a nicer, more standardized way
    if(!old_primary || old_primary !== this.curr_primary) { this._primaryUpdated(); }

    // add debug info
    if(debug){
      console.log(`bulib-header) curr_primary: '${this.curr_primary}'`);
    }
  }

}

customElements.define('bulib-header', BULHeader);
