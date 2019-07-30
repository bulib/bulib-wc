export const ensemble_demo = `
  <br /><hr /><br />

  <h2><code>bulib-hours</code></h2>
  <bulib-hours></bulib-hours>
  <br /><hr /><br />

  <h2><code>bulib-search</code></h2>
  <bulib-search></bulib-search>
  <br /><hr /><br />
  
  <h2><code>bulib-locoso</code></h2>
  <bulib-locoso></bulib-locoso>
  <br /><hr /><br />

  <bulib-footer></bulib-footer>`;

export const header_demo = `
<head>
  <meta content="width=device-width, initial-scale=1" name="viewport" />
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/bulib/bulib-wc@latest/assets/css/common.css">
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/bulib/bulib-wc@header-v0.11.5/src/header/header.min.css">
</head>

<body>
  <div class="header-wrapper">
    <nav>
      <div class="primary-navbar">
        <div class="primary-nav-left">
          <a title="BU Libraries Homepage" href="https://www.bu.edu/library">
            <img id="bu-logo" src="https://github.com/bulib/bulib-wc/blob/master/assets/icons/bulib-logo.png?raw=true">
          </a>
        </div>
        <div class="primary-nav-main menu-items-wrapper">
          <ul class="menu-items">
            <li id="subsite-research"><a href="https://www.bu.edu/library/research">Research</a></li>
            <li id="subsite-services"><a href="https://www.bu.edu/library/services">Services</a></li>
            <li id="subsite-about"><a href="https://www.bu.edu/library/">About</a></li>
            <!-- <li id="subsite-guides"><a href="https://library.bu.edu/guides">Guides</a></li> -->
            <!-- <li id="subsite-help"><a href="https://askalibrarian.bu.edu/">Help</a></li> -->
          </ul>
        </div>
        <div class="primary-nav-right">
          <div class="mobile-navigation none">
            <script>
              let menu = document.getElementById("menuToggle");
              let input = document.querySelector("#menuToggle > input");
              menu.addEventListener("focusout", input.removeAttribute("checked"));
            </script>
            <div id="menuToggle">
                <!-- invisible toggle with hamburger -->
                <input type="checkbox" onfocusout="this.checked = false;"/>
                <span></span>
                <span></span>
                <span></span>
                
                <!-- mobile nav menu -->
                <ul id="mobile-menu">
                  <li id="subsite-research"><a href="https://www.bu.edu/library/research">Research</a></li>
                  <li id="subsite-services"><a href="https://www.bu.edu/library/services">Services</a></li>
                  <li id="subsite-about"><a href="https://www.bu.edu/library/">About</a></li>
                  <li><hr /></li>
                  <li><a href="https://www.bu.edu/library/about">Library Locations</a></li>
                  <li><a href="https://askalibrarian.bu.edu/">Ask a Librarian</a></li>
                </ul>
              </div>
          </div>
          <div class="top-right">
            <ul class="menu-items">
              <li>
                <div class="dropdown menu-item">
                  <span>Library Locations	&or;</span>
                  <div class="dropdown-content">
                    <ul class="library-list no-bullet">
                      <li><a href="https://www.bu.edu/library/african-studies/">African Studies</a></li>
                      <li><a href="https://www.bu.edu/library/astronomy/">Astronomy</a></li>
                      <!-- <li><a href="https://www.bu.edu/disc/">Digital Collections</a></li> -->
                      <!-- <li><a href="http://archives.bu.edu/">HGARC</a></li> -->
                      <li><a href="https://www.bu.edu/library/mugar-memorial/">Mugar</a></li>
                      <li><a href="https://www.bu.edu/library/music/">Music</a></li>
                      <!-- <li><a href="https://open.bu.edu/">OpenBU</a></li> -->
                      <li><a href="https://www.bu.edu/library/management/">Management</a></li>
                      <li><a href="https://www.bu.edu/library/pickering-educational/">Education</a></li>
                      <li><a href="https://www.bu.edu/library/sel/">Sci &amp; Eng</a></li>
                      <li><a href="https://www.bu.edu/library/stone-science/">Stone</a></li>
                      <li><a href="https://www.bu.edu/library/about/additional-libraries/">Other Libraries</a></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a class="menu-item inline" href="https://askalibrarian.bu.edu/">
                  <span style="vertical-align: super; padding-right: 10px;">Ask a Librarian</span><i class="material-icons inline">question_answer</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</body>`;