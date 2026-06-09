<template>
<input type="text" v-on:keyup="displayInput" placeholder="Tappez pour afficher les caractères" class="input input-bordered w-full max-w-xs" />
<p class="py-4"><strong>{{ inputValue1 }}</strong></p>
<input type="text" v-on:keyup="escapeInput" placeholder="Tappez et appuyez sur Escape" class="input input-bordered w-full max-w-xs" />
<p class="py-4"><strong>{{ inputValue2 }}</strong></p>
<button class="btn btn-primary" v-on:click="showAlert">Alerte</button>
</template>


<script setup>
import { ref } from 'vue';

const inputValue1 = ref("");

const displayInput = function (event) {
    inputValue1.value = event.target.value;
}

const inputValue2 = ref("");
const escapeInput = function (event) {
    if (event.key === "Escape") {
        inputValue2.value = event.target.value;
    }
}

const showAlert = function (event) {
    alert("Alerte Générale!")
}
</script>