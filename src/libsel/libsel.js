import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@0.6.4/lit-element.js?module';
import {getLibraryInfoFromCode} from 'https://cdn.jsdelivr.net/gh/bulib/bulib-wc@libsel-v0.8/src/_helpers/lib_info_helper.js?module';


const lsLibraryCodes = ["mugar-memorial","african-studies","medlib","astronomy","lawlibrary","hgar","music","pardee","pickering","theology","sel","stone"];

const lsLibraryOptions = [
  {"value":"mugar-memorial","name":"Library Locations"},
  {"value":"mugar-memorial","name":"Mugar Memorial"},
  {"value":"african-studies","name":"African Studies"},
  {"value":"medlib", "name":"Alumni Medical"},
  {"value":"astronomy", "name":"Astronomy"},
  {"value":"lawlibrary","name":"Fineman and Pappas Law"},
  {"value":"hgar", "name":"Archival Research Center"},
  {"value":"music","name":"Music Library"},
  {"value":"pardee","name":"Pardee Managment Library"},
  {"value":"pickering","name":"Pickering Educational Resources"},
  {"value":"theology","name":"School of Theology"},
  {"value":"sel","name":"Science and Engineering"},
  {"value":"stone","name":"Stone Science"}
];

/** change the current page when user selects a library from the dropdown */
class BULibSel extends LitElement {

  constructor(){
    super();
    this.curr_url = window.location.href;
    this.curr_search = "wp";
  }

  static get properties() {
    return {
      /** library code referring to the library whose hours we want to display */
      library: {type: String, notify:true},
      /** current url (potentially) used for automatically setting the library */
      curr_url: {type: String, notify:true},
      
      /** log to console */
      debug: {type:Boolean},
      prevent_action: {type:Boolean}
    };
  }

  render() {
    this._setCurrSiteInfo();
    return html`
      <strong>${this.sel_title}</strong>
      <select id="libsel-select" @input=${(e) => this._SelectionChanged(e)}}>
        ${lsLibraryOptions.map((o) => html`<option value="${o.value}">${o.name}</option>`)}
      </select>`;
  }

  /** update current properties to inform what to display */
  _setCurrSiteInfo(){
    let currentUrl = (this.curr_url)? this.curr_url : window.location.href;

    for(let i=0; i<lsLibraryCodes.length; i++){
      let libCode = lsLibraryCodes[i];
      if(currentUrl.includes(libCode)){
        this.curr_secondary = lsLibraryOptions[libCode];
        this.library = libCode;
      }
    }
  }

  /** open the website for the landing page of the selected library (iff change_url_on_select) */
  _SelectionChanged(event){
    let value = event.currentTarget.value;
    this.library = value;
    let before = window.location.href;
    let url_new = getLibraryInfoFromCode(value)["website"] || `http://bu.edu/library/${value}/`;
    if(this.debug){ console.log(`bulib-libsel) '<libsel>.curr_url' changing from ${before} to ${url_new}...`); }
    if(!this.prevent_action){ window.location.href = url_new; }
  }

}

customElements.define('bulib-libsel', BULibSel);
