import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

const debug = true;
const change_url_on_select = false;

const lsLibraryCodes = ["mugar-memorial","african-studies","medlib","astronomy","lawlibrary","hgar","music","management","pickering-educational","sthlibrary","sel","stone-science"];
const lsLibraryOptions = [
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

/** change the current page when user selects a library from the dropdown */
class BULibSel extends LitElement {

  constructor(){
    super();
    this.curr_url = window.location.href;
    this.curr_search = "wp";
  }

  static get properties() {
    return {
      library: {type: String, notify:true},
      curr_url: {type: String, notify:true}
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

  /** once html is on the page, add classes based on current values */
  updated(){

    let libsel_elem = document.getElementById("libsel-select");
    //TODO ensule the current selection is displayed in the dropdown
    //libsel_elem.selected = this.library;
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
    let url_new = `http://bu.edu/library/${value}/`;
    if(debug){ console.log(`bulib-libsel) '<libsel>.curr_url' changing from ${before} to ${url_new}...`); }
    if(change_url_on_select){ window.location.href = url_new; }
  }

}

customElements.define('bulib-libsel', BULibSel);
