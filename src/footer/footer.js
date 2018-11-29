import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';
import { getLibraryCodeFromUrl } from '../_helpers/lib_info_helper.js';

const debug = false;
const local = false;

/** Reactive/responsive footer providing slotted middle section and customizable LoCoSo data */
class BULFooter extends LitElement {

  constructor(){
    super();
    this.library = "help";
  }

  static get properties() {
    return {
      /** provide window into setting displayed 'locoso' contact data */
      library: {type: String, notify:true}
    };
  }
  
  /** upon the element's first connection to the DOM, get the url and use it to determine $this.library */
  connectedCallback(){
    let current_url = local? "http://www.bu.edu/library/music/research/guides/" : window.location.href;
    let lib_code = getLibraryCodeFromUrl(current_url);
    if(debug){ console.log("bulib-footer) selected library code: " + lib_code); }
    this.library = lib_code;
  }

  render() {
    return html`
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/bulib/bulib-wc@footer-v1.5/assets/css/common.min.css">
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/bulib/bulib-wc@footer-v1.5/src/footer/footer.min.css">
      <style>
        :host(h3), h3 { margin-top: 0px; margin-bottom: 0px; }
        ul, ol { margin-top: 5px; margin-bottom: 5px; }
      </style>
      <footer class="pam">
        <div class="ftr-left">
          <div id="bu-content">
            <div class="left txtc bu-logo">
              <br />
              <a href="https://www.bu.edu/" title="Boston University Home"><img alt="boston university logo" src="http://www.bu.edu/academics/files/bu-logo.gif"></a>
              <br /><br />
              <small><a class="white-link" href="https://www.bu.edu/copyright" title="Copyright">&copy; Copyright ${new Date().getFullYear()}</a></small>
            </div>
            <div>
              <ul class="no-bullet ptl">
                <li><a class="white-link" href="https://www.bu.edu/library/" title="Libraries Home">Libraries Home</a></li>
                <li><a class="white-link" href="http://bu.edu/library/search" title="Search available/licensed content">Libraries Search</a></li>
                <li><a class="white-link" href="https://askalibrarian.bu.edu/" title="Help">Help</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="ftr-middle">
          <div><slot id="sitemap" name="sitemap"></slot></div>
        </div>
        <div class="ftr-right">
          <div><bulib-locoso library="${this.library}" link_class="white-link"></bulib-locoso></div>
        </div>
      </footer>`;
  }

}

customElements.define('bulib-footer', BULFooter);
