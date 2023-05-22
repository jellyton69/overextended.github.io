"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5987],{9613:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>b});var n=a(9496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),p=s(a),d=l,b=p["".concat(o,".").concat(d)]||p[d]||c[d]||r;return a?n.createElement(b,i(i({ref:t},m),{},{components:a})):n.createElement(b,i({ref:t},m))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[p]="string"==typeof e?e:l,i[1]=u;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5498:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(9496),l=a(5924);const r={tabItem:"tabItem_IfE0"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:a},t)}},725:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(2564),l=a(9496),r=a(5924),i=a(3819),u=a(3442),o=a(1233),s=a(6491),m=a(9182);function p(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function c(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,u.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=c(e),[i,u]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[o,s]=b({queryString:a,groupId:n}),[p,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,m.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=o??p;return d({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{f&&u(f)}),[f]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),k(e)}),[s,k,r]),tabValues:r}}var f=a(7502);const N={tabList:"tabList_qavC",tabItem:"tabItem_f8Aq"};function v(e){let{className:t,block:a,selectedValue:u,selectValue:o,tabValues:s}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),c=e=>{const t=e.currentTarget,a=m.indexOf(t),n=s[a].value;n!==u&&(p(t),o(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>m.push(e),onKeyDown:d,onClick:c},i,{className:(0,r.Z)("tabs__item",N.tabItem,i?.className,{"tabs__item--active":u===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function T(e){const t=k(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",N.tabList)},l.createElement(v,(0,n.Z)({},e,t)),l.createElement(g,(0,n.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return l.createElement(T,(0,n.Z)({key:String(t)},e))}},4958:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>b,frontMatter:()=>u,metadata:()=>s,toc:()=>p});var n=a(2564),l=(a(9496),a(9613)),r=a(725),i=a(5498);const u={},o=void 0,s={unversionedId:"ox_lib/Modules/Streaming/Client",id:"ox_lib/Modules/Streaming/Client",title:"Client",description:"Check if assets exist, such as models, and loads them into memory.",source:"@site/docs/ox_lib/Modules/Streaming/Client.md",sourceDirName:"ox_lib/Modules/Streaming",slug:"/ox_lib/Modules/Streaming/Client",permalink:"/docs/ox_lib/Modules/Streaming/Client",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Modules/Streaming/Client.md",tags:[],version:"current",lastUpdatedAt:1684744261,formattedLastUpdatedAt:"May 22, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Client",permalink:"/docs/ox_lib/Modules/Raycast/Client"},next:{title:"Shared",permalink:"/docs/ox_lib/Modules/Table/Shared"}},m={},p=[{value:"lib.requestAnimDict",id:"librequestanimdict",level:3},{value:"lib.requestAnimSet",id:"librequestanimset",level:3},{value:"lib.requestModel",id:"librequestmodel",level:3},{value:"lib.requestStreamedTextureDict",id:"librequeststreamedtexturedict",level:3},{value:"lib.requestNamedPtfxAsset",id:"librequestnamedptfxasset",level:3},{value:"lib.requestScaleformMovie",id:"librequestscaleformmovie",level:3},{value:"lib.requestWeaponAsset",id:"librequestweaponasset",level:3},{value:"WeaponResourceFlags",id:"weaponresourceflags",level:3},{value:"ExtraWeaponComponentFlags",id:"extraweaponcomponentflags",level:3}],c={toc:p},d="wrapper";function b(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Check if assets exist, such as models, and loads them into memory.",(0,l.kt)("br",{parentName:"p"}),"\n","Throws errors for invalid assets and returns true if the asset is loaded."),(0,l.kt)("h3",{id:"librequestanimdict"},"lib.requestAnimDict"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.requestAnimDict(dict, timeout)\n"))),(0,l.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.requestAnimDict(dict, timeout)\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"dict: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"timeout: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"100"))))),(0,l.kt)("h3",{id:"librequestanimset"},"lib.requestAnimSet"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.requestAnimSet(set, timeout)\n"))),(0,l.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.requestAnimSet(set, timeout)\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"set: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"timeout: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"100"))))),(0,l.kt)("h3",{id:"librequestmodel"},"lib.requestModel"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.requestModel(model, timeout)\n"))),(0,l.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.requestModel(model, timeout)\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"model: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"timeout: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"100"))))),(0,l.kt)("h3",{id:"librequeststreamedtexturedict"},"lib.requestStreamedTextureDict"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.requestStreamedTextureDict(dict, timeout)\n"))),(0,l.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.requestStreamedTextureDict(dict, timeout)\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"dict: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"timeout: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"100"))))),(0,l.kt)("h3",{id:"librequestnamedptfxasset"},"lib.requestNamedPtfxAsset"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.requestNamedPtfxAsset(fxName, timeout)\n"))),(0,l.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.requestNamedPtfxAsset(fxName, timeout)\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"fxName: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"timeout: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"100"))))),(0,l.kt)("h3",{id:"librequestscaleformmovie"},"lib.requestScaleformMovie"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.requestScaleformMovie(scaleformMovie, timeout)\n"))),(0,l.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.requestScaleformMovie(scaleformMovie, timeout)\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"dict: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"timeout: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"100"))))),(0,l.kt)("h3",{id:"librequestweaponasset"},"lib.requestWeaponAsset"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.requestWeaponAsset(weaponType, timeout, weaponResourceFlags, extraWeaponComponentFlags)\n"))),(0,l.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.requestWeaponAsset(weaponType, timeout, weaponResourceFlags, extraWeaponComponentFlags)\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"weaponType: ",(0,l.kt)("inlineCode",{parentName:"li"},"string | number")),(0,l.kt)("li",{parentName:"ul"},"timeout: ",(0,l.kt)("inlineCode",{parentName:"li"},"number?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Number of ticks to wait for the asset to load. Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"500")))),(0,l.kt)("li",{parentName:"ul"},"weaponResourceFlags: ",(0,l.kt)("inlineCode",{parentName:"li"},"WeaponResourceFlags?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"31")))),(0,l.kt)("li",{parentName:"ul"},"extraWeaponComponentFlags: ",(0,l.kt)("inlineCode",{parentName:"li"},"ExtraWeaponComponentFlags?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"0"))))),(0,l.kt)("p",null,"Return:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"string | number?")," weaponType")),(0,l.kt)("h3",{id:"weaponresourceflags"},"WeaponResourceFlags"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1 WRF_REQUEST_BASE_ANIMS\n2 WRF_REQUEST_COVER_ANIMS\n4 WRF_REQUEST_MELEE_ANIMS\n8 WRF_REQUEST_MOTION_ANIMS\n16 WRF_REQUEST_STEALTH_ANIMS\n32 WRF_REQUEST_ALL_MOVEMENT_VARIATION_ANIMS\n31 WRF_REQUEST_ALL_ANIMS\n")),(0,l.kt)("h3",{id:"extraweaponcomponentflags"},"ExtraWeaponComponentFlags"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"0 WEAPON_COMPONENT_NONE\n1 WEAPON_COMPONENT_FLASH\n2 WEAPON_COMPONENT_SCOPE\n4 WEAPON_COMPONENT_SUPP\n8 WEAPON_COMPONENT_SCLIP2\n16 WEAPON_COMPONENT_GRIP\n")))}b.isMDXComponent=!0}}]);