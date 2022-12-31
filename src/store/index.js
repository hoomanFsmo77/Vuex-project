import {createStore} from "vuex";
import tasks from "./modules/tasks.js";

const store=createStore({
    modules:{
        tasks
    }
})
export default store