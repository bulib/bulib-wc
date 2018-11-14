import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

// options available to be selected
const search_options = [
  {"code":"primo",     "name":"Academic Resources",       "domain":"https://buprimo.hosted.exlibrisgroup.com/primo-explore/search?institution=BOSU&vid=BU&search_scope=default_scope&highlight=true&lang=eng&query=any,contains,"},
  {"code":"worldcat",  "name":"OCLC WorldCat",            "domain":"https://bu.on.worldcat.org/search?queryString="},
  {"code":"wp",        "name":"Boston University Site",   "domain":"https://search.bu.edu/?q="},
  {"code":"directory", "name":"Staff Directory",          "domain":"https://www.bu.edu/phpbin/directory/?q="},
  {"code":"hgar",      "name":"Archival Research Center", "domain":"https://hgar-srv3.bu.edu/search/?search=SEARCH&query="},
  {"code":"openbu",    "name":"Open BU",                  "domain":"https://open.bu.edu/discover?query="},
  {"code":"guides",    "name":"Library Guides",           "domain":"http://library.bu.edu/srch.php?q="}
];

/** move from 'code' string to option object (with backup) */
const _getOptionFromCode = function(code, backupCode){
  if(!code){ code = backupCode; }
  for(let i=0; i<search_options.length; i++){
    let searchOption = search_options[i];
    if(code.includes(searchOption["code"])){ return searchOption; }
  }
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
      str_default: {type: String},
      str_options: {type: String},
      str_placeholder: {type: String}
    };
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
        if(this.str_default && optionCode.includes(this.str_default)){ this.selected = searchOption; }
      }
    }

    // default to 'primo' and listing all options if user didn't decide to specify
    if(!this.options  || this.options.length  < 1){ 
      this.options = search_options; 
    }
    if(!this.selected || this.selected === {} || this.selected == undefined){ 
      this.selected = this.options[0]; 
    }

    // set the placeholder text
    if(!this.str_placeholder){ this.str_placeholder = "input text"; }
  }

  render() {
    this._prepareOptions();
    return html`
    <div id="bulib-search">
      <input id="search_query_input" type="text" placeholder="${this.str_placeholder}"></input>
      <select @change="${(e) => this.selected = handleSearchButton(e, this.options[0]["code"])}">
        ${this.options.map((o) => html`<option value="${o.code}">${o.name}</option>`)}
      </select>
      <button type="submit" @click="${(e) => this._doSearch()}" title="Search ${this.selected["name"]}">Search</button>
    </div>
    `;
  }

  /** perform a search for the input query on the selected database */
  _doSearch(){
    let userInputElem = document.getElementById("search_query_input");

    // obtain 
    let option = _getOptionFromCode(this.selected["code"], this.options[0]["code"]);
    let site = option["code"];
    let query = userInputElem ? userInputElem.value : "";
    let domain = option["domain"];

    console.log("searching '" + site + "' for query: '" + query + "' on domain: " + domain);
    //window.location = this.selected["domain"] + encodeURIComponent(query); }
  }

}

customElements.define('bulib-search', BULSearch);
