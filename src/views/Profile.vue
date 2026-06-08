<template>
  <h1 className="text-5xl font-bold">Profil</h1>
<div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img
      v-bind:src="mario"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h1 className="card-title">{{ user.name }}</h1>
    <p>Âge: {{ user.age }}</p>
    <p>Son chiffre favori: {{ fetish() }}</p>
    <p>Son âge dans 10 ans: {{ ageIncrement() }}</p>
    <input type="text" v-bind:value="user.name" className="input input-bordered input-primary w-full max-w-xs" />
    <div className="card-actions justify-end">
    </div>
  </div>
</div>

  <div>
    
    
  </div>
</template>

<script setup lang="js">
import { ref } from "vue";

const mario = '/public/mario.jpg';
const user = {
    name: "Dr. Mario",
    age: 40   
};

const fetish = function () {
    const result = Math.round(Math.random() * 100);
    return result;
};

const ageIncrement = function () {
  const result = user.age + 10;
  return result;
}

</script>

<style scoped lang="css"></style>