import { html, fixture, expect } from '@open-wc/testing';

import './bulib-hours';

describe('bulib-hours', () => {
  it('to effectively load as a web component', async () => {
    const el = await fixture(html`<bulib-hours></bulib-hours>`);
    expect(el.innerHTML).not.to.be.undefined;
    expect(el.innerHTML).to.include("Library");
  });
});