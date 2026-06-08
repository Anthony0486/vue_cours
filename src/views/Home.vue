<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';


const random = function(){
    let result = Math.random();
    if (result < 0.5){
        return "Inférieur à 0.5";
    } else {
        return "Supérieur à 0.5";
    }
};


</script>

<template>
  <div class="min-h-screen flex flex-col bg-base-200 text-base-content">
        <AppHeader />
    <!-- Conteneur principal du contenu, centré et responsive -->
    <main class="flex-1 mx-auto p-4 md:p-8">
        <div className="card bg-primary text-primary-content w-96 items-center text-center">
          <div className="card-body "></div>
    <h2 className="card-title">Résultat</h2>
    <p>{{ random() }}</p>
    </div>
      <!-- Ici on aura la router view -->
      <router-view></router-view>
      <!-- <RouterView></RouterView> -->
    </main>
    <!-- Footer en bas de la page -->
    <AppFooter />
  </div>
</template>



