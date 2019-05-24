export const ensemble_demo = `
  <div id="main-content">
    <h2><code>bulib-hours</code></h2>
    <bulib-hours></bulib-hours>
    <hr />
    
    <h2><code>bulib-locoso</code></h2>
    <bulib-locoso></bulib-locoso>
    <hr />
    
    <h2><code>bulib-search</code></h2>
    <bulib-search></bulib-search>
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


export const footer_demo = `
  <bulib-footer debug></bulib-footer>
      
  <br /><hr /><br />

  <bulib-select 
    sel_title="Select Simulated URL" curr_sel="bu.edu/library/mugar-memorial" 
    opt_code="sample_urls" tag_name="bulib-footer" attr_name="curr_url"
  ></bulib-select>
`;