export const header_demo = `
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/bulib/bulib-wc@latest/assets/css/common.css">
  <style>
    /* header grid and responsivensess */
    .primary-navbar {
      display: flex;
      justify-content: space-between; 
    }
    .primary-navbar a { 
      color: white;
      text-decoration: none;
    }
    .primary-navbar a:hover {
      text-decoration: underline;
    }

    /* menu items */
    .menu-items {
      text-align: center;
      justify-content: space-between;
    }
    .menu-items > li a, .menu-item { display: block; }
    @media only screen and (max-width: 750px){ 
      .menu-items > li, .menu-item { display: none; }
      .hamburger { display: block !important; }
    } 

    /* assorted minor styles */ 
    .menu-items { 
      padding-left: 0px; 
      display: flex;
      list-style: none;
    }
    .primary-nav-main > ul > li {
      padding-left: 15px; padding-right: 15px;
    }

    /* hamburger menu */
    a.hamburger { 
      display: none;
      font-size: 3em; 
      margin-top: -15px;
      border: solid transparent 1px;
    }
    a.hamburger:hover { 
      text-decoration: none;
      color: white !important;
      border: solid white 1px; 
    }

    /* dropdown */ 
    .dropdown {
      position: relative;
      display: inline-block;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: black;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      padding: 12px 16px;
      z-index: 1;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }
  </style>
  <div class="header-wrapper">
    <nav>
      <div class="primary-navbar">
        <div class="primary-nav-left">
          <a title="BU Libraries Homepage">
            <img id="bu-logo" src="https://raw.githubusercontent.com/bulib/bulib-wc/assets/icons/bulib-logo.png">
          </a>
        </div>
        <div class="primary-nav-main menu-items-wrapper">
          <ul class="menu-items">
            <li id="subsite-research"><a href="http://bu.edu/library/research">Research</a></li>
            <li id="subsite-about"><a href="http://bu.edu/library/">About</a></li>
            <!-- <li id="subsite-guides"><a href="http://library.bu.edu/guides">Guides</a></li> -->
            <li id="subsite-services"><a href="http://bu.edu/library/services">Services</a></li>
            <!-- <li id="subsite-help"><a href="http://askalibrarian.bu.edu/">Help</a></li> -->
          </ul>
        </div>
        <div class="primary-nav-right">
          <div class="inline mobile-menu">
            <a class="hamburger dropdown" href="#popup1">&equiv;</a>
            <div class="dropdown-content">
              <ul>
                <li id="subsite-research"><a href="http://bu.edu/library/research">Research</a></li>
                <li id="subsite-about"><a href="http://bu.edu/library/">About</a></li>
                <li id="subsite-services"><a href="http://bu.edu/library/services">Services</a></li>
                <hr />
                <li id="subsite-services"><a href="http://bu.edu/library/about">Library Locations</a></li>
                <li id="subsite-services">
                  <a href="https://buprimo.hosted.exlibrisgroup.com/primo-explore/account?vid=default&lang=en_US">My Library Account</a>
                </li>
              </ul>
            </div>
          </div>
          <ul class="menu-items">
            <li>
              <div class="dropdown menu-item">
                <span>Library Locations	&or;</span>
                <div class="dropdown-content">
                    <ul class="library-list no-bullet">
                      <li id="lib-african"><a href="">African Studies</a></li>
                      <li id="lib-astronomy"><a href="">Astronomy</a></li>
                      <li id="lib-disc"><a href="">Digital Collections</a></li>
                      <li id="lib-hgar"><a href="">HGARC</a></li>
                      <li id="lib-mugar"><a href="">Mugar</a></li>
                      <li id="lib-music"><a href="">Music</a></li>
                      <li id="lib-openbu"><a href="">OpenBU</a></li>
                      <li id="lib-pardee"><a href="">Pardee</a></li>
                      <li id="lib-mgmt"><a href="">Pickering</a></li>
                      <li id="lib-scieng"><a href="">Sci &amp; Eng</a></li>
                      <li id="lib-stone"><a href="">Stone</a></li>
                      <li id="lib-other"><a href="">Other Libraries</a></li>
                    </ul>
                </div>
              </div>
            </li>
            <li>
                <a class="menu-item" href="https://buprimo.hosted.exlibrisgroup.com/primo-explore/account?vid=default&lang=en_US">My Library Account</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>`;