import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@0.6.4/lit-element.js?module';
import {search_options} from '../search/search.js';

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
const sample_urls = [
  {"name":"SELECT URL",     "value":"www.bu.edu/library"},
  {"name":"Primo Search",   "value":"buprimo.hosted.exlibrisgroup.com/primo-explore/search"},
  {"name":"Guides",         "value":"www.bu.edu/library/research/guides/course-guides/"},
  {"name":"Services",       "value":"http://www.bu.edu/library/services/"},
  {"name":"African Studies","value":"https://www.bu.edu/library/african-studies/", },
  {"name":"Astronomy Library","value":"http://www.bu.edu/library/astronomy/", },
  {"name":"Music Library",  "value":"http://www.bu.edu/library/music/"},
  {"name":"Mugar Library",  "value":"www.bu.edu/library/mugar-memorial"},
  {"name":"Pardee Library", "value":"http://www.bu.edu/library/management/", },
  {"name":"Pickering Library","value":"http://www.bu.edu/library/pickering-educational/"},
  {"name":"Science & Engineering","value":"http://www.bu.edu/library/sel/", },
  {"name":"Stone Library",  "value":"http://www.bu.edu/library/stone-science/"},
  {"name":"Help",           "value":"askalibrarian.bu.edu/"}
];
const sites = [
  {"name":"SELECT A SITE",  "value":"askalibrarian"},
  {"name":"Ask a Librarian","value":"askalibrarian"},
  {"name":"LibGuides",      "value":"guides"},
  {"name":"Wordpress",      "value":"wordpress"}
];
const opt_map = {
  "libraries":libraries,
  "sample_urls":sample_urls,
  "search_options":search_options,
  "sites":sites
};

class BULSelect extends LitElement{

  static get properties(){
    return {
      /** title displayed next to the dropdown */
      sel_title: {type: String},
      /** currently selected item code (referring to values in option map) */
      curr_sel: {type: String, notify:true},
      /** the key for which option map to use for populating the dropdown */
      opt_code: {type: String},
      /** the name of the tag which we desire to update (e.g. <bulib-locoso> = 'bulib-locoso') */
      tag_name: {type: String},
      /** the attribute of that tag which needs to be changed */
      attr_name: {type: String},
      /* controls logging to the console */
      debug: {type:Boolean}
    };
  }

  render(){
    return html`
      <strong>${this.sel_title}</strong>:
      <select @input=${(e) => this._SelectionChanged(e)}}>
        ${this.options.map((o) => html`<option value="${o.value}">${o.name}</option>`)}
      </select>
    `;
  }
  
  /** populate internal options list with the values from the specified 'opt_code' */
  connectedCallback(){
    this.options = opt_map[this.opt_code];
  }

  /** react to changes in which <option> is currently 'selected' */ 
  _SelectionChanged(event){
    let current = event.currentTarget.value;
    let elements = document.getElementsByTagName(this.tag_name);
    let i, before, after, element;
    for(i=0; i<elements.length; i++){
      element = elements[i];
      before = element.getAttribute(this.attr_name);
      element.setAttribute(this.attr_name, current);
      after = element.getAttribute(this.attr_name);
      
      if(this.debug && before != after){ 
        let id_string = "?";
        if(element){
          if(element.id){ id_string = "#"+element.id; }
          if(element.hasAttribute("name")){ id_string = "'" + element.getAttribute("name") + "'"; }
        } 
        
        if(this.debug){ console.log(`bulib-select) changed '<${this.tag_name}>[${id_string}].${this.attr_name}' from '${before}' to '${after}'.`); }
      }
    }
  }

}

customElements.define('bulib-select', BULSelect);
