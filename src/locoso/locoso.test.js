import { html, fixture, expect } from '@open-wc/testing';

import './bulib-locoso';

describe('bulib-locoso', () => {
  it('to effectively load as a web component', async () => {
    const el = await fixture(html`<bulib-locoso></bulib-locoso>`);
    expect(el.renderRoot.innerHTML).not.to.be.undefined;
    expect(el.renderRoot.innerHTML).to.include("Contact Us")
  });
});