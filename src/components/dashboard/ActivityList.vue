<template>
  <div class="activity-list">
    <h3 class="title">Recent Activity</h3>
    <div class="activities">
      <div v-for="activity in activities" :key="activity.id" class="activity-item">
        <div class="activity-icon" :class="activity.type">
          {{ getActivityIcon(activity.type) }}
        </div>
        <div class="activity-content">
          <p class="description">{{ activity.description }}</p>
          <span class="timestamp">{{ formatTimestamp(activity.timestamp) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Activity } from '@/api/types'

  defineProps<{
    activities: Activity[]
  }>()

  const getActivityIcon = (type: Activity['type']) => {
    const icons = {
      login: '👤',
      update: '✏️',
      create: '➕',
      delete: '🗑️'
    }
    return icons[type]
  }

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString()
  }
</script>

<style scoped>
  .activity-list {
    color: white;
  }

  .title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: white;
  }

  .activities {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .activity-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 0.5rem;
  }

  .activity-icon {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    font-size: 1.2rem;
  }

  .activity-content {
    flex: 1;
  }

  .description {
    color: white;
    margin-bottom: 0.25rem;
  }

  .timestamp {
    font-size: 0.875rem;
    color: #94a3b8;
  }

  .login {
    background: rgba(66, 184, 131, 0.2);
  }
  .update {
    background: rgba(97, 218, 251, 0.2);
  }
  .create {
    background: rgba(139, 92, 246, 0.2);
  }
  .delete {
    background: rgba(255, 107, 107, 0.2);
  }
</style>
