(this["webpackJsonpreact-form-valitdation"]=this["webpackJsonpreact-form-valitdation"]||[]).push([[0],{10:function(e,a,t){e.exports=t(17)},15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(2),s=t.n(l),m=(t(15),t(3)),o=t(4),c=t(5),i=t(7),h=t(6),u=t(8),d=t(9),N=(t(16),RegExp(/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)),p=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(h.a)(a).call(this,e))).handleSubmit=function(e){e.preventDefault(),!function(e){var a=e.formErrors,t=Object(d.a)(e,["formErrors"]),r=!0;return Object.values(a).forEach((function(e){e.length>0&&(r=!1)})),Object.values(t).forEach((function(e){null===e&&(r=!1)})),r}(t.state)?console.log("FORM INVALID - DISPLAY ERROR MESSAGE"):console.log("\n        --SUBMITTING--\n        First Name: ".concat(t.state.firstName,"\n        Last Name: ").concat(t.state.lastName,"\n        Email: ").concat(t.state.email,"\n        Password: ").concat(t.state.password,"\n        "))},t.handleChange=function(e){e.preventDefault();var a=e.target,r=a.name,n=a.value,l=t.state.formErrors;switch(r){case"firstName":l.firstName=n.length<3?"minimum 3 characters required":"";break;case"lastName":l.lastName=n.length<3?"minimum 3 characters required":"";break;case"email":l.email=N.test(n)?"":"email not valid";break;case"password":l.password=n.length<6?"minimum 6 characters required":""}t.setState(Object(m.a)({formErrors:l},r,n),(function(){return console.log(t.state)}))},t.state={firstName:null,lastName:null,email:null,password:null,formErrors:{firstName:"",lastName:"",email:"",password:""}},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.state.formErrors;return n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"form-wrapper"},n.a.createElement("h1",null,"Creat Account"),n.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0},n.a.createElement("div",{className:"firstName"},n.a.createElement("label",{htmlFor:"firstName"},"First Name"),n.a.createElement("input",{type:"text",className:e.firstName.length>0?"error":null,placeholder:"First Name",name:"firstName",noValidate:!0,onChange:this.handleChange}),e.firstName.length>0&&n.a.createElement("span",{className:"errorMessage"},e.firstName)),n.a.createElement("div",{className:"lastName"},n.a.createElement("label",{htmlFor:"lastName"},"Last Name"),n.a.createElement("input",{type:"text",className:e.lastName.length>0?"error":null,placeholder:"Last Name",name:"lastName",noValidate:!0,onChange:this.handleChange}),e.lastName.length>0&&n.a.createElement("span",{className:"errorMessage"},e.lastName)),n.a.createElement("div",{className:"email"},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{type:"email",className:e.email.length>0?"error":null,placeholder:"Email",name:"email",noValidate:!0,onChange:this.handleChange}),e.email.length>0&&n.a.createElement("span",{className:"errorMessage"},e.email)),n.a.createElement("div",{className:"password"},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{type:"password",className:e.password.length>0?"error":null,placeholder:"Password",name:"password",noValidate:!0,onChange:this.handleChange}),e.password.length>0&&n.a.createElement("span",{className:"errorMessage"},e.password)),n.a.createElement("div",{className:"createAccount"},n.a.createElement("button",{type:"submit"},"Create Account"),n.a.createElement("small",null,"You Already Have an Account")))))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.e27a4c77.chunk.js.map