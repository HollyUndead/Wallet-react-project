"use strict";(self.webpackChunkwallet_react_project=self.webpackChunkwallet_react_project||[]).push([[357],{9357:function(n,t,e){e.r(t),e.d(t,{default:function(){return jn}});var i,r,o,l,a,d,c,s,x,f,p,h,g,u,m,y,b,Z,j,w,C,P,v,k,z,S,F,I=e(168),D=e(2791),N=e(9434),A=e(4805),E=e(2526),M=e(5130),O=e(4313),_=e(184),K=function(n){var t=n.id,e=(0,N.I0)();return(0,_.jsx)(q,{onClick:function(){e((0,E.Ks)(t)),e((0,M.ml)(t))},children:"Delete"})},q=O.ZP.button(i||(i=(0,I.Z)(["\n  border: 1px solid #24cca7;\n  background-color: #24cca7;\n  border-radius: 18px;\n  color: #ffffff;\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 21px;\n  text-align: center;\n  width: 67px;\n  height: 26px;\n  &:hover {\n    background-color: #ff6596;\n    border: 1px solid #ff6596;\n  }\n"]))),B=e(9126),J=function(n){var t=(0,A.useMediaQuery)({query:"(max-width: 767px)"}),e=(0,N.I0)();return(0,_.jsxs)(L,{onClick:function(){e((0,M.$J)()),e((0,M.KL)("edit")),e((0,M.iW)(n.id))},children:[(0,_.jsx)(Q,{}),t&&"Edit"]})},L=O.ZP.span(r||(r=(0,I.Z)(["\n  cursor: pointer;\n  margin-right: 8px;\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 21px;\n  text-align: center;\n  letter-spacing: 0.02em;\n"]))),Q=(0,O.ZP)(B.bBN)(o||(o=(0,I.Z)(["\n  verticalalign: 'middle';\n  &:hover {\n    fill: #ff6596;\n  }\n"]))),T=function(n){var t=n.slice(8,10),e=n.slice(5,7),i=n.slice(2,4);return"".concat(t,".").concat(e,".").concat(i)},W=function(n){var t=n.transaction,e=n.categories,i=n.last,r=t.transactionDate,o=t.type,l=t.categoryId,a=t.comment,d=t.amount,c=t.id,s="INCOME"===o?"+":"-",x=e.length&&e.find((function(n){return n.id===l})).name;return(0,_.jsxs)($,{last:i,children:[(0,_.jsx)(G,{children:T(r)}),(0,_.jsx)(H,{children:s}),(0,_.jsx)(R,{children:x}),(0,_.jsx)(U,{children:a}),(0,_.jsx)(V,{typeStr:s,children:Number(String(d).replace("-","")).toFixed(2)}),(0,_.jsxs)(X,{children:[(0,_.jsx)(J,{id:c}),(0,_.jsx)(K,{id:c})]})]})},$=O.ZP.tr(l||(l=(0,I.Z)(["\n  border-bottom: ",";\n  height: 54px;\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n"])),(function(n){return n.last?"0px":"1px solid #dcdcdf"})),G=O.ZP.td(a||(a=(0,I.Z)(["\n  text-align: left;\n  padding-left: 25px;\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n"]))),H=O.ZP.td(d||(d=(0,I.Z)(["\n  text-align: center;\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n"]))),R=O.ZP.td(c||(c=(0,I.Z)(["\n  text-align: left;\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n"]))),U=O.ZP.td(s||(s=(0,I.Z)(["\n  text-align: left;\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n"]))),V=O.ZP.td(x||(x=(0,I.Z)(["\n  color: ",";\n  text-align: right;\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 24px;\n"])),(function(n){return"+"===n.typeStr?"#24CCA7":"#FF6596"})),X=O.ZP.td(f||(f=(0,I.Z)(["\n  text-align: right;\n  padding-right: 20px;\n"]))),Y=function(n){var t=n.transaction,e=n.categories,i=t.transactionDate,r=t.type,o=t.categoryId,l=t.comment,a=t.amount,d=t.id,c="INCOME"===r?"+":"-",s=e.length&&e.find((function(n){return n.id===o})).name;return(0,_.jsxs)(nn,{className:"aasas",children:[(0,_.jsxs)(tn,{typeStr:c,children:[(0,_.jsx)(on,{children:"Date"}),(0,_.jsx)("span",{children:T(i)})]}),(0,_.jsxs)(en,{typeStr:c,children:[(0,_.jsx)(on,{children:"Type"}),(0,_.jsx)("span",{children:c})]}),(0,_.jsxs)(en,{typeStr:c,children:[(0,_.jsx)(on,{children:"Category"}),(0,_.jsx)("span",{children:s})]}),(0,_.jsxs)(en,{typeStr:c,children:[(0,_.jsx)(on,{children:" Comment"}),(0,_.jsx)("span",{children:l})]}),(0,_.jsxs)(en,{typeStr:c,children:[(0,_.jsx)(on,{children:"Sum"}),(0,_.jsx)("span",{children:a})]}),(0,_.jsxs)(rn,{typeStr:c,children:[(0,_.jsx)(J,{id:d}),(0,_.jsx)(K,{id:d})]})]})},nn=O.ZP.ul(p||(p=(0,I.Z)(["\n  wdith: 100%;\n  margin-bottom: 20px;\n"]))),tn=O.ZP.li(h||(h=(0,I.Z)(["\n  height: 48px;\n  background-color: #ffffff;\n  padding-left: 20px;\n  padding-right: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-left: 5px solid\n    ",";\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  border-bottom: 1px solid #dcdcdf;\n"])),(function(n){return"+"===n.typeStr?"#24CCA7":"#FF6596"})),en=O.ZP.li(g||(g=(0,I.Z)(["\n  height: 48px;\n  background-color: #ffffff;\n  padding-left: 20px;\n  padding-right: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-left: 5px solid\n    ",";\n  border-bottom: 1px solid #dcdcdf;\n"])),(function(n){return"+"===n.typeStr?"#24CCA7":"#FF6596"})),rn=O.ZP.li(u||(u=(0,I.Z)(["\n  height: 48px;\n  background-color: #ffffff;\n  padding-left: 20px;\n  padding-right: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-left: 5px solid\n    ",";\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n"])),(function(n){return"+"===n.typeStr?"#24CCA7":"#FF6596"})),on=O.ZP.span(m||(m=(0,I.Z)(["\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 27px;\n"]))),ln=e(6600),an=e(8820),dn=e(8735),cn=(0,O.ZP)(an.OzW)(y||(y=(0,I.Z)(["\n  width: 44px;\n  height: 44px;\n  fill: #24cca7;\n  &:hover {\n    fill: #4a56e2;\n  }\n  &:active {\n    fill: #4a56e2;\n  }\n"]))),sn=O.ZP.div(b||(b=(0,I.Z)(["\n  padding-top: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  @media screen and (min-width: 768px) {\n    padding-top: 20px;\n  }\n  @media screen and (min-width: 1200px) {\n    padding-top: 46px;\n  }\n"]))),xn=O.ZP.table(Z||(Z=(0,I.Z)(["\n  border-collapse: collapse;\n  width: 100%;\n  @media screen and (min-width: 768px) {\n    margin-rigth: 32px;\n  }\n"]))),fn=O.ZP.thead(j||(j=(0,I.Z)(["\n  display: table;\n  width: calc(100% - 1px);\n  table-layout: fixed;\n  border: 0px;\n  height: 58px;\n  background-color: #ffffff;\n  border-radius: 30px;\n"]))),pn=O.ZP.tbody(w||(w=(0,I.Z)(["\n  display: block;\n  width: 100%;\n  min-height: 200px;\n  table-layout: table;\n  overflow: auto;\n  height: calc(100vh - 200px);\n  @media screen and (min-width: 768px) {\n    height: calc(100vh - 370px);\n  }\n"]))),hn=O.ZP.th(C||(C=(0,I.Z)(["\n  border: 0px solid;\n  padding-left: 25px;\n  text-align: left;\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 27px;\n"]))),gn=O.ZP.th(P||(P=(0,I.Z)(["\n  text-align: center;\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 27px;\n"]))),un=O.ZP.th(v||(v=(0,I.Z)(["\n  text-align: left;\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 27px;\n"]))),mn=O.ZP.th(k||(k=(0,I.Z)(["\n  text-align: right;\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 27px;\n"]))),yn=O.ZP.th(z||(z=(0,I.Z)(["\n  border: 0px solid;\n  padding-right: 20px;\n  text-align: right;\n  color: transparent;\n"]))),bn=O.ZP.div(S||(S=(0,I.Z)(["\n  box-sizing: border-box;\n  cursor: pointer;\n  background-color: white;\n  border-radius: 50%;\n  width: 44px;\n  height: 44px;\n  position: absolute;\n  right: 40px;\n  bottom: 40px;\n  padding: 0;\n  border: 0;\n  @media screen and (max-width: 767px) {\n    position: sticky;\n    left: calc(100vh - 40px);\n  }\n  &:active {\n    outline: 3px solid black;\n  }\n"]))),Zn=O.ZP.ul(F||(F=(0,I.Z)(["\n  width: 280px;\n  margin-top: 32px;\n"]))),jn=function(){var n=(0,N.I0)();(0,D.useEffect)((function(){n((0,E.mC)()),n((0,E.fG)())}),[]);var t=(0,N.v9)(ln.ig),e=(0,N.v9)(ln.CO),i=(0,A.useMediaQuery)({query:"(max-width: 767px)"});return(0,_.jsxs)(sn,{children:[i&&(0,_.jsx)(dn.y,{}),!i&&(0,_.jsxs)(xn,{children:[(0,_.jsx)(fn,{children:(0,_.jsxs)("tr",{children:[(0,_.jsx)(hn,{children:"Date"}),(0,_.jsx)(gn,{children:"Type"}),(0,_.jsx)(un,{children:"Category"}),(0,_.jsx)(un,{children:"Comments"}),(0,_.jsx)(mn,{children:"Sum"}),(0,_.jsx)(yn,{children:"Buttons"})]})}),(0,_.jsx)(pn,{children:t.map((function(n,i){return(0,_.jsx)(W,{transaction:n,categories:e,last:i===t.length-1},n.id)}))})]}),i&&(0,_.jsx)(Zn,{children:t.map((function(n){return(0,_.jsx)(Y,{transaction:n,categories:e},n.id)}))}),(0,_.jsx)(bn,{children:(0,_.jsx)(cn,{onClick:function(){n((0,M.$J)()),n((0,M.KL)("add"))}})})]})}}}]);
//# sourceMappingURL=357.d3d3943d.chunk.js.map