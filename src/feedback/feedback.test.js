import { html, fixture, expect } from '@open-wc/testing';

import './bulib-feedback';

describe('bulib-feedback', () => {
  it('to effectively load as a web component', async () => {
    const el = await fixture(html`<bulib-feedback code="feeback-test"></bulib-feedback>`);
    expect(el.innerHTML).not.to.be.undefined;
    expect(el.innerHTML).to.include("helpful");
  });
});