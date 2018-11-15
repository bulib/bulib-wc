import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

class UrlSel extends LitElement{

  constructor(){
    super();
    this.options = [
      {"name":"SELECT URL",     "url":"www.bu.edu/library"},
      {"name":"Mugar Library",  "url":"www.bu.edu/library/mugar-memorial"},
      {"name":"African Studies","url":"https://www.bu.edu/library/african-studies/", },
      {"name":"Guides",         "url":"www.bu.edu/library/research/guides/course-guides/"},
      {"name":"Services",       "url":"http://www.bu.edu/library/services/"},
      {"name":"Help",           "url":"askalibrarian.bu.edu/"},
      {"name":"Primo Search",   "url":"buprimo.hosted.exlibrisgroup.com/primo-explore/search"}
    ];
  }

  static get properties(){
    return {
      curr_url: {type: String, notify:true}
    }
  }

  render(){
    return html`
      <strong>Simulated URL</strong>:
      <select id="libhours-input" @input=${(e) => this._SelectionChanged(e)}}>
        ${this.options.map((o) => html`<option value="${o.url}">${o.name}</option>`)}
      </select>
    `;
  }

  _SelectionChanged(event){
    let currentUrl = event.currentTarget.value;
    let element = document.getElementsByTagName("bulib-hdr")[0];
    let key = "curr_url";
    console.log("before: " + element.getAttribute(key));
    element.setAttribute(key, currentUrl);
    console.log("after: " + element.getAttribute(key));
  }

}

customElements.define('bulib-urlsel', UrlSel);
