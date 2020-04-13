import { html, fixture, expect } from '@open-wc/testing';

import './bulib-hours';

describe('bulib-hours', () => {
  it("renders effectively as a web component", async () => {
    const el = await fixture(html`<bulib-hours></bulib-hours>`);
    expect(el.innerHTML).not.to.be.undefined;
    expect(el.innerHTML).to.include("Library");
  });

  it("defaults to the 'Mugar' library if no 'library' is specified", async () => {
    const el = await fixture(html`<bulib-hours></bulib-hours>`);
    expect(el.innerHTML).to.include("Mugar");
  });

  it("effectively reacts to a specified 'library'", async () => {
    const el = await fixture(html`<bulib-hours library="sel"></bulib-hours>`);
    expect(el.innerHTML).to.include("SciEng");
  });

  it("does NOT to show the library name or icon when 'short' is added", async () => {
    const el = await fixture(html`<bulib-hours short></bulib-hours>`);
    expect(el.innerHTML).not.to.include("<strong>");
    expect(el.innerHTML).not.to.include('<img alt="clock-icon"');
  });

  it("shows the 'location hours' link when the 'long' attribute is added", async () => {
    const el = await fixture(html`<bulib-hours long></bulib-hours>`);
    expect(el.innerHTML).to.include("see all location hours");
  });  
});