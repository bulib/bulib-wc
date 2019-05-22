import loadPolyfills from '@open-wc/polyfills-loader';
// import {loadWebComponentInto} from './_helpers/browser_compatibility';

loadPolyfills().then(() => {
  import ('./select/bulib-select');
  import ('./dropdown/bulib-dropdown');
  import ('./libsel/bulib-libsel');
  import ('./libhours/bulib-hours');
  import ('./search/bulib-search');
  import ('./locoso/bulib-locoso');
  import ('./footer/bulib-footer');
  import ('./header/bulib-header');
});