"use strict";(self.webpackChunkrnnotes=self.webpackChunkrnnotes||[]).push([[980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},i="Node Package Manager",p={unversionedId:"npm/the-npm",id:"npm/the-npm",title:"Node Package Manager",description:"npm = Node Package Manager",source:"@site/docs/npm/the-npm.md",sourceDirName:"npm",slug:"/npm/the-npm",permalink:"/rn-notes/docs/npm/the-npm",draft:!1,editUrl:"https://github.com/gajendhir/rnnotes/docs/npm/the-npm.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Package Manager",permalink:"/rn-notes/docs/category/package-manager"},next:{title:"Version of a package",permalink:"/rn-notes/docs/npm/pkg-ver"}},l={},s=[{value:"Software Registry",id:"software-registry",level:2},{value:"Command-Line Client",id:"command-line-client",level:2},{value:"Package Management",id:"package-management",level:2},{value:"Version of a package",id:"version-of-a-package",level:3},{value:"Sections of package.json",id:"sections-of-packagejson",level:3}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"node-package-manager"},"Node Package Manager"),(0,r.kt)("p",null,"npm = Node Package Manager"),(0,r.kt)("h2",{id:"software-registry"},"Software Registry"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://npmjs.com"},"npmjs.org or npmjs.com"))," is the world's largest Software Registry used widely by open source software developers to share software. It has more than 800,000 packages."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"npm")," is free to use. Public software pacakages can be downloaded and installed from the registry without any registration or login."),(0,r.kt)("h2",{id:"command-line-client"},"Command-Line Client"),(0,r.kt)("p",null,"The npm command line client can be used to download, install and manage the software packages..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install <package-name>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"From the npm Registry"),(0,r.kt)("li",{parentName:"ul"},"that are downloaded and stored on your computer"),(0,r.kt)("li",{parentName:"ul"},"From github")),(0,r.kt)("p",null,"The npm command line client is installed alongwith ",(0,r.kt)("a",{parentName:"p",href:"../basics/the-env#node"},"Node.js"),"."),(0,r.kt)("p",null,"You need a package manager for managing the packages that are included into your react-native project."),(0,r.kt)("h2",{id:"package-management"},"Package Management"),(0,r.kt)("p",null,"The npm system uses ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file that holds the information about your project.\nAlong with all the information about your project, this is files where ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," stores the names and versions of the packages being used in your project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="structure of a typical package.json"',title:'"structure',of:!0,a:!0,typical:!0,'package.json"':!0},'{\n    "name": "my-proj",\n    ...\n    "scripts" : {\n        ...\n    }\n    ...\n    "dependencies" : {\n        ...\n        "react" : "17.0.2",\n        "react-native" : "0.68.2",\n        ...\n    },\n    "devDependencies" : {\n        ...\n        "@babel/core": "^7.12.9",\n        "@babel/runtime": "^7.12.5",\n        "@react-native-community/eslint-config": "^2.0.0",\n        ...\n        "babel-jest": "^26.6.3",\n        "eslint": "^7.32.0",\n        "jest": "^26.6.3",\n        ...\n        "metro-react-native-babel-preset": "^0.70.3",\n        "react-test-renderer": "17.0.2",\n        ...\n    },\n    ...\n    "engines" : {\n    ...\n    }\n    ...\n}\n')),(0,r.kt)("p",null,"The names listed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," are the packages used in the project. These are the local packages for the project and will be installed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," folder of the project-root."),(0,r.kt)("h3",{id:"version-of-a-package"},"Version of a package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    "react-native" : "0.68.2",\n')),(0,r.kt)("p",null,"Given here, the version of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native")," in the current project is"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"MAJOR"),(0,r.kt)("th",{parentName:"tr",align:"center"},"MINOR"),(0,r.kt)("th",{parentName:"tr",align:"center"},"PATCH"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"68"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2")))),(0,r.kt)("p",null,"You may specify the ",(0,r.kt)("a",{parentName:"p",href:"pkg-ver"},"range of versions")," that may be installed in the project by ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," to allow the ",(0,r.kt)("a",{parentName:"p",href:"npm-cmd#upgrade--update-a-package"},(0,r.kt)("inlineCode",{parentName:"a"},"npm update"))," to install to the latest version possible."),(0,r.kt)("h3",{id:"sections-of-packagejson"},"Sections of package.json"),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v8/configuring-npm/package-json"},"package.json")," - for a detailed discussion on the specifics of the file. This information will be more significant if you decide to develop and publish your own package on the ",(0,r.kt)("a",{parentName:"p",href:"the-npm#software-registry"},"npm software registry"),"."))}m.isMDXComponent=!0}}]);