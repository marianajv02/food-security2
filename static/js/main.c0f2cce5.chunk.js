/*! For license information please see main.c0f2cce5.chunk.js.LICENSE.txt */
(this["webpackJsonpmapbox-react2"]=this["webpackJsonpmapbox-react2"]||[]).push([[0],{119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),l=(n(20),n(53),n(47)),i=n(1),u=n(7),s=n.n(u),f=n(15),p=n.n(f);n(88);var h=function(){var e=["#53ca57","#ffe252","#fa890f","#eb3333","#900101e3","#ffffff"];return r.a.createElement("nav",{className:"legend"},r.a.createElement("div",{className:"legend-container"},["Phase 1","Phase 2","Phase 3","Phase 4","Phase 5","No data"].map((function(t,n){return r.a.createElement("div",{key:n,className:"legend-item"},r.a.createElement("span",{className:"legend-key",style:{backgroundColor:e[n]}}),r.a.createElement("span",{className:"legend-value"},t))}))))},m=(n(89),n(4));n(90);function d(e){return e?e.toLocaleString("en-US",{maximumFractionDigits:0}):""}function v(e,t){return(t?(e||0)/t*100:0).toFixed(2)}var g=function(e){var t=e.countryData,n=e.level1Data,o=e.level2Data,c=e.regionInfo,l=e.selectedYear,u=e.selectedMonth,s=Object(a.useState)([]),f=Object(i.a)(s,2),p=f[0],h=f[1];if(Object(a.useEffect)((function(){if(t&&n&&o){var e=[].concat(Object(m.a)(t.features),Object(m.a)(n.features),Object(m.a)(o.features));h(e)}}),[c]),!c)return null;var g=c.key,y=null;p&&(y=p.find((function(e){return e.properties.Key===g})));var b=y?y.properties:{},E=b.Name_2,O=d(b["POP-".concat(l,"-0").concat(u)]),j=d(b["PH1-".concat(l,"-0").concat(u)]),P=v(parseFloat(b["PH1-".concat(l,"-0").concat(u)]),parseFloat(b["POP-".concat(l,"-0").concat(u)])),w=d(b["PH2-".concat(l,"-0").concat(u)]),C=v(parseFloat(b["PH2-".concat(l,"-0").concat(u)]),parseFloat(b["POP-".concat(l,"-0").concat(u)])),L=d(b["PH3-".concat(l,"-0").concat(u)]),N=v(parseFloat(b["PH3-".concat(l,"-0").concat(u)]),parseFloat(b["POP-".concat(l,"-0").concat(u)])),x=d(b["PH4-".concat(l,"-0").concat(u)]),S=v(parseFloat(b["PH4-".concat(l,"-0").concat(u)]),parseFloat(b["POP-".concat(l,"-0").concat(u)])),F=d(b["PH5-".concat(l,"-0").concat(u)]),_=v(parseFloat(b["PH5-".concat(l,"-0").concat(u)]),parseFloat(b["POP-".concat(l,"-0").concat(u)]));return r.a.createElement("nav",{className:"sidebar"},r.a.createElement("div",{className:"sidebar-container"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:"/images/family_icon.jpg",alt:"Family Icon"}),r.a.createElement("span",{className:"logo-text"},"Food and nutrition situation ",l," ")," "),r.a.createElement("div",{className:"region-info"},r.a.createElement("h2",null,r.a.createElement("div",null,r.a.createElement("p",null,E))),r.a.createElement("div",{className:"info-row"},r.a.createElement("h4",null,"Total population:"),r.a.createElement("p",null,O)),r.a.createElement("div",{className:"info-row"},r.a.createElement("h4",null,"Phase 1:"),r.a.createElement("p",null,j),r.a.createElement("p",null,P,"%")),r.a.createElement("div",{className:"info-row"},r.a.createElement("h4",null,"Phase 2:"),r.a.createElement("p",null,w),r.a.createElement("p",null,C,"%")),r.a.createElement("div",{className:"info-row"},r.a.createElement("h4",null,"Phase 3:"),r.a.createElement("p",null,L),r.a.createElement("p",null,N,"%")),r.a.createElement("div",{className:"info-row"},r.a.createElement("h4",null,"Phase 4:"),r.a.createElement("p",null,x),r.a.createElement("p",null,S,"%")),r.a.createElement("div",{className:"info-row"},r.a.createElement("h4",null,"Phase 5:"),r.a.createElement("p",null,F),r.a.createElement("p",null,_,"%")))))};p.a.accessToken="pk.eyJ1IjoibWFyaWFuYWp2LSIsImEiOiJjbGs3eXJmbzEwYXR3M2RxbnRuOHVkaHV3In0.rVa0wb_O5OTeuk07J90w5A";var y=function(e){var t=e.selectedYear,n=e.selectedMonth,o=e.onChangeRegion,c=Object(a.useRef)(null),l=Object(a.useRef)(null),u=Object(a.useState)(0),s=Object(i.a)(u,2),f=s[0],m=s[1],d=Object(a.useState)(17),v=Object(i.a)(d,2),g=v[0],y=v[1],b=Object(a.useState)(3.4),E=Object(i.a)(b,2),O=E[0],j=E[1],P=Object(a.useState)(null),w=Object(i.a)(P,2),C=(w[0],w[1],function(){m(l.current.getCenter().lng.toFixed(4)),y(l.current.getCenter().lat.toFixed(4)),j(l.current.getZoom().toFixed(2))}),L=["output_country-2uwmmy","output_level1-5iewsu","output_level2-8nur76"],N=function(e){console.log("clickhandler ran",e.features);var t=e.features[0],n=e.lngLat,a={name:t.properties.Name_2,key:t.properties.Key},r=null;r&&r.remove(),r=new p.a.Popup({maxWidth:"100px",maxHeight:"50px",className:"custom-popup"}).setLngLat(n).setHTML("<h5>".concat(t.properties.Name_2,"</h5>")).addTo(l.current),o(a)};return Object(a.useEffect)((function(){return l.current?L.forEach((function(e){l.current.getLayer(e)&&l.current.setPaintProperty(e,"fill-color",function(e,t){var n=parseInt(e),a=parseInt(t);return["case",["==",["number",["get","CLAS-".concat(n,"-0").concat(a)]],1],"#53ca57",["==",["number",["get","CLAS-".concat(n,"-0").concat(a)]],2],"#ffe252",["==",["number",["get","CLAS-".concat(n,"-0").concat(a)]],3],"#fa890f",["==",["number",["get","CLAS-".concat(n,"-0").concat(a)]],4],"#eb3333","#ffffff"]}(t,n))})):(l.current=new p.a.Map({container:c.current,style:"mapbox://styles/marianajv-/cllf4b5be012q01pb6nqq4k5x",center:[f,g],zoom:O}),l.current.on("move",C),L.forEach((function(e){l.current.on("click",e,N)}))),function(){!1}}),[t,n]),Object(a.useEffect)((function(){return l.current&&l.current.on("move",C),function(){!1}}),[g,f,O]),r.a.createElement("div",{className:"view-container"},r.a.createElement("div",{ref:c,className:"map-container"}),r.a.createElement(h,null))},b=(n(91),n(93),n(94),function(e){var t=e.onChangeYear,n=e.onChangeMonth,o=Object(a.useState)(2023),c=Object(i.a)(o,2),l=c[0],u=c[1],s=Object(a.useState)(null),f=Object(i.a)(s,2),p=f[0],h=f[1],m=function(e){var t={March:3,June:6,November:11}[e];void 0!==t&&(h(t),n&&n(t))};return r.a.createElement("div",{className:"timebar"},r.a.createElement("div",{className:"year-bar"},r.a.createElement("input",{type:"range",min:"0",max:"1",step:"0.01",value:(l-2014)/9,onChange:function(e){var n=parseFloat(e.target.value),a=Math.round(2014+9*n);u(a),t&&t(a)},className:"slider"}),r.a.createElement("div",{className:"year-indicator"},l)),r.a.createElement("div",{className:"month-buttons"},r.a.createElement("button",{className:3===p?"selected":"",onClick:function(){return m("March")}},"March"),r.a.createElement("button",{className:6===p?"selected":"",onClick:function(){return m("June")}},"June"),r.a.createElement("button",{className:11===p?"selected":"",onClick:function(){return m("November")}},"November")))});var E=n(14);n(45),n(46),n(119);function O(e){return null===e?"0":e.toLocaleString("en-US",{maximumFractionDigits:0})}function j(e,t){return(e/t*100).toFixed(2)}function P(e,t){return t.reduce((function(t,n){return t+parseFloat(n[e].replace(/,/g,""))||0}),0)}var w=function(e){var t=e.countryData,n=e.selectedYear,o=e.selectedMonth,c=Object(a.useState)([{field:"Country",rowgroup:!0,hide:!1,headerClass:"custom-header",width:100},{field:"L1",headerClass:"custom-header",width:100},{field:"L2",headerClass:"custom-header",width:100},{field:"Population",headerClass:"custom-header",width:120},{field:"Phase 1",headerClass:"custom-header1",width:90},{field:"Phase 2",headerClass:"custom-header2",width:90},{field:"Phase 3",headerClass:"custom-header3",width:90},{field:"Phase 4",headerClass:"custom-header4",width:90},{field:"Phase 5",headerClass:"custom-header5",width:90},{field:"Phase 3-5",headerClass:"custom-header5",width:100},{field:"%",headerClass:"custom-header5",width:60}]),l=Object(i.a)(c,2),u=l[0];l[1];if(!t||!t.features)return null;var s=t.features.map((function(e){var t=e.properties["POP-".concat(n,"-0").concat(o)];return void 0===t?{Country:e.properties.Country,L1:"",L2:"",Population:"Data not available","Phase 1":"Data not available","Phase 2":"Data not available","Phase 3":"Data not available","Phase 4":"Data not available","Phase 5":"Data not available","Phase 3-5":"Data not available","%":"Data not available"}:{Country:e.properties.Country,L1:e.properties[""],L2:e.properties[""],Population:O(t),"Phase 1":O(e.properties["PH1-".concat(n,"-0").concat(o)]),"Phase 2":O(e.properties["PH2-".concat(n,"-0").concat(o)]),"Phase 3":O(e.properties["PH3-".concat(n,"-0").concat(o)]),"Phase 4":O(e.properties["PH4-".concat(n,"-0").concat(o)]),"Phase 5":O(e.properties["PH5-".concat(n,"-0").concat(o)]),"Phase 3-5":O(e.properties["PH3:5-".concat(n,"-0").concat(o)]),"%":j(e.properties["PH3:5-".concat(n,"-0").concat(o)],t)}})),f={Country:"Total",L1:"",L2:"",Population:O(P("Population",s)),"Phase 1":O(P("Phase 1",s)),"Phase 2":O(P("Phase 2",s)),"Phase 3":O(P("Phase 3",s)),"Phase 4":O(P("Phase 4",s)),"Phase 5":O(P("Phase 5",s)),"Phase 3-5":O(P("Phase 3-5",s)),"%":j(P("Phase 3-5",s),P("Population",s)),rowClass:"total-row"},p=[].concat(Object(m.a)(s),[f]);return r.a.createElement("div",{className:"ag-theme-alpine"},r.a.createElement(E.AgGridReact,{rowData:p,groupDisplayType:"groupRows",columnDefs:u}))},C=(n(120),function(e){var t=e.title,n=e.options,o=e.selectedOptions,c=e.setSelectedOptions,l=Object(a.useState)(!1),u=Object(i.a)(l,2),s=u[0],f=u[1],p=Object(a.useState)(""),h=Object(i.a)(p,2),d=h[0],v=h[1],g=Object(a.useRef)(null),y=function(e){g.current.contains(e.target)||f(!1)};Object(a.useEffect)((function(){return document.addEventListener("click",y),function(){document.removeEventListener("click",y)}}),[]);var b=n.filter((function(e){return null!=e})).filter((function(e){return e.toLowerCase().includes(d.toLowerCase())}));return r.a.createElement("div",{className:"filter-container"},r.a.createElement("label",null,t,":"),r.a.createElement("div",{className:"search-dropdown",ref:g},r.a.createElement("input",{type:"text",placeholder:"Search by ".concat(t),value:d,onChange:function(e){v(e.target.value)},onClick:function(){return f(!0)}}),s&&r.a.createElement("div",{className:"checkbox-list"},r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",id:"selectAll".concat(t),value:"selectAll".concat(t),checked:o.length===n.length,onChange:function(){o.length===n.length?c([]):c(n)}}),r.a.createElement("label",{htmlFor:"selectAll".concat(t)},"Select All")),b.map((function(e){return r.a.createElement("div",{key:e},r.a.createElement("input",{type:"checkbox",id:e,value:e,checked:o.includes(e),onChange:function(){return function(e){o.includes(e)?c(o.filter((function(t){return t!==e}))):c([].concat(Object(m.a)(o),[e]))}(e)}}),r.a.createElement("label",{htmlFor:e},r.a.createElement("span",null,e)))})))))}),L=(n(121),function(e){var t=e.handleFilteredDataChange,n=(e.countryData,e.level1Data,e.level2Data,Object(a.useState)([])),o=Object(i.a)(n,2),c=o[0],l=o[1],u=Object(a.useState)([]),f=Object(i.a)(u,2),p=f[0],h=f[1],d=Object(a.useState)([]),v=Object(i.a)(d,2),g=v[0],y=v[1],b=Object(a.useState)([]),E=Object(i.a)(b,2),O=E[0],j=E[1],P=Object(a.useState)([]),w=Object(i.a)(P,2),L=w[0],N=w[1],x=Object(a.useState)([]),S=Object(i.a)(x,2),F=S[0],_=S[1],D=Object(a.useState)([]),k=Object(i.a)(D,2),H=k[0],M=k[1],Y=Object(a.useState)([]),I=Object(i.a)(Y,2),A=I[0],T=I[1],G=Object(a.useState)([]),R=Object(i.a)(G,2),J=R[0],W=R[1];return Object(a.useEffect)((function(){s.a.get("./data/output_country.geojson").then((function(e){M(e.data.features);var t=e.data.features.map((function(e){return e.properties.Country}));j(t)})).catch((function(e){console.error("Error loading output_country.geojson:",e)})),s.a.get("./data/output_level1.geojson").then((function(e){T(e.data.features);var t=e.data.features.map((function(e){return e.properties.Name_1}));N(t)})).catch((function(e){console.error("Error loading output_level1.geojson:",e)})),s.a.get("./data/output_level2.geojson").then((function(e){W(e.data.features);var t=e.data.features.map((function(e){return e.properties.Name_2}));_(t)})).catch((function(e){console.error("Error loading output_level2.geojson:",e)}))}),[]),Object(a.useEffect)((function(){var e=A.filter((function(e){return c.includes(e.properties.Country)})).map((function(e){return e.properties.Name_1}));N(e)}),[c,A]),Object(a.useEffect)((function(){var e=J.filter((function(e){return c.includes(e.properties.Country)&&p.includes(e.properties.Name_1)})).map((function(e){return e.properties.Name_2}));_(e)}),[c,p,J]),Object(a.useEffect)((function(){console.log("Filtering data...");var e=[],n=[],a=[];c.length>0||p.length>0||g.length>0?(console.log("Applying filters..."),e.push.apply(e,Object(m.a)(H.filter((function(e){return 0===p.length&&0===g.length&&0===c.length||c.includes(e.properties.Country)})).map((function(e){return{type:"Feature",properties:e.properties,geometry:e.geometry}})))),n.push.apply(n,Object(m.a)(A.filter((function(e){return console.log("Filtering level 1 data..."),(0===p.length||p.includes(e.properties.Name_1))&&(0===c.length||c.includes(e.properties.Country))})).map((function(e){return{type:"Feature",properties:e.properties,geometry:e.geometry}})))),a.push.apply(a,Object(m.a)(J.filter((function(e){return console.log("Filtering level 2 data..."),(0===p.length||p.includes(e.properties.Name_1))&&(0===g.length||g.includes(e.properties.Name_2))&&(0===c.length||c.includes(e.properties.Country))})).map((function(e){return{type:"Feature",properties:e.properties,geometry:e.geometry}}))))):(e.push.apply(e,Object(m.a)(H.map((function(e){return{type:"Feature",properties:e.properties,geometry:e.geometry}})))),n.push.apply(n,Object(m.a)(A.map((function(e){return{type:"Feature",properties:e.properties,geometry:e.geometry}})))),a.push.apply(a,Object(m.a)(J.map((function(e){return{type:"Feature",properties:e.properties,geometry:e.geometry}})))));var r={filteredCountryData:{type:"FeatureCollection",features:e},filteredLevel1Data:{type:"FeatureCollection",features:n},filteredLevel2Data:{type:"FeatureCollection",features:a}};console.log("Filtered Country data:",r.filteredCountryData),console.log("Filtered Lv1 data:",r.filteredLevel1Data),console.log("Filtered Lv2 data:",r.filteredLevel2Data),t(r)}),[c,p,g,H,A,J]),r.a.createElement("div",null,r.a.createElement("h1",null),r.a.createElement("div",{className:"filter-section"},r.a.createElement(C,{title:"Country",options:O,selectedOptions:c,setSelectedOptions:l})),r.a.createElement("div",{className:"filter-section"},r.a.createElement(C,{title:"Level 1 Name",options:L,selectedOptions:p,setSelectedOptions:h})),r.a.createElement("div",{className:"filter-section"},r.a.createElement(C,{title:"Level 2 Name",options:F,selectedOptions:g,setSelectedOptions:y})))});n(122);function N(){N=function(){return t};var e,t={},n=Object.prototype,a=n.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function s(e,t,n,a){var o=t&&t.prototype instanceof v?t:v,c=Object.create(o.prototype),l=new F(a||[]);return r(c,"_invoke",{value:C(e,n,l)}),c}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var p="suspendedStart",h="executing",m="completed",d={};function v(){}function g(){}function y(){}var b={};u(b,c,(function(){return this}));var E=Object.getPrototypeOf,O=E&&E(E(_([])));O&&O!==n&&a.call(O,c)&&(b=O);var j=y.prototype=v.prototype=Object.create(b);function P(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function n(r,o,c,l){var i=f(e[r],e,o);if("throw"!==i.type){var u=i.arg,s=u.value;return s&&"object"==typeof s&&a.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,c,l)}),(function(e){n("throw",e,c,l)})):t.resolve(s).then((function(e){u.value=e,c(u)}),(function(e){return n("throw",e,c,l)}))}l(i.arg)}var o;r(this,"_invoke",{value:function(e,a){function r(){return new t((function(t,r){n(e,a,t,r)}))}return o=o?o.then(r,r):r()}})}function C(t,n,a){var r=p;return function(o,c){if(r===h)throw new Error("Generator is already running");if(r===m){if("throw"===o)throw c;return{value:e,done:!0}}for(a.method=o,a.arg=c;;){var l=a.delegate;if(l){var i=L(l,a);if(i){if(i===d)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(r===p)throw r=m,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r=h;var u=f(t,n,a);if("normal"===u.type){if(r=a.done?m:"suspendedYield",u.arg===d)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(r=m,a.method="throw",a.arg=u.arg)}}}function L(t,n){var a=n.method,r=t.iterator[a];if(r===e)return n.delegate=null,"throw"===a&&t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method)||"return"!==a&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+a+"' method")),d;var o=f(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var c=o.arg;return c?c.done?(n[t.resultName]=c.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):c:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function F(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function _(t){if(t||""===t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){for(;++r<t.length;)if(a.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return g.prototype=y,r(j,"constructor",{value:y,configurable:!0}),r(y,"constructor",{value:g,configurable:!0}),g.displayName=u(y,i,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,i,"GeneratorFunction")),e.prototype=Object.create(j),e},t.awrap=function(e){return{__await:e}},P(w.prototype),u(w.prototype,l,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,a,r,o){void 0===o&&(o=Promise);var c=new w(s(e,n,a,r),o);return t.isGeneratorFunction(n)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},P(j),u(j,i,"Generator"),u(j,c,(function(){return this})),u(j,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},t.values=_,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(a,r){return l.type="throw",l.arg=t,n.next=a,r&&(n.method="next",n.arg=e),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],l=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var i=a.call(c,"catchLoc"),u=a.call(c,"finallyLoc");if(i&&u){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(i){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;S(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,a){return this.delegate={iterator:_(t),resultName:n,nextLoc:a},"next"===this.method&&(this.arg=e),d}},t}function x(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(null),u=Object(i.a)(c,2),f=u[0],p=u[1],h=Object(a.useState)(null),m=Object(i.a)(h,2),d=m[0],v=m[1],E=Object(a.useState)(2023),O=Object(i.a)(E,2),j=O[0],P=O[1],C=Object(a.useState)(3),x=Object(i.a)(C,2),S=x[0],F=x[1],_=Object(a.useState)(null),D=Object(i.a)(_,2),k=D[0],H=D[1],M=Object(a.useState)({filteredCountryData:[],filteredLevel1Data:[],filteredLevel2Data:[]}),Y=Object(i.a)(M,2),I=Y[0],A=Y[1],T=function(e){P(e)},G=function(e){F(e)};return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(N().mark((function e(){var t,n,a;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("/data/output_country.geojson");case 3:return t=e.sent,o(t.data),e.next=7,s.a.get("/data/output_level1.geojson");case 7:return n=e.sent,p(n.data),e.next=11,s.a.get("/data/output_level2.geojson");case 11:a=e.sent,v(a.data),console.log(n,a,"response levels"),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.error("Error fetching data:",e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",null,r.a.createElement(y,{regionInfo:k,onChangeYear:T,onChangeRegion:function(e){H(e)},selectedYear:j,onChangeMonth:G,selectedMonth:S}),r.a.createElement(b,{onChangeYear:T,selectedYear:j,onChangeMonth:G,selectedMonth:S}),r.a.createElement(g,{countryData:n,level1Data:f,level2Data:d,regionInfo:k,onChangeYear:T,selectedYear:j,onChangeMonth:G,selectedMonth:S}),r.a.createElement(L,{handleFilteredDataChange:function(e){A(e)}}),r.a.createElement("div",null,r.a.createElement(w,{countryData:I.filteredCountryData,level1Data:f,level2Data:d,onChangeYear:T,selectedYear:j,onChangeMonth:G,selectedMonth:S})))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root"))},48:function(e,t,n){e.exports=n(123)},53:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){}},[[48,1,2]]]);
//# sourceMappingURL=main.c0f2cce5.chunk.js.map