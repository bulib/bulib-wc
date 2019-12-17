import { storiesOf } from '@open-wc/demoing-storybook';
import '../src/index';



storiesOf('web-components', module)
  // .addDecorator(withKnobs)
  //.add('bulib-search', () => withClassPropertiesKnobs(BULibSearch))
  .add('bulib-locoso',  () => wrapInHtmlCode(locoso_demo))
;

const locoso_demo = `
  <bulib-locoso library="astronomy" debug></bulib-locoso>

  <br /><hr /><br />

  <bulib-select 
    sel_title="Select Library" curr_sel="astronomy" opt_code="libraries"
    tag_name="bulib-locoso" attr_name="library">
  </bulib-select>
`;