import{h as e,i as a,_ as n,e as s,f as t,g as i,j as l,k as o,l as c}from"./preview-bc6c89ca.js";import"./lit-html-2435d3b6.js";function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}const d={},u="wrapper";function b(e){let{components:n}=e,t=i(e,["components"]);return s(u,r({},d,t,{components:n,mdxType:"MDXLayout"}),s(l,{title:"No Javascript|announce-banner",mdxType:"Meta"}),s("h1",null,"Announce Banner (nojs)"),s("p",null,"Show a site-wide message and call to action with manual severity and optional, clear call to action."),s("h2",null,"Default (enabled)"),s("h3",null,"Default (without CTA)"),s("p",null,"Announcement banners can be used without any call to action if you're just telling the user a basic fact."),s(o,{withToolbar:!0,mdxType:"Preview"},s(c,{name:"default",mdxType:"Story"},a`
      <div class="announce-banner success">
        <i class="material-icons">check_circle</i>
        <span class="message">You have successfully used a banner without any Call-To-Action</span>
      </div>
    `)),s("h3",null,"Default (with CTA)"),s("p",null,"Most announcements, however, will likely come with an action the user should take to complete a given task."),s(o,{withToolbar:!0,mdxType:"Preview"},s(c,{name:"default-with-cta",mdxType:"Story"},a`
      <div class="announce-banner info">
        <i class="material-icons">info</i>
        <span class="message">Sign in to view 'My Favorites'</span>
        <a href="https://www.bu.edu/library/account/">Sign in</a>
      </div>
    `)),s("h4",null,"Disabled/Dismissed Messages"),s("p",null,"You can show/hide banner messages in ",s("inlineCode",{parentName:"p"},"bulib-announce")," by setting the ",s("inlineCode",{parentName:"p"},"div.announce-banner"),"'s ",s("inlineCode",{parentName:"p"},"disabled")," value to true."),s("p",null,s("em",{parentName:"p"},"NOTE: There is an invisible banner below that you can't see because the ",s("code",null,"debug")," is absent")),s(o,{withToolbar:!0,mdxType:"Preview"},s(c,{name:"disabled-default",mdxType:"Story"},a`
      <div class="announce-banner alert" disabled="true">
        <i class="material-icons">announcement</i>
        <span class="message">This message cannot be seen because it is set to disabled='true' and doesn't have a 'debug' attribute</span>
      </div>
    `)),s("p",null,"To manually show disabled (or 'dismissed') messages (e.g. when debugging), simply add the ",s("inlineCode",{parentName:"p"},"debug")," attribute to the same level"),s(o,{withToolbar:!0,mdxType:"Preview"},s(c,{name:"disabled-debug",mdxType:"Story"},a`
      <div class="announce-banner warn" debug disabled="true">
        <i class="material-icons">report_problem</i>
        <span class="message">This banner is manually disabled, but can still be seen because of the <code>debug</code> attribute</span>
      </div>
    `)))}b.isMDXComponent=!0;const m=e(a`
      <div class="announce-banner success">
        <i class="material-icons">check_circle</i>
        <span class="message">You have successfully used a banner without any Call-To-Action</span>
      </div>
    `);m.story={},m.story.name="default",m.story.parameters={mdxSource:'html`\n      <div class="announce-banner success">\n        <i class="material-icons">check_circle</i>\n        <span class="message">You have successfully used a banner without any Call-To-Action</span>\n      </div>\n    `'};const p=e(a`
      <div class="announce-banner info">
        <i class="material-icons">info</i>
        <span class="message">Sign in to view 'My Favorites'</span>
        <a href="https://www.bu.edu/library/account/">Sign in</a>
      </div>
    `);p.story={},p.story.name="default-with-cta",p.story.parameters={mdxSource:'html`\n      <div class="announce-banner info">\n        <i class="material-icons">info</i>\n        <span class="message">Sign in to view \'My Favorites\'</span>\n        <a href="https://www.bu.edu/library/account/">Sign in</a>\n      </div>\n    `'};const h=e(a`
      <div class="announce-banner alert" disabled="true">
        <i class="material-icons">announcement</i>
        <span class="message">This message cannot be seen because it is set to disabled='true' and doesn't have a 'debug' attribute</span>
      </div>
    `);h.story={},h.story.name="disabled-default",h.story.parameters={mdxSource:'html`\n      <div class="announce-banner alert" disabled="true">\n        <i class="material-icons">announcement</i>\n        <span class="message">This message cannot be seen because it is set to disabled=\'true\' and doesn\'t have a \'debug\' attribute</span>\n      </div>\n    `'};const v=e(a`
      <div class="announce-banner warn" debug disabled="true">
        <i class="material-icons">report_problem</i>
        <span class="message">This banner is manually disabled, but can still be seen because of the <code>debug</code> attribute</span>
      </div>
    `);v.story={},v.story.name="disabled-debug",v.story.parameters={mdxSource:'html`\n      <div class="announce-banner warn" debug disabled="true">\n        <i class="material-icons">report_problem</i>\n        <span class="message">This banner is manually disabled, but can still be seen because of the <code>debug</code> attribute</span>\n      </div>\n    `'};const y={title:"No Javascript|announce-banner",includeStories:["defaultStory","defaultWithCta","disabledDefault","disabledDebug"]},g={default:"no-javascript-announce-banner--default-story","default-with-cta":"no-javascript-announce-banner--default-with-cta","disabled-default":"no-javascript-announce-banner--disabled-default","disabled-debug":"no-javascript-announce-banner--disabled-debug"};y.parameters=y.parameters||{},y.parameters.docs=n({},y.parameters.docs||{},{page:()=>s(t,{mdxStoryNameToId:g},s(b,null))});export default y;export{m as defaultStory,p as defaultWithCta,v as disabledDebug,h as disabledDefault};
//# sourceMappingURL=announce-nojs.stories-a8de769d.js.map
