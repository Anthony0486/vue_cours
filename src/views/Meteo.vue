<script setup>
import { onMounted, ref } from 'vue';
const meteoInfo = ref(null);
const meteoError = ref(''); 
const iconUrl = ref('');

onMounted( () => {fetch('https://prevision-meteo.ch/services/json/toulouse')
.then(response => {
    if (!response.ok) {
        throw new Error("HTTP error: " + response.status);
    }
    return response.json();
})
.then(data => {
    meteoInfo.value = data;
    iconUrl.value = data.current_condition?.icon ?? '';
    console.log(meteoInfo.value)
})
.catch((e) => {
    meteoError.value = e.message;
    console.log({errorIs: e});
})}
)

</script>

<template>
<div class="p-8 pt-8 flex  items-center justify-center gap-4 counter-card card bg-base-100 shadow-xl">
<h1 class="p-8 text-3xl uppercase font-bold md:text-4xl tracking-[0.1em]">Météo</h1>
<div v-if="meteoInfo">
<img v-if="iconUrl" :src="iconUrl" alt="Icône météo" class="block mx-auto">
<p><strong class="text-success">Ville : </strong> {{ meteoInfo.city_info?.name }}</p>
<p><strong class="text-success">Conditions actuelles :</strong> {{ meteoInfo.current_condition?.condition }}</p>
<p>🌡️<strong class="text-success">Température max :</strong> {{ meteoInfo.fcst_day_0?.tmax }}°C</p>
<p>🌡️<strong class="text-success">Température min :</strong>{{ meteoInfo.fcst_day_0?.tmin }}°C</p>
<p>🌡️<strong class="text-success">Température actuelle :</strong> {{ meteoInfo.current_condition?.tmp }}°C</p>
</div>
</div>  
</template>