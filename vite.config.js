import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    base: '/gustavoDoisEmUm/',
    plugins: [react()],
    build: {
        outDir: 'docs',
    },
    server: {
        host: '0.0.0.0',
        port: 3000,
    },
});
