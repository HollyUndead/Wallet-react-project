"use strict";(self.webpackChunkwallet_react_project=self.webpackChunkwallet_react_project||[]).push([[357],{9357:function(n,t,e){e.r(t),e.d(t,{default:function(){return jn}});var i,r,o,l,a,d,c,s,f,x,p,h,g,u,m,y,j,Z,b,w,C,P,v,k,S,z,F=e(168),I=e(2791),D=e(9434),N=e(4805),A=e(2526),E=e(5130),M=e(6444),O=e(184),_=function(n){var t=n.id,e=(0,D.I0)();return(0,O.jsx)(q,{onClick:function(){e((0,A.Ks)(t)),e((0,E.ml)(t))},children:"Delete"})},q=M.ZP.button(i||(i=(0,F.Z)(["\n  border: 1px solid #24cca7;\n  background-color: #24cca7;\n  border-radius: 18px;\n  color: #ffffff;\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 21px;\n  text-align: center;\n  width: 67px;\n  height: 26px;\n  &:hover {\n    background-color: #ff6596;\n    border: 1px solid #ff6596;\n  }\n"]))),B=e(9126),J=function(n){var t=(0,N.useMediaQuery)({query:"(max-width: 767px)"}),e=(0,D.I0)();return(0,O.jsxs)(K,{onClick:function(){e((0,E.$J)()),e((0,E.KL)("edit")),e((0,E.iW)(n.id))},children:[(0,O.jsx)(Q,{}),t&&"Edit"]})},K=M.ZP.span(r||(r=(0,F.Z)(["\n  cursor: pointer;\n  margin-right: 8px;\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 21px;\n  text-align: center;\n  letter-spacing: 0.02em;\n"]))),Q=(0,M.ZP)(B.bBN)(o||(o=(0,F.Z)(["\n  verticalalign: 'middle';\n  &:hover {\n    fill: #ff6596;\n  }\n"]))),T=function(n){var t=n.slice(8,10),e=n.slice(5,7),i=n.slice(2,4);return"".concat(t,".").concat(e,".").concat(i)},W=function(n){var t=n.transaction,e=n.categories,i=n.last,r=t.transactionDate,o=t.type,l=t.categoryId,a=t.comment,d=t.amount,c=t.id,s="INCOME"===o?"+":"-",f=e.length&&e.find((function(n){return n.id===l})).name;return(0,O.jsxs)($,{last:i,children:[(0,O.jsx)(G,{children:T(r)}),(0,O.jsx)(L,{children:s}),(0,O.jsx)(H,{children:f}),(0,O.jsx)(R,{children:a}),(0,O.jsx)(U,{typeStr:s,children:Number(String(d).replace("-","")).toFixed(2)}),(0,O.jsxs)(V,{children:[(0,O.jsx)(J,{id:c}),(0,O.jsx)(_,{id:c})]})]})},$=M.ZP.tr(l||(l=(0,F.Z)(["\n  border-bottom: ",";\n  height: 54px;\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n"])),(function(n){return n.last?"0px":"1px solid #dcdcdf"})),G=M.ZP.td(a||(a=(0,F.Z)(["\n  text-align: left;\n  padding-left: 25px;\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n"]))),L=M.ZP.td(d||(d=(0,F.Z)(["\n  text-align: center;\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n"]))),H=M.ZP.td(c||(c=(0,F.Z)(["\n  text-align: left;\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n"]))),R=M.ZP.td(s||(s=(0,F.Z)(["\n  text-align: left;\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n"]))),U=M.ZP.td(f||(f=(0,F.Z)(["\n  color: ",";\n  text-align: right;\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 24px;\n"])),(function(n){return"+"===n.typeStr?"#24CCA7":"#FF6596"})),V=M.ZP.td(x||(x=(0,F.Z)(["\n  text-align: right;\n  padding-right: 20px;\n"]))),X=function(n){var t=n.transaction,e=n.categories,i=t.transactionDate,r=t.type,o=t.categoryId,l=t.comment,a=t.amount,d=t.id,c="INCOME"===r?"+":"-",s=e.length&&e.find((function(n){return n.id===o})).name;return(0,O.jsxs)(Y,{className:"aasas",children:[(0,O.jsxs)(nn,{typeStr:c,children:[(0,O.jsx)(rn,{children:"Date"}),(0,O.jsx)("span",{children:T(i)})]}),(0,O.jsxs)(tn,{typeStr:c,children:[(0,O.jsx)(rn,{children:"Type"}),(0,O.jsx)("span",{children:c})]}),(0,O.jsxs)(tn,{typeStr:c,children:[(0,O.jsx)(rn,{children:"Category"}),(0,O.jsx)("span",{children:s})]}),(0,O.jsxs)(tn,{typeStr:c,children:[(0,O.jsx)(rn,{children:" Comment"}),(0,O.jsx)("span",{children:l})]}),(0,O.jsxs)(tn,{typeStr:c,children:[(0,O.jsx)(rn,{children:"Sum"}),(0,O.jsx)("span",{children:a})]}),(0,O.jsxs)(en,{typeStr:c,children:[(0,O.jsx)(J,{id:d}),(0,O.jsx)(_,{id:d})]})]})},Y=M.ZP.ul(p||(p=(0,F.Z)(["\n  wdith: 100%;\n  margin-bottom: 20px;\n"]))),nn=M.ZP.li(h||(h=(0,F.Z)(["\n  height: 48px;\n  background-color: #ffffff;\n  padding-left: 20px;\n  padding-right: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-left: 5px solid\n    ",";\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  border-bottom: 1px solid #dcdcdf;\n"])),(function(n){return"+"===n.typeStr?"#24CCA7":"#FF6596"})),tn=M.ZP.li(g||(g=(0,F.Z)(["\n  height: 48px;\n  background-color: #ffffff;\n  padding-left: 20px;\n  padding-right: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-left: 5px solid\n    ",";\n  border-bottom: 1px solid #dcdcdf;\n"])),(function(n){return"+"===n.typeStr?"#24CCA7":"#FF6596"})),en=M.ZP.li(u||(u=(0,F.Z)(["\n  height: 48px;\n  background-color: #ffffff;\n  padding-left: 20px;\n  padding-right: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-left: 5px solid\n    ",";\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n"])),(function(n){return"+"===n.typeStr?"#24CCA7":"#FF6596"})),rn=M.ZP.span(m||(m=(0,F.Z)(["\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 27px;\n"]))),on=e(6600),ln=e(8820),an=e(8735),dn=M.ZP.div(y||(y=(0,F.Z)(["\n  padding-top: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  @media screen and (min-width: 768px) {\n    padding-top: 20px;\n  }\n  @media screen and (min-width: 1200px) {\n    padding-top: 46px;\n  }\n"]))),cn=M.ZP.table(j||(j=(0,F.Z)(["\n  border-collapse: collapse;\n  width: 100%;\n  @media screen and (min-width: 768px) {\n    margin-rigth: 32px;\n  }\n"]))),sn=M.ZP.thead(Z||(Z=(0,F.Z)(["\n  display: table;\n  width: calc(100% - 1px);\n  table-layout: fixed;\n  border: 0px;\n  height: 58px;\n  background-color: #ffffff;\n  border-radius: 30px;\n"]))),fn=M.ZP.tbody(b||(b=(0,F.Z)(["\n  display: block;\n  width: 100%;\n  min-height: 200px;\n  table-layout: table;\n  overflow: auto;\n  height: calc(100vh - 200px);\n  @media screen and (min-width: 768px) {\n    height: calc(100vh - 370px);\n  }\n"]))),xn=M.ZP.th(w||(w=(0,F.Z)(["\n  border: 0px solid;\n  padding-left: 25px;\n  text-align: left;\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 27px;\n"]))),pn=M.ZP.th(C||(C=(0,F.Z)(["\n  text-align: center;\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 27px;\n"]))),hn=M.ZP.th(P||(P=(0,F.Z)(["\n  text-align: left;\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 27px;\n"]))),gn=M.ZP.th(v||(v=(0,F.Z)(["\n  text-align: right;\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 27px;\n"]))),un=M.ZP.th(k||(k=(0,F.Z)(["\n  border: 0px solid;\n  padding-right: 20px;\n  text-align: right;\n  color: transparent;\n"]))),mn=(0,M.ZP)(ln.OzW)(S||(S=(0,F.Z)(["\n  cursor: pointer;\n  background-color: white;\n  border-radius: 50%;\n  width: 44px;\n  height: 44px;\n  fill: #24cca7;\n  position: absolute;\n  right: 40px;\n  bottom: 40px;\n  @media screen and (max-width: 767px) {\n    position: sticky;\n    left: calc(100vh - 40px);\n  }\n  &:hover {\n    fill: #ff6596;\n  }\n"]))),yn=M.ZP.ul(z||(z=(0,F.Z)(["\n  width: 280px;\n  margin-top: 32px;\n"]))),jn=function(){var n=(0,D.I0)();(0,I.useEffect)((function(){n((0,A.mC)()),n((0,A.fG)())}),[]);var t=(0,D.v9)(on.ig),e=(0,D.v9)(on.CO),i=(0,N.useMediaQuery)({query:"(max-width: 767px)"});return(0,O.jsxs)(dn,{children:[i&&(0,O.jsx)(an.y,{}),!i&&(0,O.jsxs)(cn,{children:[(0,O.jsx)(sn,{children:(0,O.jsxs)("tr",{children:[(0,O.jsx)(xn,{children:"Date"}),(0,O.jsx)(pn,{children:"Type"}),(0,O.jsx)(hn,{children:"Category"}),(0,O.jsx)(hn,{children:"Comments"}),(0,O.jsx)(gn,{children:"Sum"}),(0,O.jsx)(un,{children:"Buttons"})]})}),(0,O.jsx)(fn,{children:t.map((function(n,i){return(0,O.jsx)(W,{transaction:n,categories:e,last:i===t.length-1},n.id)}))})]}),i&&(0,O.jsx)(yn,{children:t.map((function(n){return(0,O.jsx)(X,{transaction:n,categories:e},n.id)}))}),(0,O.jsx)(mn,{onClick:function(){n((0,E.$J)())}})]})}}}]);
//# sourceMappingURL=357.0ccc9131.chunk.js.map