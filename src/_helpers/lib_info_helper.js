// import {_getDataFromFile} from './load_json.js';

const libraries_data_backup = {
  "mugar-memorial":{
    "name":"Mugar Memorial Library",
    "short":"Mugar Library",
    "website":"https://www.bu.edu/library/mugar-memorial/",
    "address":["771 Commonwealth Avenue","Boston, MA 02215"],
    "contacts":{"phone":"617-353-2700","email":"ask@bu.edu"},
    "social":{"facebook":"bostonulibraries","twitter":"bulibraries","instagram":"bulibraries"},
    "hours_url": "http://www.bu.edu/library/mugar-memorial/about/hours/",
    "libcal_lid": 1475
  },"african-studies":{
    "name":"African Studies Library",
    "short":"African Studies",
    "website":"https://www.bu.edu/library/african-studies/",
    "address":["771 Commonwealth Ave, 6th Floor","Boston, MA, 02215"],
    "contacts":{"phone":"617-353-3726"},
    "social":{"facebook":"BuAfricanStudiesLibrary","flickr":"123460528@N03"},
    "hours_url":"http://www.bu.edu/library/african-studies/about/hours/",
    "libcal_lid":1809
  },"medlib":{
    "name":"Alumni Medical Library",
    "short":"Medical Library",
    "website":"https://medlib.bu.edu/",
    "address":["72 E Concord, L-12","Boston, MA 02118"],
    "contacts":{"phone":"617-358-2350","fax":"617-358-2347","email":"refquest@bu.edu"},
    "hours_url": "http://www.bumc.bu.edu/medlib/about-us/hours/"
  },"astronomy":{
    "name":"Astronomy Library",
    "short":"Astronomy Library",
    "website":"https://www.bu.edu/library/astronomy/",
    "address":["725 Commonwealth Avenue","Boston, MA 02445"],
    "contacts":{"phone":"617-353-2625"},
    "hours_url":"http://www.bu.edu/library/astronomy/about/hours/",
    "libcal_lid":1784
  },"lawlibrary":{
    "name":"Fineman & Pappas Law Libraries",
    "short":"Law Library",
    "website":"https://www.bu.edu/lawlibrary/",
    "address":["765 Commonwealth Ave, 2nd Floor","Boston, MA 02215"],
    "contacts":{"phone":"617-353-8411","text":"1-617-997-4475"},
    "hours_url":"http://www.bu.edu/lawlibrary/using-the-library/access-policy/"
  },"hgar":{
    "name":"Howard Gotlieb Archival Research Center",
    "short":"BU Archive",
    "website":"http://archives.bu.edu/",
    "address":["771 Commonwealth Ave, 5th Floor","Boston, MA 02215"],
    "contacts":{"phone":"617-353-3696","fax":"617-353-2838","email":"archives@bu.edu"},
    "social":{"facebook":"hgarc","twitter":"BUHGARC"},
    "hours_url":"http://archives.bu.edu/web/guest/about"
  },"music":{
    "name":"Music Library",
    "short":"Music Library",
    "website":"https://www.bu.edu/library/music/",
    "address":["771 Commonwealth Ave, Floor 2","Boston, MA 02215"],
    "contacts":{"phone":"617-353-3705","email":"musiclib@bu.edu"},
    "social":{"twitter":"BUMusicLib","facebook":"bumusiclib"},
    "hours_url":"http://www.bu.edu/library/music/about/hours/",
    "libcal_lid":1810
  },"pardee":{
    "name":"Pardee Management Library",
    "short":"Pardee Library",
    "website":"https://www.bu.edu/library/management/",
    "address":["595 Commonwealth Avenue","Boston, MA 02215"],
    "contacts":{"phone":"617-353-4301","fax":"617-353-4307","email":"pardstf@bu.edu"},
    "social":{"twitter":"BUpardeelibrary","facebook":"pardeelibrary"},
    "hours_url":"http://www.bu.edu/library/management/about/hours/",
    "libcal_lid":1476
  },"pickering":{
    "name":"Pickering Educational Resources Library",
    "short":"Pickering Library",
    "website":"https://www.bu.edu/library/pickering-educational/",
    "address":["2 Silber Way","Boston, MA 02215"],
    "contacts":{"phone":"617-353-3734"},
    "social":{"twitter":"BUPickeringLib","facebook":"BUPickeringLibrary"},
    "hours_url":"http://www.bu.edu/library/pickering-educational/about/hours",
    "libcal_lid":1783
  },"sel":{
    "name":"Science & Engineering Library",
    "short":"SciEng Library",
    "website":"https://www.bu.edu/library/sel/",
    "address":["38 Cummington Mall","Boston, MA 02215"],
    "contacts":{"phone":"617-353-3733","fax":"617-353-3470"},
    "social":{"twitter":"BUSciEngLib","tumblr":"buscienglib","instagram":"buscienglib"},
    "hours_url":"https://www.bu.edu/library/sel/about/hours/",
    "libcal_lid":1477
  },"stone":{
    "name":"Stone Science Library",
    "short":"Stone Library",
    "website":"https://www.bu.edu/library/stone-science/",
    "address":["675 Commonwealth Ave, Floor 2","Boston, MA 02445"],
    "contacts":{"phone":"617-353-5679"},
    "hours_url":"http://www.bu.edu/library/stone-science/about/hours/",
    "libcal_lid":1785
  },"theology":{
    "name":"School of Theology Library",
    "short":"Theology Library",
    "website":"https://www.bu.edu/sthlibrary/",
    "address":["745 Commonwealth Ave, Floor 2","Boston, MA 02215"],
    "contacts":{"phone":"617-353-3034","fax":"617-358-0698","email":"sthlib@bu.edu"},
    "social":{"twitter":"BUSTHLibrary","facebook":"busthlibrary","instagram":"butheologylibrary"},
    "hours_url":"https://www.bu.edu/sthlibrary/for-visitors/directions/"
  },"help":{
    "name":"BU Libraries",
    "short":"BU Libraries",
    "website":"http://bu.edu/library",
    "address":["771 Commonwealth Avenue","Boston, MA 02215"],
    "contacts":{"phone":"617-353-2700","email":"ask@bu.edu","text":"617-431-2427"},
    "social":{"facebook":"bostonulibraries","twitter":"bulibraries","instagram":"bulibraries"},
    "hours_url": "http://www.bu.edu/library/mugar-memorial/about/hours/",
    "libcal_lid": 1475
  }
};

