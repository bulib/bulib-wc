import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';
import {getLibraryCodeFromUrl} from '../_helpers/lib_info_helper.js';

const debug = false;
const local = true;

/** Reactive/responsive header with custom subsite display, bulib-search integration */
class BULHeader extends LitElement {

  constructor(){ super(); }

  /** store information on the current page */
  static get properties() {
    return {
      /** current url used in testing to determine site */
      curr_url: {type: String, notify:true},
      /** current primary site [e.g. 'research', 'services', 'about', 'help'] */
      curr_primary: {type: String},
      /** current secondary site (within each primary) [e.g. 'guides', 'help', '{library-names}'] */
      curr_secondary: {type: String}, 
      /** currently active search style [e.g. 'primo', 'guides', 'wp', 'faq', ... ] */
      curr_search: {type: String}, 
      /** options included in search dropdown (passed to <-search>) */
      str_options: {type: String}, 
      /** whether or not the current user is logged in */
      logged_in: {type: Boolean}
    };
  }

  /** render the html (with 'bulib-search' wc) to the page  */
  render() {
    return html`
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/bulib/bulib-wc@header-v0.9.5/assets/css/common.min.css">
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/bulib/bulib-wc@header-v0.9.5/src/header/header.min.css">
      <style> 
        a { text-decoration: none; }
        .primary-navbar, .secondary-navbar > div { vertical-align: bottom; }
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
            <ul id="site-links" class="nav navbar-nav inline-list">
              <li id="subsite-research"><a href="https://www.bu.edu/library/research/">Research</a></li>
              <li id="subsite-services"><a href="https://www.bu.edu/library/services/">Services</a></li>
              <li id="subsite-about"><a href="https://www.bu.edu/library/about/">About</a></li>
              <li id="subsite-help" class="active"><a href="http://askalibrarian.bu.edu/">Help</a></li>
            </ul>
          </div>
          <div class="primary-nav-right phm right mvm">
            <slot name="primary-nav-right">
              <bulib-libsel class="right"></bulib-libsel>
            </slot>
          </div>
        </div>
        <div class="secondary-navbar">
          <div class="secondary-nav-left pam">
            <slot name="secondary-nav-left">
              <strong>${this.curr_secondary}</strong>
            </slot>
          </div>
          <div class="secondary-nav-main pam">
            <slot name="secondary-nav-main"></slot>
          </div>
          <div class="secondary-nav-right pam">
            <bulib-search str_selected="${this.curr_search}" str_options="${this.str_options}" class="txtr"></bulib-search>
          </div>
        </div>
      </nav>`;
  }

  /** for production purposes, react to url updating when the component is first loaded */
  connectedCallback(){ 
    if(!local) { this._urlUpdated(); } 
  }

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
    let lsListItems = this.shadowRoot.querySelector("#site-links").getElementsByTagName("li");
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
      this.curr_secondary = "Ask a Librarian";
      this.curr_search  = "help";
    }else if(currentUrl.includes("buprimo") || currentUrl.includes("exlibrisgroup")){
      this.curr_primary = "search";
      this.curr_secondary = "Search";
      this.curr_search  = "primo";
    }else if(currentUrl.includes(".bu.edu/library")){

      // Guides
      if(currentUrl.includes("/research")){
       this.curr_primary = "research";
       this.curr_secondary = "Guides";
       this.curr_search  = "guides";
      }

      // Services
      else if(currentUrl.includes("/services")){
        this.curr_primary = "services";
        this.curr_secondary = "Services";
        this.curr_search  = "wp";
      }

      // About
      else{
        this.curr_primary = "about";
        this.curr_search = "wp";
        this.curr_secondary = getLibraryCodeFromUrl(currentUrl) || "mugar-memorial";
      }
    }
    
    // TODO remove and deal with changes in a nicer, more standardized way
    if(old_primary && old_primary !== this.curr_primary) { this._primaryUpdated(); }

    // add debug info
    if(debug){
      console.log(`bulib-header) curr_primary: '${this.curr_primary}', curr_secondary: '${this.curr_secondary}'', curr_search: '${this.curr_search}'`);
    }
  }

}

customElements.define('bulib-header', BULHeader);
