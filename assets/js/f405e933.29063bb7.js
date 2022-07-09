"use strict";(self.webpackChunkrnnotes=self.webpackChunkrnnotes||[]).push([[22],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:4},i="Editor and Extensions",s={unversionedId:"basics/the-editor",id:"basics/the-editor",title:"Editor and Extensions",description:"Visual Studio Code",source:"@site/docs/basics/the-editor.md",sourceDirName:"basics",slug:"/basics/the-editor",permalink:"/rn-notes/docs/basics/the-editor",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"React-Native CLI",permalink:"/rn-notes/docs/basics/rn-cli"},next:{title:"Package Manager",permalink:"/rn-notes/docs/category/package-manager"}},l={},c=[{value:"Visual Studio Code",id:"visual-studio-code",level:2},{value:"Extensions for React-Native",id:"extensions-for-react-native",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"editor-and-extensions"},"Editor and Extensions"),(0,o.kt)("h2",{id:"visual-studio-code"},"Visual Studio Code"),(0,o.kt)("p",null,"There are a host of configurable editors out there. For me, ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code")," by Microsoft was the clear winner."),(0,o.kt)("p",null,"It is highly customizable with a plethora of extensions which make it very friendly, powerful and alive. I like the way the editor responds to different parts of the code and errors / mistakes."),(0,o.kt)("p",null,"I use Visual Studio Code (a.k.a. VSCode or Code) for editing and testing all my Javascript, Python, JSON, React and React-Native code."),(0,o.kt)("h2",{id:"extensions-for-react-native"},"Extensions for React-Native"),(0,o.kt)("p",null,"VSCode was created with extensibility in mind and almost every part of it can be customized. Plenty of extensions are available that enable linting and debugging of react-native codes."),(0,o.kt)("p",null,"I have installed some extensions to make working with react-native easier..."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"React Native Tools")," by Microsoft"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ES7+ React/Redux/React-Native snippets")," by dsznajder"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ESLint")," by Microsoft"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Auto Complete Tag")," by Jun Han")),(0,o.kt)("p",null,"Some other extension that I have on my VS Code are..."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"vscode-icons")," by VSCode Icons Team"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Color Highlight")," by Sergii N")),(0,o.kt)("p",null,"For, my Python projects I have..."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Python")," from Microsoft"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Pylance")," from Microsoft")),(0,o.kt)("p",null,"There is a huge list of extensions to select from. If you are up to it, VSCode comes with an ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/api"},"Extension API"),", that you can use to create your own extension."))}p.isMDXComponent=!0}}]);