import {Slim} from "slim-js";
import 'slim-js/directives/repeat.js'

Slim.tag('libsel',
  `<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropdown button
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a slim-repeat="options as option" class="dropdown-item" href="/[[code]]">[[name]]</a>
    </div>
  </div>
  `,
  class LibSel extends Slim {

    onBeforeCreated() {
      this.options = [
      	{"code":"all","name":"ALL"},
      	{"code":"mugar-memorial","name":"Mugar Memorial"},
        {"code":"african-studies","name":"African Studies"},
        {"code":"medlib", "name":"Alumni Medical"},
        {"code":"astronomy", "name":"Astronomy"},
        {"code":"lawlibrary","name":"Fineman and Pappas Law"},
        {"code":"hgar","name":"Archival Research Center"},
        {"code":"music","name":"Music Library"},
        {"code":"management","name":"Frederick S. Pardee Managment Library"},
        {"code":"pickering-educational","name":"Pickering Educational Resources"},
        {"code":"sthlibrary","name":"School of Theology"},
        {"code":"sel","name":"Science and Engineering"},
        {"code":"stone-science","name":"Stone Science"}
      ];

      let url_fragment = "/library/mugar-memorial/services"; //TODO replace with url grab
      this.selected = this.options[0];
      for(let o of this.options){
      	if(url_fragment.includes(o.code)){
        	this.selected = o;
        }
      }
    }
  }
)
