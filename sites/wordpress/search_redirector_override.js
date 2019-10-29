/**
 * NOTE: this is a bit of a quick-fix solution to resolve a production issue WEB-194.
 * 
 *  - the following hijacks the search form submission on the home page, preventing 
 *    a call from being made to https://github.com/bu-ist/bu-library-theme/blob/master/search-redirector.php
 *    which, if allowed, results in 403 errors.
 *  - we know from a previous issue (WEB-83) that this is likely due to the 'Web Application Firewall' 
 *    configurations by IS&T, but redressing the issue has not been quick, and we don't want/need the redirector
 *    going forward really, anyway 
 *  - this patche should be replaced once the homepage is replaced by the '<bulib-search>' component.
 */

let doBULSCatalogSearch = function(query){
  let base_url = "https://buprimo.hosted.exlibrisgroup.com/primo-explore/search?tab=default_tab&search_scope=default_scope&vid=BU&lang=en_US&query=any,contains,";
  window.location = base_url+encodeURIComponent(query);
}

if(window.location.pathname === "/library/"){ 
  let bulibHomeSearchForm = document.querySelector("div#search > form");
  let searchQueryInputElem = document.querySelector("div#search > form input#q");
  let bulsOptionInputElem = document.querySelector("div#search > form input#search-catalog");

  bulibHomeSearchForm.addEventListener('submit', (ev) => {
    let qValue = searchQueryInputElem.value;
    if(bulsOptionInputElem.hasAttribute("checked")){
      doBULSCatalogSearch(qValue);
      ev.preventDefault();
    }
  });
};