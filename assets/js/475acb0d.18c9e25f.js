"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9081],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),v=o,y=m["".concat(s,".").concat(v)]||m[v]||u[v]||i;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(4250),o=(n(9496),n(9613));const i={},a=void 0,l={unversionedId:"ox_inventory/Functions/Server/Inventory/SwapSlots",id:"ox_inventory/Functions/Server/Inventory/SwapSlots",title:"SwapSlots",description:"Swaps slots in specified inventories.",source:"@site/docs/ox_inventory/Functions/Server/Inventory/SwapSlots.md",sourceDirName:"ox_inventory/Functions/Server/Inventory",slug:"/ox_inventory/Functions/Server/Inventory/SwapSlots",permalink:"/docs/ox_inventory/Functions/Server/Inventory/SwapSlots",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Server/Inventory/SwapSlots.md",tags:[],version:"current",lastUpdatedAt:1682563234,formattedLastUpdatedAt:"Apr 27, 2023",frontMatter:{},sidebar:"ox_inventory",previous:{title:"SetSlotCount",permalink:"/docs/ox_inventory/Functions/Server/Inventory/SetSlotCount"},next:{title:"Items",permalink:"/docs/ox_inventory/Functions/Server/Items"}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Swaps slots in specified inventories."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:SwapSlots(fromInventory, toInventory, slot1, slot2)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"fromInventory: ",(0,o.kt)("inlineCode",{parentName:"li"},"table")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"number")),(0,o.kt)("li",{parentName:"ul"},"toInventory: ",(0,o.kt)("inlineCode",{parentName:"li"},"table")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"number")),(0,o.kt)("li",{parentName:"ul"},"slot1: ",(0,o.kt)("inlineCode",{parentName:"li"},"number")),(0,o.kt)("li",{parentName:"ul"},"slot2: ",(0,o.kt)("inlineCode",{parentName:"li"},"number"))))}u.isMDXComponent=!0}}]);