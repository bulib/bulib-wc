//import {LitElement, html} from '@polymer/lit-element';
import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';


class BULocoso extends LitElement {

  constructor(){
    super();
    this.locoso = {"mugar-memorial":{"location":{"bu-maps-marker":296,"address":["Mugar Memorial Library","771 Commonwealth Avenue","Boston, MA 02215"]},"contacts":[{"name":"Reference","phone":"617-353-2700","email":"ask@bu.edu"},{"name":"Circulation","phone":"617-353-3732","email":"mugcirc@bu.edu"},{"name":"Reservation","phone":"617-353-3739","email":"mugarres@bu.edu"}],"social":{"facebook":"mugarlib","twitter":"mugarlib","instagram":"mugarlib"}},"african-studies":{"location":{"bu-maps-marker":240,"address":["African Studies Library","771 Commonwealth Ave, 6th Floor","Boston, MA, 02215"]},"contacts":[{"name":"African Studies","phone":"617-353-3726"}],"social":{"facebook":"BuAfricanStudiesLibrary","flickr":"123460528@N03"}},"medlib":{"location":{"address":["BU Alumni Medical Library","72 E Concord, L-12","Boston, MA 02118"]},"contacts":[{"name":"Main Number","phone":"617-358-2350","fax":"617-358-2347","email":"refquest@bu.edu"},{"name":"Circulation","phone":"617-358-4902"},{"name":"Interlibrary Loan","phone":"617-358-2352"},{"name":"Reference","phone":"617-358-4810"},{"name":"Computer Lab","phone":"617-358-2344","email":"mugarres@bu.edu"}]},"astronomy":{"location":{"bu-maps-marker":241,"address":["Astronomy Library","725 Commonwealth Avenue","Boston, MA 02445"]},"contacts":[{"name":"Astronomy Library","phone":"617-353-2625"}]},"lawlibrary":{"location":{"address":["Fineman & Pappas Law Libraries","765 Commonwealth Ave, 2nd Floor","Boston, MA 02215"]},"contacts":[{"name":"Reference Desk","phone":"617-353-8411","text":"1-617-997-4475"}]},"hgar":{"location":{"address":["Howard Gotlieb Archival Research Center","771 Commonwealth Ave, 5th Floor","Boston, MA 02215"]},"contacts":[{"phone":"617-353-3696","fax":"617-353-2838","email":"archives@bu.edu"}],"social":{"facebook":"hgarc","twitter":"BUHGARC"}},"music":{"location":{"bu-maps-marker":255,"address":["Music Library","771 Commonwealth Ave, Floor 2","Boston, MA 02215"]},"contacts":[{"name":"General Inquiries","phone":"617-353-3705","email":"musiclib@bu.edu"}],"social":{"twitter":"BUMusicLib","facebook":"bumusiclib"}},"management":{"location":{"bu-maps-marker":252,"address":["Pardee Management Library","595 Commonwealth Avenue","Boston, MA 02215"]},"contacts":[{"name":"General Inquiries","phone":"617-353-4301","fax":"617-353-4307","email":"pardstf@bu.edu"},{"name":"Reference","phone":"617-353-4304","email":"pardstf@bu.edu"},{"name":"Circulation","phone":"617-353-4301","email":"pardedoc@bu.edu"},{"name":"Reserves","phone":"617-353-4301","email":"pardres@bu.edu"}],"social":{"twitter":"BUpardeelibrary","facebook":"pardeelibrary"}},"pickering-educational":{"location":{"bu-maps-marker":256,"address":["Pickering Educational Resources Library","2 Silber Way","Boston, MA 02215"]},"contacts":[{"name":"General Inquiries","phone":"617-353-3734"}],"social":{"twitter":"BUPickeringLib","facebook":"BUPickeringLibrary"}},"sel":{"location":{"bu-maps-marker":257,"address":["Science & Engineering Library","38 Cummington Mall","Boston, MA 02215"]},"contacts":[{"name":"General Inquiries","phone":"617-353-3733","fax":"617-353-3470"},{"name":"Library Hours","phone":"617-358-4125"},{"name":"Reference","phone":"617-353-9454","email":"ask@bu.edu"},{"name":"Circulation","phone":"617-353-3733","email":"selcirc@bu.edu"},{"name":"Reserves","phone":"617-353-3733","email":"selresrv@bu.edu"}],"social":{"twitter":"BUSciEngLib","tumblr":"buscienglib","instagram":"buscienglib"}},"stone-science":{"location":{"bu-maps-marker":258,"address":["Stone Science Library","675 Commonwealth Ave, Floor 2","Boston, MA 02445"]},"contacts":[{"name":"General Inquiries","phone":"617-353-5679"}]},"sthlibrary":{"location":{"address":["School of Theology Library","745 Commonwealth Ave, Floor 2","Boston, MA 02215"]},"contacts":[{"name":"General Inquiries","phone":"617-353-3034","fax":"617-358-0698","email":"sthlib@bu.edu"},{"name":"Reference","phone":"617-353-3034","email":"sthref@bu.edu"}],"social":{"twitter":"BUSTHLibrary","facebook":"busthlibrary","instagram":"butheologylibrary"}},"help":{"location":{"bu-maps-marker":296,"address":["Mugar Memorial Library","771 Commonwealth Avenue","Boston, MA 02215"]},"contacts":[{"name":"Help","phone":"617-353-2700","email":"ask@bu.edu","text":"617-431-2427"}]}};
  }

