<template>
  <v-card rounded="0">
    <v-tabs
        v-model="tab"
        bg-color="primary"
    >
      <router-link :to="{name:'home'}">
        <v-tab value="one">
          Home
        </v-tab>
      </router-link>
      <router-link :to="{name:'task'}">
        <v-tab value="two">
          Tasks
        </v-tab>
      </router-link>
      <router-link :to="{name:'product'}">
        <v-tab value="three">
          product
        </v-tab>
      </router-link>
    </v-tabs>

  </v-card>

</template>

<script setup>
import {ref,onMounted,watch} from "vue";
import {useRoute} from 'vue-router'
//////////////////////
const tab=ref(null)
const route=useRoute()

watch(
    ()=>route.path,
    ()=>{
      tab.value=route.name.includes('home') ? 'one' :route.name.includes('task') ? 'two':'three'
    }
)


</script>

<style scoped>
a{
  color: #fff!important;
}
</style>