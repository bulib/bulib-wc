import {LitElement, html} from 'lit-element/lit-element';


export default class NewComponent extends LitElement {

  createRenderRoot(){ return this; }  // use light DOM

  static get properties(){
    return {
      /** unique identifier for each feedback input (event category)*/
      code: {type:String},
      
      locoso: {type:String},

      /** [debugging] enables logging to the console */
      debug: {type:Boolean},

    }
  }

  connectedCallback(){
    super.connectedCallback();
    this._logToConsole(`element with code '${this.code}' loaded`);
  }

  render(){
    return html`
      <div class="secondary-menu mbl">
      <strong class="bigger-text">Hello world!</strong>
      <a class="bulib-btn" href="javascript:void()">Primary (a)</a>
        </div>
        <bulib-search str_options="primo wp help" str_selected="wp" debug></bulib-search>
        <bulib-card small debug
    title="Email" icon="email" link="https://askalibrarian.bu.edu/form.php?quid=511" 
    description="Email us your research questions and we’ll respond within 24 hours.">
  </bulib-card>
  <bulib-hours library="${this.code}" class="mrn"></bulib-hours>
  <bulib-locoso library="${this.locoso}"></bulib-locoso>
    `;
  }

  _logToConsole(message){
    if(this.debug){ console.log("bulib-feedback) " + message); }
  }

}