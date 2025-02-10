<template>
    <div class="p-8">
        <h1 class="text-4xl font-bold text-center text-white mb-4">Dashboard</h1>
        <p class="text-center text-white mb-8">Welcome to your dashboard</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <!-- Dashboard stats cards -->
            <div class="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <h2 class="text-xl font-bold text-white mb-2">Total Users</h2>
                <p class="text-3xl text-white">1,234</p>
            </div>

            <div class="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <h2 class="text-xl font-bold text-white mb-2">Active Projects</h2>
                <p class="text-3xl text-white">56</p>
            </div>

            <div class="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <h2 class="text-xl font-bold text-white mb-2">Revenue</h2>
                <p class="text-3xl text-white">$45,678</p>
            </div>
        </div>

        <!-- Recent activity table -->
        <div class="bg-white/20 backdrop-blur-sm rounded-lg p-6">
            <h2 class="text-2xl font-bold text-white mb-4">Recent Activity</h2>
            <div class="grid grid-cols-3 gap-4">
                <div class="text-white font-bold">Date</div>
                <div class="text-white font-bold">Action</div>
                <div class="text-white font-bold">Status</div>

                <div class="text-white">Today</div>
                <div class="text-white">New User Registration</div>
                <div class="text-white">Completed</div>

                <div class="text-white">Yesterday</div>
                <div class="text-white">Project Update</div>
                <div class="text-white">In Progress</div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'default'
})
</script>