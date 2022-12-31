import axios from "axios";
import Swal from "sweetalert2";
export default {
    namespaced:true,
    state:{
        tasks:[],
        fetchFlag:false
    },
    getters:{

    },
    mutations:{
        setTasks(state,payload){
            state.tasks=payload
        },
        setFetchFlag(state,payload){
            state.fetchFlag=payload
        }
    },
    actions:{
        taskAction({commit},payload){
            axios.get('https://jsonplaceholder.typicode.com/todos').then(response=>{
                commit('setTasks',response.data.slice(0,payload.filter))
                commit('setFetchFlag',true)
            }).catch(err=>{
                commit('setFetchFlag',false)
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'There is a problem, please try again',
                })
            })
        }
    }
}