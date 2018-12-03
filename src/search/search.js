import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

const search_on_submit = false;
const debug = true;

/** data on the overall search sources we have available to search on */
export const search_options = [
  {"value":"primo",     "name":"Academic Resources",       "placeholder": "BU Libraries Search",          "domain":"https://buprimo.hosted.exlibrisgroup.com/primo-explore/search?institution=BOSU&vid=BU&search_scope=default_scope&highlight=true&lang=en_US&query=any,contains,"},
  {"value":"worldcat",  "name":"OCLC WorldCat",            "placeholder": "BU Libraries Search",          "domain":"https://bu.on.worldcat.org/search?queryString="},
  {"value":"wp",        "name":"Boston University Site",   "placeholder": "Search Library info/services", "domain":"https://search.bu.edu/?q="},
  {"value":"directory", "name":"Staff Directory",          "placeholder": "Search for people at BU",      "domain":"https://www.bu.edu/phpbin/directory/?q="},
  {"value":"hgar",      "name":"Archival Research Center", "placeholder": "Search the BU Archive",        "domain":"http://archives.bu.edu/search/?search=SEARCH&query="},
  {"value":"openbu",    "name":"Open BU",                  "placeholder": "Search BU Digital Collections","domain":"https://open.bu.edu/discover?query="},
  {"value":"guides",    "name":"Library Guides",           "placeholder": "Search Research Guides",       "domain":"http://library.bu.edu/srch.php?q="},
  {"value":"help",      "name":"Ask a Librarian",          "placeholder": "Type your question here",      "domain":"http://askalibrarian.bu.edu/search/?t=0&q="}
];

/** move from 'code' string to option object (with backup) */
const _getOptionFromCode = function(code, lsOptions){
  if(!lsOptions || !lsOptions.length){ lsOptions = search_options; }
  if(!code && lsOptions && lsOptions.length >=1){ return lsOptions[0]; }
  
  for(let i=0; i<lsOptions.length; i++){
    let searchOption = lsOptions[i];
    if(searchOption["value"] === code){ return searchOption; }
  }
  return (lsOptions && lsOptions.length == 0)? "" : lsOptions[0];
};

/** helper calling _getOptionFromCode  */
const handleSearchSelect = function(event, defaultCode="primo"){
  return event.target.selectedOptions[0].value || defaultCode;
};

/**  */
class BULSearch extends LitElement {

  constructor(){ 
    super(); 
    this.options = [];
    this.selected = {};
  }

  /** allow consumer to set the options available in the dropdown, and which one is selected */
  static get properties() {
    return {
      /** selected search source (defaulted to first option) */
      str_selected: {type: String, notify:true},
      /** search sources included in the dropdown (defaulted to all) */
      str_options: {type: String}
    };
  }

  // don't need 'slot' functionality, so lets use Light DOM
  createRenderRoot(){ return this; }

  render() {
    this._initSelectedOptions();
    let placeholder = _getOptionFromCode(this.str_selected)["placeholder"];
    
    return html`
    <style type="text/css"> #search_query_input { min-width: 200px; } </style>
    <div id="bulib-search">
      <input id="search_query_input" type="text" placeholder="${placeholder}"></input>
      <select id="search_source_select" @change="${(e) => this.str_selected = handleSearchSelect(e)}">
        ${this.options.map((o) => html`<option value="${o.value}">${o.name}</option>`)}
      </select>
      <button type="submit" @click="${(e) => this._doSearch()}" title="Search ${this.selected["name"]}">Search</button>
    </div>
    `;
  }

  /** set display options on user input (if present) */
  _initSelectedOptions(){

    // try to set 'options' and 'selected' based on user input (with fallbacks) 
    this.options = []; this.selected = {};
    if(!this.str_options || this.str_options === ""){ 
      this.options = search_options;
    }else{
      let i, searchOption, optionCode;
      for(i=0; i<search_options.length; i++){
        searchOption = search_options[i];
        optionCode = searchOption["value"];
        if(this.str_options.includes(optionCode)){ this.options.push(searchOption);}
      }
    }

    // default to 'primo' and listing all options if user didn't decide to specify
    if(!this.options  || this.options.length  < 1){ 
      this.options = search_options; 
    }
    if(Object.keys(this.selected).length == 0){ 
      this.selected = _getOptionFromCode(this.str_selected, this.options); 
      this.str_placeholder = this.selected["placeholder"] || "input text";
    }

    // set the placeholder text
    if(!this.str_placeholder){ this.str_placeholder = "input text"; }
  }
  
  /** once html is on the page, update the visual to reflect the web component's data  */
  connectedCallback(){
    if(this.str_selected && this.options.includes(this.str_selected)){
      this.selected = _getOptionFromCode(this.str_selected, this.options);
      this.str_placeholder = this.selected["placeholder"] || "input text";
    }

    if(this.selected){
      let lsSearchSourceOptions = document.getElementById("search_source_select").options;
      for(let i=0; i<lsSearchSourceOptions.length; i++){
        let option = lsSearchSourceOptions[i];
        if(option.value === this.selected["value"]){ option.selected = "selected"; }
      }
    }
  }

  /** perform a search for the input query on the selected database */
  _doSearch(){
    let userInputElem = document.getElementById("search_query_input");

    // obtain 
    let option = (Object.keys(this.selected).length > 0) ? this.selected : this.options[0];
    let site = option["value"];
    let query = userInputElem ? userInputElem.value : "";
    let domain = option["domain"];

    if(debug){ console.log(`bulib-search) searching '${site}' for query: '${query}' on domain: '${domain}'...`); }
    if(search_on_submit){ window.location = this.selected["domain"] + encodeURIComponent(query); }
  }

}

customElements.define('bulib-search', BULSearch);
