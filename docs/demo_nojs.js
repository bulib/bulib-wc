export const popup_demo = `
  <h1>Popup/Modal Windows without JavaScript</h1>
  <div id="wrapper">
    <p><a class="hamburger" href="#popup1">&equiv;</a></p>
  </div>

  <div id="popup1" class="overlay">
    <a class="cancel" href="#"></a>
    <div class="popup">
      <h2>Info box</h2>
      <a class="close" href="#">&times;</a>
      <div class="content">
        <p>This is done totally without JavaScript. Just HTML and CSS.</p>
      </div>
    </div>
  </div>

  <div id="popup2" class="overlay light">
    <a class="cancel" href="#"></a>
    <div class="popup">
      <h2>What the what?</h2>
      <div class="content">
        <p>Click outside the popup to close.</p>
      </div>
    </div>
  </div>`;

export const card_demo = `
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> <!-- @todo: replace with npm install -->
  <div class="deck">
    <div class="card">
      <i class="material-icons" onclick="window.open('/form.php?quid=511','_self')">email</i>
      <div class="inline">
        <h3><a href="/form.php?quid=511">Email</a></h3>
        <p>Email us your research questions and we&rsquo;ll respond within 24 hours.</p>
      </div>
    </div>

    <div class="card">
      <i class="material-icons" onclick="document.querySelector('button.s-lch-widget-float-btn').click();">question_answer</i>  
      <div class="inline">
        <h3><a onclick="document.querySelector('button.s-lch-widget-float-btn').click();" href="javascript:void(0)">Chat</a></h3>
        <p>Talk online to a research librarian on weekdays and Sundays</p>
      </div>
    </div>

    <div class="card">
      <i class="material-icons" onclick="window.open('tel:6173532700','_self')">phone</i>
      <div class="inline">
        <h3><a href="tel:6173532700">Call</a></h3>
        <p>Call us at 617-353-2700 during our open hours</p>
      </div>
    </div>

    <div class="card"><i class="material-icons">smartphone</i> 
      <div class="inline">
        <h3><a href="sms:6174312427">Text</a></h3>
        <p>Send us your questions at 617-431-2427.</p>
      </div>
    </div>

    <div class="card">
      <i class="material-icons">people</i>
      <div class="inline">
        <h3><a href="https://www.bu.edu/library/services/reference/appointments/">Meet</a></h3>
        <p>Make an appointment with a subject specialist librarian</p>
      </div>
    </div>

    <div class="card">
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

      <div class="cta" onclick="window.open('/search/?g=716&amp;topics=Troubleshooting','_self')">
        <h3><a href="/search/?g=716&amp;topics=Troubleshooting">Troubleshooting</a></h3>
      </div>

      <div class="cta" onclick="window.open('/search/?t=0&amp;g=716&amp;topics=Where%20Is%20It%3F&amp;adv=1','_self')">
        <h3><a href="/search/?t=0&amp;g=716&amp;topics=Where%20Is%20It%3F&amp;adv=1">Where is it?</a></h3>
      </div>

      <div class="cta" onclick="window.open('/businessFAQs/','_self')">
        <h3><a href="/businessFAQs/">Pardee/Business Library</a></h3>
      </div>

      <div class="cta" onclick="window.open('/search/?t=0&amp;g=716&amp;topics=Newspapers&amp;adv=1','_self')">
        <h3><a href="/search/?t=0&amp;g=716&amp;topics=Newspapers&amp;adv=1">Newspapers</a></h3>
      </div>

      <div class="cta" onclick="window.open('/search/?t=0&amp;g=716&amp;topics=Journals&amp;adv=1','_self')">
        <h3><a href="/search/?t=0&amp;g=716&amp;topics=Journals&amp;adv=1">Journals</a></h3>
      </div>

      <div class="cta" onclick="window.open('/search/?t=0&amp;g=716&amp;topics=Books&amp;adv=1','_self')">
        <h3><a href="/search/?t=0&amp;g=716&amp;topics=Journals&amp;adv=1">Books</a></h3>
      </div>

      <div class="cta" onclick="window.open('/search/','_self')">
        <h3><a href="/search">All Topics</a></h3>
      </div>
    </div>`;