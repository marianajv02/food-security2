(this["webpackJsonpmapbox-react2"]=this["webpackJsonpmapbox-react2"]||[]).push([[0],{29:function(e,t,a){e.exports=a(86)},34:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),l=a.n(o),c=(a(12),a(34),a(5)),s=a.n(c),i=a(8),u=a.n(i);a(52);var p=function(){const e=["#53ca57","#ffe252","#fa890f","#eb3333","#900101e3","#ffffff"];return r.a.createElement("nav",{className:"legend"},r.a.createElement("div",{className:"legend-container"},["Phase 1","Phase 2","Phase 3","Phase 4","Phase 5","No data"].map((t,a)=>r.a.createElement("div",{key:a,className:"legend-item"},r.a.createElement("span",{className:"legend-key",style:{backgroundColor:e[a]}}),r.a.createElement("span",{className:"legend-value"},t))),r.a.createElement("div",{className:"legend-item"},r.a.createElement("img",{className:"legend-image",src:"/food-security2/images/stripes2.jpg",alt:"stripes",width:"20",height:"20"}),r.a.createElement("span",{className:"legend-value"},"Inaccessible Protocole"))))};a(53),a(54);function m(e){return e?e.toLocaleString("en-US",{maximumFractionDigits:0}):""}function d(e,t){return(t?(e||0)/t*100:0).toFixed(2)}var h=function(e){let{countryData:t,level1Data:a,level2Data:o,regionInfo:l,selectedYear:c,selectedMonth:s}=e;const[i,u]=Object(n.useState)([]);if(Object(n.useEffect)(()=>{if(t&&a&&o){const e=[...t.features,...a.features,...o.features];u(e)}},[l]),!l)return null;const p=l.key;let h=null;i&&(h=i.find(e=>e.properties.Key===p));const f=h?h.properties:{},g=f.Name_2,v=m(f["POP-".concat(c,"-0").concat(s)]),E=m(f["PH1-".concat(c,"-0").concat(s)]),y=d(parseFloat(f["PH1-".concat(c,"-0").concat(s)]),parseFloat(f["POP-".concat(c,"-0").concat(s)])),b=m(f["PH2-".concat(c,"-0").concat(s)]),P=d(parseFloat(f["PH2-".concat(c,"-0").concat(s)]),parseFloat(f["POP-".concat(c,"-0").concat(s)])),C=m(f["PH3-".concat(c,"-0").concat(s)]),O=d(parseFloat(f["PH3-".concat(c,"-0").concat(s)]),parseFloat(f["POP-".concat(c,"-0").concat(s)])),N=m(f["PH4-".concat(c,"-0").concat(s)]),j=d(parseFloat(f["PH4-".concat(c,"-0").concat(s)]),parseFloat(f["POP-".concat(c,"-0").concat(s)])),D=m(f["PH5-".concat(c,"-0").concat(s)]),w=d(parseFloat(f["PH5-".concat(c,"-0").concat(s)]),parseFloat(f["POP-".concat(c,"-0").concat(s)]));return r.a.createElement("nav",{className:"sidebar"},r.a.createElement("div",{className:"sidebar-container"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:"/food-security2/images/family_icon.jpg",alt:"Family Icon"}),r.a.createElement("span",{className:"logo-text"},"Food and nutrition situation ",c," ")," "),r.a.createElement("div",{className:"region-info"},r.a.createElement("h2",null,r.a.createElement("div",null,r.a.createElement("p",null,g))),r.a.createElement("div",{className:"info-row"},r.a.createElement("h4",null,"Total population:"),r.a.createElement("p",null,v)),r.a.createElement("div",{className:"info-row"},r.a.createElement("h4",null,"Phase 1:"),r.a.createElement("p",null,E),r.a.createElement("p",null,y,"%")),r.a.createElement("div",{className:"info-row"},r.a.createElement("h4",null,"Phase 2:"),r.a.createElement("p",null,b),r.a.createElement("p",null,P,"%")),r.a.createElement("div",{className:"info-row"},r.a.createElement("h4",null,"Phase 3:"),r.a.createElement("p",null,C),r.a.createElement("p",null,O,"%")),r.a.createElement("div",{className:"info-row"},r.a.createElement("h4",null,"Phase 4:"),r.a.createElement("p",null,N),r.a.createElement("p",null,j,"%")),r.a.createElement("div",{className:"info-row"},r.a.createElement("h4",null,"Phase 5:"),r.a.createElement("p",null,D),r.a.createElement("p",null,w,"%")))))};u.a.accessToken="pk.eyJ1IjoibWFyaWFuYWp2LSIsImEiOiJjbGs3eXJmbzEwYXR3M2RxbnRuOHVkaHV3In0.rVa0wb_O5OTeuk07J90w5A";var f=function(e){let{selectedYear:t,selectedMonth:a,onChangeRegion:o,countryData:l,protocoleData:c}=e;const s=Object(n.useRef)(null),i=Object(n.useRef)(null),[m,d]=Object(n.useState)(0),[h,f]=Object(n.useState)(17),[g,v]=Object(n.useState)(3.4),[E,y]=Object(n.useState)(null),b=()=>{d(i.current.getCenter().lng.toFixed(4)),f(i.current.getCenter().lat.toFixed(4)),v(i.current.getZoom().toFixed(2))},P=["output_country-2uwmmy","output_level1-5iewsu","output_level2-8nur76"],C=e=>{const t=e.features[0],a=e.lngLat,n={name:t.properties.Name_2,key:t.properties.Key};let r=null;r&&r.remove(),r=new u.a.Popup({maxWidth:"100px",maxHeight:"50px",className:"custom-popup"}).setLngLat(a).setHTML("<h5>".concat(t.properties.Name_2,"</h5>")).addTo(i.current),o(n)};return Object(n.useEffect)(()=>{let e=!0;if(i.current){P.forEach(e=>{i.current.getLayer(e)&&i.current.setPaintProperty(e,"fill-color",function(e,t,a){const n=parseInt(e),r=parseInt(t);return a.features.some(e=>"CLAS-".concat(n,"-0").concat(r)in e.properties)?["case",["==",["number",["get","CLAS-".concat(n,"-0").concat(r)]],1],"#53ca57",["==",["number",["get","CLAS-".concat(n,"-0").concat(r)]],2],"#ffe252",["==",["number",["get","CLAS-".concat(n,"-0").concat(r)]],3],"#fa890f",["==",["number",["get","CLAS-".concat(n,"-0").concat(r)]],4],"#eb3333","#ffffff"]:"#ffffff"}(t,a,l))});const e="output-protocol-7nndf6";i.current.getLayer(e)&&i.current.setPaintProperty(e,"fill-pattern",function(e,t,a){const n=parseInt(e),r=parseInt(t);return a.features.some(e=>{const t="PROT-".concat(n,"-0").concat(r);return console.log(t),t in e.properties})?["case",["==",["number",["get","PROT-".concat(n,"-0").concat(r)]],1],"stripes","transparent"]:"transparent"}(t,a,c))}else i.current=new u.a.Map({container:s.current,style:"mapbox://styles/marianajv-/cllf4b5be012q01pb6nqq4k5x",center:[m,h],zoom:g,sources:{stripes:{type:"image",url:"/images/stripes2.jpg",coordinates:[[0,0],[1,0],[1,1],[0,1]]}}}),i.current.on("move",b),P.forEach(e=>{i.current.on("click",e,C)});return()=>{e=!1}},[t,a]),Object(n.useEffect)(()=>{let e=!0;return i.current&&i.current.on("move",b),()=>{e=!1}},[h,m,g]),r.a.createElement("div",{className:"view-container"},r.a.createElement("div",{ref:s,className:"map-container"}),r.a.createElement(p,null))};a(55);var g=e=>{let{onChangeYear:t,onChangeMonth:a}=e;const[o,l]=Object(n.useState)(2023),[c,s]=Object(n.useState)(null),i=e=>{const t={March:3,June:6,November:11}[e];void 0!==t&&(s(t),a&&a(t))};return r.a.createElement("div",{className:"timebar"},r.a.createElement("div",{className:"year-bar"},r.a.createElement("input",{type:"range",min:"0",max:"1",step:"0.01",value:(o-2014)/9,onChange:e=>{const a=parseFloat(e.target.value),n=Math.round(2014+9*a);l(n),t&&t(n)},className:"slider"}),r.a.createElement("div",{className:"year-indicator"},o)),r.a.createElement("div",{className:"month-buttons"},r.a.createElement("button",{className:3===c?"selected":"",onClick:()=>i("March")},"March"),r.a.createElement("button",{className:6===c?"selected":"",onClick:()=>i("June")},"June"),r.a.createElement("button",{className:11===c?"selected":"",onClick:()=>i("November")},"November")))},v=a(28);a(81),a(82),a(83);function E(e){return null===e?"0":e.toLocaleString("en-US",{maximumFractionDigits:0})}function y(e,t){return(e/t*100).toFixed(2)}function b(e,t){return t.reduce((t,a)=>t+!a.excludeFromTotals?parseFloat(a[e].replace(/,/g,"")):0,0)}function P(e,t,a){const n=e.properties["POP-".concat(t,"-0").concat(a)];return void 0===n?{Country:e.properties.Country,Level1:e.properties.Name_1,Level2:e.properties.Name_2,Population:"Data not available","Phase 1":"Data not available","Phase 2":"Data not available","Phase 3":"Data not available","Phase 4":"Data not available","Phase 5":"Data not available","Phase 3-5":"Data not available","%":"Data not available"}:{Country:C(e,0),Level1:C(e,1),Level2:C(e,2),Population:E(n),"Phase 1":E(e.properties["PH1-".concat(t,"-0").concat(a)]),"Phase 2":E(e.properties["PH2-".concat(t,"-0").concat(a)]),"Phase 3":E(e.properties["PH3-".concat(t,"-0").concat(a)]),"Phase 4":E(e.properties["PH4-".concat(t,"-0").concat(a)]),"Phase 5":E(e.properties["PH5-".concat(t,"-0").concat(a)]),"Phase 3-5":E(e.properties["PH3:5-".concat(t,"-0").concat(a)]),"%":y(e.properties["PH3:5-".concat(t,"-0").concat(a)],n),Key:e.properties.Key}}function C(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const a=["Country","Name_1","Name_2"],n=a[t],r=e.properties[n];return t>0&&r===e.properties[a[t-1]]?"":r}var O=e=>{let{countryData:t,level1Data:a,level2Data:o,selectedYear:l,selectedMonth:c}=e;const[s,i]=Object(n.useState)([{field:"Country",rowgroup:!0,hide:!1,headerClass:"custom-header",cellClass:"custom-cell-bold",width:100},{field:"Level1",rowgroup:!0,hide:!1,headerClass:"custom-header",width:100},{field:"Level2",rowgroup:!0,hide:!1,headerClass:"custom-header",width:100},{field:"Population",headerClass:"custom-header",width:120},{field:"Phase 1",headerClass:"custom-header1",width:90},{field:"Phase 2",headerClass:"custom-header2",width:90},{field:"Phase 3",headerClass:"custom-header3",width:90},{field:"Phase 4",headerClass:"custom-header4",width:90},{field:"Phase 5",headerClass:"custom-header5",width:90},{field:"Phase 3-5",headerClass:"custom-header5",width:100},{field:"%",headerClass:"custom-header5",width:60}]);let u=[];const[p,m]=Object(n.useState)(null);if(!t||!t.features)return null;const d=t.features.map(e=>P(e,l,c)),h={Country:"Total",Population:E(b("Population",d)),"Phase 1":E(b("Phase 1",d)),"Phase 2":E(b("Phase 2",d)),"Phase 3":E(b("Phase 3",d)),"Phase 4":E(b("Phase 4",d)),"Phase 5":E(b("Phase 5",d)),"Phase 3-5":E(b("Phase 3-5",d)),"%":y(b("Phase 3-5",d),b("Population",d)),rowClass:"total-row"},f=[...d,h];u=0===u.length?f:u;return r.a.createElement("div",{className:"ag-theme-alpine"},r.a.createElement(v.AgGridReact,{rowData:u,groupDisplayType:"groupRows",columnDefs:s,onRowClicked:function(e){const t=e.data,n=e.api,r=t.level||0;if(2===r)return;const s=["Country","Level1"][r],i=t[s],u=[a.features,o.features].map(e=>e.map(e=>P(e,l,c)))[r].filter(e=>e[s]===i);t.expanded?(t.expanded=!1,n.applyTransaction({remove:u.map(e=>({Key:e.Key}))})):(t.expanded=!0,n.applyTransaction({add:u.map(e=>({...e,excludeFromTotals:!0,level:r+1,expanded:!1})),addIndex:e.rowIndex+1}))},getRowId:e=>e.data.Key}))};a(84);var N=e=>{let{title:t,options:a,selectedOptions:o,setSelectedOptions:l}=e;const[c,s]=Object(n.useState)(!1),[i,u]=Object(n.useState)(""),p=Object(n.useRef)(null),m=e=>{p.current.contains(e.target)||s(!1)};Object(n.useEffect)(()=>(document.addEventListener("click",m),()=>{document.removeEventListener("click",m)}),[]);const d=a.filter(e=>null!=e).filter(e=>e.toLowerCase().includes(i.toLowerCase()));return r.a.createElement("div",{className:"filter-container"},r.a.createElement("label",null,t,":"),r.a.createElement("div",{className:"search-dropdown",ref:p},r.a.createElement("input",{type:"text",placeholder:"Search by ".concat(t),value:i,onChange:e=>{u(e.target.value)},onClick:()=>s(!0)}),c&&r.a.createElement("div",{className:"checkbox-list"},r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",id:"selectAll".concat(t),value:"selectAll".concat(t),checked:o.length===a.length,onChange:()=>{o.length===a.length?l([]):l(a)}}),r.a.createElement("label",{htmlFor:"selectAll".concat(t)},"Select All")),d.map(e=>r.a.createElement("div",{key:e},r.a.createElement("input",{type:"checkbox",id:e,value:e,checked:o.includes(e),onChange:()=>(e=>{o.includes(e)?l(o.filter(t=>t!==e)):l([...o,e])})(e)}),r.a.createElement("label",{htmlFor:e},r.a.createElement("span",null,e)))))))};a(85);var j=e=>{let{handleFilteredDataChange:t,countryData:a,level1Data:o,level2Data:l}=e;const[c,i]=Object(n.useState)([]),[u,p]=Object(n.useState)([]),[m,d]=Object(n.useState)([]),[h,f]=Object(n.useState)([]),[g,v]=Object(n.useState)([]),[E,y]=Object(n.useState)([]),[b,P]=Object(n.useState)([]),[C,O]=Object(n.useState)([]),[j,D]=Object(n.useState)([]);return Object(n.useEffect)(()=>{s.a.get("./data/output_country.geojson").then(e=>{P(e.data.features);const t=e.data.features.map(e=>e.properties.Country);f(t)}).catch(e=>{console.error("Error loading output_country.geojson:",e)}),s.a.get("./data/output_level1.geojson").then(e=>{O(e.data.features);const t=e.data.features.map(e=>e.properties.Name_1);v(t)}).catch(e=>{console.error("Error loading output_level1.geojson:",e)}),s.a.get("./data/output_level2.geojson").then(e=>{D(e.data.features);const t=e.data.features.map(e=>e.properties.Name_2);y(t)}).catch(e=>{console.error("Error loading output_level2.geojson:",e)})},[]),Object(n.useEffect)(()=>{const e=C.filter(e=>c.includes(e.properties.Country)).map(e=>e.properties.Name_1);v(e)},[c,C]),Object(n.useEffect)(()=>{const e=j.filter(e=>c.includes(e.properties.Country)&&u.includes(e.properties.Name_1)).map(e=>e.properties.Name_2);y(e)},[c,u,j]),Object(n.useEffect)(()=>{console.log("Filtering data...");const e=[],a=[],n=[];c.length>0||u.length>0||m.length>0?(console.log("Applying filters..."),e.push(...b.filter(e=>0===u.length&&0===m.length&&0===c.length||c.includes(e.properties.Country)).map(e=>({type:"Feature",properties:e.properties,geometry:e.geometry}))),a.push(...C.filter(e=>(console.log("Filtering level 1 data..."),(0===u.length||u.includes(e.properties.Name_1))&&(0===c.length||c.includes(e.properties.Country)))).map(e=>({type:"Feature",properties:e.properties,geometry:e.geometry}))),n.push(...j.filter(e=>(console.log("Filtering level 2 data..."),(0===u.length||u.includes(e.properties.Name_1))&&(0===m.length||m.includes(e.properties.Name_2))&&(0===c.length||c.includes(e.properties.Country)))).map(e=>({type:"Feature",properties:e.properties,geometry:e.geometry})))):(e.push(...b.map(e=>({type:"Feature",properties:e.properties,geometry:e.geometry}))),a.push(...C.map(e=>({type:"Feature",properties:e.properties,geometry:e.geometry}))),n.push(...j.map(e=>({type:"Feature",properties:e.properties,geometry:e.geometry}))));const r={filteredCountryData:{type:"FeatureCollection",features:e},filteredLevel1Data:{type:"FeatureCollection",features:a},filteredLevel2Data:{type:"FeatureCollection",features:n}};console.log("Filtered Country data:",r.filteredCountryData),console.log("Filtered Lv1 data:",r.filteredLevel1Data),console.log("Filtered Lv2 data:",r.filteredLevel2Data),t(r)},[c,u,m,b,C,j]),r.a.createElement("div",null,r.a.createElement("h1",null),r.a.createElement("div",{className:"filter-section"},r.a.createElement(N,{title:"Country",options:h,selectedOptions:c,setSelectedOptions:i})),r.a.createElement("div",{className:"filter-section"},r.a.createElement(N,{title:"Level 1 Name",options:g,selectedOptions:u,setSelectedOptions:p})),r.a.createElement("div",{className:"filter-section"},r.a.createElement(N,{title:"Level 2 Name",options:E,selectedOptions:m,setSelectedOptions:d})))};function D(){const[e,t]=Object(n.useState)(null),[a,o]=Object(n.useState)(null),[l,c]=Object(n.useState)(null),[i,u]=Object(n.useState)(null),[p,m]=Object(n.useState)(2023),[d,v]=Object(n.useState)(3),[E,y]=Object(n.useState)(null),[b,P]=Object(n.useState)({filteredCountryData:[],filteredLevel1Data:[],filteredLevel2Data:[]}),C=e=>{m(e)},N=e=>{v(e)};return Object(n.useEffect)(()=>{!async function(){try{const e=await s.a.get("./data/output_country.geojson");t(e.data);const a=await s.a.get("./data/output_level1.geojson");o(a.data);const n=await s.a.get("./data/output_level2.geojson");c(n.data);const r=await s.a.get("./data/output_protocol.geojson");u(r.data)}catch(e){console.error("Error fetching data:",e)}}()},[]),r.a.createElement("div",{className:"container"},r.a.createElement(f,{protocoleData:i,countryData:e,regionInfo:E,onChangeYear:C,onChangeRegion:e=>{y(e)},selectedYear:p,onChangeMonth:N,selectedMonth:d}),r.a.createElement(g,{onChangeYear:C,selectedYear:p,onChangeMonth:N,selectedMonth:d}),r.a.createElement(h,{countryData:e,level1Data:a,level2Data:l,regionInfo:E,onChangeYear:C,selectedYear:p,onChangeMonth:N,selectedMonth:d}),r.a.createElement(j,{handleFilteredDataChange:e=>{P(e)}}),r.a.createElement(O,{countryData:b.filteredCountryData,level1Data:b.filteredLevel1Data,level2Data:b.filteredLevel2Data,onChangeYear:C,selectedYear:p,onChangeMonth:N,selectedMonth:d}))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.1c1be38c.chunk.js.map