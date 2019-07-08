import {LitElement, html} from 'lit-element/lit-element';
import {getSiteCodeFromUrl, getLibraryCodeFromUrl} from '../_helpers/lib_info_helper.js';

/** stored values for the sitemap */
const sitemap_values = {
  "wordpress":{
    "header":"Boston University Libraries",
    "links":[
      {"title":"InterLibrary Borrowing","href":"/library/services/ill/"},
      {"title":"Course Reserves",       "href":"/library/services/reserves/"},
      {"title":"For Alumni",            "href":"/library/services/alumni/"},
      {"title":"Staff Directory",       "href":"/library/about/who-we-are/staff-directory/"},
      {"title":"Maps & Floorplans",     "href":"/library/about/maps-floorplans/"},
      {"title":"For Faculty",           "href":"/library/services/for-faculty/"}
    ]
  },"askalibrarian":{
    "header":"Ask A Librarian",
    "links":[
      {"title":"Research Guides by Subject",    "href":"/guides"},
      {"title":"Course Guides",                 "href":"https://www.bu.edu/library/research/guides/course-guides/"},
      {"title":"How-To Guides",                 "href":"https://www.bu.edu/library/help/how-to/"},
      {"title":"Pardee Management Library FAQs","href":"/businessFAQs/"},
      {"title":"Make a Research Appointment",   "href":"https://www.bu.edu/library/services/reference/appointments/"}
    ]
  },"guides":{
    "header":"Library Guides",
    "links":[
      {"title":"Research Guides by Subject",  "href":"/guides"},
      {"title":"Course Guides",               "href":"https://www.bu.edu/library/research/guides/course-guides/"},
      {"title":"How-To Guides",               "href":"https://www.bu.edu/library/help/how-to/"},
      {"title":"Make a Research Appointment", "href":"https://www.bu.edu/library/services/reference/appointments/"}
    ]
  }
};

/** Reactive/responsive footer providing slotted middle section and customizable LoCoSo data */
export default class BULibFooter extends LitElement {

  constructor(){
    super();
    this.library = "help";
  }

  static get properties() {
    return {
      /** provide window into setting displayed 'locoso' contact data */
      library: {type: String},
      /** key for the subsite (used to populate the sitemap) */
      host_site: {type: String},
      
      debug: {type: Boolean},
      curr_url: {type: String}
    };
  }

  /** upon the element's first connection to the DOM, get the url and use it to determine $this.library */
  updated(){
    let current_url = this.curr_url? this.curr_url : window.location.href;
    
    // determine site
    let old_site = this.host_site;
    let main_site = getSiteCodeFromUrl(current_url, this.debug);
    if(["about","research","services"].includes(main_site)){ this.host_site = "wordpress"; }
    else if(main_site == "help"){ this.host_site = "askalibrarian"; }
    else if(main_site == "guides"){ this.host_site = "guides"; }
    else{ this.host_site = "askalibrarian"; }
    if(old_site != this.host_site){
      this._logToConsole(`'host_site' changed from '${old_site}' to '${this.host_site}'`);
    }
    
    // determine library
    let old_library = this.library;
    let lib_code = this.curr_url? getLibraryCodeFromUrl(current_url, this.debug) : this.library;
    this.library = lib_code;
    if(old_library != this.library){
      this._logToConsole(`library changed from '${old_library}' to '${this.library}'.`);
    }
  }

  render() {
    // fill in the sitemap middle section of the footer
    let sitemap_data = sitemap_values[this.host_site] || sitemap_values["askalibrarian"];
    let links = sitemap_data["links"];
    let sitemap_content = html`
      <h3>${sitemap_data["header"]}</h3>
      <ul class="multi-column no-bullet txtl">
        ${links.map((l) => html`<li><a class="white-link pvm" href="${l.href}">${l.title}</a></li>`)}
      </ul>
    `;

    // render the main content of the component
    return html`
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/bulib/bulib-wc@latest/assets/css/common.css">
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/bulib/bulib-wc@latest/src/footer/footer.css">
      <style>
        /* firefox fix to stop the 'Follow Us' from becoming centered */
        ::slotted(h3) { text-align: left; }
      </style>
      <div class="footer-wrapper">
        <footer>
          <div class="ftr-left">
            <div id="bu-content">
              <div class="left txtc bu-logo">
                <br />
                <a href="https://www.bu.edu/" title="Boston University Home">
                  <img alt="boston university logo" src="http://www.bu.edu/academics/files/bu-logo.gif">
                </a>
                <br /><br />
                <small>
                  <a class="white-link" target="_blank" title="Copyright" 
                     href="https://www.bu.edu/copyright">&copy; Copyright ${new Date().getFullYear()}</a>
                </small>
                <br />
                <small>
                  <a class="white-link" target="_blank" title="Privacy Statement" 
                     href="https://www.bu.edu/policies/information-security-home/digital-privacy-statement/">Privacy Statement</a>
                </small>
                <br /><br />
              </div>
                <ul class="no-bullet ptl">
                  <li><a class="white-link" href="https://www.bu.edu/library/" title="Libraries Home">Libraries Home</a></li>
                  <li><a class="white-link" href="http://bu.edu/library/search" title="Search available/licensed content">Libraries Search</a></li>
                  <li><a class="white-link" href="http://bu.edu/library/about" title="Information regarding various BU Libraries">Library Locations</a></li>
                  <li><a class="white-link" href="https://askalibrarian.bu.edu/" title="Help">Help</a></li>
                </ul>
            </div>
          </div>
          <div class="ftr-middle txtc">
            <div id="sitemap"><slot name="sitemap">${sitemap_content}</slot></div>
          </div>
          <div class="ftr-right">
            <div id="ftr-locoso">
              <bulib-locoso library="${this.library}" link_class="white-link" debug></bulib-locoso>
            </div>
          </div>
        </footer>
      </div>
    `;
  }
  
  _logToConsole(message){
    if(this.debug){ console.log("bulib-footer) " + message); }
  }

}
