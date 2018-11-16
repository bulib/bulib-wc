import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

const debug = true;
const libraries =  [
  {"value":"mugar-memorial","name":"SELECT LIBRARY"},
  {"value":"mugar-memorial","name":"Mugar Memorial"},
  {"value":"african-studies","name":"African Studies"},
  {"value":"medlib", "name":"Alumni Medical"},
  {"value":"astronomy", "name":"Astronomy"},
  {"value":"lawlibrary","name":"Fineman and Pappas Law"},
  {"value":"hgar", "name":"Archival Research Center"},
  {"value":"music","name":"Music Library"},
  {"value":"management","name":"Frederick S. Pardee Managment Library"},
  {"value":"pickering-educational","name":"Pickering Educational Resources"},
  {"value":"sthlibrary","name":"School of Theology"},
  {"value":"sel","name":"Science and Engineering"},
  {"value":"stone-science","name":"Stone Science"}
];
const wp_urls = [
  {"name":"SELECT URL",     "value":"www.bu.edu/library"},
  {"name":"Mugar Library",  "value":"www.bu.edu/library/mugar-memorial"},
  {"name":"African Studies","value":"https://www.bu.edu/library/african-studies/", },
  {"name":"Guides",         "value":"www.bu.edu/library/research/guides/course-guides/"},
  {"name":"Services",       "value":"http://www.bu.edu/library/services/"},
  {"name":"Help",           "value":"askalibrarian.bu.edu/"},
  {"name":"Primo Search",   "value":"buprimo.hosted.exlibrisgroup.com/primo-explore/search"}
];
const opt_map = {
  "libraries":libraries,
  "wp_urls":wp_urls
};

class BULSel extends LitElement{

  constructor(){
    super();
    console.log("opt_code: " + this.opt_code);
  }

  static get properties(){
    return {
      curr_sel: {type: String, notify:true},
      opt_code: {type: String},
      sel_title: {type: String},
      tag_name: {type: String},
      attr_name: {type: String}
    };
  }

  render(){
    this._loadOptions();
    return html`
      <strong>${this.sel_title}</strong>:
      <select @input=${(e) => this._SelectionChanged(e)}}>
        ${this.options.map((o) => html`<option value="${o.value}">${o.name}</option>`)}
      </select>
    `;
  }
  
  _loadOptions(){
    this.options = opt_map[this.opt_code];
  }

  _SelectionChanged(event){
    let current = event.currentTarget.value;
    let element = document.getElementsByTagName(this.tag_name)[0];
    if(debug){ console.log("bulib-select) before: " + element.getAttribute(this.attr_name)); }
    element.setAttribute(this.attr_name, current);
    if(debug){ console.log("bulib-select) after: " + element.getAttribute(this.attr_name)); }
  }

}

customElements.define('bulib-select', BULSel);
