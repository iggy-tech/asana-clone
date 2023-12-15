(()=>{var e={};e.id=1752,e.ids=[1752],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},66379:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>x,pages:()=>c,routeModule:()=>m,tree:()=>o});var r=s(67096),a=s(16132),n=s(37284),i=s.n(n),l=s(32564),d={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>l[e]);s.d(t,d);let o=["",{children:["product",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,11342)),"/workspaces/asana-clone/app/product/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,35345)),"/workspaces/asana-clone/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/workspaces/asana-clone/app/product/page.tsx"],x="/product/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/product/page",pathname:"/product",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},57215:(e,t,s)=>{Promise.resolve().then(s.bind(s,94324)),Promise.resolve().then(s.bind(s,55977)),Promise.resolve().then(s.t.bind(s,46686,23))},94324:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>navbar});var r=s(30784),a=s(9885),n=s(52451),i=s.n(n),l=s(11440),d=s.n(l);let logo=()=>r.jsx(d(),{href:"/",children:r.jsx(i(),{src:"/images/bird-logo.png",alt:"Bird Logo",width:80,height:80,className:"mr-6"})});var o=s(98699),c=s(78388);let x=[{title:"Frozen",description:"Recommended template for most use cases. Includes all the components you need to get started."},{title:"Swift",description:"A template with a minimal set of components. Use this template if you want to build your own components."},{title:"Tuscany",description:"Advanced template with more components and features. Use this template if you want to build a complex UI."},{title:"Amber",description:"Great for building a marketing or landing page."},{title:"Tide",description:"Layered template with a sidebar navigation. Great for building a dashboard or admin panel."},{title:"Mint",description:"Nice template for building a blog or a content-heavy website."}];function NavigationMenuBar(){return r.jsx(c.i9,{children:(0,r.jsxs)(c.S6,{className:"hidden md:flex md:space-x-4",children:[(0,r.jsxs)(c.zE,{children:[r.jsx(c.Lo,{children:"Features"}),r.jsx(c.CG,{children:(0,r.jsxs)("ul",{className:"grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]",children:[r.jsx("li",{className:"row-span-3",children:r.jsx(c.wV,{asChild:!0,children:(0,r.jsxs)("a",{className:"flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md",href:"/",children:[r.jsx(logo,{}),r.jsx("div",{className:"mb-2 mt-4 text-lg font-medium",children:"Bird Software"}),r.jsx("p",{className:"text-sm leading-tight text-muted-foreground",children:"eCommerce for everyone."})]})})}),r.jsx(p,{href:"/product",title:"Product",children:"Learn about the project goals and how to get started."}),r.jsx(p,{href:"/",title:"Demo",children:"How to build a store in 60 seconds with Bird."}),r.jsx(p,{href:"/",title:"Community",children:"Join the community and get help with your project."})]})})]}),(0,r.jsxs)(c.zE,{children:[r.jsx(c.Lo,{children:"Solutions"}),r.jsx(c.CG,{children:r.jsx("ul",{className:"grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ",children:x.map(e=>r.jsx(p,{title:e.title,children:e.description},e.title))})})]}),(0,r.jsxs)(c.zE,{children:[r.jsx(c.Lo,{children:"Resources"}),r.jsx(c.CG,{children:r.jsx("ul",{className:"grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ",children:x.map(e=>r.jsx(p,{title:e.title,children:e.description},e.title))})})]}),r.jsx(c.zE,{children:r.jsx(d(),{href:"/",legacyBehavior:!0,passHref:!0,children:r.jsx(c.wV,{className:(0,c.mp)(),children:"Enterprise"})})}),r.jsx(c.zE,{children:r.jsx(d(),{href:"/pricing",legacyBehavior:!0,passHref:!0,children:r.jsx("div",{children:r.jsx(c.wV,{className:(0,c.mp)(),children:"Pricing"})})})})]})})}let p=a.forwardRef(({className:e,title:t,children:s,...a},n)=>r.jsx("li",{children:r.jsx(c.wV,{asChild:!0,children:(0,r.jsxs)("a",{ref:n,className:(0,o.cn)("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",e),...a,children:[r.jsx("div",{className:"text-sm font-medium leading-none",children:t}),r.jsx("p",{className:"line-clamp-2 text-sm leading-snug text-muted-foreground",children:s})]})})}));p.displayName="ListItem";var m=s(95555),u=s(80459),h=s(17604),j=s(86078);let buttons=()=>(0,r.jsxs)("div",{children:[r.jsx("div",{className:"md:hidden",children:(0,r.jsxs)(u.yo,{children:[r.jsx(u.aM,{children:r.jsx(h.Z,{})}),r.jsx(u.ue,{children:r.jsx(u.Tu,{children:r.jsx(u.Ei,{children:(0,r.jsxs)("div",{className:"flex flex-col space-y-4 items-start w-full  text-lg text-black mt-10",children:[r.jsx(d(),{href:"/",className:"",children:"Sign In"}),r.jsx(d(),{href:"/",className:"",children:"Get Started"}),r.jsx(d(),{href:"/pricing",className:" ",children:"Pricing"}),r.jsx(d(),{href:"/",className:"",children:"Features"}),r.jsx(d(),{href:"/contact",className:"",children:"Contact"}),r.jsx(d(),{href:"/",className:"",children:"About"})]})})})})]})}),(0,r.jsxs)("div",{className:"hidden md:flex md:space-x-4 items-center    ",children:[r.jsx("div",{className:"border-r border-black",children:r.jsx("div",{className:"mr-4",children:r.jsx(j.Z,{className:"h-6 w-6 text-gray-700"})})}),r.jsx(d(),{href:"/contact",className:"",children:"Contact Sales"}),r.jsx(m.z,{className:"text-md",variant:"ghost",children:"Sign In"}),r.jsx(m.z,{className:"bg-[#000] text-md rounded-sm ",children:"Get Started"}),r.jsx("div",{})]})]}),navbar=()=>{let[e,t]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let handleScroll=()=>{window.scrollY>0?t(!0):t(!1)};return window.addEventListener("scroll",handleScroll),()=>{window.removeEventListener("scroll",handleScroll)}},[]);let s=`
    flex items-center justify-center space-x-10 bg-white 
    sticky top-0 z-50 ${e?"shadow-sm":""}
  `;return(0,r.jsxs)("div",{className:s,children:[(0,r.jsxs)("div",{className:"flex w-2/3 md:w-1/2",children:[r.jsx(logo,{}),r.jsx(NavigationMenuBar,{})]}),r.jsx(buttons,{})]})}},11342:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>product_page});var r=s(4656),a=s(52129),n=s(95153);let i=(0,n.createProxy)(String.raw`/workspaces/asana-clone/app/product/Navbar/navbar.tsx`),{__esModule:l,$$typeof:d}=i,o=i.default;var c=s(96152),x=s(86035),p=s(32671),m=s(5699),u=s(40378),h=s(92263),j=s(64021),g=s(48676);let product_page=()=>(0,r.jsxs)("div",{children:[r.jsx(o,{}),r.jsx(a.default,{}),r.jsx(c.default,{}),r.jsx(x.default,{}),r.jsx(p.default,{}),r.jsx(m.default,{}),r.jsx(u.default,{}),r.jsx(h.default,{}),r.jsx(j.default,{}),r.jsx(g.default,{})]})}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[7916,6120,1323,6686,8639,5607,2451,3685,3367,8537,9752,6166,1440,7582,3703,5986,9718,8696,1212,2263,4021,4322,6152,9476,378,2671,2129,5699],()=>__webpack_exec__(66379));module.exports=s})();