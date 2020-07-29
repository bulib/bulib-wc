import{h as t}from"./lit-html-2435d3b6.js";import{L as r,c as e}from"./lit-element-fdaadb84.js";import{a as i}from"./google_analytix-b0686824.js";import{a as s,b as a}from"./lib_info_helper-f5ea09c7.js";const l={wordpress:{header:"About the Libraries",links:[{title:"Interlibrary Borrowing",href:"https://www.bu.edu/library/services/ill/"},{title:"Course Reserves",href:"https://www.bu.edu/library/services/reserves/"},{title:"For Alumni",href:"https://www.bu.edu/library/services/alumni/"},{title:"Staff Directory",href:"https://www.bu.edu/library/about/who-we-are/staff-directory/"},{title:"Maps & Floorplans",href:"https://www.bu.edu/library/about/maps-floorplans/"},{title:"For Faculty",href:"https://www.bu.edu/library/services/for-faculty/"}]},askalibrarian:{header:"Ask A Librarian",links:[{title:"Research Guides by Subject",href:"https://library.bu.edu/guides/"},{title:"Course Guides",href:"https://www.bu.edu/library/research/guides/course-guides/"},{title:"How-To Guides",href:"https://www.bu.edu/library/help/how-to/"},{title:"Pardee Management Library FAQs",href:"https://askalibrarian.bu.edu/businessFAQs/"},{title:"Make a Research Appointment",href:"https://www.bu.edu/library/services/reference/appointments/"}]},guides:{header:"Library Guides",links:[{title:"Research Guides by Subject",href:"https://library.bu.edu/guides/"},{title:"Course Guides",href:"https://www.bu.edu/library/research/guides/course-guides/"},{title:"How-To Guides",href:"https://www.bu.edu/library/help/how-to/"},{title:"Make a Research Appointment",href:"https://www.bu.edu/library/services/reference/appointments/"}]},primo:{header:"BU Libraries Search",links:[{title:"My Library Account",href:"https://www.bu.edu/library/account/"},{title:"Advanced Search",href:"https://www.bu.edu/library/advancedsearch/"},{title:"Browse Search",href:"https://buprimo.hosted.exlibrisgroup.com/primo-explore/browse?vid=BU&lang=en_US"},{title:"Databases List ",href:"https://library.bu.edu/az.php"},{title:"Search Help",href:"https://www.bu.edu/library/help/bu-libraries-search/"},{title:"What's New",href:"https://www.bu.edu/library/help/bu-libraries-search/new-bu-libraries-search-features/"}]}};window.customElements.define("bulib-footer",class extends r{constructor(){super(),this.library="help"}static get styles(){return[e`
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
        .ftr-middle > div, .ftr-right > div, .ftr-left > div { width: 85%; margin: 0 auto; }
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
          .ftr-left > div, .ftr-right > div { width: 100%; }
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
      `]}static get properties(){return{library:{type:String},host_site:{type:String},debug:{type:Boolean},curr_url:{type:String}}}connectedCallback(){super.connectedCallback();let t=this.curr_url?this.curr_url:window.location.href||"",r=s(t);this._logToConsole("selected library code: "+r),this.library=r}updated(){let t=this.curr_url?this.curr_url:window.location.href,r=this.host_site,e=a(t);["about","research","services"].includes(e)?this.host_site="wordpress":this.host_site="help"==e?"askalibrarian":"guides"==e?"guides":"search"==e||"primo"==e?"primo":"askalibrarian",r!=this.host_site&&this._logToConsole(`'host_site' changed from '${r}' to '${this.host_site}'`);let i=this.library,l=this.curr_url?s(t):this.library;this.library=l,i!=this.library&&this._logToConsole(`library changed from '${i}' to '${this.library}'.`)}render(){let r=l[this.host_site]||l.askalibrarian,e=r.links,s=t`
      <h3>${r.header}</h3>
      <ul class="multi-column no-bullet txtl">
        ${e.map(r=>t`<li>
          <a class="white-link pvm" href="${r.href}" @click="${t=>{i(t,"bulib-footer")}}">${r.title}</a>
        </li>`)}
      </ul>
    `;return t`
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bulib-wc@latest/dist/bundle.min.css">
      <div class="footer-wrapper">
        <footer>
          <div class="ftr-left">
            <div class="txtc">
              <div class="bulib-typeface">
                <h3>
                  <a @click="${t=>{i(t,"bulib-footer")}}" href="https://www.bu.edu/library">
                    <strong>Boston University</strong> <span>Libraries</span>
                  </a>
                </h3>
              </div>
            
              <div style="font-size: small;">
                <small>
                  <a title="Copyright" class="white-link prs" href="https://www.bu.edu/copyright" target="_blank"
                    @click="${t=>{i(t,"bulib-footer")}}">&copy; Copyright ${(new Date).getFullYear()}</a>
                </small>
                <small>
                  <a title="Privacy Statement" class="white-link" target="_blank" 
                    href="https://www.bu.edu/policies/information-security-home/digital-privacy-statement/"
                    @click="${t=>{i(t,"bulib-footer")}}">Privacy Statement</a>
                </small>
              </div>
              <div>
                <ul class="no-bullet inline-list ptl">
                  <li><a title="Boston University Home Page" class="white-link" href="https://www.bu.edu/"
                          @click="${t=>{i(t,"bulib-footer")}}">BU Home</a></li>
                  <li><a title="Search available/licensed content" class="white-link" href="https://www.bu.edu/library/search"
                          @click="${t=>{i(t,"bulib-footer")}}">Search</a></li>
                  <li><a title="Information regarding various BU Libraries" class="white-link" href="https://www.bu.edu/library/about"
                          @click="${t=>{i(t,"bulib-footer")}}">Locations</a></li>
                  <li><a title="Help" class="white-link" href="https://askalibrarian.bu.edu/"
                          @click="${t=>{i(t,"bulib-footer")}}">Help</a></li>
                </ul>
              </div>

            </div>
          </div>
          <div class="ftr-middle txtc">
            <div id="sitemap"><slot name="sitemap">${s}</slot></div>
          </div>
          <div class="ftr-right">
            <div id="ftr-locoso">
              <bulib-locoso library="${this.library}" link_class="white-link"></bulib-locoso>
            </div>
          </div>
        </footer>
      </div>
    `}_logToConsole(t){this.debug&&console.log("bulib-footer) "+t)}});
//# sourceMappingURL=bulib-footer-d71f5410.js.map
