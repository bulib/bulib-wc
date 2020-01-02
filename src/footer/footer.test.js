import { html, fixture, expect } from '@open-wc/testing';

import './bulib-footer';

describe('bulib-footer', () => {
  it('to effectively load as a web component', async () => {
    const el = await fixture(html`<bulib-footer></bulib-footer>`);
    expect(el.renderRoot.innerHTML).not.to.be.undefined;
    expect(el.renderRoot.innerHTML).to.include("Copyright")
  });

  it('to contain \'bulib-locoso\'', async () => {
    const el = await fixture(html`<bulib-footer></bulib-footer>`);
    expect(el.renderRoot.innerHTML).to.include("bulib-locoso");
  });

  it('to set \'bulib-locoso\' library value from \'curr_url\'', async () => {
    const el = await fixture(html`<bulib-footer curr_url="http://bu.libcal.com/booking/Pickering-quietstudy"></bulib-footer>`);
    expect(el.renderRoot.innerHTML).to.include("pickering");
  });

  it('to adjust sitemap to \`askalibrarian\' based on \'curr_url\'', async () => {
    const el = await fixture(html`<bulib-footer curr_url="https://askalibrarian.bu.edu"></bulib-footer>`);
    expect(el.renderRoot.innerHTML).to.include("Ask A Librarian");
  });
});