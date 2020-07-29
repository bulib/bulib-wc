import{h as a,i as e,m as i,n as l,_ as n,e as r,f as o,g as s,j as t,k as d,l as u,o as c}from"./preview-bc6c89ca.js";import"./lit-html-2435d3b6.js";import"./lit-element-fdaadb84.js";import"./google_analytix-b0686824.js";import"./bulib-card-a841f735.js";function b(){return(b=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(a[l]=i[l])}return a}).apply(this,arguments)}const p={},m="wrapper";function h(a){let{components:n}=a,o=s(a,["components"]);return r(m,b({},p,o,{components:n,mdxType:"MDXLayout"}),r(t,{title:"Web Components|bulib-card",decorators:[i,l],parameters:{component:"bulib-card",options:{selectedPanel:"storybookjs/knobs/panel"}},mdxType:"Meta"}),r("h1",null,"Card Component"),r("p",null,'Used as a shortcut to the "No Javascript" version, ',r("inlineCode",{parentName:"p"},"<bulib-card>")," presents a more human-readable\nway to insert/display one or more a prominent, visual calls to action, with Material icons ","[https://material.io/tools/icons/]","."),r("h2",null,"Usages"),r("h3",null,"Alone"),r(d,{withToolbar:!0,mdxType:"Preview"},r(u,{name:"alone-default",mdxType:"Story"},e`
      <bulib-card debug
        title="Email" icon="email" link="https://askalibrarian.bu.edu/form.php?quid=511" 
        description="Email us your research questions and we’ll respond within 24 hours.">
      </bulib-card>`)),r("p",null,r("em",{parentName:"p"},"add ",r("inlineCode",{parentName:"em"},"small")," attribute to the card to trigge ",r("inlineCode",{parentName:"em"},".small")," styling")),r(d,{withToolbar:!0,mdxType:"Preview"},r(u,{name:"alone-small",mdxType:"Story"},e`
      <bulib-card small debug
        title="Email" icon="email" link="https://askalibrarian.bu.edu/form.php?quid=511" 
        description="Email us your research questions and we’ll respond within 24 hours.">
      </bulib-card>`)),r("h3",null,"Deck"),r(d,{withToolbar:!0,mdxType:"Preview"},r(u,{name:"deck-default",mdxType:"Story"},e`
      <div class="deck">
        <bulib-card debug 
          title="Email" icon="email" link="https://askalibrarian.bu.edu/form.php?quid=511"
          description="Email us your research questions and we’ll respond within 24 hours."></bulib-card>
        <bulib-card debug 
          title="Chat" icon="question_answer" action="console.log('chat says hi')"
          description="Talk online to a research librarian on weekdays and Sundays"></bulib-card>
        <bulib-card debug 
          title="Call" icon="phone" link="tel:6173532700"
          description="Call us at 617-353-2700 during our open hours"></bulib-card>
      </div>`)),r("p",null,r("em",{parentName:"p"},"NOTE: decks with ",r("inlineCode",{parentName:"em"},"small")," cards can hold more cards per row")),r(d,{withToolbar:!0,mdxType:"Preview"},r(u,{name:"deck-small",mdxType:"Story"},e`
      <div class="deck">
        <bulib-card debug small
          title="Email" icon="email" link="https://askalibrarian.bu.edu/form.php?quid=511"
          description="Email us your research questions and we’ll respond within 24 hours."></bulib-card>
        <bulib-card debug small
          title="Chat" icon="question_answer" action="console.log('chat says hi')"
          description="Talk online to a research librarian on weekdays and Sundays"></bulib-card>
        <bulib-card debug small
          title="Call" icon="phone" link="tel:6173532700"
          description="Call us at 617-353-2700 during our open hours"></bulib-card>
      </div>`)),r("h2",null,"API - Properties"),r(c,{of:"bulib-card",mdxType:"Props"}))}h.isMDXComponent=!0;const y=a(e`
      <bulib-card debug
        title="Email" icon="email" link="https://askalibrarian.bu.edu/form.php?quid=511" 
        description="Email us your research questions and we’ll respond within 24 hours.">
      </bulib-card>`);y.story={},y.story.name="alone-default",y.story.parameters={mdxSource:'html`\n      <bulib-card debug\n        title="Email" icon="email" link="https://askalibrarian.bu.edu/form.php?quid=511" \n        description="Email us your research questions and we’ll respond within 24 hours.">\n      </bulib-card>`'};const k=a(e`
      <bulib-card small debug
        title="Email" icon="email" link="https://askalibrarian.bu.edu/form.php?quid=511" 
        description="Email us your research questions and we’ll respond within 24 hours.">
      </bulib-card>`);k.story={},k.story.name="alone-small",k.story.parameters={mdxSource:'html`\n      <bulib-card small debug\n        title="Email" icon="email" link="https://askalibrarian.bu.edu/form.php?quid=511" \n        description="Email us your research questions and we’ll respond within 24 hours.">\n      </bulib-card>`'};const w=a(e`
      <div class="deck">
        <bulib-card debug 
          title="Email" icon="email" link="https://askalibrarian.bu.edu/form.php?quid=511"
          description="Email us your research questions and we’ll respond within 24 hours."></bulib-card>
        <bulib-card debug 
          title="Chat" icon="question_answer" action="console.log('chat says hi')"
          description="Talk online to a research librarian on weekdays and Sundays"></bulib-card>
        <bulib-card debug 
          title="Call" icon="phone" link="tel:6173532700"
          description="Call us at 617-353-2700 during our open hours"></bulib-card>
      </div>`);w.story={},w.story.name="deck-default",w.story.parameters={mdxSource:'html`\n      <div class="deck">\n        <bulib-card debug \n          title="Email" icon="email" link="https://askalibrarian.bu.edu/form.php?quid=511"\n          description="Email us your research questions and we’ll respond within 24 hours."></bulib-card>\n        <bulib-card debug \n          title="Chat" icon="question_answer" action="console.log(\'chat says hi\')"\n          description="Talk online to a research librarian on weekdays and Sundays"></bulib-card>\n        <bulib-card debug \n          title="Call" icon="phone" link="tel:6173532700"\n          description="Call us at 617-353-2700 during our open hours"></bulib-card>\n      </div>`'};const g=a(e`
      <div class="deck">
        <bulib-card debug small
          title="Email" icon="email" link="https://askalibrarian.bu.edu/form.php?quid=511"
          description="Email us your research questions and we’ll respond within 24 hours."></bulib-card>
        <bulib-card debug small
          title="Chat" icon="question_answer" action="console.log('chat says hi')"
          description="Talk online to a research librarian on weekdays and Sundays"></bulib-card>
        <bulib-card debug small
          title="Call" icon="phone" link="tel:6173532700"
          description="Call us at 617-353-2700 during our open hours"></bulib-card>
      </div>`);g.story={},g.story.name="deck-small",g.story.parameters={mdxSource:'html`\n      <div class="deck">\n        <bulib-card debug small\n          title="Email" icon="email" link="https://askalibrarian.bu.edu/form.php?quid=511"\n          description="Email us your research questions and we’ll respond within 24 hours."></bulib-card>\n        <bulib-card debug small\n          title="Chat" icon="question_answer" action="console.log(\'chat says hi\')"\n          description="Talk online to a research librarian on weekdays and Sundays"></bulib-card>\n        <bulib-card debug small\n          title="Call" icon="phone" link="tel:6173532700"\n          description="Call us at 617-353-2700 during our open hours"></bulib-card>\n      </div>`'};const f={title:"Web Components|bulib-card",parameters:{component:"bulib-card",options:{selectedPanel:"storybookjs/knobs/panel"}},decorators:[i,l],includeStories:["aloneDefault","aloneSmall","deckDefault","deckSmall"]},q={"alone-default":"web-components-bulib-card--alone-default","alone-small":"web-components-bulib-card--alone-small","deck-default":"web-components-bulib-card--deck-default","deck-small":"web-components-bulib-card--deck-small"};f.parameters=f.parameters||{},f.parameters.docs=n({},f.parameters.docs||{},{page:()=>r(o,{mdxStoryNameToId:q},r(h,null))});export default f;export{y as aloneDefault,k as aloneSmall,w as deckDefault,g as deckSmall};
//# sourceMappingURL=card.stories-e1d49392.js.map
