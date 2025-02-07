<template>
    <div class="p-8">
        <h1 class="text-4xl font-bold text-center text-white mb-4">Sample Page</h1>
        <p class="text-center text-white mb-8">This is a template for creating new pages</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div class="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <h2 class="text-2xl font-bold text-white mb-4">Card Example</h2>
                <p class="text-white mb-4">This shows how to structure a card with the RizzBuzz theme</p>
                <button class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                    Action Button
                </button>
            </div>

            <div class="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <h2 class="text-2xl font-bold text-white mb-4">Form Example</h2>
                <div class="mb-4">
                    <label class="block text-white mb-2">Sample Input</label>
                    <input type="text" placeholder="Enter text..."
                        class="w-full bg-white/10 text-white rounded-md px-3 py-2">
                </div>
                <div class="mb-4">
                    <label class="block text-white mb-2">Sample Select</label>
                    <select class="w-full bg-white/10 text-white rounded-md px-3 py-2">
                        <option>Option 1</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="bg-white/20 backdrop-blur-sm rounded-lg p-6">
            <h2 class="text-2xl font-bold text-white mb-4">Table Example</h2>
            <div class="grid grid-cols-3 gap-4">
                <div class="text-white font-bold">Header 1</div>
                <div class="text-white font-bold">Header 2</div>
                <div class="text-white font-bold">Header 3</div>
                <div class="text-white">Data 1</div>
                <div class="text-white">Data 2</div>
                <div class="text-white">Data 3</div>
                <div class="text-white">Data 4</div>
                <div class="text-white">Data 5</div>
                <div class="text-white">Data 6</div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'default'
})
</script>