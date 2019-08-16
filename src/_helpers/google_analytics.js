
const DEBUG_ANALYTICS = true;

function logSendGAEvent(message){
  if(DEBUG_ANALYTICS){ console.log("google_analytics_helper) " + message); }
}

export function initializeGA(ga_tracking_id){
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', ga_tracking_id, 'auto');
  ga('send', 'pageview');
}

export function initializeGTAG(ga_tracking_id){
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', ga_tracking_id);  
}

export function sendGAEvent(eventName, action, label){
  logSendGAEvent(`request made to sendGAEvent('${eventName}', '${action}', '${label}')`);
  try{
    if(window.gtag){ 
      window.gtag('event', eventName, {
        'event_category': action,
        'event_label': label 
      });
      logSendGAEvent("window.gtag() found and called");
    }else if(window.ga){ 
      window.ga('send', eventName, action, label); 
      logSendGAEvent("window.ga() found and called");
    }else{
      logSendGAEvent("tried to sendGAEvent for '" + eventName + "' but neither 'ga()' nor 'gtag()' were found");
    }
  }catch(err){
    logSendGAEvent("ERROR! - "); 
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
