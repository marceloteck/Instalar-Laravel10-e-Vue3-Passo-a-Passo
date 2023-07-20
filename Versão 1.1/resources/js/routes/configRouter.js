import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm-bundler.js';
import { UseAuthLogin } from '@/config/auth.js';
import isLoadingStore from '../config/isLoadingStore.js'; 
import routes from './routes.js'; // envio das rotas

const router = createRouter({
history: createWebHistory(),
routes: routes, // chamada das rotas
});

// alterar o titulo do site dinamicamente
router.beforeEach(async (to, from, next) => {
    // saber quando a página está carregando
    isLoadingStore.commit('setIsLoading', true);
    // Define o título da página com base na meta da rota ou usa um título padrão
    document.title = to.meta.title ? to.meta.title + ' - Adepará' : 'Adepará'; 

    if(to.meta?.auth){
        const auth = UseAuthLogin();
        if(auth.token && auth.user){
            try {
                const isAuthenticated = await auth.checkToken();
                if(isAuthenticated) { next(); }
                else { next({name: 'login'}); }
                
            } catch (error) {
                console.log('error na rota: ' + error?.response?.data);
            }
        }else{// se !auth.token && auth.user
            next({name: 'login'}); 
        }
    }else{// se !to.meta?.auth
        next(); 
    }
});

router.afterEach(() => {
isLoadingStore.commit('setIsLoading', false); // Define isLoading como false após carregar
});

export default router; 