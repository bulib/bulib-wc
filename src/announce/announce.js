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

      /** (optional) type of message to display (determine ) [info, success, alert, warn] */
      severity: {type: String},
      
      /** (debugging) enable logging (click tracking)  */
      debug: {type: Boolean},
      /** (debugging) disable show/hide check, cta  */
      prevent_action: {type: Boolean}
    };
  }

  render(){
    let icon = "info";
    return html`
      <div class="announce-banner flex ${this.severity}">
        <i class="material-icons">${icon}</i>
        <button id="dismiss-announcement" area-label="dismiss announcement" type="button">
          <i class="material-icons">close</i>&nbsp;<span hide-xs="" class="hide-xs txtv">DISMISS</span>
        </button>
      </div>
    `;
  }
}
