import { html, fixture, expect, elementUpdated } from '@open-wc/testing';

import './bulib-feedback';

describe('bulib-feedback', () => {
  it("renders effectively as a web component", async () => {
    const el = await fixture(html`<bulib-feedback></bulib-feedback>`);
    expect(el.innerHTML).not.to.be.undefined;
    expect(el.innerHTML).to.include("helpful");
    expect(el).lightDom.to.equalSnapshot();
  });

  it("thanks the user when they answer the prompt", async () => {
    const el = await fixture(html`<bulib-feedback></bulib-feedback>`);
    el.getElementsByTagName("button")[0].click();
    await elementUpdated(el);
    expect(el.innerHTML).to.include("thanks");
  });
});