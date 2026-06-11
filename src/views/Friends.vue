<script setup>
import { ref } from 'vue';
import OneFriend from './OneFriend.vue';

const lesAmis = ref([
    {
        id: 'lasticot',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: false
    },
    {
        id: 'lasticot2',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'kimonoSurUnFrigo',
        name: "Steven Seagal",
        phone: '+338765477',
        email: 'steven@seagal.com',
        premium: false
    },
    {
        id: 'yoyoyo',
        name: "JAROD",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: true
    },
    {
        id: 'ok',
        name: "JAROD",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: true
    },
    {
        id: 'GUS',
        name: "GussDX",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: true
    }
]);


const handlePremium = (id) => {
    const ami = lesAmis.value.find((a) => a.id === id);
    if (ami){
        ami.premium = !ami.premium;
    }
}

</script>

<template>
    <div>
            <h1 class="p-8 text-3xl uppercase font-bold md:text-4xl tracking-[0.1em] text-center">Contacts 📞</h1>
<OneFriend
    v-for="ami in lesAmis"
    :key="ami.id"
    :id="ami.id"
    :name="ami.name"
    :phone="ami.phone"
    :email="ami.email"
    :premium="ami.premium"
    @toggle-premium="handlePremium"
/>
</div>

</template>
