(this.webpackJsonptestcodempire=this.webpackJsonptestcodempire||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),i=a.n(o),l=(a(89),a(36)),s=a(12),c=a(45),u=a(10),m=a(158),d=a(72),f=a(159),p=a(28),h=a(113),b=a(161),g=a(146),v=Object(g.a)((function(e){return{root:{flexGrow:1,textAlign:"center",height:"60px",color:"white",fontWeight:600}}}));function E(e){var t=e.title,a=v();return r.a.createElement(b.a,{className:a.root,bgcolor:"primary.main",color:"primary.contrastText"},r.a.createElement(h.a,{variant:"h5"},t))}var w=function(e,t){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n={},r=t;r<e.length+t;r++)n[r]=!1;for(var o=0;o<a.length;o++){var i=a[o];n[i-1]=!0}return n},S=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},y=a(150),k=a(114),O=a(151),j=a(164),C=a(153),q=a(152),N=Object(g.a)((function(e){return{root:{position:"relative",paddingLeft:20},formControl:{margin:e.spacing(3)},formLegend:{color:"black",fontWeight:700,width:"95%",paddingBottom:"20px"},add:{position:"absolute",bottom:15,right:20}}}));function A(e){var t=e.question,a=e.i,n=e.handleSetAnswer,o=e.startState,i=e.isDisabled,l=N(),m=r.a.useState(w(t.answers,0,o)),d=Object(u.a)(m,2),f=d[0],p=d[1],g=r.a.useState(!1),v=Object(u.a)(g,2),E=v[0],S=v[1],A=Object.keys(f),z=Object.entries(f).filter((function(e){return e[1]})).map((function(e){return+e[0]+1}));return r.a.createElement(b.a,{className:l.root},r.a.createElement(h.a,{variant:"h6",color:"primary"},t.question),r.a.createElement(y.a,{component:"fieldset",className:l.formControl},r.a.createElement(k.a,null,t.answers.map((function(e,t){return r.a.createElement(O.a,{key:t,control:r.a.createElement(j.a,{color:"primary",checked:f[t],onChange:(a=A[t],function(e){p(Object(c.a)({},f,Object(s.a)({},a,e.target.checked))),S(!0)}),value:A[t]}),label:e,disabled:i});var a})))),!i&&E?r.a.createElement(q.a,{className:l.add,size:"small",color:"primary",onClick:function(){n(a,z),S(!1)}},"+"):null,r.a.createElement(C.a,null))}var z=a(163),x=Object(g.a)((function(e){return{root:{position:"relative",paddingLeft:20,height:200,display:"flex",flexDirection:"column",justifyContent:"center",color:"black",fontWeight:700},form:{margin:e.spacing(1),heigth:"100px"},input:{minWidth:"300px"},add:{position:"absolute",bottom:20,right:20}}}));function D(e){var t=e.question,a=e.handleSetAnswer,n=e.i,o=e.startState,i=e.isDisabled,l=x(),s=r.a.useState(o||""),c=Object(u.a)(s,2),m=c[0],d=c[1],f=r.a.useState(!1),p=Object(u.a)(f,2),g=p[0],v=p[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{className:l.root},r.a.createElement(h.a,{variant:"h6",color:"primary"},t.question),r.a.createElement("form",{className:l.form,noValidate:!0,autoComplete:"off"},r.a.createElement(z.a,{label:"Your reply",value:m,onChange:function(e){d(e.target.value),v(!0)},className:l.input,disabled:i})),!i&&g?r.a.createElement(q.a,{className:l.add,size:"small",color:"primary",onClick:function(){a(n,m.toLocaleLowerCase().trim()),v(!1)}},"+"):null),r.a.createElement(C.a,null))}var W=a(162),J=a(156),R=Object(g.a)((function(e){return{root:{position:"relative",paddingLeft:20},formControl:{margin:e.spacing(3)},FormLabel:{color:"black",fontWeight:700},add:{position:"absolute",bottom:20,right:20}}}));function F(e){var t=e.question,a=e.handleSetAnswer,n=e.i,o=e.startState,i=e.isDisabled,l=R(),s=r.a.useState(o?t.answers[o-1]:""),c=Object(u.a)(s,2),m=c[0],d=c[1],f=r.a.useState(!1),p=Object(u.a)(f,2),g=p[0],v=p[1],E=(t.answers.findIndex((function(e){return e===m}))+1).toString();return r.a.createElement(b.a,{className:l.root},r.a.createElement(h.a,{variant:"h6",color:"primary"},t.question),r.a.createElement(y.a,{component:"fieldset",className:l.formControl},r.a.createElement(J.a,{value:m,onChange:function(e){d(e.target.value),v(!0)}},t.answers.map((function(e,t){return r.a.createElement(O.a,{value:e,key:t,disabled:i,control:r.a.createElement(W.a,{color:"primary"}),label:e})})))),!i&&g?r.a.createElement(q.a,{className:l.add,size:"small",color:"primary",onClick:function(){a(n,E),v(!1)}},"+"):null,r.a.createElement(C.a,null))}var L=a(165),T=a(160),I=Object(g.a)((function(e){return{root:{position:"relative",paddingLeft:20},formControl:{margin:e.spacing(3),minWidth:320},add:{position:"absolute",right:20,bottom:20},select:{minWidth:"300px"}}}));function Q(e){var t=e.question,a=e.i,n=e.handleSetAnswer,o=e.startState,i=e.isDisabled,l=I(),s=r.a.useState(o||""),c=Object(u.a)(s,2),m=c[0],d=c[1],f=r.a.useState(!1),p=Object(u.a)(f,2),g=p[0],v=p[1],E=r.a.useState(!1),w=Object(u.a)(E,2),S=w[0],k=w[1];return r.a.createElement(b.a,{className:l.root},r.a.createElement(h.a,{variant:"h6",color:"primary"},t.question),r.a.createElement(y.a,{className:l.formControl,disabled:i},r.a.createElement(T.a,{className:l.select,open:g,onClose:function(){v(!1)},onOpen:function(){v(!0)},value:m,onChange:function(e){d(e.target.value.toString()),k(!0)}},t.answers.map((function(e,t){return r.a.createElement(L.a,{value:t+1,key:t}," ",t+1," ",e)})))),!i&&S?r.a.createElement(q.a,{className:l.add,size:"small",color:"primary",onClick:function(){n(a,m),k(!1)}},"+"):null,r.a.createElement(C.a,null))}function B(e){var t,a,o=e.item,i=e.i,l=e.handleSetAnswer,s=e.arrAnswers,c=e.rightAnswers,u=e.isDisabled,m=c?(t=s,a=c,Object.values(t).map((function(e,t){return JSON.stringify(e)===JSON.stringify(Object.values(a)[t])}))):null,d=c?r.a.createElement(h.a,{variant:"subtitle1",color:m[i]?"primary":"secondary",style:{paddingLeft:10}},'\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442 "',Object.values(c)[i].toString(),'". \u0412\u044b \u043e\u0442\u0432\u0435\u0442\u0438\u043b\u0438 ',m[i]?"\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e":"\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e"):null;switch(o.answerSelectionType){case"radio":return r.a.createElement(n.Fragment,{key:i},r.a.createElement(F,{i:i,isDisabled:u,handleSetAnswer:l,question:o,startState:s[i]}),d,r.a.createElement(C.a,null));case"input":return r.a.createElement(n.Fragment,{key:i},r.a.createElement(D,{i:i,isDisabled:u,handleSetAnswer:l,question:o,startState:s[i]}),d,r.a.createElement(C.a,null));case"select":return r.a.createElement(n.Fragment,{key:i},r.a.createElement(Q,{i:i,isDisabled:u,handleSetAnswer:l,question:o,startState:s[i]}),d,r.a.createElement(C.a,null));case"checkbox":return r.a.createElement(n.Fragment,{key:i},r.a.createElement(A,{i:i,isDisabled:u,handleSetAnswer:l,question:o,startState:s[i]}),d,r.a.createElement(C.a,null));default:return null}}var _=a(157),V=Object(g.a)((function(e){return{root:{display:"flex",justifyContent:"space-around","& > *":{margin:e.spacing(1)}},link:{textDecoration:"none"}}}));function G(e){var t=e.button,a=e.linkName,n=e.path,o=V();return r.a.createElement(b.a,{className:o.root},t.map((function(e,t){return r.a.createElement(_.a,{variant:"outlined",key:t,onClick:e.onClick,color:e.color},e.name)})),r.a.createElement(_.a,{color:"primary",variant:"outlined"},r.a.createElement(l.b,{to:n,className:o.link}," ",a," ")))}var P=Object(g.a)((function(e){return{root:{},link:{textDecoration:"none"}}}));var U=function(e){var t=e.quiz,a=e.handleSetAnswer,n=e.answers,o=e.isDisabled,i=P(),l=[{name:"clear",onClick:function(){window.confirm("\u0412\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442\u044b?")&&(localStorage.removeItem("storeQuiz"),window.location.reload())},color:"secondary"},{name:"save",onClick:function(){return e=n,localStorage.removeItem("storeQuiz"),localStorage.setItem("storeQuiz",JSON.stringify(e)),void alert("\u0412\u044b\u0448\u0438 \u043e\u0442\u0432\u0435\u0442\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b");var e},color:"primary"}],s=Object.values(n),c=t.questions.length-s.filter((function(e){return e})).length,u=Object.entries(n).filter((function(e){return!e[1]})).map((function(e){return+e[0]}));return r.a.createElement(b.a,{className:i.root},r.a.createElement(E,{title:"Questions"}),t.questions.map((function(e,t){return B({item:e,i:t,handleSetAnswer:a,arrAnswers:s,isDisabled:o})})),r.a.createElement(G,{button:l,linkName:"Rezult",path:"/rezults"}),r.a.createElement(p.a,{when:!!c,message:function(){return"\u0412\u044b \u043d\u0435 \u043e\u0432\u0435\u0442\u0438\u043b\u0438, \u0438\u043b\u0438 \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u043b\u0438 \u043e\u0442\u0432\u0435\u0442\u044b \u043d\u0430 \n        ".concat(u.toString()," \u0432\u043e\u043f\u0440\u043e\u0441\u044b. \u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c?")}}))};var H=function(e){var t=e.quiz,a=e.handleSetAnswer,n=e.answers,o=e.isDisabled,i=Object.values(n),l=t.rightAnswers;return r.a.createElement(b.a,null,r.a.createElement(E,{title:"Rezults"}),t.questions.map((function(e,t){return B({item:e,i:t,handleSetAnswer:a,arrAnswers:i,rightAnswers:l,isDisabled:o})})),r.a.createElement(G,{button:[],linkName:"Ouiz",path:"/"}))},M={questions:[{question:"How can you access the state of a component from inside of a member function?",answerSelectionType:"radio",answers:["this.getState()","this.prototype.stateValue","this.state","this.values"]},{question:"ReactJS is developed by _____ Engineers?",answerSelectionType:"input",rightAnswers:["Google Engineers","Facebook Engineers"]},{question:"ReactJS is an MVC based framework?",answerSelectionType:"radio",answers:["True","False"]},{question:"Which of the following concepts is/are key to ReactJS?",answerSelectionType:"select",answers:["Component-oriented design","Event delegation model","Both of the above"]},{question:"What are the advantages of React JS?",answerSelectionType:"checkbox",answers:["React can be used on client and as well as server side too","Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaining larger apps","React components have lifecycle events that fall into State/Property Updates","React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer"]}],rightAnswers:{"'1'":"3","'2'":"facebook","'3'":"2","'4'":"3","'5'":[1,2,4]}},Y=a(71),$=a.n(Y),K=Object(d.a)({typography:{htmlFontSize:16,fontSize:10}});var X=function(){var e=Object(n.useState)(function(e,t){try{var a=JSON.parse(localStorage.getItem("storeQuiz"));return a||w(e,t)}catch(n){return console.log(n.massage),localStorage.removeItem("storeQuiz"),w(e,t)}}(M.questions,1)),t=Object(u.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)({}),l=Object(u.a)(i,2),d=l[0],h=l[1],g=function(e){h(Object(c.a)({},e))};Object(n.useEffect)((function(){$.a.get("https://react-quiz-5cb66.firebaseio.com/testCodempire.json").then((function(e){return g(e.data.value)})).catch((function(e){console.log(e),g(M)}))}),[]);var v=S(d)?r.a.createElement(m.a,null):r.a.createElement(U,{quiz:d,isDisabled:!1,handleSetAnswer:function(e,t){o(Object(c.a)({},a,Object(s.a)({},e+1,t)))},answers:a}),E=S(d)?r.a.createElement(m.a,null):r.a.createElement(H,{quiz:d,isDisabled:!0,answers:a});return r.a.createElement(b.a,{className:"App"},r.a.createElement(f.a,{theme:K},r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",exact:!0,render:function(){return v}}),r.a.createElement(p.b,{path:"/testCodempire",exact:!0,render:function(){return v}}),r.a.createElement(p.b,{path:"/rezults",render:function(){return E}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=r.a.createElement(l.a,null,r.a.createElement(X,null));i.a.render(Z,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},84:function(e,t,a){e.exports=a(112)},89:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.36c8ac34.chunk.js.map