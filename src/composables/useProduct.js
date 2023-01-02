import {computed} from "vue";
import {useStore} from "vuex";
import Swal from "sweetalert2";

export default ()=>{
    const store=useStore()
    const products=computed(()=>store.getters["products/products"])
    const addToCart = id => {
        let selectedProduct=computed(()=>store.getters['products/selectedProduct'](id))
        store.commit('cart/addToCart',selectedProduct.value)
        Swal.fire({
            title: "Product Added!",
            icon: "success",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top',
        });
    }
    return {addToCart,products,store}
}