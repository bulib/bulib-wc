var doesBrowserSupportWebComponents = function(){
  /** determine the browser the code is being run on
   * note: thanks to [stackoverflow](https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser/9851769) for the implementation
   */
  var isIE = !!document.documentMode;
  var isEdge = !!window.StyleMedia;
  var user_agent_supports_web_components = !isIE && !isEdge;
  return user_agent_supports_web_components;
};

var loadWebComponentInto = function(tagname, replacedElement){
  var user_agent_supports_web_components = doesBrowserSupportWebComponents();
  if(user_agent_supports_web_components){
    // show the component and hide its replacement
    console.log("user_agent_supports_web_components! :)");
    replacedElement.style.visibility = "hidden";
  }else{
    // hide the component itself
    console.log("!user_agent_supports_web_components. :(");
    console.log(tagname);
    var lsElements = document.getElementsByTagName(tagname);
    console.log(lsElements);
    for(var i=0; i<lsElements.length; i++){
      lsElements[i].style.visibility = "hidden";
    }
  }
};
module.exports = { loadWebComponentInto };