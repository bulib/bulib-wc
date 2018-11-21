import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

const search_on_submit = false;
const debug = true;

// options available to be selected
const search_options = [
  {"code":"primo",     "name":"Academic Resources",       "domain":"https://buprimo.hosted.exlibrisgroup.com/primo-explore/search?institution=BOSU&vid=BU&search_scope=default_scope&highlight=true&lang=en_US&query=any,contains,", "placeholder": "BU Libraries Search"},
  {"code":"worldcat",  "name":"OCLC WorldCat",            "domain":"https://bu.on.worldcat.org/search?queryString="},
  {"code":"wp",        "name":"Boston University Site",   "domain":"https://search.bu.edu/?q=", "placeholder": "Search Library info/services"},
  {"code":"directory", "name":"Staff Directory",          "domain":"https://www.bu.edu/phpbin/directory/?q=", "placeholder": "Search for people at BU"},
  {"code":"hgar",      "name":"Archival Research Center", "domain":"https://hgar-srv3.bu.edu/search/?search=SEARCH&query=", "placeholder": "Search the BU Archive"},
  {"code":"openbu",    "name":"Open BU",                  "domain":"https://open.bu.edu/discover?query=", "placeholder": "Search BU Digital Collections"},
  {"code":"guides",    "name":"Library Guides",           "domain":"http://library.bu.edu/srch.php?q=", "placeholder": "Search Research Guides"},
  {"code":"help",      "name":"Ask a Librarian",          "domain":"http://askalibrarian.bu.edu/search/?t=0&q=", "placeholder": "Type your question here"}
];

/** move from 'code' string to option object (with backup) */
const _getOptionFromCode = function(code, lsOptions){
  if(!lsOptions || !lsOptions.length){ lsOptions = search_options; }
  if(!code && lsOptions && lsOptions.length >=1){ return lsOptions[0]; }
  
  for(let i=0; i<lsOptions.length; i++){
    let searchOption = lsOptions[i];
    if(searchOption["code"] == code){ return searchOption; }
  }
  return (lsOptions && lsOptions.length == 0)? "" : lsOptions[0];
};

/** helper calling _getOptionFromCode  */
const handleSearchButton = function(event, defaultCode){
  let code = event.target.selectedOptions[0].value || defaultCode;
  return _getOptionFromCode(code);
};

class BULSearch extends LitElement {

  constructor(){ 
    super(); 
    this.options = [];
    this.selected = {};
  }

  // don't need 'slot' functionality, so lets use Light DOM
  createRenderRoot(){ return this; }

  /** allow consumer to set the options available in the dropdown, and which one is selected */
  static get properties() {
    return {
      str_default: {type: String, notify: true},
      str_options: {type: String},
      str_placeholder: {type: String}
    };
  }

  render() {
    this._prepareOptions();
    return html`
    <style type="text/css"> #search_query_input { min-width: 200px; } </style>
    <div id="bulib-search">
      <input id="search_query_input" type="text" placeholder="${this.str_placeholder}"></input>
      <select id="search_source_select" @change="${(e) => this.selected = handleSearchButton(e, this.options[0])}">
        ${this.options.map((o) => html`<option value="${o.code}">${o.name}</option>`)}
      </select>
      <button type="submit" @click="${(e) => this._doSearch()}" title="Search ${this.selected["name"]}">Search</button>
    </div>
    `;
  }

  /** set display options on user input (if present) */
  _prepareOptions(){

    // try to set 'options' and 'selected' based on user input (with fallbacks) 
    this.options = []; this.selected = {};
    if(!this.str_options || this.str_options === ""){ 
      this.options = search_options;
    }else{
      let i, searchOption, optionCode;
      for(i=0; i<search_options.length; i++){
        searchOption = search_options[i];
        optionCode = searchOption["code"];
        if(this.str_options.includes(optionCode)){ this.options.push(searchOption);}
      }
    }

    // default to 'primo' and listing all options if user didn't decide to specify
    if(!this.options  || this.options.length  < 1){ 
      this.options = search_options; 
    }
    if(Object.keys(this.selected).length == 0){ 
      this.selected = _getOptionFromCode(this.str_default, this.options); 
      this.str_placeholder = this.selected["placeholder"] || "input text";
      if(debug){ console.log("bulib-search) programmatically set 'selected' to " + this.selected["code"]); }
    }

    // set the placeholder text
    if(!this.str_placeholder){ this.str_placeholder = "input text"; }
  }
  
  /** once html is on the page, update the visual to reflect the web component's data  */
  updated(){
    if(this.str_default && this.options.includes(this.str_default)){
      this.selected = _getOptionFromCode(this.str_default, this.options);
      this.str_placeholder = this.selected["placeholder"] || "input text";
    }

    if(this.selected){
      let lsSearchSourceOptions = document.getElementById("search_source_select").options;
      for(let i=0; i<lsSearchSourceOptions.length; i++){
        let option = lsSearchSourceOptions[i];
        if(option.value === this.selected["code"]){ option.selected = "selected"; }
      }
    }
  }

  /** perform a search for the input query on the selected database */
  _doSearch(){
    let userInputElem = document.getElementById("search_query_input");

    // obtain 
    let option = (Object.keys(this.selected).length > 0) ? this.selected : this.options[0];
    let site = option["code"];
    let query = userInputElem ? userInputElem.value : "";
    let domain = option["domain"];

    if(debug){ console.log(`bulib-search) searching '${site}' for query: '${query}' on domain: '${domain}'...`); }
    if(search_on_submit){ window.location = this.selected["domain"] + encodeURIComponent(query); }
  }

}

customElements.define('bulib-search', BULSearch);
