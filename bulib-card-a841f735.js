import{h as html}from"./lit-html-2435d3b6.js";import{L as LitElement}from"./lit-element-fdaadb84.js";import{s as sendGAEvent}from"./google_analytix-b0686824.js";class BULCard extends LitElement{createRenderRoot(){return this}static get properties(){return{title:{type:String},description:{type:String},icon:{type:String},link:{type:String},action:{type:String},small:{type:Boolean},debug:{type:Boolean}}}render(){let t=this.action||!this.link?"javascript:void(0);":this.link;return html`
      <div class="card${!0===this.small?" small":""}">
        <i class="material-icons" @click="${t=>this._logGAEvent()}">${this.icon}</i>
        <div class="inline">
          <h3><a @click="${t=>this._logGAEvent()}" href="${t}">${this.title}</a></h3>
          <p>${this.description}</p>
        </div>
      </div>
    `}_logGAEvent(event){sendGAEvent("bulib-card",this.title.toLowerCase(),window.location.pathname),this.action?eval(this.action):window.location=this.link}_logToConsole(t){this.debug&&console.log("bulib-card) "+t)}}window.customElements.define("bulib-card",BULCard);
//# sourceMappingURL=bulib-card-a841f735.js.map
