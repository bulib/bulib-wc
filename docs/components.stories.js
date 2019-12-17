import { storiesOf } from '@open-wc/demoing-storybook';
import '../src/index';


// display the html code above the active display
export const wrapInHtmlCode = (html_example) => { 
  return `<hr /><code style="white-space: pre-wrap; font-size: small;">
    ${html_example.replace(/</g,"&lt;").replace(/>/g,"&gt;")}
  </code><hr /><br />${html_example}`; 
}


storiesOf('web-components', module)
  // .addDecorator(withKnobs)
  //.add('bulib-search', () => withClassPropertiesKnobs(BULibSearch))
  .add('bulib-feedback',() => wrapInHtmlCode(feedback_demo))
  .add('bulib-hours',   () => wrapInHtmlCode(hours_demo))
  .add('bulib-locoso',  () => wrapInHtmlCode(locoso_demo))
;

const search_demo = `
  <label>Empty (active)</label>
  <bulib-search id="empty-search" debug></bulib-search>
  <br /><br />

  <label>Ask a Librarian (with fallback)</label>
  <bulib-search id="askalib" str_options="help primo" str_selected="help">
    <form action="/search" method="get"><input name="q" type="text" /><button type="submit">Search</button></form>
  </bulib-search>
  <br /><br />

  <label>Options, no Default</label>
  <bulib-search id="options-no-default" str_options="primo industries wp help" debug prevent_action></bulib-search>
  <br /><br />

  <label>Options, with Default</label>
  <bulib-search id="options-with-default" str_options="primo industries wp" 
                str_selected="industries" debug prevent_action></bulib-search>

  <br /><br />
  <bulib-select
    sel_title="Select Search Source" curr_sel="primo" opt_code="search_options"
    tag_name="bulib-search" attr_name="str_selected" debug prevent_action>
  </bulib-select>
`;

const hours_demo = `
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

const locoso_demo = `
  <bulib-locoso library="astronomy" debug></bulib-locoso>

  <br /><hr /><br />

  <bulib-select 
    sel_title="Select Library" curr_sel="astronomy" opt_code="libraries"
    tag_name="bulib-locoso" attr_name="library">
  </bulib-select>
`;

const feedback_demo = `
  <bulib-feedback code="bulibwc-demo" debug prevent_action></bulib-feedback>
`;

