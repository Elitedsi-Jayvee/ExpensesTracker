<script setup>
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTab,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import {  add , barChart , grid } from 'ionicons/icons';
import {RouterLink} from "vue-router";
</script>

<template>
  <ion-tabs>

    <ion-tab >

    </ion-tab>
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="logs" href="/expenses/logs">
        <router-link :to="{ name: 'LogsPage'} ">
          <div class='tab-link'>
            <ion-icon :icon="barChart" class="tab-icon" />
            <ion-label class="tab-label">Logs</ion-label>
          </div>
        </router-link>
      </ion-tab-button>
      <ion-tab-button tab="setup" href="/expenses/setup">
        <router-link :to="{ name: 'SetupPage'} ">
          <div class='tab-link'>
            <ion-icon :icon="add" class="tab-icon" />
            <ion-label class="tab-label">Setup</ion-label>
          </div>
        </router-link>
      </ion-tab-button>
      <ion-tab-button tab="summary" href="/expenses/summary">
        <router-link :to="{ name: 'SummaryPage'} ">
          <div class='tab-link'>
            <ion-icon :icon="grid" class="tab-icon" />
            <ion-label class="tab-label">Summary</ion-label>
          </div>
        </router-link>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<style scoped>


</style>