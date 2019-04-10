import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@0.6.4/lit-element.js?module';

import {getSiteCodeFromUrl, getLibraryCodeFromUrl, makeLibraryUrlList} from '../_helpers/lib_info_helper.js';

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
    return html`
      <link rel="stylesheet" type="text/css" href="/assets/css/common.css">
      <link rel="stylesheet" type="text/css" href="/src/header/header.css">
      <script src="https://cdn.jsdelivr.net/gh/bulib/bulib-wc@libhours-v0.9/src/libhours/libhours.min.js" type="module"></script>
      <style>
        a { text-decoration: none; }
        .right { float:right; }
        .mvn { margin-top: 0px !important; margin-bottom: 0px !important; }
        .primary-nav-left, .nav-menu { position: fixed; }
      </style>
      <div class="header-wrapper">
        <nav>
          <div class="primary-navbar">
            <div class="primary-nav-left dropdown-header">
              <a title="BU Libraries Homepage" href="http://bu.edu/library/">
                <img id="bu-logo" src="https://raw.githubusercontent.com/bulib/bulib-wc/header/assets/icons/bulib-logo.png">
              </a>
              <div class="dropdown-content">Hello World<br/><br/></div>
            </div>
            <div class="main-menu-items primary-nav-main">
              <ul id="site-links" class="nav-menu">
                <li id="subsite-about"><a href="https://www.bu.edu/library/research/">About</a></li>
                <li id="subsite-research"><a href="https://www.bu.edu/library/services/">Search</a></li>
                <li id="subsite-guides"><a href="https://www.bu.edu/library/about/">Guides</a></li>
                <li id="subsite-services" class="dropdown-header">
                  <a href="https://www.bu.edu/library/about/">Services</a>
                  <ul class="dropdown-content">
                    <li><a href="#">general</a></li>
                    <li><a href="#">dioa</a></li>
                    <li><a href="#">disc</a></li>
                  </ul>
                </li>
                <li id="subsite-collections" class="dropdown-header">
                  <a href="https://www.bu.edu/library/about/">Collections</a>
                  <ul class="dropdown-content">
                    <li><a href="#">hgar</a></li>
                    <li><a href="#">open bu</a></li>
                  </ul>
                </li>
                <li id="subsite-help">
                  <a href="http://askalibrarian.bu.edu/">Help</a>
                </li>
              </ul>
            </div>
            <div class="primary-nav-right phm right">
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
