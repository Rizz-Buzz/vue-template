<template>
  <div class="stats-card">
    <h3 class="title">{{ title }}</h3>
    <div class="value-container">
      <span class="value">{{ value }}</span>
      <span class="trend" :class="trend">
        {{ trend === 'up' ? '↑' : '↓' }}
        {{ percentage }}%
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    title: string
    value: number
    trend: 'up' | 'down'
    percentage: number
  }>()
</script>

<style scoped>
  .stats-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 1.5rem;
    border-radius: 1rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }

  .title {
    color: #94a3b8;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .value-container {
    display: flex;
    align-items: baseline;
    gap: 1rem;
  }

  .value {
    font-size: 2rem;
    font-weight: bold;
    color: white;
  }

  .trend {
    font-size: 1rem;
    font-weight: 500;
  }

  .trend.up {
    color: #42b883;
  }

  .trend.down {
    color: #ff6b6b;
  }
</style>
