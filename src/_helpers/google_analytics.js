
const debug = true;

function logSendGAEvent(message){
  if(debug){ console.log("google_analytics_helper) " + message); }
}

export function sendGAEvent(eventName, action, label){
  logSendGAEvent("request made to sendGAEvent('" + eventName + "', '" + action + "', '" + label + "')");
  if(window.ga){ window.ga(send, eventName, action, label); }
  else if(window.gtag){ 
    window.gtag('event', eventName, {
      'event_category': action,
      'event_label': label 
    });
  }else{
    logSendGAEvent("tried to sendGAEvent for '" + eventName +"' but neither 'ga()' nor 'gtag()' were found");
  }
}