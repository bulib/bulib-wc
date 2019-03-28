import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@0.6.4/lit-element.js?module';
const ENTER_KEY_VALUE = 13;
const default_to_just_primo = true;

/** data on the overall search sources we have available to search on */
export const search_options = [
  {"value":"primo",     "name":"BU Libraries Search",      "placeholder": "Search library resources",     "domain":"https://buprimo.hosted.exlibrisgroup.com/primo-explore/search?vid=BUinstitution=BOSU&search_scope=default_scope&highlight=true&lang=en_US&query=any,contains,"},
  {"value":"industries","name":"Industry Survey Locator",  "placeholder": "Search for industry surveys",  "domain":"https://buprimo.hosted.exlibrisgroup.com/primo-explore/search?vid=ISL&institution=BOSU&search_scope=default_scope&highlight=true&lang=en_US&query=any,contains,"},
  {"value":"worldcat",  "name":"OCLC WorldCat",            "placeholder": "BU Libraries Search",          "domain":"https://bu.on.worldcat.org/search?queryString="},
  {"value":"wp",        "name":"Boston University Site",   "placeholder": "Search library info/services", "domain":"https://search.bu.edu/?site=www.bu.edu%2Flibrary&q="},
  // {"value":"directory", "name":"Staff Directory",          "placeholder": "Search for people at BU",      "domain":"https://www.bu.edu/phpbin/directory/?q="},
  // {"value":"hgar",      "name":"Archival Research Center", "placeholder": "Search the BU Archive",        "domain":"http://archives.bu.edu/search/?search=SEARCH&query="},
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

/** context-sensitive search form allowing you to search across multiple 'search_options' */
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
      str_options: {type: String},
      /** classes added to the search <button> */
      search_btn_classes: {type: String},
      
      /* configurable defaults for logging, dropdown, submission action */
      debug: {type: Boolean},
      prevent_action: {type: Boolean}
    };
  }

  /** don't need 'slot' functionality, so lets use Light DOM */
  createRenderRoot(){ return this; }
  
  /** for development purposes, react to manual changes to `this.curr_url` via _urlUpdated */
  attributeChangedCallback(name, oldValue, newValue){
    super.attributeChangedCallback(name, oldValue, newValue);
    this._logToConsole(`${name} changed from ${oldValue} to ${newValue}.`);
  }

  render() {
    this._initSelectedOptions();

    /* determine whether or not to show dropdown of options */
    let optionsDisplay = (this.options.length <= 1)? html`` : html`
      <select id="search_source_select" @change="${(e) => this.str_selected = handleSearchSelect(e)}" @keypress="${(k) => this._handleSearchEnter(k)}">
        ${this.options.map((o) => html`<option value="${o.value}">${o.name}</option>`)}
      </select>
    `;
    
    return html`
      <div id="bulib-search">
        <input id="search_query_input" type="text" placeholder="${this.selected["placeholder"]}" @keypress="${(e) => this._handleSearchEnter(e)}"></input>
        ${optionsDisplay}
        <button type="submit" class="${this.search_btn_classes}" title="Search ${this.selected["name"]}" @click="${(e) => this._doSearch()}">Search</button>
      </div>
    `;
  }

  /** set display options on user input (if present) */
  _initSelectedOptions(){
    
    // try to set 'options' and 'selected' based on user input (with fallbacks) 
    this.options = []; this.selected = {};
    if(!this.str_options || this.str_options === ""){ 
      this.options = default_to_just_primo? [_getOptionFromCode("primo")] : search_options;
    }else{
      let i, searchOption, optionCode;
      for(i=0; i<search_options.length; i++){
        searchOption = search_options[i];
        optionCode = searchOption["value"];
        if(optionCode && this.str_options.includes(optionCode)){ 
          this.options.push(searchOption); 
        }
      }
    }
    
    // enact default yor possible options list
    if(!this.options  || this.options.length  < 1){ 
      this.options = default_to_just_primo ? [_getOptionFromCode("primo")] : search_options; 
    } 
    
    // set 'str_selected', defaulting to the first 'option'
    if(Object.keys(this.selected).length == 0){ 
      this.selected = _getOptionFromCode(this.str_selected, this.options); 
    }
  }
  
  /** once html is on the page, update the visual to reflect the web component's data  */
  updated(){
    // auto-set this.str_selected to the first option if it's empty
    if(this.str_options && !this.str_selected){
      this.str_selected = this.str_options.split(" ")[0] || "";
    }
    
    // if selected is accurately set, update the <select> element to reflect the new value
    if(this.selected){ 
      let searchSourceSelect = this.querySelector("#search_source_select");
      let lsSearchSourceOptions = searchSourceSelect ? searchSourceSelect.options : [];
      for(let i=0; i<lsSearchSourceOptions.length; i++){
        let option = lsSearchSourceOptions[i];
        if(option.value === this.selected["value"]){ option.selected = "selected"; }
      }
    }
    
    // set the input box width based on the placeholder
    let inputElem = this.querySelector("#search_query_input");
    inputElem.setAttribute('size',inputElem.getAttribute('placeholder').length);
  }

  /** perform a search for the input query on the selected database */
  _doSearch(){
    // obtain values required for the search from the input and currently selected option.
    let userInputElem = this.querySelector("#search_query_input");
    let query = userInputElem ? userInputElem.value : "";

    // track and store the selected option and its information
    let option = (Object.keys(this.selected).length > 0) ? this.selected : this.options[0];
    let site = option["value"];
    let domain = option["domain"] || "";

    //conditionally log and/or perform search
    let domain_to_print = domain.length > 80? domain.substring(0,80) + "..." : domain;
    this._logToConsole(`searching '${site}' for query: '${query}' on domain: '${domain_to_print}'`);
    if(!this.prevent_action === true){ window.location = domain + encodeURIComponent(query); }
  }
  
  /** call this._doSearch() if key that user pressed is ENTER */ 
  _handleSearchEnter(event){
    if(event.keyCode && event.keyCode === ENTER_KEY_VALUE){ this._doSearch(); }
  }
  
  _logToConsole = function(message){
    if(this.debug){ console.log("bulib-search) " + message); }
  }

}

customElements.define('bulib-search', BULSearch);
