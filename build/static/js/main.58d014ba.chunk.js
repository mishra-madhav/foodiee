(this["webpackJsonpfoodie-app"]=this["webpackJsonpfoodie-app"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1nTd0",total:"Cart_total__2syR4",actions:"Cart_actions__1heWL","button--alt":"Cart_button--alt__1T7nZ",button:"Cart_button__3h6D9"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1FPgx",summary:"CartItem_summary__3oY_E",price:"CartItem_price__F0jAL",quantity:"CartItem_quantity__28Qnk",actions:"CartItem_actions__3iU99"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__1o0JI",icon:"HeaderCartButton_icon__1gYrM",badge:"HeaderCartButton_badge__1TGcg",bump:"HeaderCartButton_bump__LCOrD"}},,function(e,t,n){e.exports={backdrop:"Modal_backdrop__2_HzA",modal:"Modal_modal__3ty1U","slide-down":"Modal_slide-down__1a1TN"}},function(e,t,n){e.exports={meal:"MealItem_meal__1q1c0",description:"MealItem_description__1_xuW",price:"MealItem_price__3s9Vk"}},,function(e,t,n){e.exports={header:"Header_header__3X3f-","main-image":"Header_main-image__2ixUF"}},,function(e,t,n){e.exports={card:"Card_card__2YZVI"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__WA7NX","meals-appear":"AvailableMeals_meals-appear__7FdEv"}},function(e,t,n){e.exports={input:"Input_input__35sOE"}},function(e,t,n){e.exports={form:"MealItemForm_form__JbxWK"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__2CjxZ"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),i=n.n(a),c=(n(24),n(2)),r=n(1),s=n.n(r),o=n(3),d=Object(r.createContext)({items:[],totalAmount:0,addItem:function(){},removeItem:function(){}}),l=n(10),u=n.n(l),m=n(0),j=function(e){return Object(m.jsx)("div",{className:u.a.backdrop,onClick:e.onHideCart})},b=function(e){return Object(m.jsx)("div",{className:u.a.modal,children:Object(m.jsx)("div",{className:u.a.content,children:e.children})})},x=document.getElementById("overlays"),p=function(e){return Object(m.jsxs)(r.Fragment,{children:[i.a.createPortal(Object(m.jsx)(j,{onHideCart:e.onHideCart}),x),i.a.createPortal(Object(m.jsx)(b,{children:e.children}),x)]})},O=n(4),h=n.n(O),_=n(5),f=n.n(_),v=function(e){var t="\u20b9".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:f.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("div",{className:f.a.summary,children:[Object(m.jsx)("span",{className:f.a.price,children:t}),Object(m.jsxs)("span",{className:f.a.quantity,children:["x ",e.quantity]})]})]}),Object(m.jsxs)("div",{className:f.a.actions,children:[Object(m.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(m.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},C=function(e){var t=Object(r.useContext)(d),n="\u20b9".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,i=function(e){t.addItem(Object(o.a)(Object(o.a)({},e),{},{quantity:1}))},c=function(e){t.removeItem(e)},s=Object(m.jsx)("ul",{className:h.a["cart-items"],children:t.items.map((function(e){return Object(m.jsx)(v,{name:e.name,quantity:e.quantity,price:e.price,onAdd:i.bind(null,e),onRemove:c.bind(null,e.id)},e.id)}))});return Object(m.jsxs)(p,{onHideCart:e.onHideCart,children:[s,Object(m.jsxs)("div",{className:h.a.total,children:[Object(m.jsx)("span",{children:"Total amount"}),Object(m.jsx)("span",{children:n})]}),Object(m.jsxs)("div",{className:h.a.actions,children:[Object(m.jsx)("button",{className:h.a["button--alt"],onClick:e.onHideCart,children:"Close"}),a&&Object(m.jsx)("button",{className:h.a.button,children:"Order"})]})]})},y=n.p+"static/media/meals.2971f633.jpg",N=n(13),g=n.n(N),A=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},I=n(8),H=n.n(I),q=function(e){var t=Object(r.useState)(!1),n=Object(c.a)(t,2),a=n[0],i=n[1],s=Object(r.useContext)(d).items,o=s.reduce((function(e,t){return e+t.quantity}),0);Object(r.useEffect)((function(){i(!0);var e=setTimeout((function(){i(!1)}),300);return function(){clearInterval(e)}}),[s]);var l="".concat(H.a.badge," ").concat(a?H.a.bump:"");return Object(m.jsxs)("button",{onClick:e.onClick,className:H.a.button,children:[Object(m.jsx)("span",{className:H.a.icon,children:Object(m.jsx)(A,{})}),Object(m.jsx)("span",{children:"View Cart"}),Object(m.jsx)("span",{className:l,children:o})]})},w=function(e){return Object(m.jsxs)(r.Fragment,{children:[Object(m.jsxs)("header",{className:g.a.header,children:[Object(m.jsx)("h1",{children:"Foodiee"}),Object(m.jsx)(q,{onClick:e.onShowCart})]}),Object(m.jsx)("div",{className:g.a["main-image"],children:Object(m.jsx)("img",{src:y,alt:"A table full of food!"})})]})},M=n(15),k=n.n(M),F=function(e){return Object(m.jsxs)("div",{className:k.a.card,children:[e.children," "]})},E=n(16),B=n.n(E),R=n(11),S=n.n(R),T=n(17),D=n.n(T),P=s.a.forwardRef((function(e,t){return Object(m.jsxs)("div",{className:D.a.input,children:[Object(m.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(m.jsx)("input",Object(o.a)({ref:t},e.input))]})})),V=n(18),z=n.n(V),J=function(e){var t=Object(r.useState)(!0),n=Object(c.a)(t,2),a=n[0],i=n[1],s=Object(r.useRef)();return Object(m.jsxs)("form",{className:z.a.form,onSubmit:function(t){t.preventDefault();var n=+s.current.value;n<1||n>5?i(!1):e.onAddToCart(n)},children:[Object(m.jsx)(P,{ref:s,label:"Quantity",input:{id:e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(m.jsx)("button",{children:"+ Add"}),!a&&Object(m.jsx)("p",{children:"Please enter a valid quantity (1-5)."})]})},W=function(e){var t=Object(r.useContext)(d),n="\u20b9".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:S.a.meal,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:Object(m.jsx)("h3",{children:e.name})}),Object(m.jsx)("div",{className:S.a.description,children:e.description}),Object(m.jsx)("div",{className:S.a.price,children:n})]}),Object(m.jsx)("div",{children:Object(m.jsx)(J,{onAddToCart:function(n){t.addItem({name:e.name,quantity:n,id:e.id,price:e.price})},id:e.id})})]})},G=[{id:"m1",name:"Butter Panner Masala",description:"Creamy cottegecheese preparation with indian herbs and spices!",price:322.99},{id:"m2",name:"Sushi",description:"Fine fish and veggies!",price:576.5},{id:"m3",name:"Garlic Naan",description:"Authentic indian bread with a hint of sharpness of garlic!",price:102.68},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:498.99}],L=function(){var e=G.map((function(e){return Object(m.jsx)(W,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(m.jsx)("section",{className:B.a.meals,children:Object(m.jsx)(F,{children:Object(m.jsx)("ul",{children:e})})})},U=n(19),Y=n.n(U),Z=function(){return Object(m.jsxs)("section",{className:Y.a.summary,children:[Object(m.jsx)("h2",{children:"Ready to titilate your taste buds? "}),Object(m.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(m.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},Q=function(){return Object(m.jsxs)(r.Fragment,{children:[Object(m.jsx)(Z,{}),Object(m.jsx)(L,{})]})},X=n(14),K={items:[],totalAmount:0},$=function(e,t){if("ADD"===t.type){var n=e.totalAmount+t.item.price*t.item.quantity,a=e.items.findIndex((function(e){return e.id===t.item.id}));if(-1!==a){var i=Object(o.a)(Object(o.a)({},e.items[a]),{},{quantity:e.items[a].quantity+t.item.quantity}),c=Object(X.a)(e.items);return c[a]=i,{items:c,totalAmount:n}}return{items:e.items.concat(t.item),totalAmount:n}}if("REMOVE"===t.type){var r=e.items.find((function(e){return e.id===t.id}));if(r.quantity>1){var s=e.totalAmount-r.price,d=e.items.filter((function(e){return e.id!==t.id}));return{items:[].concat(Object(X.a)(d),[{id:r.id,name:r.name,price:r.price,quantity:r.quantity-1}]),totalAmount:s}}}return K},ee=function(e){var t=Object(r.useReducer)($,K),n=Object(c.a)(t,2),a=n[0],i=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){i({type:"ADD",item:e})},removeItem:function(e){i({type:"REMOVE",id:e})}};return Object(m.jsx)(d.Provider,{value:s,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)(ee,{children:[n&&Object(m.jsx)(C,{onHideCart:function(){a(!1)}}),Object(m.jsx)(w,{onShowCart:function(){a(!0)}}),Object(m.jsx)("main",{children:Object(m.jsx)(Q,{})})]})};i.a.render(Object(m.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.58d014ba.chunk.js.map