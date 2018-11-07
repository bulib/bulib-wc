import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

class BULSearch extends LitElement {

  constructor(){ 
    super(); 
    this.options = [];
    this.selected = {};
    
    // consumer-controlled selections 
    this.str_default = "primo";
    this.str_options = ["busite","guides","primo"];
    
    // options available to be selected
    this.search_options = [
      {"code":"primo",     "name":"BU Resources",             "domain":"https://buprimo.hosted.exlibrisgroup.com/primo-explore/search?institution=BOSU&vid=BU&search_scope=default_scope&highlight=true&dum=tru&query=any,contains,"},
      {"code":"worldcat",  "name":"OCLC WorldCat",            "domain":"https://bu.on.worldcat.org/search"},
      {"code":"busite",    "name":"Boston University Site",   "domain":"https://search.bu.edu/?q="},
      {"code":"directory", "name":"BU Directory",             "domain":"https://www.bu.edu/phpbin/directory/?q="},
      {"code":"hgar",      "name":"Archival Research Center", "domain":"https://hgar-srv3.bu.edu/search/?search=SEARCH&query="},
      {"code":"openbu",    "name":"Open BU",                  "domain":"https://open.bu.edu/discover?query="},
      {"code":"guides",    "name":"BU Library Guides",        "domain":"http://library.bu.edu/srch.php?q="}
    ];
  }

  static get properties() {
    return {
      str_default: {type: String, notify:true},
      str_options: {type: String}
    };
  }

  createRenderRoot(){ return this; }

  render() {
    this._prepareOptions();
    return html`
    <div id="bulib-search">
      <form enctype="application/x-www-form-urlencoded; charset=utf-8" name="searchForm" action="${this.doSearch()}">
        <input id="search_query_input" type="text" placeholder="input text"></input>
        <select>${this.options.map((o) => html`<option value="${o.code}">${o.name}</option>`)}</select>
        <button type="submit" name="Search ${this.selected["name"]}">Search</button>
      </form>
    </div>
    `;
  }
  
  updateSelection(optionCode){}
  
  doSearch(){
    let site = this.selected["code"];
    let query = document.getElementById("search_query_input");
    let domain = this.selected["domain"];
    console.log("searching " + site + " for query: " + query)
  }
  
  _prepareOptions(){
    this.options = []; this.selected = {};
    
    this.search_options.forEach(searchOption => {
      let optionCode = searchOption["code"];
      console.log(optionCode);
      if(this.str_default === optionCode){ this.selected = searchOption; }
      if(this.str_options.includes(optionCode)){ this.options.push(searchOption); }
    });
    
    if(!this.selected || this.selected.length < 1){ this.selected = this.search_options[0]; }
    if(!this.options || this.options.length < 1){ this.options = [ this.selected ]; }
  }
  
}

customElements.define('bulib-search', BULSearch);
