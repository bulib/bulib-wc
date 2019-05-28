// import '../dist/bundle';
import '../src/index';
import { storiesOf, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import {ensemble_demo, search_demo, hours_demo, locoso_demo, footer_demo} from './demo_html';

storiesOf('bulib-wc', module)
  .addDecorator(withKnobs)
  .add('ensemble',     () => ensemble_demo)
  .add('bulib-search', () => search_demo)
  .add('bulib-hours',  () => hours_demo)
  .add('bulib-locoso', () => locoso_demo)
  .add('bulib-footer', () => footer_demo)
;
