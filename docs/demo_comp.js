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