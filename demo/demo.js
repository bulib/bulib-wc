import { LitElement, html } from 'lit-element';

const component_usages = {
  "footer": html`<bulib-footer host_site="askalibrarian"></bulib-footer>`,
  "header": html`<bulib-header curr_url="http://askalibrarian.bu.edu" curr_search="help" str_options="help"></bulib-header>`,
  "search": html`<bulib-search name="options, with default" str_options="primo industries wp" str_selected="industries"></bulib-search>`,
  "locoso": html`<bulib-locoso library="astronomy"></bulib-locoso>`
};

class BulibDemo extends LitElement {
    static get properties() {
      return {
        component: {type: String, notify: true}
      };
    }

    constructor(){ super(); }
  
    // don't need 'slot' functionality, so lets use Light DOM
    createRenderRoot(){ return this; }

    render() {
      return html`
        <h3><code>bulib-${this.component}</code></h3>
        <div>${component_usages[this.component]}</div>
      `;
    }
  }
  
  customElements.define('bulib-demo', BulibDemo);