"use strict";(self.webpackChunkreact_kabzda_1=self.webpackChunkreact_kabzda_1||[]).push([[797],{2730:function(e,r,a){a.d(r,{U:function(){return s},v:function(){return t}});var i=a(132),t=i.Ry().shape({email:i.Z_().email(),password:i.Z_().min(8,"Must be longer than 8 characters").required("Required")}),s=i.Ry().shape({text:i.Z_().min(2,"Must be longer than 2 characters").max(50,"Must be shorter than 50 characters").required("Required")})},6797:function(e,r,a){a.r(r);a(2791);var i=a(5705),t=a(2730),s=a(5796),n=a(7581),l=a(6871),c=a(184);r.default=(0,n.$j)((function(e){return{isAuth:e.auth.isAuth}}),{login:s.x4})((function(e){var r=e.isAuth,a=e.login;return r?(0,c.jsx)(l.Fg,{replace:!0,to:"/profile"}):(0,c.jsxs)("div",{children:[(0,c.jsx)("h1",{children:"Login"}),(0,c.jsx)(i.J9,{initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var r={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(r.email="Invalid email address"):r.email="Required",r},onSubmit:function(e,r){var i=r.setStatus;a(e.email,e.password,e.rememberMe,i)},validationSchema:t.v,children:function(e){var r=e.status;return(0,c.jsxs)(i.l0,{children:[(0,c.jsx)("div",{children:(0,c.jsx)(i.gN,{type:"text",name:"email",placeholder:"e-mail"})}),(0,c.jsx)(i.Bc,{style:{color:"red"},name:"email",component:"div"}),(0,c.jsx)("div",{children:(0,c.jsx)(i.gN,{type:"password",name:"password",placeholder:"password"})}),(0,c.jsx)(i.Bc,{style:{color:"red"},name:"password",component:"div"}),(0,c.jsxs)("div",{children:[(0,c.jsx)(i.gN,{type:"checkbox",name:"rememberMe"}),(0,c.jsx)("label",{htmlFor:"rememberMe",children:" remember me "})]}),(0,c.jsx)("div",{style:{color:"red"},children:r}),(0,c.jsx)("button",{type:"submit",children:"Log in"})]})}})]})}))}}]);
//# sourceMappingURL=797.ff0ff3f5.chunk.js.map