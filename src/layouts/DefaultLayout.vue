<template>
  <div class="app-container">
    <base-navigation />
    <div class="content-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import BaseNavigation from '@/components/base/BaseNavigation.vue'
</script>

<style scoped>
  .app-container {
    min-height: 100vh;
    background: linear-gradient(135deg, #1a1a1a 0%, #2c3e50 100%);
  }

  .content-wrapper {
    padding: 2rem;
    padding-top: 6rem; /* Add space for fixed navigation */
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    .content-wrapper {
      padding-bottom: 6rem; /* Add space for bottom navigation on mobile */
    }
  }
</style>
