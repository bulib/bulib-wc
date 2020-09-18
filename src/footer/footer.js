import {LitElement, html, css} from 'lit-element/lit-element';
import {getSiteCodeFromUrl, getLibraryCodeFromUrl} from '../_helpers/lib_info_helper.js';

import {sendGAEventFromClickEvent} from '../_helpers/google_analytix';

/** stored values for the sitemap */
const sitemap_values = {
    "wordpress":{
    "header":"About the Libraries",
    "links":[
      {"title":"About Us",              "href":"https://www.bu.edu/library/about/"},
      {"title":"Location Hours",        "href":"https://www.bu.edu/library/about/hours/"},
      {"title":"Visiting the Libraries","href":"https://www.bu.edu/library/help/visiting-the-libraries/"},
      {"title":"Course Reserves",       "href":"https://www.bu.edu/library/services/reserves/"},
      {"title":"Research Guides",       "href":"https://library.bu.edu/guides/"},
      {"title":"Staff Directory",       "href":"https://www.bu.edu/library/about/who-we-are/staff-directory/"}
    ]
  },"askalibrarian":{
    "header":"Ask A Librarian",
    "links":[
      {"title":"Subject Guides",      "href":"https://library.bu.edu/guides/"},
      {"title":"Course Guides",       "href":"https://www.bu.edu/library/research/guides/course-guides/"},
      {"title":"How-To Guides",       "href":"https://www.bu.edu/library/help/how-to/"},
      {"title":"Business FAQs",       "href":"https://askalibrarian.bu.edu/businessFAQs/"},
      {"title":"Make an Appointment", "href":"https://www.bu.edu/library/services/reference/appointments/"},
      {"title":"General Help",        "href":"https://www.bu.edu/library/help/"}
    ]
  },"guides":{
    "header":"Library Guides",
    "links":[
      {"title":"Subject Guides",      "href":"https://library.bu.edu/guides/"},
      {"title":"Course Guides",       "href":"https://www.bu.edu/library/research/guides/course-guides/"},
      {"title":"How-To Guides",       "href":"https://www.bu.edu/library/help/how-to/"},
      {"title":"Make an Appointment", "href":"https://www.bu.edu/library/services/reference/appointments/"}
    ]
  },"primo":{
    "header":"BU Libraries Search",
    "links":[
      {"title":"My Library Account",  "href":"https://www.bu.edu/library/account/"},
      {"title":"Advanced Search",     "href":"https://www.bu.edu/library/advancedsearch/"},
      {"title":"Browse Search",       "href":"https://buprimo.hosted.exlibrisgroup.com/primo-explore/browse?vid=BU&lang=en_US"},
      {"title":"Databases List ",     "href":"https://library.bu.edu/az.php"},
      {"title":"Search Help",         "href":"https://www.bu.edu/library/help/bu-libraries-search/"},
      {"title":"What's New",          "href":"https://www.bu.edu/library/help/bu-libraries-search/new-bu-libraries-search-features/"}
    ]
  }
};

/** Reactive/responsive footer providing slotted middle section and customizable LoCoSo data */
export default class BULibFooter extends LitElement {

  constructor(){
    super();
    this.library = "help";
  }

