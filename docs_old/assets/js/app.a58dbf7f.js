(function(t){function e(e){for(var a,o,c=e[0],u=e[1],s=e[2],l=0,d=[];l<c.length;l++)o=c[l],r[o]&&d.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},o={app:0},r={app:0},i=[];function c(t){return u.p+"assets/js/"+({about:"about","account~admin~dashboard":"account~admin~dashboard",account:"account",admin:"admin",dashboard:"dashboard",home:"home"}[t]||t)+"."+{about:"cdfbf727","account~admin~dashboard":"e8cf8c81",account:"60f205b0",admin:"8f71835e",dashboard:"4690afc1",home:"7425ddf0"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"account~admin~dashboard":1,home:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var a="assets/css/"+({about:"about","account~admin~dashboard":"account~admin~dashboard",account:"account",admin:"admin",dashboard:"dashboard",home:"home"}[t]||t)+"."+{about:"31d6cfe0","account~admin~dashboard":"dacd27e0",account:"31d6cfe0",admin:"31d6cfe0",dashboard:"31d6cfe0",home:"22b7f024"}[t]+".css",r=u.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===r))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===a||l===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.request=a,delete o[t],f.parentNode.removeChild(f),n(i)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){o[t]=0}));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,n){a=r[t]=[e,n]});e.push(a[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t),s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+o+")");i.type=a,i.request=o,n[1](i)}r[t]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("1356"),o=n.n(a);o.a},1356:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=n("bb71");n("da64");a["a"].use(o["a"],{iconfont:"md"});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"root"}},[n("default-layout",[n("router-view")],1)],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("app-topbar"),t._t("default")],2)},u=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-navigation-drawer",{attrs:{app:"",temporary:""},model:{value:t.navigation.shown,callback:function(e){t.$set(t.navigation,"shown",e)},expression:"navigation.shown"}},[n("v-toolbar",{attrs:{color:"primary"}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",[t._v("O p t")]),n("span",{staticClass:"font-weight-light"},[t._v("I O N S")])])],1),n("v-list",t._l(t.navigation.items,function(e){return n("v-list-tile",{key:e.title,on:{click:function(n){return n.stopPropagation(),t.handleRoute(e.route)}}},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)}),1)],1),n("v-toolbar",{attrs:{app:"",color:"primary","mb-5":""}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.navigation.shown=!t.navigation.shown}}}),n("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.handleRoute("/")}}},[n("v-icon",[t._v("home")])],1),n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",[t._v("v u e")]),n("span",{staticClass:"font-weight-light"},[t._v("js")])])],1)],1)},l=[],d={data:function(){return{navigation:{width:300,shown:!1,items:[{title:"Dashboard",icon:"dashboard",route:"dashboard"},{title:"Account",icon:"account_circle",route:"account"},{title:"Admin",icon:"gavel",route:"admin"},{title:"About",icon:"info",route:"about"}]}}},computed:{direction:function(){return!1===this.navigation.shown?"Open":"Closed"}},methods:{handleRoute:function(t){this.$router.push(t)}}},f=d,p=n("2877"),h=n("6544"),m=n.n(h),b=n("8336"),v=n("132d"),g=n("8860"),y=n("ba95"),w=n("40fe"),_=n("5d23"),T=n("f774"),O=n("71d9"),P=n("706c"),j=n("2a7f"),x=Object(p["a"])(f,s,l,!1,null,null,null),k=x.exports;m()(x,{VBtn:b["a"],VIcon:v["a"],VList:g["a"],VListTile:y["a"],VListTileAction:w["a"],VListTileContent:_["a"],VListTileTitle:_["b"],VNavigationDrawer:T["a"],VToolbar:O["a"],VToolbarSideIcon:P["a"],VToolbarTitle:j["a"]});var V={components:{AppTopbar:k}},A=V,C=n("7496"),E=Object(p["a"])(A,c,u,!1,null,null,null),S=E.exports;m()(E,{VApp:C["a"]});var L={components:{DefaultLayout:S}},N=L,$=(n("034f"),Object(p["a"])(N,r,i,!1,null,null,null)),B=$.exports,M=n("8c4f");a["a"].use(M["a"]);var D=new M["a"]({routes:[{path:"/",name:"home",component:function(){return n.e("home").then(n.bind(null,"bb51"))}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/account",name:"account",component:function(){return Promise.all([n.e("account~admin~dashboard"),n.e("account")]).then(n.bind(null,"77be"))}},{path:"/admin",name:"admin",component:function(){return Promise.all([n.e("account~admin~dashboard"),n.e("admin")]).then(n.bind(null,"3530"))}},{path:"/dashboard",name:"dashboard",component:function(){return Promise.all([n.e("account~admin~dashboard"),n.e("dashboard")]).then(n.bind(null,"7277"))}}]});a["a"].config.productionTip=!1,new a["a"]({router:D,render:function(t){return t(B)}}).$mount("#app")}});
//# sourceMappingURL=app.a58dbf7f.js.map