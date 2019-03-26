import {LitElement, html} from 'https://unpkg.com/lit-element@2.1.0/lit-element.js?module';
import {until} from 'https://unpkg.com/lit-html@1.0.0/directives/until.js?module';

import {getLibraryInfoFromCode} from '../_helpers/lib_info_helper.js';

const cors_anywhere_prefix = 'https://cors-anywhere.herokuapp.com/';
const libcal_hours_api_url = 'https://api3.libcal.com/api_hours_today.php';
const _fetchHoursDataFromLibCalForLibrary = function(lid=1475){
  let url = `${cors_anywhere_prefix}${libcal_hours_api_url}?format=json&systemTime=0&iid=1740&lid=${lid}`;
  return fetch( url, { method: 'GET', mode:'cors'})
    .then(r => r.json()).then(data => (data.locations[0]).rendered);
};


/** display the hours of operation for a given library */
class BULibHours extends LitElement {

  createRenderRoot(){ return this; } // don't need 'slot' functionality, so lets use Light DOM

  static get properties() {
    return { 
      library: {type: String}, 
      show_name: {type: Boolean},
      link_class: {type: String}
    };
  }

  render() {
    // get general library information
    let libCode = this.library || "mugar-memorial";
    let lib_info = getLibraryInfoFromCode(libCode);
    
    // extract relevant pieces from lib_info
    let library_name = lib_info.name;
    let hours_url = lib_info.hours_url;
    let lid = lib_info.libcal_lid;

    return html`
      <style> :host { color: white; } </style>
      <div class="libhours">
        <strong>${this.show_name? html`${library_name}`: html``}
          <a title="${library_name} hours" class="${this.link_class}" href="${hours_url}">hours</a>
        </strong>
        <em id="hours-display">${until(_fetchHoursDataFromLibCalForLibrary(lid), html` loading ...`)}</em> 
      </div>`;
  }

}

customElements.define('bulib-hours', BULibHours);
