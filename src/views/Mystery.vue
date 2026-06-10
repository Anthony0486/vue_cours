<script setup>
import { ref, watch } from "vue";

const result = ref(0);
const message = ref("");
const mystere = ref(7);
const raz = () => {
  result.value = 0;
};

watch(result, (newValue) => {
  if (newValue > 30) {
    setTimeout(raz, 3000);
  }
});

watch(result, (newValue) => {
  if (newValue > 7) {
    message.value = "Tu as dépassé le nombre mystère";
  } else if (newValue < 7) {
    message.value = "Essaie encore!";
  } else if (newValue === mystere.value) {
    message.value = "Bingo!";
  }
});
</script>
<template>
  <div
    class="p-8 pt-8 flex items-center justify-center gap-4 counter-card card bg-base-100 shadow-xl"
  >
  <h1 class="p-8 text-3xl font-bold md:text-4xl">Nombre Mystère 🔍</h1>
    <button v-on:click="result++" class="btn btn-success">+1</button>
    <button v-on:click="result = result + 5" class="btn btn-error">+5</button>
    <p>{{ result }}</p>
    <p>{{ message }}</p>
  </div>
</template>
