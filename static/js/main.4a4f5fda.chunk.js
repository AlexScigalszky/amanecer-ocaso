(this["webpackJsonpsol-tres-arroyos"]=this["webpackJsonpsol-tres-arroyos"]||[]).push([[1],{61:function(e,n,t){var r={"./ion-action-sheet.entry.js":[88,7],"./ion-alert.entry.js":[89,8],"./ion-app_8.entry.js":[90,9],"./ion-avatar_3.entry.js":[91,19],"./ion-back-button.entry.js":[92,20],"./ion-backdrop.entry.js":[93,45],"./ion-button_2.entry.js":[94,21],"./ion-card_5.entry.js":[95,22],"./ion-checkbox.entry.js":[96,23],"./ion-chip.entry.js":[97,24],"./ion-col_3.entry.js":[98,46],"./ion-datetime_3.entry.js":[99,12],"./ion-fab_3.entry.js":[100,25],"./ion-img.entry.js":[101,47],"./ion-infinite-scroll_2.entry.js":[102,48],"./ion-input.entry.js":[103,26],"./ion-item-option_3.entry.js":[104,27],"./ion-item_8.entry.js":[105,28],"./ion-loading.entry.js":[106,29],"./ion-menu_3.entry.js":[107,30],"./ion-modal.entry.js":[108,10],"./ion-nav_2.entry.js":[109,16],"./ion-popover.entry.js":[110,11],"./ion-progress-bar.entry.js":[111,31],"./ion-radio_2.entry.js":[112,32],"./ion-range.entry.js":[113,33],"./ion-refresher_2.entry.js":[114,13],"./ion-reorder_2.entry.js":[115,18],"./ion-ripple-effect.entry.js":[116,49],"./ion-route_4.entry.js":[117,34],"./ion-searchbar.entry.js":[118,35],"./ion-segment_2.entry.js":[119,36],"./ion-select_3.entry.js":[120,37],"./ion-slide_2.entry.js":[121,50],"./ion-spinner.entry.js":[122,15],"./ion-split-pane.entry.js":[123,51],"./ion-tab-bar_2.entry.js":[124,38],"./ion-tab_2.entry.js":[125,17],"./ion-text.entry.js":[126,39],"./ion-textarea.entry.js":[127,40],"./ion-toast.entry.js":[128,41],"./ion-toggle.entry.js":[129,14],"./ion-virtual-scroll.entry.js":[130,52]};function s(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],s=n[0];return t.e(n[1]).then((function(){return t(s)}))}s.keys=function(){return Object.keys(r)},s.id=61,e.exports=s},63:function(e,n,t){var r={"./ion-icon.entry.js":[131,67]};function s(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],s=n[0];return t.e(n[1]).then((function(){return t(s)}))}s.keys=function(){return Object.keys(r)},s.id=63,e.exports=s},71:function(e,n,t){},73:function(e,n,t){},84:function(e,n,t){},85:function(e,n,t){var r={"./pwa-action-sheet.entry.js":[135,59],"./pwa-camera-modal-instance.entry.js":[136,60],"./pwa-camera-modal.entry.js":[137,61],"./pwa-camera.entry.js":[138,62],"./pwa-toast.entry.js":[139,63]};function s(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],s=n[0];return t.e(n[1]).then((function(){return t(s)}))}s.keys=function(){return Object.keys(r)},s.id=85,e.exports=s},86:function(e,n,t){"use strict";t.r(n);var r=t(0),s=t.n(r),o=t(32),i=t.n(o),c=t(21),j=t(3),a=t(49),u=t(15),l=t(13),d=(t(71),t(2)),h=function(e){var n=e.hour;return Object(d.jsx)("span",{children:function(e){return new Date(Date.parse(e)).toLocaleString("es-AR",{hour:"numeric",minute:"numeric",second:"numeric"})}(n)})},b=function(e){var n=e.status;return Object(d.jsxs)("small",{children:["servicio:",n?Object(d.jsx)("span",{style:{color:"green"},children:"online"}):Object(d.jsx)("span",{style:{color:"red"},children:"offline"})]})},O=function(){return Object(d.jsx)(j.c,{children:Object(d.jsx)(j.m,{children:Object(d.jsxs)(j.l,{children:["Tres Arroyos ",(new Date).toLocaleDateString()]})})})},f=function(){var e,n=Object(r.useState)(null),t=Object(l.a)(n,2),s=t[0],o=t[1],i=Object(r.useState)(!1),c=Object(l.a)(i,2),a=c[0],u=c[1],f=Object(r.useState)(null),y=Object(l.a)(f,2),x=y[0],v=y[1];return Object(r.useEffect)((function(){fetch("https://api.sunrise-sunset.org/json?lat=-38.376878&lng=-60.275685&date=today&formatted=0").then((function(e){return e.json()})).then((function(e){u(!0),v(e)}),(function(e){u(!0),o(e)}))}),[]),s?Object(d.jsxs)("div",{children:["Error: ",null===s||void 0===s?void 0:s.message]}):a&&x?Object(d.jsxs)(j.f,{children:[Object(d.jsx)(O,{}),Object(d.jsxs)(j.b,{fullscreen:!0,children:[Object(d.jsx)(j.c,{collapse:"condense",children:Object(d.jsx)(j.m,{children:Object(d.jsx)(j.l,{size:"large",children:"Amanecer"})})}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("img",{src:"https://sunrise-sunset.org/sunrise-100px.svg",alt:"sunrise",width:"100"}),Object(d.jsx)("h1",{children:"Amanecer"}),Object(d.jsx)("h1",{children:Object(d.jsx)(h,{hour:null===x||void 0===x||null===(e=x.results)||void 0===e?void 0:e.sunrise})}),Object(d.jsx)(b,{status:"OK"===x.status})]})]})]}):Object(d.jsx)("div",{children:"Loading..."})},y=(t(73),function(){var e,n=Object(r.useState)(null),t=Object(l.a)(n,2),s=t[0],o=t[1],i=Object(r.useState)(!1),c=Object(l.a)(i,2),a=c[0],u=c[1],f=Object(r.useState)(null),y=Object(l.a)(f,2),x=y[0],v=y[1];return Object(r.useEffect)((function(){fetch("https://api.sunrise-sunset.org/json?lat=-38.376878&lng=-60.275685&date=today&formatted=0").then((function(e){return e.json()})).then((function(e){u(!0),v(e)}),(function(e){u(!0),o(e)}))}),[]),s?Object(d.jsxs)("div",{children:["Error: ",null===s||void 0===s?void 0:s.message]}):a&&x?Object(d.jsxs)(j.f,{children:[Object(d.jsx)(O,{}),Object(d.jsxs)(j.b,{fullscreen:!0,children:[Object(d.jsx)(j.c,{collapse:"condense",children:Object(d.jsx)(j.m,{children:Object(d.jsx)(j.l,{size:"large",children:"Ocaso"})})}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("img",{src:"https://sunrise-sunset.org/sunset-100px.svg",alt:"sunrise",width:"100"}),Object(d.jsx)("h1",{children:"Ocaso"}),Object(d.jsx)("h1",{children:Object(d.jsx)(h,{hour:null===x||void 0===x||null===(e=x.results)||void 0===e?void 0:e.sunset})}),Object(d.jsx)(b,{status:"OK"===x.status})]})]})]}):Object(d.jsx)("div",{children:"Loading..."})}),x=(t(74),t(75),t(76),t(77),t(78),t(79),t(80),t(81),t(82),t(83),t(84),function(){return Object(d.jsx)(j.a,{children:Object(d.jsx)(a.a,{children:Object(d.jsxs)(j.k,{children:[Object(d.jsxs)(j.h,{children:[Object(d.jsx)(c.a,{path:"/sunrise",children:Object(d.jsx)(f,{})}),Object(d.jsx)(c.a,{exact:!0,path:"/sunset",children:Object(d.jsx)(y,{})})]}),Object(d.jsxs)(j.i,{slot:"bottom",children:[Object(d.jsxs)(j.j,{tab:"sunrise",href:"/sunrise",children:[Object(d.jsx)(j.d,{icon:u.h}),Object(d.jsx)(j.e,{children:"Amanecer"})]}),Object(d.jsxs)(j.j,{tab:"sunset",href:"/sunset",children:[Object(d.jsx)(j.d,{icon:u.h}),Object(d.jsx)(j.e,{children:"Ocaso"})]})]})]})})})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=function(e){e&&e instanceof Function&&t.e(68).then(t.bind(null,156)).then((function(n){var t=n.getCLS,r=n.getFID,s=n.getFCP,o=n.getLCP,i=n.getTTFB;t(e),r(e),s(e),o(e),i(e)}))},m=t(52);i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),v(),Object(m.a)(window)}},[[86,3,6]]]);
//# sourceMappingURL=main.4a4f5fda.chunk.js.map