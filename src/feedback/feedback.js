import {LitElement, html} from 'lit-element/lit-element';

export default class BULibFeedback extends LitElement {

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
    return html`<em>bulib-feedback content here</em>`;
  }

  _logToConsole(message){
    if(this.debug){ console.log("bulib-feedback) " + message); }
  }

}