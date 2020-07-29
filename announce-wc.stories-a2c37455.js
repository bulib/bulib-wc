import{h as e,i as n,m as t,n as i,_ as s,e as d,f as a,g as o,j as u,k as b,l as r,o as l}from"./preview-bc6c89ca.js";import"./lit-html-2435d3b6.js";import"./lit-element-fdaadb84.js";import"./bulib-announce-96d15d20.js";function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}const m={},p="wrapper";function g(e){let{components:s}=e,a=o(e,["components"]);return d(p,c({},m,a,{components:s,mdxType:"MDXLayout"}),d(u,{title:"Web Components|bulib-announce",decorators:[t,i],parameters:{component:"bulib-announce",options:{selectedPanel:"storybookjs/knobs/panel"}},mdxType:"Meta"}),d("h1",null,"Announcement Banner Component"),d("p",null,"Used to show site-wide, time-sensitive, dismissable chunk of information with varying severity, a prominent message,\nand a clear call to action."),d("h2",null,"Usages"),d("h3",null,"Default Component"),d("p",null,"by default, ",d("inlineCode",{parentName:"p"},"bulib-announce")," displays with a default message with an ",d("inlineCode",{parentName:"p"},"info"),"-level severity and no call to action"),d(b,{withToolbar:!0,mdxType:"Preview"},d(r,{name:"basic",mdxType:"Story"},n`<bulib-announce debug></bulib-announce>`)),d("h3",null,"Custom Message and Severity"),d("p",null,"Specifying a ",d("inlineCode",{parentName:"p"},"severity")," will alter its color and icon, and should be complimentary to the specified ",d("inlineCode",{parentName:"p"},"message"),"."),d(b,{withToolbar:!0,mdxType:"Preview"},d(r,{name:"custom-severity",mdxType:"Story"},n`
      <bulib-announce debug code="severity-info" severity="info" message="Situation-independent information"></bulib-announce>
      <hr />
      <bulib-announce debug code="severity-success" severity="success" message="A user action has been completed or verified"></bulib-announce>
      <hr />
      <bulib-announce debug code="severity-warn" severity="warn" message="Something is wrong, but it's not an emergency"></bulib-announce>
      <hr />
      <bulib-announce debug code="severity-alert" severity="alert" message="Something is very wrong and needs immediate attention"></bulib-announce>
    `)),d("h3",null,"Custom Calls-to-Actions"),d("p",null,"You can also specify a call-to-action text (",d("inlineCode",{parentName:"p"},"cta_text"),") and url (",d("inlineCode",{parentName:"p"},"cta_url"),"). "),d(b,{withToolbar:!0,mdxType:"Preview"},d(r,{name:"custom-signin-cta",mdxType:"Story"},n`
      <bulib-announce debug code="signin-cta" severity="info" message="Sign in to view 'My Favorites'" 
        cta_text="Sign In" cta_url="https://www.bu.edu/library/account/"></bulib-announce>
    `)),d("h3",null,"Banner Dismissal"),d("p",null,"In order to not annoy the user (by presenting them with irrelevant or unwanted information), banner\nmessages can be hidden by being dismissed (by setting them to ",d("inlineCode",{parentName:"p"},"disabled"),")."),d("h4",null,"Manual Override"),d("p",null,"For debugging purposes, this can be done manually - in which case it will ",d("em",{parentName:"p"},"always")," be hidden (",d("inlineCode",{parentName:"p"},'dismissed="true"'),", ",d("inlineCode",{parentName:"p"},"dismissed"),")\nor ",d("em",{parentName:"p"},"always")," shown (",d("inlineCode",{parentName:"p"},'dismissed="false"'),") regardless of what's been saved in the local storage."),d(b,{withToolbar:!0,mdxType:"Preview"},d(r,{name:"dismissed-manual-override",mdxType:"Story"},n`
      <bulib-announce debug code="dismissed-present" dismissed message="'dismissed' is present, but unspecified"></bulib-announce> <hr />
      <bulib-announce debug code="dismissed-true" dismissed="true" message="'dismissed' is present and set to 'true'"></bulib-announce> <hr />
      <bulib-announce debug code="dismissed-false" dismissed="false" message="'dismissed' is present and set to 'false'"></bulib-announce>
    `)),d("p",null,d("em",{parentName:"p"},"NOTE: clicking the DISMISS button will immediately toggle the ",d("inlineCode",{parentName:"em"},"dismiss")," value for the banner, save that value in local storage, and switch that banner's dismissal to manual mode until page is reloaded")),d("h4",null,"Looking at Session Memory (default)"),d("p",null,"By default, we try to remember a user's decision to dismiss a banner for one week (seven days). "),d("p",null,d("em",{parentName:"p"},"NOTE: We 'remember' the user's decision by using the ",d("inlineCode",{parentName:"em"},"src/_helpers/storageUtility")," which reads from ",d("inlineCode",{parentName:"em"},"localStorage"))," "),d(b,{withToolbar:!0,mdxType:"Preview"},d(r,{name:"dismissed-memory",mdxType:"Story"},n`
      <bulib-announce debug severity="info" code="one" message="one"></bulib-announce> <hr />
      <bulib-announce debug severity="warn" code="two" message="two"></bulib-announce> <hr />
      <bulib-announce debug severity="alert" code="three" message="three"></bulib-announce> <hr />
      <bulib-announce debug severity="success" code="four" message="four"></bulib-announce>
    `)),d("h3",null,"Getting Data from the Google Sheets API"),d("p",null,"Often for emergency, convenience, inclusivity of authorship, etc., we want to have an announce-banner without\nhaving to add any additional ",d("inlineCode",{parentName:"p"},"html")," to our sites. "),d("h4",null,"Looking at the Default Code"),d("p",null,"To do this, we add a ",d("inlineCode",{parentName:"p"},"<bulib-announce>")," tag with a particular ",d("inlineCode",{parentName:"p"},"code"),", referring to an entry in our\n",d("a",c({parentName:"p"},{href:"https://docs.google.com/spreadsheets/d/1ElW0CUOV3LvcHuYxK2BZfFjo65a-XDrlNJtnrelA6tM/edit#gid=0"}),"'announcment-banner' spreadsheet"),".\nThis tag sits then asks that spreadsheet for what it should contain every time the page loads, but only shows itself to the user\nwhen the ",d("inlineCode",{parentName:"p"},"show_banner")," is checked ",d("em",{parentName:"p"},"and")," they haven't dismissed it. "),d("p",null,"We'll use the ",d("inlineCode",{parentName:"p"},"testing")," code for this example, since we normally leave that one selected."),d("p",null,"You can see in the example below that when the API variable is set, but the user has already dismissed the banner\nwithin the default expiration, it's still hidden."),d(b,{withToolbar:!0,mdxType:"Preview"},d(r,{name:"sheets-api-default",mdxType:"Story"},n`
      <table>
        <tr>
          <td>debug</td>
          <td><bulib-announce code="testing" message="this will be replaced" debug dismissed></bulib-announce></td>
        </tr>
        <tr>
          <td>no debug</td>
          <td><bulib-announce code="testing" message="this will be replaced" dismissed></bulib-announce></td>
        </tr>
      </table>
    `)),d("h4",null,"Existing Platform Codes"),d("p",null,"By convention, we do this for each of our bigger platforms; adding one of the following tags with it's specified ",d("inlineCode",{parentName:"p"},"code"),"\njust below the header, and letting it wait for when it should be shown. "),d("p",null,"If we wanted to add an announce-banner to the ",d("a",c({parentName:"p"},{href:"https://library.bu.edu/az.php"}),"Database List"),", for example, we'd look\nfor the that entry in the google spreadsheet (",d("inlineCode",{parentName:"p"},"libguides-db")," in this case), and add the following code to the\nheader for that platform."),d("pre",null,d("code",c({parentName:"pre"},{className:"language-html"}),'<bulib-announce code="libguides-db"></bulib-announce>\n')),d("p",null,"We'd then see any of the edits we made in the spreadsheet reflected on every page of that\nplatform (when ",d("inlineCode",{parentName:"p"},"show_banner")," is checked or we have ",d("inlineCode",{parentName:"p"},"debug")," attribute on)."),d("p",null,"Below are all the ",d("inlineCode",{parentName:"p"},"code"),"s that we have pre-prepared for this purpose: "),d(b,{withToolbar:!0,mdxType:"Preview"},d(r,{name:"sheets-api-enumerated",mdxType:"Story"},n`
      <table>
        <thead>
          <th>code</th><th>banner</th>
        </thead>
        <tbody>
          <tr><td>primo-BU</td><td><bulib-announce debug dismissed code="primo-BU"></bulib-announce></td></tr>
          <tr><td>primo</td><td><bulib-announce debug dismissed code="primo"></bulib-announce></td></tr>
          <tr><td>primo-BULAW</td><td><bulib-announce debug dismissed code="primo-BULAW"></bulib-announce></td></tr>
          <tr><td>primo-ISL</td><td><bulib-announce debug dismissed code="primo-ISL"></bulib-announce></td></tr>
          <tr><td>primo-test</td><td><bulib-announce debug dismissed code="primo-test"></bulib-announce></td></tr>
          <tr><td>testing</td><td><bulib-announce debug dismissed code="testing"></bulib-announce></td></tr>
          <tr><td>wordpress</td><td><bulib-announce debug dismissed code="wordpress"></bulib-announce></td></tr>
          <tr><td>libguides</td><td><bulib-announce debug dismissed code="libguides"></bulib-announce></td></tr>
          <tr><td>libcal</td><td><bulib-announce debug dismissed code="libcal"></bulib-announce></td></tr>
          <tr><td>libanswers</td><td><bulib-announce debug dismissed code="libanswers"></bulib-announce></td></tr>
          <tr><td>libanswers-business</td><td><bulib-announce debug dismissed code="libanswers-business"></bulib-announce></td></tr>
          <tr><td>libanswers-spring2020</td><td><bulib-announce debug dismissed code="libanswers-spring2020"></bulib-announce></td></tr>
          <tr><td>all</td><td><bulib-announce debug dismissed code="all"></bulib-announce></td></tr>
        </tbody>
      </table>
    `)),d("h4",null,"Preventing/Disabling the API Call Lookup (debugging)"),d("p",null,"You can use the ",d("inlineCode",{parentName:"p"},"prevent_action")," to stop the call to the Sheets API."),d(b,{withToolbar:!0,mdxType:"Preview"},d(r,{name:"sheets-api-prevented",mdxType:"Story"},n`
      <table>
        <tr>
          <td>debug</td>
          <td><bulib-announce debug code="testing" message="api call prevented by 'prevent_action'" prevent_action></bulib-announce></td>
        </tr>
        <tr>
          <td>no debug</td>
          <td><bulib-announce code="testing"  message="api call prevented by 'prevent_action'" prevent_action></bulib-announce></td>
        </tr>
      </table>
    `)),d("h2",null,"API - Properties"),d(l,{of:"bulib-announce",mdxType:"Props"}))}g.isMDXComponent=!0;const h=e(n`<bulib-announce debug></bulib-announce>`);h.story={},h.story.name="basic",h.story.parameters={mdxSource:"html`<bulib-announce debug></bulib-announce>`"};const y=e(n`
      <bulib-announce debug code="severity-info" severity="info" message="Situation-independent information"></bulib-announce>
      <hr />
      <bulib-announce debug code="severity-success" severity="success" message="A user action has been completed or verified"></bulib-announce>
      <hr />
      <bulib-announce debug code="severity-warn" severity="warn" message="Something is wrong, but it's not an emergency"></bulib-announce>
      <hr />
      <bulib-announce debug code="severity-alert" severity="alert" message="Something is very wrong and needs immediate attention"></bulib-announce>
    `);y.story={},y.story.name="custom-severity",y.story.parameters={mdxSource:'html`\n      <bulib-announce debug code="severity-info" severity="info" message="Situation-independent information"></bulib-announce>\n      <hr />\n      <bulib-announce debug code="severity-success" severity="success" message="A user action has been completed or verified"></bulib-announce>\n      <hr />\n      <bulib-announce debug code="severity-warn" severity="warn" message="Something is wrong, but it\'s not an emergency"></bulib-announce>\n      <hr />\n      <bulib-announce debug code="severity-alert" severity="alert" message="Something is very wrong and needs immediate attention"></bulib-announce>\n    `'};const w=e(n`
      <bulib-announce debug code="signin-cta" severity="info" message="Sign in to view 'My Favorites'" 
        cta_text="Sign In" cta_url="https://www.bu.edu/library/account/"></bulib-announce>
    `);w.story={},w.story.name="custom-signin-cta",w.story.parameters={mdxSource:'html`\n      <bulib-announce debug code="signin-cta" severity="info" message="Sign in to view \'My Favorites\'" \n        cta_text="Sign In" cta_url="https://www.bu.edu/library/account/"></bulib-announce>\n    `'};const v=e(n`
      <bulib-announce debug code="dismissed-present" dismissed message="'dismissed' is present, but unspecified"></bulib-announce> <hr />
      <bulib-announce debug code="dismissed-true" dismissed="true" message="'dismissed' is present and set to 'true'"></bulib-announce> <hr />
      <bulib-announce debug code="dismissed-false" dismissed="false" message="'dismissed' is present and set to 'false'"></bulib-announce>
    `);v.story={},v.story.name="dismissed-manual-override",v.story.parameters={mdxSource:'html`\n      <bulib-announce debug code="dismissed-present" dismissed message="\'dismissed\' is present, but unspecified"></bulib-announce> <hr />\n      <bulib-announce debug code="dismissed-true" dismissed="true" message="\'dismissed\' is present and set to \'true\'"></bulib-announce> <hr />\n      <bulib-announce debug code="dismissed-false" dismissed="false" message="\'dismissed\' is present and set to \'false\'"></bulib-announce>\n    `'};const f=e(n`
      <bulib-announce debug severity="info" code="one" message="one"></bulib-announce> <hr />
      <bulib-announce debug severity="warn" code="two" message="two"></bulib-announce> <hr />
      <bulib-announce debug severity="alert" code="three" message="three"></bulib-announce> <hr />
      <bulib-announce debug severity="success" code="four" message="four"></bulib-announce>
    `);f.story={},f.story.name="dismissed-memory",f.story.parameters={mdxSource:'html`\n      <bulib-announce debug severity="info" code="one" message="one"></bulib-announce> <hr />\n      <bulib-announce debug severity="warn" code="two" message="two"></bulib-announce> <hr />\n      <bulib-announce debug severity="alert" code="three" message="three"></bulib-announce> <hr />\n      <bulib-announce debug severity="success" code="four" message="four"></bulib-announce>\n    `'};const S=e(n`
      <table>
        <tr>
          <td>debug</td>
          <td><bulib-announce code="testing" message="this will be replaced" debug dismissed></bulib-announce></td>
        </tr>
        <tr>
          <td>no debug</td>
          <td><bulib-announce code="testing" message="this will be replaced" dismissed></bulib-announce></td>
        </tr>
      </table>
    `);S.story={},S.story.name="sheets-api-default",S.story.parameters={mdxSource:'html`\n      <table>\n        <tr>\n          <td>debug</td>\n          <td><bulib-announce code="testing" message="this will be replaced" debug dismissed></bulib-announce></td>\n        </tr>\n        <tr>\n          <td>no debug</td>\n          <td><bulib-announce code="testing" message="this will be replaced" dismissed></bulib-announce></td>\n        </tr>\n      </table>\n    `'};const x=e(n`
      <table>
        <thead>
          <th>code</th><th>banner</th>
        </thead>
        <tbody>
          <tr><td>primo-BU</td><td><bulib-announce debug dismissed code="primo-BU"></bulib-announce></td></tr>
          <tr><td>primo</td><td><bulib-announce debug dismissed code="primo"></bulib-announce></td></tr>
          <tr><td>primo-BULAW</td><td><bulib-announce debug dismissed code="primo-BULAW"></bulib-announce></td></tr>
          <tr><td>primo-ISL</td><td><bulib-announce debug dismissed code="primo-ISL"></bulib-announce></td></tr>
          <tr><td>primo-test</td><td><bulib-announce debug dismissed code="primo-test"></bulib-announce></td></tr>
          <tr><td>testing</td><td><bulib-announce debug dismissed code="testing"></bulib-announce></td></tr>
          <tr><td>wordpress</td><td><bulib-announce debug dismissed code="wordpress"></bulib-announce></td></tr>
          <tr><td>libguides</td><td><bulib-announce debug dismissed code="libguides"></bulib-announce></td></tr>
          <tr><td>libcal</td><td><bulib-announce debug dismissed code="libcal"></bulib-announce></td></tr>
          <tr><td>libanswers</td><td><bulib-announce debug dismissed code="libanswers"></bulib-announce></td></tr>
          <tr><td>libanswers-business</td><td><bulib-announce debug dismissed code="libanswers-business"></bulib-announce></td></tr>
          <tr><td>libanswers-spring2020</td><td><bulib-announce debug dismissed code="libanswers-spring2020"></bulib-announce></td></tr>
          <tr><td>all</td><td><bulib-announce debug dismissed code="all"></bulib-announce></td></tr>
        </tbody>
      </table>
    `);x.story={},x.story.name="sheets-api-enumerated",x.story.parameters={mdxSource:'html`\n      <table>\n        <thead>\n          <th>code</th><th>banner</th>\n        </thead>\n        <tbody>\n          <tr><td>primo-BU</td><td><bulib-announce debug dismissed code="primo-BU"></bulib-announce></td></tr>\n          <tr><td>primo</td><td><bulib-announce debug dismissed code="primo"></bulib-announce></td></tr>\n          <tr><td>primo-BULAW</td><td><bulib-announce debug dismissed code="primo-BULAW"></bulib-announce></td></tr>\n          <tr><td>primo-ISL</td><td><bulib-announce debug dismissed code="primo-ISL"></bulib-announce></td></tr>\n          <tr><td>primo-test</td><td><bulib-announce debug dismissed code="primo-test"></bulib-announce></td></tr>\n          <tr><td>testing</td><td><bulib-announce debug dismissed code="testing"></bulib-announce></td></tr>\n          <tr><td>wordpress</td><td><bulib-announce debug dismissed code="wordpress"></bulib-announce></td></tr>\n          <tr><td>libguides</td><td><bulib-announce debug dismissed code="libguides"></bulib-announce></td></tr>\n          <tr><td>libcal</td><td><bulib-announce debug dismissed code="libcal"></bulib-announce></td></tr>\n          <tr><td>libanswers</td><td><bulib-announce debug dismissed code="libanswers"></bulib-announce></td></tr>\n          <tr><td>libanswers-business</td><td><bulib-announce debug dismissed code="libanswers-business"></bulib-announce></td></tr>\n          <tr><td>libanswers-spring2020</td><td><bulib-announce debug dismissed code="libanswers-spring2020"></bulib-announce></td></tr>\n          <tr><td>all</td><td><bulib-announce debug dismissed code="all"></bulib-announce></td></tr>\n        </tbody>\n      </table>\n    `'};const C=e(n`
      <table>
        <tr>
          <td>debug</td>
          <td><bulib-announce debug code="testing" message="api call prevented by 'prevent_action'" prevent_action></bulib-announce></td>
        </tr>
        <tr>
          <td>no debug</td>
          <td><bulib-announce code="testing"  message="api call prevented by 'prevent_action'" prevent_action></bulib-announce></td>
        </tr>
      </table>
    `);C.story={},C.story.name="sheets-api-prevented",C.story.parameters={mdxSource:'html`\n      <table>\n        <tr>\n          <td>debug</td>\n          <td><bulib-announce debug code="testing" message="api call prevented by \'prevent_action\'" prevent_action></bulib-announce></td>\n        </tr>\n        <tr>\n          <td>no debug</td>\n          <td><bulib-announce code="testing"  message="api call prevented by \'prevent_action\'" prevent_action></bulib-announce></td>\n        </tr>\n      </table>\n    `'};const N={title:"Web Components|bulib-announce",parameters:{component:"bulib-announce",options:{selectedPanel:"storybookjs/knobs/panel"}},decorators:[t,i],includeStories:["basic","customSeverity","customSigninCta","dismissedManualOverride","dismissedMemory","sheetsApiDefault","sheetsApiEnumerated","sheetsApiPrevented"]},T={basic:"web-components-bulib-announce--basic","custom-severity":"web-components-bulib-announce--custom-severity","custom-signin-cta":"web-components-bulib-announce--custom-signin-cta","dismissed-manual-override":"web-components-bulib-announce--dismissed-manual-override","dismissed-memory":"web-components-bulib-announce--dismissed-memory","sheets-api-default":"web-components-bulib-announce--sheets-api-default","sheets-api-enumerated":"web-components-bulib-announce--sheets-api-enumerated","sheets-api-prevented":"web-components-bulib-announce--sheets-api-prevented"};N.parameters=N.parameters||{},N.parameters.docs=s({},N.parameters.docs||{},{page:()=>d(a,{mdxStoryNameToId:T},d(g,null))});export default N;export{h as basic,y as customSeverity,w as customSigninCta,v as dismissedManualOverride,f as dismissedMemory,S as sheetsApiDefault,x as sheetsApiEnumerated,C as sheetsApiPrevented};
//# sourceMappingURL=announce-wc.stories-a2c37455.js.map
