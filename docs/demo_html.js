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

export const search_demo = `
  <label>Empty (active)</label>
  <bulib-search debug></bulib-search>
  <br /><br />

  <label>Empty (inactive)</label>
  <bulib-search debug prevent_action></bulib-search>
  <br /><br />

  <label>One Option, no Default</label>
  <bulib-search str_options="industries"></bulib-search>
  <br /><br />

  <label>Options, no Default</label>
  <bulib-search id="options-no-default" str_options="primo industries wp help" debug prevent_action></bulib-search>
  <br /><br />

  <label>Options, with Default</label>
  <bulib-search name="options, with default" str_options="primo industries wp" 
                str_selected="industries" debug prevent_action></bulib-search>
`;

export const hours_demo = `
<h3>&lt;bulib-hours&gt;</h3>
<bulib-hours></bulib-hours>

<h3>&lt;bulib-hours <code>short</code>&gt;</h3>
<bulib-hours short debug></bulib-hours>

<h3>&lt;bulib-hours <code>long</code>&gt;</h3>
<bulib-hours long debug></bulib-hours>

<br /><hr /><br />

<bulib-select
  sel_title="Select Library" opt_code="libraries"
  tag_name="bulib-hours" attr_name="library">
</bulib-select>
`;

export const locoso_demo = `
  <div>
    <bulib-locoso library="astronomy" debug></bulib-locoso>
  </div>

  <br /><hr /><br />

  <bulib-select 
    sel_title="Select Library" curr_sel="astronomy" opt_code="libraries"
    tag_name="bulib-locoso" attr_name="library">
  </bulib-select>
`;

export const header_demo = "<bulib-header></bulib-header>";


export const footer_demo = `
  <bulib-footer debug></bulib-footer>
      
  <br /><hr /><br />

  <bulib-select 
    sel_title="Select Simulated URL" curr_sel="bu.edu/library/mugar-memorial" 
    opt_code="sample_urls" tag_name="bulib-footer" attr_name="curr_url"
  ></bulib-select>
`;

export const bulib_card_demo = `
  <div class="deck">
    <bulib-card title="Email" icon="email" link="https://askalibrarian.bu.edu/form.php?quid=511" debug
      description="Email us your research questions and we’ll respond within 24 hours."></bulib-card>
    <bulib-card title="Chat" icon="question_answer" debug
      action="document.querySelector('button.s-lch-widget-float-btn').click();" 
      description="Talk online to a research librarian on weekdays and Sundays"></bulib-card>
  </div>
`;

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
<div class="ctas">
  <div class="cta">
    <a onclick="document.querySelector('button.s-lch-widget-float-btn').click();"> 
      <span><i class="material-icons">question_answer</i>&nbsp;Chat With Us!</span> 
    </a>
  </div>

  <div class="cta">
    <a href="tel:6173532700">
      <span><i class="material-icons">phone</i>&nbsp;Call 617-353-2700</span> 
    </a>
  </div>

  <div class="cta">
    <a href="mailto:ask@bu.edu">
    <span><i class="material-icons">email</i>&nbsp;Email ask@bu.edu</span>
    </a>
  </div>

  <div class="cta">
    <a href="sms:6174312427">
    <span><i class="material-icons">textsms</i>&nbsp;Text 617-431-2427</span>
    </a>
  </div>
</div>`;