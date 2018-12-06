import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

const debug = true;
const local = false;

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
      {"title":"Make a Research Appointment", "href":"https://www.bu.edu/library/services/reference/appointments/"},
      {"title":"Library Locations",           "href":"http://www.bu.edu/library/about/"}
    ]
  }
};

/** Reactive/responsive footer providing slotted middle section and customizable LoCoSo data */
class BULFooter extends LitElement {

  constructor(){
    super();
    this.library = "help";
  }

  static get properties() {
    return {
      /** provide window into setting displayed 'locoso' contact data */
      library: {type: String, notify:true},
      /** key for the subsite (used to populate the sitemap) */
      host_site: {type: String}
    };
  }
  
  /** upon the element's first connection to the DOM, get the url and use it to determine $this.library */
  connectedCallback(){
    let current_url = local? "http://www.bu.edu/library/music/research/guides/" : window.location.href;
    if(current_url.includes("bu.edu/library/")){
      // try to get {library_code} from url 'http://www.bu.edu/library/{stone-science}/research/guides/'
      let lib_url_fragment = current_url.split("bu.edu/library/")[1] || "";
      lib_url_fragment = lib_url_fragment.split("/")[0];
      
      // set library code based on url fragment
      let lib_code = "help";
      if(debug){ console.log("bulib-footer) lib_url_fragment: " + lib_url_fragment); }
      if(lib_url_fragment.includes("africa")){ lib_code = "african-studies"; }
      else if(lib_url_fragment.includes("mugar")){ lib_code = "mugar-memorial"; }
      else if(lib_url_fragment.includes("med")){ lib_code = "medlib"; }
      else if(lib_url_fragment.includes("astronom")){ lib_code = "astronomy"; }
      else if(lib_url_fragment.includes("law")){ lib_code = "lawlibrary"; }
      else if(lib_url_fragment.includes("music")){ lib_code = "music"; }
      else if(lib_url_fragment.includes("management")){ lib_code = "pardee"; }
      else if(lib_url_fragment.includes("pickering")){ lib_code = "pickering"; }
      else if(lib_url_fragment.includes("sel")){ lib_code = "sel"; }
      else if(lib_url_fragment.includes("stone")){ lib_code = "stone"; }
      else if(lib_url_fragment.includes("sthlibrary")){ lib_code = "stone"; }
      else { lib_code = "help"; }
      if(debug){ console.log("bulib-footer) library code: " + lib_code); }
      this.library = lib_code;
    }
  }

  render() {
    // fill in the sitemap middle section of the footer
    let sitemap_data = sitemap_values[this.host_site] || sitemap_values["askalibrarian"];
    let links = sitemap_data["links"]; 
    let sitemap_content = html`
      <h3 class="txtc">${sitemap_data["header"]}</h3>
      <ul class="multi-column no-bullet">
        ${links.map((l) => html`<li><a class="white-link pvm" href="${l.href}">${l.title}</a></li>`)}
      </ul>
    `;
    
    // render the 
    return html`
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/bulib/bulib-wc@footer-v2.1.5/assets/css/common.min.css">
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/bulib/bulib-wc@footer-v2.1.5/src/footer/footer.css">
      <style>
        /* firefox fix to stop the 'Follow Us' from becoming centered */
        ::slotted(h3) { text-align: left; }
      </style>
      <div class="footer-wrapper">
        <footer class="pam">
          <div class="ftr-left">
            <div id="bu-content">
              <div class="left txtc bu-logo">
                <br />
                <a href="https://www.bu.edu/" title="Boston University Home"><img alt="boston university logo" src="http://www.bu.edu/academics/files/bu-logo.gif"></a>
                <br /><br />
                <small><a class="white-link" href="https://www.bu.edu/copyright" title="Copyright">&copy; Copyright ${new Date().getFullYear()}</a></small>
                <br /><br />
              </div>
                <ul class="no-bullet ptl">
                  <li><a class="white-link" href="https://www.bu.edu/library/" title="Libraries Home">Libraries Home</a></li>
                  <li><a class="white-link" href="http://bu.edu/library/search" title="Search available/licensed content">Libraries Search</a></li>
                  <li><a class="white-link" href="https://askalibrarian.bu.edu/" title="Help">Help</a></li>
                </ul>
            </div>
          </div>
          <div class="ftr-middle">
            <div><slot id="sitemap" name="sitemap">${sitemap_content}</slot></div>
          </div>
          <div class="ftr-right">
            <div><bulib-locoso library="${this.library}" link_class="white-link"></bulib-locoso></div>
          </div>
        </footer>
      </div>`;
  }

}

customElements.define('bulib-footer', BULFooter);
