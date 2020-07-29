const e=!1,r={"mugar-memorial":{name:"Mugar Memorial Library",short:"Mugar Library",website:"https://www.bu.edu/library/mugar-memorial/",address:["771 Commonwealth Avenue","Boston, MA 02215"],contacts:{phone:"617-353-2700",email:"ask@bu.edu"},social:{facebook:"bostonulibraries",twitter:"bulibraries",instagram:"bulibraries"},hours_url:"https://www.bu.edu/library/mugar-memorial/about/hours/",libcal_lid:1475},"african-studies":{name:"African Studies Library",short:"African Studies",website:"https://www.bu.edu/library/african-studies/",address:["771 Commonwealth Ave, 6th Floor","Boston, MA, 02215"],contacts:{phone:"617-353-3726"},social:{facebook:"BuAfricanStudiesLibrary",flickr:"123460528@N03"},hours_url:"https://www.bu.edu/library/african-studies/about/hours/",libcal_lid:1809},medlib:{name:"Alumni Medical Library",short:"Medical Library",website:"https://medlib.bu.edu/",address:["72 E Concord, L-12","Boston, MA 02118"],contacts:{phone:"617-358-2350",fax:"617-358-2347",email:"refquest@bu.edu"},hours_url:"https://www.bumc.bu.edu/medlib/about-us/hours/"},astronomy:{name:"Astronomy Library",short:"Astronomy Library",website:"https://www.bu.edu/library/astronomy/",address:["725 Commonwealth Avenue","Boston, MA 02445"],contacts:{phone:"617-353-2625"},hours_url:"https://www.bu.edu/library/astronomy/about/hours/",libcal_lid:1784},lawlibrary:{name:"Fineman & Pappas Law Libraries",short:"Law Library",website:"https://www.bu.edu/lawlibrary/",address:["765 Commonwealth Ave, 2nd Floor","Boston, MA 02215"],contacts:{phone:"617-353-8411",text:"1-617-997-4475"},hours_url:"https://www.bu.edu/lawlibrary/using-the-library/access-policy/"},hgar:{name:"Howard Gotlieb Archival Research Center",short:"BU Archive",website:"http://archives.bu.edu/",address:["771 Commonwealth Ave, 5th Floor","Boston, MA 02215"],contacts:{phone:"617-353-3696",fax:"617-353-2838",email:"archives@bu.edu"},social:{facebook:"hgarc",twitter:"BUHGARC"},hours_url:"http://archives.bu.edu/web/guest/about"},music:{name:"Music Library",short:"Music Library",website:"https://www.bu.edu/library/music/",address:["771 Commonwealth Ave, Floor 2","Boston, MA 02215"],contacts:{phone:"617-353-3705",email:"musiclib@bu.edu"},social:{twitter:"BUMusicLib",facebook:"bumusiclib"},hours_url:"https://www.bu.edu/library/music/about/hours/",libcal_lid:1810},pardee:{name:"Pardee Management Library",short:"Pardee Library",website:"https://www.bu.edu/library/management/",address:["595 Commonwealth Avenue","Boston, MA 02215"],contacts:{phone:"617-353-4301",fax:"617-353-4307",email:"pardstf@bu.edu"},social:{twitter:"BUpardeelibrary",facebook:"BUpardeelibrary"},hours_url:"https://www.bu.edu/library/management/about/hours/",libcal_lid:1476},pickering:{name:"Pickering Educational Resources Library",short:"Pickering Library",website:"https://www.bu.edu/library/pickering-educational/",address:["2 Silber Way","Boston, MA 02215"],contacts:{phone:"617-353-3734"},social:{twitter:"BUPickeringLib",facebook:"BUPickeringLibrary"},hours_url:"https://www.bu.edu/library/pickering-educational/about/hours",libcal_lid:1783},sel:{name:"Science & Engineering Library",short:"SciEng Library",website:"https://www.bu.edu/library/sel/",address:["38 Cummington Mall","Boston, MA 02215"],contacts:{phone:"617-353-3733",fax:"617-353-3470"},social:{twitter:"BUSciEngLib",tumblr:"buscienglib",instagram:"buscienglib"},hours_url:"https://www.bu.edu/library/sel/about/hours/",libcal_lid:1477},stone:{name:"Stone Science Library",short:"Stone Library",website:"https://www.bu.edu/library/stone-science/",address:["675 Commonwealth Ave, Floor 2","Boston, MA 02445"],contacts:{phone:"617-353-5679"},hours_url:"https://www.bu.edu/library/stone-science/about/hours/",libcal_lid:1785},theology:{name:"School of Theology Library",short:"Theology Library",website:"https://www.bu.edu/sthlibrary/",address:["745 Commonwealth Ave, Floor 2","Boston, MA 02215"],contacts:{phone:"617-353-3034",fax:"617-358-0698",email:"sthlib@bu.edu"},social:{twitter:"BUSTHLibrary",facebook:"busthlibrary",instagram:"butheologylibrary"},hours_url:"https://www.bu.edu/sthlibrary/for-visitors/directions/"},help:{name:"BU Libraries",short:"BU Libraries",website:"https://www.bu.edu/library",address:["771 Commonwealth Avenue","Boston, MA 02215"],contacts:{phone:"617-353-2700",email:"ask@bu.edu",text:"617-431-2427"},social:{facebook:"bostonulibraries",twitter:"bulibraries",instagram:"bulibraries"},hours_url:"https://www.bu.edu/library/mugar-memorial/about/hours/",libcal_lid:1475}};function i(i){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"help",o=r,u=o[i]||o[s];return t(`getting library_data for code: '${i}' with default '${s}'.`,a),u}function a(r){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,a="about";return a=r.includes("askalibrarian")?"help":r.includes("/disc/")||r.includes("/dioa")?"services":r.includes("open.bu")||r.includes("archives")?"collections":r.includes("guides")?"guides":r.includes("buprimo")||r.includes("exlibrisgroup")||r.includes("primo-explore")?"search":r.includes(".bu.edu/library")?r.includes("/research")?"research":r.includes("/services")?"services":"about":"about",t(`site_code '${a}' extracted from url '${r}'.`,i),a}function s(i){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"help";if(i.includes("archives.bu.edu")&&(s="hgar"),i.includes("bu.edu/library/")){let e=i.split("bu.edu/library/")[1]||"";e=e.split("/")[0],s=e.includes("africa")?"african-studies":e.includes("mugar")?"mugar-memorial":e.includes("med")?"medlib":e.includes("astronom")?"astronomy":e.includes("law")?"lawlibrary":e.includes("music")?"music":e.includes("management")?"pardee":e.includes("pickering")?"pickering":e.includes("sel")?"sel":e.includes("stone")?"stone":e.includes("sth")?"stone":"help"}return i.includes("booking/mugarstudy")?s="mugar-memorial":i.includes("booking/Pickering")&&(s="pickering"),i.includes("maps-floorplans/mugar")&&(s="mugar-memorial",i.includes("mugar-2")?s="music":i.includes("mugar-6")&&(s="african-studies")),i.includes("askalibrarian")&&i.includes("business")&&(s="pardee"),Object.keys(r).includes(s)||(s="help"),t(`lib_code '${s}' from lib_url '${i}'`,a),s}const t=function(e,r){r&&!0===r&&console.log("lib_info_helper) "+e)};export{s as a,a as b,i as g};
//# sourceMappingURL=lib_info_helper-f5ea09c7.js.map
