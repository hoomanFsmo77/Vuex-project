<template>
  <div :class="{'hide op-0':fetchFlag,'visible op-100':!fetchFlag}" class="position-absolute preloader  flex-row d-flex justify-center align-center bg-white transition">
    <v-progress-circular
        :size="70"
        :width="7"
        color="purple"
        indeterminate
    ></v-progress-circular>
  </div>
  <v-container class="pt-10 ">
    <v-row >

      <v-col cols="4" v-for="task in tasks">
        <v-card
            :text="task.title"
            variant="outlined"
            :class="{'bg-brown-lighten-5 text-decoration-line-through':task.completed}"
        ></v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup>
import {computed,ref,onMounted,watch} from "vue";
import {useStore} from 'vuex'
/////////////////////////////////////
const store=useStore()
const tasks=computed(()=>store.state.tasks.tasks)
const fetchFlag=computed(()=>store.state.tasks.fetchFlag)

onMounted(()=>{
  store.dispatch('tasks/taskAction',{filter:199})
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
.visible{
  visibility: visible!important;
}
.hide{
  visibility: hidden!important;
}
.op-0{
  opacity: 0!important;
}
.op-100{
  opacity: 100!important;
}
.transition{
  transition: all 200ms linear;
}
</style>