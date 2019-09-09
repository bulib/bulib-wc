const DEBUG_ANALYTICS = false;

function logGoogleAnalyticsMessage(message){
  if(DEBUG_ANALYTICS){ console.log("google_analytics_helper) " + message); }
}

export function sendGAEvent(eventName, action, label, value){
  /** note: this assumes that a 'gtag' or a 'ga' has already been initialized/added to `window` */
  let value_text = (value == null) || (value == undefined) ? "": `, value='${value}'`;
  logGoogleAnalyticsMessage(`request made to sendGAEvent('${eventName}', '${action}', '${label}'${value_text})`);
  try{
    if(window.gtag){ 
      window.gtag('event', action, {
        'event_category': eventName,
        'event_label': label,
        'value': value || -1
      });
      logGoogleAnalyticsMessage("window.gtag() found and called");
    }else if(window.ga){ 
      window.ga('send', eventName, action, label); 
      logGoogleAnalyticsMessage("window.ga() found and called");
    }else{
      logGoogleAnalyticsMessage("tried to sendGAEvent for '" + eventName + "' but neither 'ga()' nor 'gtag()' were found");
    }
  }catch(err){
    logGoogleAnalyticsMessage("ERROR! - unable to sendGAEvent with gtag, ga, or nothing."); 
    if(DEBUG_ANALYTICS){ console.log(err); }
  }
  if(DEBUG_ANALYTICS){ debugger; }
}

export function sendGAEventFromClickEvent(clickEvent, eventName){
  let contentClicked = "[unknown]"; 
  
  try{ 
    contentClicked = clickEvent.target.innerText 
      ? clickEvent.target.innerText 
      : clickEvent.target.querySelector("span").innerText 
      || "[unknown]";
    contentClicked = contentClicked.replace(/\//,"").replace(/\&/,"");  // remove special characters
    contentClicked = contentClicked.toLowerCase().replace(/ +/g,"-");   // slugify (lowercase, dashes)
  }catch(err){
    logGoogleAnalyticsMessage("error getting contentClicked from clickEvent: ");
    if(DEBUG_ANALYTICS){ console.log(err); }
  }
  sendGAEvent(eventName, contentClicked, window.location.pathname);
}

export function addSendGAEventOnAnchorClickToAnchorElements(anchorElements, eventName){
  for(let i=0; i<anchorElements.length; i++){
    anchorElements[i].addEventListener("click", (ev) => sendGAEventFromClickEvent(ev, eventName));
  }
}
