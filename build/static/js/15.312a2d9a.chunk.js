(this["webpackJsonpsol-tres-arroyos"]=this["webpackJsonpsol-tres-arroyos"]||[]).push([[15],{122:function(r,e,t){"use strict";t.r(e),t.d(e,"ion_spinner",(function(){return o}));var n=t(12),i=t(14),s=t(141),a=t(145),o=function(){function r(r){Object(n.o)(this,r),this.paused=!1}return r.prototype.getName=function(){var r=this.name||i.c.get("spinner"),e=Object(i.b)(this);return r||("ios"===e?"lines":"circular")},r.prototype.render=function(){var r,e=this,t=Object(i.b)(e),o=e.getName(),f=a.a[o]||a.a.lines,u="number"===typeof e.duration&&e.duration>10?e.duration:f.dur,p=[];if(void 0!==f.circles)for(var m=0;m<f.circles;m++)p.push(c(f,u,m,f.circles));else if(void 0!==f.lines)for(m=0;m<f.lines;m++)p.push(l(f,u,m,f.lines));return Object(n.j)(n.c,{class:Object(s.a)(e.color,(r={},r[t]=!0,r["spinner-"+o]=!0,r["spinner-paused"]=!!e.paused||i.c.getBoolean("_testing"),r)),role:"progressbar",style:f.elmDuration?{animationDuration:u+"ms"}:{}},p)},r}(),c=function(r,e,t,i){var s=r.fn(e,t,i);return s.style["animation-duration"]=e+"ms",Object(n.j)("svg",{viewBox:s.viewBox||"0 0 64 64",style:s.style},Object(n.j)("circle",{transform:s.transform||"translate(32,32)",cx:s.cx,cy:s.cy,r:s.r,style:r.elmDuration?{animationDuration:e+"ms"}:{}}))},l=function(r,e,t,i){var s=r.fn(e,t,i);return s.style["animation-duration"]=e+"ms",Object(n.j)("svg",{viewBox:s.viewBox||"0 0 64 64",style:s.style},Object(n.j)("line",{transform:"translate(32,32)",y1:s.y1,y2:s.y2}))};o.style=":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;-webkit-transform-origin:center;transform-origin:center;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}[dir=rtl] svg,:host-context([dir=rtl]) svg{left:unset;right:unset;right:0}[dir=rtl] svg,:host-context([dir=rtl]) svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular){-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}"},141:function(r,e,t){"use strict";t.d(e,"a",(function(){return s})),t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return i})),t.d(e,"d",(function(){return c}));var n=t(1),i=function(r,e){return null!==e.closest(r)},s=function(r,e){var t;return"string"===typeof r&&r.length>0?Object.assign(((t={"ion-color":!0})["ion-color-"+r]=!0,t),e):e},a=function(r){var e={};return function(r){return void 0!==r?(Array.isArray(r)?r:r.split(" ")).filter((function(r){return null!=r})).map((function(r){return r.trim()})).filter((function(r){return""!==r})):[]}(r).forEach((function(r){return e[r]=!0})),e},o=/^[a-z][a-z0-9+\-.]*:/,c=function(r,e,t,i){return Object(n.a)(void 0,void 0,void 0,(function(){var s;return Object(n.c)(this,(function(n){return null!=r&&"#"!==r[0]&&!o.test(r)&&(s=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,s.push(r,t,i)]):[2,!1]}))}))}},145:function(r,e,t){"use strict";t.d(e,"a",(function(){return n}));var n={bubbles:{dur:1e3,circles:9,fn:function(r,e,t){var n=r*e/t-r+"ms",i=2*Math.PI*e/t;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:function(r,e,t){var n=e/t,i=r*n-r+"ms",s=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(r,e){return{r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(r,e,t){return{y1:17,y2:29,style:{transform:"rotate("+(30*e+(e<6?180:-180))+"deg)","animation-delay":r*e/t-r+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(r,e,t){return{y1:12,y2:20,style:{transform:"rotate("+(30*e+(e<6?180:-180))+"deg)","animation-delay":r*e/t-r+"ms"}}}}}}}]);
//# sourceMappingURL=15.312a2d9a.chunk.js.map