<script setup>
import { ref } from 'vue';

const selectCard1 = ref(false);
const selectCard2 = ref(false);
const selectCard3 = ref(true);

const selectionCard = (card) => {
    if(card === 1){
        selectCard1.value = !selectCard1.value;
    }if (card === 2){
        selectCard2.value = !selectCard2.value;
    }if (card === 3){
        selectCard3.value = !selectCard3.value;
    }
};

</script>

<template>
<div class="p-8 pt-8 flex  items-center justify-center gap-4 counter-card card bg-base-100 shadow-xl">
<h1 class="p-8 text-3xl font-bold md:text-4xl">Color Cards 🎨</h1>
  <div @click="selectionCard(1)" :style="{backgroundColor: selectCard1 ? 'orange' : 'teal'}" class="badge p-5 m-5">
  Card 1
</div>
<div @click="selectionCard(2)" :style="{backgroundColor:  selectCard2 ? 'blue' : 'green'}" class="badge p-5 m-5">
  Card 2
</div>
<div @click="selectionCard(3)" :class="selectCard3 ? 'class1' : 'class2'" class="badge p-5 m-5">
  Card 3
</div>  
</div>  

</template>

<style scoped lang="css">
.class1 {
  background-color: mediumslateblue;
  font-style: italic;
}

.class2 {
  background-color: chartreuse;
  font-size: large;
}
</style>