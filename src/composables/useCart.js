import {useStore} from "vuex";
import {computed} from "vue";

export default ()=>{
    const store=useStore()
    const cart=computed(()=>store.getters["cart/cart"])
    const totalPrice=computed(()=>store.getters["cart/totalPrice"])
    const clearCart = () => {
        store.commit('cart/clearCart')
        store.commit('products/reset')
    }
    return {store,cart,totalPrice,clearCart}
}