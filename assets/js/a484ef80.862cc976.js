"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7150],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,v=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(v,l(l({ref:t},u),{},{components:n})):r.createElement(v,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6489:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(9496),a=n(5924);const o="tabItem_De_A";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},3408:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(4250),a=n(9496),o=n(5924),l=n(6704),i=n(8876),s=n(4138),p=n(2509);const u="tabList_V3hT",c="tabItem_B35_";function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:v,className:y}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),k=(0,i.l)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===m?m:m??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==h&&!f.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,s.U)(),[x,O]=(0,a.useState)(h),w=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=v){const e=g[v];null!=e&&e!==x&&f.some((t=>t.value===e))&&O(e)}const T=e=>{const t=e.currentTarget,n=w.indexOf(t),r=f[n].value;r!==x&&(C(t),O(r),null!=v&&N(v,String(r)))},_=e=>{var t;let n=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},y)},f.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>w.push(e),onKeyDown:_,onClick:T},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,a.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,l.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},4067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(4250),a=(n(9496),n(9613)),o=n(3408),l=n(6489);const i={},s=void 0,p={unversionedId:"ox_inventory/Functions/Client/openInventory",id:"ox_inventory/Functions/Client/openInventory",title:"openInventory",description:"Opens an inventory using the passed data.",source:"@site/docs/ox_inventory/Functions/Client/openInventory.md",sourceDirName:"ox_inventory/Functions/Client",slug:"/ox_inventory/Functions/Client/openInventory",permalink:"/docs/ox_inventory/Functions/Client/openInventory",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Client/openInventory.md",tags:[],version:"current",lastUpdatedAt:1675508366,formattedLastUpdatedAt:"Feb 4, 2023",frontMatter:{},sidebar:"ox_inventory",previous:{title:"displayMetadata",permalink:"/docs/ox_inventory/Functions/Client/displayMetadata"},next:{title:"openNearbyInventory",permalink:"/docs/ox_inventory/Functions/Client/openNearbyInventory"}},u={},c=[],m={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Opens an inventory using the passed data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:openInventory(invType, data)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"invType: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'player'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'shop'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'stash'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'crafting'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'container'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'drop'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'glovebox'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'trunk'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'dumpster'")))),(0,a.kt)("li",{parentName:"ul"},"data: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"table"))),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"1",label:"Player",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Open the target player's inventory.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:openInventory('player', 3)\n"))),(0,a.kt)(l.Z,{value:"2",label:"Shop",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'Open the fourth "General Store" ',(0,a.kt)("a",{parentName:"strong",href:"https://github.com/overextended/ox_inventory/blob/main/data/shops.lua#L14"},"location"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:openInventory('shop', { type = 'General', id = 4 })\n"))),(0,a.kt)(l.Z,{value:"3",label:"Stash",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Open the first stash in ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/overextended/ox_inventory/blob/main/data/stashes.lua#L2-L19"},"data/stashes"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:openInventory('stash', 1)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Open a custom stash (created on the server with RegisterStash).")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:openInventory('stash', 'society_police')\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Open a stash with a specific owner.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:openInventory('stash', { id = 'police_locker', owner = 'license:xxxxxxxx' })\n")))))}d.isMDXComponent=!0}}]);