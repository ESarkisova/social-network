(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{295:function(e,a,t){e.exports={dialogs__wrapper:"Dialogs_dialogs__wrapper__2kVSq",dialogs__names:"Dialogs_dialogs__names__wzElR",dialogs__messages:"Dialogs_dialogs__messages__vvCMp",dialogs__avatar:"Dialogs_dialogs__avatar__24aq4"}},299:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(132),r=t(295),l=t.n(r),c=t(14),o=function(e){var a=e.id,t=e.ava,s=e.name;return n.a.createElement("div",null,n.a.createElement(c.b,{to:"/dialogs/"+a,className:l.a.dialogs__nameActive},n.a.createElement("img",{src:t,alt:"ava",className:l.a.dialogs__avatar}),s))},m=function(e){var a=e.text;return n.a.createElement("div",null,n.a.createElement("div",{className:l.a.messageList__from},a))},d=t(133),g=t(18),u=t(42),_=Object(u.a)(50),v=function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit,className:l.a.messageAdd},Object(g.c)("newMessage",g.b,"Enter your text...",[u.b,_]),n.a.createElement("div",null,n.a.createElement("button",null,"Add message")))};v=Object(d.a)({form:"addMessage"})(v);var p=function(e){var a=e.dialogList.map((function(e){var a=e.id,t=e.name,s=e.ava;return n.a.createElement(o,{name:t,key:a,id:a,ava:s})})),t=e.messageList.map((function(e){var a=e.id,t=e.text;return n.a.createElement(m,{text:t,key:a,id:a})}));return n.a.createElement("div",{className:l.a.dialogs__wrapper},n.a.createElement("div",{className:l.a.dialogs__names},n.a.createElement("h2",null,"Names"),n.a.createElement("div",null,a)),n.a.createElement("div",{className:l.a.dialogs__messages},n.a.createElement("div",{className:l.a.messageList},t),n.a.createElement(v,{onSubmit:function(a){e.onAddMessage(a.newMessage)}})))},b=t(12),E=t(29),f=t(30),h=t(32),j=t(31),O=t(33),w=t(36),N=function(e){var a=function(a){function t(){return Object(E.a)(this,t),Object(h.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(O.a)(t,a),Object(f.a)(t,[{key:"render",value:function(){return this.props.auth?n.a.createElement(e,this.props):n.a.createElement(w.a,{to:"/login"})}}]),t}(n.a.Component);return Object(b.b)((function(e){return{auth:e.auth.isAuth}}))(a)},L=t(8);a.default=Object(L.d)(N,Object(b.b)((function(e){return{dialogList:e.dialogsPage.dialogList,messageList:e.dialogsPage.messageList,newMessage:e.dialogsPage.newMessage}}),{onAddMessage:i.b}))(p)}}]);
//# sourceMappingURL=4.111c9dc8.chunk.js.map