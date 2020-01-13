import {LitElement, html} from 'lit-element/lit-element';

import {readExpiringLocalValue, setExpiringLocalValue} from '../_helpers/storageUtility';

/**
 * display time-sensitive message, call-to-action across the top of a screen
 */
export default class BULAnnounce extends LitElement {

  // don't need 'slot' functionality, so lets use Light DOM
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
    let sanitized_message = this.message? this.message.replace(/&#39;/g, "'") : "this is a default message";
  
    return html`
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
   * attempt to gather dismissal information from localStorage (fallback to 'false') 
   */
  _getDismissedValue(){
    if(this.hasAttribute("dismissed")){
      // only return false if it's explicitly set to "false"
      return this.hasAttribute("dismissed") && this.getAttribute("dismissed") !== "false";
    }else{
      return readExpiringLocalValue(this._dismissedId(), false) || false;
    }
  }

  _dismissedId(){
    let dismissed_id = "announcement-dismissed";
    
    try{ dismissed_id += "-"+this.code; }
    catch(exception){ this._logToConsole("error slugifying message to get new id: " + exception.message); }

    return dismissed_id;
  }

  _toggleDismissed(){
    let value_before = this._getDismissedValue();
    
    // auto-update the property and attribute value for the currently loaded tag
    this.setAttribute("dismissed", !value_before);

    // ensure the component updates (re-renders)
    this._logToConsole(`dismiss clicked, session's' '${this._dismissedId()}' value '${value_before}'->'${this._getDismissedValue()}'`);
    this.requestUpdate();

    // save this updated setting in the localStorage
    setExpiringLocalValue(this._dismissedId(), !value_before);
  }

  _logToConsole(message){
    if(this.debug){ console.log("bulib-announce) " + message); }
  }
}
