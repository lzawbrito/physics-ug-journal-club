(this["webpackJsonpphysics-ug-journal-club"]=this["webpackJsonpphysics-ug-journal-club"]||[]).push([[0],{113:function(e,t,n){},114:function(e,t,n){},121:function(e,t,n){},162:function(e,t,n){},165:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n.n(a),r=n(94),i=n.n(r),c=(n(113),n(106)),o=(n.p,n(114),n(10)),l=n(31),u=n(8),d=n(15),h=n(11),j=n(12),b=n(23),p=(n(54),n(2)),m=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{className:"pageTitle",children:"Welcome to Brown's Undergraduate Physics Journal Club!"}),Object(p.jsx)(b.a,{children:"\n### What is Journal Club?\nJournal club is an organization designed to equip undergraduate students \n(particularly first and second years) with the tools they need to engage\nwith modern research and find research opportunities at Brown or beyond. We\nbegin from the very basics (what are the basic branches of physics?) and teach\nskills like how to navigate the arXiv, LaTeX, and Python, alongside more\nphysics-oriented talks by Brown students, faculty, and friends. Foundationally,\nour goals are to make physics research more inclusive by making skills that are\noften simply assumed in research environments easier to access. Starting\nresearch can be daunting, and courses don't always teach the non-physics skills\nyou need (and rarely do they teach *all* the physics skills you need), so both of\nus felt the need for an organization that was dedicated to bridging this gap.\n\n### Where and when does Journal Club meet?\nJournal Club meets every other Wednesday at 6 PM. Locations are announced on a \nmeeting-by-meeting basis via our mailing list, but we try to stick to Barus &\nHolley lecture halls.\n\n### How do I join Journal Club?\nEmail Lucas at [lucas_brito@brown.edu](mailto:lucas_brito@brown.edu) to \nbe added to our mailing list. \n\n### Where can I view past meetings' materials?\nSee [Notes/Slides](#/notes-slides)!\n\n### I'm interested in learning a specific topic... \nYou can check [Notes/Slides](#/notes-slides) to see what we've gone over so far.\nIf you can't find what you're looking for, you can [Request a Topic](#/request)!\n"})]})}}]),n}(s.a.Component),O=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{className:"pageTitle",children:"About Journal Club"}),Object(p.jsx)(b.a,{children:"\n### Co-Heads\n**Alex Jacoby** ([alex_jacoby@brown.edu](mailto:alex_jacoby@brown.edu)):\n\n**Lucas Brito** ([lucas_brito@brown.edu](mailto:lucas_brito@brown.edu)): Lucas \nis a sophomore concentrating in Mathematical Physics and Computer Science. \nHe has done research in observational cosmology, computational biophysics, \nand most recently in computational condensed matter physics. Outside of physics, \nhe is interested in songwriting, hardcore punk, skateboarding, and philosophy.\nHe also manages this site, so if you have any suggestions please reach out to\nhim!\n\n### Past Co-Heads \n**Adam Tropper**: Adam co-founded the club in 2020. He is an NSF Graduate \nResearch Fellow and is currently studying high energy as a PhD candidate at \nHarvard. During his time at Brown, Adam worked with Professor JiJi Fan on \nvarious applications of random matrix theory to physics beyond the standard \nmodel, both in the context of the mass generation via the Higgs mechanism and \nearly universe cosmology. Outside of physics, Adam enjoys cooking, listening to \nmusic, and spending time outdoors. \n"})]})}}]),n}(s.a.Component),x=n(35),f=n.n(x),y=n(67),g=[{date:"10/20",topic:"Python Crash Course",notes:{id:"python-crash-course",file:n.p+"static/media/python-crash-course.a8e0fa6b.md"}},{date:"10/6",topic:"Introduction",slides:{file:n.p+"static/media/meeting1.78c51e83.pdf"}}];function v(e){return k.apply(this,arguments)}function k(){return(k=Object(y.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n="",e.t0=f.a.keys(g);case 2:if((e.t1=e.t0()).done){e.next=11;break}if(a=e.t1.value,g[a].hasOwnProperty("notes")){e.next=6;break}return e.abrupt("continue",2);case 6:if(g[a].notes.id!==t){e.next=9;break}return e.next=9,fetch(g[a].notes.file).then((function(e){return e.text()})).then((function(e){return n=e}));case 9:e.next=2;break;case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(121);var w=n(44),N=n(43),C=n(42),S=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={externalData:null},e.notes=null,e}return Object(d.a)(n,[{key:"componentWillMount",value:function(){for(var e in g)g[e].hasOwnProperty("notes")&&g[e].notes.id===this.props.id&&(this.notes=g[e])}},{key:"componentDidMount",value:function(){var e=Object(y.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(this.props.id);case 2:t=e.sent,this.setState({externalData:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return null===this.state.externalData?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("p",{children:"Loading notes..."})}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(b.a,{remarkPlugins:[w.a,C.a],rehypePlugins:[N.a],linkTarget:"_target",children:this.state.externalData})})}}]),n}(s.a.Component);function F(e){return null==e?"N/A":Object(p.jsx)("a",{target:"_blank",href:e.file,children:"View"})}var P=g.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.date}),Object(p.jsx)("td",{children:e.topic}),Object(p.jsx)("td",{children:(t=e.notes,null==t?"N/A":Object(p.jsx)(l.b,{to:"/notes-slides/".concat(t.id),children:"Read"}))}),Object(p.jsx)("td",{children:F(e.slides)})]});var t})),T=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{className:"pageTitle",children:"Notes/Slides"}),Object(p.jsx)(b.a,{children:"\nHere you can find notes and/or slides from previous meetings. \n"}),Object(p.jsxs)("table",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Date"}),Object(p.jsx)("th",{children:"Topic"}),Object(p.jsx)("th",{children:"Notes"}),Object(p.jsx)("th",{children:"Slides"})]}),P]})]})}}]),n}(s.a.Component),J=[{name:"Home",link:"/"},{name:"Notes/Slides",link:"/notes-slides"},{name:"Request a Topic",link:"/request"},{name:"About",link:"/about"}];var H=J.map((function(e){return Object(p.jsx)("div",{className:"navItem",children:Object(p.jsx)(l.c,{exact:!0,to:e.link,className:"navUnselected",activeClassName:"navSelected",children:e.name})})})),A=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"sideNav",children:H})})}}]),n}(s.a.Component),B=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;var t=J.map((function(t){return n=t,a=e.props.closeNav,Object(p.jsx)("span",{children:Object(p.jsx)(l.b,{to:n.link,onClick:a,className:"mobileNavUnselected",exact:!0,children:n.name})});var n,a}));return Object(p.jsxs)("div",{className:"mobileSideNav",style:{width:this.props.width},children:[Object(p.jsx)("a",{className:"mobileNavUnselected",onClick:this.props.closeNav,style:{cursor:"pointer",paddingBottom:"10px"},children:"(X)"}),t]})}}]),n}(s.a.Component),D=(n(144),n(162),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{children:Object(p.jsxs)("form",{action:"https://formspree.io/f/xgerbzea",method:"POST",children:[Object(p.jsx)("label",{children:"Name (Optional) "}),Object(p.jsx)("input",{type:"text",id:"name",name:"name",placeholder:"Your name."}),Object(p.jsx)("label",{children:"Email (Optional) "}),Object(p.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Your email."}),Object(p.jsx)("label",{children:"Topic"}),Object(p.jsx)("textarea",{id:"message",name:"message",placeholder:"Write something..."}),Object(p.jsx)("input",{type:"submit",value:"Submit"})]})})})}}]),n}(s.a.Component)),q=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{className:"pageTitle",children:"Request a Topic"}),Object(p.jsx)(b.a,{children:"Here you can request a topic for us to go over in a Journal \nClub meeting!"}),Object(p.jsx)(D,{})]})}}]),n}(s.a.Component);n(166);var I=g.map((function(e){return null!=e.notes?Object(p.jsx)(o.a,{path:"/notes-slides/".concat(e.notes.id),component:function(){return Object(p.jsx)(S,{id:"".concat(e.notes.id)})}}):Object(p.jsx)(p.Fragment,{})}));var L=function(){var e=Object(a.useState)("0%"),t=Object(c.a)(e,2),n=t[0],s=t[1];return Object(p.jsx)(l.a,{children:Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("body",{children:[Object(p.jsxs)("div",{className:"mobileHeaderContainer",children:[Object(p.jsx)("div",{className:"sideNavButton",onClick:function(){return s("180px")},children:"\u2630"}),Object(p.jsx)("div",{className:"mobileSiteTitle",children:"Phys UG Journal Club"})]}),Object(p.jsxs)("div",{className:"sideBar",children:[Object(p.jsx)("div",{className:"headerContainer",children:"Physics Undergraduate Journal Club"}),Object(p.jsx)(A,{})]}),Object(p.jsx)(B,{width:n,closeNav:function(){return s("0%")}}),Object(p.jsx)("div",{className:"content",children:Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{exact:!0,path:"/notes-slides",children:Object(p.jsx)(T,{})}),Object(p.jsx)(o.a,{exact:!0,path:"/about",children:Object(p.jsx)(O,{})}),Object(p.jsx)(o.a,{exact:!0,path:"/request",children:Object(p.jsx)(q,{})}),Object(p.jsx)(o.a,{exact:!0,path:"/",children:Object(p.jsx)(m,{})}),I]})})]})})})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,179)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))};i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(L,{})}),document.getElementById("root")),W()}},[[165,1,2]]]);
//# sourceMappingURL=main.eb48a2a8.chunk.js.map