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
      link: {type: String},
      /** custom javascript */
      js: {type: String},
      
      debug: {type: Boolean}
    };
  }

  render() {
    let href = !!this.js ? "javascript:void(0);" : this.link;
    let action = !!this.js ? this.js : `window.open('${this.link}', '_self')`;
    return html`
      <div class="card">
        <i class="material-icons" onclick="${action}">${this.icon}</i>
        <div class="inline">
          <h3><a onclick="${action}" href="${href}">${this.title}</a></h3>
          <p>${this.description}</p>
        </div>
      </div>
    `;
  }
  
  _logToConsole(message){
    if(!!this.debug){ console.log("bulib-card) " + message); }
  }

}
