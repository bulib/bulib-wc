import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

class BULSearch extends LitElement {

  constructor(){ 
    super(); 
    this.options = [];
    this.selected = {};
    
    this.str_default = "";
    this.str_options = [];
    
    // options available to be selected
    this.search_options = [
      {"code":"primo",     "name":"Academic Resources",       "domain":"https://buprimo.hosted.exlibrisgroup.com/primo-explore/search?institution=BOSU&vid=BU&search_scope=default_scope&highlight=true&lang=eng&query=any,contains,"},
      {"code":"worldcat",  "name":"OCLC WorldCat",            "domain":"https://bu.on.worldcat.org/search?queryString="},
      {"code":"wp",        "name":"Boston University Site",   "domain":"https://search.bu.edu/?q="},
      {"code":"directory", "name":"Staff Directory",          "domain":"https://www.bu.edu/phpbin/directory/?q="},
      {"code":"hgar",      "name":"Archival Research Center", "domain":"https://hgar-srv3.bu.edu/search/?search=SEARCH&query="},
      {"code":"openbu",    "name":"Open BU",                  "domain":"https://open.bu.edu/discover?query="},
      {"code":"guides",    "name":"Library Guides",           "domain":"http://library.bu.edu/srch.php?q="}
    ];
  }

  /** allow consumer to set the options available in the dropdown, and which one is selected */
  static get properties() {
    return {
      str_default: {type: String, notify:true},
      str_options: {type: String}
    };
  }

  // don't need 'slot' functionality, so lets use Light DOM
  createRenderRoot(){ return this; }

  render() {
    this._prepareOptions();
    return html`
    <div id="bulib-search">
      <form enctype="application/x-www-form-urlencoded; charset=utf-8" name="searchForm" action="javascript:;" onsubmit="this._doSearch()">
        <input id="search_query_input" type="text" placeholder="input text"></input>
        <select>${this.options.map((o) => html`<option value="${o.code}">${o.name}</option>`)}</select>
        <button type="submit" title="Search ${this.selected["name"] || ""}">Search</button>
      </form>
    </div>
    `;
  }
  
  /** perform a search for the input query on the selected database */
  _doSearch(){
    console.log("doSearch() called.");
    let userInputElem = document.getElementById("search_query_input");
    
    let site = this.selected["code"];
    let query = userInputElem? userInputElem.value : "";
    let domain = this.selected["domain"];
    
    console.log("searching " + site + " for query: '" + query + "' on domain: " + domain);
    //window.location = this.selected["domain"] + encodeURIComponent(query); }
  }
  
  /** set display options on user input (if present) */
  _prepareOptions(){
    
    // try to set 'options' and 'selected' based on user input (with fallbacks)
    this.options = []; this.selected = {};
    this.search_options.forEach(searchOption => {
      let optionCode = searchOption["code"];
      if(this.str_default === optionCode){ this.selected = searchOption; }
      if(this.str_options.includes(optionCode)){ this.options.push(searchOption); }
    });
    
    // default to 'primo' and listing all options if user didn't decide to specify
    if(!this.selected || this.selected.length < 1){ this.selected = this.search_options[0]; }
    if(!this.options  || this.options.length  < 1){ this.options = this.search_options; }
  }
  
}

customElements.define('bulib-search', BULSearch);
