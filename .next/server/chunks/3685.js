"use strict";exports.id=3685,exports.ids=[3685],exports.modules={83685:(e,r,t)=>{t.d(r,{Z:()=>createLucideIcon});var o=t(3542),s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let toKebabCase=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),createLucideIcon=(e,r)=>{let t=(0,o.forwardRef)(({color:t="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:c,children:d,...l},n)=>(0,o.createElement)("svg",{ref:n,...s,width:a,height:a,stroke:t,strokeWidth:c?24*Number(i)/Number(a):i,className:`lucide lucide-${toKebabCase(e)}`,...l},[...r.map(([e,r])=>(0,o.createElement)(e,r)),...(Array.isArray(d)?d:[d])||[]]));return t.displayName=`${e}`,t}}};