import { storiesOf, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

// import {BULibSearch, LibHours, Locoso, BULibFooter} from '../src/index';
import {ensemble_demo, search_demo, hours_demo} from './demo_html';

// utilities
import '../src/search/bulib-search';
import '../src/libhours/bulib-hours';

// bulib-locoso
import '../src/locoso/bulib-locoso';
import Locoso from '../src/locoso/locoso';

// bulib-footer
import '../src/footer/bulib-footer';
import BULibFooter from '../src/footer/footer';

storiesOf('bulib-wc', module)
  .addDecorator(withKnobs)
  .add('ensemble',     () => ensemble_demo)
  .add('bulib-search', () => search_demo)
  .add('bulib-hours',  () => hours_demo)
  .add('bulib-locoso', () => withClassPropertiesKnobs(Locoso))
  .add('bulib-footer', () => withClassPropertiesKnobs(BULibFooter))
;

