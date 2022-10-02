"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7835],{9613:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>d});var n=t(9496);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),c=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(i.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),d=r,y=p["".concat(i,".").concat(d)]||p[d]||m[d]||s;return t?n.createElement(y,l(l({ref:a},u),{},{components:t})):n.createElement(y,l({ref:a},u))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=p;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<s;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},521:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=t(6600),r=(t(9496),t(9613));const s={},l="Transaction",o={unversionedId:"oxmysql/Usage/transaction",id:"oxmysql/Usage/transaction",title:"Transaction",description:"A transaction executes multiple queries and commits them only if all succeed. If one fails, none of the queries are committed. The return value is a boolean, which is the result of the transaction.",source:"@site/docs/oxmysql/Usage/transaction.md",sourceDirName:"oxmysql/Usage",slug:"/oxmysql/Usage/transaction",permalink:"/docs/oxmysql/Usage/transaction",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/oxmysql/Usage/transaction.md",tags:[],version:"current",lastUpdatedAt:1664702581,formattedLastUpdatedAt:"Oct 2, 2022",frontMatter:{},sidebar:"oxmysql",previous:{title:"Single",permalink:"/docs/oxmysql/Usage/single"},next:{title:"Update",permalink:"/docs/oxmysql/Usage/update"}},i={},c=[{value:"Specific Format",id:"specific-format",level:2},{value:"Lua",id:"lua",level:3},{value:"Callback",id:"callback",level:4},{value:"Promise",id:"promise",level:4},{value:"JavaScript",id:"javascript",level:3},{value:"Callback",id:"callback-1",level:4},{value:"Promise",id:"promise-1",level:4},{value:"Shared Format",id:"shared-format",level:2},{value:"Lua",id:"lua-1",level:3},{value:"Callback",id:"callback-2",level:4},{value:"Promise",id:"promise-2",level:4},{value:"JavaScript",id:"javascript-1",level:3},{value:"Callback",id:"callback-3",level:4},{value:"Promise",id:"promise-3",level:4},{value:"Transaction Isolation Level",id:"transaction-isolation-level",level:2}],u={toc:c};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transaction"},"Transaction"),(0,r.kt)("p",null,"A transaction executes multiple queries and commits them only if all succeed. If one fails, none of the queries are committed. The return value is a ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", which is the result of the transaction."),(0,r.kt)("h2",{id:"specific-format"},"Specific Format"),(0,r.kt)("p",null,"When using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Specific")," format you must pass one parameter to the oxmysql export. In this case, the ",(0,r.kt)("inlineCode",{parentName:"p"},"queries")," parameter contains your queries and the SQL variables unique to each query."),(0,r.kt)("p",null,"This is useful for transactions where the queries do not share many SQL variables."),(0,r.kt)("h3",{id:"lua"},"Lua"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local queries = {\n    { query = 'INSERT INTO `test` (id) VALUES (:someid)', values = { ['someid'] = 1 } },\n    { query = 'INSERT INTO `test` (id) VALUES (:someid)', values = { ['someid'] = 2 } }\n} -- NOTE, the 'values' tables can be named 'parameters' here for MySQL-Async compatibility.\n")),(0,r.kt)("h4",{id:"callback"},"Callback"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"-- alias: exports.oxmysql:transaction\n-- alias: MySQL.Async.transaction\n\nMySQL.transaction(queries, function(success)\n    print(success)\nend)\n")),(0,r.kt)("h4",{id:"promise"},"Promise"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"-- alias: exports.oxmysql:transaction_async\n-- alias: MySQL.Sync.transaction\nlocal success = MySQL.transaction.await(queries)\nprint(success)\n")),(0,r.kt)("h3",{id:"javascript"},"JavaScript"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const queries = [\n  { query: 'INSERT INTO `test` (id) VALUES (:someid)', values: { someid: 1 } },\n  { query: 'INSERT INTO `test` (id) VALUES (:someid)', values: { someid: 2 } },\n]; // NOTE, the 'values' objects can be named 'parameters' here for MySQL-Async compatibility.\n")),(0,r.kt)("h4",{id:"callback-1"},"Callback"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// alias: exports.oxmysql.transaction\n\nMySQL.transaction(queries, (success) => {\n  console.log(success);\n});\n")),(0,r.kt)("h4",{id:"promise-1"},"Promise"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// alias: exports.oxmysql.transaction_async\n\nconst success = await MySQL.transaction(queries);\nconsole.log(success);\n")),(0,r.kt)("h2",{id:"shared-format"},"Shared Format"),(0,r.kt)("p",null,"When using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Shared")," format you must pass two parameters to the oxmysql export. The ",(0,r.kt)("inlineCode",{parentName:"p"},"queries")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"parameters")," those queries will use.",(0,r.kt)("br",{parentName:"p"}),"\n","This is useful if your queries use the same SQL variables."),(0,r.kt)("h3",{id:"lua-1"},"Lua"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local queries = {\n    'INSERT INTO `test` (id, name) VALUES (:someid, :somename)',\n    'SET `name` = :newname IN `test` WHERE `id` = :someid'\n}\n\nlocal parameters = { ['someid'] = 2, ['somename'] = 'John Doe', ['newname'] = 'John Notdoe' }\n")),(0,r.kt)("h4",{id:"callback-2"},"Callback"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"-- alias: exports.oxmysql:transaction\n-- alias: MySQL.Async.transaction\n\nMySQL.transaction(queries, parameters, function(success)\n    print(success)\nend)\n")),(0,r.kt)("h4",{id:"promise-2"},"Promise"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"-- alias: exports.oxmysql:transaction_async\n-- alias: MySQL.Sync.transaction\n\nlocal success = MySQL.transaction.await(queries, parameters)\nprint(success)\n")),(0,r.kt)("h3",{id:"javascript-1"},"JavaScript"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const queries = [\n  'INSERT INTO `test` (id, name) VALUES (:someid, :somename)',\n  'SET `name` = :newname IN `test` WHERE `id` = :someid',\n];\n\nconst parameters = { someid: 2, somename: 'John Doe', newname: 'John Notdoe' };\n")),(0,r.kt)("h4",{id:"callback-3"},"Callback"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// alias: exports.oxmysql.transaction\n\nMySQL.transaction(queries, parameters, (success) => {\n  console.log(success);\n});\n")),(0,r.kt)("h4",{id:"promise-3"},"Promise"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// exports.oxmysql.transaction_async\n\nconst success = await MySQL.transaction(queries, parameters);\nconsole.log(success);\n")),(0,r.kt)("h2",{id:"transaction-isolation-level"},"Transaction Isolation Level"),(0,r.kt)("p",null,"This can be set through the convar ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql_transaction_isolation_level")," which should be an integer ranging from ",(0,r.kt)("inlineCode",{parentName:"p"},"1-4"),". The default convar value set by oxmysql is ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Convar Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Result"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Repeatable Read")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Read Committed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Read Uncommitted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Serializable")))))}m.isMDXComponent=!0}}]);