
const storeData = data => {
  localStorage.setItem('cart',JSON.stringify(data))
}
const getData = () => {
  return JSON.parse(localStorage.getItem('cart'))
}
export default {
    namespaced:true,
    state:{
        cart:getData() ?? [],
        totalPrice:null
    },
    getters:{
        cartLength(state){
            return state.cart.length
        },
        cart(state){
            return state.cart
        },
        totalPrice(state){
            return state.totalPrice
        },
    },
    mutations:{
        addToCart(state,product){
            state.cart.some(item=>item.id===product.id) || state.cart.push(product)
            storeData(state.cart)
        },
        increaseTotalPrice(state,payload){
            state.totalPrice+=payload.price
            if(payload.id){
                state.cart[state.cart.findIndex(item=>item.id===payload.id)].count=payload.count
            }
            storeData(state.cart)
        },
        decreaseTotalPrice(state,payload){
            state.totalPrice-=payload.price
            if(payload.id){
                state.cart[state.cart.findIndex(item=>item.id===payload.id)].count=payload.count
            }
            storeData(state.cart)
        },
        clearCart(state){
            state.cart=[]
            state.totalPrice=null
            storeData(state.cart)
        },
        deleteProduct(state,payload){
            state.totalPrice-=payload.price * payload.count
            state.cart.splice(state.cart[state.cart.findIndex(item=>item.id===payload.id)]-1,1)
            if(state.cart.length===0){state.totalPrice=null}
            storeData(state.cart)
        },
        updateTotalPrice(state,payload){
            let total=0
            state.cart.forEach(item=>{
                total+=item.price * item.count
            })
            state.totalPrice=total
        }
    }
}