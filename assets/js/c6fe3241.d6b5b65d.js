"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8768],{9613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(9496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[p]="string"==typeof e?e:n,i[1]=u;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5498:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(9496),n=a(5924);const l={tabItem:"tabItem_IfE0"};function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:a},t)}},725:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(2564),n=a(9496),l=a(5924),i=a(3819),u=a(3442),o=a(1233),s=a(6491),c=a(9182);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=d(e),[i,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[o,s]=f({queryString:a,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),k=(()=>{const e=o??p;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{k&&u(k)}),[k]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),b(e)}),[s,b,l]),tabValues:l}}var k=a(7502);const h={tabList:"tabList_qavC",tabItem:"tabItem_f8Aq"};function y(e){let{className:t,block:a,selectedValue:u,selectValue:o,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),r=s[a].value;r!==u&&(p(t),o(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":u===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function g(e){const t=b(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},n.createElement(y,(0,r.Z)({},e,t)),n.createElement(v,(0,r.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return n.createElement(g,(0,r.Z)({key:String(t)},e))}},7863:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>u,metadata:()=>s,toc:()=>p});var r=a(2564),n=(a(9496),a(9613)),l=a(725),i=a(5498);const u={title:"Skill Check"},o=void 0,s={unversionedId:"ox_lib/Modules/Interface/Client/skillcheck",id:"ox_lib/Modules/Interface/Client/skillcheck",title:"Skill Check",description:"lib.skillCheck",source:"@site/docs/ox_lib/Modules/Interface/Client/skillcheck.md",sourceDirName:"ox_lib/Modules/Interface/Client",slug:"/ox_lib/Modules/Interface/Client/skillcheck",permalink:"/docs/ox_lib/Modules/Interface/Client/skillcheck",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Modules/Interface/Client/skillcheck.md",tags:[],version:"current",lastUpdatedAt:1684744261,formattedLastUpdatedAt:"May 22, 2023",frontMatter:{title:"Skill Check"},sidebar:"tutorialSidebar",previous:{title:"Radial Menu",permalink:"/docs/ox_lib/Modules/Interface/Client/radial"},next:{title:"TextUI",permalink:"/docs/ox_lib/Modules/Interface/Client/textui"}},c={},p=[{value:"lib.skillCheck",id:"libskillcheck",level:3},{value:"Usage Example",id:"usage-example",level:3}],d={toc:p},m="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"libskillcheck"},"lib.skillCheck"),(0,n.kt)("p",null,"Runs a skill check with the defined difficulty."),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"lib.skillCheck(difficulty, inputs)\n"))),(0,n.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.skillCheck(difficulty, inputs)\n")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"difficulty: ",(0,n.kt)("inlineCode",{parentName:"li"},"easy")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"medium")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"hard")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Can set custom difficulty by sending a object instead of string",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"{ areaSize: ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),", speedMultiplier: ",(0,n.kt)("inlineCode",{parentName:"li"},"number")," }",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"easy: { areaSize: 50, speedMultiplier: 1 }"),(0,n.kt)("li",{parentName:"ul"},"medium: { areaSize: 40, speedMultiplier: 1.5 }"),(0,n.kt)("li",{parentName:"ul"},"hard: { areaSize: 25, speedMultiplier: 1.75 }"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"areaSize")," size of the area in degrees."))),(0,n.kt)("li",{parentName:"ul"},"Sending an array will chain the checks together and return false if one fails and true if all succeed"))),(0,n.kt)("li",{parentName:"ul"},"inputs: ",(0,n.kt)("inlineCode",{parentName:"li"},"string[]"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Picks a random key from the inputs table to use on each skill check pass.")))),(0,n.kt)("h3",{id:"usage-example"},"Usage Example"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"local success = lib.skillCheck({'easy', 'easy', {areaSize = 60, speedMultiplier = 2}, 'hard'}, {'w', 'a', 's', 'd'})\n"))),(0,n.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nconst success = await lib.skillCheck(['easy', 'easy', {areaSize: 60, speedMultiplier: 2}, 'hard'], ['w', 'a', 's', 'd'])\n")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/rgfkn0S.png",alt:"skillcheck_example"})))}f.isMDXComponent=!0}}]);