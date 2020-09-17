import {LitElement, html, css} from 'lit-element/lit-element';

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
          z-index: 1; 
          position: relative; 
          border: 1px solid var(--bulib-promo-blurb-background-color, #333);
          max-width: var(--bulib-promo-max-width, 650px);
          border-radius: var(--bulib-promo-border-radius, 5px);
        }
        div.promo div.main {
          min-height: 350px;
          margin: 0px;
          padding: var(--padding-large, 15px);
          background-color: var(--bulib-promo-main-background-color, #555);
          color: var(--bulib-primo-main-text-color, white); 
          border-radius: var(--bulib-promo-border-radius, 5px);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        /* div.main div.heading { z-index: 2; position: fixed; top: 0px; background-color: transparent; } */
        div.blurb {  
          z-index: 3; 
          margin: 0px;
          position: absolute;
          left: 0px; right: 0px; bottom: 0px;
          padding: var(--padding-large, 15px);
          background-color: var(--bulib-promo-blurb-background-color, #444);
          border: 1px solid var(--bulib-promo-blurb-background-color, #444);
          border-radius: var(--bulib-promo-border-radius, 5px);
          border-top-left-radius: 0px; border-top-right-radius: 0px;
          color: var(--bulib-promo-blurb-text-color, whitesmoke);
        }
      `
    ]
  }
  
  render(){
    let heading, description, call_to_action; 
    if(this.debug){
      heading = html`<h3>&lt;this is the <code>heading</code>&gt;</h3>`;
      description = html`<p>&lt;this is the where the <code>description</code> goes&gt;</p>`;
      call_to_action = html`<button>here's a sample <code>call-to-action</code></button>`;
    }
    return html`
      <div class="promo">
        <div class="main">
          <slot name="heading" class="heading">${heading}</slot>
        </div>
        <div class="blurb">
          <slot name="description">${description}</slot>
          <slot name="call-to-action">${call_to_action}</slot>
        </div>
      </div>
    `;
  }

  /* after the element is first rendered, look for a slotted image and replace the background */
  firstUpdated(){ 
    let image_url = "https://via.placeholder.com/500x350"
    let image_elem = this.querySelector("img");
    try{
      if(!!image_elem && image_elem.hasAttribute("src")){ image_url = image_elem.src; }
      this.shadowRoot.querySelector("div.promo div.main").style.backgroundImage = `url('${image_url}')`;
    }catch(exception){
      console.log("exception");
    }
  }

}