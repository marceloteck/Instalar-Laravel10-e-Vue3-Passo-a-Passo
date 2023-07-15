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

// alterar o titulo do site dinamicamente
router.beforeEach((to, from, next) => {
    router.beforeEach((to, from, next) => {
        // Define o título da página com base na meta da rota ou usa um título padrão
        document.title = to.meta.title ? to.meta.title + ' - Meu Site' : 'Meu Site'; 
        next();
      });
    next(); // Define o título da página com base na meta da rota
  });

export default router; 