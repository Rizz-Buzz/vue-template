<template>
  <div class="content">
    <h1 class="title">Welcome to <span class="highlight">RizzBuzz</span></h1>
    <p class="subtitle">Your Gateway to Innovation</p>
    <div class="card">
      <p class="description">
        Discover a world of possibilities with our cutting-edge platform. Start your journey today!
      </p>
      <div class="buttons">
        <router-link to="/dashboard">
          <base-button variant="primary">Get Started</base-button>
        </router-link>
        <router-link to="/sample">
          <base-button variant="secondary">View Sample Page</base-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import BaseButton from '@/components/base/BaseButton.vue'
</script>

<style scoped>
  .content {
    text-align: center;
    max-width: 800px;
  }

  .title {
    font-size: 4rem;
    color: white;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .highlight {
    color: #42b883;
    font-weight: bold;
  }

  .subtitle {
    font-size: 1.5rem;
    color: #94a3b8;
    margin-bottom: 2rem;
  }

  .card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }

  .description {
    color: #e2e8f0;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .buttons a {
    text-decoration: none;
  }

  @media (max-width: 640px) {
    .title {
      font-size: 2.5rem;
    }

    .subtitle {
      font-size: 1.2rem;
    }

    .buttons {
      flex-direction: column;
    }
  }
</style>
