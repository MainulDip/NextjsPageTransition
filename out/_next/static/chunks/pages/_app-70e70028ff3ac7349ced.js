_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),c=n("rePB"),i=n("q1tI"),o=(n("H/sG"),n("YFqc")),a=n.n(o),u=n("94VV"),s=n.n(u),f=function(){return Object(r.jsx)("nav",{className:s.a.nav,children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(a.a,{href:"/",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)(a.a,{href:"/about",children:"About"})})]})})},l=n("fzO5"),j=n.n(l),d=function(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("h1",{className:j.a.title,children:["Seameless ",Object(r.jsx)("span",{children:"Page"})," Transition"]}),Object(r.jsx)("p",{className:j.a.description,children:"Smooth Experience"})]})},b=n("WnY7"),O=n.n(b),p=function(e){var t=e.children;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(f,{}),Object(r.jsx)("div",{className:O.a.container,children:Object(r.jsxs)("main",{className:O.a.main,children:[Object(r.jsx)(d,{}),t]})})]})},m=n("mrSG"),v=n("2jHN");var _=n("c8Wq"),h=n("J4/h"),x=0;function y(){var e=x;return x++,e}var E=function(e){var t=e.children,n=e.initial,r=e.isPresent,c=e.onExitComplete,o=e.custom,a=e.presenceAffectsLayout,u=Object(h.a)(w),s=Object(h.a)(y),f=Object(i.useMemo)((function(){return{id:s,initial:n,isPresent:r,custom:o,onExitComplete:function(e){u.set(e,!0);var t=!0;u.forEach((function(e){e||(t=!1)})),t&&(null===c||void 0===c||c())},register:function(e){return u.set(e,!1),function(){return u.delete(e)}}}}),a?void 0:[r]);return Object(i.useMemo)((function(){u.forEach((function(e,t){return u.set(t,!1)}))}),[r]),i.useEffect((function(){!r&&!u.size&&(null===c||void 0===c||c())}),[r]),i.createElement(_.a.Provider,{value:f},t)};function w(){return new Map}var P=n("10wF");function g(e){return e.key||""}var L=function(e){var t=e.children,n=e.custom,r=e.initial,c=void 0===r||r,o=e.onExitComplete,a=e.exitBeforeEnter,u=e.presenceAffectsLayout,s=void 0===u||u,f=function(){var e=Object(i.useRef)(!1),t=Object(m.c)(Object(i.useState)(0),2),n=t[0],r=t[1];return Object(v.a)((function(){return e.current=!0})),Object(i.useCallback)((function(){!e.current&&r(n+1)}),[n])}(),l=Object(i.useContext)(P.b);Object(P.c)(l)&&(f=l.forceUpdate);var j=Object(i.useRef)(!0),d=function(e){var t=[];return i.Children.forEach(e,(function(e){Object(i.isValidElement)(e)&&t.push(e)})),t}(t),b=Object(i.useRef)(d),O=Object(i.useRef)(new Map).current,p=Object(i.useRef)(new Set).current;if(function(e,t){e.forEach((function(e){var n=g(e);t.set(n,e)}))}(d,O),j.current)return j.current=!1,i.createElement(i.Fragment,null,d.map((function(e){return i.createElement(E,{key:g(e),isPresent:!0,initial:!!c&&void 0,presenceAffectsLayout:s},e)})));for(var _=Object(m.e)([],Object(m.c)(d)),h=b.current.map(g),x=d.map(g),y=h.length,w=0;w<y;w++){var L=h[w];-1===x.indexOf(L)?p.add(L):p.delete(L)}return a&&p.size&&(_=[]),p.forEach((function(e){if(-1===x.indexOf(e)){var t=O.get(e);if(t){var r=h.indexOf(e);_.splice(r,0,i.createElement(E,{key:g(t),isPresent:!1,onExitComplete:function(){O.delete(e),p.delete(e);var t=b.current.findIndex((function(t){return t.key===e}));b.current.splice(t,1),p.size||(b.current=d,f(),o&&o())},custom:n,presenceAffectsLayout:s},t))}}})),_=_.map((function(e){var t=e.key;return p.has(t)?e:i.createElement(E,{key:g(e),isPresent:!0,presenceAffectsLayout:s},e)})),b.current=_,i.createElement(i.Fragment,null,p.size?_:_.map((function(e){return Object(i.cloneElement)(e)})))},k=n("ATyU");function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H={initial:{y:60,opacity:0},animate:{y:0,opacity:1,transition:{duration:.5,ease:[.6,-.05,.01,.99]}},exit:{y:-10,opacity:0}};t.default=function(e){var t=e.Component,n=e.pageProps,c=e.router;return Object(r.jsx)(p,{children:Object(r.jsx)(L,{exitBeforeEnter:!0,children:Object(r.jsx)(k.a.div,{variants:H,initial:"initial",animate:"animate",exit:"exit",children:Object(i.createElement)(t,C(C({},n),{},{key:c.route}))},c.route)})})}},"94VV":function(e,t,n){e.exports={nav:"Nav_nav__3Zjf-"}},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},"H/sG":function(e,t,n){},WnY7:function(e,t,n){e.exports={container:"Layout_container__1SPwL",main:"Layout_main__cgm7e",footer:"Layout_footer__3-iLi",code:"Layout_code__38HR2",grid:"Layout_grid__FkDnA",card:"Layout_card__22JHt",logo:"Layout_logo__3Y-jx"}},fzO5:function(e,t,n){e.exports={title:"Header_title__1vi4d",description:"Header_description__1lhe1"}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}},[[0,0,1,2,3]]]);