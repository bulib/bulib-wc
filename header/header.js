import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

const debug = false;
const lsLibraryCodes = ["mugar-memorial","african-studies","medlib","astronomy","lawlibrary","hgar","music","management","pickering-educational","sthlibrary","sel","stone-science"];
const lsLibraryOptions = {
  "mugar-memorial":"Mugar Memorial",
  "african-studies":"African Studies",
  "medlib":"Alumni Medical",
  "astronomy":"Astronomy",
  "lawlibrary":"Fineman and Pappas Law",
  "hgar":"Archival Research Center",
  "music":"Music Library",
  "management":"Frederick S. Pardee Managment Library",
  "pickering-educational":"Pickering Educational Resources",
  "sthlibrary":"School of Theology",
  "sel":"Science and Engineering",
  "stone-science":"Stone Science",
};

class BULHeader extends LitElement {

  constructor(){
    super();
    this.curr_url = window.location.href;
    this.curr_search = "wp";
  }

  // don't need 'slot' functionality, so lets use Light DOM
  createRenderRoot(){ return this; }

  /** store information on the current page */
  static get properties() {
    return {
      curr_url: {type: String, notify:true},
      curr_primary: {type: String}, // research, services, about, help
      curr_secondary: {type: String}, // guides, help, [library-names]
      curr_search: {type: String}, // primo, guides, wp, faq, ...
      str_options: {type: String}, // cascade str_options down to search
      logged_in: {type: Boolean}
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
        .primary-navbar, a { color: white; }
        .primary-navbar > * > h1 { margin-top: 0px; }
        .main-menu-items > ul > li.active > a { color: #FFC20E; }
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
          <div class="main-menu-items">
            <ul id="site-links" class="nav navbar-nav inline-list">
              <li id="subsite-research"><a href="http://www.bu.edu/library/research/">Research</a></li>
              <li id="subsite-services"><a href="http://www.bu.edu/library/services/">Services</a></li>
              <li id="subsite-about"><a href="http://www.bu.edu/library/about/">About</a></li>
              <li id="subsite-help"><a href="http://askalibrarian.bu.edu/">Help</a></li>
            </ul>
          </div>
          <div class="account-section">
            <strong>My Account | v |</strong>
          </div>
        </div>
        <div class="secondary-nav">
          <slot id="sitemap" name="sitemap">
            <h1>Subsite: ${this.curr_secondary}</h1>
          </slot>
          <div class="breadcrumbs">
            <slot id="sitemap" name="sitemap"></slot>
          </div>
          <div class="searchbar">
            <bulib-search str_default="${this.curr_search}" str_options="${this.str_options}"></bulib-search>
          </div>
        </div>
      </nav>`;
  }
    
  /** once html is on the page, add classes based on 'curr_*' values */
  updated(){
    // set primary nav 'active' styling
    let i, li; 
    let lsListItems = document.getElementById("site-links").getElementsByTagName("li");
    for(i = 0; i<lsListItems.length; i++) {
      li = lsListItems[i];
      if((li.id).includes(this.curr_primary)){ li.classList.add("active"); } 
      else{ li.classList.remove("active"); }
    }
  }
  
  /** update current properties to inform what to display */
  _setCurrSiteInfo(){
    let currentUrl = (this.curr_url)? this.curr_url : window.location.href;

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
        
        // set the 'curr_secondary' to the 'library_name' (.bu.edu/library/{library_name}/.../*)
        this.curr_secondary = this.curr_library || "_secondary-site_";
        let libraryNames = lsLibraryCodes;
        for(let i=0; i<libraryNames.length; i++){
          let libCode = libraryNames[i];
          if(currentUrl.includes(libCode)){
            this.curr_secondary = lsLibraryOptions[libCode];
          }
        }
      }
    }
    
    // add debug info
    if(debug){
      console.log("curr_primary: " + this.curr_primary);
      console.log("curr_secondary: " + this.curr_secondary);
      console.log("curr_search: " + this.curr_search);
    }
  }
  
}

customElements.define('bulib-hdr', BULHeader);