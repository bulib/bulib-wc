import { html, fixture, expect } from '@open-wc/testing';

import './bulib-announce';
import { elementUpdated, waitUntil } from '@open-wc/testing-helpers';

const elementIsHidden = (el) => { return el.offsetHeight == 0; }

describe('bulib-announce', () => {
  it('to effectively load as a web component', async () => {
    const el = await fixture(html`<bulib-announce></bulib-announce>`);
    expect(el.innerHTML).not.to.be.undefined;
    expect(el.innerHTML).to.include(`<span class="message">`)
  });

  it('to be hidden when dismissed is present', async () => {
    const el = await fixture(html`<bulib-announce dismissed></bulib-announce>`);
    expect(el.innerHTML).not.to.be.undefined;
    let innerDiv = el.querySelector("div.announce-banner");
    expect(elementIsHidden(innerDiv)).to.be.true;
  });

  it('to be hidden when dismissed is set to true', async () => {
    const el = await fixture(html`<bulib-announce dismissed="true"></bulib-announce>`);
    expect(el.innerHTML).not.to.be.undefined;
    let innerDiv = el.querySelector("div.announce-banner");
    expect(elementIsHidden(innerDiv)).to.be.true;
  });

  it('not to be hidden when dismissed is set to false', async () => {
    const el = await fixture(html`<bulib-announce dismissed="false"></bulib-announce>`);
    expect(el.innerHTML).not.to.be.undefined;
    let innerDiv = el.querySelector("div.announce-banner");
    expect(elementIsHidden(innerDiv)).to.be.false;
  });

  it('icon changes with severity', async () => {
    const el = await fixture(html`<bulib-announce severity="warn"></bulib-announce>`);
    expect(el.innerHTML).not.to.be.undefined;
    let announceIcon = el.querySelector("div.announce-banner i");
    expect(announceIcon.innerHTML).to.include('report_problem')
  });
});