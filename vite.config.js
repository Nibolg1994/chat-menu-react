import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [
        react(),
        svgr({
            exportAsDefault: false, // Обязательно!
            svgrOptions: {
                //icon: true,
                // optionally, you can add other SVGR options here
            },
        }),
    ],
});