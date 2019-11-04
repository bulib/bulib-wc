import '@webcomponents/webcomponentsjs/webcomponents-loader';

WebComponents.waitFor(function(){
  import ('./select/bulib-select');
  import ('./feedback/bulib-feedback');
  import ('./card/bulib-card');
  import ('./libhours/bulib-hours');
  import ('./search/bulib-search');
  import ('./color/bulib-color');
  import ('./locoso/bulib-locoso');
  import ('./footer/bulib-footer');
});