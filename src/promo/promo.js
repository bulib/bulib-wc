import {LitElement, html, css} from 'lit-element/lit-element';

const default_top = html`<h3>'<code>top</code>': this is where you might just put a heading</h3>`;
const default_bottom = html`
  <div>
    <h4>'<code>bottom</code>': this is a good spot for a secondary heading</h4>
    <p>this could be a custom description that can include <a href="">links</a> or anything else</p>
    <p><small><em>NOTE: if you don't specify an &lt;<code>img</code>&gt; it'll default to the background color</em></small></p>
    <div class="calls-to-action">
      <button class="bulib-btn" href="">this is a final call to action</button>
      <button class="bulib-btn secondary" href="">this is a second option</button>
    </div>
  </div>
`;

export default class BulibPromo extends LitElement {

  static get properties(){
    return {
      /** [debugging] display all placeholders instead of leaving them empty */
      debug: {type:Boolean}
    }
  }

  static get styles(){
    return [
      css`
        div.promo { 
          border: 1px solid var(--bulib-promo-background-color-blurb, #333);
          max-width: var(--bulib-promo-max-width, 650px);
          background-color: var(--bulib-promo-bottom-background, #EEE);
          height: 100%;
          border-radius: var(--bulib-promo-border-radius, 5px);
        }
        div.top, div.bottom { 
          margin-left: 0px; margin-right: 0px; 
          padding: var(--bulib-promo-padding, 15px);
        }
        div.top { 
          color: var(--bulib-promo-top-text, white);
          background-color: var(--bulib-promo-top-background, #A80000);
        }
        div.top * { margin-top: 0px; margin-bottom: 0px; }
        div.main {
          min-height: 150px;
          margin: 0px;
          background-color: var(--bulib-promo-main-background-color, #555);
          color: var(--bulib-primo-main-text-color, white); 
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        div.bottom { 
          left: 0px; right: 0px; bottom: 0px;
          background-color: var(--bulib-promo-bottom-background, #EEE);
          border: 1px solid var(--bulib-promo-bottom-background, #EEE);
          border-radius: var(--bulib-promo-border-radius);
          border-top-left-radius: 0px; border-top-right-radius: 0px;
          color: var(--bulib-promo-bottom-text, black);
        }
        div.bottom .calls-to-action { display: flex; flex-wrap: nowrap; justify-content: space-evenly; }
      `
    ]
  }
  
  render(){
    return html`
      <div class="promo">
        <div class="top">
          <slot name="top">${default_top}</slot>
        </div>
        <div class="main"><!-- img will be dropped here as the 'background-image' --></div>
        <div class="bottom">
          <slot name="bottom">${default_bottom}</slot>
        </div>
      </div>
    `;
  }

  /* after the element is first rendered, look for a slotted image and replace the background */
  updated(){ 
    this._setMainBackgroundViaSlottedImage();
    this._hideHeadingsIfTheyAreNotSpecified();
  }

  _setMainBackgroundViaSlottedImage(){
    let image_url = "";
    let image_elem = this.querySelector("img[slot='main'");
    try{
      if(!!image_elem && image_elem.hasAttribute("src")){ image_url = image_elem.src; }
      this.shadowRoot.querySelector("div.promo div.main").style.backgroundImage = `url('${image_url}')`;
    }catch(exception){
      console.log("exception");
    }
  }

  _hideHeadingsIfTheyAreNotSpecified(){
    if(!this.debug && this.querySelector("*[slot='top']") == null){ 
      this.shadowRoot.querySelector("div.top").style.display = "none";
    }
    if(!this.debug && this.querySelector("*[slot='bottom']") == null){ 
      this.shadowRoot.querySelector("div.bottom").style.display = "none";
    }
  }

}