import {LitElement, html, css} from 'lit-element/lit-element';
import {search_options} from './search_options';

import {sendGAEvent} from '../_helpers/google_analytix';

const ENTER_KEY_VALUE = 13;
const default_to_just_primo = true;

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

  static get styles(){
    return [
      css`
        .bulib-search-wrapper {
          width: 100%;
          background-color: var(--color-primary-background, #212121);
          background: linear-gradient(var(--color-primary-background-dark), var(--color-primary-background-light));
          border-radius: 4px;
          font-family: 'Benton', sans-serif !important;
        }
        #bulib-search { 
          display: flex;
          flex-wrap: wrap;
        }
        .search-box, .search-options {
          margin: 0.2rem 0.4rem; 
        }
        .search-box {
          display: flex; 
          flex: auto;
          max-width: 750px;
        }
        .search-box > input {
          flex: 80%;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
          border: 0px;
          padding-left: 6px;
        }
        .search-options {
          padding-top: 10px;
          color: var(--color-primary-text-light, white);
          flex: auto;
        }
        .search-options > label {
          margin-right: 0.5rem;
          padding-left: 0.5rem;
          font-size: medium;
          cursor: pointer;
        }
        input[type=radio] {
          cursor: pointer;
          margin-right: 7px;
        }
        button {
          background-color: var(--color-button-background); 
          color: var(--color-button-text, white); 
          cursor: pointer;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          border: 0px;
          font-family: 'Source Sans Pro';
        }
        button:hover, button:focus, button:active { 
          background-color: var(--color-button-background-dark, #1B598C);
         }
        .hidden { display: none; }

        /* medium-sized screen and above */
        @media only screen and (min-width: 300px){
          #bulib-search { padding: 10px; }
          .search-box > input, input[type=radio], .search-options > label { 
            font-size: large !important; 
          }
        }
      `
    ]
  }

  render() {
    this._setSelectedOptions();
    let hidden_html = (!this.options || this.options.length <= 1)? " hidden": "";
    
    return html`
      <div class="bulib-search-wrapper">
        <div id="bulib-search">
          <div class="search-box">
            <input type="text" id="search-query-input" placeholder="${this.selected["placeholder"]}" 
              @keypress="${(e) => this._handleSearchEnter(e)}">
            <button type="submit" title="Search ${this.selected["name"]}" class="${this.search_btn_classes}" 
              @click="${(e) => this._doSearch()}" style="margin-left: 0px;">
              <!-- material-icon svg from https://material.io/resources/icons/?icon=search&style=baseline -->
              <svg xmlns="http://www.w3.org/2000/svg" style="padding-top: 2px;" width="30" height="30" fill="white" viewBox="0 0 24 24">
                <path font-weight="bold" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
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
    if(!this.prevent_action === true){ 
      sendGAEvent("bulib-search", site, query);
      window.location = domain + encodeURIComponent(query); 
    }
  }
  
  /** call this._doSearch() if key that user pressed is ENTER */ 
  _handleSearchEnter(event){
    if(event.keyCode && event.keyCode === ENTER_KEY_VALUE){ this._doSearch(); }
  }
  
  _logToConsole(message){
    if(this.debug){ console.log("bulib-search) " + message); }
  }

}