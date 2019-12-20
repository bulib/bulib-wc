import { html, fixture, expect } from '@open-wc/testing';

import './bulib-footer';

describe('bulib-footer', () => {
  it('to effectively load as a web component', async () => {
    const el = await fixture(html`<bulib-footer></bulib-footer>`);
    expect(el.renderRoot.innerHTML).not.to.be.undefined;
    expect(el.renderRoot.innerHTML).to.include("Copyright")
  });
});