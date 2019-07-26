import loadPolyfills from '@open-wc/polyfills-loader';

loadPolyfills().then(() => {
  import ('./select/bulib-select');
  import ('./card/bulib-card');
  import ('./dropdown/bulib-dropdown');
  import ('./libsel/bulib-libsel');
  import ('./libhours/bulib-hours');
  import ('./search/bulib-search');
  import ('./locoso/bulib-locoso');
  import ('./footer/bulib-footer');
  import ('./header/bulib-header');
});