  createRenderRoot(){ return this; }

  static get properties() {
    return {
      locoso: {type: Object},
      library: {type: String, notify:true}
    }
  }

  render() {
    let myLocoso = this.locoso[this.library];

    this.contacts = this._prepareContacts(myLocoso["contacts"][0] || {});
    this.address = myLocoso["location"]["address"] || [];
    this.social = this._prepareSocial(myLocoso["social"] || {});

    let socialDisplay;
    if(this.social.length < 1){ socialDisplay = html``; }
    else{
      socialDisplay= html`
        <h3>Follow Us</h3>
        <ul aria-description="list of social media accounts" class="no-bullet plm">
          ${this.social.map((s) =>
            html`<li class="inline"><a target="_blank" href="${s.url}">${s.text}</a></li>`
          )}
        </ul>
      `;
    }

    return html`
      <style>
        h3 { margin-top: 0px; margin-bottom: 0px; }
        ul, ol { margin-top: 5px; margin-bottom: 5px; }
        .no-bullet { list-style:none; }
        .inline { display: inline-block; padding-right: 5px;}
        .multi-column {
          column-gap: 40px;
          column-count: 2;
          column-rule: 1px solid lightgrey;
        }
        .left { float: left; }
        .prm { margin-right: 10px; padding-right: 10px; }
      </style>
      <div>
        <div class="left prm">
          <h3 class="inline">Come and Visit!</h3>&nbsp;
          <ol class="no-bullet" aria-label="address">
            ${this.address.map((l) => html`<li>${l}</li>`)}
            <li>
              <small>
                <a aria-label="Open library site" href="http://bu.edu/library/${this.library}" title="${this.address[0]}">website</a>
                <a aria-label="Directions to the Library" title="get directions" target="_blank"
                    href="${'https://google.com/maps/search/' + encodeURI("Boston University " + this.address[0])}">directions >></a>
              </small>
            </li>
          </ol>
        </div>
        <div>
          <h3 class="inline">Contact Us</h3>
          <ul class="no-bullet plm" aria-label="contact-links">
            ${this.contacts.map((c) =>
                html`<li class="inline ptn"><a class="button" href="${c.url}">${c.text}</a></li>`
             )}
          </ul>
          ${socialDisplay}
        </div>
      </div>
    `;
  }

  _prepareContacts(rawContacts){
    let contacts = [];
    if(rawContacts["phone"]){
      contacts.push( {"text":"call", "url":"tel:"+rawContacts["phone"]} );
    }
    if(rawContacts["email"]){
      contacts.push( {"text":"email", "url":"mailto:"+rawContacts["email"] } );
    }
    if(rawContacts["text"]){
      contacts.push( {"text":"text", "url":"sms:"+rawContacts["text"] } );
    }
    if(rawContacts["fax"]){
      contacts.push( {"text":"fax", "url":"fax:"+rawContacts["fax"] } );
    }
    return contacts;
  }

  _prepareSocial(rawSocial){
    let social = [];
    if(rawSocial["twitter"]){
      social.push( {"text":"twitter", "url":"http://twitter.com/"+rawSocial["twitter"]} );
    }
    if(rawSocial["facebook"]){
      social.push( {"text":"facebook", "url":"http://facebook.com/"+rawSocial["facebook"]} );
    }
    if(rawSocial["instagram"]){
      social.push( {"text":"instagram", "url":"https://instagram.com/"+rawSocial["instagram"]} );
    }
    if(rawSocial["flickr"]){
      social.push( {"text":"flickr", "url":"https://www.flickr.com/photos/"+rawSocial["flickr"]} );
    }
    if(rawSocial["tumblr"]){
      social.push( {"text":"tumblr", "url":"http://tumblr."+rawSocial["tumblr"]+".com/"} );
    }
    return social;
  }

}

customElements.define('bu-locoso', BULocoso);
