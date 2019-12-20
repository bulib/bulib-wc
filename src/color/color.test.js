import { html, fixture, expect } from '@open-wc/testing';

import './bulib-color';

const bgColorOfBulibColorElement = (elem) => { return elem.renderRoot.querySelector("div > div:last-of-type").style.backgroundColor; }

describe('bulib-color', () => {

  it('to effectively load as a web component', async () => {
    const el = await fixture(html`<bulib-color></bulib-color>`)
    expect(el.renderRoot).not.to.undefined;
    expect(el.renderRoot.innerHTML).not.to.equal("");
  });

  it('to effectively set a specified background color value', async () => {
    const valElement = await fixture(html`<bulib-color val="red"></bulib-color>`)
    let actualBgColor = bgColorOfBulibColorElement(valElement);
    expect(actualBgColor).to.equal("red");
  });
});