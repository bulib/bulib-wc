import { html, fixture, expect } from '@open-wc/testing';

import './bulib-search';

describe('bulib-search', () => {
  it("renders effectively as a web component", async () => {
    const el = await fixture(html`<bulib-search></bulib-search>`);
    expect(el.renderRoot.innerHTML).not.to.be.undefined;
    expect(el).lightDom.to.equalSnapshot();
  });
  
  it("defaults to the 'primo' search, with no other options when empty", async () => {
    const el = await fixture(html`<bulib-search></bulib-search>`);
    expect(el.renderRoot.innerHTML).to.include(`placeholder="Search library resources"`);
    expect(el.renderRoot.innerHTML).not.to.include(`type="radio"`);
  });

  it("effectively updates the search option when a single 'str_options' item specified", async () => {
    const el = await fixture(html`<bulib-search str_options="guides"></bulib-search>`);
    expect(el.renderRoot.innerHTML).to.include(`placeholder="Search research guides"`);
    expect(el).lightDom.to.equalSnapshot();
  });

  it("displays all options when multiple 'str_options' are specified", async () => {
    const el = await fixture(html`<bulib-search str_options="primo wp guides"></bulib-search>`);
    expect(el.renderRoot.innerHTML).to.include(`type="radio"`);
    expect(el).lightDom.to.equalSnapshot();
  });

  it("supports the specification of a particular 'str_selected' from the 'str_options'", async () => {
    const el = await fixture(html`<bulib-search str_options="primo wp guides" str_selected="wp"></bulib-search>`);
    expect(el.renderRoot.innerHTML).to.include(`placeholder="Search library info/services"`);
    expect(el).lightDom.to.equalSnapshot();
  });
});