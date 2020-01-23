import {LitElement, html} from 'lit-element/lit-element';

import {readExpiringLocalValue, setExpiringLocalValue} from '../_helpers/storageUtility';

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
