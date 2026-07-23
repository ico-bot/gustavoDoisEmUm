import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig(function (_a) {
    var mode = _a.mode;
    var isVizualizacao = mode === 'vizualizacao';
    return {
        base: isVizualizacao ? '/gustavoDoisEmUm/' : '/',
        plugins: [react()],
        build: {
            outDir: isVizualizacao ? 'docs' : 'dist',
        },
        server: {
            host: '0.0.0.0',
            port: 3000,
        },
    };
});
