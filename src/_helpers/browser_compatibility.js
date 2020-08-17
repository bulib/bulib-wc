/** - BROWSER COMPATIBILITY HELPER - */

const DEBUG_BROWSER = true;

function logBrowserMessage(msg){ 
  if(DEBUG_BROWSER){ console.log("_browserCompatibility) " + msg); }
}

/** determine the browser the code is being run on */
function doesBrowserSupportWebComponents(notifyGA){
  // note: thanks to [stackoverflow](https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser/9851769) for the implementation
  let isIE = !!document.documentMode;
  let isEdge = !!window.StyleMedia;
  let isFirefox60 = navigator.userAgent.includes("Firefox/60.");
  let user_agent_supports_web_components = !isIE && !isEdge && !isFirefox60;
  console.log(isFirefox60);
  let browserGuess = "supported";

  if(!user_agent_supports_web_components){
    browserGuess = isIE? "ie" : isEdge? "edge (old)" : "firefox (old)";
    logBrowserMessage("user_agent doesn't support browser guess: " + browserGuess);

    // log google analytics event (duplicates sendGAEvent, but saves having to load it)
    if(notifyGA !== undefined && notifyGA === true){
      let category = "browser-compatibility"; 
      let path = window.location.pathname; 
      if(window.gtag){ window.gtag('event', browserGuess, {'event_category':category, 'event_label':path}); }
      else if(window.ga){ window.ga('send', category, browserGuess, path); }
    }
  }

  // log the result
  var supportsMessage = user_agent_supports_web_components ? ": ]" : ":(";
  logBrowserMessage("user_agent_supports_web_components: " + supportsMessage);
  return user_agent_supports_web_components;
};

/** determine, based on user_agent, which elements to show/hide given web components support */
function loadWebComponentInto(tagname, replacedElements){
  var user_agent_supports_web_components = doesBrowserSupportWebComponents(false);
  
  // determine which elements to hide
  var elementsToHide = user_agent_supports_web_components
    ? replacedElements // hide replaced elements if the web components worked,
    : document.getElementsByTagName(tagname) // hide the contents of the custom tag if they don't (avoid showing 'slotted' coni)
  ; 
  
  // do the hiding
  for(var i=0; i<elementsToHide.length; i++){ elementsToHide[i].hidden = true; }
};

export {logBrowserMessage, loadWebComponentInto};
