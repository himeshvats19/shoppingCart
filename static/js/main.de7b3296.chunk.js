(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{33:function(e,t,a){e.exports=a(50)},38:function(e,t,a){},43:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),i=(a(38),a(3)),s=a(4),u=a(5),o=a(6),m=a(13),p=a(14),h=a(7);a(43);function f(e){return{type:"GET_ITEMS",items:e}}var E="https://api.myjson.com/bins/qzuzi";function d(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(n){return fetch(E).then(y).then(j).then((function(r){"lowToHigh"===e?r.sort((function(e,t){return e.price-t.price})):"highToLow"===e?r.sort((function(e,t){return t.price-e.price})):r.sort((function(e,t){return e.discount-t.discount})),r=r.filter((function(e){return e.price<t})),a.length>0&&(r=r.filter((function(e){return e.name.toLowerCase()===a}))),n(f(r))})).catch((function(e){console.log("Request failed",e)}))}}function b(e){return function(t){t(function(e){return{type:"ADD_TO_CART",item:e}}(e))}}function v(e){return function(t){t(function(e){return{type:"REMOVE_FROM_CART",item:e}}(e))}}function O(e){return function(t){t(function(e){return{type:"REDUCE_FROM_CART",item:e}}(e))}}function y(e){return e.status>=200&&e.status<300?Promise.resolve(e):Promise.reject(new Error(e.statusText))}function j(e){return e.json()}var g=a(21),C=a(22),I=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.cartItems,t=0;return e.arr.forEach((function(e){t+=e.quantity})),r.a.createElement("div",{className:"shopping-cart"},r.a.createElement(m.b,{to:{pathname:"/shoppingCart/checkout"}},r.a.createElement(g.a,{icon:C.a}),r.a.createElement("span",{className:"cart-count"},t)))}}]),a}(n.Component);var N=Object(h.b)((function(e){return{cartItems:e.cartItems}}))(I),k=a(23),T=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).searchQuery=function(t){e.setState({searchValue:t.target.value}),e.props.searchQuery(e.state.searchValue)},e.state={searchValue:""},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k.DebounceInput,{type:"text",className:"search-box",placeholder:"Search Items Here(eg: item1, item3)",value:this.state.searchValue,onChange:this.searchQuery,debounceTimeout:300}))}}]),a}(n.Component),F=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).searchQuery=function(t){e.props.searchQuery(t)},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement(m.b,{to:{pathname:"/shoppingCart/"}},r.a.createElement("div",{className:"logo"},r.a.createElement(g.a,{icon:C.b}))),r.a.createElement(T,{searchQuery:this.searchQuery}),r.a.createElement(N,null))}}]),a}(n.Component),R=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).applyFilter=function(){e.props.setFilter(parseInt(e.state.sliderValue))},e.filterValue=function(t){e.setState({sliderValue:t.target.value})},e.state={sliderValue:1e3},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"filter"},r.a.createElement("h4",null,"Filter"),r.a.createElement("span",null,"100"),r.a.createElement(k.DebounceInput,{type:"range",min:"100",max:"1000",value:this.state.sliderValue,step:"1",onChange:this.filterValue,debounceTimeout:300}),r.a.createElement("span",null,"1000"),r.a.createElement("p",null,"Range from 100 to ",this.state.sliderValue),r.a.createElement("button",{onClick:this.applyFilter,className:"btn"},"Apply"))}}]),a}(n.Component),V=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleSort=function(t){e.props.sortBy(t.target.value)},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"sort"},r.a.createElement("span",null,"Sort By"),r.a.createElement("button",{value:"highToLow",onClick:this.handleSort,className:"btn"},"Price -- High -> Low"),r.a.createElement("button",{value:"lowToHigh",onClick:this.handleSort,className:"btn"},"Price -- Low -> High"),r.a.createElement("button",{value:"discount",onClick:this.handleSort,className:"btn"},"Discount"),r.a.createElement("button",{onClick:this.props.clearFilters},"Clear Filters"))}}]),a}(n.Component),w=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).addItemToCart=function(){var t=e.props.item;e.props.dispatch(b(t))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.item;return r.a.createElement("div",null,r.a.createElement("img",{className:"loading",src:e.img_url,alt:e.name}),r.a.createElement("h3",{className:"item-title"},e.name),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"item-price"},"Rs ",parseFloat(e.price-e.price*e.discount/100)," ",r.a.createElement("strike",null,e.price)),r.a.createElement("span",{className:"item-disc"},e.discount,"% Off")),r.a.createElement("button",{className:"btn",onClick:this.addItemToCart},"Add To Cart"))}}]),a}(n.Component),D=Object(h.b)()(w),S=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.items;return r.a.createElement("div",{className:"item-list-container"},r.a.createElement("ul",null,e.length>0?e.map((function(e){return r.a.createElement("li",{className:"item",key:e.id},r.a.createElement(D,{item:e}))})):r.a.createElement("p",null,"Loading...")))}}]),a}(n.Component),A=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).removeItemFromCart=function(){var t=e.props.item;e.props.dispatch(v(t))},e.updateItemsInCart=function(t){var a=e.props.item;"addItem"===t.target.value?e.props.dispatch(b(a)):a.quantity>1?e.props.dispatch(O(a)):e.props.dispatch(v(a))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.item;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:e.img_url,alt:e.name}),r.a.createElement("div",null,r.a.createElement("h3",null,e.name),r.a.createElement("span",null,"Rs ",parseFloat(e.price-e.price*e.discount/100),r.a.createElement("strike",null,e.price),r.a.createElement("span",{className:"discount"},e.discount,"% Off"))),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-edit",value:"addItem",onClick:this.updateItemsInCart},"+"),r.a.createElement("span",null,e.quantity),r.a.createElement("button",{className:"btn btn-edit",value:"subtractItem",onClick:this.updateItemsInCart},"-")),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-remove",onClick:this.removeItemFromCart},"Remove")))}}]),a}(n.Component);var _=Object(h.b)((function(e){return{items:e.items,cartItems:e.cartItems}}))(A),B=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.cartItems;return console.log(e.arr),r.a.createElement("ul",null,e.arr.length>0?e.arr.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(_,{item:e}))})):r.a.createElement("p",null,"Cart Empty!"))}}]),a}(n.Component);var q=Object(h.b)((function(e){return{items:e.items,cartItems:e.cartItems}}))(B),Q=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.cartItems,t=0,a=0,n=0;return e.arr.forEach((function(e){t+=e.price*e.quantity,a+=e.quantity;var r=parseFloat(e.price-e.price*e.discount/100)*e.quantity;n+=r})),r.a.createElement("div",{className:"price-container"},r.a.createElement("h4",null,"PRICE DETAILS"),r.a.createElement("hr",null),r.a.createElement("p",null,"Price:(Item : ",a,") ",r.a.createElement("span",null,"Rs.",t)),r.a.createElement("p",null,"Discount : ",r.a.createElement("span",null,"Rs.",t-n)),r.a.createElement("hr",null),r.a.createElement("p",null,"Total Payble : ",r.a.createElement("span",null,"Rs.",n)))}}]),a}(n.Component);var M=Object(h.b)((function(e){return{cartItems:e.cartItems}}))(Q),x=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).setFilter=function(t){e.setState({filterValue:t}),e.props.dispatch(d(e.state.sortByID,t))},e.setSortedBy=function(t){e.setState({sortByID:t}),e.props.dispatch(d(t,e.state.filterValue))},e.clearFilters=function(){e.setState({sortByID:"lowToHigh",filterValue:1e3}),e.props.dispatch(d("lowToHigh",1e3))},e.searchQuery=function(t){e.setState({searchValue:t}),e.props.dispatch(d(e.state.sortByID,e.state.filterValue,t))},e.state={sortByID:"lowToHigh",filterValue:1e3,searchValue:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(d(this.state.sortByID,this.state.filterValue))}},{key:"render",value:function(){var e=this;return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(p.a,{path:"/shoppingCart",exact:!0,render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{searchQuery:e.searchQuery}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-2"},r.a.createElement(R,{filterValue:e.state.filterValue,setFilter:e.setFilter})),r.a.createElement("div",{className:"col-10"},r.a.createElement(V,{sortBy:e.setSortedBy,clearFilters:e.clearFilters}),r.a.createElement(S,{items:e.props.items}))))}}),r.a.createElement(p.a,{path:"/shoppingCart/checkout",render:function(e){return r.a.createElement("div",{className:"checkout"},r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-10"},r.a.createElement(q,null)),r.a.createElement("div",{className:"col-2"},r.a.createElement(M,null)))))}})))}}]),a}(r.a.Component);var H=Object(h.b)((function(e){return{items:e.items}}))(x),L=a(12),P=a(15);var z=a(18),G={arr:[]};var J=Object(L.c)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ITEMS":return Object(P.a)(t.items);default:return e}},cartItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":return e.arr.includes(t.item)?(e.arr[e.arr.indexOf(t.item)].quantity+=1,Object(z.a)({},e,{arr:Object(P.a)(e.arr)})):(t.item.quantity=1,Object(z.a)({},e,{arr:[].concat(Object(P.a)(e.arr),[t.item])}));case"REMOVE_FROM_CART":return Object(z.a)({},e,{arr:Object(P.a)(e.arr.filter((function(e){return e!==t.item})))});case"REDUCE_FROM_CART":return e.arr[e.arr.indexOf(t.item)].quantity-=1,Object(z.a)({},e,{arr:Object(P.a)(e.arr)});default:return e}}}),U=a(32),K=function(e){return function(t){return function(a){console.group(a.type),console.log("The action: ",a);var n=t(a);return console.log("The new state: ",e.getState()),console.groupEnd(),n}}},W=Object(L.a)(U.a,K),X=Object(L.d)(J,W);l.a.render(r.a.createElement(h.a,{store:X},r.a.createElement(m.a,{basename:"/shoppingCart"},r.a.createElement(H,null))),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.de7b3296.chunk.js.map