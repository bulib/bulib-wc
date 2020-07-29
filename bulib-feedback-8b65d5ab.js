import{h as e}from"./lit-html-2435d3b6.js";import{L as t}from"./lit-element-fdaadb84.js";import{s as o}from"./google_analytix-b0686824.js";const s=1,i=0;window.customElements.define("bulib-feedback",class extends t{createRenderRoot(){return this}static get properties(){return{code:{type:String},debug:{type:Boolean},prevent_action:{type:Boolean}}}connectedCallback(){super.connectedCallback(),this._logToConsole(`element with code '${this.code}' loaded`)}render(){return e`
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
        <button @click="${e=>this._submitFeedback(s)}">Yes</button>
        <button @click="${e=>this._submitFeedback(i)}">No</button>
      </div>
    `}_submitFeedback(e){let t=this.code;o("bulib-feedback",t,e?"helpful":"not-helpful",e),this.querySelector("#form").innerHTML="<em>thanks for your feedback!</em>"}_logToConsole(e){this.debug&&console.log("bulib-feedback) "+e)}});
//# sourceMappingURL=bulib-feedback-8b65d5ab.js.map
