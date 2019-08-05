import {html, LitElement} from 'lit-element/lit-element';

/** Reactive/responsive header with custom subsite display, bulib-search integration */
export default class BULibDropdown extends LitElement {
  
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
        .dropdown-header {
          display: flex;
          z-index: 10;
        }
        .dropdown-content { 
          z-index: 9;
          position: relative;
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
          <div class="inline" style="margin: auto; margin-right: 0px; margin-left: 0px;">&nbsp;${this.open ? html`^` : html`v`}</div>
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
