import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

class BULHeader extends LitElement {

  constructor(){
    super();
    this.curr_url = "https://www.bu.edu/library/";
  }

  // don't need 'slot' functionality, so lets use Light DOM
  createRenderRoot(){ return this; }

  /** store information on the current page */
  static get properties() {
    return {
      curr_url: {type: String, notify:true},
      curr_library: {type: String, notify:true},
      curr_primary: {type: String}, // research, services, about, help
      curr_search:  {type: String}, // primo, guides, wp, faq, ...
      curr_subsite: {type: String}, // guides, help, [library-names]
      logged_in:    {type: Boolean} 
    };
  }

  /** render the html (with 'bulib-search' wc) to the page  */
  render() {
    this._setCurrSiteInfo();
    return html`
      <link rel="stylesheet" type="text/css" href="../assets/css/common.css">
      <link rel="stylesheet" type="text/css" href="../search/search.js">
      <link rel="stylesheet" type="text/css" href="../assets/icons/bulib-logo.png">
      <!--link rel="stylesheet" type="text/css" href="../assets/css/header.css"-->
      <style type="text/css">
        nav, a { color: white; }
        nav > * > h1 { margin-top: 0px; }
        .primary-navbar { background-color: #212121; display: flex; }
        .secondary-navbar { background-color: lightgrey; display: flex; }
      </style>
      <nav>
        <div class="primary-navbar">
          <div class="brand">
            <a title="BU Libraries Homepage" href="https://bu.edu/library/">
              <img id="bu-logo" src="https://search.bu.edu/static/img/site-title-alt.png"><strong>Libraries</strong>
            </a>
          </div>
          <div class="site-links">
            <ul class="nav navbar-nav inline-list">
              <li><a href="http://www.bu.edu/library/research/">Research</a></li>
              <li><a href="http://www.bu.edu/library/services/">Services</a></li>
              <li><a href="http://www.bu.edu/library/about/">About</a></li>
              <li><a href="http://askalibrarian.bu.edu/">Help</a></li>
            </ul>
          </div>
          <div class="account-section">
            <strong>My Account | v |</strong>
          </div>
        </div>
        <div class="secondary-nav">
          <h1>SUBSITE_NAME</h1>
          <div class="breadcrumbs">
            <slot id="sitemap" name="sitemap"></slot>
          </div>
          <div class="searchbar">
            <bulib-search></bulib-search>
          </div>
        </div>
      </nav>`;
  }
    
  /** once html is on the page, add classes based on 'curr_*' values */
  updated(){
    // set primary nav and secondary nav list items/breadcrumbs 'active' styling
    console.log("updated): curr_url = '"+ this.curr_url +"'");
  }
  
  /** update current properties to inform what to display */
  _setCurrSiteInfo(){
     let currentUrl = (this.curr_url)? this.curr_url : window.location.href;
     console.log("currentUrl: " + currentUrl);
     
     // LibGuides
     if(currentUrl.includes("/library/research/guides")){ }
  }
  
}

customElements.define('bulib-hdr', BULHeader);
