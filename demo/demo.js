/**
 * This component combines all the examples to be displayed. See the basic/intermediate/advanced folders for the actual examples.
 */

import { LitElement, html } from 'lit-element';
import '../src/footer/footer.js';

class BulibDemo extends LitElement {
    static get properties() {
      return {}
    }

    constructor(){ super(); }
  
    // don't need 'slot' functionality, so lets use Light DOM
    createRenderRoot(){ return this; }

    render() {
      return html`
        <div>
          <h2>TITLE IN BODY</h2>
          <bulib-locoso library="mugar-memorial"></bulib-locoso>
        </div>
        <bulib-footer library="help" host_site="askalibrarian"></bulib-footer>
      `;
    }
  }
  
  customElements.define('bulib-demo', BulibDemo);