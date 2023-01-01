<template>
  <div v-if="!fetchFlag" class="position-absolute preloader  flex-row d-flex justify-center align-center bg-white transition">
    <span class="outer">
      <span class="inner"></span>
    </span>
  </div>
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
import {computed} from "vue";
import {useStore} from 'vuex'
/////////////////////////////////////
const store=useStore()
const fetchFlag=computed(()=>store.state.tasks.fetchFlag)


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