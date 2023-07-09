// importando o vue router
import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm-bundler.js';

// importar paginas do router (Páginas de exemplo)
import login from "./view/pages/login.vue";
import home from "./view/pages/home.vue";
import cadastro from "./view/pages/cadastro.vue";
import NotFound from './view/errors/404.vue';

// Criar instância do roteamento
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: home },
        { path: '/login', component: login },
        { path: '/cadastro', component: cadastro },

        // roteamento para quando a pagina não foi encontrada:
        { path: '/:catchAll(.*)', component: NotFound },
    ],
});

export default router; 