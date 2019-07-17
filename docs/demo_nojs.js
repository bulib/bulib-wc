export const popup_demo = `
  <style>
    .hamburger { 
      font-size: 3em; 
      text-decoration: none; 
    }
    /* from paul (@peiche) via codepen [https://codepen.io/peiche/pen/vhqym] */
    .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.5);
      transition: opacity 200ms;
      visibility: hidden;
      opacity: 0; }
      .overlay .cancel {
        position: absolute;
        width: 100%;
        height: 100%;
        cursor: default; }
      .overlay:target {
        visibility: visible;
        opacity: 1; }
    
    .popup {
      margin: 75px auto;
      padding: 20px;
      background: #fff;
      border: 1px solid #666;
      width: 300px;
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
      position: relative; }
      .popup h2 {
        margin-top: 0;
        color: #666;
        font-family: "Trebuchet MS", Tahoma, Arial, sans-serif; }
      .popup .close {
        position: absolute;
        width: 20px;
        height: 20px;
        top: 20px;
        right: 20px;
        opacity: 0.8;
        transition: all 200ms;
        font-size: 24px;
        font-weight: bold;
        text-decoration: none;
        color: #666; }
        .popup .close:hover {
          opacity: 1; }
      .popup .content {
        max-height: 400px;
        overflow: auto; }
      .popup p {
        margin: 0 0 1em; }
        .popup p:last-child {
          margin: 0; }  
  </style>
  <h1>Popup/Modal Windows without JavaScript</h1>
  <div id="wrapper">
    <p><a class="button" href="#popup1">&equiv;</a></p>
  </div>

  <div id="popup1" class="overlay">
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
  <style>
    .deck, .ctas {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
    .card, .cta {
      flex: 2 3 300px; 
      display: flex;
      justify-content: space-between;
      max-width: 325px;
      /* border: 1px gainsboro solid; */
    }
    .card i { 
      font-size: 4em;
      margin: 0.2em;
      text-align: center;
      flex: 1;
    }
    .card i:hover { cursor: pointer; }
  </style>
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
    <link rel="stylesheet" type="text/css" href="../assets/css/cta.css">
    <style>
      .ctas {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 15px;
        grid-template-rows: repeat(auto, 200px);
      }
      div.cta { 
        text-align: center;
        background-color: verylightgray;
        border: 1px solid darkgrey;
        min-width: 200px;
      }
      div.cta:hover { 
        background-color: gainsboro; 
        cursor: pointer;
      }
    </style>
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