//import {LitElement, html} from '@polymer/lit-element';
import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

class LibHours extends LitElement {

  constructor() {
    super();
    this.url = "https://www.bu.edu/library/about/hours/";
  }

  static get properties() {
    return {
      library: {type: String, notify:true},
      url: {type: String},
      libHours: {type: String}
    }
  }

  render() {
    let path = window.location.pathname;
    return html`
      <style> .white { color: #000; background: #FFF;} </style>
      <div class="white">
        <strong>Library</strong>:
        <select id="libhours-input" @input=${(e) => this._onLibChange(e)}>
          <option value="african-studies">African Studies</option>
          <option value="astronomy">Astronomy</option>
          <option value="pickering-educational">Pickering</option>
          <option value="mugar-memorial">Mugar</option>
        </select>
      </div>
      <div>
        <strong>Library Hours: </strong> &nbsp; <span>${this.libHours}</span>
        <a target="_blank" href="${this.url}">-></a>
      </div>
    `;
  }

  _onLibChange(event){
    let libName = event.currentTarget.value;
    console.log(libName);
    let lid = this._getLidFromPath(libName);
    //this._getHoursFromLid(lid);
    fetch('https://api3.libcal.com/api_hours_today.php?format=json&systemTime=0&iid=1740&lid='+lid,
          {mode:'cors', headers:{'Access-Control-Allow-Origin':'*'}})
      .then(r => {r.json()})
      .then(data => {
        console.log(data[0]);
        this.url = data[0]["url"];
        this.libHours = data[0]["rendered"];
      })
      .catch(error => {
        console.log(error);
      });
  }

  _getLidFromPath(path){
    if(path.includes("african-studies")){ return 1809; }
    else if(path.includes("astronomy")){ return 1784; }
    else if(path.includes("music")){ return 1810; }
    else if(path.includes("management")){ return 1476; }
    else if(path.includes("pickering-educational")){ return 1783; }
    else if(path.includes("sel")){ return 1477; }
    else if(path.includes("stone")){ return 1785; }
    else{ return 1475; /* 'mugar-memorial' */ }
  }

}

customElements.define('lib-hours', LibHours);
