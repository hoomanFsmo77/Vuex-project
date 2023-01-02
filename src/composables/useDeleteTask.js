import {ref} from "vue";
import {useStore} from "vuex";
export default (props)=>{
    const store=useStore()
    const loading=ref(false)
    const deleteTask = () => {
        loading.value=true
        store.dispatch('tasks/deleteAction',{id:props.task.id,loading:loading})
    }
    return {store,loading,deleteTask}
}