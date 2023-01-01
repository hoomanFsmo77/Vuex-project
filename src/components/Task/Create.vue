<template>
  <v-row>
    <v-col cols="6">
      <div class="d-flex flex-row align-center">
        <v-form
            class="w-100"
            ref="form"
            v-model="valid"
            lazy-validation
        >
          <div class="d-flex flex-row align-center">
            <v-text-field
                :rules="searchRules"
                v-model="title"
                label="Create Tasks:" variant="underlined"
            ></v-text-field>
          </div>
        </v-form>


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
const valid=ref(true)
const form=ref(null)
const createTask = async () => {
  const { valid } =await form.value.validate()
  if(valid){
    await store.dispatch('tasks/createAction',{
      title:title,
      completed:completed
    })
  }
}
const searchRules =  [
  v => !!v || 'Name is required',
  v => (v && v.length <= 10) || 'Name must be less than 10 characters',
]
</script>

<style scoped>

</style>