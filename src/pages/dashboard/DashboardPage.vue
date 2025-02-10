<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div class="dashboard-stats">
      <stats-card
        v-for="stat in stats"
        :key="stat.id"
        :title="stat.title"
        :value="stat.value"
        :trend="stat.trend"
      />
    </div>
    <div class="recent-activity">
      <activity-list :activities="recentActivities" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import StatsCard from '@/components/dashboard/StatsCard.vue'
  import ActivityList from '@/components/dashboard/ActivityList.vue'
  import { useStats } from '@/composables/useStats'

  const { stats, recentActivities } = useStats()
</script>

<style scoped>
  .dashboard {
    padding: 2rem;
  }

  .dashboard-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .recent-activity {
    background: white;
    border-radius: 0.5rem;
    padding: 1.5rem;
  }
</style>
