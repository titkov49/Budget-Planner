(this.webpackJsonpbudget=this.webpackJsonpbudget||[]).push([[0],{143:function(n,e,t){},145:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(13),o=t.n(i),u=(t(77),t(40)),c=t(11),l=t(4),d=t(5),m=t(71),s=t(160),f=t(66),p=t.n(f);function b(){var n=Object(l.a)(["\n  text-align: right;\n  font-weight: 400;\n  margin-left: 2rem;\n"]);return b=function(){return n},n}function v(){var n=Object(l.a)(["\n  margin: auto 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 20ch;\n  font-weight: 500;\n  @media screen and (max-width: 900px) {\n    max-width: 15ch;\n    margin-right: 1rem;\n  }\n"]);return v=function(){return n},n}function g(){var n=Object(l.a)(["\n  margin: auto 0;\n  color: #EF6F6C;\n  border-radius: 5px;\n  &:hover {\n    box-shadow: 1px 1px 5px #EF6F6C;\n  }\n"]);return g=function(){return n},n}function h(){var n=Object(l.a)(["\n  padding: 1rem;\n  border-bottom: 1px solid #5E6973;\n  border-radius: 5px;\n  box-shadow: 0 5px 10px -7px #000;\n  display: grid;\n  grid-template-columns: 2fr 3fr 3fr 2fr;\n  cursor: pointer;\n  text-align: left;\n  @media screen and (max-width: 900px) {\n    grid-template-columns: 1fr 4fr 2fr 3fr;\n    padding: 0 1rem;\n  }\n"]);return h=function(){return n},n}var E=d.a.div(h()),x=Object(d.a)(p.a)(g()),O=d.a.p(v()),j=Object(d.a)(O)(b());function y(){var n=Object(l.a)(["\n  @media screen and (min-width: 900px) {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 2rem;\n    div {\n      width: 0.5rem;\n      height: 0.5rem;\n      border-radius: 50%;\n      background-color: ",";\n      margin-right: 0.5rem;\n    }\n    p {\n      font-size: ",";\n    }\n  }\n  @media screen and (max-width: 900px) {\n    p {\n      background-color: ",";\n      padding: 0.5rem;\n      border-radius: 10px;\n      text-align: center;\n    }\n  }\n"]);return y=function(){return n},n}function w(){var n=Object(l.a)(["\n  margin: 1rem 0;\n"]);return w=function(){return n},n}function C(){var n=Object(l.a)(["\n  ","\n"]);return C=function(){return n},n}function k(){var n=Object(l.a)(["\n  background-color: #E6E6E6;\n  padding: 0.75rem;\n  font-weight: 600;\n  margin-right: 1rem;\n  outline: none;\n  border: 1px solid white;\n  border-radius: 10px;\n  transition: all .3s;\n\n  &:hover {\n    border: 1px solid #6ABEA7;\n    box-shadow: 1px 1px 5px #6ABEA7;\n  }\n\n  &:active {\n    border: 1px solid white;\n    background-color: #6ABEA7;\n    color: white;\n  }\n"]);return k=function(){return n},n}var S=d.a.button(k()),F=Object(d.a)(S)(C(),(function(n){var e=n.value;if(n.type===e)return"\n      background-color: #6ABEA7;\n      color: white;\n    "})),B=d.a.div(w()),A=d.a.div(y(),(function(n){return"income"===n.type?"#6ABEA7":"#EF6F6C"}),(function(n){return n.size||"1.25rem"}),(function(n){return"income"===n.type?"#6ABEA7":"#EF6F6C"})),z=function(n){var e=n.value,t=n.type,r=n.size;return a.a.createElement(A,{type:t,size:r},a.a.createElement("div",null),a.a.createElement("p",null,e))},M=t(147),I=function(n){var e=n.item,t=n.onDescription,r=n.onDelete;return a.a.createElement(E,{onClick:function(){return t(e.id)}},a.a.createElement(x,{onClick:function(n){return function(n,e){n.stopPropagation(),r(e)}(n,e.id)}}),a.a.createElement(O,null,e.name),a.a.createElement(z,{value:e.value,type:e.type}),a.a.createElement(j,null,Object(M.default)(e.date,"d MMM yyyy")))},L=t(28),D=t(68),J=t.n(D);t(82);function N(){var n=Object(l.a)(["\n  box-sizing: border-box;\n  border: 1px solid #EF6F6C;\n  margin: 0 auto 1rem auto;\n  background-color: #F7A6A5;\n  color: #EF6F6C;\n  width: 80%;\n\n  h4 {\n    padding: 0 1rem;\n  }\n\n  ul {\n    padding: 0 1.5rem;\n    font-size: 1rem;\n    text-align: left;\n  }\n"]);return N=function(){return n},n}function q(){var n=Object(l.a)(["\n  margin-bottom: 1rem; \n  width: 75%;\n  height: 15%;\n  padding: 0.5rem;\n  resize: none;\n"]);return q=function(){return n},n}function T(){var n=Object(l.a)(["\n  width: 75%;\n  padding: 0.5rem;\n  margin-bottom: 1rem;\n"]);return T=function(){return n},n}var V=d.a.input(T()),P=d.a.textarea(q()),R=d.a.div(N()),$=function(n){var e=n.errors;return a.a.createElement(R,null,a.a.createElement("h4",null,"Item should match these requirements"),a.a.createElement("ul",null,e.map((function(n){return a.a.createElement("li",null,n)}))))},G=t(67),H=t.n(G);function K(){var n=Object(l.a)(["\n  width: 95%;\n  overflow-wrap: break-word;\n"]);return K=function(){return n},n}function Q(){var n=Object(l.a)(["\n  width: 75%;\n  color: ",";\n"]);return Q=function(){return n},n}function U(){var n=Object(l.a)(["width: 100%"]);return U=function(){return n},n}function W(){var n=Object(l.a)(["\n  color: #EF6F6C;\n  display: block !important;\n  margin-bottom: 1rem;\n  cursor: pointer;\n  border-radius: 5px;\n  &:hover { \n    box-shadow: 1px 1px 5px #EF6F6C;\n  }\n"]);return W=function(){return n},n}function X(){var n=Object(l.a)(["\n  position: absolute;\n  z-index: 999;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  text-align: center;\n  padding: 1rem;\n  background-color: white;\n  border: 2px solid #000;\n  box-shadow: -1px 0 10px #000;\n\n  top:0;\n  right:0;\n  height: 100%;\n  width: 25%;\n\n  @media screen and (max-width: 900px) {\n    top: 0;\n    left: 0;\n    width: 100%;\n    border: none\n  }\n"]);return X=function(){return n},n}var Y=d.a.div(X()),Z=Object(d.a)(H.a)(W()),_=d.a.div(U()),nn=Object(d.a)(S)(Q(),(function(n){return n.color||"#5E6973"})),en=d.a.div(K()),tn=function(n){var e=n.children,t=n.onClose,r=n.onButtonClick,i=n.buttonLabel;return a.a.createElement(Y,null,a.a.createElement(en,null,a.a.createElement(Z,{onClick:t}),e),a.a.createElement(_,null,a.a.createElement(nn,{onClick:r},i)))},rn=function(n){var e=n.item,t=n.list,i=n.onClose,o=n.onSave,l=function(){return{id:(null===e||void 0===e?void 0:e.id)||Date.now(),name:(null===e||void 0===e?void 0:e.name)||"",description:(null===e||void 0===e?void 0:e.description)||"",date:(null===e||void 0===e?void 0:e.date)||Date.now(),type:(null===e||void 0===e?void 0:e.type)||null,value:(null===e||void 0===e?void 0:e.value)||""}},d=Object(r.useState)(l()),m=Object(c.a)(d,2),s=m[0],f=m[1],p=Object(r.useState)([]),b=Object(c.a)(p,2),v=b[0],g=b[1];Object(r.useEffect)((function(){f(l())}),[e]);var h=function(n,e){var t={};t[e]=n.target.value,f((function(n){return Object(L.a)(Object(L.a)({},n),t)}))};return a.a.createElement(tn,{onClose:i,onButtonClick:function(){var n=[];if(/.+/.test(s.name)||n.push("Name must contain at least one character"),/^\d+$/.test(s.value)||n.push("Value must contain only digits (at least one) that is greater than or equal to zero"),s.type||n.push("Type of item must be chosen"),n.length>0)g(n);else{var r=Object(u.a)(t);if(e)r[t.findIndex((function(n){return e.id===n.id}))]=s;else r.unshift(s);o(r),i()}},buttonLabel:"Save"},v.length>0&&a.a.createElement($,{errors:v}),a.a.createElement(V,{type:"text",placeholder:"Enter name",value:s.name||"",onChange:function(n){return h(n,"name")}}),a.a.createElement(V,{type:"text",placeholder:"Enter value",value:s.value,onChange:function(n){return h(n,"value")}}),a.a.createElement(P,{cols:"4",placeholder:"Enter description",value:s.description,onChange:function(n){return h(n,"description")}}),a.a.createElement(J.a,{selected:s.date,onChange:function(n){return function(n){return f((function(e){return Object(L.a)(Object(L.a)({},e),{},{date:n})}))}(n)},customInput:a.a.createElement(V,null),dateFormat:"d MMM yyyy"}),a.a.createElement(B,null,a.a.createElement(F,{value:"income",type:s.type,onClick:function(n){return h(n,"type")}},"Income"),a.a.createElement(F,{value:"spending",type:s.type,onClick:function(n){return h(n,"type")}},"Spending")))};function an(){var n=Object(l.a)(["\n  margin: 1rem auto;\n  text-align: center;\n  font-size: 1rem;\n  overflow-wrap: break-word;\n"]);return an=function(){return n},n}function on(){var n=Object(l.a)(["\n  width: 75%;\n  margin: auto;\n"]);return on=function(){return n},n}var un=d.a.div(on()),cn=d.a.p(an()),ln=function(n){var e=n.item,t=n.onEdit,r=n.onClose;return a.a.createElement(tn,{onClose:r,onButtonClick:t,buttonLabel:"Edit"},a.a.createElement("h2",null,e.name),a.a.createElement(un,null,a.a.createElement(z,{value:e.value,type:e.type,size:"1.75rem"}),a.a.createElement(cn,null,e.description),a.a.createElement(cn,null,Object(M.default)(e.date,"d MMM yyyy"))))},dn=[{label:"By Date",value:"initial"},{label:"By Value",value:"value"},{label:"By Name",value:"name"}];t(143);function mn(){var n=Object(l.a)(["\n  width: 20%;\n  @media screen and (max-width: 900px) {\n    width: 100%;\n    margin-bottom: 1rem;\n  }\n"]);return mn=function(){return n},n}function sn(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  @media screen and (max-width: 900px) {\n    display: block;\n  }\n"]);return sn=function(){return n},n}function fn(){var n=Object(l.a)(["\n  @media screen and (min-width: 900px) {\n    margin: 0 10rem;\n  }\n  @media screen and (max-width: 900px) {\n    margin: 0 1rem;\n  }\n"]);return fn=function(){return n},n}var pn=d.a.div(fn()),bn=d.a.div(sn()),vn=d.a.div(mn()),gn=function(){var n=Object(r.useState)(!1),e=Object(c.a)(n,2),t=e[0],i=e[1],o=Object(r.useState)(!1),l=Object(c.a)(o,2),d=l[0],f=l[1],p=Object(r.useState)(null),b=Object(c.a)(p,2),v=b[0],g=b[1],h=Object(r.useState)([]),E=Object(c.a)(h,2),x=E[0],O=E[1],j=Object(r.useState)(x),y=Object(c.a)(j,2),w=y[0],C=y[1],k=Object(r.useState)("initial"),A=Object(c.a)(k,2),z=A[0],M=A[1],L=Object(r.useState)(dn[0]),D=Object(c.a)(L,2),J=D[0],N=D[1];console.log(J),Object(r.useEffect)((function(){localStorage.getItem("list")&&O(JSON.parse(localStorage.getItem("list")))}),[]),Object(r.useEffect)((function(){localStorage.setItem("list",JSON.stringify(x))}),[x]),Object(r.useEffect)((function(){C(V(T()))}),[z,J,x]);var q=function(n){O(x.filter((function(e){return e.id!==n}))),C(w.filter((function(e){return e.id!==n})))},T=function(){return"initial"===z?Object(u.a)(x):x.filter((function(n){return n.type===z}))},V=function(n){switch(J){case dn[1]:return console.log("By value"),n.sort((function(n,e){return e.value-n.value}));case dn[2]:return console.log("By name"),n.sort((function(n,e){return n.name.toLowerCase()>e.name.toLowerCase()?1:e.name.toLowerCase()>n.name.toLowerCase()?-1:0}));default:return console.log("By date"),n.sort((function(n,e){return Object(s.a)(e.date,n.date)}))}};return a.a.createElement(pn,null,t&&a.a.createElement(rn,{onClose:function(){i(!1),g(null)},onSave:O,list:x,item:v}),v&&d&&a.a.createElement(ln,{item:v,onEdit:function(){i(!0),f(!1)},onClose:function(){g(null),f(!1)}}),a.a.createElement(bn,null,a.a.createElement(B,null,a.a.createElement(S,{onClick:function(){t||i(!0)}},"Create"),a.a.createElement(S,{onClick:function(){M("initial"),N(dn[0])},modType:z},"Reset List"),a.a.createElement(F,{onClick:function(n){return M(n.target.value)},value:"income",type:z},"Only incomes"),a.a.createElement(F,{onClick:function(n){return M(n.target.value)},value:"spending",type:z},"Only spendings")),a.a.createElement(vn,null,a.a.createElement(m.a,{value:J,onChange:N,options:dn}))),w.map((function(n){return a.a.createElement(I,{item:n,onDelete:q,onDescription:function(){g(n),f(!0)},key:n.id})})))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(gn,null)),document.getElementById("root"))},77:function(n,e,t){}},[[145,1,2]]]);
//# sourceMappingURL=main.e80f50ff.chunk.js.map