(this.webpackJsonpreact_demo=this.webpackJsonpreact_demo||[]).push([[2],{1:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(){return r.a.createElement("header",null,r.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Noto+Serif:ital@1&display=swap",rel:"stylesheet"}),r.a.createElement("div",{className:"mydiv"},r.a.createElement("h1",{className:"myh1"},"Welcome to React;")),r.a.createElement("div",{className:"mydiv grid"},r.a.createElement("div",{className:"mya"},r.a.createElement("a",{href:"./index.html"},"HOME")),r.a.createElement("div",{className:"mya"},r.a.createElement("a",{href:"./components.html"},"COMPONENTS")),r.a.createElement("div",{className:"mya"},r.a.createElement("a",{href:"./myapp.html"},"APP")),r.a.createElement("div",{className:"mya"},r.a.createElement("a",{href:"./about.html"},"ABOUT"))))}},12:function(e,t,a){e.exports=a(17)},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),c=a.n(l),o=(a(4),a(1)),i=function(e){return r.a.createElement("div",null,r.a.createElement("p",null," fuck you,",e.name,",you are ",e.age," years old bitch "))},m=function(){var e=new Date;return console.log("this is a log"),r.a.createElement("div",null,r.a.createElement("p",null,"Hello world,this is ",e.toString()),r.a.createElement("p",null," ",10," plus ",20," is ",30," "),r.a.createElement(i,{name:"miya",age:18}),r.a.createElement(i,{name:"keke",age:10}))};function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function s(e,t){if(e){if("string"===typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?u(e,t):void 0}}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,l=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(i){r=!0,l=i}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return a}}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var E=function(e){var t=e.counter;return r.a.createElement("div",null," ",t," ")},f=function(e){var t=e.handleClick,a=e.text;return r.a.createElement("button",{onClick:t},a)},p=function(){var e=d(Object(n.useState)(0),2),t=e[0],a=e[1];return console.log("rendering...",t),r.a.createElement("div",null,r.a.createElement(E,{counter:t}),r.a.createElement(f,{handleClick:function(){return a(t+1)},text:"plus"}),r.a.createElement(f,{handleClick:function(){return a(0)},text:"zero"}),r.a.createElement(f,{handleClick:function(){return a(t-1)},text:"minus"}))};function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){h(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b=function(e){return 0===e.allClicks.length?r.a.createElement("div",null,"the app is used by pressing the buttons"):r.a.createElement("div",null,"button press history: ",e.allClicks.join(" "))},g=function(){var e=d(Object(n.useState)({left:0,right:0}),2),t=e[0],a=e[1],l=d(Object(n.useState)([]),2),c=l[0],o=l[1];return r.a.createElement("div",null,r.a.createElement("div",null,t.left,r.a.createElement("button",{onClick:function(){o(c.concat("L")),a(y(y({},t),{},{left:t.left+1}))},text:"left"}),r.a.createElement("button",{onClick:function(){o(c.concat("R")),a(y(y({},t),{},{right:t.right+1}))},text:"right"}),t.right,r.a.createElement(b,{allClicks:c})))},k=function(e){return console.log(e),r.a.createElement("div",null,r.a.createElement("h1",null,e.course))},O=function(e){return console.log(e),r.a.createElement("div",null,r.a.createElement("p",null,e.parts[0].name," ",e.parts[0].exercises),r.a.createElement("p",null,e.parts[1].name," ",e.parts[1].exercises),r.a.createElement("p",null,e.parts[2].name," ",e.parts[2].exercises))},x=function(e){return console.log(e),r.a.createElement("div",null,r.a.createElement("p",null,"Number of exercises ",e.parts[0].exercises+e.parts[1].exercises+e.parts[2].exercises))},w=function(){var e={name:"Half Stack application development",parts:[{name:"Fundamentals of React",exercises:10},{name:"Using props to pass data",exercises:7},{name:"State of a component",exercises:14}]};return r.a.createElement("div",null,r.a.createElement(k,{course:e.name}),r.a.createElement(O,{parts:e.parts}),r.a.createElement(x,{parts:e.parts}))},N=function(e){return r.a.createElement("div",null,e.value)},j=function(e){return r.a.createElement("button",{onClick:e.HandClick},e.text)},S=function(){var e=d(Object(n.useState)(10),2),t=e[0],a=e[1];return r.a.createElement("div",null,r.a.createElement(N,{value:t}),r.a.createElement(j,{HandClick:function(){return a(t+1)},text:"+++"}),r.a.createElement(j,{HandClick:function(){return a(t-1)},text:"---"}))},C=function(e){return 0===e.good&0===e.neutral&0===e.bad?r.a.createElement("div",null,"No feedback given"):r.a.createElement("table",{border:"1",cellpadding:"5"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"good: "),r.a.createElement("td",null,"neutral: "),r.a.createElement("td",null,"bad: "),r.a.createElement("td",null,"all: "),r.a.createElement("td",null,"average: "),r.a.createElement("td",null,"positive: ")),r.a.createElement("tr",null,r.a.createElement("td",null,e.good),r.a.createElement("td",null,e.neutral),r.a.createElement("td",null,e.bad),r.a.createElement("td",null,e.good+e.neutral+e.bad),r.a.createElement("td",null,(e.good-e.bad)/(e.good+e.neutral+e.bad)),r.a.createElement("td",null,e.positive,e.good/(e.good+e.neutral+e.bad)*100," %"))))},P=function(e){return r.a.createElement("button",{onClick:e.handleClick},e.text)},A=function(){var e=d(Object(n.useState)(0),2),t=e[0],a=e[1],l=d(Object(n.useState)(0),2),c=l[0],o=l[1],i=d(Object(n.useState)(0),2),m=i[0],u=i[1];return r.a.createElement("div",null,r.a.createElement("h2",null,"give feedback"),r.a.createElement(P,{handleClick:function(){return a(t+1)},text:"good"}),r.a.createElement(P,{handleClick:function(){return o(c+1)},text:"neutral"}),r.a.createElement(P,{handleClick:function(){return u(m+1)},text:"bad"}),r.a.createElement("h2",null,"statistics"),r.a.createElement(C,{good:t,neutral:c,bad:m}))};function T(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var H=["If it hurts, do it more often","Adding manpower to a late software project makes it later!","The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.","Any fool can write code that a computer can understand. Good programmers write code that humans can understand.","Premature optimization is the root of all evil.","Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."],M=function(e){var t=d(Object(n.useState)(0),2),a=t[0],l=t[1],c=d(Object(n.useState)(new Array(6).join("0").split("").map(parseFloat)),2),o=c[0],i=c[1],m=Math.max.apply(Math,T(o)),u=o.indexOf(m);return r.a.createElement("div",null,r.a.createElement("h2",null,"Anecdote of the day"),e.anecdotes[a],r.a.createElement("br",null),r.a.createElement("p",null,"has ",o[a]," votes"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){var e=T(o);e[a]+=1,i(e)}},"vote"),r.a.createElement("button",{onClick:function(){return l(Math.floor(5*Math.random()))}},"next anecdotes"),r.a.createElement("h2",null,"Anecdote with most votes"),e.anecdotes[u],r.a.createElement("p",null,"has ",o[u]," votes"))},I=function(){return r.a.createElement(M,{anecdotes:H})},D=function(e){var t=e.note;return r.a.createElement("li",null,t.content)},R=function(e){var t=e.notes;return r.a.createElement("div",null,r.a.createElement("h1",null,"Notes"),r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(D,{key:e.id,note:e})}))))},U=function(){return r.a.createElement(R,{notes:[{id:1,content:"HTML is easy",date:"2019-05-30T17:30:31.098Z",important:!0},{id:2,content:"Browser can execute only Javascript",date:"2019-05-30T18:39:34.091Z",important:!1},{id:3,content:"GET and POST are the most important methods of HTTP protocol",date:"2019-05-30T19:20:14.298Z",important:!0}]})},B=function(){var e=function(e){var t=e.Course;return r.a.createElement("h1",null,t.name)};return r.a.createElement(e,{Course:{id:1,name:"Half Stack application development",parts:[{name:"Fundamentals of React",exercises:10,id:1},{name:"Using props to pass data",exercises:7,id:2},{name:"State of a component",exercises:14,id:3}]}})},F=a(2);function J(){return r.a.createElement("body",null,r.a.createElement(o.a,null),r.a.createElement("div",{className:"mydiv"},r.a.createElement("h1",{className:"myh1"},"Part1a:"),r.a.createElement(m,null)),r.a.createElement("div",{className:"mydiv"},r.a.createElement("h1",{className:"myh1"},"Part1c:"),r.a.createElement(p,null)),r.a.createElement("div",{className:"mydiv"},r.a.createElement("h1",{className:"myh1"},"Part1d:"),r.a.createElement(g,null)),r.a.createElement("div",{className:"mydiv"},r.a.createElement("h1",{className:"myh1"},"Part1Homework:"),r.a.createElement(w,null)),r.a.createElement("div",{className:"mydiv"},r.a.createElement("h1",{className:"myh1"},"Test"),r.a.createElement(S,null)),r.a.createElement("div",{className:"mydiv"},r.a.createElement("h1",{className:"myh1"},"Part1dHomework"),r.a.createElement(A,null)),r.a.createElement("div",{className:"mydiv"},r.a.createElement("h1",{className:"myh1"},"Part1dHomework2"),r.a.createElement(I,null)),r.a.createElement("div",{className:"mydiv"},r.a.createElement("h1",{className:"myh1"},"Part2a"),r.a.createElement(U,null)),r.a.createElement("div",{className:"mydiv"},r.a.createElement("h1",{className:"myh1"},"Part2aHomework"),r.a.createElement(B,null)),r.a.createElement(F.a,null))}c.a.render(r.a.createElement(J,null),document.getElementById("root"))},2:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(){return r.a.createElement("div",{className:"mydiv"},"2020@keke")}},4:function(e,t,a){}},[[12,6,0]]]);
//# sourceMappingURL=components.d1e1a314.chunk.js.map