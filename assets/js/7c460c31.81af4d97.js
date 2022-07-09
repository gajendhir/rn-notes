"use strict";(self.webpackChunkrnnotes=self.webpackChunkrnnotes||[]).push([[893],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},s="The Environment",l={unversionedId:"basics/the-env",id:"basics/the-env",title:"The Environment",description:"Node",source:"@site/docs/basics/the-env.md",sourceDirName:"basics",slug:"/basics/the-env",permalink:"/rn-notes/docs/basics/the-env",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Development Environment",permalink:"/rn-notes/docs/category/development-environment"},next:{title:"Expo Cli",permalink:"/rn-notes/docs/basics/expo-cli"}},i={},p=[{value:"Node",id:"node",level:2},{value:"Package Managers",id:"package-managers",level:2},{value:"npm",id:"npm",level:3},{value:"yarn and pnpm",id:"yarn-and-pnpm",level:3},{value:"Install the CLI",id:"install-the-cli",level:2}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-environment"},"The Environment"),(0,r.kt)("h2",{id:"node"},"Node"),(0,r.kt)("p",null,"React-native development can be done through the Expo CLI or React-Native-CLI. Both require node to work. So make sure you have the latest node on your system."),(0,r.kt)("p",null,"Node is available at ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org"},"NodeJS Site"),". Download the proper installer file depending on your OS and install it."),(0,r.kt)("p",null,"My operating system is Windows and I chose to use the MSI installer. The installation was quick and simple."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"NodeInstaller",src:n(4699).Z,width:"491",height:"383"})),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"upgrade-node"},"Upgrade Node"),(0,r.kt)("p",{parentName:"blockquote"},"To upgrade to the latest version of node, simply download the new version from the ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org"},"nodejs")," site and install it. It knows what to do with your previous installation and replaces it with the new version.")),(0,r.kt)("h2",{id:"package-managers"},"Package Managers"),(0,r.kt)("p",null,"You will require a good Package Manager to work with the various packages in your react-native projects. You will also require it, if you wish to develop and publish your own package. In fact, package managers are required for any node based projects to handle the node-modules that will be used."),(0,r.kt)("h3",{id:"npm"},"npm"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},(0,r.kt)("strong",{parentName:"a"},"npm")," by npmjs.com")," is the standard package manager for Node.js. ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," is included in the standard node installation package."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"NodeInstaller",src:n(8885).Z,width:"491",height:"382"})),(0,r.kt)("p",null,"To upgrade to the latest version of npm."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g npm@latest\n")),(0,r.kt)("p",null,"We shall discuss more on npm later. ",(0,r.kt)("a",{parentName:"p",href:"../npm/the-npm"},"Click Here!")," to jump to NPM page now."),(0,r.kt)("h3",{id:"yarn-and-pnpm"},"yarn and pnpm"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://yarnpkg.com"},"yarn")," and ",(0,r.kt)("a",{parentName:"p",href:"https://pnpm.io"},"pnpm")," are alternatives to the npm cli. Every any software each package manager has its strengths and weaknesses."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g yarn\nyarn -v\n")),(0,r.kt)("p",null,"to upgrade to the latest stable version of yarn..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn set version stable\n")),(0,r.kt)("p",null,"I have ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," on my system and use it from time-to-time. You may also want to try-out ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm"),"..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g pnpm\n")),(0,r.kt)("h2",{id:"install-the-cli"},"Install the CLI"),(0,r.kt)("p",null,"Now you will need ",(0,r.kt)("a",{parentName:"p",href:"/rn-notes/docs/basics/expo-cli"},"expo-cli")," or ",(0,r.kt)("a",{parentName:"p",href:"/rn-notes/docs/basics/rn-cli"},"react-native-cli")," to proceed. I use the ",(0,r.kt)("a",{parentName:"p",href:"/rn-notes/docs/basics/rn-cli"},"react-native-cli")," and that is the focus of discussion here."))}d.isMDXComponent=!0},8885:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/NodeInst2-e09bca301b4cd7cce73077254b6a7b97.png"},4699:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/NodeInstall-8e66a6bc9b67189cd395eea2910acb62.png"}}]);