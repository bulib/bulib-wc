import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

class BULHeader extends LitElement {

  constructor(){ super(); }

  static get properties() {
    return {
      library: {type: String, notify:true}
    }
  }

  createRenderRoot(){ return this; }

  render() {
    return html`
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/bulib/bulib-wc/assets/css/common.min.css">
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/bulib/bulib-wc/assets/css/header.min.css">
      <style type="text/css">
        nav, a { color: white; }
        nav > * > h1 { margin-top: 0px; }
        .primary-navbar { background-color: #212121; }
        .secondary-navbar { background-color: lightgrey; }
      </style>
      <nav>
        <div class="primary-navbar">
          <div class="brand">
            <img id="bu-logo"><strong>Libraries</strong>
          </div>
          <div class="site-links">
            <ul class="nav navbar-nav">
              <li><a href="http://www.bu.edu/library/research/">Research</a></li>
              <li><a href="http://www.bu.edu/library/services/">Services</a></li>
              <li><a href="http://www.bu.edu/library/about/">About</a></li>
              <li><a href="http://askalibrarian.bu.edu/">Help</a></li>
            </ul>
          </div>
          <div class="account-section">
            <strong>My Account | v |</strong>
          </div>
        </div>
        <div class="secondary-nav">
          <h1>${this.subsite_name}</h1>
          <div class="breadcrumbs">
            <slot id="sitemap" name="sitemap"></slot>
          </div>
          <div class="searchbar">
            <bulib-search></bulib-search>
          </div>
        </div>
      </nav>`;
  }
}

customElements.define('bulib-hdr', BULHeader);
