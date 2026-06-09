<script>

const pokeList = fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then
(response => response.json()).then
(data => pokeList.value = data);



</script>

<template>
  <div class="poke"></div>
    <h1>Pokemon</h1>
    <p>{{ pokeList.results[0] }}</p>
</template>