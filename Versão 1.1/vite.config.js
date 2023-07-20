import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            //resources
            '@': 'resources/js',
            '@components': 'resources/js/components',
            '@config': 'resources/js/config',
            '@routes': 'resources/js/routes',
            '@view': 'resources/js/view',
            
            //storage 
            '@storagePath': 'storage/',
        },
      },

});
