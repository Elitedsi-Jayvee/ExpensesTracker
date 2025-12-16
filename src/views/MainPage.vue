<script setup>
import {
  IonPage,
  IonRouterOutlet
} from '@ionic/vue';
import BottomNavBar from "@/components/BottomNavBar.vue";

</script>
<template>
  <ion-page>
    <ion-router-outlet></ion-router-outlet>
    <BottomNavBar/>
  </ion-page>
</template>

<style scoped>

</style>