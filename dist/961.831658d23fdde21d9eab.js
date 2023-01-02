"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[961],{961:(t,e,r)=>{r.r(e),r.d(e,{default:()=>U});var n=r(252),c=r(262),i=r(577),l=r(894),o=r(455),u=r.n(o);var a={class:"py-5"},s={class:"d-flex"},m=["src"],d={class:"ml-5"},f={class:"text-grey-darken-1"},p={class:"text-1 text-grey-darken-3 mt-2"},_={class:"text-1"},w={class:"mx-3"},v={class:"text-1"};const k={__name:"Show",props:["item"],setup:function(t){var e=function(t){var e=(0,l.oR)(),r=(0,c.iH)(t.item.count);return(0,n.dl)((function(){e.commit("cart/updateTotalPrice")})),{decrease:function(){r.value--,r.value<1?r.value=1:e.commit("cart/decreaseTotalPrice",{count:r.value,price:t.item.price,id:t.item.id}),u().fire({title:"Product Updated!",icon:"success",showConfirmButton:!1,timerProgressBar:!0,timer:3e3,toast:!0,position:"top"})},deleteProduct:function(){e.commit("cart/deleteProduct",{id:t.item.id,price:t.item.price,count:r.value}),u().fire({title:"Product Deleted!",icon:"warning",showConfirmButton:!1,timerProgressBar:!0,timer:3e3,toast:!0,position:"top"})},increase:function(){r.value++,e.commit("cart/increaseTotalPrice",{count:r.value,price:t.item.price,id:t.item.id}),u().fire({title:"Product Updated!",icon:"success",showConfirmButton:!1,timerProgressBar:!0,timer:3e3,toast:!0,position:"top"})},count:r,store:e}}(t),r=(e.store,e.count),o=e.increase,k=e.deleteProduct,g=e.decrease;return function(e,l){var u=(0,n.up)("v-btn");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("td",a,[(0,n._)("div",s,[(0,n._)("img",{width:"100",src:t.item.img,alt:""},null,8,m),(0,n._)("div",d,[(0,n._)("h2",f,(0,i.zw)(t.item.title),1),(0,n._)("p",p,(0,i.zw)(t.item.description),1)])])]),(0,n._)("td",null,[(0,n._)("span",_,(0,i.zw)(t.item.price)+"$",1)]),(0,n._)("td",null,[(0,n.Wm)(u,{onClick:(0,c.SU)(o),icon:"mdi-plus",size:"small",color:"primary"},null,8,["onClick"]),(0,n._)("span",w,(0,i.zw)((0,c.SU)(r)),1),(0,n.Wm)(u,{onClick:(0,c.SU)(g),icon:"mdi-minus",size:"small",color:"primary"},null,8,["onClick"])]),(0,n._)("td",null,[(0,n._)("span",v,(0,i.zw)((0,c.SU)(r)*t.item.price)+"$",1)]),(0,n._)("td",null,[(0,n.Wm)(u,{onClick:(0,c.SU)(k),color:"red"},{default:(0,n.w5)((function(){return[(0,n.Uk)(" Delete ")]})),_:1},8,["onClick"])])],64)}}};var g=(0,n._)("h1",{class:"mb-5"},"Cart is Empty",-1),C=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",{class:"text-left"}," Product "),(0,n._)("th",{class:"text-left"}," Price "),(0,n._)("th",{class:"text-left"}," Quantity "),(0,n._)("th",{class:"text-left"}," Subtotal "),(0,n._)("th",{class:"text-left"}," Action ")])],-1),h=(0,n._)("hr",{class:"v-divider"},null,-1),P={colspan:"3",class:"text-right"},x={class:"text-1"};const U={__name:"Cart",setup:function(t){var e=function(){var t=(0,l.oR)(),e=(0,n.Fl)((function(){return t.getters["cart/cart"]})),r=(0,n.Fl)((function(){return t.getters["cart/totalPrice"]}));return{store:t,cart:e,totalPrice:r,clearCart:function(){t.commit("cart/clearCart"),t.commit("products/reset")}}}(),r=e.clearCart,o=e.totalPrice,u=e.cart,a=e.store;return function(t,e){var l=(0,n.up)("v-icon"),s=(0,n.up)("v-btn"),m=(0,n.up)("router-link"),d=(0,n.up)("v-col"),f=(0,n.up)("v-row"),p=(0,n.up)("v-container"),_=(0,n.up)("v-table");return 0===(0,c.SU)(a).getters["cart/cartLength"]?((0,n.wg)(),(0,n.j4)(p,{key:0},{default:(0,n.w5)((function(){return[(0,n.Wm)(f,{class:"justify-center pt-10"},{default:(0,n.w5)((function(){return[(0,n.Wm)(d,{cols:"5",class:"text-center"},{default:(0,n.w5)((function(){return[(0,n.Wm)(l,{class:"text-lg",icon:"mdi-basket",size:"x-large"}),g,(0,n.Wm)(m,{to:{name:"product"}},{default:(0,n.w5)((function(){return[(0,n.Wm)(s,{variant:"outlined",color:"info"},{default:(0,n.w5)((function(){return[(0,n.Uk)(" Products ")]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})):((0,n.wg)(),(0,n.j4)(p,{key:1},{default:(0,n.w5)((function(){return[(0,n.Wm)(f,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(d,{cols:"12"},{default:(0,n.w5)((function(){return[(0,n.Wm)(_,null,{default:(0,n.w5)((function(){return[C,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,c.SU)(u),(function(t){return(0,n.wg)(),(0,n.iD)("tr",{key:t.id},[(0,n.Wm)(k,{item:t},null,8,["item"])])})),128)),h,(0,n._)("tr",null,[(0,n._)("td",null,[(0,n.Wm)(s,{onClick:(0,c.SU)(r),color:"black"},{default:(0,n.w5)((function(){return[(0,n.Uk)(" Clear Card ")]})),_:1},8,["onClick"])]),(0,n._)("td",P,[(0,n._)("span",x,"Total:"+(0,i.zw)((0,c.SU)(o))+"$",1)]),(0,n._)("td",null,[(0,n.Wm)(s,{color:"green"},{default:(0,n.w5)((function(){return[(0,n.Uk)(" Checkout ")]})),_:1})])])])]})),_:1})]})),_:1})]})),_:1})]})),_:1}))}}}}}]);