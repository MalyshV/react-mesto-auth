(this["webpackJsonpreact-mesto"]=this["webpackJsonpreact-mesto"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(18),i=n.n(s),o=(n(29),n(23)),r=n(3),u=n(2),l=c.a.createContext(),d=n.p+"static/media/LogoVector.18b2d300.svg",j=n(8),p=n(0);var h=function(e){return Object(p.jsxs)("header",{className:"header page__container",children:[Object(p.jsx)("img",{className:"header__logo",src:d,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0435\u0440\u0432\u0438\u0441\u0430 Mesto"}),Object(p.jsxs)(u.d,{children:[Object(p.jsx)(u.b,{exact:!0,path:"/",children:Object(p.jsxs)("div",{className:"header__loggedIn",children:[Object(p.jsx)("p",{children:e.email}),Object(p.jsx)(j.b,{className:"page__buttons",to:"/sign-in",onClick:e.handleSignOut,children:"\u0412\u044b\u0439\u0442\u0438"})]})}),Object(p.jsx)(u.b,{path:"/sign-up",children:Object(p.jsx)(j.b,{className:"page__buttons",to:"/sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(p.jsx)(u.b,{path:"/sign-in",children:Object(p.jsx)(j.b,{className:"page__buttons",to:"/sign-up",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]})]})},b=n(12);var m=function(e){var t=Object(a.useContext)(l),n=e.owner._id===t._id,c="".concat(n?"element__delete-button":"element__delete-button_hidden"),s=e.likes.some((function(e){return e._id===t._id})),i="".concat(s?"element__like-button_active":"element__like-button");return Object(p.jsxs)("div",{className:"element",children:[Object(p.jsx)("img",{className:"element__image",src:e.link,alt:e.name,onClick:function(){e.onCardClick(e)}}),Object(p.jsxs)("div",{className:"element__description",children:[Object(p.jsx)("h2",{className:"element__title",children:e.name}),Object(p.jsxs)("div",{className:"element__like-area",children:[Object(p.jsx)("button",{className:i,type:"button",onClick:function(){e.onCardLike(e)}}),Object(p.jsx)("span",{className:"element__like-counter",children:e.likes.length})]}),Object(p.jsx)("button",{className:c,type:"reset",onClick:function(){e.onDeleteButtonClick(e)}})]})]},e.id)};var _=function(e){var t=Object(a.useContext)(l);return Object(p.jsxs)("main",{className:"content page__container",children:[Object(p.jsxs)("section",{className:"profile",children:[Object(p.jsxs)("div",{className:"profile__avatar",children:[Object(p.jsx)("button",{className:"profile__icon page__buttons",onClick:e.onEditAvatar,children:Object(p.jsx)("img",{className:"profile__image",alt:"\u0444\u043e\u0442\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",src:t.avatar})}),Object(p.jsxs)("div",{className:"profile__info",children:[Object(p.jsxs)("div",{className:"profile__change",children:[Object(p.jsx)("h1",{className:"profile__user-name",children:t.name}),Object(p.jsx)("button",{className:"profile__edit-button page__buttons",type:"button",onClick:e.onEditProfile})]}),Object(p.jsx)("p",{className:"profile__user-job",children:t.about})]})]}),Object(p.jsx)("button",{className:"profile__add-button page__buttons",type:"submit",onClick:e.onAddPlaceButtonClick})]}),Object(p.jsx)("section",{className:"elements",children:Object(p.jsx)("div",{className:"elements__list",children:e.cards.map((function(t){return Object(p.jsx)(m,Object(b.a)(Object(b.a)({},t),{},{onCardClick:e.onCardClick,onCardLike:e.onCardLike,onDeleteButtonClick:e.onDeleteButtonClick}),t._id)}))})})]})};var O=function(){var e=new Date;return Object(p.jsx)("footer",{className:"footer page__container",children:Object(p.jsxs)("p",{className:"footer__copyrigth",children:["\xa9 ",e.getFullYear()," Mesto Russia"]})})};var f=function(e){return Object(p.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_is-opened":""),children:Object(p.jsxs)("div",{className:"popup__content popup__content_theme_input",children:[Object(p.jsx)("button",{className:"popup__close page__buttons",type:"button",onClick:e.onClose}),Object(p.jsx)("h2",{className:"popup__title",children:e.title}),Object(p.jsx)("form",{className:"form",action:"#",name:e.name,onSubmit:e.onSubmit,children:Object(p.jsxs)("fieldset",{className:"input-container",children:[e.children,Object(p.jsx)("button",{type:"submit",className:"input-container__button",children:e.textOnButton})]})})]})})};var x=function(e){var t=Object(a.useRef)("");return Object(p.jsxs)(f,{name:"userPhotoForm",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},textOnButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(p.jsx)("input",{id:"url",type:"url",ref:t,className:"input-container__item",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0444\u043e\u0442\u043e",defaultValue:"",tabIndex:"1",required:!0}),Object(p.jsx)("span",{className:"input-container__input-error",id:"url-error"})]})};var g=function(e){return Object(p.jsx)("div",{className:"popup ".concat(e.card.link?"popup_is-opened":""),onClose:e.onClose,children:Object(p.jsxs)("div",{className:"popup__content popup__content_theme_photo",children:[Object(p.jsx)("button",{className:"popup__close page__buttons",type:"button",onClick:e.onClose}),Object(p.jsxs)("figure",{className:"popup__figure",children:[Object(p.jsx)("img",{className:"popup__image",src:e.card.link,alt:e.card.name}),Object(p.jsx)("figcaption",{className:"popup__text",children:e.card.name})]})]})})};var v=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(""),o=Object(r.a)(i,2),u=o[0],d=o[1],j=Object(a.useContext)(l);return Object(a.useEffect)((function(){s(j.name),d(j.about)}),[j]),Object(p.jsxs)(f,{name:"profileForm",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",textOnButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:u})},children:[Object(p.jsx)("input",{id:"username",className:"input-container__item",value:c||"",onChange:function(e){s(e.target.value)},type:"text",name:"name",placeholder:"\u0418\u043c\u044f",tabIndex:"1",minLength:"2",maxLength:"40"}),Object(p.jsx)("span",{className:"input-container__input-error",id:"username-error"}),Object(p.jsx)("input",{id:"job",className:"input-container__item",value:u||"",onChange:function(e){d(e.target.value)},type:"text",name:"about",placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f",tabIndex:"2",minLength:"2",maxLength:"200"}),Object(p.jsx)("span",{className:"input-container__input-error",id:"job-error"})]})};var N=function(e){var t=c.a.useRef(""),n=c.a.useRef("");return Object(p.jsxs)(f,{name:"cardForm",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,textOnButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(a){a.preventDefault(),e.onAddPlace({name:t.current.value,link:n.current.value})},children:[Object(p.jsx)("input",{id:"placename",className:"input-container__item",ref:t,type:"text",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",defaultValue:"",tabIndex:"1",minLength:"2",maxLength:"30",required:!0}),Object(p.jsx)("span",{className:"input-container__input-error",id:"placename-error"}),Object(p.jsx)("input",{id:"urlcard",type:"url",className:"input-container__item",ref:n,name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",defaultValue:"",tabIndex:"2",required:!0}),Object(p.jsx)("span",{className:"input-container__input-error",id:"urlcard-error"})]})};var k=function(e){return Object(p.jsx)(f,{name:"cardDeleteForm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:e.isOpen,onClose:e.onClose,textOnButton:"\u0414\u0430"})},C=n.p+"static/media/wright.f59cf213.svg",y=n.p+"static/media/wrong.ee87805b.svg";var S=function(e){return Object(p.jsx)("div",{className:"popup ".concat(e.isOpen?"popup_is-opened":""),children:Object(p.jsxs)("div",{className:"popup__content popup__content_theme_auth",children:[Object(p.jsx)("button",{className:"popup__close page__buttons",type:"button",onClick:e.onClose}),Object(p.jsx)("img",{className:"popup__icon",src:e.isRegistered?C:y,alt:"\u0441\u0442\u0430\u0442\u0443\u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),Object(p.jsx)("h2",{className:"popup__title popup__title_theme_auth",children:e.isRegistered?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})})};var I=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(""),o=Object(r.a)(i,2),u=o[0],l=o[1];return Object(p.jsxs)("div",{className:"auth",children:[Object(p.jsx)("h1",{className:"auth__title",children:"\u0412\u0445\u043e\u0434"}),Object(p.jsx)("form",{className:"auth__form",onSubmit:function(t){t.preventDefault();var n=c,a=u;e.handleAuthorization(n,a)},children:Object(p.jsxs)("fieldset",{className:"input-container",children:[Object(p.jsx)("input",{id:"email",className:"input-container__item input-container__item_type_dark",required:!0,name:"username",placeholder:"Email",type:"email",tabIndex:"1",onChange:function(e){s(e.target.value)},value:c}),Object(p.jsx)("span",{className:"input-container__input-error",id:"email-error"}),Object(p.jsx)("input",{id:"password",className:"input-container__item input-container__item_type_dark",required:!0,name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",tabIndex:"2",onChange:function(e){l(e.target.value)},value:u}),Object(p.jsx)("span",{className:"input-container__input-error",id:"password-error"}),Object(p.jsx)("button",{type:"submit",className:"input-container__button input-container__button_type_dark",children:"\u0412\u043e\u0439\u0442\u0438"})]})})]})};var U=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(""),o=Object(r.a)(i,2),u=o[0],l=o[1];return Object(p.jsxs)("div",{className:"auth",children:[Object(p.jsx)("h1",{className:"auth__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(p.jsx)("form",{className:"auth__form",onSubmit:function(t){t.preventDefault();var n=c,a=u;e.handleRegistration(n,a)},children:Object(p.jsxs)("fieldset",{className:"input-container",children:[Object(p.jsx)("input",{className:"input-container__item input-container__item_type_dark",required:!0,id:"userEmail",name:"username",placeholder:"Email",type:"email",tabIndex:"1",onChange:function(e){s(e.target.value)},value:c}),Object(p.jsx)("span",{className:"input-container__input-error",id:"userEmail-error"}),Object(p.jsx)("input",{className:"input-container__item input-container__item_type_dark",required:!0,id:"userPassword",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",tabIndex:"2",onChange:function(e){l(e.target.value)},value:u}),Object(p.jsx)("span",{className:"input-container__input-error",id:"userPassword-error"}),Object(p.jsx)("button",{type:"submit",className:"input-container__button input-container__button_type_dark",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})}),Object(p.jsxs)("div",{className:"auth__signup",children:[Object(p.jsx)("p",{children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"}),Object(p.jsx)(j.b,{className:"auth__link",to:"/sing-in",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},w=n(24),E=["component"],P=function(e){var t=e.component,n=Object(w.a)(e,E);return Object(p.jsx)(u.b,{children:function(){return!0===n.isLoggedIn?Object(p.jsx)(t,Object(b.a)({},n)):Object(p.jsx)(u.a,{to:"/log-in"})}})},L=n(21),R=n(22),T=new(function(){function e(t){Object(L.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(R.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"users/me"),{method:"GET",headers:this._headers}).then(this._checkRespons)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkRespons)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkRespons)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"cards"),{method:"GET",headers:this._headers}).then(this._checkRespons)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._baseUrl,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkRespons)}},{key:"removeCard",value:function(e){return fetch("".concat(this._baseUrl,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkRespons)}},{key:"setlike",value:function(e){return fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkRespons)}},{key:"removeLike",value:function(e){return fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkRespons)}},{key:"_checkRespons",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-25/",headers:{authorization:"61426457-aa06-4805-b055-d8aeddd40fb8","Content-Type":"application/json"}}),A="https://auth.nomoreparties.co";var B=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),i=Object(r.a)(s,2),d=i[0],j=i[1],b=Object(a.useState)(!1),m=Object(r.a)(b,2),f=m[0],C=m[1],y=Object(a.useState)(!1),w=Object(r.a)(y,2),E=w[0],L=w[1],R=Object(a.useState)({}),B=Object(r.a)(R,2),D=B[0],F=B[1],q=Object(a.useState)({}),J=Object(r.a)(q,2),z=J[0],V=J[1],G=Object(a.useState)([]),M=Object(r.a)(G,2),H=M[0],Y=M[1],K=Object(a.useState)(!1),Q=Object(r.a)(K,2),W=Q[0],X=Q[1],Z=Object(a.useState)(!1),$=Object(r.a)(Z,2),ee=$[0],te=$[1],ne=Object(a.useState)(""),ae=Object(r.a)(ne,2),ce=ae[0],se=ae[1],ie=Object(u.g)();function oe(){j(!1),C(!1),c(!1),L(!1),F({})}function re(){L(!0)}return Object(a.useEffect)((function(){Promise.all([T.getUserInfo(),T.getInitialCards()]).then((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];V(n),Y(a)})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){var e,t=localStorage.getItem("jwt");t&&(e=t,fetch("".concat(A,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).then((function(e){return e}))).then((function(e){e&&se(e.data.email),X(!0),ie.push("/")})).catch((function(e){console.log(e)}))}),[W,ie]),Object(p.jsx)(l.Provider,{value:z,children:Object(p.jsxs)("div",{className:"page",children:[Object(p.jsx)(h,{email:ce,handleSignOut:function(){localStorage.removeItem("jwt"),ie.push("/sign-in")}}),Object(p.jsxs)(u.d,{children:[Object(p.jsx)(P,{exact:!0,path:"/",component:_,isLoggedIn:W,onEditAvatar:function(){c(!0)},onEditProfile:function(){j(!0)},onAddPlaceButtonClick:function(){C(!0)},onCardClick:function(e){F({name:e.name,link:e.link})},onCardLike:function(e){(e.likes.some((function(e){return e._id===z._id}))?T.removeLike(e._id):T.setlike(e._id)).then((function(t){Y((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))}))},onDeleteButtonClick:function(e){T.removeCard(e._id).then((function(){Y((function(t){return t.filter((function(t){return t._id!==e._id}))})),oe()})).catch((function(e){console.log(e)}))},cards:H}),Object(p.jsx)(u.b,{path:"/sign-up",children:Object(p.jsx)(U,{handleRegistration:function(e,t){(function(e,t){return fetch("".concat(A,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}))})(e,t).then((function(){te(!0),re(),ie.push("/sing-in")})).catch((function(e){te(!1),re(),console.log(e)}))}})}),Object(p.jsx)(u.b,{path:"/sign-in",children:Object(p.jsx)(I,{handleAuthorization:function(e,t){(function(e,t){return fetch("".concat(A,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()})).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),e.token})).catch((function(e){return console.log(e)}))})(e,t).then((function(t){t.token&&localStorage.setItem("jwt",t.token),se(e),X(!0),ie.push("/")})).catch((function(e){console.log(e)}))}})}),Object(p.jsx)(u.b,{path:"/",children:W?Object(p.jsx)(u.a,{to:"/"}):Object(p.jsx)(u.a,{to:"/sign-in"})})]}),Object(p.jsx)(S,{isOpen:E,onClose:oe,isRegistered:ee}),Object(p.jsx)(O,{}),Object(p.jsx)(x,{isOpen:n,onClose:oe,onUpdateAvatar:function(e){T.setUserAvatar(e).then((function(e){V(e),oe()})).catch((function(e){console.log(e)}))}}),Object(p.jsx)(v,{isOpen:d,onClose:oe,onUpdateUser:function(e){T.setUserInfo(e).then((function(e){V(e),oe()})).catch((function(e){console.log(e)}))}}),Object(p.jsx)(N,{isOpen:f,onClose:oe,onAddPlace:function(e){T.addNewCard(e).then((function(e){Y([e].concat(Object(o.a)(H))),oe()})).catch((function(e){console.log(e)}))}}),Object(p.jsx)(g,{card:D,onClose:oe}),Object(p.jsx)(k,{})]})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(j.a,{children:Object(p.jsx)(B,{})})}),document.getElementById("root")),D()}},[[36,1,2]]]);
//# sourceMappingURL=main.7a7a1703.chunk.js.map