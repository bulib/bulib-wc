var debug = false;

/** determine the browser the code is being run on */
const doesBrowserSupportWebComponents = function(){
  // note: thanks to [stackoverflow](https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser/9851769) for the implementation
  var isIE = !!document.documentMode;
  var isEdge = !!window.StyleMedia;
  var user_agent_supports_web_components = !isIE && !isEdge;
  return user_agent_supports_web_components;
};

/** determine, based on user_agent, which elements to show/hide given web components support */
export const loadWebComponentInto = function(tagname, replacedElements){
  var user_agent_supports_web_components = doesBrowserSupportWebComponents();
  
  // determine which elements to hide
  var elementsToHide = user_agent_supports_web_components 
    ? replacedElements // hide replaced elements if the web components worked,
    : document.getElementsByTagName(tagname) // hide the contents of the custom tag if they don't (avoid showing 'slotted' coni)
  ; 
  
  // do the hiding
  for(var i=0; i<elementsToHide.length; i++){ elementsToHide[i].hidden = true; }
  
  // log the result
  if(debug){
    var supportsMessage = user_agent_supports_web_components ? ": ]" : ":(";
    console.log("user_agent_supports_web_components: " + supportsMessage);
  }
};