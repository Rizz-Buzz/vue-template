export default defineNuxtConfig({
    // Basic configuration
    typescript: {
        strict: true
    },

    // Set compatibility date
    compatibilityDate: '2025-02-07',

    // Components configuration - removing d/s path for now
    components: {
        dirs: ['~/components']
    },

    // Development tools
    devtools: { enabled: true },

    // Modules
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss'
    ]
}) 