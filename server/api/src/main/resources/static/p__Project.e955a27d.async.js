(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[7562],{77678:function(He,ie,u){"use strict";u.r(ie),u.d(ie,{Home:function(){return Pe},default:function(){return vu}});var ee=u(14781),k=u(58998),oe=u(59250),se=u(13013),De=u(57663),P=u(71577),Ce=u(13062),xe=u(71230),Ee=u(89032),Fe=u(15746),m=u(88983),ue=u(47933),R=u(11849),Y=u(47673),ce=u(4107),de=u(17462),b=u(76772),Ze=u(30887),z=u(54689),H=u(94657),te=u(71194),ne=u(50146),S=u(67294),pe=u(15873),ae=u(57119),ve=u(18401),Be=u(34707),x=u(49101),f=u(51615),B=u(80937),r=u(72706),d=u(70844),h=u(68489),C=u(54421),F=u(38272),v=u(58024),Z=u(39144),y=u(54029),p=u(79166),o=u(83279),E=u(71153),s=u(60331),T=u(13254),M=u(14277),$=u(8212),ge=u(92570),je=u(57820),Ae=u(24616),fe=u(44545),L=u(42285),e=u(85893),re=(0,B.Pi)(function(l){var a=l.moreMenu,i=(0,h.ok)(),c=i.loading,g=i.projects,j={},D=function(t,O,N){t.stopPropagation(),N!=="more"&&L.m8.push("/survey/".concat(O.id,"/").concat(N,"?mode=").concat(O.mode||"survey"))};if(g.length===0)return(0,e.jsx)(M.Z,{image:M.Z.PRESENTED_IMAGE_SIMPLE,imageStyle:{height:60},description:(0,e.jsx)("span",{children:"\u5F53\u524D\u8FD8\u6CA1\u6709\u521B\u5EFA\u95EE\u5377"})});var A=function(t){return t==="exam"?(0,e.jsx)(s.Z,{color:"red",children:"\u8003\u8BD5"}):(0,e.jsx)(s.Z,{color:"blue",children:"\u95EE\u5377"})};return(0,e.jsx)(F.ZP,{rowKey:"id",className:"survey-home-content",loading:c,grid:{gutter:16,xs:1,sm:2,md:3,lg:3,xl:4,xxl:4},dataSource:(0,o.Z)(g),renderItem:function(t){return t&&t.id?(0,e.jsx)(F.ZP.Item,{children:(0,e.jsx)(Z.Z,{onClick:function(){return L.m8.push("/survey/".concat(t.id,"?mode=").concat(t.mode||"survey"))},hoverable:!0,actions:[(0,e.jsx)(P.Z,{shape:"circle",size:"small",icon:(0,e.jsx)($.Z,{onClick:function(N){return D(N,t,"edit")}},"edit")}),(0,e.jsx)(P.Z,{shape:"circle",size:"small",icon:(0,e.jsx)(ge.Z,{onClick:function(N){return D(N,t,"data")}},"data")}),(0,e.jsx)(P.Z,{shape:"circle",size:"small",icon:(0,e.jsx)(je.Z,{onClick:function(N){return D(N,t,"report")}},"report")}),(0,e.jsx)(P.Z,{shape:"circle",size:"small",icon:(0,e.jsx)(Ae.Z,{onClick:function(N){return D(N,t,"setting")}},"setting")}),(0,e.jsx)(P.Z,{shape:"circle",size:"small",icon:(0,e.jsx)(se.Z,{overlay:a(t),trigger:["click"],children:(0,e.jsx)(fe.Z,{onClick:function(N){return D(N,t,"more")}},"ellipsis")})})],children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"title",children:[(0,e.jsx)("span",{children:t.name}),A(t.mode)]}),(0,e.jsxs)("div",{className:"content",children:[(0,e.jsx)("div",{className:"publish-status",children:t.setting.status===1?(0,e.jsx)(p.Z,{status:"processing",text:"\u6536\u96C6\u4E2D",className:"yes"}):(0,e.jsx)(p.Z,{status:"warning",text:"\u672A\u53D1\u5E03",className:"no"})}),(0,e.jsxs)("div",{className:"total",children:[(0,e.jsx)("span",{children:t.total}),"\u4EFD\u6570\u636E"]})]})]})})},t.id):(0,e.jsx)(F.ZP.Item,{children:(0,e.jsxs)(P.Z,{type:"dashed",className:"newButton",onClick:function(){return L.m8.push("/survey/new")},children:[(0,e.jsx)(x.Z,{})," \u65B0\u589E\u95EE\u5377"]})})}})}),ye=re,w=u(66456),Q=u(48995),he=u(77613),$e=(0,he.P)(function(l){var a=l.moreMenu,i=(0,h.ok)(),c=i.loading,g=i.projects,j=function(n,t){return{onClick:function(){t==="name"?L.m8.push("/survey/".concat(n.id,"/edit?mode=").concat(n.mode||"survey")):t==="total"?L.m8.push("/survey/".concat(n.id,"/data?mode=").concat(n.mode||"survey")):L.m8.push("/survey/".concat(n.id,"?mode=").concat(n.mode||"survey"))}}},D=[{title:"\u9879\u76EE\u540D\u79F0",dataIndex:"name",onCell:function(n){return j(n,"name")}},{title:"\u9879\u76EE\u72B6\u6001",dataIndex:"status",onCell:function(n){return j(n,"status")},render:function(n,t){var O=t.setting.status;return O===0?(0,e.jsx)(s.Z,{color:"warning",children:"\u672A\u5F00\u59CB"}):(0,e.jsx)(s.Z,{color:"processing",children:"\u6536\u96C6\u4E2D"})}},{title:"\u7C7B\u578B",dataIndex:"mode",render:function(n){return n==="exam"?"\u8003\u8BD5":"\u95EE\u5377"},onCell:function(n){return j(n,"status")}},{title:"\u7B54\u5377\u6570",dataIndex:"total",onCell:function(n){return j(n,"total")}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createAt",onCell:function(n){return j(n,"createAt")}},{title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"updateAt",onCell:function(n){return j(n,"updateAt")}},{title:"\u64CD\u4F5C",dataIndex:"operate",render:function(n,t){return(0,e.jsx)(se.Z,{overlay:a(t),trigger:["click"],children:(0,e.jsx)(fe.Z,{},"ellipsis")})}}];return(0,e.jsx)("div",{children:(0,e.jsx)(Q.Z,{dataSource:g,loading:c,columns:D,rowKey:"id",pagination:!1,rowClassName:function(){return"project-list-row"}})})}),Le=$e,Cu=u(34792),Se=u(48086),xu=u(43185),Qe=u(11324),Je=u(43347),Ue=Qe.Z.Dragger,Ke=function(a){var i=a.onCancel,c=(0,S.useState)(""),g=(0,H.Z)(c,2),j=g[0],D=g[1],A={multiple:!1,accept:".json",beforeUpload:function(t){var O=new FileReader;return O.readAsText(t,"UTF-8"),O.onload=function(N){try{var q=JSON.parse(N.target.result);D(q)}catch(le){Se.default.error("\u6A21\u677F\u89E3\u6790\u5931\u8D25")}},O.onerror=function(){Se.default.error("\u6A21\u677F\u8BFB\u53D6\u5931\u8D25")},!1}};return(0,e.jsx)(ne.Z,{visible:!0,title:"\u901A\u8FC7\u6A21\u677F\u5BFC\u5165\u95EE\u5377(JSON\u6A21\u677F)",okText:"\u5BFC\u5165",onOk:function(){setTimeout(function(){localStorage.setItem("temp-template",JSON.stringify(j)),L.m8.push("/survey/new?fromTemplate")},20)},onCancel:i,children:(0,e.jsxs)(Ue,(0,R.Z)((0,R.Z)({},A),{},{children:[(0,e.jsx)("p",{className:"ant-upload-drag-icon",children:(0,e.jsx)(Je.Z,{})}),(0,e.jsx)("p",{className:"ant-upload-text",children:"\u70B9\u51FB\u6216\u8005\u62D6\u62FD\u6A21\u677F\u6587\u4EF6\u5230\u6B64\u5904"})]}))})},Eu=u(57338),Ge=u(25084),Fu=u(49111),Oe=u(19650),Ne=u(29656),pu=u(88386),We={lineWrapping:!0,lineNumbers:!1,autofocus:!0,placeholder:"\u8BF7\u5C06\u51C6\u5907\u597D\u7684\u6587\u6863\u6309\u7167\u793A\u4F8B\u683C\u5F0F\u590D\u5236\u7C98\u8D34\u5230\u8FD9\u91CC"},Ie=`\u9879\u76EE\u6807\u9898
\u611F\u8C22\u60A8\u80FD\u62BD\u51FA\u51E0\u5206\u949F\u65F6\u95F4\u6765\u53C2\u52A0\u672C\u6B21\u7B54\u9898\uFF0C\u73B0\u5728\u6211\u4EEC\u5C31\u9A6C\u4E0A\u5F00\u59CB\u5427\uFF01\u3010\u6B22\u8FCE\u8BED\u3011

\u60A8\u7ECF\u5E38\u521B\u5EFA\u4EC0\u4E48\u7C7B\u578B\u7684\u9879\u76EE\uFF1F\u3010\u5355\u9009\u9898\u3011
\u95EE\u5377\u8C03\u7814
\u6295\u7968\u8BC4\u9009
\u6D4B\u8BC4\u8003\u8BD5

\u60A8\u4E86\u89E3\u8FC7\u54EA\u4E9B\u95EE\u5377\u7CFB\u7EDF\uFF1F\u3010\u591A\u9009\u9898\u3011
\u95EE\u5377\u7F51
\u95EE\u5377\u661F
\u91D1\u6570\u636E
\u5377\u738B

\u8BF7\u586B\u5199\u60A8\u7684\u95EE\u9898\u548C\u5EFA\u8BAE\u3010\u586B\u7A7A\u9898\u3011

\u8BF7\u586B\u5199\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF1F\u3010\u6A2A\u5411\u586B\u7A7A\u3011
\u59D3\u540D___\u5E74\u9F84___\u5C81
\u8054\u7CFB\u65B9\u5F0F____

\u5730\u533A\u3010\u7EA7\u8054\u9898\u3011
\u7701 \u5E02 \u53BF
\u5317\u4EAC\u5E02 \u6D77\u6DC0\u533A
\u5317\u4EAC\u5E02 \u897F\u57CE\u533A
\u6CB3\u5357\u7701 \u90D1\u5DDE\u5E02 \u7BA1\u57CE\u533A
\u6CB3\u5357\u7701 \u90D1\u5DDE\u5E02 \u9AD8\u65B0\u533A
\u6CB3\u5357\u7701 \u4FE1\u9633\u5E02 \u6D49\u6CB3\u533A
\u6CB3\u5357\u7701 \u4FE1\u9633\u5E02 \u7F8A\u5C71\u65B0\u533A
`,Ye=(0,S.forwardRef)(function(l,a){var i=l.onChange,c=(0,S.useState)(),g=(0,H.Z)(c,2),j=g[0],D=g[1];(0,S.useImperativeHandle)(a,function(){return{clear:function(){return j==null?void 0:j.setValue("")}}});var A=(0,S.useCallback)(function(t,O){D(t),i(Ie),setTimeout(function(){t.refresh(),t.focus()},1)},[]),n=(0,S.useCallback)(function(){i(j.getValue())},[j]);return(0,e.jsx)(Ne.Rt,{autoCursor:!0,value:Ie,options:We,editorDidMount:A,onChange:function(){n()}})}),Te=u(63439),Xe=u(5795),U=u(71211),ke=u(6936);function be(l){for(var a={type:"Survey",title:"",id:(0,U.Ox)(),children:[]},i=l.split(/[\n\r]{2,}/g).filter(function(g){return g.trim()}),c=0;c<i.length;c++)c===0?we(i[0],a):_e(i[c]).forEach(function(g){qe(g,a)});return a}function we(l,a){l.split(/[\n]+/).forEach(function(i,c){c===0?a.title=i:a.description=i.replace(/【.*】/,"")})}function qe(l,a){var i,c=l.split(/\n/g),g=(0,Xe.Z)(c),j=g[0],D=g.slice(1),A=tu(j,D),n={id:(0,U.Ox)(),type:A,title:j.replace(/【.*】/,""),children:[]};(i=a.children)===null||i===void 0||i.push(n),A==="QuestionSet"?eu(D,n):uu(D,n)}function _e(l){var a=l.split(/\n/g),i=[],c=[];return a.forEach(function(g,j){/^\d+[.、]/i.test(g.trim())?(c.length>0&&(i.push(c.join(`
`)),c=[]),c.push(g.replace(/^\d+[.、]/,"").trim())):c.push(g.trim())}),c.length>0&&i.push(c.join(`
`)),i}function eu(l,a){}function uu(l,a){if(a.type==="FillBlank"||a.type==="Signature"){var i;(i=a.children)===null||i===void 0||i.push({title:"",id:(0,U.Ox)()})}else if(a.type==="Cascader"){if(l.length>1){var c=(0,ke.D)(l[0]),g=(0,ke.H)(l.slice(1));c.forEach(function(n){var t;(t=a.children)===null||t===void 0||t.push({title:n.title,id:(0,U.Ox)()})}),a.dataSource=g}}else if(a.type==="HorzBlank"){if(l.length>0){var j=l.join(`
`).split(/_{3,}/).length-1;a.attribute={content:l.join("<br/>")};for(var D=0;D<j;D++){var A;(A=a.children)===null||A===void 0||A.push({title:"\u586B\u7A7A".concat(D+1),id:(0,U.Ox)()})}}}else l==null||l.filter(function(n){return n.trim()}).forEach(function(n){var t;(t=a.children)===null||t===void 0||t.push({title:n,id:(0,U.Ox)()})})}function tu(l,a){var i=l.substring(l.lastIndexOf("\u3010")+1,l.lastIndexOf("\u3011")).trim();if(!i&&a.length===0)return"FillBlank";switch(i){case"\u5355\u9009\u9898":return"Radio";case"\u591A\u9009\u9898":return"Checkbox";case"\u586B\u7A7A\u9898":return"FillBlank";case"\u5355\u884C\u6587\u672C\u9898":return"FillBlank";case"\u591A\u884C\u6587\u672C\u9898":return"MultipleBlank";case"\u4E0B\u62C9\u9898":return"Select";case"\u7B7E\u540D\u9898":return"Signature";case"\u6A2A\u5411\u586B\u7A7A":return"HorzBlank";case"\u6587\u672C\u63CF\u8FF0":return"Remark";case"\u7EA7\u8054\u9898":return"Cascader";default:return"Radio"}}var nu=u(72850),au={lineWrapping:!0,lineNumbers:!1,autofocus:!1,placeholder:"\u8BF7\u5C06\u51C6\u5907\u597D\u7684\u6587\u6863\u6309\u7167\u793A\u4F8B\u683C\u5F0F\u590D\u5236\u7C98\u8D34\u5230\u8FD9\u91CC",readOnly:!0};function ru(l){var a;return l.id=(0,U.Ox)(),(a=l.children)===null||a===void 0||a.forEach(function(i){i.id=(0,U.Ox)()}),{id:"demo",title:"",type:"Survey",children:[l]}}function lu(l){var a=l.title,i=l.schema,c=l.text;return(0,e.jsxs)("div",{className:"doc-item",children:[(0,e.jsxs)("h3",{className:"doc-item-title",children:[a,":"]}),(0,e.jsxs)("div",{className:"doc-item-wrapper",children:[(0,e.jsx)("div",{className:"doc-item-left",children:(0,e.jsx)(Ne.Rt,{value:c,options:au,editorDidMount:function(j){setTimeout(function(){j.refresh()},1)}})}),(0,e.jsxs)("div",{className:"doc-item-right",children:[(0,e.jsx)("div",{className:"tips",children:"\u9884\u89C8"}),(0,e.jsx)(Te.Z,{schema:ru(i),headerVisible:!1,footerVisible:!1,questionNumber:!1,progressBar:!1})]})]})]})}var iu=[{title:"\u6B22\u8FCE\u8BED",text:"\u611F\u8C22\u60A8\u80FD\u62BD\u51FA\u51E0\u5206\u949F\u65F6\u95F4\u6765\u53C2\u52A0\u672C\u6B21\u7B54\u9898\uFF0C\u73B0\u5728\u6211\u4EEC\u5C31\u9A6C\u4E0A\u5F00\u59CB\u5427\uFF01\u3010\u6B22\u8FCE\u8BED\u3011",schema:{id:"1",type:"Remark",title:"\u611F\u8C22\u60A8\u80FD\u62BD\u51FA\u51E0\u5206\u949F\u65F6\u95F4\u6765\u53C2\u52A0\u672C\u6B21\u7B54\u9898\uFF0C\u73B0\u5728\u6211\u4EEC\u5C31\u9A6C\u4E0A\u5F00\u59CB\u5427\uFF01\u3010\u6B22\u8FCE\u8BED\u3011"}},{title:"\u5355\u9009\u9898",text:`\u60A8\u7ECF\u5E38\u521B\u5EFA\u4EC0\u4E48\u7C7B\u578B\u7684\u9879\u76EE\uFF1F\u3010\u5355\u9009\u9898\u3011
\u95EE\u5377\u8C03\u7814
\u6295\u7968\u8BC4\u9009
\u6D4B\u8BC4\u8003\u8BD5
    `,schema:{type:"Radio",title:"\u60A8\u7ECF\u5E38\u521B\u5EFA\u4EC0\u4E48\u7C7B\u578B\u7684\u9879\u76EE\uFF1F",children:[{title:"\u95EE\u5377\u8C03\u7814"},{title:"\u6295\u7968\u8BC4\u9009"},{title:"\u6D4B\u8BC4\u8003\u8BD5"}]}},{title:"\u591A\u9009\u9898",text:`\u60A8\u4E86\u89E3\u8FC7\u54EA\u4E9B\u95EE\u5377\u7CFB\u7EDF\uFF1F\u3010\u591A\u9009\u9898\u3011
  \u95EE\u5377\u7F51
  \u95EE\u5377\u661F
  \u91D1\u6570\u636E
  \u5377\u738B
      `,schema:{type:"Checkbox",title:"\u60A8\u4E86\u89E3\u8FC7\u54EA\u4E9B\u95EE\u5377\u7CFB\u7EDF\uFF1F",children:[{title:"\u95EE\u5377\u7F51"},{title:"\u95EE\u5377\u661F"},{title:"\u91D1\u6570\u636E"},{title:"\u5377\u738B"}]}},{title:"\u586B\u7A7A\u9898",text:"\u8BF7\u586B\u5199\u60A8\u7684\u95EE\u9898\u548C\u5EFA\u8BAE\u3010\u586B\u7A7A\u9898\u3011",schema:{type:"FillBlank",title:"\u8BF7\u586B\u5199\u60A8\u7684\u95EE\u9898\u548C\u5EFA\u8BAE",children:[{title:""}]}},{title:"\u591A\u884C\u6587\u672C\u9898",text:`\u8BF7\u586B\u5199\u60A8\u7684\u95EE\u9898\u548C\u5EFA\u8BAE\u3010\u591A\u884C\u6587\u672C\u9898\u3011
  \u8EAB\u9AD8
  \u4F53\u91CD
  BMI
  `,schema:{type:"MultipleBlank",title:"\u8BF7\u586B\u5199\u60A8\u7684\u95EE\u9898\u548C\u5EFA\u8BAE",children:[{title:"\u8EAB\u9AD8"},{title:"\u4F53\u91CD"},{title:"BMI"}]}},{title:"\u4E0B\u62C9\u9898",text:`\u6027\u522B\u3010\u4E0B\u62C9\u9898\u3011
  \u7537
  \u5973`,schema:{type:"Select",title:"\u6027\u522B",children:[{title:"\u7537"},{title:"\u5973"}]}},{title:"\u7B7E\u540D",text:"\u7B7E\u4E2A\u540D\u5427\uFF01\u3010\u7B7E\u540D\u3011",schema:{type:"Signature",title:"\u7B7E\u4E2A\u540D\u5427\uFF01",children:[{title:""}]}},{title:"\u6A2A\u5411\u586B\u7A7A",text:`\u8BF7\u586B\u5199\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF1F\u3010\u6A2A\u5411\u586B\u7A7A\u3011
  \u59D3\u540D___\u5E74\u9F84___\u5C81
  \u8054\u7CFB\u65B9\u5F0F____`,schema:{type:"HorzBlank",title:"\u8BF7\u586B\u5199\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF1F",attribute:{content:`\u59D3\u540D___\u5E74\u9F84___\u5C81
  \u8054\u7CFB\u65B9\u5F0F____`},children:[{title:""},{title:""},{title:""}]}},{title:"\u7EA7\u8054\u9898",text:`\u7701\u5E02\u53BF\u3010\u7EA7\u8054\u9898\u3011
  \u7701 \u5E02 \u53BF
  \u5317\u4EAC\u5E02 \u6D77\u6DC0\u533A
  \u5317\u4EAC\u5E02 \u897F\u57CE\u533A
  \u6CB3\u5357\u7701 \u90D1\u5DDE\u5E02 \u7BA1\u57CE\u533A
  \u6CB3\u5357\u7701 \u90D1\u5DDE\u5E02 \u9AD8\u65B0\u533A
  \u6CB3\u5357\u7701 \u4FE1\u9633\u5E02 \u6D49\u6CB3\u533A
  \u6CB3\u5357\u7701 \u4FE1\u9633\u5E02 \u7F8A\u5C71\u65B0\u533A`,schema:{type:"Cascader",title:"\u5730\u533A",children:[{title:"\u7701",id:"6t0l"},{title:"\u5E02",id:"1bdu"},{title:"\u53BF",id:"ie4u"}],dataSource:[{label:"\u5317\u4EAC\u5E02",value:"vv5k",children:[{label:"\u6D77\u6DC0\u533A",value:"55x3"},{label:"\u897F\u57CE\u533A",value:"dxg7"}]},{label:"\u6CB3\u5357\u7701",value:"fyx1",children:[{label:"\u90D1\u5DDE\u5E02",value:"qu6c",children:[{label:"\u7BA1\u57CE\u533A",value:"x7zs"},{label:"\u9AD8\u65B0\u533A",value:"t67i"}]},{label:"\u4FE1\u9633\u5E02",value:"b79i",children:[{label:"\u6D49\u6CB3\u533A",value:"cg7z"},{label:"\u7F8A\u5C71\u65B0\u533A",value:"tfz0"}]}]}]}}],ou=function(a){var i=a.onClose;return(0,e.jsxs)(ne.Z,{visible:!0,onCancel:function(){return i()},footer:!1,title:"\u793A\u4F8B&\u5E2E\u52A9",width:750,maskClosable:!1,className:"import-text-doc-modal",children:[(0,e.jsxs)("div",{"data-v-5d201132":"",className:"doc-desc",children:[(0,e.jsx)("h3",{"data-v-5d201132":"",children:"\u683C\u5F0F\u8BF4\u660E\uFF1A"})," ",(0,e.jsx)("p",{"data-v-5d201132":"",children:"1. \u95EE\u9898\u4E4B\u95F4\u9700\u8981\u4EE5\u7A7A\u884C\u5206\u9694\uFF1B"}),(0,e.jsx)("p",{"data-v-5d201132":"",children:"2. \u5EFA\u8BAE\u5728\u9898\u76EE\u540E\u9762\u6DFB\u52A0\u9898\u578B\u6807\u8BC6(\u4F7F\u7528\u3010\u3011)\uFF0C\u672A\u6807\u8BC6\u7684\u9898\u76EE\u7CFB\u7EDF\u5C06\u81EA\u52A8\u8BC6\u522B\uFF1B"}),(0,e.jsxs)("p",{"data-v-5d201132":"",children:["3. \u76EE\u524D\u53EF\u8BC6\u522B\u7684\u9898\u578B\u6807\u8BC6\u5305\u62EC\uFF1A",(0,e.jsx)("span",{"data-v-5d201132":"",children:"\u3010\u6B22\u8FCE\u8BED\u3011\u3001"}),"\u3010\u5355\u9009\u9898\u3011\u3001\u3010\u591A\u9009\u9898\u3011\u3001\u3010\u7B7E\u540D\u9898\u3011\u3001\u3010\u4E0B\u62C9\u9898\u3011\u3001\u3010\u586B\u7A7A\u9898\u3011\u3001\u3010\u591A\u9879\u586B\u7A7A\u3011\u3001\u3010\u6A2A\u5411\u586B\u7A7A\u3011\u3001\u3010\u7EA7\u8054\u9898\u3011\u3001\u3010\u5907\u6CE8\u8BF4\u660E\u3011\uFF1B"]}),(0,e.jsx)("p",{"data-v-5d201132":"",children:"4. \u5982\u679C\u65E0\u6CD5\u6B63\u786E\u8BC6\u522B\uFF0C\u8BF7\u5C1D\u8BD5\u5728\u9898\u76EE\u4E0E\u9898\u76EE\u4E4B\u95F4\u52A0\u5165\u7A7A\u884C\uFF1B"}),(0,e.jsx)("p",{"data-v-5d201132":"",children:"5. \u8BF7\u52FF\u5728\u9009\u9879\u4E0E\u9009\u9879\u4E4B\u95F4\u7A7A\u884C\u3002"})]}),iu.map(function(c){return(0,e.jsx)(lu,(0,R.Z)({},c),c.title)})]})},su=ou,cu=function(a){var i=a.onClose,c=(0,S.useRef)(null),g=(0,S.useState)({}),j=(0,H.Z)(g,2),D=j[0],A=j[1],n=(0,S.useState)(!1),t=(0,H.Z)(n,2),O=t[0],N=t[1],q=(0,S.useRef)(),le=(0,h.zE)(function(K){A(be(K))},30);return(0,e.jsxs)(Ge.Z,{visible:!0,onClose:i,width:"100%",placement:"left",className:"import-text-drawer",closeIcon:!1,title:(0,e.jsx)("span",{children:"\u5BFC\u5165\u6587\u672C"}),autoFocus:!1,extra:(0,e.jsxs)(Oe.Z,{children:[(0,e.jsx)(P.Z,{onClick:i,children:"\u5173\u95ED"}),(0,e.jsx)(P.Z,{type:"primary",onClick:function(){setTimeout(function(){localStorage.setItem("temp-template",JSON.stringify(D)),L.m8.push("/survey/new?fromTemplate")},20)},children:"\u521B\u5EFA\u9879\u76EE"})]}),children:[(0,e.jsxs)("div",{className:"text-header",children:[(0,e.jsxs)("div",{className:"header-left",children:[(0,e.jsx)("h3",{className:"header-left-title",children:"\u6587\u672C\u7F16\u8F91"}),(0,e.jsx)("div",{children:(0,e.jsxs)(Oe.Z,{children:[(0,e.jsx)(P.Z,{type:"link",onClick:function(){N(!0)},children:"\u793A\u4F8B&\u5E2E\u52A9"}),(0,e.jsx)(P.Z,{icon:(0,e.jsx)(nu.Z,{}),onClick:function(){var G;return(G=q.current)===null||G===void 0?void 0:G.clear()},children:"\u6E05\u7A7A\u6587\u672C"})]})})]}),(0,e.jsx)("div",{className:"header-right",children:(0,e.jsx)("h3",{className:"header-right-title ",children:"\u9898\u76EE\u9884\u89C8"})})]}),(0,e.jsxs)("div",{className:"text-body",children:[(0,e.jsx)("div",{className:"editor-container",children:(0,e.jsx)(Ye,{ref:q,onChange:function(G){le(G)}})}),(0,e.jsx)("div",{className:"preview-container",children:(0,e.jsx)(Te.O,{ref:c,schema:D,headerVisible:!0,footerVisible:!0,paginationVisible:!1})})]}),O&&(0,e.jsx)(su,{onClose:function(){return N(!1)}})]})},du=cu,me=ne.Z.confirm,Me="home-content-type",Pe=(0,B.Pi)(function(){var l=(0,h.ok)(),a=(0,S.useRef)(""),i=(0,S.useState)(localStorage.getItem(Me)||"card"),c=(0,H.Z)(i,2),g=c[0],j=c[1],D=(0,S.useState)({current:1,pageSize:20}),A=(0,H.Z)(D,2),n=A[0],t=A[1],O=(0,S.useState)(!1),N=(0,H.Z)(O,2),q=N[0],le=N[1],K=(0,S.useState)(!1),G=(0,H.Z)(K,2),fu=G[0],Re=G[1],ze=(0,f.k6)();(0,S.useEffect)(function(){l.loadProjects(n)},[n,l]);var Ve=function(I){return(0,e.jsxs)(z.Z,{onClick:function(_){return _.domEvent.stopPropagation()},children:[(0,e.jsx)(z.Z.Item,{onClick:function(){return window.open("/s/".concat(I.id))},children:"\u9884\u89C8"},"preview"),(0,e.jsx)(z.Z.Item,{onClick:function(){me({title:"\u95EE\u5377\u91CD\u547D\u540D",icon:void 0,content:(0,e.jsxs)("div",{children:[(0,e.jsx)(b.Z,{message:"\u95EE\u5377\u91CD\u547D\u540D\u6210\u529F\uFF0C\u7CFB\u7EDF\u5185\u5404\u5904\u5C06\u663E\u793A\u91CD\u547D\u540D\u6807\u9898\u3002\u6B64\u64CD\u4F5C\u4E0D\u5F71\u54CD\u516C\u5F00\u95EE\u5377\u540D\u79F0",type:"info",showIcon:!0}),(0,e.jsx)(ce.Z,{style:{marginTop:10},onChange:function(J){return a.current=J.target.value},defaultValue:I.name})]}),okText:"\u786E\u8BA4",okType:"primary",cancelText:"\u53D6\u6D88",onOk:function(){new r.Uf(I.id).saveOrUpdateProject({name:a.current}).then(function(J){J.code===200&&t(function(X){return(0,R.Z)({},X)})})}})},children:"\u91CD\u547D\u540D"},"rename"),I.setting.status===0&&(0,e.jsx)(z.Z.Item,{onClick:function(){me({title:"\u786E\u5B9A\u53D1\u5E03\u5F53\u524D\u95EE\u5377?",icon:(0,e.jsx)(pe.Z,{style:{color:"#1890ff"}}),content:"\u53EA\u6709\u53D1\u5E03\u7684\u95EE\u5377\u624D\u80FD\u6536\u96C6\u6570\u636E",okText:"\u53D1\u5E03",okType:"primary",cancelText:"\u53D6\u6D88",onOk:function(){h.hi.updateSetting({id:I.id,settingKey:"status",settingValue:1}).then(function(J){J.code===200&&t(function(X){return(0,R.Z)({},X)})})}})},children:"\u53D1\u5E03"},"publish"),I.setting.status===1&&(0,e.jsx)(z.Z.Item,{onClick:function(){me({title:"\u786E\u5B9A\u505C\u6B62\u5F53\u524D\u95EE\u5377?",icon:(0,e.jsx)(ae.Z,{}),content:"\u505C\u6B62\u4E4B\u540E\u95EE\u5377\u5C06\u4E0D\u80FD\u7EE7\u7EED\u6536\u96C6\u6570\u636E",okText:"\u505C\u6B62",okType:"danger",cancelText:"\u53D6\u6D88",onOk:function(){h.hi.updateSetting({id:I.id,settingKey:"status",settingValue:0}).then(function(J){J.code===200&&t(function(X){return(0,R.Z)({},X)})})}})},children:"\u505C\u6B62"},"stop"),(0,e.jsx)(z.Z.Item,{onClick:function(){me({title:"\u786E\u5B9A\u5220\u9664\u5F53\u524D\u95EE\u5377?",icon:(0,e.jsx)(ae.Z,{}),content:"\u5220\u9664\u4E4B\u540E\u53EF\u4EE5\u5728\u56DE\u6536\u7AD9\u91CC\u9762\u627E\u56DE",okText:"\u5220\u9664",okType:"danger",cancelText:"\u53D6\u6D88",onOk:function(){new r.Uf(I.id).deleteProject(I.id).then(function(J){J.code===200&&t(function(X){return(0,R.Z)({},X)})})}})},children:"\u5220\u9664"},"delete")]})},hu=function(){return g==="card"?(0,e.jsx)(ye,{moreMenu:Ve}):(0,e.jsx)(Le,{moreMenu:Ve})},mu=(0,e.jsx)("div",{children:(0,e.jsx)(xe.Z,{className:"survey-home-search",children:(0,e.jsxs)(Fe.Z,{span:24,children:[(0,e.jsxs)(ue.ZP.Group,{value:g,onChange:function(I){j(I.target.value),localStorage.setItem(Me,I.target.value)},children:[(0,e.jsx)(ue.ZP.Button,{value:"card",children:(0,e.jsx)(ve.Z,{})}),(0,e.jsx)(ue.ZP.Button,{value:"list",children:(0,e.jsx)(Be.Z,{})})]}),(0,e.jsx)(ce.Z.Search,{className:"search",placeholder:"\u641C\u7D22\u9879\u76EE\u540D\u79F0",onSearch:function(I){t(function(V){return(0,R.Z)((0,R.Z)({},V),{},{name:I})})}})]})})});return(0,e.jsxs)(d.ZP,{title:"\u6211\u7684\u95EE\u5377",content:mu,extra:[(0,e.jsx)(se.Z,{trigger:["click"],overlay:(0,e.jsxs)(z.Z,{onClick:function(I){var V=I.key;V==="survey"?ze.push("/survey/new"):V==="importJson"?le(!0):V==="exam"?ze.push("/survey/new?mode=exam"):V==="importText"&&Re(!0)},children:[(0,e.jsx)(z.Z.Item,{children:(0,e.jsx)("a",{rel:"noopener noreferrer",href:"#",children:"\u95EE\u5377\u8C03\u67E5"})},"survey"),(0,e.jsx)(z.Z.Item,{children:(0,e.jsx)("a",{rel:"noopener noreferrer",href:"#",children:"\u5728\u7EBF\u8003\u8BD5"})},"exam"),(0,e.jsx)(z.Z.Item,{children:(0,e.jsx)("a",{rel:"noopener noreferrer",href:"#",children:"\u901A\u8FC7\u6587\u672C\u5BFC\u5165"})},"importText"),(0,e.jsx)(z.Z.Item,{children:(0,e.jsx)("a",{rel:"noopener noreferrer",href:"#",children:"\u901A\u8FC7\u6A21\u677F\u5BFC\u5165"})},"importJson")]}),placement:"bottomLeft",children:(0,e.jsx)(P.Z,{type:"primary",icon:(0,e.jsx)(x.Z,{}),size:"large",style:{width:200},children:"\u65B0\u5EFA"},"add")},"add")],children:[(0,e.jsxs)("div",{className:"survey-home",children:[hu(),(0,e.jsx)("div",{className:"pagination-container",children:(0,e.jsx)(k.Z,{size:"small",current:n.current,pageSize:n.pageSize,total:l.total,showTotal:function(I){return"\u5171 ".concat(I," \u6761")},onChange:function(I){t(function(V){return(0,R.Z)((0,R.Z)({},V),{},{current:I})})}})})]}),q&&(0,e.jsx)(Ke,{onCancel:function(){return le(!1)}}),fu&&(0,e.jsx)(du,{onClose:function(){return Re(!1)}})]})}),vu=Pe},6936:function(He,ie,u){"use strict";u.d(ie,{H:function(){return ve},D:function(){return ae}});var ee=u(94657),k=u(67294),oe=u(77613),se=u(71194),De=u(50146),P=u(83279),Ce=u(9778),xe=u(94184),Ee=u.n(xe),Fe=u(74118),m=u(85893),ue=(0,oe.P)(function(x){var f=x.className,B=x.style,r=x.level,d=x.total,h=(0,k.useRef)(null),C=(0,k.useState)(!1),F=(0,ee.Z)(C,2),v=F[0],Z=F[1],y=(0,k.useContext)(S),p=y.options,o=y.updateOption,E=p[r-1];return(0,m.jsxs)("div",{ref:h,style:B,className:Ee()(f,"title",{"has-error":v}),"data-id":"".concat(E.id),children:[(0,m.jsx)("div",{className:"col-item-wrap",children:(0,m.jsx)(Fe.Bn,{value:E.title,style:{padding:7},onChange:function(T){return o(E.id,T)},size:"small",bounds:".column".concat(r)})}),(0,m.jsx)("div",{className:"col-item-limit",children:d})]})}),R=u(11849),Y=u(75414),ce=(0,oe.P)(function(x){var f=x.data,B=x.active,r=x.className,d=x.level,h=f.label,C=f.value,F=(0,k.useContext)(S),v=F.updateItem,Z=F.deleteItem,y=(0,k.useRef)(null),p=(0,Ce.XI)(),o=(0,ee.Z)(p,3),E=o[0],s=o[1],T=o[2];return(0,k.useLayoutEffect)(function(){var M;(M=T.current)===null||M===void 0||M.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})},[]),(0,m.jsxs)("div",(0,R.Z)((0,R.Z)({onClick:function(){v(d,h,C),setTimeout(function(){var $;return($=y.current)===null||$===void 0?void 0:$.focus()},20)},className:Ee()(r,"cell",{"column-item-active":B})},s),{},{children:[(0,m.jsx)("div",{className:"col-item-order",children:(0,m.jsx)(Y.MT,{infer:"DragVertical",className:"drag-handle-option",style:{cursor:"move"}})}),(0,m.jsxs)("div",{className:"col-item-wrap",children:[!B&&h,B&&(0,m.jsx)("input",{value:h,className:"col-item-input",onChange:function($){return v(d,$.target.value,C)}})]}),f.children&&(0,m.jsx)("div",{className:"col-item-limit",children:f.children.length}),(E||B)&&(0,m.jsx)(Y.MT,{infer:"MinusCircle",className:"col-item-del",onClick:function($){$.stopPropagation(),Z(d,C)}})]}))}),de=u(80937),b=(0,de.Pi)(function(x){var f=x.title,B=x.dataSource,r=B===void 0?[]:B,d=x.level,h=x.checked,C=x.active,F=x.hasOption,v=(0,k.useContext)(S),Z=v.addItem,y=v.updateOrder;return(0,m.jsxs)("div",{className:"column",children:[(0,m.jsx)("div",{className:"cascader-title",children:f}),(0,m.jsxs)("div",{className:"cascader-content column-".concat(d),children:[F&&(0,m.jsx)(ue,{level:d,total:r.length,style:{display:r.length>0?"block":"none"}}),(0,m.jsx)(Y.W2,{dragHandleSelector:".drag-handle-option",groupName:"cascader-level".concat(d),behaviour:"contain",lockAxis:"y",disabled:r.length===0,onDrop:function(o){var E=o.addedIndex,s=o.removedIndex;E!==null&&s!==null&&y(d,s,E)},children:r.map(function(p,o){return(0,m.jsx)(Y._l,{children:(0,m.jsx)(ce,{data:p,active:h===p.value,level:d,index:o})},"".concat(p.value))})})]}),C&&(0,m.jsx)("div",{onClick:function(){return Z(d)},className:"cascader-add-item",children:"+\u6DFB\u52A0\u9009\u9879"})]})}),Ze=u(87310),z=u(54531),H=u(71211),te=u(76826),ne=function(f){return{addItem:function(r){for(var d=f.checked,h=f.dataSource,C=h,F=function(y){if(y===r){var p=1;C.length>0&&(p=Math.max.apply(Math,(0,P.Z)(C.map(function(E){return parseInt(E.value,10)})))+1),C.push({label:"\u65B0\u9009\u9879".concat(C.length+1),value:"".concat(p)})}else{var o=C.find(function(E){return E.value===d[y-1]});o.children||(o.children=[]),C=o.children}},v=1;v<=r;v++)F(v)},deleteItem:function(r,d){for(var h=f.checked,C=f.dataSource,F=C,v=function(p){var o=void 0;if(p===r){var E=F.findIndex(function(T){return T.value===d});if(F.splice(E,1),F.length===0){var s;(s=o)===null||s===void 0||delete s.children}}else o=F.find(function(T){return T.value===h[p-1]}),o.children||(o.children=[]),F=o.children},Z=1;Z<=r;Z++)v(Z);h.splice(r-1)},updateItem:function(r,d,h){for(var C=f.checked,F=f.dataSource,v=F,Z=function(o){if(o===r){var E=v.find(function(T){return T.value===h}),s=v.findIndex(function(T){return T.value===h});E&&(E.label=d),v.splice(s,1,E)}else v=v.find(function(T){return T.value===C[o-1]}).children},y=1;y<=r;y++)Z(y);C[r-1]!==h&&(C[r-1]=h,C.splice(r))},updateOrder:function(r,d,h){for(var C=f.checked,F=f.dataSource,v=F,Z=function(o){if(o===r){var E=v[d];v.splice(d,1),v.splice(h,0,E)}else v=v.find(function(s){return s.value===C[o-1]}).children},y=1;y<=r;y++)Z(y)},updateOption:function(r,d){var h=f.options.find(function(C){return C.id===r});h&&(h.title=d)},addOption:function(){f.options.push({id:(0,H.Ox)(),title:"\u8BF7\u9009\u62E9"})}}},S=k.createContext({}),pe=(0,de.Pi)(function(x){var f,B,r,d=x.onCancel,h=x.onOk,C=x.value,F=(0,k.useRef)(null),v=(0,k.useContext)(te.xI),Z=v.getContainer,y=(0,Ce.$1)(ne,{dataSource:(0,z.ZN)(C)||[],checked:[],options:(0,P.Z)(new Array(4)).map(function(Q,he){return x.options.length>he?x.options[he]:{id:(0,H.Ox)(),title:"\u8BF7\u9009\u62E9"}})}),p=(0,ee.Z)(y,2),o=p[0],E=o.dataSource,s=o.checked,T=o.options,M=p[1],$=M.addItem,ge=M.deleteItem,je=M.updateItem,Ae=M.updateOrder,fe=M.addOption,L=M.updateOption,e=s.length>=1&&((f=E.find(function(Q){return Q.value===s[0]}))===null||f===void 0?void 0:f.children)||[],re=s.length>=2&&e&&((B=e.find(function(Q){return Q.value===s[1]}))===null||B===void 0?void 0:B.children)||[],ye=s.length>=3&&re&&((r=re.find(function(Q){return Q.value===s[2]}))===null||r===void 0?void 0:r.children)||[],w=(0,k.useMemo)(function(){return(0,Ze.vC)((0,z.ZN)(E))},[E]);return(0,m.jsx)(S.Provider,{value:{addItem:$,deleteItem:ge,updateItem:je,updateOrder:Ae,updateOption:L,addOption:fe,options:T},children:(0,m.jsx)("div",{ref:F,children:(0,m.jsx)(De.Z,{title:"\u9009\u9879\u7F16\u8F91",getContainer:Z,visible:!0,className:"cascader-modal",onOk:function(){h(E,T.slice(0,w/2))},onCancel:function(){d()},width:800,maskClosable:!1,children:(0,m.jsxs)("div",{className:"content",children:[(0,m.jsx)(b,{level:1,checked:s[0],dataSource:E,title:"\u4E00\u7EA7\u9009\u9879",active:s.length>=0,hasOption:w>=2}),(0,m.jsx)(b,{level:2,checked:s[1],dataSource:e,title:"\u4E8C\u7EA7\u9009\u9879",active:s.length>=1,hasOption:w>=4}),(0,m.jsx)(b,{level:3,checked:s[2],dataSource:re,title:"\u4E09\u7EA7\u9009\u9879",active:s.length>=2,hasOption:w>=6}),(0,m.jsx)(b,{level:4,checked:s[3],dataSource:ye,title:"\u56DB\u7EA7\u9009\u9879",active:s.length>=3,hasOption:w>=8})]})})})})});function ae(x){return x.split(/\t|\s+|\//).filter(function(f){return f.trim()!==""}).map(function(f){return{title:f}})}function ve(x){var f=x.reduce(function(B,r){return r.split(/\t|\s+|\//).reduce(function(d,h,C,F){d.value=(0,H.Ox)();var v=F.slice(0,C+1).join("."),Z=(d.children=d.children||[]).find(function(y){return y.label===v});return Z||d.children.push(Z={label:v,value:(0,H.Ox)()}),Z},B),B},{children:[]}).children;return JSON.parse(JSON.stringify(f,function(B,r){return B==="label"?r.split(".").slice(-1)[0]:r}))}function Be(){var x=(0,k.useState)(!1),f=(0,ee.Z)(x,2),B=f[0],r=f[1],d=(0,de.cI)(),h=(0,k.useContext)(te.xI),C=h.operation,F=(0,k.useContext)(te.Gb),v=F.node,Z=F.getContainer,y=d.query("dataSource").get("value");return(0,m.jsxs)("div",{style:{paddingLeft:20,marginTop:10},children:[(0,m.jsxs)("a",{onClick:function(){r(!0)},children:[(0,m.jsx)(Y.MT,{infer:"Plus"}),"\u9009\u9879\u7F16\u8F91"]}),(0,m.jsx)(Y.E4,{getContainer:Z,onConfirm:function(o){var E=ae(o[0]),s=ve(o.slice(1));d.query("dataSource").take(function(T){return T.value=s}),C.batchReplaceNode(E,v)}}),B&&(0,m.jsx)(pe,{onCancel:function(){return r(!1)},value:y,options:v.children.map(function(p){return{id:p.id,title:p.title}}),onOk:function(o,E){d.query("dataSource").take(function(s){return s.value=o}),C.batchReplaceNode(E,v),r(!1)}})]})}(0,te.j1)("Cascader",(0,oe.P)(Be))}}]);