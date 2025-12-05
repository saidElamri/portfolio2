import{c as d,a as u,r as o,j as e,t as w,h as f,m as b,C as g}from"./index-jmTj-ctM.js";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],j=d("chevron-left",v);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],y=d("tag",N),c=[{id:1,title:"The Future of AI in Web Development",date:"2024-03-15",tags:["AI","Web","Future"],content:`
# The Future of AI in Web Development

Artificial Intelligence is reshaping how we build the web. From **Generative UI** to **Agentic Workflows**, the role of a developer is evolving from "writer of code" to "architect of intelligence".

### Key Trends
1. **Copilots everywhere**: Coding assistants are becoming standard.
2. **Generative UI**: Interfaces that adapt in real-time to user intent.
3. **Autonomous Agents**: Systems that can plan and execute complex tasks.

> "The best way to predict the future is to invent it." - Alan Kay

As we move forward, integrating LLMs into our applications won't just be a feature—it will be the foundation.
        `},{id:2,title:"Why I Love React & Three.js",date:"2024-02-10",tags:["React","3D","Creative"],content:`
# Why I Love React & Three.js

Bringing 3D elements to the web used to be hard. Then came **React Three Fiber**.

It allows us to manipulate the 3D scene graph using the declarative power of React components. 

### My Favorite Features:
- **Declarative**: \`<mesh />\` just works.
- **Ecosystem**: \`@react-three/drei\` has everything from controls to shaders.
- **Performance**: It's just a thin wrapper, so performance is native.

Check out the "Hero Scene" in this portfolio to see it in action!
        `},{id:3,title:"Building SaidOS v2",date:"2024-01-01",tags:["Portfolio","DevLog"],content:`
# Building SaidOS v2

I wanted a portfolio that stood out. Not just a scrolling page, but an **experience**.

### The Concept
An Operating System in the browser. Windows, Dock, Terminal, and Filesystem.

### Tech Stack
- **React**: Core UI
- **Framer Motion**: Smooth window animations
- **Tailwind**: Rapid styling
- **Zustand**: Global state (Theme, Windows)

It's been a fun journey of fighting z-indexes and event propagation!
        `}],S=()=>{const{currentTheme:h}=u(),r=w[h],[a,m]=o.useState(c[0]),[i,x]=o.useState(""),[l,n]=o.useState(!0),p=c.filter(t=>t.title.toLowerCase().includes(i.toLowerCase())||t.tags.some(s=>s.toLowerCase().includes(i.toLowerCase())));return e.jsxs("div",{className:"flex h-full text-white bg-transparent",children:[e.jsxs("div",{className:`${l?"w-full md:w-64":"hidden md:block w-64"} flex flex-col border-r shrink-0 transition-all`,style:{borderColor:r.border,backgroundColor:"rgba(0,0,0,0.2)"},children:[e.jsx("div",{className:"p-4 border-b",style:{borderColor:r.border},children:e.jsxs("div",{className:"relative",children:[e.jsx(f,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40"}),e.jsx("input",{type:"text",placeholder:"Search notes...",value:i,onChange:t=>x(t.target.value),className:"w-full bg-white/5 rounded-lg pl-9 pr-3 py-2 text-sm outline-none focus:bg-white/10 transition-colors"})]})}),e.jsx("div",{className:"flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar",children:p.map(t=>e.jsxs("button",{onClick:()=>{m(t),window.innerWidth<768&&n(!1)},className:`w-full text-left p-3 rounded-lg transition-all group ${a.id===t.id?"bg-white/10":"hover:bg-white/5"}`,children:[e.jsx("h3",{className:`text-sm font-semibold mb-1 ${a.id===t.id?"text-white":"text-white/80"}`,children:t.title}),e.jsxs("div",{className:"flex items-center gap-2 text-[10px] text-white/40",children:[e.jsx("span",{children:t.date}),t.tags.length>0&&e.jsx("span",{className:"px-1.5 py-0.5 rounded-md bg-white/5 text-white/50",children:t.tags[0]})]})]},t.id))})]}),e.jsxs("div",{className:`${l?"hidden md:flex flex-1":"flex-1"} flex-col bg-opacity-50`,children:[e.jsx("div",{className:"md:hidden p-4 border-b flex items-center gap-2",style:{borderColor:r.border},children:e.jsxs("button",{onClick:()=>n(!0),className:"flex items-center gap-1 text-sm text-white/60 hover:text-white",children:[e.jsx(j,{className:"w-4 h-4"})," Back"]})}),e.jsx("div",{className:"flex-1 overflow-y-auto p-8 custom-scrollbar",children:e.jsxs(b.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.3},className:"max-w-2xl mx-auto prose prose-invert prose-sm md:prose-base",children:[e.jsxs("div",{className:"mb-8 border-b pb-6",style:{borderColor:r.border},children:[e.jsxs("div",{className:"flex items-center gap-3 text-sm text-white/40 mb-4",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(g,{className:"w-4 h-4"}),a.date]}),e.jsx("div",{className:"flex items-center gap-2",children:a.tags.map(t=>e.jsxs("div",{className:"flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/5",children:[e.jsx(y,{className:"w-3 h-3"}),t]},t))})]}),e.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:a.title})]}),e.jsx("div",{className:"whitespace-pre-wrap leading-relaxed text-white/80 space-y-4",children:a.content.split(`
`).map((t,s)=>t.trim().startsWith("# ")?e.jsx("h1",{className:"text-2xl font-bold mt-6 mb-4 text-white",children:t.replace("# ","")},s):t.trim().startsWith("## ")?e.jsx("h2",{className:"text-xl font-bold mt-5 mb-3 text-white",children:t.replace("## ","")},s):t.trim().startsWith("### ")?e.jsx("h3",{className:"text-lg font-bold mt-4 mb-2 text-white",children:t.replace("### ","")},s):t.trim().startsWith("> ")?e.jsx("blockquote",{className:"border-l-4 border-white/20 pl-4 italic text-white/60 my-4",children:t.replace("> ","")},s):t.trim().startsWith("- ")?e.jsx("li",{className:"ml-4 list-disc marker:text-white/40",children:t.replace("- ","")},s):e.jsx("p",{children:t},s))})]},a.id)})]})]})};export{S as default};
