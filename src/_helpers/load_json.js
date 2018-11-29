let debug = true;

/** make a get request to load the data as json from specified file at particular version */
export function _getDataFromFile(filename, version){
  let domain = "https://cdn.jsdelivr.net/gh/bulib/bulib-wc";
  if(version !== ""){ domain += `@${version}`; }
  let url = domain+"/data/"+filename;
  
  //TODO implement the actual call to load the file
  if(debug){ console.log(`_load_json) making call to get data from filename: ${filename} with url: ${url}`); }
  return {};
}