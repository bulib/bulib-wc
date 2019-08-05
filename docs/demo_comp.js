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
  <div class="header-wrapper">
    <nav>
      <div class="primary-navbar">
        <div class="primary-nav-left">
          <a title="BU Libraries Homepage" href="https://www.bu.edu/library">
            <img id="bu-logo" src="https://cdn.jsdelivr.net/npm/bulib-wc@latest/assets/icons/bulib-logo.png">
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
                <div class="dropdown">
                  <a class="menu-item inline" href="https://www.bu.edu/library/about">
                    <span class="labeled-icon">Library Locations</span><i class="material-icons inline">arrow_drop_down</i>
                  </a>
                  <div class="dropdown-content">
                    <ul class="library-list no-bullet">
                      <li><a href="https://www.bu.edu/library/african-studies/">African Studies Library</a></li>
                      <li><a href="https://www.bu.edu/library/astronomy/">Astronomy Library</a></li>
                      <!-- <li><a href="https://www.bu.edu/disc/">Digital Collections</a></li> -->
                      <!-- <li><a href="http://archives.bu.edu/">HGARC</a></li> -->
                      <li><a href="https://www.bu.edu/library/mugar-memorial/">Mugar Memorial Library</a></li>
                      <li><a href="https://www.bu.edu/library/music/">Music Library</a></li>
                      <!-- <li><a href="https://open.bu.edu/">OpenBU</a></li> -->
                      <li><a href="https://www.bu.edu/library/management/">Pardee Management Library</a></li>
                      <li><a href="https://www.bu.edu/library/pickering-educational/">Pickering Educational Resources Library</a></li>
                      <li><a href="https://www.bu.edu/library/sel/">Science &amp; Engineering Library</a></li>
                      <li><a href="https://www.bu.edu/library/stone-science/">Stone Library</a></li>
                      <li><a href="https://www.bu.edu/library/about/additional-libraries/">Other Libraries</a></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a class="menu-item inline" href="https://askalibrarian.bu.edu/">
                  <span class="labeled-icon">Ask a Librarian</span><i class="material-icons inline">question_answer</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>`;