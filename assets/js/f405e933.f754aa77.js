"use strict";(self.webpackChunkrnnotes=self.webpackChunkrnnotes||[]).push([[22],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:5},o="Editor and Extensions",s={unversionedId:"basics/the-editor",id:"basics/the-editor",title:"Editor and Extensions",description:"Technically speaking, you need a simple text editor for development in react-native. But, using a dedicated programming editor changes the way you can manage multi-file projects.",source:"@site/docs/basics/the-editor.md",sourceDirName:"basics",slug:"/basics/the-editor",permalink:"/rn-notes/docs/basics/the-editor",draft:!1,editUrl:"https://github.com/gajendhir/rnnotes/docs/basics/the-editor.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"React-Native CLI",permalink:"/rn-notes/docs/basics/rn-cli"},next:{title:"Package Manager",permalink:"/rn-notes/docs/category/package-manager"}},l={},c=[{value:"Visual Studio Code",id:"visual-studio-code",level:2},{value:"Intellisense",id:"intellisense",level:3},{value:"Run and Debug",id:"run-and-debug",level:3},{value:"Built-in Git",id:"built-in-git",level:3},{value:"Extensions",id:"extensions",level:3},{value:"My Extensions for React-Native",id:"my-extensions-for-react-native",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"editor-and-extensions"},"Editor and Extensions"),(0,r.kt)("p",null,"Technically speaking, you need a simple text editor for development in react-native. But, using a dedicated programming editor changes the way you can manage multi-file projects."),(0,r.kt)("h2",{id:"visual-studio-code"},"Visual Studio Code"),(0,r.kt)("p",null,"There are a host of configurable editors out there. For me, ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code")," by Microsoft was the clear winner. Its strength included..."),(0,r.kt)("h3",{id:"intellisense"},"Intellisense"),(0,r.kt)("p",null,"It goes beyond syntax highlighting and auto-completes. It is able to provide ",(0,r.kt)("em",{parentName:"p"},"smart completes")," based on variable types, definitions and imported modules."),(0,r.kt)("h3",{id:"run-and-debug"},"Run and Debug"),(0,r.kt)("p",null,"I am able to run my code from with-in the editor and even debug with break-points, call stacks et al."),(0,r.kt)("h3",{id:"built-in-git"},"Built-in Git"),(0,r.kt)("p",null,"Git is built-in VsCode making ",(0,r.kt)("em",{parentName:"p"},"source code management")," (SCM) very easy. I use it all the time to push, pull, sync from GitHub."),(0,r.kt)("h3",{id:"extensions"},"Extensions"),(0,r.kt)("p",null,"It is highly customizable with a plethora of extensions which make it very friendly, powerful and alive. I like the way the editor responds to different parts of the code and errors / mistakes."),(0,r.kt)("p",null,"I use Visual Studio Code (a.k.a. VSCode or Code) for editing and testing all my Javascript, Python, JSON, React and React-Native code."),(0,r.kt)("h2",{id:"my-extensions-for-react-native"},"My Extensions for React-Native"),(0,r.kt)("p",null,"VSCode was created with extensibility in mind and almost every part of it can be customized. Plenty of extensions are available that enable linting and debugging of react-native codes."),(0,r.kt)("p",null,"I have installed some extensions for working with react-native..."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"React Native Tools")," by Microsoft"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ES7+ React/Redux/React-Native snippets")," by dsznajder"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ESLint")," by Microsoft"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Auto Complete Tag")," by Jun Han"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Color Highlight")," by Sergii N")),(0,r.kt)("p",null,"Some other extension that I have on my VS Code are..."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"vscode-icons")," by VSCode Icons Team"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Prettier")," by Prettier")),(0,r.kt)("p",null,"For, my Python projects I have..."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Python")," from Microsoft"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pylance")," from Microsoft")),(0,r.kt)("p",null,"There is a huge list of extensions to select from. If you are up to it, VSCode comes with an ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/api"},"Extension API"),", that you can use to create your own extension."))}d.isMDXComponent=!0}}]);