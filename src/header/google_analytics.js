
export function sendGAEvent(event, action, label){
  if(ga){ ga(send, event, action, label); }
  else if(gtag){ 
    gtag('event', event, {
      'event_category': action,
      'event_label': label 
    })
  }else{
    console.error("tried to sendGAEvent, but neither 'ga()' nor 'gtag()' were found");
  }
}
