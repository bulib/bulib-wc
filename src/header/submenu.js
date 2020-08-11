import {LitElement, html, css} from 'lit-element/lit-element';
    
    const items_dictionary = {
      "find-and-borrow": html`
        <ul class="submenu-items flexnw">
          <li>
            <ul class="no-bullet" tabindex="0">
              <span>FIND</span>
              <li><a href="https://www.bu.edu/library/search">Search</a></li>
              <li><a href="https://library.bu.edu/az.php">Databases A-Z</a></li>
              <li><a href="/library/services/reserves/">Course Materials</a></li>
              <li><a href="https://buprimo.hosted.exlibrisgroup.com/primo-explore/search?vid=journals&lang=en_US">eJournals</a></li>
            </ul>
          </li>
          <li>
            <ul class="no-bullet" tabindex="0">
              <span>BORROW</span>
              <li><a href="/library/services/borrowing/">Borrowing</a></li>
              <li><a href="https://www.bu.edu/library/services/bu-libraries-2-go/">BU Libraries 2 Go</a></li>
              <li><a href="/library/services/ill/">Interlibrary Loan</a></li>
              <li><a href="https://www.bu.edu/library/account/">My Library Accounts</a></li>
              <li><a href="https://bu.on.worldcat.org/discovery">WorldCat Discovery</a></li>
            </ul>
          </li>
        </ul>
      `,
      "research-and-learn": html`
        <ul class="submenu-items flexnw no-bullet">
          <li>
            <ul class="no-bullet no-bullet" tabindex="0">
              <span>SERVICES</span>
              <li><a href="/library/services/scanning-delivery-services/">Scanning &amp; Digital Delivery</a></li>
              <li><a href="/library/services/reserves/">Course Reserves</a></li>
              <li><a href="https://www.bu.edu/disc/">Digital Scholarship</a></li>
              <li><a href="https://www.bu.edu/data/">Data Services</a></li>
            </ul>
          </li>
          <li>
            <ul class="no-bullet"  tabindex="0">
              <span>GUIDES</span>
              <li><a href="https://library.bu.edu/guides/">Research Guides</a></li>
              <li><a href="/library/research/guides/course-guides/">Course Guides</a></li>
              <li><a href="/library/help/how-to/">How-To Guides</a></li>
              <li><a href="/library/help/using-the-libraries-online/">Using the Libraries Online</a></li>
              <li><a href="https://library.bu.edu/create_bibliographies">Creating Bibliographies</a></li>
            </ul>
          </li>
          <li>
            <ul class="no-bullet" tabindex="0">
              <span>SUPPORT</span>
              <li><a href="https://askalibrarian.bu.edu/">Ask a Librarian</a></li>
              <li><a href="/library/services/reference/appointments/">Make an Appointment</a></li>
              <li><a href="/library/services/for-faculty/">For Faculty</a></li>
              <li><a href="/library/services/alumni/">For Alumni</a></li>
              <li><a href="/library/services/for-graduate-students/">For Graduate Students</a></li>
            </ul>
          </li>
        </ul>
      `,
      "about-us": html`
        <ul class="submenu-items flexnw">
          <li>
            <ul class="no-bullet" tabindex="0">
              <span>SPACES</span>
              <li><a href="/library/about/hours/">Library &amp; Service Hours</a></li>
              <li><a href="/library/help/visiting-the-libraries/">Visiting the Libraries</a></li>
              <li><a href="/library/about/study-spaces/">Study Rooms &amp; Spaces</a></li>
              <li><a href="/library/about/maps-floorplans/">Maps &amp; Floorplans</a></li>
              <li><a href="/library/services/computers-and-printing/">Computers, Printing, Scanning</a></li>
            </ul>
          </li>
          <li>
            <ul class="no-bullet" tabindex="0">
              <span>INFO</span>
              <li><a href="/library/about">About BU Libraries</a></li>
              <li><a href="/library/about/news/">News &amp; Updates</a></li>
              <li><a href="/library/about/who-we-are/staff-directory/">Staff Directory A-Z</a></li>
              <li><a href="/library/about/code-of-conduct/">Code of Conduct</a></li>
            </ul> 
          </li> 
        </ul>
      `,
      "locations": html`
        <ul class="submenu-items multi-column no-bullet"  tabindex="0">
          <li><a href="/library/african-studies/">African Studies Library</a></li>  
          <li><a href="/library/astronomy/">Astronomy Library</a></li>    
          <li><a href="http://archives.bu.edu/">Howard Gotlieb Archival Research Center</a></li>  
          <li><a href="/library/mugar-memorial/">Mugar Memorial Library</a></li>  
          <li><a href="/library/music/">Music Library</a></li> 
          <li><a href="/library/management/">Pardee Management Library</a></li> 
          <li><a href="/library/pickering-educational/">Pickering Educational Resources Library</a></li>  
          <li><a href="/library/sel/">Science &amp; Engineering Library</a></li>  
          <li><a href="/library/stone-science/">Stone Science Library</a></li>  
          <li><a href="/library/about" class="bold underline">ALL LOCATIONS</a></li>
        </ul>
      `
    }

    export default class BulibSubmenu extends LitElement {

      static get properties() {
        return { code: {type: String} };
      }

      static get styles(){
        return [
          css`
            .flexnw { display: flex; flex-wrap: none; }
            .multi-column { column-gap: 5%; column-count: 2; }
            .bold.underline { font-weight: bold; text-decoration: underline; }
            ul {
              list-style: none;
              padding-left: 0px;
            }
            ul:first-of-type { margin-right: var(--padding-medium, 10px); }
            ul:last-of-type { margin-left: var(--padding-medium, 10px); }
            a, span {
              color: var(--color-primary-text-light, white);
              text-decoration: none;
              font-weight: normal;
              white-space: nowrap;
            }
            a:hover { text-decoration: underline; }
            span {
              margin-bottom: var(--padding-small, 5px);
              font-weight: bold;
            }
            ul.submenu-items { 
              width: 100%;
              justify-content: space-around;
            }
            ul.submenu-items > li { 
              margin-left:  var(--padding-small, 5px);
              margin-right: var(--padding-small, 5px);
            }
            ul.submenu-items li, ul.submenu-items li span {
              font-size: 14px;
              margin-top: var(--padding-small, 5px);
              margin-bottom: var(--padding-small, 5px);
            }
          `
        ];
      }

      render() { return items_dictionary[this.code]; }
    }
    window.customElements.define("bulib-submenu", BulibSubmenu);