import {LitElement, html} from 'lit-element/lit-element';

const LOCAL_STORAGE_EXPIRY_TIME = 1000 * 60 * 60 * 24 * 3; // 3 days

/**
 * display time-sensitive message, call-to-action across the top of a screen
 */
export default class BULAnnounce extends LitElement {

  // don't need 'slot' functionality, so lets use Light DOM
  createRenderRoot(){ return this; }

  static get properties() {
    return {
      /** information to display to the user */
      message: {type: String},

      /** (optional) main action displaying the */
      cta_text: {type: String},
      /** (optional) link the user should click to address/learn more about the message */
      cta_url: {type: String},
      /** (optional) type of message to display (determine ) [info, success, alert, warn] */
      severity: {type: String},
      
      /** (debugging) set the status to dismissed */
      dismissed: {type: Boolean},
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
      <div class="announce-banner ${this.severity}" disabled="${this._getDismissedValueFromSessionStorage()}">
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
   * @TODO convert to an new src/_helpers/storage.js
   */
  _getDismissedValueFromSessionStorage(){
    let dismissedValueFromLocalStorage = false;
    try{
      // look in localStorage for our announcement-dismissed variables
      let storedValue = localStorage.getItem("announcement-dismissed");
      let lastUpdated = localStorage.getItem("announcement-dismissed-when");
      
      // if both localStorage values are present...
      if(!!storedValue && !!lastUpdated){

        // query the value if it hasn't 'expired': 
        if( (Date.now() - lastUpdated) < LOCAL_STORAGE_EXPIRY_TIME){
          dismissedValueFromLocalStorage = localStorage.getItem("announcement-dismissed") == "true";
          
          if(localStorage.getItem("announcement-dismissed") == "true" && !this.dismissed){
            this._logToConsole(`unexpired 'announcement-dismissed' value of '${storedValue}' read from localStorage`);
          }

        // reset them (both) if they have expired
        }else{
          localStorage.removeItem("announcement-dismissed");
          localStorage.removeItem("announcement-dismissed-when");
          this._logToConsole(`expired 'announcement-dismissed*' values have been removed.`);
        }
      }
    }catch(exception){
      this._logToConsole("exception trying to getItem from localStorage: " + exception.message);
    }finally{
      return dismissedValueFromLocalStorage || this.dismissed;
    }
  }

  _toggleDismissed(){
    let value_before = this._getDismissedValueFromSessionStorage();

    try{ // note: safari breaks with a security error any time 'localStorage' is accessed
      localStorage.setItem("announcement-dismissed", !value_before); 
      localStorage.setItem("announcement-dismissed-when", Date.now()); 
    }
    catch(exception){ this._logToConsole("exception trying to setItem in localStorage: " + exception.message); }
    finally{
      this.dismissed = !value_before;
    }
    
    this._logToConsole(`dismiss clicked, session's' 'announcement-dismissed' value '${value_before}'->'${this._getDismissedValueFromSessionStorage()}'`);
    this.requestUpdate();
  }

  _logToConsole(message){
    if(this.debug){ console.log("bulib-announce) " + message); }
  }
}
