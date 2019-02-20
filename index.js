import loadPolyfills from '@open-wc/polyfills-loader/polyfills-loader';

loadPolyfills().then(() => {
  import('./demo/demo.js');
});