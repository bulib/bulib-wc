import {LitElement, html} from 'https://cdn.jsdelivr.net/npm/@polymer/lit-element@0.6.2/lit-element.min.js';

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
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/bulib/bulib-wc/assets/css/common.min.css">
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/bulib/bulib-wc/assets/css/footer.min.css">
      <style>
        :host h3, h3 { margin-top: 0px; margin-bottom: 0px; }
        ul, ol { margin-top: 5px; margin-bottom: 5px; }
      </style>
      <footer class="pam">
        <div class="ftr-left">
          <div id="bu-content">
            <div class="left txtc bu-logo">
              <br />
              <a href="https://www.bu.edu/" title="Boston University Home"><img alt="boston university logo" src="http://www.bu.edu/academics/files/bu-logo.gif"></a>
              <br /><br />
              <small><a class="white-link" href="https://www.bu.edu/copyright" title="Copyright">© Copyright ${new Date().getFullYear()}</a></small>
            </div>
            <div>
              <ul class="no-bullet ptl">
                <li><a class="white-link" href="https://www.bu.edu/library/" title="Libraries Home">Libraries Home</a></li>
                <li><a class="white-link" href="https://bu.edu/library/search" title="Search available/licensed content">Libraries Search</a></li>
                <li><a class="white-link" href="https://askalibrarian.bu.edu/" title="Help">Help</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="ftr-middle">
          <div><slot id="sitemap" name="sitemap"></slot></div>
        </div>
        <div class="ftr-right">
          <div><bu-locoso library="${this.library}" link_class="white-link"></bu-locoso></div>
        </div>
      </footer>`;
  }

}

customElements.define('bulib-ftr', BUFooter);
