(this.webpackJsonppart2=this.webpackJsonppart2||[]).push([[0],{23:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var r=t(2),c=t.n(r),o=t(18),i=t.n(o),a=(t(23),t(9)),u=t(8),s=t(3),b=t(5),d=t.n(b),j="http://localhost:3001/api/persons",f=function(){return d.a.get(j).then((function(e){return e.data}))},m=function(e){return d.a.post(j,e).then((function(e){return e.data}))},l=function(e,n){return d.a.put("".concat(j,"/").concat(e),n).then((function(e){return console.log(e),e.data}))},h=function(e){return d.a.delete("".concat(j,"/").concat(e)).then((function(e){return e.data}))},O=t(0),x={color:"green",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"},p={color:"red",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"},g=function(e){var n=e.newFilter;return Object(O.jsx)("form",{children:Object(O.jsx)("input",{type:"text",onChange:function(e){n(e.target.value)}})})},v=function(e){var n=e.mensaje,t=e.stilo;return n?Object(O.jsx)("div",{style:t,children:n}):Object(O.jsx)(O.Fragment,{})},S=function(e){var n=e.numbers,t=e.filter,r=e.setPersons,c=new RegExp("".concat(t),"i");return 0!==n.length?Object(O.jsx)("div",{children:n.filter((function(e){return e.name})).filter((function(e){return e.name.match(c)})).map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Name: "}),e.name,Object(O.jsx)("b",{children:" Number: "}),e.number]}),Object(O.jsx)(y,{id:e.id,setPersons:r,number:n})]},e.id)}))}):Object(O.jsx)("div",{})},y=function(e){var n=e.id,t=e.setPersons,r=e.number;return Object(O.jsx)("button",{onClick:function(){window.confirm("Desea eliminar a ".concat(r.find((function(e){return e.id===n})).name))&&h(n).then((function(){return t(r.filter((function(e){return e.id!==n})))}))},children:"Delete"})},w=function(){var e=Object(r.useState)([]),n=Object(s.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)(""),i=Object(s.a)(o,2),b=i[0],d=i[1];Object(r.useEffect)((function(){f().then((function(e){c(Object(u.a)(e))}))}),[]);var j=Object(r.useState)(x),h=Object(s.a)(j,2),y=h[0],w=h[1],k=Object(r.useState)(""),C=Object(s.a)(k,2),F=C[0],P=C[1],B=Object(r.useState)(""),D=Object(s.a)(B,2),T=D[0],E=D[1],I=function(e){var n=e.target.value,t=e.target.name,r=Object(a.a)({},F);r[t]=n,P(Object(a.a)({},r))};return Object(O.jsxs)("div",{children:[Object(O.jsx)(g,{newFilter:E}),Object(O.jsx)(v,{mensaje:b,stilo:y}),Object(O.jsx)("h2",{children:"Phonebook"}),Object(O.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),t.some((function(e){return e.name===F.name})))window.confirm("".concat(F.name," is already added to the phonebook,do you want to change the number?"))&&function(){var e={name:F.name,number:F.number},n=t.find((function(e){return F.name==e.name})).id;console.log(n),l(n,e).then((function(e){c(t.map((function(t){return t.id!==n?t:e})))})).catch((function(n){w(p),d("Information of ".concat(e.name," has been deleted")),setTimeout((function(){d(""),w(x)}),2e3)}))}();else{var n={name:F.name,number:F.number};m(n).then((function(e){c([].concat(Object(u.a)(t),[e])),d("Added ".concat(e.name))})),setTimeout((function(){return d("")}),2e3)}e.target[0].value="",e.target[1].value=""},children:[Object(O.jsxs)("div",{children:["name: ",Object(O.jsx)("input",{name:"name",onChange:I,type:"text"}),"number: ",Object(O.jsx)("input",{name:"number",onChange:I})]}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{type:"submit",children:"add"})})]}),Object(O.jsx)("h2",{children:"Numbers"}),Object(O.jsx)(S,{numbers:t,filter:T,setPersons:c})]})},k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),o(e),i(e)}))};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.getElementById("root")),k()}},[[43,1,2]]]);
//# sourceMappingURL=main.af4e45ae.chunk.js.map