  static get styles(){
    return [
      css`
        .flex-evenly { justify-content: space-evenly; }
        /* footer grid and colors */
        footer {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          grid-auto-rows: minmax(50px, auto);
          grid-template-areas:
            "ftr-md ftr-md ftr-md ftr-md ftr-md ftr-md ftr-md ftr-md"
            "ftr-rt ftr-rt ftr-rt ftr-rt ftr-rt ftr-rt ftr-rt ftr-rt"
            "ftr-lt ftr-lt ftr-lt ftr-lt ftr-lt ftr-lt ftr-lt ftr-lt";
          grid-gap: 10px;
        }
        .ftr-middle ul { margin-top: 0px; }
        .ftr-middle > div, .ftr-right > div, .ftr-left > div { 
          width: 95%; 
          margin: 0 auto; 
        }
        .ftr-right { padding-bottom: 0px; }

        /* medium-sized screen */
        @media only screen and (min-width: 850px) and (max-width: 1200px){
          footer {
            grid-template-areas:
              "ftr-md ftr-md ftr-md ftr-md ftr-md ftr-md ftr-md ftr-md"
              "ftr-lt ftr-lt ftr-lt ftr-rt ftr-rt ftr-rt ftr-rt ftr-rt";
          }
          .ftr-middle { border-bottom: solid transparent 1px; }
          .ftr-right  { 
            border-bottom: solid transparent 1px !important; 
            padding-bottom: 60px;
          }
          .ftr-middle > div { width: 75%; }
          .ftr-left > div, .ftr-right > div { width: 95%; }
        }
      
        /* large-sized screen */ 
        @media only screen and (min-width: 1100px) and (max-width: 1400px){
          footer {
            grid-template-areas: "ftr-lt ftr-lt ftr-md ftr-md ftr-md ftr-rt ftr-rt ftr-rt";
          }
          .ftr-middle { border-bottom: solid transparent 1px !important; }
          .ftr-middle > div { width: 85%; margin: 0 auto; }
          .ftr-right  { 
            border-bottom: solid transparent 1px !important; 
            padding-bottom: 60px;
          } 
        }

        /* x-large-sized screen */
        @media only screen and (min-width: 1400px){
          footer {
            grid-template-areas: "ftr-lt ftr-lt ftr-md ftr-md ftr-md ftr-rt ftr-rt ftr-rt";
          }
          .ftr-middle { border-bottom: solid transparent 1px !important; }
          .ftr-middle > div { width: 85%; margin: 0 auto; }
          .ftr-right  { 
            border-bottom: solid transparent 1px !important; 
            padding-bottom: 0px !important;
          }
        }

        /* map classes to grid areas */
        .ftr-left   { grid-area: ftr-lt; border-bottom: solid transparent 1px; padding-bottom: 20px; }
        .ftr-middle { grid-area: ftr-md; border-bottom: solid lightgrey 1px; }
        .ftr-right  { grid-area: ftr-rt; border-bottom: solid lightgrey 1px; }

        /* '*Boston University* Libraries' styling */
        .bulib-typeface h3 a > span { font-weight: 400; }
        .bulib-typeface a { 
          text-decoration: none !important; 
          font-size: large; 
          color: var(--color-primary-text-light, white);
        }

        /* firefox fix to stop the 'Follow Us' from becoming centered */
        ::slotted(h3) { text-align: left; }
      `
    ]
  }

  static get properties() {
    return {
      /** provide window into setting displayed 'locoso' contact data */
      library: {type: String}, //TODO resolve error (doesn't effectively cascade)
      /** key for the subsite (used to populate the sitemap) */
      host_site: {type: String},
      
      /** [debugging] enable logging for parent and child events */
      debug: {type: Boolean},
      /** [debugging] manually simulate the url to override/force different states */
      curr_url: {type: String}
    };
  }

  connectedCallback(){
    super.connectedCallback();
    let current_url = (this.curr_url)? this.curr_url : window.location.href || "";
    let lib_code = getLibraryCodeFromUrl(current_url);
    this._logToConsole("selected library code: " + lib_code);
    this.library = lib_code;
  }

  /** upon the element's first connection to the DOM, get the url and use it to determine $this.library */
  updated(){
    let current_url = !!this.curr_url? this.curr_url : window.location.href;
    
    // determine site
    let old_site = this.host_site;
    let main_site = getSiteCodeFromUrl(current_url);
    if(["about","research","services"].includes(main_site)){ this.host_site = "wordpress"; }
    else if(main_site == "help"){ this.host_site = "askalibrarian"; }
    else if(main_site == "guides"){ this.host_site = "guides"; }
    else if(main_site == "search" || main_site == "primo"){ this.host_site = "primo"; }
    else{ this.host_site = "askalibrarian"; }
    if(old_site != this.host_site){
      this._logToConsole(`'host_site' changed from '${old_site}' to '${this.host_site}'`);
    }
    
    // determine library
    let old_library = this.library;
    let lib_code = this.curr_url? getLibraryCodeFromUrl(current_url) : this.library;
    this.library = lib_code;
    if(old_library != this.library){
      this._logToConsole(`library changed from '${old_library}' to '${this.library}'.`);
    }
  }

