<script setup>
import { ref } from 'vue';
const isDisplayed = ref(true);
const displayTitle = () => {
    isDisplayed.value = !isDisplayed.value;
};

const colorValue = ref('');
const colorInputValue = (event) => {
    if (event.target.value === 'blue'){
        colorValue.value = 'blue'
    }
}
console.log(colorValue.value)

</script>

<template>
    <div class="p-8 pt-8 flex flex-col  items-center justify-center gap-4 counter-card">
<input type="text" @keyup="" placeholder="Tappez 'hello' ou 'world" class="input input-bordered w-full max-w-xs" />
<p class="py-4"><strong>Hello</strong></p>
<input type="text" @keyup="colorInputValue" placeholder="Tappez une couleur" class="input input-bordered w-full max-w-xs" />
<p :style="{color: colorValue}" class="py-4"><strong>World!</strong></p>
<button @click="displayTitle" class="btn btn-primary">Afficher/Cacher le titre</button>
<h1 :class="isDisplayed ? '' : 'hidden'" class="p-8 text-3xl font-bold md:text-4xl">Ceci est un titre</h1>
</div>
</template>

<style scoped lang="css">
.hello {
  background-color: mediumslateblue;
  font-style: italic;
}

.world {
  background-color: chartreuse;
  font-size: large;
}
</style>