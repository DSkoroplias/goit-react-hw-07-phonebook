"use strict";(self.webpackChunkgoit_react_hw_07_phonebook=self.webpackChunkgoit_react_hw_07_phonebook||[]).push([[912],{912:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var a=t(434),o=t(942),r=t(413),s=t(439),c=t(791),i=t(321),l="contact-form_block__kwj7e",u="contact-form_formGroup__iRivu",h="contact-form_button__Kfuu1",m=t(184),d=function(){var e=(0,c.useState)({name:"",phone:""}),n=(0,s.Z)(e,2),t=n[0],d=n[1],p=(0,a.I0)();(0,c.useEffect)((function(){p((0,i.CL)())}),[p]);var f=function(e){var n=e.target,t=n.name,a=n.value;d((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,o.Z)({},t,a))}))},_=function(e){var n=e.name,t=e.phone;p((0,i.xe)({name:n,phone:t}))},v=t.name,x=t.phone;return(0,m.jsx)("div",{className:l,children:(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),_({name:v,phone:x}),d({name:"",phone:""})},children:[(0,m.jsxs)("div",{className:u,children:[(0,m.jsx)("label",{children:"Name"}),(0,m.jsx)("input",{onChange:f,value:v,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,m.jsxs)("div",{className:u,children:[(0,m.jsx)("label",{children:"Number"}),(0,m.jsx)("input",{onChange:f,value:x,type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,m.jsx)("button",{className:h,type:"submit",children:"Add contact"})]})})},p=function(e){var n=e.contacts,t=e.filter;if(!t)return n.items;var a=t.toLowerCase();return n.items.filter((function(e){return e.name.toLowerCase().includes(a)}))},f="contact-list-el_listItem__uEAN0",_="contact-list-el_button__c1F5W",v=function(e){var n=e.id,t=e.name,a=e.phone,o=e.removeContact;return(0,m.jsx)("ul",{children:(0,m.jsxs)("li",{className:f,children:[t,": ",a,(0,m.jsx)("button",{className:_,onClick:o,type:"button",children:"Delete"})]},n)})},x={},j=function(){var e=(0,a.v9)(p),n=(0,a.I0)();return(0,m.jsx)("div",{className:x.contacts,children:e.map((function(e){var t=e.id,a=e.name,o=e.phone;return(0,m.jsx)(v,{name:a,phone:o,removeContact:function(){return function(e){n((0,i.ze)(e))}(t)}},t)}))})},b=j;j.defaultProps={contacts:[]};var N=function(e){return e.filter},k=t(653),C="contact-filter_formGroup__7NSTt",g="contact-filter_formInput__DB-2p",w="contact-filter_formLabel__2ihCv",y=function(){var e=(0,a.v9)(N),n=(0,a.I0)();return(0,m.jsxs)("div",{className:C,children:[(0,m.jsx)("input",{className:g,value:e,onChange:function(e){var t=e.target;n((0,k.T)(t.value))},name:"filter",type:"text"}),(0,m.jsx)("label",{className:w,children:"Filter books"})]})},A="phonebook_wrapper__U-FYE",Z="phonebook_block__jmJea",z="phonebook_block_phonebook__yKn6D",I=function(){var e=(0,a.v9)(p),n=Boolean(e.length);return(0,m.jsxs)("div",{className:A,children:[(0,m.jsxs)("div",{className:z,children:[(0,m.jsx)("h1",{children:"Phonebook"}),(0,m.jsx)(d,{})]}),(0,m.jsxs)("div",{className:Z,children:[(0,m.jsx)("h1",{children:"Contacts"}),(0,m.jsx)(y,{}),n&&(0,m.jsx)(b,{}),!n&&(0,m.jsx)("p",{children:"No contacts"})]})]})},D=function(){return(0,m.jsx)(I,{})}}}]);
//# sourceMappingURL=912.297b9554.chunk.js.map