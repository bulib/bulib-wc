import { html, fixture, expect } from '@open-wc/testing';

import './bulib-announce';
import { elementUpdated } from '@open-wc/testing-helpers';

const elementIsHidden = (el) => { return el.offsetHeight == 0; }

describe('bulib-announce', () => {
  it('to effectively load as a web component', async () => {
    const el = await fixture(html`<bulib-announce></bulib-announce>`);
    expect(el.innerHTML).not.to.be.undefined;
    expect(el.innerHTML).to.include(`<span class="message">`)
    expect(el).lightDom.to.equalSnapshot();
  });

  it('to be hidden when dismissed is present', async () => {
    const el = await fixture(html`<bulib-announce dismissed></bulib-announce>`);
    expect(el.innerHTML).not.to.be.undefined;
    let innerDiv = el.querySelector("div.announce-banner");
    expect(elementIsHidden(innerDiv)).to.be.true;
    expect(el).lightDom.to.equalSnapshot();
  });

  it('to be hidden when dismissed is set to true', async () => {
    const el = await fixture(html`<bulib-announce dismissed="true"></bulib-announce>`);
    expect(el.innerHTML).not.to.be.undefined;
    let innerDiv = el.querySelector("div.announce-banner");
    expect(elementIsHidden(innerDiv)).to.be.true;
    expect(el).lightDom.to.equalSnapshot();
  });

  it('not to be hidden when dismissed is set to false', async () => {
    const el = await fixture(html`<bulib-announce dismissed="false"></bulib-announce>`);
    expect(el.innerHTML).not.to.be.undefined;
    let innerDiv = el.querySelector("div.announce-banner");
    expect(elementIsHidden(innerDiv)).to.be.false;
    expect(el).lightDom.to.equalSnapshot();
  });

  it('the icon to change with the severity', async () => {
    const el = await fixture(html`<bulib-announce severity="warn"></bulib-announce>`);
    expect(el.innerHTML).not.to.be.undefined;
    let announceIcon = el.querySelector("div.announce-banner i");
    expect(announceIcon.innerHTML).to.include('report_problem');
    expect(el).lightDom.to.equalSnapshot();
  });

  it("that clicking 'dismiss' on a non-dismissed announce-banner dismisses it", async () => {
    let el = await fixture(html`<bulib-announce dismissed="false"></bulib-announce>`);
    let innerDiv = el.querySelector("div.announce-banner");

    // click on the dismiss button and wait for the element to update
    innerDiv.querySelector("button").click();
    await elementUpdated(innerDiv);

    // assert that the innerHTML changes and that the banner becomes hidden
    expect(innerDiv.getAttribute("disabled") == "true").to.be.true;
    innerDiv = el.querySelector("div.announce-banner");
    expect(elementIsHidden(innerDiv)).to.be.true;
  });

  it('renders an announcement-banner with a custom message', async () => {
    const el = await fixture(html`<bulib-announce message="this is a custom message"></bulib-announce>`);
    expect(el).lightDom.to.equalSnapshot();

    let innerMessage = el.querySelector("div.announce-banner > .message");
    expect(innerMessage.innerText).to.include("custom message");
  });

  it("the rendered custom message does NOT get replaced when 'prevent_action' is there, regardless of the api-enabled code", async () => {
    let el = await fixture(html`<bulib-announce debug code="primo" message="custom message" prevent_action></bulib-announce>`);
    
    // click on the dismiss button and wait for the element to update
    let innerMsgPrevent = el.querySelector("div.announce-banner > .message");
    
    // assert that the innerHTML changes and that the banner becomes hidden
    expect(innerMsgPrevent.innerText).to.include("custom message");
  });
});
