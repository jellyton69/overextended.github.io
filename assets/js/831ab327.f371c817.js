"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2446],{9910:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(9496);const o=e=>{const t={fontSize:"1.7rem",paddingRight:"left"===e.side&&"0.6rem",paddingLeft:"right"===e.side&&"0.6rem",verticalAlign:"center",display:"flex"};return i.createElement("div",{style:{width:"fit-content",height:"3rem",padding:"0.8rem",borderRadius:"0.2rem",verticalAlign:"baseline",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",color:"white",...e.style},className:"icon-button"},"left"===e.side&&i.createElement("div",{style:t},e.icon),i.createElement("div",null,e.children),"right"===e.side&&i.createElement("div",{style:t},e.icon))}},7056:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var i=n(6600),o=(n(9496),n(9613)),l=n(9910),r=n(7738);const a={title:"Building inventory UI"},d=void 0,s={unversionedId:"ox_inventory/Guides/inventory_ui",id:"ox_inventory/Guides/inventory_ui",title:"Building inventory UI",description:"Requirements to build:",source:"@site/docs/ox_inventory/Guides/inventory_ui.md",sourceDirName:"ox_inventory/Guides",slug:"/ox_inventory/Guides/inventory_ui",permalink:"/docs/ox_inventory/Guides/inventory_ui",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Guides/inventory_ui.md",tags:[],version:"current",lastUpdatedAt:1664702581,formattedLastUpdatedAt:"Oct 2, 2022",frontMatter:{title:"Building inventory UI"},sidebar:"ox_inventory",previous:{title:"Creating items",permalink:"/docs/ox_inventory/Guides/creatingItems"},next:{title:"Creating custom stashes",permalink:"/docs/ox_inventory/Guides/stashes"}},u={},m=[{value:"Requirements to build:",id:"requirements-to-build",level:2},{value:"Installing Node.js:",id:"installing-nodejs",level:2},{value:"Installing pnpm:",id:"installing-pnpm",level:2},{value:"Building the UI:",id:"building-the-ui",level:2}],p={toc:m};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"requirements-to-build"},"Requirements to build:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node.js"),(0,o.kt)("li",{parentName:"ul"},"pnpm")),(0,o.kt)("h2",{id:"installing-nodejs"},"Installing Node.js:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Download the LTS version of Node.js 16."),(0,o.kt)("li",{parentName:"ul"},"Go through the install and make sure you install all of the features."),(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"node --version")," in cmd and make sure that it gives you the version number. If it doesn't then you didn't install it correctly.")),(0,o.kt)("div",{style:{width:"fit-content"}},(0,o.kt)("a",{href:"https://www.nodejs.org"},(0,o.kt)(l.Z,{side:"left",icon:(0,o.kt)(r.jPo,{mdxType:"FaNodeJs"}),mdxType:"IconButton"},"Download"))),(0,o.kt)("h2",{id:"installing-pnpm"},"Installing pnpm:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Now that you've installed Node.js you can install pnpm by running ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install -g pnpm")," in cmd.")),(0,o.kt)("h2",{id:"building-the-ui"},"Building the UI:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"cd into the web directory of ox_inventory"),(0,o.kt)("li",{parentName:"ul"},"In your cmd type ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm i")," and it will start downloading the node modules."),(0,o.kt)("li",{parentName:"ul"},"After it's done downloading node modules you can run ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm build")," to build the UI.")),(0,o.kt)("admonition",{title:"Hot reloads",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"When working in the browser you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm start"),", which supports hot reloads meaning that\nyou will see your changes after saving your file."),(0,o.kt)("p",{parentName:"admonition"},"If you want to work in game you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm start:game")," which writes changes to disk, so\nthe only thing you have to do is restart the resource for it take affect.")))}c.isMDXComponent=!0}}]);