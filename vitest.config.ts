import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

export default defineConfig({
    plugins: [vue()],
    test: {
        environment: 'jsdom',
        globals: true,
        include: ['**/*.test.ts']
    },
    resolve: {
        alias: {
            '~': fileURLToPath(new URL('./', import.meta.url))
        }
    }
}) 