import {LitElement, html} from 'lit-element/lit-element';

import {readExpiringLocalValue, setExpiringLocalValue} from '../_helpers/storageUtility';

/* references to google sheets API and the entries within it */
const google_sheets_document_id = '1ElW0CUOV3LvcHuYxK2BZfFjo65a-XDrlNJtnrelA6tM';
const codes_that_map_to_api_entry = {
  "primo-BU": 0, "primo": 1, "primo-BULAW": 2, "primo-journals": 3, "primo-test": 4, "primo-ISL": 5,
  "testing": 6,
  "wordpress": 7,
  "libguides": 8, 
  "libanswers": 10, "libanswers-business": 11,
  "libcal": 9,
  "all": 13, "covid-19": 13
}

const primo_specific_padding = html`
  <style type="text/css">
    /* site-specific code for primo's announce-banner.js - adds padding below the search bar */ 
    prm-search-bar { padding-bottom: var(--primo-announce-padding, 60px); }
    .__xs prm-search-bar, .__sm prm-search-bar { padding-bottom: var(--primo-announce-padding-small, 68px); }
  </style>
`;

/**
 * display time-sensitive message, call-to-action across the top of a screen
 */
export default class BULAnnounce extends LitElement {

  // rendering the content into the light DOM enables it to be styled by the default css
  createRenderRoot(){ return this; }

  static get properties() {
    return {
      /** unique identifier */
      code: {type: String},
      /** information to display to the user */
      message: {type: String},

      /** (optional) main action displaying the */
      cta_text: {type: String},
      /** (optional) link the user should click to address/learn more about the message */
      cta_url: {type: String},
      /** (optional) type of message to display (determine ) [info, success, alert, warn] */
      severity: {type: String},
      
      /** (debugging) set the status to dismissed */
      dismissed: {type: Boolean, reflect: true},
      /** (debugging) enable logging (click tracking)  */
      debug: {type: Boolean},
      /** (debugging) disable show/hide check, cta  */
      prevent_action: {type: Boolean}
    };
  }

  /** when first connected, iff there's a special code, set contents based on the API */
  connectedCallback(){
    super.connectedCallback();
    if(this.code in codes_that_map_to_api_entry){
      this.dismissed = true;  // default to dismissed (don't flash before/during the API call)
      let row_id = codes_that_map_to_api_entry[this.code];
      fetch('https://spreadsheets.google.com/feeds/list/'+google_sheets_document_id+'/1/public/values?alt=json', { method:'GET', mode:'cors', cache:'no-store' })
        .then(response => response.json())
        .then(json => json.feed.entry[row_id])
        .then(data => this._setDataHelperWithDataFromAPI(data));
    }
  }

  /** helper that updates the components information with the Sheets its given */
  _setDataHelperWithDataFromAPI(data){
    this._logToConsole(data);

    // un-dismiss if the 'show_banner' checkbox has been selected
    if(data.gsx$showbanner.$t == "TRUE"){ this.dismissed = false; }

    // set the message from the API, but try not 
    let message = data.gsx$messagetext.$t;
    if(message.length > 0){ this.message = message; }
    
    // set additional data
    this.cta_url = data.gsx$messagelink.$t;
    this.severity = data.gsx$messageseverity.$t || 'info';
    this.cta_text = data.gsx$ctatext.$t;

    // manually trigger a re-render 
    this.requestUpdate();
  }

  render(){
    let icon = "";
    switch(this.severity){ // material icon code [https://material.io/resources/icons/]
      case "success": icon = "check_circle"; break;
      case "alert":   icon = "announcement"; break;
      case "warn":    icon = "report_problem"; break;
      case "info":
      default:        icon = "info"; break;
    }
    let sanitized_message = this.message? this.message.replace(/&#39;/g, "'") : "Please standby while we address an ongoing issue, and email 'ask@bu.edu' if the problem persists";
  
    return html`
      ${ window.location.pathname.includes("primo-explore") && (this.debug || !this._getDismissedValue()) ? primo_specific_padding: html``}
      <div class="announce-banner${ this.severity != undefined? " "+this.severity : ""}" disabled="${this._getDismissedValue()}">
        <i class="material-icons">${icon}</i>
        <span class="message">${sanitized_message}</span>
        ${!!this.cta_url? html`<span class="cta"><a href="${this.cta_url}">${this.cta_text}</a></span>`: ``}
        <button type="button" @click="${(e) => this._toggleDismissed()}">
          <i class="material-icons">close</i>&nbsp;<span class="txtv">DISMISS</span>
        </button>
      </div>
    `;
  }

  /** 
   * attempt to gather dismissal information from 'storageUtility' helper, iff a hardcoded dismissal 
   *   is not already set/present (e.g `dismissed`, `dismissed="true"`, `dismissed="false"`)
   */
  _getDismissedValue(){
    if(this.hasAttribute("dismissed")){
      // returns true if the attribute is present and set to anything other than 'false'
      return this.hasAttribute("dismissed") && this.getAttribute("dismissed") !== "false";
    }else{
      // only check the value when it wouldn't be overwritten anyway
      return readExpiringLocalValue(this._dismissedId(), false) || false;
    }
  }

  /** create and return a unique id to distinguish 'dismissal' information from other instances */
  _dismissedId(){
    let dismissed_id = "announcement-dismissed";
    
    try{ dismissed_id += "-"+this.code; }
    catch(exception){ this._logToConsole("error slugifying message to get new id: " + exception.message); }

    return dismissed_id;
  }

  /** react to user-triggered dismissal by setting the stored memory value and hardcoded attribute/property */
  _toggleDismissed(){
    let value_before = this._getDismissedValue();
    
    // auto-update the property and attribute value for the currently loaded tag
    this.setAttribute("dismissed", !value_before);

    // ensure the component updates (re-renders) and hides (or shows) the component
    this._logToConsole(`dismiss clicked, session's' '${this._dismissedId()}' value '${value_before}'->'${this._getDismissedValue()}'`);
    this.requestUpdate();

    // save this updated setting in the localStorage
    setExpiringLocalValue(this._dismissedId(), !value_before);
  }

  _logToConsole(message){
    if(this.debug){ console.log("bulib-announce) " + message); }
  }
}
