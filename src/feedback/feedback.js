import {LitElement, html} from 'lit-element/lit-element';
import {sendGAEvent} from '../_helpers/google_analytix';

// codify values for 'helpful' default 
const HELPFUL = 1; const NOT_HELPFUL = 0;

export default class BULibFeedback extends LitElement {

  createRenderRoot(){ return this; }  // use light DOM

  static get properties(){
    return {
      /** unique identifier for each feedback input (event category)*/
      code: {type:String},
      
      /** [debugging] enables logging to the console */
      debug: {type:Boolean},

      /** [debugging] override main action (prevent GAEvent logging) */
      prevent_action: {type:Boolean}
    }
  }

  connectedCallback(){
    super.connectedCallback();
    this._logToConsole(`element with code '${this.code}' loaded`);
  }

  render(){
    return html`
      <style type="text/css">
        bulib-feedback button { 
          border-radius: 5px; 
          margin-right: 5px; 
        }
        bulib-feedback button:hover { 
          background-color: rgba(0, 0, 0, 0.05); 
          cursor: pointer;
        }
      </style>
      <i class="material-icons-outlined prm">feedback</i>
      <strong class="prl">Was this helpful?</strong>
      <div id="form" class="inline">
        <button @click="${(e) => this._submitFeedback(HELPFUL)}">Yes</button>
        <button @click="${(e) => this._submitFeedback(NOT_HELPFUL)}">No</button>
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