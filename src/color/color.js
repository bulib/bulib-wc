import {LitElement, html, css} from 'lit-element/lit-element';

/** context-sensitive search form allowing you to search across multiple 'search_options' */
export default class BULibColor extends LitElement {

  static get properties() {
    return {
      var: {type: String}, /** name of a css variable */
      val: {type: String}, /** color code */
      white: {type: Boolean}
    }
  }

  static get styles(){
    return [
      css`
        div.color-box { background-color: #eee; }
        .color-box > div { 
          padding: 10px; 
          border: solid black 1px;
          font-weight: bold;
        }
      `
    ]
  }

  render() {
    let name = !!this.var? this.var : this.val || "[unknown]";
    let computed = getComputedStyle(document.body).getPropertyValue(this.var) || this.val;

    return html`
      <div class="color-box" style="width: fit-content; min-width: 75px; text-align: left;">
        <div><strong>${name}</strong></div>
        <div style="background-color: ${computed}; color: ${this.white? 'white' : 'black'}">${computed}</div>
      </div>
    `;
  }
}
window.customElements.define("bulib-color", BULibColor);