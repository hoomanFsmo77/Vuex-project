import {useStore} from "vuex";
import {onActivated, ref} from "vue";
import Swal from "sweetalert2";

export default (props)=>{
    const store=useStore()
    const count=ref(props.item.count)
    onActivated(()=>{
        store.commit('cart/updateTotalPrice')
    })

    const increase = () => {
        count.value++
        store.commit('cart/increaseTotalPrice',{count:count.value,price:props.item.price,id:props.item.id})
        Swal.fire({
            title: "Product Updated!",
            icon: "success",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top',
        });
    }

    const decrease = () => {
        count.value--
        if(count.value<1){
            count.value=1
        }else{
            store.commit('cart/decreaseTotalPrice',{count:count.value,price:props.item.price,id:props.item.id})
        }
        Swal.fire({
            title: "Product Updated!",
            icon: "success",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top',
        });
    }
    const deleteProduct = () => {
        store.commit('cart/deleteProduct',
            {
                id:props.item.id,
                price:props.item.price,
                count:count.value
            })
        Swal.fire({
            title: "Product Deleted!",
            icon: "warning",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top',
        });
    }
    return {decrease,deleteProduct,increase,count,store}

}