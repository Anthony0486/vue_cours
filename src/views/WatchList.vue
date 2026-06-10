<script setup>
import { ref } from 'vue';

const filmList = ref([]);
const filmName = ref('');

const addFilm = (film) => {
    filmList.value.push(film);
}
console.log(filmName.value)
</script>

<template>
<div class="p-8 pt-8 flex flex-col  items-center justify-center gap-4 counter-card">
<h1 class="p-8 text-3xl font-bold md:text-4xl">WatchList &#127916</h1>
<p v-if="filmList.length === 0" class="py-4"><strong>Vous n'avez pas encore de film dans votre liste</strong></p>
<p v-else v-for="film in filmList" >{{ film }}</p>
<input type="text" v-model="filmName" placeholder="Tappez le nom du film à ajouter" class="input input-bordered w-full max-w-xs" />
<button @click="addFilm(filmName)" class="btn btn-primary">Ajouter un film</button>

</div>
</template>