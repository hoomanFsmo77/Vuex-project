<template>
  <v-row v-if="fetchFlag" >
    <v-col cols="4" v-for="task in tasks">
      <v-card :class="{'bg-brown-lighten-5 ':task.completed}">
        <template  v-slot:text>
          <div class="d-flex flex-row justify-space-between align-center">
            <span :class="{'text-decoration-line-through':task.completed}">{{task.title}}</span>
            <Update :task="task"/>
          </div>
        </template>
      </v-card>
    </v-col>

  </v-row>

</template>
<script setup>
import {computed,onMounted} from "vue";
import Update from "./Update.vue";
import {useStore} from 'vuex'
/////////////////////////////////////
const store=useStore()
const tasks=computed(()=>store.state.tasks.tasks)
const fetchFlag=computed(()=>store.state.tasks.fetchFlag)


onMounted(()=>{
  store.dispatch('tasks/taskAction')

})



</script>

<style scoped>

</style>