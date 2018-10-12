import {LitElement, html} from '@polymer/lit-element';

class LibSel extends LitElement{

  constructor(){
    super();
    this.options = [
      {"code":"mugar-memorial","name":"SELECT LIBRARY"},
      {"code":"mugar-memorial","name":"Mugar Memorial"},
      {"code":"african-studies","name":"African Studies"},
      {"code":"medlib", "name":"Alumni Medical"},
      {"code":"astronomy", "name":"Astronomy"},
      {"code":"lawlibrary","name":"Fineman and Pappas Law"},
      {"code":"hgar", "name":"Archival Research Center"},
      {"code":"music","name":"Music Library"},
      {"code":"management","name":"Frederick S. Pardee Managment Library"},
      {"code":"pickering-educational","name":"Pickering Educational Resources"},
      {"code":"sthlibrary","name":"School of Theology"},
      {"code":"sel","name":"Science and Engineering"},
      {"code":"stone-science","name":"Stone Science"}
    ];
  }

  static get properties(){
    return {
      library: {type: String, notify:true}
    }
  }

  render(){
    return html`
      <strong>Library</strong>:
      <select id="libhours-input" @input=${(e) => this._LibSelectionChanged(e)}}>
        ${this.options.map((o) => html`<option value="${o.code}">${o.name}</option>`)}
      </select>
    `;
  }

  _LibSelectionChanged(event){
    let libName = event.currentTarget.value;
    let element = document.getElementsByTagName("bu-locoso")[0];
    console.log("before: " + element.getAttribute("library"));
    element.setAttribute("library", libName);
    console.log("after: " + element.getAttribute("library"));
  }

}

customElements.define('bu-libsel', LibSel);
