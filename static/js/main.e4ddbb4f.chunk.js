(this["webpackJsonpalkemy-octubre"]=this["webpackJsonpalkemy-octubre"]||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(19),o=a.n(c),r=(a(24),a(2)),i=a(3),l=(a(25),a(5)),u=a.n(l),j=a(0),p=function(e){var t=e.amount;return Object(j.jsxs)("div",{children:["El balance actual es de $",t]})},d=a(6),b=a.n(d),h=a(8),m=function(e){var t=e.delId,a=(e.setReloading,e.setMessage,function(){var e=Object(h.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("Token");case 2:a=e.sent,u.a.delete("".concat("https://alkemy-octubre.herokuapp.com/api/operaciones","/").concat(t),{headers:{authorization:a,"Content-Type":"application/json"}}).then((function(e){204===e.status?console.log(e):(console.log(e),console.log("No se pudo eliminar el elemento. Intenta de nuevo mas tarde"))})).catch((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(j.jsx)("button",{onClick:function(){return a()},children:" Borrar elemento "})},g=a(7),O=function(e){e.token;var t=e.modId,a=e.op,s=(e.setMessage,e.setReloading,Object(n.useState)(!1)),c=Object(r.a)(s,2),o=c[0],l=c[1],p=Object(n.useState)({concept:a.concept,amount:a.amount,date:a.op_date.split("T")[0]}),d=Object(r.a)(p,2),m=d[0],O=d[1],x=function(e){O(Object(i.a)(Object(i.a)({},m),{},Object(g.a)({},e.target.name,e.target.value)))},f=function(){var e=Object(h.a)(b.a.mark((function e(n){var s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==m.concept&&"0000-00-00"!==m.date&&""!==m.date){e.next=5;break}console.log("Completa los campos faltantes"),e.next=19;break;case 5:if(!(m.concept.trim().length<=3)){e.next=10;break}console.log("Ingresa un concepto mas largo"),O(Object(i.a)(Object(i.a)({},m),{},{concept:a.concept})),e.next=19;break;case 10:if(!(m.amount<=0)){e.next=15;break}console.log("Ingresa un dato de monto que no sea negativo o igual a 0"),O(Object(i.a)(Object(i.a)({},m),{},{amount:a.amount})),e.next=19;break;case 15:return e.next=17,localStorage.getItem("Token");case 17:s=e.sent,u.a.put("".concat("https://alkemy-octubre.herokuapp.com/api/operaciones","/").concat(t),m,{headers:{authorization:s,"Content-Type":"application/json"}}).then((function(e){console.log(e)}));case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:function(){return o?void l(!1):l(!0)},children:"Modificar Elemento"}),o?Object(j.jsxs)("form",{onSubmit:function(e){return f(e)},children:[Object(j.jsx)("input",{type:"text",name:"concept",value:m.concept,onChange:x}),Object(j.jsx)("input",{type:"number",name:"amount",value:m.amount,onChange:x}),Object(j.jsx)("input",{type:"date",name:"date",value:m.date,onChange:x}),Object(j.jsx)("input",{type:"submit"})]}):null]})},x=(a(47),function(e){var t=e.data,a=e.setReloading,s=e.setMessage,c=Object(n.useState)([]),o=Object(r.a)(c,2),i=o[0],l=o[1],u=Object(n.useState)([]),p=Object(r.a)(u,2),d=p[0],g=p[1],x=function(){var e=Object(h.a)(b.a.mark((function e(t){var n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.filter((function(e){return"income"===e.op_type})).map((function(e){return Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:e.concept}),"$",e.amount," ",Object(j.jsx)(O,{modId:e.id_operations,op:e,setReloading:a,setMessage:s})," ",Object(j.jsx)(m,{delId:e.id_operations,setReloading:a,setMessage:s})]},e.id_operations)}));case 2:return n=e.sent,e.next=5,t.filter((function(e){return"expense"===e.op_type})).map((function(e){return Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:e.concept}),"$",e.amount," ",Object(j.jsx)(O,{modId:e.id_operations,op:e,setReloading:a,setMessage:s})," ",Object(j.jsx)(m,{delId:e.id_operations,setReloading:a,setMessage:s})]},e.id_operations)}));case 5:c=e.sent,0!==n.length&&l([n]),0!==c.length&&g([c]);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){x(t)}),[t]),Object(j.jsxs)("div",{className:"main-table",children:[Object(j.jsxs)("div",{className:"op-table",children:[Object(j.jsx)("h2",{children:"Ingresos"}),Object(j.jsx)("ul",{children:0===i.length?Object(j.jsx)("h2",{children:"No tienes operaciones en Ingresos. Puedes crear una abajo"}):i})]}),Object(j.jsxs)("div",{className:"op-table",children:[Object(j.jsx)("h2",{children:"Egresos"}),Object(j.jsx)("ul",{children:0!==d.length?d:Object(j.jsx)("h2",{children:"No tienes operaciones en Egresos. Puedes crear una abajo"})})]})]})}),f=(a(48),function(e){var t=e.setReloading,a=e.setMessage,s=e.categories,c=Object(n.useState)(!1),o=Object(r.a)(c,2),l=o[0],p=o[1],d=Object(n.useState)({concept:"",amount:0,op_type:"",op_date:"",category:"otros",modified_at:null}),m=Object(r.a)(d,2),O=m[0],x=m[1],f=function(e){x(Object(i.a)(Object(i.a)({},O),{},Object(g.a)({},e.target.name,e.target.value)))},v=function(){var e=Object(h.a)(b.a.mark((function e(n){var s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==O.concept&&""!==O.op_type&&"0000-00-00"!==O.op_date&&""!==O.op_date){e.next=5;break}a({show:!0,message:"Completa los campos faltantes"}),e.next=18;break;case 5:if(!(O.concept.trim().length<=3)){e.next=10;break}a({show:!0,message:"Ingresa un concepto mas largo"}),x(Object(i.a)(Object(i.a)({},O),{},{concept:""})),e.next=18;break;case 10:if(!(O.amount<=0)){e.next=14;break}a({show:!0,message:"Ingresa un dato de monto que no sea negativo o igual a 0"}),e.next=18;break;case 14:return e.next=16,localStorage.getItem("Token");case 16:s=e.sent,u.a.post("https://alkemy-octubre.herokuapp.com/api/operaciones/create",O,{headers:{authorization:s}}).then((function(e){a({show:!0,message:e.data.message}),console.log(e),setTimeout((function(){t(!0)}),3e3)}));case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:function(){return p(!l)},children:"Crear operaci\xf3n"}),l?Object(j.jsxs)("form",{className:"add-form",onSubmit:function(e){return v(e)},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"concept",children:"Concepto"}),Object(j.jsx)("input",{value:O.concept,name:"concept",placeholder:"Ingresa nombre de operacion",onChange:f})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"amount",children:"Monto"}),Object(j.jsx)("input",{value:O.amount,type:"number",name:"amount",placeholder:"500, 700, 80000",onChange:f})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"type",children:"Tipo de operaci\xf3n"}),Object(j.jsxs)("select",{value:O.op_type,name:"op_type",onChange:f,children:[Object(j.jsx)("option",{value:"",children:"Elige tipo de operacion"}),Object(j.jsx)("option",{value:"income",children:"Ingreso"}),Object(j.jsx)("option",{value:"expense",children:"Egreso"})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"category",children:"Categor\xeda"}),Object(j.jsxs)("select",{value:O.category,name:"category",onChange:f,children:[Object(j.jsx)("option",{value:"otros",children:"Otros"}),s.map((function(e,t){return Object(j.jsx)("option",{value:e,children:e},t)}))]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"date",children:"Fecha"}),Object(j.jsx)("input",{value:O.op_date,type:"date",name:"op_date",onChange:f})]}),Object(j.jsx)("input",{type:"submit"})]}):null]})}),v=["gaming","suscripciones","hogar","Tecnologia","Trabajo","Salidas","Deportes","Educaci\xf3n","Delivery","hobbies","donaciones","belleza","auto","hijos","familia","mascotas","amigos","transporte","shopping","bares","entretenimiento","vestimenta","viajes","cuidado personal","servicios","cajeros","supermercados","restaurant"],k=function(e){var t=e.authorization,a=e.setAuthorization,s=e.setMessage,c=Object(n.useState)([]),o=Object(r.a)(c,2),l=o[0],d=o[1],b=Object(n.useState)(!1),h=Object(r.a)(b,2),m=h[0],g=h[1];return Object(n.useEffect)((function(){u.a.get("https://alkemy-octubre.herokuapp.com/api/user",{headers:{authorization:t.token}}).then((function(e){console.log(e),a(Object(i.a)(Object(i.a)({},t),{},{username:e.data.username,balance:e.data.balance}))})),u.a.get("https://alkemy-octubre.herokuapp.com/api/operaciones",{headers:{authorization:t.token}}).then((function(e){0!==e.data?(d(e.data.data),g(!1)):s({show:!0,message:"Algo salio mal"})}))}),[m]),Object(j.jsx)("div",{className:"home-div",children:Object(j.jsxs)("div",{className:"Home-container",children:[Object(j.jsxs)("h1",{children:["Bienvenid@ ",t.username]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(p,{amount:t.balance}),Object(j.jsx)(x,{setMessage:s,setReloading:g,data:l}),Object(j.jsx)(f,{token:t.token,categories:v,setMessage:s,setReloading:g})]})]})})},w=(a(49),function(e){var t=e.setMessage,a=e.setVisible,s=Object(n.useState)({email:"",username:"",password:""}),c=Object(r.a)(s,2),o=c[0],l=c[1],p=o.email,d=o.username,b=o.password,h=function(e){l(Object(i.a)(Object(i.a)({},o),{},Object(g.a)({},e.target.name,e.target.value)))};return Object(j.jsxs)("div",{className:"Login-Page-container",children:[Object(j.jsx)("h1",{children:"Bienvenido a Wallet App"}),Object(j.jsx)("h2",{children:"Registrarse"}),Object(j.jsx)("div",{style:{width:"300px"},children:Object(j.jsx)("div",{className:"gif-Login",children:Object(j.jsx)("iframe",{title:"pepe",src:"https://giphy.com/embed/3o6UB5RrlQuMfZp82Y",width:"100%",height:"100%",frameBorder:"0",className:"giphy-embed",allowFullScreen:!0})})}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===p||""===d||""===b?t({show:!0,message:"Completa los campos requeridos"}):d.length<=3?t({show:!0,message:"El username tiene que tener al menos 3 caracteres"}):b.length<6?t({show:!0,message:"La contrase\xf1a tiene que tener al menos 6 caracteres"}):u.a.post("https://alkemy-octubre.herokuapp.com/api/user/register",{headers:{Content_Type:"application/json"},email:p,username:d,password:b}).then((function(e){t({show:!0,message:e.data.message}),setTimeout((function(){a((function(e){return!e}))}),3e3)}))},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{type:"email",name:"email",value:o.email,onChange:h})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"username",children:"Username"}),Object(j.jsx)("input",{type:"text",name:"username",value:o.username,onChange:h})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{type:"password",name:"password",value:o.password,onChange:h})]}),Object(j.jsx)("input",{type:"submit",value:"Registrarse"})]}),Object(j.jsx)("button",{onClick:function(){return a((function(e){return!e}))},children:"\xbfYa tienes cuenta? \xa1Logueate aqu\xed!"}),Object(j.jsx)("p",{children:"Tienes que iniciar sesi\xf3n para poder acceder a la aplicaci\xf3n"})]})}),y=(a(50),function(e){var t=e.setLogin,a=e.setMessage,s=e.setAuthorization,c=Object(n.useState)({email:"",password:""}),o=Object(r.a)(c,2),l=o[0],p=o[1],d=Object(n.useState)(!1),b=Object(r.a)(d,2),h=b[0],m=b[1],O=l.email,x=l.password,f=function(e){p(Object(i.a)(Object(i.a)({},l),{},Object(g.a)({},e.target.name,e.target.value)))};return Object(j.jsx)(j.Fragment,{children:!0===h?Object(j.jsx)(w,{setMessage:a,setVisible:m}):Object(j.jsxs)("div",{className:"Login-Page-container",children:[Object(j.jsx)("h1",{children:"Bienvenido a Wallet App"}),Object(j.jsx)("h2",{children:"Loguearse"}),Object(j.jsx)("div",{style:{width:"300px"},children:Object(j.jsx)("div",{className:"gif-Login",children:Object(j.jsx)("iframe",{title:"pepe",src:"https://giphy.com/embed/3o6UB5RrlQuMfZp82Y",width:"100%",height:"100%",frameBorder:"0",className:"giphy-embed",allowFullScreen:!0})})}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===O||""===x?a({show:!0,message:"Completa los campos requeridos"}):x.length<6?a({show:!0,message:"La contrase\xf1a tiene que tener al menos 6 caracteres"}):u.a.post("https://alkemy-octubre.herokuapp.com/api/user/login",{email:O,password:x}).then((function(e){200===e.data.status?(a({show:!0,message:e.data.message}),s({username:"",balance:0,token:e.data.token}),t(!0),localStorage.setItem("Token",e.data.token)):a({show:!0,message:e.data.message})}))},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{type:"email",name:"email",value:l.email,onChange:f})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{type:"password",name:"password",value:l.password,onChange:f})]}),Object(j.jsx)("input",{type:"submit"})]}),Object(j.jsx)("button",{onClick:function(){return m(!h)},children:"\xbfNo tienes cuenta? \xa1Registrate Aqu\xed!"}),Object(j.jsx)("p",{children:"Tienes que iniciar sesi\xf3n para poder acceder a la aplicaci\xf3n"})]})})});var C=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!1),o=Object(r.a)(c,2),i=o[0],l=o[1],u=Object(n.useState)({username:"",token:"",balance:0}),p=Object(r.a)(u,2),d=p[0],b=p[1],h=Object(n.useState)({show:!1,message:""}),m=Object(r.a)(h,2),g=m[0],O=m[1];return Object(n.useEffect)((function(){!0===a&&(l(!0),console.log("autorizado para entrar a la app"))}),[a,i]),Object(n.useEffect)((function(){!1!==g.show&&setTimeout((function(){O({show:!1,message:""})}),5e3)}),[g]),Object(j.jsxs)(j.Fragment,{children:[!1!==g.show&&g.message,!0===a&&!0===i?Object(j.jsx)(k,{setMessage:O,setAuthorization:b,authorization:d}):Object(j.jsx)(y,{setLogin:s,setMessage:O,setAuthorization:b})]})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,52)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),s(e),c(e),o(e)}))};o.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),S()}},[[51,1,2]]]);
//# sourceMappingURL=main.e4ddbb4f.chunk.js.map