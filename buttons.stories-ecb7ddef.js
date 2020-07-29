import{h as t,i as n,_ as a,e,f as o,g as r,j as s,k as i,l}from"./preview-bc6c89ca.js";import"./lit-html-2435d3b6.js";function b(){return(b=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])}return t}).apply(this,arguments)}const u={},c="wrapper";function h(t){let{components:a}=t,o=r(t,["components"]);return e(c,b({},u,o,{components:a,mdxType:"MDXLayout"}),e(s,{title:"No Javascript|buttons",mdxType:"Meta"}),e("h1",null,"Buttons"),e("p",null,"Display a link as if it were a button to highlight it as the main call-to-action."),e("h2",null,"Usage"),e("h3",null,"Default Button (link)"),e("p",null,"The primary button should highlight the main call-to-action. "),e("p",null,"Given this, there should (generally) only be one of them per page."),e(i,{mdxType:"Preview"},e(l,{name:"button-default",mdxType:"Story"},n`<a class="bulib-btn" href="javascript:void()">Primary Option</a>`)),e("h3",null,"Secondary Button (link)"),e("p",null,"The secondary button is for main calls-to-action that may be less important\nor an alternative to the main one."),e(i,{mdxType:"Preview"},e(l,{name:"button-secondary",mdxType:"Story"},n`<a class="bulib-btn btn-secondary" href="javascript:void()">Secondary Option</a>`)),e("h3",null,"Large Buttons (link)"),e(i,{mdxType:"Preview"},e(l,{name:"button-together-large",mdxType:"Story"},n`
      <a class="bulib-btn large">Primary (large)</a>
      <a class="bulib-btn btn-secondary large">Secondary (large)</a>
    `)),e("h3",null,"Primary and Secondary ",e("inlineCode",{parentName:"h3"},"<button>")),e("p",null,"The styling works with a ",e("inlineCode",{parentName:"p"},"<button>")," as well as a ",e("inlineCode",{parentName:"p"},"<a>"),"."),e(i,{mdxType:"Preview"},e(l,{name:"button-together-button",mdxType:"Story"},n`
      <button class="bulib-btn">Primary Option</button>
      <button class="bulib-btn btn-secondary">Secondary Option</button>
    `)),e("h3",null,"Using Multiple Buttons in Context"),e("p",null,"These styles should be used in the following way when they're together."),e(i,{mdxType:"Preview"},e(l,{name:"button-together-with-context",mdxType:"Story"},n`
    <div class="secondary-menu"> 
      <h3>Please Confirm Something</h3>
      <p>This is a sample confirmation message showing the use of both button styles</p>
      <div>
        <a class="bulib-btn" href="javascript:void()">Confirm</a>
        <a class="bulib-btn btn-secondary" href="javascript:void()">Cancel</a>
      </div>
    </div>
    `)))}h.isMDXComponent=!0;const p=t(n`<a class="bulib-btn" href="javascript:void()">Primary Option</a>`);p.story={},p.story.name="button-default",p.story.parameters={mdxSource:'html`<a class="bulib-btn" href="javascript:void()">Primary Option</a>`'};const m=t(n`<a class="bulib-btn btn-secondary" href="javascript:void()">Secondary Option</a>`);m.story={},m.story.name="button-secondary",m.story.parameters={mdxSource:'html`<a class="bulib-btn btn-secondary" href="javascript:void()">Secondary Option</a>`'};const d=t(n`
      <a class="bulib-btn large">Primary (large)</a>
      <a class="bulib-btn btn-secondary large">Secondary (large)</a>
    `);d.story={},d.story.name="button-together-large",d.story.parameters={mdxSource:'html`\n      <a class="bulib-btn large">Primary (large)</a>\n      <a class="bulib-btn btn-secondary large">Secondary (large)</a>\n    `'};const y=t(n`
      <button class="bulib-btn">Primary Option</button>
      <button class="bulib-btn btn-secondary">Secondary Option</button>
    `);y.story={},y.story.name="button-together-button",y.story.parameters={mdxSource:'html`\n      <button class="bulib-btn">Primary Option</button>\n      <button class="bulib-btn btn-secondary">Secondary Option</button>\n    `'};const g=t(n`
    <div class="secondary-menu"> 
      <h3>Please Confirm Something</h3>
      <p>This is a sample confirmation message showing the use of both button styles</p>
      <div>
        <a class="bulib-btn" href="javascript:void()">Confirm</a>
        <a class="bulib-btn btn-secondary" href="javascript:void()">Cancel</a>
      </div>
    </div>
    `);g.story={},g.story.name="button-together-with-context",g.story.parameters={mdxSource:'html`\n    <div class="secondary-menu"> \n      <h3>Please Confirm Something</h3>\n      <p>This is a sample confirmation message showing the use of both button styles</p>\n      <div>\n        <a class="bulib-btn" href="javascript:void()">Confirm</a>\n        <a class="bulib-btn btn-secondary" href="javascript:void()">Cancel</a>\n      </div>\n    </div>\n    `'};const v={title:"No Javascript|buttons",includeStories:["buttonDefault","buttonSecondary","buttonTogetherLarge","buttonTogetherButton","buttonTogetherWithContext"]},f={"button-default":"no-javascript-buttons--button-default","button-secondary":"no-javascript-buttons--button-secondary","button-together-large":"no-javascript-buttons--button-together-large","button-together-button":"no-javascript-buttons--button-together-button","button-together-with-context":"no-javascript-buttons--button-together-with-context"};v.parameters=v.parameters||{},v.parameters.docs=a({},v.parameters.docs||{},{page:()=>e(o,{mdxStoryNameToId:f},e(h,null))});export default v;export{p as buttonDefault,m as buttonSecondary,y as buttonTogetherButton,d as buttonTogetherLarge,g as buttonTogetherWithContext};
//# sourceMappingURL=buttons.stories-ecb7ddef.js.map
