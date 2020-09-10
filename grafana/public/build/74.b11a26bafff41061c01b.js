(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{QBpM:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"UpgradePage",(function(){return h})),n.d(t,"UpgradeInfo",(function(){return v}));var a=n("q1tI"),r=n.n(a),i=n("kDDq"),l=n("ZGyg"),c=n("WDqV"),o=n("kDLi"),u=n("0cfB"),s=n("lzJ5"),m=n("/MKj");function p(){var e=E(["\n    font-weight: 500;\n    line-height: 1.7;\n  "]);return p=function(){return e},e}function d(){var e=E(["\n    display: flex;\n\n    > img {\n      display: block;\n      height: 22px;\n      flex-grow: 0;\n      padding-right: 12px;\n    }\n  "]);return d=function(){return e},e}function g(){var e=E(["\n    display: flex;\n    flex-direction: column;\n    padding-top: 8px;\n\n    > div {\n      margin-bottom: ","px;\n    }\n  "]);return g=function(){return e},e}function f(){var e=E(["\n    display: grid;\n    grid-template-columns: 100%;\n    column-gap: 20px;\n    row-gap: 40px;\n\n    @media (min-width: 1050px) {\n      grid-template-columns: 50% 50%;\n    }\n  "]);return f=function(){return e},e}function E(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var h=function(e){var t=e.navModel;return r.a.createElement(l.a,{navModel:t},r.a.createElement(l.a.Contents,null,r.a.createElement(v,{editionNotice:"You are running the open-source version of Grafana. You have to install the Enterprise edition in order enable Enterprise features."})))},b={fontWeight:500,fontSize:"26px",lineHeight:"123%"},v=function(e){var t=e.editionNotice,n=Object(i.css)(f());return r.a.createElement(c.a,{header:"Grafana Enterprise",subheader:"Get your free trial",editionNotice:t},r.a.createElement("div",{className:n},r.a.createElement(j,null),r.a.createElement(O,null)))},y=function(){return r.a.createElement("div",{style:{marginTop:"40px",marginBottom:"30px"}},r.a.createElement("h2",{style:b},"Get Grafana Enterprise"),r.a.createElement(x,null),r.a.createElement("p",{style:{paddingTop:"12px"}},"You can use the trial version for free for ",r.a.createElement("strong",null,"30 days"),". We will remind you about it"," ",r.a.createElement("strong",null,"5 days before the trial period ends"),"."))},x=function(){return r.a.createElement(o.LinkButton,{variant:"primary",size:"lg",href:"https://grafana.com/contact?about=grafana-enterprise&utm_source=grafana-upgrade-page"},"Contact us and get a free trial")},O=function(){return r.a.createElement("div",null,r.a.createElement("h4",null,"At your service"),r.a.createElement(D,null,r.a.createElement(k,{title:"Enterprise Plugins",image:"public/img/licensing/plugin_enterprise.svg"}),r.a.createElement(k,{title:"Critical SLA: 2 hours",image:"public/img/licensing/sla.svg"}),r.a.createElement(k,{title:"Unlimited Expert Support",image:"public/img/licensing/customer_support.svg"},"24x7x365 support via",r.a.createElement(D,{nested:!0},r.a.createElement(k,{title:"Email"}),r.a.createElement(k,{title:"Private slack channel"}),r.a.createElement(k,{title:"Phone"}))),r.a.createElement(k,{title:"Hand-in-hand support",image:"public/img/licensing/handinhand_support.svg"},"in the upgrade process")),r.a.createElement("div",{style:{marginTop:"20px"}},r.a.createElement("strong",null,"Also included:"),r.a.createElement("br",null),"Indemnification, working with Grafana Labs on future prioritization, and training from the core Grafana team."),r.a.createElement(y,null))},j=function(){return r.a.createElement("div",{style:{paddingRight:"11px"}},r.a.createElement("h4",null,"Enhanced Functionality"),r.a.createElement(w,null))},w=function(){return r.a.createElement(D,null,r.a.createElement(k,{title:"Data source permissions"}),r.a.createElement(k,{title:"Reporting"}),r.a.createElement(k,{title:"SAML Authentication"}),r.a.createElement(k,{title:"Enhanced LDAP Integration"}),r.a.createElement(k,{title:"Team Sync"},"LDAP, GitHub OAuth, Auth Proxy, Okta"),r.a.createElement(k,{title:"White labeling"}),r.a.createElement(k,{title:"Grafana usage insights"},r.a.createElement(D,{nested:!0},r.a.createElement(k,{title:"Sort dashboards by popularity in search"}),r.a.createElement(k,{title:"Find unused dashboards"}),r.a.createElement(k,{title:"Dashboard usage stats drawer"}),r.a.createElement(k,{title:"Dashboard presence indicators"}))),r.a.createElement(k,{title:"Enterprise Plugins"},r.a.createElement(D,{nested:!0},r.a.createElement(k,{title:"Oracle"}),r.a.createElement(k,{title:"Splunk"}),r.a.createElement(k,{title:"Service Now"}),r.a.createElement(k,{title:"Dynatrace"}),r.a.createElement(k,{title:"New Relic"}),r.a.createElement(k,{title:"DataDog"}),r.a.createElement(k,{title:"AppDynamics"}),r.a.createElement(k,{title:"Amazon Timestream"}))))},D=function(e){var t=e.children,n=e.nested,a=Object(i.css)(g(),n?0:8);return r.a.createElement("div",{className:a},t)},k=function(e){var t=e.children,n=e.title,a=e.image,l=a||"public/img/licensing/checkmark.svg",c=Object(i.css)(d()),o=Object(i.css)(p());return r.a.createElement("div",{className:c},r.a.createElement("img",{src:l}),r.a.createElement("div",null,r.a.createElement("div",{className:o},n),t))};t.default=Object(u.hot)(e)(Object(m.connect)((function(e){return{navModel:Object(s.a)(e.navIndex,"upgrading")}}))(h))}.call(this,n("3UD+")(e))},WDqV:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var a=n("q1tI"),r=n.n(a),i=n("kDLi"),l=n("kDDq");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){var e=d(["\n      height: 137px;\n      padding: 40px 0 0 79px;\n      position: relative;\n      background: url('","') right;\n  "]);return s=function(){return e},e}function m(){var e=d(["\n      text-align: center;\n      padding: 16px;\n      background: ",";\n    "]);return m=function(){return e},e}function p(){var e=d(["\n      padding: 36px 79px;\n      background: ",";\n    "]);return p=function(){return e},e}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var g={fontWeight:500,fontSize:"26px",lineHeight:"123%"},f=Object(i.stylesFactory)((function(e){var t=e.isDark?"public/img/licensing/header_dark.svg":"public/img/licensing/header_light.svg",n=e.isDark?e.palette.dark9:e.palette.gray6;return{container:Object(l.css)(p(),e.colors.panelBg),footer:Object(l.css)(m(),n),header:Object(l.css)(s(),t)}})),E=function(e){var t=e.header,n=e.editionNotice,a=e.subheader,l=e.children,c=Object(i.useTheme)(),o=f(c);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:o.header},r.a.createElement("h2",{style:g},t),a&&r.a.createElement("h3",null,a),r.a.createElement(h,{size:"128px",style:{boxShadow:"0px 0px 24px rgba(24, 58, 110, 0.45)",background:"#0A1C36",position:"absolute",top:"19px",left:"71%"}},r.a.createElement("img",{src:"public/img/grafana_icon.svg",alt:"Grafana",width:"80px",style:{position:"absolute",left:"23px",top:"20px"}}))),r.a.createElement("div",{className:o.container},l),n&&r.a.createElement("div",{className:o.footer},n))},h=function(e){var t=e.size,n=e.style,a=e.children;return r.a.createElement("div",{style:o({width:t,height:t,position:"absolute",bottom:0,right:0,borderRadius:"50%"},n)},a)}}}]);
//# sourceMappingURL=74.b11a26bafff41061c01b.js.map