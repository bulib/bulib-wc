import '../src/index';
import { storiesOf, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import {ensemble_demo, search_demo, hours_demo, locoso_demo, header_demo, footer_demo, bulib_card_demo, card_demo, cta_demo} from './demo_html';

storiesOf('composites', module)
  .addDecorator(withKnobs)
  .add('ensemble',     () => ensemble_demo)
  .add('bulib-header', () => header_demo)
  .add('bulib-footer', () => footer_demo)
;

storiesOf('components', module)
  .addDecorator(withKnobs)
//.add('bulib-search', () => withClassPropertiesKnobs(BULibSearch))
  .add('bulib-card',   () => bulib_card_demo)
  .add('bulib-search', () => search_demo)
  .add('bulib-hours',  () => hours_demo)
  .add('bulib-locoso', () => locoso_demo)
;

storiesOf('patterns', module)
  .add('card', () => card_demo)
  .add('call-to-action', () => cta_demo)
;
