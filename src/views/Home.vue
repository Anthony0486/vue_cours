<script setup>
import { ref } from 'vue';
import { computed } from 'vue';
import EventForm from './EventForm.vue';
import Poke from './Poke.vue';
import Mystery from './Mystery.vue';

// const random = function(){
//     let result = Math.random();
//     if (result < 0.5){
//         return "Inférieur à 0.5";
//     } else {
//         return "Supérieur à 0.5";
//     }
// };

const counter = ref(0);
const increment  = () => {
  counter.value++;
};

const decrement = () => {
  counter.value--;
};
const userName = ref('Marcel');

const showUserName = computed(() => {
  console.log('La fonction user à été exécutée');
  if (userName !== ''){
    console.log('test');
    return userName;
  }else {
    console.log('un autre test');
  }
})



</script>

<template>
  
  <div class="flex  items-center justify-center gap-4 counter-card">
  <button v-on:click="increment" class="btn btn-success">+</button>
  <div class="badge badge-neutral">{{ counter }}</div>
  <button v-on:click="decrement" class="btn btn-error">-</button>
  </div>
  <hr/>
  <div>
    <p>{{ showUserName }}</p>
  </div>
   <hr/>
  <Mystery/>
   <hr/>
  <EventForm />
   <hr/>
  <Poke/>
  <!-- <div class="min-h-screen flex flex-col bg-base-200 text-base-content"> -->
        <!-- <AppHeader /> -->
    <!-- Conteneur principal du contenu, centré et responsive -->
    <!-- <main class="flex-1 mx-auto p-4 md:p-8"> -->
        <!-- <div class="card bg-primary text-primary-content w-96 items-center text-center"> -->
          <!-- <div class="card-body "></div> -->
    <!-- <h2 class="card-title">Résultat</h2> -->
    <!-- <p>{{ random() }}</p> -->
    <!-- </div> -->
      <!-- Ici on aura la router view -->
      <!-- <router-view></router-view> -->
      <!-- <RouterView></RouterView> -->
    <!-- </main> -->
    <!-- Footer en bas de la page -->
    <!-- <AppFooter /> -->
  <!-- </div> -->
</template>



