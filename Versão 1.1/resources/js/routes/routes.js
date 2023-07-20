import { rotas } from './generateRoute.js'; 
import * as Routers from '@/routes/importRouters.js';

const { 
    pendentes, notificados, faltando_doses, sem_doses, pageUploud,
    home, tools, produtores, agenda, NotFound, login, register, links
} = Routers;

const routes = [       
    // menu         path, component, name, title, auth
    rotas('/', home, 'index.Home', 'Página Inicial'),
    rotas('/tools', tools, 'index.tools', 'Página Tools'),
    rotas('/produtores', produtores, 'index.produtores', 'Página Produtores'),
    rotas('/agenda', agenda, 'index.agenda', 'Página Agenda'),

    // Outras páginas
    rotas('/produtores/pendentes', pendentes, 'index.pendentes', 'Pendentes'),
    rotas('/produtores/notificados', notificados, 'index.notificados', 'Notificados'),
    rotas('/produtores/faltando-doses', faltando_doses, 'index.faltando_doses', 'Faltando Doses'),
    rotas('/produtores/sem-doses', sem_doses, 'index.sem_doses', 'Sem Doses'),
    rotas('/uploud-exel', pageUploud, 'index.upExel', 'Upload do Excel'),
    rotas('/tools/links', links, 'tools.links', 'Tools Links'),

    //login e cadastro
    rotas('/login', login, 'login', 'Login', false),
    rotas('/register', register, 'register', 'Cadastrar', false),

    // Páginas de erros
    rotas('/:catchAll(.*)', NotFound, 'NotFound', 'Página Não Encontrada', false),
];

export default routes;