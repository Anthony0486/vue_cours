<template>
<input type="text" @keyup="displayInput" placeholder="Tappez pour afficher les caractères" class="input input-bordered w-full max-w-xs" />
<p class="py-4"><strong>{{ inputValue1 }}</strong></p>
<input type="text" @keyup.esc="displayInputesc" placeholder="Tappez et appuyez sur Escape" class="input input-bordered w-full max-w-xs" />
<p class="py-4"><strong>{{ inputValue2 }}</strong></p>
<button class="btn btn-primary" @click="showAlert">Alerte</button>
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