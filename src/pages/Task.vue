<template>
  <Preloader :loading="!fetchFlag" right="33px" bottom="-25px" o-width="100px" o-height="100px" i-width="23px" i-height="130px"/>
  <v-container  class="pt-10 ">
    <Create/>
    <hr class="my-5 v-divider">
    <Filter/>
    <Show/>
  </v-container>
</template>
<script setup>
import Filter from "../components/Task/Filter.vue";
import Create from "../components/Task/Create.vue";
import Show from "../components/Task/Show.vue";
import Preloader from "../components/preloader.vue";
import {computed} from "vue";
import {useStore} from 'vuex'
/////////////////////////////////////
const store=useStore()
const fetchFlag=computed(()=>store.state.tasks.fetchFlag)


</script>

