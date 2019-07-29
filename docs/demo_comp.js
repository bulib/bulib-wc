export const ensemble_demo = `
  <div id="main-content">
    <h2><code>bulib-hours</code></h2>
    <bulib-hours></bulib-hours>
    <hr />

    <h2><code>bulib-search</code></h2>
    <bulib-search></bulib-search>
    
    <h2><code>bulib-locoso</code></h2>
    <bulib-locoso></bulib-locoso>
    <hr />
  </div>

  <br /><hr /><br />

  <bulib-footer></bulib-footer>
`;

export const header_demo = `
<head>
<meta content="width=device-width, initial-scale=1" name="viewport" />
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/bulib/bulib-wc@latest/assets/css/common.css">
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/bulib/bulib-wc@header-v0.11.4/src/header/header.min.css">

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
          <li id="subsite-research"><a href="https://bu.edu/library/research">Research</a></li>
          <li id="subsite-services"><a href="https://bu.edu/library/services">Services</a></li>
          <li id="subsite-about"><a href="https://bu.edu/library/">About</a></li>
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
</body>
`;