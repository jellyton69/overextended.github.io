"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[763],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,v=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(2564),a=(n(9496),n(9613));const o={},i=void 0,l={unversionedId:"ox_inventory/Functions/Server/Inventory/SetMetadata",id:"ox_inventory/Functions/Server/Inventory/SetMetadata",title:"SetMetadata",description:"Sets metadata on the specified slot.",source:"@site/docs/ox_inventory/Functions/Server/Inventory/SetMetadata.md",sourceDirName:"ox_inventory/Functions/Server/Inventory",slug:"/ox_inventory/Functions/Server/Inventory/SetMetadata",permalink:"/docs/ox_inventory/Functions/Server/Inventory/SetMetadata",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Server/Inventory/SetMetadata.md",tags:[],version:"current",lastUpdatedAt:1684744261,formattedLastUpdatedAt:"May 22, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SetMaxWeight",permalink:"/docs/ox_inventory/Functions/Server/Inventory/SetMaxWeight"},next:{title:"SetSlotCount",permalink:"/docs/ox_inventory/Functions/Server/Inventory/SetSlotCount"}},c={},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sets metadata on the specified slot."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"ox_inventory:SetMetadata(inv, slot, metadata)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"inv: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"slot: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"metadata: ",(0,a.kt)("inlineCode",{parentName:"li"},"table"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local ox_inventory = exports.ox_inventory\n\nlocal water = ox_inventory:Search(source, 1, 'water')\nfor k, v in pairs(water) do\n    print('\\n______________'..'\\n- index '..k)\n    print(v.name, 'slot: '..v.slot, 'metadata: '..json.encode(v.metadata))\n    water = v\n    break\nend\n\nwater.metadata.type = 'clean'\nox_inventory:SetMetadata(source, water.slot, water.metadata)\nprint(('modified %sx water in slot %s with new metadata'):format(water.count, water.slot))\n")))}d.isMDXComponent=!0}}]);