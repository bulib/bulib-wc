const DEBUG_ANALYTICS = true;

function logGoogleAnalyticsMessage(message){
  if(DEBUG_ANALYTICS){ console.log("google_analytics_helper) " + message); }
}

export function sendGAEvent(eventName, action, label){
  /** note: this assumes that a 'gtag' or a 'ga' has already been initialized/added to `window` */
  logGoogleAnalyticsMessage(`request made to sendGAEvent('${eventName}', '${action}', '${label}')`);
  try{
    if(window.gtag){ 
      window.gtag('event', action, {
        'event_category': eventName,
        'event_label': label 
      });
      logGoogleAnalyticsMessage("window.gtag() found and called");
    }else if(window.ga){ 
      window.ga('send', eventName, action, label); 
      logGoogleAnalyticsMessage("window.ga() found and called");
    }else{
      logGoogleAnalyticsMessage("tried to sendGAEvent for '" + eventName + "' but neither 'ga()' nor 'gtag()' were found");
    }
  }catch(err){
    logGoogleAnalyticsMessage("ERROR! - "); 
    if(DEBUG_ANALYTICS){ console.log(err); }
  }
  if(DEBUG_ANALYTICS){ debugger; }
}

export function sendGAEventFromClickEvent(clickEvent, eventName){
  let contentClicked = clickEvent.target.innerText 
    ? clickEvent.target.innerText 
    : clickEvent.target.querySelector("span").innerText 
    || "[unknown]";
  contentClicked = contentClicked.replace(/\//,"").replace(/\&/,"");  // remove special characters
  contentClicked = contentClicked.toLowerCase().replace(/ +/g,"-");   // slugify (lowercase, dashes)
  sendGAEvent(eventName, contentClicked, window.location.pathname);
}

export function addSendGAEventOnAnchorClickToAnchorElements(anchorElements, eventName){
  for(let i=0; i<anchorElements.length; i++){
    anchorElements[i].addEventListener("click", (ev) => sendGAEventFromClickEvent(ev, eventName));
  }
}
