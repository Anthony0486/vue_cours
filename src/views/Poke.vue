<script setup>
import { onMounted, ref } from 'vue'

const pokeList = ref([])
const isLoading = ref(false)
const errorMessage = ref('')

const getPokemonId = (pokemonUrl) => {
  const match = pokemonUrl?.match(/\/pokemon\/(\d+)\/?$/)
  return match?.[1] ?? ''
}

const getPokemonImage = (pokemonUrl) => {
  const pokemonId = getPokemonId(pokemonUrl)

  return pokemonId
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
    : ''
}

const loadPokemon = async () => {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }

    const data = await response.json()
    pokeList.value = data.results ?? []
  } catch (error) {
    console.error(error)
    errorMessage.value = 'Impossible de charger les pokemons.'
    pokeList.value = []
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  loadPokemon()
})
</script>

<template>
  <section class="poke mx-auto max-w-7xl px-4 py-8">
    <div class="mb-8 flex items-end justify-between gap-4">
      <div>
        <p class="text-sm uppercase tracking-[0.3em] text-base-content/60">PokeAPI</p>
        <h1 class="p-8 text-3xl uppercase font-bold md:text-4xl tracking-[0.1em]">Pokemon GEN 1</h1>
      </div>
      <div class="badge badge-primary badge-lg">{{ pokeList.length }} résultats</div>
    </div>

    <div v-if="isLoading" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="placeholder in 8" :key="placeholder" class="card bg-base-100 shadow-xl">
        <div class="card-body items-center justify-center py-12">
          <span class="loading loading-spinner loading-lg text-primary"></span>
        </div>
      </div>
    </div>

    <div v-else-if="errorMessage" class="alert alert-error">
      <span>{{ errorMessage }}</span>
    </div>

    <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div
        v-for="pokemon in pokeList"
        :key="pokemon.name"
        class="card bg-base-100 shadow-xl transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl"
      >
        <figure class="bg-base-200 px-8 pt-8">
          <img
            :src="getPokemonImage(pokemon.url)"
            :alt="pokemon.name"
            class="h-28 w-28 object-contain"
            loading="lazy"
          />
        </figure>
        <div class="card-body">
          <div class="flex items-center justify-between gap-2">
            <h2 class="card-title capitalize">{{ pokemon.name }}</h2>
            <span class="badge badge-outline">#{{ getPokemonId(pokemon.url) }}</span>
          </div>
          <p class="text-sm text-base-content/60">
            Sprite officiel récupéré depuis l'ID extrait de l'URL du résultat.
          </p>
          <div class="card-actions justify-end">
            <a :href="pokemon.url" target="_blank" rel="noreferrer" class="btn btn-primary btn-sm">Détails</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>