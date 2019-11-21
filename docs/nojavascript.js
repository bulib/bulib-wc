export const card_demo = (small) => `
  <h2>${small? 'small card (<code>.card.small</code>)': 'normal card (<code>.card</code>)'}</h2>
  <div class="deck">
    ${small? '<div class="card small">' : '<div class="card">'}
      <i class="material-icons" onclick="window.open('/form.php?quid=511','_self')">email</i>
      <div class="inline">
        <h3><a href="/form.php?quid=511">Email</a></h3>
        <p>Email us your research questions and we&rsquo;ll respond within 24 hours.</p>
      </div>
    </div>

    ${small? '<div class="card small">' : '<div class="card">'}
      <i class="material-icons" onclick="document.querySelector('button.s-lch-widget-float-btn').click();">question_answer</i>  
      <div class="inline">
        <h3><a onclick="document.querySelector('button.s-lch-widget-float-btn').click();" href="javascript:void(0)">Chat</a></h3>
        <p>Talk online to a research librarian on weekdays and Sundays</p>
      </div>
    </div>

    ${small? '<div class="card small">' : '<div class="card">'}
      <i class="material-icons" onclick="window.open('tel:6173532700','_self')">phone</i>
      <div class="inline">
        <h3><a href="tel:6173532700">Call</a></h3>
        <p>Call us at 617-353-2700 during our open hours</p>
      </div>
    </div>

    ${small? '<div class="card small">' : '<div class="card">'}
      <i class="material-icons">smartphone</i> 
      <div class="inline">
        <h3><a href="sms:6174312427">Text</a></h3>
        <p>Send us your questions at 617-431-2427.</p>
      </div>
    </div>

    ${small? '<div class="card small">' : '<div class="card">'}
      <i class="material-icons">people</i>
      <div class="inline">
        <h3><a href="https://www.bu.edu/library/services/reference/appointments/">Meet</a></h3>
        <p>Make an appointment with a subject specialist librarian</p>
      </div>
    </div>

    ${small? '<div class="card small">' : '<div class="card">'}
      <i class="material-icons">local_library</i>
      <div class="inline">
        <h3><a href="https://www.bu.edu/library/about/">Visit</a></h3>
        <p>Come talk to us in person at any of our locations</p>
      </div>
    </div>
  </div>`;

export const cta_demo = `
  <div class="ctas">
    <div class="cta" onclick="window.open('/search/?g=716&amp;topics=Borrowing','_self')">
      <h3><a href="/search/?g=716&amp;topics=Borrowing">Borrowing Items</a></h3>
    </div>

    <div class="cta" onclick="window.open('/search/?t=0&amp;g=716&amp;topics=Alumni&amp;adv=1','_self')">
      <h3><a href="/search/?t=0&amp;g=716&amp;topics=Alumni&amp;adv=1">Alumni</a></h3>
    </div>

    <div class="cta" onclick="window.open('/search/?t=0&amp;g=716&amp;topics=Where%20Is%20It%3F&amp;adv=1','_self')">
      <h3><a href="/search/?t=0&amp;g=716&amp;topics=Where%20Is%20It%3F&amp;adv=1">Where is it?</a></h3>
    </div>

    <div class="cta" onclick="window.open('/search/?g=716&amp;topics=Troubleshooting','_self')">
      <h3><a href="/search/?g=716&amp;topics=Troubleshooting">Troubleshooting</a></h3>
    </div>

    <div class="cta" onclick="window.open('/search/?t=0&amp;g=716&amp;topics=Newspapers&amp;adv=1','_self')">
      <h3><a href="/search/?t=0&amp;g=716&amp;topics=Newspapers&amp;adv=1">Newspapers</a></h3>
    </div>

    <div class="cta" onclick="window.open('/search/?t=0&amp;g=716&amp;topics=Journals&amp;adv=1','_self')">
      <h3><a href="/search/?t=0&amp;g=716&amp;topics=Journals&amp;adv=1">Journals</a></h3>
    </div>

    <div class="cta" onclick="window.open('/businessFAQs/','_self')">
      <h3><a href="/businessFAQs/">Pardee / Management</a></h3>
    </div>

    <div class="cta" onclick="window.open('/search/?t=0&adv=1&topics=Services','_self')">
      <h3><a href="/search/?t=0&adv=1&topics=Services">Services</a></h3>
    </div>

    <div class="cta" onclick="window.open('/search/','_self')">
      <h3><a href="/search">All Topics</a></h3>
    </div>
  </div>`;

export const tabs_demo = `
  <div class="tabs">
    <button class="active" onclick="openTab(event,'html')">HTML</button>
    <button onclick="openTab(event,'css')">CSS</button>
    <button onclick="openTab(event,'js')">JS</button>
    <button onclick="openTab(event,'php')">PHP</button>
  </div>

  <div id="html" class="tab active">
    <h3>HyperText Markup Language</h3>
    <p>HTML determines website content and structure.</p>
  </div>

  <div id="css" class="tab">
    <h3>Cascading Style Sheet</h3>
    <p>CSS adds to the style and presentation of your website.</p> 
  </div>

  <div id="js" class="tab">
    <h3>JavaScript</h3>
    <p>JS is client-side script that adds functionality to your website.</p>
  </div>

  <div id="php" class="tab">
    <h3>Hypertext Preprocessor</h3>
    <p>PHP is one of multiple backend languages, meaning it is for server-side scripting.</p>
  </div>
  
  <script type="text/javascript">
    function openTab(e, tabId) {
      var links = document.querySelectorAll("div.tabs button");
      var content = document.getElementsByClassName("tab");
      for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
      }
      for (i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace("active", "");
      }
      document.getElementById(tabId).style.display = "block";
      e.currentTarget.className += " active";
    }
  </script>`; 