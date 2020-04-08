import { html, fixture, expect } from '@open-wc/testing';

import './bulib-color';

const bgColorOfBulibColorElement = (elem) => { return elem.renderRoot.querySelector("div > div:last-of-type").style.backgroundColor; }

describe('bulib-color', () => {

  it("renders effectively as a web component", async () => {
    const el = await fixture(html`<bulib-color></bulib-color>`)
    expect(el.renderRoot).not.to.undefined;
    expect(el.renderRoot.innerHTML).not.to.equal("");
    expect(el).lightDom.to.equalSnapshot();
  });

  it("defaults to 'lightblue' when a 'val' and 'var' are both unspecified", async () => {
    const el = await fixture(html`<bulib-color></bulib-color>`)
    let actualBgColor = bgColorOfBulibColorElement(el);
    expect(actualBgColor).to.equal("lightblue");
  });

  it("loads a specified background color value when 'val' is specified", async () => {
    const el = await fixture(html`<bulib-color val="red"></bulib-color>`)
    let actualBgColor = bgColorOfBulibColorElement(el);
    expect(actualBgColor).to.equal("red");
    expect(el).lightDom.to.equalSnapshot();
  });

  //TODO: troubleshoot the loading of --css-variables with 'var' 
});