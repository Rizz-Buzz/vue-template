<template>
  <button class="btn" :class="variant" v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  defineProps<{
    variant?: 'primary' | 'secondary'
  }>()
</script>

<style scoped>
  .btn {
    padding: 0.8rem 1.5rem;
    font-size: 1.1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition:
      transform 0.2s,
      opacity 0.2s;
    border: none;
    font-weight: 500;
    width: 100%;
  }

  .btn:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }

  .primary {
    background: #42b883;
    color: white;
  }

  .secondary {
    background: transparent;
    border: 2px solid #42b883;
    color: #42b883;
  }

  @media (min-width: 640px) {
    .btn {
      width: auto;
    }
  }
</style>
