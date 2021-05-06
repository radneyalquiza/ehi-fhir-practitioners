(this["webpackJsonpehi-fhir-practitioners"]=this["webpackJsonpehi-fhir-practitioners"]||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c,r=n(0),i=n.n(r),a=n(16),s=n.n(a),o=(n(31),n(18)),u=(n(32),n(26)),l=n(4),d=n(1),j=function(e){e.item;return Object(d.jsx)("div",{className:"profile-detail",children:"item.id"})},f=n(12),h=n(11),p=h.c,b=n(25),m=n(24),v=(n(40),function(e){var t,n,c=e.item;return Object(d.jsxs)("div",{className:"profile-item",children:[Object(d.jsx)("div",{className:"profile-picture",children:Object(d.jsx)(m.a,{icon:b.a})}),Object(d.jsxs)("div",{className:"profile-info",children:[Object(d.jsx)("div",{className:"profile-name",children:null===c||void 0===c||null===(t=c.name)||void 0===t?void 0:t.map((function(e){return Object(d.jsx)("span",{children:e.text},e.text)}))}),Object(d.jsx)("div",{className:"profile-address",children:null===c||void 0===c||null===(n=c.address)||void 0===n?void 0:n.map((function(e,t){var n;return Object(d.jsxs)("div",{children:[null===(n=e.line)||void 0===n?void 0:n.map((function(e){return Object(d.jsx)("span",{children:e})})),Object(d.jsx)("span",{className:"city",children:e.city}),Object(d.jsxs)("span",{className:"postal",children:[",",e.postalCode]})]},t.toString())}))})]})]})}),O=(n(41),function(e){var t=e.list;e.query;return Object(d.jsx)("div",{className:"profile-list",children:t&&t.length?null===t||void 0===t?void 0:t.map((function(e){return console.log(e),Object(d.jsx)(v,{item:e},null===e||void 0===e?void 0:e.id)})):Object(d.jsx)("div",{className:"no-list",children:"No Practitioners Found."})})}),x=n(14),y=n.n(x),N=n(21),g=n(9),B="http://concept01.ehealthexchange.org:52774/hubonfhir/r4/Practitioner",w=function(e){return fetch("".concat(B,"/").concat(e)).then((function(e){return e.json()}))},S=Object(g.b)("profile/fetchByFamilyNameThunk",function(){var e=Object(N.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c=t,fetch("".concat(B,"?family=").concat(c)).then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n.entry);case 4:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}()),k=Object(g.b)("profile/fetchByIDThunk",function(){var e=Object(N.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Y=Object(g.c)({name:"profile",initialState:{defaultQuery:"Kelly",pending:{search:!1}},reducers:{emptyList:function(e){return e.list=void 0}},extraReducers:function(e){e.addCase(S.pending,(function(e){e.pending.search=!0})).addCase(S.fulfilled,(function(e,t){e.pending.search=!1;var n=t.payload;e.list=null===n||void 0===n?void 0:n.map((function(e){return Object(o.a)({},e.resource)}))})),e.addCase(k.pending,(function(e){e.pending.search=!0})).addCase(k.fulfilled,(function(e,t){e.pending.search=!1;var n=t.payload;e.list=[n]}))}}),C=Y.actions.emptyList,A=function(e){return e.profile.defaultQuery},D=function(e){return e.profile.list},E=function(e){return e.profile.pending.search},I=Y.reducer;n(43);!function(e){e[e.BYNAME=0]="BYNAME",e[e.BYID=1]="BYID"}(c||(c={}));var M=function(e){var t=e.defaultQuery,n=e.onSearch,i=Object(r.useState)(t),a=Object(f.a)(i,2),s=a[0],o=a[1],u=Object(r.useState)(c.BYNAME),l=Object(f.a)(u,2),j=l[0],p=l[1],b=Object(h.b)(),m=function(e){o(""),b(C()),p(e)};return Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault(),e.stopPropagation(),s||""===s?j===c.BYNAME?b(S(s)):b(k(s)):b(C)},children:Object(d.jsxs)("div",{className:"search",children:[Object(d.jsxs)("div",{className:"by-actions",children:[Object(d.jsx)("button",{type:"button",className:"toggle-byname",onClick:function(){return m(c.BYNAME)},children:"By Family Name"}),Object(d.jsx)("button",{type:"button",className:"toggle-byid",onClick:function(){return m(c.BYID)},children:"By ID"})]}),Object(d.jsx)("input",{type:"text",value:s,onChange:function(e){var t=e.target.value;o(t),n(t)}}),Object(d.jsx)("button",{type:"submit",className:"perform-search",children:j===c.BYNAME?"Search Name":"Search ID"})]})})},P=(n(44),function(){var e=p(A),t=p(D),n=p(E),c=Object(r.useState)(e),i=Object(f.a)(c,2),a=(i[0],i[1]);return Object(d.jsxs)("div",{className:"main-profile",children:[Object(d.jsx)(M,{defaultQuery:e,onSearch:function(e){return a(e)}}),n?Object(d.jsx)("div",{className:"loader",children:"Loading"}):Object(d.jsx)(O,{list:t})]})});var Q=function(){return Object(d.jsx)(u.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{children:Object(d.jsx)("h2",{children:"Practitioners"})}),Object(d.jsx)("div",{className:"main-sections",children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/",exact:!0,component:P}),Object(d.jsx)(l.a,{path:"/profile",render:function(e){return Object(d.jsx)(j,Object(o.a)({},e))}})]})})]})})},F=Object(g.a)({reducer:{profile:I}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(h.a,{store:F,children:Object(d.jsx)(Q,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.112811f6.chunk.js.map