import { html, fixture, expect } from '@open-wc/testing';

import './bulib-hours';

describe('bulib-hours', () => {
  it('to effectively load as a web component', async () => {
    const el = await fixture(html`<bulib-hours></bulib-hours>`);
    expect(el.innerHTML).not.to.be.undefined;
    expect(el.innerHTML).to.include("Library");
  });

  it('to default to Mugar if no library is specified', async () => {
    const el = await fixture(html`<bulib-hours></bulib-hours>`);
    expect(el.innerHTML).to.include("Mugar");
  });

  it('to effectively react to a specified \'library\'', async () => {
    const el = await fixture(html`<bulib-hours library="sel"></bulib-hours>`);
    expect(el.innerHTML).to.include("SciEng");
  });

  it('setting \'long\' attribute shows location hours link', async () => {
    const el = await fixture(html`<bulib-hours long></bulib-hours>`);
    expect(el.innerHTML).to.include("see all location hours");
  });  
});