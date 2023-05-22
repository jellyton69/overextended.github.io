"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6508],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5498:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(9496),a=n(5924);const o={tabItem:"tabItem_IfE0"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},725:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(2564),a=n(9496),o=n(5924),l=n(3819),i=n(3442),u=n(1233),s=n(6491),c=n(9182);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=m(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,s]=f({queryString:n,groupId:r}),[p,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=u??p;return d({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),v(e)}),[s,v,o]),tabValues:o}}var b=n(7502);const y={tabList:"tabList_qavC",tabItem:"tabItem_f8Aq"};function h(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==i&&(p(t),u(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(g,(0,r.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},2850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(2564),a=(n(9496),n(9613)),o=n(725),l=n(5498);const i={},u=void 0,s={unversionedId:"ox_inventory/Functions/Client/Inventory/Search",id:"ox_inventory/Functions/Client/Inventory/Search",title:"Search",description:"Searches the inventory for an item, or list of items, with the result varying based on the first argument.",source:"@site/docs/ox_inventory/Functions/Client/Inventory/Search.md",sourceDirName:"ox_inventory/Functions/Client/Inventory",slug:"/ox_inventory/Functions/Client/Inventory/Search",permalink:"/docs/ox_inventory/Functions/Client/Inventory/Search",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Client/Inventory/Search.md",tags:[],version:"current",lastUpdatedAt:1684744261,formattedLastUpdatedAt:"May 22, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetSlotsWithItem",permalink:"/docs/ox_inventory/Functions/Client/Inventory/GetSlotsWithItem"},next:{title:"Items",permalink:"/docs/ox_inventory/Functions/Client/Items"}},c={},p=[{value:"Count",id:"count",level:3},{value:"Slots",id:"slots",level:3}],m={toc:p},d="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Searches the inventory for an item, or list of items, with the result varying based on the first argument."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:Search(search, item, metadata)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"search: ",(0,a.kt)("inlineCode",{parentName:"li"},"'slots'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'count'"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'slots'")," returns a table of slots where the item was found at."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'count'")," returns the count of the specified item in player's inventory. If searching for multiple items\nreturns key-value pairs of itemName = count."))),(0,a.kt)("li",{parentName:"ul"},"item: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Can be a single item name or array of item names."))),(0,a.kt)("li",{parentName:"ul"},"metadata?: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If metadata is provided as a string it will search the item's ",(0,a.kt)("inlineCode",{parentName:"li"},"metadata.type")," property.")))),(0,a.kt)("h3",{id:"count"},"Count"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"1",label:"Single item",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local count = exports.ox_inventory:Search('count', 'water')\nprint('You have '..count.. ' water')\n"))),(0,a.kt)(l.Z,{value:"2",label:"Multiple items",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local inventory = exports.ox_inventory:Search('count', {'meat', 'skin'}, {grade=\"1\"})\n\nif inventory then\n    for name, count in pairs(inventory) do\n        print('You have '..count..' '..name)\n    end\nend\n")))),(0,a.kt)("h3",{id:"slots"},"Slots"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"1",label:"Single item",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local water = exports.ox_inventory:Search('slots', 'water')\nlocal count = 0\nfor _, v in pairs(water) do\n    print(v.slot..' contains '..v.count..' water '..json.encode(v.metadata))\n    count = count + v.count\nend\nprint('You have '..count..' water')\n"))),(0,a.kt)(l.Z,{value:"2",label:"Multiple items",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local items = exports.ox_inventory:Search('slots', {'meat', 'skin'}, 'deer')\n\nif items then\n    for name, data in pairs(items) do\n        local count = 0\n        for _, v in pairs(data) do\n            if v.slot then\n                print(v.slot..' contains '..v.count..' '..name..' '..json.encode(v.metadata))\n                count = count + v.count\n            end\n        end\n        print('You have '..count..' '..name)\n    end\nend\n")))))}f.isMDXComponent=!0}}]);