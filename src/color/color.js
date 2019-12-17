import {LitElement, html, css} from 'lit-element/lit-element';

/** context-sensitive search form allowing you to search across multiple 'search_options' */
export default class BULibColor extends LitElement {

  static get properties() {
    return {
      /** name of a known, default css variable (e.g. 'blue', 'red') */
      var: {type: String},

      /** css variable set somewhere within the scope and visible via var() (e.g. '--color-accent-background' )*/
      val: {type: String}, /** color code */

      /** whether to have a white or a black background  */
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