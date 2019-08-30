import './_helpers/browser_compatibility';
import loadPolyfills from '@open-wc/polyfills-loader';

loadPolyfills().then(() => {
  import ('./select/bulib-select');
  import ('./card/bulib-card');
  import ('./libhours/bulib-hours');
  import ('./search/bulib-search');
  import ('./locoso/bulib-locoso');
  import ('./footer/bulib-footer');
});