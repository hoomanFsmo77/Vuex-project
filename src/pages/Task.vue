<template>
  <div v-if="!fetchFlag" class="position-absolute preloader  flex-row d-flex justify-center align-center bg-white transition">
    <span class="outer">
      <span class="inner"></span>
    </span>
  </div>
  <v-container  class="pt-10 ">
    <Filter/>
    <v-row v-if="fetchFlag" >
      <v-col cols="4" v-for="task in tasks">
        <v-card :class="{'bg-brown-lighten-5 ':task.completed}">
          <template  v-slot:text>
            <div class="d-flex flex-row justify-space-between align-center">
              <span :class="{'text-decoration-line-through':task.completed}">{{task.title}}</span>
              <v-icon v-if="!task.completed" icon="mdi-check"></v-icon>
              <v-icon v-else icon="mdi-check-all"></v-icon>
            </div>
          </template>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup>
import Filter from "../components/Filter.vue";
import {computed,onMounted} from "vue";
import {useStore} from 'vuex'
/////////////////////////////////////
const store=useStore()
const tasks=computed(()=>store.state.tasks.tasks)
const fetchFlag=computed(()=>store.state.tasks.fetchFlag)

onMounted(()=>{
  store.dispatch('tasks/taskAction')
})

</script>

<style lang="scss">
.preloader{
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 44;
}
.preloader .outer{
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid rgba(96,55,200,0.8);
  position: relative;
}
.preloader .inner{
  display: inline-block;
  position: absolute;
  height: 130px;
  width: 23px;
  right: 33px;
  bottom: -25px;
  background-color: white;
  animation: rotate infinite 1s linear;
}
@keyframes rotate {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}

</style>