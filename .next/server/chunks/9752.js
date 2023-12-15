"use strict";exports.id=9752,exports.ids=[9752],exports.modules={79752:(e,n,t)=>{t.d(n,{z:()=>$921a889cee6df7e8$export$99c2b779aa4e8b8b});var a=t(9885),r=t(88908),i=t(80880),o=t(95852);let $921a889cee6df7e8$export$99c2b779aa4e8b8b=e=>{let{present:n,children:t}=e,u=function(e){var n;let[t,i]=(0,a.useState)(),u=(0,a.useRef)({}),d=(0,a.useRef)(e),m=(0,a.useRef)("none"),l=e?"mounted":"unmounted",[c,s]=(n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,a.useReducer)((e,t)=>{let a=n[e][t];return null!=a?a:e},l));return(0,a.useEffect)(()=>{let e=$921a889cee6df7e8$var$getAnimationName(u.current);m.current="mounted"===c?e:"none"},[c]),(0,o.b)(()=>{let n=u.current,t=d.current,a=t!==e;if(a){let a=m.current,r=$921a889cee6df7e8$var$getAnimationName(n);e?s("MOUNT"):"none"===r||(null==n?void 0:n.display)==="none"?s("UNMOUNT"):t&&a!==r?s("ANIMATION_OUT"):s("UNMOUNT"),d.current=e}},[e,s]),(0,o.b)(()=>{if(t){let handleAnimationEnd=e=>{let n=$921a889cee6df7e8$var$getAnimationName(u.current),a=n.includes(e.animationName);e.target===t&&a&&(0,r.flushSync)(()=>s("ANIMATION_END"))},handleAnimationStart=e=>{e.target===t&&(m.current=$921a889cee6df7e8$var$getAnimationName(u.current))};return t.addEventListener("animationstart",handleAnimationStart),t.addEventListener("animationcancel",handleAnimationEnd),t.addEventListener("animationend",handleAnimationEnd),()=>{t.removeEventListener("animationstart",handleAnimationStart),t.removeEventListener("animationcancel",handleAnimationEnd),t.removeEventListener("animationend",handleAnimationEnd)}}s("ANIMATION_END")},[t,s]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:(0,a.useCallback)(e=>{e&&(u.current=getComputedStyle(e)),i(e)},[])}}(n),d="function"==typeof t?t({present:u.isPresent}):a.Children.only(t),m=(0,i.e)(u.ref,d.ref),l="function"==typeof t;return l||u.isPresent?(0,a.cloneElement)(d,{ref:m}):null};function $921a889cee6df7e8$var$getAnimationName(e){return(null==e?void 0:e.animationName)||"none"}$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName="Presence"}};