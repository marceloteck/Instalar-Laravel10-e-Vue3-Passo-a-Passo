import { rotas } from './generateRoute.js'; 
import * as Routers from '@/routes/importRouters.js';

const { 
    pagina01, menu1, home,
    NotFound, login, register
} = Routers;

const routes = [    
    /* regra da função:  rotas(path, component, name, title, auth), */   
    // menu         
    rotas('/', home, 'index.Home', 'Página Inicial'),
    rotas('/menu1', menu1, 'index.menu1', 'Página do menu1 (Title)'),

    //login e cadastro
    rotas('/login', login, 'login', 'Login', false),
    rotas('/register', register, 'register', 'Cadastrar', false),

    // outras páginas
    rotas('/pagina01', pagina01, 'index.pagina01', 'Pagina 01 aqui (Title)'),

    // Páginas de erros
    rotas('/:catchAll(.*)', NotFound, 'NotFound', 'Página Não Encontrada', false),
];

export default routes;