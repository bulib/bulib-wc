import {LitElement, html} from 'lit-element/lit-element';
import {until} from 'lit-html/directives/until';

import {getLibraryInfoFromCode} from '../_helpers/lib_info_helper.js';

const all_lib_hours_url = "http://www.bu.edu/library/about/hours/";
const cors_anywhere_prefix = 'https://cors-anywhere.herokuapp.com/';
const libcal_hours_api_url = 'https://api3.libcal.com/api_hours_today.php';


/** display the hours of operation for a given library */
export default class LibHours extends LitElement {

  // use light DOM to allow for external styling (bulib-header, .white-link)
  createRenderRoot(){ return this; } 

  static get properties() {
    return { 
      library: {type: String}, 
      verbose: {type: Boolean},
      link_class: {type: String},
      debug: {type: Boolean}
    };
  }
  
  _fetchHoursData(lid=1475){
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
    let lid = lib_info.libcal_lid;
    if(library_name.includes("BU Librar")){ library_name = "Mugar Library"; }

    // prepare templates
    this._logToConsole(`rendering hours for ${library_name} (code:'${libCode}').`);
    let hours_loading = html`
      <span id="hours-display" class="inline" aria-label="today's hours for ${library_name}">
        ${until(this._fetchHoursData(lid), html`<small> loading hours...</small>`)}
      </span>`;
    let clock_icon = html`<img alt="clock-icon" id="clock-icon" src="https://material.io/tools/icons/static/icons/baseline-schedule-24px.svg">`;
    let main_display = html`<strong>${library_name}:</strong>&nbsp;${hours_loading}`;

    return html`
      <style> 
        :host { color: white; } 
        .libhours { text-align: center; }
        .txtv { display: flex; align-items: center; text-align: center; }
      </style>
      <div class="libhours">
        ${this.verbose 
          ? html` <div id="hours-top">${main_display}</div>
                  <div id="hours-btm">
                    <small><a href="${all_lib_hours_url}" class=${this.link_class}>see all location hours</a></small>
                  </div>`
          : html`<div class="txtv center">${clock_icon}&nbsp;&nbsp;${main_display}</div>`}
      </div>
      `;
  }
  
  _logToConsole(message){
    if(this.debug){ console.log("bulib-hours) " + message); }
  }

}
