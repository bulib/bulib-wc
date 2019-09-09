import '@webcomponents/webcomponentsjs/webcomponents-loader';

// test a static module import
import {BULibSelect} from './select/select';
import {BULCard} from './card/card';
import {BULibHours} from './libhours/libhours';
import {BULibSearch} from './search/search';
import {Locoso} from './locoso/locoso';
import {BULibFooter} from './footer/footer';

// wait to define the customElements until we're sure the polyfills are loaded
WebComponents.waitFor(function(){
  window.customElements.define("bulib-select", BULibSelect);
  window.customElements.define("bulib-card", BULCard);
  window.customElements.define("bulib-search", BULibSearch);
  window.customElements.define("bulib-locoso", Locoso);
  window.customElements.define("bulib-hours", BULibHours);
  window.customElements.define("bulib-footer", BULibFooter);
});