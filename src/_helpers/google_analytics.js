
const DEBUG_ANALYTICS = false;

function logSendGAEvent(message){
  if(DEBUG_ANALYTICS){ console.log("google_analytics_helper) " + message); }
}

export function sendGAEvent(eventName, action, label){
  logSendGAEvent(`request made to sendGAEvent('${eventName}', '${action}', '${label}')`);
  if(window.ga){ window.ga('send', eventName, action, label); }
  else if(window.gtag){ 
    window.gtag('event', eventName, {
      'event_category': action,
      'event_label': label 
    });
  }else{
    logSendGAEvent("tried to sendGAEvent for '" + eventName + "' but neither 'ga()' nor 'gtag()' were found");
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
