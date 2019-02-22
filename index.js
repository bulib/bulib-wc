import loadPolyfills from '@open-wc/polyfills-loader/polyfills-loader';

loadPolyfills().then(() => {
  import('./demo/demo.js');
  import('./src/footer/footer');
  import('./src/select/select');
  import('./src/locoso/locoso');
  import('./src/header/header');
  import('./src/libsel/libsel');
  import('./src/search/search');
});