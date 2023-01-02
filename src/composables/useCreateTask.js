import {computed, ref} from "vue";
import {useStore} from "vuex";
export default ()=>{
    const store=useStore()
    const createFlag=computed(()=>store.state.tasks.createFlag)
    const title=ref('')
    const completed=ref(false)
    const valid=ref(true)
    const form=ref(null)
    const createTask = async () => {
        const { valid } =await form.value.validate()
        if(valid){
            await store.dispatch('tasks/createAction',{
                title:title,
                completed:completed
            })
        }
    }
    const searchRules =  [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ]

    return {searchRules,store,createTask,form,valid,createFlag,completed,title}
}