export function getLibraryCodeFromUrl(lib_url, defLibCode="help"){
  let lib_code = defLibCode;
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
  return lib_code;
};