(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{3269:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return c(9144)}])},603:function(a,b,c){"use strict";c.d(b,{Et:function(){return i},Pg:function(){return j}});var d=c(5893),e=c(1664),f=c(5675),g=c(8527),h=c(917),i=function(a){var b=a.children,c=a.id,h=a.title,i=a.thumbnail;return(0,d.jsx)(g.xu,{w:"100%",textAlign:"center",children:(0,d.jsx)(e.default,{href:"/works/".concat(c),children:(0,d.jsxs)(g.fG,{cursor:"pointer",children:[(0,d.jsx)(f.default,{src:i,alt:h,className:"grid-item-thumbnail",placeholder:"blur"}),(0,d.jsx)(g.AB,{href:"/works/".concat(c),children:(0,d.jsx)(g.xv,{mt:2,fontSize:20,children:h})}),(0,d.jsx)(g.xv,{fontSize:14,children:b})]})})})},j=function(){return(0,d.jsx)(h.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})}},2857:function(a,b,c){"use strict";var d=c(5893),e=c(2023),f=c(9008),g=c(603),h={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};b.Z=function(a){var b=a.children,c=a.title;return(0,d.jsx)(e.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:h,transition:{duration:0.4,type:"easeInOut"},style:{position:"relative"},children:(0,d.jsxs)(d.Fragment,{children:[c&&(0,d.jsxs)(f.default,{children:[(0,d.jsxs)("title",{children:[c," - Juan Martin Ruiz"]}),(0,d.jsx)("meta",{name:"twitter:title",content:c}),(0,d.jsx)("meta",{property:"og:title",content:c})]}),b,(0,d.jsx)(g.Pg,{})]})})}},7578:function(a,b,c){"use strict";var d=c(5893),e=c(2023),f=c(6052),g=(0,f.m$)(e.E.div,{shouldForwardProp:function(a){return(0,f.x9)(a)||"transition"===a}});b.Z=function(a){var b=a.children,c=a.delay;return(0,d.jsx)(g,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},transition:{duration:0.8,delay:void 0===c?0:c},mb:6,children:b})}},9144:function(a,b,c){"use strict";c.r(b);var d=c(5893),e=c(7294),f=c(2175),g=c(9669),h=c.n(g),i=c(8527),j=c(9762),k=c(4612),l=c(3441),m=c(5193),n=c(2857),o=c(7578);function p(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function q(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){p(a,b,c[b])})}return a}b.default=function(){var a=(0,e.useState)(),b=a[0],c=a[1],g=function(a,b){c({ok:a,msg:b})},p=function(a){var b;return a?a.length<=3&&(b="Enter name greater than 3 characters 😱"):b="Name is required",b},r=function(a){var b;return a?a.length<=4&&(b="Enter name greater than 4 characters 😱"):b="Subject is required",b},s=function(a){var b;return a?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(a)||(b="Invalid email address 😱"):b="E-mail is required",b},t=function(a){var b;return a?a.length<35&&(b="Enter name greater than 34 characters 😱"):b="Question is required",b};return(0,d.jsx)(n.Z,{title:"Contact",children:(0,d.jsxs)(i.W2,{children:[(0,d.jsx)(i.X6,{as:"h3",fontSize:20,mb:4,children:"Contact"}),(0,d.jsx)(o.Z,{delay:0.1,children:(0,d.jsx)(f.J9,{initialValues:{name:"",subject:"",email:"",question:""},onSubmit:function(a,b){h()({method:"POST",url:"https://formspree.io/f/xoqyblrz",data:a}).then(function(a){b.setSubmitting(!1),b.resetForm(),console.log("Message sent: ",a),g(!0,"Thanks!")}).catch(function(a){b.setSubmitting(!1),g(!1,a)})},children:function(a){return(0,d.jsxs)(f.l0,{children:[(0,d.jsx)(f.gN,{name:"name",validate:p,children:function(a){var b=a.field,c=a.form;return(0,d.jsxs)(j.NI,{id:"name",isInvalid:c.errors.name&&c.touched.name,children:[(0,d.jsx)(j.lX,{htmlFor:"name",children:"Name"}),(0,d.jsx)(k.II,q({},b,{placeholder:"name"})),(0,d.jsx)(j.J1,{children:c.errors.name})]})}}),(0,d.jsx)(f.gN,{name:"subject",validate:r,children:function(a){var b=a.field,c=a.form;return(0,d.jsxs)(j.NI,{id:"subject",isInvalid:c.errors.subject&&c.touched.subject,children:[(0,d.jsx)(j.lX,{htmlFor:"subject",children:"Subject"}),(0,d.jsx)(k.II,q({},b,{placeholder:"subject"})),(0,d.jsx)(j.J1,{children:c.errors.subject})]})}}),(0,d.jsx)(f.gN,{name:"email",validate:s,children:function(a){var b=a.field,c=a.form;return(0,d.jsxs)(j.NI,{id:"email",isInvalid:c.errors.email&&c.touched.email,children:[(0,d.jsx)(j.lX,{htmlFor:"email",children:"Email"}),(0,d.jsx)(k.II,q({},b,{placeholder:"test@test.com"})),(0,d.jsx)(j.J1,{children:c.errors.email})]})}}),(0,d.jsx)(f.gN,{name:"question",validate:t,children:function(a){var b=a.field,c=a.form;return(0,d.jsxs)(j.NI,{id:"question",isInvalid:c.errors.question&&c.touched.question,children:[(0,d.jsx)(j.lX,{htmlFor:"subject",children:"Question"}),(0,d.jsx)(l.g,q({},b,{placeholder:"Write your question"})),(0,d.jsx)(j.J1,{children:c.errors.question})]})}}),(0,d.jsx)(m.zx,{mt:4,colorScheme:"teal",isLoading:a.isSubmitting,type:"submit",children:"Submit"}),b&&(0,d.jsx)("p",{className:b.ok?"":"errorMsg",children:b.msg})]})}})})]})})}}},function(a){a.O(0,[117,774,888,179],function(){return a(a.s=3269)}),_N_E=a.O()}])