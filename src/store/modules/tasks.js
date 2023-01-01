import axios from "axios";
import Swal from "sweetalert2";
export default {
    namespaced:true,
    state:{
        tasks:[],
        fetchFlag:false,
        createFlag:false
    },
    getters:{

    },
    mutations:{
        setTasks(state,payload){
            state.tasks=payload
        },
        setFetchFlag(state,payload){
            state.fetchFlag=payload
        },
        addNewTask(state,payload){
            state.tasks.unshift({
                title:payload.title.value,
                completed:payload.completed.value
            })
        },
        setCreateFlag(state,payload){
            state.createFlag=payload
        }
    },
    actions:{
        taskAction({commit}){
            axios.get('https://jsonplaceholder.typicode.com/todos').then(response=>{
                commit('setTasks',response.data)
                commit('setFetchFlag',true)
            }).catch(err=>{
                commit('setFetchFlag',false)
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'There is a problem, please try again',
                })
            })
        },
        filterAction({commit},payload){
            commit('setFetchFlag',false)
            axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${payload}`).then(response=>{
                commit('setTasks',response.data)
                commit('setFetchFlag',true)
            }).catch(err=>{
                commit('setFetchFlag',false)
            })
        },
        createAction({commit},payload){
            commit('setCreateFlag',true)
            axios.post('https://jsonplaceholder.typicode.com/posts',{
                title:payload.title.value,
                completed:payload.completed.value
            }).then(response=>{
                commit('addNewTask',payload)
                commit('setCreateFlag',false)
                Swal.fire({
                    icon: 'success',
                    title: 'Task Added!',
                })
                payload.title.value=''
                payload.completed.value=''
            }).catch(err=>{
                commit('setCreateFlag',false)
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'There is a problem, please try again',
                })
            })
        }

    }
}