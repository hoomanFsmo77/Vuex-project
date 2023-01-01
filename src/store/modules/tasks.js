import axios from "axios";
import Swal from "sweetalert2";
export default {
    namespaced:true,
    state:{
        tasks:[],
        fetchFlag:false,
        createFlag:false,
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
                id:payload.id,
                title:payload.title,
                completed:payload.completed
            })
        },
        setCreateFlag(state,payload){
            state.createFlag=payload
        },
        updateTask(state,payload){
            state.tasks.filter(task=>task.id===payload.id)[0].completed=payload.completed
        },

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
            axios.post('https://jsonplaceholder.typicode.com/todos',{
                title:payload.title.value,
                completed:payload.completed.value
            }).then(response=>{
                commit('addNewTask',response.data)
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
        },
        updateAction({commit},payload){
            axios.put(`https://jsonplaceholder.typicode.com/todos/${payload.id}`,{
                completed:!payload.completed
            }).then(response=>{
                commit('updateTask',response.data)
                payload.loading.value=false
                Swal.fire({
                    title: "Task Updated",
                    icon: "success",
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 3000,
                    toast: true,
                    position: 'top',
                });
            }).catch(err=>{
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'There is a problem, please try again',
                })
            })
        }

    }
}