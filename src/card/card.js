import {LitElement, html} from 'lit-element/lit-element';

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
      href: {type: String},
      /** custom javascript */
      action: {type: String},
      
      debug: {type: Boolean}
    };
  }

  render() {
    let action = !!this.action ? this.action : `window.open('${this.href}', '_self')`;
    return html`
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> <!-- @todo: replace with npm install -->
      <style>
        /* cards */
        .deck, .ctas {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
        }
        .card, .cta {
          flex: 2 3 300px; 
          display: flex;
          justify-content: space-between;
          max-width: 325px;
          /* border: 1px gainsboro solid; */
        }
        .card i { 
          font-size: 4em;
          margin: 0.2em;
          text-align: center;
          flex: 1;
        }
        .card i:hover { cursor: pointer; }
      </style>
      <div class="card">
        <i class="material-icons" onclick="${action}">${this.icon}</i>
        <div class="inline">
          <h3><a onclick="${action}" href="${this.href}">Email</a></h3>
          <p>${this.description}</p>
        </div>
      </div>
    `;
  }

  connectedCallback(){
    this._logToConsole(`'${this.title}' card loaded`);
  }
  
  _logToConsole(message){
    if(!!this.debug){ console.log("bulib-card) " + message); }
  }

}
