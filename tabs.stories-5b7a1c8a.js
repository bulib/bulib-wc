import{h as i,i as e,_ as t,e as a,f as o,g as n,j as s,k as l,l as r}from"./preview-bc6c89ca.js";import"./lit-html-2435d3b6.js";function u(){return(u=Object.assign||function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(i[a]=t[a])}return i}).apply(this,arguments)}const d={},p="wrapper";function c(i){let{components:t}=i,o=n(i,["components"]);return a(p,u({},d,o,{components:t,mdxType:"MDXLayout"}),a(s,{title:"No Javascript|tabs",mdxType:"Meta"}),a("h1",null,"Tabs"),a("p",null,"Display a variety of related content in a single pane."),a("h2",null,"Usages"),a("p",null,"Note: the tabs should be responsive, and the input group accessible via the tab index. Once focus on\nan input is obtained, you should be able to switch between active tabs with the arrow keys."),a("h3",null,"Basic Example"),a("p",null,"Make sure you remember to add the ",a("inlineCode",{parentName:"p"},"checked")," attribute to the first ",a("inlineCode",{parentName:"p"},"input"),"."),a(l,{mdxType:"Preview"},a(r,{name:"basic",mdxType:"Story"},e`
      <div class="tabs">
        <input type="radio" name="tabs" id="option-1" checked>
        <label for="option-1">Option One</label>
        <div>the content within the first option</div>
        <input type="radio" name="tabs" id="option-2">
        <label for="option-2">Option Two</label>
        <div>the content within the second option</div>
        <input type="radio" name="tabs" id="option-3">
        <label for="option-3">Option Three</label>
        <div>the content within the third option</div>
      </div>
    `)),a("h3",null,"Complex"),a("p",null,"So long as the input groups have a separate name (e.g. ",a("inlineCode",{parentName:"p"},"tabs-2"),") and ",a("inlineCode",{parentName:"p"},"id"),"s, you can have multiple ",a("inlineCode",{parentName:"p"},".tabs")," on one page,\nand you can used the ",a("inlineCode",{parentName:"p"},"checked")," attribute to set a default tab."),a(l,{mdxType:"Preview"},a(r,{name:"complex",mdxType:"Story"},e`
      <div class="tabs">
        <input type="radio" name="tabs-2" id="option-2-1">
        <label for="option-2-1">Option One</label>
        <div class="lorem-ipsum">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam illum, voluptate repellat, ex minus at odio alias tenetur optio voluptatibus dicta deleniti cupiditate rem culpa laudantium, dolore deserunt fugiat repudiandae.</p>
          <p>Cumque provident nam, inventore repudiandae animi doloribus dignissimos illo ea error esse reprehenderit possimus odio, libero beatae, accusamus ratione itaque laboriosam expedita amet nihil voluptatum blanditiis obcaecati. Possimus, assumenda sint.</p>
          <p>Sunt quas dicta, vel perspiciatis ducimus placeat voluptates ad necessitatibus quis reprehenderit ullam consectetur! Enim neque ab architecto praesentium voluptatem saepe commodi, aperiam odio facere illum incidunt laborum laudantium pariatur?</p>
          <p>Minima quo molestias asperiores nam nisi officia impedit molestiae, sed hic reiciendis. Officia atque labore odit aliquid inventore ab possimus, incidunt provident ut at, neque consequatur minus quod expedita eligendi!</p>
          <p>Amet unde eligendi provident molestias suscipit itaque exercitationem voluptatum, ut natus id quas consectetur illo! Libero cum eum sit autem aliquid officia consequuntur tempore velit rerum? Vero blanditiis odio omnis.</p>
        </div>
        <input type="radio" name="tabs-2" id="option-2-2">
        <label for="option-2-2">Option Two</label>
        <div class="deck">
          <bulib-card debug small title="Email" icon="email" link="https://askalibrarian.bu.edu/form.php?quid=511" description="Email us your research questions and we’ll respond within 24 hours."></bulib-card>
          <bulib-card debug small title="Chat" icon="question_answer" action="console.log('chat says hi') description="Talk online to a research librarian on weekdays and Sundays"></bulib-card>
          <bulib-card debug small title="Call" icon="phone" link="tel:6173532700" description="Call us at 617-353-2700 during our open hours"></bulib-card>
        </div>
        <input type="radio" name="tabs-2" id="option-2-3" checked>
        <label for="option-2-3">Option Three</label>
        <div><bulib-locoso library="sth"></bulib-locoso></div>
      </div>
    `)))}c.isMDXComponent=!0;const m=i(e`
      <div class="tabs">
        <input type="radio" name="tabs" id="option-1" checked>
        <label for="option-1">Option One</label>
        <div>the content within the first option</div>
        <input type="radio" name="tabs" id="option-2">
        <label for="option-2">Option Two</label>
        <div>the content within the second option</div>
        <input type="radio" name="tabs" id="option-3">
        <label for="option-3">Option Three</label>
        <div>the content within the third option</div>
      </div>
    `);m.story={},m.story.name="basic",m.story.parameters={mdxSource:'html`\n      <div class="tabs">\n        <input type="radio" name="tabs" id="option-1" checked>\n        <label for="option-1">Option One</label>\n        <div>the content within the first option</div>\n        <input type="radio" name="tabs" id="option-2">\n        <label for="option-2">Option Two</label>\n        <div>the content within the second option</div>\n        <input type="radio" name="tabs" id="option-3">\n        <label for="option-3">Option Three</label>\n        <div>the content within the third option</div>\n      </div>\n    `'};const b=i(e`
      <div class="tabs">
        <input type="radio" name="tabs-2" id="option-2-1">
        <label for="option-2-1">Option One</label>
        <div class="lorem-ipsum">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam illum, voluptate repellat, ex minus at odio alias tenetur optio voluptatibus dicta deleniti cupiditate rem culpa laudantium, dolore deserunt fugiat repudiandae.</p>
          <p>Cumque provident nam, inventore repudiandae animi doloribus dignissimos illo ea error esse reprehenderit possimus odio, libero beatae, accusamus ratione itaque laboriosam expedita amet nihil voluptatum blanditiis obcaecati. Possimus, assumenda sint.</p>
          <p>Sunt quas dicta, vel perspiciatis ducimus placeat voluptates ad necessitatibus quis reprehenderit ullam consectetur! Enim neque ab architecto praesentium voluptatem saepe commodi, aperiam odio facere illum incidunt laborum laudantium pariatur?</p>
          <p>Minima quo molestias asperiores nam nisi officia impedit molestiae, sed hic reiciendis. Officia atque labore odit aliquid inventore ab possimus, incidunt provident ut at, neque consequatur minus quod expedita eligendi!</p>
          <p>Amet unde eligendi provident molestias suscipit itaque exercitationem voluptatum, ut natus id quas consectetur illo! Libero cum eum sit autem aliquid officia consequuntur tempore velit rerum? Vero blanditiis odio omnis.</p>
        </div>
        <input type="radio" name="tabs-2" id="option-2-2">
        <label for="option-2-2">Option Two</label>
        <div class="deck">
          <bulib-card debug small title="Email" icon="email" link="https://askalibrarian.bu.edu/form.php?quid=511" description="Email us your research questions and we’ll respond within 24 hours."></bulib-card>
          <bulib-card debug small title="Chat" icon="question_answer" action="console.log('chat says hi') description="Talk online to a research librarian on weekdays and Sundays"></bulib-card>
          <bulib-card debug small title="Call" icon="phone" link="tel:6173532700" description="Call us at 617-353-2700 during our open hours"></bulib-card>
        </div>
        <input type="radio" name="tabs-2" id="option-2-3" checked>
        <label for="option-2-3">Option Three</label>
        <div><bulib-locoso library="sth"></bulib-locoso></div>
      </div>
    `);b.story={},b.story.name="complex",b.story.parameters={mdxSource:'html`\n      <div class="tabs">\n        <input type="radio" name="tabs-2" id="option-2-1">\n        <label for="option-2-1">Option One</label>\n        <div class="lorem-ipsum">\n          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam illum, voluptate repellat, ex minus at odio alias tenetur optio voluptatibus dicta deleniti cupiditate rem culpa laudantium, dolore deserunt fugiat repudiandae.</p>\n          <p>Cumque provident nam, inventore repudiandae animi doloribus dignissimos illo ea error esse reprehenderit possimus odio, libero beatae, accusamus ratione itaque laboriosam expedita amet nihil voluptatum blanditiis obcaecati. Possimus, assumenda sint.</p>\n          <p>Sunt quas dicta, vel perspiciatis ducimus placeat voluptates ad necessitatibus quis reprehenderit ullam consectetur! Enim neque ab architecto praesentium voluptatem saepe commodi, aperiam odio facere illum incidunt laborum laudantium pariatur?</p>\n          <p>Minima quo molestias asperiores nam nisi officia impedit molestiae, sed hic reiciendis. Officia atque labore odit aliquid inventore ab possimus, incidunt provident ut at, neque consequatur minus quod expedita eligendi!</p>\n          <p>Amet unde eligendi provident molestias suscipit itaque exercitationem voluptatum, ut natus id quas consectetur illo! Libero cum eum sit autem aliquid officia consequuntur tempore velit rerum? Vero blanditiis odio omnis.</p>\n        </div>\n        <input type="radio" name="tabs-2" id="option-2-2">\n        <label for="option-2-2">Option Two</label>\n        <div class="deck">\n          <bulib-card debug small title="Email" icon="email" link="https://askalibrarian.bu.edu/form.php?quid=511" description="Email us your research questions and we’ll respond within 24 hours."></bulib-card>\n          <bulib-card debug small title="Chat" icon="question_answer" action="console.log(\'chat says hi\') description="Talk online to a research librarian on weekdays and Sundays"></bulib-card>\n          <bulib-card debug small title="Call" icon="phone" link="tel:6173532700" description="Call us at 617-353-2700 during our open hours"></bulib-card>\n        </div>\n        <input type="radio" name="tabs-2" id="option-2-3" checked>\n        <label for="option-2-3">Option Three</label>\n        <div><bulib-locoso library="sth"></bulib-locoso></div>\n      </div>\n    `'};const h={title:"No Javascript|tabs",includeStories:["basic","complex"]},v={basic:"no-javascript-tabs--basic",complex:"no-javascript-tabs--complex"};h.parameters=h.parameters||{},h.parameters.docs=t({},h.parameters.docs||{},{page:()=>a(o,{mdxStoryNameToId:v},a(c,null))});export default h;export{m as basic,b as complex};
//# sourceMappingURL=tabs.stories-5b7a1c8a.js.map
