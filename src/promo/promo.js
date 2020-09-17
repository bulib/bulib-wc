import {LitElement, html, css} from 'lit-element/lit-element';

export default class BulibPromo extends LitElement {

  static get styles(){
    return [
      css`
        div.promo { 
          z-index: 1; 
          position: relative; 
          margin: 10px; 
          min-height: 350px;
          max-width: 500px;
          color: white; 
          padding: var(--padding-large, 15px);
          border: 1px solid var(--color-secondary-background-dark, #333);
          background-color: var(--color-secondary-background-dark);
          background-size: cover;
          background-repeat: no-repeat;
        }
        div.blurb {  
          background-color: var(--color-secondary-background, #333); 
          border-top: 1px solid var(--color-secondary-background-dark, #333);
          color: var(--color-secondary-text, whitesmoke);
          position: absolute;
          left: 0px; right: 0px; bottom: 0px;
          padding: var(--padding-large, 15px);
          z-index: 3; 
        }
      `
    ]
  }
  
  render(){
    return html`
      <div class="promo">
        <slot name="heading" class="heading">
          <h3 slot="heading">&lt;heading&gt;</h3>
        </slot>
        <div class="blurb">
          <slot name="description">
            <p>&lt;this is the description that gets added to the 'blurb' section&gt;</p>
          </slot>
          <slot name="call-to-action">
            <a href="">&lt;sample call-to-action&gt;</a>
          </slot>
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
      this.shadowRoot.querySelector("div.promo").style.backgroundImage = `url('${image_url}')`;
    }catch(exception){
      console.log("exception");
    }
  }

}