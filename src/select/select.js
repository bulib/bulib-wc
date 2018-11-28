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
  {"value":"pardee","name":"Frederick S. Pardee Managment Library"},
  {"value":"pickering","name":"Pickering Educational Resources"},
  {"value":"theology","name":"School of Theology"},
  {"value":"sel","name":"Science and Engineering"},
  {"value":"stone","name":"Stone Science"}
];
const wp_urls = [
  {"name":"SELECT URL",     "value":"www.bu.edu/library"},
  {"name":"Primo Search",   "value":"buprimo.hosted.exlibrisgroup.com/primo-explore/search"},
  {"name":"Guides",         "value":"www.bu.edu/library/research/guides/course-guides/"},
  {"name":"Services",       "value":"http://www.bu.edu/library/services/"},
  {"name":"Mugar Library",  "value":"www.bu.edu/library/mugar-memorial"},
  {"name":"African Studies","value":"https://www.bu.edu/library/african-studies/", },
  {"name":"Help",           "value":"askalibrarian.bu.edu/"}
];
const opt_map = {
  "libraries":libraries,
  "wp_urls":wp_urls
};

class BULSelect extends LitElement{

  constructor(){
    super();
  }

  static get properties(){
    return {
      /** currently selected item code (referring to values in option map) */
      curr_sel: {type: String, notify:true},
      /** the key for which option map to use for populating the dropdown */
      opt_code: {type: String},
      /** title displayed next to the dropdown */
      sel_title: {type: String},
      /** the name of the tag which we desire to update (e.g. <bulib-locoso> = 'bulib-locoso') */
      tag_name: {type: String},
      /** the attribute of that tag which needs to be changed */
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
  
  /** populate internal options list with the values from the specified 'opt_code' */
  _loadOptions(){
    this.options = opt_map[this.opt_code];
  }

  /** react to changes in which <option> is currently 'selected' */ 
  _SelectionChanged(event){
    let current = event.currentTarget.value;
    let element = document.getElementsByTagName(this.tag_name)[0];
    let before = element.getAttribute(this.attr_name);
    element.setAttribute(this.attr_name, current);
    let after = element.getAttribute(this.attr_name);
    if(debug){ console.log(`bulib-select) changed '<${this.tag_name}>.${this.attr_name}' from '${before}' to '${after}'`); }
  }

}

customElements.define('bulib-select', BULSelect);
