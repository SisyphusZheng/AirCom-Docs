"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[953],{3644:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"feature-components/user-profile","title":"user-profile","description":"Properties","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/feature-components/user-profile.mdx","sourceDirName":"feature-components","slug":"/feature-components/user-profile","permalink":"/docs/feature-components/user-profile","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/feature-components/user-profile.mdx","tags":[],"version":"current","frontMatter":{"title":"user-profile"},"sidebar":"tutorialSidebar","previous":{"title":"text","permalink":"/docs/basic-components/text"}}');var i=n(4848),t=n(8453);const l={title:"user-profile"},o="air-user-profile",a={},d=[{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"1. Basic User Profile",id:"1-basic-user-profile",level:3},{value:"2. Read-Only User Profile",id:"2-read-only-user-profile",level:3},{value:"3. Editable User Profile",id:"3-editable-user-profile",level:3},{value:"4. User Without Bio",id:"4-user-without-bio",level:3},{value:"5. Custom Slot Content",id:"5-custom-slot-content",level:3},{value:"6. Minimal Profile",id:"6-minimal-profile",level:3},{value:"7. Extended Profile with Stats",id:"7-extended-profile-with-stats",level:3}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"air-user-profile",children:"air-user-profile"})}),"\n",(0,i.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Property"}),(0,i.jsx)(r.th,{children:"Attribute"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Default"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"avatarSrc"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"avatar-src"})}),(0,i.jsx)(r.td,{}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"string"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"undefined"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"editable"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"editable"})}),(0,i.jsx)(r.td,{}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"boolean"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"false"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"userBio"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"user-bio"})}),(0,i.jsx)(r.td,{}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"string"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"undefined"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"userName"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"user-name"})}),(0,i.jsx)(r.td,{}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"string"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"undefined"})})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsx)(r.h3,{id:"depends-on",children:"Depends on"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"../basic-components/avatar",children:"air-avatar"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"../basic-components/text",children:"air-text"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"../basic-components/input",children:"air-input"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"../basic-components/button",children:"air-button"})}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"1-basic-user-profile",children:"1. Basic User Profile"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-jsx",metastring:"live",live:!0,children:'  <air-user-profile\r\n    avatar-src="https://avatars.githubusercontent.com/u/146103794?v=4"\r\n    user-name="Zhi"\r\n    user-bio="\u524d\u7aef\u5f00\u53d1\u8005\uff0c\u70ed\u7231\u6280\u672f\u5206\u4eab"\r\n    editable="true"\r\n  ></air-user-profile>\r\n\n'})}),"\n",(0,i.jsx)(r.h3,{id:"2-read-only-user-profile",children:"2. Read-Only User Profile"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-jsx",metastring:"live",live:!0,children:'  <air-user-profile\r\n    avatar-src="https://avatars.githubusercontent.com/u/146103794?v=4"\r\n    user-name="John Doe"\r\n    user-bio="Web Developer with a passion for open-source projects."\r\n  >\r\n  </air-user-profile>\r\n\n'})}),"\n",(0,i.jsx)(r.h3,{id:"3-editable-user-profile",children:"3. Editable User Profile"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-jsx",metastring:"live",live:!0,children:'  <air-user-profile\r\n    avatar-src="https://avatars.githubusercontent.com/u/146103794?v=4"\r\n    user-name="Jane Smith"\r\n    user-bio="Product Manager, loves tech and coffee."\r\n    editable\r\n  >\r\n  </air-user-profile>\r\n\r\n\n'})}),"\n",(0,i.jsx)(r.h3,{id:"4-user-without-bio",children:"4. User Without Bio"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-jsx",metastring:"live",live:!0,children:'  <air-user-profile\r\n    avatar-src="https://avatars.githubusercontent.com/u/146103794?v=4"\r\n    user-name="Anonymous"\r\n  >\r\n  </air-user-profile>\r\n\r\n\n'})}),"\n",(0,i.jsx)(r.h3,{id:"5-custom-slot-content",children:"5. Custom Slot Content"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-jsx",metastring:"live",live:!0,children:'  <air-user-profile\r\n    avatar-src="https://avatars.githubusercontent.com/u/146103794?v=4"\r\n    user-name="Custom User"\r\n  >\r\n    <div slot="title" class="custom-title">\r\n      \ud83d\udd25 Custom Title: Super User\r\n    </div>\r\n    <div slot="content" class="custom-content">\r\n      This is a custom bio for a special user.\r\n    </div>\r\n  </air-user-profile>\r\n\n'})}),"\n",(0,i.jsx)(r.h3,{id:"6-minimal-profile",children:"6. Minimal Profile"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-jsx",metastring:"live",live:!0,children:'  <air-user-profile\r\n    avatar-src="https://avatars.githubusercontent.com/u/146103794?v=4"\r\n    user-name="Minimal User"\r\n    user-bio="Just another user with minimal info."\r\n  >\r\n  </air-user-profile>\r\n\n'})}),"\n",(0,i.jsx)(r.h3,{id:"7-extended-profile-with-stats",children:"7. Extended Profile with Stats"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-jsx",metastring:"live",live:!0,children:'<air-user-profile\r\n    avatar-src="https://avatars.githubusercontent.com/u/146103794?v=4"\r\n    user-name="Stats User"\r\n    user-bio="UI/UX Designer with an eye for detail."\r\n  >\r\n    <div slot="content">\r\n      <p>Bio: Passionate about design systems.</p>\r\n      <div>\r\n        <div>\r\n          <strong>Followers:</strong> 1200\r\n        </div>\r\n        <div>\r\n          <strong>Following:</strong> 180\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </air-user-profile>\n'})})]})}function u(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>o});var s=n(6540);const i={},t=s.createContext(i);function l(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);