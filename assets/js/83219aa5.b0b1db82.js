"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4215],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=d(r),m=o,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||a;return r?n.createElement(h,l(l({ref:t},s),{},{components:r})):n.createElement(h,l({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5690:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=r(2564),o=(r(9496),r(9613));const a={title:"Getting started",sidebar_position:1},l=void 0,i={unversionedId:"ox_doorlock/index",id:"ox_doorlock/index",title:"Getting started",description:"Installation",source:"@site/docs/ox_doorlock/index.md",sourceDirName:"ox_doorlock",slug:"/ox_doorlock/",permalink:"/docs/ox_doorlock/",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_doorlock/index.md",tags:[],version:"current",lastUpdatedAt:1684744261,formattedLastUpdatedAt:"May 22, 2023",sidebarPosition:1,frontMatter:{title:"Getting started",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Ox Doorlock",permalink:"/docs/category/ox-doorlock"},next:{title:"Server",permalink:"/docs/ox_doorlock/Events/server"}},p={},d=[{value:"Installation",id:"installation",level:2},{value:"Building",id:"building",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Optional Dependencies",id:"optional-dependencies",level:3},{value:"Supported Frameworks",id:"supported-frameworks",level:3},{value:"Opening the UI",id:"opening-the-ui",level:2}],s={toc:d},c="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"We always recommend using Git so you can track changes and update easily, however this requires building the UI.",(0,o.kt)("br",{parentName:"p"}),"\n","Otherwise, download the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_doorlock/releases"},"latest release"),"."),(0,o.kt)("h3",{id:"building"},"Building"),(0,o.kt)("p",null,"You can ignore this if you downloaded a release build."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.nodejs.org/"},"Download")," and install the LTS version of Node.js."),(0,o.kt)("li",{parentName:"ul"},"Open a terminal, command prompt, etc. and navigate to your resources folder."),(0,o.kt)("li",{parentName:"ul"},"Execute the following commands")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --location=global pnpm\ngit clone https://github.com/overextended/ox_doorlock.git\ncd web\npnpm i\npnpm build\n")),(0,o.kt)("h3",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/overextended/oxmysql/"},"oxmysql")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/overextended/ox_lib/"},"ox_lib"))),(0,o.kt)("h3",{id:"optional-dependencies"},"Optional Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/overextended/ox_target/"},"ox_target")," or ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/overextended/qtarget"},"qtarget")," or ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/qbcore-framework/qb-target"},"qb-target"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Doors can be lockpicked using the interaction menu.")))),(0,o.kt)("h3",{id:"supported-frameworks"},"Supported Frameworks"),(0,o.kt)("p",null,"These aren't necessary to run ox_doorlock, but they will add additional features."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/overextended/ox_core"},"ox_core")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/esx-framework/esx-legacy"},"esx")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/qbcore-framework/qb-core"},"qb-core"))),(0,o.kt)("h2",{id:"opening-the-ui"},"Opening the UI"),(0,o.kt)("p",null,"Assuming you've installed the resource and it has started, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"/doorlock")," to open the UI."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the cursor is displayed but nothing appeared, the UI hasn't been built."),(0,o.kt)("li",{parentName:"ul"},"Check you are authorised to use the command.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Type ",(0,o.kt)("inlineCode",{parentName:"li"},"test_ace player.1 command.doorlock")," in the server console (replace 1 with your server id).")))))}u.isMDXComponent=!0}}]);