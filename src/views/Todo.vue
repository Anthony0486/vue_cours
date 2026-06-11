<script setup>
import { ref } from "vue";

const taskList = ref([]);
const taskValue = ref('');

const addTask = (task) => {
    taskList.value.push(task.trim());
};
const deleteTask = (task) => {
    taskList.value.splice(task, 1)
};
</script>

<template>
  <div class="p-8 pt-8 flex flex-col  items-center justify-center gap-4 counter-card">
    <h1 class="p-8 text-3xl uppercase font-bold md:text-4xl tracking-[0.1em]">Liste des tâches 📝</h1>
    <p v-if="taskList.length === 0" class="py-4"><strong>Vous n'avez pas encore de tâches dans votre liste</strong></p>
    <ul v-else>
<li v-for="task in taskList">
    {{ task }} <i class="cursor-pointer" @click="deleteTask(task)">&#x274C</i>
</li>
</ul>
    <input v-model="taskValue"
      type="text"
      placeholder="Nom de la tâche"
      class="input input-bordered w-full max-w-xs"
    />
    <button @click="addTask(taskValue)" class="btn btn-success">Ajouter une tâche</button>
  </div>
</template>
