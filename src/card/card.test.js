import { html, fixture, expect } from '@open-wc/testing';

import './bulib-card';

describe('bulib-card', () => {
  it('to effectively load as a web component', async () => {
    const el = await fixture(html`
      <bulib-card title="Home" icon="house" link="https://bu.edu/library" description="The description of the sample card."></bulib-card>
    `);
    expect(el.innerHTML).not.to.be.undefined;
    expect(el.innerHTML).to.include(`<div class="card">`)
  });
});