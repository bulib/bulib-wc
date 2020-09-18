import '@webcomponents/webcomponentsjs/webcomponents-loader';

WebComponents.waitFor(function(){
  import ('./feedback/bulib-feedback');
  import ('./announce/bulib-announce');
  import ('./card/bulib-card');
  import ('./libhours/bulib-hours');
  import ('./search/bulib-search');
  import ('./color/bulib-color');
  import ('./locoso/bulib-locoso');
  import ('./header/bulib-submenu');
  import ('./footer/bulib-footer');
  import ('./promo/bulib-promo');
});