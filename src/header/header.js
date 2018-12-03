import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

const debug = true;
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
      <!-- foundation topbar styling/js -->
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/3.2.5/javascripts/jquery.foundation.topbar.js">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/3.2.5/javascripts/modernizr.foundation.min.js"></script>

      <!-- main bulib-header -->
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/bulib/bulib-wc@header-v0.3/src/header/header.min.css">
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/bulib/bulib-wc@header-v0.3/assets/css/common.css">
      <link rel="stylesheet" type="text/css" href="./header.css">
      <style> a { text-decoration: none; }</style>
      <nav>
        <div class="primary-navbar">
          <div class="brand primary-nav-left" >
            <a title="BU Libraries Homepage" href="http://bu.edu/library/">
              <img id="bu-logo" src="https://raw.githubusercontent.com/bulib/bulib-wc/header/assets/icons/bulib-logo.png">
            </a>
          </div>
          <div class="main-menu-items primary-nav-main">
            <ul id="site-links" class="nav navbar-nav inline-list">
              <li id="subsite-research"><a href="http://www.bu.edu/library/research/">Research</a></li>
              <li id="subsite-services"><a href="http://www.bu.edu/library/services/">Services</a></li>
              <li id="subsite-about"><a href="http://www.bu.edu/library/about/">About</a></li>
              <li id="subsite-help" class="active"><a href="http://askalibrarian.bu.edu/">Help</a></li>
            </ul>
          </div>
          <div class="flex-end primary-nav-right">
            <bulib-libsel library="mugar-memorial"></bulib-libsel>
          </div>
        </div>
        <div class="secondary-navbar pvm">
          <div class="pal" class="secondary-nav-left">
            <slot name="secondary-nav-left"></slot>
          </div>
          <div class="pal secondary-nav-main">
            <slot name="secondary-nav-main"></slot>
          </div>
          <div class="secondary-nav-right">
            <bulib-search str_default="${this.curr_search}" str_options="${this.str_options}"></bulib-search>
          </div>
        </div>
      </nav>`;
  }

  /** upon connection to the DOM, update current properties to inform what to display */
  connectedCallback(){
    let currentUrl = (local)? this.curr_url : window.location.href;

    this.curr_library = "";
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
        this.curr_library = "mugar-memorial";
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

customElements.define('bulib-header', BULHeader);
