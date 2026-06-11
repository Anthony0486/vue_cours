<script setup>
import { ref } from 'vue';

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    premium: {
        type: Boolean,
        required: false,
        default: false,
    },
});

const emit = defineEmits(['toggle-premium']);
const show = ref(false);

const toggleDisplay = () => {
    show.value = !show.value;
};

const togglePremium = () => {
    emit('toggle-premium', props.id);
};
</script>

<template>
<div :class="{'bg-yellow-200 text-black': premium === true}" class="card bg-base-100 shadow-xl transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl">
 <div class="card-body text-center">
     <button @click="toggleDisplay" class="btn btn-info mx-auto">Afficher les infos</button>
    <h5 class="card-title text-primary">{{ id }}</h5>
    <p :class="show ? '' : 'hidden'">Nom: {{ name }}</p>
    <p :class="show ? '' : 'hidden'">Téléphone: {{ phone }}</p>
    <p :class="show ? '' : 'hidden'">Email: {{ email }}</p>
    <button @click="togglePremium" class="btn btn-secondary mx-auto">Passer en Premium</button>
</div>
</div>
</template>