import {LitElement, html} from 'lit-element/lit-element';
import {sendGAEvent} from '../_helpers/google_analytix';

// codify values for 'helpful' default 
const HELPFUL = 1; const NOT_HELPFUL = 0;

export default class BULibFeedback extends LitElement {

  createRenderRoot(){ return this; }  // use light DOM

  static get properties(){
    return {
      /* unique identifier for each feedback input */
      code: {type:String},
      /* controls logging to the console */
      debug: {type:Boolean},
      /* override main action (prevent GAEvent logging) */
      prevent_action: {type:Boolean}
    }
  }

  connectedCallback(){
    super.connectedCallback();
    this._logToConsole(`element with code '${this.code}' loaded`);
  }

  render(){
    return html`
      <div style="display: ruby;">
        <strong class="prm">Was this helpful?</strong>
        <div id="form" class="inline">
          <button @click="${(e) => this._submitFeedback(HELPFUL)}">Yes</button>
          <button @click="${(e) => this._submitFeedback(NOT_HELPFUL)}">No</button>
        </div>
      </div>
    `;
  }

  _submitFeedback(value){
    let action = this.code;
    let label = !!value? "helpful":"not-helpful";
    sendGAEvent("bulib-feedback", action, label, value);
    this.querySelector("#form").innerHTML = '<em>thanks for your feedback!</em>';
  }

  _logToConsole(message){
    if(this.debug){ console.log("bulib-feedback) " + message); }
  }

}