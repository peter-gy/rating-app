(this["webpackJsonpecosim-frontend-react"]=this["webpackJsonpecosim-frontend-react"]||[]).push([[0],[,function(e,a,t){e.exports={"rating-controls":"rating-controls_rating-controls__1pfaf","rating-info":"rating-controls_rating-info__23cS4","rated-item-name":"rating-controls_rated-item-name__YsiXO","current-rating":"rating-controls_current-rating__1dSEL","rating-range-wrapper":"rating-controls_rating-range-wrapper__1e1Mc","rating-range-endpoints":"rating-controls_rating-range-endpoints__2m6Hf","rating-range-endpoints-min":"rating-controls_rating-range-endpoints-min__zIiBX","rating-range-endpoints-max":"rating-controls_rating-range-endpoints-max__3gnOI","rating-navigation":"rating-controls_rating-navigation__2kG2U"}},function(e,a,t){e.exports={"app-header":"header_app-header__2noG3","event-data-wrapper":"header_event-data-wrapper__YooyE","event-name":"header_event-name__3XIDJ","user-data-wrapper":"header_user-data-wrapper__wB56H","user-profile-img":"header_user-profile-img__2a7Ov"}},,function(e,a,t){e.exports={"item-card":"item-card_item-card__3rPTm","item-name":"item-card_item-name__1QWX3","item-rating":"item-card_item-rating__gKnub",active:"item-card_active__33hzP"}},,function(e,a,t){e.exports={"main-container":"app_main-container__X-tis","item-card-list-wrapper":"app_item-card-list-wrapper__N1UAR","rating-wrapper":"app_rating-wrapper__w4uid"}},function(e,a,t){e.exports={"rating-stat":"rating-stat_rating-stat__2b6Vb","stat-type":"rating-stat_stat-type__1a_Su","stat-value":"rating-stat_stat-value__3MtG9"}},,,,function(e){e.exports=JSON.parse('{"a":{"status":true,"redirect":null,"msg":null,"data":{"event":{"id":1,"name":"teszt pontoz\xe1s"},"user":{"id":1,"lastName":"T\u0151r\xf6s","firstName":"D\xe1vid","email":"david.toros@ecosim.hu","isLoggedIn":true},"factors":[{"id":1,"name":"Babguly\xe1s","min":1,"max":10,"step":2},{"id":2,"name":"Pacalp\xf6rk\xf6lt","min":1,"max":10,"step":2,"rating":7},{"id":3,"name":"T\xfar\xf3s palacsinta","min":1,"max":5,"step":1},{"id":4,"name":"M\xe1glyarak\xe1s","min":1,"max":5,"step":1,"rating":4},{"id":5,"name":"Csirkep\xf6rk\xf6lt","min":1,"max":10,"step":2},{"id":6,"name":"Nachos","min":1,"max":10,"step":2},{"id":7,"name":"Pizza","min":1,"max":5,"step":1,"rating":5},{"id":8,"name":"Carbonara","min":1,"max":10,"step":2},{"id":9,"name":"Gyros","min":1,"max":5,"step":1}]}}}')},function(e,a,t){e.exports={"item-card-list":"item-card-list_item-card-list__3j38b"}},function(e,a,t){e.exports={"rating-stat-list":"rating-stat-list_rating-stat-list__1D_-E"}},,function(e,a,t){e.exports=t(21)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(10),c=t.n(i),s=(t(20),t(14)),m=t(8),o=t(6),l=t.n(o),u=t(11),p=[{type:"\xe9rt\xe9kelt elemek",evaluatorFn:function(e){return"".concat(g(e).length,"/").concat(e.length)}},{type:"top \xe9rt\xe9kel\xe9s",evaluatorFn:function(e){var a=d(e);return"".concat(a.name,"\n").concat(a.rating,"/").concat(a.max)}},{type:"\xe1tlagos el\xe9gedetts\xe9g",evaluatorFn:function(e){return"".concat(_(e),"%")}}],g=function(e){return e.filter((function(e){return e.rating}))},d=function(e){return g(e).reduce((function(e,a){return e.rating>a.rating?e:a}))},_=function(e){return(100*function(e){return g(e).map((function(e){return e.rating})).reduce((function(e,a){return e+a}))}(e)/function(e){return g(e).map((function(e){return e.max})).reduce((function(e,a){return e+a}))}(e)).toFixed(2)},v=p,f=t(2),E=t.n(f),N=function(e){var a=e.event,t=e.user;return r.a.createElement("div",{className:E.a["app-header"]},r.a.createElement("div",{className:E.a["event-data-wrapper"]},r.a.createElement("h1",{className:E.a["event-name"]},a.name)),r.a.createElement("div",{className:E.a["user-data-wrapper"]},r.a.createElement("img",{className:E.a["user-profile-img"],src:"https://api.adorable.io/avatars/32/".concat(t.lastName+t.firstName,".png"),alt:"Profile of ".concat(t.lastName+" "+t.firstName)}),r.a.createElement("div",null,r.a.createElement("h3",{className:E.a["user-name"]},t.lastName+" "+t.firstName),r.a.createElement("p",{className:E.a["user-email"]},t.email))))},h=t(12),x=t.n(h),w=t(4),k=t.n(w),b=function(e){var a=e.item,t=e.isActive,n=e.onClick;return r.a.createElement("div",{onClick:n,className:"".concat(k.a["item-card"]," ").concat(t?k.a.active:"")},r.a.createElement("h4",{className:k.a["item-name"]},a.name),r.a.createElement("p",{className:k.a["item-rating"]},a.rating?"".concat(a.rating,"/").concat(a.max):"Nincs \xe9rt\xe9kel\xe9s"))},y=function(e){var a=e.items,t=e.activeItemIndex,n=e.setActiveItemIndex,i=e.itemCardListRef;return r.a.createElement("div",{ref:i,className:x.a["item-card-list"]},a.map((function(e,a){return r.a.createElement(b,{key:a,item:e,isActive:a===t,onClick:function(){return n(a)}})})))},I=t(13),O=t.n(I),C=t(7),j=t.n(C),F=function(e){var a=e.type,t=e.value;return r.a.createElement("div",{className:j.a["rating-stat"]},r.a.createElement("h4",{className:j.a["stat-type"]},a),r.a.createElement("p",{className:j.a["stat-value"]},t))},S=function(e){var a=e.items,t=e.statOptions;return r.a.createElement("div",{className:O.a["rating-stat-list"]},t.map((function(e,t){var n=e.type,i=e.evaluatorFn;return r.a.createElement(F,{key:t,type:n,value:i(a)})})))},z=t(1),A=t.n(z),B=function(e){var a=e.activeItem,t=e.navigatorFunctions,n=e.rateItem,i=a.name,c=a.min,s=a.max,m=a.step,o=a.rating;return r.a.createElement("div",{className:A.a["rating-controls"]},r.a.createElement("div",{className:A.a["rating-info"]},r.a.createElement("h1",{className:A.a["rated-item-name"]},i),r.a.createElement("span",{className:A.a["current-rating"]},"".concat(o||"-","/").concat(s))),r.a.createElement("div",{className:A.a["rating-range-wrapper"]},r.a.createElement("span",null,"\xc9rt\xe9kel\xe9si l\xe9pt\xe9k: ",r.a.createElement("span",{className:A.a["rating-range-step"]},m)),r.a.createElement("input",{type:"range",className:A.a["rating-range"],min:c,max:s,step:m,value:o||c,onChange:function(e){return n(+e.target.value)}}),r.a.createElement("div",{className:A.a["rating-range-endpoints"]},r.a.createElement("span",{className:A.a["rating-range-endpoint-min"]},c),r.a.createElement("span",{className:A.a["rating-range-endpoint-max"]},s))),r.a.createElement("div",{className:A.a["rating-navigation"]},r.a.createElement("button",{className:A.a["prev-rating-btn"],onClick:t.prev},r.a.createElement("span",{className:"flip-y"},"\u2794")),r.a.createElement("button",{className:A.a["next-rating-btn"],onClick:t.next},r.a.createElement("span",null,"\u2794"))))},P=u.a.data,X=P.event,G=P.user,J=P.factors;var L=function(){var e=Object(n.useState)(J),a=Object(m.a)(e,2),t=a[0],i=a[1],c=Object(n.useState)(0),o=Object(m.a)(c,2),u=o[0],p=o[1],g=Object(n.useRef)(null);return Object(n.useEffect)((function(){g.current.children[u].scrollIntoView({behavior:"smooth"})}),[u]),r.a.createElement("div",null,r.a.createElement(N,{user:G,event:X}),r.a.createElement("div",{className:l.a["main-container"]},r.a.createElement("div",{className:l.a["item-card-list-wrapper"]},r.a.createElement(y,{items:t,activeItemIndex:u,setActiveItemIndex:p,itemCardListRef:g})),r.a.createElement("div",{className:l.a["rating-wrapper"]},r.a.createElement(S,{items:t,statOptions:v}),r.a.createElement(B,{activeItem:t[u],navigatorFunctions:{prev:function(){return p(0===u?t.length-1:u-1)},next:function(){return p(u===t.length-1?0:u+1)}},rateItem:function(e){var a=Object(s.a)(t);a[u].rating=e,i(a)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.137571de.chunk.js.map