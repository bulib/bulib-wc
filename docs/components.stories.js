import { storiesOf } from '@open-wc/demoing-storybook';
import '../src/index';



storiesOf('web-components', module)
  // .addDecorator(withKnobs)
  //.add('bulib-search', () => withClassPropertiesKnobs(BULibSearch))
  .add('bulib-hours',   () => wrapInHtmlCode(hours_demo))
  .add('bulib-locoso',  () => wrapInHtmlCode(locoso_demo))
;

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