import{h as i,i as e,_ as a,e as r,f as s,g as n,j as l,k as t,l as b}from"./preview-bc6c89ca.js";import"./lit-html-2435d3b6.js";import"./index-317d2c41.js";function u(){return(u=Object.assign||function(i){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i[r]=a[r])}return i}).apply(this,arguments)}const d={},c="wrapper";function o(i){let{components:a}=i,s=n(i,["components"]);return r(c,u({},d,s,{components:a,mdxType:"MDXLayout"}),r(l,{title:"Branding|header",mdxType:"Meta"}),r("h1",null,"BU Libraries Header"),r("p",null,"Provide a clean, consistent, minimalist, and reliable way to brand any given site and to navigate between subsites\nwhether on large screens or on mobile, even when ",r("inlineCode",{parentName:"p"},"javascript")," is turned off."),r("p",null,r("em",{parentName:"p"},"NOTE: the css for this requires a build step")),r("h2",null,"Top Bar"),r("p",null,"Contains the main navigation across/between all sites.  "),r("p",null,r("em",{parentName:"p"},"NOTE: therefore, all links must be absolute and not relative")),r(t,{mdxType:"Preview"},r(b,{name:"header",mdxType:"Story"},e`
      <div class="header-wrapper">
        <nav>
          <a class="sr-only" href="#content">Skip to Main Content</a>
          <div class="primary-navbar">  
            <div class="primary-nav-left">  
              <a title="BU Libraries Homepage" href="https://www.bu.edu/library"> 
                <img id="bu-logo" src="https://cdn.jsdelivr.net/npm/bulib-wc@latest/dist/icons/bulib-logo.png"> 
              </a>  
            </div>  
            <div class="primary-nav-main menu-items-wrapper"> 
              <ul class="menu-items">
                <li id="subsite-research"><a href="https://www.bu.edu/library/services">Find & Borrow</a></li>  
                <li id="subsite-services"><a href="https://www.bu.edu/library/research">Research & Learning</a></li>  
                <li id="subsite-about"><a href="https://www.bu.edu/library/about">About Us</a></li>
                <li>  
                  <div class="dropdown">  
                      <a class="menu-item inline" href="https://www.bu.edu/library/about">  
                        <span class="prs">Locations</span><i class="material-icons inline">arrow_drop_down</i>  
                      </a>  
                    <div class="dropdown-content">  
                        <ul class="library-list no-bullet"> 
                          <li><a href="https://www.bu.edu/library/african-studies/">African Studies Library</a></li>  
                          <li><a href="https://www.bu.edu/library/astronomy/">Astronomy Library</a></li>    
                          <li><a href="http://archives.bu.edu/">Howard Gotlieb Archival Research Center</a></li>  
                          <li><a href="https://www.bu.edu/library/mugar-memorial/">Mugar Memorial Library</a></li>  
                          <li><a href="https://www.bu.edu/library/music/">Music Library</a></li>  
                          <li><a href="https://www.bu.edu/library/management/">Pardee Management Library</a></li> 
                          <li><a href="https://www.bu.edu/library/pickering-educational/">Pickering Educational Resources Library</a></li>  
                          <li><a href="https://www.bu.edu/library/sel/">Science & Engineering Library</a></li>  
                          <li><a href="https://www.bu.edu/library/stone-science/">Stone Science Library</a></li>  
                          <li><a href="https://www.bu.edu/library/about/additional-libraries/">Additional Libraries</a></li>  
                        </ul> 
                    </div>  
                  </div>  
                </li> 
              </ul> 
            </div>  
            <div class="primary-nav-right"> 
              <div class="mobile-navigation none" aria-hidden="true"> 
                <div id="menuToggle"> 
                  <!-- invisible toggle with hamburger -->  
                  <input type="checkbox" tabindex="-1">
                  <span></span>
                  <span></span>
                  <span></span>
                    
                  <!-- mobile nav menu -->  
                  <ul id="mobile-menu"> 
                    <li id="subsite-research"><a href="https://www.bu.edu/library/services">Find & Borrow</a></li>  
                    <li id="subsite-services"><a href="https://www.bu.edu/library/research">Research & Learning</a></li>  
                    <li id="subsite-about"><a href="https://www.bu.edu/library/">About Us</a></li>  
                    <li><hr></li> 
                    <li><a href="https://www.bu.edu/library/about">Library Locations</a></li> 
                    <li><a href="https://www.bu.edu/library/account">My Account</a></li>  
                    <li><a href="https://askalibrarian.bu.edu/">Ask a Librarian</a></li> 
                  </ul> 
                </div>  
              </div>  
              <div class="top-right"> 
                <ul class="menu-items">	
                  <li>	
                    <a class="menu-item inline" href="https://askalibrarian.bu.edu/">	
                      <span class="prm">Ask a Librarian</span><i class="material-icons inline">question_answer</i>	
                    </a>	
                  </li>	
                  <li>	
                    <a class="menu-item inline" href="https://www.bu.edu/library/account">	
                      <span class="prm">My Account</span><i class="material-icons inline">person</i>	
                    </a>	
                  </li>	
                </ul>
              </div>  
            </div>  
          </div>
          <script id="mobile-nav-clickout" type="text/javascript">
            let input = document.querySelector("#menuToggle > input");
            window.addEventListener("click", (event) => {
              let clicked = event.target;
              let clicked_within_mobile_menu = clicked.closest("#menuToggle") != null;
              if(input && clicked != input && !clicked_within_mobile_menu || clicked.tagName == "A"){
                input.checked = false; // uncheck the #menuToggle input, closing the mobile nav
              }
            });
          </script>
        </nav>
      </div>
      <br /><br /><br /><br /><br />
    `)),r("h2",null,"Banner"),r("p",null,"Contains Site-Specific Code/links, and normally a ",r("inlineCode",{parentName:"p"},"<bulib-search>")," (if one's not already present on the home page)."),r("p",null,"Links for a hierarchy of '",r("strong",{parentName:"p"},"parent"),": child' (unless otherwise specified), and should take you back to the site landing page (/)."),r(t,{mdxType:"Preview"},r(b,{name:"site-banner",mdxType:"Story"},e`
      <div class="banner-wrapper">
        <div class="banner">
          <span><a href="/">Ask a Librarian:</a> <a href="/businessFAQs">Business FAQs</a></span>
          <bulib-search str_options="pardee-help primo"></bulib-search>
        </div>
      </div>
    `)),r(t,{mdxType:"Preview"},r(b,{name:"site-banner-wp",mdxType:"Story"},e`
      <style type="text/css">
        body {
          --bulib-search-padding: 5px;
          --bulib-search-options-padding: 0px;
          --bulib-search-options-label-size: small;
        }
      </style>
      <div class="banner-wrapper">
        <div class="banner">
          <section>
            <span class="flexw">
              <a id="genus" href="/library-responsive/mugar-memorial/">Mugar Memorial Library</a>
              <a id="species" href="/library-responsive/mugar-memorial/services">:&nbsp; Services</a>
            </span>
            <span id="hours-display" class="flexw small-text txtv">
              hours: &nbsp; <bulib-hours library="mugar-memorial" short></bulib-hours>
            </span>
          </section> 
          <bulib-search str_options="wp primo guides" class="prm"></bulib-search>
        </div>
      </div>
    `)),r("p",null,"LibCal exception case in which the site is dual-purpose (has two landing pages)."),r(t,{mdxType:"Preview"},r(b,{name:"site-banner-libcal",mdxType:"Story"},e`
      <div class="banner-wrapper">
        <div class="banner">
          <span>
            <strong><a href="/calendar">Events</a></strong> &nbsp; and &nbsp;
            <strong><a href="https://www.bu.edu/library/about/study-spaces">Reservations</a></strong>
          </span>
        </div>
      </div>
    `)),r(t,{mdxType:"Preview"},r(b,{name:"site-banner-libguides",mdxType:"Story"},e`
      <div class="banner-wrapper">
      <div class="banner">
        <div>
          <h1><a href="/az.php">A-Z Databases List</a>&nbsp;</h1>
          <div id="s-lib-bc">
            <ol id="s-lib-bc-list" class="breadcrumb">
              <li id="s-lib-bc-customer">
                <a title="Boston University Libraries" href="http://bu.edu/library">Boston University Libraries</a>
              </li>
              <li id="s-lib-bc-site">
                <a title="Research" href="//library.bu.edu/">Research</a>
              </li>
              <li id="s-lib-bc-page" class="active">A-Z Databases</li>
            </ol>
          </div>
        </div>
        
        <bulib-search str_options="db guides primo"></bulib-search>
      </div>
    </div>
    `)))}o.isMDXComponent=!0;const p=i(e`
      <div class="header-wrapper">
        <nav>
          <a class="sr-only" href="#content">Skip to Main Content</a>
          <div class="primary-navbar">  
            <div class="primary-nav-left">  
              <a title="BU Libraries Homepage" href="https://www.bu.edu/library"> 
                <img id="bu-logo" src="https://cdn.jsdelivr.net/npm/bulib-wc@latest/dist/icons/bulib-logo.png"> 
              </a>  
            </div>  
            <div class="primary-nav-main menu-items-wrapper"> 
              <ul class="menu-items">
                <li id="subsite-research"><a href="https://www.bu.edu/library/services">Find & Borrow</a></li>  
                <li id="subsite-services"><a href="https://www.bu.edu/library/research">Research & Learning</a></li>  
                <li id="subsite-about"><a href="https://www.bu.edu/library/about">About Us</a></li>
                <li>  
                  <div class="dropdown">  
                      <a class="menu-item inline" href="https://www.bu.edu/library/about">  
                        <span class="prs">Locations</span><i class="material-icons inline">arrow_drop_down</i>  
                      </a>  
                    <div class="dropdown-content">  
                        <ul class="library-list no-bullet"> 
                          <li><a href="https://www.bu.edu/library/african-studies/">African Studies Library</a></li>  
                          <li><a href="https://www.bu.edu/library/astronomy/">Astronomy Library</a></li>    
                          <li><a href="http://archives.bu.edu/">Howard Gotlieb Archival Research Center</a></li>  
                          <li><a href="https://www.bu.edu/library/mugar-memorial/">Mugar Memorial Library</a></li>  
                          <li><a href="https://www.bu.edu/library/music/">Music Library</a></li>  
                          <li><a href="https://www.bu.edu/library/management/">Pardee Management Library</a></li> 
                          <li><a href="https://www.bu.edu/library/pickering-educational/">Pickering Educational Resources Library</a></li>  
                          <li><a href="https://www.bu.edu/library/sel/">Science & Engineering Library</a></li>  
                          <li><a href="https://www.bu.edu/library/stone-science/">Stone Science Library</a></li>  
                          <li><a href="https://www.bu.edu/library/about/additional-libraries/">Additional Libraries</a></li>  
                        </ul> 
                    </div>  
                  </div>  
                </li> 
              </ul> 
            </div>  
            <div class="primary-nav-right"> 
              <div class="mobile-navigation none" aria-hidden="true"> 
                <div id="menuToggle"> 
                  <!-- invisible toggle with hamburger -->  
                  <input type="checkbox" tabindex="-1">
                  <span></span>
                  <span></span>
                  <span></span>
                    
                  <!-- mobile nav menu -->  
                  <ul id="mobile-menu"> 
                    <li id="subsite-research"><a href="https://www.bu.edu/library/services">Find & Borrow</a></li>  
                    <li id="subsite-services"><a href="https://www.bu.edu/library/research">Research & Learning</a></li>  
                    <li id="subsite-about"><a href="https://www.bu.edu/library/">About Us</a></li>  
                    <li><hr></li> 
                    <li><a href="https://www.bu.edu/library/about">Library Locations</a></li> 
                    <li><a href="https://www.bu.edu/library/account">My Account</a></li>  
                    <li><a href="https://askalibrarian.bu.edu/">Ask a Librarian</a></li> 
                  </ul> 
                </div>  
              </div>  
              <div class="top-right"> 
                <ul class="menu-items">	
                  <li>	
                    <a class="menu-item inline" href="https://askalibrarian.bu.edu/">	
                      <span class="prm">Ask a Librarian</span><i class="material-icons inline">question_answer</i>	
                    </a>	
                  </li>	
                  <li>	
                    <a class="menu-item inline" href="https://www.bu.edu/library/account">	
                      <span class="prm">My Account</span><i class="material-icons inline">person</i>	
                    </a>	
                  </li>	
                </ul>
              </div>  
            </div>  
          </div>
          <script id="mobile-nav-clickout" type="text/javascript">
            let input = document.querySelector("#menuToggle > input");
            window.addEventListener("click", (event) => {
              let clicked = event.target;
              let clicked_within_mobile_menu = clicked.closest("#menuToggle") != null;
              if(input && clicked != input && !clicked_within_mobile_menu || clicked.tagName == "A"){
                input.checked = false; // uncheck the #menuToggle input, closing the mobile nav
              }
            });
          </script>
        </nav>
      </div>
      <br /><br /><br /><br /><br />
    `);p.story={},p.story.name="header",p.story.parameters={mdxSource:'html`\n      <div class="header-wrapper">\n        <nav>\n          <a class="sr-only" href="#content">Skip to Main Content</a>\n          <div class="primary-navbar">  \n            <div class="primary-nav-left">  \n              <a title="BU Libraries Homepage" href="https://www.bu.edu/library"> \n                <img id="bu-logo" src="https://cdn.jsdelivr.net/npm/bulib-wc@latest/dist/icons/bulib-logo.png"> \n              </a>  \n            </div>  \n            <div class="primary-nav-main menu-items-wrapper"> \n              <ul class="menu-items">\n                <li id="subsite-research"><a href="https://www.bu.edu/library/services">Find & Borrow</a></li>  \n                <li id="subsite-services"><a href="https://www.bu.edu/library/research">Research & Learning</a></li>  \n                <li id="subsite-about"><a href="https://www.bu.edu/library/about">About Us</a></li>\n                <li>  \n                  <div class="dropdown">  \n                      <a class="menu-item inline" href="https://www.bu.edu/library/about">  \n                        <span class="prs">Locations</span><i class="material-icons inline">arrow_drop_down</i>  \n                      </a>  \n                    <div class="dropdown-content">  \n                        <ul class="library-list no-bullet"> \n                          <li><a href="https://www.bu.edu/library/african-studies/">African Studies Library</a></li>  \n                          <li><a href="https://www.bu.edu/library/astronomy/">Astronomy Library</a></li>    \n                          <li><a href="http://archives.bu.edu/">Howard Gotlieb Archival Research Center</a></li>  \n                          <li><a href="https://www.bu.edu/library/mugar-memorial/">Mugar Memorial Library</a></li>  \n                          <li><a href="https://www.bu.edu/library/music/">Music Library</a></li>  \n                          <li><a href="https://www.bu.edu/library/management/">Pardee Management Library</a></li> \n                          <li><a href="https://www.bu.edu/library/pickering-educational/">Pickering Educational Resources Library</a></li>  \n                          <li><a href="https://www.bu.edu/library/sel/">Science & Engineering Library</a></li>  \n                          <li><a href="https://www.bu.edu/library/stone-science/">Stone Science Library</a></li>  \n                          <li><a href="https://www.bu.edu/library/about/additional-libraries/">Additional Libraries</a></li>  \n                        </ul> \n                    </div>  \n                  </div>  \n                </li> \n              </ul> \n            </div>  \n            <div class="primary-nav-right"> \n              <div class="mobile-navigation none" aria-hidden="true"> \n                <div id="menuToggle"> \n                  \x3c!-- invisible toggle with hamburger --\x3e  \n                  <input type="checkbox" tabindex="-1">\n                  <span></span>\n                  <span></span>\n                  <span></span>\n                    \n                  \x3c!-- mobile nav menu --\x3e  \n                  <ul id="mobile-menu"> \n                    <li id="subsite-research"><a href="https://www.bu.edu/library/services">Find & Borrow</a></li>  \n                    <li id="subsite-services"><a href="https://www.bu.edu/library/research">Research & Learning</a></li>  \n                    <li id="subsite-about"><a href="https://www.bu.edu/library/">About Us</a></li>  \n                    <li><hr></li> \n                    <li><a href="https://www.bu.edu/library/about">Library Locations</a></li> \n                    <li><a href="https://www.bu.edu/library/account">My Account</a></li>  \n                    <li><a href="https://askalibrarian.bu.edu/">Ask a Librarian</a></li> \n                  </ul> \n                </div>  \n              </div>  \n              <div class="top-right"> \n                <ul class="menu-items">\t\n                  <li>\t\n                    <a class="menu-item inline" href="https://askalibrarian.bu.edu/">\t\n                      <span class="prm">Ask a Librarian</span><i class="material-icons inline">question_answer</i>\t\n                    </a>\t\n                  </li>\t\n                  <li>\t\n                    <a class="menu-item inline" href="https://www.bu.edu/library/account">\t\n                      <span class="prm">My Account</span><i class="material-icons inline">person</i>\t\n                    </a>\t\n                  </li>\t\n                </ul>\n              </div>  \n            </div>  \n          </div>\n          <script id="mobile-nav-clickout" type="text/javascript">\n            let input = document.querySelector("#menuToggle > input");\n            window.addEventListener("click", (event) => {\n              let clicked = event.target;\n              let clicked_within_mobile_menu = clicked.closest("#menuToggle") != null;\n              if(input && clicked != input && !clicked_within_mobile_menu || clicked.tagName == "A"){\n                input.checked = false; // uncheck the #menuToggle input, closing the mobile nav\n              }\n            });\n          <\/script>\n        </nav>\n      </div>\n      <br /><br /><br /><br /><br />\n    `'};const h=i(e`
      <div class="banner-wrapper">
        <div class="banner">
          <span><a href="/">Ask a Librarian:</a> <a href="/businessFAQs">Business FAQs</a></span>
          <bulib-search str_options="pardee-help primo"></bulib-search>
        </div>
      </div>
    `);h.story={},h.story.name="site-banner",h.story.parameters={mdxSource:'html`\n      <div class="banner-wrapper">\n        <div class="banner">\n          <span><a href="/">Ask a Librarian:</a> <a href="/businessFAQs">Business FAQs</a></span>\n          <bulib-search str_options="pardee-help primo"></bulib-search>\n        </div>\n      </div>\n    `'};const m=i(e`
      <style type="text/css">
        body {
          --bulib-search-padding: 5px;
          --bulib-search-options-padding: 0px;
          --bulib-search-options-label-size: small;
        }
      </style>
      <div class="banner-wrapper">
        <div class="banner">
          <section>
            <span class="flexw">
              <a id="genus" href="/library-responsive/mugar-memorial/">Mugar Memorial Library</a>
              <a id="species" href="/library-responsive/mugar-memorial/services">:&nbsp; Services</a>
            </span>
            <span id="hours-display" class="flexw small-text txtv">
              hours: &nbsp; <bulib-hours library="mugar-memorial" short></bulib-hours>
            </span>
          </section> 
          <bulib-search str_options="wp primo guides" class="prm"></bulib-search>
        </div>
      </div>
    `);m.story={},m.story.name="site-banner-wp",m.story.parameters={mdxSource:'html`\n      <style type="text/css">\n        body {\n          --bulib-search-padding: 5px;\n          --bulib-search-options-padding: 0px;\n          --bulib-search-options-label-size: small;\n        }\n      </style>\n      <div class="banner-wrapper">\n        <div class="banner">\n          <section>\n            <span class="flexw">\n              <a id="genus" href="/library-responsive/mugar-memorial/">Mugar Memorial Library</a>\n              <a id="species" href="/library-responsive/mugar-memorial/services">:&nbsp; Services</a>\n            </span>\n            <span id="hours-display" class="flexw small-text txtv">\n              hours: &nbsp; <bulib-hours library="mugar-memorial" short></bulib-hours>\n            </span>\n          </section> \n          <bulib-search str_options="wp primo guides" class="prm"></bulib-search>\n        </div>\n      </div>\n    `'};const w=i(e`
      <div class="banner-wrapper">
        <div class="banner">
          <span>
            <strong><a href="/calendar">Events</a></strong> &nbsp; and &nbsp;
            <strong><a href="https://www.bu.edu/library/about/study-spaces">Reservations</a></strong>
          </span>
        </div>
      </div>
    `);w.story={},w.story.name="site-banner-libcal",w.story.parameters={mdxSource:'html`\n      <div class="banner-wrapper">\n        <div class="banner">\n          <span>\n            <strong><a href="/calendar">Events</a></strong> &nbsp; and &nbsp;\n            <strong><a href="https://www.bu.edu/library/about/study-spaces">Reservations</a></strong>\n          </span>\n        </div>\n      </div>\n    `'};const v=i(e`
      <div class="banner-wrapper">
      <div class="banner">
        <div>
          <h1><a href="/az.php">A-Z Databases List</a>&nbsp;</h1>
          <div id="s-lib-bc">
            <ol id="s-lib-bc-list" class="breadcrumb">
              <li id="s-lib-bc-customer">
                <a title="Boston University Libraries" href="http://bu.edu/library">Boston University Libraries</a>
              </li>
              <li id="s-lib-bc-site">
                <a title="Research" href="//library.bu.edu/">Research</a>
              </li>
              <li id="s-lib-bc-page" class="active">A-Z Databases</li>
            </ol>
          </div>
        </div>
        
        <bulib-search str_options="db guides primo"></bulib-search>
      </div>
    </div>
    `);v.story={},v.story.name="site-banner-libguides",v.story.parameters={mdxSource:'html`\n      <div class="banner-wrapper">\n      <div class="banner">\n        <div>\n          <h1><a href="/az.php">A-Z Databases List</a>&nbsp;</h1>\n          <div id="s-lib-bc">\n            <ol id="s-lib-bc-list" class="breadcrumb">\n              <li id="s-lib-bc-customer">\n                <a title="Boston University Libraries" href="http://bu.edu/library">Boston University Libraries</a>\n              </li>\n              <li id="s-lib-bc-site">\n                <a title="Research" href="//library.bu.edu/">Research</a>\n              </li>\n              <li id="s-lib-bc-page" class="active">A-Z Databases</li>\n            </ol>\n          </div>\n        </div>\n        \n        <bulib-search str_options="db guides primo"></bulib-search>\n      </div>\n    </div>\n    `'};const y={title:"Branding|header",includeStories:["header","siteBanner","siteBannerWp","siteBannerLibcal","siteBannerLibguides"]},g={header:"branding-header--header","site-banner":"branding-header--site-banner","site-banner-wp":"branding-header--site-banner-wp","site-banner-libcal":"branding-header--site-banner-libcal","site-banner-libguides":"branding-header--site-banner-libguides"};y.parameters=y.parameters||{},y.parameters.docs=a({},y.parameters.docs||{},{page:()=>r(s,{mdxStoryNameToId:g},r(o,null))});export default y;export{p as header,h as siteBanner,w as siteBannerLibcal,v as siteBannerLibguides,m as siteBannerWp};
//# sourceMappingURL=header.stories-c8bd783d.js.map
