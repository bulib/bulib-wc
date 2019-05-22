import loadPolyfills from '@open-wc/polyfills-loader';
// import {loadWebComponentInto} from './_helpers/browser_compatibility';


loadPolyfills().then(() => {

  // - import - //

  /*
  // utils 
  import BULSelect from './select/select';
  import BULDropdown from './dropdown/dropdown';
  import BULLibSel from './libsel/libsel';

  // components
  import BULHours from './libhours/libhours';
  import BULSearch from './search/search';
  import BULLocoso from './locoso/locoso';

  // composites
  import BULFooter from './footer/footer';
  import BULHeader from './header/header';
  */

  import ('./select/select');
  import ('./dropdown/dropdown');
  import ('./libsel/libsel');
  import ('./libhours/libhours');
  import ('./search/search');
  import ('./locoso/locoso');
  import ('./footer/footer');
  import ('./header/header');

  // - define - //

  customElements.define('bulib-select', BULSelect);
  customElements.define('bulib-dropdown',BULDropdown);
  customElements.define('bulib-libsel', BULLibSel);
  
  customElements.define('bulib-hours',  BULHours);
  customElements.define('bulib-search', BULSearch);
  customElements.define('bulib-locoso', BULLocoso);
  
  customElements.define('bulib-footer', BULFooter);
  customElements.define('bulib-header', BULHeader);
});