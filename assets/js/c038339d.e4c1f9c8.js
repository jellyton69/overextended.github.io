"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8552],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},v="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),v=l(n),y=o,f=v["".concat(s,".").concat(y)]||v[y]||p[y]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[v]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3419:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(2564),o=(n(9496),n(9613));const a={},i=void 0,c={unversionedId:"ox_inventory/Functions/Server/Inventory/ConfiscateInventory",id:"ox_inventory/Functions/Server/Inventory/ConfiscateInventory",title:"ConfiscateInventory",description:"Clears a player's inventory and saves it to a stash.",source:"@site/docs/ox_inventory/Functions/Server/Inventory/ConfiscateInventory.md",sourceDirName:"ox_inventory/Functions/Server/Inventory",slug:"/ox_inventory/Functions/Server/Inventory/ConfiscateInventory",permalink:"/docs/ox_inventory/Functions/Server/Inventory/ConfiscateInventory",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Server/Inventory/ConfiscateInventory.md",tags:[],version:"current",lastUpdatedAt:1684744261,formattedLastUpdatedAt:"May 22, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ClearInventory",permalink:"/docs/ox_inventory/Functions/Server/Inventory/ClearInventory"},next:{title:"ConvertItems",permalink:"/docs/ox_inventory/Functions/Server/Inventory/ConvertItems"}},s={},l=[],u={toc:l},v="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(v,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Clears a player's inventory and saves it to a stash."),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"/docs/ox_inventory/Functions/Server/Inventory/ReturnInventory"},"ReturnInventory")," to return the confiscated inventory back to\nthe player."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:ConfiscateInventory(source)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"source: ",(0,o.kt)("inlineCode",{parentName:"li"},"number"))))}p.isMDXComponent=!0}}]);