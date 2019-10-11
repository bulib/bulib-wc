import {LitElement, html} from 'lit-element/lit-element';
import {sendGAEvent} from '../_helpers/google_analytix';

/**
 * display a single concept (heading, description, cta, icon) in a small UI element
 */
export default class BULCard extends LitElement {

  // don't need 'slot' functionality, so lets use Light DOM
  createRenderRoot(){ return this; }

  static get properties() {
    return {
      /** name and primary interactable link in the card */
      title: {type: String},
      /** short bit of text describing the main action/concept */
      description: {type: String},
      /** material icon displayed to the left of the  */
      icon: {type: String},
      /** optional link for the href/window.open() action */
      link: {type: String},
      /** custom javascript */
      action: {type: String},
      /** add 'small' class to card */
      small: {type: Boolean},
      
      debug: {type: Boolean}
    };
  }

  render() {
    let href = (!!this.action || !this.link)? "javascript:void(0);" : this.link;
    return html`
      <div class="card${this.small === true? ' small' : ''}">
        <i class="material-icons" @click="${(ev) => this._logGAEvent()}">${this.icon}</i>
        <div class="inline">
          <h3><a @click="${(ev) => this._logGAEvent()}" href="${href}">${this.title}</a></h3>
          <p>${this.description}</p>
        </div>
      </div>
    `;
  }

  _logGAEvent(event){
    sendGAEvent("bulib-card", this.title.toLowerCase(), window.location.pathname);
    if(this.action){ eval(this.action); }
    else{ window.location = this.link; }
  }
  
  _logToConsole(message){
    if(!!this.debug){ console.log("bulib-card) " + message); }
  }

}
