export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()

    return {
        provide: {
            api: {
                baseURL: config.public.apiBase
            }
        }
    }
}) 