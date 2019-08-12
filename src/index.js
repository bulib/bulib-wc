import '@webcomponents/webcomponentsjs/webcomponents-loader';

WebComponents.waitFor(async () => {
  import ('./select/bulib-select');
  import ('./card/bulib-card');
  import ('./dropdown/bulib-dropdown');
  import ('./libhours/bulib-hours');
  import ('./search/bulib-search');
  import ('./locoso/bulib-locoso');
  import ('./footer/bulib-footer');
});