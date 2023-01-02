import {createStore} from "vuex";
import tasks from "./modules/tasks.js";
import products from "./modules/products.js";
import cart from "./modules/cart.js";
const store=createStore({
    modules:{
        tasks,products,cart
    }
})
export default store