(this["webpackJsonpreact-redux-counter"]=this["webpackJsonpreact-redux-counter"]||[]).push([[0],{50:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(4),r=(n(0),n(12)),c=n.n(r),i=(n(50),n(78)),o=n(79),s=n(32),l=n(76),u=Object(l.a)((function(e){return{root:Object(s.a)({display:"flex","& > *":{margin:"auto",width:e.spacing(100),height:e.spacing(100)}},e.breakpoints.up("lg"),{paddingTop:e.spacing(10)}),myH2:{display:"flex",justifyContent:"center",textAlign:"center",backgroundColor:"silver"},myH3:{display:"flex",justifyContent:"center",textAlign:"center",paddingTop:"100px"},myIcons:{display:"flex",justifyContent:"center",backgroundColor:"orange"},btnGroup:{display:"flex !important",justifyContent:"center !important",paddingTop:"50px !important"},btnMinus:{backgroundColor:"red !important",color:"white !important"},btnPlus:{backgroundColor:"green !important",color:"white !important"},btnSubmit:{fontSize:"16px !important",backgroundColor:"orange !important",color:"white !important"},badge:{border:"2px solid ".concat(e.palette.background.paper),padding:"0 4px"},headBadge:{display:"flex !important",justifyContent:"center !important",margin:"auto !important"}}})),d=n(82),b=n(59),j=n(36),p=n.n(j),m=n(35),g=n.n(m),h=n(80),x=n(34),O=n.n(x),f=n(81),y=n(16),N=function(){var e=Object(y.c)((function(e){return e.counter})),t=Object(y.c)((function(e){return e.login})),n=Object(y.b)(),r=u();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:r.root,children:Object(a.jsxs)(i.a,{variant:"outlined",square:!0,children:[Object(a.jsx)("div",{className:r.myIcons,children:Object(a.jsx)("img",{src:"https://img.icons8.com/color/96/000000/redux.png"})}),Object(a.jsx)(o.a,{variant:"h2",className:r.myH2,children:"Redux is easier, than you think!"}),Object(a.jsx)(o.a,{variant:"h3",className:r.myH3,children:"Counter!"}),Object(a.jsx)(h.a,{"aria-label":"cart",className:r.headBadge,children:Object(a.jsxs)(f.a,{className:r.badge,color:"secondary",children:[e,"  \xa0",Object(a.jsx)(O.a,{})]})}),Object(a.jsxs)(d.a,{className:r.btnGroup,children:[Object(a.jsx)(b.a,{className:r.btnMinus,"aria-label":"reduce",onClick:function(){return n({type:"DECREMENT"})},children:Object(a.jsx)(g.a,{fontSize:"small"})}),Object(a.jsx)(b.a,{className:r.btnPlus,"aria-label":"increase",onClick:function(){return n({type:"INCREMENT"})},children:Object(a.jsx)(p.a,{fontSize:"small"})})]}),Object(a.jsx)(d.a,{className:r.btnGroup,children:Object(a.jsx)(b.a,{className:r.btnSubmit,onClick:function(){return n({type:"LOGIN"})},children:"Login"})}),t?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(o.a,{variant:"h4",className:r.myH3,children:"You are logged in!"})}):null]})})})},v=Object(l.a)((function(){return{myPage:{background:"black",height:"100vh"}}}));var E=function(){var e=v();return Object(a.jsx)("div",{className:e.myPage,children:Object(a.jsx)(N,{})})},C=n(13),k=Object(C.b)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return!e;default:return e}}}),w=Object(C.c)(k,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());w.subscribe((function(){return console.log(w.getState())})),c.a.render(Object(a.jsx)(y.a,{store:w,children:Object(a.jsx)(E,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.5a239cc9.chunk.js.map