"use strict";exports.id=5686,exports.ids=[5686],exports.modules={85763:(e,s,t)=>{t.r(s),t.d(s,{default:()=>FirstSection});var a=t(30784),r=t(9885),l=t(83894),i=t(66558),n=t(19098),o=t(81476),d=t(19458),c=t(1264),m=t(98699);let x=o.fC;o.ZA;let u=o.B4,f=r.forwardRef(({className:e,children:s,...t},r)=>(0,a.jsxs)(o.xz,{ref:r,className:(0,m.cn)("flex h-16 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),...t,children:[s,a.jsx(o.JO,{asChild:!0,children:a.jsx(d.Z,{className:"h-4 w-4 opacity-50"})})]}));f.displayName=o.xz.displayName;let p=r.forwardRef(({className:e,children:s,position:t="popper",...r},l)=>a.jsx(o.h_,{children:a.jsx(o.VY,{ref:l,className:(0,m.cn)("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===t&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:t,...r,children:a.jsx(o.l_,{className:(0,m.cn)("p-1","popper"===t&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:s})})}));p.displayName=o.VY.displayName;let h=r.forwardRef(({className:e,...s},t)=>a.jsx(o.__,{ref:t,className:(0,m.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",e),...s}));h.displayName=o.__.displayName;let j=r.forwardRef(({className:e,children:s,...t},r)=>(0,a.jsxs)(o.ck,{ref:r,className:(0,m.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...t,children:[a.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:a.jsx(o.wU,{children:a.jsx(c.Z,{className:"h-4 w-4"})})}),a.jsx(o.eT,{children:s})]}));j.displayName=o.ck.displayName;let y=r.forwardRef(({className:e,...s},t)=>a.jsx(o.Z0,{ref:t,className:(0,m.cn)("-mx-1 my-1 h-px bg-muted",e),...s}));y.displayName=o.Z0.displayName;var g=t(95555),N=t(71085),b=t(43618),w=t(91971);let v=(0,w.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),F=r.forwardRef(({className:e,...s},t)=>a.jsx(b.f,{ref:t,className:(0,m.cn)(v(),e),...s}));F.displayName=b.f.displayName;let S=i.RV,_=r.createContext({}),FormField=({...e})=>a.jsx(_.Provider,{value:{name:e.name},children:a.jsx(i.Qr,{...e})}),useFormField=()=>{let e=r.useContext(_),s=r.useContext(T),{getFieldState:t,formState:a}=(0,i.Gc)(),l=t(e.name,a);if(!e)throw Error("useFormField should be used within <FormField>");let{id:n}=s;return{id:n,name:e.name,formItemId:`${n}-form-item`,formDescriptionId:`${n}-form-item-description`,formMessageId:`${n}-form-item-message`,...l}},T=r.createContext({}),R=r.forwardRef(({className:e,...s},t)=>{let l=r.useId();return a.jsx(T.Provider,{value:{id:l},children:a.jsx("div",{ref:t,className:(0,m.cn)("space-y-2",e),...s})})});R.displayName="FormItem";let I=r.forwardRef(({className:e,...s},t)=>{let{error:r,formItemId:l}=useFormField();return a.jsx(F,{ref:t,className:(0,m.cn)(r&&"text-destructive",e),htmlFor:l,...s})});I.displayName="FormLabel";let A=r.forwardRef(({...e},s)=>{let{error:t,formItemId:r,formDescriptionId:l,formMessageId:i}=useFormField();return a.jsx(N.g7,{ref:s,id:r,"aria-describedby":t?`${l} ${i}`:`${l}`,"aria-invalid":!!t,...e})});A.displayName="FormControl";let C=r.forwardRef(({className:e,...s},t)=>{let{formDescriptionId:r}=useFormField();return a.jsx("p",{ref:t,id:r,className:(0,m.cn)("text-sm text-muted-foreground",e),...s})});C.displayName="FormDescription";let O=r.forwardRef(({className:e,children:s,...t},r)=>{let{error:l,formMessageId:i}=useFormField(),n=l?String(l?.message):s;return n?a.jsx("p",{ref:r,id:i,className:(0,m.cn)("text-sm font-medium text-destructive",e),...t,children:n}):null});O.displayName="FormMessage";let k=r.forwardRef(({className:e,type:s,...t},r)=>a.jsx("input",{type:s,className:(0,m.cn)("flex h-16 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:r,...t}));k.displayName="Input";let E=0,D=new Map,addToRemoveQueue=e=>{if(D.has(e))return;let s=setTimeout(()=>{D.delete(e),dispatch({type:"REMOVE_TOAST",toastId:e})},1e6);D.set(e,s)},reducer=(e,s)=>{switch(s.type){case"ADD_TOAST":return{...e,toasts:[s.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===s.toast.id?{...e,...s.toast}:e)};case"DISMISS_TOAST":{let{toastId:t}=s;return t?addToRemoveQueue(t):e.toasts.forEach(e=>{addToRemoveQueue(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===t||void 0===t?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===s.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==s.toastId)}}},V=[],z={toasts:[]};function dispatch(e){z=reducer(z,e),V.forEach(e=>{e(z)})}function toast({...e}){let s=(E=(E+1)%Number.MAX_VALUE).toString(),dismiss=()=>dispatch({type:"DISMISS_TOAST",toastId:s});return dispatch({type:"ADD_TOAST",toast:{...e,id:s,open:!0,onOpenChange:e=>{e||dismiss()}}}),{id:s,dismiss,update:e=>dispatch({type:"UPDATE_TOAST",toast:{...e,id:s}})}}let M=r.forwardRef(({className:e,...s},t)=>a.jsx("textarea",{className:(0,m.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:t,...s}));M.displayName="Textarea";let Z=n.Ry({first_name:n.Z_(),last_name:n.Z_(),email:n.Z_().email(),phone_number:n.Z_(),country:n.Km(["canada","usa"]),company_size:n.Km(["1-10","11-50","51-200","201-500","501-1000","1000+"]),info:n.Z_()});function FirstSection(){let[e,s]=(0,r.useState)(!1),[t,n]=(0,r.useState)(!1),{toast:o}=function(){let[e,s]=r.useState(z);return r.useEffect(()=>(V.push(s),()=>{let e=V.indexOf(s);e>-1&&V.splice(e,1)}),[e]),{...e,toast,dismiss:e=>dispatch({type:"DISMISS_TOAST",toastId:e})}}(),d=(0,i.cI)({resolver:(0,l.F)(Z),defaultValues:{first_name:"",last_name:"",email:"",phone_number:"",country:"canada",company_size:"1-10",info:""}});async function onSubmit(e){console.log(e);try{s(!0);let t=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw Error("Something went wrong");n(!0)}catch(e){console.error(e),o({title:"Error",description:"Something went wrong"})}finally{s(!1)}}return(0,a.jsxs)("div",{className:" items-center justify-center flex flex-col px-20 m:px-0 py-20 space-y-10 text-center ",children:[t?a.jsx("div",{className:"text-3xl text-green-400 ",children:"Thank you for contacting us. We will be in contact with you shortly."}):(0,a.jsxs)("div",{className:"text-5xl ",children:[a.jsx("div",{className:"text-5xl ",children:"Talk with our sales team"}),a.jsx("div",{className:"text-xl",children:"Fill out your information and a Bird sales representative will contact you shortly."})]}),a.jsx(S,{...d,children:t?a.jsx("div",{className:"text-2xl h-screen text-green-400 items-center space-y-20 flex flex-col ",children:a.jsx("div",{className:"",children:a.jsx("img",{src:"/videos/check.gif",className:"h-28 w-28"})})}):(0,a.jsxs)("form",{onSubmit:d.handleSubmit(onSubmit),className:"md:w-2/3 space-y-6 border p-8 rounded-xl ",children:[a.jsx(FormField,{control:d.control,name:"first_name",render:({field:e})=>(0,a.jsxs)(R,{className:"flex items-center justify-center  space-y-4 w-full",children:[a.jsx(I,{className:"w-60 text-2xl pt-4",children:"First Name"}),a.jsx(A,{children:a.jsx(k,{className:"w-full",placeholder:"",...e})}),a.jsx(O,{})]})}),a.jsx(FormField,{control:d.control,name:"last_name",render:({field:e})=>(0,a.jsxs)(R,{className:"flex items-center justify-center  space-y-4 w-full",children:[a.jsx(I,{className:"w-60 text-2xl pt-4",children:"Last Name"}),a.jsx(A,{children:a.jsx(k,{className:"",placeholder:"",...e})}),a.jsx(O,{})]})}),a.jsx(FormField,{control:d.control,name:"email",render:({field:e})=>(0,a.jsxs)(R,{className:"flex items-center justify-center  space-y-4 ",children:[a.jsx(I,{className:"w-60 text-2xl pt-4",children:"Email"}),a.jsx(A,{children:a.jsx(k,{className:"",placeholder:"",...e})})]})}),a.jsx(FormField,{control:d.control,name:"phone_number",render:({field:e})=>(0,a.jsxs)(R,{className:"flex items-center justify-center  space-y-4 w-full",children:[a.jsx(I,{className:"w-60 text-2xl pt-4",children:"Phone Number"}),a.jsx(A,{children:a.jsx(k,{className:"",placeholder:"",...e})}),a.jsx(O,{})]})}),a.jsx(FormField,{control:d.control,name:"country",render:({field:e})=>(0,a.jsxs)(R,{className:"flex items-center justify-center  space-y-4 w-full",children:[a.jsx(I,{className:"w-60 text-2xl pt-4",children:"Country"}),(0,a.jsxs)(x,{onValueChange:e.onChange,defaultValue:e.value,children:[a.jsx(A,{children:a.jsx(f,{children:a.jsx(u,{placeholder:"Select a country"})})}),(0,a.jsxs)(p,{children:[a.jsx("div",{className:"flex gap-4",children:a.jsx(j,{value:"canada",children:" Canada"})}),a.jsx(j,{value:"usa",children:"United States of America"})]})]}),a.jsx(O,{})]})}),a.jsx(FormField,{control:d.control,name:"company_size",render:({field:e})=>(0,a.jsxs)(R,{className:"flex items-center justify-center  space-y-4 w-full",children:[a.jsx(I,{className:"w-60 text-2xl pt-4",children:"Company Size"}),(0,a.jsxs)(x,{onValueChange:e.onChange,defaultValue:e.value,children:[a.jsx(A,{children:a.jsx(f,{children:a.jsx(u,{placeholder:"How many employees?"})})}),(0,a.jsxs)(p,{children:[a.jsx("div",{className:"flex gap-4",children:a.jsx(j,{value:"1-10",children:"1-10"})}),a.jsx(j,{value:"11-50",children:"11-50"}),a.jsx(j,{value:"51-200",children:"51-200"}),a.jsx(j,{value:"201-500",children:"201-500"}),a.jsx(j,{value:"501-1000",children:"501-1000"}),a.jsx(j,{value:"1000+",children:"1000+"})]})]}),a.jsx(O,{})]})}),a.jsx(FormField,{control:d.control,name:"info",render:({field:e})=>(0,a.jsxs)(R,{className:"flex items-center justify-center  space-y-4 w-full",children:[a.jsx(I,{className:"w-60 text-2xl pt-4",children:"Information"}),a.jsx(A,{children:a.jsx(M,{style:{height:"200px"},className:"",placeholder:"",...e})}),a.jsx(O,{})]})}),a.jsx("div",{className:"flex items-center justify-center gap-4",children:a.jsx(g.z,{type:"submit",className:"bg-[#000] text-xl rounded-sm w-80 h-20 ",disabled:e,onClick:()=>d.handleSubmit(onSubmit),children:"Submit"})})]})})]})}},14138:(e,s,t)=>{t.r(s),t.d(s,{$$typeof:()=>i,__esModule:()=>l,default:()=>o});var a=t(95153);let r=(0,a.createProxy)(String.raw`/workspaces/asana-clone/app/contact/FirstSection/page.tsx`),{__esModule:l,$$typeof:i}=r,n=r.default,o=n}};