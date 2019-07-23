import {LitElement, html} from 'lit-element/lit-element'; //'https://unpkg.com/lit-element@2.2.0/lit-element.js?module';
const ENTER_KEY_VALUE = 13;
const default_to_just_primo = true;

/** data on the overall search sources we have available to search on */
export const search_options = [
  {"value":"help",      "name":"Ask a Librarian",          "placeholder": "Type your question here",      "domain":"http://askalibrarian.bu.edu/search/?t=0&q="},
  {"value":"primo",     "name":"BU Libraries Search",      "placeholder": "Search library resources",     "domain":"https://buprimo.hosted.exlibrisgroup.com/primo-explore/search?vid=BU&institution=BOSU&search_scope=default_scope&highlight=true&lang=en_US&query=any,contains,"},
  {"value":"wp",        "name":"BU Libraries Site",        "placeholder": "Search library info/services", "domain":"https://search.bu.edu/?site=www.bu.edu%2Flibrary&q="},
  {"value":"industries","name":"Industry Survey Locator",  "placeholder": "Search for industry surveys",  "domain":"https://buprimo.hosted.exlibrisgroup.com/primo-explore/search?vid=ISL&institution=BOSU&search_scope=default_scope&highlight=true&lang=en_US&query=any,contains,"},
  {"value":"guides",    "name":"Library Guides",           "placeholder": "Search Research Guides",       "domain":"http://library.bu.edu/srch.php?q="},
  {"value":"openbu",    "name":"Open BU",                  "placeholder": "Search BU Digital Collections","domain":"https://open.bu.edu/discover?query="},
  {"value":"worldcat",  "name":"OCLC WorldCat",            "placeholder": "BU Libraries Search",          "domain":"https://bu.on.worldcat.org/search?queryString="}
  // {"value":"directory", "name":"Staff Directory",          "placeholder": "Search for people at BU",      "domain":"https://www.bu.edu/phpbin/directory/?q="},
  // {"value":"hgar",      "name":"Archival Research Center", "placeholder": "Search the BU Archive",        "domain":"http://archives.bu.edu/search/?search=SEARCH&query="},
];

const search_option_codes = search_options.map( x => x.value );

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
  return event.target.defaultValue || defaultCode;
};

/** context-sensitive search form allowing you to search across multiple 'search_options' */
export default class BULibSearch extends LitElement {

  constructor(){ 
    super(); 
    this.options = [];
    this.selected = {};
  }

  /** allow consumer to set the options available in the dropdown, and which one is selected */
  static get properties() {
    return {
      /** selected search source (defaulted to first option) */
      str_selected: {type: String},
      /** search sources included in the dropdown (defaulted to all) */
      str_options: {type: String},
      /** classes added to the search <button> */
      search_btn_classes: {type: String},
      
      /* configurable defaults for logging, dropdown, submission action */
      debug: {type: Boolean},
      prevent_action: {type: Boolean}
    };
  }

  render() {
    this._setSelectedOptions();
    let hidden_html = (!this.options || this.options.length <= 1)? " hidden": "";
    
    return html`
      <style>
        .bulib-search-wrapper {
          width: 100%;
          background-color: #5a5d61;
        }
        .bulib-search { 
          display: flex;
          flex-wrap: wrap;
        }
        .search-box, .search-options {
          padding: 0.2em 0.7em; 
          vertical-align: middle;
        }
        .search-box {
          display: flex; 
          flex: auto;
          max-width: 800px;
        }
        .search-box > input {
          flex: 80%;
        }
        .search-options {
          color: white;
          flex: auto;
        }
        .search-options > label {
          margin-right: 0.5em;
          padding-left: 0.5em;
          cursor: pointer;
        }
        input[type=radio] {
          /* transform: scale(1.3); */
          cursor: pointer;
          margin-right: 7px;
          vertical-align: middle;
        }
        button { 
          background-color: #35619c; 
          color: white; 
          cursor: pointer;
        }
        button:hover { background-color: #265694; }
        .hidden { display: none; }

        /* medium-sized screen and above */
        @media only screen and (min-width: 400px){
          .search-box > *, .search-options > label { 
            font-size: 1.1em; 
          }
          .bulib-search {
            font-size: 1.3em;
            padding: 1em;
            min-width: 150px;
          }
        }
      </style>
      <div class="bulib-search-wrapper">
        <div class="bulib-search">
          <div class="search-box">
            <input type="text" id="search-query-input" placeholder="${this.selected["placeholder"]}" 
              @keypress="${(e) => this._handleSearchEnter(e)}">
            <button type="submit" title="Search${this.selected["name"]}" class="${this.search_btn_classes}" 
              @click="${(e) => this._doSearch()}" style="margin-left: 0px;">
              <i class="material-icons">search</i>
            </button>
          </div>
          <div class="search-options${hidden_html}">
            ${this.options.map((o) => html`
              <label>
                ${this.selected["value"] == o.value
                  ? html`<input type="radio" name="source" value="${o.value}" checked
                            @change="${(e) => this.str_selected = handleSearchSelect(e)}"
                            @keypress="${(k) => this._handleSearchEnter(k)}">${o.name}` 
                  : html`<input type="radio" name="source" value="${o.value}"
                            @change="${(e) => this.str_selected = handleSearchSelect(e)}"
                            @keypress="${(k) => this._handleSearchEnter(k)}">${o.name}`
                }
              </label>`
            )}
          </div>
        </div>
      </div>
    `;
  }

  /** set display options on user input (if present) */
  _setSelectedOptions(){
    
    // try to set 'options' and 'selected' based on user input (with fallbacks) 
    this.options = []; this.selected = {};
    if(!this.str_options || this.str_options === ""){ 
      this.str_options = default_to_just_primo? ["primo"] : search_options;
    }
      
    let i, option, optionCode;
    let selectedOptionCodes = this.str_options.includes(" ")? this.str_options.split(" ") : [this.str_options];
    for(i=0; i<selectedOptionCodes.length; i++){
      optionCode = selectedOptionCodes[i];
      if(optionCode && search_option_codes.includes(optionCode)){ 
        option = _getOptionFromCode(optionCode);
        if(option){ this.options.push(option); }
      }
    }

    // set 'str_selected', defaulting to the first 'option'
    if(Object.keys(this.selected).length == 0){ 
      this.selected = _getOptionFromCode(this.str_selected, this.options); 
    }
  }

  /** perform a search for the input query on the selected database */
  _doSearch(){
    // obtain values required for the search from the input and currently selected option.
    let userInputElem = this.shadowRoot.querySelector("input#search-query-input");
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
  
  _logToConsole(message){
    if(this.debug){ console.log("bulib-search) " + message); }
  }

}
