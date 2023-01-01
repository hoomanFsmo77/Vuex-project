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
</template>

<script setup>
import {computed, ref} from "vue";
import {useStore} from "vuex";
//////////////////////////////////////
const store=useStore()
const createFlag=computed(()=>store.state.tasks.createFlag)
const title=ref('')
const completed=ref(false)
const createTask = () => {
  store.dispatch('tasks/createAction',{
    title:title,
    completed:completed
  })
}
</script>

<style scoped>

</style>