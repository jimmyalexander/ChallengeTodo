(this.webpackJsonptareas=this.webpackJsonptareas||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(8),o=c.n(a),i=c(4),s=c(2),r=Object(n.createContext)(null),d=c(0),l=function(){var e=Object(n.useContext)(r).tema;return Object(d.jsx)("div",{className:e?" footer_light":"container_footer",children:Object(d.jsxs)("footer",{children:[Object(d.jsx)("h2",{children:"Todo Challenge By Jimmy"}),Object(d.jsx)("a",{target:"blank",href:"https://www.linkedin.com/feed/",children:Object(d.jsx)(s.a,{color:"#0e76a8"})})]})})},j=c(5),u=c(9),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":return[].concat(Object(u.a)(e),[t.payload]);case"delete":return e.filter((function(e){return e.id!==t.payload}));case"select":return e.map((function(e){return e.id===t.payload?Object(j.a)(Object(j.a)({},e),{},{active:!e.active}):e}));case"finish":return e.map((function(e){return e.id===t.payload?Object(j.a)(Object(j.a)({},e),{},{done:!e.done}):e}));default:return e}},O=c.p+"static/media/icon-moon.6c03114b.svg",m=c.p+"static/media/icon-sun.910b1f9a.svg",p=function(){var e=Object(n.useContext)(r),t=e.tema,c=e.setTema;return Object(d.jsx)("div",{className:"containerHeader",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:"Todo"}),Object(d.jsx)("img",{onClick:function(e){c(!t)},className:"moon_icon",src:t?m:O,alt:"moon"})]})})},f=function(){return JSON.parse(localStorage.getItem("todos"))||[]},x=function(){var e=Object(n.useReducer)(b,[],f),t=Object(i.a)(e,2),c=t[0],a=t[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),j=l[0],u=l[1],O=Object(n.useRef)(),m=Object(n.useContext)(r).tema;Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(c))}),[c]);return Object(d.jsxs)("div",{className:m?"light":"container_todo",children:[Object(d.jsx)(p,{}),Object(d.jsxs)("div",{className:"todo",children:[Object(d.jsx)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault();var t={type:"add",payload:{id:(new Date).getTime(),desc:j,done:!1,active:!1}};a(t),O.current.value=""},children:Object(d.jsx)("input",{ref:O,onChange:function(e){u(e.target.value)},type:"text",name:"newtodo",id:"",placeholder:"New Todo",defaultValue:""})}),Object(d.jsx)("div",{className:"container_view-todos",children:c.map((function(e,t){return Object(d.jsxs)("div",{className:"view-todos",children:[Object(d.jsxs)("div",{style:{display:"flex",alignItems:"center "},children:[e.done?"":Object(d.jsx)("input",{checked:!!e.active,onChange:function(t){var c;c=e.id,a({type:"select",payload:c})},type:"checkbox",name:"",id:""}),Object(d.jsxs)("p",{className:e.done?"complete":"",children:[t+1,". ",e.desc]})]}),Object(d.jsx)("div",{className:"todo_buttons",children:c.map((function(t){return t.active&&e.id===t.id?Object(d.jsxs)("div",{style:{display:"flex"},children:[e.done?Object(d.jsx)(s.b,{}):Object(d.jsx)("button",{disabled:!!e.done,onClick:function(){return t=e.id,void a({type:"finish",payload:t});var t},style:{background:"#gray",fontSize:"12px",padding:"1px",color:"#333",borderRadius:"5px",cursor:"pointer",border:"0.1px solid gray"},children:"Complete"}),Object(d.jsx)("p",{onClick:function(){return t=e.id,void a({type:"delete",payload:t});var t},style:{color:"#fff",cursor:"pointer"},children:Object(d.jsx)(s.c,{color:m?"gray":""})})]},e.id):" "}))})]},t)}))})]})]})},h=function(){var e=Object(n.useContext)(r).tema;return Object(d.jsxs)("div",{className:"container_principal",children:[Object(d.jsx)("section",{className:"item-1"}),Object(d.jsx)("section",{className:e?"item-light":"item-2"}),Object(d.jsx)(x,{}),Object(d.jsx)(l,{})]})},v=(c(15),function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(d.jsx)(r.Provider,{value:{tema:c,setTema:a},children:Object(d.jsx)(h,{})})});o.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.928d7e73.chunk.js.map