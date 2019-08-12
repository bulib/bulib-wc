/** data on the overall search sources we have available to search on */
export const search_options = [
  {"value":"help",      "name":"Ask a Librarian",          "placeholder": "Search for help topics",      "domain":"http://askalibrarian.bu.edu/search/?t=0&q="},
  {"value":"primo",     "name":"BU Libraries Search",      "placeholder": "Search library resources",     "domain":"https://buprimo.hosted.exlibrisgroup.com/primo-explore/search?vid=BU&institution=BOSU&search_scope=default_scope&highlight=true&lang=en_US&query=any,contains,"},
  {"value":"wp",        "name":"BU Libraries Site",        "placeholder": "Search library info/services", "domain":"https://search.bu.edu/?site=www.bu.edu%2Flibrary&q="},
  {"value":"industries","name":"Industry Survey Locator",  "placeholder": "Search for industry surveys",  "domain":"https://buprimo.hosted.exlibrisgroup.com/primo-explore/search?vid=ISL&institution=BOSU&search_scope=default_scope&highlight=true&lang=en_US&query=any,contains,"},
  {"value":"guides",    "name":"Library Guides",           "placeholder": "Search Research Guides",       "domain":"http://library.bu.edu/srch.php?q="},
  {"value":"openbu",    "name":"Open BU",                  "placeholder": "Search BU Digital Collections","domain":"https://open.bu.edu/discover?query="},
  {"value":"worldcat",  "name":"OCLC WorldCat",            "placeholder": "BU Libraries Search",          "domain":"https://bu.on.worldcat.org/search?queryString="}
  // {"value":"directory", "name":"Staff Directory",          "placeholder": "Search for people at BU",      "domain":"https://www.bu.edu/phpbin/directory/?q="},
  // {"value":"hgar",      "name":"Archival Research Center", "placeholder": "Search the BU Archive",        "domain":"http://archives.bu.edu/search/?search=SEARCH&query="},
];