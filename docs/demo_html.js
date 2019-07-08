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
  <bulib-hours debug></bulib-hours>
    
  <h3>&lt;bulib-hours <code>verbose</code>&gt;</h3>
  <bulib-hours verbose debug></bulib-hours>
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

export const card_demo = `
<link rel="stylesheet" type="text/css" href="/assets/css/card.css">
<div class="deck">
  <div class="card"><a href=""> </a>
    <h3>Borrowing Items</h3>
    <p><a href="/search?topics=Books">see all entries</a></p>
  </div>

  <div class="card">
    <h3>Pardee Business Library</h3>
    <p><a href="/businessFAQs">see all entries</a></p>
  </div>

  <div class="card">
    <h3>BU Libraries Search</h3>
    <p><a href="/search?topics=BU%20Libraries%20Search">see all entries</a></p>
  </div>

  <div class="card">
    <h3>Dissertations and Theses</h3>
    <p><a href="/search?topics=Dissertations%20%26%20Theses">see all entries</a></p>
  </div>

  <div class="card">
    <h3>Open Access</h3>
    <p><a href="/search?topics=Open%20Access%20and%20OpenBU">see all entries</a></p>
  </div>

  <div class="card">
    <h3>Open BU and Publishing</h3>
    <p><a href="/search?topics=OpenBU">see all entries</a></p>
  </div>

  <div class="card">
    <h3>Wayfinding (Where is...?)</h3>
    <p><a href="/search?topics=Where%20Is%20It%3F">see all entries</a></p>
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