(this["webpackJsonpmapbox-react2"]=this["webpackJsonpmapbox-react2"]||[]).push([[0],{29:function(e,t,a){e.exports=a(86)},34:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(7),r=a.n(o),c=(a(12),a(34),a(5)),s=a.n(c),i=a(8),u=a.n(i);a(52);var p=function(){const e=["#53ca57","#ffe252","#fa890f","#eb3333","#900101e3","#ffffff"];return l.a.createElement("nav",{className:"legend"},l.a.createElement("div",{className:"legend-container"},["Phase 1","Phase 2","Phase 3","Phase 4","Phase 5","No data"].map((t,a)=>l.a.createElement("div",{key:a,className:"legend-item"},l.a.createElement("span",{className:"legend-key",style:{backgroundColor:e[a]}}),l.a.createElement("span",{className:"legend-value"},t)))))};a(53),a(54);function m(e){return e?e.toLocaleString("en-US",{maximumFractionDigits:0}):""}function d(e,t){return(t?(e||0)/t*100:0).toFixed(2)}var h=function(e){let{countryData:t,level1Data:a,level2Data:o,regionInfo:r,selectedYear:c,selectedMonth:s}=e;const[i,u]=Object(n.useState)([]);if(Object(n.useEffect)(()=>{if(t&&a&&o){const e=[...t.features,...a.features,...o.features];u(e)}},[r]),!r)return null;const p=r.key;let h=null;i&&(h=i.find(e=>e.properties.Key===p));const f=h?h.properties:{},g=f.Name_2,v=m(f["POP-".concat(c,"-0").concat(s)]),E=m(f["PH1-".concat(c,"-0").concat(s)]),y=d(parseFloat(f["PH1-".concat(c,"-0").concat(s)]),parseFloat(f["POP-".concat(c,"-0").concat(s)])),b=m(f["PH2-".concat(c,"-0").concat(s)]),P=d(parseFloat(f["PH2-".concat(c,"-0").concat(s)]),parseFloat(f["POP-".concat(c,"-0").concat(s)])),C=m(f["PH3-".concat(c,"-0").concat(s)]),O=d(parseFloat(f["PH3-".concat(c,"-0").concat(s)]),parseFloat(f["POP-".concat(c,"-0").concat(s)])),N=m(f["PH4-".concat(c,"-0").concat(s)]),j=d(parseFloat(f["PH4-".concat(c,"-0").concat(s)]),parseFloat(f["POP-".concat(c,"-0").concat(s)])),w=m(f["PH5-".concat(c,"-0").concat(s)]),F=d(parseFloat(f["PH5-".concat(c,"-0").concat(s)]),parseFloat(f["POP-".concat(c,"-0").concat(s)]));return l.a.createElement("nav",{className:"sidebar"},l.a.createElement("div",{className:"sidebar-container"},l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:"/food-security2/images/family_icon.jpg",alt:"Family Icon"}),l.a.createElement("span",{className:"logo-text"},"Food and nutrition situation ",c," ")," "),l.a.createElement("div",{className:"region-info"},l.a.createElement("h2",null,l.a.createElement("div",null,l.a.createElement("p",null,g))),l.a.createElement("div",{className:"info-row"},l.a.createElement("h4",null,"Total population:"),l.a.createElement("p",null,v)),l.a.createElement("div",{className:"info-row"},l.a.createElement("h4",null,"Phase 1:"),l.a.createElement("p",null,E),l.a.createElement("p",null,y,"%")),l.a.createElement("div",{className:"info-row"},l.a.createElement("h4",null,"Phase 2:"),l.a.createElement("p",null,b),l.a.createElement("p",null,P,"%")),l.a.createElement("div",{className:"info-row"},l.a.createElement("h4",null,"Phase 3:"),l.a.createElement("p",null,C),l.a.createElement("p",null,O,"%")),l.a.createElement("div",{className:"info-row"},l.a.createElement("h4",null,"Phase 4:"),l.a.createElement("p",null,N),l.a.createElement("p",null,j,"%")),l.a.createElement("div",{className:"info-row"},l.a.createElement("h4",null,"Phase 5:"),l.a.createElement("p",null,w),l.a.createElement("p",null,F,"%")))))};u.a.accessToken="pk.eyJ1IjoibWFyaWFuYWp2LSIsImEiOiJjbGs3eXJmbzEwYXR3M2RxbnRuOHVkaHV3In0.rVa0wb_O5OTeuk07J90w5A";var f=function(e){let{selectedYear:t,selectedMonth:a,onChangeRegion:o,countryData:r}=e;console.log(r,"mapview comp");const c=Object(n.useRef)(null),s=Object(n.useRef)(null),[i,m]=Object(n.useState)(0),[d,h]=Object(n.useState)(17),[f,g]=Object(n.useState)(3.4),[v,E]=Object(n.useState)(null),y=()=>{m(s.current.getCenter().lng.toFixed(4)),h(s.current.getCenter().lat.toFixed(4)),g(s.current.getZoom().toFixed(2))},b=["output_country-2uwmmy","output_level1-5iewsu","output_level2-8nur76"],P=e=>{const t=e.features[0],a=e.lngLat,n={name:t.properties.Name_2,key:t.properties.Key};let l=null;l&&l.remove(),l=new u.a.Popup({maxWidth:"100px",maxHeight:"50px",className:"custom-popup"}).setLngLat(a).setHTML("<h5>".concat(t.properties.Name_2,"</h5>")).addTo(s.current),o(n)};return Object(n.useEffect)(()=>{let e=!0;return s.current?b.forEach(e=>{s.current.getLayer(e)&&s.current.setPaintProperty(e,"fill-color",function(e,t,a){const n=parseInt(e),l=parseInt(t);return a.features.some(e=>"CLAS-".concat(n,"-0").concat(l)in e.properties)?["case",["==",["number",["get","CLAS-".concat(n,"-0").concat(l)]],1],"#53ca57",["==",["number",["get","CLAS-".concat(n,"-0").concat(l)]],2],"#ffe252",["==",["number",["get","CLAS-".concat(n,"-0").concat(l)]],3],"#fa890f",["==",["number",["get","CLAS-".concat(n,"-0").concat(l)]],4],"#eb3333","#ffffff"]:"#ffffff"}(t,a,r))}):(s.current=new u.a.Map({container:c.current,style:"mapbox://styles/marianajv-/cllf4b5be012q01pb6nqq4k5x",center:[i,d],zoom:f}),s.current.on("move",y),b.forEach(e=>{s.current.on("click",e,P)})),()=>{e=!1}},[t,a]),Object(n.useEffect)(()=>{let e=!0;return s.current&&s.current.on("move",y),()=>{e=!1}},[d,i,f]),l.a.createElement("div",{className:"view-container"},l.a.createElement("div",{ref:c,className:"map-container"}),l.a.createElement(p,null))};a(55);var g=e=>{let{onChangeYear:t,onChangeMonth:a}=e;const[o,r]=Object(n.useState)(2023),[c,s]=Object(n.useState)(null),i=e=>{const t={March:3,June:6,November:11}[e];void 0!==t&&(s(t),a&&a(t))};return l.a.createElement("div",{className:"timebar"},l.a.createElement("div",{className:"year-bar"},l.a.createElement("input",{type:"range",min:"0",max:"1",step:"0.01",value:(o-2014)/9,onChange:e=>{const a=parseFloat(e.target.value),n=Math.round(2014+9*a);r(n),t&&t(n)},className:"slider"}),l.a.createElement("div",{className:"year-indicator"},o)),l.a.createElement("div",{className:"month-buttons"},l.a.createElement("button",{className:3===c?"selected":"",onClick:()=>i("March")},"March"),l.a.createElement("button",{className:6===c?"selected":"",onClick:()=>i("June")},"June"),l.a.createElement("button",{className:11===c?"selected":"",onClick:()=>i("November")},"November")))},v=a(28);a(81),a(82),a(83);function E(e){return null===e?"0":e.toLocaleString("en-US",{maximumFractionDigits:0})}function y(e,t){return(e/t*100).toFixed(2)}function b(e,t){return t.reduce((t,a)=>t+!a.excludeFromTotals?parseFloat(a[e].replace(/,/g,"")):0,0)}function P(e,t,a){const n=e.properties["POP-".concat(t,"-0").concat(a)];return void 0===n?{Country:e.properties.Country,Level1:e.properties.Name_1,Level2:e.properties.Name_2,Population:"Data not available","Phase 1":"Data not available","Phase 2":"Data not available","Phase 3":"Data not available","Phase 4":"Data not available","Phase 5":"Data not available","Phase 3-5":"Data not available","%":"Data not available"}:{Country:C(e,0),Level1:C(e,1),Level2:C(e,2),Population:E(n),"Phase 1":E(e.properties["PH1-".concat(t,"-0").concat(a)]),"Phase 2":E(e.properties["PH2-".concat(t,"-0").concat(a)]),"Phase 3":E(e.properties["PH3-".concat(t,"-0").concat(a)]),"Phase 4":E(e.properties["PH4-".concat(t,"-0").concat(a)]),"Phase 5":E(e.properties["PH5-".concat(t,"-0").concat(a)]),"Phase 3-5":E(e.properties["PH3:5-".concat(t,"-0").concat(a)]),"%":y(e.properties["PH3:5-".concat(t,"-0").concat(a)],n),Key:e.properties.Key}}function C(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const a=["Country","Name_1","Name_2"],n=a[t],l=e.properties[n];return t>0&&l===e.properties[a[t-1]]?"":l}var O=e=>{let{countryData:t,level1Data:a,level2Data:o,selectedYear:r,selectedMonth:c}=e;const[s,i]=Object(n.useState)([{field:"Country",rowgroup:!0,hide:!1,headerClass:"custom-header",width:100},{field:"Level1",rowgroup:!0,hide:!1,headerClass:"custom-header",width:100},{field:"Level2",rowgroup:!0,hide:!1,headerClass:"custom-header",width:100},{field:"Population",headerClass:"custom-header",width:120},{field:"Phase 1",headerClass:"custom-header1",width:90},{field:"Phase 2",headerClass:"custom-header2",width:90},{field:"Phase 3",headerClass:"custom-header3",width:90},{field:"Phase 4",headerClass:"custom-header4",width:90},{field:"Phase 5",headerClass:"custom-header5",width:90},{field:"Phase 3-5",headerClass:"custom-header5",width:100},{field:"%",headerClass:"custom-header5",width:60}]);let u=[];const[p,m]=Object(n.useState)(null);if(!t||!t.features)return null;const d=t.features.map(e=>P(e,r,c)),h={Country:"Total",Population:E(b("Population",d)),"Phase 1":E(b("Phase 1",d)),"Phase 2":E(b("Phase 2",d)),"Phase 3":E(b("Phase 3",d)),"Phase 4":E(b("Phase 4",d)),"Phase 5":E(b("Phase 5",d)),"Phase 3-5":E(b("Phase 3-5",d)),"%":y(b("Phase 3-5",d),b("Population",d)),rowClass:"total-row"},f=[...d,h];u=0===u.length?f:u;return l.a.createElement("div",{className:"ag-theme-alpine"},l.a.createElement(v.AgGridReact,{rowData:u,groupDisplayType:"groupRows",columnDefs:s,onRowClicked:function(e){const t=e.data,n=e.api,l=t.level||0;if(2===l)return;const s=["Country","Level1"][l],i=t[s];console.log(t);const u=[a.features,o.features].map(e=>e.map(e=>P(e,r,c)))[l].filter(e=>e[s]===i);t.expanded?(t.expanded=!1,n.applyTransaction({remove:u.map(e=>({Key:e.Key}))})):(t.expanded=!0,n.applyTransaction({add:u.map(e=>({...e,excludeFromTotals:!0,level:l+1,expanded:!1})),addIndex:e.rowIndex+1}))},getRowId:e=>e.data.Key}))};a(84);var N=e=>{let{title:t,options:a,selectedOptions:o,setSelectedOptions:r}=e;const[c,s]=Object(n.useState)(!1),[i,u]=Object(n.useState)(""),p=Object(n.useRef)(null),m=e=>{p.current.contains(e.target)||s(!1)};Object(n.useEffect)(()=>(document.addEventListener("click",m),()=>{document.removeEventListener("click",m)}),[]);const d=a.filter(e=>null!=e).filter(e=>e.toLowerCase().includes(i.toLowerCase()));return l.a.createElement("div",{className:"filter-container"},l.a.createElement("label",null,t,":"),l.a.createElement("div",{className:"search-dropdown",ref:p},l.a.createElement("input",{type:"text",placeholder:"Search by ".concat(t),value:i,onChange:e=>{u(e.target.value)},onClick:()=>s(!0)}),c&&l.a.createElement("div",{className:"checkbox-list"},l.a.createElement("div",null,l.a.createElement("input",{type:"checkbox",id:"selectAll".concat(t),value:"selectAll".concat(t),checked:o.length===a.length,onChange:()=>{o.length===a.length?r([]):r(a)}}),l.a.createElement("label",{htmlFor:"selectAll".concat(t)},"Select All")),d.map(e=>l.a.createElement("div",{key:e},l.a.createElement("input",{type:"checkbox",id:e,value:e,checked:o.includes(e),onChange:()=>(e=>{o.includes(e)?r(o.filter(t=>t!==e)):r([...o,e])})(e)}),l.a.createElement("label",{htmlFor:e},l.a.createElement("span",null,e)))))))};a(85);var j=e=>{let{handleFilteredDataChange:t,countryData:a,level1Data:o,level2Data:r}=e;const[c,i]=Object(n.useState)([]),[u,p]=Object(n.useState)([]),[m,d]=Object(n.useState)([]),[h,f]=Object(n.useState)([]),[g,v]=Object(n.useState)([]),[E,y]=Object(n.useState)([]),[b,P]=Object(n.useState)([]),[C,O]=Object(n.useState)([]),[j,w]=Object(n.useState)([]);return Object(n.useEffect)(()=>{s.a.get("./data/output_country.geojson").then(e=>{P(e.data.features);const t=e.data.features.map(e=>e.properties.Country);f(t)}).catch(e=>{console.error("Error loading output_country.geojson:",e)}),s.a.get("./data/output_level1.geojson").then(e=>{O(e.data.features);const t=e.data.features.map(e=>e.properties.Name_1);v(t)}).catch(e=>{console.error("Error loading output_level1.geojson:",e)}),s.a.get("./data/output_level2.geojson").then(e=>{w(e.data.features);const t=e.data.features.map(e=>e.properties.Name_2);y(t)}).catch(e=>{console.error("Error loading output_level2.geojson:",e)})},[]),Object(n.useEffect)(()=>{const e=C.filter(e=>c.includes(e.properties.Country)).map(e=>e.properties.Name_1);v(e)},[c,C]),Object(n.useEffect)(()=>{const e=j.filter(e=>c.includes(e.properties.Country)&&u.includes(e.properties.Name_1)).map(e=>e.properties.Name_2);y(e)},[c,u,j]),Object(n.useEffect)(()=>{console.log("Filtering data...");const e=[],a=[],n=[];c.length>0||u.length>0||m.length>0?(console.log("Applying filters..."),e.push(...b.filter(e=>0===u.length&&0===m.length&&0===c.length||c.includes(e.properties.Country)).map(e=>({type:"Feature",properties:e.properties,geometry:e.geometry}))),a.push(...C.filter(e=>(console.log("Filtering level 1 data..."),(0===u.length||u.includes(e.properties.Name_1))&&(0===c.length||c.includes(e.properties.Country)))).map(e=>({type:"Feature",properties:e.properties,geometry:e.geometry}))),n.push(...j.filter(e=>(console.log("Filtering level 2 data..."),(0===u.length||u.includes(e.properties.Name_1))&&(0===m.length||m.includes(e.properties.Name_2))&&(0===c.length||c.includes(e.properties.Country)))).map(e=>({type:"Feature",properties:e.properties,geometry:e.geometry})))):(e.push(...b.map(e=>({type:"Feature",properties:e.properties,geometry:e.geometry}))),a.push(...C.map(e=>({type:"Feature",properties:e.properties,geometry:e.geometry}))),n.push(...j.map(e=>({type:"Feature",properties:e.properties,geometry:e.geometry}))));const l={filteredCountryData:{type:"FeatureCollection",features:e},filteredLevel1Data:{type:"FeatureCollection",features:a},filteredLevel2Data:{type:"FeatureCollection",features:n}};console.log("Filtered Country data:",l.filteredCountryData),console.log("Filtered Lv1 data:",l.filteredLevel1Data),console.log("Filtered Lv2 data:",l.filteredLevel2Data),t(l)},[c,u,m,b,C,j]),l.a.createElement("div",null,l.a.createElement("h1",null),l.a.createElement("div",{className:"filter-section"},l.a.createElement(N,{title:"Country",options:h,selectedOptions:c,setSelectedOptions:i})),l.a.createElement("div",{className:"filter-section"},l.a.createElement(N,{title:"Level 1 Name",options:g,selectedOptions:u,setSelectedOptions:p})),l.a.createElement("div",{className:"filter-section"},l.a.createElement(N,{title:"Level 2 Name",options:E,selectedOptions:m,setSelectedOptions:d})))};function w(){const[e,t]=Object(n.useState)(null),[a,o]=Object(n.useState)(null),[r,c]=Object(n.useState)(null),[i,u]=Object(n.useState)(2023),[p,m]=Object(n.useState)(3),[d,v]=Object(n.useState)(null),[E,y]=Object(n.useState)({filteredCountryData:[],filteredLevel1Data:[],filteredLevel2Data:[]}),b=e=>{u(e)},P=e=>{m(e)};return Object(n.useEffect)(()=>{!async function(){try{const e=await s.a.get("./data/output_country.geojson");t(e.data);const a=await s.a.get("./data/output_level1.geojson");o(a.data);const n=await s.a.get("./data/output_level2.geojson");c(n.data),console.log(a,n,"response levels")}catch(e){console.error("Error fetching data:",e)}}()},[]),l.a.createElement("div",null,l.a.createElement(f,{countryData:e,regionInfo:d,onChangeYear:b,onChangeRegion:e=>{v(e)},selectedYear:i,onChangeMonth:P,selectedMonth:p}),l.a.createElement(g,{onChangeYear:b,selectedYear:i,onChangeMonth:P,selectedMonth:p}),l.a.createElement(h,{countryData:e,level1Data:a,level2Data:r,regionInfo:d,onChangeYear:b,selectedYear:i,onChangeMonth:P,selectedMonth:p}),l.a.createElement(j,{handleFilteredDataChange:e=>{y(e)}}),l.a.createElement(O,{countryData:E.filteredCountryData,level1Data:a,level2Data:r,onChangeYear:b,selectedYear:i,onChangeMonth:P,selectedMonth:p}))}r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.8a5b6002.chunk.js.map