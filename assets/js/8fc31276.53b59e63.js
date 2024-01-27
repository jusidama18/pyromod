"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[927],{1983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var s=n(5893),c=n(1151);const r={title:"monkeypatch utilities"},i=void 0,d={id:"reference/modules/utils/patch",title:"monkeypatch utilities",description:"function patch_into",source:"@site/docs/reference/modules/utils/patch.md",sourceDirName:"reference/modules/utils",slug:"/reference/modules/utils/patch",permalink:"/reference/modules/utils/patch",draft:!1,unlisted:!1,editUrl:"https://github.com/usernein/pyromod/tree/master/docs/docs/reference/modules/utils/patch.md",tags:[],version:"current",frontMatter:{title:"monkeypatch utilities"},sidebar:"apiReferenceSidebar",previous:{title:"Listener",permalink:"/reference/modules/types/listener"}},o={},h=[{value:"<em>function</em> <code>patch_into</code>",id:"function-patch_into",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"<em>function</em> <code>should_patch</code>",id:"function-should_patch",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3}];function l(e){const t={blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h2,{id:"function-patch_into",children:[(0,s.jsx)(t.em,{children:"function"})," ",(0,s.jsx)(t.code,{children:"patch_into"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"function"})," ",(0,s.jsx)(t.code,{children:"pyromod.utils.patch_into(target_class)"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"pyromod.utils.patch_into"})," decorator is a function used to facilitate monkeypatching of pyrogram classes with custom\nmethods from pyromod."]}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"target_class"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Type"})}),(0,s.jsx)(t.td,{children:"The target class or Pyrogram class to which you want to apply the patch."})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:["A decorated class containing the patched methods. Each replaced method is now available prefixed with ",(0,s.jsx)(t.code,{children:"old"})," in the\ndecorated class (e.g. ",(0,s.jsx)(t.code,{children:"__init__"})," becomes ",(0,s.jsx)(t.code,{children:"old__init__"}),")."]}),"\n",(0,s.jsxs)(t.h2,{id:"function-should_patch",children:[(0,s.jsx)(t.em,{children:"function"})," ",(0,s.jsx)(t.code,{children:"should_patch"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"function"})," ",(0,s.jsx)(t.code,{children:"pyromod.utils.should_patch(func)"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"pyromod.utils.should_patch"})," decorator is a function used to specify that a method should be patched into a target class.\nIt marks a method as patchable, indicating that it should be considered for monkeypatching by ",(0,s.jsx)(t.code,{children:"pyromod.utils.patch_into"}),". This\ndecorator is used in conjunction with the ",(0,s.jsx)(t.code,{children:"pyromod.utils.patch_into"})," decorator."]}),"\n",(0,s.jsx)(t.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"func"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Type"})}),(0,s.jsx)(t.td,{children:"The method to be marked as patchable."})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:["The same method with the ",(0,s.jsx)(t.code,{children:"should_patch"})," attribute set to ",(0,s.jsx)(t.code,{children:"True"}),"."]})]})}function a(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>i});var s=n(7294);const c={},r=s.createContext(c);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);