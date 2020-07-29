import{h as t}from"./lit-html-2435d3b6.js";import{L as e,c as i}from"./lit-element-fdaadb84.js";window.customElements.define("bulib-color",class extends e{updated(){super.connectedCallback(),this.var||this.val||(this.val="lightblue")}static get properties(){return{var:{type:String},val:{type:String},white:{type:Boolean}}}static get styles(){return[i`
        div.color-box { background-color: #eee; }
        .color-box > div { 
          padding: 10px; 
          border: solid black 1px;
          font-weight: bold;
        }
      `]}render(){let e=this.var?this.var:this.val||"[unknown]",i=getComputedStyle(document.body).getPropertyValue(this.var)||this.val;return t`
      <div class="color-box" style="width: fit-content; min-width: 75px; text-align: left;">
        <div><strong>${e}</strong></div>
        <div style="background-color: ${i}; color: ${this.white?"white":"black"}">${i}</div>
      </div>
    `}});
//# sourceMappingURL=bulib-color-0033bbcb.js.map
