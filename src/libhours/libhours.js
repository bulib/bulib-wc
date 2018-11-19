import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

const libhours = {
  "mugar-memorial":{"lid":1475,"url":"http://www.bu.edu/library/mugar-memorial/about/hours/"},
  "african-studies":{"lid":1809,"url":"http://www.bu.edu/library/african-studies/about/hours/"},
  "astronomy":{"lid":1784,"url":"http://www.bu.edu/library/astronomy/about/hours/"},
  "music":{"lid":1810,"url":"http://www.bu.edu/library/music/about/hours/"},
  "pardee":{"lid":1476,"url":"http://www.bu.edu/library/management/about/hours/"},
  "pickering":{"lid":1783,"url":"http://www.bu.edu/library/pickering-educational/about/hours"},
  "sel":{"lid":1477,"url":"http://www.bu.edu/library/pickering-educational/about/hours"},
  "stone":{"lid":1785,"url":"http://www.bu.edu/library/stone-science/about/hours/"}
};

/** display the hours of operation for a given library */
class BULibHours extends LitElement {

  constructor() {
    super();
  }

  static get properties() {
    return {
      /** code for library for which we want to display the hours (used as dict key) */
      library: {type: String, notify:true},
      /** human-readable name for the currently selected library */
      libraryName: {type: String},
      /** the url for the longer-form details for the hours */
      url: {type: String},
      /** plaintext description of that day's hours */
      today: {type: String},
      /** true/false statement of whether the library is open at that exact moment */
      open: {type: Boolean}
    }
  }

  render() {
    let path = window.location.pathname;
    return html`
      <style> .white { color: #000; background: #FFF;} </style>
      <div class="libhours">
        <div><strong>${this.libraryName}</strong> hours:</div>
        <div><span id="hours-display">${this.today}</span> <a href="${this.url}">&raquo;</div>
      </div>
    `;
  }

  /** react to changes in the library name */
  _onLibraryChange(){
    let libName = event.currentTarget.value;

    let lid = libhours[libName]["lid"] || 1475;
    this.url = libhours[libName]["url"] || "https://www.bu.edu/library/about/hours/";

    //make call to LibCalendar API to get at hours data
    fetch('https://api3.libcal.com/api_hours_today.php?format=json&systemTime=0&iid=1740&lid='+lid,
          {mode:'cors', headers:{'Access-Control-Allow-Origin':'*'}})
      .then(r => {r.json()})
      .then(data => {
        console.log(data[0]);
        this.today = data[0]["rendered"];
      })
      .catch(error => {
        console.log(error);
      });
  }

}

customElements.define('bulib-hours', BULibHours);
