"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3400],{954:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"basic-components/text","title":"text","description":"Properties","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/basic-components/text.mdx","sourceDirName":"basic-components","slug":"/basic-components/text","permalink":"/docs/basic-components/text","draft":false,"unlisted":false,"editUrl":"https://github.com/aircomponents/UI/docs/basic-components/text.mdx","tags":[],"version":"current","frontMatter":{"title":"text"},"sidebar":"tutorialSidebar","previous":{"title":"tag","permalink":"/docs/basic-components/tag"},"next":{"title":"chat","permalink":"/docs/feature-components/chat"}}');var s=n(4848),r=n(8453);const d={title:"text"},l=void 0,c={},h=[{value:"Properties",id:"properties",level:2},{value:"Property description",id:"property-description",level:2},{value:"Usage examples",id:"usage-examples",level:2},{value:"1. Rendering different types of text",id:"1-rendering-different-types-of-text",level:3},{value:"2. Rendering headings of different levels",id:"2-rendering-headings-of-different-levels",level:3},{value:"3. Use color styles",id:"3-use-color-styles",level:3},{value:"4. Inline text",id:"4-inline-text",level:3},{value:"5. Enable expressive styles",id:"5-enable-expressive-styles",level:3},{value:"6. ARIA attributes",id:"6-aria-attributes",level:3}];function o(e){const i={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Property"}),(0,s.jsx)(i.th,{children:"Attribute"}),(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Type"}),(0,s.jsx)(i.th,{children:"Default"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"color"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"color"})}),(0,s.jsx)(i.td,{}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'"error" | "helper" | "inverse" | "on-color" | "primary" | "secondary" | "tertiary"'})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"'primary'"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"configAria"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"config-aria"})}),(0,s.jsx)(i.td,{}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"any"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"{}"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"expressive"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"expressive"})}),(0,s.jsx)(i.td,{}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"boolean"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"false"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"headingLevel"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"heading-level"})}),(0,s.jsx)(i.td,{}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"1 | 2 | 3 | 4 | 5 | 6"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"undefined"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"headingSize"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"heading-size"})}),(0,s.jsx)(i.td,{}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"1 | 2 | 3 | 4 | 5 | 6 | 7"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"undefined"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"inline"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"inline"})}),(0,s.jsx)(i.td,{}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"boolean"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"false"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"type"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"type"})}),(0,s.jsx)(i.td,{}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'"body" | "body-compact" | "body-emphasis" | "body-large" | "code" | "fluid-heading" | "heading" | "helper-text" | "label" | "legal"'})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"'body'"})})]})]})]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"air-text"})," component is used to render different types of text, such as headings, paragraphs, and explanatory text. It supports a variety of style and color options."]}),"\n",(0,s.jsx)(i.h2,{id:"property-description",children:"Property description"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"type"})}),": specifies the type of text. The following options are supported:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"'code'"}),": displays code text"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"'helper-text'"}),": auxiliary text"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"'label'"}),": label text"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"'legal'"}),": legal text"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"'heading'"}),": heading text"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"'body'"}),": normal body text"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"'body-compact'"}),": compact body text"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"'body-large'"}),": large body text"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"'body-emphasis'"}),": emphasised body text"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"'fluid-heading'"}),": fluid heading text"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"expressive"})}),": whether to enable the expressive text style (default: ",(0,s.jsx)(i.code,{children:"false"}),")."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"headingSize"})}),": the size of the heading, a number between 1 and 7, which affects the display size of the text of the ",(0,s.jsx)(i.code,{children:"heading"})," type."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"headingLevel"})}),": the level of the heading, a number between 1 and 6. Determines the use of the ",(0,s.jsx)(i.code,{children:"<h1>"})," to ",(0,s.jsx)(i.code,{children:"<h6>"})," tags."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"inline"})}),": whether to render the text as an inline element (default: ",(0,s.jsx)(i.code,{children:"false"}),")."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"color"})}),": the text color, with the following options:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"'primary'"}),": primary color"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"'secondary'"}),": secondary color"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"'tertiary'"}),": tertiary color"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"'helper'"}),": helper color"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"'error'"}),": error color"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"'on-color'"}),": text color is custom color"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"'inverse'"}),": inverse color"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"configAria"})}),": configures ARIA attributes, allowing you to attach ARIA attributes to text elements"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"usage-examples",children:"Usage examples"}),"\n",(0,s.jsx)(i.h3,{id:"1-rendering-different-types-of-text",children:"1. Rendering different types of text"}),"\n",(0,s.jsx)("air-previewer",{size:"auto",children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("air-text",{type:"heading",level:"1",children:"Main Heading"}),(0,s.jsx)("air-text",{type:"body",children:"This is a simple paragraph."}),(0,s.jsx)("air-text",{type:"helper-text",children:"Helper text to guide the user."}),(0,s.jsx)("air-text",{type:"code",children:"const x = 10;"})]})}),"\n",(0,s.jsx)(i.h3,{id:"2-rendering-headings-of-different-levels",children:"2. Rendering headings of different levels"}),"\n",(0,s.jsx)("air-previewer",{size:"auto",children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("air-text",{type:"heading",headingSize:"1",children:"Heading 1"}),(0,s.jsx)("air-text",{type:"heading",headingSize:"2",children:"Heading 2"}),(0,s.jsx)("air-text",{type:"heading",headingSize:"3",children:"Heading 3"}),(0,s.jsx)("air-text",{type:"heading",headingSize:"4",children:"Heading 4"}),(0,s.jsx)("air-text",{type:"heading",headingSize:"5",children:"Heading 5"}),(0,s.jsx)("air-text",{type:"heading",headingSize:"6",children:"Heading 6"})]})}),"\n",(0,s.jsx)(i.h3,{id:"3-use-color-styles",children:"3. Use color styles"}),"\n",(0,s.jsx)("air-previewer",{size:"auto",children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("air-text",{type:"heading",level:"1",children:"Main Heading"}),(0,s.jsx)("air-text",{type:"body",children:"This is a simple paragraph. "}),(0,s.jsx)("air-text",{type:"helper-text",children:"Helper text to guide the user. "}),(0,s.jsx)("air-text",{type:"code",children:"const x = 10;"})]})}),"\n",(0,s.jsx)(i.h3,{id:"4-inline-text",children:"4. Inline text"}),"\n",(0,s.jsx)("air-previewer",{size:"auto",children:(0,s.jsx)("div",{style:{display:"flex",gap:"1rem",justifyContent:"center"},children:(0,s.jsx)("air-text",{type:"body",inline:!0,children:"This text is inline. "})})}),"\n",(0,s.jsx)(i.h3,{id:"5-enable-expressive-styles",children:"5. Enable expressive styles"}),"\n",(0,s.jsx)("air-previewer",{size:"auto",children:(0,s.jsx)("div",{style:{display:"flex",gap:"1rem",justifyContent:"center"},children:(0,s.jsx)("air-text",{type:"body",expressive:!0,children:"This is expressive text."})})}),"\n",(0,s.jsx)(i.h3,{id:"6-aria-attributes",children:"6. ARIA attributes"}),"\n",(0,s.jsx)("air-previewer",{size:"auto",children:(0,s.jsx)("div",{style:{display:"flex",gap:"1rem",justifyContent:"center"},children:(0,s.jsx)("air-text",{type:"body",configAria:{"aria-label":"Descriptive text"},children:"This text has ARIA attributes."})})})]})}function x(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>d,x:()=>l});var t=n(6540);const s={},r=t.createContext(s);function d(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);