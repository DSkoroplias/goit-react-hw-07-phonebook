"use strict";(self.webpackChunkgoit_react_hw_07_phonebook=self.webpackChunkgoit_react_hw_07_phonebook||[]).push([[568],{568:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var a=t(434),r=t(942),o=t(413),s=t(439),c=t(791),i=t(321),l={block:"contact-form_block__kwj7e"},u=t(184),h=function(){var e=(0,c.useState)({name:"",phone:""}),n=(0,s.Z)(e,2),t=n[0],h=n[1],d=(0,a.I0)();(0,c.useEffect)((function(){d((0,i.CL)())}),[d]);var m=function(e){var n=e.target,t=n.name,a=n.value;h((function(e){return(0,o.Z)((0,o.Z)({},e),{},(0,r.Z)({},t,a))}))},p=function(e){var n=e.name,t=e.phone;d((0,i.xe)({name:n,phone:t}))},f=t.name,v=t.phone;return(0,u.jsx)("div",{className:l.block,children:(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p({name:f,phone:v}),h({name:"",phone:""})},children:[(0,u.jsxs)("div",{className:l.formGroup,children:[(0,u.jsx)("label",{children:"Name"}),(0,u.jsx)("input",{onChange:m,value:f,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,u.jsxs)("div",{className:l.formGroup,children:[(0,u.jsx)("label",{children:"Number"}),(0,u.jsx)("input",{onChange:m,value:v,type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,u.jsx)("button",{type:"submit",children:"Add contact"})]})})},d=function(e){var n=e.contacts,t=e.filter;if(!t)return n.items;var a=t.toLowerCase();return n.items.filter((function(e){return e.name.toLowerCase().includes(a)}))},m=function(e){var n=e.id,t=e.name,a=e.phone,r=e.removeContact;return(0,u.jsx)("ul",{children:(0,u.jsxs)("li",{children:[t,": ",a,(0,u.jsx)("button",{onClick:r,type:"button",children:"Delete"})]},n)})},p={},f=function(){var e=(0,a.v9)(d),n=(0,a.I0)();return(0,u.jsx)("div",{className:p.contacts,children:e.map((function(e){var t=e.id,a=e.name,r=e.phone;return(0,u.jsx)(m,{name:a,phone:r,removeContact:function(){return function(e){n((0,i.ze)(e))}(t)}},t)}))})},v=f;f.defaultProps={contacts:[]};var x=function(e){return e.filter},j=t(653),b="contact-filter_formGroup__7NSTt",_=function(){var e=(0,a.v9)(x),n=(0,a.I0)();return(0,u.jsxs)("div",{className:b,children:[(0,u.jsx)("label",{htmlFor:"",children:"Find contacts by name"}),(0,u.jsx)("input",{value:e,onChange:function(e){var t=e.target;n((0,j.T)(t.value))},name:"filter",type:"text",placeholder:"Filter books"})]})},k="phonebook_wrapper__U-FYE",C=function(){var e=(0,a.v9)(d),n=Boolean(e.length);return(0,u.jsxs)("div",{className:k,children:[(0,u.jsx)("h1",{children:"Phonebook"}),(0,u.jsx)(h,{}),(0,u.jsx)("h1",{children:"Contacts"}),(0,u.jsx)(_,{}),n&&(0,u.jsx)(v,{}),!n&&(0,u.jsx)("p",{children:"No contacts"})]})},N=function(){return(0,u.jsx)(C,{})}}}]);
//# sourceMappingURL=568.e645e876.chunk.js.map