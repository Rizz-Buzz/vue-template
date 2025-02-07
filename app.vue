<template>
    <div class="min-h-screen bg-gradient-to-br from-blue-400 via-teal-400 to-emerald-400">
        <nav class="p-4 flex justify-end gap-4 bg-white/10 backdrop-blur-sm">
            <NuxtLink to="/" class="text-white hover:text-emerald-100 font-medium">Home</NuxtLink>
            <NuxtLink to="/sample" class="text-white hover:text-emerald-100 font-medium">Sample Page</NuxtLink>
            <NuxtLink to="/dashboard" class="text-white hover:text-emerald-100 font-medium">Dashboard</NuxtLink>
        </nav>
        <NuxtPage />
    </div>
</template>

<script setup lang="ts">
// Global app setup can go here
</script>

<style>
body {
    margin: 0;
    padding: 0;
}

.router-link-active {
    @apply text-emerald-100 font-bold;
}
</style>