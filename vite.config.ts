import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    define: {
        'process.env': {},
    },
    plugins: [react()],
    server: {
        port: 8080,
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import '@styles/main.scss';`
            },
        },
    },
    resolve: {
        alias: {
            '@styles': path.resolve(__dirname, 'src/styles'),
        },
    },
});
