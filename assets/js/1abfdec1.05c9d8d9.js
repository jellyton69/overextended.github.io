"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8506],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var l=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=l.createContext({}),u=function(e){var t=l.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},b=l.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(r),d=a,k=b["".concat(o,".").concat(d)]||b[d]||p[d]||n;return r?l.createElement(k,i(i({ref:t},s),{},{components:r})):l.createElement(k,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<n;u++)i[u]=r[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,r)}b.displayName="MDXCreateElement"},3585:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>u});var l=r(4250),a=(r(9496),r(9613));const n={},i=void 0,c={unversionedId:"ox_lib/Callback/Server",id:"ox_lib/Callback/Server",title:"Server",description:"Trigger Client Callback",source:"@site/docs/ox_lib/Callback/Server.md",sourceDirName:"ox_lib/Callback",slug:"/ox_lib/Callback/Server",permalink:"/docs/ox_lib/Callback/Server",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Callback/Server.md",tags:[],version:"current",lastUpdatedAt:1675508366,formattedLastUpdatedAt:"Feb 4, 2023",frontMatter:{},sidebar:"ox_lib",previous:{title:"Client",permalink:"/docs/ox_lib/Callback/Client"},next:{title:"Client",permalink:"/docs/ox_lib/DisableControls/Client"}},o={},u=[{value:"Trigger Client Callback",id:"trigger-client-callback",level:2},{value:"lib.callback",id:"libcallback",level:3},{value:"lib.callback.await",id:"libcallbackawait",level:3},{value:"Register Server Callback",id:"register-server-callback",level:2},{value:"lib.callback.register",id:"libcallbackregister",level:3}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,l.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"trigger-client-callback"},"Trigger Client Callback"),(0,a.kt)("h3",{id:"libcallback"},"lib.callback"),(0,a.kt)("p",null,"The response is handled in a separate coroutine."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.callback(name, source, cb, ...)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"source: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"cb: ",(0,a.kt)("inlineCode",{parentName:"li"},"function")),(0,a.kt)("li",{parentName:"ul"},"...: ",(0,a.kt)("inlineCode",{parentName:"li"},"any"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.callback('ox:getNearbyVehicles', source, function(vehicles)\n    for i = 1, #vehicles do\n        DeleteEntity(entity)\n    end\nend, args.radius)\n")),(0,a.kt)("h3",{id:"libcallbackawait"},"lib.callback.await"),(0,a.kt)("p",null,"The current coroutine is yielded until a response is received."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.callback.await(name, source, ...)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"source: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"...: ",(0,a.kt)("inlineCode",{parentName:"li"},"any"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local vehicles = lib.callback.await('ox:getNearbyVehicles', source, args.radius)\n\nfor i = 1, #vehicles do\n    DeleteEntity(entity)\nend\n")),(0,a.kt)("h2",{id:"register-server-callback"},"Register Server Callback"),(0,a.kt)("h3",{id:"libcallbackregister"},"lib.callback.register"),(0,a.kt)("p",null,"Register an event handler for responding to client requests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.callback.register(name, cb)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"cb: ",(0,a.kt)("inlineCode",{parentName:"li"},"function"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.callback.register('ox_inventory:getItemCount', function(source, item, metadata, target)\n    local inventory = target and Inventory(target) or Inventory(source)\n    return (inventory and Inventory.GetItem(inventory, item, metadata, true)) or 0\nend)\n")))}p.isMDXComponent=!0}}]);