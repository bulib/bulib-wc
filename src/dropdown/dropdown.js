import {html, LitElement} from 'https://unpkg.com/@polymer/lit-element@0.6.4/lit-element.js?module';

/** Reactive/responsive header with custom subsite display, bulib-search integration */
export class BULDropdown extends LitElement {
  
  /** store information on the current page */
  static get properties() {
    return {
      open: {type: Boolean},
      debug: {type: Boolean}
    };
  }

  /** render the html (with 'bulib-search' wc) to the page  */
  render() {
    let domain = this.debug? "" : "https://cdn.jsdelivr.net/gh/bulib/bulib-wc";
    this._logToConsole("loaded");
    
    return html`
      <link rel="stylesheet" type="text/css" href="${domain}/assets/css/common.css">
      <style>
        .dropdown-header:hover > .dropdown-content { display: block; }
        .dropdown-content { 
          background-color: lightgrey;
          color: inherit;
        }
        ul.dropdown-content {
          padding-left: 0px;
          position: relative;
        }
      </style>
      <div>
        <div class="dropdown-header" @click="${(e) => this._toggleOpen()}">
          <div class="left"><slot name="header"></slot></div>
          &nbsp;
          <div class="inline">${this.open ? html`^` : html`v`}</div>
        </div>
        <div class="dropdown-content" style="display: ${this.open ? "block" : "none"}">
          <slot name="content"></slot>
        </div>
      </div>`;
  }
  
  connectedCallback(){ this.open = false; }
  
  _toggleOpen(){ this.open = !this.open; }
  
  _logToConsole(message){
    if(this.debug){ console.log("bulib-dropdown) " + message); }
  }

}

customElements.define('bulib-dropdown', BULDropdown);