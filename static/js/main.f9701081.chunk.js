(this["webpackJsonpgithub-repo-finder"]=this["webpackJsonpgithub-repo-finder"]||[]).push([[0],{110:function(e,t,n){"use strict";n.r(t);var r=n(13),c=n.n(r),a=(n(80),n(0)),i=n(7),s=n(34),o=n(25),j=n(136),u=n(30),l=n.n(u),h=n(44),b=n(45),d=n.n(b);function p(){return(p=Object(h.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d.a.get("https://api.github.com/users/".concat(t),{headers:{Authorization:"token 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"}}),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(h.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d.a.get("https://api.github.com/users/".concat(t,"/repos"),{headers:{Authorization:"token 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"}}),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=n(141),f=n(131),x=n(132),m=n(2),v=function(){return Object(m.jsx)(g.a,{children:Object(m.jsx)(f.a,{position:"static",children:Object(m.jsx)(x.a,{align:"center",variant:"h6",color:"inherit",children:"Welcome to Git hub Repositories Finder app"})})})},w=n(143),y=n(133),k={user:{marginTop:10},avatar:{height:"100px",width:"100px"},reposTitle:{marginTop:30},repos:{marginLeft:100,marginBottom:50,marginRight:50},stars:{paddingRight:20}},N=n(64),F=n(145),I=function(e){return Object(m.jsx)(F.a,Object(N.a)({alignItems:"center",component:"a"},e))},S=Object(y.a)(k),T=function(){var e=S(),t=Object(i.f)().userId;return Object(m.jsxs)(g.a,{className:e.user,alignItems:"center",justifyContent:"center",flexDirection:"row",display:"flex",children:[Object(m.jsx)(w.a,{className:e.avatar,alt:"Remy Sharp",src:"https://avatars.githubusercontent.com/".concat(t)}),Object(m.jsx)(x.a,{variant:"h3",align:"center",display:"inline",children:Object(m.jsx)(I,{align:"center",href:"https://www.github.com/".concat(t),target:"_blank",children:t})})]})},D=n(134),L=n(135),R=Object(y.a)(k),z=function(e){var t=e.repositories,n=void 0===t?[]:t,r=R();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g.a,{className:r.reposTitle,alignItems:"center",alignContent:"center",children:Object(m.jsx)(x.a,{color:"primary",align:"center",variant:"h4",children:"@Repositories@"})}),Object(m.jsx)(g.a,{className:r.repos,flexDirection:"row",display:"flex",flexWrap:"wrap",children:null===n||void 0===n?void 0:n.map((function(e){return Object(m.jsx)(g.a,{m:0,p:0,children:Object(m.jsx)(I,{href:"http://www.github.com/".concat(e.full_name),target:"_blank",children:Object(m.jsx)(D.a,{children:Object(m.jsxs)(L.a,{children:[Object(m.jsx)(x.a,{variant:"h5",color:"textPrimary",children:e.name?"Repository Name : ".concat(e.name):"Repository Name : No Repo name found"}),Object(m.jsx)(x.a,{variant:"h6",children:e.description?"Description : ".concat(e.description):"Description : No Discription found"}),Object(m.jsxs)(g.a,{children:[Object(m.jsx)(x.a,{display:"inline",variant:"body2",className:r.stars,children:e.stargazers_count?"Stars : ".concat(e.stargazers_count):"Stars : No Stars"}),Object(m.jsx)(x.a,{display:"inline",variant:"body2",component:"p",children:e.language?"Langueage'(s)  : ".concat(e.language):"Langueage'(s) : No Languages"})]})]})})})},e.id)}))})]})},C=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)([]),s=Object(o.a)(i,2),u=s[0],l=s[1],h=function t(){(function(e){return O.apply(this,arguments)})(e.user).then((function(e){l(e.data),c(!0),setTimeout(t,15e3)})).catch((function(){l([]),c(!0)}))};return Object(a.useEffect)((function(){e.user&&h()}),[e.user]),r?Object(m.jsx)(m.Fragment,{children:u.length>0?Object(m.jsx)(z,{repositories:u}):Object(m.jsx)(m.Fragment,{children:"No repositories found for given user"})}):Object(m.jsx)(g.a,{children:Object(m.jsx)(j.a,{})})},_=n(140),V=n(138),A=n(139),J=n(63),Q=n.n(J),q=n(137),B=n(142),E=Object(y.a)((function(){return{transitionTop:{position:"fixed",bottom:20,right:20}}}));function P(e){var t=e.children,n=e.window,r=E(),c=Object(q.a)({target:n?n():void 0,disableHysteresis:!0,threshold:100});return Object(m.jsx)(B.a,{in:c,children:Object(m.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:r.transitionTop,children:t})})}var K=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),s=Object(o.a)(c,2),u=s[0],l=s[1],h=Object(i.f)().userId;return Object(a.useEffect)((function(){(function(e){return p.apply(this,arguments)})(h).then((function(e){l(e.data),r(!0)})).catch((function(){r(!0),l(null)}))}),[h]),n?Object(m.jsx)(m.Fragment,{children:u?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(v,{}),Object(m.jsx)(V.a,{id:"back-to-top-anchor"}),Object(m.jsx)(T,{}),Object(m.jsx)(C,{user:u.login}),Object(m.jsx)(P,{children:Object(m.jsx)(A.a,{color:"secondary",size:"small",children:Object(m.jsx)(Q.a,{})})})]}):Object(m.jsxs)(g.a,{alignItems:"center",justifyContent:"center",flexDirection:"row",display:"flex",children:[Object(m.jsx)(_.a,{variant:"circle",width:80,height:80}),Object(m.jsx)(_.a,{width:150,height:50,children:"No such user found"})]})}):Object(m.jsx)(j.a,{})};var W=function(){return Object(m.jsx)(s.a,{children:Object(m.jsx)(i.c,{children:Object(m.jsx)(i.a,{path:"/:userId",children:Object(m.jsx)(K,{})})})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,147)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};c.a.render(Object(m.jsx)(W,{}),document.getElementById("root")),G()},80:function(e,t,n){}},[[110,1,2]]]);
//# sourceMappingURL=main.f9701081.chunk.js.map