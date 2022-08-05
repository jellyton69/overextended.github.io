"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3128],{7640:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(9496),o=n(1626),r="tabItem_zeWL";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},866:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(5443),o=n(9496),r=n(1626),i=n(4252),l=n(1135),s=n(9162),d=n(3946),u="tabList_gs2P",p="tabItem_Ugfh";function m(e){var t,n,i=e.lazy,m=e.block,c=e.defaultValue,h=e.values,v=e.groupId,f=e.className,y=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,s.U)(),w=x.tabGroupChoices,N=x.setTabGroupChoices,I=(0,o.useState)(g),T=I[0],_=I[1],q=[],S=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var E=w[v];null!=E&&E!==T&&k.some((function(e){return e.value===E}))&&_(E)}var R=function(e){var t=e.currentTarget,n=q.indexOf(t),a=k[n].value;a!==T&&(S(t),_(a),null!=v&&N(v,String(a)))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,o=q.indexOf(e.currentTarget)+1;n=null!=(a=q[o])?a:q[0];break;case"ArrowLeft":var r,i=q.indexOf(e.currentTarget)-1;n=null!=(r=q[i])?r:q[q.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},f)},k.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return q.push(e)},onKeyDown:Z,onFocus:R,onClick:R},i,{className:(0,r.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),i?(0,o.cloneElement)(y.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function c(e){var t=(0,i.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}},4681:function(e,t,n){var a=n(9496);t.Z=function(e){var t={fontSize:"1.7rem",paddingRight:"left"===e.side&&"0.6rem",paddingLeft:"right"===e.side&&"0.6rem",verticalAlign:"center",display:"flex"};return a.createElement("div",{style:Object.assign({width:"fit-content",height:"3rem",padding:"0.8rem",borderRadius:"0.2rem",verticalAlign:"baseline",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",color:"white"},e.style),className:"icon-button"},"left"===e.side&&a.createElement("div",{style:t},e.icon),a.createElement("div",null,e.children),"right"===e.side&&a.createElement("div",{style:t},e.icon))}},1031:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return v}});var a=n(5443),o=n(3010),r=(n(9496),n(9613)),i=n(4681),l=n(4583),s=n(866),d=n(7640),u=["components"],p={title:"Getting Started",sidebar_position:1},m=void 0,c={unversionedId:"ox_inventory/index",id:"ox_inventory/index",title:"Getting Started",description:"This resource is being designed with the intention of providing advanced functionality while remaining easy to use,",source:"@site/docs/ox_inventory/index.md",sourceDirName:"ox_inventory",slug:"/ox_inventory/",permalink:"/docs/ox_inventory/",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/index.md",tags:[],version:"current",lastUpdatedAt:1659704750,formattedLastUpdatedAt:"8/5/2022",sidebarPosition:1,frontMatter:{title:"Getting Started",sidebar_position:1},sidebar:"ox_inventory",previous:{title:"Inventory",permalink:"/docs/category/inventory"},next:{title:"Configuration",permalink:"/docs/ox_inventory/config"}},h={},v=[{value:"Dependencies",id:"dependencies",level:2},{value:"OxMySQL",id:"oxmysql",level:3},{value:"Ox Lib",id:"ox-lib",level:3},{value:"Production Build",id:"production-build",level:3},{value:"Optional resources",id:"optional-resources",level:2},{value:"qtarget",id:"qtarget",level:3},{value:"NPWD",id:"npwd",level:3},{value:"Installation",id:"installation",level:3},{value:"Upgrading ESX",id:"upgrading-esx",level:2},{value:"Optional optimisation",id:"optional-optimisation",level:3},{value:"Common Issues",id:"common-issues",level:2},{value:"UI has not been built",id:"ui-has-not-been-built",level:3},{value:"Stashes / trunks are not saved at server restart",id:"stashes--trunks-are-not-saved-at-server-restart",level:3}],f={toc:v};function y(e){var t=e.components,n=(0,o.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This resource is being designed with the intention of providing advanced functionality while remaining easy to use,\nhowever it is not recommended for beginners. You must possess a basic understanding of coding and the ability to read;\notherwise you ",(0,r.kt)("strong",{parentName:"p"},"should not")," install this resource."))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("h3",{id:"oxmysql"},"OxMySQL"),(0,r.kt)("p",null,"We utilise our own resource to communicate with MySQL databases via the node-mysql2 package.\nThe backend is actively maintained and updated unlike the package used by mysql-async, providing improved performance, security, and features.\nWe provide full backwards compatibility with mysql-async and build for the current Cfx architecture."),(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("a",{href:"https://www.github.com/overextended/oxmysql",style:{marginRight:"0.6rem"}},(0,r.kt)(i.Z,{side:"left",icon:(0,r.kt)(l.rFR,{mdxType:"BsGithub"}),mdxType:"IconButton"},"GitHub")),(0,r.kt)("a",{href:"https://overextended.github.io/docs/oxmysql/Installation/"},(0,r.kt)(i.Z,{side:"left",icon:(0,r.kt)(l.DRM,{mdxType:"BsBookHalf"}),mdxType:"IconButton"},"Documentation"))),(0,r.kt)("h3",{id:"ox-lib"},"Ox Lib"),(0,r.kt)("p",null,"Provides easily reusable functions that can be imported into your resource or called with exports."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Used in the inventory for")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SetInterval"),(0,r.kt)("li",{parentName:"ul"},"Server Callbacks"),(0,r.kt)("li",{parentName:"ul"},"Requesting models, animations, etc."),(0,r.kt)("li",{parentName:"ul"},"Marker management"),(0,r.kt)("li",{parentName:"ul"},"Notifications and progress bar")),(0,r.kt)("div",{style:{width:"fit-content"}},(0,r.kt)("a",{href:"https://www.github.com/overextended/ox_lib/releases/latest"},(0,r.kt)(i.Z,{side:"left",icon:(0,r.kt)(l.rFR,{mdxType:"BsGithub"}),mdxType:"IconButton"},"GitHub"))),(0,r.kt)("h3",{id:"production-build"},"Production Build"),(0,r.kt)("p",null,"The interface is written in TypeScript using the React library, so the code included in the repository will not work.\nYou either need to build the package yourself (more information in ",(0,r.kt)("a",{parentName:"p",href:"./Guides"},"guides")," section), or download a release."),(0,r.kt)("div",{style:{width:"fit-content"}},(0,r.kt)("a",{href:"https://www.github.com/overextended/ox_inventory/releases/latest",style:{marginRight:"0.6rem"}},(0,r.kt)(i.Z,{side:"left",icon:(0,r.kt)(l.rFR,{mdxType:"BsGithub"}),mdxType:"IconButton"},"GitHub"))),(0,r.kt)("h2",{id:"optional-resources"},"Optional resources"),(0,r.kt)("p",null,"The resources listed under here ",(0,r.kt)("strong",{parentName:"p"},"aren't")," necessary for the inventory to work but still have full support."),(0,r.kt)("h3",{id:"qtarget"},"qtarget"),(0,r.kt)("p",null,"A high performance targeting solution based on bt-target, and the basis for qb-target.\nIt is being updated alongside Ox Inventory to improve support as well as add compatibility when using QBCore or migrating from bt-target.\nAll stashes and shops will utilise PolyZone's instead of markers to interact with them."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you wish to use it first you must ensure that qtarget is enabled in the resource convars.\nYou will need to enable compatibility manually by adjusting your config - more information provided below."),(0,r.kt)("p",{parentName:"div"},"You must start qtarget before the inventory and after your framework."))),(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("a",{href:"https://www.github.com/overextended/qtarget",style:{marginRight:"0.6rem"}},(0,r.kt)(i.Z,{side:"left",icon:(0,r.kt)(l.rFR,{mdxType:"BsGithub"}),mdxType:"IconButton"},"GitHub")),(0,r.kt)("a",{href:"https://overextended.github.io/qtarget/"},(0,r.kt)(i.Z,{side:"left",icon:(0,r.kt)(l.DRM,{mdxType:"BsBookHalf"}),mdxType:"IconButton"},"Documentation"))),(0,r.kt)("h3",{id:"npwd"},"NPWD"),(0,r.kt)("p",null,"A standalone and feature-rich phone created by Project Error."),(0,r.kt)("p",null,"The inventory will handle disabling the phone when the player has no item, and supports toggling the phone through item use."),(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("a",{href:"https://www.github.com/project-error/npwd",style:{marginRight:"0.6rem"}},(0,r.kt)(i.Z,{side:"left",icon:(0,r.kt)(l.rFR,{mdxType:"BsGithub"}),mdxType:"IconButton"},"GitHub")),(0,r.kt)("a",{href:"https://projecterror.dev/docs"},(0,r.kt)(i.Z,{side:"left",icon:(0,r.kt)(l.DRM,{mdxType:"BsBookHalf"}),mdxType:"IconButton"},"Documentation"))),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(d.Z,{value:"fresh_esx",label:"Fresh ESX",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Use a compatible version of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/esx-framework/esx-legacy"},"ESX Legacy")," (1.6.0+)",(0,r.kt)("br",{parentName:"p"}),"\n","Execute the query inside ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/blob/main/setup/install.sql"},"install.sql")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/blob/main/setup/vehicle.sql"},"vehicle.sql"),"  "),(0,r.kt)("p",null," Start order should look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"start oxmysql\nstart es_extended\nstart ox_lib\nstart ox_inventory\n...\n"))),(0,r.kt)(d.Z,{value:"convert_esx",label:"Convert ESX",mdxType:"TabItem"},(0,r.kt)("p",null,"Use a compatible version of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/esx-framework/esx-legacy"},"ESX Legacy")," (1.6.0+)",(0,r.kt)("br",{parentName:"p"}),"\n","Execute the query inside ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/blob/main/setup/install.sql"},"install.sql"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/blob/main/setup/vehicle.sql"},"vehicle.sql"),(0,r.kt)("br",{parentName:"p"}),"\n","Open ",(0,r.kt)("inlineCode",{parentName:"p"},"fxmanifest.lua")," and uncomment ",(0,r.kt)("inlineCode",{parentName:"p"},"server_script 'setup/convert.lua'"),(0,r.kt)("br",{parentName:"p"}),"\n","Start the server and execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"convertinventory")," command from the console",(0,r.kt)("br",{parentName:"p"}),"\n","Remove the conversion file  "),(0,r.kt)("p",null," Start order should look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"start oxmysql\nstart es_extended\nstart ox_lib\nstart ox_inventory\neverything else\n...\n"))),(0,r.kt)(d.Z,{value:"convert_linden",label:"Upgrade from Linden Inventory",mdxType:"TabItem"},(0,r.kt)("p",null,"Execute the query inside ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/blob/main/setup/upgrade.sql"},"upgrade.sql"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/blob/main/setup/vehicle.sql"},"vehicle.sql"),(0,r.kt)("br",{parentName:"p"}),"\n","Open ",(0,r.kt)("inlineCode",{parentName:"p"},"fxmanifest.lua")," and uncomment ",(0,r.kt)("inlineCode",{parentName:"p"},"server_script 'setup/convert.lua'"),(0,r.kt)("br",{parentName:"p"}),"\n","Start the server and execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"convertinventory")," linden command from the console",(0,r.kt)("br",{parentName:"p"}),"\n","Remove the conversion file")),(0,r.kt)(d.Z,{value:"standalone",label:"Standalone",mdxType:"TabItem"},(0,r.kt)("p",null,"Work in progress."),(0,r.kt)("p",null,'Refer to the "bridge" module to get an idea of how you setup support for any framework.',(0,r.kt)("br",{parentName:"p"}),"\n","Modifications will need to be made for licenses, owned vehicles, and jobs."))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You should restart your server after the first startup to ensure everything has been correctly setup"))),(0,r.kt)("h2",{id:"upgrading-esx"},"Upgrading ESX"),(0,r.kt)("p",null,"Ox Inventory provides a complete suite of tools to replace the built-in items and inventory system from ESX, and is not intended to be used with resources designed around it."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ESX loadouts do not exist - resources that use them need to remove references or be modified to look for the weapon as an item"),(0,r.kt)("li",{parentName:"ul"},"Stashes from resources such as esx_policejob, esx_ambulancejob, etc. should be removed"),(0,r.kt)("li",{parentName:"ul"},"Shops from esx_shops or the armoury from esx_policejob should be removed"),(0,r.kt)("li",{parentName:"ul"},"Resources like esx_inventoryhud, esx_trunkinventory, esx_addoninventory, etc. should be removed")),(0,r.kt)("h3",{id:"optional-optimisation"},"Optional optimisation"),(0,r.kt)("p",null,"All item related functions from xPlayer, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"xPlayer.getInventoryItem"),", have been modified for compatibility purposes; however they are considered deprecated."),(0,r.kt)("p",null,"The reasoning is fairly simple - there's now additional function references and overhead to consider. Fortunately, the new Inventory functions can be used directly and offer a great deal of improvements over the old ones."),(0,r.kt)("p",null,"You should read through the functions section for further information, but the following should give you a decent idea."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(d.Z,{value:"esx",label:"ESX",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"if xPlayer.getInventoryItem('acetone').count > 2 and xPlayer.getInventoryItem('antifreeze').count > 4 and xPlayer.getInventoryItem('sudo').count > 9 then\n    xPlayer.removeInventoryItem(\"acetone\", 3)\n    xPlayer.removeInventoryItem(\"antifreeze\", 5)\n    xPlayer.removeInventoryItem(\"sudo\", 10)\nend\n"))),(0,r.kt)(d.Z,{value:"inventory",label:"Inventory",mdxType:"TabItem"},(0,r.kt)("p",null,"Add the following code somewhere in your resource to cache the exports metatable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local ox_inventory = exports.ox_inventory\n")),(0,r.kt)("p",null,"You will be able to reference any functions exposed through the export."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local items = ox_inventory:Search(source, 'count', {'acetone', 'antifreeze', 'sudo'})\nif items and items.acetone > 2 and items.antifreeze > 4 and items.sudo > 9 then\n    ox_inventory:RemoveItem(source, 'acetone', 3)\n    ox_inventory:RemoveItem(source, 'antifreeze', 5)\n    ox_inventory:RemoveItem(source, 'sudo', 10)\nend\n")))),(0,r.kt)("h2",{id:"common-issues"},"Common Issues"),(0,r.kt)("h3",{id:"ui-has-not-been-built"},"UI has not been built"),(0,r.kt)("p",null,"Because the UI for inventory is written in React it can't run natively under FiveM so it must first be bundled into html/css/js."),(0,r.kt)("p",null,"We provide an easy way for you to do this by downloading a pre-bundled release, which you can get from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/releases/latest"},"here"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Make sure you download the ",(0,r.kt)("inlineCode",{parentName:"p"},"ox_inventory.zip")," file as that one contains the bundled files and others are raw source code."),(0,r.kt)("p",null,"If in case you wanted to edit the inventory UI you would have to build these files yourself.",(0,r.kt)("br",{parentName:"p"}),"\n","To do so please read our ",(0,r.kt)("a",{parentName:"p",href:"/docs/ox_inventory/Guides/inventory_ui"},(0,r.kt)("em",{parentName:"a"},"Building inventory UI"))," guide."),(0,r.kt)("h3",{id:"stashes--trunks-are-not-saved-at-server-restart"},"Stashes / trunks are not saved at server restart"),(0,r.kt)("p",null,"The only supported way of doing a restart is ",(0,r.kt)("strong",{parentName:"p"},"txAdmin scheduled restart"),".",(0,r.kt)("br",{parentName:"p"}),"\n","txAdmin scheduled restart should be your only way of restarting a server in production."),(0,r.kt)("p",null,"If you need to do a manual restart, you must use ",(0,r.kt)("inlineCode",{parentName:"p"},"/saveinv")," before restarting the server.",(0,r.kt)("br",{parentName:"p"}),"\n","If you don't do this, all inventory except players inventory will not be saved."))}y.isMDXComponent=!0}}]);