export function getLibraryInfoFromCode(lib_code, debug=false, defLibCode="help"){
  let libraries_data = /* TODO: _getDataFromFile("lib_info.json") || */ libraries_data_backup;
  let library_data = libraries_data[lib_code] || libraries_data[defLibCode];
  logToConsole(`getting library_data for code: '${lib_code}' with default '${defLibCode}'.`, debug);
  return library_data;
}

export function getSiteCodeFromUrl(url, debug=false, defSiteCode="help"){
  let site_code = "about";
  if(url.includes("askalibrarian")){ site_code = "help"; }
  else if(url.includes("/disc/") || url.includes("/dioa")){ site_code ="services"; }
  else if(url.includes("open.bu") || url.includes("archives")){ site_code = "collections"; }
  else if(url.includes("guides")){ site_code = "guides" }
  else if(url.includes("buprimo") || url.includes("exlibrisgroup")){ site_code = "search"; }
  
  else if(url.includes(".bu.edu/library")){
    if(url.includes("/research")){ site_code = "research"; }
    else if(url.includes("/services")){ site_code = "services"; }
    else{ site_code = "about"; }
  }else{ site_code = "about"; }
  
  logToConsole(`site_code '${site_code}' extracted from url '${url}'.`, debug);
  return site_code;
}

export function getLibraryCodeFromUrl(lib_url, debug=false, defLibCode="help"){
  let lib_code = defLibCode;
  if(lib_url.includes("archives.bu.edu")){ lib_code="hgar"; }
  if(lib_url.includes("bu.edu/library/")){
    // try to get {library_code} from url 'http://www.bu.edu/library/{stone-science}/research/guides/'
    let lib_url_fragment = lib_url.split("bu.edu/library/")[1] || "";
    lib_url_fragment = lib_url_fragment.split("/")[0];

    // set library code based on url fragment
    if(lib_url_fragment.includes("africa")){ lib_code = "african-studies"; }
    else if(lib_url_fragment.includes("mugar")){ lib_code = "mugar-memorial"; }
    else if(lib_url_fragment.includes("med")){ lib_code = "medlib"; }
    else if(lib_url_fragment.includes("astronom")){ lib_code = "astronomy"; }
    else if(lib_url_fragment.includes("law")){ lib_code = "lawlibrary"; }
    else if(lib_url_fragment.includes("music")){ lib_code = "music"; }
    else if(lib_url_fragment.includes("management")){ lib_code = "pardee"; }
    else if(lib_url_fragment.includes("pickering")){ lib_code = "pickering"; }
    else if(lib_url_fragment.includes("sel")){ lib_code = "sel"; }
    else if(lib_url_fragment.includes("stone")){ lib_code = "stone"; }
    else if(lib_url_fragment.includes("sthlibrary")){ lib_code = "stone"; }
    else { lib_code = "help"; }
  }
  if(!Object.keys(libraries_data_backup).includes(lib_code)){ lib_code = "help"; }
  logToConsole(`lib_code '${lib_code}' from lib_url '${lib_url}'`, debug);
  return lib_code;
}

export const getAllLibraryInfo = function(){ return libraries_data_backup; }

export const makeLibraryUrlList = function(){
  let ls_items = ""; let code;
  for(code in libraries_data_backup){
    let item = getLibraryInfoFromCode(code)
    ls_items += `\t<li href="${item.website}">${item.name}"<li>\n`;
  }
  return `<ul>\n${ls_items}</ul>\n`;
};

const logToConsole = function(message, debug=false){
  if(debug){ console.log("lib_info_helper) " + message); }
};