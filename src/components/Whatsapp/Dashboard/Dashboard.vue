<template>
  <div class="dashboard app-container ">
    <Sidebar />
    <div class="main-content py-4 pl-4 flex-1">
      <Header />
      <div class="overview">
        <StatsCard title="Contacts" :value="1296" percentage="18" />
        <StatsCard title="Campaigns" :value="212" percentage="18" />
        <StatsCard title="Templates" :value="42" percentage="18" />
        <StatsCard title="All Chats" :value="201" percentage="18" />
      </div>
      <div class="details">
        <Chart />
        <div>
          <SubscriptionPlan />
          <Campaigns /> 
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Importing components
import Sidebar from './Sidebar.vue';
import Header from './Header.vue';

import StatsCard from './StatsCard.vue';
import Chart from './Chart.vue';
import SubscriptionPlan from './SubscriptionPlan.vue';
import Campaigns from './Campaigns.vue';
</script>

<style scoped>
  body {
    background-color: #d5d5d5;
  }
  .app-container {
    width: 95%;
    max-width: 1200px;
    margin: auto;
    border-radius: 20px;
    display: flex;
    height: 98vh;
  }
  
  .sidebar {
    border-radius: 20px;
  }
  .dashboard {
    display: flex;
  }

  .overview {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .details {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
    margin-top: 20px;
  }
</style>
