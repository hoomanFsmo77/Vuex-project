<template>
  <v-row>
    <v-col cols="6">
      <div class="d-flex flex-row align-center">
        <v-text-field
            v-model="title"
            label="Create Tasks:" variant="underlined"
        ></v-text-field>
        <v-btn :loading="createFlag" @click="createTask" color="primary" class="ml-1" >
          Create
        </v-btn>
      </div>
      <v-checkbox v-model="completed" label="Completed"></v-checkbox>
    </v-col>
  </v-row>
  <hr class="my-5 v-divider">
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
import {ref,computed} from "vue";
import {useStore} from "vuex";
////////////////
const store=useStore()
const createFlag=computed(()=>store.state.tasks.createFlag)
const title=ref('')
const completed=ref(false)

const applyFilter = e => {
  store.dispatch('tasks/filterAction',e)
}
const createTask = () => {
  store.dispatch('tasks/createAction',{
    title:title,
    completed:completed
  })
}

</script>

