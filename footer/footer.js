//import {LitElement, html} from '@polymer/lit-element';
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
        /* list styles */
        .no-bullet > li { list-style:none; }
        .inline-list > li { display: inline; padding-right: 5px;}

        /* footer grid and colors */
        footer {
          display: grid;
          grid-template-columns: 1.5fr 2fr 3fr;
          grid-gap: 10px;
          background-color: black;
          color: white;
        }

        .ftr-left { grid-column: 1; }
        .ftr-middle { grid-column: 2; }
        .ftr-right { grid-column: 3; }

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
          <div class="left pam">
            <div class="txtc">
              <a href="http://www.bu.edu/" title="Boston University Home"><img alt="boston university logo" src="http://www.bu.edu/academics/files/bu-logo.gif"></a>
              <br />
              <small><a href="http://www.bu.edu/copyright" title="Copyright">© Copyright ${new Date().getFullYear()}</a></small>
            </div>
          </div>
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
