"use strict";(self.webpackChunkrnnotes=self.webpackChunkrnnotes||[]).push([[394],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7170:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1},i=void 0,l={unversionedId:"Introduction",id:"Introduction",title:"Introduction",description:"Site Layout",source:"@site/docs/Introduction.md",sourceDirName:".",slug:"/Introduction",permalink:"/rn-notes/docs/Introduction",draft:!1,editUrl:"https://github.com/gajendhir/rnnotes/docs/Introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Development Environment",permalink:"/rn-notes/docs/category/development-environment"}},s={},p=[{value:"Site Layout",id:"site-layout",level:2},{value:"Objective",id:"objective",level:2},{value:"My Background",id:"my-background",level:2},{value:"How I got into React-Native?",id:"how-i-got-into-react-native",level:3},{value:"React Native",id:"react-native",level:3},{value:"My System when I began",id:"my-system-when-i-began",level:2},{value:"Lets Begin",id:"lets-begin",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"site-layout"},"Site Layout"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Introduction"},"Introduction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/category/development-environment"},"Development Environment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/category/package-manager"},"Package Manager")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},"Git Commands")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/category/react-native-project"},"Start a new project")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},"Build Bundles and Apks"))),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This site started as an effort to compile commands used and steps taken in the differect situations during the process of developing and releasing android apps using react-native."),(0,r.kt)("p",null,"My journey to use react-native for app development has its ups and downs. I found development of apps react-native extremely easy compared to Java / Kotlin and Android Studio. It was easy to create an app using react-native but the real learning effort and still is in upgrading to the newer versions of react-native and building apks and bundles for distribution."),(0,r.kt)("p",null,"I have put this up as a web-site and hope fellow developers in their journey."),(0,r.kt)("h2",{id:"objective"},"Objective"),(0,r.kt)("p",null,"This site is to document my experiences and also to share the issues faced during the journey of using ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://reactnative.dev"},"React-Native"))," to successfully create visually stimulating apps."),(0,r.kt)("p",null,"This documentation site started as an exercise to prepare a sort-of check-list of some of the tasks we need to carry out..."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"to ",(0,r.kt)("em",{parentName:"li"},"prepare")," a new computer for development using react-native."),(0,r.kt)("li",{parentName:"ul"},"to ",(0,r.kt)("em",{parentName:"li"},"assemble")," and ",(0,r.kt)("em",{parentName:"li"},"build")," ",(0,r.kt)("em",{parentName:"li"},"release")," and ",(0,r.kt)("em",{parentName:"li"},"debug")," variants of the apps."),(0,r.kt)("li",{parentName:"ul"},"to ",(0,r.kt)("em",{parentName:"li"},"upgrade")," react-native, especially for existing apps."),(0,r.kt)("li",{parentName:"ul"},"to ",(0,r.kt)("em",{parentName:"li"},"select")," from the huge collection of react-native packages from the web."),(0,r.kt)("li",{parentName:"ul"},"to ",(0,r.kt)("em",{parentName:"li"},"use")," and ",(0,r.kt)("em",{parentName:"li"},"customize")," react-native packages."),(0,r.kt)("li",{parentName:"ul"},"to ",(0,r.kt)("em",{parentName:"li"},"manage")," the upgrade related issues of some of the popular packages.")),(0,r.kt)("p",null,"The idea of putting this up as a web-site is my way of ",(0,r.kt)("em",{parentName:"p"},"thanking")," the ",(0,r.kt)("strong",{parentName:"p"},"open-source community"),". I hope this tiny contribution of mine help will make lives of others simple."),(0,r.kt)("h2",{id:"my-background"},"My Background"),(0,r.kt)("p",null,"I am a computer consultant and lead a small team of software developers. We develop integrated software solutions for our clients. Traditionally, it used LAN based solutions working through all the data handling requirement of the organization. Most of our work used to be done in dotnet with sql-server as the backend."),(0,r.kt)("p",null,"Times are changing and things are evolving. Now some of our solutions include mobile apps which frees the executives from the desktop. The data-entry operators were now able to capture data, at the very site where it is generated, in real-time."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Android")," was the default choice for our clients due to its easier and cheaper availability compared to ",(0,r.kt)("em",{parentName:"p"},"IOS"),"."),(0,r.kt)("h3",{id:"how-i-got-into-react-native"},"How I got into React-Native?"),(0,r.kt)("p",null,"We started Android development on the Ecllipse editor and migrated to ",(0,r.kt)("a",{parentName:"p",href:"http://%5Bdevelop.android.com%5D(https://developer.android.com/studio)"},"Android Studio")," when it was launched. We are still using Android Studio to maintain our existing apps."),(0,r.kt)("p",null,"All this time, gradually graduated to developing for the web also. HTML, Javascript and allied web technologies like CSS, JQuery made in-roads. Then came along ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.com"},"React"),", which we were finding interesting - but have not yet used on any project for any client so far."),(0,r.kt)("p",null,"Finally, we were practically forced towards ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev"},"React-Native")," by a client who insisted on giving us the assignment only if we would do it in React-Native. ",(0,r.kt)("em",{parentName:"p"},"Today, we humbly thank him for his insistence that we got introduced to this.")," Now-a-days, all new Android apps by us are being developed in React-Native."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"We took up the challenge.")),(0,r.kt)("h3",{id:"react-native"},"React Native"),(0,r.kt)("p",null,"In less than a year, React-Native became our preferred choice for app development. All our app development work is targeted towards the Android ecosystem, but we look forward to release apps for the IOS also, in the near future."),(0,r.kt)("p",null,"React-native is an evolving technology maintained and promoted by ",(0,r.kt)("strong",{parentName:"p"},"Meta")," - the same group that owns the popular ",(0,r.kt)("em",{parentName:"p"},"FaceBook"),", ",(0,r.kt)("em",{parentName:"p"},"Instagram")," and ",(0,r.kt)("em",{parentName:"p"},"WhatsApp"),"."),(0,r.kt)("p",null,"Another major factor for settling with this Javascript based technology was that it was light-weight, easy to get started and had the promise that it could be used seamlessly on any of the popular operating systems - Windows, MacOS and Linux."),(0,r.kt)("p",null,"It allows us to create apps, in ",(0,r.kt)("strong",{parentName:"p"},"Javascript"),", that can be built into native apps to run on Android and IOS platforms. Today, communities are working on libraries and package that will allow us to build the same apps for - Windows, Macintosh and the Web."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Write once and use everywhere"),"."),(0,r.kt)("h2",{id:"my-system-when-i-began"},"My System when I began"),(0,r.kt)("p",null,"When we decided to start with react-native, my Windows machine already had..."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Visual Studio 2019 and dotnet-framework."),(0,r.kt)("li",{parentName:"ul"},"dotnet-core for my newer projects."),(0,r.kt)("li",{parentName:"ul"},"Python and Flask for Web and RestAPI as an alternative to ASP.NET."),(0,r.kt)("li",{parentName:"ul"},"Android Studio for creating mobile apps.")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://reactnative.dev/docs/getting-started"},"getting started"))," the documentation gave me a way to try out react-native without any downloads or installs. ",(0,r.kt)("a",{parentName:"p",href:"https://snack.expo.dev/"},"Expo-CLI Snack")," - I took it and tried it out."),(0,r.kt)("p",null,"So, I was now ready to dive deeper into the world of React and React-Native."),(0,r.kt)("p",null,"All my installation experiences are based on this background."),(0,r.kt)("h2",{id:"lets-begin"},"Lets Begin"),(0,r.kt)("p",null,"I hope that you find this helpful."))}u.isMDXComponent=!0}}]);