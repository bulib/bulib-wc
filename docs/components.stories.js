import { storiesOf } from '@open-wc/demoing-storybook';
import '../src/index';


// display the html code above the active display
const wrapInHtmlCode = (html_example) => { 
  return `<hr /><code style="white-space: pre-wrap; font-size: small;">
    ${html_example.replace(/</g,"&lt;").replace(/>/g,"&gt;")}
  </code><hr /><br />${html_example}`; 
}


const wc_card_demo = (small) => `
  <h2><code>bulib-card${small? " .small" : ""}</code></h2>
  <div class="deck">
    <bulib-card ${small? "small " : ""}title="Email" icon="email" link="https://askalibrarian.bu.edu/form.php?quid=511" debug
      description="Email us your research questions and we’ll respond within 24 hours."></bulib-card>
    <bulib-card ${small? "small " : ""}title="Chat" icon="question_answer" action="console.log('chat says hi')" debug
      description="Talk online to a research librarian on weekdays and Sundays"></bulib-card>
    <bulib-card ${small? "small " : ""}title="Call" icon="phone" link="tel:6173532700" debug
      description="Call us at 617-353-2700 during our open hours"></bulib-card>
  </div>
`;

storiesOf('web-components', module)
  // .addDecorator(withKnobs)
  //.add('bulib-search', () => withClassPropertiesKnobs(BULibSearch))
  .add('bulib-card',    () => wrapInHtmlCode(wc_card_demo(false)+wc_card_demo(true)), {notes: wrapInHtmlCode(wc_card_demo(false))})
  .add('bulib-color',   () => wrapInHtmlCode(color_demo))
  .add('bulib-feedback',() => wrapInHtmlCode(feedback_demo))
  .add('bulib-hours',   () => wrapInHtmlCode(hours_demo))
  .add('bulib-locoso',  () => wrapInHtmlCode(locoso_demo))
  .add('bulib-search',  () => wrapInHtmlCode(search_demo))
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

const color_demo = `
  <h2><code>bulib-color</code></h2>

  <h3><code>&lt;bulib-color var="--color-primary-background"&gt;</code></h3>
  <bulib-color var="--color-secondary-background-dark"></bulib-color>

  <br /><hr />

  <h3><code>&lt;bulib-color val="red"&gt;</code></h3>
  <bulib-color val="red" white></bulib-color>

  <br /><hr />
`;
