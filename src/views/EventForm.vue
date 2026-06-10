<template>
    <div class="p-8 pt-8 flex flex-col  items-center justify-center gap-4 counter-card">
        <h1 class="p-8 text-3xl font-bold md:text-4xl">Events Form⚡</h1>
        <input type="text" @keyup="displayInput" placeholder="Tappez pour afficher les caractères" class="input input-bordered w-full max-w-xs" />
<p class="py-4"><strong>{{ inputValue1 }}</strong></p>
<input type="text" @keyup.esc="displayInputesc" placeholder="Tappez et appuyez sur Escape" class="input input-bordered w-full max-w-xs" />
<p class="py-4"><strong>{{ inputValue2 }}</strong></p>
<button class="btn btn-primary" @click="showAlert">Alerte</button>
</div>
</template>


<script setup>
import { ref } from 'vue';

const inputValue1 = ref("");
const inputValue2 = ref("");


const displayInput = function (event) {
    inputValue1.value = event.target.value;
}
const displayInputesc = function (event) {
    inputValue2.value = event.target.value;
}

const showAlert = function (event) {
    alert("Alerte Générale!")
}
</script>