
/** - STORAGE UTILITY - */

const DEBUG_STORAGE_UTIL = true;
const DEFAULT_STORAGE_EXPIRATION_TIME = 1000 * 60 * 60 * 24 * 3; // 3 days (for now)

function logStorageMessage(msg){ if(DEBUG_STORAGE_UTIL){ console.log("_storageUtility) " + msg); }}

/** try reading a value from local memory with a given fallback */
function readExpiringLocalValue(keyName, fallback){
  var valueToReturn = fallback || false;
  try{
    // look in localStorage for our announcement-dismissed variables
    var storedValue = localStorage.getItem(keyName);
    var lastUpdated = localStorage.getItem(keyName+"-when");
    
    // if both localStorage values are present...
    if(!!storedValue && !!lastUpdated){

      // if it hasn't 'expired', query the value : 
      if( (Date.now() - lastUpdated) < DEFAULT_STORAGE_EXPIRATION_TIME){
        valueToReturn = localStorage.getItem(keyName) == "true";
        logStorageMessage(`unexpired '${keyName}' value of '${storedValue}' read from localStorage`);

      // if it has expired, reset/remove it
      }else{
        localStorage.removeItem(keyName);
        localStorage.removeItem(keyName+"-when");
        logStorageMessage(`expired '${keyName}*' values have been removed. will be sending fallback of '${fallback}'`);
      }
    }
  }catch(exception){
    logStorageMessage(`exception trying to get item '${keyName}' from localStorage: '${exception.message}'. returning fallback '${fallback}' instead`);
    valueToReturn = fallback || false;
  }finally{
    return valueToReturn;
  }
}

/** try setting a value from local memory with a timestamp of when it was set */
function setExpiringLocalValue(keyName, value){
  try{ // note: safari breaks with a security error any time 'localStorage' is accessed
    localStorage.setItem(keyName, value); 
    localStorage.setItem(keyName+"-when", Date.now()); 
    logStorageMessage(`key '${keyName}' successfully set to value '${value}'.`)
  }
  catch(exception){ 
    logStorageMessage("exception trying to setItem in localStorage: " + exception.message); 
  }
}

export { readExpiringLocalValue, setExpiringLocalValue };
