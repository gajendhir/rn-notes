"use strict";(self.webpackChunkrnnotes=self.webpackChunkrnnotes||[]).push([[666],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=A(e,["components","mdxType","originalType","parentName"]),v=d(n),f=a,u=v["".concat(l,".").concat(f)]||v[f]||p[f]||o;return n?r.createElement(u,i(i({ref:t},s),{},{components:n})):r.createElement(u,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=v;var A={};for(var l in t)hasOwnProperty.call(t,l)&&(A[l]=t[l]);A.originalType=e,A.mdxType="string"==typeof e?e:a,i[1]=A;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>A,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:4},i="React-Native CLI",A={unversionedId:"basics/rn-cli",id:"basics/rn-cli",title:"React-Native CLI",description:"React-Native CLI",source:"@site/docs/basics/rn-cli.md",sourceDirName:"basics",slug:"/basics/rn-cli",permalink:"/rn-notes/docs/basics/rn-cli",draft:!1,editUrl:"https://github.com/gajendhir/rnnotes/docs/basics/rn-cli.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Expo Cli",permalink:"/rn-notes/docs/basics/expo-cli"},next:{title:"Editor and Extensions",permalink:"/rn-notes/docs/basics/the-editor"}},l={},d=[{value:"Tools for Android",id:"tools-for-android",level:2},{value:"Android-Studio",id:"android-studio",level:3},{value:"JDK",id:"jdk",level:3},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Set ANDROID_HOME",id:"set-android_home",level:3},{value:"Set JAVA_HOME",id:"set-java_home",level:3},{value:"Set PATH",id:"set-path",level:3},{value:"The Editor",id:"the-editor",level:2}],s={toc:d};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-native-cli"},"React-Native CLI"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://reactnative.dev"},"React-Native CLI")),(0,a.kt)("p",null,"To get started with ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-cli")," you require to have the XCode or ",(0,a.kt)("a",{parentName:"p",href:"#android-studio"},"Android Studio")," setup on your system."),(0,a.kt)("p",null,"To setup react-native-cli on your computer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g react-native-cli\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"react-native-cli",src:n(789).Z,width:"457",height:"154"})),(0,a.kt)("h2",{id:"tools-for-android"},"Tools for Android"),(0,a.kt)("h3",{id:"android-studio"},"Android-Studio"),(0,a.kt)("p",null,"Android Studio is Android's official IDE and can be downloaded from ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/index.html"},"developer.android.com"),"."),(0,a.kt)("p",null,"At the time of installation make certain to select the following components..."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Android SDK"),(0,a.kt)("li",{parentName:"ul"},"Android SDK Platform"),(0,a.kt)("li",{parentName:"ul"},"Android Virtual Device")),(0,a.kt)("p",null,"If you miss these out at the time of installation, you can install these later on."),(0,a.kt)("p",null,"A copy of the latest OpenJDK comes bundled with Android Studio."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"I start Android Studio periodically and let it update / upgrade itself, gradle and its libraries. Some upgrades require me to start Android Studio as Administrator")),(0,a.kt)("h3",{id:"jdk"},"JDK"),(0,a.kt)("p",null,"React-native requires OpenJDK11 or later to build the react-native apps for android. This can be downloaded from ",(0,a.kt)("a",{parentName:"p",href:"https://jdk.java.net/"},"jdk.java.net"),". If you have install Android Studio then a copy of the latest OpenJDK is already installed on your system."),(0,a.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,a.kt)("p",null,"You should also check out that ANDROID_HOME and JAVA_HOME environment variables are set."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Environment Variables",src:n(1988).Z,width:"407",height:"463"})),(0,a.kt)("h3",{id:"set-android_home"},"Set ANDROID_HOME"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AndroidHome",src:n(5037).Z,width:"607",height:"578"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ANDROID_HOME")," should point to the path to your ",(0,a.kt)("em",{parentName:"p"},"Android SDK"),"."),(0,a.kt)("h3",{id:"set-java_home"},"Set JAVA_HOME"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"JavaHome",src:n(5410).Z,width:"699",height:"610"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," should point to the path where the OpenJDK is installed."),(0,a.kt)("h3",{id:"set-path"},"Set PATH"),(0,a.kt)("p",null,"To the PATH variable add the path of..."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"platform-tools")," in the Android SDK folder"),(0,a.kt)("li",{parentName:"ol"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"bin")," folder inside the OpenJDK folder.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PathVariable",src:n(7837).Z,width:"521",height:"498"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Some software automatically set these environment variables at the time of installation. So, if you find any of these variables already existing just ensure their values point to the right places.")),(0,a.kt)("h2",{id:"the-editor"},"The Editor"),(0,a.kt)("p",null,"Finally, you need to prepare your ",(0,a.kt)("a",{parentName:"p",href:"/rn-notes/docs/basics/the-editor"},"editor or IDE")," for react-native."))}p.isMDXComponent=!0},5037:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/AndroidHome-311c50c939bab352ebba3964bb2cac88.png"},789:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},1988:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/EnvironmentVariables-499df00a1ce961ff9c98dbb7bd02f879.png"},5410:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/JavaHome-623425d4eb69a06a5b33e996075d81ef.png"},7837:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/PathVar-2b7b937ba209992490256f0b22d76810.png"}}]);