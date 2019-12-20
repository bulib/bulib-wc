import { html, fixture, expect } from '@open-wc/testing';

import './bulib-locoso';

describe('bulib-locoso', () => {
  it('to effectively load as a web component', async () => {
    const el = await fixture(html`<bulib-locoso></bulib-locoso>`);
    expect(el.renderRoot.innerHTML).not.to.be.undefined;
    expect(el.renderRoot.innerHTML).to.include("Contact Us")
  });

  it('not to contain \'bulib-hours\' by default', async () => {
    const el = await fixture(html`<bulib-locoso></bulib-locoso>`);
    expect(el.renderRoot.innerHTML).not.to.include("bulib-hours");
  });

  it('to contain \'bulib-hours\' when library is specified', async () => {
    const el = await fixture(html`<bulib-locoso library="sel"></bulib-locoso>`);
    expect(el.renderRoot.innerHTML).to.include("bulib-hours");
  });
});