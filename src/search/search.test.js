import { html, fixture, expect } from '@open-wc/testing';

import './bulib-search';

describe('bulib-search', () => {
  it('to effectively load as a web component (renderRoot.innerHTML)', async () => {
    const el = await fixture(html`<bulib-search></bulib-search>`);
    expect(el.renderRoot.innerHTML).not.to.be.undefined;
  });
  
});