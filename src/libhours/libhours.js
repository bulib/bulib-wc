import {LitElement, html} from 'https://unpkg.com/lit-element@2.1.0/lit-element.js?module';
import {until} from 'https://unpkg.com/lit-html@1.0.0/directives/until.js?module';

import {getLibraryInfoFromCode} from '../_helpers/lib_info_helper.js';

const all_lib_hours_url = "http://www.bu.edu/library/about/hours/";
const cors_anywhere_prefix = 'https://cors-anywhere.herokuapp.com/';
const libcal_hours_api_url = 'https://api3.libcal.com/api_hours_today.php';


/** display the hours of operation for a given library */
class BULibHours extends LitElement {

  // createRenderRoot(){ return this;} // don't need 'slot' functionality, so lets use Light DOM

  static get properties() {
    return { 
      library: {type: String}, 
      verbose: {type: Boolean},
      link_class: {type: String},
      
      debug: {type: Boolean}
    };
  }
  
  _fetchHoursData = function(lid=1475){
    let url = `${cors_anywhere_prefix}${libcal_hours_api_url}?format=json&systemTime=0&iid=1740&lid=${lid}`;
    this._logToConsole("calling 'libcal' with lid: '" + lid + "'.");
    return fetch( url, { method: 'GET', mode:'cors'})
      .then(r => r.json()).then(data => (data.locations[0]).rendered);
  };

  render() {
    // get general library information
    let libCode = this.library || "mugar-memorial";
    let lib_info = getLibraryInfoFromCode(libCode);
    
    // extract relevant pieces from lib_info
    let library_name = lib_info.short || lib_info.name;
    let hours_url = lib_info.hours_url;
    let lid = lib_info.libcal_lid;
    if(library_name.includes("BU Librar")){ library_name = "Mugar Library"; }

    // prepare templates
    this._logToConsole(`rendering hours for ${library_name} (code:'${libCode}').`);
    let hours_loading = html`<span id="hours-display">${until(this._fetchHoursData(lid), html`<small> loading hours...</small>`)}</span>`;
    let see_all_link = html`<small><a href="${all_lib_hours_url}" class=${this.link_class}>see all location hours</a></small>`;

    return html`
      <style> 
        // :host { color: white; }
        .libhours { text-align: center; }
        .gold { color: gold; }
      </style>
      <div class="libhours">
        <div id="hours-top">
          ${this.verbose
            ? html`<strong>${library_name}:</strong> ${hours_loading}` 
            : html`<a class="${this.link_class}" href="${hours_url}">hours today</a> <strong>${hours_loading}</strong>`
          }
        </div>
        <div id="hours-bottom">${this.verbose? html`${see_all_link}` : html`` }</div>
      </div>
      `;
  }
  
  _logToConsole = function(message){
    if(this.debug){ console.log("bulib-hours) " + message); }
  }

}

customElements.define('bulib-hours', BULibHours);
