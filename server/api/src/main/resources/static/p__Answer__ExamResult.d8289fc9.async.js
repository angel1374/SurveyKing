(self.webpackChunksurvey_king=self.webpackChunksurvey_king||[]).push([[1843],{64752:function(){},31930:function(){},43657:function(H,R,e){"use strict";e.r(R),e.d(R,{ExamResult:function(){return me},default:function(){return ge}});var f={};e.r(f),e.d(f,{Number0:function(){return j},Number1:function(){return G},Number2:function(){return K},Number3:function(){return ne},Number4:function(){return m},Number5:function(){return re},Number6:function(){return ce},Number7:function(){return ae},Number8:function(){return $},Number9:function(){return Y},NumberDot:function(){return Z},ScoreUnderline:function(){return A}});var d=e(9761),i=e(67294),C=e(51615),O=e(39428),o=e(3182),P=e(69610),z=e(54941),x=e(3980),b=e(54531),w=function(){function u(r){(0,P.Z)(this,u),this.id=void 0,this.answerId=void 0,this.examResult=void 0,this.id=r.id,this.answerId=r.answerId,this.makeObservable(),this.loadExamResult()}return(0,z.Z)(u,[{key:"makeObservable",value:function(){(0,b.Ou)(this,{id:b.LO.ref,answerId:b.LO.ref,examResult:b.LO.ref,loadExamResult:b.aD})}},{key:"loadExamResult",value:function(){var r=(0,o.Z)((0,O.Z)().mark(function v(){var T;return(0,O.Z)().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,x.hi.loadExamResult({id:this.id,answerId:this.answerId});case 2:T=I.sent,T.success&&(this.examResult=T.data);case 4:case"end":return I.stop()}},v,this)}));function c(){return r.apply(this,arguments)}return c}()}]),u}(),y=e(20136),h=e(55241),a=e(49111),n=e(19650),g=e(57663),N=e(71577),U=e(34792),J=e(48086),ie=e(94657),_=e(28991),W={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h360c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H184V184h656v320c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32zM653.3 599.4l52.2-52.2a8.01 8.01 0 00-4.7-13.6l-179.4-21c-5.1-.6-9.5 3.7-8.9 8.9l21 179.4c.8 6.6 8.9 9.4 13.6 4.7l52.4-52.4 256.2 256.2c3.1 3.1 8.2 3.1 11.3 0l42.4-42.4c3.1-3.1 3.1-8.2 0-11.3L653.3 599.4z"}}]},name:"select",theme:"outlined"},xe=W,E=e(27029),s=function(r,c){return i.createElement(E.Z,(0,_.Z)((0,_.Z)({},r),{},{ref:c,icon:xe}))};s.displayName="SelectOutlined";var S=i.forwardRef(s),l=e(23538),p=e(92592),q=e(74855),B=i.createContext({});function F(){return(0,i.useContext)(B)}var t=e(85893),se=(0,d.Pi)(function(){var u=F(),r=u.examResult,c=(0,i.useState)(""),v=(0,ie.Z)(c,2),T=v[0],V=v[1];(0,i.useEffect)(function(){function M(){return L.apply(this,arguments)}function L(){return L=(0,o.Z)((0,O.Z)().mark(function ve(){return(0,O.Z)().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:p.toDataURL(window.location.href,{errorCorrectionLevel:"H",type:"image/jpeg",quality:.3,margin:1}).then(function(oe){V(oe)}).catch(function(oe){console.error(oe)});case 1:case"end":return X.stop()}},ve)})),L.apply(this,arguments)}M()},[]);var I=function(){var M=(0,o.Z)((0,O.Z)().mark(function L(ve){return(0,O.Z)().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:p.toDataURL(window.location.href,{errorCorrectionLevel:"H",margin:1,width:ve}).then(function(oe){V(oe);var fe=document.createElement("a");fe.href=oe,fe.setAttribute("download","".concat(r==null?void 0:r.name,"_").concat(ve,".png")),document.body.appendChild(fe),fe.click(),document.body.removeChild(fe)});case 1:case"end":return X.stop()}},L)}));return function(ve){return M.apply(this,arguments)}}(),he=function(){if(r!=null&&r.schema){var L;return(0,t.jsxs)("span",{className:"total-score",children:["\u603B\u5206",(L=r.schema.attribute)===null||L===void 0?void 0:L.examScore,"\u5206"]})}return(0,t.jsx)(t.Fragment,{})};return(0,t.jsxs)("div",{className:"exam-result-header",children:[(0,t.jsxs)("div",{className:"header-content",children:[(0,t.jsx)(q.CopyToClipboard,{text:"".concat(window.location.href),onCopy:function(){return J.default.success("\u590D\u5236\u6210\u529F")},children:(0,t.jsx)(N.Z,{icon:(0,t.jsx)(S,{}),children:"\u5206\u4EAB\u7ED9\u597D\u53CB"})}),(0,t.jsx)(h.Z,{overlayInnerStyle:{border:"1px solid rgb(225, 231, 242)",borderRadius:3,boxShadow:"rgb(224 229 236 / 40%) 0px 3px 8px 0px"},content:(0,t.jsxs)("div",{children:[(0,t.jsx)("img",{src:T,height:100,width:100}),(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsxs)(n.Z,{children:[(0,t.jsx)("a",{onClick:function(){return I(256)},children:"\u5C0F\u53F7"}),(0,t.jsx)("a",{onClick:function(){return I(512)},children:"\u4E2D\u53F7"}),(0,t.jsx)("a",{onClick:function(){return I(1024)},children:"\u5927\u53F7"})]})})]}),children:(0,t.jsx)(N.Z,{icon:(0,t.jsx)(l.Z,{}),type:"text"})})]}),(0,t.jsxs)("div",{className:"title",children:[r==null?void 0:r.name,he()]})]})}),ee=e(66456),D=e(53831),k=e(18111),te=e(27484),ue=e.n(te),j=(0,t.jsx)("svg",{viewBox:"0 0 1024 1024","p-id":"1361","data-spm-anchor-id":"a313x.7781069.0.i5",width:"512",height:"512",children:(0,t.jsx)("path",{d:"M383.07989 126.788545l396.245994 67.928045 1.415284 701.919397-533.517367-66.51276 135.856089-703.334682z m512.288105 834.944918l-1.415284-815.13094-48.114067-56.605771L347.703381 5.085297 282.605904 51.78408 122.689985 868.335898l48.119661 67.928045 659.460873 82.075292 65.097476-56.605772z","p-id":"1362","data-spm-anchor-id":"a313x.7781069.0.i6"})}),G=(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",version:"1.1",width:"512",height:"512",children:(0,t.jsx)("path",{d:"M721.875514 50.613231L635.921319 3.610078 300.167797 252.066458l65.809987 87.297142 237.712802-178.623125L541.909442 1012.213591l107.44135 8.057683L721.875514 50.613231z","p-id":"1206"})}),K=(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",version:"1.1",width:"512",height:"512",children:(0,t.jsx)("path",{d:"M897.62003 940.716242l-11.754723-104.450063-552.277836 61.364204 485.693625-547.052281-5.225554-75.726157-319.873811-267.6571L431.508365 3.278453 120.770953 216.094971 179.527927 302.266689l278.097114-189.312619 248.064046 207.590964L163.856812 928.967066l43.085859 87.475333 690.677359-75.726157z","p-id":"1518"})}),ne=(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",width:"512",height:"512",children:(0,t.jsx)("path",{d:"M737.423214 989.936662l187.89454-346.261526-33.553787-79.180716-340.891365-84.55643 381.153688-295.258882-26.839698-96.629574L290.505882 2.154728l-14.761001 107.369896 488.523583 68.445948-367.736616 285.862489 20.131162 95.291198 379.815312 93.947271-134.209592 249.626398-550.260996-118.104663-24.157393 104.687592 590.523317 127.495503 59.049556-26.839698z","p-id":"1676"})}),m=(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",width:"512",height:"512",children:(0,t.jsx)("path",{d:"M966.522808 751.55574l-4.036306-108.963429-219.262936 5.383613 44.388142-521.92977-108.957815-9.414305-44.393755 534.033075-447.940178 9.419919L429.79512 41.300564 328.909918 2.290421 54.491615 695.058679l52.460754 73.983979 517.893463-10.761612-21.523224 254.236772 107.616122 8.072612 22.864917-263.656691 232.719161-5.377999z","p-id":"1832"})}),re=(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",version:"1.1",width:"512",height:"512",children:(0,t.jsx)("path",{d:"M784.968235 982.615128l170.861419-435.28703-43.393376-74.585138-538.346299-56.953806 56.953806-301.041546h474.615051V6.269714H384.938323l-54.24172 44.746646-74.579592 402.741998 47.458732 65.090064 524.785868 55.600536-128.821312 325.444774-614.284706-135.6043L60.846819 871.419602l661.743438 145.093828 62.377978-33.898302z","p-id":"1988"})}),ce=(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",width:"512",height:"512",children:(0,t.jsx)("path",{d:"M672.288828 1004.206903l275.275297-318.669393-20.336395-86.788192-424.444619-180.357063-42.033443 101.704559 353.922156 150.524329-199.338452 233.236208-413.593272-151.87369L576.009942 53.618752 479.731056 2.088969 74.273472 757.403689l31.187742 75.94249 508.517151 185.777092 58.310463-14.916368z","p-id":"2146"})}),ae=(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",width:"512",height:"512",children:(0,t.jsx)("path",{d:"M885.422422 150.609477l-47.387874-83.290486L141.556268 8.440271 130.065421 123.326396l616.05911 54.566161-363.316338 789.818369 104.830936 47.39346 397.783293-864.494909z","p-id":"2302"})}),$=(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",version:"1.1",width:"512",height:"512",children:(0,t.jsx)("path",{d:"M590.001388 117.347799l121.780542 133.82422-175.307999 157.905999-219.468152-171.287864 272.995609-120.442355z m-49.512898 432.245371l263.628304 204.748101-220.806338 151.215067-343.91949-85.643932 301.097524-270.319236z m84.305746 459.0091l301.097524-204.748101 2.676373-89.658491-305.112084-236.864576 200.733542-180.660744 2.676372-77.614814L643.528846 16.983816l-62.894763-13.381864-390.761591 171.287864-12.043678 91.002253 275.677557 216.791779L90.846695 807.868728l24.087356 92.334865 465.700032 115.089609 44.160153-6.690932z","p-id":"2458"})}),Y=(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",width:"512",height:"512",children:(0,t.jsx)("path",{d:"M908.989292 186.728233l-39.335692-75.962037L392.18431 6.317002l-55.614067 23.06289L108.684132 344.076574l20.34797 81.386304 377.089689 180.405657 47.480454-99.019353-317.411602-150.563826L404.393092 121.61473l375.735016 81.391879-345.893185 769.103081 100.374026 44.765533L908.989292 186.728233z","p-id":"2614"})}),Z=(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",width:"12",height:"12",children:(0,t.jsx)("path",{d:"M653.3 515.4c0 38.7-14 72-42.1 99.9s-61.4 41.9-100 41.9c-38.3 0-71.1-13.9-98.6-41.6-27.5-27.8-41.3-61.1-41.3-100.2 0-38.7 13.6-71.9 40.7-99.6s60.2-41.6 99.2-41.6c39.7 0 73.3 14 100.8 41.9 27.5 27.8 41.3 61 41.3 99.3z","p-id":"7081"})}),A=(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",version:"1.1",width:"512",height:"512",children:(0,t.jsx)("path",{d:"M281.6 435.2c38.4-8.533333 247.466667-59.733333 520.533333-76.8 46.933333-4.266667 55.466667-29.866667 29.866667-38.4-21.333333-8.533333-192-29.866667-563.2 55.466667-42.666667 8.533333-64 21.333333-81.066667 42.666666-8.533333 8.533333-8.533333 25.6 0 34.133334 12.8 17.066667 64-12.8 93.866667-17.066667z m550.4 38.4c-64 4.266667-392.533333 17.066667-721.066667 136.533333-59.733333 21.333333-93.866667 42.666667-93.866666 76.8 0 12.8 4.266667 4.266667 17.066666 21.333334 42.666667 42.666667 170.666667-145.066667 887.466667-196.266667 0 0 76.8 0 76.8-21.333333 4.266667-25.6-93.866667-21.333333-166.4-17.066667z","p-id":"1873"})}),le=(0,d.Pi)(function(){var u,r=F(),c=r.examResult;if(!c||!c.examScore)return(0,t.jsx)(t.Fragment,{});var v=(u=c.metaInfo)===null||u===void 0?void 0:u.answerInfo,T=function(){return c.examScore===void 0?(0,t.jsx)(t.Fragment,{}):(0,t.jsx)("div",{className:"score",children:"".concat(c.examScore).split("").map(function(M){return M!=="."?i.cloneElement(f["Number"+M],{key:M,height:32,width:24,fill:"currentColor",focusable:"false","aria-hidden":"true"}):i.cloneElement(Z,{key:M,height:12,width:12,fill:"currentColor",focusable:"false","aria-hidden":"true"})}).concat([i.cloneElement(A,{key:"underline",height:24,width:48,className:"score-underline",fill:"currentColor",focusable:"false","aria-hidden":"true"})])})},V=[{title:"\u5F53\u524D\u6392\u540D",dataIndex:"rank",align:"center"},{title:"\u7B54\u9898\u65F6\u957F",dataIndex:"duration",align:"center"},{title:"\u63D0\u4EA4\u65F6\u95F4",dataIndex:"submitTime",align:"center"}],I=[{key:"1",rank:c.rank,duration:(0,k.gh)(((v==null?void 0:v.endTime)||0)-((v==null?void 0:v.startTime)||0)),submitTime:ue()(v==null?void 0:v.endTime).format("YYYY.MM.DD HH:mm")}];return c.rank===void 0&&V.splice(0,1),(0,t.jsxs)("div",{className:"exam-result-mine",children:[T(),(0,t.jsx)(D.Z,{className:"result-info",bordered:!0,size:"small",rowKey:"key",pagination:!1,columns:V,dataSource:I})]})}),Q=e(68068),de=(0,d.Pi)(function(){var u,r=F(),c=r.examResult,v=(0,x.dD)();return!c||!c.schema?(0,t.jsx)(t.Fragment,{}):(0,t.jsx)("div",{children:(0,t.jsx)(Q.Z,{schema:c.schema,initialValues:c.answer,readOnly:!0,theme:v?"antdMobile":"antd",headerVisible:!1,footerVisible:!1,paginationVisible:!1,questionNumber:!1,correctAnswerVisible:!0,examScoreVisible:!0,mode:"exam",questionScore:(u=c.examInfo)===null||u===void 0?void 0:u.questionScore})})}),me=(0,d.Pi)(function(u){var r=(0,C.UO)(),c=r.id,v=r.answerId,T=(0,i.useMemo)(function(){return new w({id:c,answerId:v})},[]);return(0,t.jsx)(B.Provider,{value:T,children:(0,t.jsxs)("div",{className:"exam-result",children:[(0,t.jsx)(se,{}),(0,t.jsx)(le,{}),(0,t.jsx)(de,{})]})})}),ge=me},81643:function(H,R,e){"use strict";e.d(R,{Z:function(){return f}});var f=function(i){if(!i)return null;var C=typeof i=="function";return C?i():i}},9676:function(H,R,e){"use strict";e.d(R,{Z:function(){return xe}});var f=e(96156),d=e(22122),i=e(94184),C=e.n(i),O=e(45947),o=e(67294),P=e(53124),z=e(65223),x=e(85061),b=e(28481),w=e(98423),y=function(E,s){var S={};for(var l in E)Object.prototype.hasOwnProperty.call(E,l)&&s.indexOf(l)<0&&(S[l]=E[l]);if(E!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,l=Object.getOwnPropertySymbols(E);p<l.length;p++)s.indexOf(l[p])<0&&Object.prototype.propertyIsEnumerable.call(E,l[p])&&(S[l[p]]=E[l[p]]);return S},h=o.createContext(null),a=function(s,S){var l=s.defaultValue,p=s.children,q=s.options,B=q===void 0?[]:q,F=s.prefixCls,t=s.className,se=s.style,ee=s.onChange,D=y(s,["defaultValue","children","options","prefixCls","className","style","onChange"]),k=o.useContext(P.E_),te=k.getPrefixCls,ue=k.direction,j=o.useState(D.value||l||[]),G=(0,b.Z)(j,2),K=G[0],ne=G[1],m=o.useState([]),re=(0,b.Z)(m,2),ce=re[0],ae=re[1];o.useEffect(function(){"value"in D&&ne(D.value||[])},[D.value]);var $=function(){return B.map(function(r){return typeof r=="string"||typeof r=="number"?{label:r,value:r}:r})},Y=function(r){ae(function(c){return c.filter(function(v){return v!==r})})},Z=function(r){ae(function(c){return[].concat((0,x.Z)(c),[r])})},A=function(r){var c=K.indexOf(r.value),v=(0,x.Z)(K);c===-1?v.push(r.value):v.splice(c,1),"value"in D||ne(v);var T=$();ee==null||ee(v.filter(function(V){return ce.indexOf(V)!==-1}).sort(function(V,I){var he=T.findIndex(function(L){return L.value===V}),M=T.findIndex(function(L){return L.value===I});return he-M}))},le=te("checkbox",F),Q="".concat(le,"-group"),de=(0,w.Z)(D,["value","disabled"]);B&&B.length>0&&(p=$().map(function(u){return o.createElement(_,{prefixCls:le,key:u.value.toString(),disabled:"disabled"in u?u.disabled:D.disabled,value:u.value,checked:K.indexOf(u.value)!==-1,onChange:u.onChange,className:"".concat(Q,"-item"),style:u.style},u.label)}));var me={toggleOption:A,value:K,disabled:D.disabled,name:D.name,registerValue:Z,cancelValue:Y},ge=C()(Q,(0,f.Z)({},"".concat(Q,"-rtl"),ue==="rtl"),t);return o.createElement("div",(0,d.Z)({className:ge,style:se},de,{ref:S}),o.createElement(h.Provider,{value:me},p))},n=o.forwardRef(a),g=o.memo(n),N=e(98866),U=function(E,s){var S={};for(var l in E)Object.prototype.hasOwnProperty.call(E,l)&&s.indexOf(l)<0&&(S[l]=E[l]);if(E!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,l=Object.getOwnPropertySymbols(E);p<l.length;p++)s.indexOf(l[p])<0&&Object.prototype.propertyIsEnumerable.call(E,l[p])&&(S[l[p]]=E[l[p]]);return S},J=function(s,S){var l,p=s.prefixCls,q=s.className,B=s.children,F=s.indeterminate,t=F===void 0?!1:F,se=s.style,ee=s.onMouseEnter,D=s.onMouseLeave,k=s.skipGroup,te=k===void 0?!1:k,ue=s.disabled,j=U(s,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),G=o.useContext(P.E_),K=G.getPrefixCls,ne=G.direction,m=o.useContext(h),re=(0,o.useContext)(z.aM),ce=re.isFormItemInput,ae=(0,o.useContext)(N.Z),$=ue||(m==null?void 0:m.disabled)||ae,Y=o.useRef(j.value);o.useEffect(function(){m==null||m.registerValue(j.value)},[]),o.useEffect(function(){if(!te)return j.value!==Y.current&&(m==null||m.cancelValue(Y.current),m==null||m.registerValue(j.value),Y.current=j.value),function(){return m==null?void 0:m.cancelValue(j.value)}},[j.value]);var Z=K("checkbox",p),A=(0,d.Z)({},j);m&&!te&&(A.onChange=function(){j.onChange&&j.onChange.apply(j,arguments),m.toggleOption&&m.toggleOption({label:B,value:j.value})},A.name=m.name,A.checked=m.value.indexOf(j.value)!==-1);var le=C()((l={},(0,f.Z)(l,"".concat(Z,"-wrapper"),!0),(0,f.Z)(l,"".concat(Z,"-rtl"),ne==="rtl"),(0,f.Z)(l,"".concat(Z,"-wrapper-checked"),A.checked),(0,f.Z)(l,"".concat(Z,"-wrapper-disabled"),$),(0,f.Z)(l,"".concat(Z,"-wrapper-in-form-item"),ce),l),q),Q=C()((0,f.Z)({},"".concat(Z,"-indeterminate"),t)),de=t?"mixed":void 0;return o.createElement("label",{className:le,style:se,onMouseEnter:ee,onMouseLeave:D},o.createElement(O.Z,(0,d.Z)({"aria-checked":de},A,{prefixCls:Z,className:Q,disabled:$,ref:S})),B!==void 0&&o.createElement("span",null,B))},ie=o.forwardRef(J),_=ie,W=_;W.Group=g,W.__ANT_CHECKBOX=!0;var xe=W},63185:function(H,R,e){"use strict";var f=e(38663),d=e.n(f),i=e(64752),C=e.n(i)},55241:function(H,R,e){"use strict";var f=e(22122),d=e(67294),i=e(53124),C=e(94199),O=e(81643),o=e(33603),P=function(x,b){var w={};for(var y in x)Object.prototype.hasOwnProperty.call(x,y)&&b.indexOf(y)<0&&(w[y]=x[y]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,y=Object.getOwnPropertySymbols(x);h<y.length;h++)b.indexOf(y[h])<0&&Object.prototype.propertyIsEnumerable.call(x,y[h])&&(w[y[h]]=x[y[h]]);return w},z=d.forwardRef(function(x,b){var w=x.prefixCls,y=x.title,h=x.content,a=x._overlay,n=P(x,["prefixCls","title","content","_overlay"]),g=d.useContext(i.E_),N=g.getPrefixCls,U=function(W){if(!(!y&&!h))return d.createElement(d.Fragment,null,y&&d.createElement("div",{className:"".concat(W,"-title")},(0,O.Z)(y)),d.createElement("div",{className:"".concat(W,"-inner-content")},(0,O.Z)(h)))},J=N("popover",w),ie=N();return d.createElement(C.Z,(0,f.Z)({},n,{prefixCls:J,ref:b,overlay:a||U(J),transitionName:(0,o.mL)(ie,"zoom-big",n.transitionName)}))});z.defaultProps={placement:"top",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}},R.Z=z},20136:function(H,R,e){"use strict";var f=e(38663),d=e.n(f),i=e(31930),C=e.n(i)},84164:function(H,R,e){"use strict";e.d(R,{Z:function(){return i}});var f=e(90484),d=e(67294);function i(C,O,o){var P=d.useRef({});function z(x){if(!P.current||P.current.data!==C||P.current.childrenColumnName!==O||P.current.getRowKey!==o){let w=function(y){y.forEach(function(h,a){var n=o(h,a);b.set(n,h),h&&(0,f.Z)(h)==="object"&&O in h&&w(h[O]||[])})};var b=new Map;w(C),P.current={data:C,childrenColumnName:O,kvMap:b,getRowKey:o}}return P.current.kvMap.get(x)}return[z]}},27678:function(H,R,e){"use strict";e.d(R,{g1:function(){return w},os:function(){return h}});var f=/margin|padding|width|height|max|min|offset/,d={left:!0,top:!0},i={cssFloat:1,styleFloat:1,float:1};function C(a){return a.nodeType===1?a.ownerDocument.defaultView.getComputedStyle(a,null):{}}function O(a,n,g){if(n=n.toLowerCase(),g==="auto"){if(n==="height")return a.offsetHeight;if(n==="width")return a.offsetWidth}return n in d||(d[n]=f.test(n)),d[n]?parseFloat(g)||0:g}function o(a,n){var g=arguments.length,N=C(a);return n=i[n]?"cssFloat"in a.style?"cssFloat":"styleFloat":n,g===1?N:O(a,n,N[n]||a.style[n])}function P(a,n,g){var N=arguments.length;if(n=i[n]?"cssFloat"in a.style?"cssFloat":"styleFloat":n,N===3)return typeof g=="number"&&f.test(n)&&(g="".concat(g,"px")),a.style[n]=g,g;for(var U in n)n.hasOwnProperty(U)&&P(a,U,n[U]);return C(a)}function z(a){return a===document.body?document.documentElement.clientWidth:a.offsetWidth}function x(a){return a===document.body?window.innerHeight||document.documentElement.clientHeight:a.offsetHeight}function b(){var a=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth),n=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);return{width:a,height:n}}function w(){var a=document.documentElement.clientWidth,n=window.innerHeight||document.documentElement.clientHeight;return{width:a,height:n}}function y(){return{scrollLeft:Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),scrollTop:Math.max(document.documentElement.scrollTop,document.body.scrollTop)}}function h(a){var n=a.getBoundingClientRect(),g=document.documentElement;return{left:n.left+(window.pageXOffset||g.scrollLeft)-(g.clientLeft||document.body.clientLeft||0),top:n.top+(window.pageYOffset||g.scrollTop)-(g.clientTop||document.body.clientTop||0)}}}}]);