(this.webpackJsonpwatcher=this.webpackJsonpwatcher||[]).push([[0],{108:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),s=c(31),r=c.n(s),o=(c(37),c(7)),i=c.n(o),u=c(12),l=c(5),j=c.p+"static/media/logo.6ce24c58.svg",b=(c(39),c(8)),O=c.n(b),f=c(32),d=c(13),h=c(0),p=Object(d.create)({baseURL:"",headers:{Accept:"application/vnd.github.v3+json"}}),g=function(){var t=Object(n.useState)(!0),e=Object(l.a)(t,2),c=e[0],a=e[1],s=Object(n.useState)(null),r=Object(l.a)(s,2),o=r[0],j=r[1],b=Object(n.useState)({lat:"33.6461432",lng:"73.0523224"}),f=Object(l.a)(b,2),d=f[0],g=f[1],v=function(t){var e=t.coords.latitude,c=t.coords.longitude;g({lat:e,lng:c}),a(!1)},x=function(){a(!1)},S=function(){var t=Object(u.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.get("https://api.sunrise-sunset.org/json?lat=".concat(d.lat,"&lng=").concat(d.lng,"&date=today"));case 2:(e=t.sent).ok&&j(e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();if(Object(n.useEffect)((function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(v,x)}),[]),Object(n.useEffect)((function(){S()}),[d]),!o||c)return null;var w=function(t){var e=O()().format("Y-M-D"),c=O.a.utc(e+" "+t,"Y-M-D HH:mm:ss:A").local();return c.format("LTS")+" (".concat(c.fromNow(),")")};return Object(h.jsxs)("div",{children:[Object(h.jsxs)("h2",{style:m,children:["Sunrise: ",Object(h.jsxs)("b",{children:[w(o.sunrise)," "]})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("h2",{style:m,children:["Sunset: ",Object(h.jsx)("b",{children:w(o.sunset)})]})]})},m={fontWeight:"normal",fontSize:"calc(22px + 1vmin)"};Object(d.create)({baseURL:"",headers:{Accept:"application/vnd.github.v3+json"}});var v=function(){var t=Object(n.useState)(null),e=Object(l.a)(t,2),c=(e[0],e[1],Object(n.useState)(null)),a=Object(l.a)(c,2),s=(a[0],a[1],Object(n.useState)(null)),r=Object(l.a)(s,2),o=(r[0],r[1],Object(n.useState)(O()())),i=Object(l.a)(o,2),u=i[0],b=i[1],d=Object(n.useState)(""),p=Object(l.a)(d,2),m=p[0],v=(p[1],Object(n.useState)(!1)),x=Object(l.a)(v,2),S=x[0];return x[1],Object(n.useEffect)((function(){var t;return t=setInterval((function(){var t=O()();b(t)}),1e3),function(){clearTimeout(t)}}),[]),Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("h1",{children:u.format("LTS")}),Object(h.jsxs)("h3",{children:[u.format("LL")," ",S&&Object(h.jsx)("img",{style:{marginTop:5,position:"absolute"},src:j,className:"App-logo",alt:"logo"}),Object(h.jsx)(g,{})]}),Object(h.jsx)("code",{style:{color:"red"},children:m}),Object(h.jsxs)("p",{style:{fontSize:12},children:["Powered by gamingumar.com | whilegeek.com | umar.tech \xa9"," ",u.format("Y")," | v",f.a]})]})})},x=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,109)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;c(t),n(t),a(t),s(t),r(t)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),x()},32:function(t){t.exports=JSON.parse('{"a":"0.1.7"}')},37:function(t,e,c){},39:function(t,e,c){}},[[108,1,2]]]);
//# sourceMappingURL=main.aa2936b0.chunk.js.map