// importar paginas do router 
import pendentes      from '@/view/pages/pendentes.vue';
import notificados    from '@/view/pages/notificados.vue';
import faltando_doses from "@/view/pages/faltando_doses.vue";
import sem_doses      from "@/view/pages/sem_doses.vue";
import pageUploud     from "@/view/pages/pageUploud.vue";
import links          from "@/view/pages/links.vue";
// menu
import home           from "@/view/pages/home.vue";
import tools          from "@/view/pages/tools.vue";
import produtores     from "@/view/pages/produtores.vue";
import agenda         from "@/view/pages/agenda.vue";
// páginas de erros
import NotFound       from '@/view/errors/NotFound.vue';
//login e cadstro
import login          from '@/view/login/login.vue';
import register       from '@/view/login/register.vue';

export { 
    pendentes, notificados, faltando_doses, sem_doses, pageUploud,
    home, tools, produtores, agenda,
    NotFound, login, register, links 
}