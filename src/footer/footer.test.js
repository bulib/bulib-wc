import { html, fixture, expect } from '@open-wc/testing';

import './bulib-footer';

describe('bulib-footer', () => {
  it("renders effectively as a web component", async () => {
    const el = await fixture(html`<bulib-footer></bulib-footer>`);
    expect(el.renderRoot.innerHTML).not.to.be.undefined;
    expect(el).lightDom.to.equalSnapshot();
  });

  it("includes copyright, privacy information, and a link to the BU Home page", async () => {
    // as specified in the 'BU website policy' [https://www.bu.edu/policies/website-policy/]
    const el = await fixture(html`<bulib-footer></bulib-footer>`);
    expect(el.renderRoot.innerHTML).to.include("Copyright");
    expect(el.renderRoot.innerHTML).to.include("Privacy Statement");
    expect(el.renderRoot.innerHTML).to.include("BU Home");
  });

  it("contains 'bulib-locoso'", async () => {
    const el = await fixture(html`<bulib-footer></bulib-footer>`);
    expect(el.renderRoot.innerHTML).to.include("bulib-locoso");
    expect(el).lightDom.to.equalSnapshot();
  });

  it("sets 'bulib-locoso' library value from 'curr_url'", async () => {
    const el = await fixture(html`<bulib-footer curr_url="http://bu.libcal.com/booking/Pickering-quietstudy"></bulib-footer>`);
    expect(el.renderRoot.innerHTML).to.include("pickering");
    expect(el).lightDom.to.equalSnapshot();
  });

  it("adjusts the sitemap to `askalibrarian' based on 'curr_url'", async () => {
    const el = await fixture(html`<bulib-footer curr_url="https://askalibrarian.bu.edu"></bulib-footer>`);
    expect(el.renderRoot.innerHTML).to.include("Ask A Librarian");
    expect(el).lightDom.to.equalSnapshot();
  });

});