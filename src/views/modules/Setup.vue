<script setup>
import {
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol
} from "@ionic/vue";
import BottomNavBar from "@/components/BottomNavBar.vue";
import {add} from "ionicons/icons";


const count_cards = 20;
</script>

<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Setup</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="container">
        <button type="button" class="add-new-btn btn-secondary">
          <ion-icon :icon="add" class="tab-icon"/>
          ADD NEW SETUP
        </button>
        <div class="card-responsive" >
          <div class="card" v-for="data in count_cards" >
            <div class="header">
              <p>TITLE</p>
            </div>
            <div class="footer">
              <span>Budget: Php 1000</span>
              <div class="btn-group">
                <button class="no-border-btn">UPDATE</button>
                <span>|</span>
                <button class="no-border-btn">START</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>

</template>

<style scoped>
.add-new-btn {
  height: 40px;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: var(--secondary-bg-color);
}

.card .header {
  flex-grow: 1;
}

.header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  padding-bottom: 10px;
}

.header p {
  width: 100%;
  font-size: 2rem;
  text-align: center;
}

.card .footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>