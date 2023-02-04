"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6884],{6489:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(9496),r=n(5924);const o="tabItem_De_A";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},3408:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(4250),r=n(9496),o=n(5924),l=n(6704),i=n(8876),s=n(4138),c=n(2509);const d="tabList_V3hT",u="tabItem_B35_";function p(e){var t;const{lazy:n,block:l,defaultValue:p,values:m,groupId:h,className:v}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,i.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:y}=(0,s.U)(),[w,N]=(0,r.useState)(k),_=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=h){const e=x[h];null!=e&&e!==w&&b.some((t=>t.value===e))&&N(e)}const E=e=>{const t=e.currentTarget,n=_.indexOf(t),a=b[n].value;a!==w&&(T(t),N(a),null!=h&&y(h,String(a)))},Z=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=_.indexOf(e.currentTarget)+1;n=_[t]??_[0];break}case"ArrowLeft":{const t=_.indexOf(e.currentTarget)-1;n=_[t]??_[_.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},v)},b.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>_.push(e),onKeyDown:Z,onClick:E},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},7672:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(9496);const r=e=>{const t={fontSize:"1.3rem",paddingRight:"left"===e.side&&"0.6rem",paddingLeft:"right"===e.side&&"0.6rem",verticalAlign:"center",display:"flex"};return a.createElement("div",{style:{width:"fit-content",fontWeight:"600",padding:"0.5rem",borderRadius:"0.2rem",verticalAlign:"baseline",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",color:"white",...e.style},className:"icon-button"},"left"===e.side&&a.createElement("div",{style:t},e.icon),a.createElement("div",null,e.children),"right"===e.side&&a.createElement("div",{style:t},e.icon))}},2004:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(9496),r=n(7672),o=n(9337);const l=e=>a.createElement("div",{style:{display:"flex"}},a.createElement("a",{href:e.repo,style:{marginRight:"0.6rem"}},a.createElement(r.Z,{side:"left",icon:a.createElement(o.rFR,null)},"GitHub")),e.docs&&a.createElement("a",{href:e.docs},a.createElement(r.Z,{side:"left",icon:a.createElement(o.DRM,null)},"Documentation")))},9516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var a=n(4250),r=(n(9496),n(9613)),o=n(2004),l=n(3408),i=n(6489);const s={title:"Getting started",sidebar_position:1,slug:"./../"},c=void 0,d={unversionedId:"ox_core/Getting Started/index",id:"ox_core/Getting Started/index",title:"Getting started",description:"This resource does not have a stable (v1.0) release; breaking changes are likely.",source:"@site/docs/ox_core/Getting Started/index.md",sourceDirName:"ox_core/Getting Started",slug:"/ox_core/",permalink:"/docs/ox_core/",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_core/Getting Started/index.md",tags:[],version:"current",lastUpdatedAt:1675508366,formattedLastUpdatedAt:"Feb 4, 2023",sidebarPosition:1,frontMatter:{title:"Getting started",sidebar_position:1,slug:"./../"},sidebar:"ox_core",previous:{title:"Core",permalink:"/docs/category/core"},next:{title:"Concepts",permalink:"/docs/ox_core/Getting Started/concepts"}},u={},p=[{value:"Dependencies",id:"dependencies",level:2},{value:"Installation",id:"installation",level:2},{value:"Recommended resources",id:"recommended-resources",level:2},{value:"ox_inventory",id:"ox_inventory",level:3},{value:"npwd",id:"npwd",level:3},{value:"pefcl",id:"pefcl",level:3}],m={toc:p};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This resource does not have a stable (v1.0) release; breaking changes are likely.",(0,r.kt)("br",{parentName:"p"}),"\n","Documentation may not be kept updated in some cases.")),(0,r.kt)("p",null,"We ",(0,r.kt)("strong",{parentName:"p"},"strongly")," recommend using Git to help with version control and separating your own changes from the original source code.",(0,r.kt)("br",{parentName:"p"}),"\n","Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/set-up-git#setting-up-git"},"GitHub's guide to setting up Git"),"."),(0,r.kt)("p",null,"You can also download a Git GUI client, such as ",(0,r.kt)("a",{parentName:"p",href:"https://www.gitkraken.com/"},"GitKraken"),", to improve your workflow and more easily maintain changes."),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"These resources are required for ox_core to function, and must start before it."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/overextended/oxmysql/"},"oxmysql")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/overextended/ox_lib/"},"ox_lib")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pedr0fontoura/fivem-appearance"},"fivem-appearance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/overextended/ox_appearance"},"ox_appearance"))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"1",label:"Recommended",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nodejs.org/"},"Download")," and install the LTS version of Node.js 16."),(0,r.kt)("li",{parentName:"ul"},"Open a terminal, command prompt, etc. and navigate to your resources folder."),(0,r.kt)("li",{parentName:"ul"},"Execute the following commands")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --location=global pnpm\ngit clone https://github.com/overextended/ox_core.git\ncd web\npnpm i\npnpm build\n"))),(0,r.kt)(i.Z,{value:"2",label:"Lazy",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download a tagged ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/overextended/ox_core/releases"},"release"),".")))),(0,r.kt)("h2",{id:"recommended-resources"},"Recommended resources"),(0,r.kt)("p",null,"The following resources aren't required, but should offer the best experience for your server."),(0,r.kt)("h3",{id:"ox_inventory"},"ox_inventory"),(0,r.kt)("p",null,"Slot-based inventory system with support for item metadata (uniqueness), shops, crafting, and much more."),(0,r.kt)(o.Z,{repo:"https://github.com/overextended/ox_inventory",docs:"../ox_inventory",mdxType:"ResourceLinks"}),(0,r.kt)("h3",{id:"npwd"},"npwd"),(0,r.kt)("p",null,"Phone with many built-in apps such as Twitter, Marketplace, and Notes; with support for 3rd party app integration."),(0,r.kt)(o.Z,{repo:"https://github.com/project-error/npwd",docs:"https://projecterror.dev/docs/npwd/start/installation",mdxType:"ResourceLinks"}),(0,r.kt)("h3",{id:"pefcl"},"pefcl"),(0,r.kt)("p",null,"Banking and financing, with support for multiple, unique, and shared accounts.",(0,r.kt)("br",{parentName:"p"}),"\n","If using it with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory"},"ox_inventory"),", open ",(0,r.kt)("inlineCode",{parentName:"p"},"pefcl/config.json")," and enable framework integration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"frameworkIntegration": {\n  "enabled": true,\n  "resource": "ox_inventory",\n  "syncInitialBankBalance": false\n},\n')),(0,r.kt)(o.Z,{repo:"https://github.com/project-error/pefcl",docs:"https://projecterror.dev/docs/pefcl/installation",mdxType:"ResourceLinks"}))}h.isMDXComponent=!0}}]);