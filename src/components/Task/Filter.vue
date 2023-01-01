<template>
  <v-row>
    <v-col cols="2">
      <v-select
          @update:modelValue="applyFilter($event)"
          label="Filter Tasks:"
          :items="[5, 10, 20, 50,199]"
          variant="underlined"
      ></v-select>
    </v-col>
  </v-row>

</template>

<script setup>
import {useStore} from "vuex";
////////////////
const store=useStore()
const applyFilter = e => {
  store.dispatch('tasks/filterAction',e)
}


</script>

