const DEBUG_ANALYTICS = true;
const PREVENT_GA_CALL = false;

function logGoogleAnalyticsMessage(message){
  if(DEBUG_ANALYTICS){ console.log("google_analytics_helper) " + message); }
}

export function sendGAEvent(eventName, action, label, value){
  /** note: this assumes that a 'gtag' or a 'ga' has already been initialized/added to `window` */
  let value_text = (value == null) || (value == undefined) ? "": `, value='${value}'`;
  logGoogleAnalyticsMessage(`request made to sendGAEvent('${eventName}', '${action}', '${label}'${value_text})`);
  try{
    if(window.gtag && !PREVENT_GA_CALL){ 
      window.gtag('event', action, {
        'event_category': eventName, 'event_label': label, 'value': value
      });
      logGoogleAnalyticsMessage("window.gtag() found and called");
    }else if(window.ga && !PREVENT_GA_CALL){ 
      window.ga('send', eventName, action, label);
      logGoogleAnalyticsMessage("window.ga() found and called");
    }else{
      logGoogleAnalyticsMessage(`event '${eventName}' was NOT SENT to either 'ga()' nor 'gtag()' [PREVENT_GA_CALL='${PREVENT_GA_CALL}']`);
    }
  }catch(err){
    logGoogleAnalyticsMessage("ERROR! - unable to sendGAEvent with gtag, ga, or nothing."); 
    if(DEBUG_ANALYTICS){ console.log(err); }
  }
}

export function sendGAEventFromClickEvent(clickEvent, eventName, actionName){
  let contentClicked = "[unknown]"; 
  
  // obtain a label for the clicked link from its markup
  try{ 
    contentClicked = clickEvent.target.innerText 
      ? clickEvent.target.innerText 
      : clickEvent.target.querySelector("span").innerText 
      || "[unknown]";
    contentClicked = contentClicked.replace(/[^a-zA-Z0-9 ]/g, '');  // remove special characters
    contentClicked = contentClicked.toLowerCase().replace(/ +/g,"-");   // slugify (lowercase, dashes)
  }catch(err){
    logGoogleAnalyticsMessage("error getting contentClicked from clickEvent: ");
    if(DEBUG_ANALYTICS){ console.log(err); }
  }

  // allow user to specify an actionName as well as the eventName, pushing contentClicked into the label
  if(!actionName || actionName == ""){
    logGoogleAnalyticsMessage(`actionName considered 'undefined' or empty. sending action:'${contentClicked}', label:'${window.location.pathname}'.`)
    sendGAEvent(eventName, contentClicked, window.location.pathname);
  }else{
    logGoogleAnalyticsMessage(`actionName '${actionName}' registered as a real value, sending action with label as contentClicked: '${contentClicked}'`)
    sendGAEvent(eventName, actionName, contentClicked);
  }
}

export function addSendGAEventOnAnchorClickToAnchorElements(anchorElements, eventName, actionName){
  logGoogleAnalyticsMessage(`anchorElements: '${anchorElements}', eventName: '${eventName}', actionName: '${actionName}'`);
  for(let i=0; i<anchorElements.length; i++){
    anchorElements[i].addEventListener("click", (ev) => sendGAEventFromClickEvent(ev, eventName, actionName));
  }
}
