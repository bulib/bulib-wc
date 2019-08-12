
const debug = true;

function logSendGAEvent(message){
  if(debug){ console.log("google_analytics_helper) " + message); }
}

export function sendGAEvent(eventName, action, label){
  logSendGAEvent("request made to sendGAEvent('" + eventName + "', '" + action + "', '" + label + "')");
  if(window.ga){ window.ga('send', eventName, action, label); }
  else if(window.gtag){ 
    window.gtag('event', eventName, {
      'event_category': action,
      'event_label': label 
    });
  }else{
    logSendGAEvent("tried to sendGAEvent for '" + eventName + "' but neither 'ga()' nor 'gtag()' were found");
  }
}

export function addSendGAEventOnAnchorClickToAnchorElements(anchorElements, eventName){
  let contentClicked = "";
  for(let i=0; i<anchorElements.length; i++){
    anchorElements[i].addEventListener("click", (ev) => {
      contentClicked = ev.target.innerText ? ev.target.innerText : ev.target.querySelector("span").innerText || "[unknown]";
      contentClicked = contentClicked.replace(/\//,"")
      sendGAEvent(eventName, contentClicked.replace(/ +/g,"-").toLowerCase(), window.location.pathname);
    });
  }
}
