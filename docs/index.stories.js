import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

// import {BULibSearch, LibHours, Locoso, BULibFooter} from '../src/index';

// bulib-search
import '../src/search/bulib-search';
import BULibSearch from '../src/search/search';

// bulib-hours
import '../src/libhours/bulib-hours';
import LibHours from '../src/libhours/libhours';

// bulib-libsel
import '../src/libsel/bulib-libsel';

// bulib-locoso
import '../src/locoso/bulib-locoso';
import Locoso from '../src/locoso/locoso';

// bulib-footer
import '../src/footer/bulib-footer';
import BULibFooter from '../src/footer/footer';

const main_html  = html`
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

storiesOf('bulib-wc', module)
  .addDecorator(withKnobs)
  .add('ensemble', () => main_html)
  // .add('bulib-dropdown', () => withClassPropertiesKnobs(BULibDropdown))
  .add('bulib-search', () => withClassPropertiesKnobs(BULibSearch))
  .add('bulib-hours',  () => withClassPropertiesKnobs(LibHours))
  .add('bulib-locoso', () => withClassPropertiesKnobs(Locoso))
  .add('bulib-footer', () => withClassPropertiesKnobs(BULibFooter))
  // .add('bulib-header', () => withClassPropertiesKnobs(BULibHeader))
;

