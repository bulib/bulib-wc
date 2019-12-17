import {LitElement, html} from 'lit-element/lit-element';
import {until} from 'lit-html/directives/until';

import {getLibraryInfoFromCode} from '../_helpers/lib_info_helper.js';
import {sendGAEvent} from '../_helpers/google_analytix';

const all_lib_hours_url = "https://www.bu.edu/library/about/hours/";
const cors_anywhere_prefix = 'https://cors-anywhere.herokuapp.com/';
const libcal_hours_api_url = 'https://api3.libcal.com/api_hours_today.php';


/** display the hours of operation for a given library */
export default class BULibHours extends LitElement {

  // use light DOM to allow for external styling (bulib-header, .white-link)
  createRenderRoot(){ return this; } 

  static get properties() {
    return { 
      /** established which library we're displaying the hours/info of */
      library: {type: String}, 
      /** alters the default display to be more succint/compact */
      short:{type: Boolean},
      /** alters the default display to be more descriptive/verbose */
      long: {type: Boolean},
      /** provides means of adding classes to the inner link */
      link_class: {type: String},

      /** [debugging] enable logging to the console */
      debug: {type: Boolean}
    };
  }
  
  _fetchHoursData(libCode, lid){
    if(!lid){ lid = 1475; }
    let url = `${cors_anywhere_prefix}${libcal_hours_api_url}?format=json&systemTime=0&iid=1740&lid=${lid}`;
    this._logToConsole("calling 'libcal' with lid: '" + lid + "'.");
    this._logGAEvent("api-call", libCode);
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

    // prepare parts
    this._logToConsole(`rendering hours for ${library_name} (code:'${libCode}').`);
    let hours_loading = html`
      <span id="hours-display" class="inline" aria-label="today's hours for ${library_name}">
        ${until(this._fetchHoursData(libCode, lid), html`<small> loading hours...</small>`)}
      </span>`;
    let clock_icon = html`<img alt="clock-icon" id="clock-icon" src="https://cdn.jsdelivr.net/npm/bulib-wc@latest/dist/icons/clock-icon-24px.svg">`;
    
    // establish variants 
    let none_display = html``;
    let small_display = html`
      <a title="today's hours for ${library_name}" class="${this.link_class}"
         @click="${(ev) => {this._logGAEvent("clicked", libCode)}}" href="${all_lib_hours_url}">${hours_loading}</a>`;
    let medium_display = html`<div class="txtv center">${clock_icon}&nbsp;&nbsp;<strong>${library_name}:</strong>&nbsp;${hours_loading}</div>`;
    let large_display = html`
      <div id="hours-top">
        <strong>${library_name}:</strong>&nbsp;${hours_loading}</div>
      </div>
      <div id="hours-btm">
        <small>
          <a title="today's hours for all bu-libraries" class="${this.link_class}" 
             @click="${(ev) => {this._logGAEvent("clicked", "all")}}" href="${all_lib_hours_url}">see all location hours</a>
        </small>
      </div>
    `;
    
    // select between the variants based on the available data and settings
    let libhours_display;
    if(!lid){ libhours_display = none_display; }
    if(this.short){ libhours_display = small_display; }
    else if(this.long){ libhours_display = large_display; }
    else{ libhours_display = medium_display; }

    return html`
      <style> 
        bulib-hours:host { color: white; } 
        a > span { text-decoration: underline; }
        .txtv { display: flex; align-items: center; text-align: center; }
      </style>
      <div class="libhours">${libhours_display}</div>
    `;
  }

  _logGAEvent(action, libCode){
    sendGAEvent("bulib-hours", action, libCode || this.library);
  }
  
  _logToConsole(message){
    if(this.debug){ console.log("bulib-hours) " + message); }
  }

}
