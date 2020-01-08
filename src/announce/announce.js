import {LitElement, html} from 'lit-element/lit-element';

/**
 * display time-sensitive message, call-to-action across the top of a screen
 */
export default class BULAnnounce extends LitElement {

  // don't need 'slot' functionality, so lets use Light DOM
  createRenderRoot(){ return this; }

  connectedCallback(){
    super.connectedCallback();
    if(!this.message){ this.message = "this is a default message"; }
  }

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
      
      /** (debugging) enable logging (click tracking)  */
      debug: {type: Boolean},
      /** (debugging) disable show/hide check, cta  */
      prevent_action: {type: Boolean}
    };
  }

  render(){
    this._logToConsole(`current sessionStorage 'announcement-dismissed' value: '${this._getDismissedValueFromSessionStorage()}'`);
    let icon = "";
    switch(this.severity){ // material icon code [https://material.io/resources/icons/]
      case "success": icon = "check_circle"; break;
      case "alert":   icon = "announcement"; break;
      case "warn":    icon = "report_problem"; break;
      case "info":
      default:        icon = "info"; break;
    }
    return html`
      <div class="announce-banner flex ${this.severity}">
        <i class="material-icons">${icon}</i>
        <span class="message">${this.message}
          ${!!this.cta_url? html`<a href="${this.cta_url}">${this.cta_text}</a>`: ``}
        </span>
        <button type="button" @click="${(e) => this._logToConsole("dismiss clicked")}">
          <i class="material-icons">close</i>&nbsp;<span class="txtv">DISMISS</span>
        </button>
      </div>
    `;
  }
  _logToConsole(message){
    if(this.debug){ console.log("bulib-announce) " + message); }
  }
}
