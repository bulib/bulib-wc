export const search_demo = `
  <label>Empty (active)</label>
  <bulib-search debug></bulib-search>
  <br /><br />

  <label>Ask a Librarian</label>
  <bulib-search str_options="help primo"></bulib-search>
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

export const header_demo = `<bulib-header></bulib-header>`;

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