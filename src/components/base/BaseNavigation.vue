<template>
  <nav class="nav-menu">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/sample" class="nav-link">Sample Page</router-link>
    <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
  </nav>
</template>

<style scoped>
  .nav-menu {
    position: fixed;
    top: 2rem;
    right: 2rem;
    display: flex;
    gap: 1rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 0.75rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }

  .nav-link {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    transition: background-color 0.2s;
  }

  .nav-link:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .nav-link.router-link-active {
    background: rgba(66, 184, 131, 0.2);
    color: #42b883;
  }

  @media (max-width: 768px) {
    .nav-menu {
      position: fixed;
      bottom: 2rem;
      top: auto;
      left: 50%;
      transform: translateX(-50%);
      right: auto;
    }
  }
</style>
