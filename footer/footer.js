import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

class BUFooter extends LitElement {

  constructor(){
    super();
    this.library = "mugar-memorial";
  }

  static get properties() {
    return {
      library: {type: String, notify:true}
    }
  }

  render() {
    return html`
      <style>
        /* footer grid and colors */
        footer {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          grid-auto-rows: minmax(50px, auto);
          grid-template-areas:
            "ftr-mid ftr-mid ftr-mid ftr-mid ftr-mid ftr-mid ftr-mid ftr-mid"
            "ftr-right ftr-right ftr-right ftr-right ftr-right ftr-right ftr-right ftr-right"
            "ftr-left ftr-left ftr-left ftr-left ftr-left ftr-left ftr-left ftr-left";
          grid-gap: 10px;
          background-color: black;
          color: white;
        }

        /* medium-sized screen */
        @media only screen and (min-width: 550px){
          footer {
            grid-template-areas:
              "ftr-mid ftr-mid ftr-mid ftr-mid ftr-mid ftr-mid ftr-mid ftr-mid"
              "ftr-left ftr-left ftr-left ftr-right ftr-right ftr-right ftr-right ftr-right";
          }
        }

        /* large-sized screen */
        @media only screen and (min-width: 700px){
          footer {
            grid-template-areas: "ftr-left ftr-left ftr-mid ftr-mid ftr-mid ftr-right ftr-right ftr-right";
          }
          footer > ftr-middle {
            border-left: solid lightgrey 1px;
            border-right: solid lightgrey 1px;
          }
        }

        /* map classes to grid areas */
        .ftr-left { grid-area: ftr-left; }
        .ftr-middle { grid-area: ftr-mid; }
        .ftr-right {  grid-area: ftr-right; }


        /* list styles */
        .no-bullet > li { list-style:none; }
        .inline-list > li { display: inline; padding-right: 5px;}

        /* style footer links */
        a, a:active, a:visited {
          color: white;
          font-weight: normal;
        }
        a:hover { font-weight: bold;}

        /* padding and alignment */
        .pam { padding: 10px; }
        .left { float: left; }
        .txtc { text-align: center; }
        h3 { margin-top: 0px; margin-bottom: 0px; }
        ul, ol { margin-top: 5px; margin-bottom: 5px; }
      </style>
      <footer>
        <div class="ftr-left">
          <br />
          <div class="left pam">
            <div class="pam txtc">
              <a href="http://www.bu.edu/" title="Boston University Home"><img alt="boston university logo" src="http://www.bu.edu/academics/files/bu-logo.gif"></a>
              <br /><br />
              <small><a href="http://www.bu.edu/copyright" title="Copyright">© Copyright ${new Date().getFullYear()}</a></small>
            </div>
          </div>
          <br />
          <ul class="no-bullet pas">
            <li><a href="http://www.bu.edu/library/" title="Library Home">Library Home</a></li>
            <li><a href="https://buprimo.hosted.exlibrisgroup.com/primo-explore/search?vid=BU&sortby=rank&lang=en_US" title="Library Search">Search Content</a></li>
            <li><a href="http://askalibrarian.bu.edu/" title="Help">Help</a></li>
          </ul>
        </div>
        <div class="ftr-middle"><slot id="sitemap" name="sitemap"></slot></div>
        <div class="ftr-right">
          <div class="pam">
            <bu-locoso library="${this.library}"></bu-locoso>
          </div>
        </div>
      </footer>`;
  }

}

customElements.define('bulib-ftr', BUFooter);