  render() {
    // fill in the sitemap middle section of the footer
    let sitemap_data = sitemap_values[this.host_site] || sitemap_values["askalibrarian"];
    let links = sitemap_data["links"];

    let links_midpoint = parseInt(links.length/2);
    let links_1 = links.slice(0, links_midpoint);
    let links_2 = links.slice(links_midpoint, links.length);
    let sitemap_content = html`
      <h3 class="txtc">${sitemap_data["header"]}</h3>
      <div class="flexnw flex-evenly txtl">
        <ul class="no-bullet">
          ${links_1.map((l) => html`<li class="mbm mla">
            <a class="white-link" href="${l.href}" @click="${(ev) => {sendGAEventFromClickEvent(ev, 'bulib-footer');}}">${l.title}</a>
          </li>`)}
        </ul>
        <ul class="no-bullet">
          ${links_2.map((l) => html`<li class="mbm mla">
            <a class="white-link" href="${l.href}" @click="${(ev) => {sendGAEventFromClickEvent(ev, 'bulib-footer');}}">${l.title}</a>
          </li>`)}
        </ul>
      </div>
    `;

    // render the main content of the component
    return html`
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bulib-wc@latest/dist/bundle.min.css">
      <div class="footer-wrapper">
        <footer>
          <div class="ftr-left">
            <div class="txtc">
              <div class="bulib-typeface">
                <h3>
                  <a @click="${(ev) => {sendGAEventFromClickEvent(ev, 'bulib-footer');}}" href="https://www.bu.edu/library">
                    <strong>Boston University</strong> <span>Libraries</span>
                  </a>
                </h3>
              </div>
            
              <div style="font-size: small;">
                <small>
                  <a title="Copyright" class="white-link prs" href="https://www.bu.edu/copyright" target="_blank"
                    @click="${(ev) => {sendGAEventFromClickEvent(ev, 'bulib-footer');}}">&copy; Copyright ${new Date().getFullYear()}</a>
                </small>
                <small>
                  <a title="Privacy Statement" class="white-link" target="_blank" 
                    href="https://www.bu.edu/policies/information-security-home/digital-privacy-statement/"
                    @click="${(ev) => {sendGAEventFromClickEvent(ev, 'bulib-footer');}}">Privacy Statement</a>
                </small>
              </div>
              <div>
                <ul class="no-bullet inline-list ptl">
                  <li><a title="Boston University Home Page" class="white-link" href="https://www.bu.edu/"
                          @click="${(ev) => {sendGAEventFromClickEvent(ev, 'bulib-footer');}}">BU Home</a></li>
                  <li><a title="Search available/licensed content" class="white-link" href="https://www.bu.edu/library/search"
                          @click="${(ev) => {sendGAEventFromClickEvent(ev, 'bulib-footer');}}">Search</a></li>
                  <li><a title="Information regarding various BU Libraries" class="white-link" href="https://www.bu.edu/library/about"
                          @click="${(ev) => {sendGAEventFromClickEvent(ev, 'bulib-footer');}}">Locations</a></li>
                  <li><a title="Help" class="white-link" href="https://askalibrarian.bu.edu/"
                          @click="${(ev) => {sendGAEventFromClickEvent(ev, 'bulib-footer');}}">Help</a></li>
                </ul>
              </div>

            </div>
          </div>
          <div class="ftr-middle txtc">
            <div id="sitemap"><slot name="sitemap">${sitemap_content}</slot></div>
          </div>
          <div class="ftr-right">
            <div id="ftr-locoso">
              <bulib-locoso library="${this.library}" link_class="white-link"></bulib-locoso>
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
