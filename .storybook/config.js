import { configure } from '@storybook/polymer';
import '@storybook/addon-console';

const req = require.context('../docs', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
